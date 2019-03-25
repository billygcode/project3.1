(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(66)},36:function(e,t,n){},56:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),l=n.n(r),c=n(8),u=n(6),i=n(28),s=n(10),m=n(11),h=n(13),d=n(12),f=n(14);n(36);var E=function(e){var t=e.children;return o.a.createElement("div",{style:{height:200,clear:"both",paddingTop:70,textAlign:"center"},className:"jumbotron"},t)},p=n(9),b=n.n(p),k={getBooks:function(){return b.a.get("/api/books")},getBook:function(e){return b.a.get("/api/books/"+e)},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return b.a.post("/api/books",e)}};function v(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function g(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function B(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(56),document.createElement("p");function y(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("p",{className:"list-group"},t))}function j(e){var t=e.children;return o.a.createElement("p",{className:"list-group-item"},t)}function N(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({maxlength:"160",className:"form-control"},e)))}function O(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}k.getBooks().then(function(e,t){e.data.forEach(function(e){console.log(e.author)}),console.log(e)});var S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],author:""},n.loadBooks=function(){k.getBooks().then(function(e){return n.setState({books:e.data,author:""})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){k.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(i.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.author&&k.saveBook({author:n.state.author}).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return o.a.createElement(v,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"What Books Should I Read?")),o.a.createElement("form",null,o.a.createElement(N,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Your Contribution ;-) (160 characters max)"}),o.a.createElement(O,{disabled:!this.state.author,onClick:this.handleFormSubmit},"Submit Book"))),o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"The Story So Far...")),o.a.createElement(y,null,this.state.books.map(function(e){return o.a.createElement(j,{key:e._id},o.a.createElement("p",null,e.author))})))))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(v,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(g,null,o.a.createElement(B,{size:"md-10 md-offset-1"},o.a.createElement("article",null,o.a.createElement("h1",null,"Synopsis"),o.a.createElement("p",null,this.state.book.synopsis)))),o.a.createElement(g,null,o.a.createElement(B,{size:"md-2"},o.a.createElement(c.b,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(a.Component);var x=function(){return o.a.createElement(v,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};n(65);var C=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",id:"navbar",href:"/"},"Cool Story Bro"))};var z=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(C,null),o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:S}),o.a.createElement(u.a,{exact:!0,path:"/books",component:w}),o.a.createElement(u.a,{exact:!0,path:"/books/:id",component:w}),o.a.createElement(u.a,{component:x}))))};l.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.08118163.chunk.js.map