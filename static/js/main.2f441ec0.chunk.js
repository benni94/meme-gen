(this["webpackJsonpmeme-gen"]=this["webpackJsonpmeme-gen"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c,o=n(0),i=n.n(o),a=n(32),r=n.n(a),s=(n(47),n(48),n.p+"static/media/Trollface.c371feba.png"),u=n(1),j=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{src:s,alt:"Problem?"})," ",Object(u.jsx)("p",{children:"Meme Generator"}),Object(u.jsx)("small",{children:" Beni \xa9"})]})},l=n(4),b=(n(50),n(35)),d=n.n(b),m=n(12),f=n(36),x=n.n(f),O=n(11),p=(n(51),Object(O.css)(c||(c=Object(m.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  box-shadow: rgb(255 255 255 / 20%) 0px 3px 29px 0px;\n"])))),h=function(e){var t=e.isLoading,n=Object(o.useState)(t),c=Object(l.a)(n,2),i=c[0],a=c[1];return Object(o.useEffect)((function(){a(t)}),[t]),Object(u.jsx)("div",{className:"sweet-loading",children:Object(u.jsx)(x.a,{color:"yellow",loading:i,css:p,size:100})})},g=n.p+"static/media/rand.0757221b.jpeg",v=n(37),y=(n(68),function(e){var t=e.getData,n=e.setData,c=Object(o.useState)([]),i=Object(l.a)(c,2),a=i[0],r=i[1];Object(o.useEffect)((function(){r(t)}),[t]);return Object(u.jsx)("div",{children:Object(u.jsx)(v.ReactSearchAutocomplete,{placeholder:"Search",items:a,onSelect:function(e){n(e)},onFocus:function(){},autoFocus:!0,formatResult:function(e){return e},styling:{lineColor:"#48EDDD",iconColor:"#48EDDD",borderRadius:"4px",boxShadow:"none",zIndex:"4",fontSize:"x-large",fontFamily:"VT323, monospace"}})})}),S=n(82),w=(n(69),document),D=function(e){var t,n=e.inputText,c=e.startPosition,i=Object(o.useState)(!1),a=Object(l.a)(i,2),r=a[0],s=a[1],j=Object(o.useState)({x:0,y:0}),b=Object(l.a)(j,2),d=b[0],m=b[1],f=Object(o.useRef)(),x=Object(o.useState)("Write..."),O=Object(l.a)(x,2),p=O[0],h=O[1],g=function(){var e=Object(o.useRef)(!1),t=w.documentElement,n=w.body;return[function(){if(n&&n.style&&!e.current&&void 0!==document){var c=window.innerWidth-t.clientWidth,o=parseInt(window.getComputedStyle(n).getPropertyValue("padding-right"))||0;t.style.position="relative",t.style.overflow="hidden",n.style.position="relative",n.style.overflow="hidden",n.style.paddingRight="".concat(o+c,"px"),e.current=!0}},function(){n&&n.style&&e.current&&(t.style.position="",t.style.overflow="",n.style.position="",n.style.overflow="",n.style.paddingRight="",e.current=!1)}]}(),v=Object(l.a)(g,2),y=v[0],S=v[1];Object(o.useEffect)((function(){var e=0,t=0;c.y>0&&(t=50,e=f.current.clientHeight),m({x:(c.x-f.current.clientWidth)/2,y:c.y+t-e})}),[c]),Object(o.useEffect)((function(){f.current&&(f.current.style.transform="translate(".concat(d.x,"px, ").concat(d.y,"px)"))}),[d]),Object(o.useEffect)((function(){h(n)}),[n]);var D=function(e){if(r)switch(void 0!==e.movementX){case!0:m({x:d.x+e.movementX,y:d.y+e.movementY});break;case!1:var n=e.touches[0];t&&(e.movementX=n.pageX-t.pageX,e.movementY=n.pageY-t.pageY,m({x:d.x+e.movementX,y:d.y+e.movementY})),t=n}};return Object(u.jsx)("div",{className:"inputTextHolder",ref:f,onTouchStart:function(){s(!0),y()},onTouchEnd:function(){s(!1),S()},onTouchMove:D,onMouseMove:D,onMouseDown:function(){return s(!0)},onMouseUp:function(){return s(!1)},onMouseLeave:function(){return s(!1)},children:Object(u.jsx)("h2",{className:"inputText",children:p})})},T=(n(70),function(e){var t=e.loadImg;return Object(u.jsx)("div",{className:"inputImgHolder",children:Object(u.jsxs)("label",{className:"custom-file-upload",children:[Object(u.jsx)("input",{type:"file",onChange:function(e){t(URL.createObjectURL(e.target.files[0]))}}),Object(u.jsx)("i",{className:"inputImg",style:{padding:"10px"}}),Object(u.jsx)("i",{children:"Custom Upload"})]})})}),E=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(""),a=Object(l.a)(i,2),r=a[0],s=a[1],j=Object(o.useState)(""),b=Object(l.a)(j,2),m=b[0],f=b[1],x=Object(o.useState)(!1),O=Object(l.a)(x,2),p=O[0],v=O[1],w=Object(o.useState)([]),E=Object(l.a)(w,2),C=E[0],R=E[1],M=Object(o.useState)(0),F=Object(l.a)(M,2),I=F[0],N=F[1],L=Object(o.useState)(0),B=Object(l.a)(L,2),P=B[0],X=B[1];Object(o.useEffect)((function(){v(!0),fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){var t;t=e.data.memes.map((function(e){return{box_count:e.box_count,height:e.height,id:Number(e.id),name:e.name,url:e.url,width:e.width}})),R(t),setTimeout((function(){v(!1)}),1e3)}))}),[]);return Object(u.jsxs)("div",{style:{marginLeft:"10px",marginRight:"10px"},children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(y,{getData:C,setData:function(e){f(e.url)}}),Object(u.jsx)("br",{}),Object(u.jsxs)("form",{className:"meme-form",onSubmit:function(e){e.preventDefault(),d.a.toJpeg(document.getElementById("memeForm"),{quality:1}).then((function(e){var t=document.createElement("a");t.download="beniMeme.jpeg",t.href=e,t.click()}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Top",value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"Bottom",value:r,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(S.a,{variant:"contained",type:"submit",children:"Download"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{ref:function(e){e&&(N(e.getBoundingClientRect().width),X(e.getBoundingClientRect().height-50))},className:"meme",id:"memeForm",children:[Object(u.jsx)(D,{inputText:n,startPosition:{x:I,y:0}}),Object(u.jsx)(D,{inputText:r,startPosition:{x:I,y:P}}),Object(u.jsx)("img",{src:""===m?g:m,alt:"Meme"}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{children:Object(u.jsx)(T,{loadImg:function(e){f(e)}})}),Object(u.jsx)("br",{}),Object(u.jsx)(h,{isLoading:p})]})},C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{style:{maxWidth:"700px",margin:"0 auto"},children:Object(u.jsx)(E,{})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),R()}},[[71,1,2]]]);
//# sourceMappingURL=main.2f441ec0.chunk.js.map