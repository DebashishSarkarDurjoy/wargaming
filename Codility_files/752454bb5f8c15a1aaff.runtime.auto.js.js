(()=>{"use strict";var e,a,f,d,c,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=(a,f,d,c)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){for(var[f,d,c]=e[i],t=!0,o=0;o<f.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,d,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(c,b),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>({180:"c985fca6215692b4cb2a",249:"a014d440dc4e779b2504",444:"5e6f33e7ac055a2ccbcb",525:"7866056a0efe264210c9",544:"3a4651784faa6b09e8ef",793:"51c7caab19bb312e210f",815:"e2e8d5f4d0118610a3e1",837:"5332a34af8b7ae4150e8",848:"8b486e7daf951ec4712e",854:"d52ddc598a8c4e9b2514",911:"f3d558b022d224aca92d",996:"69c076db2c1b23dbc18f",1065:"ee01438528b5b2472d4e",1134:"f27b6166c82b2fc846e1",1147:"5feb595f80caffe14286",1156:"bf45660749ea5dda9819",1259:"49eba4d4072c41aa58e4",1447:"046f71ed9bd61aa63d85",1448:"ff21ee9ae56b083574ce",1471:"16b98af9f2d6fbc64565",1488:"f930135eb18150b41703",1699:"9c865b03103ac0018bd2",1806:"cd51608db062a9e6ffa4",1871:"e119a744b5b4ccb7ccab",1879:"0c6980e2d564cf15e86e",1886:"99a75aedbbf519469af1",1960:"66dbc5e423cfcb23bf16",1961:"658b1cfc68b8d3e10915",2060:"46288fb248a6876e2325",2075:"073c443b36bf19574cf2",2140:"17f3349981cbd617a6a4",2225:"e8702385ca83016857e1",2240:"4ed4e13c75056a227e92",2403:"4f1cef01333a476fa3de",2571:"cb3ea8756f64b2899df5",2798:"15ad241027c4e4dcfc57",2814:"f4ab1cc19eed8fad7cf6",2859:"64d8a6e734f72244cde7",2892:"e4dcf40f172dc4b482f4",2911:"338098781a63210a5c4f",2954:"46132b496d27b0141b7d",3036:"a8ae890974443867213b",3165:"6f27ac948b698b5254b8",3450:"b85f3d82f42e68728336",3527:"01b7cd99dfd7ea8508e4",3576:"41c387a13dd319bfcc09",3585:"d0d8b7dfe4e03b343f8e",3632:"200df9ed771dccc3f34d",3919:"2b10ac44c1b33733a606",3984:"a43aa24f7db76512cd44",4028:"1936b42dbdc45ec379b3",4129:"6ec27bdc37dcfca619ae",4208:"77200e443698c53958f8",4247:"c469c9ad1a67dfefa61d",4341:"2d3ceaee45e19a2483f4",4368:"604362a759daf16f79db",4386:"608028734b926e90e2df",4407:"bcf1d4bae686b8fc30e8",4424:"8e9938f00c90418134f5",4662:"46edf436227167d25afa",4902:"f3e8be73aa5ef9967b1f",4912:"fb6531fda60142939172",4946:"e350cccf4e2caf1968dd",5008:"a707df8691c11ded6fd8",5062:"2422507953e2b034a712",5593:"64abec7befcb0c4ee92b",5703:"c60183c4e51ddec5701f",5785:"f3bfcf462936902020d0",5849:"ebe470a5f7c32bc6805a",5917:"16de84dac1b20b4e230a",5962:"8aa7ba06bba8cfa90788",6011:"b3684a6f4e9295cef08e",6082:"49b4f2e7d99bd2dc44c1",6213:"28dce7b410015a40af89",6241:"0a04cab8a9f674143eda",6424:"a688eb508906266ed714",6447:"cf9e91c31f5245d3d49e",6449:"487584082d38b930779c",6456:"03e4d4261435b787c0be",6489:"cfba9157a83749148334",6587:"bd9cd20aeffc6fd75db0",6706:"fc08204713c338ca7d65",6717:"2658c7702bfb69f0f0a1",6876:"0393a13cc6a704907244",7043:"62c255241551ff0ce2a1",7131:"d413527f75f2a7ec8b5a",7157:"519b9b6f90ff1f8c2260",7287:"d4becb242389220aad8f",7562:"b552b3d3403b120836e4",7637:"667a71ac8da12251ca6d",7778:"7c760a34988c3ab46d26",7794:"e2539527632ddd3a172e",7835:"44ffc323ea7570e90490",8070:"7dc22d9722761b20fe80",8084:"ab21403acd46578776d9",8088:"a528cab562b0dabce901",8139:"96c0ee2f70e4343b2029",8180:"f21d4ede71d28874f294",8183:"7a3ba534e326618a3f1f",8424:"6fb527c1cc56fcc94198",8534:"b13e5e7a6925ad6c7fbe",8597:"2de7e63afe02f264ea9d",8670:"73b8162342e265ec1743",8715:"b335249d79b7ce69b003",8719:"6d33500275e6062b4a0b",8906:"0599cd5688945e4d2f2f",8946:"e098df4f0bdccf5daca3",9088:"c5c93c1dc194f1cb173a",9343:"8be4e2bd4376f23f7219",9398:"91316fa2ab3db39f77f4",9400:"d86ca4226437a2c24e22",9537:"4e2f005ae58d235936ea",9684:"6063a5a50da03d515d6d",9907:"b8e51f79244ea03fbd5b"}[e]+"."+e+".js"),r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="codility:",r.l=(e,a,f,b)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+f){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),d[e]=[a];var u=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="https://static-files.codility.com/prod/new-cui/",(()=>{r.b=document.baseURI||self.location.href;var e={700:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(700!=a){var c=new Promise(((f,c)=>d=e[a]=[f,c]));f.push(d[2]=c);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,d[1](t)}}),"chunk-"+a,a)}else e[a]=0},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,c,[b,t,o]=f,n=0;if(b.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=globalThis.webpackChunkcodility=globalThis.webpackChunkcodility||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();