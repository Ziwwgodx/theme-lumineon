import React, { useState } from 'react';
import { X, Send, Zap, CheckCircle, Upload, Loader } from 'lucide-react';

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
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Créer FormData pour l'envoi avec fichier
      const formDataToSend = new FormData();
      formDataToSend.append('form_type', 'contact');
      formDataToSend.append('utf8', '✓');
      formDataToSend.append('contact[subject]', '[LUMINEON] Nouvelle demande de devis néon personnalisé');
      formDataToSend.append('contact[name]', formData.name);
      formDataToSend.append('contact[email]', formData.email);
      formDataToSend.append('contact[phone]', formData.phone);
      formDataToSend.append('contact[project_type]', formData.project);
      formDataToSend.append('contact[dimensions]', formData.dimensions);
      
      // Message structuré
      const structuredMessage = `
NOUVELLE DEMANDE DE DEVIS NÉON PERSONNALISÉ
==========================================

📋 INFORMATIONS CLIENT :
• Nom : ${formData.name}
• Email : ${formData.email}
• Téléphone : ${formData.phone || 'Non renseigné'}

🎯 DÉTAILS DU PROJET :
• Type de projet : ${formData.project}
• Dimensions souhaitées : ${formData.dimensions || 'Non spécifiées'}
• Description : ${formData.message}

📎 FICHIER JOINT :
${uploadedFile ? `• Logo fourni : ${uploadedFile.name} (${formatFileSize(uploadedFile.size)})` : '• Aucun logo fourni'}

⏰ PROCHAINES ÉTAPES :
• Répondre sous 24h maximum
• Créer le mockup 3D gratuit
• Envoyer le devis détaillé

Date de réception : ${new Date().toLocaleString('fr-FR')}
      `;
      
      formDataToSend.append('contact[body]', structuredMessage);
      
      if (uploadedFile) {
        formDataToSend.append('contact[logo]', uploadedFile);
      }

      // Envoi vers Shopify
      const response = await fetch('/contact', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          resetForm();
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', project: '', dimensions: '', message: '' });
    setUploadedFile(null);
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

    // Validation taille (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('Fichier trop volumineux. Taille maximum : 10MB');
      e.target.value = '';
      return;
    }

    // Validation type
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg mx-auto max-h-[95vh] overflow-y-auto">
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 overflow-hidden">
          {/* Animated Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-lg z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold neon-text-green mb-2">
                  Demande Envoyée !
                </h3>
                <p className="text-gray-300 text-center">
                  📧 Email envoyé à notre équipe !<br />
                  Nous vous recontacterons sous 24h avec votre devis personnalisé.
                  {uploadedFile && (
                    <>
                      <br />
                      <small className="text-green-300">✅ Logo reçu : {uploadedFile.name}</small>
                    </>
                  )}
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="neon-text-gradient">Devis Gratuit</span>
                  </h3>
                  <p className="text-gray-300">
                    Obtenez votre devis personnalisé + mockup 3D gratuit
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                  <div className="text-green-300 text-sm space-y-2">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nom */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Votre nom *"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Email *"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Téléphone"
                    />
                  </div>

                  {/* Type de projet */}
                  <div>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    >
                      <option value="">Type de projet *</option>
                      <option value="enseigne">Enseigne commerciale</option>
                      <option value="decoration">Décoration intérieure</option>
                      <option value="evenement">Événementiel</option>
                      <option value="autre">Autre projet</option>
                    </select>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Dimensions souhaitées en cm (ex: 50x20 cm)"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Décrivez votre projet (dimensions, couleurs, budget...) *"
                    />
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
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
                        className={`flex items-center justify-center gap-3 w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${
                          uploadedFile
                            ? 'border-green-500 text-green-400 bg-green-500/10'
                            : 'border-gray-600 text-gray-400 bg-gray-700/50 hover:border-cyan-400 hover:text-cyan-400'
                        }`}
                      >
                        <Upload className="w-5 h-5" />
                        <span>
                          {uploadedFile ? 'Changer le fichier' : 'Cliquez pour ajouter votre logo'}
                        </span>
                      </label>
                      
                      {/* File Preview */}
                      {uploadedFile && (
                        <div className="mt-3 p-3 bg-gray-800/50 border border-gray-600 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              </div>
                              <div>
                                <div className="text-white text-sm font-medium truncate max-w-[200px]">{uploadedFile.name}</div>
                                <div className="text-gray-400 text-xs">{formatFileSize(uploadedFile.size)}</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500 mt-2">
                        Formats acceptés : JPG, PNG, PDF, AI, EPS, SVG (max 10MB)
                      </p>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Obtenir Mon Devis Gratuit
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
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