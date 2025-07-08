import { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Shield,
  Wallet,
  Gift,
  Settings,
  TrendingUp,
  Globe,
  Zap,
  CheckCircle,
  ChevronRight,
  Plane,
  Hotel,
  Car,
  MapIcon,
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

export default function Index() {
  const [searchType, setSearchType] = useState("flights");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-travel-gradient rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-travel-blue">
                  TravelPro
                </span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-travel-blue transition-colors"
                >
                  Destinations
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-travel-blue transition-colors"
                >
                  Bookings
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-travel-blue transition-colors"
                >
                  Loyalty
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-travel-blue transition-colors"
                >
                  Business
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-travel-gradient hover:bg-travel-blue"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-travel-hero py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to
              <span className="block text-travel-gold">Exceptional Travel</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Enterprise-grade travel platform with loyalty rewards, affiliate
              marketing, and seamless booking experiences across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-white/20 text-white border-white/30">
                Multi-Language
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                Multi-Currency
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                Global Timezone
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                MACH Architecture
              </Badge>
            </div>
          </div>

          {/* Search Widget */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <Tabs
                  value={searchType}
                  onValueChange={setSearchType}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger
                      value="flights"
                      className="flex items-center space-x-2"
                    >
                      <Plane className="w-4 h-4" />
                      <span>Flights</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="hotels"
                      className="flex items-center space-x-2"
                    >
                      <Hotel className="w-4 h-4" />
                      <span>Hotels</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="cars"
                      className="flex items-center space-x-2"
                    >
                      <Car className="w-4 h-4" />
                      <span>Cars</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="packages"
                      className="flex items-center space-x-2"
                    >
                      <MapIcon className="w-4 h-4" />
                      <span>Packages</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="flights" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="From" className="pl-10" />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="To" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Departure" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Passengers" className="pl-10" />
                      </div>
                    </div>
                    <Button className="w-full bg-travel-gradient hover:bg-travel-blue text-lg py-6">
                      <Search className="w-5 h-5 mr-2" />
                      Search Flights
                    </Button>
                  </TabsContent>

                  <TabsContent value="hotels" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Destination" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Check-in" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Guests" className="pl-10" />
                      </div>
                    </div>
                    <Button className="w-full bg-travel-gradient hover:bg-travel-blue text-lg py-6">
                      <Search className="w-5 h-5 mr-2" />
                      Search Hotels
                    </Button>
                  </TabsContent>

                  <TabsContent value="cars" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          placeholder="Pick-up location"
                          className="pl-10"
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Pick-up date" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Return date" className="pl-10" />
                      </div>
                    </div>
                    <Button className="w-full bg-travel-gradient hover:bg-travel-blue text-lg py-6">
                      <Search className="w-5 h-5 mr-2" />
                      Search Cars
                    </Button>
                  </TabsContent>

                  <TabsContent value="packages" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Destination" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Travel date" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input placeholder="Travelers" className="pl-10" />
                      </div>
                    </div>
                    <Button className="w-full bg-travel-gradient hover:bg-travel-blue text-lg py-6">
                      <Search className="w-5 h-5 mr-2" />
                      Search Packages
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-travel-blue mb-4">
              Enterprise Travel Platform Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MACH-based architecture with modular, scalable, and
              extension-friendly services for global travel operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Booking Engine */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-travel-gradient rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Booking Engine</CardTitle>
                <CardDescription>
                  Advanced search and booking capabilities with real-time
                  inventory and dynamic pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Real-time availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Multi-supplier integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Dynamic pricing engine
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-travel-blue group-hover:text-white"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Loyalty Program */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-travel-gradient rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Loyalty Program</CardTitle>
                <CardDescription>
                  Tier-based loyalty system with wallet integration and
                  exclusive member benefits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Tier-based rewards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Digital wallet
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Exclusive member deals
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-travel-blue group-hover:text-white"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Affiliate Marketing */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-travel-gradient rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Affiliate Marketing</CardTitle>
                <CardDescription>
                  Comprehensive affiliate network with tracking, commissions,
                  and performance analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Automated commissions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Real-time analytics
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-travel-blue group-hover:text-white"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Supplier Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-travel-gradient rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Supplier Service</CardTitle>
                <CardDescription>
                  Multi-supplier integration with unified API and content
                  management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Unified API gateway
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Content normalization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Rate management
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-travel-blue group-hover:text-white"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Wallet Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-travel-gradient rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Wallet Service</CardTitle>
                <CardDescription>
                  Digital wallet with multi-currency support and instant
                  transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Multi-currency support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Instant transactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Secure payments
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-travel-blue group-hover:text-white"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Extranet Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-travel-gradient rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Extranet Service</CardTitle>
                <CardDescription>
                  Partner management portal with inventory, pricing, and booking
                  management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Partner dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Inventory management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-travel-green mr-2" />
                    Analytics & reports
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-travel-blue group-hover:text-white"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-travel-blue mb-4">
              MACH Architecture Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on Microservices, API-first, Cloud-native, and Headless
              architecture principles for maximum flexibility and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized performance with global CDN and edge computing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-level security with end-to-end encryption
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
              <p className="text-gray-600">
                Multi-region deployment with 99.99% uptime SLA
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Configurable</h3>
              <p className="text-gray-600">
                Customize every aspect to match your brand and requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-travel-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join leading travel companies using our enterprise-grade platform to
            deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-travel-blue hover:bg-gray-100"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-travel-blue"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-travel-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-travel-gold rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-travel-blue" />
                </div>
                <span className="text-xl font-bold">TravelPro</span>
              </div>
              <p className="text-white/80">
                Enterprise-grade travel platform built on MACH architecture
                principles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Booking Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Loyalty Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Affiliate Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Supplier Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Travel Agencies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tour Operators
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Corporate Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Online Travel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; 2024 TravelPro. All rights reserved. Built with MACH
              Architecture.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
