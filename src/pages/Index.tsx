
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Gift, Zap, Award, Users, ShoppingBag } from "lucide-react";
import MapView from "@/components/MapView";
import ChallengeBoard from "@/components/ChallengeBoard";
import RewardStore from "@/components/RewardStore";
import VendorDashboard from "@/components/VendorDashboard";

const Index = () => {
  const [userXP, setUserXP] = useState(1247);
  const [userLevel, setUserLevel] = useState(8);
  const [userPoints, setUserPoints] = useState(350);

  const nextLevelXP = 1500;
  const xpProgress = ((userXP % 200) / 200) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                🍢
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Ayo Jajan
                </h1>
                <p className="text-sm text-muted-foreground">Street Food Adventure</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-full">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-orange-700">{userPoints} pts</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-2 rounded-full">
                <Award className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-purple-700">Level {userLevel}</span>
              </div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress to Level {userLevel + 1}</span>
              <span className="font-medium">{userXP} / {nextLevelXP} XP</span>
            </div>
            <Progress value={xpProgress} className="h-2 bg-orange-100" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="explore" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="explore" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Explore
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Rewards
            </TabsTrigger>
            <TabsTrigger value="vendor" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Vendor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="mt-6">
            <div className="grid gap-6">
              {/* Welcome Card */}
              <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Selamat Jajan! 🎉</h2>
                      <p className="text-orange-100 mb-4">
                        Discover amazing street food near you and earn rewards!
                      </p>
                      <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find Food Carts
                      </Button>
                    </div>
                    <div className="text-6xl">🍱</div>
                  </div>
                </CardContent>
              </Card>

              {/* Map View */}
              <MapView />
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="mt-6">
            <ChallengeBoard userXP={userXP} setUserXP={setUserXP} userPoints={userPoints} setUserPoints={setUserPoints} />
          </TabsContent>

          <TabsContent value="rewards" className="mt-6">
            <RewardStore userPoints={userPoints} setUserPoints={setUserPoints} />
          </TabsContent>

          <TabsContent value="vendor" className="mt-6">
            <VendorDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
