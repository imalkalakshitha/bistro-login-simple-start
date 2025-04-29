
import { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
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
  // Create a default user for demo purposes since we've removed login functionality
  const [user] = useState<User | null>({
    id: "1",
    email: "demo@restrohub.com",
    name: "Demo User",
    role: "manager",
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: true, // Always authenticated for demo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
