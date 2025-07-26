import React from 'react';
import { Truck, Zap, MapPin, Package } from 'lucide-react';

const ShippingBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-y border-blue-500/30 py-3 px-4 relative overflow-hidden">
      {/* Moving Truck Animation */}
      <div className="absolute top-1/2 transform -translate-y-1/2 animate-pulse">
        <div className="truck-animation">
          <Truck className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-center">
          
          {/* Free Shipping */}
          <div className="flex items-center gap-2 text-blue-300">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">🚚 Livraison GRATUITE partout en France</span>
          </div>
          
          {/* Fast Delivery */}
          <div className="flex items-center gap-2 text-cyan-300">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="font-medium">⚡ Production 7-12j + Livraison Express 2-3j</span>
          </div>
          
          {/* Tracking */}
          <div className="flex items-center gap-2 text-purple-300">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">📍 Suivi en temps réel SMS + Email</span>
          </div>
          
          {/* Secure Packaging */}
          <div className="flex items-center gap-2 text-green-300">
            <Package className="w-5 h-5" />
            <span className="font-medium">📦 Emballage premium anti-choc</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .truck-animation {
          animation: moveTruck 10s linear infinite;
        }

        @keyframes moveTruck {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShippingBanner;