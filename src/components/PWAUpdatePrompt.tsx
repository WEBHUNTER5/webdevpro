import React, { useState, useEffect } from 'react';
import { RefreshCw, X } from 'lucide-react';

const PWAUpdatePrompt: React.FC = () => {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    // Check if service worker is supported
    if ('serviceWorker' in navigator) {
      // Listen for service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Reload the page when new service worker takes control
        window.location.reload();
      });

      // Check for waiting service worker
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.waiting) {
          setWaitingWorker(registration.waiting);
          setShowUpdatePrompt(true);
        }

        // Listen for new service worker installation
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setShowUpdatePrompt(true);
              }
            });
          }
        });
      });
    }
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      // Tell the waiting service worker to skip waiting
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowUpdatePrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowUpdatePrompt(false);
  };

  if (!showUpdatePrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#4299e1] rounded-full flex items-center justify-center">
                <RefreshCw className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Update Available</h4>
                <p className="text-sm text-gray-600">A new version of WebDevPro is ready</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleDismiss}
              className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Later
            </button>
            <button
              onClick={handleUpdate}
              className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#4299e1] rounded-md hover:bg-[#3182ce] transition-colors flex items-center justify-center space-x-1"
            >
              <RefreshCw size={16} />
              <span>Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAUpdatePrompt;