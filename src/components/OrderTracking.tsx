import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState<any>(null);

  const mockOrders = {
    'LN2024001': {
      id: 'LN2024001',
      customer: 'Restaurant Le Gourmet',
      product: 'Néon "OPEN" - Rouge/Blanc',
      status: 'production',
      progress: 60,
      estimatedDelivery: '2024-12-20',
      steps: [
        { name: 'Commande validée', date: '2024-12-10', completed: true },
        { name: 'Design approuvé', date: '2024-12-11', completed: true },
        { name: 'Production en cours', date: '2024-12-12', completed: false, current: true },
        { name: 'Contrôle qualité', date: '2024-12-18', completed: false },
        { name: 'Expédition', date: '2024-12-19', completed: false },
        { name: 'Livraison', date: '2024-12-20', completed: false }
      ]
    },
    'LN2024002': {
      id: 'LN2024002',
      customer: 'Bar Neon Dreams',
      product: 'Logo personnalisé - Multicolore',
      status: 'shipped',
      progress: 90,
      estimatedDelivery: '2024-12-15',
      trackingNumber: 'FR123456789',
      steps: [
        { name: 'Commande validée', date: '2024-12-05', completed: true },
        { name: 'Design approuvé', date: '2024-12-06', completed: true },
        { name: 'Production terminée', date: '2024-12-12', completed: true },
        { name: 'Contrôle qualité', date: '2024-12-13', completed: true },
        { name: 'Expédition', date: '2024-12-14', completed: true, current: true },
        { name: 'Livraison', date: '2024-12-15', completed: false }
      ]
    }
  };

  const searchOrder = () => {
    const order = mockOrders[orderNumber as keyof typeof mockOrders];
    setOrderData(order || null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production': return 'text-yellow-400';
      case 'shipped': return 'text-blue-400';
      case 'delivered': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'production': return 'En Production';
      case 'shipped': return 'Expédié';
      case 'delivered': return 'Livré';
      default: return 'Inconnu';
    }
  };

  return (
    <section id="order-tracking" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="neon-text-blue">Suivi</span>
            <span className="text-white"> de </span>
            <span className="neon-text-green">Commande</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Suivez votre néon personnalisé en temps réel
          </p>
        </div>

        {/* Search */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Numéro de commande (ex: LN2024001)"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
            />
            <button
              onClick={searchOrder}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Rechercher
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-400">
            💡 Essayez: LN2024001 ou LN2024002 pour voir des exemples
          </div>
        </div>

        {/* Order Details */}
        {orderData && (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Commande #{orderData.id}
                </h3>
                <p className="text-gray-300">{orderData.customer}</p>
                <p className="text-gray-400 text-sm">{orderData.product}</p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-semibold ${getStatusColor(orderData.status)}`}>
                  {getStatusText(orderData.status)}
                </div>
                <div className="text-gray-400 text-sm">
                  Livraison prévue: {new Date(orderData.estimatedDelivery).toLocaleDateString('fr-FR')}
                </div>
                {orderData.trackingNumber && (
                  <div className="text-blue-400 text-sm mt-1">
                    Suivi: {orderData.trackingNumber}
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progression</span>
                <span>{orderData.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${orderData.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {orderData.steps.map((step: any, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-500 text-white' 
                      : step.current 
                        ? 'bg-blue-500 text-white animate-pulse' 
                        : 'bg-gray-600 text-gray-400'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : step.current ? (
                      <Clock className="w-5 h-5" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-current"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-medium ${
                      step.completed 
                        ? 'text-green-400' 
                        : step.current 
                          ? 'text-blue-400' 
                          : 'text-gray-400'
                    }`}>
                      {step.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(step.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  
                  {step.current && (
                    <div className="text-blue-400 text-sm font-medium">
                      En cours...
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-700 flex gap-4">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200">
                📧 Recevoir les mises à jour
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:scale-105 transition-all duration-300">
                💬 Contacter le support
              </button>
            </div>
          </div>
        )}

        {orderData === null && orderNumber && (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center">
            <Package className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Commande non trouvée
            </h3>
            <p className="text-gray-400 mb-4">
              Vérifiez votre numéro de commande ou contactez notre support.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openDevisPopup'))}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:scale-105 transition-all duration-300"
            >
              Contacter le Support
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;