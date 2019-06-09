(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a.p+"static/media/comments.aafc9952.svg"},57:function(e,t,a){e.exports=a(99)},67:function(e,t,a){},9:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},95:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),o=a(12),r=(a(66),a(21)),c=a(13),i=(a(67),a(9)),m=a.n(i),u=a(19),d=a.n(u),p=a(25),h=a(14),f=a(15),b=a(17),v=a(16),g=a(18),E=a(11),w=a.n(E),y=a(47),N=a(54),x=a(5),j=a(32),k=function(e){return{type:"SET_ALBUMS",albums:e}},O=function(e){return{type:"SET_ALBUMS_PAGINATION",pagination:e}},P=function(e){return function(t,a){var n=a().albums.map(function(t){return e.id===t.id?e:t});t(k(n))}},A=function(){return function(e,t){var a=t().albums,n=t().albumsPagination.startPage;return new Promise(function(t){w.a.get("https://jsonplaceholder.typicode.com/albums?_limit=18&_start=".concat(n)).then(function(n){e(k([].concat(Object(j.a)(a),Object(j.a)(n.data)))),t()})})}},S=(a(95),function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).albumsElement=Object(n.createRef)(),a.requests=0,a.unmounted=!1,a.state={showModal:!1,isLoading:!1,carouselAlbum:{id:0,title:"",photos:[]},carouselItems:[]},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll.bind(this)),0===this.props.albums.length&&this.props.getAlbums().then(function(){e.getPhotos()})}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"getCarouselItems",value:function(e){return e.photos?e.photos.map(function(e){return s.a.createElement("img",{key:e.id,src:e.url,alt:""})}):""}},{key:"getPhotos",value:function(){var e=this;this.props.albums.forEach(function(t){void 0===t.photos&&(e.requests=e.requests+1,w.a.get("https://jsonplaceholder.typicode.com/photos?albumId=".concat(t.id,"&_limit=6")).then(function(a){e.unmounted||(t.photos=a.data,e.props.updateAlbum(t),e.state.carouselAlbum.id===t.id&&e.setState({carouselItems:e.getCarouselItems(t)}),e.requests=e.requests-1)}))})}},{key:"handleScroll",value:function(){!0!==this.state.isLoading&&window.innerHeight+window.scrollY>=document.body.offsetHeight&&this.lazyLoadAlbums()}},{key:"lazyLoadAlbums",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.albumsPagination,!(this.requests>0||t.startPage>100||this.unmounted)){e.next=3;break}return e.abrupt("return");case 3:return this.setState({isLoading:!0}),t.startPage+=18,e.next=7,new Promise(function(e){return setTimeout(e,200)});case 7:return e.next=9,this.props.setAlbumsPagination(t);case 9:return e.next=11,this.props.getAlbums();case 11:this.getPhotos(),this.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onAlbumClick",value:function(e){this.setState({carouselAlbum:e,carouselItems:this.getCarouselItems(e),showModal:!0})}},{key:"onAlbumClose",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null,"Albums"),s.a.createElement("div",{className:"d-flex justify-content-between flex-wrap",ref:this.albumsElement},this.props.albums.length>0?this.props.albums.map(function(t){return s.a.createElement("div",{key:t.id,className:"album mb-3 w-25 card"},s.a.createElement("div",{onClick:e.onAlbumClick.bind(e,t)},s.a.createElement("div",{className:"d-flex flex-column justify-content-around card-body"},s.a.createElement("div",{className:"thumbnails d-flex justify-content-between"},void 0!==t.photos?t.photos.slice(0,3).map(function(e){return s.a.createElement("div",{key:e.id,className:"thumbnail"},s.a.createElement("img",{className:"rounded",src:e.thumbnailUrl,alt:""}))}):s.a.createElement("div",{className:"w-100 text-center"},s.a.createElement("img",{src:m.a,width:"100",height:"100",className:"app-logo",alt:""}))),s.a.createElement("h4",{className:"text-center mt-3"},t.title))))}):""),!0===this.state.isLoading?s.a.createElement("div",{className:"w-100 text-center"},s.a.createElement("img",{src:m.a,width:"100",height:"100",className:"app-logo",alt:""})):"",s.a.createElement(N.a,{open:this.state.showModal,onClose:this.onAlbumClose.bind(this),center:!0},s.a.createElement("h2",{className:"mb-4"},this.state.carouselAlbum.title),this.state.showModal&&this.state.carouselItems.length>0?s.a.createElement(y.Carousel,{showArrows:!0,infiniteLoop:!0,centerMode:!0,emulateTouch:!0},this.state.carouselItems):s.a.createElement("div",{className:"w-100 text-center"},s.a.createElement("img",{src:m.a,width:"100",height:"100",className:"app-logo",alt:""}))))}}]),t}(n.Component)),I=Object(o.b)(function(e){return{albums:e.albums,albumsPagination:e.albumsPagination}},function(e){return{getAlbums:Object(x.b)(A,e),updateAlbum:Object(x.b)(P,e),setAlbumsPagination:Object(x.b)(O,e)}})(S),T=a(55),L=function(e){return{type:"SET_POSTS",posts:e}},C=function(e){return{type:"SET_LIMIT",limit:e}},M=function(e){return function(t,a){var n=a().posts.map(function(t){return e.id===t.id?e:t});t(L(n))}},_=function(){return function(e){return new Promise(function(t){w.a.get("https://jsonplaceholder.typicode.com/posts").then(function(a){e(L(a.data)),t()})})}},q=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={commentsLoaded:!1,comments:[],id:a.props.match.params.id,postLoaded:!1,post:{userId:0,id:0,title:"test",body:"test"}},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t,a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/posts/".concat(this.state.id));case 2:return t=e.sent,this.setState({postLoaded:!0,post:t.data}),e.next=6,w.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(this.state.id));case 6:a=e.sent,this.setState({commentsLoaded:!0,comments:a.data}),n=Object(T.a)({},t.data,{visited:!0,comments:a.data.length}),this.props.updatePost(n);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"commentsTpl",value:function(){return this.state.commentsLoaded?s.a.createElement("div",null,s.a.createElement("h2",null,"Comments"),s.a.createElement("div",{className:"card"},this.state.comments.map(function(e){return s.a.createElement("div",{key:e.id,className:"d-flex flex-column flex-sm-row px-3 pt-3"},s.a.createElement("div",{className:"text-center mb-2 mb-sm-0"},s.a.createElement("img",{className:"rounded-circle",src:"https://api.adorable.io/avatars/50/".concat(e.email,".png"),alt:"user-".concat(e.email)})),s.a.createElement("div",{className:"flex-grow-1 pl-0 pl-sm-3"},s.a.createElement("h4",{className:"mb-0"},e.name),s.a.createElement("h5",{className:"text-muted"},e.email),s.a.createElement("p",null,e.body)))}))):s.a.createElement("img",{src:m.a,width:"100",height:"100",className:"app-logo",alt:""})}},{key:"postTpl",value:function(){var e=this.state.post;return this.state.postLoaded?s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body d-flex flex-column flex-sm-row"},s.a.createElement("div",{className:"text-center mb-2 mb-sm-0"},s.a.createElement("img",{src:"https://api.adorable.io/avatars/100/".concat(e.userId,".png"),alt:"user-".concat(e.userId)})),s.a.createElement("div",{className:"flex-grow-1 pl-0 pl-sm-3"},s.a.createElement("h3",null,e.title),s.a.createElement("p",null,e.body)))):s.a.createElement("img",{src:m.a,width:"100",height:"100",className:"app-logo",alt:""})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Post ",this.state.id),this.postTpl(),s.a.createElement("br",null),this.commentsTpl())}}]),t}(n.Component),B=Object(o.b)(null,function(e){return{updatePost:Object(x.b)(M,e)}})(q),U=a(51),D=a.n(U),W=(a(96),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={filteredPosts:[]},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.posts.length>0?this.filterPosts(this.props.limit):this.props.getPosts().then(function(){e.filterPosts(e.props.limit)})}},{key:"filterPosts",value:function(e){var t=[];this.props.posts.forEach(function(a){var n=t.filter(function(e){return e.userId===a.userId});(!n||n.length<e)&&t.push(a)}),this.setState({filteredPosts:t})}},{key:"onSelectChange",value:function(e){var t=parseInt(e.currentTarget.value);this.props.setLimit(t),this.filterPosts(t)}},{key:"optionTpl",value:function(){return[1,2,3,4,5,6,7,8,9,10].map(function(e){return s.a.createElement("option",{key:e,value:e},e)})}},{key:"postTpl",value:function(e){return s.a.createElement(r.b,{key:e.id,className:"post card mb-2 ".concat(e.visited?"visited":""),to:"/posts/".concat(e.id,"/")},s.a.createElement("div",{className:"card-body d-flex flex-column flex-sm-row"},s.a.createElement("div",{className:"text-center mb-2 mb-sm-0"},s.a.createElement("img",{className:"rounded",src:"https://api.adorable.io/avatars/100/".concat(e.userId,".png"),alt:"user-".concat(e.userId)})),s.a.createElement("div",{className:"flex-grow-1 pl-0 pl-sm-3"},s.a.createElement("h3",null,e.title),s.a.createElement("p",null,e.body),void 0!==e.comments?s.a.createElement("div",{className:"text-danger"},s.a.createElement("img",{src:D.a,alt:"comments",width:"16"}),s.a.createElement("span",{className:"ml-1"},e.comments," comments")):s.a.createElement("span",null))))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",{className:"d-flex"},s.a.createElement("div",{className:"flex-grow-1"},"All Posts"),s.a.createElement("div",{className:"d-flex"},s.a.createElement("small",{className:"text-nowrap mr-2"},"Limit posts per user:"),s.a.createElement("select",{value:this.props.limit,onChange:this.onSelectChange.bind(this),className:"form-control"},this.optionTpl()))),s.a.createElement("div",null,this.state.filteredPosts.length>0?this.state.filteredPosts.map(this.postTpl):s.a.createElement("img",{src:m.a,width:"100",height:"100",className:"app-logo",alt:""})))}}]),t}(n.Component)),z=Object(o.b)(function(e){return{posts:e.posts,limit:e.limit}},function(e){return{getPosts:Object(x.b)(_,e),setLimit:Object(x.b)(C,e)}})(W),G=function(){return s.a.createElement(r.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("nav",{className:"fixed-top navbar navbar-dark bg-dark w-100"},s.a.createElement("ul",{className:"navbar-nav flex-row justify-content-start container px-2"},s.a.createElement("li",{className:"navbar-brand"},s.a.createElement("img",{src:m.a,width:"40",height:"40",className:"app-logo d-inline-block align-top",alt:""})),s.a.createElement("li",{className:"nav-item"},s.a.createElement(r.c,{className:"nav-link",exact:!0,to:"/",activeClassName:"active"},"Posts")),s.a.createElement("li",{className:"nav-item ml-3"},s.a.createElement(r.c,{className:"nav-link",to:"/albums/",activeClassName:"active"},"Albums"))))),s.a.createElement("section",{className:"container"},s.a.createElement(c.a,{path:"/",exact:!0,component:z}),s.a.createElement(c.a,{path:"/posts/:id/",component:B}),s.a.createElement(c.a,{path:"/albums/",component:I}))))};a(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(53),J=[],R={startPage:1};var Y=[],$=Object(x.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.posts;default:return e}},limit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIMIT":return t.limit;default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALBUMS":return t.albums;default:return e}},albumsPagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALBUMS_PAGINATION":return t.pagination;default:return e}}}),F=Object(x.d)($,Object(x.a)(H.a));Object(l.render)(s.a.createElement(o.a,{store:F},s.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.36af9eb9.chunk.js.map