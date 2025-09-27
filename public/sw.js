// WebDevPro Service Worker
// Version: 1.0.0
// Purpose: Offline functionality, caching, and PWA features

const CACHE_NAME = 'webdevpro-v1.0.0';
const STATIC_CACHE = 'webdevpro-static-v1.0.0';
const DYNAMIC_CACHE = 'webdevpro-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  // Add critical CSS and JS files
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  // Logo and critical images
  'https://i.imgur.com/Hvul2sc.jpeg',
  // Offline fallback page
  '/offline.html'
];

// Dynamic assets to cache on request
const DYNAMIC_ASSETS = [
  '/src/components/',
  '/images/',
  '/icons/',
  'https://fonts.gstatic.com/',
  'https://images.pexels.com/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response for caching
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => {
              cache.put(request, responseClone);
            });
          return response;
        })
        .catch(() => {
          // Serve cached version or offline page
          return caches.match(request)
            .then((cachedResponse) => {
              return cachedResponse || caches.match('/offline.html');
            });
        })
    );
    return;
  }

  // Handle static assets
  if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          return cachedResponse || fetch(request);
        })
    );
    return;
  }

  // Handle dynamic assets with cache-first strategy
  if (DYNAMIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then((response) => {
              // Don't cache non-successful responses
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone);
                });

              return response;
            });
        })
    );
    return;
  }

  // Default: network first, then cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Clone response for caching
        const responseClone = response.clone();
        
        // Cache successful responses
        if (response.status === 200) {
          caches.open(DYNAMIC_CACHE)
            .then((cache) => {
              cache.put(request, responseClone);
            });
        }
        
        return response;
      })
      .catch(() => {
        // Serve from cache if network fails
        return caches.match(request);
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(
      // Handle offline form submissions
      syncContactForms()
    );
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update from WebDevPro!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Website',
        icon: '/icons/action-explore.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/action-close.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('WebDevPro', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked', event.action);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to sync contact forms
async function syncContactForms() {
  try {
    // Get stored form data from IndexedDB
    const formData = await getStoredFormData();
    
    if (formData.length > 0) {
      for (const form of formData) {
        try {
          // Attempt to submit form
          await submitContactForm(form);
          // Remove from storage on success
          await removeStoredFormData(form.id);
        } catch (error) {
          console.error('Failed to sync form:', error);
        }
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Placeholder functions for form handling
async function getStoredFormData() {
  // Implementation would use IndexedDB to retrieve stored forms
  return [];
}

async function submitContactForm(formData) {
  // Implementation would submit form to server
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
}

async function removeStoredFormData(formId) {
  // Implementation would remove form from IndexedDB
  console.log('Removing stored form:', formId);
}

// Update available notification
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});