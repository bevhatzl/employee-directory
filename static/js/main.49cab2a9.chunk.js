(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(12),i=n.n(a),l=(n(24),n(25),n(13)),o=n(14),d=n(17),h=n(16),j=n(15),u=n.n(j),m=function(){return u.a.get("https://randomuser.me/api/?results=50",{headers:{"Access-Control-Allow-Origin":"*"}})};var b=function(e){return Object(r.jsx)("div",{className:"container",style:e.style,children:e.children})};var p=function(e){return Object(r.jsx)("form",{className:"search",id:"form-style",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"employee",children:"Employee Name:"}),Object(r.jsx)("input",{onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"Type in a name to begin",id:"employee"})]})})};var O=function(e){if("ascend"===e.order)e.results.sort((function(e,t){return e.name.first>t.name.first?1:-1}));else e.results.sort((function(e,t){return e.name.first>t.name.first?-1:1}));function t(e){var t=e.split("-"),n=t[0],r=t[1];return[t[2].split("T")[0],r,n].join("-")}return Object(r.jsx)("tbody",{className:"table",children:e.results.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{alt:"Employee photo",src:e.picture.thumbnail})}),Object(r.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(r.jsx)("td",{children:e.phone}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:t(e.dob.date)})]},e.email)}))})};n(44);var f=function(e){return Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Image"}),Object(r.jsx)("th",{scope:"col",onClick:e.handleClick,id:"name-heading",children:"Name"}),Object(r.jsx)("th",{scope:"col",children:"Phone"}),Object(r.jsx)("th",{scope:"col",children:"Email"}),Object(r.jsx)("th",{scope:"col",children:"DOB"})]})})},x=n(18);var y=function(e){return Object(r.jsx)("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(x.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},g=(n(45),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],results:[],sortOrder:"ascend",filteredEmps:[],error:""},e.handleInputChange=function(t){var n=t.target.value.toLowerCase(),r=e.state.employees.filter((function(e){return(e.name.first+" "+e.name.last).toLowerCase().includes(n)}));e.setState({filteredEmps:r})},e.handleSortChange=function(t){"ascend"===e.state.sortOrder?e.setState({sortOrder:"descend"}):e.setState({sortOrder:"ascend"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){return e.setState({employees:t.data.results,filteredEmps:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(b,{style:{minHeight:"80%"},children:[Object(r.jsx)(y,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:5},children:this.state.error}),Object(r.jsx)(p,{handleInputChange:this.handleInputChange,employees:this.state.employees}),Object(r.jsx)("div",{id:"table-wrapper",children:Object(r.jsxs)("table",{children:[Object(r.jsx)(f,{handleClick:this.handleSortChange}),Object(r.jsx)(O,{results:this.state.filteredEmps,order:this.state.sortOrder})]})})]})})}}]),n}(s.Component));var v=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(g,{})})};n(46);var C=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{className:"sub-heading",children:"Click on the Name heading to sort by name or use the search box to narrow your results"})]})};var N=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(b,{children:[Object(r.jsx)(C,{}),Object(r.jsx)(v,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.49cab2a9.chunk.js.map