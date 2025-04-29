
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-resto-background">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <Logo size="lg" />
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate("/login")}
              className="border-resto-primary text-resto-primary hover:bg-resto-primary hover:text-white"
            >
              Log In
            </Button>
            <Button 
              onClick={() => navigate("/signup")}
              className="bg-resto-primary text-white hover:bg-resto-secondary"
            >
              Sign Up
            </Button>
          </div>
        </header>

        <main className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-resto-primary mb-4">Manage Your Restaurant With Ease</h1>
            <p className="text-lg text-resto-text mb-8">
              Simplify operations, increase efficiency, and deliver exceptional service with our restaurant management system.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-resto-primary text-white hover:bg-resto-secondary"
            >
              Get Started
            </Button>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                alt="Restaurant Management" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
