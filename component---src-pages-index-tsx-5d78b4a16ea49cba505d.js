(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),c=r(a("j8BX")),o=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=N([].concat(t.fluid))),t.fixed&&(t.fixed=N([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=f(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function N(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(I,(0,c.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),I=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,c.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=f(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,N=e.loading,L=e.draggable,z=g||h;if(!z)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,c.default)({opacity:R?1:0,transition:j?"opacity "+E+"ms":"none"},s),V="boolean"==typeof v?"lightgray":v,H={transitionDelay:E+"ms"},P=(0,c.default)({opacity:this.state.imgLoaded?0:1},j&&H,s,m),T={title:t,alt:this.state.isVisible?"":a,style:P,className:f,itemProp:y},M=this.state.isHydrated?p(z):z[0];if(g)return o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},o.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&o.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&H)}),M.base64&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:z,generateSources:x}),M.tracedSVG&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:z,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,w(z),o.default.createElement(I,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,c.default)({alt:a,title:t,loading:N},M,{imageVariants:z}))}}));if(h){var W=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&o.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},j&&H)}),M.base64&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:z,generateSources:x}),M.tracedSVG&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:z,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,w(z),o.default.createElement(I,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,c.default)({alt:a,title:t,loading:N},M,{imageVariants:z}))}}))}return null},t}(o.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}R.propTypes={resolutions:j,sizes:C,fixed:V(d.default.oneOfType([j,d.default.arrayOf(j)])),fluid:V(d.default.oneOfType([C,d.default.arrayOf(C)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=R;t.default=H},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),i=a.n(r),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=i.a.createContext&&i.a.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a};function o(e){return function(t){return i.a.createElement(d,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return i.a.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,r=e.attr,n=e.size,l=e.title,o=c(e,["attr","size","title"]),d=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),i.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&i.a.createElement("title",null,l),e.children)};return void 0!==l?i.a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},PNH4:function(e,t,a){e.exports={separator:"achievements-module--separator--3Z6Dh"}},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("gd0A"),l=a("9Dj+"),s=a("Wbzz"),c=a("ma3e"),o=a("wwL4"),d=a.n(o),u=function(e){var t=e.label,a=e.to,r=e.children,n=e.className;return i.a.createElement("a",{className:n,href:a,target:"_blank",rel:"noopener noreferrer nofollow","aria-label":t},r)},m=function(e){var t=e.size,a=void 0===t?"2.5em":t;return i.a.createElement("div",{className:"is-block"},i.a.createElement(u,{className:d.a.socialLink,label:"LinkedIn",to:"https://www.linkedin.com/in/fredericwoelffel/"},i.a.createElement(c.e,{size:a})),i.a.createElement(u,{className:d.a.socialLink,label:"Twitter",to:"https://twitter.com/fwoelffel"},i.a.createElement(c.h,{size:a})),i.a.createElement(u,{className:d.a.socialLink,label:"Github",to:"https://github.com/fwoelffel"},i.a.createElement(c.c,{size:a})),i.a.createElement(u,{className:d.a.socialLink,label:"contact",to:"https://frdricwoelffel.typeform.com/to/TgRdLj"},i.a.createElement(c.b,{size:a})))},f=a("9eSz"),p=a.n(f),g=a("atcA"),h=a.n(g),v=function(){var e=Object(s.useStaticQuery)("969603283"),t=e.site,a=e.file,r=t.siteMetadata,n=r.position,l=r.title,c=r.about;return i.a.createElement("div",{className:"has-text-centered"},i.a.createElement(p.a,{className:h.a.avatar,fixed:a.childImageSharp.fixed,alt:"avatar"}),i.a.createElement("h1",{className:"title is-1 is-spaced is-uppercase"},l),i.a.createElement("h2",{className:"subtitle"},n),i.a.createElement(m,null),c?i.a.createElement("div",{className:h.a.about+" has-text-centered is-family-code"},c):null)},E=a("zwUd"),b=a.n(E),y=function(e){var t=e.start,a=e.end,r=e.what,n=e.where,l=e.location,s=e.link,c=e.children;return i.a.createElement("div",{className:"timeline-item"},i.a.createElement("div",{className:"timeline-marker"}),i.a.createElement("div",{className:"timeline-content"},i.a.createElement("p",{className:"heading"},t," - ",a),i.a.createElement("span",{className:"title is-6"},r),i.a.createElement("br",null),i.a.createElement("span",{className:"title is-7"},s?i.a.createElement(u,{to:s},n):n),i.a.createElement("span",{className:"is-size-7"},l?" - "+l:null),c?i.a.createElement("div",{className:"has-text-justified "+b.a.description},c):null))},w=function(){var e=Object(s.useStaticQuery)("3265400499").allExperiencesYaml;return i.a.createElement("section",{className:"section"},i.a.createElement("h2",{className:"title is-2"},i.a.createElement(c.f,null)," Experiences"),i.a.createElement("div",{className:"is-divider"}),i.a.createElement("div",{className:"timeline"},e.nodes.map((function(e){return i.a.createElement(y,{start:e.start,end:e.end,what:e.what,where:e.where,location:e.location,link:e.link},e.description)}))))},N=function(){var e=Object(s.useStaticQuery)("1209504521").allEducationYaml;return i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title is-2"},i.a.createElement(c.d,null)," Education"),i.a.createElement("div",{className:"is-divider"}),i.a.createElement("div",{className:"timeline"},e.nodes.map((function(e){return i.a.createElement(y,{start:e.start,end:e.end,what:e.what,where:e.where,location:e.location,link:e.link})})))))},S=a("PNH4"),x=a.n(S),L=function(e){var t=e.title,a=e.description,r=e.date;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:"title is-6"},t),r?i.a.createElement("h4",{className:"subtitle is-7"},r):null,a?i.a.createElement("p",null,a):null)},z=function(){var e=Object(s.useStaticQuery)("3271780015").allAchievementsYaml;return i.a.createElement("section",{className:"section"},i.a.createElement("h2",{className:"title is-2"},i.a.createElement(c.g,null)," Achievements"),i.a.createElement("div",{className:"is-divider"}),i.a.createElement("ul",null,e.nodes.map((function(t,a){return i.a.createElement("li",null,i.a.createElement(L,{title:t.title,description:t.description,date:t.date}),a<e.nodes.length-1?i.a.createElement("hr",{className:x.a.separator}):null)}))))},O=a("Lnxd");function k(e){return Object(O.a)({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"}}]})(e)}function I(e){return Object(O.a)({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}}]})(e)}function R(e){return Object(O.a)({tag:"svg",attr:{viewBox:"0 0 10 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(e)}function j(e){return Object(O.a)({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}}]})(e)}var C=function(e){var t=e.title,a=e.description,r=e.stargazers,n=e.link,l=e.forks,s=e.mainLanguage,c=e.topics,o=e.watchers;return i.a.createElement(u,{to:n},i.a.createElement("div",{className:"card",style:{display:"flex","flex-direction":"column",height:"100%"}},i.a.createElement("div",{className:"card-content"},i.a.createElement("h3",{className:"title is-5 is-marginless"},t),i.a.createElement("span",{className:"subtitle is-7"},n),i.a.createElement("p",{style:{margin:"20px 0px"}},a),i.a.createElement("div",{className:"tags"},c.map((function(e){return i.a.createElement("span",{className:"tag"},e)})))),i.a.createElement("footer",{className:"card-footer level",style:{"vertical-align":"middle","margin-top":"auto",padding:"10px"}},i.a.createElement("div",{className:"level-left"},i.a.createElement("span",null,i.a.createElement("span",{style:{"margin-right":"2px","vertical-align":"middle"}},i.a.createElement(k,null)),s)),i.a.createElement("div",{className:"level-right",style:{"margin-top":"0"}},i.a.createElement("span",null,i.a.createElement("span",{style:{"margin-right":"2px","vertical-align":"middle"}},i.a.createElement(I,null)),o),i.a.createElement("span",{style:{"margin-left":"15px"}},i.a.createElement("span",{style:{"margin-right":"2px","vertical-align":"middle"}},i.a.createElement(R,null)),l),i.a.createElement("span",{style:{"margin-left":"15px"}},i.a.createElement("span",{style:{"margin-right":"2px","vertical-align":"middle"}},i.a.createElement(j,null)),r)))))},V=function(){var e=Object(s.useStaticQuery)("714902543").github;return i.a.createElement("section",{className:"section"},i.a.createElement("h2",{className:"title is-2"},i.a.createElement(c.a,null)," Projects"),i.a.createElement("div",{className:"is-divider"}),i.a.createElement("div",{className:"columns is-multiline"},e.viewer.pinnedItems.nodes.map((function(e){return i.a.createElement("div",{className:"column is-one-third"},i.a.createElement(C,{title:e.name,description:e.description,link:e.url,forks:e.forkCount,mainLanguage:e.primaryLanguage.name,stargazers:e.stargazers.totalCount,topics:e.repositoryTopics.nodes.map((function(e){return e.topic.name})),watchers:e.watchers.totalCount}))}))))};t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(n.a,null,i.a.createElement(v,null)),i.a.createElement(V,null),i.a.createElement(z,null),i.a.createElement("div",{className:"columns is-gapless"},i.a.createElement("div",{className:"column"},i.a.createElement(w,null)),i.a.createElement("div",{className:"column"},i.a.createElement(N,null))))}},atcA:function(e,t,a){e.exports={avatar:"identity-module--avatar--IGvFs",about:"identity-module--about--1kYFZ"}},wwL4:function(e,t,a){e.exports={socialLink:"social-links-module--social-link--u9CSQ"}},zwUd:function(e,t,a){e.exports={description:"timeline-item-module--description--VXvG3"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5d78b4a16ea49cba505d.js.map