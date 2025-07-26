import React, { useState } from 'react';
import { X, Send, Zap, CheckCircle } from 'lucide-react';

interface DevisPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DevisPopup: React.FC<DevisPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    dimensions: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData to include file
    const formDataWithFile = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFile.append(key, value);
    });
    if (uploadedFile) {
      formDataWithFile.append('logo', uploadedFile);
    }
    
    console.log('Form submitted with logo:', uploadedFile ? uploadedFile.name : 'No logo');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', project: '', dimensions: '', message: '' });
      setUploadedFile(null);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('Fichier trop volumineux. Taille maximum : 10MB');
      e.target.value = '';
      return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Format non supporté. Utilisez JPG, PNG, GIF, SVG ou PDF.');
      e.target.value = '';
      return;
    }

    setUploadedFile(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    const fileInput = document.getElementById('logo-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-lg mx-auto max-h-[95vh] overflow-y-auto">
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700 overflow-hidden m-2 sm:m-0">
          {/* Animated Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-lg z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold neon-text-green mb-2">
                  Demande Envoyée !
                </h3>
                <p className="text-gray-300 text-sm sm:text-base px-2">
                  Nous vous recontacterons sous 24h avec votre devis personnalisé.
                  {uploadedFile && (
                    <>
                      <br />
                      <small className="text-green-300">✅ Logo reçu et analysé</small>
                    </>
                  )}
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    <span className="neon-text-gradient">Devis Gratuit</span>
                  </h3>
                  <div className="text-gray-300 text-sm sm:text-base px-2">
                    Obtenez votre devis personnalisé + mockup 3D gratuit
                    {uploadedFile && (
                      <div className="text-green-300 text-xs sm:text-sm mt-2">
                        ✅ Logo reçu et analysé : {uploadedFile.name}
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-3 mb-4 sm:mb-6">
                  <div className="text-green-300 text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">✅</span>
                      <span>Réponse garantie sous 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">✅</span>
                      <span>Mockup 3D gratuit inclus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">✅</span>
                      <span>Sans engagement</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                        placeholder="Votre nom *"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                        placeholder="Email *"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                        placeholder="Téléphone"
                      />
                    </div>
                    <div>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                      >
                        <option value="">Type de projet *</option>
                        <option value="enseigne">Enseigne commerciale</option>
                        <option value="decoration">Décoration intérieure</option>
                        <option value="evenement">Événementiel</option>
                        <option value="autre">Autre projet</option>
                      </select>
                    </div>
                  </div>

                  {/* Dimensions Field */}
                  <div>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                      placeholder="Dimensions souhaitées en cm (ex: 50x20 cm)"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-sm"
                      placeholder="Décrivez votre projet (dimensions, couleurs, budget...) *"
                    />
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Logo de votre entreprise (optionnel)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="logo"
                        accept="image/*,.pdf,.ai,.eps,.svg"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label
                        htmlFor="logo-upload"
                        className={`neon-drag-zone flex items-center justify-center gap-2 sm:gap-3 w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 text-xs sm:text-sm ${
                          uploadedFile
                            ? 'border-green-500 text-green-400 bg-green-500/10 shadow-neon-green active'
                            : 'border-gray-600 text-gray-400 bg-gray-700/50 hover:border-cyan-400 hover:text-cyan-400'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span>
                          {uploadedFile ? 'Changer le fichier' : 'Cliquez pour ajouter votre logo'}
                        </span>
                      </label>
                      
                      {/* File Preview */}
                      {uploadedFile && (
                        <div className="mt-2 p-2 sm:p-3 bg-gray-800/50 border border-gray-600 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-white text-xs sm:text-sm font-medium truncate max-w-[150px] sm:max-w-none">{uploadedFile.name}</div>
                                <div className="text-gray-400 text-xs">{formatFileSize(uploadedFile.size)}</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Upload Help */}
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        Formats acceptés : JPG, PNG, PDF, AI, EPS, SVG (max 10MB)
                      </p>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4" />
                    Obtenir Mon Devis Gratuit
                  </button>

                  <p className="text-xs text-gray-400 text-center px-2">
                    * Champs obligatoires - Réponse sous 24h garantie
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisPopup;