webpackJsonp([3],{101:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=t.n(a),i=t(29),r=t.n(i),A=t(106),l=t(189),s=(t.n(l),r()({loader:function(){return t.e(5).then(t.bind(null,191))},loading:function(){return o.a.createElement("p",null)}})),c=[{text:"JavaScript",value:12800},{text:"React Native",value:16900},{text:"React",value:10800},{text:"python",value:100},{text:"Node",value:900},{text:"SQL",value:50},{text:"three.js",value:10},{text:"design",value:40},{text:"webpack",value:27},{text:"HTML",value:309},{text:"CSS/SCSS",value:200},{text:"tone.js",value:10},{text:"npm",value:80},{text:"babel",value:80},{text:"mongo",value:20},{text:"angular",value:5},{text:"Kotlin",value:120},{text:"Java",value:117},{text:"Swift",value:111},{text:"Objective C",value:65},{text:"R",value:25}],m=function(e){return 3*Math.log2(e.value)},d=function(e){return e.value%360},p=function(){return o.a.createElement(A.d,null,o.a.createElement(A.e,null,o.a.createElement(A.b,{className:"typewriter",title:"code",intro:"Web and Mobile Developer."}),o.a.createElement(A.a,null,o.a.createElement("p",null,'I\'m a Fullstack JavaScript developer currently working on hybrid mobile web apps and React Native mobile experiences. You might find me at a React meetup giving a talk on "React Native Brownfield".'),o.a.createElement("p",null,"Technologies I use every day and love:\nJavascript, React, React Native, Redux, Node, Express"),o.a.createElement("p",null,"Technologies I'm learning: Objective C & Swift (iOS), Python (data and machine learning), Blockchain."),o.a.createElement("p",null,"I enjoy solving problems and bringing ideas to life. To me, coding is an art."))),o.a.createElement(s,{data:c,fontSizeMapper:m,rotate:d,width:290,height:320}))};n.default=p},106:function(e,n,t){"use strict";t.d(n,"f",function(){return s}),t.d(n,"c",function(){return c}),t.d(n,"b",function(){return m}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return p}),t.d(n,"a",function(){return u});var a=t(0),o=t.n(a),i=t(4),r=t(107),A=t(110),l=(t.n(A),i.a?"native-content":""),s=function(e){var n=e.text,t=e.className,a=void 0===t?"":t,i=e.style;return o.a.createElement("h1",{style:i,className:"title "+l+" "+a},n)},c=function(e){var n=e.text,t=e.className,a=void 0===t?"":t,i=e.style;return o.a.createElement("h2",{style:i,className:"intro "+l+" "+a},n)},m=function(e){var n=e.title,t=e.intro,a=e.className,r=void 0===a?"":a,A=e.style;return o.a.createElement("div",{className:r,style:A},o.a.createElement(s,{text:n}),o.a.createElement(c,{text:t}),i.a&&o.a.createElement("hr",null))},d=function(e){var n=e.children,t=e.className,a=void 0===t?"":t,i=e.style;return o.a.createElement("section",{style:i,className:"main "+l+" "+a},n)},p=function(e){var n=e.children,t=e.className,a=void 0===t?"":t,i=e.style;return o.a.createElement("div",{style:i,className:"text-main "+a},n)},u=function(e){var n=e.children,t=e.className,a=void 0===t?"":t,i=e.style;return o.a.createElement("div",{style:i,className:"copy "+l+" "+a},n)},C=function(e){var n=e.title,t=e.intro,a=e.imgSrc,A=e.preloadSrc,l=e.containerClass,s=e.copy;return o.a.createElement(d,null,o.a.createElement(p,null,o.a.createElement(m,{title:n,intro:t}),i.a&&a&&o.a.createElement("div",null,o.a.createElement(r.a,{srcPreload:A,srcLoaded:a,containerClass:l}),o.a.createElement("hr",null)),o.a.createElement(u,null,s)),!i.a&&a&&o.a.createElement("div",null,o.a.createElement(r.a,{srcPreload:A,srcLoaded:a,containerClass:l})))};n.g=C},107:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var r=t(0),A=t.n(r),l=t(108),s=(t.n(l),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),c=function(e){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={loaded:!0},t.LazyLoadImage=null,t}return i(n,e),s(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.srcLoaded,t=new Image;t.src=n,t.onload=function(){e.LazyLoadImage.setAttribute("style","background-image: url('"+n+"')"),e.setState({loaded:!0}),e.LazyLoadImage.classList.add("image-fade-in")}}},{key:"render",value:function(){var e=this,n=this.state.loaded,t=this.props,a=t.containerClass,o=t.srcPreload,i=n?"imgage-hide":"image-preload";return A.a.createElement("div",{className:a},A.a.createElement("div",{className:"image-loaded",ref:function(n){return e.LazyLoadImage=n}}),A.a.createElement("div",{className:i,style:{backgroundImage:"url('"+o+"')"}}))}}]),n}(r.Component);n.a=c},108:function(e,n,t){var a=t(109);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(98)(a,o);a.locals&&(e.exports=a.locals)},109:function(e,n,t){n=e.exports=t(97)(!0),n.push([e.i,".image-preload{-webkit-filter:blur(5px);filter:blur(5px)}.image-loaded,.image-preload{position:absolute;top:0;right:0;bottom:0;left:0;background-size:cover}.image-loaded{opacity:0;-webkit-transition:opacity 1s ease;-o-transition:opacity 1s ease;transition:opacity 1s ease}.image-fade-in{opacity:1}.image-hide{opacity:0}.image-container-native-color{background-color:#f6f7f8;position:relative;margin-bottom:.5rem;margin-top:.5rem;width:100%;min-height:250px;overflow:hidden}@media only screen and (min-width:400px){.image-container-native-color{min-height:320px}}@media only screen and (min-width:500px){.image-container-native-color{min-height:400px}}.image-container-nocolor{position:relative;overflow:hidden;width:250px;min-height:535px}","",{version:3,sources:["/Users/annagarcia/Desktop/projects/portfolio/src/components/LazyLoadImage.css"],names:[],mappings:"AAAA,eAOE,yBAA0B,AAClB,gBAAkB,CAC3B,AAED,6BAVE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,qBAAuB,CAgBxB,AAXD,cAOE,UAAW,AACX,mCAAoC,AACpC,8BAA+B,AAC/B,0BAA4B,CAC7B,AAED,eACE,SAAW,CACZ,AAED,YACE,SAAW,CACZ,AAED,8BACE,yBAA0B,AAC1B,kBAAmB,AACnB,oBAAsB,AACtB,iBAAmB,AACnB,WAAY,AACZ,iBAAkB,AAClB,eAAiB,CAClB,AAED,yCACE,8BACE,gBAAkB,CACnB,CACF,AAED,yCACE,8BACE,gBAAkB,CACnB,CACF,AAED,yBACE,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,gBAAkB,CACnB",file:"LazyLoadImage.css",sourcesContent:[".image-preload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n\n.image-loaded {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  opacity: 0;\n  -webkit-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease;\n}\n\n.image-fade-in {\n  opacity: 1;\n}\n\n.image-hide {\n  opacity: 0;\n}\n\n.image-container-native-color {\n  background-color: #f6f7f8;\n  position: relative;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  width: 100%;\n  min-height: 250px;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 400px) {\n  .image-container-native-color {\n    min-height: 320px;\n  }\n}\n\n@media only screen and (min-width: 500px) {\n  .image-container-native-color {\n    min-height: 400px;\n  }\n}\n\n.image-container-nocolor {\n  position: relative;\n  overflow: hidden;\n  width: 250px;\n  min-height: 535px;\n}\n"],sourceRoot:""}])},110:function(e,n,t){var a=t(111);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(98)(a,o);a.locals&&(e.exports=a.locals)},111:function(e,n,t){n=e.exports=t(97)(!0),n.push([e.i,".main{padding:4.5rem 5%;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1}.main.native-content{padding:1em 5% 0;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.text-main{text-align:left;width:100%}.title{margin:0;font-size:5em;font-weight:700;color:#111;margin-bottom:1rem}.title.native-content{font-size:3em}.intro{color:#666;margin:0;font-size:2em;font-weight:100;line-height:1.4em;margin-bottom:1rem}.intro.native-content{color:#333;font-size:1.26em}.copy{font-size:1em;font-weight:300;margin:0;line-height:1.5rem;margin:1rem 0}.copy.native-content{line-height:1.3 em}","",{version:3,sources:["/Users/annagarcia/Desktop/projects/portfolio/src/components/PageTemplate.css"],names:[],mappings:"AAAA,MACE,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACV,QAAU,CACf,AAED,qBACE,iBAAqB,AACrB,0BAA2B,AACvB,sBAAuB,AAC3B,kBAAoB,CACrB,AAED,WACE,gBAAiB,AACjB,UAAY,CACb,AAED,OACE,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,WAAY,AACZ,kBAAoB,CACrB,AAED,sBACE,aAAe,CAChB,AAED,OACE,WAAY,AACZ,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,kBAAmB,AACnB,kBAAoB,CACrB,AAED,sBACE,WAAY,AACZ,gBAAkB,CACnB,AAED,MACE,cAAe,AACf,gBAAiB,AACjB,SAAU,AACV,mBAAoB,AACpB,aAAsB,CACvB,AAED,qBACE,kBAAoB,CACrB",file:"PageTemplate.css",sourcesContent:[".main {\n  padding: 4.5rem 5%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n.main.native-content {\n  padding: 1em 5% 0 5%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.text-main {\n  text-align: left;\n  width: 100%;\n}\n\n.title {\n  margin: 0;\n  font-size: 5em;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 1rem;\n}\n\n.title.native-content {\n  font-size: 3em;\n}\n\n.intro {\n  color: #666;\n  margin: 0;\n  font-size: 2em;\n  font-weight: 100;\n  line-height: 1.4em;\n  margin-bottom: 1rem;\n}\n\n.intro.native-content {\n  color: #333;\n  font-size: 1.26em;\n}\n\n.copy {\n  font-size: 1em;\n  font-weight: 300;\n  margin: 0;\n  line-height: 1.5rem;\n  margin: 1rem 0 1rem 0;\n}\n\n.copy.native-content {\n  line-height: 1.3 em;\n}\n"],sourceRoot:""}])},189:function(e,n,t){var a=t(190);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(98)(a,o);a.locals&&(e.exports=a.locals)},190:function(e,n,t){n=e.exports=t(97)(!0),n.push([e.i,".typewriter{display:inline-block}.typewriter h2{font-family:monospace;overflow:hidden;border-right:.1em solid #f40ef0;white-space:nowrap;letter-spacing:.11em;-webkit-animation:typing 2s steps(50),blink-caret 1s step-end 6;animation:typing 2s steps(50),blink-caret 1s step-end 6}@-webkit-keyframes typing{0%{width:0}to{width:100%}}@keyframes typing{0%{width:0}to{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#f40ef0}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#f40ef0}}","",{version:3,sources:["/Users/annagarcia/Desktop/projects/portfolio/src/components/Code.css"],names:[],mappings:"AAAA,YACE,oBAAsB,CACvB,AACD,eACE,sBAAuB,AACvB,gBAAiB,AACjB,gCAAkC,AAClC,mBAAoB,AACpB,qBAAuB,AACvB,gEAAuE,AAC/D,uDAA+D,CACxE,AAGD,0BACE,GACE,OAAS,CACV,AACD,GACE,UAAY,CACb,CACF,AACD,kBACE,GACE,OAAS,CACV,AACD,GACE,UAAY,CACb,CACF,AAGD,+BACE,MAEE,wBAA0B,CAC3B,AACD,IACE,oBAAsB,CACvB,CACF,AACD,uBACE,MAEE,wBAA0B,CAC3B,AACD,IACE,oBAAsB,CACvB,CACF",file:"Code.css",sourcesContent:[".typewriter {\n  display: inline-block; /* Makes sure cursor ends at end of text  */\n}\n.typewriter h2 {\n  font-family: monospace;\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  border-right: 0.1em solid #f40ef0; /* The typwriter cursor */\n  white-space: nowrap; /* Keeps the content on a single line */\n  letter-spacing: 0.11em; /* Adjust as needed */\n  -webkit-animation: typing 2s steps(50, end), blink-caret 1s step-end 6;\n          animation: typing 2s steps(50, end), blink-caret 1s step-end 6;\n}\n\n/* The typing effect */\n@-webkit-keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n/* The typewriter cursor effect */\n@-webkit-keyframes blink-caret {\n  from,\n  to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: #f40ef0;\n  }\n}\n@keyframes blink-caret {\n  from,\n  to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: #f40ef0;\n  }\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=3.c2d7d78b.chunk.js.map