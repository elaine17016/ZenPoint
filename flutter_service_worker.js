'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c95d78e8f468c82b294ff216eae4cc8",
"assets/AssetManifest.bin.json": "c77765e33fdcd60c097b5dc36697b6ad",
"assets/AssetManifest.json": "45fdf37543ec69f98c0977771207ac06",
"assets/assets/fonts/BeautifulBoldFont.ttf": "ec478fc73747085c0b7028c642d992b1",
"assets/assets/fonts/MeriendaOne.ttf": "4bb2f8baeead2c479b13f123a85b4a9c",
"assets/assets/images/1.png": "e25c66c65e64205ca9590daceaf3b95e",
"assets/assets/images/10.png": "0e72c17a286bae4ca67c05534ab5d41a",
"assets/assets/images/11.png": "aaf807cdfc0af176e55e770d9a67b2a0",
"assets/assets/images/12.png": "b3a274eea61d769a8170935f9c846d90",
"assets/assets/images/13.png": "6904eb8cb86d1f6a43e3c71b99c363a1",
"assets/assets/images/14.png": "b96a196bdd0a455e93a21608a11a50cb",
"assets/assets/images/15.png": "ac154b4b266e2efd6d1d6e8c3f5068a5",
"assets/assets/images/16.png": "274cef62926ae941064dac8ab9548adf",
"assets/assets/images/17.png": "a735fa141766729f0453a0856a1cf617",
"assets/assets/images/18.png": "f68aab14c2f2558748bf59f2ac40fea8",
"assets/assets/images/19.png": "e321297bf021c2f5af4017897809259b",
"assets/assets/images/2.png": "97ac42feb64c433e7f1ce399d83d4a37",
"assets/assets/images/20.png": "b48bc5684be802ce9d125bb42482698d",
"assets/assets/images/21.png": "96894f61a83cf0b29a1467c7ba3b9ae5",
"assets/assets/images/22.png": "df0b59273bd90ad8c761d9ba7d2ddf1b",
"assets/assets/images/23.png": "dc98a34e6139b33ea4da860be5edd4ce",
"assets/assets/images/24.png": "4d530f8990893aebab6f9cb69e52cc24",
"assets/assets/images/3.png": "1b201d9f42248c63e9e115bd223e4094",
"assets/assets/images/4.png": "b2462b8fabde6fa48a0c81bd302f3a56",
"assets/assets/images/5.png": "a01ffef6bfc2627c3062cb32a3e9fa36",
"assets/assets/images/6.png": "cfd8d0f08d8c85f3689f1ca96322153f",
"assets/assets/images/7.png": "ff423f3fd64044ed754f14246a878ddb",
"assets/assets/images/8.png": "fc125b59e056a32919efbaaf16233b8c",
"assets/assets/images/9.png": "a494b1175dfabf51d42cba2ba2ffdbb8",
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
"assets/assets/images/stop.png": "ab887f3e616660b115df226a0e73fc37",
"assets/assets/images/thank.png": "148efd8cfc9c83c43c2926942f14cec1",
"assets/assets/music/MUA.mp3": "60be897188b1805ab57fb1638d646c68",
"assets/assets/music/MUB.mp3": "594bbb151e12ce4b3dbdcb443a698f1e",
"assets/assets/music/MUC.mp3": "c03e43fd13095a9e1f3b2b51728b295c",
"assets/assets/music/MUD.mp3": "1fbf060d47020aa24ae745296535f031",
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
"flutter_bootstrap.js": "f4f779c80cef80dde03dc56e0d4e3727",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94258d8d4f873494a168aaedc197cf6b",
"/": "94258d8d4f873494a168aaedc197cf6b",
"main.dart.js": "7fd4d4d5a5383ff39e0f8224997ef6e8",
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
