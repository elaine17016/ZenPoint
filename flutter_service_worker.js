'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f2ce61da670cf72d109bd5390d6d6fe",
"assets/AssetManifest.bin.json": "01377e0faac29e347646c11b1f4160ac",
"assets/AssetManifest.json": "97fe599e671b3440b21ec1ffeb05fe44",
"assets/assets/fonts/BeautifulBoldFont.ttf": "ec478fc73747085c0b7028c642d992b1",
"assets/assets/fonts/MeriendaOne.ttf": "4bb2f8baeead2c479b13f123a85b4a9c",
"assets/assets/images/1.png": "eb83e06e390a3b3f422643fa53a7b2e2",
"assets/assets/images/10.png": "2570387be002b04884421a82a6ec8f42",
"assets/assets/images/11.png": "2eee987fcb2ff012861e7804e7240d80",
"assets/assets/images/12.png": "947ab78bcef16c34195a9347907e2269",
"assets/assets/images/13.png": "7c91fe868fa3c140a282cd29a0261d56",
"assets/assets/images/14.png": "358cafaa2cdb0b87a31667ac1fb55a08",
"assets/assets/images/15.png": "bdbc2d2fb6355198951432150ad38917",
"assets/assets/images/16.png": "4f4a875d4af033626ce37d7283a019fe",
"assets/assets/images/17.png": "6d8b8a03fb3408720be8d3ae5117b806",
"assets/assets/images/18.png": "3490552262b4d91980ef5cfb6addb74b",
"assets/assets/images/19.png": "c9579e2a439435f85cf674ab764bf9d9",
"assets/assets/images/2.png": "5326529ff5f8ce984ae87f74b4c67ab2",
"assets/assets/images/20.png": "a89222e4c3c07a93af25b4a37797630d",
"assets/assets/images/21.png": "1632771df44747655c64edf2e8afc5b8",
"assets/assets/images/22.png": "02e531a2ace320fee2e1390cc8a004ff",
"assets/assets/images/23.png": "987512bb92c4361fce8a81054c325a57",
"assets/assets/images/24.png": "b3f6ba7aba1d70beebb3ff4b93206633",
"assets/assets/images/3.png": "2555fc3337b184b76374827263587736",
"assets/assets/images/4.png": "116c1c685d425a961521cd8a94b265bc",
"assets/assets/images/5.png": "6d783ad93a43d2b18a3db4fc3e89ea2f",
"assets/assets/images/6.png": "ab87a65da160832599180c1fd24ff8b8",
"assets/assets/images/7.png": "c6cca04e7593d52a3093fb2a16c73d2b",
"assets/assets/images/8.png": "e973c08eb92168b97b12853424828619",
"assets/assets/images/9.png": "aaeed1ac71e223b24eb851589d98758a",
"assets/assets/images/author.png": "ebbf61086c5dceddce8d92526404ba93",
"assets/assets/images/c1.png": "649d0bd8726fc0b5752d3fede39e7fa9",
"assets/assets/images/c2.png": "fe9ea40d07a358e7dff6a54f5c5ec42c",
"assets/assets/images/c3.png": "41c1c1e60c9cba1ec89b3d6fa76d23be",
"assets/assets/images/c4.png": "ce7525da5b6e0848ca81d9f842c1bac9",
"assets/assets/images/c5.png": "c92f8cd8d7ca54bab613be42ea3a3e87",
"assets/assets/images/c6.png": "31aa6aa4a2d3829c3c8e78bab3c46e22",
"assets/assets/images/c7.png": "b10da0965d60701fa89d08bf7fb70885",
"assets/assets/images/home.png": "e02dbe417883a22974e2d7ba2ad8883b",
"assets/assets/images/minus.png": "a56af18be5cfb5dd533a1f7097e9f181",
"assets/assets/images/play.png": "72a46eb87b394420e780d76ed25c386f",
"assets/assets/images/plus.png": "016aedc9afded68dcb051cef3c0fdc9d",
"assets/assets/images/stop.png": "79f9e3c747d49617d0082bc65dad67d4",
"assets/assets/images/thank.png": "e07c0c7254ca39c3c1e2d915c2f2baf8",
"assets/assets/music/MUA.mp3": "57fcac928668ad131e2d5987c8f31676",
"assets/assets/music/MUB.mp3": "8605bfabe17abcbd30f54f27666d7e01",
"assets/assets/music/MUC.mp3": "9089d1d3a517eeab29a6ef3d7b9399d7",
"assets/assets/music/MUD.mp3": "dbffb0bf1fd2bbda0674b94f014f9249",
"assets/assets/music/MUE.mp3": "c5ec12afa9a505279baa254a637e975f",
"assets/assets/music/MUF.mp3": "c5ec12afa9a505279baa254a637e975f",
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
"flutter_bootstrap.js": "895551c09feae61d2d2fdff87131d7f7",
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
