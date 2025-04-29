
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Menu, Calendar, User, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-resto-accent/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 border-b">
          <Logo />
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 text-resto-primary p-2 rounded-md hover:bg-resto-accent">
                <Home size={18} />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-md hover:bg-resto-accent">
                <Menu size={18} />
                <span>Menu Management</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-md hover:bg-resto-accent">
                <Calendar size={18} />
                <span>Reservations</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-md hover:bg-resto-accent">
                <User size={18} />
                <span>Staff</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-600 p-2 rounded-md hover:bg-resto-accent">
                <Settings size={18} />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 w-full justify-start text-gray-600"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <div className="md:hidden">
              <Logo size="sm" />
            </div>
            <h1 className="text-xl font-semibold text-resto-primary hidden md:block">Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-sm">Welcome, {user?.name}</span>
              <Button 
                variant="ghost" 
                className="md:hidden"
                onClick={() => {}}
              >
                <Menu size={20} />
              </Button>
              <Button 
                variant="ghost" 
                className="hidden md:block"
                onClick={handleLogout}
              >
                <LogOut size={18} />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-resto-primary mb-6">Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-700">Daily Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-resto-primary">$1,245</p>
                <p className="text-sm text-gray-500">+12% from yesterday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-700">Today's Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-resto-primary">48</p>
                <p className="text-sm text-gray-500">5 pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-700">Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-resto-primary">12</p>
                <p className="text-sm text-gray-500">For tomorrow</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12345</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$32.50</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12346</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Smith</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$45.20</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Preparing</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
