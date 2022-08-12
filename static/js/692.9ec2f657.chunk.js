"use strict";(self.webpackChunkthe_cats=self.webpackChunkthe_cats||[]).push([[692],{8692:function(n,e,t){t.r(e);var r=t(2982),i=t(1413),o=t(885),c=t(2791),u=t(8235),a=t(7634),l=t(122),s=t(2299),d=t.n(s),p=t(753),f=t(3515),h=t(6963),g=t(8610),x=t(9348),m=t(1092),b=t(3329);e.default=function(){var n=(0,c.useState)("all"),e=(0,o.Z)(n,2),t=e[0],s=e[1],v=(0,c.useState)(5),w=(0,o.Z)(v,2),j=w[0],Z=w[1],y=(0,c.useState)([]),k=(0,o.Z)(y,2),P=k[0],O=k[1],_=(0,c.useState)([]),C=(0,o.Z)(_,2),L=C[0],S=C[1],z=(0,c.useState)([]),M=(0,o.Z)(z,2),A=M[0],E=M[1],F=(0,g.xp)(),K=F.data,R=F.isSuccess,B=F.isFetching,D=F.isLoading,G=(0,g.NJ)({id:t,limit:j}),V=G.data,N=G.isLoading,I=G.isFetching;(0,c.useEffect)((function(){R&&S(K.map((function(n){if(void 0!==n.image)return{breeds:[(0,i.Z)({},n)],url:n.image.url,id:n.image.id}})).sort((function(){return Math.random()-.5})).filter((function(n){return void 0!==n})).slice(0,j))}),[R,K,j]),(0,c.useEffect)((function(){K!==[]&&R&&O([{id:"all",name:"All breeds"}].concat(K.map((function(n){return{id:n.id,name:n.name}}))))}),[K,R]),(0,c.useEffect)((function(){R&&E("all"===t?L:V)}),[R,L,V,t]);return(0,b.jsxs)(h.e,{children:[(0,b.jsx)(u.Z,{}),(0,b.jsxs)(h.H,{children:[(0,b.jsxs)(m.g,{children:[(0,b.jsx)(l.Z,{text:"breeds"}),(0,b.jsxs)(m.n2,{children:[(0,b.jsx)(m.mg,{onChange:function(n){return s(n.target.value)},children:P.map((function(n){return(0,b.jsx)("option",{value:n.id,label:n.name,children:n.name},n.id)}))}),(0,b.jsx)(f.K,{width:"12",height:"12",children:(0,b.jsx)("use",{href:x.Z+"#icon-dropdown-12"})})]}),(0,b.jsxs)(m.n2,{children:[(0,b.jsxs)(m.iL,{onChange:function(n){return Z(n.target.value)},children:[(0,b.jsx)("option",{value:5,children:"Limit: 5"}),(0,b.jsx)("option",{value:10,children:"Limit: 10"}),(0,b.jsx)("option",{value:15,children:"Limit: 15"}),(0,b.jsx)("option",{value:20,children:"Limit: 20"})]}),(0,b.jsx)(f.K,{width:"12",height:"12",children:(0,b.jsx)("use",{href:x.Z+"#icon-dropdown-12"})})]}),(0,b.jsx)(m.Kz,{onClick:function(){S((function(n){return(0,r.Z)(n).sort((function(n,e){return n.breeds[0].name.localeCompare(e.breeds[0].name)}))}))},children:(0,b.jsx)("svg",{width:"20",height:"20",children:(0,b.jsx)("use",{href:x.Z+"#icon-sort-20"})})}),(0,b.jsx)(m.Kz,{onClick:function(){S((function(n){return(0,r.Z)(n).sort((function(n,e){return e.breeds[0].name.localeCompare(n.breeds[0].name)}))}))},children:(0,b.jsx)("svg",{width:"20",height:"20",children:(0,b.jsx)("use",{href:x.Z+"#icon-sort-revert-20"})})})]}),D||B||I||N?(0,b.jsx)(p.sb,{children:(0,b.jsx)(d(),{color:"#FF868E",size:"100px"})}):(0,b.jsx)(a.Z,{items:A})]})]})}},3515:function(n,e,t){t.d(e,{Ar:function(){return m},K:function(){return j},KD:function(){return w},Mb:function(){return b},Nm:function(){return Z},ZN:function(){return v},_y:function(){return x},im:function(){return h},pF:function(){return g}});var r,i,o,c,u,a,l,s,d,p=t(168),f=t(6031),h=f.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"]))),g=f.ZP.button(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 143px;\n  height: 40px;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: ",";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.3;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: ",";\n  cursor: pointer;\n  svg {\n    fill: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    svg {\n      fill: white;\n    }\n  }\n"])),(function(n){return n.theme.lightPink}),(function(n){return n.theme.pink}),(function(n){return n.theme.pink}),(function(n){return n.theme.pink})),x=f.ZP.section(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  background-color: ",";\n"])),(function(n){return n.theme.lightGreyBgColor})),m=f.ZP.label(c||(c=(0,p.Z)(["\n  display: block;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 1.8;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.lightGrayTxtColor})),b=f.ZP.div(u||(u=(0,p.Z)(["\n  display: flex;\n"]))),v=f.ZP.select(a||(a=(0,p.Z)(["\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n"]))),w=f.ZP.div(l||(l=(0,p.Z)(["\n  position: relative;\n  width: 290px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 8px 10px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n  cursor: pointer;\n  background-color: white;\n\n  &:hover {\n    box-shadow: 0px 0px 0px 2px "," inset;\n  }\n\n  &.limit {\n    width: 240px;\n  }\n"])),(function(n){return n.theme.titleColor}),(function(n){return n.theme.lightPink})),j=f.ZP.svg(s||(s=(0,p.Z)(["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n"]))),Z=f.ZP.button(d||(d=(0,p.Z)(["\n  width: 40px;\n  height: 40px;\n  margin-left: 10px;\n  border-radius: 10px;\n  border-color: transparent;\n  background-color: white;\n  cursor: pointer;\n  svg {\n    fill: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    svg {\n      fill: white;\n    }\n  }\n"])),(function(n){return n.theme.pink}),(function(n){return n.theme.pink}))},753:function(n,e,t){t.d(e,{RR:function(){return x},Zg:function(){return f},cW:function(){return p},kX:function(){return g},oL:function(){return h},sb:function(){return d}});var r,i,o,c,u,a,l=t(168),s=t(6031),d=s.ZP.div(r||(r=(0,l.Z)(["\n  width: 640px;\n  height: 360px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background-color: ","; */\n  border-radius: 20px;\n"])),(function(n){return n.theme.lightGreyBgColor})),p=s.ZP.img(i||(i=(0,l.Z)(["\n  width: 640px;\n  height: 360px;\n  object-fit: cover;\n  border-radius: 20px;\n"]))),f=s.ZP.div(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 387px;\n  right: 228px;\n  width: 252px;\n  height: 84px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 4px;\n  border-radius: 20px;\n  background-color: white;\n"]))),h=s.ZP.button(c||(c=(0,l.Z)(["\n  width: 80px;\n  height: 80px;\n  border-radius: 20px 0px 0px 20px;\n  border-color: transparent;\n  background-color: ",";\n  cursor: pointer;\n  svg {\n    fill: white;\n  }\n\n  &:hover {\n    background-color: ",";\n    svg {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.lightGreen}),(function(n){return n.theme.green})),g=s.ZP.button(u||(u=(0,l.Z)(["\n  width: 80px;\n  height: 80px;\n  border-color: transparent;\n  background-color: ",";\n  cursor: pointer;\n  svg {\n    fill: white;\n  }\n\n  &:hover {\n    background-color: ",";\n    svg {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.pink}),(function(n){return n.theme.lightPink}),(function(n){return n.theme.pink})),x=s.ZP.button(a||(a=(0,l.Z)(["\n  width: 80px;\n  height: 80px;\n  border-color: transparent;\n  border-radius: 0px 20px 20px 0px;\n  background-color: ",";\n  cursor: pointer;\n  svg {\n    fill: white;\n  }\n\n  &:hover {\n    background-color: ",";\n    svg {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.yellow}),(function(n){return n.theme.lightYellow}),(function(n){return n.theme.yellow}))},2299:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,i)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),c=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&i(e,n,t);return o(e,n),e},u=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var a=c(t(2791)),l=t(8945),s=(0,t(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");e.default=function(n){var e=n.loading,t=void 0===e||e,i=n.color,o=void 0===i?"#000000":i,c=n.speedMultiplier,d=void 0===c?1:c,p=n.cssOverride,f=void 0===p?{}:p,h=n.size,g=void 0===h?35:h,x=u(n,["loading","color","speedMultiplier","cssOverride","size"]),m=r({background:"transparent !important",width:(0,l.cssValue)(g),height:(0,l.cssValue)(g),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(s," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},f);return t?a.createElement("span",r({style:m},x)):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,c="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(c,0),r}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(n.match(/[^0-9]*$/)||"").toString();return t[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}},168:function(n,e,t){function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=692.9ec2f657.chunk.js.map