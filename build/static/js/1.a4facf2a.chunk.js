webpackJsonp([1],{103:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),A=e.n(a),i=e(106),o=e(326),r=(e.n(o),function(n){var t=n.location;return A.a.createElement(i.g,{title:"not found",intro:"Oops! No match for "+t.pathname,copy:A.a.createElement("div",{className:"catContainer"},A.a.createElement("div",{className:"catHead catColor"},A.a.createElement("div",{className:"catLeftEye catEye"},A.a.createElement("div",{className:"leftEyelid eyelid catColor"}),A.a.createElement("div",{className:"pupil"})),A.a.createElement("div",{className:"catRightEye catEye"},A.a.createElement("div",{className:"rightEyelid eyelid catColor"}),A.a.createElement("div",{className:"pupil"}))),A.a.createElement("div",{className:"catLeftEar catEar catColor"},A.a.createElement("div",{className:"catLeftInsideEar catInsideEar"})),A.a.createElement("div",{className:"catRightEar catEar catColor"},A.a.createElement("div",{className:"catRightInsideEar catInsideEar"})),A.a.createElement("div",{className:"catHair catColor"}),A.a.createElement("div",{className:"catBody catColor"},A.a.createElement("div",{className:"catFoot leftFoot catColor"}),A.a.createElement("div",{className:"catFoot rightFoot catColor"})),A.a.createElement("div",{className:"catTail"},A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"}),A.a.createElement("span",{className:"catColor"})))})});t.default=r},106:function(n,t,e){"use strict";e.d(t,"f",function(){return C}),e.d(t,"c",function(){return l}),e.d(t,"b",function(){return m}),e.d(t,"d",function(){return p}),e.d(t,"e",function(){return c}),e.d(t,"a",function(){return B});var a=e(0),A=e.n(a),i=e(4),o=e(107),r=e(110),s=(e.n(r),i.a?"native-content":""),C=function(n){var t=n.text,e=n.className,a=void 0===e?"":e,i=n.style;return A.a.createElement("h1",{style:i,className:"title "+s+" "+a},t)},l=function(n){var t=n.text,e=n.className,a=void 0===e?"":e,i=n.style;return A.a.createElement("h2",{style:i,className:"intro "+s+" "+a},t)},m=function(n){var t=n.title,e=n.intro,a=n.className,o=void 0===a?"":a,r=n.style;return A.a.createElement("div",{className:o,style:r},A.a.createElement(C,{text:t}),A.a.createElement(l,{text:e}),i.a&&A.a.createElement("hr",null))},p=function(n){var t=n.children,e=n.className,a=void 0===e?"":e,i=n.style;return A.a.createElement("section",{style:i,className:"main "+s+" "+a},t)},c=function(n){var t=n.children,e=n.className,a=void 0===e?"":e,i=n.style;return A.a.createElement("div",{style:i,className:"text-main "+a},t)},B=function(n){var t=n.children,e=n.className,a=void 0===e?"":e,i=n.style;return A.a.createElement("div",{style:i,className:"copy "+s+" "+a},t)},d=function(n){var t=n.title,e=n.intro,a=n.imgSrc,r=n.preloadSrc,s=n.containerClass,C=n.copy;return A.a.createElement(p,null,A.a.createElement(c,null,A.a.createElement(m,{title:t,intro:e}),i.a&&a&&A.a.createElement("div",null,A.a.createElement(o.a,{srcPreload:r,srcLoaded:a,containerClass:s}),A.a.createElement("hr",null)),A.a.createElement(B,null,C)),!i.a&&a&&A.a.createElement("div",null,A.a.createElement(o.a,{srcPreload:r,srcLoaded:a,containerClass:s})))};t.g=d},107:function(n,t,e){"use strict";function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function A(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function i(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var o=e(0),r=e.n(o),s=e(108),C=(e.n(s),function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}()),l=function(n){function t(n){a(this,t);var e=A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={loaded:!0},e.LazyLoadImage=null,e}return i(t,n),C(t,[{key:"componentDidMount",value:function(){var n=this,t=this.props.srcLoaded,e=new Image;e.src=t,e.onload=function(){n.LazyLoadImage.setAttribute("style","background-image: url('"+t+"')"),n.setState({loaded:!0}),n.LazyLoadImage.classList.add("image-fade-in")}}},{key:"render",value:function(){var n=this,t=this.state.loaded,e=this.props,a=e.containerClass,A=e.srcPreload,i=t?"imgage-hide":"image-preload";return r.a.createElement("div",{className:a},r.a.createElement("div",{className:"image-loaded",ref:function(t){return n.LazyLoadImage=t}}),r.a.createElement("div",{className:i,style:{backgroundImage:"url('"+A+"')"}}))}}]),t}(o.Component);t.a=l},108:function(n,t,e){var a=e(109);"string"===typeof a&&(a=[[n.i,a,""]]);var A={hmr:!1};A.transform=void 0;e(98)(a,A);a.locals&&(n.exports=a.locals)},109:function(n,t,e){t=n.exports=e(97)(!0),t.push([n.i,".image-preload{-webkit-filter:blur(5px);filter:blur(5px)}.image-loaded,.image-preload{position:absolute;top:0;right:0;bottom:0;left:0;background-size:cover}.image-loaded{opacity:0;-webkit-transition:opacity 1s ease;-o-transition:opacity 1s ease;transition:opacity 1s ease}.image-fade-in{opacity:1}.image-hide{opacity:0}.image-container-native-color{background-color:#f6f7f8;position:relative;margin-bottom:.5rem;margin-top:.5rem;width:100%;min-height:250px;overflow:hidden}@media only screen and (min-width:400px){.image-container-native-color{min-height:320px}}@media only screen and (min-width:500px){.image-container-native-color{min-height:400px}}.image-container-nocolor{position:relative;overflow:hidden;width:250px;min-height:535px}","",{version:3,sources:["/home/circleci/project/src/components/LazyLoadImage.css"],names:[],mappings:"AAAA,eAOE,yBAA0B,AAClB,gBAAkB,CAC3B,AAED,6BAVE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,qBAAuB,CAgBxB,AAXD,cAOE,UAAW,AACX,mCAAoC,AACpC,8BAA+B,AAC/B,0BAA4B,CAC7B,AAED,eACE,SAAW,CACZ,AAED,YACE,SAAW,CACZ,AAED,8BACE,yBAA0B,AAC1B,kBAAmB,AACnB,oBAAsB,AACtB,iBAAmB,AACnB,WAAY,AACZ,iBAAkB,AAClB,eAAiB,CAClB,AAED,yCACE,8BACE,gBAAkB,CACnB,CACF,AAED,yCACE,8BACE,gBAAkB,CACnB,CACF,AAED,yBACE,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,gBAAkB,CACnB",file:"LazyLoadImage.css",sourcesContent:[".image-preload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n\n.image-loaded {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  opacity: 0;\n  -webkit-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease;\n}\n\n.image-fade-in {\n  opacity: 1;\n}\n\n.image-hide {\n  opacity: 0;\n}\n\n.image-container-native-color {\n  background-color: #f6f7f8;\n  position: relative;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  width: 100%;\n  min-height: 250px;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 400px) {\n  .image-container-native-color {\n    min-height: 320px;\n  }\n}\n\n@media only screen and (min-width: 500px) {\n  .image-container-native-color {\n    min-height: 400px;\n  }\n}\n\n.image-container-nocolor {\n  position: relative;\n  overflow: hidden;\n  width: 250px;\n  min-height: 535px;\n}\n"],sourceRoot:""}])},110:function(n,t,e){var a=e(111);"string"===typeof a&&(a=[[n.i,a,""]]);var A={hmr:!1};A.transform=void 0;e(98)(a,A);a.locals&&(n.exports=a.locals)},111:function(n,t,e){t=n.exports=e(97)(!0),t.push([n.i,".main{padding:4.5rem 5%;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1}.main.native-content{padding:1em 5% 0;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.text-main{text-align:left;width:100%}.title{margin:0;font-size:5em;font-weight:700;color:#111;margin-bottom:1rem}.title.native-content{font-size:3em}.intro{color:#666;margin:0;font-size:2em;font-weight:100;line-height:1.4em;margin-bottom:1rem}.intro.native-content{color:#333;font-size:1.26em}.copy{font-size:1em;font-weight:300;margin:0;line-height:1.5rem;margin:1rem 0}.copy.native-content{line-height:1.3 em}","",{version:3,sources:["/home/circleci/project/src/components/PageTemplate.css"],names:[],mappings:"AAAA,MACE,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACV,QAAU,CACf,AAED,qBACE,iBAAqB,AACrB,0BAA2B,AACvB,sBAAuB,AAC3B,kBAAoB,CACrB,AAED,WACE,gBAAiB,AACjB,UAAY,CACb,AAED,OACE,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,WAAY,AACZ,kBAAoB,CACrB,AAED,sBACE,aAAe,CAChB,AAED,OACE,WAAY,AACZ,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,kBAAmB,AACnB,kBAAoB,CACrB,AAED,sBACE,WAAY,AACZ,gBAAkB,CACnB,AAED,MACE,cAAe,AACf,gBAAiB,AACjB,SAAU,AACV,mBAAoB,AACpB,aAAsB,CACvB,AAED,qBACE,kBAAoB,CACrB",file:"PageTemplate.css",sourcesContent:[".main {\n  padding: 4.5rem 5%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n.main.native-content {\n  padding: 1em 5% 0 5%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.text-main {\n  text-align: left;\n  width: 100%;\n}\n\n.title {\n  margin: 0;\n  font-size: 5em;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 1rem;\n}\n\n.title.native-content {\n  font-size: 3em;\n}\n\n.intro {\n  color: #666;\n  margin: 0;\n  font-size: 2em;\n  font-weight: 100;\n  line-height: 1.4em;\n  margin-bottom: 1rem;\n}\n\n.intro.native-content {\n  color: #333;\n  font-size: 1.26em;\n}\n\n.copy {\n  font-size: 1em;\n  font-weight: 300;\n  margin: 0;\n  line-height: 1.5rem;\n  margin: 1rem 0 1rem 0;\n}\n\n.copy.native-content {\n  line-height: 1.3 em;\n}\n"],sourceRoot:""}])},326:function(n,t,e){var a=e(327);"string"===typeof a&&(a=[[n.i,a,""]]);var A={hmr:!1};A.transform=void 0;e(98)(a,A);a.locals&&(n.exports=a.locals)},327:function(n,t,e){t=n.exports=e(97)(!0),t.push([n.i,'.titleText{font-family:Open Sans,sans-serif;font-weight:900;font-size:5em;position:absolute;top:25%;left:3%;color:#d4d4d4;text-shadow:-2px 1px 5px #fafafa}.catColor{background-color:#242424}.catContainer{position:relative;top:-150px;left:-680px}@media only screen and (min-width:960px){.catContainer{position:relative;top:-350px;left:-80px}}.catHead{width:170px;height:130px;border-radius:50%;-webkit-border-radius:55% 55% 50% 50%;margin-left:718px;margin-top:200px;position:absolute;z-index:2;-webkit-box-shadow:0 4px 8px -6px #111;box-shadow:0 4px 8px -6px #111}.catHair{width:70px;height:70px;position:relative;border:none;position:absolute;margin-top:208px;margin-left:772px}.catHair:before{width:80px;-webkit-transform:rotate(26deg);-ms-transform:rotate(26deg);transform:rotate(26deg)}.catHair:after,.catHair:before{height:70px;position:absolute;content:"";top:0;left:0;border:none;background:inherit}.catHair:after{width:72px;-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.catEar{width:80px;height:100px;border:none;border-radius:80% 0 55% 50%/55% 0 80% 50%;position:absolute;z-index:1}.catLeftEar{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);margin-left:717px;margin-top:173px}.catRightEar{-webkit-transform:rotate(-20deg);-ms-transform:rotate(20deg);transform:rotate(20deg);margin-left:820px;margin-top:175px}.catInsideEar{width:60px;height:100px;border:1px;border-radius:80% 0 55% 50%/55% 0 80% 50%;background:#c88;z-index:1}.catLeftInsideEar{margin-left:12px;margin-top:6px}.catRightInsideEar{margin-left:10px;margin-top:6px}.catEye{width:62px;height:50px;border-radius:60% 60% 60% 60%;background-color:#e6e6e6;z-index:3;position:absolute;margin-top:32px}.catLeftEye{margin-left:17px}.catRightEye{margin-left:93px}.eyelid{height:60%;width:100%;position:absolute;z-index:10;margin-top:-5%;border-radius:100% 100% 10% 10%;-webkit-animation:blink 6s infinite ease-in-out;animation:blink 6s infinite ease-in-out;-webkit-animation-delay:7s;animation-delay:7s}@-webkit-keyframes blink{1%{height:60%}2%{height:80%}3%{height:100%}4%{height:80%}5%{height:60%}to{height:60%}}@keyframes blink{1%{height:60%}2%{height:80%}3%{height:100%}4%{height:80%}5%{height:60%}to{height:60%}}.pupil{width:20px;height:35px;background-color:#222;-webkit-border-raidus:50%;border-radius:50%;margin-left:20px;z-index:5;margin-top:3px}.catBody{width:185px;height:110px;border:none;border-radius:50%/80% 80% 50% 50%;position:absolute;margin-left:712px;margin-top:276px;z-index:1}.catFoot{height:28%;width:30%;position:absolute;z-index:10;margin-top:43%;border-radius:100% 100% 70% 70%;-webkit-box-shadow:-1px 2px 20px -5px rgba(0,0,0,.75);box-shadow:-2px -4px 10px -6px #000}.leftFoot{margin-left:8%;-webkit-animation:step 9s infinite ease-in-out;animation:step 9s infinite ease-in-out;-webkit-animation-delay:7.4s;animation-delay:7.4s}.rightFoot{margin-left:60%;-webkit-animation:step 9s infinite ease-in-out;animation:step 9s infinite ease-in-out;-webkit-animation-delay:8s;animation-delay:8s}@-webkit-keyframes step{1%{-webkit-transform:translateY(-1px);transform:translateY(-1px)}2%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}3%{-webkit-transform:translateY(-3px);transform:translateY(-3px)}4%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}5%{-webkit-transform:translateY(-1px);transform:translateY(-1px)}6%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes step{1%{-webkit-transform:translateY(-1px);transform:translateY(-1px)}2%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}3%{-webkit-transform:translateY(-3px);transform:translateY(-3px)}4%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}5%{-webkit-transform:translateY(-1px);transform:translateY(-1px)}6%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.catTail{margin-left:870px;margin-top:352px;translate:rotate(-10deg)}.catTail,span{position:absolute}span{width:30px;height:30px;border-radius:50px;-webkit-animation:tailWave 3s infinite ease-in-out;animation:tailWave 3s infinite ease-in-out}span:nth-child(2){left:5px;-webkit-animation-delay:.2s;animation-delay:.2s}span:nth-child(3){left:10px;-webkit-animation-delay:.4s;animation-delay:.4s}span:nth-child(4){left:15px;-webkit-animation-delay:.6s;animation-delay:.6s}span:nth-child(5){left:20px;-webkit-animation-delay:.8s;animation-delay:.8s}span:nth-child(6){left:25px;-webkit-animation-delay:1s;animation-delay:1s}span:nth-child(7){left:30px;-webkit-animation-delay:1.2s;animation-delay:1.2s}span:nth-child(8){left:35px;-webkit-animation-delay:1.4s;animation-delay:1.4s}span:nth-child(9){left:40px;-webkit-animation-delay:1.6s;animation-delay:1.6s}span:nth-child(10){left:45px;-webkit-animation-delay:1.8s;animation-delay:1.8s}span:nth-child(11){left:50px;-webkit-animation-delay:2s;animation-delay:2s}span:nth-child(12){left:55px;-webkit-animation-delay:2.2s;animation-delay:2.2s}span:nth-child(13){left:60px;-webkit-animation-delay:2.4s;animation-delay:2.4s}span:nth-child(14){left:65px;-webkit-animation-delay:2.6s;animation-delay:2.6s}span:nth-child(15){left:70px;-webkit-animation-delay:2.8s;animation-delay:2.8s}@-webkit-keyframes tailWave{0%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-6px);transform:translateY(-6px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes tailWave{0%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-6px);transform:translateY(-6px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}',"",{version:3,sources:["/home/circleci/project/src/components/NoMatch.css"],names:[],mappings:"AAEA,WACE,iCAAqC,AACrC,gBAAiB,AACjB,cAAe,AACf,kBAAmB,AACnB,QAAS,AACT,QAAS,AACT,cAAe,AACf,gCAAkC,CACnC,AAED,UAEE,wBAA0B,CAC3B,AAED,cACE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AAED,yCACE,cACE,kBAAmB,AACnB,WAAY,AACZ,UAAY,CACb,CACF,AAED,SACE,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,sCAAuC,AACvC,kBAAmB,AACnB,iBAAkB,AAClB,kBAAmB,AACnB,UAAW,AACX,uCAA0C,AAClC,8BAAkC,CAC3C,AAED,SACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,iBAAmB,CACpB,AAED,gBACE,WAAY,AAQZ,gCAAkC,AAClC,4BAA6B,AACzB,uBAA0B,CAC/B,AAED,+BAZE,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,MAAO,AACP,OAAQ,AACR,YAAa,AACb,kBAAoB,CAkBrB,AAZD,eACE,WAAY,AAQZ,gCAAkC,AAClC,4BAA6B,AACzB,uBAA0B,CAC/B,AAED,QACE,WAAY,AACZ,aAAc,AACd,YAAa,AACb,0CAA6C,AAC7C,kBAAmB,AACnB,SAAW,CACZ,AAED,YACE,iCAAmC,AACnC,6BAA8B,AAC1B,yBAA2B,AAC/B,kBAAmB,AACnB,gBAAkB,CACnB,AAED,aACE,iCAAmC,AACnC,4BAA6B,AACzB,wBAA0B,AAC9B,kBAAmB,AACnB,gBAAkB,CACnB,AAED,cACE,WAAY,AACZ,aAAc,AACd,WAAY,AACZ,0CAA6C,AAC7C,gBAAoB,AACpB,SAAW,CACZ,AAED,kBACE,iBAAkB,AAClB,cAAgB,CACjB,AAED,mBACE,iBAAkB,AAClB,cAAgB,CACjB,AAED,QACE,WAAY,AACZ,YAAa,AACb,8BAA+B,AAC/B,yBAA0B,AAC1B,UAAW,AACX,kBAAmB,AACnB,eAAiB,CAClB,AAED,YACE,gBAAkB,CACnB,AAED,aACE,gBAAkB,CACnB,AAED,QACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,gCAAiC,AACjC,gDAAiD,AACzC,wCAAyC,AACjD,2BAA4B,AACpB,kBAAoB,CAC7B,AAED,yBACE,GACE,UAAY,CACb,AACD,GACE,UAAY,CACb,AACD,GACE,WAAa,CACd,AACD,GACE,UAAY,CACb,AACD,GACE,UAAY,CACb,AACD,GACE,UAAY,CACb,CACF,AAED,iBACE,GACE,UAAY,CACb,AACD,GACE,UAAY,CACb,AACD,GACE,WAAa,CACd,AACD,GACE,UAAY,CACb,AACD,GACE,UAAY,CACb,AACD,GACE,UAAY,CACb,CACF,AAED,OACE,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,0BAA2B,AAC3B,kBAAmB,AACnB,iBAAkB,AAClB,UAAW,AACX,cAAgB,CACjB,AAED,SACE,YAAa,AACb,aAAc,AACd,YAAa,AACb,kCAAqC,AACrC,kBAAmB,AACnB,kBAAmB,AACnB,iBAAkB,AAClB,SAAW,CACZ,AAED,SACE,WAAY,AACZ,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,gCAAiC,AACjC,sDAA2D,AAC3D,mCAAiD,CAClD,AAED,UACE,eAAgB,AAChB,+CAAgD,AACxC,uCAAwC,AAChD,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,WACE,gBAAiB,AACjB,+CAAgD,AACxC,uCAAwC,AAChD,2BAA4B,AACpB,kBAAoB,CAC7B,AAED,wBACE,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,CACF,AAED,gBACE,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,CACF,AAED,SAEE,kBAAmB,AACnB,iBAAkB,AAClB,wBAA0B,CAC3B,AAID,cARE,iBAAmB,CAepB,AAPD,KAEE,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,mDAAoD,AAC5C,0CAA4C,CACrD,AAED,kBACE,SAAU,AACV,4BAA8B,AACtB,mBAAsB,CAC/B,AAED,kBACE,UAAW,AACX,4BAA8B,AACtB,mBAAsB,CAC/B,AAED,kBACE,UAAW,AACX,4BAA8B,AACtB,mBAAsB,CAC/B,AAED,kBACE,UAAW,AACX,4BAA8B,AACtB,mBAAsB,CAC/B,AAED,kBACE,UAAW,AACX,2BAA4B,AACpB,kBAAoB,CAC7B,AAED,kBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,kBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,kBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,mBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,mBACE,UAAW,AACX,2BAA4B,AACpB,kBAAoB,CAC7B,AAED,mBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,mBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,mBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,mBACE,UAAW,AACX,6BAA8B,AACtB,oBAAsB,CAC/B,AAED,4BACE,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,IACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,CACF,AAED,oBACE,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,IACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,CACF",file:"NoMatch.css",sourcesContent:["/* shout out to Anchor Ideas https://codepen.io/AnchorIdeas/pen/eRyeEE */\n\n.titleText {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 900;\n  font-size: 5em;\n  position: absolute;\n  top: 25%;\n  left: 3%;\n  color: #d4d4d4;\n  text-shadow: -2px 1px 5px #fafafa;\n}\n\n.catColor {\n  /*This universally changes the colour of the cat. For multi-coloured cats, delete it and apply background-color to components individually*/\n  background-color: #242424;\n}\n\n.catContainer {\n  position: relative;\n  top: -150px;\n  left: -680px;\n}\n\n@media only screen and (min-width: 960px) {\n  .catContainer {\n    position: relative;\n    top: -350px;\n    left: -80px;\n  }\n}\n\n.catHead {\n  width: 170px;\n  height: 130px;\n  border-radius: 50%;\n  -webkit-border-radius: 55% 55% 50% 50%;\n  margin-left: 718px;\n  margin-top: 200px;\n  position: absolute;\n  z-index: 2;\n  -webkit-box-shadow: 0px 4px 8px -6px #111;\n          box-shadow: 0px 4px 8px -6px #111;\n}\n\n.catHair {\n  width: 70px;\n  height: 70px;\n  position: relative;\n  border: none;\n  position: absolute;\n  margin-top: 208px;\n  margin-left: 772px;\n}\n\n.catHair::before {\n  width: 80px;\n  height: 70px;\n  position: absolute;\n  content: '';\n  top: 0;\n  left: 0;\n  border: none;\n  background: inherit;\n  -webkit-transform: rotateZ(26deg);\n  -ms-transform: rotate(26deg);\n      transform: rotateZ(26deg);\n}\n\n.catHair::after {\n  width: 72px;\n  height: 70px;\n  position: absolute;\n  content: '';\n  top: 0;\n  left: 0;\n  border: none;\n  background: inherit;\n  -webkit-transform: rotateZ(60deg);\n  -ms-transform: rotate(60deg);\n      transform: rotateZ(60deg);\n}\n\n.catEar {\n  width: 80px;\n  height: 100px;\n  border: none;\n  border-radius: 80% 0 55% 50% / 55% 0 80% 50%;\n  position: absolute;\n  z-index: 1;\n}\n\n.catLeftEar {\n  -webkit-transform: rotateZ(-45deg);\n  -ms-transform: rotate(-45deg);\n      transform: rotateZ(-45deg);\n  margin-left: 717px;\n  margin-top: 173px;\n}\n\n.catRightEar {\n  -webkit-transform: rotateZ(-20deg);\n  -ms-transform: rotate(20deg);\n      transform: rotateZ(20deg);\n  margin-left: 820px;\n  margin-top: 175px;\n}\n\n.catInsideEar {\n  width: 60px;\n  height: 100px;\n  border: 1px;\n  border-radius: 80% 0 55% 50% / 55% 0 80% 50%;\n  background: #cc8888;\n  z-index: 1;\n}\n\n.catLeftInsideEar {\n  margin-left: 12px;\n  margin-top: 6px;\n}\n\n.catRightInsideEar {\n  margin-left: 10px;\n  margin-top: 6px;\n}\n\n.catEye {\n  width: 62px;\n  height: 50px;\n  border-radius: 60% 60% 60% 60%;\n  background-color: #e6e6e6;\n  z-index: 3;\n  position: absolute;\n  margin-top: 32px;\n}\n\n.catLeftEye {\n  margin-left: 17px;\n}\n\n.catRightEye {\n  margin-left: 93px;\n}\n\n.eyelid {\n  height: 60%;\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n  margin-top: -5%;\n  border-radius: 100% 100% 10% 10%;\n  -webkit-animation: blink 6s infinite ease-in-out;\n          animation: blink 6s infinite ease-in-out;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n\n@-webkit-keyframes blink {\n  1% {\n    height: 60%;\n  }\n  2% {\n    height: 80%;\n  }\n  3% {\n    height: 100%;\n  }\n  4% {\n    height: 80%;\n  }\n  5% {\n    height: 60%;\n  }\n  100% {\n    height: 60%;\n  }\n}\n\n@keyframes blink {\n  1% {\n    height: 60%;\n  }\n  2% {\n    height: 80%;\n  }\n  3% {\n    height: 100%;\n  }\n  4% {\n    height: 80%;\n  }\n  5% {\n    height: 60%;\n  }\n  100% {\n    height: 60%;\n  }\n}\n\n.pupil {\n  width: 20px;\n  height: 35px;\n  background-color: #222;\n  -webkit-border-raidus: 50%;\n  border-radius: 50%;\n  margin-left: 20px;\n  z-index: 5;\n  margin-top: 3px;\n}\n\n.catBody {\n  width: 185px;\n  height: 110px;\n  border: none;\n  border-radius: 50% / 80% 80% 50% 50%;\n  position: absolute;\n  margin-left: 712px;\n  margin-top: 276px;\n  z-index: 1;\n}\n\n.catFoot {\n  height: 28%;\n  width: 30%;\n  position: absolute;\n  z-index: 10;\n  margin-top: 43%;\n  border-radius: 100% 100% 70% 70%;\n  -webkit-box-shadow: -1px 2px 20px -5px rgba(0, 0, 0, 0.75);\n  box-shadow: -2px -4px 10px -6px rgba(0, 0, 0, 1);\n}\n\n.leftFoot {\n  margin-left: 8%;\n  -webkit-animation: step 9s infinite ease-in-out;\n          animation: step 9s infinite ease-in-out;\n  -webkit-animation-delay: 7.4s;\n          animation-delay: 7.4s;\n}\n\n.rightFoot {\n  margin-left: 60%;\n  -webkit-animation: step 9s infinite ease-in-out;\n          animation: step 9s infinite ease-in-out;\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s;\n}\n\n@-webkit-keyframes step {\n  1% {\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n  }\n  2% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n  }\n  3% {\n    -webkit-transform: translateY(-3px);\n            transform: translateY(-3px);\n  }\n  4% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n  }\n  5% {\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n  }\n  6% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes step {\n  1% {\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n  }\n  2% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n  }\n  3% {\n    -webkit-transform: translateY(-3px);\n            transform: translateY(-3px);\n  }\n  4% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n  }\n  5% {\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n  }\n  6% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n.catTail {\n  position: absolute;\n  margin-left: 870px;\n  margin-top: 352px;\n  translate: rotate(-10deg);\n}\n\n/*Each span creates a circle that extends the tail and animates up and down individually, add more and style with left: +5px and a 0.2s additional delay from the previous to create a longer tail.*/\n\nspan {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  -webkit-animation: tailWave 3s infinite ease-in-out;\n          animation: tailWave 3s infinite ease-in-out;\n}\n\nspan:nth-child(2) {\n  left: 5px;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n\nspan:nth-child(3) {\n  left: 10px;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\nspan:nth-child(4) {\n  left: 15px;\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\nspan:nth-child(5) {\n  left: 20px;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\nspan:nth-child(6) {\n  left: 25px;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\nspan:nth-child(7) {\n  left: 30px;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n\nspan:nth-child(8) {\n  left: 35px;\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n\nspan:nth-child(9) {\n  left: 40px;\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n}\n\nspan:nth-child(10) {\n  left: 45px;\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n\nspan:nth-child(11) {\n  left: 50px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\nspan:nth-child(12) {\n  left: 55px;\n  -webkit-animation-delay: 2.2s;\n          animation-delay: 2.2s;\n}\n\nspan:nth-child(13) {\n  left: 60px;\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n\nspan:nth-child(14) {\n  left: 65px;\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n\nspan:nth-child(15) {\n  left: 70px;\n  -webkit-animation-delay: 2.8s;\n          animation-delay: 2.8s;\n}\n\n@-webkit-keyframes tailWave {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  50% {\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes tailWave {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  50% {\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=1.a4facf2a.chunk.js.map