self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("autoimmune-cache").then(cache => {
      return cache.addAll([
        "/",
        "index.html",
        "style.css",
        "app.js",
        "data.js"
      ]);
    })
  );
});
