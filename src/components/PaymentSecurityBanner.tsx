import React from 'react';
import { Lock, CreditCard, Shield, Ban } from 'lucide-react';

const PaymentSecurityBanner = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-y border-emerald-500/30 py-3 px-4 relative overflow-hidden">
      {/* Security Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-emerald-400/20 animate-pulse">
          <Lock className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-teal-400/20 animate-pulse animation-delay-1000">
          <Shield className="w-6 h-6" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          
          {/* SSL Security */}
          <div className="flex items-center gap-2 text-emerald-300">
            <Lock className="w-5 h-5" />
            <span className="font-semibold">🔒 Paiement SSL 256-bit</span>
          </div>
          
          {/* Payment Methods */}
          <div className="flex items-center gap-3 text-blue-300">
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">💳 Visa • Mastercard • PayPal • Virement</span>
          </div>
          
          {/* Data Protection */}
          <div className="flex items-center gap-2 text-purple-300">
            <Shield className="w-5 h-5" />
            <span className="font-medium">🛡️ Données RGPD Protégées</span>
          </div>
          
          {/* No Spam */}
          <div className="flex items-center gap-2 text-yellow-300">
            <Ban className="w-5 h-5" />
            <span className="font-medium">🚫 Aucun Spam Garanti</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default PaymentSecurityBanner;