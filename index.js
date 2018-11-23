!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}("undefined"!=typeof window?window:this,function(){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}([function(t,n,e){"use strict";e.r(n);var r=function(){function t(t,n,e,r,o,i){i.AssertExtend(),o.AssertExtend(),this.tl=t,this.ef=e,this.elf=r,this.c=i}return t.prototype.AnimateText=function(t,n,e){void 0===e&&(e={});var r=this.pt(e),o=this.elf.SPAN().Style("color",r.color).Style("font-weight",r.bold?"900":"400").Style("font-style",r.italics?"oblique":"none").Style("text-decoration",r.underline?"underline":"none"),i=["<br>",o];return r.newLine||(i=i.Skip(1)),r.append||(t.innerHTML=""),t.Append(i),this.tl.to(o,r.duration,{text:n,immediateRender:!0,ease:r.ease,onComplete:r.callback}),t},t.prototype.BackgroundColor=function(t,n,e,r){return this.a(t,"backgroundColor",n,e,r)},t.prototype.FontColor=function(t,n,e,r){return this.a(t,"color",n,e,r)},t.prototype.Opacity=function(t,n,e,r){return this.a(t,"opacity",n.toString(),e.toString(),r)},t.prototype.X=function(t,n,e,r){return this.a(t,"left",this.ts(n),this.ts(e),r)},t.prototype.Y=function(t,n,e,r){return this.a(t,"top",this.ts(n),this.ts(e),r)},t.prototype.H=function(t,n,e,r){return this.a(t,"height",this.ts(n),this.ts(e),r)},t.prototype.W=function(t,n,e,r){return this.a(t,"width",this.ts(n),this.ts(e),r)},t.prototype.Rotate=function(t,n,e,r){return this.a(t,"rotation",n+"deg",e+"deg",r)},t.prototype.ScaleX=function(t,n,e,r){return this.a(t,"scaleX",n.toString(),e.toString(),r)},t.prototype.ScaleY=function(t,n,e,r){return this.a(t,"scaleY",n.toString(),e.toString(),r)},t.prototype.SkewX=function(t,n,e,r){return this.a(t,"skewX",n+"deg",e+"deg",r)},t.prototype.SkewY=function(t,n,e,r){return this.a(t,"skewY",n+"deg",e+"deg",r)},t.prototype.Sepia=function(t,n,e,r){n=n.Clamp(0,1),e=e.Clamp(0,1);return this.af(t,"se",n.toString(),e.toString(),".sepia-filter",!1,function(t){return 100*t+"%"},{values:function(t){return.393+.607*(1-t)+" "+(.769-.769*(1-t))+" "+(.189-.189*(1-t))+" 0 0\n "+(.349-.349*(1-t))+" "+(.686+.314*(1-t))+" "+(.168-.168*(1-t))+" 0 0\n"+(.272-.272*(1-t))+" "+(.534-.534*(1-t))+" "+(.131+.869*(1-t))+" 0 0\n0 0 0 1 0"}},r)},t.prototype.Saturate=function(t,n,e,r){return this.af(t,"sa",n.toString(),e.toString(),".saturate-filter",!1,function(t){return 100*t+"%"},{values:function(t){return t}},r)},t.prototype.Invert=function(t,n,e,r){return n=n.Clamp(0,1),e=e.Clamp(0,1),this.af(t,"i",n.toString(),e.toString(),".negative-filter feFunc",!0,function(t){return 100*t+"%"},{tableValues:function(t){return t+" "+(1-t)}},r)},t.prototype.Blur=function(t,n,e,r){return this.af(t,"bl",n.toString(),e.toString(),"feGaussianBlur",!1,function(t){return t+"px"},{stdDeviation:function(t){return t}},r)},t.prototype.Greyscale=function(t,n,e,r){n=n.Clamp(0,1),e=e.Clamp(0,1);return this.af(t,"g",n.toString(),e.toString(),".grayscale-filter",!1,function(t){return 100*t+"%"},{value:function(t){return.2126+.7874*(1-t)+" "+(.7152-.7152*(1-t))+" "+(.0722-.0722*(1-t))+" 0 0\n"+(.2126-.2126*(1-t))+" "+(.7152+.2848*(1-t))+" "+(.0722-.0722*(1-t))+" 0 0\n"+(.2126-.2126*(1-t))+" "+(.7152-.7152*(1-t))+" "+(.0722+.9278*(1-t))+" 0 0\n0 0 0 1 0"}},r)},t.prototype.HueRotation=function(t,n,e,r){return this.af(t,"hr",n.toString(),e.toString(),".hue-rotate-filter",!1,function(t){return t+"deg"},{values:function(t){return t}},r)},t.prototype.Brightness=function(t,n,e,r){return this.af(t,"br",n.toString(),e.toString(),".brightness-filter feFunc",!0,function(t){return 100*t+"%"},{slope:function(t){return t}},r)},t.prototype.Contrast=function(t,n,e,r){return this.af(t,"c",n.toString(),e.toString(),".contrast-filter feFunc",!0,function(t){return 100*t+"%"},{slope:function(t){return t.toString()},intercept:function(t){return""+(.5-.5*t)}},r)},t.prototype.af=function(n,r,t,e,o,i,u,a,c){var p=this;void 0===c&&(c={}),this.s(n);var s=this.pa(c),f=n.SecretFilterData;f[r]=t;var l,y=function(t){return n.querySelector(t)},h=this.is(n)?i?[y((l=o)+"R"),y(l+"G"),y(l+"B")]:[y(o)]:[n],d=this.is(n)?function(){var e=f[r];h.Each(function(t){for(var n in a)t.Attr(n,a[n](e))})}:function(){var n=f[r];h.Each(function(t){return t.Style("filter",p.m(r)+"("+u(n)+")")})},S={ease:s.ease,immediateRender:!0,onComplete:s.callback,onUpdate:d};return S[r]=e,this.tl.to(f,s.duration,S),n},t.prototype.m=function(t){switch(t){case"hr":return"hue-rotate";case"bl":return"blur";case"br":return"brightness";case"i":return"invert";case"se":return"sepia";case"sa":return"saturate";case"g":return"grayscale";case"c":return"contrast";default:throw Error("Unknown filter: "+t)}},t.prototype.pt=function(t){var n=this.pa(t);return{duration:n.duration,callback:n.callback,ease:n.ease,color:t.color||"black",bold:t.bold||!1,italics:t.bold||!1,underline:t.underline||!1,append:t.append||!1,newLine:t.newLine||!1}},t.prototype.pa=function(t){var n=t.ease||this.ef.Constant();return{duration:null==t.duration?0:t.duration/1e3,callback:t.callback||function(){},ease:n.Get()}},t.prototype.s=function(t){var n=t;null==n.SecretFilterData&&(n.SecretFilterData={})},t.prototype.a=function(t,n,e,r,o){void 0===o&&(o={});var i=this.pa(o),u={};u[n]=e;var a={onComplete:i.callback,immediateRender:!0,ease:i.ease};return a[n]=r,this.tl.fromTo(t,i.duration,u,a),t},t.prototype.is=function(t){return this.c.IsString(t.Attr("elefact-special-element-filter"))},t.prototype.ts=function(t){return this.c.IsAnyString(t)?t:t.toString()+"px"},t}(),o=function(){function t(t){this.sync=t}return t.prototype.AnimateText=function(t,n,e){return this.p("AnimateText",[n],t,e)},t.prototype.BackgroundColor=function(t,n,e,r){return this.p("BackgroundColor",[n,e],t,r)},t.prototype.Blur=function(t,n,e,r){return this.p("Blur",[n,e],t,r)},t.prototype.Brightness=function(t,n,e,r){return this.p("Brightness",[n,e],t,r)},t.prototype.Contrast=function(t,n,e,r){return this.p("Contrast",[n,e],t,r)},t.prototype.FontColor=function(t,n,e,r){return this.p("FontColor",[n,e],t,r)},t.prototype.Greyscale=function(t,n,e,r){return this.p("Greyscale",[n,e],t,r)},t.prototype.H=function(t,n,e,r){return this.p("H",[n,e],t,r)},t.prototype.HueRotation=function(t,n,e,r){return this.p("HueRotation",[n,e],t,r)},t.prototype.Invert=function(t,n,e,r){return this.p("Invert",[n,e],t,r)},t.prototype.Opacity=function(t,n,e,r){return this.p("Opacity",[n,e],t,r)},t.prototype.Rotate=function(t,n,e,r){return this.p("Rotate",[n,e],t,r)},t.prototype.Saturate=function(t,n,e,r){return this.p("Saturate",[n,e],t,r)},t.prototype.ScaleX=function(t,n,e,r){return this.p("ScaleX",[n,e],t,r)},t.prototype.ScaleY=function(t,n,e,r){return this.p("ScaleY",[n,e],t,r)},t.prototype.Sepia=function(t,n,e,r){return this.p("Sepia",[n,e],t,r)},t.prototype.SkewX=function(t,n,e,r){return this.p("SkewX",[n,e],t,r)},t.prototype.SkewY=function(t,n,e,r){return this.p("SkewY",[n,e],t,r)},t.prototype.W=function(t,n,e,r){return this.p("W",[n,e],t,r)},t.prototype.X=function(t,n,e,r){return this.p("X",[n,e],t,r)},t.prototype.Y=function(t,n,e,r){return this.p("Y",[n,e],t,r)},t.prototype.p=function(r,o,i,u){var a=this;return new Promise(function(t){var n=a.t(u,i,t),e=[i].Add(o).Add(n);a.sync[r].apply(a.sync,e)})},t.prototype.t=function(t,n,e){void 0===t&&(t={});var r=t.callback||function(){};return t.callback=function(){r(),e(n)},t},t}();e.d(n,"GSAPSyncAnimator",function(){return r}),e.d(n,"GSAPAsyncAnimator",function(){return o})}])});