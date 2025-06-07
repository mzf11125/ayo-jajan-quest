
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, ShoppingBag } from "lucide-react";

const MapView = () => {
  const vendors = [
    {
      id: 1,
      name: "Pak Budi's Satay Cart",
      type: "Satay & Grilled",
      rating: 4.8,
      distance: "50m",
      specialOffer: "2x XP Today!",
      emoji: "🍢",
      position: { top: "20%", left: "30%" },
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      name: "Bu Sari's Gado-Gado",
      type: "Traditional Salad",
      rating: 4.6,
      distance: "120m",
      specialOffer: "Free drink with meal",
      emoji: "🥗",
      position: { top: "60%", left: "70%" },
      color: "from-green-500 to-lime-500"
    },
    {
      id: 3,
      name: "Abang Bakso",
      type: "Meatball Soup",
      rating: 4.9,
      distance: "200m",
      specialOffer: "Challenge: Try 3 toppings",
      emoji: "🍲",
      position: { top: "40%", left: "20%" },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      name: "Teh Manis Corner",
      type: "Drinks & Snacks",
      rating: 4.5,
      distance: "80m",
      specialOffer: "Happy hour: 50% off drinks",
      emoji: "🧋",
      position: { top: "70%", left: "50%" },
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Interactive Map */}
      <div className="lg:col-span-2">
        <Card className="h-96 relative overflow-hidden">
          <CardHeader className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              Street Food Near You
            </CardTitle>
          </CardHeader>
          
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-orange-50">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          {/* Vendor Pins */}
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: vendor.position.top, left: vendor.position.left }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${vendor.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-200 relative`}>
                {vendor.emoji}
                {vendor.specialOffer.includes("2x XP") && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </div>
              
              {/* Vendor Info Popup */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <div className="bg-white rounded-lg shadow-xl p-3 min-w-48 border">
                  <h4 className="font-semibold text-sm">{vendor.name}</h4>
                  <p className="text-xs text-muted-foreground">{vendor.type}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs">{vendor.rating}</span>
                    <span className="text-xs text-muted-foreground">• {vendor.distance}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {vendor.specialOffer}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {/* User Location */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Nearby Vendors List */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Nearby Vendors</h3>
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${vendor.color} rounded-lg flex items-center justify-center text-white`}>
                  {vendor.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm">{vendor.name}</h4>
                  <p className="text-xs text-muted-foreground">{vendor.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs">{vendor.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">• {vendor.distance}</span>
                  </div>
                  <Badge variant="outline" className="text-xs mt-2">
                    {vendor.specialOffer}
                  </Badge>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
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
