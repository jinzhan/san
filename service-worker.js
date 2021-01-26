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

var precacheConfig = [["/sanarchives/2018/03/index.html","5283a893ea78a88eaece97ee44d7af13"],["/sanarchives/2018/03/page/2/index.html","371ace6868c782f9035eb129b9ede4aa"],["/sanarchives/2018/03/page/3/index.html","7f1a6ebfb8cb0c920b7c869dbef3ace6"],["/sanarchives/2018/06/index.html","3ed32f1a4d6ea18afa04242afc32ba3d"],["/sanarchives/2018/10/index.html","e45f211a13164153f9eb2e976e6c207c"],["/sanarchives/2018/11/index.html","15b480fc7658b50cc88c39ecfeefe45e"],["/sanarchives/2018/12/index.html","392ebaab5f133b9d641cc76977d7264d"],["/sanarchives/2018/index.html","59dbc2dbf1426e37b1e55fe28ded415d"],["/sanarchives/2018/page/2/index.html","40bfddc9da3da72a6a833e393500f683"],["/sanarchives/2018/page/3/index.html","e73c650300bf1e52d69e5f5116bbdd12"],["/sanarchives/2018/page/4/index.html","c44c4d7e09bfd4a1ced654b1f2cb64f5"],["/sanarchives/2019/02/index.html","2de8a8c3ef92f8b767bd065003e298d8"],["/sanarchives/2019/03/index.html","f715257344f0b6f1b08fcf11abd4cc7c"],["/sanarchives/2019/04/index.html","36d33f8f8119d0e4cc540c22fa5650ff"],["/sanarchives/2019/06/index.html","eefd51a531fc7c084101d5db79699223"],["/sanarchives/2019/index.html","93f26c239108852de229bd17b59e2f49"],["/sanarchives/2019/page/2/index.html","7908813469fcbfc39bbb8992add7fd08"],["/sanarchives/2020/01/index.html","caf8e4423712c38d0cd20d61b37facd3"],["/sanarchives/2020/05/index.html","0fcade15089b844a50a2ac24988604e7"],["/sanarchives/2020/07/index.html","2ba7394f56b70621f5369f0c8761404e"],["/sanarchives/2020/09/index.html","999e94a96720e93fb8c8c2eb5d7b3c82"],["/sanarchives/2020/index.html","2cb72e5fdb944e8bd7803d2b2ef7a68f"],["/sanarchives/2020/page/2/index.html","175439ee82a2a35559364fd15900fb88"],["/sanarchives/2021/01/index.html","43a2dc419c3c6d662ba8fcb8c336b2b2"],["/sanarchives/2021/index.html","c0fc4ed1867c4b360d530912b602ee6f"],["/sanarchives/index.html","15ba1d0ed0045ff453e747d819f1684b"],["/sanarchives/page/2/index.html","2ae289d63800d5639ddca7b812577bcd"],["/sanarchives/page/3/index.html","3d2e44b3af2b1c54222102280d4bb84c"],["/sanarchives/page/4/index.html","0a872092a13097971942795fe32a989b"],["/sanarchives/page/5/index.html","0c2e2d304014c9fdca0900c4edfe425a"],["/sanarchives/page/6/index.html","7f559128b887e46afdba9465374972a5"],["/sanarchives/page/7/index.html","343101adb339d26292ad6dd67ed1b53c"],["/sanarchives/page/8/index.html","0a9326c57b4517cd33011cd30dc0100e"],["/sancategories/doc/index.html","4738b24d0a779e1988d7fb43c9de3278"],["/sancategories/practice/index.html","6417741507d5165db13d4eb6f24f28a3"],["/sancategories/practice/page/2/index.html","77f7d627deec23980623f92dac3dc475"],["/sancategories/practice/page/3/index.html","0aa6afc7bdd91a599c5f55d56ad1127f"],["/sancategories/practice/page/4/index.html","781526c63ab91fc3127fb2bdbc03640d"],["/sancategories/tutorial/index.html","a44353a3b2f5468b7428605020acbab6"],["/sancategories/tutorial/page/2/index.html","b0cc4e16f8b60f1e4db7496cf3e6a0b0"],["/sancategories/tutorial/page/3/index.html","07a589e12527a9023956aa44c696ad7d"],["/sancategories/tutorial/page/4/index.html","f1fd2f05814bdc9a5da6666144df1453"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","f62c50f25880e89e16fe7348218eacde"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","427efdb11bde0ac3e7833af4f1dd80db"],["/sandoc/main-members/index.html","47aa220735a8bc2f6d0af6075a811a02"],["/sanen/doc/api/index.html","ea95f3eb7ce86ba3a8d2b188bfc46fb5"],["/sanen/doc/main-members/index.html","95a97e631bde8954028a332deedc9357"],["/sanen/example/index.html","d08091c6877bf9856bb3b2ea04d68532"],["/sanen/index.html","44e55f36bf0f13614c1c3a48157b3c56"],["/sanen/practice/array-deep-updates-trigger-view/index.html","699003c851fc2f80c0903363abbc7a8e"],["/sanen/practice/auto-camel/index.html","ee8f3b6ab1450bbbbb8217352588fed2"],["/sanen/practice/can-we-use-dom/index.html","863f5e92120a13acb18374451d565739"],["/sanen/practice/child-to-grandparent/index.html","33a9559f7bb7b19581c82a5f8d181567"],["/sanen/practice/child-to-parent/index.html","a6aea1e5b267fe789dabd7f1af3947ea"],["/sanen/practice/data-invalid/index.html","7d78222f8a61552598cb09ee65c073af"],["/sanen/practice/data-valid/index.html","3db9e2475314eefd94cc7b11d8d8a000"],["/sanen/practice/dynamic-parent-child/index.html","d8dfc908a4eac9560c1887987d914c91"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","1159e2a6b22697f1efe5875513b01b89"],["/sanen/practice/index.html","844a5de3d6d4d6af58b4b3a41f84bb6f"],["/sanen/practice/parent-to-child/index.html","6c5967339ce0361fa5ad10484f87812e"],["/sanen/practice/position-absolute-dom/index.html","58d0504f4fcbd6cbd1f880cfbff6112c"],["/sanen/practice/question-and-answer/index.html","523bf086b236eb363a001f6059f083f5"],["/sanen/practice/san-router-spa/index.html","7f2afdced7e26163040237e2544b6677"],["/sanen/practice/san-store-spa/index.html","c022e8fa56d8e1bf2b1603c7f7385cab"],["/sanen/practice/traverse-object/index.html","a7e4c3486c2c56da10db2fe7ee724ced"],["/sanen/tutorial/background/index.html","d1fa030874ce8419035f2cff3781d9f4"],["/sanen/tutorial/component/index.html","8e7c4db9443744fa53c8810a4b254ed2"],["/sanen/tutorial/data-checking/index.html","9ff091c84827ad0af7ebd759f654f16c"],["/sanen/tutorial/data-method/index.html","ffe97962a3f29cef440da17d84c379ad"],["/sanen/tutorial/event/index.html","6be30462ba52fb1fc76030265a258f64"],["/sanen/tutorial/for/index.html","9010d1a58e5515dabbc4a599567b0aab"],["/sanen/tutorial/form/index.html","d67c718761ecb616dfe93f2d1323149b"],["/sanen/tutorial/if/index.html","4049150913eb3e0fd86e998753eb8da7"],["/sanen/tutorial/reverse-flag/index.html","b493ac29647568cfa06d8f7e1cb7c5a2"],["/sanen/tutorial/reverse/index.html","69910bbfb5e9d62f1350d3f6b06545ed"],["/sanen/tutorial/setup/index.html","fe81c5ebefb36284c41b4d51f3c14abf"],["/sanen/tutorial/slot/index.html","8385aff941a624e7df10c756c8cf33f7"],["/sanen/tutorial/ssr-before-3.8/index.html","1113744ec41841b069e5a92d3c9dda79"],["/sanen/tutorial/ssr/index.html","2478fe58873de3ff784431bb7206f207"],["/sanen/tutorial/start/index.html","77c9191719ac80b19bf3e30e5569a6d5"],["/sanen/tutorial/style/index.html","7718453c0c1df46baa7baf2c110cfb07"],["/sanen/tutorial/template/index.html","4508abae5f27fc6292588c5a4220b9fd"],["/sanen/tutorial/transition/index.html","ced86cbcbdec9e085781e3fa54c7bc95"],["/sanexample/index.html","75dcaa110bba9204ccfdbd2f5a1ec1f6"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","a42f7cf9b1dd363efe19ddf6cbcc11c2"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","6f8390f1a1c693f17df0de0143a1c797"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","536985cb34cdea52711130cb34549ace"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","c003c71761bd9d851f2ffac2075ca069"],["/sanpage/3/index.html","ab976d1f7229a172fb6a91842be885ee"],["/sanpage/4/index.html","6b3d4a171fa0214b24dafbb8c5669959"],["/sanpage/5/index.html","76c26d2c44c8f4156bfd9a756fa8a46c"],["/sanpage/6/index.html","80f3fb538688326ba9f48c8ca61cbfcd"],["/sanpage/7/index.html","f4eb4197902361d5eef1f4e4d79ad78d"],["/sanpage/8/index.html","173fca27b9f2b1e8f98e010ca1b3895c"],["/sanpractice/array-deep-updates-trigger-view/index.html","6f5172d8eb7a5823f043404f275afeaa"],["/sanpractice/auto-camel/index.html","7595eee60a8cface82f06666aff112fe"],["/sanpractice/can-we-use-dom/index.html","28bcacfefae5072c9b1126181bc08403"],["/sanpractice/child-to-grandparent/index.html","89a977c1936830273aa03735670eaabb"],["/sanpractice/child-to-parent/index.html","d7638e4c2dc4f2f6bb03546ec4339e7b"],["/sanpractice/data-invalid/index.html","b749ab7dc788431cfc9667622ee5a5a7"],["/sanpractice/data-valid/index.html","a7255696f516b999be474ee86730c653"],["/sanpractice/dynamic-parent-child/index.html","4c1f7ac5345fccf84d1eda2fff9e4dae"],["/sanpractice/how-to-show-or-hide-an-element/index.html","b695f8ff6e29920ca9b65dc92de55eb7"],["/sanpractice/ie-compatibility/index.html","9295aeca29d1aaabae3b50a4a8f1afc3"],["/sanpractice/index.html","3ff3d4db1df5b953b055eefd2fedcfde"],["/sanpractice/parent-to-child/index.html","e6ae94dbc4380a120aea7b28d68ea423"],["/sanpractice/position-absolute-dom/index.html","9de8c03a76d8c33058a6ff1d4ce07d08"],["/sanpractice/question-and-answer/index.html","e69f4328e632eec0e40d67e0c3c56e5e"],["/sanpractice/san-router-spa/index.html","abb875ce8072f4ce52944976bd4c043a"],["/sanpractice/san-store-spa/index.html","3c8f2d1da32a05fb6a4adbf31bbe6874"],["/sanpractice/traverse-object/index.html","4d9dbfa9e9e432e50e02fa8f7c8c07a0"],["/santutorial/background/index.html","b11377f3c48c417df36b8a91ce50e4ce"],["/santutorial/component/index.html","e04d1b5635c12919d615411ca57d1706"],["/santutorial/data-checking/index.html","b1d1d9d801722b282aa76d1b29a3faca"],["/santutorial/data-method/index.html","6262cfb15887f23c49b2ae520f9fe3a5"],["/santutorial/event/index.html","da3ab2400a9ea2681523abe69d12f29d"],["/santutorial/for/index.html","505231a6275855170c61c1adb8d4f1e3"],["/santutorial/form/index.html","3590b5906e1e8bff6f307cadf018f847"],["/santutorial/if/index.html","9a62e4d55e458a956bdc72815437a02f"],["/santutorial/reverse-flag/index.html","b9c132ac219dbf026ae64f9c74bff501"],["/santutorial/reverse/index.html","f9f05502f6b6f5bf237af48f375d86ca"],["/santutorial/setup/index.html","89eb6b4da53a96f7b5af98e69a74dee2"],["/santutorial/slot/index.html","72e92b314266645b1b78554ffa8db121"],["/santutorial/ssr-before-3.8/index.html","37b86213929be4c8c8ff94f3f130f709"],["/santutorial/ssr/index.html","15d810bb451c2c8c82a01ba0d48f5245"],["/santutorial/start/index.html","bb5cc1200bd44f1dc7b721f84a915c98"],["/santutorial/style/index.html","f5081f73499f4a866ba2e5d087d8f5b1"],["/santutorial/template/index.html","9abf27eef113fd1c1617067b5301ef97"],["/santutorial/transition/index.html","587b483979e187a63cfabb08a59d3cc9"]];
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







