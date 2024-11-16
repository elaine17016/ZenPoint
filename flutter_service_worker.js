'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c95d78e8f468c82b294ff216eae4cc8",
"assets/AssetManifest.bin.json": "c77765e33fdcd60c097b5dc36697b6ad",
"assets/AssetManifest.json": "45fdf37543ec69f98c0977771207ac06",
"assets/assets/fonts/BeautifulBoldFont.ttf": "ec478fc73747085c0b7028c642d992b1",
"assets/assets/fonts/MeriendaOne.ttf": "4bb2f8baeead2c479b13f123a85b4a9c",
"assets/assets/images/1.png": "6991eaec02532e07d325485cf16454ab",
"assets/assets/images/10.png": "a93d8b4f457e908d23a4fdbae5b4b8df",
"assets/assets/images/11.png": "11f7033de89cb64c1b029f0c855d1e13",
"assets/assets/images/12.png": "4ba410045ed876047e63697c40e97d87",
"assets/assets/images/13.png": "3ad989f70160433f372d2d1f8044c841",
"assets/assets/images/14.png": "71f3581e83a8a155f9dd22216852fadb",
"assets/assets/images/15.png": "e9ec8a5fabb9a7aab1d73650dc081bb0",
"assets/assets/images/16.png": "24e154d473ab288159b2e41817de82ed",
"assets/assets/images/17.png": "ab771b93ec13e6d42031e2ce2a29a6c9",
"assets/assets/images/18.png": "0a5fbe56ebae009c9e79e3ee5dac0d51",
"assets/assets/images/19.png": "3eba15a530adc0fc87f273fd1c3aa808",
"assets/assets/images/2.png": "c4367a18425f8159fe0b1ea91c16dd5c",
"assets/assets/images/20.png": "bf0650e0dd4ab775c23d0ccf691bf8f3",
"assets/assets/images/21.png": "d1ce8da87f51dd5f1e69e4ac626c346c",
"assets/assets/images/22.png": "d4fd6bba886994936bccec1d6a05e9c7",
"assets/assets/images/23.png": "85f4c079dd891517ebfa0cf7efa6dfa3",
"assets/assets/images/24.png": "c4266ec20a0dbb30e2f3ffc50f198f0e",
"assets/assets/images/3.png": "a10da73e294f3f234808b20e602314c5",
"assets/assets/images/4.png": "5c2e154b66e24c4e95cb3aec1e4d5e06",
"assets/assets/images/5.png": "f687e756a31bed79555779b37dae2042",
"assets/assets/images/6.png": "58a67d2f6560039d29dd9a50d5900205",
"assets/assets/images/7.png": "4e2031714cbc440cbcf36ff3be3bf1cc",
"assets/assets/images/8.png": "fa74085e9fc3869a8d2602f4b957fe94",
"assets/assets/images/9.png": "85891a3c20d8840556f24bf4ab113cf9",
"assets/assets/images/author.png": "dec9a009547914635ab7e235aab329e3",
"assets/assets/images/c1.png": "c2cd19d8931783d43e68a713b8c98439",
"assets/assets/images/c2.png": "71e4ddd8ac8c460af0e0ffd0a3416d96",
"assets/assets/images/c3.png": "b9afd9664d276262b5153414614c1a12",
"assets/assets/images/c4.png": "f689995bbde91cb7adf61fb59ed03287",
"assets/assets/images/c5.png": "a5089d029adc59ca182c35df96ff14bc",
"assets/assets/images/c6.png": "e7afb7f7efb99b414811da3f196924b2",
"assets/assets/images/c7.png": "ef1da5422e29206cc20ccd70256d62e1",
"assets/assets/images/home.png": "7bb7410e5caca0186c5d7d1018e9ec9f",
"assets/assets/images/minus.png": "33abacd0cca7b8b3320347b412d85c99",
"assets/assets/images/play.png": "5308e73c562d8e5e2d8d549b431923c1",
"assets/assets/images/plus.png": "481a0489f9702a6d9b1ce76ad7c111b3",
"assets/assets/images/stop.png": "b4cb8aeea6bf4a60f4ba4c41d366c136",
"assets/assets/images/thank.png": "148efd8cfc9c83c43c2926942f14cec1",
"assets/assets/music/MUA.mp3": "5fb00bcf9ae0aff2436117702d90e4eb",
"assets/assets/music/MUB.mp3": "8bd93bd1cf95a503255a8ca57139d119",
"assets/assets/music/MUC.mp3": "cd8dcbce028bdf962a81050eb613a036",
"assets/assets/music/MUD.mp3": "d86b3e1659688a336b74cc39c2af1970",
"assets/FontManifest.json": "a87d8c234b8a94d14d4ce9f7e664d1c7",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "76cfaa2698df3c332849eb22e972cb51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4670c5a2cc889934882e849ea1f6759c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94258d8d4f873494a168aaedc197cf6b",
"/": "94258d8d4f873494a168aaedc197cf6b",
"main.dart.js": "78671252ebe1d6848f5a06def8d9266e",
"manifest.json": "bdd9b319af467f740367ff9614b4676b",
"version.json": "c44fb34c41b5b935557c84d6383fa57e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
