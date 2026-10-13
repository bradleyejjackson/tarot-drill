/* Tarot Correspondence Drill: offline support.
   The page is fetched fresh when you're online (so uploads to GitHub show up on the next open),
   and served from the saved copy when you're offline. Fonts are saved the first time they load. */
const VERSION='2026-10-12.2';
const SHELL='tarot-shell-'+VERSION, FONTS='tarot-fonts';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','favicon.png',
  'cards/M0.webp','cards/M1.webp','cards/M10.webp','cards/M11.webp','cards/M12.webp','cards/M13.webp','cards/M14.webp','cards/M15.webp','cards/M16.webp','cards/M17.webp','cards/M18.webp','cards/M19.webp','cards/M2.webp','cards/M20.webp','cards/M21.webp','cards/M3.webp','cards/M4.webp','cards/M5.webp','cards/M6.webp','cards/M7.webp','cards/M8.webp','cards/M9.webp','cards/cups1.webp','cards/cups10.webp','cards/cups2.webp','cards/cups3.webp','cards/cups4.webp','cards/cups5.webp','cards/cups6.webp','cards/cups7.webp','cards/cups8.webp','cards/cups9.webp','cards/cupsKnight.webp','cards/cupsPrince.webp','cards/cupsPrincess.webp','cards/cupsQueen.webp','cards/disks1.webp','cards/disks10.webp','cards/disks2.webp','cards/disks3.webp','cards/disks4.webp','cards/disks5.webp','cards/disks6.webp','cards/disks7.webp','cards/disks8.webp','cards/disks9.webp','cards/disksKnight.webp','cards/disksPrince.webp','cards/disksPrincess.webp','cards/disksQueen.webp','cards/swords1.webp','cards/swords10.webp','cards/swords2.webp','cards/swords3.webp','cards/swords4.webp','cards/swords5.webp','cards/swords6.webp','cards/swords7.webp','cards/swords8.webp','cards/swords9.webp','cards/swordsKnight.webp','cards/swordsPrince.webp','cards/swordsPrincess.webp','cards/swordsQueen.webp','cards/wands1.webp','cards/wands10.webp','cards/wands2.webp','cards/wands3.webp','cards/wands4.webp','cards/wands5.webp','cards/wands6.webp','cards/wands7.webp','cards/wands8.webp','cards/wands9.webp','cards/wandsKnight.webp','cards/wandsPrince.webp','cards/wandsPrincess.webp','cards/wandsQueen.webp'];

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
