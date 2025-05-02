
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  User, Users, ShoppingBag, Package, BarChart2, 
  MessageSquare, LogOut, Database, 
  Box, FileText, Settings, Search
} from "lucide-react";

// Import sidebar components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Dashboard = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeModule, setActiveModule] = useState("dashboard");
  const navigate = useNavigate();
  
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
      navigate("/");
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
    <SidebarProvider>
      <div className="min-h-screen flex bg-gray-50 w-full">
        {/* Sidebar Navigation */}
        <Sidebar side="left" variant="sidebar">
          <SidebarHeader>
            <div className="px-3 py-2">
              <h2 className="text-xl font-bold">IT Asset Management</h2>
              <p className="text-xs text-muted-foreground">Manage your IT assets efficiently</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Dashboard"
                  isActive={activeModule === "dashboard"}
                  onClick={() => handleNavigation("dashboard")}
                >
                  <BarChart2 className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="User Management"
                  isActive={activeModule === "users"}
                  onClick={() => handleNavigation("users")}
                >
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Purchase & Procurement"
                  isActive={activeModule === "purchases"}
                  onClick={() => handleNavigation("purchases")}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Purchase & Procurement</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Material Requests"
                  isActive={activeModule === "materials"}
                  onClick={() => handleNavigation("materials")}
                >
                  <FileText className="h-5 w-5" />
                  <span>Material Requests</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Stock Management"
                  isActive={activeModule === "stock"}
                  onClick={() => handleNavigation("stock")}
                >
                  <Database className="h-5 w-5" />
                  <span>Stock Management</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Asset Traceability"
                  isActive={activeModule === "assets"}
                  onClick={() => handleNavigation("assets")}
                >
                  <Box className="h-5 w-5" />
                  <span>Asset Traceability</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Chatbot Interface"
                  isActive={activeModule === "chatbot"}
                  onClick={() => handleNavigation("chatbot")}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Chatbot Interface</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-3 py-2">
              <Button 
                onClick={handleLogout} 
                disabled={isLoading} 
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                {isLoading ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <div className="flex items-center">
                <SidebarTrigger className="mr-4" />
                <h1 className="text-2xl font-bold capitalize">{activeModule}</h1>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline" size="icon" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Logout</span>
                </Button>
              </div>
            </div>
          </header>
          
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              {renderModuleContent()}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            User Management
          </CardTitle>
          <CardDescription>Manage system users and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Register users, manage roles, and control access to the system.
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-3">
            <h4 className="text-xs font-semibold text-gray-600">API Endpoints:</h4>
            <ul className="mt-1 text-xs text-gray-500 space-y-1">
              <li>POST /api/users/register</li>
              <li>GET /api/users</li>
              <li>GET /api/users/:id</li>
              <li>PUT /api/users/:id</li>
              <li>DELETE /api/users/:id</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">Access Module</Button>
        </CardFooter>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Purchase & Procurement
          </CardTitle>
          <CardDescription>Track purchase requests and orders</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Create and manage purchase requests for IT assets and equipment.
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-3">
            <h4 className="text-xs font-semibold text-gray-600">API Endpoints:</h4>
            <ul className="mt-1 text-xs text-gray-500 space-y-1">
              <li>POST /api/purchases</li>
              <li>GET /api/purchases</li>
              <li>GET /api/purchases/:id</li>
              <li>PUT /api/purchases/:id</li>
              <li>DELETE /api/purchases/:id</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">Access Module</Button>
        </CardFooter>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Material Requests
          </CardTitle>
          <CardDescription>Handle new-hire equipment requests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Process and approve material requests for new employees.
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-3">
            <h4 className="text-xs font-semibold text-gray-600">API Endpoints:</h4>
            <ul className="mt-1 text-xs text-gray-500 space-y-1">
              <li>POST /api/material-requests</li>
              <li>GET /api/material-requests</li>
              <li>GET /api/material-requests/:id</li>
              <li>PUT /api/material-requests/:id</li>
              <li>DELETE /api/material-requests/:id</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">Access Module</Button>
        </CardFooter>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Stock Management
          </CardTitle>
          <CardDescription>Inventory control system</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Monitor stock levels and manage inventory of IT assets.
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-3">
            <h4 className="text-xs font-semibold text-gray-600">API Endpoints:</h4>
            <ul className="mt-1 text-xs text-gray-500 space-y-1">
              <li>POST /api/stock</li>
              <li>GET /api/stock</li>
              <li>GET /api/stock/:id</li>
              <li>PUT /api/stock/:id</li>
              <li>DELETE /api/stock/:id</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">Access Module</Button>
        </CardFooter>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Box className="h-5 w-5 text-primary" />
            Asset Traceability
          </CardTitle>
          <CardDescription>Track asset movement and history</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Log and monitor the movement and usage of IT assets.
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-3">
            <h4 className="text-xs font-semibold text-gray-600">API Endpoints:</h4>
            <ul className="mt-1 text-xs text-gray-500 space-y-1">
              <li>POST /api/asset-trace</li>
              <li>GET /api/asset-trace</li>
              <li>GET /api/asset-trace/:id</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">Access Module</Button>
        </CardFooter>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Chatbot Interface
          </CardTitle>
          <CardDescription>AI-powered assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Interact with the system using natural language processing.
          </p>
          <div className="mt-4 bg-slate-50 rounded-md p-3">
            <h4 className="text-xs font-semibold text-gray-600">API Endpoints:</h4>
            <ul className="mt-1 text-xs text-gray-500 space-y-1">
              <li>POST /api/chatbot</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">Access Module</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Placeholder Module Components
const UserManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          User Management
        </CardTitle>
        <CardDescription>Manage user accounts and permissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <User className="h-5 w-5 text-yellow-400" />
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
        <p className="text-gray-600">
          This module provides comprehensive user management capabilities, allowing administrators to create
          and manage user accounts with various permission levels.
        </p>
      </CardContent>
    </Card>
  );
};

