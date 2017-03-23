/*! ni v0.0.1 by NewsNing */
!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(2),o=i(r),a=n(3),u=i(a),s=n(4),l=i(s),c=n(5),f=i(c),v=n(6),h=i(v),p=n(7),d=i(p),w=n(8),y=i(w),g=n(9),b=i(g),_=n(10),m=i(_),k=n(11),x=i(k),C=n(12),S=n(13),O=i(S),W=Object.create(null);W.ready=C.ready,W.plusReady=C.plusReady,W.gallery=l.default,W.key=new x.default,W.OAuth=u.default,W.Share=O.default,W.Cache=f.default,W.WebviewGroup=h.default,W.WebviewGroupLow=d.default,W.SliderMenu=y.default,W.Broadcast=o.default,W.Zip=b.default,W.Download=m.default,void 0!==window&&(window.ni=W)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){var e=void 0,t=void 0,r=void 0,o=function(){function o(){n(this,o),this.newState=!0,r={}}return i(o,[{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.self,r=void 0!==i&&i,o=n.ids,a=void 0===o?[]:o;if(window.plus){var u=void 0;if(a.length>0){u=[];var s=!0,l=!1,c=void 0;try{for(var f,v=a[Symbol.iterator]();!(s=(f=v.next()).done);s=!0){var h=f.value,p=plus.webview.getWebviewById(h);p&&u.push(p)}}catch(e){l=!0,c=e}finally{try{!s&&v.return&&v.return()}finally{if(l)throw c}}}else u=this._getViews();var d=!0,w=!1,y=void 0;try{for(var g,b=u[Symbol.iterator]();!(d=(g=b.next()).done);d=!0){var _=g.value;(_.id!=this._getIndexID()||r)&&_.evalJS("document.dispatchEvent(new CustomEvent('"+e+"', {\n                detail:JSON.parse('"+JSON.stringify(t)+"'),\n                bubbles: true,\n                cancelable: true\n            }));")}}catch(e){w=!0,y=e}finally{try{!d&&b.return&&b.return()}finally{if(w)throw y}}}}},{key:"remove",value:function(e){var t=r[e];if(!t||!t.length)return!1;var n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var s=a.value;document.removeEventListener(e,s)}}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return!0}},{key:"listen",value:function(e,t){var n=r,i=function(e){return t&&t.call(t,e.detail)};return n[e]||(n[e]=[]),n[e].push(i),document.addEventListener(e,i),this}},{key:"_getViews",value:function(){return!this.newState&&e||(e=plus.webview.all()),e}},{key:"_getIndexID",value:function(){return t||(t=plus.webview.currentWebview().id),t}}]),o}();return o}();t.default=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;n(this,e),this.auths=null,this.type=t,this.OAuthCallBack=function(){return i.apply(r,arguments)},this.start()}return i(e,[{key:"start",value:function(){var e=this;this.getService(this.type,function(t){e.getOAuthInfo(t,function(){e.OAuthCallBack(null,t)})})}},{key:"getOAuthInfo",value:function(e,t){var n=this,i=arguments;this._OAuthLogin(e,function(){e.getUserInfo(function(){t&&t(e)},function(){return n.OAuthCallBack.apply(null,i)})})}},{key:"_OAuthLogin",value:function(e,t){var n=this,i=arguments;e.authResult?t&&t():e.login(function(){t&&t()},function(){return n.OAuthCallBack.apply(null,i)})}},{key:"_getService",value:function(e,t){for(var n in this.auths)if(e===this.auths[n].id)return t&&t(this.auths[n]),this.auths[n]}},{key:"getService",value:function(e,t){var n=this,i=arguments;return null===this.auths?this._getHtml5PlusServices(function(r,o){return r?n.OAuthCallBack.apply(null,i):(n.auths=o,void n._getService(e,t))}):void this._getService(e,t)}},{key:"_getHtml5PlusServices",value:function(e){plus.oauth.getServices(function(t){e(null,t)},function(t){e(t,null)})}}]),e}();t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){plus.nativeUI.actionSheet({cancel:"取消",buttons:[{title:"照相机",style:"destructive"},{title:"最近相片"},{title:"相册"}]},function(n){var i=n.index;if(!(i<=0))if(i--,0===i){var r=plus.camera.getCamera();r.captureImage(function(t){plus.io.resolveLocalFileSystemURL(t,function(t){var n=t.name,i=t.toLocalURL();e&&e(null,[i],[n])},function(t){e&&e(t.message)})},function(t){e&&e(t.message)},{filename:"_doc/camera/",index:1})}else{var o=!1;2===i&&(o=!0),plus.gallery.pick(function(n){if(t){for(var i=[],r=0;r<n.files.length;r++)i.push(n.files[r]);n=i}e&&e(null,n)},function(t){e&&e(t.message)},{filter:"image",multiple:!!t,system:o,maximum:t,onmaxed:function(){plus.nativeUI.toast("您最多能选择"+t+"张")}})}})};t.default=n},function(module,exports){"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Cache=function(){var CacheBase=function(){function CacheBase(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"__this_is_cache_key_",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.plus,r=void 0!==i&&i;_classCallCheck(this,CacheBase),this.key=e,this.plus=r,null===this.get()&&this.set(t)}return _createClass(CacheBase,[{key:"storage",value:function(e,t){return t?this.plus?plus.storage.setItem(e,t):window.localStorage.setItem(e,t):this.plus?plus.storage.getItem(e):window.localStorage.getItem(e)}},{key:"isEmpty",value:function(){return!this.storage(this.key)}},{key:"clear",value:function(){return this.storage(this,key,"")}},{key:"get",value:function(e){var t=this.storage(this.key)||'{"type":"_null"}';return t=this._getAfter(t),e&&e(t),t}},{key:"set",value:function(e,t){var n=this._setBefore(e);return this.storage(this.key,n),t&&t(n),n}},{key:"_getAfter",value:function _getAfter(op){op=JSON.parse(op);var cs={_string:function(e){return e},_number:function(e){return+e},_boolean:function(e){return"true"===e},_undefined:function(e){},_object:function(e){return JSON.parse(e)},_function:function _function(val){return eval("("+val+")")},_array:function(e){return JSON.parse(e)},_date:function(e){return new Date(e)},_regexp:function(e){return new RegExp(e)},_null:function(e){return null}};return cs[op.type](op.value)}},{key:"_setBefore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="_"+Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return function(e,n){var i={_string:function(e){return e},_number:function(e){return e},_boolean:function(e){return e?"true":"false"},_undefined:function(e){return"undefined"},_object:function(e){return JSON.stringify(e)},_function:function(e){return e.toString()},_array:function(e){return JSON.stringify(e)},_date:function(e){return e.getTime()},_regexp:function(e){return e.toString().replace(/[(^\/)|($\/)]/g,"")},_null:function(e){return"null"}};return JSON.stringify({type:t,value:i[n](e)})}(e,t)}}]),CacheBase}(),Cache=function(e){function t(){var e;_classCallCheck(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return _possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)))}return _inherits(t,e),_createClass(t,[{key:"plus",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.plus=e}},{key:"push",value:function(){var e=this.data;return!!Array.isArray(e)&&(e.push.apply(e,arguments),void(this.data=e))}},{key:"data",get:function(){return this.get()},set:function(e){return this.set(e)}}]),t}(CacheBase);return Cache}();exports.default=Cache},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){var e=function(){function e(t,i,r){n(this,e),this.id=t,this.url=i.url,this.options=i,this.groupContext=r,this.webview=!1,this.inited=!1}return i(e,[{key:"createWebview",value:function(e){var t=this.options,n=this.groupContext.other;if(t.styles=t.styles||{top:"83px",bottom:"0px",render:"always"},t.styles.popGesture="none",this.webview){this.webview.setStyle(t.styles);for(var i in t.extras)this.webview[i]=t.extras[i]}else t.styles.left="100%","startAnimation"!==e&&(t.styles.left="0",n.showWaiting&&plus.nativeUI.showWaiting()),this.webview=plus.webview.create(this.url,this.id,t.styles,t.extras),plus.webview.currentWebview().append(this.webview);this._initWebview(),this.inited=!0}},{key:"_initWebview",value:function(){var e=this,t=this.options;if(this.webview&&(this.webview.addEventListener("rendering",function(){setTimeout(function(){plus.nativeUI.closeWaiting()},500)}),t.pullToRefresh&&t.pullToRefresh.support&&support.pullToRefresh())){var n=t.pullToRefresh.callback;this.webview.setPullToRefresh(t.pullToRefresh,function(){n?n(e.webview):!function(){var t=function e(){var t=this;setTimeout(function(){t.webview.endPullToRefresh()},1e3),this.webview.removeEventListener("titleUpdate",e)};e.webview.addEventListener("titleUpdate",t),e.webview.reload()}()})}}}]),e}(),t=function(){function t(e,i){var r=i.items,o=void 0===r?[]:r,a=i.index,u=void 0===a?0:a,s=i.styles,l=void 0===s?{}:s,c=i.onChange,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},v=f.showWaiting,h=void 0!==v&&v;n(this,t),c=c||function(){},this.id=e,this.options={items:o,index:u,styles:l,onChange:c},this.other={showWaiting:h},this.styles=l,this.items=o,this.onChange=c,this.webviews={},this.webviewContexts={},this.currentWebview=!1,this._init()}return i(t,[{key:"_init",value:function(){this._initParent(),this._initNativeView(),this._initWebviewContexts(this.options.index)}},{key:"_initParent",value:function(){this.parent=plus.webview.getWebviewById(this.id),this.parent||(this.parent=plus.webview.create(this.id,this.id),this.parent.show("none"))}},{key:"_initNativeView",value:function(){this.nativeView=new plus.nativeObj.View("__W2A_TAB_NATIVE",{top:"56px",left:"100%",width:"100%",backgroudColor:"#ffffff",opacity:0}),this.nativeView.show()}},{key:"_initWebviewContexts",value:function(){for(var t=this.items.length,n=t-1;n>=0;n--){var i=this.items[n],r=i.id,o=0===n,a=n===t-1,u=this.options.index===n,s=i.extras;s.__wap2app_url=i.url,s.__wap2app_index=n,s.__wap2app_left=o?"":this.items[n-1].id,s.__wap2app_right=a?"":this.items[n+1].id;var l=i.styles||{};n>this.options.index?l.left="100%":n<this.options.index?l.left="-100%":l.left="0";var c=new e(r,i,this);this.webviewContexts[r]=c,u&&(c.webview=plus.webview.getWebviewById(r),c.createWebview(),c.webview.show("none"),this._initDrags(c.webview),this.currentWebview=c.webview)}}},{key:"_initDrag",value:function(e,t){var n=this,i="__wap2app_drag_"+t+"_flag";if(!e[i]){var r=e["__wap2app_"+("left"===t?"right":"left")];r?!function(){var o=plus.webview.getWebviewById(r);o?e[i]=!0:o=n.nativeView,e.drag({direction:t,moveMode:"followFinger"},{view:o,moveMode:"follow"},function(n){"end"===n.type&&n.result&&this._dragCallback(t,e,o,r)}.bind(n))}():e[i]=!0}}},{key:"_initDrags",value:function(e){this._initDrag(e,"left"),this._initDrag(e,"right")}},{key:"_onChange",value:function(e){this.currentWebview=e,this.onChange({index:e.__wap2app_index})}},{key:"_dragCallback",value:function(e,t,n,i){if(n===this.nativeView){this.webviewContexts[i].createWebview("drag");var r=this.webviewContexts[i].webview;r.show(),this.nativeView.setStyle({left:"100%"}),this._initDrags(r),this._onChange(r),this._checkDrags(r)}else this._onChange(n)}},{key:"_checkDrags",value:function(e){var t=e.__wap2app_left,n=e.__wap2app_right;if(t){var i=plus.webview.getWebviewById(t);i&&!i.__wap2app_drag_left_flag&&this._initDrag(i,"left")}if(n){var r=plus.webview.getWebviewById(n);r&&!r.__wap2app_drag_right_flag&&this._initDrag(r,"right")}}},{key:"getCurrentWebview",value:function(){return this.currentWebview}},{key:"getCurrentWebviewContext",value:function(){return!!this.currentWebview&&this.webviewContexts[this.currentWebview.id]}},{key:"switchTab",value:function(e){e=e.replace("_0","");var t=this.currentWebview;if(e!==t.id){var n=this.webviewContexts[e],i=n.webview,r="100%",o="-100%";n.options.extras.__wap2app_index>t.__wap2app_index&&(r="-100%",o="100%");var a=!1;i||(a=!0,n.createWebview("startAnimation"),i=n.webview,i.show(),this._initDrags(i),this._checkDrags(i)),plus.webview.startAnimation({view:t,styles:{fromLeft:"0",toLeft:r},action:"show"},{view:i,styles:{fromLeft:o,toLeft:"0"},action:"show"},function(e){e.id===i.id&&(a&&this.other.showWaiting&&plus.nativeUI.showWaiting(),this.currentWebview=i,this.onChange({index:i.__wap2app_index}))}.bind(this))}}}]),t}();return t}();e.exports=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){var e={},t=void 0,r=function(){function r(e,t){var i=t.items,o=void 0===i?[]:i,a=t.index,u=void 0===a?0:a,s=t.onChange,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=l.showWaiting,f=void 0!==c&&c;n(this,r),s=s||function(){},this.id=e,this.options={items:o,index:u,onChange:s},this.other={showWaiting:f},this.items=o,this.onChange=s,this._init()}return i(r,[{key:"_init",value:function(){this._initParent(),this._initWebviewContexts()}},{key:"_initParent",value:function(){this.parent=plus.webview.getWebviewById(this.id),this.parent||(this.parent=plus.webview.create(this.id,this.id),this.parent.show("none"))}},{key:"_initWebviewContexts",value:function(){var t=null;for(var n in this.items)t=this.items[n],t.index=+n,e[t.id]=t,this.options.index===+n&&this.switchTab(t.id)}},{key:"switchTab",value:function(n){var i=e[n];n=i.id;var r=plus.webview.getWebviewById(n);r?r.isVisible()||r.show("none"):(r=plus.webview.create(i.url,n,i.styles,i.extras),r.hide(),this.parent.append(r),r.show("none")),t&&plus.webview.hide(t),t=n,this.onChange({index:i.index})}}]),r}();return r}();e.exports=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.url,r=void 0===i?"":i,o=t.id,a=void 0===o?r:o,u=t.extras,s=void 0===u?{}:u;n(this,e),this.isShow=!1,this.options={url:r,id:a,extras:s},this.createMenu(),this._initEvent()}return i(e,[{key:"show",value:function(){plus.webview.startAnimation({view:this.menuv,styles:{fromLeft:"-70%",toLeft:"0"}},{view:this.indexv,styles:{fromLeft:"0",toLeft:"70%"}}),this._onend({progress:"100",direction:"right"})}},{key:"hide",value:function(){plus.webview.startAnimation({view:this.menuv,styles:{fromLeft:"0",toLeft:"-70%"}},{view:this.indexv,styles:{fromLeft:"70%",toLeft:"0"}}),this._onend({progress:"100",direction:"left"})}},{key:"createMenu",value:function(){this.menuv=plus.webview.create(this.options.url,this.options.id,{left:"-70%",width:"70%",popGesture:"none",render:"always"},this.options.extras),this.indexv=plus.webview.currentWebview()}},{key:"_initEvent",value:function(){var e=this;this.menuv.addEventListener("titleUpdate",function(){e.menuv.show("none"),e.indexv.drag({direction:"right",moveMode:"followFinger"},{view:e.menuv,moveMode:"follow"},function(t){var n="_on"+t.type;e[n]&&e[n](t)}),e.menuv.drag({direction:"left",moveMode:"followFinger"},{view:e.indexv,moveMode:"follow"},function(t){var n="_on"+t.type;e[n]&&e[n](t)})}),this.indexv.addEventListener("maskClick",function(t){e.hide()})}},{key:"_onend",value:function(e){if("100"===e.progress){var t="rgba(0,0,0,0.15)",n=!0;"left"===e.direction&&(t="none",n=!1),this.indexv.setStyle({mask:t}),this.isShow=n}}}]),e}();e.exports=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){n(this,e)}return i(e,[{key:"processImage",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};if("string"==typeof e)e=[e];else if(!Array.isArray(e))return n({message:"Please check the incoming image"});this._zipImgs(e,function(e){n(null,e)},0,t)}},{key:"_calcProportion",value:function(e,t){if(t<=1)return t;var n=1;return e>t&&(n=+(t/e).toFixed(4)),n}},{key:"_zipImgs",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=e[i];return o?void this._getFileSize(o,function(a,u){u=100*n._calcProportion(u,r),plus.zip.compressImage({src:o,dst:"_doc/tempImg/"+Date.now()+"_"+i+".jpg",overwrite:!0,format:"jpg",quality:u,rotate:0},function(o){e[i]=o.target,n._zipImgs(e,t,++i,r)},function(o){e[i]=!1,n._zipImgs(e,t,++i,r)})}):t&&t(e)}},{key:"_getFileSize",value:function(e,t){plus.io.resolveLocalFileSystemURL(e,function(e){e.isFile||t({message:"Picture path error"}),e.getMetadata(function(e){t(null,e.size/1024)},t)},t)}}]),e}();e.exports=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.suffix,o=void 0===r?"":r;n(this,e),this.url=t,this.op={suffix:o},this._init()}return i(e,[{key:"_init",value:function(){var e=this;this._onSuccess=function(){},this._onError=function(){};var t=this.url.split("/").pop();return t="_downloads/ni/"+t+this.op.suffix,this.task=plus.downloader.createDownload(this.url,{filename:t},function(n,i){200==i?(t=plus.io.convertLocalFileSystemURL(t),t.indexOf("file")<0&&(t="file://"+t),e._onSuccess(t)):(n.abort(),e._onError({message:"download error",result:n,code:i}))}),this}},{key:"onChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return this.task.addEventListener("statechanged",function(t){t.totalSize&&t.downloadedSize&&e(+(t.downloadedSize/t.totalSize*100).toFixed(2),t)}),this}},{key:"onSuccess",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return this._onSuccess=e,this}},{key:"onError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return this._onError=e,this}},{key:"start",value:function(){return this.task.start(),this}}]),e}();e.exports=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r={backbutton:[],keydown:[],keyup:[],longpressed:[],menubutton:[],searchbutton:[],volumeupbutton:[],volumedownbutton:[]},o={backbutton:[],keydown:[],keyup:[],longpressed:[],menubutton:[],searchbutton:[],volumeupbutton:[],volumedownbutton:[]},a=function(){function e(){n(this,e)}return i(e,[{key:"listen",value:function(e,t){r[e].push(t),plus.key.addEventListener(e,function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];t.call.apply(t,[t].concat(n))})}},{key:"once",value:function(e,t){o[e].push(t),plus.key.addEventListener(e,function(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];t.call.apply(t,[t].concat(i)),o[e]=[]})}},{key:"remove",value:function(e){r[e].map(function(t){plus.key.removeEventListener(e,t)}),o[e].map(function(t){plus.key.removeEventListener(e,t)}),r[e]=[],o[e]=[]}},{key:"trigger",value:function(e){r[e].map(function(e){e.call(e,{})}),o[e].map(function(t){plus.key.removeEventListener(e,t),t.call(t,{})}),o[e]=[]}},{key:"overcover",value:function(e,t){this.remove(e),this.listen(e,t)}}]),e}();e.exports=a},function(e,t){"use strict";var n=function(e){var t=/complete|loaded|interactive/;return t.test(document.readyState)?setTimeout(e,0):document.addEventListener("DOMContentLoaded",e),this},i=function(e){window.plus?setTimeout(e,0):document.addEventListener("plusready",e,!1)};e.exports={ready:n,plusReady:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){var e=void 0;return function(t){return t&&(e=t),e}}(),o={wxhy:"WXSceneSession",wxpyq:"WXSceneTimeline",qq:"qq",sinaweibo:"sinaweibo"},a=function(){function e(t,i,r,o){n(this,e),this.config={type:t,fn:i,op:r,context:o},this._initCallback(),this.start()}return i(e,[{key:"_initCallback",value:function(){this.ShareCallBack=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.config.fn.apply(this.config.context,t)}}},{key:"start",value:function(){var e=this;this.getService(this.config.type,function(t){e.sendShare(t,function(){e.ShareCallBack(null,t)})})}},{key:"sendShare",value:function(e,t){var n=this,i=this._getShareInfo(e);e.send(i,function(){t()},function(t){n.ShareCallBack(t,e)})}},{key:"_getShareInfo",value:function(e){var t={extra:{scene:o[this.config.type]},href:this.config.op.href,title:this.config.op.title,content:this.config.op.content,pictures:[this.config.op.img],thumbs:[this.config.op.img]};return t.href||(delete t.title,delete t.content),t}},{key:"_getAuth",value:function(e,t){var n=this;e.authenticated?t():e.authorize(function(){t()},function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return n.ShareCallBack.apply(null,t)})}},{key:"_getService",value:function(e,t){~e.toString().indexOf("wx")&&(e="weixin");var n=r();for(var i in n)if(console.log(JSON.stringify(n[i])),e===n[i].id)return t&&t(n[i]),n[i]}},{key:"getService",value:function(e,t){var n=this;return r()?this._getService(e,t):void this._getHtml5PlusServices(function(i){r(i),n._getService(e,t)})}},{key:"_getHtml5PlusServices",value:function(e){var t=this;plus.share.getServices(function(t){e(t)},function(e){t.ShareCallBack(e,null)})}}]),e}();e.exports=a}]);