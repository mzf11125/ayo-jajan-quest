
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
    <div className="min-h-screen bg-background">
      {/* Header - Simplified like user's design */}
      <header className="bg-card border-b-4 border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center text-2xl pixel-shadow">
                🚚
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Ayo Jajan
                </h1>
                <p className="text-sm text-muted-foreground">Street Food Adventure</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-secondary px-3 py-2 rounded-sm border-2 border-border pixel-shadow">
                <div className="flex items-center gap-1">
                  <span className="food-emoji">⭐</span>
                  <span className="font-bold text-foreground">{userPoints}</span>
                </div>
              </div>
              <div className="bg-accent px-3 py-2 rounded-sm border-2 border-border pixel-shadow text-white">
                <div className="flex items-center gap-1">
                  <span className="food-emoji">🏆</span>
                  <span className="font-bold">Lv{userLevel}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* XP Progress Bar - Pixel style */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground font-bold">Next Level</span>
              <span className="font-bold">{userXP} / {nextLevelXP} XP</span>
            </div>
            <div className="w-full bg-muted h-4 rounded-sm border-2 border-border">
              <div 
                className="bg-accent h-full rounded-sm transition-all duration-300"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="explore" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card border-2 border-border rounded-sm pixel-shadow">
            <TabsTrigger value="explore" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Explore</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Quest</span>
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">
              <Gift className="w-4 h-4" />
              <span className="hidden sm:inline">Shop</span>
            </TabsTrigger>
            <TabsTrigger value="vendor" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Vendor</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="mt-6">
            <div className="space-y-6">
              {/* Welcome Card - Pixel art style */}
              <Card className="bg-primary text-white border-4 border-orange-600 pixel-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Selamat Jajan! 🎉</h2>
                      <p className="text-orange-100 mb-4 font-bold">
                        Find amazing street food & earn rewards!
                      </p>
                      <Button className="bg-card text-foreground border-2 border-border pixel-shadow hover:bg-secondary font-bold">
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
