!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e){window.addEventListener("DOMContentLoaded",function(){var t,e,n;t=document.getElementById("js-overlay"),e=document.getElementById("js-header__menu"),n=document.getElementById("js-overlay__closeBtn"),e.addEventListener("click",function(){return t.classList.add("open")}),n.addEventListener("click",function(){return t.classList.remove("open")})})},function(t,e,n){},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(window,"resize",this._checkForIntersections,!0),r(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(window,"resize",this._checkForIntersections,!0),o(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var r=i.element,o=s(r),a=this._rootContainsTarget(r),u=i.entry,h=t&&a&&this._computeTargetAndRootIntersection(r,e),l=i.entry=new n({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:o,rootBounds:e,intersectionRect:h});u?t&&a?this._hasCrossedThreshold(u,l)&&this._queuedEntries.push(l):u&&u.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var i,r,o,a,h,l,d,c,p=s(e),f=u(e),y=!1;!y;){var _=null,v=1==f.nodeType?window.getComputedStyle(f):{};if("none"==v.display)return;if(f==this.root||f==t?(y=!0,_=n):f!=t.body&&f!=t.documentElement&&"visible"!=v.overflow&&(_=s(f)),_&&(i=_,r=p,o=void 0,a=void 0,h=void 0,l=void 0,d=void 0,c=void 0,o=Math.max(i.top,r.top),a=Math.min(i.bottom,r.bottom),h=Math.max(i.left,r.left),l=Math.min(i.right,r.right),c=a-o,!(p=(d=l-h)>=0&&c>=0&&{top:o,bottom:a,left:h,right:l,width:d,height:c})))break;f=u(f)}return p}},i.prototype._getRootRect=function(){var e;if(this.root)e=s(this.root);else{var n=t.documentElement,i=t.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o==n||o==i||o<n!=o<i)return!0}},i.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},i.prototype._rootContainsTarget=function(e){return a(this.root||t,e)},i.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},i.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=i,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var n,i,r,o=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),i=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout(function(){n(),r=null},i))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},function(t,e,n){const i=n(18).EventEmitter,r=n(19),o="https://www.youtube.com/iframe_api",s={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"cued"},a={INVALID_PARAM:2,HTML5_ERROR:5,NOT_FOUND:100,UNPLAYABLE_1:101,UNPLAYABLE_2:150},u=[];t.exports=class extends i{constructor(t,e){super();const n="string"==typeof t?document.querySelector(t):t;n.id?this._id=n.id:this._id=n.id="ytplayer-"+Math.random().toString(16).slice(2,8),this._opts=Object.assign({width:640,height:360,autoplay:!1,captions:void 0,controls:!0,keyboard:!0,fullscreen:!0,annotations:!0,modestBranding:!1,related:!0,info:!0,timeupdateFrequency:1e3,playsInline:!0},e),this.videoId=null,this.destroyed=!1,this._api=null,this._autoplay=!1,this._player=null,this._ready=!1,this._queue=[],this._interval=null,this._startInterval=this._startInterval.bind(this),this._stopInterval=this._stopInterval.bind(this),this.on("playing",this._startInterval),this.on("unstarted",this._stopInterval),this.on("ended",this._stopInterval),this.on("paused",this._stopInterval),this.on("buffering",this._stopInterval),this._loadIframeAPI((t,e)=>{if(t)return this._destroy(new Error("YouTube Iframe API failed to load"));this._api=e,this.videoId&&this.load(this.videoId,this._autoplay)})}load(t,e=!1){this.destroyed||(this.videoId=t,this._autoplay=e,this._api&&(this._player?this._ready&&(e?this._player.loadVideoById(t):this._player.cueVideoById(t)):this._createPlayer(t)))}play(){this._ready?this._player.playVideo():this._queueCommand("play")}pause(){this._ready?this._player.pauseVideo():this._queueCommand("pause")}stop(){this._ready?this._player.stopVideo():this._queueCommand("stop")}seek(t){this._ready?this._player.seekTo(t,!0):this._queueCommand("seek",t)}setVolume(t){this._ready?this._player.setVolume(t):this._queueCommand("setVolume",t)}getVolume(){return this._ready&&this._player.getVolume()||0}mute(){this._ready?this._player.mute():this._queueCommand("mute")}unMute(){this._ready?this._player.unMute():this._queueCommand("unMute")}isMuted(){return this._ready&&this._player.isMuted()||!1}setSize(t,e){this._ready?this._player.setSize(t,e):this._queueCommand("setSize",t,e)}setPlaybackRate(t){this._ready?this._player.setPlaybackRate(t):this._queueCommand("setPlaybackRate",t)}getPlaybackRate(){return this._ready&&this._player.getPlaybackRate()||1}getAvailablePlaybackRates(){return this._ready&&this._player.getAvailablePlaybackRates()||[1]}getDuration(){return this._ready&&this._player.getDuration()||0}getProgress(){return this._ready&&this._player.getVideoLoadedFraction()||0}getState(){return this._ready&&s[this._player.getPlayerState()]||"unstarted"}getCurrentTime(){return this._ready&&this._player.getCurrentTime()||0}destroy(){this._destroy()}_destroy(t){this.destroyed||(this.destroyed=!0,this._player&&(this._player.stopVideo(),this._player.destroy()),this.videoId=null,this._id=null,this._opts=null,this._api=null,this._player=null,this._ready=!1,this._queue=null,this._stopInterval(),this.removeListener("playing",this._startInterval),this.removeListener("paused",this._stopInterval),this.removeListener("buffering",this._stopInterval),this.removeListener("unstarted",this._stopInterval),this.removeListener("ended",this._stopInterval),t&&this.emit("error",t))}_queueCommand(t,...e){this.destroyed||this._queue.push([t,e])}_flushQueue(){for(;this._queue.length;){const t=this._queue.shift();this[t[0]].apply(this,t[1])}}_loadIframeAPI(t){if(window.YT&&"function"==typeof window.YT.Player)return t(null,window.YT);u.push(t),Array.from(document.getElementsByTagName("script")).some(t=>t.src===o)||r(o).catch(t=>{for(;u.length;){u.shift()(t)}}),"function"!=typeof window.onYouTubeIframeAPIReady&&(window.onYouTubeIframeAPIReady=()=>{for(;u.length;){u.shift()(null,window.YT)}})}_createPlayer(t){if(this.destroyed)return;const e=this._opts;this._player=new this._api.Player(this._id,{width:e.width,height:e.height,videoId:t,playerVars:{autoplay:e.autoplay?1:0,cc_load_policy:null!=e.captions?!1!==e.captions?1:0:void 0,hl:null!=e.captions&&!1!==e.captions?e.captions:void 0,cc_lang_pref:null!=e.captions&&!1!==e.captions?e.captions:void 0,controls:e.controls?2:0,disablekb:e.keyboard?0:1,enablejsapi:1,fs:e.fullscreen?1:0,iv_load_policy:e.annotations?1:3,modestbranding:e.modestBranding?1:0,origin:window.location.origin,playsinline:e.playsInline?1:0,rel:e.related?1:0,showinfo:e.info?1:0,wmode:"opaque"},events:{onReady:()=>this._onReady(t),onStateChange:t=>this._onStateChange(t),onPlaybackQualityChange:t=>this._onPlaybackQualityChange(t),onPlaybackRateChange:t=>this._onPlaybackRateChange(t),onError:t=>this._onError(t)}})}_onReady(t){this.destroyed||(this._ready=!0,this.load(this.videoId,this._autoplay),this._flushQueue())}_onStateChange(t){if(this.destroyed)return;const e=s[t.data];if(!e)throw new Error("Unrecognized state change: "+t);["paused","buffering","ended"].includes(e)&&this._onTimeupdate(),this.emit(e),["unstarted","playing","cued"].includes(e)&&this._onTimeupdate()}_onPlaybackQualityChange(t){this.destroyed||this.emit("playbackQualityChange",t.data)}_onPlaybackRateChange(t){this.destroyed||this.emit("playbackRateChange",t.data)}_onError(t){if(this.destroyed)return;const e=t.data;return e!==a.HTML5_ERROR?e===a.UNPLAYABLE_1||e===a.UNPLAYABLE_2||e===a.NOT_FOUND||e===a.INVALID_PARAM?this.emit("unplayable",this.videoId):void this._destroy(new Error("YouTube Player Error. Unknown error code: "+e)):void 0}_onTimeupdate(){this.emit("timeupdate",this.getCurrentTime())}_startInterval(){this._interval=setInterval(()=>this._onTimeupdate(),this._opts.timeupdateFrequency)}_stopInterval(){clearInterval(this._interval),this._interval=null}}},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(0),n(2);var i=n(3),r=n.n(i),o=(n(1),n(20),function(){var t,e=function(e){if(void 0===t||void 0===t.loadVideoById){var n=function(){t=new r.a.Player("js-timeline__player",{videoId:e,loop:!0,events:{onReady:function(t){return t.target.playVideo()}}})};void 0===r.a||void 0===r.a.Player?window.onYouTubePlayerAPIReady=function(){return n()}:n()}else t.loadVideoById(e)},n=document.getElementById("js-timeline"),i=document.querySelectorAll(".timeline__item"),o="timeline__item--active",s=function(t){n.style.backgroundImage="url(".concat(t,")")};i[0].classList.add(o),s(i[0].dataset.src),e(i[0].dataset.id),window.addEventListener("scroll",function(){var t=window.scrollY;i.forEach(function(n){var i=n.offsetTop,r=i+n.offsetHeight;t+80>=i&&t<=r&&(document.querySelectorAll(".".concat(o)).forEach(function(t){return t.classList.remove(o)}),n.classList.add(o),s(n.dataset.src),e(n.dataset.id))})})});window.onload=function(){var t,e;o(),t=0,(e=document.querySelectorAll(".timeline__img")).forEach(function(n){var i=new Image;i.onload=function(){i.complete&&(t+=1),t===e.length&&(document.getElementById("js-loader").classList.add("hide"),document.getElementById("js-main").classList.add("show"),document.getElementById("js-header").classList.add("show"),document.getElementById("js-footer").classList.add("show"))},i.src=n.getAttribute("src")})}},function(t,e,n){"use strict";var i,r="object"==typeof Reflect?Reflect:null,o=r&&"function"==typeof r.apply?r.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};i=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function h(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function l(t,e,n,i){var r,o,s,a;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),void 0===s)s=o[e]=n,++t._eventsCount;else if("function"==typeof s?s=o[e]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=h(t))>0&&s.length>r&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return t}function d(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}function c(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=d.bind(i);return r.listener=n,i.wrapFn=r,r}function p(t,e,n){var i=t._events;if(void 0===i)return[];var r=i[e];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(r):y(r,r.length)}function f(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function y(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var i="error"===t,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=r[t];if(void 0===u)return!1;if("function"==typeof u)o(u,this,e);else{var h=u.length,l=y(u,h);for(n=0;n<h;++n)o(l[n],this,e)}return!0},a.prototype.addListener=function(t,e){return l(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return l(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,c(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,c(this,t,e)),this},a.prototype.removeListener=function(t,e){var n,i,r,o,s;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(i=this._events))return this;if(void 0===(n=i[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,r),1===n.length&&(i[t]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},a.prototype.listeners=function(t){return p(this,t,!0)},a.prototype.rawListeners=function(t){return p(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):f.call(t,e)},a.prototype.listenerCount=f,a.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(t,e){t.exports=function(t,e,n){return new Promise((i,r)=>{const o=document.createElement("script");o.async=!0,o.src=t;for(let[t,n]of Object.entries(e||{}))o.setAttribute(t,n);o.onload=()=>{o.onerror=o.onload=null,i(o)},o.onerror=()=>{o.onerror=o.onload=null,r(new Error(`Failed to load ${t}`))},(n||document.head||document.getElementsByTagName("head")[0]).appendChild(o)})}},function(t,e,n){}]);