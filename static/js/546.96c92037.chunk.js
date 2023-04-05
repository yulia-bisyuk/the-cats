"use strict";(self.webpackChunkthe_cats=self.webpackChunkthe_cats||[]).push([[546],{2513:function(n,e,t){t.d(e,{Z:function(){return T}});var i,r,o,s,a,l,c,u=t(2982),d=t(885),h=t(2791),p=t(6871),x=t(1872),f=t(8610),g=t(7972),m=t(168),j=t(6031),Z=j.ZP.button(i||(i=(0,m.Z)(["\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: white;\n  cursor: pointer;\n"]))),w=t(9348),b=t(3329),v=function(n){var e=n.onClick,t=(0,h.useState)(!1),i=(0,d.Z)(t,2),r=i[0],o=i[1];return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(Z,{onClick:e,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:r?(0,b.jsx)("svg",{width:"20",height:"20",children:(0,b.jsx)("use",{href:w.Z+"#icon-fav-20"})}):(0,b.jsx)("svg",{width:"20",height:"20",children:(0,b.jsx)("use",{href:w.Z+"#icon-fav-color-20"})})})})},y=t(1092),k=function(n){var e=n.breed,t=(0,p.s0)();return(0,b.jsx)(y.gO,{onClick:function(){t("/info"),localStorage.setItem("selectedBreed",JSON.stringify(e))},children:e.name})},C=function(n){return 3===n||8===n||13===n||18===n?"span 2":null},P=function(n){return 0===n||3===n||7===n||8===n||10===n||13===n||17===n||18===n?"span 2":null},S=j.ZP.ul(r||(r=(0,m.Z)(["\n  height: fit-content;\n\n  padding-left: 0px;\n  margin-top: 0px;\n\n  @media (min-width: 768px) {\n    display: grid;\n    grid-template-columns: repeat(3, 210px);\n    grid-auto-rows: 140px;\n    gap: 20px;\n  }\n  @media (min-width: 1440px) {\n    grid-template-columns: repeat(3, 200px);\n  }\n"]))),N=j.ZP.li(o||(o=(0,m.Z)(["\n  height: 206px;\n  margin-top: 10px;\n  list-style-type: none;\n  position: relative;\n\n  @media (min-width: 768px) {\n    height: auto;\n    margin-top: 0;\n  }\n"]))),F=j.ZP.img(s||(s=(0,m.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  object-fit: cover;\n"]))),z=j.ZP.div(a||(a=(0,m.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  background-color: rgba(255, 134, 142, 0.6);\n  transform: translateY(100%);\n  opacity: 0;\n"]))),A=j.ZP.div(l||(l=(0,m.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 60px;\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.lightGreyBgColor})),D=j.ZP.span(c||(c=(0,m.Z)(["\n  margin-left: 20px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.lightGrayTxtColor})),T=function(n){var e=n.items,t=(0,p.TH)(),i=(0,f.yd)(),r=(0,d.Z)(i,1)[0],o=(0,f.X)(),s=(0,d.Z)(o,1)[0],a=(0,h.useState)(!1),l=(0,d.Z)(a,2),c=l[0],m=l[1],j=(0,h.useState)(null),Z=(0,d.Z)(j,2),w=Z[0],y=Z[1],T=(0,h.useState)(JSON.parse(window.localStorage.getItem("removeLogs"))||[]),E=(0,d.Z)(T,2),G=E[0],L=E[1],K=(0,x.Z)("(min-width: 768px)");return(0,h.useEffect)((function(){window.localStorage.setItem("removeLogs",JSON.stringify(G)),G.length>20&&window.localStorage.clear()}),[G]),(0,b.jsxs)(b.Fragment,{children:[e&&0===e.length?(0,b.jsx)(A,{children:(0,b.jsx)(D,{children:"No items found"})}):(0,b.jsx)(S,{children:e&&e.map((function(n,e){return(0,b.jsxs)(N,{style:{gridColumn:K?C(e):null,gridRow:K?P(e):null},children:[(0,b.jsx)(F,{src:n.url||n.image.url,alt:"cat",onMouseOver:function(){m(!0),y(n.id)}}),c&&w===n.id&&"/likes"!==t.pathname&&"/dislikes"!==t.pathname&&(0,b.jsxs)(z,{style:{opacity:"1",transform:"translateY(0)"},children:["/favourites"===t.pathname&&(0,b.jsx)(v,{onClick:function(){r(w),function(n,e){var t=(new Date).toTimeString().slice(0,5);L((function(i){return[].concat((0,u.Z)(i),[{imageId:n,type:e,time:t}])}))}(n.image.id,"Favourites")}}),"/gallery"===t.pathname&&(0,b.jsx)(v,{onClick:function(){s({image_id:w,sub_id:"user"})}}),("/breeds-search-by-name"===t.pathname||"/breeds"===t.pathname)&&(0,b.jsx)(k,{breed:n.breeds[0]})]})]},e)}))}),G!==[]&&"/favourites"===t.pathname&&(0,b.jsx)(g.Y,{activities:G,text:"was removed from"})]})}},7972:function(n,e,t){t.d(e,{Y:function(){return Z}});var i,r,o,s,a,l,c=t(9348),u=t(168),d=t(6031),h=d.ZP.ul(i||(i=(0,u.Z)(["\n  margin-top: 52px;\n  list-style-type: none;\n  padding-left: 0px;\n"]))),p=d.ZP.li(r||(r=(0,u.Z)(["\n  padding: 15px;\n  display: flex;\n  align-items: flex-start;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  background-color: ",";\n  border-radius: 10px;\n\n  @media (min-width: 768px) {\n    align-items: center;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 18px 25px;\n  }\n"])),(function(n){return n.theme.lightGreyBgColor})),x=d.ZP.span(o||(o=(0,u.Z)(["\n  margin-right: 20px;\n  padding: 3px 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  background-color: white;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),f=d.ZP.span(s||(s=(0,u.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.lightGrayTxtColor})),g=d.ZP.span(a||(a=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),m=d.ZP.svg(l||(l=(0,u.Z)(["\n  margin-left: 5px;\n  @media (min-width: 768px) {\n    margin-left: auto;\n  }\n"]))),j=t(3329),Z=function(n){var e=n.activities,t=n.text,i=function(n){var e;switch(n){case"Likes":e="#icon-like-color-30";break;case"Favourites":e="#icon-Vector-348-Stroke";break;case"Dislike":e="#icon-dislike-color-30";break;default:e=null}return e};return(0,j.jsx)(h,{children:e.map((function(n,e){return(0,j.jsxs)(p,{children:[(0,j.jsx)(x,{children:n.time})," ",(0,j.jsxs)(f,{children:["Image ID: ",(0,j.jsx)(g,{children:n.imageId})," ",t," ",n.type]}),(0,j.jsx)(m,{width:"20",height:"20",children:(0,j.jsx)("use",{href:c.Z+i(n.type)})})]},e)})).reverse()})}},1092:function(n,e,t){t.d(e,{Kz:function(){return j},ao:function(){return x},g:function(){return p},gO:function(){return h},iL:function(){return m},mg:function(){return g},n2:function(){return f}});var i,r,o,s,a,l,c,u=t(168),d=t(6031),h=d.ZP.button(i||(i=(0,u.Z)(["\n  width: 180px;\n  height: 34px;\n  margin-bottom: 10px;\n  margin-top: auto;\n  background-color: white;\n  border-color: transparent;\n  border-radius: 10px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: center;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.pink})),p=d.ZP.div(r||(r=(0,u.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),x=d.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  @media (min-width: 768px) {\n    display: contents;\n  }\n"]))),f=d.ZP.div(s||(s=(0,u.Z)(["\n  position: relative;\n"]))),g=d.ZP.select(a||(a=(0,u.Z)(["\n  appearance: none;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 10px;\n  padding-left: 14px;\n  border-color: transparent;\n  border-radius: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  &:focus,\n  &:active {\n    border-color: transparent;\n    outline: none;\n  }\n\n  &:hover {\n    box-shadow: 0px 0px 0px 2px "," inset;\n  }\n\n  @media (min-width: 768px) {\n    width: 226px;\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.lightGreyBgColor}),(function(n){return n.theme.lightGrayTxtColor}),(function(n){return n.theme.lightPink})),m=d.ZP.select(l||(l=(0,u.Z)(["\n  appearance: none;\n  width: 195px;\n  height: 40px;\n  padding-left: 14px;\n  border-color: transparent;\n  border-radius: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  &:focus,\n  &:active {\n    border-color: transparent;\n    outline: none;\n  }\n  &:hover {\n    box-shadow: 0px 0px 0px 2px "," inset;\n  }\n\n  @media (min-width: 768px) {\n    width: 101px;\n  }\n"])),(function(n){return n.theme.lightGreyBgColor}),(function(n){return n.theme.lightGrayTxtColor}),(function(n){return n.theme.lightPink})),j=d.ZP.button(c||(c=(0,u.Z)(["\n  width: 40px;\n  height: 40px;\n  border-color: transparent;\n  border-radius: 10px;\n  background-color: ",";\n  cursor: pointer;\n  svg {\n    fill: ",";\n  }\n\n  &:hover {\n    border: 2px solid ",";\n\n    svg {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.lightGreyBgColor}),(function(n){return n.theme.lightGrayTxtColor}),(function(n){return n.theme.lightPink}),(function(n){return n.theme.pink}))},4546:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var i=t(2982),r=t(885),o=t(2791),s=t(8610),a=t(5610),l=t(2513),c=t(4164),u=t(4569),d=t.n(u),h=t(2165),p=t(2299),x=t.n(p),f=t(9348),g=t(3329),m=function(n){var e=n.onClose;(0,o.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),d().defaults.headers["x-api-key"]="0b7504df-17ed-43ae-9368-17c81ca0668c";var t=document.querySelector("#modal-root"),i=(0,o.useState)(null),s=(0,r.Z)(i,2),a=s[0],l=s[1],u=(0,o.useState)(!1),p=(0,r.Z)(u,2),m=p[0],j=p[1],Z=(0,o.useState)(!1),w=(0,r.Z)(Z,2),b=w[0],v=w[1],y=(0,o.useState)(!1),k=(0,r.Z)(y,2),C=k[0],P=k[1];return(0,c.createPortal)((0,g.jsx)(h.aV,{onClick:function(n){return e(n)},children:(0,g.jsxs)(h.F0,{children:[(0,g.jsx)(h.ol,{onClick:function(n){return e(n)},children:(0,g.jsx)("svg",{onClick:function(n){return e(n)},width:"20",height:"20",children:(0,g.jsx)("use",{href:f.Z+"#icon-close-no-fill-20"})})}),(0,g.jsx)(h.r6,{children:"Upload a .jpg or .png Cat Image"}),(0,g.jsxs)(h.vT,{children:["Any uploads must comply with the"," ",(0,g.jsx)(h.Be,{href:"https://thecatapi.com/privacy",children:"upload guidelines"})," ","or face deletion."]}),(0,g.jsxs)(h.mo,{id:"drop_zone",onDrop:function(n){n.preventDefault(),l(n.dataTransfer.files[0])},onDragOver:function(n){n.preventDefault()},children:[(0,g.jsxs)(h.zZ,{children:[(0,g.jsx)(h.bz,{children:"Drag here"})," your file or"," ",(0,g.jsx)(h.Nq,{type:"file",id:"file",accept:".png, .jpg, .jpeg, .gif",onChange:function(n){return l(n.target.files[0])}}),(0,g.jsx)(h.Wz,{htmlFor:"file",children:"Click here "}),"to upload"]}),a&&(0,g.jsx)(h.Ee,{alt:"cat",src:URL.createObjectURL(a)})]}),a?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(h.zZ,{className:"file",children:["Image File Name: ",a.name]}),(0,g.jsx)(h.pF,{type:"button",onClick:function(){P(!0),d().post("https://api.thecatapi.com/v1/images/upload",{file:a,sub_id:"user"},{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){201===n.status&&(P(!1),v(!1),j(!0),l(null))})).catch((function(n){console.log(n),P(!1),v(!0),j(!1),l(null)}))},children:C?(0,g.jsx)(x(),{color:"white",size:"16px"}):"upload foto"})]}):(0,g.jsx)(h.zZ,{className:"file",children:"No file selected"}),b&&(0,g.jsxs)(h.P_,{children:[(0,g.jsx)("svg",{width:"20",height:"20",children:(0,g.jsx)("use",{href:f.Z+"#icon-error-20"})}),(0,g.jsx)(h.UX,{children:"No Cat found - try a different one"})]}),m&&(0,g.jsxs)(h.P_,{children:[(0,g.jsx)("svg",{width:"20",height:"20",children:(0,g.jsx)("use",{href:f.Z+"#icon-success-20"})}),(0,g.jsx)(h.UX,{children:"Thanks for the Upload - Cat found!"})]})]})}),t)},j=t(6963),Z=t(122),w=t(3515),b=[{value:"RANDOM",name:"Random"},{value:"DESC",name:"Desc"},{value:"ASC",name:"Asc"}],v=["All","Static","Animated"],y=[5,10,15,20],k=function(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],c=e[1],u=(0,o.useState)("RANDOM"),d=(0,r.Z)(u,2),h=d[0],p=d[1],k=(0,o.useState)("All"),C=(0,r.Z)(k,2),P=C[0],S=C[1],N=(0,o.useState)("none"),F=(0,r.Z)(N,2),z=F[0],A=F[1],D=(0,o.useState)(5),T=(0,r.Z)(D,2),E=T[0],G=T[1],L=(0,o.useState)([]),K=(0,r.Z)(L,2),O=K[0],_=K[1],B=(0,o.useState)(!1),I=(0,r.Z)(B,2),M=I[0],R=I[1],W=(0,s.xp)(),U=W.data,Y=W.isSuccess,J=W.isLoading,V=W.isFetching,X=(0,s.NJ)({id:z,limit:E,order:h},{skip:"none"===z}),q=X.data,H=X.isSuccess,Q=X.isLoading,$=X.isFetching,nn=(0,s.VN)({order:h,limit:E},{skip:"none"!==z}),en=nn.data,tn=nn.isSuccess,rn=nn.isLoading,on=nn.isFetching,sn=(0,s.bZ)(),an=sn.data,ln=sn.isSuccess,cn=function(n,e){if(n)return n.filter((function(n){return n.url.endsWith(e)}))};return(0,o.useEffect)((function(){tn&&"All"===P?_(en):"Static"===P?_(cn(en,"jpg")):"Animated"===P&&_(cn(en,"gif"))}),[P,tn,en]),(0,o.useEffect)((function(){H&&"none"!==z&&"All"===P?_(q):"none"!==z&&"Static"===P?_(cn(q,"jpg")):"none"!==z&&"Animated"===P&&_([]||0)}),[q,H,z,P,E]),(0,o.useEffect)((function(){ln&&0!==an.length&&tn&&_((function(n){return[].concat((0,i.Z)(an),(0,i.Z)(n.slice(0,-1)))}))}),[ln,an,tn]),(0,o.useEffect)((function(){U!==[]&&Y&&c([{id:"none",name:"None"}].concat(U.map((function(n){return{id:n.id,name:n.name}}))))}),[U,Y]),(0,g.jsxs)(j.eT,{children:[(0,g.jsx)(a.Z,{}),(0,g.jsxs)(j.HY,{children:[(0,g.jsxs)(w.im,{children:[(0,g.jsx)(Z.Z,{text:"gallery"}),(0,g.jsxs)(w.pF,{onClick:function(){return R(!0)},children:[(0,g.jsx)("svg",{width:"16",height:"16",style:{marginRight:"10px"},children:(0,g.jsx)("use",{href:f.Z+"#icon-upload-no-fill-16"})}),"upload"]})]}),M&&(0,g.jsx)(m,{onClose:function(n){n.target!==n.currentTarget&&"Escape"!==n.code||R(!1)}}),(0,g.jsxs)(w._y,{children:[(0,g.jsxs)(w.Wx,{children:[(0,g.jsx)(w.Ar,{htmlFor:"orders",children:"Order"}),(0,g.jsxs)(w.KD,{children:[(0,g.jsx)(w.ZN,{onChange:function(n){return p(n.target.value)},id:"orders",children:b.map((function(n,e){return(0,g.jsx)("option",{value:n.value,children:n.name},e)}))}),(0,g.jsx)(w.K,{width:"12",height:"12",children:(0,g.jsx)("use",{href:f.Z+"#icon-dropdown-12"})})]})]}),(0,g.jsxs)(w.Wx,{children:[(0,g.jsx)(w.Ar,{htmlFor:"types",children:"Type"}),(0,g.jsxs)(w.KD,{children:[(0,g.jsx)(w.ZN,{onChange:function(n){return S(n.target.value)},id:"types",children:v.map((function(n,e){return(0,g.jsx)("option",{value:n,children:n},e)}))}),(0,g.jsx)(w.K,{width:"12",height:"12",children:(0,g.jsx)("use",{href:f.Z+"#icon-dropdown-12"})})]})]}),(0,g.jsxs)(w.Wx,{children:[(0,g.jsx)(w.Ar,{htmlFor:"breeds",children:"Breed"}),(0,g.jsxs)(w.KD,{children:[(0,g.jsx)(w.ZN,{onChange:function(n){return A(n.target.value)},id:"breeds",children:t.map((function(n){return(0,g.jsx)("option",{value:n.id,label:n.name,children:n.name},n.id)}))}),(0,g.jsx)(w.K,{width:"12",height:"12",children:(0,g.jsx)("use",{href:f.Z+"#icon-dropdown-12"})})]})]}),(0,g.jsxs)(w.Wx,{children:[(0,g.jsx)(w.Ar,{htmlFor:"limits",children:"Limit"}),(0,g.jsxs)(w.Mb,{children:[(0,g.jsxs)(w.KD,{className:"limit",children:[(0,g.jsx)(w.ZN,{onChange:function(n){return G(n.target.value)},id:"limits",children:y.map((function(n,e){return(0,g.jsxs)("option",{value:n,children:[n," items per page"]},e)}))}),(0,g.jsx)(w.K,{width:"12",height:"12",children:(0,g.jsx)("use",{href:f.Z+"#icon-dropdown-12"})})]}),(0,g.jsx)(w.Nm,{onClick:function(){return window.location.reload(!1)},children:(0,g.jsx)("svg",{width:"17",height:"20",children:(0,g.jsx)("use",{href:f.Z+"#icon-update-20"})})})]})]})]}),J||rn||V||on||Q||$?(0,g.jsx)(j.sb,{children:(0,g.jsx)(x(),{color:"#FF868E",size:"100px"})}):(0,g.jsx)(l.Z,{items:O})]})]})}},3515:function(n,e,t){t.d(e,{Ar:function(){return j},K:function(){return y},KD:function(){return v},Mb:function(){return Z},Nm:function(){return k},Wx:function(){return w},ZN:function(){return b},_y:function(){return m},im:function(){return f},pF:function(){return g}});var i,r,o,s,a,l,c,u,d,h,p=t(168),x=t(6031),f=x.ZP.div(i||(i=(0,p.Z)(["\n  display: contents;\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n"]))),g=x.ZP.button(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: ",";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.3;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: ",";\n  cursor: pointer;\n  svg {\n    fill: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    svg {\n      fill: white;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 143px;\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.lightPink}),(function(n){return n.theme.pink}),(function(n){return n.theme.pink}),(function(n){return n.theme.pink})),m=x.ZP.section(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  background-color: ",";\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 10px 20px;\n  }\n"])),(function(n){return n.theme.lightGreyBgColor})),j=x.ZP.label(s||(s=(0,p.Z)(["\n  display: block;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 1.8;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.lightGrayTxtColor})),Z=x.ZP.div(a||(a=(0,p.Z)(["\n  display: contents;\n  @media (min-width: 768px) {\n    display: flex;\n  }\n"]))),w=x.ZP.div(l||(l=(0,p.Z)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 290px;\n  }\n"]))),b=x.ZP.select(c||(c=(0,p.Z)(["\n  appearance: none;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n"])),(function(n){return n.theme.lightGrayTxtColor})),v=x.ZP.div(u||(u=(0,p.Z)(["\n  position: relative;\n\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 8px 10px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n  cursor: pointer;\n  background-color: white;\n\n  &:hover {\n    box-shadow: 0px 0px 0px 2px "," inset;\n  }\n\n  &.limit {\n    width: 100%;\n    @media (min-width: 768px) {\n      width: 240px;\n    }\n  }\n"])),(function(n){return n.theme.titleColor}),(function(n){return n.theme.lightPink})),y=x.ZP.svg(d||(d=(0,p.Z)(["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n"]))),k=x.ZP.button(h||(h=(0,p.Z)(["\n  width: 100%;\n  height: 40px;\n\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: white;\n  cursor: pointer;\n  svg {\n    fill: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    svg {\n      fill: white;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 40px;\n    margin-left: 10px;\n  }\n"])),(function(n){return n.theme.pink}),(function(n){return n.theme.pink}))}}]);
//# sourceMappingURL=546.96c92037.chunk.js.map