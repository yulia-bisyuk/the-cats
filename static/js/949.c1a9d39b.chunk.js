"use strict";(self.webpackChunkthe_cats=self.webpackChunkthe_cats||[]).push([[949],{7634:function(n,e,t){t.d(e,{Z:function(){return F}});var r,i,o,a,s,c,l=t(2982),u=t(885),h=t(2791),d=t(8610),p=t(7972),g=t(7333),f=t(9348),x=t(3329),m=function(n){var e=n.onClick;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(g.y,{onClick:e,children:(0,x.jsx)("svg",{width:"20",height:"20",children:(0,x.jsx)("use",{href:f.Z+"#icon-fav-color-20"})})})})},b=t(6871),Z=t(1092),w=function(n){var e=n.breed,t=n.images,r=(0,b.s0)();return console.log("breed",e),console.log("images",t),(0,x.jsx)(Z.gO,{onClick:function(){r("/info"),localStorage.setItem("selectedBreed",JSON.stringify(e)),localStorage.setItem("selectedBreedImages",JSON.stringify(t))},children:e.name})},j=function(n){var e;switch(n){case 0:case 1:case 2:case 4:case 5:case 6:case 7:case 9:case 10:case 11:case 12:case 14:case 15:case 16:case 17:case 19:default:e=null;break;case 3:case 8:case 13:case 18:e="span 2"}return e},v=function(n){var e;switch(n){case 0:case 3:case 7:case 8:case 10:case 13:case 17:case 18:e="span 2";break;default:e=null}return e},k=t(168),y=t(1242),C=y.ZP.ul(r||(r=(0,k.Z)(["\n  height: fit-content;\n  display: grid;\n  grid-template-columns: repeat(3, 200px);\n  grid-auto-rows: 140px;\n  gap: 20px;\n  padding-left: 0px;\n  margin-top: 0px;\n"]))),P=y.ZP.li(i||(i=(0,k.Z)(["\n  list-style-type: none;\n  position: relative;\n"]))),S=y.ZP.img(o||(o=(0,k.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  object-fit: cover;\n"]))),z=y.ZP.div(a||(a=(0,k.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  background-color: rgba(255, 134, 142, 0.6);\n  transform: translateY(100%);\n  opacity: 0;\n"]))),I=y.ZP.div(s||(s=(0,k.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 60px;\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.lightGreyBgColor})),O=y.ZP.span(c||(c=(0,k.Z)(["\n  margin-left: 20px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.lightGrayTxtColor})),F=function(n){var e=n.items,t=(0,b.TH)(),r=(0,d.yd)(),i=(0,u.Z)(r,1)[0],o=(0,h.useState)(!1),a=(0,u.Z)(o,2),s=a[0],c=a[1],g=(0,h.useState)(null),f=(0,u.Z)(g,2),Z=f[0],k=f[1],y=(0,h.useState)(JSON.parse(window.localStorage.getItem("removeLogs"))||[]),F=(0,u.Z)(y,2),T=F[0],N=F[1];return(0,h.useEffect)((function(){window.localStorage.setItem("removeLogs",JSON.stringify(T)),T.length>20&&window.localStorage.clear()}),[T]),(0,x.jsxs)(x.Fragment,{children:[e&&0===e.length?(0,x.jsx)(I,{children:(0,x.jsx)(O,{children:"No items found"})}):(0,x.jsx)(C,{children:e&&e.map((function(n,r){return(0,x.jsxs)(P,{style:{gridColumn:j(r),gridRow:v(r)},children:[(0,x.jsx)(S,{src:n.url||n.image.url,alt:"cat",onMouseOver:function(){c(!0),k(n.id)}}),s&&Z===n.id&&"/likes"!==t.pathname&&"/dislikes"!==t.pathname&&(0,x.jsxs)(z,{style:{opacity:"1",transform:"translateY(0)"},children:["/favourites"===t.pathname&&(0,x.jsx)(m,{onClick:function(){i(Z),function(n,e){var t=(new Date).toTimeString().slice(0,5);N((function(r){return[].concat((0,l.Z)(r),[{imageId:n,type:e,time:t}])}))}(n.image.id,"Favourites")}}),("/breeds-search-by-name"===t.pathname||"/breeds"===t.pathname)&&(0,x.jsx)(w,{breed:n.breeds[0],images:e})]})]},r)}))}),T!==[]&&"/favourites"===t.pathname&&(0,x.jsx)(p.Y,{activities:T,text:"was removed from"})]})}},122:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i,o,a=t(168),s=t(1242),c=s.ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),l=s.ZP.button(i||(i=(0,a.Z)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: ",";\n"])),(function(n){return n.theme.lightPink})),u=s.ZP.button(o||(o=(0,a.Z)(["\n  padding: 3px 28px;\n  border-radius: 10px;\n  border-color: transparent;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.5;\n  text-align: center;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: white;\n  background-color: ",";\n"])),(function(n){return n.theme.pink})),h=t(9348),d=t(3329),p=function(n){var e=n.btnText,t=n.onClick;return(0,d.jsxs)(c,{children:[(0,d.jsx)(l,{onClick:t,children:(0,d.jsx)("svg",{width:"20",height:"20",children:(0,d.jsx)("use",{href:h.Z+"#icon-back-20"})})}),(0,d.jsx)(u,{onClick:function(){return window.location.reload(!1)},children:e})]})}},7972:function(n,e,t){t.d(e,{Y:function(){return Z}});var r,i,o,a,s,c,l=t(9348),u=t(168),h=t(1242),d=h.ZP.ul(r||(r=(0,u.Z)(["\n  margin-top: 52px;\n  list-style-type: none;\n  padding-left: 0px;\n"]))),p=h.ZP.li(i||(i=(0,u.Z)(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  background-color: ",";\n  border-radius: 10px;\n"])),(function(n){return n.theme.lightGreyBgColor})),g=h.ZP.span(o||(o=(0,u.Z)(["\n  width: 61px;\n  height: 30px;\n  margin-right: 20px;\n  margin-left: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  background-color: white;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),f=h.ZP.span(a||(a=(0,u.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.lightGrayTxtColor})),x=h.ZP.span(s||(s=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),m=h.ZP.svg(c||(c=(0,u.Z)(["\n  margin-left: auto;\n  margin-right: 20px;\n"]))),b=t(3329),Z=function(n){var e=n.activities,t=n.text,r=function(n){var e;switch(n){case"Likes":e="#icon-like-color-30";break;case"Favourites":e="#icon-Vector-348-Stroke";break;case"Dislike":e="#icon-dislike-color-30";break;default:e=null}return e};return(0,b.jsx)(d,{children:e.map((function(n){return(0,b.jsxs)(p,{children:[(0,b.jsx)(g,{children:n.time})," ",(0,b.jsxs)(f,{children:["Image ID: ",(0,b.jsx)(x,{children:n.imageId})," ",t," ",n.type]}),(0,b.jsx)(m,{width:"20",height:"20",children:(0,b.jsx)("use",{href:l.Z+r(n.type)})})]},n.imageId)}))})}},8235:function(n,e,t){t.d(e,{Z:function(){return j}});var r,i,o,a,s,c=t(5048),l=t(6871),u=t(5234),h=t(9348),d=t(168),p=t(1242),g=t(3504),f=p.ZP.div(r||(r=(0,d.Z)(["\n  width: 680px;\n  margin-bottom: 10px;\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n"]))),x=p.ZP.label(i||(i=(0,d.Z)(["\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden;\n"]))),m=p.ZP.input(o||(o=(0,d.Z)(["\n  box-sizing: border-box;\n  position: relative;\n  width: 470px;\n  height: 60px;\n  padding: 0px 20px 0px 20px;\n  outline: none;\n  border-radius: 20px;\n  border-color: transparent;\n  background-color: white;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.5;\n  color: ",";\n\n  ::placeholder {\n    color: ",";\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 1.5;\n  }\n  :active,\n  :focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.titleTextColor}),(function(n){return n.theme.lightGrayTxtColor}),(function(n){return n.theme.pink})),b=p.ZP.button(a||(a=(0,d.Z)(["\n  position: absolute;\n  left: 409px;\n  top: 9px;\n\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.lightPink})),Z=(0,p.ZP)(g.OL)(s||(s=(0,d.Z)(["\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  background-color: white;\n\n  &.active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.pink})),w=t(3329),j=function(){var n=(0,l.s0)(),e=(0,c.I0)(),t=(0,l.TH)();return(0,w.jsxs)(f,{children:[(0,w.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e((0,u.Ps)(t.target.breedName.value)),n("/breeds-search-by-name"),t.target.reset()},children:[(0,w.jsx)(x,{children:"Sarch for breeds"}),(0,w.jsx)(m,{id:"breedName",name:"breedName",type:"text",placeholder:"Search for breeds by name"}),(0,w.jsx)(b,{type:"submit",children:(0,w.jsx)("svg",{width:"20",height:"20",children:(0,w.jsx)("use",{href:h.Z+"#icon-search-20"})})})]}),(0,w.jsx)(Z,{to:"/likes",children:"/likes"===t.pathname?(0,w.jsx)("svg",{width:"30",height:"30",children:(0,w.jsx)("use",{href:h.Z+"#icon-like-white-30"})}):(0,w.jsx)("svg",{width:"30",height:"30",children:(0,w.jsx)("use",{href:h.Z+"#icon-like-30"})})}),(0,w.jsx)(Z,{to:"/favourites",children:"/favourites"===t.pathname?(0,w.jsx)("svg",{width:"30",height:"30",children:(0,w.jsx)("use",{href:h.Z+"#icon-Vector-348-white-Stroke"})}):(0,w.jsx)("svg",{width:"30",height:"30",children:(0,w.jsx)("use",{href:h.Z+"#icon-Vector-348-Stroke"})})}),(0,w.jsx)(Z,{to:"/dislikes",children:"/dislikes"===t.pathname?(0,w.jsx)("svg",{width:"30",height:"30",children:(0,w.jsx)("use",{href:h.Z+"#icon-dislike-white-30"})}):(0,w.jsx)("svg",{width:"30",height:"30",children:(0,w.jsx)("use",{href:h.Z+"#icon-dislike-30"})})})]})}},6963:function(n,e,t){t.d(e,{e:function(){return s},p:function(){return c}});var r,i,o=t(168),a=t(1242),s=a.ZP.div(r||(r=(0,o.Z)(["\n  width: 680px;\n  min-height: 770px;\n  height: fit-content;\n  padding: 20px;\n  margin-bottom: 30px;\n  background-color: white;\n  border-radius: 20px;\n"]))),c=a.ZP.div(i||(i=(0,o.Z)(["\n  position: absolute;\n  top: 0;\n  left: 730px;\n"])))},1092:function(n,e,t){t.d(e,{Kz:function(){return u},T8:function(){return d},fl:function(){return h},g:function(){return l},gO:function(){return c}});var r,i,o,a=t(168),s=t(1242),c=s.ZP.button(r||(r=(0,a.Z)(["\n  width: 180px;\n  height: 34px;\n  margin-bottom: 10px;\n  margin-top: auto;\n  background-color: white;\n  border-color: transparent;\n  border-radius: 10px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: center;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.pink})),l=s.ZP.div(i||(i=(0,a.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),u=s.ZP.button(o||(o=(0,a.Z)(["\n  width: 40px;\n  height: 40px;\n  border-color: transparent;\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.lightGreyBgColor})),h={container:function(){return{width:226,height:40,position:"relative"}},control:function(){return{width:226,height:40,display:"flex",alignItems:"center",borderColor:"transparent",borderRadius:10,backgroundColor:"#F8F8F7"}},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{position:"absolute",top:0,right:0}},menu:function(){return{borderColor:"transparent",borderRadius:10,backgroundColor:"white"}},menuList:function(){return{fontWeight:400,fontSize:16,lineHeight:1.5,color:"#8C8C8C"}}},d={container:function(){return{width:101,height:40,position:"relative"}},control:function(){return{width:101,height:40,display:"flex",alignItems:"center",borderColor:"transparent",borderRadius:10,backgroundColor:"#F8F8F7"}},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{position:"absolute",top:0,right:0}},menu:function(){return{borderColor:"transparent",borderRadius:10,backgroundColor:"white"}},menuList:function(){return{fontWeight:400,fontSize:16,lineHeight:1.5,color:"#8C8C8C"}}}},7333:function(n,e,t){t.d(e,{s:function(){return s},y:function(){return c}});var r,i,o=t(168),a=t(1242),s=a.ZP.div(r||(r=(0,o.Z)(["\n  width: 680px;\n  height: 710px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=a.ZP.button(i||(i=(0,o.Z)(["\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: white;\n  cursor: pointer;\n"])))},168:function(n,e,t){function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=949.c1a9d39b.chunk.js.map