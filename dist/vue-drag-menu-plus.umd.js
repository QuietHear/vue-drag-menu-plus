(function(e,Y){typeof exports=="object"&&typeof module<"u"?module.exports=Y(require("vue")):typeof define=="function"&&define.amd?define(["vue"],Y):(e=typeof globalThis<"u"?globalThis:e||self,e.vueDragMenuPlus=Y(e.Vue))})(this,function(e){"use strict";const Y="",ue=(T,M)=>{const A=T.__vccOpts||T;for(const[d,z]of M)A[d]=z;return A},ve={name:"vueDragMenuPlus",emits:["click"],props:{list:{type:Array,default:()=>[{icon:"icon-insert icon-setting",title:"\u83DC\u5355",style:{background:"#fff",color:""}},{icon:"icon-insert icon-myCenter",style:{background:"rgb(255, 92, 92)"}},{icon:"icon-insert icon-notice",style:{background:"rgb(92, 209, 255)"}},{icon:"icon-insert icon-expression",style:{background:"rgb(255, 241, 92)"}},{icon:"icon-insert icon-collection",style:{background:"rgb(100, 245, 146)"}}]},closeOnClick:{type:Boolean,default:!0}},setup(T,{attrs:M,slots:A,emit:d,expose:z}){let w=e.ref([]),L=e.ref(null),n=e.ref(null),c=e.ref(null),g=e.ref(null),O=e.ref(null),b=e.ref(6),o=e.ref(10),E=e.ref(null),y=e.ref(null),B=e.ref(null),C=e.ref(null),S=e.ref(null),P=e.ref(null),m=e.ref(null),k=e.ref(null),F=e.ref(!1),G=e.ref(null),V=e.ref(null),W=e.ref(null),D=e.ref(null),X=e.ref(null),U=e.ref(null),K=e.ref(null),N=e.ref(null),Q=e.ref(null),Z=e.ref(null),r=e.ref(!1),I=e.ref(!0),u=e.ref([]),h=e.ref(null),p=e.ref(null);const ce=(l,a)=>l.classList?l.classList.contains(a):new RegExp("\\s"+a+"\\s").test(" "+l.className+" "),re=(l,a)=>{let i=[],s=v=>{v.forEach(f=>{ce(f,a)&&i.push(f),f.childNodes&&f.childNodes.length>0&&s(f.childNodes)})};return s(l.childNodes),i},t=(l,a,i)=>new Promise((s,v)=>{setTimeout(()=>{for(const f in a)l[f]=a[f];s()},i)}),$=()=>{w.value.forEach(async(l,a)=>{a>0&&(r.value?(await t(l,{top:p.value+o.value},40),await t(l,{top:p.value-o.value},80),await t(l,{top:p.value},50)):(await t(l,{top:p.value-(a*(g.value+o.value)+o.value)},40),await t(l,{top:p.value-a*(g.value+o.value)},100)))}),r.value=!r.value},ee=()=>{w.value.forEach(async(l,a)=>{a>0&&(r.value?(await t(l,{top:p.value-o.value},40),await t(l,{top:p.value+o.value},80),await t(l,{top:p.value},50)):(await t(l,{top:p.value+(a*(g.value+o.value)+o.value)},40),await t(l,{top:p.value+a*(g.value+o.value)},100)))}),r.value=!r.value},le=()=>{w.value.forEach(async(l,a)=>{a>0&&(r.value?(await t(l,{left:h.value+o.value},40),await t(l,{left:h.value-o.value},80),await t(l,{left:h.value},50)):(await t(l,{left:h.value-(a*(c.value+o.value)+o.value)},40),await t(l,{left:h.value-a*(c.value+o.value)},100)))}),r.value=!r.value},ae=()=>{w.value.forEach(async(l,a)=>{a>0&&(r.value?(await t(l,{left:h.value-o.value},40),await t(l,{left:h.value+o.value},80),await t(l,{left:h.value},50)):(await t(l,{left:h.value+(a*(c.value+o.value)+o.value)},40),await t(l,{left:h.value+a*(c.value+o.value)},100)))}),r.value=!r.value},q=(l=0)=>{if(d("click",T.list[l]),l===0||T.closeOnClick){let a,i,s,v;a=n.value.offsetLeft,i=n.value.offsetTop,a>0?i<0?(s=E.value/2-a-c.value,v=y.value/2+i,s+10<v?le():ee()):(s=E.value/2-a-c.value,v=y.value/2-i-g.value,s+10<v?le():$()):i<0?(s=E.value/2+a,v=y.value/2+i,s+10<v?ae():ee()):(s=E.value/2+a,v=y.value/2-i-g.value,s+10<v?ae():$())}},te=()=>{r.value&&q(0)},J=()=>{te(),E.value=window.innerWidth,y.value=window.innerHeight,S.value=E.value-c.value,P.value=y.value-g.value,B.value=L.value.offsetLeft,C.value=L.value.offsetTop,m.value=S.value-B.value-10,k.value=P.value-C.value-10,w.value.forEach(l=>{l.left=m.value,l.top=k.value})},de=()=>{if(u.value.length>1){let l,a,i=u.value[u.value.length-2].x,s=u.value[u.value.length-2].y,v=u.value[u.value.length-1].x,f=u.value[u.value.length-1].y,R=Math.abs(v-i),ne=Math.abs(f-s);R===0?(l=0,a=o.value):(l=Math.sqrt(Math.pow(o.value,2)*Math.pow(R,2)/(Math.pow(R,2)+Math.pow(ne,2))),a=l*ne/R),w.value.forEach((x,oe)=>{oe>0&&setTimeout(async()=>{await t(x,{left:i,top:s},50),await t(x,{left:v>i?v+l:v-l,top:f>s?f+a:f-a},50),await t(x,{left:v>i?v-l:v+l,top:f>s?f-a:f+a},100),await t(x,{left:v,top:f},50)},oe*120)})}u=[]},we=()=>{I.value?(W.value=event.offsetX,D.value=event.offsetY):(W.value=event.changedTouches[0].clientX-E.value/2-n.value.offsetLeft,D.value=event.changedTouches[0].clientY-y.value/2-n.value.offsetTop),G.value=n.value.offsetLeft,V.value=n.value.offsetTop,U.value=W.value,K.value=S.value+W.value,Q.value=D.value,Z.value=P.value+D.value,u.value=[],m.value=G.value-B.value,k.value=V.value-C.value,F.value=!0,I.value?(window.addEventListener("mousemove",H),window.addEventListener("mouseup",_)):(window.addEventListener("touchmove",H),window.addEventListener("touchend",_))},H=()=>{te(),I.value?(X.value=event.clientX,N.value=event.clientY):(X.value=event.changedTouches[0].clientX,N.value=event.changedTouches[0].clientY),X.value<U.value?m.value=0-B.value:X.value>K.value?m.value=S.value-B.value:m.value=X.value-B.value-W.value,N.value<Q.value?k.value=0-C.value:N.value>Z.value?k.value=P.value-C.value:k.value=N.value-C.value-D.value,u.value.push({x:m.value,y:k.value}),w.value.forEach((l,a)=>{u.value.length>1&&u.value.length>a*b.value&&(l.left=u.value[u.value.length-1-b.value*a].x,l.top=u.value[u.value.length-1-b.value*a].y)}),u.value.length>b.value*(w.value.length-1)+1&&u.value.shift(),(O.value!==null||O.value!==void 0)&&clearTimeout(O.value),O.value=setTimeout(de,500)},_=()=>{h.value=n.value.offsetLeft,p.value=n.value.offsetTop,I.value?(window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",_)):(window.removeEventListener("touchmove",H),window.removeEventListener("touchend",_)),G.value===h.value&&V.value===p.value&&q(),setTimeout(()=>{F.value=!1},600)};e.onMounted(()=>{w.value.length>0&&(n.value=re(L.value,"menu-item")[0],c.value=n.value.offsetWidth,g.value=n.value.offsetHeight,J(),window.addEventListener("resize",J))}),e.onBeforeUnmount(()=>{window.removeEventListener("resize",J),I.value?(window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",_)):(window.removeEventListener("touchmove",H),window.removeEventListener("touchend",_))});let he=JSON.parse(JSON.stringify(T.list));return w.value=he.map((l,a)=>(l.left=0,l.top=0,l.style.zIndex=T.list.length+1-a,{...l})),/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)&&(I.value=!1),{menuList:w,parentRef:L,isPC:I,isMove:F,moveBegin:we,showMenu:q}}},se=["title","onMousedown","onTouchstart","onClick"];function ie(T,M,A,d,z,w){const L=e.resolveComponent("el-icon");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vue-drag-menu-plus",d.isMove?"move-ing":""]),ref:"parentRef"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.menuList,(n,c)=>(e.openBlock(),e.createElementBlock("div",{class:"menu-item",title:n.title,style:e.normalizeStyle({...n.style,left:n.left+"px",top:n.top+"px"}),key:c,onMousedown:g=>c===0&&d.isPC?d.moveBegin():null,onTouchstart:g=>c===0&&!d.isPC?d.moveBegin():null,onClick:g=>c!==0&&!d.isMove?d.showMenu(c):null},[n.icon.split("/")[0]==="el"?(e.openBlock(),e.createBlock(L,{key:0},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.icon.split("/")[1])))]),_:2},1024)):n.icon.split("/")[0]==="iconfont"?(e.openBlock(),e.createElementBlock("i",{key:1,class:e.normalizeClass(["icon iconfont","icon-"+n.icon.split("/")[1]])},null,2)):(e.openBlock(),e.createElementBlock("i",{key:2,class:e.normalizeClass(n.icon.split("/")[0])},e.toDisplayString(n.icon.split("/")[1]),3))],44,se))),128))],2)}const fe=[ue(ve,[["render",ie]])],j={install(T){fe.forEach(M=>{T.component(M.name,M)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(j),j});