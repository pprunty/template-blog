if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const d=e=>s(e,n),f={module:{uri:n},exports:r,require:d};i[n]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(a(...e),r)))}}define(["./workbox-8232f3e4"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"092d2b4951439191872ace004a88ee8b"},{url:"/_next/static/chunks/104-7751fd8fecde5dde.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/117-adfa855864ea1f33.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/178-c23548c81425d87e.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/972-365bad3dfb53265e.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/app/_not-found/page-e5ef88344ff6cc38.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/app/about/page-cf9cee8db854f44d.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/layout-49db0c027ed833af.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-5a50359acf00a105.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/app/layout-193f41d0ddc9675e.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/app/page-83fc0c10256fa99b.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/fd9d1056-6c9c58458c5cf96a.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/main-app-c57289e32f729de6.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/main-caf21732978a3575.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-3c1c687a2535abc6.js",revision:"ePNwvSs2WlcmrNM7TA3zi"},{url:"/_next/static/css/7f6bd37aab40623f.css",revision:"7f6bd37aab40623f"},{url:"/_next/static/css/cdeee477abb2e010.css",revision:"cdeee477abb2e010"},{url:"/_next/static/ePNwvSs2WlcmrNM7TA3zi/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/ePNwvSs2WlcmrNM7TA3zi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/120x120.png",revision:"2c30358bff7e80474dcd3d0f3a05c20e"},{url:"/icons/128x128.png",revision:"8422005cc6a40d113c887ed1bae683d1"},{url:"/icons/144x144.png",revision:"8e1bc7a8ae9745096aff24554decf974"},{url:"/icons/152x152.png",revision:"203bfae7b65f14891c01154118c9b9b4"},{url:"/icons/16x16.png",revision:"c280aa320624aaa1165d2dd69757720d"},{url:"/icons/180x180.png",revision:"a76b88900ec853080c3ce012bb430fe7"},{url:"/icons/192x192.png",revision:"4d30f4224a7a123353cae8413dc1d0f3"},{url:"/icons/32x32.png",revision:"819a9c009c88d2c7ccdd79c4b1ee2947"},{url:"/icons/384x384.png",revision:"c3b6a662cf319f6d40498a09b206e92a"},{url:"/icons/72x72.png",revision:"955929e403c429c2fc43ed72dc728d24"},{url:"/icons/96x96.png",revision:"9745d37b0573d82b4ed4bcff8d345a8b"},{url:"/icons/icon512_maskable.png",revision:"11258bd0faab17bc1b3de7e19feaa206"},{url:"/icons/icon512_rounded.png",revision:"c63f29d98e17656af413d33afe7f5f49"},{url:"/images/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.WEBP",revision:"e8f97a2b039d95c6463735d8ad9cd394"},{url:"/images/brain.png",revision:"af331511c61bc9a5383abadd94a04564"},{url:"/images/c++.jpg",revision:"c16e3479637abb7766b4c4f74cfabc35"},{url:"/images/computer.WEBP",revision:"d6fcba94f68f3779537a03ed39e1e779"},{url:"/images/dunes.jpg",revision:"789e49141b0b155b61f6dea87a9b1fc6"},{url:"/images/icon.WEBP",revision:"76a3c8e91916e09cd8f40640aa8923aa"},{url:"/images/icon.png",revision:"feb76ee3b649f5c7ab836d3b9ff276d8"},{url:"/images/jigsaw-presents.png",revision:"0b5964aedc6915f1a26d43641334c7c4"},{url:"/images/lighthouse.png",revision:"fc6e259352d64c6a43edee2f6c503789"},{url:"/images/mad.jpg",revision:"6511aa70992ddb96579d7082bb8791b2"},{url:"/images/me.WEBP",revision:"751779ce8b10333970f0782111fa9f4d"},{url:"/images/monte-carlo.png",revision:"79072db7e70e9cd031bd9310e728592d"},{url:"/images/neistat.jpg",revision:"8a351b02647c99e44e6270adc43641f4"},{url:"/images/ollama-dark.png",revision:"876bdc887624e0bf8250e67ba01699f7"},{url:"/images/pokemon.png",revision:"7f682e6d85fdfe30fc28f542587d4ac6"},{url:"/images/running.WEBP",revision:"f1a41f1b4bdd20754a7127fd64562514"},{url:"/images/space-odyssey.png",revision:"dda2deae970b8007af1b877a7aa7aa9a"},{url:"/images/spaghetti.jpeg",revision:"0133f301045f8256baf9c1446cc147a6"},{url:"/images/star-pixel.png",revision:"eb25e254ec6b8403eb26f588066c38f8"},{url:"/images/star.jpg",revision:"19c47a26f99ef4b69b332e1365910c53"},{url:"/images/vercel.png",revision:"0788bf217711c71c2c76112df6d5661b"},{url:"/images/winds.jpg",revision:"7ed1c1d4f11f19b3ad654e55bd7f6b60"},{url:"/images/woody.jpg",revision:"89b342dc70e56f1f2393521f3b2a4d2d"},{url:"/manifest.json",revision:"1808256433b9111abcee1fa231c5776c"},{url:"/manifest.prod.json",revision:"417ff58d6d8e15077120d8d4751a5f3b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|WEBP)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
