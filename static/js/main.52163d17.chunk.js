(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(17),i=s.n(a),n=s(15),l=s(2),r=(s(23),s(0)),j=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],b=function(e){var t=e.children,s=e.type,c=e.onclick,a=e.buttonStyle,i=e.buttonSize,n=j.includes(a)?a:j[0],b=o.includes(i)?i:o[0];return Object(r.jsx)(l.b,{to:"/sign-Up",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(n," ").concat(b),onClick:c,type:s,children:t})})};s(30);var d=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!0),j=Object(n.a)(i,2),o=j[0],d=j[1],m=function(){return a(!1)},h=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(c.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:m,children:["EMSR ",Object(r.jsx)("i",{className:"fas fa-atom"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!s)},children:Object(r.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:m,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/services",className:"nav-links",onClick:m,children:"Services"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/products",className:"nav-links",onClick:m,children:"Products"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/sign-up",className:"nav-links-mobile",onClick:m,children:"Sign Up"})})]}),o&&Object(r.jsx)(b,{buttonStyle:"btn--outline",children:"SING UP"})]})})})},m=s(3);s(9),s(31);var h=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:"/videos/video-2.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(r.jsx)("p",{children:"What are you waiting for?"}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(r.jsxs)(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["WATCH TRAILER ",Object(r.jsx)("i",{className:"far fa-play-circle"})]})]})]})};s(32);var x=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)(l.b,{className:"cards__item__link",to:e.path,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var O=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(x,{src:"images/diu varsity.png",text:"Our varsity is so beautiful to look at.",label:"Varsity",path:"/services"}),Object(r.jsx)(x,{src:"images/bono-maya.jpg",text:"Banamaya is a beautiful place for everyone to hang out.",label:"Bana-Maya",path:"/services"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(x,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),Object(r.jsx)(x,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),Object(r.jsx)(x,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})]})]})})]})};s(33);var u=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("section",{className:"footer-subscription",children:[Object(r.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to recevie our best vacation deals"}),Object(r.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(r.jsx)("div",{className:"input-areas",children:Object(r.jsxs)("from",{children:[Object(r.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(r.jsx)(b,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(r.jsxs)("div",{className:"footer-links",children:[Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)(l.b,{to:"/sign-up",children:"How it wroks"}),Object(r.jsx)(l.b,{to:"/",children:"Testimonials"}),Object(r.jsx)(l.b,{to:"/",children:"Careers"}),Object(r.jsx)(l.b,{to:"/",children:" Investors"}),Object(r.jsx)(l.b,{to:"/",children:" Terms of Services"})]}),Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Contact Us"}),Object(r.jsx)(l.b,{to:"/",children:" Contact"}),Object(r.jsx)(l.b,{to:"/",children:"Support"}),Object(r.jsx)(l.b,{to:"/",children:"Destination"}),Object(r.jsx)(l.b,{to:"/",children:" SponsorShips"})]})]}),Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Videos"}),Object(r.jsx)(l.b,{to:"/",children:"Submit Video"}),Object(r.jsx)(l.b,{to:"/",children:"Ambassadors"}),Object(r.jsx)(l.b,{to:"/",children:"Agency"}),Object(r.jsx)(l.b,{to:"/",children:"Influencer"})]}),Object(r.jsxs)("div",{className:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Social Media"}),Object(r.jsx)(l.b,{to:"/",children:"Instagram"}),Object(r.jsx)(l.b,{to:"/",children:"Facebook"}),Object(r.jsx)(l.b,{to:"/",children:"Youtube"}),Object(r.jsx)(l.b,{to:"/",children:" Twitter"}),Object(r.jsx)(l.b,{to:"/",children:" LinkedIn"})]})]})]}),Object(r.jsx)("section",{className:"social-media",children:Object(r.jsxs)("div",{className:"social-media-wrap",children:[Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsxs)(l.b,{to:"/",className:"social-logo",children:["EMSR ",Object(r.jsx)("i",{className:"fas fa-atom"})]})}),Object(r.jsx)("small",{className:"website-rights",children:"EMSR 2021"}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)(l.b,{className:"social-icon-link facebook",to:"/https://www.facebook.com/","aria-label":"Facebook",children:Object(r.jsx)("i",{className:"fab fa-facebook-f"})}),Object(r.jsx)(l.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{className:"fab fa-instagram"})}),Object(r.jsx)(l.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{className:"fab fa-youtube"})}),Object(r.jsx)(l.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{className:"fab fa-twitter"})}),Object(r.jsx)(l.b,{className:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})};var f=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{}),Object(r.jsx)(O,{}),Object(r.jsx)(u,{})]})};function p(){return Object(r.jsx)("h1",{className:"services",children:"SERVICES"})}function v(){return Object(r.jsx)("h1",{className:"products",children:"PRODUCTS"})}function N(){return Object(r.jsx)("h1",{className:"sign-up",children:"LIKE & SUBSCRIBE"})}var g=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/",exact:!0,component:f}),Object(r.jsx)(m.a,{path:"/services",component:p}),Object(r.jsx)(m.a,{path:"/products",component:v}),Object(r.jsx)(m.a,{path:"/sign-up",component:N})]})]})})};i.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))},9:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.52163d17.chunk.js.map