(this.webpackJsonpJBCoin=this.webpackJsonpJBCoin||[]).push([[0],{136:function(e,t,n){e.exports=n(174)},174:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),l=n.n(r),o=n(21),u=n.n(o),i=n(34),s=n.n(i),m=n(42),p=n(30),d=n(50),b=n.n(d),f=n(49),E=n.n(f),h=(n(142),n(43)),v=n(44),j=n(52),O=n(51),g=n(26),k=n.n(g),y=n(27),C=n.n(y),x=n(45),B=n.n(x),w=n(28),A=n.n(w),I=n(29),J=n.n(I),S=0,K=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={text:"".concat(S)},e.onClickButton1=function(){S+=1,e.setState({text:"".concat(S)})},e}return Object(v.a)(n,[{key:"render",value:function(){return c.a.createElement(k.a,{id:"panel1"},c.a.createElement(C.a,null,"\u0411\u0410\u041b\u0410\u041d\u0421"),c.a.createElement(A.a,null,c.a.createElement(J.a,null,this.state.text),c.a.createElement(B.a,{size:"xl",level:"1",onClick:this.onClickButton1},"\u041a\u043b\u0438\u043a")))}}]),n}(c.a.Component);l.a.render(c.a.createElement(K,null),document.getElementById("Home"));var U=K,V=n(35),W=n(48),z=n.n(W),G=n(46),H=n.n(G),N=n(47),P=n.n(N),T=Object(V.b)(),_=function(e){return c.a.createElement(k.a,{id:e.id},c.a.createElement(C.a,{left:c.a.createElement(z.a,{onClick:e.go,"data-to":"home"},T===V.a?c.a.createElement(H.a,null):c.a.createElement(P.a,null))},"\u0423\u0441\u043f\u0435\u0448\u043d\u043e!"),c.a.createElement(A.a,null,c.a.createElement(J.a,null,"\u0412\u044b \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438!")))},q=function(){var e=Object(a.useState)("home"),t=Object(p.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),o=Object(p.a)(l,2),i=o[0],d=o[1],f=Object(a.useState)(c.a.createElement(E.a,{size:"large"})),h=Object(p.a)(f,2),v=h[0],j=h[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),j(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var O=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(b.a,{activePanel:n,popout:v},c.a.createElement(U,{id:"home",fetchedUser:i,go:O}),c.a.createElement(_,{id:"persik",go:O}))};u.a.send("VKWebAppInit"),l.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.6bff2a04.chunk.js.map