(this["webpackJsonpmeme-gen"]=this["webpackJsonpmeme-gen"]||[]).push([[0],{111:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},196:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var c,o=n(0),a=n.n(o),i=n(37),r=n.n(i),s=(n(169),n(170),n.p+"static/media/Trollface.c371feba.png"),u=n(1),j=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{src:s,alt:"Problem?"}),Object(u.jsx)("p",{children:"Meme Generator"}),Object(u.jsx)("small",{children:" Beni \xa9"})]})},l=(n(172),function(){return Object(u.jsx)("div",{className:"footerHolder"})}),b=n(9),f=(n(173),n(142)),d=n.n(f),O=n(43),x=n(143),m=n.n(x),g=n(26),p=(n(174),Object(g.css)(c||(c=Object(O.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  box-shadow: rgb(255 255 255 / 20%) 0px 3px 29px 0px;\n"])))),h=function(e){var t=e.isLoading,n=Object(o.useState)(t),c=Object(b.a)(n,2),a=c[0],i=c[1];return Object(o.useEffect)((function(){i(t)}),[t]),Object(u.jsx)("div",{className:"sweet-loading",children:Object(u.jsx)(m.a,{color:"#FBD000",loading:a,css:p,size:50})})},v=n.p+"static/media/rand.0757221b.jpeg",y=n(144),S=(n(191),function(e){var t=e.getData,n=e.setData,c=Object(o.useState)([]),a=Object(b.a)(c,2),i=a[0],r=a[1];Object(o.useEffect)((function(){r(t)}),[t]);return Object(u.jsx)("div",{children:Object(u.jsx)(y.ReactSearchAutocomplete,{placeholder:"Search",items:i,onSelect:function(e){n(e)},autoFocus:!0,formatResult:function(e){return e},styling:{lineColor:"#48EDDD",iconColor:"#48EDDD",borderRadius:"4px",boxShadow:"none",zIndex:"4",fontSize:"x-large",fontFamily:"VT323, monospace"}})})}),w=n(348),C=(n(192),document),D=function(){var e=Object(o.useRef)(!1),t=C.documentElement,n=C.body;return[function(){if(n&&n.style&&!e.current&&void 0!==document){var c=window.innerWidth-t.clientWidth,o=parseInt(window.getComputedStyle(n).getPropertyValue("padding-right"))||0;t.style.position="relative",t.style.overflow="hidden",n.style.position="relative",n.style.overflow="hidden",n.style.paddingRight="".concat(o+c,"px"),e.current=!0}},function(){n&&n.style&&e.current&&(t.style.position="",t.style.overflow="",n.style.position="",n.style.overflow="",n.style.paddingRight="",e.current=!1)}]},E=function(e){var t,n=e.inputText,c=e.startPosition,a=e.getFontSize,i=Object(o.useState)(!1),r=Object(b.a)(i,2),s=r[0],j=r[1],l=Object(o.useState)({x:0,y:0}),f=Object(b.a)(l,2),d=f[0],O=f[1],x=Object(o.useRef)(),m=Object(o.useState)("Write..."),g=Object(b.a)(m,2),p=g[0],h=g[1],v=Object(o.useState)("2"),y=Object(b.a)(v,2),S=y[0],w=y[1],C=D(),E=Object(b.a)(C,2),N=E[0],T=E[1],M=Object(o.useState)(0),Y=Object(b.a)(M,2),F=Y[0],R=Y[1];Object(o.useEffect)((function(){R(c.x),w(F<400&&0!==F?(Number(a)/1.5).toString():a);var e=0,t=0;c.y>0&&(t=50,e=x.current.clientHeight),O({x:(c.x-x.current.clientWidth)/2,y:c.y+t-e})}),[c]),Object(o.useEffect)((function(){x.current&&(x.current.style.transform="translate(".concat(d.x,"px, ").concat(d.y,"px)"))}),[d]),Object(o.useEffect)((function(){h(n)}),[n]);var k=function(e){if(s)switch(void 0!==e.movementX){case!0:O({x:d.x+e.movementX,y:d.y+e.movementY});break;case!1:var n=e.touches[0];t&&(e.movementX=n.pageX-t.pageX,e.movementY=n.pageY-t.pageY,O({x:d.x+e.movementX,y:d.y+e.movementY})),t=n}};return Object(u.jsx)("div",{className:"inputTextHolder",ref:x,onTouchStart:function(){j(!0),N()},onTouchEnd:function(){j(!1),T()},onTouchMove:k,onMouseMove:k,onMouseDown:function(){return j(!0)},onMouseUp:function(){return j(!1)},onMouseLeave:function(){return j(!1)},children:Object(u.jsx)("h2",{className:"inputText",style:{fontSize:S+"em"},children:p})})},N=(n(111),function(e){var t=e.getX,n=e.getY,c=e.offsetY,a=e.getColor,i=Object(o.useState)(0),r=Object(b.a)(i,2),s=r[0],j=r[1],l=Object(o.useState)(0),f=Object(b.a)(l,2),d=f[0],O=f[1],x=Object(o.useState)("#000000"),m=Object(b.a)(x,2),g=m[0],p=m[1];Object(o.useEffect)((function(){O(t)}),[t]),Object(o.useEffect)((function(){j(n)}),[n]),Object(o.useEffect)((function(){"number"===typeof c&&(s>=-30||c>=0)&&(j(s+c),c+s<0&&j(0))}),[c]),Object(o.useEffect)((function(){p(a)}),[a]);var h={width:"".concat(d,"px"),height:"".concat(s,"px"),backgroundColor:g};return Object(u.jsx)("div",{className:"UpDownHolder",style:h})}),T=n(148),M=n.n(T),Y=n(147),F=n.n(Y),R=function(e){var t,n=e.arrowDrive,c=D(),a=Object(b.a)(c,2),i=a[0],r=a[1],s=Object(o.useState)(!1),j=Object(b.a)(s,2),l=j[0],f=j[1],d=function(e){if(l)switch(void 0!==e.movementX){case!0:n(e.movementY/1.5);break;case!1:var c=e.touches[0];t&&(e.movementY=c.pageY-t.pageY,n(e.movementY)),t=c}};return Object(u.jsx)("div",{onTouchStart:function(){f(!0),i()},onTouchEnd:function(){f(!1),r()},onTouchMove:d,onMouseMove:d,onMouseDown:function(){return f(!0)},onMouseUp:function(){return f(!1)},onMouseLeave:function(){return f(!1)},className:"UpDownArrowHolder",children:Object(u.jsxs)("button",{className:"UpDownArrow",children:[Object(u.jsx)(F.a,{}),Object(u.jsx)(M.a,{})]})})},k=(n(193),function(e){var t=e.loadImg;return Object(u.jsx)("div",{className:"inputImgHolder",children:Object(u.jsxs)("label",{className:"custom-file-upload",children:[Object(u.jsx)("input",{type:"file",onChange:function(e){t(URL.createObjectURL(e.target.files[0]))}}),Object(u.jsx)("i",{className:"inputImg"}),Object(u.jsx)("i",{className:"inputText",children:"Custom Upload"})]})})}),I=n(347),L=n(345),X=n(342),z=n(344),H=(n(194),function(e){var t=e.getLabel,n=e.getContent,c=e.setSelect,i=a.a.useState(""),r=Object(b.a)(i,2),s=r[0],j=r[1],l=a.a.useState([{}]),f=Object(b.a)(l,2),d=f[0],O=f[1],x=function(e){j(e.target.value),c(e)};Object(o.useEffect)((function(){if(O(n),void 0!==d[0].value&&0===s.length){j(d[1].value.toString());var e={target:d[1]};x(e)}}),[n]);var m={fontFamily:"VT323, monospace"};return Object(u.jsx)("div",{className:"SelectHolder",children:Object(u.jsxs)(I.a,{fullWidth:!0,variant:"outlined",children:[Object(u.jsx)(L.a,{style:m,children:t}),Object(u.jsx)(X.a,{style:m,labelId:"selector",id:"selector",value:s,label:t,onChange:x,children:d.map((function(e,t){return Object(u.jsx)(z.a,{style:m,value:e.value,children:e.content},t)}))})]})})}),B=function(e){var t=e.setSelect;return Object(u.jsx)("div",{children:Object(u.jsx)(H,{setSelect:t,getLabel:"Font Size",getContent:[{value:1,content:"small"},{value:2,content:"medium"},{value:3,content:"large"}]})})},U=(n(196),n(4)),P=n.n(U),W=n(153),A=function(e){var t=e.changeColorHex,n=Object(o.useState)(!1),c=Object(b.a)(n,2),a=c[0],i=c[1],r=Object(o.useState)({r:"0",g:"0",b:"0",a:"1"}),s=Object(b.a)(r,2),j=s[0],l=s[1],f=P()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:"rgba(".concat(j.r,", ").concat(j.g,", ").concat(j.b,", ").concat(j.a,")")},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:f.swatch,onClick:function(){i(!a)},children:Object(u.jsx)("div",{style:f.color})}),a?Object(u.jsxs)("div",{style:f.popover,children:[Object(u.jsx)("div",{style:f.cover,onClick:function(){i(!1)}}),Object(u.jsx)(W.a,{color:j,onChange:function(e){l(e.rgb),t(e.hex)}})]}):null]})},J=function(){var e=Object(o.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),i=Object(b.a)(a,2),r=i[0],s=i[1],j=Object(o.useState)(""),l=Object(b.a)(j,2),f=l[0],O=l[1],x=Object(o.useState)(!1),m=Object(b.a)(x,2),g=m[0],p=m[1],y=Object(o.useState)([]),C=Object(b.a)(y,2),D=C[0],T=C[1],M=Object(o.useState)(0),Y=Object(b.a)(M,2),F=Y[0],I=Y[1],L=Object(o.useState)(0),X=Object(b.a)(L,2),z=X[0],H=X[1],U=Object(o.useState)(0),P=Object(b.a)(U,2),W=P[0],J=P[1],V=Object(o.useState)("1"),_=Object(b.a)(V,2),q=_[0],G=_[1],K=Object(o.useState)("#000000"),Q=Object(b.a)(K,2),Z=Q[0],$=Q[1];Object(o.useEffect)((function(){p(!0),fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){var t;t=e.data.memes.map((function(e){return{box_count:e.box_count,height:e.height,id:Number(e.id),name:e.name,url:e.url,width:e.width}})),T(t),setTimeout((function(){p(!1)}),1e3)}))}),[]),Object(o.useEffect)((function(){return function(){return clearInterval()}}));return Object(u.jsxs)("div",{style:{marginLeft:"10px",marginRight:"10px"},children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(S,{getData:D,setData:function(e){O(e.url)}}),Object(u.jsx)("br",{}),Object(u.jsxs)("form",{className:"meme-form",onSubmit:function(e){e.preventDefault(),d.a.toJpeg(document.getElementById("memeForm"),{quality:1}).then((function(e){var t=document.createElement("a");t.download="beniMeme.jpeg",t.href=e,t.click()}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Top",value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"Bottom",value:r,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(w.a,{variant:"contained",type:"submit",children:"Download"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(B,{setSelect:function(e){return function(e){G(e.target.value.toString())}(e)}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(A,{changeColorHex:function(e){$(e)}}),Object(u.jsxs)("div",{ref:function(e){!function(e){e&&setInterval((function(){I(e.getBoundingClientRect().width),H(e.getBoundingClientRect().height-50)}),400)}(e)},className:"meme",id:"memeForm",children:[Object(u.jsx)(E,{getFontSize:q,inputText:n,startPosition:{x:F,y:0}}),Object(u.jsx)(E,{getFontSize:q,inputText:r,startPosition:{x:F,y:z}}),Object(u.jsx)(N,{getX:Number(F),getY:0,offsetY:Number(W),getColor:Z}),Object(u.jsx)("img",{style:{display:"block"},src:""===f?v:f,alt:"Meme"}),Object(u.jsx)(N,{getX:Number(F),getY:0,offsetY:Number(W),getColor:Z.toString()})]}),Object(u.jsx)(R,{arrowDrive:function(e){J(e)}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(k,{loadImg:function(e){O(e)}}),Object(u.jsx)(h,{isLoading:g})]})},V=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{style:{maxWidth:"700px",margin:"0 auto"},children:Object(u.jsx)(J,{})}),Object(u.jsx)("div",{style:{marginTop:"30px"},children:Object(u.jsx)(l,{})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,349)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),_()}},[[303,1,2]]]);
//# sourceMappingURL=main.44d448dc.chunk.js.map