webpackJsonp([0],{106:function(A,g,C){"use strict";C.d(g,"f",function(){return o}),C.d(g,"c",function(){return r}),C.d(g,"b",function(){return l}),C.d(g,"d",function(){return c}),C.d(g,"e",function(){return m}),C.d(g,"a",function(){return B});var I=C(0),e=C.n(I),n=C(4),t=C(107),a=C(110),i=(C.n(a),n.a?"native-content":""),o=function(A){var g=A.text,C=A.className,I=void 0===C?"":C,n=A.style;return e.a.createElement("h1",{style:n,className:"title "+i+" "+I},g)},r=function(A){var g=A.text,C=A.className,I=void 0===C?"":C,n=A.style;return e.a.createElement("h2",{style:n,className:"intro "+i+" "+I},g)},l=function(A){var g=A.title,C=A.intro,I=A.className,t=void 0===I?"":I,a=A.style;return e.a.createElement("div",{className:t,style:a},e.a.createElement(o,{text:g}),e.a.createElement(r,{text:C}),n.a&&e.a.createElement("hr",null))},c=function(A){var g=A.children,C=A.className,I=void 0===C?"":C,n=A.style;return e.a.createElement("section",{style:n,className:"main "+i+" "+I},g)},m=function(A){var g=A.children,C=A.className,I=void 0===C?"":C,n=A.style;return e.a.createElement("div",{style:n,className:"text-main "+I},g)},B=function(A){var g=A.children,C=A.className,I=void 0===C?"":C,n=A.style;return e.a.createElement("div",{style:n,className:"copy "+i+" "+I},g)},s=function(A){var g=A.title,C=A.intro,I=A.imgSrc,a=A.preloadSrc,i=A.containerClass,o=A.copy;return e.a.createElement(c,null,e.a.createElement(m,null,e.a.createElement(l,{title:g,intro:C}),n.a&&I&&e.a.createElement("div",null,e.a.createElement(t.a,{srcPreload:a,srcLoaded:I,containerClass:i}),e.a.createElement("hr",null)),e.a.createElement(B,null,o)),!n.a&&I&&e.a.createElement("div",null,e.a.createElement(t.a,{srcPreload:a,srcLoaded:I,containerClass:i})))};g.g=s},107:function(A,g,C){"use strict";function I(A,g){if(!(A instanceof g))throw new TypeError("Cannot call a class as a function")}function e(A,g){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||"object"!==typeof g&&"function"!==typeof g?A:g}function n(A,g){if("function"!==typeof g&&null!==g)throw new TypeError("Super expression must either be null or a function, not "+typeof g);A.prototype=Object.create(g&&g.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(A,g):A.__proto__=g)}var t=C(0),a=C.n(t),i=C(108),o=(C.n(i),function(){function A(A,g){for(var C=0;C<g.length;C++){var I=g[C];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(A,I.key,I)}}return function(g,C,I){return C&&A(g.prototype,C),I&&A(g,I),g}}()),r=function(A){function g(A){I(this,g);var C=e(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,A));return C.state={loaded:!0},C.LazyLoadImage=null,C}return n(g,A),o(g,[{key:"componentDidMount",value:function(){var A=this,g=this.props.srcLoaded,C=new Image;C.src=g,C.onload=function(){A.LazyLoadImage.setAttribute("style","background-image: url('"+g+"')"),A.setState({loaded:!0}),A.LazyLoadImage.classList.add("image-fade-in")}}},{key:"render",value:function(){var A=this,g=this.state.loaded,C=this.props,I=C.containerClass,e=C.srcPreload,n=g?"imgage-hide":"image-preload";return a.a.createElement("div",{className:I},a.a.createElement("div",{className:"image-loaded",ref:function(g){return A.LazyLoadImage=g}}),a.a.createElement("div",{className:n,style:{backgroundImage:"url('"+e+"')"}}))}}]),g}(t.Component);g.a=r},108:function(A,g,C){var I=C(109);"string"===typeof I&&(I=[[A.i,I,""]]);var e={hmr:!1};e.transform=void 0;C(98)(I,e);I.locals&&(A.exports=I.locals)},109:function(A,g,C){g=A.exports=C(97)(!0),g.push([A.i,".image-preload{-webkit-filter:blur(5px);filter:blur(5px)}.image-loaded,.image-preload{position:absolute;top:0;right:0;bottom:0;left:0;background-size:cover}.image-loaded{opacity:0;-webkit-transition:opacity 1s ease;-o-transition:opacity 1s ease;transition:opacity 1s ease}.image-fade-in{opacity:1}.image-hide{opacity:0}.image-container-native-color{background-color:#f6f7f8;position:relative;margin-bottom:.5rem;margin-top:.5rem;width:100%;min-height:250px;overflow:hidden}@media only screen and (min-width:400px){.image-container-native-color{min-height:320px}}@media only screen and (min-width:500px){.image-container-native-color{min-height:400px}}.image-container-nocolor{position:relative;overflow:hidden;width:250px;min-height:535px}","",{version:3,sources:["/Users/annagarcia/Desktop/projects/portfolio/src/components/LazyLoadImage.css"],names:[],mappings:"AAAA,eAOE,yBAA0B,AAClB,gBAAkB,CAC3B,AAED,6BAVE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,qBAAuB,CAgBxB,AAXD,cAOE,UAAW,AACX,mCAAoC,AACpC,8BAA+B,AAC/B,0BAA4B,CAC7B,AAED,eACE,SAAW,CACZ,AAED,YACE,SAAW,CACZ,AAED,8BACE,yBAA0B,AAC1B,kBAAmB,AACnB,oBAAsB,AACtB,iBAAmB,AACnB,WAAY,AACZ,iBAAkB,AAClB,eAAiB,CAClB,AAED,yCACE,8BACE,gBAAkB,CACnB,CACF,AAED,yCACE,8BACE,gBAAkB,CACnB,CACF,AAED,yBACE,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,gBAAkB,CACnB",file:"LazyLoadImage.css",sourcesContent:[".image-preload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n\n.image-loaded {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  opacity: 0;\n  -webkit-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease;\n}\n\n.image-fade-in {\n  opacity: 1;\n}\n\n.image-hide {\n  opacity: 0;\n}\n\n.image-container-native-color {\n  background-color: #f6f7f8;\n  position: relative;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  width: 100%;\n  min-height: 250px;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 400px) {\n  .image-container-native-color {\n    min-height: 320px;\n  }\n}\n\n@media only screen and (min-width: 500px) {\n  .image-container-native-color {\n    min-height: 400px;\n  }\n}\n\n.image-container-nocolor {\n  position: relative;\n  overflow: hidden;\n  width: 250px;\n  min-height: 535px;\n}\n"],sourceRoot:""}])},110:function(A,g,C){var I=C(111);"string"===typeof I&&(I=[[A.i,I,""]]);var e={hmr:!1};e.transform=void 0;C(98)(I,e);I.locals&&(A.exports=I.locals)},111:function(A,g,C){g=A.exports=C(97)(!0),g.push([A.i,".main{padding:4.5rem 5%;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1}.main.native-content{padding:1em 5% 0;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.text-main{text-align:left;width:100%}.title{margin:0;font-size:5em;font-weight:700;color:#111;margin-bottom:1rem}.title.native-content{font-size:3em}.intro{color:#666;margin:0;font-size:2em;font-weight:100;line-height:1.4em;margin-bottom:1rem}.intro.native-content{color:#333;font-size:1.26em}.copy{font-size:1em;font-weight:300;margin:0;line-height:1.5rem;margin:1rem 0}.copy.native-content{line-height:1.3 em}","",{version:3,sources:["/Users/annagarcia/Desktop/projects/portfolio/src/components/PageTemplate.css"],names:[],mappings:"AAAA,MACE,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACV,QAAU,CACf,AAED,qBACE,iBAAqB,AACrB,0BAA2B,AACvB,sBAAuB,AAC3B,kBAAoB,CACrB,AAED,WACE,gBAAiB,AACjB,UAAY,CACb,AAED,OACE,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,WAAY,AACZ,kBAAoB,CACrB,AAED,sBACE,aAAe,CAChB,AAED,OACE,WAAY,AACZ,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,kBAAmB,AACnB,kBAAoB,CACrB,AAED,sBACE,WAAY,AACZ,gBAAkB,CACnB,AAED,MACE,cAAe,AACf,gBAAiB,AACjB,SAAU,AACV,mBAAoB,AACpB,aAAsB,CACvB,AAED,qBACE,kBAAoB,CACrB",file:"PageTemplate.css",sourcesContent:[".main {\n  padding: 4.5rem 5%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n.main.native-content {\n  padding: 1em 5% 0 5%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.text-main {\n  text-align: left;\n  width: 100%;\n}\n\n.title {\n  margin: 0;\n  font-size: 5em;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 1rem;\n}\n\n.title.native-content {\n  font-size: 3em;\n}\n\n.intro {\n  color: #666;\n  margin: 0;\n  font-size: 2em;\n  font-weight: 100;\n  line-height: 1.4em;\n  margin-bottom: 1rem;\n}\n\n.intro.native-content {\n  color: #333;\n  font-size: 1.26em;\n}\n\n.copy {\n  font-size: 1em;\n  font-weight: 300;\n  margin: 0;\n  line-height: 1.5rem;\n  margin: 1rem 0 1rem 0;\n}\n\n.copy.native-content {\n  line-height: 1.3 em;\n}\n"],sourceRoot:""}])},185:function(A,g,C){A.exports=C.p+"static/media/trumpet.5f03f868.png"},186:function(A,g,C){A.exports=C.p+"static/media/trumpetBlur.804f0154.png"},187:function(A,g,C){A.exports=C.p+"static/media/trumpetNative.85118efa.jpg"},188:function(A,g){A.exports="data:image/jpeg;base64,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OEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgABOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAACOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0kAAAAGAAAAAAAAAAAAAABGAAAATAAAAAoAVQBuAHQAaQB0AGwAZQBkAC0AMQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAATAAAAEYAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAEYAAAAAUmdodGxvbmcAAABMAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAABGAAAAAFJnaHRsb25nAAAATAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRl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bwBwAAAAFwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAgAEMAQwAgADIAMAAxADQAAAABADhCSU0EBgAAAAAAB//8AQEAAQEA/+EN4Wh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDItMDNUMjA6MDI6MTctMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDItMDNUMjA6MDI6MTctMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTAyLTAzVDIwOjAyOjE3LTA1OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3ZWFiZjMwLTllOTQtNDU3Yy1hYWM1LTk5OWUzZWUzZWI1YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZjMzMwZmVlLTQ5ZDUtMTE3Yi04MjU2LWIzNTU1NDdhMTM1NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0NmE0ZTAzLTNjNjEtNGZhZi05NGRhLTg1MDU5OGU2MDhhMSIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDZhNGUwMy0zYzYxLTRmYWYtOTRkYS04NTA1OThlNjA4YTEiIHN0RXZ0OndoZW49IjIwMTgtMDItMDNUMjA6MDI6MTctMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5N2VhYmYzMC05ZTk0LTQ1N2MtYWFjNS05OTllM2VlM2ViNWMiIHN0RXZ0OndoZW49IjIwMTgtMDItMDNUMjA6MDI6MTctMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4AIUFkb2JlAGSAAAAAAQMAEAMCAwYAAAAAAAAAAAAAAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/CABEIAEYATAMBIgACEQEDEQH/xACCAAACAwEAAAAAAAAAAAAAAAADBAABBQIBAAMBAQAAAAAAAAAAAAAAAAABAgMEEAACAgIBBAMBAQAAAAAAAAAAARECIQMQMUESBCAiEzAjEQACAwEBAAMAAAAAAAAAAAAAESABIRAwQVFhEgABBQAAAAAAAAAAAAAAAAAQIDBAIRL/2gAMAwEBAhEDEQAAAMCSguR0adaecPmXBVdQUuiDp9PQKNjMCQOXY+J3QcaGfrEA6BbO3EdJrPBr5UXxLJPQrrZrl8oG1G3jKZAxPkq87HOiTPp4gJpysHQjx0esyMLxzJ3KZSTp/9oACAECAAEFAP6L5MjPw7//2gAIAQMAAQUAIII4QhsgjiuHbDraXGCzYrOwuvngsIXH/9oACAEBAAEFAGySTJkyZJJJw+Ej1tH6P2PW8VxHHZ9YEj1rPWb9tdlHjmDt3Snj1l9XKtdOeIIx31U+lUmPY9bpmz1JrXp8nasOCMd9df8ANX8Rt3NcyrommtbOqUn5uFlz46qVkrTC1Opk2O13Jrsk/wBKzqU223SrS0FLs8oVrIvtQ7CZGNXXbM1F5H3MxcQjt//aAAgBAgIGPwCT/9oACAEDAgY/AHtGxlX/2gAIAQEBBj8A9dH4v4M8EXVljld8wfLoUmIVl/djgh8dDGaafnFBy2Gx/9k="},99:function(A,g,C){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var I=C(0),e=C.n(I),n=C(4),t=C(106),a=C(185),i=C.n(a),o=C(186),r=C.n(o),l=C(187),c=C.n(l),m=C(188),B=C.n(m),s=n.a?c.a:i.a,E=n.a?B.a:r.a,d=n.a?"image-container-native-color":"image-container-nocolor",w=function(){return e.a.createElement(t.g,{title:"music",imgSrc:s,preloadSrc:E,containerClass:d,intro:"Latin GRAMMY nominee. Winner of an International Trumpet Competition. TV appearances include America\u2019s Got Talent.",copy:e.a.createElement("div",null,e.a.createElement("p",null,"Music is arguably my first language. I grew up in a musical family. My sisters and I made an album together called the St. Louis Jazz Sisters. Since then I\u2019ve performed at venues from Carnegie Hall in New York to The Blue Room in Kansas City and the Kennedy Center in Washington D.C. I've also toured the world playing in India, Mexico, and all around the US. Before moving to New York, I won the International Guild Solo Competition held in Sydney Australia. As a freelancer I\u2019ve been a part of many musical groups including NYC\u2019s first all female mariachi and a hip hop brass band."),e.a.createElement("p",null,"My major music influences and mentors have been Vincent Penzarella, Mark Gould, David Taylor, and Bobby Watson."))})};g.default=w}});
//# sourceMappingURL=0.2052106a.chunk.js.map