const PurchaseProcurement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-primary" />
          Purchase & Procurement
        </CardTitle>
        <CardDescription>Manage purchase requests and orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <User className="h-5 w-5 text-yellow-400" />
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
        <p className="text-gray-600">
          The Purchase & Procurement module streamlines the process of requesting and acquiring new IT assets,
          with approval workflows and tracking capabilities.
        </p>
      </CardContent>
    </Card>
  );
};

const MaterialRequests = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Material Requests
        </CardTitle>
        <CardDescription>Handle new-hire equipment requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <User className="h-5 w-5 text-yellow-400" />
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
        <p className="text-gray-600">
          This module simplifies the equipment request process for new employees, ensuring they have all
          necessary IT resources from day one.
        </p>
      </CardContent>
    </Card>
  );
};

const StockManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Stock Management
        </CardTitle>
        <CardDescription>Manage IT asset inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <User className="h-5 w-5 text-yellow-400" />
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
        <p className="text-gray-600">
          The Stock Management module provides real-time visibility into inventory levels and helps
          prevent shortages of critical IT assets.
        </p>
      </CardContent>
    </Card>
  );
};

const AssetTraceability = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Box className="h-5 w-5 text-primary" />
          Asset Traceability
        </CardTitle>
        <CardDescription>Track asset movement and history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <User className="h-5 w-5 text-yellow-400" />
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
        <p className="text-gray-600">
          Asset Traceability provides a complete history of each IT asset, from acquisition through
          deployment, maintenance, and eventual retirement.
        </p>
      </CardContent>
    </Card>
  );
};

const ChatbotInterface = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Chatbot Interface
        </CardTitle>
        <CardDescription>AI-powered assistance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <User className="h-5 w-5 text-yellow-400" />
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
        <p className="text-gray-600">
          The AI-powered chatbot provides instant assistance and information about IT assets and resources,
          helping users find what they need without navigating complex interfaces.
        </p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
