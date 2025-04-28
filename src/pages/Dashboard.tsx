
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from "recharts";
import { 
  Activity, Box, Clock, FileText, Users, AlertCircle, 
  BarChart2, Calendar, Search, Filter, Bell 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data for charts
const assetAllocationData = [
  { name: "Jan", laptops: 65, desktops: 45, tablets: 30, phones: 25 },
  { name: "Feb", laptops: 70, desktops: 42, tablets: 32, phones: 28 },
  { name: "Mar", laptops: 75, desktops: 40, tablets: 35, phones: 30 },
  { name: "Apr", laptops: 80, desktops: 38, tablets: 38, phones: 32 },
  { name: "May", laptops: 85, desktops: 35, tablets: 40, phones: 35 },
  { name: "Jun", laptops: 90, desktops: 32, tablets: 43, phones: 38 },
];

const requestFulfillmentData = [
  { name: "Jan", approved: 45, pending: 15 },
  { name: "Feb", approved: 50, pending: 12 },
  { name: "Mar", approved: 55, pending: 18 },
  { name: "Apr", approved: 48, pending: 22 },
  { name: "May", approved: 60, pending: 10 },
  { name: "Jun", approved: 65, pending: 8 },
];

const stockLevelData = [
  { name: "Jan", stock: 150 },
  { name: "Feb", stock: 130 },
  { name: "Mar", stock: 110 },
  { name: "Apr", stock: 90 },
  { name: "May", stock: 120 },
  { name: "Jun", stock: 140 },
];

const faultyEquipmentData = [
  { name: "Jan", failures: 12 },
  { name: "Feb", failures: 18 },
  { name: "Mar", failures: 15 },
  { name: "Apr", failures: 10 },
  { name: "May", failures: 8 },
  { name: "Jun", failures: 6 },
];

// Recent activity data
const recentActivity = [
  { type: "login", user: "John Smith", time: "10 minutes ago" },
  { type: "request", description: "Laptop requisition", user: "Sarah Johnson", time: "1 hour ago" },
  { type: "asset", description: "MacBook Pro assigned", user: "Robert Lee", time: "3 hours ago" },
  { type: "ticket", description: "WiFi connectivity issue", user: "Maria Garcia", time: "5 hours ago" },
];

// Notification data
const notifications = [
  { type: "alert", message: "Server maintenance scheduled for tonight", time: "1 hour ago" },
  { type: "approval", message: "5 purchase requests pending approval", time: "3 hours ago" },
  { type: "warning", message: "Printer cartridges running low", time: "5 hours ago" },
  { type: "maintenance", message: "Quarterly workstation maintenance due", time: "1 day ago" },
];

const Dashboard = () => {
  const [dateRange, setDateRange] = useState("This Month");

  const chartConfig = {
    laptops: { label: "Laptops", theme: { light: "#4C51BF", dark: "#6366F1" } },
    desktops: { label: "Desktops", theme: { light: "#38B2AC", dark: "#0D9488" } },
    tablets: { label: "Tablets", theme: { light: "#ED8936", dark: "#F97316" } },
    phones: { label: "Phones", theme: { light: "#667EEA", dark: "#818CF8" } },
    approved: { label: "Approved", theme: { light: "#48BB78", dark: "#22C55E" } },
    pending: { label: "Pending", theme: { light: "#F56565", dark: "#EF4444" } },
    stock: { label: "Stock Level", theme: { light: "#3182CE", dark: "#3B82F6" } },
    failures: { label: "Equipment Failures", theme: { light: "#D69E2E", dark: "#EAB308" } },
  };

  return (
    <div className="flex flex-col p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">IT Management Dashboard</h1>
          <div className="flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Quick Access</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="flex items-center gap-2 p-3 hover:bg-accent rounded-md">
                            <Users size={18} />
                            <span>User Management</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="flex items-center gap-2 p-3 hover:bg-accent rounded-md">
                            <Box size={18} />
                            <span>Asset Inventory</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="flex items-center gap-2 p-3 hover:bg-accent rounded-md">
                            <FileText size={18} />
                            <span>Purchase Requests</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="flex items-center gap-2 p-3 hover:bg-accent rounded-md">
                            <Activity size={18} />
                            <span>Support Tickets</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Logout</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Interactive Widgets */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => setDateRange("This Week")}>
            This Week
          </Button>
          <Button variant="outline" size="sm" onClick={() => setDateRange("This Month")}>
            This Month
          </Button>
          <Button variant="outline" size="sm" onClick={() => setDateRange("This Quarter")}>
            This Quarter
          </Button>
          <span className="text-sm font-medium">Currently viewing: {dateRange}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 w-64" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Key Metrics & KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,542</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+6% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Asset Allocation Over Time */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Asset Allocation Over Time</CardTitle>
            <CardDescription>Distribution of IT assets over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={assetAllocationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="laptops" name="Laptops" stroke="var(--color-laptops, #4C51BF)" strokeWidth={2} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="desktops" name="Desktops" stroke="var(--color-desktops, #38B2AC)" strokeWidth={2} />
                  <Line type="monotone" dataKey="tablets" name="Tablets" stroke="var(--color-tablets, #ED8936)" strokeWidth={2} />
                  <Line type="monotone" dataKey="phones" name="Phones" stroke="var(--color-phones, #667EEA)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Request Fulfillment Rate */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Request Fulfillment Rate</CardTitle>
            <CardDescription>Approved vs. pending requests over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={requestFulfillmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="approved" name="Approved" fill="var(--color-approved, #48BB78)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" name="Pending" fill="var(--color-pending, #F56565)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Stock Level Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stock Level Trends</CardTitle>
            <CardDescription>Inventory changes over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stockLevelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="stock" name="Stock Level" stroke="var(--color-stock, #3182CE)" fill="var(--color-stock, #3182CE)" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Faulty Equipment Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Faulty Equipment Trends</CardTitle>
            <CardDescription>Frequency of equipment failures over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={faultyEquipmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="failures" name="Equipment Failures" stroke="var(--color-failures, #D69E2E)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity & Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {activity.type === "login" ? "User Login" : 
                       activity.type === "request" ? activity.description :
                       activity.type === "asset" ? activity.description :
                       activity.type === "ticket" ? activity.description : ""}
                    </TableCell>
                    <TableCell>{activity.user}</TableCell>
                    <TableCell>{activity.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">View All Activity</Button>
          </CardFooter>
        </Card>

        {/* Notifications & Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications & Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background border">
                  {notification.type === "alert" ? <AlertCircle className="h-5 w-5 text-red-500" /> : 
                   notification.type === "approval" ? <FileText className="h-5 w-5 text-amber-500" /> : 
                   notification.type === "warning" ? <AlertCircle className="h-5 w-5 text-amber-500" /> : 
                   <Calendar className="h-5 w-5 text-blue-500" />}
                  <div>
                    <p className="font-medium">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">View All Notifications</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
