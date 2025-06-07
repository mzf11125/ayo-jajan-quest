
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Zap, Award, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ChallengeBoardProps {
  userXP: number;
  setUserXP: (xp: number) => void;
  userPoints: number;
  setUserPoints: (points: number) => void;
}

const ChallengeBoard = ({ userXP, setUserXP, userPoints, setUserPoints }: ChallengeBoardProps) => {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const challenges = [
    {
      id: 1,
      title: "Street Food Explorer",
      description: "Visit 3 different vendors today",
      progress: 2,
      target: 3,
      xpReward: 150,
      pointReward: 50,
      timeLeft: "6h left",
      type: "daily",
      emoji: "🗺️"
    },
    {
      id: 2,
      title: "Satay Master",
      description: "Try 5 different satay sticks this week",
      progress: 3,
      target: 5,
      xpReward: 300,
      pointReward: 100,
      timeLeft: "3 days left",
      type: "weekly",
      emoji: "🍢"
    },
    {
      id: 3,
      title: "Early Bird Jajan",
      description: "Buy breakfast from a cart before 9 AM",
      progress: 0,
      target: 1,
      xpReward: 100,
      pointReward: 25,
      timeLeft: "Tomorrow",
      type: "daily",
      emoji: "🌅"
    },
    {
      id: 4,
      title: "Spice Challenge",
      description: "Order extra spicy level 3 times",
      progress: 1,
      target: 3,
      xpReward: 200,
      pointReward: 75,
      timeLeft: "5 days left",
      type: "weekly",
      emoji: "🌶️"
    },
    {
      id: 5,
      title: "Social Foodie",
      description: "Share your jajan experience 2 times",
      progress: 0,
      target: 2,
      xpReward: 120,
      pointReward: 40,
      timeLeft: "Today",
      type: "daily",
      emoji: "📱"
    },
    {
      id: 6,
      title: "Local Legend",
      description: "Spend 100,000 IDR on street food this month",
      progress: 67000,
      target: 100000,
      xpReward: 500,
      pointReward: 200,
      timeLeft: "20 days left",
      type: "monthly",
      emoji: "👑"
    }
  ];

  const handleCompleteChallenge = (challenge: any) => {
    if (challenge.progress >= challenge.target && !completedChallenges.includes(challenge.id)) {
      setCompletedChallenges([...completedChallenges, challenge.id]);
      setUserXP(userXP + challenge.xpReward);
      setUserPoints(userPoints + challenge.pointReward);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily': return 'from-blue-500 to-cyan-500';
      case 'weekly': return 'from-purple-500 to-pink-500';
      case 'monthly': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'daily': return 'Daily';
      case 'weekly': return 'Weekly';
      case 'monthly': return 'Monthly';
      default: return 'Challenge';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Jajan Challenges 🎯
        </h2>
        <p className="text-muted-foreground mt-2">
          Complete challenges to earn XP and unlock amazing rewards!
        </p>
      </div>

      {/* Daily Achievements Summary */}
      <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-orange-800">Today's Progress</h3>
              <p className="text-orange-600">Keep it up! You're doing great 🔥</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-700">
                {challenges.filter(c => c.type === 'daily' && c.progress >= c.target).length}/
                {challenges.filter(c => c.type === 'daily').length}
              </div>
              <p className="text-sm text-orange-600">Daily challenges</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Challenges Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {challenges.map((challenge) => {
          const isCompleted = completedChallenges.includes(challenge.id);
          const canComplete = challenge.progress >= challenge.target && !isCompleted;
          const progressPercentage = Math.min((challenge.progress / challenge.target) * 100, 100);

          return (
            <Card key={challenge.id} className={`relative overflow-hidden ${isCompleted ? 'bg-green-50 border-green-200' : 'hover:shadow-md'} transition-all duration-200`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{challenge.emoji}</div>
                    <div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <Badge variant="outline" className={`bg-gradient-to-r ${getTypeColor(challenge.type)} text-white border-0 mt-1`}>
                        {getTypeText(challenge.type)}
                      </Badge>
                    </div>
                  </div>
                  {isCompleted && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {challenge.description}
                </p>
                
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-medium">
                      {challenge.id === 6 
                        ? `${(challenge.progress / 1000).toFixed(0)}K / ${(challenge.target / 1000)}K IDR`
                        : `${challenge.progress} / ${challenge.target}`
                      }
                    </span>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    className={`h-2 ${isCompleted ? 'bg-green-100' : 'bg-gray-100'}`}
                  />
                </div>

                {/* Rewards */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">{challenge.xpReward} XP</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{challenge.pointReward} pts</span>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{challenge.timeLeft}</span>
                  </div>
                </div>

                {/* Action Button */}
                {isCompleted ? (
                  <Button disabled className="w-full bg-green-500 text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed!
                  </Button>
                ) : canComplete ? (
                  <Button 
                    onClick={() => handleCompleteChallenge(challenge)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Claim Reward!
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    In Progress...
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengeBoard;
