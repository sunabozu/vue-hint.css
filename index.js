!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueHintCss=t():e.VueHintCss=t()}(this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e,t){e.classList.add(t)}function i(e,t){e.classList.remove(t)}function n(e,t,i){if(e.setAttribute("aria-label",t.value),!i){var n=!0,o=!1,u=void 0;try{for(var l,d=a[Symbol.iterator]();!(n=(l=d.next()).done);n=!0){var s=l.value;if(t.modifiers[s]){r(e,"hint--"+s);break}}}catch(c){o=!0,u=c}finally{try{!n&&d["return"]&&d["return"]()}finally{if(o)throw u}}var v=!0,y=!1,m=void 0;try{for(var h,b=f[Symbol.iterator]();!(v=(h=b.next()).done);v=!0){var p=h.value;if(t.modifiers[p]){r(e,"hint--"+p);break}}}catch(c){y=!0,m=c}finally{try{!v&&b["return"]&&b["return"]()}finally{if(y)throw m}}t.modifiers.always&&r(e,"hint--always"),t.modifiers.rounded&&r(e,"hint--rounded"),t.modifiers.no_animate&&r(e,"hint--no-animate"),t.modifiers.bounce&&r(e,"hint--bounce")}}function o(e,t){e.removeAttribute("aria-label");var r=!0,n=!1,o=void 0;try{for(var u,l=a[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var d=u.value;t.modifiers[d]&&i(e,"hint--"+d)}}catch(s){n=!0,o=s}finally{try{!r&&l["return"]&&l["return"]()}finally{if(n)throw o}}var c=!0,v=!1,y=void 0;try{for(var m,h=f[Symbol.iterator]();!(c=(m=h.next()).done);c=!0){var b=m.value;t.modifiers[b]&&i(e,"hint--"+b)}}catch(s){v=!0,y=s}finally{try{!c&&h["return"]&&h["return"]()}finally{if(v)throw y}}t.modifiers.always&&i(e,"hint--always"),t.modifiers.rounded&&i(e,"hint--rounded"),t.modifiers.no_animate&&i(e,"hint--no-animate"),t.modifiers.bounce&&i(e,"hint--bounce")}Object.defineProperty(t,"__esModule",{value:!0});var a=["top","bottom","left","right"],f=["error","success","info","warning"];t["default"]={bind:function(e,t){t.value&&n(e,t)},update:function(e,t){t.value?t.oldValue?n(e,t,!0):n(e,t):o(e,t)}}}])});