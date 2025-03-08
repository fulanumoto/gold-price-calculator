self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("gold-calculator-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "logo.png",
        "icon-192.png",
        "icon-512.png",
        "https://cdn.tailwindcss.com"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
