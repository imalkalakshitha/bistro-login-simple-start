
import { ReactNode } from "react";
import Logo from "./Logo";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Background image with overlay */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-resto-primary opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md">
            <Logo size="lg" />
            <h2 className="text-2xl font-bold mt-6 text-resto-primary">Restaurant Management Solution</h2>
            <p className="text-resto-text mt-2">Streamline operations, manage inventory, and provide excellent customer service with our easy-to-use platform.</p>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 bg-resto-background">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:hidden">
            <Logo size="lg" />
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2 text-resto-primary">{title}</h1>
            {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
