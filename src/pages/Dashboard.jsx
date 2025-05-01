
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
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
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">IT Asset Management</h1>
          <Button onClick={handleLogout} disabled={isLoading} variant="outline">
            {isLoading ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <p>Welcome to your IT Asset Management dashboard.</p>
            <p className="mt-4 text-gray-600">This is a placeholder dashboard. Real content will be implemented later.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
