self.addEventListener('install', event => {
  event.waitUntil(
      caches.open('your-cache-name').then(cache => {
          return cache.addAll([
              // your cached files
          ]);
      })
  );
});

// ... rest of your Service Worker code

// Set Content-Type header
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(error => {
                console.error('Fetch error:', error);
                throw error;
            })
    );
});

