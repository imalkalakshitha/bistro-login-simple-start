
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-resto-background">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <Logo size="lg" />
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate("/dashboard")}
              className="bg-resto-primary text-white hover:bg-resto-secondary"
            >
              Dashboard
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
              onClick={() => navigate("/dashboard")}
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
        
        {/* Added Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-resto-primary mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-resto-primary">Menu Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Easily create, update and manage your restaurant's menu items with real-time updates and pricing.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-resto-primary">Reservation System</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Handle table reservations efficiently with automated confirmation and reminder notifications.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-resto-primary">Order Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Track orders from receipt to delivery with status updates and kitchen coordination tools.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="py-8 border-t mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo size="sm" />
            <p className="text-sm text-gray-500 mt-4 md:mt-0">© 2025 RestroHub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
