const CACHE="alfred-enterprise-combined-v1";
const FILES=["./","./index.html","./shop.html","./manifest.webmanifest","./icon.svg","./alfred-products-poster.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method==="GET")e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
