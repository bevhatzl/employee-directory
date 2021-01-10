(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(12),l=n.n(a),o=(n(24),n(25),n(13)),i=n(14),d=n(17),h=n(16),j=n(15),u=n.n(j),m=function(){return u.a.get("https://randomuser.me/api/?results=50",{headers:{"Access-Control-Allow-Origin":"*"}})};var p=function(e){return Object(r.jsx)("div",{className:"container",style:e.style,children:e.children})};var b=function(e){return Object(r.jsx)("form",{className:"search",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"employee",children:"Employee Name:"}),Object(r.jsx)("input",{onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"Type in a name to begin",id:"employee"})]})})};var O=function(e){if("ascend"===e.order)e.results.sort((function(e,t){return e.name.first>t.name.first?1:-1}));else e.results.sort((function(e,t){return e.name.first>t.name.first?-1:1}));function t(e){var t=e.split("-"),n=t[0],r=t[1];return[t[2].split("T")[0],r,n].join("-")}return Object(r.jsx)("tbody",{children:e.results.map((function(e){return Object(r.jsxs)("tr",{className:"list-group-item",children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{alt:"Employee photo",src:e.picture.thumbnail,className:"img-fluid"})}),Object(r.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(r.jsx)("td",{children:e.phone}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:t(e.dob.date)})]},e.email)}))})};var f=function(e){return Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Image"}),Object(r.jsx)("th",{scope:"col",onClick:e.handleClick,children:"Name"}),Object(r.jsx)("th",{scope:"col",children:"Phone"}),Object(r.jsx)("th",{scope:"col",children:"Email"}),Object(r.jsx)("th",{scope:"col",children:"DOB"})]})})},x=n(18);var y=function(e){return Object(r.jsx)("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(x.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],results:[],sortOrder:"ascend",filteredEmps:[],error:""},e.handleInputChange=function(t){var n=t.target.value.toLowerCase();console.log(n);var r=e.state.employees;console.log(r),console.log(e.state.filteredEmps);var s=r.filter((function(e){return(e.name.first+" "+e.name.last).toLowerCase().includes(n)}));console.log(s),e.setState({filteredEmps:s})},e.handleSortChange=function(t){"ascend"===e.state.sortOrder?e.setState({sortOrder:"descend"}):e.setState({sortOrder:"ascend"})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){return e.setState({employees:t.data.results,filteredEmps:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(p,{style:{minHeight:"80%"},children:[Object(r.jsx)("h1",{className:"text-center",children:"Search By Name!"}),Object(r.jsx)(y,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10},children:this.state.error}),Object(r.jsx)(b,{handleInputChange:this.handleInputChange,employees:this.state.employees}),Object(r.jsxs)("table",{children:[Object(r.jsx)(f,{handleClick:this.handleSortChange}),Object(r.jsx)(O,{results:this.state.filteredEmps,order:this.state.sortOrder})]})]})})}}]),n}(s.Component);var v=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(g,{})})};var C=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on the Name heading to sort by name or use the search box to narrow your results"})]})};var N=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(p,{children:[Object(r.jsx)(C,{}),Object(r.jsx)(v,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),E()}},[[44,1,2]]]);
//# sourceMappingURL=main.8cee8c44.chunk.js.map