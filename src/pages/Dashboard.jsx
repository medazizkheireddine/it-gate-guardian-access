
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Home, Settings } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeModule, setActiveModule] = useState("dashboard");
  
  // Placeholder function for demonstration
  const handleLogout = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      
      // Redirect to login page
      window.location.href = "/";
      setIsLoading(false);
    }, 1000);
  };
  
  // Function to handle navigation
  const handleNavigation = (module) => {
    setActiveModule(module);
    toast({
      title: `Navigated to ${module}`,
      description: `You are now viewing the ${module} module.`,
    });
  };
  
  // Render the active module content
  const renderModuleContent = () => {
    switch (activeModule) {
      case "users":
        return <UserManagement />;
      case "purchases":
        return <PurchaseProcurement />;
      case "materials":
        return <MaterialRequests />;
      case "stock":
        return <StockManagement />;
      case "assets":
        return <AssetTraceability />;
      case "chatbot":
        return <ChatbotInterface />;
      default:
        return <DashboardOverview />;
    }
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">IT Asset Management</h2>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            <NavItem 
              icon={<Home />} 
              label="Dashboard" 
              active={activeModule === "dashboard"} 
              onClick={() => handleNavigation("dashboard")} 
            />
            <NavItem 
              icon={<User />} 
              label="User Management" 
              active={activeModule === "users"} 
              onClick={() => handleNavigation("users")} 
            />
            <NavItem 
              icon={<Settings />} 
              label="Purchase & Procurement" 
              active={activeModule === "purchases"} 
              onClick={() => handleNavigation("purchases")} 
            />
            <NavItem 
              icon={<Settings />} 
              label="Material Requests" 
              active={activeModule === "materials"} 
              onClick={() => handleNavigation("materials")} 
            />
            <NavItem 
              icon={<Settings />} 
              label="Stock Management" 
              active={activeModule === "stock"} 
              onClick={() => handleNavigation("stock")} 
            />
            <NavItem 
              icon={<Settings />} 
              label="Asset Traceability" 
              active={activeModule === "assets"} 
              onClick={() => handleNavigation("assets")} 
            />
            <NavItem 
              icon={<Settings />} 
              label="Chatbot Interface" 
              active={activeModule === "chatbot"} 
              onClick={() => handleNavigation("chatbot")} 
            />
          </ul>
        </nav>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold capitalize">{activeModule}</h1>
            <Button onClick={handleLogout} disabled={isLoading} variant="outline">
              {isLoading ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {renderModuleContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <li 
      className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-gray-100 text-primary" : "hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage system users and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Register users, manage roles, and control access to the system.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Purchase & Procurement</CardTitle>
          <CardDescription>Track purchase requests and orders</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Create and manage purchase requests for IT assets and equipment.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Material Requests</CardTitle>
          <CardDescription>Handle new-hire equipment requests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Process and approve material requests for new employees.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Stock Management</CardTitle>
          <CardDescription>Inventory control system</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Monitor stock levels and manage inventory of IT assets.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Asset Traceability</CardTitle>
          <CardDescription>Track asset movement and history</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Log and monitor the movement and usage of IT assets.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Chatbot Interface</CardTitle>
          <CardDescription>AI-powered assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Interact with the system using natural language processing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

// Placeholder Module Components
const UserManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>Manage user accounts and permissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Admin Access Only</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This section allows administrators to manage users through the following endpoints:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Register user (POST /api/users/register)</li>
                  <li>Get all users (GET /api/users) - Super-admin only</li>
                  <li>Get user by ID (GET /api/users/:id) - Admin & Super-admin</li>
                  <li>Update user (PUT /api/users/:id) - Admin & Super-admin</li>
                  <li>Delete user (DELETE /api/users/:id) - Super-admin only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">User management functionality will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

const PurchaseProcurement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase & Procurement</CardTitle>
        <CardDescription>Manage purchase requests and orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Admin Access Required</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This section allows managing purchase requests through the following endpoints:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Create purchase request (POST /api/purchases) - Admin only</li>
                  <li>Get all purchase requests (GET /api/purchases)</li>
                  <li>Get purchase by ID (GET /api/purchases/:id)</li>
                  <li>Update purchase request (PUT /api/purchases/:id) - Admin/Super-admin</li>
                  <li>Delete purchase request (DELETE /api/purchases/:id) - Super-admin only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">Purchase and procurement functionality will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

const MaterialRequests = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Material Requests</CardTitle>
        <CardDescription>Handle new-hire equipment requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Authentication Required</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This section allows managing material requests through the following endpoints:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Submit material request (POST /api/material-requests) - Authenticated users</li>
                  <li>Get all material requests (GET /api/material-requests) - Admin only</li>
                  <li>Get request by ID (GET /api/material-requests/:id) - Admin only</li>
                  <li>Update request (PUT /api/material-requests/:id) - Admin only</li>
                  <li>Delete request (DELETE /api/material-requests/:id) - Admin only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">Material requests functionality will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

const StockManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Management</CardTitle>
        <CardDescription>Manage IT asset inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Admin Access Required</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This section allows managing stock through the following endpoints:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Create stock record (POST /api/stock) - Admin only</li>
                  <li>Get all stock records (GET /api/stock)</li>
                  <li>Get stock by ID (GET /api/stock/:id)</li>
                  <li>Update stock record (PUT /api/stock/:id) - Admin only</li>
                  <li>Delete stock record (DELETE /api/stock/:id) - Super-admin only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">Stock management functionality will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

const AssetTraceability = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Traceability</CardTitle>
        <CardDescription>Track asset movement and history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Admin Access Required</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This section allows tracking assets through the following endpoints:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Log asset trace (POST /api/asset-trace) - Admin only</li>
                  <li>Get all trace logs (GET /api/asset-trace) - Admin only</li>
                  <li>Get trace log by ID (GET /api/asset-trace/:id) - Admin only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">Asset traceability functionality will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

const ChatbotInterface = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chatbot Interface</CardTitle>
        <CardDescription>AI-powered assistance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Public Interface</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This section provides access to the chatbot through:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Process NLP query (POST /api/chatbot)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">Chatbot interface functionality will be implemented here.</p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
