if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let b={};const r=e=>a(e,d),n={module:{uri:d},exports:b,require:r};i[d]=Promise.all(c.map((e=>n[e]||r(e)))).then((e=>(s(...e),b)))}}define(["./workbox-8232f3e4"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3230ba436fc2209e26af7f6d7f67787c"},{url:"/_next/static/chunks/192-ce17b24dceb4eed1.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/215-019d078425dacd8e.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/339.28dba3a27ec3aa65.js",revision:"28dba3a27ec3aa65"},{url:"/_next/static/chunks/4bd1b696-8e4b422e4d6f07d2.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/56-081b6c4f8e2d65ac.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/571-2409ba289324b274.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/app/_not-found/page-eac8b21fae9dc707.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/app/about/page-c3797c80a3dc3e71.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/layout-c3510a2ecf59db10.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-aeace5af9e59dd4d.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/app/layout-ce62db4e06e3ca4b.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/app/page-d6e7b95d4ac22013.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/main-app-7fade50a9e094ffc.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/main-e191e790237ac32b.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-373cc23118b4fe2c.js",revision:"vLNOcCFRTPiEbmJd-2GoF"},{url:"/_next/static/css/7e0b81a378bbb645.css",revision:"7e0b81a378bbb645"},{url:"/_next/static/css/7f6bd37aab40623f.css",revision:"7f6bd37aab40623f"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/vLNOcCFRTPiEbmJd-2GoF/_buildManifest.js",revision:"284f2c9d8c23926d24f9e8d43d043c26"},{url:"/_next/static/vLNOcCFRTPiEbmJd-2GoF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/downloads/The Winds of Winter (Preview Chapters) - by George R.R Martin Compiled by Patrick P.epub",revision:"4728bb836d35baa3e15fbcc204940925"},{url:"/downloads/The Winds of Winter (Preview Chapters) - by George R.R Martin Compiled by Patrick P.mobi",revision:"a1bef546e36b567ec0e76e05437406ed"},{url:"/downloads/The Winds of Winter (Preview Chapters) - by George R.R Martin Compiled by Patrick P.pdf",revision:"01adfb0f6584093d0b37def699b39fbf"},{url:"/icon.png",revision:"11258bd0faab17bc1b3de7e19feaa206"},{url:"/icons/120x120.png",revision:"21c0aeb361ac94947878e0edb2ddfe2e"},{url:"/icons/128x128.png",revision:"4bb99d33fa64a6738bda8759437265b4"},{url:"/icons/144x144.png",revision:"82ead25dcb744b840b66a0ea87b8f07d"},{url:"/icons/152x152.png",revision:"cc8cc775d6d35159c8bd871ad4ada9de"},{url:"/icons/16x16.png",revision:"4de13b82ccbcb22688cbf555d5b434f6"},{url:"/icons/180x180.png",revision:"2b5b20350726f18454c6dbefe97fe853"},{url:"/icons/192x192.png",revision:"7ecdb5a0474169d52f84a6609d052f24"},{url:"/icons/32x32.png",revision:"8b0e95c693e38aa93fde607c79e6198c"},{url:"/icons/384x384.png",revision:"712adef307c7137d0c8ce1042d9075b4"},{url:"/icons/512x512.png",revision:"1d5bc43c2e92d2d183861a06284103cf"},{url:"/icons/72x72.png",revision:"ffe79cf779b3a4758c410c5da88c37b4"},{url:"/icons/96x96.png",revision:"423f272cfb52c37dfd3e3a97166be8d6"},{url:"/images/2024-in-review/ablade-glover.webp",revision:"02341b80e7fa7314643ef391259808e1"},{url:"/images/2024-in-review/desk.webp",revision:"921fc8beee8cb12eb416759da82db716"},{url:"/images/2024-in-review/space-odyssey.webp",revision:"200fe4390d2f419f50db04459780024e"},{url:"/images/2024-in-review/trump.webp",revision:"a141eede16d2103c2a95c6f5f0b97042"},{url:"/images/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.WEBP",revision:"e8f97a2b039d95c6463735d8ad9cd394"},{url:"/images/_placeholders/icon.png",revision:"fed671c7e0a7e5c66cca9e8b5062976b"},{url:"/images/_placeholders/no-image.png",revision:"0297e624a028f6c5f96283229ca5e04e"},{url:"/images/be-fast-in-nearly-everything-you-do/100-M-Olympics.webp",revision:"7926da42e6ea444844b7137172ed4e24"},{url:"/images/brain.png",revision:"af331511c61bc9a5383abadd94a04564"},{url:"/images/c++.jpg",revision:"c16e3479637abb7766b4c4f74cfabc35"},{url:"/images/computer.WEBP",revision:"d6fcba94f68f3779537a03ed39e1e779"},{url:"/images/dunes.jpg",revision:"789e49141b0b155b61f6dea87a9b1fc6"},{url:"/images/icon.WEBP",revision:"76a3c8e91916e09cd8f40640aa8923aa"},{url:"/images/icon.png",revision:"feb76ee3b649f5c7ab836d3b9ff276d8"},{url:"/images/jigsaw-presents.png",revision:"0b5964aedc6915f1a26d43641334c7c4"},{url:"/images/lighthouse.png",revision:"fc6e259352d64c6a43edee2f6c503789"},{url:"/images/mad.jpg",revision:"6511aa70992ddb96579d7082bb8791b2"},{url:"/images/me.WEBP",revision:"751779ce8b10333970f0782111fa9f4d"},{url:"/images/me.jpg",revision:"55412d37bd916c60bd1403baf7e8e464"},{url:"/images/monte-carlo.png",revision:"79072db7e70e9cd031bd9310e728592d"},{url:"/images/neistat.jpg",revision:"8a351b02647c99e44e6270adc43641f4"},{url:"/images/new-blog-who-dis/vercel.webp",revision:"7cedac6fd00bbe733932fe7e4ab7bb3a"},{url:"/images/ode-to-pokemon/analogue.webp",revision:"f34a2aa54c5c5a673e0e74634455b243"},{url:"/images/ode-to-pokemon/pokemon.webp",revision:"f97b971c3f5e60b0d83bc52481c368d0"},{url:"/images/ollama-dark.png",revision:"876bdc887624e0bf8250e67ba01699f7"},{url:"/images/patrickprunty.jpg",revision:"39ead334bb182d98e9f584b2dfa9db09"},{url:"/images/pokemon.png",revision:"7f682e6d85fdfe30fc28f542587d4ac6"},{url:"/images/running.WEBP",revision:"f1a41f1b4bdd20754a7127fd64562514"},{url:"/images/space-odyssey.png",revision:"dda2deae970b8007af1b877a7aa7aa9a"},{url:"/images/space-odyssey.webp",revision:"200fe4390d2f419f50db04459780024e"},{url:"/images/spaghetti.jpeg",revision:"0133f301045f8256baf9c1446cc147a6"},{url:"/images/star-pixel.png",revision:"eb25e254ec6b8403eb26f588066c38f8"},{url:"/images/star.jpg",revision:"19c47a26f99ef4b69b332e1365910c53"},{url:"/images/the-winds-of-winter-preview-chapters-ebook-and-pdf-download/grrm.webp",revision:"587bb194772896ca9c37b6d7bc508721"},{url:"/images/the-winds-of-winter-preview-chapters-ebook-and-pdf-download/pdf-showcase.png",revision:"2b5f120cd8dd1f3a77b89b25614a74dc"},{url:"/images/the-winds-of-winter-preview-chapters-ebook-and-pdf-download/winds.webp",revision:"a90c2f01daf8953d203df937b0d02bd6"},{url:"/images/untitled-01/PJ_dinner.webp",revision:"7641097a74a88b4cb985c7f6f9884d8c"},{url:"/images/untitled-01/basquiat.png",revision:"804a4d5b6fcdbc373bc0bb9310d5b0fb"},{url:"/images/untitled-01/basquiat.webp",revision:"212ec08d380cc2dcdad61c7bbc3acb0b"},{url:"/images/vercel.png",revision:"0788bf217711c71c2c76112df6d5661b"},{url:"/images/what-i-talk-about-when-i-talk-about-running/haring.jpg",revision:"f60cc2beb779b4bd983814a6a35133ea"},{url:"/images/what-i-talk-about-when-i-talk-about-running/haring.webp",revision:"9626e4ec39089a2883df53a558118564"},{url:"/images/what-i-talk-about-when-i-talk-about-running/running.webp",revision:"4ddf4f50cffa021fe307dde9e022e41e"},{url:"/images/winds.jpg",revision:"7ed1c1d4f11f19b3ad654e55bd7f6b60"},{url:"/images/woody.jpg",revision:"89b342dc70e56f1f2393521f3b2a4d2d"},{url:"/manifest.json",revision:"1808256433b9111abcee1fa231c5776c"},{url:"/manifest.prod.json",revision:"417ff58d6d8e15077120d8d4751a5f3b"},{url:"/photography/0a94d7f5-834a-4567-86db-93f1ce8dc3ca.webp",revision:"590a6d9d5e773b2f9889c00cdfc5e3b6"},{url:"/photography/232afccf-fb3e-443d-af60-c1c67a6189d0.webp",revision:"0fed1c71c571621676155a85c5aec9b5"},{url:"/photography/2add6d50-7a3e-4142-9707-b3d7d0e8ed7e.webp",revision:"555501973ddc04906666c006f9c37260"},{url:"/photography/2d8324a2-e783-47d8-aa1c-3891e7a8b541.webp",revision:"ebe72136ffa228c2a0ba367d6408df96"},{url:"/photography/39368379_256614928507860_847454518458187776_n.webp",revision:"52b244d1dabe7b53231a8b5629c36794"},{url:"/photography/3cf5f5a9-843c-44e2-9482-45c765a84d30.webp",revision:"9c123473704df185308b8a0c98931620"},{url:"/photography/467D2F33-2596-4561-B35A-B1397A7B7052.webp",revision:"5bbe24e7431355e9f89305c4d9959858"},{url:"/photography/60a53698-deec-4b91-94a8-5513e534c24a.webp",revision:"f8fbec76047b7628ffc1cd591f159b48"},{url:"/photography/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.webp",revision:"11c552b671fef7cfd289bed95d2d112c"},{url:"/photography/9977ee3f-d4bd-4ce6-a57c-04397898b222.webp",revision:"c9537f5fe5500923f7c5ba165b939616"},{url:"/photography/IMG_3572.webp",revision:"968e17a1ee47a43544d91430ffb8e19c"},{url:"/photography/IMG_4648.webp",revision:"1d0908d71c04b087d69ab8e39f3ef737"},{url:"/photography/IMG_4730.webp",revision:"4502f2e9d2b5f56c497e3bec26ca2c30"},{url:"/photography/IMG_5905.webp",revision:"0a2575a13413ef747430420df8bd1ab8"},{url:"/photography/IMG_6023.webp",revision:"744d5412b9e542ddc8c47bb81191bd8c"},{url:"/photography/IMG_6798.webp",revision:"728bdf7301c1dacc90bc59e49dea4dc8"},{url:"/photography/IMG_7218.webp",revision:"f17f351c38782b2c156769f31d60ea12"},{url:"/photography/IMG_7462.webp",revision:"5a09a96fb87e858eba2586a0138a5c11"},{url:"/photography/c57ad8ca-ee1e-4d3d-a9f6-9b0222e211da.webp",revision:"4fbd25bb22f86ed6090b9e9e3ba2adec"},{url:"/photography/me.webp",revision:"332ad666916d5116bbb35f649c5f091c"},{url:"/photos/ablade-glover.webp",revision:"1e79cad8cc7f6623f7aed8ae92123311"},{url:"/photos/desk.webp",revision:"4bc55e358ba0817a2d3dbdb083e6abae"},{url:"/photos/haiyang copy.webp",revision:"82fd0cb7b57ae9b51903b170102fb054"},{url:"/photos/haiyang.webp",revision:"45bd8f60adae9ca2bf2f37b2056ecf5d"},{url:"/photos/space-odyssey.webp",revision:"86a927cfc0ca4ba18a5a0feac007d8e1"},{url:"/photos/trump.webp",revision:"9bda3535ddb084ea93746b2026c4ad88"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|WEBP)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
