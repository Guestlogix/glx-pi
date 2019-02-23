!function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([58,1]),n()}({168:function(e){e.exports={translation:{Welcome:"Welcome,",getStarted:"Let's prepare your flights to takeoff! Below you will see some quick information about your products, campaigns, and upcoming flights or navigate using the menu to the left to dive into your projects and reports.",view:"View",activeProducts:"Active Products",flightsScheduledToday:"Flights Scheduled Today",activeCampaigns:"Active Campaigns"}}},169:function(e){e.exports={translation:{Welcome:"Bienvenue,",getStarted:"Préparons vos vols au décollage! Ci-dessous, vous verrez quelques des informations rapides sur vos produits, vos campagnes et les événements à venir vols ou naviguez en utilisant le menu à gauche pour plonger dans votre projets et rapports.",view:"Vue",activeProducts:"Produits actifs",flightsScheduledToday:"vols programmés aujourd'hui",activeCampaigns:"Campagnes actives"}}},170:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(23);const a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}var s=n(2),l=n(9);s.c.button`
  &.ripple {
    background-position: center;
    transition: background 0.8s;
  }

  &.ripple:focus {
    outline: none;
  }

  &.ripple:active {
    background-color: ${Object(l.palette)("grayscale",4)};
    background-size: 100%;
    transition: background 0s;
  }

  background: ${e=>e.color?e.color:Object(l.palette)("white",0)};
  opacity: 1;
  border-radius: 7px;
  padding: 0.5rem 3rem;
  font-weight: bold;
  font-size: 17px;
  margin: 0 5rem;
`;const c=s.d`
  from{transform : translateY( -10rem)}
  to{transform: translateY(0)}
`,u=s.d`
  from{transform : translateY( 0rem); display:block}
  to{transform: translateY(-10rem); display: none}
`;s.c.div`
  display: ${e=>e.show?"block":"none"};
  position: absolute;
  cursor: pointer;
  padding: 1rem;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  background-color: ${Object(l.palette)("danger",0)};
  color: #fff;
  box-sizing: border-box;
  box-shadow: none;

  animation: ${c} 0.4s ease-in, ${u} 0.4s ease-out 6s forwards;
`;var d=n(52);const p={palette:{},reversePalette:{},fonts:{},sizes:{}};p.palette={primary:["#F7901E"],secondary:["#00a3d9"],danger:["#C65251"],alert:["#EB9F00"],success:["#519D33"],white:["#ffffff"],grayscale:["#212121","#616161","#9e9e9e","#bdbdbd","#e0e0e0","#ffffff"]},p.reversePalette=Object(d.reversePalette)(p.palette),p.fonts={primary:"Helvetica Neue, Helvetica, Roboto, sans-serif",pre:"Consolas, Liberation Mono, Menlo, Courier, monospace",quote:"Georgia, serif"},p.sizes={maxWidth:"1100px"};var f=p;const g=s.c.div`
  flex: 1;
`,m=s.c.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
  border-left: 1px solid ${Object(l.palette)("grayscale",3)};
`,v=s.c.div`
  flex: 1;
`;class h extends o.Component{constructor(e){super(e),this.state={firstname:"hank"}}render(){return o.createElement(o.Fragment,null,o.createElement(g,null,"Chat"),o.createElement(m,null,o.createElement(v,null,"reccommended"),o.createElement(v,null,"reccommended"),o.createElement(v,null,"reccommended")))}}const b=s.c.div`
  height: 50px;
  border-bottom: 1px solid ${Object(l.palette)("grayscale",3)};
`;class w extends o.Component{constructor(e){super(e),this.state={firstname:"hank"}}render(){return o.createElement(b,null)}}const y=s.b`

  html {
    height: 100%;
  }

  body {
    margin: 0;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    background-color: ${Object(l.palette)("white",1)};
  }
`,x=s.c.div`
  display: flex;
  border-color: green;
  height: calc(100vh - 50px);
`;var k=n(31),j=n(56);const E={en:n(168),fr:n(169)};k.use(j.a).init({resources:E,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}}),r.render(o.createElement(class extends o.Component{render(){return o.createElement(s.a,{theme:f},o.createElement(o.Fragment,null,o.createElement(y,null),o.createElement(w,null),o.createElement(x,null,o.createElement(h,null))))}},null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/static",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/static/service-worker.js";a?(function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):i(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()},58:function(e,t,n){n(59),e.exports=n(170)},59:function(e,t,n){"use strict";"undefined"==typeof Promise&&(n(60).enable(),window.Promise=n(62)),n(63),Object.assign=n(25)}});
//# sourceMappingURL=main.1a97828c.js.map