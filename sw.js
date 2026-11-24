// Solo existe para que el navegador ofrezca instalar la app. No guarda nada en caché: los datos siempre vienen del servidor.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
