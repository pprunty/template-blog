if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const b=e=>a(e,r),o={module:{uri:r},exports:n,require:b};i[r]=Promise.all(s.map((e=>o[e]||b(e)))).then((e=>(c(...e),n)))}}define(["./workbox-8232f3e4"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1d6b1b5362038325bf96f22243e5dc85"},{url:"/_next/static/chunks/106-dccebd00f5d5c63e.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/164-698712e5becf86e8.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/176-532e3a613de4654a.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/25b8c134-f2a41fab248af3b1.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/276-42b08f1058f0512d.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/282-ded12a888b4c1760.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/337.f6c4d6466b7529c7.js",revision:"f6c4d6466b7529c7"},{url:"/_next/static/chunks/363642f4-802a56502461680b.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/386.fc33782e8b8e98fe.js",revision:"fc33782e8b8e98fe"},{url:"/_next/static/chunks/419-eda4765dde4d20ed.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/463-daeaba13192e6efb.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/4bd1b696-0abc9cf2d366bd0b.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/517-ef5c6c2c7d04f59f.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/551-e0e8001f2a5fefab.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/651-875285b866903d5b.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/657.6b0155ca32b2ba23.js",revision:"6b0155ca32b2ba23"},{url:"/_next/static/chunks/71d5b6fe-87ec66758c4e53f1.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/725-412ca1bfe2cecbd9.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/_not-found/page-a3a44c95b6b370c7.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/about/page-94d7b71b362dd5b2.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/api/blog/create-post/route-262501135a2ff3ee.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/api/blog/delete-post/route-06d608e93e39cebd.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/api/blog/save-post/route-6a5f78a812eeb942.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/api/blog/update-config/route-abc99214cbd0824a.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/api/blog/update-post/route-1b54ffd2c8f4ed26.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/edit/layout-7ce39a96bb27689e.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/edit/page-d864916fdc5a2eba.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/layout-0e9b7d2ec9c8172d.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-9e3a559b1b8ecd16.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/blog/archive/page-3e9d5e87c9f2d8c3.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/layout-a0812bfa4c830c27.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/app/page-02661f4bf7e2bfb5.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/framework-d29117d969504448.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/main-886a4d594799af65.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/main-app-cb993615075e9ce8.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b6fe12d253a7c8db.js",revision:"rp4Am1MiNptM6cuCyL8oK"},{url:"/_next/static/css/3472e8645489fb77.css",revision:"3472e8645489fb77"},{url:"/_next/static/css/7f6bd37aab40623f.css",revision:"7f6bd37aab40623f"},{url:"/_next/static/css/f8d98133555a73ff.css",revision:"f8d98133555a73ff"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/rp4Am1MiNptM6cuCyL8oK/_buildManifest.js",revision:"b2defb651cde525ac2ce0f2678f4a70b"},{url:"/_next/static/rp4Am1MiNptM6cuCyL8oK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/downloads/The Winds of Winter (Preview Chapters) - by George R.R Martin Compiled by Patrick P.epub",revision:"4728bb836d35baa3e15fbcc204940925"},{url:"/downloads/The Winds of Winter (Preview Chapters) - by George R.R Martin Compiled by Patrick P.mobi",revision:"a1bef546e36b567ec0e76e05437406ed"},{url:"/downloads/The Winds of Winter (Preview Chapters) - by George R.R Martin Compiled by Patrick P.pdf",revision:"01adfb0f6584093d0b37def699b39fbf"},{url:"/icon.webp",revision:"1f7618f1916e52c9a1f849a5715e1457"},{url:"/icons/120x120.png",revision:"560af5255ed0e00c91a6cb526240dc1f"},{url:"/icons/128x128.png",revision:"3012d9cbf432ad023ea759c85787f189"},{url:"/icons/144x144.png",revision:"dcb363c22e2938f69b2d95a6ca905e3d"},{url:"/icons/152x152.png",revision:"9c28c315ba7abdfabc9fc337da70ae6e"},{url:"/icons/16x16.png",revision:"1421c807816f3cc83dbf7b206b29cd9a"},{url:"/icons/180x180.png",revision:"f5f15319329be3dbc94c17bea608c26d"},{url:"/icons/192x192.png",revision:"a225fb053dec429c92f74163b49e6cac"},{url:"/icons/32x32.png",revision:"85a36cab7083adb59a7a6bac718c86ba"},{url:"/icons/384x384.png",revision:"853c815287be41ce8fa2809289a5b7be"},{url:"/icons/512x512.png",revision:"1b336ab11eb60b0c25901ec5408941e1"},{url:"/icons/72x72.png",revision:"692db6046a30cdb8f28fd74784317e10"},{url:"/icons/96x96.png",revision:"33909b3605aca10c20b091bd24a34bbb"},{url:"/images/2024-in-review/2024-in-review.webp",revision:"fa4bbccbabf807e13ec41bb2f7f9b091"},{url:"/images/2024-in-review/ablade-glover.webp",revision:"02341b80e7fa7314643ef391259808e1"},{url:"/images/2024-in-review/desk.webp",revision:"921fc8beee8cb12eb416759da82db716"},{url:"/images/2024-in-review/space-odyssey.webp",revision:"200fe4390d2f419f50db04459780024e"},{url:"/images/2024-in-review/trump.webp",revision:"a141eede16d2103c2a95c6f5f0b97042"},{url:"/images/2024-in-review/vietnam1.webp",revision:"fefedb92668ac6aaf1c47d9892fc7e16"},{url:"/images/2024-in-review/vietnam2.webp",revision:"fb53958a66fd3fa3f980bf9805469462"},{url:"/images/2024-in-review/vietnam3.webp",revision:"8e92d604079bccf0d40d7b6b3720bf26"},{url:"/images/2024-in-review/vietnam4.webp",revision:"11c552b671fef7cfd289bed95d2d112c"},{url:"/images/2024-in-review/vietnam5.webp",revision:"19b7c9147b4b3d5961b5f1f135d79c8f"},{url:"/images/2024-in-review/vietnam6.webp",revision:"4e6f948ee64bd130522f5ce499007e27"},{url:"/images/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.WEBP",revision:"e8f97a2b039d95c6463735d8ad9cd394"},{url:"/images/_placeholders/avatar.svg",revision:"f91a9fd7d1aceee18f468e2e40db3de1"},{url:"/images/_placeholders/icon.png",revision:"fed671c7e0a7e5c66cca9e8b5062976b"},{url:"/images/_placeholders/icon.webp",revision:"3357c3c7104fa8a8fe7aaccfe6aa9f20"},{url:"/images/_placeholders/no-image.png",revision:"0297e624a028f6c5f96283229ca5e04e"},{url:"/images/about/headshot.webp",revision:"c029796941ed4fe0b73255f2795b7b7e"},{url:"/images/ambient-writing-a-manifesto-for-creative-writing/haiyang.webp",revision:"c3a94fbf6a2ce58caaac9fa8e77bc14f"},{url:"/images/brain.png",revision:"af331511c61bc9a5383abadd94a04564"},{url:"/images/computer.WEBP",revision:"d6fcba94f68f3779537a03ed39e1e779"},{url:"/images/creative-resilience-in-the-ai-revolution/creative-resilience-in-the-ai-revolution.webp",revision:"220bd5fd120c13cf3685c7279dcf1863"},{url:"/images/dunes.jpg",revision:"789e49141b0b155b61f6dea87a9b1fc6"},{url:"/images/haiyang.webp",revision:"706d6e85d1d14eb0510805a4c76961db"},{url:"/images/here-is-the-best-place-to-start-with-large-language-models/here-is-the-best-place-to-start-with-large-language-models.webp",revision:"bd28b9a339465bb9eeca3e152c22ca73"},{url:"/images/icon.WEBP",revision:"76a3c8e91916e09cd8f40640aa8923aa"},{url:"/images/icon.png",revision:"feb76ee3b649f5c7ab836d3b9ff276d8"},{url:"/images/lighthouse.png",revision:"fc6e259352d64c6a43edee2f6c503789"},{url:"/images/mad.jpg",revision:"6511aa70992ddb96579d7082bb8791b2"},{url:"/images/me.WEBP",revision:"751779ce8b10333970f0782111fa9f4d"},{url:"/images/me.jpg",revision:"55412d37bd916c60bd1403baf7e8e464"},{url:"/images/me.svg",revision:"b38c85a3f5561fd825ef71f6be1210e4"},{url:"/images/monte-carlo.png",revision:"79072db7e70e9cd031bd9310e728592d"},{url:"/images/neistat.jpg",revision:"8a351b02647c99e44e6270adc43641f4"},{url:"/images/new-blog-who-dis/new-blog-who-dis.webp",revision:"ec867cbb3f5ca08aec0ace2da1eebba6"},{url:"/images/new-blog-who-dis/vercel.webp",revision:"7cedac6fd00bbe733932fe7e4ab7bb3a"},{url:"/images/ode-to-pokemon/analogue.webp",revision:"f34a2aa54c5c5a673e0e74634455b243"},{url:"/images/ode-to-pokemon/pokemon.webp",revision:"f97b971c3f5e60b0d83bc52481c368d0"},{url:"/images/ollama-dark.png",revision:"876bdc887624e0bf8250e67ba01699f7"},{url:"/images/on-launching-my-youtube-content-creator-journey/jigsaw-presents.webp",revision:"ae2c59a2ca5fb71c39a30a732ed02c2d"},{url:"/images/patrickprunty.jpg",revision:"39ead334bb182d98e9f584b2dfa9db09"},{url:"/images/pokemon.png",revision:"7f682e6d85fdfe30fc28f542587d4ac6"},{url:"/images/projects/blog-v2.svg",revision:"6a9effde64e635c266c689d446c476f5"},{url:"/images/projects/jigsaw-presents.svg",revision:"ed32ecd03224e28915c71f0953141240"},{url:"/images/projects/jigsaw-presents.webp",revision:"878d01f5aa880db61994fcd06765077e"},{url:"/images/projects/samwise-v2.webp",revision:"bea16dc2ce7d84930de4892898583c2a"},{url:"/images/pure-web-design/layers.png",revision:"6064a6a152f3dcf42103e1f6af8ccb2a"},{url:"/images/pure-web-design/pure-web-design.webp",revision:"2e72ce5c359b4ccdf9cd39c5a8b4d2bb"},{url:"/images/running.WEBP",revision:"f1a41f1b4bdd20754a7127fd64562514"},{url:"/images/self-publishing-an-ebook-on-amazon-marketplace/no-image.webp",revision:"0297e624a028f6c5f96283229ca5e04e"},{url:"/images/self-publishing-an-ebook-on-amazon-marketplace/publishing-an-ebook-on-amazon-marketplace.webp",revision:"a8bbb1b3588abccf2447ff88e148040d"},{url:"/images/self-publishing-an-ebook-on-amazon-marketplace/self-publishing-an-ebook-on-amazon-marketplace.webp",revision:"db65392f8edd36ba0915dc669ac961ae"},{url:"/images/space-odyssey.png",revision:"dda2deae970b8007af1b877a7aa7aa9a"},{url:"/images/space-odyssey.webp",revision:"200fe4390d2f419f50db04459780024e"},{url:"/images/spaghetti.jpeg",revision:"0133f301045f8256baf9c1446cc147a6"},{url:"/images/star-pixel.png",revision:"eb25e254ec6b8403eb26f588066c38f8"},{url:"/images/star.jpg",revision:"19c47a26f99ef4b69b332e1365910c53"},{url:"/images/the-winds-of-winter-preview-chapters-ebook-kindle-and-pdf-download/grrm.webp",revision:"587bb194772896ca9c37b6d7bc508721"},{url:"/images/the-winds-of-winter-preview-chapters-ebook-kindle-and-pdf-download/pdf-showcase.png",revision:"2b5f120cd8dd1f3a77b89b25614a74dc"},{url:"/images/untitled-01/PJ_dinner.webp",revision:"7641097a74a88b4cb985c7f6f9884d8c"},{url:"/images/untitled-01/basquiat.png",revision:"804a4d5b6fcdbc373bc0bb9310d5b0fb"},{url:"/images/untitled-01/basquiat.webp",revision:"212ec08d380cc2dcdad61c7bbc3acb0b"},{url:"/images/vercel.png",revision:"0788bf217711c71c2c76112df6d5661b"},{url:"/images/what-i-talk-about-when-i-talk-about-running/haring.jpg",revision:"f60cc2beb779b4bd983814a6a35133ea"},{url:"/images/what-i-talk-about-when-i-talk-about-running/haring.webp",revision:"9626e4ec39089a2883df53a558118564"},{url:"/images/what-i-talk-about-when-i-talk-about-running/running.webp",revision:"4ddf4f50cffa021fe307dde9e022e41e"},{url:"/images/what-i-talk-about-when-i-talk-about-running/what-i-talk-about-when-i-talk-about-running.webp",revision:"56b4929f4d650d06e659f6772a9c95d9"},{url:"/images/what-is-high-performance-computing/c++.jpg",revision:"c16e3479637abb7766b4c4f74cfabc35"},{url:"/images/what-is-high-performance-computing/computer.webp",revision:"8d4cba7f29ee980e20b87f412ba45ade"},{url:"/images/winds.jpg",revision:"7ed1c1d4f11f19b3ad654e55bd7f6b60"},{url:"/images/woody.jpg",revision:"89b342dc70e56f1f2393521f3b2a4d2d"},{url:"/images/workflow-driven-design/workflow-driven-design.webp",revision:"ab51c09656cc05a9f66a8030b29b4386"},{url:"/manifest.json",revision:"3030349db40d47475365eefdb622c038"},{url:"/manifest.prod.json",revision:"a33d0d0bf6b0a399df162047b2361b87"},{url:"/photography/0a94d7f5-834a-4567-86db-93f1ce8dc3ca.webp",revision:"590a6d9d5e773b2f9889c00cdfc5e3b6"},{url:"/photography/232afccf-fb3e-443d-af60-c1c67a6189d0.webp",revision:"0fed1c71c571621676155a85c5aec9b5"},{url:"/photography/2add6d50-7a3e-4142-9707-b3d7d0e8ed7e.webp",revision:"555501973ddc04906666c006f9c37260"},{url:"/photography/2d8324a2-e783-47d8-aa1c-3891e7a8b541.webp",revision:"ebe72136ffa228c2a0ba367d6408df96"},{url:"/photography/39368379_256614928507860_847454518458187776_n.webp",revision:"52b244d1dabe7b53231a8b5629c36794"},{url:"/photography/3cf5f5a9-843c-44e2-9482-45c765a84d30.webp",revision:"9c123473704df185308b8a0c98931620"},{url:"/photography/467D2F33-2596-4561-B35A-B1397A7B7052.webp",revision:"5bbe24e7431355e9f89305c4d9959858"},{url:"/photography/60a53698-deec-4b91-94a8-5513e534c24a.webp",revision:"f8fbec76047b7628ffc1cd591f159b48"},{url:"/photography/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.webp",revision:"11c552b671fef7cfd289bed95d2d112c"},{url:"/photography/9977ee3f-d4bd-4ce6-a57c-04397898b222.webp",revision:"c9537f5fe5500923f7c5ba165b939616"},{url:"/photography/IMG_3572.webp",revision:"968e17a1ee47a43544d91430ffb8e19c"},{url:"/photography/IMG_4648.webp",revision:"1d0908d71c04b087d69ab8e39f3ef737"},{url:"/photography/IMG_4730.webp",revision:"4502f2e9d2b5f56c497e3bec26ca2c30"},{url:"/photography/IMG_5905.webp",revision:"0a2575a13413ef747430420df8bd1ab8"},{url:"/photography/IMG_6023.webp",revision:"744d5412b9e542ddc8c47bb81191bd8c"},{url:"/photography/IMG_6798.webp",revision:"728bdf7301c1dacc90bc59e49dea4dc8"},{url:"/photography/IMG_7218.webp",revision:"f17f351c38782b2c156769f31d60ea12"},{url:"/photography/IMG_7462.webp",revision:"5a09a96fb87e858eba2586a0138a5c11"},{url:"/photography/c57ad8ca-ee1e-4d3d-a9f6-9b0222e211da.webp",revision:"4fbd25bb22f86ed6090b9e9e3ba2adec"},{url:"/photography/me.webp",revision:"332ad666916d5116bbb35f649c5f091c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|WEBP)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
