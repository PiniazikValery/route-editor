(window["webpackJsonproute-editor"]=window["webpackJsonproute-editor"]||[]).push([[0],{121:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(29),c=t.n(o),i=t(3),u=t(7),l=t(14),s=t(18),d=t(12),p=t(54),b=t.n(p),f=function(e,n,t){var r=b()();return{type:O.ADD_COORD,payload:{id:r,name:e,lat:n,lng:t}}},O={ADD_COORD:"ADD_COORD",DELETE_COORD:"DELETE_COORD",DND_COORD:"DND_COORD",INIT_YMAPS_API:"INIT_YMAPS_API",EDIT_COORD:"EDIT_COORD"},g=t(23);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(t,!0).forEach(function(n){Object(l.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var h={present:[],lastAction:void 0},y=t.n(g)()(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0,t=e.present;switch(n.type){case O.ADD_COORD:var r=n.payload,a=r.id,o=r.name,c=r.lat,i=r.lng,u={name:o,lat:c,lng:i,id:a},l=[].concat(Object(d.a)(t),[u]),p=O.ADD_COORD;return{present:l,lastAction:p};case O.DELETE_COORD:var b=n.payload.id,f=Object(d.a)(t),g=f.splice(f.findIndex(function(e){return e.id===b}),1);f=[].concat(Object(d.a)(f.slice(0,g)),Object(d.a)(f.slice(g+1)));var v=O.DELETE_COORD;return{present:f,lastAction:v};case O.DND_COORD:var y=n.payload,D=y.startIndex,j=y.endIndex;if(D!==j){var E=Object(d.a)(t),w=E.splice(D,1),x=Object(s.a)(w,1),C=x[0];E.splice(j,0,C);var _=O.DND_COORD;return{present:E,lastAction:_}}return e;case O.EDIT_COORD:var A=n.payload,k=A.id,I=A.name,R=A.lat,P=A.lng,M=Object(d.a)(t),T=O.EDIT_COORD;return{present:M.map(function(e){return e.id===k?m({},e,{name:I,lat:R,lng:P}):e}),lastAction:T};default:return e}},{filter:Object(g.distinctState)()}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O.INIT_YMAPS_API:var t=n.payload.yMapsApi;return t;default:return e}},j=Object(u.c)({coords:y,yMaps:D}),E=Object(u.e)(j),w=(t(81),t(5)),x=t(6);function C(){var e=Object(w.a)(["\n    width: 30%;\n    position: absolute;\n"]);return C=function(){return e},e}var _=x.a.div(C()),A=t(24),k=t.n(A),I=t(37);function R(){var e=Object(w.a)(["\n    background-color: #e9ecf1;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    border-radius: 20px;\n    padding: 10px;\n    border: none;\n    outline: none;\n    width: 93%;\n    &::placeholder {\n        color: darkslategray;\n    }\n"]);return R=function(){return e},e}function P(){var e=Object(w.a)(["\n    text-align: center;\n    width:100%;\n    min-width: 300px;\n    z-index:2000;\n    position: relative;\n"]);return P=function(){return e},e}var M=x.a.form(P()),T=x.a.input(R()),N=Object(r.memo)(function(e){var n=e.dispatch,t=e.yMaps,o=Object(r.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],l=function(){var e=Object(I.a)(k.a.mark(function e(t){var r,a,o,c;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=11;break}return t.preventDefault(),u(""),e.next=5,d(i);case 5:r=e.sent,a=r.gcoordName,o=r.glat,c=r.glng,r.decodeError||n(f(a,o,c));case 11:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=Object(I.a)(k.a.mark(function e(n){var r,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={gcoordName:n},a=function(e){var n=e.geoObjects.get(0);if(n){var t=n.getAddressLine(),a=n.geometry.getCoordinates();r.gcoordName=t,r.glat=a[1],r.glng=a[0]}else r.decodeError=!0},e.next=4,t.geocode(n).then(a);case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(M,null,a.a.createElement(T,{onKeyDown:l,onChange:function(e){u(e.target.value)},value:i,placeholder:"New node"}))}),L=Object(i.b)(function(e){return{yMaps:e.yMaps}})(N),S=t(57),Y=t.n(S);function z(){var e=Object(w.a)(["\n    position: absolute;\n    cursor: pointer;\n    color: red;\n    opacity: 0.3;\n    left: 0px;\n    &:hover{\n        opacity: 1;\n    }\n"]);return z=function(){return e},e}function W(){var e=Object(w.a)(["\n    border-radius: 10px;\n    margin: auto;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 95%;\n    position: relative;\n    height: 100px;\n    background-color:  rgba(128, 128, 128, 0.7);\n    text-align: center;\n    vertical-align: middle;\n    line-height: 100px;\n"]);return W=function(){return e},e}var B=x.a.div(W()),F=Object(x.a)(Y.a)(z()),J=Object(r.memo)(function(e){var n=e.dispatch,t=e.name,r=e.id;return a.a.createElement(B,null,a.a.createElement("label",null,t),a.a.createElement(F,{onClick:function(){n(function(e){return{type:O.DELETE_COORD,payload:{id:e}}}(r))}}))}),H=Object(i.b)()(J),K=t(32);function U(){var e=Object(w.a)(["\n    position: relative;\n    z-index: 2000;\n    overflow-y: scroll;\n    max-height: 90vh;\n    overflow-x: hidden;\n    &::-webkit-scrollbar {\n        width: 5px;\n    }\n    &::-webkit-scrollbar-track {\n        border-radius: 10px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: gray; \n        border-radius: 10px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n        background: #b30000; \n    }\n"]);return U=function(){return e},e}var V=x.a.div(U()),$=Object(r.memo)(function(e){var n=e.coords,t=e.dispatch;return a.a.createElement(V,null,a.a.createElement(K.a,{onDragEnd:function(e){var n,r;e.destination&&t((n=e.source.index,r=e.destination.index,{type:O.DND_COORD,payload:{startIndex:n,endIndex:r}}))}},a.a.createElement(K.c,{droppableId:"droppable"},function(e){return a.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.present.present.map(function(e,n){return a.a.createElement(K.b,{key:e.id,draggableId:e.id,index:n},function(n){return a.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),a.a.createElement(H,{key:e.id,name:e.name,id:e.id}))})}),e.placeholder)})))}),q=Object(i.b)(function(e){return{coords:e.coords}})($),G=Object(r.memo)(function(e){var n=e.yMaps;return a.a.createElement(_,null,n?[a.a.createElement(L,{key:"coordsSetter"}),a.a.createElement(q,{key:"listOfCoords"})]:void 0)}),Q=Object(i.b)(function(e){return{yMaps:e.yMaps}})(G);function X(){var e=Object(w.a)(["\n    position: relative;\n    width: 100%;\n    height: 100vh;\n"]);return X=function(){return e},e}var Z=x.a.div(X()),ee=Object(r.memo)(function(e){var n=e.coords,t=e.yMaps,o=e.dispatch,c=Object(r.useState)(null),i=Object(s.a)(c,2),u=i[0],l=i[1];Object(r.useEffect)(function(){u||l(t?new t.Map("map",{center:[55.76,37.64],zoom:7,controls:[]}):null)},[t,u]);var d,p=function(e){switch(!0){case n.present.lastAction===O.ADD_COORD:t.geocode(v(e)[e.length-1]).then(function(e){u.setCenter(e.geoObjects.get(0).geometry.getCoordinates(),7)})}},b=function(e){for(var n=e,r=function(e){t.geocode(n.get(e).geometry.getCoordinates()).then(function(r){n.get(e).options.set({balloonContentLayout:t.templateLayoutFactory.createClass("<span>".concat(r.geoObjects.get(0).getAddressLine(),"</span>"))})})},a=0;a<n.getLength();a++)r(a);return n},f=function(e,n){var r=n.originalEvent.target.geometry.getCoordinates();t.geocode(r).then(function(n){var t=n.geoObjects.get(0),r=t.getAddressLine(),a=t.geometry.getCoordinates();o(function(e,n,t,r){return{type:O.EDIT_COORD,payload:{id:e,name:n,lat:t,lng:r}}}(e,r,a[1],a[0]))})},v=function(e){return e.map(function(e){return[+e.lng,+e.lat]})};return a.a.createElement("div",null,a.a.createElement(Z,{id:"map",key:"map"}),u?void((d=n.present.present).length>1?t.route(v(d)).then(function(e){for(var n=b(e.getWayPoints()),t=function(e){n.get(e).events.add("dragend",function(n){return f(d[e].id,n)})},r=0;r<n.getLength();r++)t(r);e.editor.start({addViaPoints:!1}),u.geoObjects.removeAll(),u.geoObjects.add(e),p(d)},function(e){alert("error: "+e.message),o(g.ActionCreators.undo())}):u.geoObjects.removeAll()):void 0)}),ne=Object(i.b)(function(e){return{coords:e.coords,yMaps:e.yMaps}})(ee),te=t(61),re=t(19),ae=t(62),oe=function(){function e(n){Object(te.a)(this,e),this.dispatch=n}return Object(re.a)(e,[{key:"initYMaps",value:function(){var e=this;ae.a.load("https://api-maps.yandex.ru/2.1/?apikey=ec0ad35b-0d65-48bb-aff9-8343ba56b035&lang=en_US").then(function(n){return e.dispatch((t=n,{type:O.INIT_YMAPS_API,payload:{yMapsApi:t}}));var t}).catch(function(e){return console.log("Failed to load Yandex Maps",e)})}}]),e}(),ce=Object(r.memo)(function(e){var n=e.dispatch;return Object(r.useEffect)(function(){new oe(n).initYMaps()},[n]),a.a.createElement("div",null,a.a.createElement(Q,null),a.a.createElement(ne,null))}),ie=Object(i.b)()(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(i.a,{store:E},a.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,n,t){e.exports=t(121)},81:function(e,n,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.b26603af.chunk.js.map