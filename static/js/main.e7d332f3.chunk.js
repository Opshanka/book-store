(this["webpackJsonpbook-store"]=this["webpackJsonpbook-store"]||[]).push([[0],{13:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),n=c.n(s),a=c(6),i=c.n(a),l=(c(13),c(2)),o=c.n(l),j=c(3),b=c(5),d=(c(15),c(7)),u=c.n(d),h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=4GuFMrCQND0hqMFG9r62bRpINDgu9WDJ");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,r=c.results.books,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)("div",{className:"nav-wrapper blue",children:Object(r.jsx)("a",{href:"!#",className:"brand-logo center",children:"Book Store"})})})},v=function(e){var t=e.book;return Object(r.jsx)("div",{className:"col s12 m6 l4",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(r.jsx)("img",{className:"activator",alt:t.title,src:t.book_image,style:{margin:"auto",width:"auto",height:"400px"}})}),Object(r.jsx)("div",{className:"card-content",children:Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4 s11",style:{fontSize:"12px",fontWeight:"bold"},children:t.title})}),Object(r.jsxs)("div",{className:"card-reveal",children:[Object(r.jsxs)("span",{className:"card-title grey-text text-darken-4",children:["By ",t.author,Object(r.jsx)("i",{className:"material-icons right",children:"close"})]}),Object(r.jsx)("p",{children:t.description}),Object(r.jsx)("a",{href:t.amazon_product_url,target:"_blank",rel:"noreferrer",className:"waves-effect waves-light btn-small",children:"Purchase"})]})]})})},x={position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto"},m=function(){return Object(r.jsx)("div",{className:"preloader-wrapper big active",style:x,children:Object(r.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch center-align",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})})},O=function(e){var t=e.books;return e.loading?Object(r.jsx)(m,{}):Object(r.jsx)("div",{className:"row",children:null==t?Object(r.jsx)("p",{children:"No books to show"}):t.map((function(e){return Object(r.jsx)(v,{book:e},e.primary_isbn10)}))})},f=function(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),i=Object(b.a)(a,2),l=i[0],d=i[1];Object(s.useEffect)((function(){u.a.AutoInit(),v()}),[]);var v=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,n(t),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(O,{books:c,loading:l})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.e7d332f3.chunk.js.map