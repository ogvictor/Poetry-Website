(this["webpackJsonppoetry-site"]=this["webpackJsonppoetry-site"]||[]).push([[0],{45:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var r=c(4),a=c.n(r),n=c(34),o=c.n(n),s=(c(45),c(22)),i=c(3),j=c(0);function l(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("a",{href:"/",children:"Home"}),Object(j.jsx)("a",{href:"/share",children:"Share A Poem"})]})}var h=c(10),b=c(11),d=c.n(b);function u(e){var t=Object(r.useState)(!1),c=Object(h.a)(t,2),a=c[0],n=c[1],o=Object(r.useState)(e.voteCount),s=Object(h.a)(o,2),i=s[0],l=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"clickable",onClick:function(){!a&&(d()({method:"put",url:"http://wictor147poetryapi.herokuapp.com/api/poems/".concat(e.id),params:{},headers:{bob:"Bobalooba"}}),l(i+1),n(!0))},children:a?"\ud83e\udde1":"\ud83e\udd0d"}),Object(j.jsx)("span",{children:i})]})}var p=c(19);function O(e){var t=e.id,c=e.title,r=e.author,a=e.text,n=e.votes;return Object(j.jsxs)("div",{className:"poem",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("small",{children:r})]}),Object(j.jsx)(p.a,{children:"".concat(a.slice(0,100),"...")}),Object(j.jsx)("a",{href:"/poem/".concat(t),children:"read more"}),Object(j.jsx)(u,{voteCount:n,id:t})]})}function m(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){d()({method:"get",url:"http://wictor147poetryapi.herokuapp.com/api/poems/",params:{},headers:{bob:"Bobalooba"}}).then((function(e){var t=e.data.sort((function(e,t){return e.votes<t.votes?1:e.votes>t.votes?-1:0}));a(t)}))}),[]),0===c.length?Object(j.jsx)("section",{className:"poems",children:Object(j.jsx)("h1",{children:"There is no poems yet, how about sharing the first one?"})}):Object(j.jsx)("section",{className:"poems",children:c.map((function(e){var t=e._id,c=e.title,r=e.author,a=e.text,n=e.votes;return Object(j.jsx)(O,{id:t,title:c,author:r,text:a,votes:n},t)}))})}function x(){var e=Object(r.useState)({}),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(i.f)().id;Object(r.useEffect)((function(){d()({method:"get",url:"http://wictor147poetryapi.herokuapp.com/api/poems/".concat(n),params:{},headers:{bob:"Bobalooba"}}).then((function(e){return a(e.data)}))}),[n]);var o=c.title,s=c.author,l=c.text,b=c.votes;return o&&s&&l?Object(j.jsxs)("div",{className:"single-poem",children:[Object(j.jsx)("h1",{children:o}),Object(j.jsxs)("p",{children:["Written by ",s]}),Object(j.jsx)(p.a,{children:l}),Object(j.jsx)(u,{voteCount:b})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Couldn't find poem"}),Object(j.jsx)("a",{href:"/",children:"Main page"})]})}function f(){var e=Object(r.useState)(),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(),o=Object(h.a)(n,2),s=o[0],i=o[1],l=Object(r.useState)(),b=Object(h.a)(l,2),u=b[0],p=b[1],O=Object(r.useState)(),m=Object(h.a)(O,2),x=m[0],f=m[1];return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"share-poem",method:"POST",children:[Object(j.jsx)("h1",{children:"Share a poem"}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title"}),Object(j.jsx)("input",{type:"text",id:"title",onChange:function(e){return a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"text",children:"Poem"}),Object(j.jsx)("textarea",{name:"text",id:"text",cols:"30",rows:"10",placeholder:"Use Markdown",onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("a",{href:"https://www.markdownguide.org/cheat-sheet/",children:Object(j.jsx)("small",{children:"About Markdown"})})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"author",children:"Author"}),Object(j.jsx)("input",{type:"text",id:"author",onChange:function(e){return i(e.target.value)}})]}),Object(j.jsx)("small",{style:{color:"red"},children:x}),Object(j.jsx)("button",{onClick:function(){c&&s&&u?d()({method:"post",url:"http://wictor147poetryapi.herokuapp.com/api/poems/",headers:{bob:"Bobalooba"},data:{title:c,author:s,text:u}}).then((function(e){return window.location.replace("/poem/".concat(e.data._id))})):f("All fields are required.")},type:"submit",children:"Share"})]})})}function v(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(s.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(j.jsx)(i.a,{path:"/poem/:id",component:x}),Object(j.jsx)(i.a,{path:"/share",component:f})]})})]})}o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b5e6f1db.chunk.js.map