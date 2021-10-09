(this["webpackJsonpstarwars-planets"]=this["webpackJsonpstarwars-planets"]||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(19),r=c.n(n),s=(c(26),c(4)),i=Object(a.createContext)(),l=c(0),o=["name","films","climate","created","diameter","edited","gravity","orbital_period","population","rotation_period","surface_water","terrain","url"];var u=function(){var e=Object(a.useContext)(i),t=e.data,c=e.filter,n=Object(a.useState)([]),r=Object(s.a)(n,2),u=r[0],d=r[1];Object(a.useEffect)((function(){var e=function(e,t){var c=t.filterByName,a=t.filterByNumerics,n=t.order,r=e.filter((function(e){return e.name.includes(c)}));a.forEach((function(e){var t=e.column,c=e.comparison,a=e.value;r=r.filter((function(e){switch(c){case"maior que":return parseInt(e[t],10)>a;case"menor que":return parseInt(e[t],10)<a;case"igual a":return e[t]===a;default:return""}}))}));var s=function(e,t){var c=n.column,a="name"===c?e[c]:parseInt(e[c],10),r="name"===c?t[c]:parseInt(t[c],10);return a<r?-1:a>r?1:0};return r=r.sort((function(e,t){return"ASC"===n.sort?s(e,t):s(t,e)}))}(t,c);d(e)}),[t,c]);var j=function(e){return o.map((function(t,c){switch(t){case"name":return Object(l.jsx)("div",{className:"w-1/2 mx-auto font-bold text-xl text-yellow-600 p-2","data-testid":"planet-name",children:e[t]},c);case"films":return Object(l.jsxs)("div",{className:"flex flex-col mx-auto w-1/2 border-1 border-black border-solid shadow-md mb-1",children:[Object(l.jsx)("div",{className:"font-bold text-yellow-600 text-base",children:"Films"}),Object(l.jsx)("div",{className:"",children:e[t].map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(k,{film:e})},t)}))},c)]});case"created":case"edited":case"url":return Object(l.jsx)("div",{className:"hidden mx-2 md:block",children:e[t]},c);default:return Object(l.jsxs)("div",{className:"w-1/2 flex mx-auto p-1",children:[Object(l.jsx)("div",{className:"font-bold md:hidden",children:"".concat(t,":")}),Object(l.jsx)("div",{className:"",children:e[t]},c)]})}}))};return Object(l.jsx)("div",{className:"",children:Object(l.jsxs)("table",{className:"table-auto text-xs text-center",children:[Object(l.jsx)("thead",{className:"hidden",children:Object(l.jsx)("tr",{children:o.map((function(e,t){return Object(l.jsx)("th",{children:e},t)}))})}),Object(l.jsx)("tbody",{children:u.map((function(e,t){return Object(l.jsx)("div",{className:t%2===0?"bg-gray-200":"bg-yellow-100",children:Object(l.jsx)("div",{className:"flex flex-col w-screen",children:j(e)})},e.name)}))})]})})},d=c(11),j=c(7),b=c(3),m=["name","population","orbital_period","diameter","rotation_period","surface_water"];var f=function(){var e=Object(a.useContext)(i).submitOrder,t=Object(a.useState)({column:"name",sort:""}),c=Object(s.a)(t,2),n=c[0],r=c[1],o=function(e){var t=e.target,c=t.value,a=t.name;r(Object(b.a)(Object(b.a)({},n),{},Object(j.a)({},a,c)))};return Object(l.jsxs)("div",{className:"p-2 flex flex-col",children:[Object(l.jsxs)("div",{className:"flex justify-between p-1",children:[Object(l.jsx)("div",{children:"Categoria"}),Object(l.jsx)("label",{htmlFor:"select-options",children:Object(l.jsx)("select",{className:"text-black",name:"column",id:"select-options",onChange:o,"data-testid":"column-sort",children:m.map((function(e,t){return Object(l.jsx)("option",{children:e},t)}))})})]}),Object(l.jsxs)("div",{className:"flex justify-around",children:[Object(l.jsxs)("label",{className:"text-lg",htmlFor:"asc-opt",children:[Object(l.jsx)("input",{className:"appearance-none mx-2 w-4 h-4 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-yellow-200",type:"radio",id:"asc-opt",value:"ASC",name:"sort",onChange:o,"data-testid":"column-sort-input-asc"}),"Crescente"]}),Object(l.jsxs)("label",{className:"text-lg",htmlFor:"desc-opt",children:[Object(l.jsx)("input",{className:"appearance-none w-4 h-4 mx-2 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-yellow-200",type:"radio",id:"desc-opt",value:"DESC",name:"sort",onChange:o,"data-testid":"column-sort-input-desc"}),"Descrescente"]})]}),Object(l.jsx)("button",{className:"p-1 bg-yellow-400 text-black font-medium rounded-sm hover:bg-yellow-100","data-testid":"column-sort-button",type:"button",onClick:function(){return e(n)},children:"Ordenar"})]})},x=["population","orbital_period","diameter","rotation_period","surface_water"],O=["maior que","menor que","igual a"];var h=function(){var e=Object(a.useContext)(i),t=e.handleChange,c=e.handleClick,n=e.filter,r=e.deleteClick,o=Object(a.useState)({column:"population",comparison:"maior que",value:""}),u=Object(s.a)(o,2),m=u[0],h=u[1],p=Object(a.useState)(x),v=Object(s.a)(p,2),N=v[0],y=v[1];Object(a.useEffect)((function(){var e=n.filterByNumerics;if(!e)return y(x);if(e.length>0){var t=e.map((function(e){return e.column}));return y(x.filter((function(e){return!t.includes(e)})))}}),[n]);var w=function(e){var t=e.target,c=t.name,a=t.value;h(Object(b.a)(Object(b.a)({},m),{},Object(j.a)({},c,a)))};return Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"flex justify-center p-2",children:Object(l.jsx)("label",{htmlFor:"input-name",children:Object(l.jsx)("input",{className:"rounded-sm text-black",id:"input-name","data-testid":"name-filter",onChange:t,placeholder:"Nome"})})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"p-2 flex flex-col",children:[Object(l.jsxs)("div",{className:"flex justify-between p-1",children:[Object(l.jsx)("div",{children:"Categoria"}),Object(l.jsx)("div",{className:"w-32",children:Object(l.jsx)("label",{htmlFor:"column-filter",children:Object(l.jsx)("select",{className:"text-black w-full bg-gray-200 rounded-sm",id:"column-filter",name:"column","data-testid":"column-filter",onChange:w,children:N.map((function(e,t){return Object(l.jsx)("option",{children:e},t)}))})})})]}),Object(l.jsxs)("div",{className:"flex justify-between p-1",children:[Object(l.jsx)("div",{children:"Compara\xe7\xe3o"}),Object(l.jsx)("div",{className:"w-32",children:Object(l.jsx)("label",{htmlFor:"comparison-filter",children:Object(l.jsx)("select",{className:"text-black w-full bg-gray-200 rounded-sm",id:"comparison-filter",name:"comparison","data-testid":"comparison-filter",onChange:w,children:O.map((function(e,t){return Object(l.jsx)("option",{children:e},t)}))})})})]}),Object(l.jsxs)("div",{className:"flex justify-between p-1",children:[Object(l.jsx)("div",{children:"Valor"}),Object(l.jsx)("div",{className:"w-32",children:Object(l.jsx)("label",{className:"flex justify-end text-black",htmlFor:"value-filter",children:Object(l.jsx)("input",{className:"w-full h-5 bg-gray-200 rounded-sm",type:"number",name:"value",id:"value-filter","data-testid":"value-filter",onChange:w})})})]}),Object(l.jsx)("button",{className:"p-1 bg-yellow-400 text-black font-medium rounded-sm hover:bg-yellow-100",type:"button","data-testid":"button-filter",onClick:function(){return c(m)},children:"Adicionar Filtro"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)(f,{}),Object(l.jsx)("div",{children:N.length<5?Object(l.jsx)("div",{children:n.filterByNumerics.map((function(e,t){var c=e.column,a=e.comparison,n=e.value;return Object(l.jsxs)("div",{"data-testid":"filter",children:["".concat(c," ").concat(a," ").concat(n),Object(l.jsx)("button",{type:"button",onClick:function(){return function(e){y([].concat(Object(d.a)(N),[e])),r(e)}(c)},children:"X"})]},t)}))}):""})]})},p=c(2);var v=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){setTimeout((function(){return n(!1)}),5e4)}),[]),c?Object(l.jsxs)("div",{className:"intro",children:[Object(l.jsx)("div",{className:"fade"}),Object(l.jsx)("section",{className:"content",children:Object(l.jsxs)("div",{className:"crawl",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"sub-title",children:"Projeto Trybe"}),Object(l.jsx)("h1",{className:"title",children:"Star Wars Planets Search"})]}),Object(l.jsxs)("div",{className:"text-content",children:[Object(l.jsx)("p",{children:"H\xe1 muito tempo atr\xe1s, em uma gal\xe1xia distante..."}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem quis corrupti, commodi eius ut, quia reiciendis quisquam accusantium aliquam animi omnis eaque. Aspernatur itaque iure non vero unde harum."}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio architecto culpa molestiae officiis. Necessitatibus error doloribus voluptates doloremque iusto quaerat nostrum sed rerum, neque tempora veritatis provident impedit? Excepturi!"}),Object(l.jsx)("p",{children:"Que a for\xe7a esteja com voc\xea!"})]})]})})]}):Object(l.jsx)(p.a,{to:"/starwars-planets/main"})};var N=function(){return Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)(S,{}),Object(l.jsx)(u,{})]})};var y=function(){return Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{exact:!0,path:"/starwars-planets",component:v}),Object(l.jsx)(p.b,{path:"/starwars-planets/main",component:N})]})},w=c(8),g=c.n(w),C=c(13);var k=function(e){var t=e.film,c=Object(a.useState)(""),n=Object(s.a)(c,2),r=n[0],i=n[1],o=function(){var e=Object(C.a)(g.a.mark((function e(){var c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,i(a.title);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()})),Object(l.jsx)("div",{children:r})};var S=function(){return Object(l.jsxs)("div",{className:"bg-black text-yellow-300 font-medium",children:[Object(l.jsx)("h1",{className:"text-center text-xl p-2",children:"Star Wars Planets Search"}),Object(l.jsx)(h,{})]})};var q=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(y,{})})};c(37);var B=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(s.a)(c,2),r=n[0],o=n[1],u=Object(a.useState)({filterByName:"",filterByNumerics:[],order:{column:"name",sort:"ASC"}}),j=Object(s.a)(u,2),m=j[0],f=j[1];Object(a.useEffect)((function(){var e="https://swapi-trybe.herokuapp.com/api/planets/";function t(){return(t=Object(C.a)(g.a.mark((function t(){var c,a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,n=a.results,o(n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var x={data:r,filter:m,handleChange:function(e){var t=e.target;f(Object(b.a)(Object(b.a)({},m),{},{filterByName:t.value}))},handleClick:function(e){f(Object(b.a)(Object(b.a)({},m),{},{filterByNumerics:[].concat(Object(d.a)(m.filterByNumerics),[e])}))},deleteClick:function(e){f(Object(b.a)(Object(b.a)({},m),{},{filterByNumerics:Object(d.a)(m.filterByNumerics.filter((function(t){return t.column!==e})))}))},submitOrder:function(e){f(Object(b.a)(Object(b.a)({},m),{},{order:e}))}};return Object(l.jsx)(i.Provider,{value:x,children:t})},E=c(16);r.a.render(Object(l.jsx)(B,{children:Object(l.jsx)(E.a,{children:Object(l.jsx)(q,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7a53c423.chunk.js.map