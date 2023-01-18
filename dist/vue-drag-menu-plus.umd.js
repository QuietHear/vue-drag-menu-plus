(function(e,X){typeof exports=="object"&&typeof module<"u"?module.exports=X(require("vue")):typeof define=="function"&&define.amd?define(["vue"],X):(e=typeof globalThis<"u"?globalThis:e||self,e.vueDragMenuPlus=X(e.Vue))})(this,function(e){"use strict";const X="",ve=["title","onMousedown","onTouchstart","onClick"],se=[{__name:"index",props:{list:{type:Array,default:()=>[{icon:{type:"icon-insert icon-setting"},title:"\u83DC\u5355",style:{background:"#fff",color:""}},{icon:{type:"icon-insert icon-myCenter"},style:{background:"rgb(255, 92, 92)"}},{icon:{type:"icon-insert icon-notice"},style:{background:"rgb(92, 209, 255)"}},{icon:{type:"icon-insert icon-expression"},style:{background:"rgb(255, 241, 92)"}},{icon:{type:"icon-insert icon-collection"},style:{background:"rgb(100, 245, 146)"}}]},closeOnClick:{type:Boolean,default:!0}},emits:["click"],setup(R,{emit:x}){const L=R;let p=e.ref([]),M=e.ref(null),d=e.ref(null),w=e.ref(null),h=e.ref(null),Y=e.ref(null),A=e.ref(6),u=e.ref(10),y=e.ref(null),T=e.ref(null),m=e.ref(null),I=e.ref(null),N=e.ref(null),b=e.ref(null),E=e.ref(null),k=e.ref(null),P=e.ref(!1),z=e.ref(null),F=e.ref(null),W=e.ref(null),_=e.ref(null),C=e.ref(null),q=e.ref(null),j=e.ref(null),D=e.ref(null),U=e.ref(null),J=e.ref(null),c=e.ref(!1),g=e.ref(!0),v=e.ref([]),r=e.ref(null),f=e.ref(null);const ie=(l,a)=>l.classList?l.classList.contains(a):new RegExp("\\s"+a+"\\s").test(" "+l.className+" "),ce=(l,a)=>{let i=[],t=n=>{n.forEach(s=>{ie(s,a)&&i.push(s),s.childNodes&&s.childNodes.length>0&&t(s.childNodes)})};return t(l.childNodes),i},o=(l,a,i)=>new Promise((t,n)=>{setTimeout(()=>{for(const s in a)l[s]=a[s];t()},i)}),K=()=>{p.value.forEach(async(l,a)=>{a>0&&(c.value?(await o(l,{top:f.value+u.value},40),await o(l,{top:f.value-u.value},80),await o(l,{top:f.value},50)):(await o(l,{top:f.value-(a*(h.value+u.value)+u.value)},40),await o(l,{top:f.value-a*(h.value+u.value)},100)))}),c.value=!c.value},Q=()=>{p.value.forEach(async(l,a)=>{a>0&&(c.value?(await o(l,{top:f.value-u.value},40),await o(l,{top:f.value+u.value},80),await o(l,{top:f.value},50)):(await o(l,{top:f.value+(a*(h.value+u.value)+u.value)},40),await o(l,{top:f.value+a*(h.value+u.value)},100)))}),c.value=!c.value},Z=()=>{p.value.forEach(async(l,a)=>{a>0&&(c.value?(await o(l,{left:r.value+u.value},40),await o(l,{left:r.value-u.value},80),await o(l,{left:r.value},50)):(await o(l,{left:r.value-(a*(w.value+u.value)+u.value)},40),await o(l,{left:r.value-a*(w.value+u.value)},100)))}),c.value=!c.value},ee=()=>{p.value.forEach(async(l,a)=>{a>0&&(c.value?(await o(l,{left:r.value-u.value},40),await o(l,{left:r.value+u.value},80),await o(l,{left:r.value},50)):(await o(l,{left:r.value+(a*(w.value+u.value)+u.value)},40),await o(l,{left:r.value+a*(w.value+u.value)},100)))}),c.value=!c.value},G=(l=0)=>{if(x("click",L.list[l],l),l===0||L.closeOnClick){let a,i,t,n;a=d.value.offsetLeft,i=d.value.offsetTop,a>0?i<0?(t=y.value/2-a-w.value,n=T.value/2+i,t+10<n?Z():Q()):(t=y.value/2-a-w.value,n=T.value/2-i-h.value,t+10<n?Z():K()):i<0?(t=y.value/2+a,n=T.value/2+i,t+10<n?ee():Q()):(t=y.value/2+a,n=T.value/2-i-h.value,t+10<n?ee():K())}},le=()=>{c.value&&G(0)},V=()=>{le(),y.value=window.innerWidth,T.value=window.innerHeight,N.value=y.value-w.value,b.value=T.value-h.value,m.value=M.value.offsetLeft,I.value=M.value.offsetTop,E.value=N.value-m.value-10,k.value=b.value-I.value-10,p.value.forEach(l=>{l.left=E.value,l.top=k.value})},re=()=>{if(v.value.length>1){let l,a,i=v.value[v.value.length-2].x,t=v.value[v.value.length-2].y,n=v.value[v.value.length-1].x,s=v.value[v.value.length-1].y,O=Math.abs(n-i),oe=Math.abs(s-t);O===0?(l=0,a=u.value):(l=Math.sqrt(Math.pow(u.value,2)*Math.pow(O,2)/(Math.pow(O,2)+Math.pow(oe,2))),a=l*oe/O),p.value.forEach((S,ue)=>{ue>0&&setTimeout(async()=>{await o(S,{left:i,top:t},50),await o(S,{left:n>i?n+l:n-l,top:s>t?s+a:s-a},50),await o(S,{left:n>i?n-l:n+l,top:s>t?s-a:s+a},100),await o(S,{left:n,top:s},50)},ue*120)})}v=[]},ae=()=>{g.value?(W.value=event.offsetX,_.value=event.offsetY):(W.value=event.changedTouches[0].clientX-y.value/2-d.value.offsetLeft,_.value=event.changedTouches[0].clientY-T.value/2-d.value.offsetTop),z.value=d.value.offsetLeft,F.value=d.value.offsetTop,q.value=W.value,j.value=N.value+W.value,U.value=_.value,J.value=b.value+_.value,v.value=[],E.value=z.value-m.value,k.value=F.value-I.value,P.value=!0,g.value?(window.addEventListener("mousemove",B),window.addEventListener("mouseup",H)):(window.addEventListener("touchmove",B),window.addEventListener("touchend",H))},B=()=>{le(),g.value?(C.value=event.clientX,D.value=event.clientY):(C.value=event.changedTouches[0].clientX,D.value=event.changedTouches[0].clientY),C.value<q.value?E.value=0-m.value:C.value>j.value?E.value=N.value-m.value:E.value=C.value-m.value-W.value,D.value<U.value?k.value=0-I.value:D.value>J.value?k.value=b.value-I.value:k.value=D.value-I.value-_.value,v.value.push({x:E.value,y:k.value}),p.value.forEach((l,a)=>{v.value.length>1&&v.value.length>a*A.value&&(l.left=v.value[v.value.length-1-A.value*a].x,l.top=v.value[v.value.length-1-A.value*a].y)}),v.value.length>A.value*(p.value.length-1)+1&&v.value.shift(),(Y.value!==null||Y.value!==void 0)&&clearTimeout(Y.value),Y.value=setTimeout(re,500)},H=()=>{r.value=d.value.offsetLeft,f.value=d.value.offsetTop,g.value?(window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",H)):(window.removeEventListener("touchmove",B),window.removeEventListener("touchend",H)),z.value===r.value&&F.value===f.value&&G(),setTimeout(()=>{P.value=!1},600)};e.onBeforeUnmount(()=>{window.removeEventListener("resize",V),g.value?(window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",H)):(window.removeEventListener("touchmove",B),window.removeEventListener("touchend",H))});const te=()=>{p.value.length>0&&(d.value=ce(M.value,"menu-item")[0],w.value=d.value.offsetWidth,h.value=d.value.offsetHeight,V(),window.addEventListener("resize",V))},ne=()=>{p.value=L.list.map((l,a)=>(l.left=0,l.top=0,l.style.zIndex=L.list.length+1-a,{...l})),M.value?e.nextTick(()=>{te()}):e.onMounted(()=>{te()})};return/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)&&(g.value=!1),e.watch(()=>L.list,()=>{ne()}),ne(),(l,a)=>{const i=e.resolveComponent("el-icon");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vue-drag-menu-plus",e.unref(P)?"move-ing":""]),ref_key:"parentRef",ref:M},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(p),(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:"menu-item",title:t.title,style:e.normalizeStyle({...t.style,left:t.left+"px",top:t.top+"px"}),key:n,onMousedown:s=>n===0&&e.unref(g)?ae():null,onTouchstart:s=>n===0&&!e.unref(g)?ae():null,onClick:s=>n!==0&&!e.unref(P)?G(n):null},[t.icon&&(t.icon.icon||t.icon.type)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[t.icon.type==="custom"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.icon.icon),e.normalizeProps(e.mergeProps({key:0},t.icon.attrs)),null,16)):t.icon.type==="el"?(e.openBlock(),e.createBlock(i,e.normalizeProps(e.mergeProps({key:1},t.icon.attrs)),{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.icon.icon)))]),_:2},1040)):t.icon.type==="iconfont"?(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:2,class:["icon iconfont","icon-"+t.icon.icon]},t.icon.attrs),null,16)):(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:3,class:t.icon.type},t.icon.attrs),e.toDisplayString(t.icon.icon),17))],64)):e.createCommentVNode("",!0)],44,ve))),128))],2)}}}],$={install(R){se.forEach(x=>{R.component("vueDragMenuPlus",x)})}};return typeof window<"u"&&window.Vue&&window.Vue.use($),$});
