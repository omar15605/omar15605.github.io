self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('quran-audio-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/audio1.mp3',
          '/audio2.mp3',
          '/icon-192.png',
          '/icon-192.png'
          // أضف المزيد من الملفات حسب الحاجة
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });
  