
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, ShoppingBag, Star, TrendingUp, MapPin, Clock, Award, Zap } from "lucide-react";

const VendorDashboard = () => {
  const vendorStats = {
    totalCustomers: 1247,
    todayCustomers: 34,
    totalSales: 15680000, // IDR
    todaySales: 850000, // IDR
    rating: 4.8,
    totalReviews: 156,
    xpGiven: 8340,
    rewardsRedeemed: 89
  };

  const recentCustomers = [
    { id: 1, name: "Budi S.", order: "Satay Ayam x3", xp: 25, time: "5 mins ago", avatar: "👨" },
    { id: 2, name: "Sari W.", order: "Nasi Gudeg + Es Teh", xp: 35, time: "12 mins ago", avatar: "👩" },
    { id: 3, name: "Ahmad R.", order: "Gado-gado", xp: 30, time: "18 mins ago", avatar: "👨" },
    { id: 4, name: "Rina P.", order: "Bakso Special", xp: 40, time: "25 mins ago", avatar: "👩" },
    { id: 5, name: "Deni M.", order: "Satay Kambing x2", xp: 45, time: "32 mins ago", avatar: "👨" }
  ];

  const todayMenu = [
    { id: 1, name: "Satay Ayam", price: 15000, sold: 23, emoji: "🍢" },
    { id: 2, name: "Satay Kambing", price: 20000, sold: 12, emoji: "🍖" },
    { id: 3, name: "Nasi Gudeg", price: 25000, sold: 18, emoji: "🍛" },
    { id: 4, name: "Es Teh Manis", price: 5000, sold: 31, emoji: "🧋" },
    { id: 5, name: "Gado-gado", price: 18000, sold: 15, emoji: "🥗" }
  ];

  const challenges = [
    { id: 1, title: "Sell 50 items today", progress: 34, target: 50, reward: "2x visibility boost" },
    { id: 2, title: "Get 5 new customers", progress: 3, target: 5, reward: "Featured vendor badge" },
    { id: 3, title: "Maintain 4.5+ rating", progress: 4.8, target: 4.5, reward: "Premium listing" }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Vendor Dashboard 📊
        </h2>
        <p className="text-muted-foreground mt-2">
          Manage your street food business and connect with customers!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2" />
            <div className="text-2xl font-bold">{vendorStats.todayCustomers}</div>
            <div className="text-xs opacity-90">Today's Customers</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardContent className="p-4 text-center">
            <ShoppingBag className="w-6 h-6 mx-auto mb-2" />
            <div className="text-2xl font-bold">{formatCurrency(vendorStats.todaySales).replace('IDR', '').trim()}</div>
            <div className="text-xs opacity-90">Today's Sales</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <CardContent className="p-4 text-center">
            <Star className="w-6 h-6 mx-auto mb-2" />
            <div className="text-2xl font-bold">{vendorStats.rating}</div>
            <div className="text-xs opacity-90">Rating ({vendorStats.totalReviews} reviews)</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 mx-auto mb-2" />
            <div className="text-2xl font-bold">{vendorStats.xpGiven}</div>
            <div className="text-xs opacity-90">XP Given to Customers</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Total Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Overall Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Customers</span>
                  <span className="font-bold">{vendorStats.totalCustomers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Sales</span>
                  <span className="font-bold">{formatCurrency(vendorStats.totalSales)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rewards Redeemed</span>
                  <span className="font-bold">{vendorStats.rewardsRedeemed}</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer XP Given</span>
                  <span className="font-bold">{vendorStats.xpGiven} XP</span>
                </div>
              </CardContent>
            </Card>

            {/* Location & Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Cart Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <Badge className="bg-green-500">Open & Serving</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="font-medium">Jl. Malioboro No. 123</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hours Today</span>
                  <span className="font-medium">07:00 - 22:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Queue</span>
                  <span className="text-orange-600 font-medium">3 customers waiting</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500">
                    Update Location
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Clock className="w-4 h-4 mr-2" />
                    Update Hours
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="menu" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Menu Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayMenu.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{formatCurrency(item.price)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{item.sold} sold</div>
                      <div className="text-sm text-muted-foreground">
                        {formatCurrency(item.price * item.sold)} revenue
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500">
                Update Menu & Prices
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentCustomers.map((customer) => (
                  <div key={customer.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{customer.avatar}</span>
                      <div>
                        <h4 className="font-medium">{customer.name}</h4>
                        <p className="text-sm text-muted-foreground">{customer.order}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-orange-600">
                        <Zap className="w-4 h-4" />
                        <span className="font-bold">{customer.xp} XP</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{customer.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                Vendor Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{challenge.title}</h4>
                      <Badge variant="outline">{challenge.reward}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress: {challenge.progress} / {challenge.target}</span>
                      <span className="text-green-600 font-medium">
                        {Math.round((challenge.progress / challenge.target) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${Math.min((challenge.progress / challenge.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VendorDashboard;
