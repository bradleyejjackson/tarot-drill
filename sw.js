/* Tarot Correspondence Drill: offline support.
   The page is fetched fresh when you're online (so uploads to GitHub show up on the next open),
   and served from the saved copy when you're offline. Fonts are saved the first time they load. */
const VERSION='2026-10-06.1';
const SHELL='tarot-shell-'+VERSION, FONTS='tarot-fonts';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','favicon.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('tarot-shell-')&&k!==SHELL).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(FONTS).then(async c=>{const hit=await c.match(req);if(hit)return hit;
      const res=await fetch(req);if(res.ok||res.type==='opaque')c.put(req,res.clone());return res;}).catch(()=>caches.match(req)));
    return;
  }
  if(url.origin!==location.origin)return;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(res=>{const copy=res.clone();caches.open(SHELL).then(c=>c.put('index.html',copy));return res})
      .catch(()=>caches.match('index.html').then(r=>r||caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(SHELL).then(c=>c.put(req,copy))}return res})));
});
