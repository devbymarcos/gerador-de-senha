(()=>{"use strict";var n={902:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([n.id,'* {\n  margin: 0px;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #ccc;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  border: none;\n  max-width: 360px;\n  border-radius: 3px;\n  background-color: #fff;\n}\n\n.wrapper h2 {\n  margin-bottom: 1rem;\n  text-align: center;\n}\ntextarea {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  resize: none;\n  margin-bottom: 1rem;\n  outline: none;\n  text-align: center;\n  font-size: 20px;\n  padding: 20px 10px;\n}\n.content {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\ninput[type="number"] {\n  width: 60px;\n  height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  text-align: center;\n  font-size: 16px;\n  outline: none;\n}\n\n.btn {\n  display: inline-block;\n  padding: 11px 23px;\n  background: #555555;\n  border: none;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 0.9em;\n  font-weight: bold;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n}\n\n.btn--green {\n  background-color: #1cb15b;\n}\n\n.btn--green:hover {\n  background-color: #218c74;\n}\n\n.btn--blue {\n  background-color: #3498db;\n}\n\n.btn--blue:hover {\n  background-color: #2980b9;\n}\n\n/*ICONS NORMALIZE*/\n[class^="fa-"]:before,\n[class*=" fa-"]:before {\n  position: relative !important;\n  /*top: .125em !Important;*/\n  margin-right: 0.6em !important;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),l=t.n(u),d=t(589),p=t.n(d),f=t(902),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var b=document.getElementById("btnGenerate"),v=document.getElementById("btnCopy"),h=document.getElementById("passLenght"),g=document.getElementById("upperCase"),y=document.getElementById("lowerCase"),x=document.getElementById("number"),w=document.getElementById("symbol"),E=document.getElementById("result"),I={lower:function(){var n="abcdefghijlmnopqrstuvwxyz";return n[Math.floor(Math.random()*n.length)]},upper:function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return n[Math.floor(Math.random()*n.length)]},number:function(){var n="0123456789";return n[Math.floor(Math.random()*n.length)]},symbol:function(){var n="!@#$%^&*()[]{}=<>/,.";return n[Math.floor(Math.random()*n.length)]}};b.addEventListener("click",(function(){var n=h.value,e=y.checked,t=g.checked,r=x.checked,o=w.checked;E.innerText=function(n,e,t,r,o){for(var a="",i=[{lower:n},{upper:e},{number:t},{symbol:r}].filter((function(n){return Object.values(n)[0]})),c=0;c<o;c++)i.forEach((function(n){var e=Object.keys(n)[0];a+=I[e]()}));return a.slice(0,o)}(e,t,r,o,n)})),v.addEventListener("click",(function(){navigator.clipboard.writeText(E.value),alert("texto copiado "+E.value)}))})()})();