
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, ShoppingBag } from "lucide-react";

const MapView = () => {
  const vendors = [
    {
      id: 1,
      name: "Pak Budi's Satay",
      type: "Satay & Grilled",
      rating: 4.8,
      distance: "50m",
      specialOffer: "2x XP Today!",
      emoji: "🍢",
      position: { top: "25%", left: "30%" },
      color: "bg-red-500"
    },
    {
      id: 2,
      name: "Bu Sari's Gado-Gado",
      type: "Traditional Salad", 
      rating: 4.6,
      distance: "120m",
      specialOffer: "Free drink!",
      emoji: "🥗",
      position: { top: "65%", left: "70%" },
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Abang Bakso",
      type: "Meatball Soup",
      rating: 4.9,
      distance: "200m",
      specialOffer: "Try 3 toppings",
      emoji: "🍲",
      position: { top: "40%", left: "20%" },
      color: "bg-blue-500"
    },
    {
      id: 4,
      name: "Teh Manis Corner",
      type: "Drinks & Snacks",
      rating: 4.5,
      distance: "80m",
      specialOffer: "50% off drinks",
      emoji: "🧋",
      position: { top: "70%", left: "50%" },
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Interactive Map - Pixel style */}
      <div className="lg:col-span-2">
        <Card className="h-96 relative overflow-hidden border-4 border-border pixel-shadow">
          <CardHeader className="absolute top-4 left-4 z-10 bg-card border-2 border-border rounded-sm p-3 pixel-shadow">
            <CardTitle className="text-lg flex items-center gap-2 font-bold">
              <MapPin className="w-5 h-5 text-primary" />
              Street Food Near You
            </CardTitle>
          </CardHeader>
          
          {/* Pixel Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-yellow-100 to-orange-200">
            {/* Grid pattern for pixel map feel */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #000 1px, transparent 1px),
                  linear-gradient(to bottom, #000 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
          </div>

          {/* Vendor Pins - Pixel style */}
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: vendor.position.top, left: vendor.position.left }}
            >
              <div className={`w-14 h-14 ${vendor.color} rounded-sm border-2 border-black flex items-center justify-center text-white text-2xl pixel-shadow group-hover:scale-110 transition-transform duration-200 relative food-emoji`}>
                {vendor.emoji}
                {vendor.specialOffer.includes("2x XP") && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-black animate-pulse"></div>
                )}
              </div>
              
              {/* Vendor Info Popup - Pixel style */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <div className="bg-card rounded-sm border-2 border-border p-3 min-w-48 pixel-shadow">
                  <h4 className="font-bold text-sm">{vendor.name}</h4>
                  <p className="text-xs text-muted-foreground">{vendor.type}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold">{vendor.rating}</span>
                    <span className="text-xs text-muted-foreground">• {vendor.distance}</span>
                  </div>
                  <Badge className="text-xs mt-1 bg-secondary text-foreground border border-border">
                    {vendor.specialOffer}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {/* User Location - Pixel style */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm border-2 border-white pixel-shadow relative">
              <div className="absolute inset-0 bg-blue-400 rounded-sm animate-ping opacity-75"></div>
              <div className="absolute inset-1 bg-white rounded-sm"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Nearby Vendors List - Pixel style */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Nearby Vendors</h3>
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="border-2 border-border pixel-shadow hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 ${vendor.color} rounded-sm border-2 border-black flex items-center justify-center text-white text-xl food-emoji`}>
                  {vendor.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm">{vendor.name}</h4>
                  <p className="text-xs text-muted-foreground">{vendor.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-bold">{vendor.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">• {vendor.distance}</span>
                  </div>
                  <Badge className="text-xs mt-2 bg-secondary text-foreground border border-border">
                    {vendor.specialOffer}
                  </Badge>
                </div>
              </div>
              <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-white border-2 border-orange-600 pixel-shadow font-bold">
                <ShoppingBag className="w-3 h-3 mr-1" />
                Visit & Earn XP
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MapView;
