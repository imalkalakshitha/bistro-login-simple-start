
import { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to validate credentials
    console.log("Logging in with", email, password);
    
    // Simulating successful login for demo purposes
    setUser({
      id: "1",
      email,
      name: email.split("@")[0],
      role: "manager",
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call to create a new user
    console.log("Signing up with", name, email, password);
    
    // Simulating successful signup for demo purposes
    setUser({
      id: "1",
      email,
      name,
      role: "staff",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
