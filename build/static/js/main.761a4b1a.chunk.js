(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{27:function(e,a,t){e.exports=t(48)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),i=(t(32),t(33),t(8)),s=t(2),o=t(11),m=(t(34),t(24)),u=t.n(m),d=t(25),p=t.n(d),E=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.intialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(a,t)},r)},h=function(){return Object(n.useContext)(E)};var _=function(){var e=h(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("nav",{className:"header"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header_search"},c.a.createElement("input",{type:"text",className:"header_searchInput"}),c.a.createElement(u.a,{className:"header_searchIcon"})),c.a.createElement("div",{className:"header_Nav"},c.a.createElement(i.b,{to:"/login",className:"header_link"},c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Hello akash"),c.a.createElement("span",{className:"header_optionLineTwo"},"Sign In"))),c.a.createElement(i.b,{to:"/",className:"header_link"},c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Returns"),c.a.createElement("span",{className:"header_optionLineTwo"}," & Orders"))),c.a.createElement(i.b,{to:"/",className:"header_link"},c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Your"),c.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),c.a.createElement(i.b,{to:"/checkout",className:"header_link"},c.a.createElement("div",{className:"header_optionBasket"},c.a.createElement(p.a,null),c.a.createElement("span",{className:"header_optionTwo header_basketCount"},null===t||void 0===t?void 0:t.length)))))};t(41),t(42);var v=function(e){var a=e.id,t=e.title,n=e.image,r=e.rating,l=e.price,i=h(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product_info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product_price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"product_rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:l,rating:r}})}},"Add to basket"))};var N=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"}),c.a.createElement("div",{className:"home_row"},c.a.createElement(v,{id:"1223",title:"The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback",price:10,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200r_.jpg"}),c.a.createElement(v,{id:"1223",title:"The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback",price:19,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})),c.a.createElement("div",{className:"home_row"},c.a.createElement(v,{id:"1223",title:"The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback",price:25.75,rating:2,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}),c.a.createElement(v,{id:"1223",title:"The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback",price:450.05,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),c.a.createElement(v,{id:"1223",title:"The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback",price:108.7,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})),c.a.createElement("div",{className:"home_row"},c.a.createElement(v,{id:"1223",title:"The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback",price:499.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})))};t(43),t(44);var k=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=h(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutproduct_image",src:n}),c.a.createElement("div",{className:"checkoutproduct_info"},c.a.createElement("p",{className:"checkoutproduct_title"},t),c.a.createElement("p",{className:"checckoutproduct_pricce"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product_rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))};var b=function(){var e=h(),a=Object(o.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout_left"},c.a.createElement("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your shopping basket is empty"),c.a.createElement("p",null,'You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout_title"},"Your shopping Basket"),a.map((function(e){return c.a.createElement(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))))};t(45),t(46);var f=function(){return c.a.createElement("div",{className:"login"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login_container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"Email"),c.a.createElement("input",{type:"email"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password"}),c.a.createElement("button",{type:"submit",className:"login_singin"},"Sign in")),c.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{className:"login_register"},"Create Your Amazon account")))};var S=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"app"},c.a.createElement("switch",null,c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(_,null),c.a.createElement(b,null)),c.a.createElement(s.a,{path:"/login"},c.a.createElement(f,null)),c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(_,null),c.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(19),O=t(13),y=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object(O.a)(Object(O.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(w.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("cant remove product"),Object(O.a)(Object(O.a)({},e),{},{basket:t});default:return e}};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,{intialState:{basket:[],user:null},reducer:y},c.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.761a4b1a.chunk.js.map