/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/sanarchives/2018/03/index.html","bf8146c64fa40c761b4e755beb09870c"],["/sanarchives/2018/03/page/2/index.html","7a1c9fb064e79254ce1d5387492f3e63"],["/sanarchives/2018/03/page/3/index.html","4a828545d7f54001e41c49fce26f2113"],["/sanarchives/2018/06/index.html","2abf5d59c96472790fa53cc6b7c76116"],["/sanarchives/2018/10/index.html","ade36f70e8cee94aca9fe67532e9ddf3"],["/sanarchives/2018/11/index.html","e6af5805598e9113602a74cbf6d6ebe5"],["/sanarchives/2018/12/index.html","7099678916c1d3530c5269a43c5b5ab8"],["/sanarchives/2018/index.html","61da9a546a6f0bbff14893026b108141"],["/sanarchives/2018/page/2/index.html","552593a89bc0a3a6e4ac747d83ef088a"],["/sanarchives/2018/page/3/index.html","d21749cf36c66eb53faccb546749cb46"],["/sanarchives/2018/page/4/index.html","2cebe4b7d9e2cfa7aba05da2ef80834f"],["/sanarchives/2019/02/index.html","bf90f398eedd41380b15f96ca9734f79"],["/sanarchives/2019/03/index.html","a535a2893a7c900cf7cf4584d0a8268c"],["/sanarchives/2019/04/index.html","f4f1fd0a9be627693c2c7bac74960441"],["/sanarchives/2019/06/index.html","61298369adb70e19135b8f778a314710"],["/sanarchives/2019/index.html","147643b8dea0c6a4c5271e07280043c8"],["/sanarchives/2019/page/2/index.html","46372d4e3e8c80d2f178da44c1c10be1"],["/sanarchives/2020/01/index.html","65c08001da87c5203d2174ab82ead17d"],["/sanarchives/2020/05/index.html","cc2b0debb7e31284dd1be368f6517d6a"],["/sanarchives/2020/07/index.html","23af99fa0aa57e80a10078b9e6cba356"],["/sanarchives/2020/09/index.html","61c235eec69eaabeb548b417902b4f3e"],["/sanarchives/2020/index.html","ddae0670627cda8f324df4918eab297f"],["/sanarchives/2020/page/2/index.html","a289da00c655bd1b0309fadfedfe8112"],["/sanarchives/2021/01/index.html","c3085b90f33cdfdc85579e1d1a0ba1f2"],["/sanarchives/2021/index.html","4632db70b0656b0582dba95bad3babb9"],["/sanarchives/index.html","9cb385c33e058db8a4127e643629a7ee"],["/sanarchives/page/2/index.html","9f6c634f07493a54ae9c215516040d35"],["/sanarchives/page/3/index.html","8e96ae5ade7c04c7af0b7816027e020e"],["/sanarchives/page/4/index.html","79a0f16b539a6b3c8876f9c673fdb6d9"],["/sanarchives/page/5/index.html","40de08b0b1ffbe1bfa51e6bfadb0829f"],["/sanarchives/page/6/index.html","cd9c029a784040dfc7e8927aa20c7ee2"],["/sanarchives/page/7/index.html","b58a117af32073210dd4190edcc0b8b2"],["/sanarchives/page/8/index.html","e6274fc5c02e1fecee67b092f7b6da39"],["/sancategories/doc/index.html","21cef2ed84dbd5f7d91a60faf4ef5c18"],["/sancategories/practice/index.html","78ee5d7a67206b26ebdf260f7fe97eb3"],["/sancategories/practice/page/2/index.html","92310bff00b4cd67cdd94a635cb6e5dc"],["/sancategories/practice/page/3/index.html","bc974442461e104ff25347549931e7d9"],["/sancategories/practice/page/4/index.html","0576d2d44bf653fe5834c98e85fa3456"],["/sancategories/tutorial/index.html","0e59484c1162d60430b8b2e0e87c2739"],["/sancategories/tutorial/page/2/index.html","9e4ce0562e825400ee80ed6a2e1a6f02"],["/sancategories/tutorial/page/3/index.html","5e8763b08dd110afc4aee5fbc6980178"],["/sancategories/tutorial/page/4/index.html","b72bcf2053ef84e9a762dba6c4e5104d"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","f62c50f25880e89e16fe7348218eacde"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","ed37026b073eacde9920301dd058a879"],["/sandoc/main-members/index.html","d56c9cacd0b1a9c92c76bed0c6b6607b"],["/sanen/doc/api/index.html","51b9e109c1839decefa5884af6be85e9"],["/sanen/doc/main-members/index.html","095c9d9f9bf18922773374a31dbb7d44"],["/sanen/example/index.html","ff43bac6be901b1e2bfff09644687fc0"],["/sanen/index.html","7c5f09a2db185daba4f104d83b9e8239"],["/sanen/practice/array-deep-updates-trigger-view/index.html","7d2044b9eb3b446fea774a371deb0fc7"],["/sanen/practice/auto-camel/index.html","c35525da514fcc441ffbada8cda50414"],["/sanen/practice/can-we-use-dom/index.html","3f7ff07c62a57e5dc2ef233e4e5be049"],["/sanen/practice/child-to-grandparent/index.html","8b8aca717fb80bd46e7ab2fd3d339e62"],["/sanen/practice/child-to-parent/index.html","4fed8f29c535014b19d91a7d1cabd939"],["/sanen/practice/data-invalid/index.html","de3ab1781fe3aae542cfcd9d17561381"],["/sanen/practice/data-valid/index.html","e61e96f3fe4a1ffe3b91f8144621ad7e"],["/sanen/practice/dynamic-parent-child/index.html","b319758fc1dd8f93ff2c826e3d294e29"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","ed1a77f7f113246c0f5d76b59435f3de"],["/sanen/practice/index.html","17d05896d10dc7cbdec04e12765c9f80"],["/sanen/practice/parent-to-child/index.html","0a01acf2ae81e3eb79ba6cec3c5e5c74"],["/sanen/practice/position-absolute-dom/index.html","a36f968e8b7bba6c90a227f8812c1437"],["/sanen/practice/question-and-answer/index.html","a5788c7beb6e48d805dd1f51ad6bd476"],["/sanen/practice/san-router-spa/index.html","01f3a9f597abcc01d689488b99abf3a9"],["/sanen/practice/san-store-spa/index.html","507b5d52a5a931e9af0c495daf63313d"],["/sanen/practice/traverse-object/index.html","264ffc527b879e3e6a96456cc93224c3"],["/sanen/tutorial/background/index.html","857efdf2d05421f934359d930e67f612"],["/sanen/tutorial/component/index.html","ac7433a95e68b9c71593f3bd97679381"],["/sanen/tutorial/data-checking/index.html","9c581bb19599c01f5ae4c1b0c3b6d9aa"],["/sanen/tutorial/data-method/index.html","73b29b44f713d530b9fcf322c7c2b312"],["/sanen/tutorial/event/index.html","bfe67ac267c5e55ac4365a6c440be3ee"],["/sanen/tutorial/for/index.html","548413539fa5bdceaa4079358b9b5443"],["/sanen/tutorial/form/index.html","b243438f3ed0b5d08d0245407dc0c8b4"],["/sanen/tutorial/if/index.html","6ac7bd0babe84892d3210bcba509916b"],["/sanen/tutorial/reverse-flag/index.html","acffa80795ee2a025a1f5013cdfd4fb2"],["/sanen/tutorial/reverse/index.html","3d50531c549eeb178059657b6a7ed76e"],["/sanen/tutorial/setup/index.html","b037abd146032e6634d03e368cd7efe1"],["/sanen/tutorial/slot/index.html","f907fded5816b2a161123f2c5994138f"],["/sanen/tutorial/ssr-before-3.8/index.html","7738110ce839a16dd2c571a8be420417"],["/sanen/tutorial/ssr/index.html","803f646c8dc2a0fb14c88b80d86e01d5"],["/sanen/tutorial/start/index.html","000da0e4327c7406cfc8d9bbd5b2fcc4"],["/sanen/tutorial/style/index.html","0dcc007da9e102031873957572abd3ee"],["/sanen/tutorial/template/index.html","0ad37f4d32242aee1affacf6824dcea6"],["/sanen/tutorial/transition/index.html","61928d98601ad13ef94b887e5efbf3f4"],["/sanexample/index.html","58db476dcea8b61d0cfb612cd3e3d9a3"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","a42f7cf9b1dd363efe19ddf6cbcc11c2"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","fe77d2a86a89b08a677af9a6f10ea7dc"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","536985cb34cdea52711130cb34549ace"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","4b51d8a256097a7c962798162b4dd35b"],["/sanpage/3/index.html","ec3b305293c82b3f02ff30bc5d133be5"],["/sanpage/4/index.html","ebb094df904e83db38052fc80595b211"],["/sanpage/5/index.html","c7a1927de6448226642a4721f4b5a87d"],["/sanpage/6/index.html","80fd9c7533326599b1f16bb4f122cbc2"],["/sanpage/7/index.html","1c99c7b62828427e88aa5d5df3645e42"],["/sanpage/8/index.html","8cfd6600494a12960088799591d24f0a"],["/sanpractice/array-deep-updates-trigger-view/index.html","d091a62a1924ef8d094b018d67b52f8f"],["/sanpractice/auto-camel/index.html","2e6ce5cd7c84c19103ed34bbb157cb6f"],["/sanpractice/can-we-use-dom/index.html","2a9ad539193d27912c8be0aef906d0dc"],["/sanpractice/child-to-grandparent/index.html","41ec1f4e785987ac32122ca26ea6c20a"],["/sanpractice/child-to-parent/index.html","1f0e671d13e5cf55c586459e6a88414c"],["/sanpractice/data-invalid/index.html","55c20b7faa1ee5ff0bedb66da543c167"],["/sanpractice/data-valid/index.html","a8fb5f1a68cd74def639e5fd1417a21b"],["/sanpractice/dynamic-parent-child/index.html","cacca774aedaf9db03785ece6014bfb3"],["/sanpractice/how-to-show-or-hide-an-element/index.html","2364c7e212f4cd7d4a727ead19e32b88"],["/sanpractice/ie-compatibility/index.html","811d067d6baa954cba9f66c0d646a784"],["/sanpractice/index.html","4f6d4d4a30f5be470d15dbadd6da9141"],["/sanpractice/parent-to-child/index.html","1dfae0f9beac1a1f82542324de5da88c"],["/sanpractice/position-absolute-dom/index.html","ee992200fe09ac58e1b9030d716aedb3"],["/sanpractice/question-and-answer/index.html","b7aae80035138b27fa911b51f46bed2b"],["/sanpractice/san-router-spa/index.html","516ac5020228876de28faecff1ae9058"],["/sanpractice/san-store-spa/index.html","a4fc93d2ed5a263ca4b899dee96f6999"],["/sanpractice/traverse-object/index.html","3220e32c1162c53f617bf9d78b0f4b74"],["/santutorial/background/index.html","445e7bc21183d551e64660d803df375c"],["/santutorial/component/index.html","af7b97eee85a41f498a1d7cde16a0926"],["/santutorial/data-checking/index.html","d52b74f301b3dfbd1bb69f8156f558db"],["/santutorial/data-method/index.html","f28442f1e05cfddc71b1be880c54f54b"],["/santutorial/event/index.html","3ff5492d80201a56057e207eea76ca6e"],["/santutorial/for/index.html","0dc01fcec12454e471c4a6b7e5e660f4"],["/santutorial/form/index.html","e25e9a82fb3b288886ef5e23f1551fc3"],["/santutorial/if/index.html","e6092f75b88f6f35c69c9219fd786bf3"],["/santutorial/reverse-flag/index.html","b11c12f238ce45e96556afad99b5f25e"],["/santutorial/reverse/index.html","ad5f1edcc73798a7372242acb468526a"],["/santutorial/setup/index.html","22fe956a619d119eea781ceaa53707b9"],["/santutorial/slot/index.html","09bac06156328d71bc4e201954b2833a"],["/santutorial/ssr-before-3.8/index.html","5d3cad6cfb6b855b2aae9d787310d2cc"],["/santutorial/ssr/index.html","19a41c7dd09c311ab232adeb0967609a"],["/santutorial/start/index.html","1ae90f09170f787fe305953364a0d7dd"],["/santutorial/style/index.html","4e2ab3b5078431d953123963dc45342a"],["/santutorial/template/index.html","d80d2fb2fea15873dcb82d7eb6d0dc8d"],["/santutorial/transition/index.html","b2f26e28b86ab341423bc81171f58301"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







