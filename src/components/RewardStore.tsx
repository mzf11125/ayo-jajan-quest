
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Gift, ShoppingBag, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface RewardStoreProps {
  userPoints: number;
  setUserPoints: (points: number) => void;
}

const RewardStore = ({ userPoints, setUserPoints }: RewardStoreProps) => {
  const [purchasedItems, setPurchasedItems] = useState<number[]>([]);

  const rewards = [
    {
      id: 1,
      name: "Free Satay Stick",
      description: "Get one free satay stick from any participating vendor",
      cost: 100,
      category: "Food",
      emoji: "🍢",
      discount: "Free Item",
      rarity: "common"
    },
    {
      id: 2,
      name: "20% Off Next Order",
      description: "Get 20% discount on your next street food purchase",
      cost: 150,
      category: "Discount",
      emoji: "💰",
      discount: "20% OFF",
      rarity: "common"
    },
    {
      id: 3,
      name: "Legendary Nasi Gudeg",
      description: "Premium nasi gudeg from Bu Tjitro's famous cart",
      cost: 300,
      category: "Premium Food",
      emoji: "🍛",
      discount: "Special Item",
      rarity: "rare"
    },
    {
      id: 4,
      name: "Double XP Booster",
      description: "Get 2x XP for all purchases for the next 24 hours",
      cost: 200,
      category: "Booster",
      emoji: "⚡",
      discount: "2x XP",
      rarity: "uncommon"
    },
    {
      id: 5,
      name: "Jajan Master Badge",
      description: "Exclusive digital badge to show your street food expertise",
      cost: 500,
      category: "Badge",
      emoji: "🏆",
      discount: "Exclusive",
      rarity: "epic"
    },
    {
      id: 6,
      name: "Free Drink Bundle",
      description: "5 free drinks from participating beverage vendors",
      cost: 250,
      category: "Drinks",
      emoji: "🧋",
      discount: "5 Free Drinks",
      rarity: "uncommon"
    },
    {
      id: 7,
      name: "VIP Vendor Access",
      description: "Skip the queue at any vendor for one week",
      cost: 400,
      category: "VIP",
      emoji: "👑",
      discount: "Skip Queue",
      rarity: "rare"
    },
    {
      id: 8,
      name: "Mystery Box",
      description: "Random reward containing food, discounts, or boosters",
      cost: 180,
      category: "Mystery",
      emoji: "🎁",
      discount: "Surprise!",
      rarity: "uncommon"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-500';
      case 'uncommon': return 'from-green-400 to-green-500';
      case 'rare': return 'from-blue-400 to-blue-500';
      case 'epic': return 'from-purple-400 to-purple-500';
      case 'legendary': return 'from-orange-400 to-red-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityText = (rarity: string) => {
    return rarity.charAt(0).toUpperCase() + rarity.slice(1);
  };

  const handlePurchase = (reward: any) => {
    if (userPoints >= reward.cost && !purchasedItems.includes(reward.id)) {
      setUserPoints(userPoints - reward.cost);
      setPurchasedItems([...purchasedItems, reward.id]);
      toast.success(`🎉 You've redeemed ${reward.name}!`, {
        description: "Check your inventory to use this reward."
      });
    } else if (userPoints < reward.cost) {
      toast.error("Not enough points!", {
        description: `You need ${reward.cost - userPoints} more points to redeem this item.`
      });
    }
  };

  const categories = ["All", "Food", "Discount", "Booster", "Badge", "VIP", "Mystery"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRewards = selectedCategory === "All" 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Reward Store 🛍️
        </h2>
        <p className="text-muted-foreground mt-2">
          Exchange your points for amazing rewards and exclusive perks!
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full w-fit mx-auto">
          <Star className="w-5 h-5 text-orange-500" />
          <span className="font-bold text-orange-700">{userPoints} Points Available</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-gradient-to-r from-orange-500 to-red-500" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRewards.map((reward) => {
          const isPurchased = purchasedItems.includes(reward.id);
          const canAfford = userPoints >= reward.cost;

          return (
            <Card 
              key={reward.id} 
              className={`relative overflow-hidden transition-all duration-200 hover:shadow-lg ${
                isPurchased ? 'bg-green-50 border-green-200' : 'hover:scale-105'
              }`}
            >
              {/* Rarity Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getRarityColor(reward.rarity)}`}></div>
              
              <CardHeader className="pb-3 text-center">
                <div className="text-4xl mb-2">{reward.emoji}</div>
                <CardTitle className="text-lg">{reward.name}</CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={`bg-gradient-to-r ${getRarityColor(reward.rarity)} text-white border-0`}
                  >
                    {getRarityText(reward.rarity)}
                  </Badge>
                  <Badge variant="secondary">{reward.discount}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {reward.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-orange-500" />
                  <span className="font-bold text-lg">{reward.cost} Points</span>
                </div>

                {isPurchased ? (
                  <Button disabled className="w-full bg-green-500 text-white">
                    <Gift className="w-4 h-4 mr-2" />
                    Redeemed!
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handlePurchase(reward)}
                    disabled={!canAfford}
                    className={`w-full ${
                      canAfford 
                        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" 
                        : "opacity-50"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {canAfford ? "Redeem Now" : "Not Enough Points"}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pro Tip */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-blue-700">Pro Tip</span>
          </div>
          <p className="text-sm text-blue-600">
            Complete daily challenges to earn more points faster! Some vendors also offer bonus point multipliers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardStore;
