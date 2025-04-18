import{r as i}from"./react-4LNk7ehu.js";import{h as m,u as A,j as f,m as P}from"./goober-np-fLvOt.js";var C=e=>typeof e=="function",$=(e,t)=>C(e)?e(t):e,I=(()=>{let e=0;return()=>(++e).toString()})(),O=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),N=20,z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,N)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return z(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},E=[],y={toasts:[],pausedAt:void 0},h=e=>{y=z(y,e),E.forEach(t=>{t(y)})},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,r]=i.useState(y),s=i.useRef(y);i.useEffect(()=>(s.current!==y&&r(y),E.push(r),()=>{let a=E.indexOf(r);a>-1&&E.splice(a,1)}),[]);let o=t.toasts.map(a=>{var l,n,c;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((l=e[a.type])==null?void 0:l.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((n=e[a.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||M[a.type],style:{...e.style,...(c=e[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:o}},T=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||I()}),b=e=>(t,r)=>{let s=T(t,e,r);return h({type:2,toast:s}),s.id},d=(e,t)=>b("blank")(e,t);d.error=b("error");d.success=b("success");d.loading=b("loading");d.custom=b("custom");d.dismiss=e=>{h({type:3,toastId:e})};d.remove=e=>h({type:4,toastId:e});d.promise=(e,t,r)=>{let s=d.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let a=t.success?$(t.success,o):void 0;return a?d.success(a,{id:s,...r,...r==null?void 0:r.success}):d.dismiss(s),o}).catch(o=>{let a=t.error?$(t.error,o):void 0;a?d.error(a,{id:s,...r,...r==null?void 0:r.error}):d.dismiss(s)}),e};var j=(e,t)=>{h({type:1,toast:{id:e,height:t}})},H=()=>{h({type:5,time:Date.now()})},g=new Map,R=1e3,U=(e,t=R)=>{if(g.has(e))return;let r=setTimeout(()=>{g.delete(e),h({type:4,toastId:e})},t);g.set(e,r)},V=e=>{let{toasts:t,pausedAt:r}=S(e);i.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(n=>{if(n.duration===1/0)return;let c=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(c<0){n.visible&&d.dismiss(n.id);return}return setTimeout(()=>d.dismiss(n.id),c)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[t,r]);let s=i.useCallback(()=>{r&&h({type:6,time:Date.now()})},[r]),o=i.useCallback((a,l)=>{let{reverseOrder:n=!1,gutter:c=8,defaultPosition:p}=l||{},v=t.filter(u=>(u.position||p)===(a.position||p)&&u.height),D=v.findIndex(u=>u.id===a.id),x=v.filter((u,k)=>k<D&&u.visible).length;return v.filter(u=>u.visible).slice(...n?[x+1]:[0,x]).reduce((u,k)=>u+(k.height||0)+c,0)},[t]);return i.useEffect(()=>{t.forEach(a=>{if(a.dismissed)U(a.id,a.removeDelay);else{let l=g.get(a.id);l&&(clearTimeout(l),g.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:j,startPause:H,endPause:s,calculateOffset:o}}},_=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=m`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=m`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=f("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,J=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=m`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,W=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,X=f("div")`
  position: absolute;
`,Z=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=m`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ee=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?i.createElement(Q,null,t):t:r==="blank"?null:i.createElement(Z,null,i.createElement(B,{...s}),r!=="loading"&&i.createElement(X,null,r==="error"?i.createElement(Y,{...s}):i.createElement(W,{...s})))},te=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ae=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,re="0%{opacity:0;} 100%{opacity:1;}",se="0%{opacity:1;} 100%{opacity:0;}",ie=f("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,oe=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ne=(e,t)=>{let r=e.includes("top")?1:-1,[s,o]=O()?[re,se]:[te(r),ae(r)];return{animation:t?`${m(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${m(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},le=i.memo(({toast:e,position:t,style:r,children:s})=>{let o=e.height?ne(e.position||t||"top-center",e.visible):{opacity:0},a=i.createElement(ee,{toast:e}),l=i.createElement(oe,{...e.ariaProps},$(e.message,e));return i.createElement(ie,{className:e.className,style:{...o,...r,...e.style}},typeof s=="function"?s({icon:a,message:l}):i.createElement(i.Fragment,null,a,l))});P(i.createElement);var de=({id:e,className:t,style:r,onHeightUpdate:s,children:o})=>{let a=i.useCallback(l=>{if(l){let n=()=>{let c=l.getBoundingClientRect().height;s(e,c)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:a,className:t,style:r},o)},ce=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...o}},pe=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,w=16,fe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:l})=>{let{toasts:n,handlers:c}=V(r);return i.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:w,left:w,right:w,bottom:w,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(p=>{let v=p.position||t,D=c.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),x=ce(v,D);return i.createElement(de,{id:p.id,key:p.id,onHeightUpdate:c.updateHeight,className:p.visible?pe:"",style:x},p.type==="custom"?$(p.message,p):o?o(p):i.createElement(le,{toast:p,position:v}))}))},ye=d;export{fe as O,ye as V};
