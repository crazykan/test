(function(){var e;e=function(){function e(){this.obj.startSymbol="{{",this.obj.endSymbol="}}"}return e.prototype.isDebug=!0,e.prototype.obj={},e.prototype.log=function(e){if(this.isDebug)return console.log(e)},e.prototype.isUndefined=function(e){return null!=e},e.prototype.formatBytes=function(e,t){var r,n,o;if(t=1024,r=t?1e3:1024,e<r)return e+" B";for(o=t?["KB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],n=-1;;)if(e/=r,++n,!(e>=r))break;return e.toFixed(1)+" "+o[n]},e.prototype.angularInit=function(e,t){var r;return r=this,angular.module(e,t)},e.prototype.set=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},e.prototype.get=function(e){var t;try{return JSON.parse(localStorage.getItem(e))}catch(r){return t=r,!1}},e.prototype.remove=function(e){localStorage.removeItem(e)},e.prototype.clear=function(e){var t,r;for(t in localStorage)r=localStorage[t],void 0===e||e===!0?this.remove(t):t.indexOf(e)>=0&&this.remove(t)},e.prototype.isEmptyObj=function(e){var t;if(null===e)return!0;for(t in e)if(hasOwnProperty.call(e,t))return!1;return"undefined"==typeof e||!(e.length>0)&&(0===e.length,!0)},e.prototype.randomKey=function(e){var t,r,n,o,i;for(e||(e=6),i="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=r=0,o=e;r<o;t=r+=1)i+=n.charAt(Math.floor(Math.random()*n.length));return i},e.prototype.getFileExtension=function(e){return e.split(".").pop().toLowerCase()},e.prototype.isAllowedExtension=function(e,t){return new RegExp("("+t.join("|").replace(/\./g,"\\.")+")$").test(e)},e.prototype.sprintf=function(){var e,t,r,n,o,i,a,c,u;return u=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,e=arguments,i=0,r=e[i++],c=function(e,t,r,n){var o;return r||(r=" "),o=e.length>=t?"":new Array(1+t-e.length>>>0).join(r),n?e+o:o+e},a=function(e,t,r,n,o,i){var a;return a=n-e.length,a>0&&(e=r||!o?c(e,n,i,r):e.slice(0,t.length)+c("",a,"0",!0)+e.slice(t.length)),e},o=function(e,t,r,n,o,i){return null!==n&&(e=e.slice(0,n)),a(e,"",t,r,o,i)},n=function(e,t,r,n,o,i,u){var s;return s=e>>>0,r=r&&s&&{2:"0b",8:"0",16:"0x"}[t]||"",e=r+c(s.toString(t),i||0,"0",!1),a(e,r,n,o,u)},t=function(t,r,u,s,f,l,p){var g,d,h,y,v,b,m,B,w,S,x,E;if(b=void 0,B=void 0,v=void 0,S=void 0,x=void 0,"%%"===t)return"%";for(y=!1,m="",E=!1,w=!1,g=" ",d=u.length,h=0;u&&h<d;){switch(u.charAt(h)){case" ":m=" ";break;case"+":m="+";break;case"-":y=!0;break;case"'":g=u.charAt(h+1);break;case"0":E=!0,g="0";break;case"#":w=!0}h++}if(s=s?"*"===s?+e[i++]:"*"===s.charAt(0)?+e[s.slice(1,-1)]:+s:0,s<0&&(s=-s,y=!0),!isFinite(s))throw new Error("sprintf: (minimum-)width must be finite");switch(l=l?"*"===l?+e[i++]:"*"===l.charAt(0)?+e[l.slice(1,-1)]:+l:"fFeE".indexOf(p)>-1?6:"d"===p?0:void 0,x=r?e[r.slice(0,-1)]:e[i++],p){case"s":return o(String(x),y,s,l,E,g);case"c":return o(String.fromCharCode(+x),y,s,l,E);case"b":return n(x,2,w,y,s,l,E);case"o":return n(x,8,w,y,s,l,E);case"x":return n(x,16,w,y,s,l,E);case"X":return n(x,16,w,y,s,l,E).toUpperCase();case"u":return n(x,10,w,y,s,l,E);case"i":case"d":return b=+x||0,b=Math.round(b-b%1),B=b<0?"-":m,x=B+c(String(Math.abs(b)),l,"0",!1),a(x,B,y,s,E);case"e":case"E":case"f":case"F":case"g":case"G":return b=+x,B=b<0?"-":m,v=["toExponential","toFixed","toPrecision"]["efg".indexOf(p.toLowerCase())],S=["toString","toUpperCase"]["eEfFgG".indexOf(p)%2],x=B+Math.abs(b)[v](l),a(x,B,y,s,E)[S]();default:return t}},r.replace(u,t)},e}(),window._h=new e}).call(this);