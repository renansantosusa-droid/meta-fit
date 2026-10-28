// Guarda o app pra abrir sem internet
const C = "metafit-v1";
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(["./", "index.html", "manifest.webmanifest", "icone.svg"]))));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request).then(r => { const k = r.clone(); caches.open(C).then(c => c.put(e.request, k)); return r; }).catch(() => caches.match(e.request))));
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(clients.openWindow("./")); });
