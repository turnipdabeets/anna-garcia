(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(2),l=t(9),i=t(10),o=t(12),s=t(11),u=t(13),m=(t(40),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={loaded:!0},t.LazyLoadImage=null,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.srcLoaded,t=new Image;t.src=a,t.onload=function(){e.LazyLoadImage.setAttribute("style","background-image: url('".concat(a,"')")),e.setState({loaded:!0}),e.LazyLoadImage.classList.add("image-fade-in")}}},{key:"render",value:function(){var e=this,a=this.state.loaded,t=this.props,n=t.containerClass,c=t.srcPreload,l=a?"imgage-hide":"image-preload";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"image-loaded",ref:function(a){return e.LazyLoadImage=a}}),r.a.createElement("div",{className:l,style:{backgroundImage:"url('".concat(c,"')")}}))}}]),a}(n.Component));t(41);t.d(a,"f",function(){return g}),t.d(a,"c",function(){return f}),t.d(a,"b",function(){return v}),t.d(a,"d",function(){return p}),t.d(a,"e",function(){return E}),t.d(a,"a",function(){return y});var d=c.a?"native-content":"",g=function(e){var a=e.text,t=e.className,n=void 0===t?"":t,c=e.style;return r.a.createElement("h1",{style:c,className:"title ".concat(d," ").concat(n)},a)},f=function(e){var a=e.text,t=e.className,n=void 0===t?"":t,c=e.style;return r.a.createElement("h2",{style:c,className:"intro ".concat(d," ").concat(n)},a)},v=function(e){var a=e.title,t=e.intro,n=e.className,l=void 0===n?"":n,i=e.style;return r.a.createElement("div",{className:l,style:i},r.a.createElement(g,{text:a}),r.a.createElement(f,{text:t}),c.a&&r.a.createElement("hr",null))},p=function(e){var a=e.children,t=e.className,n=void 0===t?"":t,c=e.style;return r.a.createElement("section",{style:c,className:"main ".concat(d," ").concat(n)},a)},E=function(e){var a=e.children,t=e.className,n=void 0===t?"":t,c=e.style;return r.a.createElement("div",{style:c,className:"text-main ".concat(n)},a)},y=function(e){var a=e.children,t=e.className,n=void 0===t?"":t,c=e.style;return r.a.createElement("div",{style:c,className:"copy ".concat(d," ").concat(n)},a)};a.g=function(e){var a=e.title,t=e.intro,n=e.imgSrc,l=e.preloadSrc,i=e.containerClass,o=e.copy;return r.a.createElement(p,null,r.a.createElement(E,null,r.a.createElement(v,{title:a,intro:t}),c.a&&n&&r.a.createElement("div",null,r.a.createElement(m,{srcPreload:l,srcLoaded:n,containerClass:i}),r.a.createElement("hr",null)),r.a.createElement(y,null,o)),!c.a&&n&&r.a.createElement("div",null,r.a.createElement(m,{srcPreload:l,srcLoaded:n,containerClass:i})))}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(42);a.default=function(){return r.a.createElement(c.g,{title:"Anna Garcia",imgSrc:null,imgAlt:"",intro:"I\u2019m a Software Engineer, Musician, and Entrepreneur living in New York City.",copy:r.a.createElement("div",null,r.a.createElement("p",null,"I\u2019m an award winning musician, founder of the world\u2019s first Juice Crawl and work as a Software Engineer developing for web and mobile platforms. When I\u2019m not coding, playing music, or running a business, I\u2019m learning something new or eating"," ",r.a.createElement("span",{style:{textDecoration:"line-through"}},"vegetables")," ","vegan brownies. Oh, also I pronounce my name"," ",r.a.createElement("code",{style:{color:"#666",fontSize:"1.1em"}},"[AHHH-nuh]")),r.a.createElement("p",null,"People often remark that music and programming are very different, but I disagree. Music is a language and musicians create music following a set of rules and patterns just as a programmer uses a language to express and create an app."))})}}}]);
//# sourceMappingURL=8.ff274a18.chunk.js.map