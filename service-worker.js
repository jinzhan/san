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

var precacheConfig = [["/sanarchives/2018/03/index.html","5283a893ea78a88eaece97ee44d7af13"],["/sanarchives/2018/03/page/2/index.html","371ace6868c782f9035eb129b9ede4aa"],["/sanarchives/2018/03/page/3/index.html","7f1a6ebfb8cb0c920b7c869dbef3ace6"],["/sanarchives/2018/06/index.html","3ed32f1a4d6ea18afa04242afc32ba3d"],["/sanarchives/2018/10/index.html","e45f211a13164153f9eb2e976e6c207c"],["/sanarchives/2018/11/index.html","15b480fc7658b50cc88c39ecfeefe45e"],["/sanarchives/2018/12/index.html","392ebaab5f133b9d641cc76977d7264d"],["/sanarchives/2018/index.html","59dbc2dbf1426e37b1e55fe28ded415d"],["/sanarchives/2018/page/2/index.html","40bfddc9da3da72a6a833e393500f683"],["/sanarchives/2018/page/3/index.html","e73c650300bf1e52d69e5f5116bbdd12"],["/sanarchives/2018/page/4/index.html","c44c4d7e09bfd4a1ced654b1f2cb64f5"],["/sanarchives/2019/02/index.html","2de8a8c3ef92f8b767bd065003e298d8"],["/sanarchives/2019/03/index.html","f715257344f0b6f1b08fcf11abd4cc7c"],["/sanarchives/2019/04/index.html","36d33f8f8119d0e4cc540c22fa5650ff"],["/sanarchives/2019/06/index.html","eefd51a531fc7c084101d5db79699223"],["/sanarchives/2019/index.html","93f26c239108852de229bd17b59e2f49"],["/sanarchives/2019/page/2/index.html","7908813469fcbfc39bbb8992add7fd08"],["/sanarchives/2020/01/index.html","caf8e4423712c38d0cd20d61b37facd3"],["/sanarchives/2020/05/index.html","0fcade15089b844a50a2ac24988604e7"],["/sanarchives/2020/07/index.html","2ba7394f56b70621f5369f0c8761404e"],["/sanarchives/2020/09/index.html","999e94a96720e93fb8c8c2eb5d7b3c82"],["/sanarchives/2020/index.html","2cb72e5fdb944e8bd7803d2b2ef7a68f"],["/sanarchives/2020/page/2/index.html","175439ee82a2a35559364fd15900fb88"],["/sanarchives/2021/01/index.html","43a2dc419c3c6d662ba8fcb8c336b2b2"],["/sanarchives/2021/index.html","c0fc4ed1867c4b360d530912b602ee6f"],["/sanarchives/index.html","15ba1d0ed0045ff453e747d819f1684b"],["/sanarchives/page/2/index.html","2ae289d63800d5639ddca7b812577bcd"],["/sanarchives/page/3/index.html","3d2e44b3af2b1c54222102280d4bb84c"],["/sanarchives/page/4/index.html","0a872092a13097971942795fe32a989b"],["/sanarchives/page/5/index.html","0c2e2d304014c9fdca0900c4edfe425a"],["/sanarchives/page/6/index.html","7f559128b887e46afdba9465374972a5"],["/sanarchives/page/7/index.html","343101adb339d26292ad6dd67ed1b53c"],["/sanarchives/page/8/index.html","0a9326c57b4517cd33011cd30dc0100e"],["/sancategories/doc/index.html","4738b24d0a779e1988d7fb43c9de3278"],["/sancategories/practice/index.html","6417741507d5165db13d4eb6f24f28a3"],["/sancategories/practice/page/2/index.html","77f7d627deec23980623f92dac3dc475"],["/sancategories/practice/page/3/index.html","0aa6afc7bdd91a599c5f55d56ad1127f"],["/sancategories/practice/page/4/index.html","781526c63ab91fc3127fb2bdbc03640d"],["/sancategories/tutorial/index.html","a44353a3b2f5468b7428605020acbab6"],["/sancategories/tutorial/page/2/index.html","b0cc4e16f8b60f1e4db7496cf3e6a0b0"],["/sancategories/tutorial/page/3/index.html","07a589e12527a9023956aa44c696ad7d"],["/sancategories/tutorial/page/4/index.html","f1fd2f05814bdc9a5da6666144df1453"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","f62c50f25880e89e16fe7348218eacde"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","93cd739f366894cd88095b874de75cd1"],["/sandoc/main-members/index.html","5fe145feb89adfce39446640aa569fd4"],["/sanen/doc/api/index.html","bd3da574c1b1e38f73b46de44cb217f2"],["/sanen/doc/main-members/index.html","8ac0ace4206b4b7fad8848163a931e05"],["/sanen/example/index.html","c18f9d43c4de87c597ba6a8cc5fcff47"],["/sanen/index.html","44e55f36bf0f13614c1c3a48157b3c56"],["/sanen/practice/array-deep-updates-trigger-view/index.html","547f22c7394c6ad2d9e6df6359cb4e79"],["/sanen/practice/auto-camel/index.html","2eba0ffb10a438d3a669addd6460372e"],["/sanen/practice/can-we-use-dom/index.html","0ec222f19ea1bfa65c712ba95a1d0a4d"],["/sanen/practice/child-to-grandparent/index.html","c2b6fcfe55fd3ec5b7fd1f83fc5f62e5"],["/sanen/practice/child-to-parent/index.html","1db41f956393bca1f8f8734cc69e1c0c"],["/sanen/practice/data-invalid/index.html","72a8ba5a27beddcc3ef6be071574fd0e"],["/sanen/practice/data-valid/index.html","d9d10538340da3bd082d8a115853c957"],["/sanen/practice/dynamic-parent-child/index.html","6a5fb1c69301a51bc93db06c6f843ed1"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","1533aea53b1cb00eba1ba1c9a53f85d9"],["/sanen/practice/index.html","6b068f027088d11fdb36a473aad6b2c6"],["/sanen/practice/parent-to-child/index.html","e0b08cc8694f2d62174d1990d4e7ddda"],["/sanen/practice/position-absolute-dom/index.html","f0c6a3febda058c37659a719d8ab4736"],["/sanen/practice/question-and-answer/index.html","f2ce7a6c66f186b8f21c92b3f8c0a38f"],["/sanen/practice/san-router-spa/index.html","ddf96b21039f7a4b6c4c1e2d24c40348"],["/sanen/practice/san-store-spa/index.html","d7b418ea86e5348e03eb42980f5cdd20"],["/sanen/practice/traverse-object/index.html","2435b2e4bd6eb2b878a332b08ff175e2"],["/sanen/tutorial/background/index.html","753f043eb55ef67643f664ae5c99fdc9"],["/sanen/tutorial/component/index.html","3167bdf678f3916d5a69c667c25cbaaf"],["/sanen/tutorial/data-checking/index.html","79eef2e94925f4ee972c5403772f2b77"],["/sanen/tutorial/data-method/index.html","41951e7a2ccc50e24d69c34b492e8697"],["/sanen/tutorial/event/index.html","66d5a6f50fcae0f0a1c13256e9cc644f"],["/sanen/tutorial/for/index.html","d9284aacd8223bbfb95ccf0f37df8227"],["/sanen/tutorial/form/index.html","2ab02892a9701b186006cbb8735e8426"],["/sanen/tutorial/if/index.html","f1d4b14586cadd208550f772c0f1de93"],["/sanen/tutorial/reverse-flag/index.html","5f6d1479bc70fd1f622cf858a53d9d9b"],["/sanen/tutorial/reverse/index.html","ec5a2252df21a40e653a31dc771d6cd6"],["/sanen/tutorial/setup/index.html","52f2a6b666beacb6d7b328d29abc41c2"],["/sanen/tutorial/slot/index.html","e74dca56fbb4643a67697d3f5d1906da"],["/sanen/tutorial/ssr-before-3.8/index.html","ce4d1c10bc7d8d6e62026ab55b846c3c"],["/sanen/tutorial/ssr/index.html","b3845d798aaf6de8cf374a45351155a4"],["/sanen/tutorial/start/index.html","142b86d0ef8faaf02aeb249ca0d76dca"],["/sanen/tutorial/style/index.html","bef3957be3f128d6e3ed48822edb85e5"],["/sanen/tutorial/template/index.html","b0333259e34703da767d2453665c6609"],["/sanen/tutorial/transition/index.html","814cd23b7e26a147d28d2adbc5e81122"],["/sanexample/index.html","9e90d0bdcc0eb42e9f2926cb07c7601f"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","a42f7cf9b1dd363efe19ddf6cbcc11c2"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","6f8390f1a1c693f17df0de0143a1c797"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","536985cb34cdea52711130cb34549ace"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","c003c71761bd9d851f2ffac2075ca069"],["/sanpage/3/index.html","ab976d1f7229a172fb6a91842be885ee"],["/sanpage/4/index.html","6b3d4a171fa0214b24dafbb8c5669959"],["/sanpage/5/index.html","76c26d2c44c8f4156bfd9a756fa8a46c"],["/sanpage/6/index.html","80f3fb538688326ba9f48c8ca61cbfcd"],["/sanpage/7/index.html","f4eb4197902361d5eef1f4e4d79ad78d"],["/sanpage/8/index.html","173fca27b9f2b1e8f98e010ca1b3895c"],["/sanpractice/array-deep-updates-trigger-view/index.html","907de02bd5cda779429488f84d589315"],["/sanpractice/auto-camel/index.html","76c0e5f52ebdcbe15458f7924a05f5ec"],["/sanpractice/can-we-use-dom/index.html","9abe5d7468e471d5268fc1d9bcd355b9"],["/sanpractice/child-to-grandparent/index.html","3f1a8036ec8d538e27c532469e58d9a2"],["/sanpractice/child-to-parent/index.html","6043d4682dedc4d65494fc164e280998"],["/sanpractice/data-invalid/index.html","d4d253dcf792cdec16fc248672dd686b"],["/sanpractice/data-valid/index.html","170b84e69f58be3ccc5ff6ad1118f037"],["/sanpractice/dynamic-parent-child/index.html","b9da13669579788a3f4583d618e17eb6"],["/sanpractice/how-to-show-or-hide-an-element/index.html","a47787322216477668cf69c37cbb1bda"],["/sanpractice/ie-compatibility/index.html","ef232bb18fe2cd7fab6d06af987d3ca6"],["/sanpractice/index.html","30f7bd06cb73a9e01d476450219b6207"],["/sanpractice/parent-to-child/index.html","9ed655ca16119e3954435f260ec3cd6d"],["/sanpractice/position-absolute-dom/index.html","67d5c6e1051abefa44cd6c762f592f25"],["/sanpractice/question-and-answer/index.html","2ec33ac58328c3972b4db1c3723abbc1"],["/sanpractice/san-router-spa/index.html","77ae9c3317f0857af49a43d12fa81487"],["/sanpractice/san-store-spa/index.html","4f3a8dbca4692495fb9e94dffea8bd3a"],["/sanpractice/traverse-object/index.html","ca92f7cc20068261394d6fbe51a36a4e"],["/santutorial/background/index.html","4a20786474db5ee99f2c584ca74fe367"],["/santutorial/component/index.html","33165694620297966b0f428fead30ec4"],["/santutorial/data-checking/index.html","c3631ab0037a0fe5db4c722b5845ee21"],["/santutorial/data-method/index.html","570698c650963c236c84ae41c0892070"],["/santutorial/event/index.html","24950850df7e7932552d3245391fe9f4"],["/santutorial/for/index.html","02a1343545dfe5bbd1467a4cf3048ffa"],["/santutorial/form/index.html","3805b0aa0e1ec20f99e048c272d81857"],["/santutorial/if/index.html","8252cb76869e5694abae083e6495f586"],["/santutorial/reverse-flag/index.html","e11db144cd3400be2f8dbcd154a37d7e"],["/santutorial/reverse/index.html","3bddb74a821a926eb64f0acea6cf7840"],["/santutorial/setup/index.html","0bb3b48f490a8e4f2eb5343ca02e13f0"],["/santutorial/slot/index.html","96318e9c82715e6389080d719767ee34"],["/santutorial/ssr-before-3.8/index.html","30cccddd79a8341ddbcf827c8d2b0a8f"],["/santutorial/ssr/index.html","2adfa9c08ecf71b1821efa7a5175d02d"],["/santutorial/start/index.html","f29c842d8aba9f9d20709463b307b8bf"],["/santutorial/style/index.html","e6765c756b1f9039f7e1833c138dcb02"],["/santutorial/template/index.html","84ee080869fa7d620490feed1c052c74"],["/santutorial/transition/index.html","fe5188ba2338d22cfce1af8f377675d3"]];
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







