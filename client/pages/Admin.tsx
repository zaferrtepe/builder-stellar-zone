import { useState } from "react";
import {
  BarChart3,
  Users,
  CreditCard,
  Settings,
  Search,
  MapPin,
  Calendar,
  Star,
  TrendingUp,
  Package,
  Wallet,
  Globe,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Activity,
  UserCheck,
  Gift,
  Building,
  Plane,
  Hotel,
  Car,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export default function Admin() {
  const [activeService, setActiveService] = useState("overview");

  // Mock data for dashboard
  const kpiData = {
    totalBookings: 15420,
    totalRevenue: 2456789,
    activeSuppliers: 124,
    loyaltyMembers: 8765,
    conversionRate: 3.2,
    averageOrderValue: 890,
  };

  const recentBookings = [
    {
      id: "BK001",
      customer: "John Smith",
      type: "Flight",
      destination: "New York",
      amount: 450,
      status: "confirmed",
      date: "2024-01-15",
    },
    {
      id: "BK002",
      customer: "Sarah Johnson",
      type: "Hotel",
      destination: "Paris",
      amount: 280,
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: "BK003",
      customer: "Mike Wilson",
      type: "Package",
      destination: "Tokyo",
      amount: 1200,
      status: "confirmed",
      date: "2024-01-14",
    },
  ];

  const supplierData = [
    { name: "AirlineX", type: "Flight", status: "active", bookings: 2456 },
    { name: "HotelChain", type: "Hotel", status: "active", bookings: 1876 },
    { name: "CarRental Pro", type: "Car", status: "inactive", bookings: 567 },
    { name: "TourOperator", type: "Package", status: "active", bookings: 890 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-travel-gradient rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-travel-blue">
                    TravelPro Admin
                  </h1>
                  <p className="text-sm text-gray-500">Platform Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10 w-64" />
              </div>
              <Button size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveService("overview")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "overview"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveService("booking")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "booking"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Search className="w-5 h-5" />
              <span>Booking Engine</span>
            </button>
            <button
              onClick={() => setActiveService("loyalty")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "loyalty"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Star className="w-5 h-5" />
              <span>Loyalty Program</span>
            </button>
            <button
              onClick={() => setActiveService("affiliate")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "affiliate"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Affiliate Marketing</span>
            </button>
            <button
              onClick={() => setActiveService("suppliers")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "suppliers"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Building className="w-5 h-5" />
              <span>Supplier Service</span>
            </button>
            <button
              onClick={() => setActiveService("wallet")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "wallet"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span>Wallet Service</span>
            </button>
            <button
              onClick={() => setActiveService("voucher")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "voucher"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Gift className="w-5 h-5" />
              <span>Voucher Service</span>
            </button>
            <button
              onClick={() => setActiveService("extranet")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeService === "extranet"
                  ? "bg-travel-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Extranet Service</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeService === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-travel-blue mb-2">
                  Platform Overview
                </h2>
                <p className="text-gray-600">
                  Real-time insights into your travel platform performance
                </p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Bookings
                    </CardTitle>
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {kpiData.totalBookings.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${kpiData.totalRevenue.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +8% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Suppliers
                    </CardTitle>
                    <Building className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {kpiData.activeSuppliers}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +3 new this month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Loyalty Members
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {kpiData.loyaltyMembers.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +15% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Conversion Rate
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {kpiData.conversionRate}%
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +0.5% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg Order Value
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${kpiData.averageOrderValue}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +5% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>
                      Latest booking transactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentBookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell className="font-medium">
                              {booking.id}
                            </TableCell>
                            <TableCell>{booking.customer}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                {booking.type === "Flight" && (
                                  <Plane className="w-4 h-4" />
                                )}
                                {booking.type === "Hotel" && (
                                  <Hotel className="w-4 h-4" />
                                )}
                                {booking.type === "Package" && (
                                  <Package className="w-4 h-4" />
                                )}
                                <span>{booking.type}</span>
                              </div>
                            </TableCell>
                            <TableCell>${booking.amount}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  booking.status === "confirmed"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {booking.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Supplier Performance</CardTitle>
                    <CardDescription>
                      Active supplier connections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {supplierData.map((supplier, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                supplier.status === "active"
                                  ? "bg-travel-green"
                                  : "bg-gray-400"
                              }`}
                            ></div>
                            <div>
                              <p className="font-medium">{supplier.name}</p>
                              <p className="text-sm text-gray-500">
                                {supplier.type}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              {supplier.bookings.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-500">bookings</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeService === "booking" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-travel-blue mb-2">
                  Booking Engine Management
                </h2>
                <p className="text-gray-600">
                  Configure search algorithms, inventory settings, and booking
                  flows
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Search Configuration</CardTitle>
                    <CardDescription>
                      Configure search parameters and filters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Default Search Radius (km)
                        </label>
                        <Input defaultValue="50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Max Results Per Page
                        </label>
                        <Input defaultValue="20" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Cache Duration (minutes)
                      </label>
                      <Input defaultValue="15" />
                    </div>
                    <Button className="bg-travel-blue">Update Settings</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Real-time Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-travel-blue">
                        1,247
                      </div>
                      <p className="text-sm text-gray-500">
                        Searches in last hour
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-travel-green">
                        98.7%
                      </div>
                      <p className="text-sm text-gray-500">
                        Search success rate
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-travel-orange">
                        1.2s
                      </div>
                      <p className="text-sm text-gray-500">
                        Average response time
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeService === "loyalty" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-travel-blue mb-2">
                  Loyalty Program Management
                </h2>
                <p className="text-gray-600">
                  Manage membership tiers, rewards, and exclusive benefits
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Membership Tiers</CardTitle>
                    <CardDescription>
                      Configure tier requirements and benefits
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Bronze</h4>
                          <p className="text-sm text-gray-500">
                            0 - 999 points
                          </p>
                        </div>
                        <Badge variant="outline">2,345 members</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-travel-gold/10">
                        <div>
                          <h4 className="font-medium">Gold</h4>
                          <p className="text-sm text-gray-500">
                            1,000 - 4,999 points
                          </p>
                        </div>
                        <Badge className="bg-travel-gold text-travel-blue">
                          1,876 members
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Platinum</h4>
                          <p className="text-sm text-gray-500">5,000+ points</p>
                        </div>
                        <Badge variant="outline">543 members</Badge>
                      </div>
                    </div>
                    <Button className="w-full bg-travel-blue">
                      Configure Tiers
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Points Activity</CardTitle>
                    <CardDescription>
                      Recent points transactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-travel-green/10 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-travel-green" />
                          </div>
                          <div>
                            <p className="font-medium">Booking Completed</p>
                            <p className="text-sm text-gray-500">
                              John Smith - Flight BK001
                            </p>
                          </div>
                        </div>
                        <span className="text-travel-green font-medium">
                          +450 pts
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-travel-orange/10 rounded-full flex items-center justify-center">
                            <Gift className="w-4 h-4 text-travel-orange" />
                          </div>
                          <div>
                            <p className="font-medium">Reward Redeemed</p>
                            <p className="text-sm text-gray-500">
                              Sarah Johnson - Free upgrade
                            </p>
                          </div>
                        </div>
                        <span className="text-travel-orange font-medium">
                          -200 pts
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Placeholder for other services */}
          {["affiliate", "suppliers", "wallet", "voucher", "extranet"].includes(
            activeService,
          ) && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-travel-blue mb-2">
                  {activeService.charAt(0).toUpperCase() +
                    activeService.slice(1)}{" "}
                  Service Management
                </h2>
                <p className="text-gray-600">
                  Configure and manage your{" "}
                  {activeService.charAt(0).toLowerCase() +
                    activeService.slice(1)}{" "}
                  service settings and operations.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Service Configuration</CardTitle>
                  <CardDescription>
                    This service management panel is under development.
                    Configure advanced settings and monitor performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Service Panel Coming Soon
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Advanced configuration options for this service will be
                        available in the next update.
                      </p>
                      <Button variant="outline">Request Feature</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
