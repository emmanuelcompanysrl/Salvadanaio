const CACHE_NAME = 'salvadanaio-v1';
const ASSETS = [
  '/Salvadanaio/',
  '/Salvadanaio/index.html',
  '/Salvadanaio/manifest.json',
  '/Salvadanaio/icona.png'
];

// Installazione e salvataggio file
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Recupero file (funziona offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
