/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1b8e545794eb945c1e37d80bba0b2b2e"
  },
  {
    "url": "about.html",
    "revision": "d55ca4c26cdba8fbacdc58d37da9edda"
  },
  {
    "url": "articles/27yrsOld.html",
    "revision": "56e76f0ea371af38adf3db3907997660"
  },
  {
    "url": "articles/music.html",
    "revision": "9fa804a48571d4b24771e19609aedcda"
  },
  {
    "url": "articles/pharma_discovery.html",
    "revision": "93378d01890938d190427d74794c047b"
  },
  {
    "url": "articles/placeholder.html",
    "revision": "e289c6e44ac741231dd10852cf68ce77"
  },
  {
    "url": "articles/randomnote.html",
    "revision": "daff23956bbe6adb502e22efb83b4fd4"
  },
  {
    "url": "articles/readingnote.html",
    "revision": "7bc4a42cb5dbd46d8a01aeb49ba88efb"
  },
  {
    "url": "assets/css/0.styles.6b8d597f.css",
    "revision": "75f6a5b19a8f86e8e1811782647bd0e2"
  },
  {
    "url": "assets/img/icons/icon-128x128.png",
    "revision": "6126a3260ec53bc5ada807c09644e8e1"
  },
  {
    "url": "assets/img/icons/icon-144x144.png",
    "revision": "21c68a8f050cc719ee241da327c95dc0"
  },
  {
    "url": "assets/img/icons/icon-152x152.png",
    "revision": "5d1280846fe19c1217c64fd3ddbe7998"
  },
  {
    "url": "assets/img/icons/icon-192x192.png",
    "revision": "5d1280846fe19c1217c64fd3ddbe7998"
  },
  {
    "url": "assets/img/icons/icon-384x384.png",
    "revision": "5d1280846fe19c1217c64fd3ddbe7998"
  },
  {
    "url": "assets/img/icons/icon-512x512.png",
    "revision": "5d1280846fe19c1217c64fd3ddbe7998"
  },
  {
    "url": "assets/img/icons/icon-72x72.png",
    "revision": "f3cd52bb440d0cf9023c6d213689a513"
  },
  {
    "url": "assets/img/icons/icon-96x96.png",
    "revision": "ffbb5f7dc4c7f230ac948e796d3c9f09"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "eb4673822ba24ca224f82c8ea2c96584"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/protoss.jpg",
    "revision": "380d16faac21219a8b336132af3c5fb9"
  },
  {
    "url": "assets/img/roadmap_20201222.jpg",
    "revision": "9705b02861f8f429df3a76db4d7f68a4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Starcraft-Zerg-Logo-Stencil-thumb-150x150.jpg",
    "revision": "4105c8308588bc25a9868beef2e2712c"
  },
  {
    "url": "assets/js/10.ee945ec6.js",
    "revision": "ebf3eee2759b61e85e971e84910388a5"
  },
  {
    "url": "assets/js/11.21543b99.js",
    "revision": "21730e58d2e8c1f6e99466b525aeb713"
  },
  {
    "url": "assets/js/12.d35e028b.js",
    "revision": "99984cef3553770bccaa3bb3b4961b76"
  },
  {
    "url": "assets/js/13.133225fe.js",
    "revision": "eda15e6af456e87d6e89e03763146372"
  },
  {
    "url": "assets/js/14.950088fd.js",
    "revision": "d3d1c99c09b04c1d9ca2233d9d230721"
  },
  {
    "url": "assets/js/2.d611165f.js",
    "revision": "7c69776ddcb12417d2d2f958cc819164"
  },
  {
    "url": "assets/js/3.f4fa7416.js",
    "revision": "cc81af4bf8a506db91c379b2a376d89f"
  },
  {
    "url": "assets/js/4.e370e338.js",
    "revision": "ae7189a7f373d73d76a4ac34e79d04d3"
  },
  {
    "url": "assets/js/5.aad7c4e2.js",
    "revision": "1a378d1a81dba909a2b1cb11a623e24d"
  },
  {
    "url": "assets/js/6.53698856.js",
    "revision": "38b90e35673f00c883ffa52abfc7f0a0"
  },
  {
    "url": "assets/js/7.60381639.js",
    "revision": "2860c50f7ac6942d69d4be5175443a6d"
  },
  {
    "url": "assets/js/8.f2c92243.js",
    "revision": "bfc2f3056a682d401a0ccde7842b510c"
  },
  {
    "url": "assets/js/9.e7be0566.js",
    "revision": "4211634be51b9a40b1ce6d4e146f1915"
  },
  {
    "url": "assets/js/app.cd7e29a4.js",
    "revision": "65f1656cf77a63e898d771657f0de0e9"
  },
  {
    "url": "guide/index.html",
    "revision": "f0d9c844860d103d3d426127c383ec64"
  },
  {
    "url": "index.html",
    "revision": "942e7f991c7826deb3e0732f2e85af25"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
