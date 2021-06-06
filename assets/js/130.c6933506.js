(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[130],{4478:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),i=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,l=e.height,c=void 0===l?30:l,s=e.className,u=(0,a.Z)(e,i);return o.createElement("svg",(0,r.Z)({"aria-label":"Menu",className:s,width:n,height:c,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.createElement("title",null,"Menu"),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},8913:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r=n(7294),a=n(6010),o=n(4973),i=n(5977),l="skipToContent_1oUP";function c(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,i.TH)();return(0,r.useEffect)((function(){!t.hash&&e.current&&c(e.current)}),[t.pathname]),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:l,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&c(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(6700),m=n(944),d="announcementBar_3WsW",f="announcementBarClose_38nx",v="announcementBarContent_3EUC",h="announcementBarCloseable_3myR";var g=function(){var e,t=(0,m.Z)(),n=t.isAnnouncementBarClosed,i=t.closeAnnouncementBar,l=(0,u.LU)().announcementBar;if(!l)return null;var c=l.content,s=l.backgroundColor,g=l.textColor,p=l.isCloseable;return!c||p&&n?null:r.createElement("div",{className:d,style:{backgroundColor:s,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(v,(e={},e[h]=p,e)),dangerouslySetInnerHTML:{__html:c}}),p?r.createElement("button",{type:"button",className:f,onClick:i,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=n(2122),b=function(){return null},k=n(2263),E={toggle:"toggle_71bT"},w=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},C=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,i=e.disabled,l=e.onChange,c=(0,r.useState)(o),s=c[0],u=c[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function Z(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,i=t.lightIconStyle,l=(0,k.default)().isClient;return r.createElement(C,(0,p.Z)({disabled:!l,icons:{checked:r.createElement(w,{icon:n,style:a}),unchecked:r.createElement(y,{icon:o,style:i})}},e))}var N=n(5350),_=n(7898),L=function(e){var t=(0,i.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],l=(0,r.useRef)(!1),c=(0,r.useState)(0),s=c[0],u=c[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,_.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(l.current)return l.current=!1,void o(!1);a&&0===r&&o(!0);var i=document.documentElement.scrollHeight-s,c=window.innerHeight;a&&r>=a?o(!1):r+c<i&&o(!0)}}),[s,l]),(0,r.useEffect)((function(){e&&o(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},x=n(1839),A=n(3783),I=n(9756),B=n(5525),D=["width","height"],M=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,i=(0,I.Z)(e,D);return r.createElement("svg",(0,p.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:o},i),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},S=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function T(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,I.Z)(e,S),i=(0,k.default)().i18n,l=i.currentLocale,c=i.locales,s=i.localeConfigs,m=(0,u.l5)();function d(e){return s[e].label}var f=c.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(l);return r.createElement(B.Z,(0,p.Z)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(M,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}var W="searchWrapper_3rmH";function O(e){return e.mobile?null:r.createElement("div",{className:W},r.createElement(b,null))}var j=["type"],U={default:function(){return B.Z},localeDropdown:function(){return T},search:function(){return O},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function V(e){var t=e.type,n=(0,I.Z)(e,j),a=function(e){void 0===e&&(e="default");var t=U[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var z=n(5537),H=n(4478),P="displayOnlyInLargeViewport_GrZ2",R="navbarHideable_2qcr",G="navbarHidden_3yey",q="right";var K=function(){var e,t=(0,u.LU)(),n=t.navbar,o=n.items,i=n.hideOnScroll,l=n.style,c=t.colorMode.disableSwitch,s=(0,r.useState)(!1),m=s[0],d=s[1],f=(0,N.Z)(),v=f.isDarkTheme,h=f.setLightTheme,g=f.setDarkTheme,k=L(i),E=k.navbarRef,w=k.isNavbarVisible;(0,x.Z)(m);var y=(0,r.useCallback)((function(){d(!0)}),[d]),C=(0,r.useCallback)((function(){d(!1)}),[d]),_=(0,r.useCallback)((function(e){return e.target.checked?g():h()}),[h,g]),I=(0,A.Z)();(0,r.useEffect)((function(){I===A.D.desktop&&d(!1)}),[I]);var B=o.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:q)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:q)}))}}(o),M=D.leftItems,S=D.rightItems;return r.createElement("nav",{ref:E,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":m},e[R]=i,e[G]=i&&!w,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.createElement(H.Z,null)),r.createElement(z.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),M.map((function(e,t){return r.createElement(V,(0,p.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},S.map((function(e,t){return r.createElement(V,(0,p.Z)({},e,{key:t}))})),!c&&r.createElement(Z,{className:P,checked:v,onChange:_}),!B&&r.createElement(b,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(z.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:C}),!c&&m&&r.createElement(Z,{checked:v,onChange:_})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(V,(0,p.Z)({mobile:!0},e,{onClick:C,key:t}))})))))))},F=n(546),J=n(412),Q=(0,u.WA)("theme"),X="light",Y="dark",$=function(e){return e===Y?Y:X},ee=function(e){(0,u.WA)("theme").set($(e))},te=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return J.Z.canUseDOM?$(document.documentElement.getAttribute("data-theme")):$(e)}(t)),i=o[0],l=o[1],c=(0,r.useCallback)((function(){l(X),ee(X)}),[]),s=(0,r.useCallback)((function(){l(Y),ee(Y)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",$(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=Q.get();null!==e&&l($(e))}catch(t){console.error(t)}}),[l]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?Y:X)}))}),[]),{isDarkTheme:i===Y,setLightTheme:c,setDarkTheme:s}},ne=n(2924);var re=function(e){var t=te(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(ne.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var ie="docusaurus.tab.",le=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=oe((0,u._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(ie))t[a.substring(ie.length)]=(0,u.WA)(a).get()}n(t)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},ce=(0,u.WA)("docusaurus.announcement.dismiss"),se=(0,u.WA)("docusaurus.announcement.id"),ue=function(){var e=(0,u.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){ce.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=se.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;se.set(t),r&&ce.set("false"),(r||"false"===ce.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},me=n(9443);var de=function(e){var t=le(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=ue(),i=o.isAnnouncementBarClosed,l=o.closeAnnouncementBar;return r.createElement(me.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:i,closeAnnouncementBar:l}},e.children)};function fe(e){var t=e.children;return r.createElement(re,null,r.createElement(de,null,r.createElement(u.L5,null,t)))}var ve=n(9105),he=n(4996);function ge(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(ve.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var pe=n(1217);function be(){var e=(0,k.default)().i18n,t=e.defaultLocale,n=e.locales,a=(0,u.l5)();return r.createElement(ve.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ke(e){var t=e.permalink,n=(0,k.default)().siteConfig.url,a=function(){var e=(0,k.default)().siteConfig.url,t=(0,i.TH)().pathname;return e+(0,he.Z)(t)}(),o=t?""+n+t:a;return r.createElement(ve.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function Ee(e){var t=(0,k.default)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig.metadatas,i=t.i18n,l=i.currentLocale,c=i.localeConfigs,s=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,he.Z)(a),g=(0,u.pe)(s),b=l,E=c[l].direction;return r.createElement(r.Fragment,null,r.createElement(ve.Z,null,r.createElement("html",{lang:b,dir:E}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,g),r.createElement("meta",{property:"og:title",content:g})),r.createElement(pe.Z,{description:m,keywords:f,image:d}),r.createElement(ke,null),r.createElement(be,null),r.createElement(ge,(0,p.Z)({tag:u.HX,locale:l},v)),r.createElement(ve.Z,null,o.map((function(e,t){return r.createElement("meta",(0,p.Z)({key:"metadata_"+t},e))}))))}var we=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var ye=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,i=e.pageClassName;return we(),r.createElement(fe,null,r.createElement(Ee,e),r.createElement(s,null),r.createElement(g,null),r.createElement(K,null),r.createElement("div",{className:(0,a.Z)(u.kM.wrapper.main,o,i)},t),!n&&r.createElement(F.Z,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),i=n(6742),l=n(8465),c=n(4996),s=n(2263),u=n(6700),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.default)().isClient,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,p=(0,a.Z)(e,m),b=(0,c.Z)(v.href||"/"),k={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)};return o.createElement(i.Z,(0,r.Z)({to:b},p,v.target&&{target:v.target}),v.src&&o.createElement(l.Z,{key:t,className:h,sources:k,alt:v.alt||d||"Logo"}),null!=d&&o.createElement("strong",{className:g},d))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),i=n(6010),l=n(6742),c=n(4996),s=n(5977),u=n(6700),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],f=["className"],v=["items","className","position"],h=["className"],g=["mobile"];function p(e){var t=e.activeBasePath,n=e.activeBaseRegex,i=e.to,s=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,v=e.prependBaseUrlToHref,h=(0,a.Z)(e,m),g=(0,c.Z)(i),p=(0,c.Z)(t),b=(0,c.Z)(s,{forcePrependBaseUrl:!0});return o.createElement(l.Z,(0,r.Z)({},s?{href:v?b:s}:Object.assign({isNavLink:!0,activeClassName:f,to:g},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(p)}}:null),h),u)}function b(e){var t,n=e.items,l=e.position,c=e.className,s=(0,a.Z)(e,d),u=(0,o.useRef)(null),m=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],g=v[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),(0,i.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l,"dropdown--show":h})},o.createElement(p,(0,r.Z)({className:b(c)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var i=e.className,l=(0,a.Z)(e,f);return o.createElement("li",{key:t},o.createElement(p,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:b(i,!0)},l)))})))):o.createElement(p,(0,r.Z)({className:b(c)},s))}function k(e){var t,n,l,c=e.items,m=e.className,d=(e.position,(0,a.Z)(e,v)),f=(0,o.useRef)(null),g=(0,s.TH)().pathname,b=(0,o.useState)((function(){var e;return null==(e=!(null!=c&&c.some((function(e){return(0,u.Mg)(e.to,g)}))))||e})),k=b[0],E=b[1],w=function(e,t){return void 0===t&&(t=!1),(0,i.Z)("menu__link",{"menu__link--sublist":t},e)};if(!c)return o.createElement("li",{className:"menu__list-item"},o.createElement(p,(0,r.Z)({className:w(m)},d)));var y=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":k})},o.createElement(p,(0,r.Z)({role:"button",className:w(m,!0)},d,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(l=d.children)?l:d.label),o.createElement("ul",{className:"menu__list",ref:f,style:{height:k?void 0:y}},c.map((function(e,t){var n=e.className,i=(0,a.Z)(e,h);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(p,(0,r.Z)({activeClassName:"menu__link--active",className:w(n)},i,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,g),i=n?k:b;return o.createElement(i,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),o=n(7294),i=n(5525),l=n(907),c=n(6010),s=n(6700),u=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,n,m=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,u),g=(0,l.useActiveDocContext)(v),p=g.activeVersion,b=g.activeDoc,k=(0,s.J)(v).preferredVersion,E=(0,l.useLatestVersion)(v),w=null!=(t=null!=p?p:k)?t:E,y=w.docs.find((function(e){return e.id===m}));if(!y){var C=w.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+m+" in version "+w.name+".\nAvailable docIds=\n- "+C)}return o.createElement(i.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(n={},n[d]=b&&b.sidebar===y.sidebar,n)),label:null!=f?f:y.id,to:y.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),o=n(7294),i=n(5525),l=n(907),c=n(6700),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.Z)(e,s),p=(0,l.useActiveDocContext)(d),b=(0,l.useVersions)(d),k=(0,l.useLatestVersion)(d),E=(0,c.J)(d),w=E.preferredVersion,y=E.savePreferredVersionName;var C=null!=(t=null!=(n=p.activeVersion)?n:w)?t:k,Z=m?"Versions":C.label,N=m?void 0:u(C).path;return o.createElement(i.Z,(0,r.Z)({},g,{mobile:m,label:Z,to:N,items:function(){var e=b.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){y(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),o=n(7294),i=n(5525),l=n(907),c=n(6700),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,l.useActiveVersion)(m),v=(0,c.J)(m).preferredVersion,h=(0,l.useLatestVersion)(m),g=null!=(t=null!=f?f:v)?t:h,p=null!=n?n:g.label,b=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(i.Z,(0,r.Z)({},d,{label:p,to:b}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),o=n(7294),i=n(6010),l=n(2263),c=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,l.default)().isClient,n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,i.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},1839:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3783:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(7294),a=n(412),o={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),i=n[0],l=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){l(t())}}),[]),i}},969:function(e,t,n){"use strict";n.d(t,{hbr:function(){return m},UgA:function(){return d},Bsb:function(){return f},uOf:function(){return v},RsK:function(){return h},JID:function(){return g},XKb:function(){return p},qOw:function(){return b},Ccr:function(){return k},fzv:function(){return E},Dp0:function(){return w},Wqx:function(){return y}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,c=e.title,s=l(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}function m(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(e)}function d(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function f(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}}]})(e)}function v(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function h(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)}function g(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.5",y2:"6.5"}}]})(e)}function p(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}}]})(e)}function b(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(e)}function k(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(e)}function E(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function w(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(e)}function y(e){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}}}]);