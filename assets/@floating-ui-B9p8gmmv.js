import{r as E}from"./react-4LNk7ehu.js";import{r as jt}from"./react-dom-D2FGI1Lc.js";const It=["top","right","bottom","left"],X=Math.min,F=Math.max,st=Math.round,it=Math.floor,V=t=>({x:t,y:t}),Yt={left:"right",right:"left",bottom:"top",top:"bottom"},qt={start:"end",end:"start"};function gt(t,e,n){return F(t,X(e,n))}function I(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function xt(t){return t==="x"?"y":"x"}function yt(t){return t==="y"?"height":"width"}function U(t){return["top","bottom"].includes(Y(t))?"y":"x"}function vt(t){return xt(U(t))}function Xt(t,e,n){n===void 0&&(n=!1);const o=Z(t),i=vt(t),r=yt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ct(s)),[s,ct(s)]}function Ut(t){const e=ct(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>qt[e])}function Kt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Gt(t,e,n,o){const i=Z(t);let r=Kt(Y(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(pt)))),r}function ct(t){return t.replace(/left|right|bottom|top/g,e=>Yt[e])}function Jt(t){return{top:0,right:0,bottom:0,left:0,...t}}function kt(t){return typeof t!="number"?Jt(t):{top:t,right:t,bottom:t,left:t}}function lt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ct(t,e,n){let{reference:o,floating:i}=t;const r=U(e),s=vt(e),c=yt(s),f=Y(e),l=r==="y",a=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let d;switch(f){case"top":d={x:a,y:o.y-i.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-i.width,y:u};break;default:d={x:o.x,y:o.y}}switch(Z(e)){case"start":d[s]-=m*(n&&l?-1:1);break;case"end":d[s]+=m*(n&&l?-1:1);break}return d}const Qt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),f=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:u}=Ct(l,o,f),m=o,d={},h=0;for(let g=0;g<c.length;g++){const{name:p,fn:w}=c[g],{x:v,y,data:b,reset:x}=await w({x:a,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:l,platform:s,elements:{reference:t,floating:e}});a=v??a,u=y??u,d={...d,[p]:{...d[p],...b}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(l=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:a,y:u}=Ct(l,m,f)),g=-1)}return{x:a,y:u,placement:m,strategy:i,middlewareData:d}};async function et(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:f}=t,{boundary:l="clippingAncestors",rootBoundary:a="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=I(e,t),h=kt(d),p=c[m?u==="floating"?"reference":"floating":u],w=lt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:a,strategy:f})),v=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},x=lt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:y,strategy:f}):v);return{top:(w.top-x.top+h.top)/b.y,bottom:(x.bottom-w.bottom+h.bottom)/b.y,left:(w.left-x.left+h.left)/b.x,right:(x.right-w.right+h.right)/b.x}}const Zt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:f}=e,{element:l,padding:a=0}=I(t,e)||{};if(l==null)return{};const u=kt(a),m={x:n,y:o},d=vt(i),h=yt(d),g=await s.getDimensions(l),p=d==="y",w=p?"top":"left",v=p?"bottom":"right",y=p?"clientHeight":"clientWidth",b=r.reference[h]+r.reference[d]-m[d]-r.floating[h],x=m[d]-r.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let R=O?O[y]:0;(!R||!await(s.isElement==null?void 0:s.isElement(O)))&&(R=c.floating[y]||r.floating[h]);const L=b/2-x/2,W=R/2-g[h]/2-1,D=X(u[w],W),B=X(u[v],W),T=D,P=R-g[h]-B,C=R/2-g[h]/2+L,j=gt(T,C,P),S=!f.arrow&&Z(i)!=null&&C!==j&&r.reference[h]/2-(C<T?D:B)-g[h]/2<0,M=S?C<T?C-T:C-P:0;return{[d]:m[d]+M,data:{[d]:j,centerOffset:C-j-M,...S&&{alignmentOffset:M}},reset:S}}}),te=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:f,elements:l}=e,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...p}=I(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=Y(i),v=U(c),y=Y(c)===c,b=await(f.isRTL==null?void 0:f.isRTL(l.floating)),x=m||(y||!g?[ct(c)]:Ut(c)),O=h!=="none";!m&&O&&x.push(...Gt(c,g,h,b));const R=[c,...x],L=await et(e,p),W=[];let D=((o=r.flip)==null?void 0:o.overflows)||[];if(a&&W.push(L[w]),u){const C=Xt(i,s,b);W.push(L[C[0]],L[C[1]])}if(D=[...D,{placement:i,overflows:W}],!W.every(C=>C<=0)){var B,T;const C=(((B=r.flip)==null?void 0:B.index)||0)+1,j=R[C];if(j)return{data:{index:C,overflows:D},reset:{placement:j}};let S=(T=D.filter(M=>M.overflows[0]<=0).sort((M,A)=>M.overflows[1]-A.overflows[1])[0])==null?void 0:T.placement;if(!S)switch(d){case"bestFit":{var P;const M=(P=D.filter(A=>{if(O){const k=U(A.placement);return k===v||k==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(k=>k>0).reduce((k,q)=>k+q,0)]).sort((A,k)=>A[1]-k[1])[0])==null?void 0:P[0];M&&(S=M);break}case"initialPlacement":S=c;break}if(i!==S)return{reset:{placement:S}}}return{}}}};function Et(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function St(t){return It.some(e=>t[e]>=0)}const ee=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=I(t,e);switch(o){case"referenceHidden":{const r=await et(e,{...i,elementContext:"reference"}),s=Et(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:St(s)}}}case"escaped":{const r=await et(e,{...i,altBoundary:!0}),s=Et(r,n.floating);return{data:{escapedOffsets:s,escaped:St(s)}}}default:return{}}}}};async function ne(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Y(n),c=Z(n),f=U(n)==="y",l=["left","top"].includes(s)?-1:1,a=r&&f?-1:1,u=I(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof h=="number"&&(d=c==="end"?h*-1:h),f?{x:d*a,y:m*l}:{x:m*l,y:d*a}}const oe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,f=await ne(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+f.x,y:r+f.y,data:{...f,placement:s}}}}},ie=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:p=>{let{x:w,y:v}=p;return{x:w,y:v}}},...f}=I(t,e),l={x:n,y:o},a=await et(e,f),u=U(Y(i)),m=xt(u);let d=l[m],h=l[u];if(r){const p=m==="y"?"top":"left",w=m==="y"?"bottom":"right",v=d+a[p],y=d-a[w];d=gt(v,d,y)}if(s){const p=u==="y"?"top":"left",w=u==="y"?"bottom":"right",v=h+a[p],y=h-a[w];h=gt(v,h,y)}const g=c.fn({...e,[m]:d,[u]:h});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:r,[u]:s}}}}}},re=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:c=0,mainAxis:f=!0,crossAxis:l=!0}=I(t,e),a={x:n,y:o},u=U(i),m=xt(u);let d=a[m],h=a[u];const g=I(c,e),p=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(f){const y=m==="y"?"height":"width",b=r.reference[m]-r.floating[y]+p.mainAxis,x=r.reference[m]+r.reference[y]-p.mainAxis;d<b?d=b:d>x&&(d=x)}if(l){var w,v;const y=m==="y"?"width":"height",b=["top","left"].includes(Y(i)),x=r.reference[u]-r.floating[y]+(b&&((w=s.offset)==null?void 0:w[u])||0)+(b?0:p.crossAxis),O=r.reference[u]+r.reference[y]+(b?0:((v=s.offset)==null?void 0:v[u])||0)-(b?p.crossAxis:0);h<x?h=x:h>O&&(h=O)}return{[m]:d,[u]:h}}}},se=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:r,platform:s,elements:c}=e,{apply:f=()=>{},...l}=I(t,e),a=await et(e,l),u=Y(i),m=Z(i),d=U(i)==="y",{width:h,height:g}=r.floating;let p,w;u==="top"||u==="bottom"?(p=u,w=m===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(w=u,p=m==="end"?"top":"bottom");const v=g-a.top-a.bottom,y=h-a.left-a.right,b=X(g-a[p],v),x=X(h-a[w],y),O=!e.middlewareData.shift;let R=b,L=x;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(L=y),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(R=v),O&&!m){const D=F(a.left,0),B=F(a.right,0),T=F(a.top,0),P=F(a.bottom,0);d?L=h-2*(D!==0||B!==0?D+B:F(a.left,a.right)):R=g-2*(T!==0||P!==0?T+P:F(a.top,a.bottom))}await f({...e,availableWidth:L,availableHeight:R});const W=await s.getDimensions(c.floating);return h!==W.width||g!==W.height?{reset:{rects:!0}}:{}}}};function at(){return typeof window<"u"}function tt(t){return Ft(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(Ft(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ft(t){return at()?t instanceof Node||t instanceof $(t).Node:!1}function H(t){return at()?t instanceof Element||t instanceof $(t).Element:!1}function _(t){return at()?t instanceof HTMLElement||t instanceof $(t).HTMLElement:!1}function Dt(t){return!at()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ce(t){return["table","td","th"].includes(tt(t))}function ut(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function bt(t){const e=At(),n=H(t)?N(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function le(t){let e=K(t);for(;_(e)&&!Q(e);){if(bt(e))return e;if(ut(e))return null;e=K(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(tt(t))}function N(t){return $(t).getComputedStyle(t)}function dt(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(tt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Dt(t)&&t.host||z(t);return Dt(e)?e.host:e}function $t(t){const e=K(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&ot(e)?e:$t(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$t(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=$(i);if(r){const c=wt(s);return e.concat(s,s.visualViewport||[],ot(i)?i:[],c&&n?nt(c):[])}return e.concat(i,nt(i,[],n))}function wt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wt(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=_(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=st(n)!==r||st(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function Rt(t){return H(t)?t:t.contextElement}function J(t){const e=Rt(t);if(!_(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?st(n.width):n.width)/o,c=(r?st(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const fe=V(0);function Bt(t){const e=$(t);return!At()||!e.visualViewport?fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ae(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function G(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Rt(t);let s=V(1);e&&(o?H(o)&&(s=J(o)):s=J(t));const c=ae(r,n,o)?Bt(r):V(0);let f=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,a=i.width/s.x,u=i.height/s.y;if(r){const m=$(r),d=o&&H(o)?$(o):o;let h=m,g=wt(h);for(;g&&o&&d!==h;){const p=J(g),w=g.getBoundingClientRect(),v=N(g),y=w.left+(g.clientLeft+parseFloat(v.paddingLeft))*p.x,b=w.top+(g.clientTop+parseFloat(v.paddingTop))*p.y;f*=p.x,l*=p.y,a*=p.x,u*=p.y,f+=y,l+=b,h=$(g),g=wt(h)}}return lt({width:a,height:u,x:f,y:l})}function Ot(t,e){const n=dt(t).scrollLeft;return e?e.left+n:G(z(t)).left+n}function Ht(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:Ot(t,o)),r=o.top+e.scrollTop;return{x:i,y:r}}function ue(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=z(o),c=e?ut(e.floating):!1;if(o===s||c&&r)return n;let f={scrollLeft:0,scrollTop:0},l=V(1);const a=V(0),u=_(o);if((u||!u&&!r)&&((tt(o)!=="body"||ot(s))&&(f=dt(o)),_(o))){const d=G(o);l=J(o),a.x=d.x+o.clientLeft,a.y=d.y+o.clientTop}const m=s&&!u&&!r?Ht(s,f,!0):V(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-f.scrollLeft*l.x+a.x+m.x,y:n.y*l.y-f.scrollTop*l.y+a.y+m.y}}function de(t){return Array.from(t.getClientRects())}function me(t){const e=z(t),n=dt(t),o=t.ownerDocument.body,i=F(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=F(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ot(t);const c=-n.scrollTop;return N(o).direction==="rtl"&&(s+=F(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function he(t,e){const n=$(t),o=z(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,f=0;if(i){r=i.width,s=i.height;const l=At();(!l||l&&e==="fixed")&&(c=i.offsetLeft,f=i.offsetTop)}return{width:r,height:s,x:c,y:f}}function ge(t,e){const n=G(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?J(t):V(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,f=i*r.x,l=o*r.y;return{width:s,height:c,x:f,y:l}}function Lt(t,e,n){let o;if(e==="viewport")o=he(t,n);else if(e==="document")o=me(z(t));else if(H(e))o=ge(e,n);else{const i=Bt(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return lt(o)}function Nt(t,e){const n=K(t);return n===e||!H(n)||Q(n)?!1:N(n).position==="fixed"||Nt(n,e)}function pe(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(c=>H(c)&&tt(c)!=="body"),i=null;const r=N(t).position==="fixed";let s=r?K(t):t;for(;H(s)&&!Q(s);){const c=N(s),f=bt(s);!f&&c.position==="fixed"&&(i=null),(r?!f&&!i:!f&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!f&&Nt(t,s))?o=o.filter(a=>a!==s):i=c,s=K(s)}return e.set(t,o),o}function we(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ut(e)?[]:pe(e,this._c):[].concat(n),o],c=s[0],f=s.reduce((l,a)=>{const u=Lt(e,a,i);return l.top=F(u.top,l.top),l.right=X(u.right,l.right),l.bottom=X(u.bottom,l.bottom),l.left=F(u.left,l.left),l},Lt(e,c,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function xe(t){const{width:e,height:n}=Wt(t);return{width:e,height:n}}function ye(t,e,n){const o=_(e),i=z(e),r=n==="fixed",s=G(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const f=V(0);if(o||!o&&!r)if((tt(e)!=="body"||ot(i))&&(c=dt(e)),o){const m=G(e,!0,r,e);f.x=m.x+e.clientLeft,f.y=m.y+e.clientTop}else i&&(f.x=Ot(i));const l=i&&!o&&!r?Ht(i,c):V(0),a=s.left+c.scrollLeft-f.x-l.x,u=s.top+c.scrollTop-f.y-l.y;return{x:a,y:u,width:s.width,height:s.height}}function mt(t){return N(t).position==="static"}function Pt(t,e){if(!_(t)||N(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return z(t)===n&&(n=n.ownerDocument.body),n}function Vt(t,e){const n=$(t);if(ut(t))return n;if(!_(t)){let i=K(t);for(;i&&!Q(i);){if(H(i)&&!mt(i))return i;i=K(i)}return n}let o=Pt(t,e);for(;o&&ce(o)&&mt(o);)o=Pt(o,e);return o&&Q(o)&&mt(o)&&!bt(o)?n:o||le(t)||n}const ve=async function(t){const e=this.getOffsetParent||Vt,n=this.getDimensions,o=await n(t.floating);return{reference:ye(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function be(t){return N(t).direction==="rtl"}const Ae={convertOffsetParentRelativeRectToViewportRelativeRect:ue,getDocumentElement:z,getClippingRect:we,getOffsetParent:Vt,getElementRects:ve,getClientRects:de,getDimensions:xe,getScale:J,isElement:H,isRTL:be};function _t(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Re(t,e){let n=null,o;const i=z(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,f){c===void 0&&(c=!1),f===void 0&&(f=1),r();const l=t.getBoundingClientRect(),{left:a,top:u,width:m,height:d}=l;if(c||e(),!m||!d)return;const h=it(u),g=it(i.clientWidth-(a+m)),p=it(i.clientHeight-(u+d)),w=it(a),y={rootMargin:-h+"px "+-g+"px "+-p+"px "+-w+"px",threshold:F(0,X(1,f))||1};let b=!0;function x(O){const R=O[0].intersectionRatio;if(R!==f){if(!b)return s();R?s(!1,R):o=setTimeout(()=>{s(!1,1e-7)},1e3)}R===1&&!_t(l,t.getBoundingClientRect())&&s(),b=!1}try{n=new IntersectionObserver(x,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(x,y)}n.observe(t)}return s(!0),r}function Fe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,l=Rt(t),a=i||r?[...l?nt(l):[],...nt(e)]:[];a.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),r&&w.addEventListener("resize",n)});const u=l&&c?Re(l,n):null;let m=-1,d=null;s&&(d=new ResizeObserver(w=>{let[v]=w;v&&v.target===l&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=d)==null||y.observe(e)})),n()}),l&&!f&&d.observe(l),d.observe(e));let h,g=f?G(t):null;f&&p();function p(){const w=G(t);g&&!_t(g,w)&&n(),g=w,h=requestAnimationFrame(p)}return n(),()=>{var w;a.forEach(v=>{i&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),u==null||u(),(w=d)==null||w.disconnect(),d=null,f&&cancelAnimationFrame(h)}}const Oe=oe,Ce=ie,Ee=te,Se=se,De=ee,Tt=Zt,Le=re,Pe=(t,e,n)=>{const o=new Map,i={platform:Ae,...n},r={...i.platform,_c:o};return Qt(t,e,{...i,platform:r})};var rt=typeof document<"u"?E.useLayoutEffect:E.useEffect;function ft(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!ft(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!ft(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function zt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Mt(t,e){const n=zt(t);return Math.round(e*n)/n}function ht(t){const e=E.useRef(t);return rt(()=>{e.current=t}),e}function $e(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:c=!0,whileElementsMounted:f,open:l}=t,[a,u]=E.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,d]=E.useState(o);ft(m,o)||d(o);const[h,g]=E.useState(null),[p,w]=E.useState(null),v=E.useCallback(A=>{A!==O.current&&(O.current=A,g(A))},[]),y=E.useCallback(A=>{A!==R.current&&(R.current=A,w(A))},[]),b=r||h,x=s||p,O=E.useRef(null),R=E.useRef(null),L=E.useRef(a),W=f!=null,D=ht(f),B=ht(i),T=ht(l),P=E.useCallback(()=>{if(!O.current||!R.current)return;const A={placement:e,strategy:n,middleware:m};B.current&&(A.platform=B.current),Pe(O.current,R.current,A).then(k=>{const q={...k,isPositioned:T.current!==!1};C.current&&!ft(L.current,q)&&(L.current=q,jt.flushSync(()=>{u(q)}))})},[m,e,n,B,T]);rt(()=>{l===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,u(A=>({...A,isPositioned:!1})))},[l]);const C=E.useRef(!1);rt(()=>(C.current=!0,()=>{C.current=!1}),[]),rt(()=>{if(b&&(O.current=b),x&&(R.current=x),b&&x){if(D.current)return D.current(b,x,P);P()}},[b,x,P,D,W]);const j=E.useMemo(()=>({reference:O,floating:R,setReference:v,setFloating:y}),[v,y]),S=E.useMemo(()=>({reference:b,floating:x}),[b,x]),M=E.useMemo(()=>{const A={position:n,left:0,top:0};if(!S.floating)return A;const k=Mt(S.floating,a.x),q=Mt(S.floating,a.y);return c?{...A,transform:"translate("+k+"px, "+q+"px)",...zt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:k,top:q}},[n,c,S.floating,a.x,a.y]);return E.useMemo(()=>({...a,update:P,refs:j,elements:S,floatingStyles:M}),[a,P,j,S,M])}const Te=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Tt({element:o.current,padding:i}).fn(n):{}:o?Tt({element:o,padding:i}).fn(n):{}}}},We=(t,e)=>({...Oe(t),options:[t,e]}),Be=(t,e)=>({...Ce(t),options:[t,e]}),He=(t,e)=>({...Le(t),options:[t,e]}),Ne=(t,e)=>({...Ee(t),options:[t,e]}),Ve=(t,e)=>({...Se(t),options:[t,e]}),_e=(t,e)=>({...De(t),options:[t,e]}),ze=(t,e)=>({...Te(t),options:[t,e]});export{Ve as a,ze as b,Fe as c,Ne as f,_e as h,He as l,We as o,Be as s,$e as u};
