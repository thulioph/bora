var Quo;Quo=function(){var e,t,n;return t=[],e=function(t,r){var i;return t?e.toType(t)==="function"?e(document).ready(t):(i=e.getDOMObject(t,r),n(i,t)):n()},n=function(e,r){return e=e||t,e.__proto__=n.prototype,e.selector=r||"",e},e.extend=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){var n,r;r=[];for(n in t)r.push(e[n]=t[n]);return r}),e},n.prototype=e.fn={},e}(),window.Quo=Quo,"$$"in window||(window.$$=Quo),function(e){var t,n,r,i,s,o,u,a;return t=[],i=Object.prototype,r=/^\s*<(\w+|!)[^>]*>/,s=document.createElement("table"),o=document.createElement("tr"),n={tr:document.createElement("tbody"),tbody:s,thead:s,tfoot:s,td:o,th:o,"*":document.createElement("div")},e.toType=function(e){return i.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},e.isOwnProperty=function(e,t){return i.hasOwnProperty.call(e,t)},e.getDOMObject=function(t,n){var i,s,o;i=null,s=[1,9,11],o=e.toType(t);if(o==="array")i=u(t);else if(o==="string"&&r.test(t))i=e.fragment(t.trim(),RegExp.$1),t=null;else if(o==="string")i=e.query(document,t),n&&(i.length===1?i=e.query(i[0],n):i=e.map(function(){return e.query(i,n)}));else if(s.indexOf(t.nodeType)>=0||t===window)i=[t],t=null;return i},e.map=function(t,n){var r,i,s,o;o=[],r=void 0,i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length)s=n(t[r],r),s!=null&&o.push(s),r++}else for(i in t)s=n(t[i],i),s!=null&&o.push(s);return a(o)},e.each=function(t,n){var r,i;r=void 0,i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length){if(n.call(t[r],r,t[r])===!1)return t;r++}}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},e.mix=function(){var t,n,r,i,s;r={},t=0,i=arguments.length;while(t<i){n=arguments[t];for(s in n)e.isOwnProperty(n,s)&&n[s]!==undefined&&(r[s]=n[s]);t++}return r},e.fragment=function(t,r){var i;return r==null&&(r="*"),r in n||(r="*"),i=n[r],i.innerHTML=""+t,e.each(Array.prototype.slice.call(i.childNodes),function(){return i.removeChild(this)})},e.fn.map=function(t){return e.map(this,function(e,n){return t.call(e,n,e)})},e.fn.instance=function(e){return this.map(function(){return this[e]})},e.fn.filter=function(t){return e([].filter.call(this,function(n){return n.parentNode&&e.query(n.parentNode,t).indexOf(n)>=0}))},e.fn.forEach=t.forEach,e.fn.indexOf=t.indexOf,u=function(e){return e.filter(function(e){return e!==void 0&&e!==null})},a=function(e){return e.length>0?[].concat.apply([],e):e}}(Quo),function(e){var t,n,r,i,s,o,u;return r=null,t=/WebKit\/([\d.]+)/,n={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},e.isMobile=function(){return r=r||s(),r.isMobile&&r.os.name!=="firefoxOS"},e.environment=function(){return r=r||s(),r},e.isOnline=function(){return navigator.onLine},s=function(){var e,t;return t=navigator.userAgent,e={},e.browser=i(t),e.os=o(t),e.isMobile=!!e.os,e.screen=u(),e},i=function(e){var n;return n=e.match(t),n?n[0]:e},o=function(e){var t,r,i;t=null;for(r in n){i=e.match(n[r]);if(i){t={name:r==="iphone"||r==="ipad"?"ios":r,version:i[2].replace("_",".")};break}}return t},u=function(){return{width:window.innerWidth,height:window.innerHeight}}}(Quo),function(e){var t,n,r,i,s,o;return r="parentNode",t=/^\.([\w-]+)$/,n=/^#[\w\d-]+$/,i=/^[\w-]+$/,e.query=function(e,r){var s;return r=r.trim(),t.test(r)?s=e.getElementsByClassName(r.replace(".","")):i.test(r)?s=e.getElementsByTagName(r):n.test(r)&&e===document?(s=e.getElementById(r.replace("#","")),s||(s=[])):s=e.querySelectorAll(r),s.nodeType?[s]:Array.prototype.slice.call(s)},e.fn.find=function(t){var n;return this.length===1?n=Quo.query(this[0],t):n=this.map(function(){return Quo.query(this,t)}),e(n)},e.fn.parent=function(e){var t;return t=e?o(this):this.instance(r),s(t,e)},e.fn.siblings=function(e){var t;return t=this.map(function(e,t){return Array.prototype.slice.call(t.parentNode.children).filter(function(e){return e!==t})}),s(t,e)},e.fn.children=function(e){var t;return t=this.map(function(){return Array.prototype.slice.call(this.children)}),s(t,e)},e.fn.get=function(e){return e===undefined?this:this[e]},e.fn.first=function(){return e(this[0])},e.fn.last=function(){return e(this[this.length-1])},e.fn.closest=function(t,n){var r,i;i=this[0],r=e(t),r.length||(i=null);while(i&&r.indexOf(i)<0)i=i!==n&&i!==document&&i.parentNode;return e(i)},e.fn.each=function(e){return this.forEach(function(t,n){return e.call(t,n,t)}),this},o=function(t){var n;n=[];while(t.length>0)t=e.map(t,function(e){if((e=e.parentNode)&&e!==document&&n.indexOf(e)<0)return n.push(e),e});return n},s=function(t,n){return n===undefined?e(t):e(t).filter(n)}}(Quo),function(e){var t,n,r;return t=["-webkit-","-moz-","-ms-","-o-",""],e.fn.addClass=function(e){return this.each(function(){if(!r(e,this.className))return this.className+=" "+e,this.className=this.className.trim()})},e.fn.removeClass=function(e){return this.each(function(){if(!e)return this.className="";if(r(e,this.className))return this.className=this.className.replace(e," ").replace(/\s+/g," ").trim()})},e.fn.toggleClass=function(e){return this.each(function(){return r(e,this.className)?this.className=this.className.replace(e," "):(this.className+=" "+e,this.className=this.className.trim())})},e.fn.hasClass=function(e){return r(e,this[0].className)},e.fn.style=function(e,t){return t?this.each(function(){return this.style[e]=t}):this[0].style[e]||n(this[0],e)},e.fn.css=function(e,t){return this.style(e,t)},e.fn.vendor=function(e,n){var r,i,s,o;o=[];for(i=0,s=t.length;i<s;i++)r=t[i],o.push(this.style(""+r+e,n));return o},r=function(e,t){var n;return n=t.split(/\s+/g),n.indexOf(e)>=0},n=function(e,t){return document.defaultView.getComputedStyle(e,"")[t]}}(Quo),function(e){return e.fn.attr=function(t,n){return e.toType(t)==="string"&&n===void 0?this[0].getAttribute(t):this.each(function(){return this.setAttribute(t,n)})},e.fn.removeAttr=function(e){return this.each(function(){return this.removeAttribute(e)})},e.fn.data=function(e,t){return this.attr("data-"+e,t)},e.fn.removeData=function(e){return this.removeAttr("data-"+e)},e.fn.val=function(t){return e.toType(t)==="string"?this.each(function(){return this.value=t}):this.length>0?this[0].value:null},e.fn.show=function(){return this.style("display","block")},e.fn.hide=function(){return this.style("display","none")},e.fn.height=function(){var e;return e=this.offset(),e.height},e.fn.width=function(){var e;return e=this.offset(),e.width},e.fn.offset=function(){var e;return e=this[0].getBoundingClientRect(),{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},e.fn.remove=function(){return this.each(function(){if(this.parentNode!=null)return this.parentNode.removeChild(this)})}}(Quo),function(e){return e.fn.text=function(t){return t||e.toType(t)==="number"?this.each(function(){return this.textContent=t}):this[0].textContent},e.fn.html=function(t){var n;return n=e.toType(t),t||n==="number"||n==="string"?this.each(function(){return n==="string"||n==="number"?this.innerHTML=t:(this.innerHTML=null,this.appendChild(t))}):this[0].innerHTML},e.fn.append=function(t){var n;return n=e.toType(t),this.each(function(){var e=this;return n==="string"?this.insertAdjacentHTML("beforeend",t):n==="array"?t.each(function(t,n){return e.appendChild(n)}):this.appendChild(t)})},e.fn.prepend=function(t){var n;return n=e.toType(t),this.each(function(){var e=this;return n==="string"?this.insertAdjacentHTML("afterbegin",t):n==="array"?t.each(function(t,n){return e.insertBefore(n,e.firstChild)}):this.insertBefore(t,this.firstChild)})},e.fn.replaceWith=function(t){var n;return n=e.toType(t),this.each(function(){var e=this;if(this.parentNode)return n==="string"?this.insertAdjacentHTML("beforeBegin",t):n==="array"?t.each(function(t,n){return e.parentNode.insertBefore(n,e)}):this.parentNode.insertBefore(t,this)}),this.remove()},e.fn.empty=function(){return this.each(function(){return this.innerHTML=null})}}(Quo),function(e){var t,n,r,i,s,o,u,a,f,l,c;return t={TYPE:"GET",MIME:"json"},r={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},n=0,e.ajaxSettings={type:t.TYPE,async:!0,success:{},error:{},context:null,dataType:t.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},e.ajax=function(n){var r,u,l;u=e.mix(e.ajaxSettings,n),u.type===t.TYPE?u.url+=e.serializeParameters(u.data,"?"):u.data=e.serializeParameters(u.data);if(i(u.url))return e.jsonp(u);l=u.xhr(),l.onreadystatechange=function(){if(l.readyState===4)return clearTimeout(r),f(l,u)},l.open(u.type,u.url,u.async),a(l,u),u.timeout>0&&(r=setTimeout(function(){return c(l,u)},u.timeout));try{l.send(u.data)}catch(h){l=h,o("Resource not found",l,u)}return u.async?l:s(l,u)},e.jsonp=function(t){var r,i,s,o;return t.async?(i="jsonp"+ ++n,s=document.createElement("script"),o={abort:function(){e(s).remove();if(i in window)return window[i]={}}},r=void 0,window[i]=function(n){return clearTimeout(r),e(s).remove(),delete window[i],l(n,o,t)},s.src=t.url.replace(RegExp("=\\?"),"="+i),e("head").append(s),t.timeout>0&&(r=setTimeout(function(){return c(o,t)},t.timeout)),o):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},e.get=function(t,n,r,i){return e.ajax({url:t,data:n,success:r,dataType:i})},e.post=function(e,t,n,r){return u("POST",e,t,n,r)},e.put=function(e,t,n,r){return u("PUT",e,t,n,r)},e["delete"]=function(e,t,n,r){return u("DELETE",e,t,n,r)},e.json=function(n,r,i){return e.ajax({url:n,data:r,success:i,dataType:t.MIME})},e.serializeParameters=function(e,t){var n,r;t==null&&(t=""),r=t;for(n in e)e.hasOwnProperty(n)&&(r!==t&&(r+="&"),r+=n+"="+e[n]);return r===t?"":r},f=function(e,t){e.status>=200&&e.status<300||e.status===0?t.async&&l(s(e,t),e,t):o("QuoJS.ajax: Unsuccesful request",e,t)},l=function(e,t,n){n.success.call(n.context,e,t)},o=function(e,t,n){n.error.call(n.context,e,t,n)},a=function(e,t){var n;t.contentType&&(t.headers["Content-Type"]=t.contentType),t.dataType&&(t.headers.Accept=r[t.dataType]);for(n in t.headers)e.setRequestHeader(n,t.headers[n])},c=function(e,t){e.onreadystatechange={},e.abort(),o("QuoJS.ajax: Timeout exceeded",e,t)},u=function(t,n,r,i,s){return e.ajax({type:t,url:n,data:r,success:i,dataType:s,contentType:"application/x-www-form-urlencoded"})},s=function(e,n){var r;r=e.responseText;if(r)if(n.dataType===t.MIME)try{r=JSON.parse(r)}catch(i){r=i,o("QuoJS.ajax: Parse Error",e,n)}else n.dataType==="xml"&&(r=e.responseXML);return r},i=function(e){return RegExp("=\\?").test(e)}}(Quo),function(e){var t,n,r,i,s,o,u,a,f,l,c,h;return t=1,i={},r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},n={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",doubletap:"dblclick",orientationchange:"resize"},s=/complete|loaded|interactive/,e.fn.on=function(t,n,r){return n==="undefined"||e.toType(n)==="function"?this.bind(t,n):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return n==="undefined"||e.toType(n)==="function"?this.unbind(t,n):this.undelegate(n,t,r)},e.fn.ready=function(t){return s.test(document.readyState)?t(e):e.fn.addEvent(document,"DOMContentLoaded",function(){return t(e)})},e.Event=function(e,t){var n,r;n=document.createEvent("Events"),n.initEvent(e,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null);if(t)for(r in t)n[r]=t[r];return n},e.fn.bind=function(e,t){return this.each(function(){c(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){h(this,e,t)})},e.fn.delegate=function(t,n,r){return this.each(function(i,s){c(s,n,r,t,function(n){return function(r){var i,u;u=e(r.target).closest(t,s).get(0);if(u)return i=e.extend(o(r),{currentTarget:u,liveFired:s}),n.apply(u,[i].concat([].slice.call(arguments,1)))}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){h(this,t,n,e)})},e.fn.trigger=function(t,n){return e.toType(t)==="string"&&(t=e.Event(t,n)),this.each(function(){this.dispatchEvent(t)})},e.fn.addEvent=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},e.fn.removeEvent=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},c=function(t,n,r,s,o){var f,c,h,p;return n=a(n),h=l(t),c=i[h]||(i[h]=[]),f=o&&o(r,n),p={event:n,callback:r,selector:s,proxy:u(f,r,t),delegate:f,index:c.length},c.push(p),e.fn.addEvent(t,p.event,p.proxy)},h=function(t,n,r,s){var o;return n=a(n),o=l(t),f(o,n,r,s).forEach(function(n){return delete i[o][n.index],e.fn.removeEvent(t,n.event,n.proxy)})},l=function(e){return e._id||(e._id=t++)},a=function(t){var r;return r=e.isMobile()?t:n[t],r||t},u=function(e,t,n){var r;return t=e||t,r=function(e){var r;return r=t.apply(n,[e].concat(e.data)),r===!1&&e.preventDefault(),r},r},f=function(e,t,n,r){return(i[e]||[]).filter(function(e){return e&&(!t||e.event===t)&&(!n||e.callback===n)&&(!r||e.selector===r)})},o=function(t){var n;return n=e.extend({originalEvent:t},t),e.each(r,function(e,r){return n[e]=function(){return this[r]=function(){return!0},t[e].apply(t,arguments)},n[r]=function(){return!1}}),n}}(Quo),function($$){var CURRENT_TOUCH,FIRST_TOUCH,GESTURE,GESTURES,HOLD_DELAY,TAPS,TOUCH_TIMEOUT,_angle,_capturePinch,_captureRotation,_cleanGesture,_distance,_fingersPosition,_getTouches,_hold,_isSwipe,_listenTouches,_onTouchEnd,_onTouchMove,_onTouchStart,_parentIfText,_swipeDirection,_trigger;return TAPS=null,GESTURE={},FIRST_TOUCH=[],CURRENT_TOUCH=[],TOUCH_TIMEOUT=void 0,HOLD_DELAY=650,GESTURES=["tap","singleTap","doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","rotate","rotating","rotateLeft","rotateRight","pinch","pinching","pinchIn","pinchOut","drag","dragLeft","dragRight","dragUp","dragDown"],GESTURES.forEach(function(e){return $$.fn[e]=function(t){return $$(document.body).delegate(this.selector,e,t)},this}),$$(document).ready(function(){return _listenTouches()}),_listenTouches=function(){var e;return e=$$(document.body),e.bind("touchstart",_onTouchStart),e.bind("touchmove",_onTouchMove),e.bind("touchend",_onTouchEnd),e.bind("touchcancel",_cleanGesture)},_onTouchStart=function(e){var t,n,r,i;r=Date.now(),t=r-(GESTURE.last||r),TOUCH_TIMEOUT&&clearTimeout(TOUCH_TIMEOUT),i=_getTouches(e),n=i.length,FIRST_TOUCH=_fingersPosition(i,n),GESTURE.el=$$(_parentIfText(i[0].target)),GESTURE.fingers=n,GESTURE.last=r,GESTURE.taps||(GESTURE.taps=0),GESTURE.taps++;if(n===1)return n>=1&&(GESTURE.gap=t>0&&t<=250),setTimeout(_hold,HOLD_DELAY);if(n===2)return GESTURE.initial_angle=parseInt(_angle(FIRST_TOUCH),10),GESTURE.initial_distance=parseInt(_distance(FIRST_TOUCH),10),GESTURE.angle_difference=0,GESTURE.distance_difference=0},_onTouchMove=function(e){var t,n,r;return GESTURE.el&&(r=_getTouches(e),t=r.length,t===GESTURE.fingers?(CURRENT_TOUCH=_fingersPosition(r,t),n=_isSwipe(e),n&&(GESTURE.prevSwipe=!0),(n||GESTURE.prevSwipe===!0)&&_trigger("swiping"),t===2&&(_captureRotation(),_capturePinch(),e.preventDefault())):_cleanGesture()),!0},_isSwipe=function(e){var t,n,r;return t=!1,CURRENT_TOUCH[0]&&(n=Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>30,r=Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>30,t=GESTURE.el&&(n||r)),t},_onTouchEnd=function(e){var t,n,r,i,s;if(GESTURE.fingers!==1)return t=!1,GESTURE.angle_difference!==0&&(_trigger("rotate",{angle:GESTURE.angle_difference}),i=GESTURE.angle_difference>0?"rotateRight":"rotateLeft",_trigger(i,{angle:GESTURE.angle_difference}),t=!0),GESTURE.distance_difference!==0&&(_trigger("pinch",{angle:GESTURE.distance_difference}),r=GESTURE.distance_difference>0?"pinchOut":"pinchIn",_trigger(r,{distance:GESTURE.distance_difference}),t=!0),!t&&CURRENT_TOUCH[0]&&(Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>10||Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>10)&&(_trigger("drag"),n=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y),_trigger("drag"+n)),_cleanGesture();if(GESTURE.taps===2&&GESTURE.gap)return _trigger("doubleTap"),_cleanGesture();if(_isSwipe()||GESTURE.prevSwipe)return _trigger("swipe"),s=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y),_trigger("swipe"+s),_cleanGesture();_trigger("tap");if(GESTURE.taps===1)return TOUCH_TIMEOUT=setTimeout(function(){return _trigger("singleTap"),_cleanGesture()},100)},_fingersPosition=function(e,t){var n,r;r=[],n=0,e=e[0].targetTouches?e[0].targetTouches:e;while(n<t)r.push({x:e[n].pageX,y:e[n].pageY}),n++;return r},_captureRotation=function(){var angle,diff,i,symbol;angle=parseInt(_angle(CURRENT_TOUCH),10),diff=parseInt(GESTURE.initial_angle-angle,10);if(Math.abs(diff)>20||GESTURE.angle_difference!==0){i=0,symbol=GESTURE.angle_difference<0?"-":"+";while(Math.abs(diff-GESTURE.angle_difference)>90&&i++<10)eval("diff "+symbol+"= 180;");return GESTURE.angle_difference=parseInt(diff,10),_trigger("rotating",{angle:GESTURE.angle_difference})}},_capturePinch=function(){var e,t;t=parseInt(_distance(CURRENT_TOUCH),10),e=GESTURE.initial_distance-t;if(Math.abs(e)>10)return GESTURE.distance_difference=e,_trigger("pinching",{distance:e})},_trigger=function(e,t){if(GESTURE.el)return t=t||{},CURRENT_TOUCH[0]&&(t.iniTouch=GESTURE.fingers>1?FIRST_TOUCH:FIRST_TOUCH[0],t.currentTouch=GESTURE.fingers>1?CURRENT_TOUCH:CURRENT_TOUCH[0]),GESTURE.el.trigger(e,t)},_cleanGesture=function(e){return FIRST_TOUCH=[],CURRENT_TOUCH=[],GESTURE={},clearTimeout(TOUCH_TIMEOUT)},_angle=function(e){var t,n,r;return t=e[0],n=e[1],r=Math.atan((n.y-t.y)*-1/(n.x-t.x))*(180/Math.PI),r<0?r+180:r},_distance=function(e){var t,n;return t=e[0],n=e[1],Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))*-1},_getTouches=function(e){return $$.isMobile()?e.touches:[e]},_parentIfText=function(e){return"tagName"in e?e:e.parentNode},_swipeDirection=function(e,t,n,r){var i,s;return i=Math.abs(e-t),s=Math.abs(n-r),i>=s?e-t>0?"Left":"Right":n-r>0?"Up":"Down"},_hold=function(){if(GESTURE.last&&Date.now()-GESTURE.last>=HOLD_DELAY)return _trigger("hold"),GESTURE.taps=0}}(Quo);
//Início de APP
var APP = APP || {}; APP._nameSpace = "APP"; APP.iniciar = function(Modulos) {var quantidadeDeModulos = arguments.length; if(Modulos !== undefined && Modulos !== APP) {APP.setUp(); } if(quantidadeDeModulos == 0 || quantidadeDeModulos == 1) {this.iniciarModulos(Modulos || APP); } else if(quantidadeDeModulos > 1) {APP.iniciarModulos.apply(this, arguments); } }; APP.setUp = function() {}; APP.iniciarModulos = function(Modulo) {var Filho, i=0; if(arguments.length > 1) {for(;i<arguments.length;i++) {APP.iniciarModulos(arguments[i]); } return; } if(typeof Modulo != "object") return false; if(Modulo.hasOwnProperty('setUp') && typeof Modulo.setUp == "function") {Modulo.setUp(); } else {return false; } for(Filho in Modulo) {if(Modulo.hasOwnProperty(Filho) === true) {if(Modulo[Filho] !== null && typeof Modulo[Filho] == "object") {Modulo[Filho]['pai'] = function() {return Modulo; }; Modulo[Filho]['_nameSpace'] = (Modulo['_nameSpace'] || "APP") + '.'+Filho; APP.iniciarModulos(Modulo[Filho]); } } } return false; }; APP.nameSpace = function(nameSpace, arrayDeParametros) {var no, nos, escopos, alvo, i; if(arrayDeParametros !== undefined && arrayDeParametros instanceof Array === false) {arrayDeParametros = [arrayDeParametros]; } escopos = [window]; nos = nameSpace.split('.'); for(i=0;i<nos.length;i++) {no = nos[i]; if(escopos[i].hasOwnProperty(no)) {escopos.push(escopos[i][no]); } } alvo = escopos.pop(); if(typeof alvo == 'function') {return alvo.apply(escopos.pop(), arrayDeParametros || []); } else { return alvo; } }
//FIM de APP
var APP = APP || {};

APP.Login = {
	_tela: null,
	setUp: function() {
		var that = this;

		// ir até a tela de opções de interesses
		$$('.buttons_login').tap(function() {
			that.MostrarTelaInteresses();
			that.FecharTelaLogin();
		});

		// ativar o interesse em categorias
		$$('.circular_buttons_nav').tap(function(event){
			that.MarcarCategoriaComoInteressado(event);
		});

		// pular cadastro
		$$('#step_pass').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaLogin();
		});

		// fechar tela de interesses e ir para lista de eventos
		$$('#go_to_app').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaInteresses();
		});

		// mostrar tela de lista de eventos
		$$('#go_event_list').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaEventosMapa();
		});

		// mostrar menu principal por tap
		$$('.prime_nav_view').tap(function(){
			that.AtivarMenuPrincipal();
		});

		// mostrar tela de detalhes do evento
		$$('.content article').tap(function(){
			that.MostrarTelaDetalheEventos();
			that.FecharTelaListaEventos();
		});

		// voltar para tela de lista de eventos
		$$('#back_to_showcase_events').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaDetalheEventos();
		});

		// mostrar menu de compartilhamento
		$$('#share_button').tap(function(){
			$$('.nav_share').toggleClass('activeMenu')
		});

		// mostrar menu principal por tap
		$$('#more_informations_event').tap(function(){
			that.AtivarMenuDetalheEvento();
		});

		// alterar distância de pesquisa no mapa
		$$('#distance_change').swiping(function(){
			that.FiltroDistancia();
		});

		// mostrar opções de busca no mapa
		$$('#more_informations_map').tap(function(){
			that.AtivarMenuOpcoesGeolocalizacao();
		});

		// mostrar tela de eventos no mapa
		$$('#go_events_on_map').tap(function(event){
			that.FecharTelaListaEventos();
			that.MostrarTelaEventosMapa(event);
		});

		// that.Coordenadas();
	},
	FecharTelaLogin: function(){
		var login = $$('#app_login');

		login.removeClass('active_display');

		setTimeout(function(){
			login.style('display', 'none');
		},300);
	},
	MostrarTelaInteresses: function(){

		var interesses = $$('#app_interests');
		
		setTimeout(function(){
			interesses.style('display', 'block');
		},12);
		setTimeout(function(){
			interesses.addClass('active_display');	
		},150);
	},
	FecharTelaInteresses: function(){
		var interesses = $$('#app_interests');
		
		interesses.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			interesses.style('display', 'none');
		},300);
	},
	MarcarCategoriaComoInteressado: function(event){
		var target = event.currentTarget;

		$$(target).find('.card').toggleClass('flipped');
	},
	MostrarTelaListaEventos: function(){
		var eventos = $$('#showcase_events'),
		nav = $$('#app_navigation a'),
		target = $$('#go_event_list'),
		aplicacao = $$('#app_canvas'),
		menu = $$('#left_bar');

		menu.removeClass('activeMenu');		
		aplicacao.removeClass('prime_nav_view_show');

		nav.removeClass('active');
		target.addClass('active');
		
		setTimeout(function(){
			eventos.style('display', 'block').removeClass('close_display');
		},12);
		setTimeout(function(){
			eventos.addClass('active_display');	
		},150);
	},
	FecharTelaListaEventos: function(){
		var interesses = $$('#showcase_events');
		
		interesses.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			interesses.style('display', 'none');
		},300);
	},
	AtivarMenuPrincipal: function(){
		var aplicacao = $$('#app_canvas'),
		menu = $$('#left_bar'),
		body = $$('#all_aplication');
		
		menu.toggleClass('activeMenu');		
		aplicacao.toggleClass('prime_nav_view_show');

		setTimeout(function(){
			body.toggleClass('hidde');

		},300);

	},
	AtivarMenuPrincipalSwipe: function(event){
		var valor = event.currentTouch.x,
		aplicacao = $$('#app_canvas'),
		menu = $$('#left_bar');

		menu.addClass('activeMenu');
		if (valor >= 100){
			aplicacao.addClass('prime_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	DesativarMenuPrincipalSwipe: function(event){
		var valor = event.currentTouch.x,
		aplicacao = $$('#app_canvas'),
		menu = $$('#left_bar');

		
		menu.removeClass('activeMenu');
		if (valor >= 100){
			aplicacao.removeClass('prime_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	MostrarTelaDetalheEventos: function(){
		var eventos = $$('#event_detail');
		
		setTimeout(function(){
			eventos.style('display', 'block').removeClass('close_display');
		},12);
		setTimeout(function(){
			eventos.addClass('active_display');	
		},150);
	},
	FecharTelaDetalheEventos: function(){
		var eventos = $$('#event_detail');
		
		eventos.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			eventos.style('display', 'none');
		},300);
	},
	AtivarMenuDetalheEvento: function(){
		var aplicacao = $$('#app_canvas'),
		menu = $$('#right_bar_event');
		
		menu.toggleClass('activeMenu');		
		aplicacao.toggleClass('event_nav_view_show');
	},
	AtivarMenuDetalheEventoSwipe: function(event){
		var valor = event.currentTouch.x,
		aplicacao = $$('#app_canvas'),
		menu = $$('#right_bar_event');

		menu.addClass('activeMenu');
		if (valor >= 100){
			aplicacao.addClass('event_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	DesativarMenuDetalheEventoSwipe: function(event){
		var valor = event.currentTouch.x,
		aplicacao = $$('#app_canvas'),
		menu = $$('#right_bar_event');

		
		menu.removeClass('activeMenu');
		if (valor >= 100){
			aplicacao.removeClass('event_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	MostrarTelaEventosMapa: function(event){
		var geolocalizacao = $$('#events_on_map'),
		aplicacao = $$('#app_canvas'),
		menu = $$('#left_bar'),
		nav = $$('#app_navigation a'),
		target = $$(event.currentTarget);
		
		setTimeout(function(){
			geolocalizacao.style('display', 'block').removeClass('close_display');
		},12);
		setTimeout(function(){
			geolocalizacao.addClass('active_display');	
		},150);

		menu.removeClass('activeMenu');		
		aplicacao.removeClass('prime_nav_view_show');

		nav.removeClass('active');
		target.addClass('active');
	},
	FecharTelaEventosMapa: function(){
		var geolocalizacao = $$('#events_on_map');
		
		geolocalizacao.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			geolocalizacao.style('display', 'none');
		},300);
	},
	FiltroDistancia: function(){
		var input_val = $$('#distance_change').val(),
		bandeira = $$('.result_distance');

		bandeira.text(input_val + ' km')

		if (input_val == 5){
			bandeira.style('left','2%');
		} else if(input_val == 6){
			bandeira.style('left','18%');
		}else if(input_val == 7){
			bandeira.style('left','32%');
		}else if(input_val == 8){
			bandeira.style('left','47%');
		}else if(input_val == 9){
			bandeira.style('left','61%');
		}else if(input_val == 10){
			bandeira.style('left','76%');
		};
	},
	AtivarMenuOpcoesGeolocalizacao: function(){
		var aplicacao = $$('#app_canvas'),
		menu = $$('#right_bar');
		
		menu.toggleClass('activeMenu');		
		aplicacao.toggleClass('event_nav_view_show');
	},
	Coordenadas: function(position) {

		var mapcanvas = document.createElement('div');
		mapcanvas.id = 'mapcanvas';
		mapcanvas.style.height = '400px';
		mapcanvas.style.width = '320px';

		document.querySelector('#map').appendChild(mapcanvas);

		var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			myOptions = {
				zoom: 15,
				center: latlng,
				mapTypeControl: true, //enable true for more options
				navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		
		var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions),
										marker = new google.maps.Marker({
										position: latlng, 
										map: map, 
										title:"Você está aqui! (no raio de "+position.coords.accuracy+" metros)"
									});



	}
}
