(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("W/9C");a.a=function(e){var a=e.title,t=e.navHomePath,s=e.render,i=Object(n.useState)(!1),m=i[0],o=i[1],d=Object(n.useState)(!1),u=d[0],E=d[1];return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar is-light is-fixed-top",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(r.a,{to:t,className:"navbar-item"},l.a.createElement("strong",null,a)),l.a.createElement("a",{role:"button",className:"navbar-burger","ari-label":"menu","aria-expanded":"false",onClick:function(){return o(!m)}},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"+(m?" is-active":"")},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(r.a,{to:t,className:"navbar-item"},"Products"),l.a.createElement(r.a,{to:t+"about-us",className:"navbar-item"},"About Us")),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},u?l.a.createElement("button",{type:"button",className:"button is-warning is-inverted",onClick:function(){return E(!1)}},"Hide Annotations"):l.a.createElement("button",{type:"button",className:"button is-warning",onClick:function(){return E(!0)}},"Show Annotations"))),l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},l.a.createElement(r.a,{to:"/",className:"button is-link"},"Back to Entries"))))))),l.a.createElement("div",{className:"container pt-6"},s({isAnnotationsToggled:u})),l.a.createElement(c.a,null))}},kFtE:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=function(e){var a=e.placement,t=e.children,n=e.isActive,r=void 0!==n&&n;return l.a.createElement("div",{className:"popover is-popover-"+a+" "+(r?"is-popover-active":"")},l.a.createElement("div",{className:"popover-content"},t))};r.defaultProps={placement:"top",isActive:!1},a.a=r},wzxn:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),c=t("9eSz"),s=t.n(c),i=t("Bl7J"),m=t("vrFN"),o=t("kFtE");function d(e){var a=e.data,t=e.pageContext,l=a.sitePage,c=a.allSitePage;return r.a.createElement(i.a,{title:t.name,navHomePath:t.pagePath,render:function(e){var a=e.isAnnotationsToggled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:t.name,description:"Unique products, made-to-order"}),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"media"},r.a.createElement("figure",{className:"media-left is-align-self-center"},r.a.createElement("div",{className:"image is-64x64"},r.a.createElement(s.a,{fixed:l.image.childImageSharp.fixed,alt:l.context.imageAlt}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"title"},"Unique products, made-to-order"),r.a.createElement("p",{className:"subtitle"},"Browse our selection of offerings below!")))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"columns is-multiline"},c.edges.map((function(e){return r.a.createElement("div",{className:"column mb-4 is-one-third-desktop",key:e.node.context.productName},r.a.createElement("div",{className:"media is-justify-content-center"},r.a.createElement("figure",{className:"media-left"},r.a.createElement("div",{className:"is-flex is-justify-content-center ml-6"},r.a.createElement(o.a,{placement:"top",isActive:a},r.a.createElement("strong",null,"Product images are generated with Deep AI, providing the product name."))),r.a.createElement("div",{className:"image is-128X128"},r.a.createElement(s.a,{fixed:e.node.image.childImageSharp.fixed,alt:e.node.context.imageAlt}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"is-flex is-justify-content-flex-start"},r.a.createElement("div",null,r.a.createElement("p",{className:"is-size-5"},r.a.createElement("strong",null,e.node.context.productName),r.a.createElement("br",null),r.a.createElement("small",null,e.node.context.productPrice)),r.a.createElement("p",null,new Array(e.node.context.stars).fill().map((function(e,a){return r.a.createElement("span",{className:"icon is-small",key:""+a},r.a.createElement("i",{className:"fas fa-star"}))}))),r.a.createElement(o.a,{placement:"bottom",isActive:a},r.a.createElement("strong",null,'Product names are extracted from the text prompt by Google analysis on terms considered "CONSUMER_GOOD"')),r.a.createElement("p",{className:"is-size-7 subtitle"},e.node.context.productDescription.split("\n")[0]),r.a.createElement("p",null,r.a.createElement(n.a,{to:e.node.context.pagePath,className:"button is-primary"},"View Details")))))))})))))}})}}}]);
//# sourceMappingURL=component---src-templates-storefront-js-41a4d3758da9c0cd94b5.js.map