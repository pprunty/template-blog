if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const n=e=>i(e,d),o={module:{uri:d},exports:r,require:n};a[d]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-8232f3e4"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"15665257652f00f3275fa4f80b25fb18"},{url:"/_next/static/chunks/104-7751fd8fecde5dde.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/117-adfa855864ea1f33.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/178-1ec63ae97ffa0d5b.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/972-365bad3dfb53265e.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/app/_not-found/page-e5ef88344ff6cc38.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/app/about/page-fc012f66afb0bc91.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/layout-a9e394350f5ec162.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-9d9a06304c3620dd.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/app/layout-087310afcc7e640b.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/app/page-dc62b3e22a8d84a1.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/fd9d1056-6c9c58458c5cf96a.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/main-app-c57289e32f729de6.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/main-caf21732978a3575.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-2cd36825c1eef3a6.js",revision:"dbEcg3PEjO3Uh9ZkoVimd"},{url:"/_next/static/css/4d78a460a1db084e.css",revision:"4d78a460a1db084e"},{url:"/_next/static/css/7f6bd37aab40623f.css",revision:"7f6bd37aab40623f"},{url:"/_next/static/dbEcg3PEjO3Uh9ZkoVimd/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/dbEcg3PEjO3Uh9ZkoVimd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icon.png",revision:"11258bd0faab17bc1b3de7e19feaa206"},{url:"/icons/120x120.png",revision:"21c0aeb361ac94947878e0edb2ddfe2e"},{url:"/icons/128x128.png",revision:"4bb99d33fa64a6738bda8759437265b4"},{url:"/icons/144x144.png",revision:"82ead25dcb744b840b66a0ea87b8f07d"},{url:"/icons/152x152.png",revision:"cc8cc775d6d35159c8bd871ad4ada9de"},{url:"/icons/16x16.png",revision:"4de13b82ccbcb22688cbf555d5b434f6"},{url:"/icons/180x180.png",revision:"2b5b20350726f18454c6dbefe97fe853"},{url:"/icons/192x192.png",revision:"7ecdb5a0474169d52f84a6609d052f24"},{url:"/icons/32x32.png",revision:"8b0e95c693e38aa93fde607c79e6198c"},{url:"/icons/384x384.png",revision:"712adef307c7137d0c8ce1042d9075b4"},{url:"/icons/512x512.png",revision:"1d5bc43c2e92d2d183861a06284103cf"},{url:"/icons/72x72.png",revision:"ffe79cf779b3a4758c410c5da88c37b4"},{url:"/icons/96x96.png",revision:"423f272cfb52c37dfd3e3a97166be8d6"},{url:"/images/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.WEBP",revision:"e8f97a2b039d95c6463735d8ad9cd394"},{url:"/images/brain.png",revision:"af331511c61bc9a5383abadd94a04564"},{url:"/images/c++.jpg",revision:"c16e3479637abb7766b4c4f74cfabc35"},{url:"/images/computer.WEBP",revision:"d6fcba94f68f3779537a03ed39e1e779"},{url:"/images/dunes.jpg",revision:"789e49141b0b155b61f6dea87a9b1fc6"},{url:"/images/icon.WEBP",revision:"76a3c8e91916e09cd8f40640aa8923aa"},{url:"/images/icon.png",revision:"feb76ee3b649f5c7ab836d3b9ff276d8"},{url:"/images/jigsaw-presents.png",revision:"0b5964aedc6915f1a26d43641334c7c4"},{url:"/images/lighthouse.png",revision:"fc6e259352d64c6a43edee2f6c503789"},{url:"/images/mad.jpg",revision:"6511aa70992ddb96579d7082bb8791b2"},{url:"/images/me.WEBP",revision:"751779ce8b10333970f0782111fa9f4d"},{url:"/images/me.jpg",revision:"55412d37bd916c60bd1403baf7e8e464"},{url:"/images/monte-carlo.png",revision:"79072db7e70e9cd031bd9310e728592d"},{url:"/images/neistat.jpg",revision:"8a351b02647c99e44e6270adc43641f4"},{url:"/images/new-blog-who-dis/vercel.webp",revision:"7cedac6fd00bbe733932fe7e4ab7bb3a"},{url:"/images/ollama-dark.png",revision:"876bdc887624e0bf8250e67ba01699f7"},{url:"/images/placeholders/__icon.png",revision:"fed671c7e0a7e5c66cca9e8b5062976b"},{url:"/images/placeholders/__placeholder.png",revision:"0297e624a028f6c5f96283229ca5e04e"},{url:"/images/pokemon.png",revision:"7f682e6d85fdfe30fc28f542587d4ac6"},{url:"/images/running.WEBP",revision:"f1a41f1b4bdd20754a7127fd64562514"},{url:"/images/space-odyssey.png",revision:"dda2deae970b8007af1b877a7aa7aa9a"},{url:"/images/spaghetti.jpeg",revision:"0133f301045f8256baf9c1446cc147a6"},{url:"/images/star-pixel.png",revision:"eb25e254ec6b8403eb26f588066c38f8"},{url:"/images/star.jpg",revision:"19c47a26f99ef4b69b332e1365910c53"},{url:"/images/vercel.png",revision:"0788bf217711c71c2c76112df6d5661b"},{url:"/images/winds.jpg",revision:"7ed1c1d4f11f19b3ad654e55bd7f6b60"},{url:"/images/woody.jpg",revision:"89b342dc70e56f1f2393521f3b2a4d2d"},{url:"/manifest.json",revision:"1808256433b9111abcee1fa231c5776c"},{url:"/manifest.prod.json",revision:"417ff58d6d8e15077120d8d4751a5f3b"},{url:"/photography/0a94d7f5-834a-4567-86db-93f1ce8dc3ca.JPG",revision:"d67620e116931e4a23376e804f489e8e"},{url:"/photography/232afccf-fb3e-443d-af60-c1c67a6189d0.JPG",revision:"14a8010a0af52e95131db6eb97edea8c"},{url:"/photography/2add6d50-7a3e-4142-9707-b3d7d0e8ed7e.JPG",revision:"f77feaa34edb22b7b15c2a00b26f870c"},{url:"/photography/2d8324a2-e783-47d8-aa1c-3891e7a8b541.JPG",revision:"e2818e1a417d58d4195e841cecec56af"},{url:"/photography/39368379_256614928507860_847454518458187776_n.jpg",revision:"a580aa52752146a598b86366b89c0e44"},{url:"/photography/3cf5f5a9-843c-44e2-9482-45c765a84d30.JPG",revision:"de8f165d0b5e871e6e83cda346941e0f"},{url:"/photography/467D2F33-2596-4561-B35A-B1397A7B7052.jpg",revision:"fbed0a419e821bb4008d43eb22657c46"},{url:"/photography/60a53698-deec-4b91-94a8-5513e534c24a.JPG",revision:"312518165e570dd02517a91c21c3480c"},{url:"/photography/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.jpg",revision:"29bdbac93cce941a7f7ce12a4b349533"},{url:"/photography/9977ee3f-d4bd-4ce6-a57c-04397898b222.JPG",revision:"6850996ff65a27a4fea67ed5ef19e6e7"},{url:"/photography/IMG_3572.jpg",revision:"6a1bd6426ef5da644c99a125fa0fa77d"},{url:"/photography/IMG_4648.jpg",revision:"84ba72241540fa5ff59752be147ba5da"},{url:"/photography/IMG_4730.png",revision:"eabea916b17060eff2f0d3914acbf687"},{url:"/photography/IMG_5905.png",revision:"7b4c68c794f45fbbd4697ac15783f34b"},{url:"/photography/IMG_6023.jpg",revision:"166fcf738ef3889625b2525ba7aecd7d"},{url:"/photography/IMG_6798.jpg",revision:"5e69929bc714d1c33293142f8d7847b1"},{url:"/photography/IMG_7462.png",revision:"cc5f1fbcc46570849c5c28ea2cfea792"},{url:"/photography/c57ad8ca-ee1e-4d3d-a9f6-9b0222e211da.JPG",revision:"3d982a382a9f24612a05bdcf2ce399be"},{url:"/photography/me.png",revision:"e8475ca4283aae7bb3dc13eb2309414a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|WEBP)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
