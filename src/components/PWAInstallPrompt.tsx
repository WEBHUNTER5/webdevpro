import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone, Monitor, Zap, Shield } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkIfInstalled = () => {
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
      const isIOSStandalone = (window.navigator as any).standalone === true;
      setIsStandalone(isStandaloneMode || isIOSStandalone);
      setIsInstalled(isStandaloneMode || isIOSStandalone);
    };

    // Check if device is iOS
    const checkIfIOS = () => {
      const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
      setIsIOS(isIOSDevice);
    };

    checkIfInstalled();
    checkIfIOS();

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show install prompt after a delay (better UX)
      setTimeout(() => {
        if (!isInstalled) {
          setShowInstallPrompt(true);
        }
      }, 3000);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setIsInstalled(true);
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Error during installation:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Don't show if already installed or dismissed this session
  if (isInstalled || sessionStorage.getItem('pwa-prompt-dismissed')) {
    return null;
  }

  // iOS Install Instructions Component
  const IOSInstallInstructions = () => (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 overflow-hidden">
      <div className="bg-gradient-to-r from-[#1a365d] to-[#4299e1] p-6 text-white text-center">
        <img 
          src="https://i.imgur.com/Hvul2sc.jpeg" 
          alt="WebDevPro Logo" 
          className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-white"
        />
        <h3 className="text-xl font-bold mb-2">Install WebDevPro App</h3>
        <p className="text-sm opacity-90">Get the full app experience on your iPhone</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#4299e1] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <p className="text-gray-700">Tap the Share button in Safari</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#4299e1] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <p className="text-gray-700">Scroll down and tap "Add to Home Screen"</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#4299e1] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <p className="text-gray-700">Tap "Add" to install the app</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={handleDismiss}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Maybe Later
          </button>
          <button
            onClick={handleDismiss}
            className="flex-1 px-4 py-3 bg-[#4299e1] text-white rounded-lg font-medium hover:bg-[#3182ce] transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );

  // Standard Install Prompt Component
  const StandardInstallPrompt = () => (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 overflow-hidden">
      <div className="relative">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X size={16} />
        </button>
        
        <div className="bg-gradient-to-r from-[#1a365d] to-[#4299e1] p-6 text-white text-center">
          <img 
            src="https://i.imgur.com/Hvul2sc.jpeg" 
            alt="WebDevPro Logo" 
            className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
          />
          <h3 className="text-2xl font-bold mb-2">Install WebDevPro</h3>
          <p className="text-sm opacity-90">Get the full app experience with offline access</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#68d391] rounded-full flex items-center justify-center mx-auto mb-2">
              <Zap className="text-white" size={24} />
            </div>
            <p className="text-sm font-medium text-gray-700">Lightning Fast</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#4299e1] rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="text-white" size={24} />
            </div>
            <p className="text-sm font-medium text-gray-700">Works Offline</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-[#68d391] rounded-full"></div>
            <p className="text-sm text-gray-600">Access your account instantly</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-[#68d391] rounded-full"></div>
            <p className="text-sm text-gray-600">Get push notifications for updates</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-[#68d391] rounded-full"></div>
            <p className="text-sm text-gray-600">Browse services even when offline</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={handleDismiss}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Not Now
          </button>
          <button
            onClick={handleInstallClick}
            className="flex-1 px-4 py-3 bg-[#4299e1] text-white rounded-lg font-medium hover:bg-[#3182ce] transition-colors flex items-center justify-center space-x-2"
          >
            <Download size={18} />
            <span>Install</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {isIOS ? <IOSInstallInstructions /> : <StandardInstallPrompt />}
    </div>
  );
};

export default PWAInstallPrompt;