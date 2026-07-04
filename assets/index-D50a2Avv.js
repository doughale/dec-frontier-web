var Xu=Object.defineProperty;var qu=(r,e,t)=>e in r?Xu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var x=(r,e,t)=>qu(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Et(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&t.appendChild(n),n}const Yu=[{title:"General",rows:[["`  ·  ☰ MENU","Open this menu / switch scenes"]]},{title:"The Meridian — Command",rows:[["A / D","Yaw left / right"],["W / S","Pitch up / down"],["Q / E","Roll"],["R / F","Throttle up / down"],["X","All-stop"],["C","Bridge / chase camera"],["Shift + Click","Fire (Shift shows the reticle)"],["Click","Select target"],["P","Launch probe"],["1 / 2 / 3","Route power (hold Shift to draw out)"],["0","Balance power"],["7 / 8 / 9","Power presets"],["[ / ]","Cycle weapon"],["\\","Reset HUD layout"]]},{title:"Paladin — Sortie",rows:[["W / S","Pitch down / up"],["A / D","Bank-to-turn left / right"],["Q / E","Roll lean (±30°)"],["Shift + A / D","Strafe left / right"],["Shift + W / S","Ascend / descend"],["R / F","Throttle up / down"],["X","All-stop"],["Ctrl","Toggle fire mode (gun / rocket)"],["Left mouse","Fire the selected weapon"],["[ / ]  ·  click","Cycle / select weapon (gun · rocket · sniper)"],["Mouse wheel","Scope zoom — Vigil sniper"],["Space","Hold breath — steady the scope"],["N","Night vision"],["\\","Reset HUD layout"]]}];class Ku{constructor(e,t,n){x(this,"root");x(this,"panel");x(this,"controlsOverlay");x(this,"rows",new Map);x(this,"open",!1);x(this,"activeId",null);x(this,"onKey",e=>{e.code==="Backquote"&&!e.repeat?(e.preventDefault(),this.toggle()):e.code==="Escape"&&this.controlsOverlay.style.display!=="none"&&this.showControls(!1)});this.onEnter=n,this.root=Et("div","dev-menu",e);const i=Et("button","dev-menu-btn",this.root);i.type="button",i.textContent="☰ MENU",i.title="Scenes / options (`)",i.addEventListener("click",()=>this.toggle()),this.panel=Et("div","dev-menu-panel",this.root),Et("div","dev-menu-title",this.panel).textContent="DEV · SCENES";for(const a of t){const c=Et("button","dev-menu-row",this.panel);c.type="button",c.textContent=a.label,c.addEventListener("click",()=>this.onEnter(a.id)),this.rows.set(a.id,c)}const s=Et("button","dev-menu-row",this.panel);s.type="button",s.textContent="⌨ CONTROLS",s.addEventListener("click",()=>{this.close(),this.showControls(!0)});const o=Et("div","dev-menu-hint",this.panel);o.textContent="` toggles this menu",this.controlsOverlay=this.buildControls(e),this.setOpen(!1),window.addEventListener("keydown",this.onKey)}buildControls(e){const t=Et("div","controls-overlay",e);t.style.display="none",t.addEventListener("click",a=>{a.target===t&&this.showControls(!1)});const n=Et("div","controls-panel",t),i=Et("div","controls-head",n);Et("div","controls-title",i).textContent="CONTROLS";const s=Et("button","controls-close",i);s.type="button",s.textContent="✕",s.addEventListener("click",()=>this.showControls(!1));const o=Et("div","controls-cols",n);for(const a of Yu){const c=Et("div","controls-section",o);Et("div","controls-section-title",c).textContent=a.title;for(const[l,h]of a.rows){const u=Et("div","controls-row",c);Et("span","controls-keys",u).textContent=l,Et("span","controls-action",u).textContent=h}}return t}showControls(e){this.controlsOverlay.style.display=e?"":"none"}toggle(){this.setOpen(!this.open)}setOpen(e){this.open=e,this.panel.style.display=e?"":"none"}close(){this.setOpen(!1)}setActive(e){this.activeId=e;for(const[t,n]of this.rows)n.classList.toggle("active",t===this.activeId)}dispose(){window.removeEventListener("keydown",this.onKey),this.controlsOverlay.remove(),this.root.remove()}}class ju{constructor(e,t){x(this,"current",null);x(this,"sceneRoot",null);x(this,"menu");this.host=e,this.scenes=t,this.menu=new Ku(e,t.map(n=>({id:n.id,label:n.label})),n=>this.enter(n))}enter(e){var i,s;const t=this.scenes.find(o=>o.id===e);if(!t){console.warn(`App: unknown scene "${e}"`);return}(i=this.current)==null||i.dispose(),this.current=null,(s=this.sceneRoot)==null||s.remove();const n=document.createElement("div");n.className="scene-root",this.host.insertBefore(n,this.menu.root),this.sceneRoot=n,this.current=t.create(n),this.menu.setActive(e),this.menu.close()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="170",$u=0,wc=1,Zu=2,Xh=1,Qu=2,Un=3,zn=0,Vt=1,Mn=2,ei=0,Ki=1,pn=2,Ac=3,Rc=4,Ju=5,pi=100,ed=101,td=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Jo=204,ea=205,cd=206,ld=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,ta=0,na=1,ia=2,Ji=3,sa=4,ra=5,oa=6,aa=7,qh=0,_d=1,xd=2,ti=0,vd=1,Md=2,yd=3,Sd=4,Ed=5,Td=6,bd=7,Cc="attached",wd="detached",Yh=300,es=301,ts=302,ca=303,la=304,Zr=306,Sn=1e3,yn=1001,Vr=1002,At=1003,Kh=1004,Ds=1005,Yt=1006,Nr=1007,On=1008,Hn=1009,jh=1010,$h=1011,ks=1012,Xa=1013,_i=1014,sn=1015,Ys=1016,qa=1017,Ya=1018,ns=1020,Zh=35902,Qh=1021,Jh=1022,Kt=1023,eu=1024,tu=1025,ji=1026,is=1027,Ka=1028,ja=1029,nu=1030,$a=1031,Za=1033,Ur=33776,Fr=33777,Or=33778,Br=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37808,xa=37809,va=37810,Ma=37811,ya=37812,Sa=37813,Ea=37814,Ta=37815,ba=37816,wa=37817,Aa=37818,Ra=37819,Ca=37820,Ia=37821,kr=36492,Pa=36494,La=36495,iu=36283,Da=36284,Na=36285,Ua=36286,Ad=2200,Rd=2201,Cd=2202,zs=2300,Hs=2301,io=2302,Gi=2400,Wi=2401,Gr=2402,Qa=2500,Id=2501,Pd=0,su=1,Fa=2,Ld=3200,Dd=3201,ru=0,Nd=1,Qn="",bt="srgb",Ot="srgb-linear",Qr="linear",at="srgb",yi=7680,Ic=519,Ud=512,Fd=513,Od=514,ou=515,Bd=516,kd=517,zd=518,Hd=519,Oa=35044,Qs=35048,Pc="300 es",Bn=2e3,Wr=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const Fs=Math.PI/180,ss=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function Ja(r,e){return(r%e+e)%e}function Vd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Gd(r,e,t){return r!==e?(t-r)/(e-r):0}function Os(r,e,t){return(1-t)*r+t*e}function Wd(r,e,t,n){return Os(r,e,1-Math.exp(-t*n))}function Xd(r,e=1){return e-Math.abs(Ja(r,e*2)-e)}function qd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Yd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Kd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jd(r,e){return r+Math.random()*(e-r)}function $d(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(Lc=r);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(r){return r*Fs}function Jd(r){return r*ss}function ef(r){return(r&r-1)===0&&r!==0}function tf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function nf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*p,a*l);break;case"YXY":r.set(c*p,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:Fs,RAD2DEG:ss,generateUUID:mn,clamp:Pt,euclideanModulo:Ja,mapLinear:Vd,inverseLerp:Gd,lerp:Os,damp:Wd,pingpong:Xd,smoothstep:qd,smootherstep:Yd,randInt:Kd,randFloat:jd,randFloatSpread:$d,seededRandom:Zd,degToRad:Qd,radToDeg:Jd,isPowerOfTwo:ef,ceilPowerOfTwo:tf,floorPowerOfTwo:nf,setQuaternionFromProperEuler:sf,normalize:ot,denormalize:dn};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,s,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],T=i[1],S=i[4],v=i[7],L=i[2],R=i[5],C=i[8];return s[0]=o*_+a*T+c*L,s[3]=o*m+a*S+c*R,s[6]=o*f+a*v+c*C,s[1]=l*_+h*T+u*L,s[4]=l*m+h*S+u*R,s[7]=l*f+h*v+u*C,s[2]=d*_+p*T+g*L,s[5]=d*m+p*S+g*R,s[8]=d*f+p*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,p=l*s-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Ve;function au(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function of(){const r=Vs("canvas");return r.style.display="block",r}const Dc={};function Ns(r){r in Dc||(Dc[r]=!0,console.warn(r))}function af(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function cf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Qr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $i(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Nc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Fc=[.3127,.329],Oc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Ot]:{primaries:Nc,whitePoint:Fc,transfer:Qr,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:Nc,whitePoint:Fc,transfer:at,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});let Si;class hf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Vs("canvas")),Si.width=e.width,Si.height=e.height;const n=Si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uf=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ro(i[o].image)):s.push(ro(i[o]))}else s=ro(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ro(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let df=0;class Mt extends vi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=yn,i=yn,s=Yt,o=On,a=Kt,c=Hn,l=Mt.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=mn(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Yh;Mt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(p+1)/2,L=(f+1)/2,R=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return S>v&&S>L?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=R/n,s=C/n):v>L?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=P/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=C/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ff extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends ff{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lu extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,f*T);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const v=a*T;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new w,kc=new tt;class Vn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),er.subVectors(this.max,gs),Ei.subVectors(e.a,gs),Ti.subVectors(e.b,gs),bi.subVectors(e.c,gs),Xn.subVectors(Ti,Ei),qn.subVectors(bi,Ti),ii.subVectors(Ei,bi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ii.z,ii.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ii.z,0,-ii.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ii.y,ii.x,0];return!ao(t,Ei,Ti,bi,er)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,Ei,Ti,bi,er))?!1:(tr.crossVectors(Xn,qn),t=[tr.x,tr.y,tr.z],ao(t,Ei,Ti,bi,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new w,new w,new w,new w,new w,new w,new w,new w],ln=new w,Js=new Vn,Ei=new w,Ti=new w,bi=new w,Xn=new w,qn=new w,ii=new w,gs=new w,er=new w,tr=new w,si=new w;function ao(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){si.fromArray(r,s);const a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mf=new Vn,_s=new w,co=new w;class Tn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(co)),this.expandByPoint(_s.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new w,lo=new w,nr=new w,Yn=new w,ho=new w,ir=new w,uo=new w;class Jr{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lo.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nr),a=Yn.dot(this.direction),c=-Yn.dot(nr),l=Yn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(lo).addScaledVector(nr,d),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,s){ho.subVectors(t,e),ir.subVectors(n,e),uo.crossVectors(ho,ir);let o=this.direction.dot(uo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const c=a*this.direction.dot(ir.crossVectors(Yn,ir));if(c<0)return null;const l=a*this.direction.dot(ho.cross(Yn));if(l<0||c+l>o)return null;const h=-a*Yn.dot(uo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,o,a,c,l,h,u,d,p,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,_f)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Kn.crossVectors(n,Wt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Kn.crossVectors(n,Wt)),Kn.normalize(),sr.crossVectors(Wt,Kn),i[0]=Kn.x,i[4]=sr.x,i[8]=Wt.x,i[1]=Kn.y,i[5]=sr.y,i[9]=Wt.y,i[2]=Kn.z,i[6]=sr.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],S=n[7],v=n[11],L=n[15],R=i[0],C=i[4],P=i[8],y=i[12],M=i[1],I=i[5],k=i[9],z=i[13],q=i[2],$=i[6],Y=i[10],X=i[14],W=i[3],ne=i[7],oe=i[11],fe=i[15];return s[0]=o*R+a*M+c*q+l*W,s[4]=o*C+a*I+c*$+l*ne,s[8]=o*P+a*k+c*Y+l*oe,s[12]=o*y+a*z+c*X+l*fe,s[1]=h*R+u*M+d*q+p*W,s[5]=h*C+u*I+d*$+p*ne,s[9]=h*P+u*k+d*Y+p*oe,s[13]=h*y+u*z+d*X+p*fe,s[2]=g*R+_*M+m*q+f*W,s[6]=g*C+_*I+m*$+f*ne,s[10]=g*P+_*k+m*Y+f*oe,s[14]=g*y+_*z+m*X+f*fe,s[3]=T*R+S*M+v*q+L*W,s[7]=T*C+S*I+v*$+L*ne,s[11]=T*P+S*k+v*Y+L*oe,s[15]=T*y+S*z+v*X+L*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+s*o*d-i*o*p+i*l*h-s*c*h)+m*(+t*l*u-t*a*p-s*o*u+n*o*p+s*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,S=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*T+n*S+i*v+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*f-n*d*f)*C,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*f+n*c*f)*C,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*p-n*c*p)*C,e[4]=S*C,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*C,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*f-t*c*f)*C,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*p+t*c*p)*C,e[8]=v*C,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*f-t*u*f)*C,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*f+t*a*f)*C,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*p-t*a*p)*C,e[12]=L*C,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,T=c*l,S=c*h,v=c*u,L=n.x,R=n.y,C=n.z;return i[0]=(1-(_+f))*L,i[1]=(p+v)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(p-v)*R,i[5]=(1-(d+f))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+S)*C,i[9]=(m-T)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const l=1/s,h=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Bn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Bn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Wr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Bn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,p=(n+i)*h;let g,_;if(a===Bn)g=(o+s)*u,_=-2*u;else if(a===Wr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new w,hn=new ke,gf=new w(0,0,0),_f=new w(1,1,1),Kn=new w,sr=new w,Wt=new w,zc=new ke,Hc=new tt;class on{constructor(e=0,t=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xf=0;const Vc=new w,Ai=new tt,Pn=new ke,rr=new w,xs=new w,vf=new w,Mf=new tt,Gc=new w(1,0,0),Wc=new w(0,1,0),Xc=new w(0,0,1),qc={type:"added"},yf={type:"removed"},Ri={type:"childadded",child:null},fo={type:"childremoved",child:null};class ft extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new w,t=new on,n=new tt,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(xs,rr,this.up):Pn.lookAt(rr,xs,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new w(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new w,Ln=new w,po=new w,Dn=new w,Ci=new w,Ii=new w,Yc=new w,mo=new w,go=new w,_o=new w,xo=new nt,vo=new nt,Mo=new nt;class tn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),Ln.subVectors(n,t),po.subVectors(e,t);const o=un.dot(un),a=un.dot(Ln),c=un.dot(po),l=Ln.dot(Ln),h=Ln.dot(po),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return xo.setScalar(0),vo.setScalar(0),Mo.setScalar(0),xo.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(xo,s.x),o.addScaledVector(vo,s.y),o.addScaledVector(Mo,s.z),o}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Ln.subVectors(e,t),un.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ci.subVectors(i,n),Ii.subVectors(s,n),mo.subVectors(e,n);const c=Ci.dot(mo),l=Ii.dot(mo);if(c<=0&&l<=0)return t.copy(n);go.subVectors(e,i);const h=Ci.dot(go),u=Ii.dot(go);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ci,o);_o.subVectors(e,s);const p=Ci.dot(_o),g=Ii.dot(_o);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ii,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Yc.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Yc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Ci,o).addScaledVector(Ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},or={h:0,s:0,l:0};function yo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Ja(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yo(o,s,e+1/3),this.g=yo(o,s,e),this.b=yo(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Ye.fromWorkingColorSpace(It.copy(this),e),Math.round(Pt(It.r*255,0,255))*65536+Math.round(Pt(It.g*255,0,255))*256+Math.round(Pt(It.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=bt){Ye.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(or);const n=Os(jn.h,or.h,t),i=Os(jn.s,or.s,t),s=Os(jn.l,or.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ce;Ce.NAMES=uu;let Sf=0;class gn extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=mn(),this.name="",this.blending=Ki,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=ea,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jt extends gn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new w,ar=new Le;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class du extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fu extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ef=0;const Qt=new ke,So=new ft,Pi=new w,Xt=new Vn,vs=new Vn,Tt=new w;class Dt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(au(e)?fu:du)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Xt.min,vs.min),Xt.expandByPoint(Tt),Tt.addVectors(Xt.max,vs.max),Xt.expandByPoint(Tt)):(Xt.expandByPoint(vs.min),Xt.expandByPoint(vs.max))}Xt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Tt.fromBufferAttribute(a,l),c&&(Pi.fromBufferAttribute(e,l),Tt.add(Pi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new w,c[P]=new w;const l=new w,h=new w,u=new w,d=new Le,p=new Le,g=new Le,_=new w,m=new w;function f(P,y,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(_),a[y].add(_),a[M].add(_),c[P].add(m),c[y].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,y=T.length;P<y;++P){const M=T[P],I=M.start,k=M.count;for(let z=I,q=I+k;z<q;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new w,v=new w,L=new w,R=new w;function C(P){L.fromBufferAttribute(i,P),R.copy(L);const y=a[P];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),v.crossVectors(R,y);const I=v.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,I)}for(let P=0,y=T.length;P<y;++P){const M=T[P],I=M.start,k=M.count;for(let z=I,q=I+k;z<q;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new ke,ri=new Jr,cr=new Tn,jc=new w,lr=new w,hr=new w,ur=new w,Eo=new w,dr=new w,$c=new w,fr=new w;class Be extends ft{constructor(e=new Dt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){dr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Eo.fromBufferAttribute(u,e),o?dr.addScaledVector(Eo,h):dr.addScaledVector(Eo.sub(t),h))}t.add(dr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(cr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(cr,jc)===null||ri.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Kc.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,L=S;v<L;v+=3){const R=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);i=pr(this,f,e,n,l,h,u,R,C,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=pr(this,o,e,n,l,h,u,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,L=S;v<L;v+=3){const R=v,C=v+1,P=v+2;i=pr(this,f,e,n,l,h,u,R,C,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,S=m+1,v=m+2;i=pr(this,o,e,n,l,h,u,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Tf(r,e,t,n,i,s,o,a){let c;if(e.side===Vt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===zn,a),c===null)return null;fr.copy(a),fr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(fr);return l<t.near||l>t.far?null:{distance:l,point:fr.clone(),object:r}}function pr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,lr),r.getVertexPosition(c,hr),r.getVertexPosition(l,ur);const h=Tf(r,e,t,n,lr,hr,ur,$c);if(h){const u=new w;tn.getBarycoord($c,lr,hr,ur,u),i&&(h.uv=tn.getInterpolatedAttribute(i,a,c,l,u,new Le)),s&&(h.uv1=tn.getInterpolatedAttribute(s,a,c,l,u,new Le)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new w,materialIndex:0};tn.getNormal(lr,hr,ur,d.normal),h.face=d,h.barycoord=u}return h}class Ht extends Dt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,f,T,S,v,L,R,C,P,y){const M=v/C,I=L/P,k=v/2,z=L/2,q=R/2,$=C+1,Y=P+1;let X=0,W=0;const ne=new w;for(let oe=0;oe<Y;oe++){const fe=oe*I-z;for(let Ie=0;Ie<$;Ie++){const Je=Ie*M-k;ne[_]=Je*T,ne[m]=fe*S,ne[f]=q,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ie/C),u.push(1-oe/P),X+=1}}for(let oe=0;oe<P;oe++)for(let fe=0;fe<C;fe++){const Ie=d+fe+$*oe,Je=d+fe+$*(oe+1),j=d+(fe+1)+$*(oe+1),ie=d+(fe+1)+$*oe;c.push(Ie,Je,ie),c.push(Je,j,ie),W+=6}a.addGroup(p,W,y),p+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const n=rs(r[t]);for(const i in n)e[i]=n[i]}return e}function bf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function pu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const wf={clone:rs,merge:Ut};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends gn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new w,Zc=new Le,Qc=new Le;class Lt extends mu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Qc),t.subVectors(Qc,Zc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Di=1;class Cf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(Li,Di,e,t);i.layers=this.layers,this.add(i);const s=new Lt(Li,Di,e,t);s.layers=this.layers,this.add(s);const o=new Lt(Li,Di,e,t);o.layers=this.layers,this.add(o);const a=new Lt(Li,Di,e,t);a.layers=this.layers,this.add(a);const c=new Lt(Li,Di,e,t);c.layers=this.layers,this.add(c);const l=new Lt(Li,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gu extends Mt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class If extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ht(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ei});s.uniforms.tEquirect.value=t;const o=new Be(i,s),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Yt),new Cf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const To=new w,Pf=new w,Lf=new Ve;class di{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lf.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Tn,mr=new w;class ec{constructor(e=new di,t=new di,n=new di,i=new di,s=new di,o=new di){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],T=i[13],S=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,m-p,v-f).normalize(),n[1].setComponents(c+s,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+h,m+g,v+T).normalize(),n[3].setComponents(c-o,d-h,m-g,v-T).normalize(),n[4].setComponents(c-a,d-u,m-_,v-S).normalize(),t===Bn)n[5].setComponents(c+a,d+u,m+_,v+S).normalize();else if(t===Wr)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mr.x=i.normal.x>0?e.max.x:e.min.x,mr.y=i.normal.y>0?e.max.y:e.min.y,mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _u(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Df(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class ls extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const T=f*d-o;for(let S=0;S<l;S++){const v=S*u-s;g.push(v,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const S=T+l*f,v=T+l*(f+1),L=T+1+l*(f+1),R=T+1+l*f;p.push(S,v,R),p.push(v,L,R)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Nf,alphahash_pars_fragment:Uf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:zf,aomap_pars_fragment:Hf,batching_pars_vertex:Vf,batching_vertex:Gf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:Kf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Qf,color_fragment:Jf,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:op,displacementmap_vertex:ap,emissivemap_fragment:cp,emissivemap_pars_fragment:lp,colorspace_fragment:hp,colorspace_pars_fragment:up,envmap_fragment:dp,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:wp,envmap_vertex:gp,fog_vertex:_p,fog_pars_vertex:xp,fog_fragment:vp,fog_pars_fragment:Mp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Sp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:bp,lights_toon_fragment:Ap,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Pp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Dp,lights_fragment_maps:Np,lights_fragment_end:Up,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:kp,map_fragment:zp,map_pars_fragment:Hp,map_particle_fragment:Vp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:Yp,morphnormal_vertex:Kp,morphtarget_pars_vertex:jp,morphtarget_vertex:$p,normal_fragment_begin:Zp,normal_fragment_maps:Qp,normal_pars_fragment:Jp,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:om,opaque_fragment:am,packing:cm,premultiplied_alpha_fragment:lm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:vm,skinning_pars_vertex:Mm,skinning_vertex:ym,skinnormal_vertex:Sm,specularmap_fragment:Em,specularmap_pars_fragment:Tm,tonemapping_fragment:bm,tonemapping_pars_fragment:wm,transmission_fragment:Am,transmission_pars_fragment:Rm,uv_pars_fragment:Cm,uv_pars_vertex:Im,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Dm,background_frag:Nm,backgroundCube_vert:Um,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:km,depth_frag:zm,distanceRGBA_vert:Hm,distanceRGBA_frag:Vm,equirect_vert:Gm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Km,meshlambert_vert:jm,meshlambert_frag:$m,meshmatcap_vert:Zm,meshmatcap_frag:Qm,meshnormal_vert:Jm,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},le={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vn={basic:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([le.lights,le.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};vn.physical={uniforms:Ut([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const gr={r:0,b:0,g:0},ai=new on,fg=new ke;function pg(r,e,t,n,i,s,o){const a=new Ce(0);let c=s===!0?0:1,l,h,u=null,d=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1;const v=g(T);v===null?f(a,c):v&&v.isColor&&(f(v,1),S=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===Zr)?(h===void 0&&(h=new Be(new Ht(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:rs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(S.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(ai)),h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==at,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Be(new ls(2,2),new En({name:"BackgroundMaterial",uniforms:rs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,S){T.getRGB(gr,pu(r)),n.buffers.color.setClear(gr.r,gr.g,gr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:_,addToRenderList:m}}function mg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,I,k,z,q){let $=!1;const Y=u(z,k,I);s!==Y&&(s=Y,l(s.object)),$=p(M,z,k,q),$&&g(M,z,k,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,I,k,z),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,k){const z=k.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let $=q[I.id];$===void 0&&($={},q[I.id]=$);let Y=$[z];return Y===void 0&&(Y=d(c()),$[z]=Y),Y}function d(M){const I=[],k=[],z=[];for(let q=0;q<t;q++)I[q]=0,k[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,I,k,z){const q=s.attributes,$=I.attributes;let Y=0;const X=k.getAttributes();for(const W in X)if(X[W].location>=0){const oe=q[W];let fe=$[W];if(fe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function g(M,I,k,z){const q={},$=I.attributes;let Y=0;const X=k.getAttributes();for(const W in X)if(X[W].location>=0){let oe=$[W];oe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),q[W]=fe,Y++}s.attributes=q,s.attributesNum=Y,s.index=z}function _(){const M=s.newAttributes;for(let I=0,k=M.length;I<k;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const k=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;k[M]=1,z[M]===0&&(r.enableVertexAttribArray(M),z[M]=1),q[M]!==I&&(r.vertexAttribDivisor(M,I),q[M]=I)}function T(){const M=s.newAttributes,I=s.enabledAttributes;for(let k=0,z=I.length;k<z;k++)I[k]!==M[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function S(M,I,k,z,q,$,Y){Y===!0?r.vertexAttribIPointer(M,I,k,q,$):r.vertexAttribPointer(M,I,k,z,q,$)}function v(M,I,k,z){_();const q=z.attributes,$=k.getAttributes(),Y=I.defaultAttributeValues;for(const X in $){const W=$[X];if(W.location>=0){let ne=q[X];if(ne===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const oe=ne.normalized,fe=ne.itemSize,Ie=e.get(ne);if(Ie===void 0)continue;const Je=Ie.buffer,j=Ie.type,ie=Ie.bytesPerElement,N=j===r.INT||j===r.UNSIGNED_INT||ne.gpuType===Xa;if(ne.isInterleavedBufferAttribute){const D=ne.data,J=D.stride,ae=ne.offset;if(D.isInstancedInterleavedBuffer){for(let ce=0;ce<W.locationSize;ce++)f(W.location+ce,D.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let ce=0;ce<W.locationSize;ce++)S(W.location+ce,fe/W.locationSize,j,oe,J*ie,(ae+fe/W.locationSize*ce)*ie,N)}else{if(ne.isInstancedBufferAttribute){for(let D=0;D<W.locationSize;D++)f(W.location+D,ne.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let D=0;D<W.locationSize;D++)m(W.location+D);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let D=0;D<W.locationSize;D++)S(W.location+D,fe/W.locationSize,j,oe,fe*ie,fe/W.locationSize*D*ie,N)}}else if(Y!==void 0){const oe=Y[X];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(W.location,oe);break;case 3:r.vertexAttrib3fv(W.location,oe);break;case 4:r.vertexAttrib4fv(W.location,oe);break;default:r.vertexAttrib1fv(W.location,oe)}}}}T()}function L(){P();for(const M in n){const I=n[M];for(const k in I){const z=I[k];for(const q in z)h(z[q].object),delete z[q];delete I[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const k in I){const z=I[k];for(const q in z)h(z[q].object),delete z[q];delete I[k]}delete n[M.id]}function C(M){for(const I in n){const k=n[I];if(k[M.id]===void 0)continue;const z=k[M.id];for(const q in z)h(z[q].object),delete z[q];delete k[M.id]}}function P(){y(),o=!0,s!==i&&(s=i,l(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function gg(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _g(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Kt&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==sn&&!P)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:L,maxSamples:R}}function xg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new di,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const T=s?0:n,S=T*4;let v=f.clippingState||null;c.value=v,v=h(g,d,S,p);for(let L=0;L!==S;++L)v[L]=t[L];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vg(r){let e=new WeakMap;function t(o,a){return a===ca?o.mapping=es:a===la&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===la)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new If(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class tc extends mu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Jc=[.125,.215,.35,.446,.526,.582],mi=20,bo=new tc,el=new Ce;let wo=null,Ao=0,Ro=0,Co=!1;const fi=(1+Math.sqrt(5))/2,Ni=1/fi,tl=[new w(-fi,Ni,0),new w(fi,Ni,0),new w(-Ni,0,fi),new w(Ni,0,fi),new w(0,fi,-Ni),new w(0,fi,Ni),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ao,Ro),this._renderer.xr.enabled=Co,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ys,format:Kt,colorSpace:Ot,depthBuffer:!1},i=il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(s)),this._blurMaterial=yg(s,e,t)}return i}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){const a=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(el),h.toneMapping=ti,h.autoClear=!1;const p=new jt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Be(new Ht,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(el),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;_r(i,T*S,f>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tl[(i-s-1)%tl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const f=[];let T=0;for(let C=0;C<mi;++C){const P=C/_,y=Math.exp(-P*P/2);f.push(y),C===0?T+=y:C<m&&(T+=2*y)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[i],L=3*v*(i>S-Xi?i-S+Xi:0),R=4*(this._cubeSize-v);_r(t,L,R,3*v,2*v),c.setRenderTarget(t),c.render(u,bo)}}function Mg(r){const e=[],t=[],n=[];let i=r;const s=r-Xi+1+Jc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Xi?c=Jc[o-r+Xi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,P=R>2?0:-1,y=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];T.set(y,_*g*R),S.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,f*g*R)}const L=new Dt;L.setAttribute("position",new Ft(T,_)),L.setAttribute("uv",new Ft(S,m)),L.setAttribute("faceIndex",new Ft(v,f)),e.push(L),i>Xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function il(r,e,t){const n=new xi(r,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yg(r,e,t){const n=new Float32Array(mi),i=new w(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function rl(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ca||c===la,h=c===es||c===ts;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nl(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new nl(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Eg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tg(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let S=0,v=T.length;S<v;S+=3){const L=T[S+0],R=T[S+1],C=T[S+2];d.push(L,R,R,C,C,L)}}else if(g!==void 0){const T=g.array;_=g.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const L=S+0,R=S+1,C=S+2;d.push(L,R,R,C,C,L)}}else return;const m=new(au(d)?fu:du)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function bg(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ag(r,e,t){const n=new WeakMap,i=new nt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*R*4*u),P=new lu(C,L,R,u);P.type=sn,P.needsUpdate=!0;const y=v*4;for(let I=0;I<u;I++){const k=f[I],z=T[I],q=S[I],$=L*R*4*I;for(let Y=0;Y<k.count;Y++){const X=Y*y;g===!0&&(i.fromBufferAttribute(k,Y),C[$+X+0]=i.x,C[$+X+1]=i.y,C[$+X+2]=i.z,C[$+X+3]=0),_===!0&&(i.fromBufferAttribute(z,Y),C[$+X+4]=i.x,C[$+X+5]=i.y,C[$+X+6]=i.z,C[$+X+7]=0),m===!0&&(i.fromBufferAttribute(q,Y),C[$+X+8]=i.x,C[$+X+9]=i.y,C[$+X+10]=i.z,C[$+X+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Le(L,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Rg(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class xu extends Mt{constructor(e,t,n,i,s,o,a,c,l,h=ji){if(h!==ji&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=_i),n===void 0&&h===is&&(n=ns),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vu=new Mt,ol=new xu(1,1),Mu=new lu,yu=new pf,Su=new gu,al=[],cl=[],ll=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function hs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=al[i];if(s===void 0&&(s=new Float32Array(i),al[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function eo(r,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function Lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function Dg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;ul.set(n),r.uniformMatrix2fv(this.addr,!1,ul),St(t,n)}}function Ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;hl.set(n),r.uniformMatrix3fv(this.addr,!1,hl),St(t,n)}}function Ug(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;ll.set(n),r.uniformMatrix4fv(this.addr,!1,ll),St(t,n)}}function Fg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function zg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function Wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ol.compareFunction=ou,s=ol):s=vu,t.setTexture2D(e||s,i)}function Xg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yu,i)}function qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Su,i)}function Yg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mu,i)}function Kg(r){switch(r){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function jg(r,e){r.uniform1fv(this.addr,e)}function $g(r,e){const t=hs(e,this.size,2);r.uniform2fv(this.addr,t)}function Zg(r,e){const t=hs(e,this.size,3);r.uniform3fv(this.addr,t)}function Qg(r,e){const t=hs(e,this.size,4);r.uniform4fv(this.addr,t)}function Jg(r,e){const t=hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function e_(r,e){const t=hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function t_(r,e){const t=hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function n_(r,e){r.uniform1iv(this.addr,e)}function i_(r,e){r.uniform2iv(this.addr,e)}function s_(r,e){r.uniform3iv(this.addr,e)}function r_(r,e){r.uniform4iv(this.addr,e)}function o_(r,e){r.uniform1uiv(this.addr,e)}function a_(r,e){r.uniform2uiv(this.addr,e)}function c_(r,e){r.uniform3uiv(this.addr,e)}function l_(r,e){r.uniform4uiv(this.addr,e)}function h_(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vu,s[o])}function u_(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||yu,s[o])}function d_(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Su,s[o])}function f_(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Mu,s[o])}function p_(r){switch(r){case 5126:return jg;case 35664:return $g;case 35665:return Zg;case 35666:return Qg;case 35674:return Jg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}}class __{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function dl(r,e){r.seq.push(e),r.map[e.id]=e}function x_(r,e,t){const n=r.name,i=n.length;for(Io.lastIndex=0;;){const s=Io.exec(n),o=Io.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){dl(t,l===void 0?new m_(a,r,e):new g_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new __(a),dl(t,u)),t=u}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);x_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function fl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const v_=37297;let M_=0;function y_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const pl=new Ve;function S_(r){Ye._getMatrix(pl,Ye.workingColorSpace,r);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(r)){case Qr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ml(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+y_(r.getShaderSource(e),o)}else return i}function E_(r,e){const t=S_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T_(r,e){let t;switch(e){case vd:t="Linear";break;case Md:t="Reinhard";break;case yd:t="Cineon";break;case Sd:t="ACESFilmic";break;case Td:t="AgX";break;case bd:t="Neutral";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new w;function b_(){Ye.getLuminanceCoefficients(xr);const r=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function A_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Us(r){return r!==""}function gl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(r){return r.replace(C_,P_)}const I_=new Map;function P_(r,e){let t=We[e];if(t===void 0){const n=I_.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(r){return r.replace(L_,D_)}function D_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function U_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function O_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function B_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function k_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=N_(t),l=U_(t),h=F_(t),u=O_(t),d=B_(t),p=w_(t),g=A_(s),_=i.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),f.length>0&&(f+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),f=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?We.tonemapping_pars_fragment:"",t.toneMapping!==ti?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),b_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=Ba(o),o=gl(o,t),o=_l(o,t),a=Ba(a),a=gl(a,t),a=_l(a,t),o=xl(o),a=xl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+m+o,v=T+f+a,L=fl(i,i.VERTEX_SHADER,S),R=fl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,L),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(L).trim(),q=i.getShaderInfoLog(R).trim();let $=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,R);else{const X=ml(i,L,"vertex"),W=ml(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+X+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||q==="")&&(Y=!1);Y&&(I.diagnostics={runnable:$,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:f}})}i.deleteShader(L),i.deleteShader(R),P=new zr(i,_),y=R_(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,v_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let z_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V_(e),t.set(e,n)),n}}class V_{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}}function G_(r,e,t,n,i,s,o){const a=new hu,c=new H_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,k,z){const q=k.fog,$=z.geometry,Y=y.isMeshStandardMaterial?k.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),W=X&&X.mapping===Zr?X.image.height:null,ne=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fe=oe!==void 0?oe.length:0;let Ie=0;$.morphAttributes.position!==void 0&&(Ie=1),$.morphAttributes.normal!==void 0&&(Ie=2),$.morphAttributes.color!==void 0&&(Ie=3);let Je,j,ie,N;if(ne){const rt=vn[ne];Je=rt.vertexShader,j=rt.fragmentShader}else Je=y.vertexShader,j=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),N=c.getFragmentShaderID(y);const D=r.getRenderTarget(),J=r.state.buffers.depth.getReversed(),ae=z.isInstancedMesh===!0,ce=z.isBatchedMesh===!0,Re=!!y.map,_e=!!y.matcap,ye=!!X,U=!!y.aoMap,pt=!!y.lightMap,Ue=!!y.bumpMap,Fe=!!y.normalMap,be=!!y.displacementMap,je=!!y.emissiveMap,he=!!y.metalnessMap,A=!!y.roughnessMap,E=y.anisotropy>0,H=y.clearcoat>0,Q=y.dispersion>0,te=y.iridescence>0,Z=y.sheen>0,we=y.transmission>0,de=E&&!!y.anisotropyMap,xe=H&&!!y.clearcoatMap,$e=H&&!!y.clearcoatNormalMap,se=H&&!!y.clearcoatRoughnessMap,ve=te&&!!y.iridescenceMap,Pe=te&&!!y.iridescenceThicknessMap,De=Z&&!!y.sheenColorMap,Me=Z&&!!y.sheenRoughnessMap,Ke=!!y.specularMap,Ge=!!y.specularColorMap,ct=!!y.specularIntensityMap,F=we&&!!y.transmissionMap,ue=we&&!!y.thicknessMap,K=!!y.gradientMap,ee=!!y.alphaMap,ge=y.alphaTest>0,pe=!!y.alphaHash,ze=!!y.extensions;let gt=ti;y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Rt={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:j,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ce,batchingColor:ce&&z._colorsTexture!==null,instancing:ae,instancingColor:ae&&z.instanceColor!==null,instancingMorph:ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?r.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ot,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:_e,envMap:ye,envMapMode:ye&&X.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:pt,bumpMap:Ue,normalMap:Fe,displacementMap:d&&be,emissiveMap:je,normalMapObjectSpace:Fe&&y.normalMapType===Nd,normalMapTangentSpace:Fe&&y.normalMapType===ru,metalnessMap:he,roughnessMap:A,anisotropy:E,anisotropyMap:de,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:$e,clearcoatRoughnessMap:se,dispersion:Q,iridescence:te,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:Z,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:ct,transmission:we,transmissionMap:F,thicknessMap:ue,gradientMap:K,opaque:y.transparent===!1&&y.blending===Ki&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:pe,combine:y.combine,mapUv:Re&&_(y.map.channel),aoMapUv:U&&_(y.aoMap.channel),lightMapUv:pt&&_(y.lightMap.channel),bumpMapUv:Ue&&_(y.bumpMap.channel),normalMapUv:Fe&&_(y.normalMap.channel),displacementMapUv:be&&_(y.displacementMap.channel),emissiveMapUv:je&&_(y.emissiveMap.channel),metalnessMapUv:he&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:de&&_(y.anisotropyMap.channel),clearcoatMapUv:xe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(y.sheenRoughnessMap.channel),specularMapUv:Ke&&_(y.specularMap.channel),specularColorMapUv:Ge&&_(y.specularColorMap.channel),specularIntensityMapUv:ct&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:ue&&_(y.thicknessMap.channel),alphaMapUv:ee&&_(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Fe||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Re||ee),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:J,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:je&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ze&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&y.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(T(M,y),S(M,y),M.push(r.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let I;if(M){const k=vn[M];I=wf.clone(k.uniforms)}else I=y.uniforms;return I}function L(y,M){let I;for(let k=0,z=h.length;k<z;k++){const q=h[k];if(q.cacheKey===M){I=q,++I.usedTimes;break}}return I===void 0&&(I=new k_(r,M,y,s),h.push(I)),I}function R(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:P}}function W_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function X_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ml(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||X_),n.length>1&&n.sort(d||Ml),i.length>1&&i.sort(d||Ml)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function q_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new yl,r.set(n,[o])):i>=s.length?(o=new yl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Y_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ce};break;case"SpotLight":t={position:new w,direction:new w,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function K_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let j_=0;function $_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Z_(r){const e=new Y_,t=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const i=new w,s=new ke,o=new ke;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,S=0,v=0,L=0,R=0,C=0;l.sort($_);for(let y=0,M=l.length;y<M;y++){const I=l[y],k=I.color,z=I.intensity,q=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*z,u+=k.g*z,d+=k.b*z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],z);C++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,W=t.get(I);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=Y,p++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(k).multiplyScalar(z),Y.distance=q,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;const X=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,X.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=X.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=$,v++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(k).multiplyScalar(z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const X=I.shadow,W=t.get(I);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(z),Y.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[f]=Y,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=C,n.version=j_++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const S=l[f];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Sl(r){const e=new Z_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Q_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Sl(r),e.set(i,[a])):s>=o.length?(a=new Sl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class J_ extends gn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e0 extends gn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i0(r,e,t){let n=new ec;const i=new Le,s=new Le,o=new nt,a=new J_({depthPacking:Dd}),c=new e0,l={},h=t.maxTextureSize,u={[zn]:Vt,[Vt]:zn,[Mn]:Mn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let f=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=f!==Un&&this.type===Un,q=f===Un&&this.type!==Un;for(let $=0,Y=R.length;$<Y;$++){const X=R[$],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ne=W.getFrameExtents();if(i.multiply(ne),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,W.mapSize.y=s.y)),W.map===null||z===!0||q===!0){const fe=this.type!==Un?{minFilter:At,magFilter:At}:{};W.map!==null&&W.map.dispose(),W.map=new xi(i.x,i.y,fe),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const oe=W.getViewportCount();for(let fe=0;fe<oe;fe++){const Ie=W.getViewport(fe);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),k.viewport(o),W.updateMatrices(X,fe),n=W.getFrustum(),v(C,P,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Un&&T(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(y,M,I)};function T(R,C){const P=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(C,null,P,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(C,null,P,p,_,null)}function S(R,C,P,y){let M=null;const I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,z=C.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let $=q[z];$===void 0&&($=M.clone(),q[z]=$,C.addEventListener("dispose",L)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,y===Un?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=P}return M}function v(R,C,P,y,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const z=e.update(R),q=R.material;if(Array.isArray(q)){const $=z.groups;for(let Y=0,X=$.length;Y<X;Y++){const W=$[Y],ne=q[W.materialIndex];if(ne&&ne.visible){const oe=S(R,ne,y,M);R.onBeforeShadow(r,R,C,P,z,oe,W),r.renderBufferDirect(P,null,z,oe,R,W),R.onAfterShadow(r,R,C,P,z,oe,W)}}}else if(q.visible){const $=S(R,q,y,M);R.onBeforeShadow(r,R,C,P,z,$,null),r.renderBufferDirect(P,null,z,$,R,null),R.onAfterShadow(r,R,C,P,z,$,null)}}const k=R.children;for(let z=0,q=k.length;z<q;z++)v(k[z],C,P,y,M)}function L(R){R.target.removeEventListener("dispose",L);for(const P in l){const y=l[P],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const s0={[ta]:na,[ia]:oa,[sa]:aa,[Ji]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:Ji};function r0(r,e){function t(){let F=!1;const ue=new nt;let K=null;const ee=new nt(0,0,0,0);return{setMask:function(ge){K!==ge&&!F&&(r.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){F=ge},setClear:function(ge,pe,ze,gt,Rt){Rt===!0&&(ge*=gt,pe*=gt,ze*=gt),ue.set(ge,pe,ze,gt),ee.equals(ue)===!1&&(r.clearColor(ge,pe,ze,gt),ee.copy(ue))},reset:function(){F=!1,K=null,ee.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,K=null,ee=null,ge=null;return{setReversed:function(pe){if(ue!==pe){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const gt=ge;ge=null,this.setClear(gt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?D(r.DEPTH_TEST):J(r.DEPTH_TEST)},setMask:function(pe){K!==pe&&!F&&(r.depthMask(pe),K=pe)},setFunc:function(pe){if(ue&&(pe=s0[pe]),ee!==pe){switch(pe){case ta:r.depthFunc(r.NEVER);break;case na:r.depthFunc(r.ALWAYS);break;case ia:r.depthFunc(r.LESS);break;case Ji:r.depthFunc(r.LEQUAL);break;case sa:r.depthFunc(r.EQUAL);break;case ra:r.depthFunc(r.GEQUAL);break;case oa:r.depthFunc(r.GREATER);break;case aa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=pe}},setLocked:function(pe){F=pe},setClear:function(pe){ge!==pe&&(ue&&(pe=1-pe),r.clearDepth(pe),ge=pe)},reset:function(){F=!1,K=null,ee=null,ge=null,ue=!1}}}function i(){let F=!1,ue=null,K=null,ee=null,ge=null,pe=null,ze=null,gt=null,Rt=null;return{setTest:function(rt){F||(rt?D(r.STENCIL_TEST):J(r.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!F&&(r.stencilMask(rt),ue=rt)},setFunc:function(rt,an,An){(K!==rt||ee!==an||ge!==An)&&(r.stencilFunc(rt,an,An),K=rt,ee=an,ge=An)},setOp:function(rt,an,An){(pe!==rt||ze!==an||gt!==An)&&(r.stencilOp(rt,an,An),pe=rt,ze=an,gt=An)},setLocked:function(rt){F=rt},setClear:function(rt){Rt!==rt&&(r.clearStencil(rt),Rt=rt)},reset:function(){F=!1,ue=null,K=null,ee=null,ge=null,pe=null,ze=null,gt=null,Rt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,S=null,v=null,L=null,R=null,C=new Ce(0,0,0),P=0,y=!1,M=null,I=null,k=null,z=null,q=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=X>=2);let ne=null,oe={};const fe=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Je=new nt().fromArray(fe),j=new nt().fromArray(Ie);function ie(F,ue,K,ee){const ge=new Uint8Array(4),pe=r.createTexture();r.bindTexture(F,pe),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<K;ze++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(ue+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return pe}const N={};N[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),N[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),N[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(r.DEPTH_TEST),o.setFunc(Ji),Ue(!1),Fe(wc),D(r.CULL_FACE),U(ei);function D(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function J(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function ae(F,ue){return u[F]!==ue?(r.bindFramebuffer(F,ue),u[F]=ue,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function ce(F,ue){let K=p,ee=!1;if(F){K=d.get(ue),K===void 0&&(K=[],d.set(ue,K));const ge=F.textures;if(K.length!==ge.length||K[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)K[pe]=r.COLOR_ATTACHMENT0+pe;K.length=ge.length,ee=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ee=!0);ee&&r.drawBuffers(K)}function Re(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const _e={[pi]:r.FUNC_ADD,[ed]:r.FUNC_SUBTRACT,[td]:r.FUNC_REVERSE_SUBTRACT};_e[nd]=r.MIN,_e[id]=r.MAX;const ye={[sd]:r.ZERO,[rd]:r.ONE,[od]:r.SRC_COLOR,[Jo]:r.SRC_ALPHA,[dd]:r.SRC_ALPHA_SATURATE,[hd]:r.DST_COLOR,[cd]:r.DST_ALPHA,[ad]:r.ONE_MINUS_SRC_COLOR,[ea]:r.ONE_MINUS_SRC_ALPHA,[ud]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[fd]:r.CONSTANT_COLOR,[pd]:r.ONE_MINUS_CONSTANT_COLOR,[md]:r.CONSTANT_ALPHA,[gd]:r.ONE_MINUS_CONSTANT_ALPHA};function U(F,ue,K,ee,ge,pe,ze,gt,Rt,rt){if(F===ei){_===!0&&(J(r.BLEND),_=!1);return}if(_===!1&&(D(r.BLEND),_=!0),F!==Ju){if(F!==m||rt!==y){if((f!==pi||v!==pi)&&(r.blendEquation(r.FUNC_ADD),f=pi,v=pi),rt)switch(F){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pn:r.blendFunc(r.ONE,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,S=null,L=null,R=null,C.set(0,0,0),P=0,m=F,y=rt}return}ge=ge||ue,pe=pe||K,ze=ze||ee,(ue!==f||ge!==v)&&(r.blendEquationSeparate(_e[ue],_e[ge]),f=ue,v=ge),(K!==T||ee!==S||pe!==L||ze!==R)&&(r.blendFuncSeparate(ye[K],ye[ee],ye[pe],ye[ze]),T=K,S=ee,L=pe,R=ze),(gt.equals(C)===!1||Rt!==P)&&(r.blendColor(gt.r,gt.g,gt.b,Rt),C.copy(gt),P=Rt),m=F,y=!1}function pt(F,ue){F.side===Mn?J(r.CULL_FACE):D(r.CULL_FACE);let K=F.side===Vt;ue&&(K=!K),Ue(K),F.blending===Ki&&F.transparent===!1?U(ei):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;a.setTest(ee),ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?D(r.SAMPLE_ALPHA_TO_COVERAGE):J(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(F){M!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),M=F)}function Fe(F){F!==$u?(D(r.CULL_FACE),F!==I&&(F===wc?r.cullFace(r.BACK):F===Zu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):J(r.CULL_FACE),I=F}function be(F){F!==k&&(Y&&r.lineWidth(F),k=F)}function je(F,ue,K){F?(D(r.POLYGON_OFFSET_FILL),(z!==ue||q!==K)&&(r.polygonOffset(ue,K),z=ue,q=K)):J(r.POLYGON_OFFSET_FILL)}function he(F){F?D(r.SCISSOR_TEST):J(r.SCISSOR_TEST)}function A(F){F===void 0&&(F=r.TEXTURE0+$-1),ne!==F&&(r.activeTexture(F),ne=F)}function E(F,ue,K){K===void 0&&(ne===null?K=r.TEXTURE0+$-1:K=ne);let ee=oe[K];ee===void 0&&(ee={type:void 0,texture:void 0},oe[K]=ee),(ee.type!==F||ee.texture!==ue)&&(ne!==K&&(r.activeTexture(K),ne=K),r.bindTexture(F,ue||N[F]),ee.type=F,ee.texture=ue)}function H(){const F=oe[ne];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){Je.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function Me(F){j.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function Ke(F,ue){let K=l.get(ue);K===void 0&&(K=new WeakMap,l.set(ue,K));let ee=K.get(F);ee===void 0&&(ee=r.getUniformBlockIndex(ue,F.name),K.set(F,ee))}function Ge(F,ue){const ee=l.get(ue).get(F);c.get(ue)!==ee&&(r.uniformBlockBinding(ue,ee,F.__bindingPointIndex),c.set(ue,ee))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,oe={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,S=null,v=null,L=null,R=null,C=new Ce(0,0,0),P=0,y=!1,M=null,I=null,k=null,z=null,q=null,Je.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:D,disable:J,bindFramebuffer:ae,drawBuffers:ce,useProgram:Re,setBlending:U,setMaterial:pt,setFlipSided:Ue,setCullFace:Fe,setLineWidth:be,setPolygonOffset:je,setScissorTest:he,activeTexture:A,bindTexture:E,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:$e,texStorage3D:se,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:De,viewport:Me,reset:ct}}function El(r,e,t,n){const i=o0(n);switch(t){case Qh:return r*e;case eu:return r*e;case tu:return r*e*2;case Ka:return r*e/i.components*i.byteLength;case ja:return r*e/i.components*i.byteLength;case nu:return r*e*2/i.components*i.byteLength;case $a:return r*e*2/i.components*i.byteLength;case Jh:return r*e*3/i.components*i.byteLength;case Kt:return r*e*4/i.components*i.byteLength;case Za:return r*e*4/i.components*i.byteLength;case Ur:case Fr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ua:case fa:return Math.max(r,16)*Math.max(e,8)/4;case ha:case da:return Math.max(r,8)*Math.max(e,8)/2;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case kr:case Pa:case La:return Math.ceil(r/4)*Math.ceil(e/4)*16;case iu:case Da:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Na:case Ua:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(r){switch(r){case Hn:case jh:return{byteLength:1,components:1};case ks:case $h:case Ys:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case _i:case Xa:case sn:return{byteLength:4,components:1};case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function a0(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return p?new OffscreenCanvas(A,E):Vs("canvas")}function _(A,E,H){let Q=1;const te=he(A);if((te.width>H||te.height>H)&&(Q=H/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*te.width),we=Math.floor(Q*te.height);u===void 0&&(u=g(Z,we));const de=E?g(Z,we):u;return de.width=Z,de.height=we,de.getContext("2d").drawImage(A,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+we+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,E,H,Q,te=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=E;if(E===r.RED&&(H===r.FLOAT&&(Z=r.R32F),H===r.HALF_FLOAT&&(Z=r.R16F),H===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.R8UI),H===r.UNSIGNED_SHORT&&(Z=r.R16UI),H===r.UNSIGNED_INT&&(Z=r.R32UI),H===r.BYTE&&(Z=r.R8I),H===r.SHORT&&(Z=r.R16I),H===r.INT&&(Z=r.R32I)),E===r.RG&&(H===r.FLOAT&&(Z=r.RG32F),H===r.HALF_FLOAT&&(Z=r.RG16F),H===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RG8UI),H===r.UNSIGNED_SHORT&&(Z=r.RG16UI),H===r.UNSIGNED_INT&&(Z=r.RG32UI),H===r.BYTE&&(Z=r.RG8I),H===r.SHORT&&(Z=r.RG16I),H===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),H===r.UNSIGNED_INT&&(Z=r.RGB32UI),H===r.BYTE&&(Z=r.RGB8I),H===r.SHORT&&(Z=r.RGB16I),H===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),H===r.UNSIGNED_INT&&(Z=r.RGBA32UI),H===r.BYTE&&(Z=r.RGBA8I),H===r.SHORT&&(Z=r.RGBA16I),H===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),E===r.RGBA){const we=te?Qr:Ye.getTransfer(Q);H===r.FLOAT&&(Z=r.RGBA32F),H===r.HALF_FLOAT&&(Z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Z=we===at?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,E){let H;return A?E===null||E===_i||E===ns?H=r.DEPTH24_STENCIL8:E===sn?H=r.DEPTH32F_STENCIL8:E===ks&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_i||E===ns?H=r.DEPTH_COMPONENT24:E===sn?H=r.DEPTH_COMPONENT32F:E===ks&&(H=r.DEPTH_COMPONENT16),H}function L(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function R(A){const E=A.target;E.removeEventListener("dispose",R),P(E),E.isVideoTexture&&h.delete(E)}function C(A){const E=A.target;E.removeEventListener("dispose",C),M(E)}function P(A){const E=n.get(A);if(E.__webglInit===void 0)return;const H=A.source,Q=d.get(H);if(Q){const te=Q[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(A),Object.keys(Q).length===0&&d.delete(H)}n.remove(A)}function y(A){const E=n.get(A);r.deleteTexture(E.__webglTexture);const H=A.source,Q=d.get(H);delete Q[E.__cacheKey],o.memory.textures--}function M(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let te=0;te<E.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(E.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=A.textures;for(let Q=0,te=H.length;Q<te;Q++){const Z=n.get(H[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(A)}let I=0;function k(){I=0}function z(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function q(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){const H=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,A,E);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function Y(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){j(H,A,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function X(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){j(H,A,E);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function W(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ie(H,A,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const ne={[Sn]:r.REPEAT,[yn]:r.CLAMP_TO_EDGE,[Vr]:r.MIRRORED_REPEAT},oe={[At]:r.NEAREST,[Kh]:r.NEAREST_MIPMAP_NEAREST,[Ds]:r.NEAREST_MIPMAP_LINEAR,[Yt]:r.LINEAR,[Nr]:r.LINEAR_MIPMAP_NEAREST,[On]:r.LINEAR_MIPMAP_LINEAR},fe={[Ud]:r.NEVER,[Hd]:r.ALWAYS,[Fd]:r.LESS,[ou]:r.LEQUAL,[Od]:r.EQUAL,[zd]:r.GEQUAL,[Bd]:r.GREATER,[kd]:r.NOTEQUAL};function Ie(A,E){if(E.type===sn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===Nr||E.magFilter===Ds||E.magFilter===On||E.minFilter===Yt||E.minFilter===Nr||E.minFilter===Ds||E.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ne[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ne[E.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ne[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,oe[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===At||E.minFilter!==Ds&&E.minFilter!==On||E.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Je(A,E){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",R));const Q=E.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const Z=q(E);if(Z!==A.__cacheKey){te[Z]===void 0&&(te[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[Z].usedTimes++;const we=te[A.__cacheKey];we!==void 0&&(te[A.__cacheKey].usedTimes--,we.usedTimes===0&&y(E)),A.__cacheKey=Z,A.__webglTexture=te[Z].texture}return H}function j(A,E,H){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const te=Je(A,E),Z=E.source;t.bindTexture(Q,A.__webglTexture,r.TEXTURE0+H);const we=n.get(Z);if(Z.version!==we.__version||te===!0){t.activeTexture(r.TEXTURE0+H);const de=Ye.getPrimaries(Ye.workingColorSpace),xe=E.colorSpace===Qn?null:Ye.getPrimaries(E.colorSpace),$e=E.colorSpace===Qn||de===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=_(E.image,!1,i.maxTextureSize);se=je(E,se);const ve=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let De=S(E.internalFormat,ve,Pe,E.colorSpace,E.isVideoTexture);Ie(Q,E);let Me;const Ke=E.mipmaps,Ge=E.isVideoTexture!==!0,ct=we.__version===void 0||te===!0,F=Z.dataReady,ue=L(E,se);if(E.isDepthTexture)De=v(E.format===is,E.type),ct&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ve,Pe,null));else if(E.isDataTexture)if(Ke.length>0){Ge&&ct&&t.texStorage2D(r.TEXTURE_2D,ue,De,Ke[0].width,Ke[0].height);for(let K=0,ee=Ke.length;K<ee;K++)Me=Ke[K],Ge?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Pe,Me.data):t.texImage2D(r.TEXTURE_2D,K,De,Me.width,Me.height,0,ve,Pe,Me.data);E.generateMipmaps=!1}else Ge?(ct&&t.texStorage2D(r.TEXTURE_2D,ue,De,se.width,se.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ve,Pe,se.data)):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ve,Pe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,De,Ke[0].width,Ke[0].height,se.depth);for(let K=0,ee=Ke.length;K<ee;K++)if(Me=Ke[K],E.format!==Kt)if(ve!==null)if(Ge){if(F)if(E.layerUpdates.size>0){const ge=El(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const ze=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,pe,Me.width,Me.height,1,ve,ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,ve,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,De,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,ve,Pe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,De,Me.width,Me.height,se.depth,0,ve,Pe,Me.data)}else{Ge&&ct&&t.texStorage2D(r.TEXTURE_2D,ue,De,Ke[0].width,Ke[0].height);for(let K=0,ee=Ke.length;K<ee;K++)Me=Ke[K],E.format!==Kt?ve!==null?Ge?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,K,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Pe,Me.data):t.texImage2D(r.TEXTURE_2D,K,De,Me.width,Me.height,0,ve,Pe,Me.data)}else if(E.isDataArrayTexture)if(Ge){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,De,se.width,se.height,se.depth),F)if(E.layerUpdates.size>0){const K=El(se.width,se.height,E.format,E.type);for(const ee of E.layerUpdates){const ge=se.data.subarray(ee*K/se.data.BYTES_PER_ELEMENT,(ee+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ve,Pe,ge)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,Pe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ve,Pe,se.data);else if(E.isData3DTexture)Ge?(ct&&t.texStorage3D(r.TEXTURE_3D,ue,De,se.width,se.height,se.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,Pe,se.data)):t.texImage3D(r.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ve,Pe,se.data);else if(E.isFramebufferTexture){if(ct)if(Ge)t.texStorage2D(r.TEXTURE_2D,ue,De,se.width,se.height);else{let K=se.width,ee=se.height;for(let ge=0;ge<ue;ge++)t.texImage2D(r.TEXTURE_2D,ge,De,K,ee,0,ve,Pe,null),K>>=1,ee>>=1}}else if(Ke.length>0){if(Ge&&ct){const K=he(Ke[0]);t.texStorage2D(r.TEXTURE_2D,ue,De,K.width,K.height)}for(let K=0,ee=Ke.length;K<ee;K++)Me=Ke[K],Ge?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ve,Pe,Me):t.texImage2D(r.TEXTURE_2D,K,De,ve,Pe,Me);E.generateMipmaps=!1}else if(Ge){if(ct){const K=he(se);t.texStorage2D(r.TEXTURE_2D,ue,De,K.width,K.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Pe,se)}else t.texImage2D(r.TEXTURE_2D,0,De,ve,Pe,se);m(E)&&f(Q),we.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ie(A,E,H){if(E.image.length!==6)return;const Q=Je(A,E),te=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+H);const Z=n.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+H);const we=Ye.getPrimaries(Ye.workingColorSpace),de=E.colorSpace===Qn?null:Ye.getPrimaries(E.colorSpace),xe=E.colorSpace===Qn||we===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!$e&&!se?ve[ee]=_(E.image[ee],!0,i.maxCubemapSize):ve[ee]=se?E.image[ee].image:E.image[ee],ve[ee]=je(E,ve[ee]);const Pe=ve[0],De=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),Ke=S(E.internalFormat,De,Me,E.colorSpace),Ge=E.isVideoTexture!==!0,ct=Z.__version===void 0||Q===!0,F=te.dataReady;let ue=L(E,Pe);Ie(r.TEXTURE_CUBE_MAP,E);let K;if($e){Ge&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ke,Pe.width,Pe.height);for(let ee=0;ee<6;ee++){K=ve[ee].mipmaps;for(let ge=0;ge<K.length;ge++){const pe=K[ge];E.format!==Kt?De!==null?Ge?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ke,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,De,Me,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ke,pe.width,pe.height,0,De,Me,pe.data)}}}else{if(K=E.mipmaps,Ge&&ct){K.length>0&&ue++;const ee=he(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ge?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,De,Me,ve[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,ve[ee].width,ve[ee].height,0,De,Me,ve[ee].data);for(let ge=0;ge<K.length;ge++){const ze=K[ge].image[ee].image;Ge?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,ze.width,ze.height,De,Me,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ke,ze.width,ze.height,0,De,Me,ze.data)}}else{Ge?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Me,ve[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,De,Me,ve[ee]);for(let ge=0;ge<K.length;ge++){const pe=K[ge];Ge?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,De,Me,pe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ke,De,Me,pe.image[ee])}}}m(E)&&f(r.TEXTURE_CUBE_MAP),Z.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function N(A,E,H,Q,te,Z){const we=s.convert(H.format,H.colorSpace),de=s.convert(H.type),xe=S(H.internalFormat,we,de,H.colorSpace),$e=n.get(E),se=n.get(H);if(se.__renderTarget=E,!$e.__hasExternalTextures){const ve=Math.max(1,E.width>>Z),Pe=Math.max(1,E.height>>Z);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,xe,ve,Pe,E.depth,0,we,de,null):t.texImage2D(te,Z,xe,ve,Pe,0,we,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Fe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,te,se.__webglTexture,0,Ue(E)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,te,se.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function D(A,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer){const Q=E.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=v(E.stencilBuffer,te),we=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=Ue(E);Fe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Z,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,A)}else{const Q=E.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],we=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),xe=S(Z.internalFormat,we,de,Z.colorSpace),$e=Ue(E);H&&Fe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,xe,E.width,E.height):Fe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function J(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const te=Q.__webglTexture,Z=Ue(E);if(E.depthTexture.format===ji)Fe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(E.depthTexture.format===is)Fe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ae(A){const E=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Q}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");J(E.__webglFramebuffer,A)}else if(H){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),D(E.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),D(E.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(A,E,H){const Q=n.get(A);E!==void 0&&N(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&ae(A)}function Re(A){const E=A.texture,H=n.get(A),Q=n.get(E);A.addEventListener("dispose",C);const te=A.textures,Z=A.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let xe=0;xe<E.mipmaps.length;xe++)H.__webglFramebuffer[de][xe]=r.createFramebuffer()}else H.__webglFramebuffer[de]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)H.__webglFramebuffer[de]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(we)for(let de=0,xe=te.length;de<xe;de++){const $e=n.get(te[de]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Fe(A)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const xe=te[de];H.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const $e=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),ve=S(xe.internalFormat,$e,se,xe.colorSpace,A.isXRRenderTarget===!0),Pe=Ue(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ve,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,H.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),D(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)N(H.__webglFramebuffer[de][xe],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else N(H.__webglFramebuffer[de],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,xe=te.length;de<xe;de++){const $e=te[de],se=n.get($e);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Ie(r.TEXTURE_2D,$e),N(H.__webglFramebuffer,A,$e,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),m($e)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),Ie(de,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)N(H.__webglFramebuffer[xe],A,E,r.COLOR_ATTACHMENT0,de,xe);else N(H.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,de,0);m(E)&&f(de),t.unbindTexture()}A.depthBuffer&&ae(A)}function _e(A){const E=A.textures;for(let H=0,Q=E.length;H<Q;H++){const te=E[H];if(m(te)){const Z=T(A),we=n.get(te).__webglTexture;t.bindTexture(Z,we),f(Z),t.unbindTexture()}}}const ye=[],U=[];function pt(A){if(A.samples>0){if(Fe(A)===!1){const E=A.textures,H=A.width,Q=A.height;let te=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(A),de=E.length>1;if(de)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const $e=n.get(E[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,te,r.NEAREST),c===!0&&(ye.length=0,U.length=0,ye.push(r.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ye.push(Z),U.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const $e=n.get(E[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const E=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ue(A){return Math.min(i.maxSamples,A.samples)}function Fe(A){const E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function je(A,E){const H=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Ot&&H!==Qn&&(Ye.getTransfer(H)===at?(Q!==Kt||te!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function he(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Fe}function c0(r,e){function t(n,i=Qn){let s;const o=Ye.getTransfer(i);if(n===Hn)return r.UNSIGNED_BYTE;if(n===qa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return r.BYTE;if(n===$h)return r.SHORT;if(n===ks)return r.UNSIGNED_SHORT;if(n===Xa)return r.INT;if(n===_i)return r.UNSIGNED_INT;if(n===sn)return r.FLOAT;if(n===Ys)return r.HALF_FLOAT;if(n===Qh)return r.ALPHA;if(n===Jh)return r.RGB;if(n===Kt)return r.RGBA;if(n===eu)return r.LUMINANCE;if(n===tu)return r.LUMINANCE_ALPHA;if(n===ji)return r.DEPTH_COMPONENT;if(n===is)return r.DEPTH_STENCIL;if(n===Ka)return r.RED;if(n===ja)return r.RED_INTEGER;if(n===nu)return r.RG;if(n===$a)return r.RG_INTEGER;if(n===Za)return r.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===Br)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pa||n===ma)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ga)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===xa||n===va||n===Ma||n===ya||n===Sa||n===Ea||n===Ta||n===ba||n===wa||n===Aa||n===Ra||n===Ca||n===Ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_a)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===Pa||n===La)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===kr)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iu||n===Da||n===Na||n===Ua)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===kr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class l0 extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:u0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends vi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new f0,m=t.getContextAttributes();let f=null,T=null;const S=[],v=[],L=new Le;let R=null;const C=new Lt;C.viewport=new nt;const P=new Lt;P.viewport=new nt;const y=[C,P],M=new l0;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=S[j];return ie===void 0&&(ie=new Po,S[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=S[j];return ie===void 0&&(ie=new Po,S[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=S[j];return ie===void 0&&(ie=new Po,S[j]=ie),ie.getHandSpace()};function z(j){const ie=v.indexOf(j.inputSource);if(ie===-1)return;const N=S[ie];N!==void 0&&(N.update(j.inputSource,j.frame,l||o),N.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",$);for(let j=0;j<S.length;j++){const ie=v[j];ie!==null&&(v[j]=null,S[j].disconnect(ie))}I=null,k=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,T=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new xi(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,N=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?is:ji,N=m.stencil?ns:_i);const J={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(J),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new xi(d.textureWidth,d.textureHeight,{format:Kt,type:Hn,depthTexture:new xu(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let ie=0;ie<j.removed.length;ie++){const N=j.removed[ie],D=v.indexOf(N);D>=0&&(v[D]=null,S[D].disconnect(N))}for(let ie=0;ie<j.added.length;ie++){const N=j.added[ie];let D=v.indexOf(N);if(D===-1){for(let ae=0;ae<S.length;ae++)if(ae>=v.length){v.push(N),D=ae;break}else if(v[ae]===null){v[ae]=N,D=ae;break}if(D===-1)break}const J=S[D];J&&J.connect(N)}}const Y=new w,X=new w;function W(j,ie,N){Y.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(N.matrixWorld);const D=Y.distanceTo(X),J=ie.projectionMatrix.elements,ae=N.projectionMatrix.elements,ce=J[14]/(J[10]-1),Re=J[14]/(J[10]+1),_e=(J[9]+1)/J[5],ye=(J[9]-1)/J[5],U=(J[8]-1)/J[0],pt=(ae[8]+1)/ae[0],Ue=ce*U,Fe=ce*pt,be=D/(-U+pt),je=be*-U;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(je),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),J[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const he=ce+be,A=Re+be,E=Ue-je,H=Fe+(D-je),Q=_e*Re/A*he,te=ye*Re/A*he;j.projectionMatrix.makePerspective(E,H,Q,te,he,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ie=j.near,N=j.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(N=_.depthFar)),M.near=P.near=C.near=ie,M.far=P.far=C.far=N,(I!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,k=M.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const D=j.parent,J=M.cameras;ne(M,D);for(let ae=0;ae<J.length;ae++)ne(J[ae],D);J.length===2?W(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),oe(j,M,D)};function oe(j,ie,N){N===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(N.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ss*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let fe=null;function Ie(j,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const N=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let D=!1;N.length!==M.cameras.length&&(M.cameras.length=0,D=!0);for(let ae=0;ae<N.length;ae++){const ce=N[ae];let Re=null;if(p!==null)Re=p.getViewport(ce);else{const ye=u.getViewSubImage(d,ce);Re=ye.viewport,ae===0&&(e.setRenderTargetTextures(T,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(T))}let _e=y[ae];_e===void 0&&(_e=new Lt,_e.layers.enable(ae),_e.viewport=new nt,y[ae]=_e),_e.matrix.fromArray(ce.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ce.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Re.x,Re.y,Re.width,Re.height),ae===0&&(M.matrix.copy(_e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),D===!0&&M.cameras.push(_e)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")){const ae=u.getDepthInformation(N[0]);ae&&ae.isValid&&ae.texture&&_.init(e,ae,i.renderState)}}for(let N=0;N<S.length;N++){const D=v[N],J=S[N];D!==null&&J!==void 0&&J.update(D,ie,l||o)}fe&&fe(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Je=new _u;Je.setAnimationLoop(Ie),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}}const ci=new on,m0=new ke;function g0(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pu(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),S=T.envMap,v=T.envMapRotation;S&&(m.envMap.value=S,ci.copy(v),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(ci)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _0(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const v=S.program;n.uniformBlockBinding(T,v)}function l(T,S){let v=i[T.id];v===void 0&&(g(T),v=h(T),i[T.id]=v,T.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(T,L);const R=e.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function h(T){const S=u();T.__bindingPointIndex=S;const v=r.createBuffer(),L=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,L,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],v=T.uniforms,L=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let R=0,C=v.length;R<C;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,M=P.length;y<M;y++){const I=P[y];if(p(I,R,y,L)===!0){const k=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let $=0;$<z.length;$++){const Y=z[$],X=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,k+q,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,S,v,L){const R=T.value,C=S+"_"+v;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const P=L[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(T){const S=T.uniforms;let v=0;const L=16;for(let C=0,P=S.length;C<P;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,I=y.length;M<I;M++){const k=y[M],z=Array.isArray(k.value)?k.value:[k.value];for(let q=0,$=z.length;q<$;q++){const Y=z[q],X=_(Y),W=v%L,ne=W%X.boundary,oe=W+ne;v+=ne,oe!==0&&L-oe<X.storage&&(v+=L-oe),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=X.storage}}}const R=v%L;return R>0&&(v+=L-R),T.__size=v,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function f(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class Eu{constructor(e={}){const{canvas:t=of(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let L=!1,R=0,C=0,P=null,y=-1,M=null;const I=new nt,k=new nt;let z=null;const q=new Ce(0);let $=0,Y=t.width,X=t.height,W=1,ne=null,oe=null;const fe=new nt(0,0,Y,X),Ie=new nt(0,0,Y,X);let Je=!1;const j=new ec;let ie=!1,N=!1;const D=new ke,J=new ke,ae=new w,ce=new nt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function ye(){return P===null?W:1}let U=n;function pt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const O="webgl2";if(U=pt(O,b),U===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Fe,be,je,he,A,E,H,Q,te,Z,we,de,xe,$e,se,ve,Pe,De,Me,Ke,Ge,ct,F;function ue(){Ue=new Eg(U),Ue.init(),Ge=new c0(U,Ue),Fe=new _g(U,Ue,e,Ge),be=new r0(U,Ue),Fe.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),je=new wg(U),he=new W_,A=new a0(U,Ue,be,he,Fe,Ge,je),E=new vg(v),H=new Sg(v),Q=new Df(U),ct=new mg(U,Q),te=new Tg(U,Q,je,ct),Z=new Rg(U,te,Q,je),De=new Ag(U,Fe,A),se=new xg(he),we=new G_(v,E,H,Ue,Fe,ct,se),de=new g0(v,he),xe=new q_,$e=new Q_(Ue),Pe=new pg(v,E,H,be,Z,p,c),ve=new i0(v,Z,Fe),F=new _0(U,je,Fe,be),Me=new gg(U,Ue,je),Ke=new bg(U,Ue,je),je.programs=we.programs,v.capabilities=Fe,v.extensions=Ue,v.properties=he,v.renderLists=xe,v.shadowMap=ve,v.state=be,v.info=je}ue();const K=new p0(v,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(Y,X,!1))},this.getSize=function(b){return b.set(Y,X)},this.setSize=function(b,O,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,X=O,t.width=Math.floor(b*W),t.height=Math.floor(O*W),V===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Y*W,X*W).floor()},this.setDrawingBufferSize=function(b,O,V){Y=b,X=O,W=V,t.width=Math.floor(b*V),t.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,O,V,G){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,O,V,G),be.viewport(I.copy(fe).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,O,V,G){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,O,V,G),be.scissor(k.copy(Ie).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){be.setScissorTest(Je=b)},this.setOpaqueSort=function(b){ne=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(b=!0,O=!0,V=!0){let G=0;if(b){let B=!1;if(P!==null){const re=P.texture.format;B=re===Za||re===$a||re===ja}if(B){const re=P.texture.type,me=re===Hn||re===_i||re===ks||re===ns||re===qa||re===Ya,Se=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Oe=Se.r,He=Se.g,Te=Se.b;me?(g[0]=Oe,g[1]=He,g[2]=Te,g[3]=Ee,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Oe,_[1]=He,_[2]=Te,_[3]=Ee,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT),V&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),$e.dispose(),he.dispose(),E.dispose(),H.dispose(),Z.dispose(),ct.dispose(),F.dispose(),we.dispose(),K.dispose(),K.removeEventListener("sessionstart",xc),K.removeEventListener("sessionend",vc),ni.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=je.autoReset,O=ve.enabled,V=ve.autoUpdate,G=ve.needsUpdate,B=ve.type;ue(),je.autoReset=b,ve.enabled=O,ve.autoUpdate=V,ve.needsUpdate=G,ve.type=B}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){const O=b.target;O.removeEventListener("dispose",ze),gt(O)}function gt(b){Rt(b),he.remove(b)}function Rt(b){const O=he.get(b).programs;O!==void 0&&(O.forEach(function(V){we.releaseProgram(V)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,G,B,re){O===null&&(O=Re);const me=B.isMesh&&B.matrixWorld.determinant()<0,Se=Vu(b,O,V,G,B);be.setMaterial(G,me);let Ee=V.index,Oe=1;if(G.wireframe===!0){if(Ee=te.getWireframeAttribute(V),Ee===void 0)return;Oe=2}const He=V.drawRange,Te=V.attributes.position;let et=He.start*Oe,lt=(He.start+He.count)*Oe;re!==null&&(et=Math.max(et,re.start*Oe),lt=Math.min(lt,(re.start+re.count)*Oe)),Ee!==null?(et=Math.max(et,0),lt=Math.min(lt,Ee.count)):Te!=null&&(et=Math.max(et,0),lt=Math.min(lt,Te.count));const ut=lt-et;if(ut<0||ut===1/0)return;ct.setup(B,G,Se,V,Ee);let Bt,it=Me;if(Ee!==null&&(Bt=Q.get(Ee),it=Ke,it.setIndex(Bt)),B.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*ye()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(B.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*ye()),B.isLineSegments?it.setMode(U.LINES):B.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else B.isPoints?it.setMode(U.POINTS):B.isSprite&&it.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Rn=B._multiDrawCounts,st=B._multiDrawCount,cn=Ee?Q.get(Ee).bytesPerElement:1,Mi=he.get(G).currentProgram.getUniforms();for(let Gt=0;Gt<st;Gt++)Mi.setValue(U,"_gl_DrawID",Gt),it.render(Ae[Gt]/cn,Rn[Gt])}else if(B.isInstancedMesh)it.renderInstances(et,ut,B.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rn=Math.min(V.instanceCount,Ae);it.renderInstances(et,ut,Rn)}else it.render(et,ut)};function rt(b,O,V){b.transparent===!0&&b.side===Mn&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,Zs(b,O,V),b.side=zn,b.needsUpdate=!0,Zs(b,O,V),b.side=Mn):Zs(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),f=$e.get(V),f.init(O),S.push(f),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),b!==V&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const G=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const Se=re[me];rt(Se,V,B),G.add(Se)}else rt(re,V,B),G.add(re)}),S.pop(),f=null,G},this.compileAsync=function(b,O,V=null){const G=this.compile(b,O,V);return new Promise(B=>{function re(){if(G.forEach(function(me){he.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){B(b);return}setTimeout(re,10)}Ue.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let an=null;function An(b){an&&an(b)}function xc(){ni.stop()}function vc(){ni.start()}const ni=new _u;ni.setAnimationLoop(An),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){an=b,K.setAnimationLoop(b),b===null?ni.stop():ni.start()},K.addEventListener("sessionstart",xc),K.addEventListener("sessionend",vc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,P),f=$e.get(b,S.length),f.init(O),S.push(f),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(J),N=this.localClippingEnabled,ie=se.init(this.clippingPlanes,N),m=xe.get(b,T.length),m.init(),T.push(m),K.enabled===!0&&K.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&no(re,O,-1/0,v.sortObjects)}no(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,oe),_e=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,_e&&Pe.addToRenderList(m,b),this.info.render.frame++,ie===!0&&se.beginShadows();const V=f.state.shadowsArray;ve.render(V,b,O),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const re=O.cameras;if(B.length>0)for(let me=0,Se=re.length;me<Se;me++){const Ee=re[me];yc(G,B,b,Ee)}_e&&Pe.render(b);for(let me=0,Se=re.length;me<Se;me++){const Ee=re[me];Mc(m,b,Ee,Ee.viewport)}}else B.length>0&&yc(G,B,b,O),_e&&Pe.render(b),Mc(m,b,O);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,O),ct.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],ie===!0&&se.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function no(b,O,V,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){G&&ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const me=Z.update(b),Se=b.material;Se.visible&&m.push(b,me,Se,V,ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const me=Z.update(b),Se=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ce.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ce.copy(me.boundingSphere.center)),ce.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(Se)){const Ee=me.groups;for(let Oe=0,He=Ee.length;Oe<He;Oe++){const Te=Ee[Oe],et=Se[Te.materialIndex];et&&et.visible&&m.push(b,me,et,V,ce.z,Te)}}else Se.visible&&m.push(b,me,Se,V,ce.z,null)}}const re=b.children;for(let me=0,Se=re.length;me<Se;me++)no(re[me],O,V,G)}function Mc(b,O,V,G){const B=b.opaque,re=b.transmissive,me=b.transparent;f.setupLightsView(V),ie===!0&&se.setGlobalState(v.clippingPlanes,V),G&&be.viewport(I.copy(G)),B.length>0&&$s(B,O,V),re.length>0&&$s(re,O,V),me.length>0&&$s(me,O,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function yc(b,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new xi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Ys:Hn,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const re=f.state.transmissionRenderTarget[G.id],me=G.viewport||I;re.setSize(me.z,me.w);const Se=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(q),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),_e&&Pe.render(V);const Ee=v.toneMapping;v.toneMapping=ti;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ie===!0&&se.setGlobalState(v.clippingPlanes,G),$s(b,V,G),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Te=0,et=O.length;Te<et;Te++){const lt=O[Te],ut=lt.object,Bt=lt.geometry,it=lt.material,Ae=lt.group;if(it.side===Mn&&ut.layers.test(G.layers)){const Rn=it.side;it.side=Vt,it.needsUpdate=!0,Sc(ut,V,G,Bt,it,Ae),it.side=Rn,it.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}v.setRenderTarget(Se),v.setClearColor(q,$),Oe!==void 0&&(G.viewport=Oe),v.toneMapping=Ee}function $s(b,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,re=b.length;B<re;B++){const me=b[B],Se=me.object,Ee=me.geometry,Oe=G===null?me.material:G,He=me.group;Se.layers.test(V.layers)&&Sc(Se,O,V,Ee,Oe,He)}}function Sc(b,O,V,G,B,re){b.onBeforeRender(v,O,V,G,B,re),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,O,V,G,b,re),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,v.renderBufferDirect(V,O,G,B,b,re),B.side=zn,B.needsUpdate=!0,v.renderBufferDirect(V,O,G,B,b,re),B.side=Mn):v.renderBufferDirect(V,O,G,B,b,re),b.onAfterRender(v,O,V,G,B,re)}function Zs(b,O,V){O.isScene!==!0&&(O=Re);const G=he.get(b),B=f.state.lights,re=f.state.shadowsArray,me=B.state.version,Se=we.getParameters(b,B.state,re,O,V),Ee=we.getProgramCacheKey(Se);let Oe=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",ze),Oe=new Map,G.programs=Oe);let He=Oe.get(Ee);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===me)return Tc(b,Se),He}else Se.uniforms=we.getUniforms(b),b.onBeforeCompile(Se,v),He=we.acquireProgram(Se,Ee),Oe.set(Ee,He),G.uniforms=Se.uniforms;const Te=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=se.uniform),Tc(b,Se),G.needsLights=Wu(b),G.lightsStateVersion=me,G.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Ec(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=zr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Tc(b,O){const V=he.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Vu(b,O,V,G,B){O.isScene!==!0&&(O=Re),A.resetTextureUnits();const re=O.fog,me=G.isMeshStandardMaterial?O.environment:null,Se=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ot,Ee=(G.isMeshStandardMaterial?H:E).get(G.envMap||me),Oe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let ut=ti;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=v.toneMapping);const Bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=Bt!==void 0?Bt.length:0,Ae=he.get(G),Rn=f.state.lights;if(ie===!0&&(N===!0||b!==M)){const Zt=b===M&&G.id===y;se.setState(G,b,Zt)}let st=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Rn.state.version||Ae.outputColorSpace!==Se||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==Ee||G.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==He||Ae.morphTargets!==Te||Ae.morphNormals!==et||Ae.morphColors!==lt||Ae.toneMapping!==ut||Ae.morphTargetsCount!==it)&&(st=!0):(st=!0,Ae.__version=G.version);let cn=Ae.currentProgram;st===!0&&(cn=Zs(G,O,B));let Mi=!1,Gt=!1,ps=!1;const dt=cn.getUniforms(),_n=Ae.uniforms;if(be.useProgram(cn.program)&&(Mi=!0,Gt=!0,ps=!0),G.id!==y&&(y=G.id,Gt=!0),Mi||M!==b){be.buffers.depth.getReversed()?(D.copy(b.projectionMatrix),cf(D),lf(D),dt.setValue(U,"projectionMatrix",D)):dt.setValue(U,"projectionMatrix",b.projectionMatrix),dt.setValue(U,"viewMatrix",b.matrixWorldInverse);const Gn=dt.map.cameraPosition;Gn!==void 0&&Gn.setValue(U,ae.setFromMatrixPosition(b.matrixWorld)),Fe.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Gt=!0,ps=!0)}if(B.isSkinnedMesh){dt.setOptional(U,B,"bindMatrix"),dt.setOptional(U,B,"bindMatrixInverse");const Zt=B.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),dt.setValue(U,"boneTexture",Zt.boneTexture,A))}B.isBatchedMesh&&(dt.setOptional(U,B,"batchingTexture"),dt.setValue(U,"batchingTexture",B._matricesTexture,A),dt.setOptional(U,B,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",B._indirectTexture,A),dt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",B._colorsTexture,A));const ms=V.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&De.update(B,V,cn),(Gt||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,dt.setValue(U,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_n.envMap.value=Ee,_n.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),Gt&&(dt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Gu(_n,ps),re&&G.fog===!0&&de.refreshFogUniforms(_n,re),de.refreshMaterialUniforms(_n,G,W,X,f.state.transmissionRenderTarget[b.id]),zr.upload(U,Ec(Ae),_n,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zr.upload(U,Ec(Ae),_n,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(U,"center",B.center),dt.setValue(U,"modelViewMatrix",B.modelViewMatrix),dt.setValue(U,"normalMatrix",B.normalMatrix),dt.setValue(U,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zt=G.uniformsGroups;for(let Gn=0,Wn=Zt.length;Gn<Wn;Gn++){const bc=Zt[Gn];F.update(bc,cn),F.bind(bc,cn)}}return cn}function Gu(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Wu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,O,V){he.get(b.texture).__webglTexture=O,he.get(b.depthTexture).__webglTexture=V;const G=he.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const V=he.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){P=b,R=O,C=V;let G=!0,B=null,re=!1,me=!1;if(b){const Ee=he.get(b);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Ee.__hasExternalTextures)A.rebindTextures(b,he.get(b.texture).__webglTexture,he.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Te=b.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&he.has(Te)&&(b.width!==Te.image.width||b.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);const He=he.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[O])?B=He[O][V]:B=He[O],re=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?B=he.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[V]:B=He,I.copy(b.viewport),k.copy(b.scissor),z=b.scissorTest}else I.copy(fe).multiplyScalar(W).floor(),k.copy(Ie).multiplyScalar(W).floor(),z=Je;if(be.bindFramebuffer(U.FRAMEBUFFER,B)&&G&&be.drawBuffers(b,B),be.viewport(I),be.scissor(k),be.setScissorTest(z),re){const Ee=he.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,V)}else if(me){const Ee=he.get(b.texture),Oe=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Oe)}y=-1},this.readRenderTargetPixels=function(b,O,V,G,B,re,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=he.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){be.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Ee=b.texture,Oe=Ee.format,He=Ee.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&V>=0&&V<=b.height-B&&U.readPixels(O,V,G,B,Ge.convert(Oe),Ge.convert(He),re)}finally{const Ee=P!==null?he.get(P).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,G,B,re,me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=he.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){const Ee=b.texture,Oe=Ee.format,He=Ee.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-G&&V>=0&&V<=b.height-B){be.bindFramebuffer(U.FRAMEBUFFER,Se);const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,V,G,B,Ge.convert(Oe),Ge.convert(He),0);const et=P!==null?he.get(P).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,et);const lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await af(U,lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Te),U.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,V=0){b.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-V),B=Math.floor(b.image.width*G),re=Math.floor(b.image.height*G),me=O!==null?O.x:0,Se=O!==null?O.y:0;A.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,me,Se,B,re),be.unbindTexture()},this.copyTextureToTexture=function(b,O,V=null,G=null,B=0){b.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,V=null);let re,me,Se,Ee,Oe,He,Te,et,lt;const ut=b.isCompressedTexture?b.mipmaps[B]:b.image;V!==null?(re=V.max.x-V.min.x,me=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,Oe=V.min.y,He=V.isBox3?V.min.z:0):(re=ut.width,me=ut.height,Se=ut.depth||1,Ee=0,Oe=0,He=0),G!==null?(Te=G.x,et=G.y,lt=G.z):(Te=0,et=0,lt=0);const Bt=Ge.convert(O.format),it=Ge.convert(O.type);let Ae;O.isData3DTexture?(A.setTexture3D(O,0),Ae=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ae=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ae=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Rn=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=U.getParameter(U.UNPACK_SKIP_PIXELS),Mi=U.getParameter(U.UNPACK_SKIP_ROWS),Gt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const ps=b.isDataArrayTexture||b.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const _n=he.get(b),ms=he.get(O),Zt=he.get(_n.__renderTarget),Gn=he.get(ms.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,Zt.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<Se;Wn++)ps&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,he.get(b).__webglTexture,B,He+Wn),b.isDepthTexture?(dt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,he.get(O).__webglTexture,B,lt+Wn),U.blitFramebuffer(Ee,Oe,re,me,Te,et,re,me,U.DEPTH_BUFFER_BIT,U.NEAREST)):dt?U.copyTexSubImage3D(Ae,B,Te,et,lt+Wn,Ee,Oe,re,me):U.copyTexSubImage2D(Ae,B,Te,et,lt+Wn,Ee,Oe,re,me);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ae,B,Te,et,lt,re,me,Se,Bt,it,ut.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,B,Te,et,lt,re,me,Se,Bt,ut.data):U.texSubImage3D(Ae,B,Te,et,lt,re,me,Se,Bt,it,ut):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Te,et,re,me,Bt,it,ut.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Te,et,ut.width,ut.height,Bt,ut.data):U.texSubImage2D(U.TEXTURE_2D,B,Te,et,re,me,Bt,it,ut);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt),B===0&&O.generateMipmaps&&U.generateMipmap(Ae),be.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V=null,G=null,B=0){return b.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,V,G,B)},this.initRenderTarget=function(b){he.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,be.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class ic{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tu extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oa,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new w;class Gs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rn extends gn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ui;const Ms=new w,Fi=new w,Oi=new w,Bi=new Le,ys=new Le,wu=new ke,vr=new w,Ss=new w,Mr=new w,Tl=new Le,Lo=new Le,bl=new Le;class $t extends ft{constructor(e=new rn){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bu(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Gs(n,3,0,!1)),Ui.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),wu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;yr(vr.set(-.5,-.5,0),Oi,o,Fi,i,s),yr(Ss.set(.5,-.5,0),Oi,o,Fi,i,s),yr(Mr.set(.5,.5,0),Oi,o,Fi,i,s),Tl.set(0,0),Lo.set(1,0),bl.set(1,1);let a=e.ray.intersectTriangle(vr,Ss,Mr,!1,Ms);if(a===null&&(yr(Ss.set(-.5,.5,0),Oi,o,Fi,i,s),Lo.set(0,1),a=e.ray.intersectTriangle(vr,Mr,Ss,!1,Ms),a===null))return;const c=e.ray.origin.distanceTo(Ms);c<e.near||c>e.far||t.push({distance:c,point:Ms.clone(),uv:tn.getInterpolation(Ms,vr,Ss,Mr,Tl,Lo,bl,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yr(r,e,t,n,i,s){Bi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ys.x=s*Bi.x-i*Bi.y,ys.y=i*Bi.x+s*Bi.y):ys.copy(Bi),r.copy(e),r.x+=ys.x,r.y+=ys.y,r.applyMatrix4(wu)}const wl=new w,Al=new nt,Rl=new nt,x0=new w,Cl=new ke,Sr=new w,Do=new Tn,Il=new ke,No=new Jr;class v0 extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sr),this.boundingBox.expandByPoint(Sr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sr),this.boundingSphere.expandByPoint(Sr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1&&(Il.copy(i).invert(),No.copy(e.ray).applyMatrix4(Il),!(this.boundingBox!==null&&No.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,No)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Al.fromBufferAttribute(i.attributes.skinIndex,e),Rl.fromBufferAttribute(i.attributes.skinWeight,e),wl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Rl.getComponent(s);if(o!==0){const a=Al.getComponent(s);Cl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(x0.copy(wl).applyMatrix4(Cl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Au extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sc extends Mt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=At,h=At,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pl=new ke,M0=new ke;class rc{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:M0;Pl.multiplyMatrices(a,t[s]),Pl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sc(t,e,e,Kt,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Au),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Zi extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new ke,Ll=new ke,Er=[],Dl=new Vn,y0=new ke,Es=new Be,Ts=new Tn;class Ru extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,y0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Dl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Ts.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ki),Ll.multiplyMatrices(n,ki),Es.matrixWorld=Ll,Es.raycast(e,Er);for(let o=0,a=Er.length;o<a;o++){const c=Er[o];c.instanceId=s,c.object=this,t.push(c)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sc(new Float32Array(i*this.count),i,this.count,Ka,sn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cu extends gn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xr=new w,qr=new w,Nl=new ke,bs=new Jr,Tr=new Tn,Uo=new w,Ul=new w;class oc extends ft{constructor(e=new Dt,t=new Cu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Xr.fromBufferAttribute(t,i-1),qr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xr.distanceTo(qr);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=s,e.ray.intersectsSphere(Tr)===!1)return;Nl.copy(i).invert(),bs.copy(e.ray).applyMatrix4(Nl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),T=h.getX(_+1),S=br(this,e,bs,c,f,T);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=br(this,e,bs,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=br(this,e,bs,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=br(this,e,bs,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function br(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Xr.fromBufferAttribute(o,i),qr.fromBufferAttribute(o,s),t.distanceSqToSegment(Xr,qr,Uo,Ul)>n)return;Uo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Uo);if(!(c<e.near||c>e.far))return{distance:c,point:Ul.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Fl=new w,Ol=new w;class S0 extends oc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fl.fromBufferAttribute(t,i),Ol.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fl.distanceTo(Ol);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E0 extends oc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ac extends gn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bl=new ke,ka=new Jr,wr=new Tn,Ar=new w;class cc extends ft{constructor(e=new Dt,t=new ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;Bl.copy(i).invert(),ka.copy(e.ray).applyMatrix4(Bl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Ar.fromBufferAttribute(u,m),kl(Ar,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Ar.fromBufferAttribute(u,g),kl(Ar,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kl(r,e,t,n,i,s,o){const a=ka.distanceSqToPoint(r);if(a<t){const c=new w;ka.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fn extends Mt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nn extends Dt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2));function T(){const v=new w,L=new w;let R=0;const C=(t-e)/n;for(let P=0;P<=s;P++){const y=[],M=P/s,I=M*(t-e)+e;for(let k=0;k<=i;k++){const z=k/i,q=z*c+a,$=Math.sin(q),Y=Math.cos(q);L.x=I*$,L.y=-M*n+m,L.z=I*Y,u.push(L.x,L.y,L.z),v.set($,C,Y).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-M),y.push(g++)}_.push(y)}for(let P=0;P<i;P++)for(let y=0;y<s;y++){const M=_[y][P],I=_[y+1][P],k=_[y+1][P+1],z=_[y][P+1];(e>0||y!==0)&&(h.push(M,I,z),R+=3),(t>0||y!==s-1)&&(h.push(I,k,z),R+=3)}l.addGroup(f,R,0),f+=R}function S(v){const L=g,R=new Le,C=new w;let P=0;const y=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let k=0;k<=i;k++){const q=k/i*c+a,$=Math.cos(q),Y=Math.sin(q);C.x=y*Y,C.y=m*M,C.z=y*$,u.push(C.x,C.y,C.z),d.push(0,M,0),R.x=$*.5+.5,R.y=Y*.5*M+.5,p.push(R.x,R.y),g++}for(let k=0;k<i;k++){const z=L+k,q=I+k;v===!0?h.push(q,q+1,z):h.push(q+1,q,z),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yr extends nn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class to extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const S=new w,v=new w,L=new w;for(let R=0;R<t.length;R+=3)p(t[R+0],S),p(t[R+1],v),p(t[R+2],L),c(S,v,L,T)}function c(T,S,v,L){const R=L+1,C=[];for(let P=0;P<=R;P++){C[P]=[];const y=T.clone().lerp(v,P/R),M=S.clone().lerp(v,P/R),I=R-P;for(let k=0;k<=I;k++)k===0&&P===R?C[P][k]=y:C[P][k]=y.clone().lerp(M,k/I)}for(let P=0;P<R;P++)for(let y=0;y<2*(R-P)-1;y++){const M=Math.floor(y/2);y%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function l(T){const S=new w;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(T),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){const T=new w;for(let S=0;S<s.length;S+=3){T.x=s[S+0],T.y=s[S+1],T.z=s[S+2];const v=m(T)/2/Math.PI+.5,L=f(T)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){const S=o[T+0],v=o[T+2],L=o[T+4],R=Math.max(S,v,L),C=Math.min(S,v,L);R>.9&&C<.1&&(S<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),L<.2&&(o[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function p(T,S){const v=T*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const T=new w,S=new w,v=new w,L=new w,R=new Le,C=new Le,P=new Le;for(let y=0,M=0;y<s.length;y+=9,M+=6){T.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),R.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(T).add(S).add(v).divideScalar(3);const I=m(L);_(R,M+0,T,I),_(C,M+2,S,I),_(P,M+4,v,I)}}function _(T,S,v,L){L<0&&T.x===1&&(o[S]=T.x-1),v.x===0&&v.z===0&&(o[S]=L/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.vertices,e.indices,e.radius,e.details)}}class lc extends to{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lc(e.radius,e.detail)}}class Kr extends to{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kr(e.radius,e.detail)}}class hc extends Dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,d=new w,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const T=[],S=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(i+R*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+R*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-S),T.push(l++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const S=h[f][T+1],v=h[f][T],L=h[f+1][T],R=h[f+1][T+1];(f!==0||o>0)&&p.push(S,v,R),(f!==n-1||c<Math.PI)&&p.push(v,L,R)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wt extends gn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends wt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Rr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function T0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function b0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Iu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ks{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w0 extends Ks{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wi:s=e,a=2*t-n;break;case Gr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wi:o=e,c=2*n-t;break;case Gr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let L=0;L!==a;++L)s[L]=f*o[h+L]+T*o[l+L]+S*o[c+L]+v*o[u+L];return s}}class Pu extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class A0 extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&T0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===io,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Hs;class us extends wn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=zs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Lu extends wn{}Lu.prototype.ValueTypeName="color";class os extends wn{}os.prototype.ValueTypeName="number";class R0 extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)tt.slerpFlat(s,0,o,l-a,o,l,c);return s}}class as extends wn{InterpolantFactoryMethodLinear(e){return new R0(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends wn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=zs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends wn{}cs.prototype.ValueTypeName="vector";class jr{constructor(e="",t=-1,n=[],i=Qa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(I0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=b0(c);c=zl(c,1,h),l=zl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new os(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Iu(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let T=0;T!==d[g].morphTargets.length;++T){const S=d[g];m.push(S.time),f.push(S.morphTarget===_?1:0)}i.push(new os(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(cs,p+".position",d,"pos",i),n(as,p+".quaternion",d,"rot",i),n(cs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function C0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return Lu;case"quaternion":return as;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function I0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C0(r.type);if(r.times===void 0){const t=[],n=[];Iu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Jn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class P0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const L0=new P0;class fs{constructor(e){this.manager=e!==void 0?e:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class D0 extends Error{constructor(e,t){super(e),this.response=t}}class Du extends fs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Jn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Nn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){T();function T(){u.read().then(({done:S,value:v})=>{if(S)f.close();else{_+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,C=h.length;R<C;R++){const P=h[R];P.onProgress&&P.onProgress(L)}f.enqueue(v),T()}},S=>{f.error(S)})}}});return new Response(m)}else throw new D0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Jn.add(e,l);const h=Nn[e];delete Nn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Nn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class N0 extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Vs("img");function c(){h(),Jn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class U0 extends fs{constructor(e){super(e)}load(e,t,n,i){const s=new Mt,o=new N0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class js extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class F0 extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fo=new ke,Hl=new w,Vl=new w;class uc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O0 extends uc{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B0 extends js{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new O0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gl=new ke,ws=new w,Oo=new w;class k0 extends uc{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(ws),Oo.copy(n.position),Oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oo),n.updateMatrixWorld(),i.makeTranslation(-ws.x,-ws.y,-ws.z),Gl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl)}}class z0 extends js{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new k0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H0 extends uc{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new H0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V0 extends js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class G0 extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Jn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Jn.add(e,c),s.manager.itemStart(e)}}class W0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){tt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;tt.multiplyQuaternionsFlat(e,o,e,t,e,n),tt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const fc="\\[\\]\\.:\\/",X0=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",q0="[^"+fc.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",pc),K0=/(WCOD+)?/.source.replace("WCOD",q0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),Z0=new RegExp("^"+Y0+K0+j0+$0+"$"),Q0=["material","materials","bones","map"];class J0{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(e){const t=Z0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Q0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=J0;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ex{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Gi,endingEnd:Gi};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Id:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Qa:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Cd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ad){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Wi,i.endingEnd=Wi):(e?i.endingStart=this.zeroSlopeAtStart?Wi:Gi:i.endingStart=Gr,t?i.endingEnd=this.zeroSlopeAtEnd?Wi:Gi:i.endingEnd=Gr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const tx=new Float32Array(1);class nx extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new W0(Ze.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Pu(new Float32Array(2),new Float32Array(2),1,tx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?jr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Qa),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new ex(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?jr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const mc=60,zi=1/mc,Bo=5;class Nu{constructor(e){x(this,"cb");x(this,"running",!1);x(this,"rafId",0);x(this,"prevTime",0);x(this,"accumulator",0);x(this,"totalTicks",0);x(this,"frameCount",0);x(this,"tickCount",0);x(this,"metricTimer",0);x(this,"fps",0);x(this,"tps",0);x(this,"stepsLastFrame",0);x(this,"frame",e=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);let t=(e-this.prevTime)/1e3;this.prevTime=e,t>Bo*zi&&(t=Bo*zi),this.accumulator+=t;let n=0;for(;this.accumulator>=zi&&n<Bo;)this.cb.fixedUpdate(zi),this.accumulator-=zi,n++,this.totalTicks++,this.tickCount++;this.stepsLastFrame=n;const i=this.accumulator/zi;this.cb.render(i),this.sampleMetrics(t)});this.cb=e}start(){this.running||(this.running=!0,this.prevTime=performance.now(),this.accumulator=0,this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=0}sampleMetrics(e){var t,n;this.frameCount++,this.metricTimer+=e,this.metricTimer>=1&&(this.fps=this.frameCount/this.metricTimer,this.tps=this.tickCount/this.metricTimer,this.frameCount=0,this.tickCount=0,this.metricTimer=0,(n=(t=this.cb).onMetrics)==null||n.call(t,{fps:this.fps,tps:this.tps,totalTicks:this.totalTicks,stepsLastFrame:this.stepsLastFrame}))}}class ix{constructor(){x(this,"handlers",{})}on(e,t){var n;return((n=this.handlers)[e]??(n[e]=[])).push(t),()=>this.off(e,t)}off(e,t){const n=this.handlers[e];if(!n)return;const i=n.indexOf(t);i>=0&&n.splice(i,1)}emit(e,t){const n=this.handlers[e];if(n)for(const i of n.slice())i(t)}}class Uu{constructor(){x(this,"nextId",1);x(this,"entities",new Map);x(this,"events",new ix);x(this,"elapsed",0)}add(e){return e.id=this.nextId++,this.entities.set(e.id,e),e}remove(e){this.entities.delete(e)}get(e){return this.entities.get(e)}all(){return this.entities.values()}get count(){return this.entities.size}tick(e){var t;this.elapsed+=e;for(const n of Array.from(this.entities.values()))(t=n.update)==null||t.call(n,e,this)}}class qi{constructor(e,t,n,i={}){x(this,"id",0);x(this,"position");x(this,"radius");x(this,"hull");x(this,"maxHull");x(this,"designation");x(this,"className");x(this,"allegiance");x(this,"composition");this.position=e.clone(),this.radius=t,this.hull=n,this.maxHull=n,this.designation=i.designation??"Unknown Contact",this.className=i.className??"Autonomous Drone",this.allegiance=i.allegiance??"foe",this.composition=i.composition??"Ferro-alloy hull"}applyDamage(e,t,n="bolt"){this.hull-=e,t.events.emit("target-hit",{targetId:this.id,damage:e,hull:Math.max(0,this.hull),x:this.position.x,y:this.position.y,z:this.position.z,impact:n}),this.hull<=0&&(t.remove(this.id),t.events.emit("entity-destroyed",{id:this.id,kind:"target",x:this.position.x,y:this.position.y,z:this.position.z}))}}function Ws(r){return typeof r.applyDamage=="function"}const sx=.5;function As(r,e,t){return r<e?e:r>t?t:r}function rx(r,e,t,n,i,s,o,a,c,l,h,u){const d=n-r,p=i-e,g=s-t,_=l-o,m=h-a,f=u-c,T=r-o,S=e-a,v=t-c,L=d*d+p*p+g*g,R=_*_+m*m+f*f,C=_*T+m*S+f*v,P=1e-9;let y,M;if(L<=P&&R<=P)return T*T+S*S+v*v;if(L<=P)y=0,M=As(C/R,0,1);else{const oe=d*T+p*S+g*v;if(R<=P)M=0,y=As(-oe/L,0,1);else{const fe=d*_+p*m+g*f,Ie=L*R-fe*fe;y=Ie>P?As((fe*C-oe*R)/Ie,0,1):0,M=(fe*y+C)/R,M<0?(M=0,y=As(-oe/L,0,1)):M>1&&(M=1,y=As((fe-oe)/L,0,1))}}const I=r+d*y,k=e+p*y,z=t+g*y,q=o+_*M,$=a+m*M,Y=c+f*M,X=I-q,W=k-$,ne=z-Y;return X*X+W*W+ne*ne}class Xs{constructor(e,t,n,i,s,o,a=!0){x(this,"id",0);x(this,"position");x(this,"velocity");x(this,"heading");x(this,"damage");x(this,"lifetime");x(this,"ownerId");x(this,"visibleTracer");this.position=e.clone(),this.velocity=t.clone(),this.heading=(o?o.clone():this.velocity.clone()).normalize(),this.damage=n,this.lifetime=i,this.ownerId=s,this.visibleTracer=a}update(e,t){const n=this.position.x,i=this.position.y,s=this.position.z;this.position.addScaledVector(this.velocity,e);const o=this.position.x,a=this.position.y,c=this.position.z;if(this.lifetime-=e,this.lifetime<=0){t.remove(this.id);return}for(const l of t.all()){if(l.id===this.ownerId||!Ws(l)||l.collidable===!1)continue;const h=l.radius+sx,u=l.hitHeight??0;if(rx(n,i,s,o,a,c,l.position.x,l.position.y,l.position.z,l.position.x,l.position.y+u,l.position.z)<=h*h){l.applyDamage(this.damage,t,"bolt"),t.remove(this.id);return}}}}const ko=6e3;function zt(r,e){return 22*Math.sin(r*.0016)*Math.cos(e*.0013)+11*Math.sin(r*.0041+1.3)*Math.sin(e*.0035-.7)+5*Math.cos((r+e)*.009+.5)}const ox=2.5,ax=.35,cx=5.5,lx=16,hx=40,ux=1.3,dx=2,fx=14,px=.3,Wl=5.5,mx=new w(0,-3.8,-3),gx=new w(0,-2,-8),_x=new w(0,0,-1);class qs{constructor(e,t,n,i,s,o){x(this,"id",0);x(this,"position",new w);x(this,"heading",new w(0,0,-1));x(this,"phase","emerge");x(this,"spin",0);x(this,"bayLocal",new w);x(this,"velocity",new w);x(this,"ownerId");x(this,"damage");x(this,"maxSpeed");x(this,"range");x(this,"splashRadius");x(this,"accel");x(this,"target");x(this,"emergeTime");x(this,"igniteTime");x(this,"fuelTime");x(this,"initialBoostSpeed");x(this,"homingRate");x(this,"spinRate");x(this,"wobbleAmp");x(this,"detonateOnArrival");x(this,"arriveRadius");x(this,"detonateOnTerrain");x(this,"straightTime");x(this,"inheritSpeed",0);x(this,"age",0);x(this,"traveled",0);x(this,"speed",0);x(this,"launched",!1);x(this,"scratch",new w);this.position.copy(e),this.heading.copy(t).normalize(),this.target=n?n.clone():null,this.ownerId=i,this.damage=s.damage,this.maxSpeed=s.projectileSpeed,this.range=s.range,this.splashRadius=s.splashRadius??0;const a=s.missile??{};this.emergeTime=a.emergeTime??ox,this.igniteTime=a.igniteTime??ax,this.fuelTime=a.fuelTime??cx,this.initialBoostSpeed=a.initialBoostSpeed??hx,this.homingRate=a.homingRate??ux,this.spinRate=a.spin??fx,this.wobbleAmp=a.wobble??px,this.detonateOnArrival=a.detonateOnArrival??!1,this.arriveRadius=a.arriveRadius??0,this.detonateOnTerrain=a.detonateOnTerrain??!1,this.straightTime=a.straightTime??0,a.inheritVelocity&&o&&(this.inheritSpeed=o.length()),this.accel=(this.maxSpeed-this.initialBoostSpeed)/(this.fuelTime*.9)}get burning(){return this.phase==="ignite"||this.phase==="boost"}update(e,t){this.age+=e,this.launched||(this.launched=!0,this.emit(t,"missile-launched"));const n=this.computePhase();n!==this.phase&&this.enterPhase(n,t);const i=this.phase==="emerge"?Math.min(1,this.age/this.emergeTime):1;this.spin+=this.spinRate*i*e;const s=this.getCarrier(t);if(this.phase==="emerge"||this.phase==="ignite"){if(s){this.heading.copy(_x).applyQuaternion(s.quaternion);const o=this.phase==="emerge"?this.age/this.emergeTime:1,a=1-(1-o)*(1-o);this.bayLocal.copy(mx).lerp(gx,a);const c=i*this.wobbleAmp,l=this.id*2.4;this.bayLocal.x+=c*Math.sin(this.age*Wl+l),this.bayLocal.y+=c*Math.cos(this.age*Wl*1.17+l),this.position.copy(this.bayLocal).applyQuaternion(s.quaternion).add(s.position),this.velocity.copy(s.velocity)}return}if(this.phase==="boost"&&(this.speed=Math.min(this.maxSpeed,this.speed+this.accel*e),this.target&&this.age>=this.straightTime&&this.steerToward(this.target,e)),this.velocity.copy(this.heading).multiplyScalar(this.speed+this.inheritSpeed),this.position.addScaledVector(this.velocity,e),this.traveled+=this.speed*e,this.detonateOnArrival&&this.target&&this.position.distanceToSquared(this.target)<=this.arriveRadius*this.arriveRadius){this.detonate(t);return}if(this.detonateOnTerrain&&this.position.y<=zt(this.position.x,this.position.z)){this.detonate(t);return}if(this.checkContact(t)){this.detonate(t);return}(this.traveled>=this.range||this.age>=lx)&&(t.events.emit("missile-removed",{id:this.id}),t.remove(this.id))}computePhase(){return this.age<this.emergeTime?"emerge":this.age<this.emergeTime+this.igniteTime?"ignite":this.age<this.emergeTime+this.igniteTime+this.fuelTime?"boost":"coast"}enterPhase(e,t){this.phase=e,e==="ignite"?this.emit(t,"missile-ignited"):e==="boost"?(this.speed=Math.max(this.initialBoostSpeed,this.velocity.length()),this.emit(t,"missile-boost")):e==="coast"&&t.events.emit("missile-burnout",{id:this.id})}steerToward(e,t){if(this.scratch.copy(e).sub(this.position),this.scratch.lengthSq()<1e-6)return;this.scratch.normalize();const n=this.heading.angleTo(this.scratch);if(n<1e-4)return;const i=Math.min(1,this.homingRate*t/n);this.heading.lerp(this.scratch,i).normalize()}checkContact(e){for(const t of e.all()){if(t.id===this.ownerId||!Ws(t))continue;const n=t.radius+dx;if(this.position.distanceToSquared(t.position)<=n*n)return!0}return!1}detonate(e){if(this.splashRadius>0){const t=this.splashRadius*this.splashRadius;for(const n of Array.from(e.all())){if(n.id===this.ownerId||!Ws(n))continue;const i=this.position.distanceToSquared(n.position);if(i>t)continue;const s=1-Math.sqrt(i)/this.splashRadius,o=this.damage*s;o>0&&n.applyDamage(o,e,"blast")}}e.events.emit("missile-detonated",{id:this.id,x:this.position.x,y:this.position.y,z:this.position.z,radius:this.splashRadius>0?this.splashRadius*.6:30}),e.events.emit("missile-removed",{id:this.id}),e.remove(this.id)}getCarrier(e){const t=e.get(this.ownerId);return t&&t.quaternion&&t.position&&t.velocity?t:null}emit(e,t){e.events.emit(t,{id:this.id,x:this.position.x,y:this.position.y,z:this.position.z})}}class za{constructor(e,t,n,i,s,o,a){x(this,"id",0);x(this,"position",new w);x(this,"label");x(this,"velocity",new w);x(this,"speed");x(this,"maxRange");x(this,"sensorRange");x(this,"sector");x(this,"traveled",0);this.position.copy(e),this.velocity.copy(t).normalize().multiplyScalar(n),this.speed=n,this.maxRange=i,this.sensorRange=s,this.label=o,this.sector=a}update(e,t){this.position.addScaledVector(this.velocity,e),this.traveled+=this.speed*e;for(const n of this.sector.revealNear(this.position,this.sensorRange))t.events.emit("report",{source:this.label,text:`Contact detected — ${n.name}`,alert:!0});this.traveled>=this.maxRange&&(t.events.emit("report",{source:this.label,text:"Survey complete — telemetry returned."}),t.remove(this.id))}}function xx(){return{glow:vx(64),fire:yx(128),ring:Mx(128)}}function gc(r){const e=document.createElement("canvas");e.width=e.height=r;const t=e.getContext("2d");if(!t)throw new Error("2d canvas context unavailable");return{c:e,g:t}}function vx(r){const{c:e,g:t}=gc(r),n=r/2,i=t.createRadialGradient(n,n,0,n,n,n);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,r,r),new fn(e)}function Mx(r){const{c:e,g:t}=gc(r),n=r/2,i=t.createRadialGradient(n,n,0,n,n,n);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.55,"rgba(255,255,255,0)"),i.addColorStop(.72,"rgba(255,255,255,1)"),i.addColorStop(.82,"rgba(255,255,255,0.4)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,r,r),new fn(e)}function yx(r){const{c:e,g:t}=gc(r),n=t.createImageData(r,r),i=n.data,s=Math.random()*100,o=Math.random()*100,a=r/2;for(let c=0;c<r;c++)for(let l=0;l<r;l++){const h=(l-a)/a,u=(c-a)/a;let p=1-Math.hypot(h,u);p<0&&(p=0),p=p*p;const g=Ex(l/r*5+s,c/r*5+o),_=p*Tx(g*1.6),m=(c*r+l)*4;i[m]=255,i[m+1]=255,i[m+2]=255,i[m+3]=Math.round(_*255)}return t.putImageData(n,0,0),new fn(e)}function Cr(r,e){const t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Sx(r,e){const t=Math.floor(r),n=Math.floor(e),i=r-t,s=e-n,o=i*i*(3-2*i),a=s*s*(3-2*s),c=Cr(t,n),l=Cr(t+1,n),h=Cr(t,n+1),u=Cr(t+1,n+1),d=c+(l-c)*o,p=h+(u-h)*o;return d+(p-d)*a}function Ex(r,e){let t=0,n=.5,i=1;for(let s=0;s<4;s++)t+=n*Sx(r*i,e*i),i*=2,n*=.5;return t}function Tx(r){return r<0?0:r>1?1:r}const Xl=.35,ql=.95,Yl=[16773824,16764506,16751155,16736030,16757066],Ir=[4870232,3817544,5659750,3027771],Kl=3;class Fu{constructor(e){x(this,"group",new mt);x(this,"effects",[]);x(this,"tex");e.add(this.group),this.tex=xx()}get textures(){return this.tex}spawnHit(e,t,n){this.add(this.buildHit(e,t,n)),this.add(this.buildHitSmoke(e,t,n))}spawnExplosion(e,t,n,i=8){this.add(this.buildExplosion(e,t,n,i))}spawnExplosionResidue(e,t,n,i,s){const o=Math.max(1,Math.round((3+Math.random()*3)*s.smokiness));for(let a=0;a<o;a++)this.add(this.buildSmokePlume(e,t,n,i,s));this.add(this.buildParticulate(e,t,n,i,s))}spawnMist(e,t,n){this.add(this.buildMist(e,t,n))}spawnSmoke(e,t,n){this.add(this.buildSmoke(e,t,n))}spawnDamageSmoke(e,t,n,i=1){this.add(this.buildDamageSmoke(e,t,n,i))}update(e){for(let t=this.effects.length-1;t>=0;t--){const n=this.effects[t];n.age+=e,n.age>=n.duration?(this.group.remove(n.root),bx(n.root),this.effects.splice(t,1)):n.update(n.age,e)}}add(e){this.group.add(e.root),this.effects.push({...e,age:0})}sprite(e,t,n){const i=new rn({map:e,color:t,transparent:!0,opacity:n,blending:pn,depthWrite:!1,depthTest:!1,rotation:Math.random()*Math.PI*2});return new $t(i)}buildHit(e,t,n){const i=new mt;i.position.set(e,t,n);const s=this.sprite(this.tex.glow,12580607,1);i.add(s);const o=s.material,a=this.makeSparks(i,5,this.tex.glow,10482687,3,8,.9);return{root:i,duration:Xl,update:(c,l)=>{const h=c/Xl,u=1-h,d=3+h*5;s.scale.set(d,d,1),o.opacity=u*u,this.updateMovers(a,u,l)}}}buildHitSmoke(e,t,n){const i=new mt;i.position.set(e,t,n);const s=.8,o=[];for(let a=0;a<5;a++){const c=this.sprite(this.tex.fire,9675192,0);c.position.copy(li()).multiplyScalar(2*Math.random()),i.add(c),o.push({sprite:c,mat:c.material,vel:li().multiplyScalar(2+Math.random()*3),from:1.2+Math.random(),to:3+Math.random()*2.5,spin:(Math.random()-.5)*1.5,peak:.18+Math.random()*.12})}return{root:i,duration:s,update:(a,c)=>{const l=a/s,h=Math.sin(Math.PI*l);for(const u of o){u.sprite.position.addScaledVector(u.vel,c);const d=u.from+(u.to-u.from)*l;u.sprite.scale.set(d,d,1),u.mat.rotation+=u.spin*c,u.mat.opacity=u.peak*h}}}}buildExplosion(e,t,n,i){const s=new mt;s.position.set(e,t,n);const o=this.sprite(this.tex.glow,16777198,1);s.add(o);const a=o.material,c=[];for(let d=0;d<7;d++){const p=Yl[Math.random()*Yl.length|0],g=this.sprite(this.tex.fire,p,.95);g.position.copy(li()).multiplyScalar(i*(.1+Math.random()*.55)),s.add(g),c.push({sprite:g,mat:g.material,from:i*.4,to:i*(1.1+Math.random()*1.5),aspectX:.8+Math.random()*.5,aspectY:.8+Math.random()*.5,spin:(Math.random()-.5)*3,fadePow:1.2+Math.random()*1.3})}const l=this.sprite(this.tex.ring,16767392,.7);s.add(l);const h=l.material,u=this.makeSparks(s,14,this.tex.glow,16762726,i*.5,i*3.2,i*.5);return{root:s,duration:ql,update:(d,p)=>{const g=d/ql,_=1-g,m=1-_*_,f=i*(.8+m*1.6);o.scale.set(f,f,1),a.opacity=Math.max(0,1-g*3);for(const S of c){const v=S.from+(S.to-S.from)*m;S.sprite.scale.set(v*S.aspectX,v*S.aspectY,1),S.mat.rotation+=S.spin*p,S.mat.opacity=Math.pow(_,S.fadePow)*.95}const T=i*(.4+m*4.2);l.scale.set(T,T,1),h.opacity=_*_*.7,this.updateMovers(u,_,p)}}}buildMist(e,t,n){const i=new mt;i.position.set(e,t,n);const s=this.sprite(this.tex.fire,9430783,.3);i.add(s);const o=s.material,a=(Math.random()-.5)*2,c=1.6,l=5.5,h=.55;return{root:i,duration:h,update:(u,d)=>{const p=u/h,g=1-p,_=c+(l-c)*p;s.scale.set(_,_,1),o.rotation+=a*d,o.opacity=g*g*.3}}}buildSmoke(e,t,n){const i=new mt;i.position.set(e,t,n);const s=this.sprite(this.tex.fire,9082019,0);i.add(s);const o=s.material,a=li().multiplyScalar(1.5+Math.random()*2),c=(Math.random()-.5)*1.2,l=2.2,h=8+Math.random()*3,u=.28+Math.random()*.12,d=1.2;return{root:i,duration:d,update:(p,g)=>{const _=p/d,m=l+(h-l)*_;s.scale.set(m,m,1),s.position.addScaledVector(a,g),o.rotation+=c*g,o.opacity=u*Math.sin(Math.PI*_)}}}buildDamageSmoke(e,t,n,i=1){const s=new mt;s.position.set(e,t,n);const o=this.sprite(this.tex.fire,7765128,0);s.add(o);const a=o.material,c=new w((Math.random()-.5)*.9,.8+Math.random()*.9,(Math.random()-.5)*.9),l=(Math.random()-.5)*1.2,h=1*i,u=3.2*i,d=(.16+Math.random()*.08)*Math.min(1.5,.7+i*.4),p=1.4+(i-1)*.35;return{root:s,duration:p,update:(g,_)=>{const m=g/p,f=h+(u-h)*m;o.scale.set(f,f,1),o.position.addScaledVector(c,_),a.rotation+=l*_,a.opacity=d*Math.sin(Math.PI*m)}}}buildSmokePlume(e,t,n,i,s){const o=new mt;o.position.set(e,t,n);const a=Ir[Math.random()*Ir.length|0],c=this.sprite(this.tex.fire,a,0);c.position.copy(li()).multiplyScalar(i*.4*s.spread*Math.random()),o.add(c);const l=c.material,h=new w((Math.random()-.5)*2,1.4+Math.random()*2.2,(Math.random()-.5)*2),u=(Math.random()-.5)*.7,d=i*(.4+Math.random()*.3)*s.sizeScale*Kl,p=i*(1.5+Math.random()*1.6)*s.sizeScale*Kl,g=(.2+Math.random()*.12)*(.55+.9*s.darkness),_=3.5+Math.random()*2;return{root:o,duration:_,update:(m,f)=>{const T=m/_,S=d+(p-d)*T;c.scale.set(S,S,1),c.position.addScaledVector(h,f),h.multiplyScalar(1-.4*f),l.rotation+=u*f,l.opacity=g*Math.sin(Math.PI*T)}}}buildParticulate(e,t,n,i,s){const o=new mt;o.position.set(e,t,n);const a=[],c=Math.max(6,Math.round((14+Math.random()*10)*s.smokiness));for(let u=0;u<c;u++){const d=Math.random()<.35,p=d?16753994:Ir[Math.random()*Ir.length|0],g=this.sprite(d?this.tex.glow:this.tex.fire,p,1),_=li();g.position.copy(_).multiplyScalar(i*.3*s.spread*Math.random());const m=(d?.4+Math.random()*.6:.8+Math.random()*1.4)*s.sizeScale;g.scale.set(m,m,1),o.add(g),a.push({sprite:g,mat:g.material,vel:_.multiplyScalar((d?6:3)*(.4+Math.random())*s.spread),size:m,ember:d})}const l=.35+.5*s.darkness,h=2.8+Math.random()*1.6;return{root:o,duration:h,update:(u,d)=>{const g=1-u/h;for(const _ of a)if(_.sprite.position.addScaledVector(_.vel,d),_.vel.multiplyScalar(1-1.1*d),_.ember){_.mat.opacity=g*g;const m=_.size*(.4+g*.6);_.sprite.scale.set(m,m,1)}else _.mat.opacity=g*l}}}makeSparks(e,t,n,i,s,o,a){const c=[];for(let l=0;l<t;l++){const h=this.sprite(n,i,1),u=li();h.position.copy(u).multiplyScalar(a*Math.random());const d=s*(.6+Math.random()*.8);h.scale.set(d,d,1),e.add(h),c.push({sprite:h,mat:h.material,vel:u.multiplyScalar(o*(.5+Math.random())),size:d})}return c}updateMovers(e,t,n){for(const i of e){i.sprite.position.addScaledVector(i.vel,n);const s=i.size*(.4+t*.8);i.sprite.scale.set(s,s,1),i.mat.opacity=t*t}}}function li(){const r=Math.random()*2-1,e=Math.random()*Math.PI*2,t=Math.sqrt(1-r*r);return new w(t*Math.cos(e),t*Math.sin(e),r)}function bx(r){r.traverse(e=>{e instanceof $t&&e.material.dispose()})}const jl=2500,wx=800,Ax=new w(0,1.9,8),Rx=new w(0,.3,-.2),$l=5,Zl=7,Cx=4,Ix=new w(0,0,-1),Px=new w(0,0,1),Lx=new w(0,0,1),Dx=16,Nx={bolt:{marks:1,spread:0,sizeScale:1,darkness:.65,smokiness:.6},blast:{marks:6,spread:1.4,sizeScale:.95,darkness:1,smokiness:2.2}},Ux={spread:1.2,sizeScale:1.15,darkness:.8,smokiness:1.4};function Fx(){const r=Math.random()*2-1,e=Math.random()*Math.PI*2,t=Math.sqrt(1-r*r);return new w(t*Math.cos(e),t*Math.sin(e),r)}class Ox{constructor(e){x(this,"renderer");x(this,"scene");x(this,"camera");x(this,"stars");x(this,"player",null);x(this,"playerMesh",null);x(this,"cameraMode","bridge");x(this,"shakeMag",0);x(this,"selected",null);x(this,"selectionRing",null);x(this,"entityMeshes",new Map);x(this,"seenIds",new Set);x(this,"boltMistAnchors",new Map);x(this,"missileSmokeAnchors",new Map);x(this,"sector",null);x(this,"poiMeshes",new Map);x(this,"seenPoiIds",new Set);x(this,"effects");x(this,"lastRenderTime",performance.now());x(this,"missileTex",null);x(this,"scorchGeo",null);x(this,"damageDecals",new Map);x(this,"renderPos",new w);x(this,"renderQuat",new tt);x(this,"spinQuat",new tt);x(this,"desiredCamPos",new w);x(this,"camForward",new w);x(this,"toTarget",new w);x(this,"ndc",new w);x(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});this.renderer=new Eu({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.scene=new Tu,this.scene.background=new Ce(131850),this.camera=new Lt(70,window.innerWidth/window.innerHeight,.1,5e3),this.camera.position.set(0,2,10),this.scene.add(new V0(5595248,1.6));const t=new dc(13625599,1.4);t.position.set(.5,1,.3),this.scene.add(t),this.stars=this.createStarfield(),this.scene.add(this.stars),this.effects=new Fu(this.scene),window.addEventListener("resize",this.onResize)}spawnHitEffect(e,t,n){this.effects.spawnHit(e,t,n)}addShake(e){this.shakeMag=Math.min(Cx,this.shakeMag+e)}spawnExplosionEffect(e,t,n,i=8){this.effects.spawnExplosion(e,t,n,i)}spawnExplosionResidue(e,t,n,i=8){this.effects.spawnExplosionResidue(e,t,n,i,Ux)}spawnDamage(e,t,n,i,s,o="bolt"){const a=this.entityMeshes.get(e);if(!(a instanceof Be))return;this.scorchGeo||(this.scorchGeo=new ls(1,1));let c=this.damageDecals.get(e);c||(c={meshes:[],localPoints:[],smokeTimer:.3,smokiness:1},this.damageDecals.set(e,c));const l=Nx[o],h=new w(t,n,i).sub(a.position).applyQuaternion(new tt().copy(a.quaternion).invert()),u=h.length()||1,d=Math.min(1,s/90),p=Math.min(13,1.5+s*.12),g=Math.min(1,l.darkness*(.55+.45*d));for(let _=0;_<l.marks&&!(c.meshes.length>=Dx);_++){const m=_===0?h.clone():h.clone().addScaledVector(Fx(),l.spread*u*Math.random()).normalize().multiplyScalar(u),f=m.clone().normalize(),T=new jt({map:this.effects.textures.fire,color:723725,transparent:!0,opacity:g,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),S=new Be(this.scorchGeo,T);S.quaternion.setFromUnitVectors(Lx,f),S.rotateZ(Math.random()*Math.PI*2),S.position.copy(m).addScaledVector(f,.12);const v=p*l.sizeScale*(.75+Math.random()*.5);S.scale.set(v,v,1),a.add(S),c.meshes.push(S),c.localPoints.push(m.clone())}c.smokiness=Math.max(c.smokiness,l.smokiness)}clearDamage(e){var n;const t=this.damageDecals.get(e);if(t){for(const i of t.meshes)(n=i.parent)==null||n.remove(i),i.material.dispose();this.damageDecals.delete(e)}}updateDamageSmoke(e){for(const[t,n]of this.damageDecals){const i=this.entityMeshes.get(t);if(!(i instanceof Be)){this.damageDecals.delete(t);continue}if(n.smokeTimer-=e,n.smokeTimer<=0){const s=n.smokiness;n.smokeTimer=(.4+Math.random()*.6)/Math.max(.4,s);const o=n.localPoints[Math.random()*n.localPoints.length|0];if(o){const a=o.clone().applyQuaternion(i.quaternion).add(i.position);this.effects.spawnDamageSmoke(a.x,a.y,a.z,s)}}}}setPlayer(e){this.player=e,this.playerMesh=this.createShipMesh(),this.scene.add(this.playerMesh),this.cameraMode=e.profile.view}setSector(e){this.sector=e}toggleCamera(){return this.cameraMode=this.cameraMode==="bridge"?"chase":"bridge",this.cameraMode}get currentCamera(){return this.cameraMode}render(e,t){const n=performance.now(),i=Math.min((n-this.lastRenderTime)/1e3,.1);if(this.lastRenderTime=n,this.stars.rotation.y+=8e-5,this.effects.update(i),this.player&&this.playerMesh&&this.syncPlayer(this.player,this.playerMesh,t,i),this.syncEntities(e,n/1e3),this.syncPois(),this.updateSelectionRing(e,n/1e3),this.updateDamageSmoke(i),this.shakeMag>.001){const s=this.shakeMag;this.camera.position.x+=(Math.random()*2-1)*s,this.camera.position.y+=(Math.random()*2-1)*s,this.camera.position.z+=(Math.random()*2-1)*s,this.camera.rotateZ((Math.random()*2-1)*s*.05),this.shakeMag*=Math.exp(-4.5*i)}else this.shakeMag=0;this.renderer.render(this.scene,this.camera)}syncPois(){if(this.sector){this.seenPoiIds.clear();for(const e of this.sector.pois){if(!e.discovered)continue;let t=this.poiMeshes.get(e.id);t||(t=this.createPoiMesh(),this.scene.add(t),this.poiMeshes.set(e.id,t)),t.position.copy(e.position),t.rotation.y+=.006,this.seenPoiIds.add(e.id)}for(const[e,t]of this.poiMeshes)this.seenPoiIds.has(e)||(this.scene.remove(t),t.geometry.dispose(),t.material.dispose(),this.poiMeshes.delete(e))}}createPoiMesh(){const e=new Kr(10,0),t=new jt({color:8381439,wireframe:!0,transparent:!0,opacity:.8});return new Be(e,t)}getTargetTracks(e){const t=[],n=window.innerWidth,i=window.innerHeight;this.camera.getWorldDirection(this.camForward);const s=i/(2*Math.tan(this.camera.fov*Math.PI/180/2));for(const o of e.all()){if(!(o instanceof qi)||(this.toTarget.subVectors(o.position,this.camera.position),this.toTarget.dot(this.camForward)<=0)||(this.ndc.copy(o.position).project(this.camera),this.ndc.x<-1||this.ndc.x>1||this.ndc.y<-1||this.ndc.y>1))continue;const a=this.toTarget.length();t.push({id:o.id,x:(this.ndc.x*.5+.5)*n,y:(-this.ndc.y*.5+.5)*i,size:Math.max(14,o.radius/a*s),dist:a})}return t}pickSelectable(e,t,n){const i=window.innerWidth,s=window.innerHeight;this.camera.getWorldDirection(this.camForward);const o=s/(2*Math.tan(this.camera.fov*Math.PI/180/2));let a=null,c=1/0;const l=(h,u,d)=>{if(this.toTarget.subVectors(u,this.camera.position),this.toTarget.dot(this.camForward)<=0||(this.ndc.copy(u).project(this.camera),this.ndc.x<-1||this.ndc.x>1||this.ndc.y<-1||this.ndc.y>1))return;const p=(this.ndc.x*.5+.5)*i,g=(-this.ndc.y*.5+.5)*s,m=Math.max(16,d/this.toTarget.length()*o)+12;if(Math.abs(e-p)>m||Math.abs(t-g)>m)return;const f=Math.hypot(e-p,t-g);f<c&&(c=f,a=h)};for(const h of n.all())h instanceof qi&&l({kind:"target",id:h.id},h.position,h.radius);if(this.sector)for(const h of this.sector.pois)h.discovered&&l({kind:"poi",id:h.id},h.position,10);return a}setSelected(e){this.selected=e}aimPointFromScreen(e,t){const n=window.innerWidth,i=window.innerHeight,s=new w(e/n*2-1,-(t/i)*2+1,.5).unproject(this.camera);return s.sub(this.camera.position).normalize(),this.camera.position.clone().addScaledVector(s,2e3)}updateSelectionRing(e,t){var o,a;this.selectionRing||(this.selectionRing=new $t(new rn({map:this.effects.textures.ring,color:10481919,transparent:!0,opacity:.9,blending:pn,depthWrite:!1,depthTest:!1})),this.selectionRing.visible=!1,this.scene.add(this.selectionRing));const n=this.selectionRing;let i=null,s=10;if(((o=this.selected)==null?void 0:o.kind)==="target"){const c=e.get(this.selected.id);c instanceof qi&&(i=c.position,s=c.radius)}else if(((a=this.selected)==null?void 0:a.kind)==="poi"&&this.sector){const c=this.sector.pois.find(l=>l.id===this.selected.id);c!=null&&c.discovered&&(i=c.position,s=12)}if(i){n.visible=!0,n.position.copy(i);const c=s*3.6*(1+.06*Math.sin(t*3));n.scale.set(c,c,1),n.material.rotation=t*.6}else n.visible=!1}syncEntities(e,t){this.seenIds.clear();for(const n of e.all()){let i=this.entityMeshes.get(n.id);n instanceof qi?(i||(i=this.createTargetMesh(n.radius),this.scene.add(i),this.entityMeshes.set(n.id,i)),i.position.copy(n.position),i.rotation.y+=.01,this.seenIds.add(n.id)):n instanceof Xs?(i||(i=this.createBolt(),this.scene.add(i),this.entityMeshes.set(n.id,i)),i.position.copy(n.position),this.animateBolt(i,n.id,t),this.trailMist(n.id,n.position),this.seenIds.add(n.id)):n instanceof qs?(i||(i=this.createMissileMesh(),this.scene.add(i),this.entityMeshes.set(n.id,i)),this.syncMissile(i,n,t),this.seenIds.add(n.id)):n instanceof za&&(i||(i=this.createProbeMesh(),this.scene.add(i),this.entityMeshes.set(n.id,i)),i.position.copy(n.position),i.rotation.y+=.05,this.seenIds.add(n.id))}for(const[n,i]of this.entityMeshes)this.seenIds.has(n)||(this.scene.remove(i),Bx(i),this.entityMeshes.delete(n),this.boltMistAnchors.delete(n),this.missileSmokeAnchors.delete(n))}trailMist(e,t){const n=this.boltMistAnchors.get(e);if(!n){this.boltMistAnchors.set(e,t.clone());return}t.distanceToSquared(n)>=$l*$l&&(this.effects.spawnMist(t.x,t.y,t.z),n.copy(t))}animateBolt(e,t,n){const i=t*1.7,s=Math.sin(n*24+i),o=Math.sin(n*15+i*.6),a=e.children[0],c=e.children[1],l=4*(1+.3*o);a.scale.set(l,l,1),a.material.rotation=n*1.6+i,a.material.opacity=.5+.2*o;const h=1.6*(1+.2*s);c.scale.set(h,h,1),c.material.opacity=.85+.15*s}syncMissile(e,t,n){e.position.copy(t.position),this.renderQuat.setFromUnitVectors(Ix,t.heading),this.spinQuat.setFromAxisAngle(Px,t.spin+t.id),e.quaternion.copy(this.renderQuat).multiply(this.spinQuat);const i=e.userData.burner;if(t.burning){const s=.75+.25*Math.sin(n*40+t.id);i.material.opacity=.9*s;const o=1.6+3*s;i.scale.set(o,o,1),this.trailSmoke(t.id,t.position)}else i.material.opacity=0}trailSmoke(e,t){const n=this.missileSmokeAnchors.get(e);if(!n){this.missileSmokeAnchors.set(e,t.clone());return}t.distanceToSquared(n)>=Zl*Zl&&(this.effects.spawnSmoke(t.x,t.y,t.z),n.copy(t))}createTargetMesh(e){const t=new lc(e,0),n=new wt({color:16738906,emissive:3804426,emissiveIntensity:1,metalness:.2,roughness:.6,flatShading:!0});return new Be(t,n)}createBolt(){const e=this.effects.textures,t=new mt,n=new $t(new rn({map:e.fire,color:6280447,transparent:!0,opacity:.6,blending:pn,depthWrite:!1,depthTest:!1}));n.scale.setScalar(4),t.add(n);const i=new $t(new rn({map:e.glow,color:14220799,transparent:!0,opacity:1,blending:pn,depthWrite:!1,depthTest:!1}));return i.scale.setScalar(1.6),t.add(i),t}createMissileMesh(){const e=new mt,t=this.getMissileTexture(),n=new wt({map:t,color:13620442,emissive:592396,metalness:.5,roughness:.5}),i=new wt({color:1842980,metalness:.4,roughness:.65,flatShading:!0}),s=new nn(.55,.55,4,14);s.rotateX(Math.PI/2),e.add(new Be(s,n));const o=new Yr(.55,1.4,14);o.rotateX(-Math.PI/2);const a=new Be(o,i);a.position.set(0,0,-2.4),e.add(a);const c=new nn(.62,.62,.3,14);c.rotateX(Math.PI/2);const l=new Be(c,i);l.position.set(0,0,.9),e.add(l);const h=new Ht(.1,.95,1.7);h.translate(0,.55,0);for(let d=0;d<4;d++){const p=d*Math.PI/2,g=new Be(h,i);g.position.z=1.55,g.rotation.z=p,e.add(g)}const u=new $t(new rn({map:this.effects.textures.glow,color:16757575,transparent:!0,opacity:0,blending:pn,depthWrite:!1,depthTest:!1}));return u.position.set(0,0,2.5),u.scale.setScalar(3),e.add(u),e.userData.burner=u,e}getMissileTexture(){if(this.missileTex)return this.missileTex;const e=document.createElement("canvas");e.width=64,e.height=128;const t=e.getContext("2d");t.fillStyle="#333941",t.fillRect(0,0,64,128);for(let i=0;i<500;i++){const s=Math.random()*64,o=Math.random()*128,a=2+Math.random()*10,c=Math.random()<.5;t.strokeStyle=c?`rgba(90,98,108,${.05+Math.random()*.18})`:`rgba(16,18,22,${.05+Math.random()*.22})`,t.beginPath(),t.moveTo(s,o),t.lineTo(s,o+a),t.stroke()}t.strokeStyle="rgba(8,9,11,0.6)",t.lineWidth=1;for(const i of[16,46,78,104])t.beginPath(),t.moveTo(0,i+.5),t.lineTo(64,i+.5),t.stroke();t.fillStyle="#9a3a2c",t.fillRect(0,24,64,12),t.fillStyle="rgba(0,0,0,0.4)";for(let i=-12;i<64;i+=12)t.fillRect(i,24,6,12);const n=new fn(e);return n.wrapS=Sn,n.wrapT=yn,n.repeat.set(2,1),this.missileTex=n,n}createProbeMesh(){const e=new Kr(1.8,0),t=new jt({color:8381439});return new Be(e,t)}syncPlayer(e,t,n,i){if(this.renderPos.lerpVectors(e.prevPosition,e.position,n),this.renderQuat.copy(e.prevQuaternion).slerp(e.quaternion,n),t.position.copy(this.renderPos),t.quaternion.copy(this.renderQuat),this.cameraMode==="bridge")t.visible=!1,this.desiredCamPos.copy(Rx).applyQuaternion(this.renderQuat).add(this.renderPos),this.camera.position.copy(this.desiredCamPos),this.camera.quaternion.copy(this.renderQuat);else{t.visible=!0,this.desiredCamPos.copy(Ax).applyQuaternion(this.renderQuat).add(this.renderPos);const s=1-Math.exp(-9*i),o=1-Math.exp(-11*i);this.camera.position.lerp(this.desiredCamPos,s),this.camera.quaternion.slerp(this.renderQuat,o)}}createShipMesh(){const e=new mt,t=new wt({color:10135234,metalness:.6,roughness:.4}),n=new wt({color:8381439,metalness:.3,roughness:.5}),i=new wt({color:1717584,emissive:3399167,emissiveIntensity:1.4}),s=new Yr(.5,2.4,12);s.rotateX(-Math.PI/2),e.add(new Be(s,t));const o=new Ht(3.2,.12,.9),a=new Be(o,t);a.position.z=.4,e.add(a);const c=new Ht(.1,.7,.8),l=new Be(c,n);l.position.set(0,.4,.6),e.add(l);const h=new Ht(.7,.3,.3),u=new Be(h,i);return u.position.z=1.25,e.add(u),e}createStarfield(){const e=new Float32Array(jl*3);for(let i=0;i<jl;i++){const s=zo(i*2+1),o=zo(i*2+2),a=2*Math.PI*s,c=Math.acos(2*o-1),l=wx*(.6+.4*zo(i+7919));e[i*3+0]=l*Math.sin(c)*Math.cos(a),e[i*3+1]=l*Math.sin(c)*Math.sin(a),e[i*3+2]=l*Math.cos(c)}const t=new Dt;t.setAttribute("position",new ht(e,3));const n=new ac({color:12576511,size:1.4,sizeAttenuation:!1});return new cc(t,n)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}function Bx(r){r.traverse(e=>{if(e instanceof Be){e.geometry.dispose();const t=e.material;Array.isArray(t)?t.forEach(n=>n.dispose()):t.dispose()}else e instanceof $t&&e.material.dispose()})}function zo(r){const e=Math.sin(r*12.9898)*43758.5453;return e-Math.floor(e)}class kx{constructor(e){x(this,"root");x(this,"modes",new Map);x(this,"current",null);x(this,"lastState",null);this.root=document.createElement("div"),this.root.className="hud-root",e.appendChild(this.root)}register(e){this.modes.set(e.name,e)}setMode(e){var n,i;if(((n=this.current)==null?void 0:n.name)===e)return;const t=this.modes.get(e);if(!t){console.warn(`HudManager: unknown HUD mode "${e}"`);return}(i=this.current)==null||i.unmount(),this.current=t,t.mount(this.root),this.lastState&&t.update(this.lastState)}update(e){var t;this.lastState=e,(t=this.current)==null||t.update(e)}get currentMode(){var e;return(e=this.current)==null?void 0:e.name}}const Ho="dec.hud.panel.";function hi(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&t.appendChild(n),n}class gi{constructor(e){x(this,"root");x(this,"body");x(this,"bar");x(this,"collapseBtn");x(this,"lockBtn");x(this,"id");x(this,"defaults");x(this,"collapsed",!1);x(this,"locked",!1);x(this,"pos",null);x(this,"dragging",!1);x(this,"dragDX",0);x(this,"dragDY",0);x(this,"onPointerDown",e=>{if(this.locked||e.target.closest(".hud-panel-ctrl"))return;const t=this.root.getBoundingClientRect();this.dragDX=e.clientX-t.left,this.dragDY=e.clientY-t.top,this.dragging=!0,this.bar.setPointerCapture(e.pointerId),e.preventDefault()});x(this,"onPointerMove",e=>{if(!this.dragging)return;const t=this.root.offsetWidth,n=this.root.offsetHeight,i=4,s=Ql(e.clientX-this.dragDX,i,window.innerWidth-t-i),o=Ql(e.clientY-this.dragDY,i,window.innerHeight-n-i);this.applyPosition(s,o)});x(this,"onPointerUp",e=>{this.dragging&&(this.dragging=!1,this.bar.releasePointerCapture(e.pointerId),this.save())});this.id=e.id,this.defaults=e.defaults,this.root=hi("div","hud-panel",e.parent),this.bar=hi("div","hud-panel-bar",this.root);const t=hi("div",`hud-panel-title${e.titleClass?` ${e.titleClass}`:""}`,this.bar);t.textContent=e.title;const n=hi("div","hud-panel-ctrls",this.bar);this.collapseBtn=hi("button","hud-panel-ctrl hud-panel-collapse",n),this.collapseBtn.type="button",this.lockBtn=hi("button","hud-panel-ctrl hud-panel-lock",n),this.lockBtn.type="button",this.body=hi("div","hud-panel-body",this.root),this.collapseBtn.addEventListener("click",i=>{i.stopPropagation(),this.toggleCollapse()}),this.lockBtn.addEventListener("click",i=>{i.stopPropagation(),this.toggleLock()}),this.bar.addEventListener("pointerdown",this.onPointerDown),this.bar.addEventListener("pointermove",this.onPointerMove),this.bar.addEventListener("pointerup",this.onPointerUp),this.applyDefaults(),this.restore()}toggleCollapse(){this.locked||(this.setCollapsed(!this.collapsed),this.save())}setCollapsed(e){this.collapsed=e,this.root.classList.toggle("hud-panel-collapsed",e),this.collapseBtn.textContent=e?"▸":"▾",this.collapseBtn.title=e?"Expand":"Collapse"}toggleLock(){this.setLocked(!this.locked),this.save()}setLocked(e){this.locked=e,this.root.classList.toggle("hud-panel-locked",e),this.lockBtn.textContent=e?"🔒":"🔓",this.lockBtn.title=e?"Locked — click to unlock":"Unlocked — click to lock"}applyDefaults(){const e=this.defaults,t=this.root.style;t.left=e.left??(e.centerX?"50%":"auto"),t.right=e.right??"auto",t.top=e.top??"auto",t.bottom=e.bottom??"auto",t.transform=e.centerX?"translateX(-50%)":"none",this.pos=null}applyPosition(e,t){const n=this.root.style;n.left=`${e}px`,n.top=`${t}px`,n.right="auto",n.bottom="auto",n.transform="none",this.pos={x:e,y:t}}restore(){let e={};try{const t=localStorage.getItem(Ho+this.id);t&&(e=JSON.parse(t))}catch{e={}}typeof e.x=="number"&&typeof e.y=="number"&&this.applyPosition(e.x,e.y),this.setCollapsed(!!e.collapsed),this.setLocked(!!e.locked)}save(){const e={collapsed:this.collapsed,locked:this.locked};this.pos&&(e.x=this.pos.x,e.y=this.pos.y);try{localStorage.setItem(Ho+this.id,JSON.stringify(e))}catch{}}resetLayout(){this.setCollapsed(!1),this.setLocked(!1),this.applyDefaults();try{localStorage.removeItem(Ho+this.id)}catch{}}}function Ql(r,e,t){return r<e?e:r>t?t:r}function Xe(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&t.appendChild(n),n}class zx{constructor(e={}){x(this,"name","bridge");x(this,"container",null);x(this,"header");x(this,"sectorLine");x(this,"throttleFill");x(this,"throttleText");x(this,"speedFill");x(this,"speedText");x(this,"hullFill");x(this,"hullText");x(this,"kills");x(this,"dev");x(this,"panels",[]);x(this,"weaponsWrap");x(this,"weaponRows",new Map);x(this,"trackLayer");x(this,"trackPool",new Map);x(this,"radarCount");x(this,"radarScope");x(this,"blipPool",new Map);x(this,"sensorLogEl");x(this,"uupFill");x(this,"powerBody");x(this,"powerRows",new Map);this.options=e}barRow(e,t,n){const i=Xe("div","hud-stat",e);Xe("div","hud-stat-label",i).textContent=t;const s=Xe("div","hud-bar",i),o=Xe("div",`hud-bar-fill ${n}`,s),a=Xe("div","hud-stat-val",i);return{fill:o,val:a}}mount(e){const t=Xe("div","hud hud-bridge",e);this.container=t,Xe("div","hud-vignette",t),this.trackLayer=Xe("div","hud-tracklayer",t);for(const p of["tl","tr","bl","br"])Xe("div",`hud-corner hud-corner-${p}`,t);const n=Xe("div","hud-ident",t);this.header=Xe("div","hud-header",n),this.sectorLine=Xe("div","hud-sector",n);const i=new gi({parent:t,id:"sensors",title:"SENSORS",defaults:{right:"32px",top:"76px"}});i.root.classList.add("hud-radar"),this.radarScope=Xe("div","hud-radar-scope",i.body),Xe("div","hud-radar-rings",this.radarScope),Xe("div","hud-radar-ship",this.radarScope),this.radarCount=Xe("div","hud-radar-count",i.body),this.sensorLogEl=Xe("div","hud-sensor-log",i.body),this.panels.push(i);const s=new gi({parent:t,id:"reactor",title:"REACTOR",defaults:{centerX:!0,bottom:"40px"}});s.root.classList.add("hud-power");const o=Xe("div","hud-uup",s.body);Xe("div","hud-uup-label",o).innerHTML="Uup<sup>115</sup>";const a=Xe("div","hud-uup-bar",o);this.uupFill=Xe("div","hud-uup-fill",a),Xe("div","hud-power-hint",s.body).textContent="click / 1·2·3 route · 0 bal · 7·8·9 presets",this.powerBody=s.body,this.panels.push(s);const c=new gi({parent:t,id:"flight",title:"FLIGHT",defaults:{left:"40px",bottom:"40px"}}),l=this.barRow(c.body,"THR","hud-fill-thr");this.throttleFill=l.fill,this.throttleText=l.val;const h=this.barRow(c.body,"VEL","hud-fill-spd");this.speedFill=h.fill,this.speedText=h.val,this.panels.push(c);const u=new gi({parent:t,id:"combat",title:"COMBAT",defaults:{right:"40px",bottom:"40px"}}),d=this.barRow(u.body,"HULL","hud-fill-hull");this.hullFill=d.fill,this.hullText=d.val,this.weaponsWrap=Xe("div","hud-weapons",u.body),this.kills=Xe("div","hud-kills",u.body),this.panels.push(u),this.dev=Xe("div","hud-dev",t)}resetLayout(){for(const e of this.panels)e.resetLayout()}get sensorLog(){return this.sensorLogEl}update(e){if(!this.container)return;this.header.textContent=`DEC · ${e.craftName.toUpperCase()}`,this.sectorLine.textContent=e.sectorName.toUpperCase(),this.throttleFill.style.width=`${Rs(e.throttle)}%`,this.throttleText.textContent=`${Math.round(e.throttle*100)}%`;const t=e.maxSpeed>0?e.speed/e.maxSpeed:0;this.speedFill.style.width=`${Rs(t)}%`,this.speedText.textContent=`${Math.round(e.speed)}`;const n=e.maxHull>0?e.hull/e.maxHull:0;this.hullFill.style.width=`${Rs(n)}%`,this.hullFill.style.background=Hx(n),this.hullText.textContent=`${Math.round(e.hull)}`,this.updateWeapons(e.weapons),this.kills.textContent=e.targetsDestroyed>0?`NEUTRALISED · ${e.targetsDestroyed}`:"",this.updateTracks(e.tracks),this.updateRadar(e),this.uupFill.style.width=`${Rs(e.primaryPower.fraction)}%`,this.updatePower(e.power);const i=e.metrics;this.dev.textContent=i?`${i.fps.toFixed(0)} fps · ${i.tps.toFixed(0)}/${mc} tps · cam:${e.camera} (C)`:`cam:${e.camera} (C)`}updateWeapons(e){const t=new Set;for(const n of e){let i=this.weaponRows.get(n.index);if(!i){const o=Xe("div","hud-wpn-row",this.weaponsWrap);Xe("div","hud-wpn-sel",o).textContent="▸";const a=Xe("div","hud-wpn-name",o),c=Xe("div","hud-wpn-state",o),l=Xe("div","hud-wpn-bar",o),h=Xe("div","hud-wpn-fill",l);o.addEventListener("click",()=>{var u,d;return(d=(u=this.options).onSelectWeapon)==null?void 0:d.call(u,n.index)}),i={row:o,name:a,state:c,fill:h},this.weaponRows.set(n.index,i)}i.name.textContent=n.name.toUpperCase(),i.state.textContent=n.ready?"READY":"CHRG",i.row.classList.toggle("selected",n.selected),i.row.classList.toggle("ready",n.ready);const s=n.maxEnergy>0?n.energy/n.maxEnergy:0;i.fill.style.width=`${Rs(s)}%`,i.fill.classList.toggle("low",!n.ready),t.add(n.index)}for(const[n,i]of this.weaponRows)t.has(n)||(i.row.remove(),this.weaponRows.delete(n))}updateTracks(e){const t=new Set;for(const n of e){let i=this.trackPool.get(n.id);i||(i=Xe("div","hud-track",this.trackLayer),this.trackPool.set(n.id,i)),i.style.left=`${n.x}px`,i.style.top=`${n.y}px`,i.style.width=`${n.size*2}px`,i.style.height=`${n.size*2}px`,t.add(n.id)}for(const[n,i]of this.trackPool)t.has(n)||(i.remove(),this.trackPool.delete(n))}updateRadar(e){this.radarCount.textContent=`CONTACTS · ${e.radar.length}`;const t=70,n=new Set;for(const i of e.radar){let s=this.blipPool.get(i.key);s||(s=Xe("div","hud-blip",this.radarScope),this.blipPool.set(i.key,s)),s.style.left=`${75+i.x*t}px`,s.style.top=`${75+i.y*t}px`,s.classList.toggle("hud-blip-edge",i.edge),s.classList.toggle("hud-blip-probe",i.kind==="probe"),n.add(i.key)}for(const[i,s]of this.blipPool)n.has(i)||(s.remove(),this.blipPool.delete(i))}updatePower(e){for(const t of e){let n=this.powerRows.get(t.key);if(!n){const i=Xe("div",`hud-power-row hud-power-${t.key}`,this.powerBody);i.addEventListener("click",c=>{var l,h;return(h=(l=this.options).onRoutePower)==null?void 0:h.call(l,t.key,c.shiftKey)}),Xe("div","hud-power-label",i).textContent=t.label;const s=Xe("div","hud-pips",i),o=[];for(let c=0;c<t.max;c++)o.push(Xe("div","hud-pip",s));const a=Xe("div","hud-power-factor",i);n={pips:o,factor:a},this.powerRows.set(t.key,n)}for(let i=0;i<n.pips.length;i++)n.pips[i].classList.toggle("filled",i<t.level);n.factor.textContent=`×${t.factor.toFixed(2)}`}}unmount(){var e;this.trackPool.clear(),this.blipPool.clear(),this.powerRows.clear(),this.weaponRows.clear(),this.panels.length=0,(e=this.container)==null||e.remove(),this.container=null}}function Rs(r){return Math.max(0,Math.min(1,r))*100}function Hx(r){return r>.5?"#4ee39a":r>.25?"#ffcc55":"#ff5a5a"}class Ou{constructor(){x(this,"held",new Set);x(this,"onKeyDown",e=>{this.held.add(e.code)});x(this,"onKeyUp",e=>{this.held.delete(e.code)});x(this,"onBlur",()=>{this.held.clear()});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}isDown(e){return this.held.has(e)}axis(e,t){return(this.isDown(e)?1:0)-(this.isDown(t)?1:0)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}}class Vx{constructor(e){x(this,"ship",null);x(this,"impulseEngaged",!1);this.input=e}bind(e){this.ship=e}update(e){const t=this.ship;if(!t)return;const i=t.profile.handling.throttleRate*e,s=this.input.isDown("Space"),o=this.input.axis("KeyR","KeyF");this.input.isDown("KeyX")?(t.throttle=0,this.impulseEngaged=!1):s?(this.impulseEngaged=!0,t.throttle=Vo(t.throttle+i)):o!==0?(this.impulseEngaged=!1,t.throttle=Vo(t.throttle+o*i)):this.impulseEngaged&&(t.throttle=Vo(t.throttle-i),t.throttle<=0&&(this.impulseEngaged=!1)),t.firing=!1,t.turnInput.pitch=this.input.axis("KeyW","KeyS"),t.turnInput.yaw=this.input.axis("KeyD","KeyA"),t.turnInput.roll=this.input.axis("KeyQ","KeyE"),t.strafe=0}}function Vo(r){return r<0?0:r>1?1:r}const Gx=.15;class Wx{constructor(e,t){x(this,"capacity");x(this,"regen");x(this,"_charge");this.capacity=e,this.regen=t,this._charge=e}get charge(){return this._charge}get fraction(){return this.capacity>0?this._charge/this.capacity:0}get availability(){const e=this.capacity*Gx;return this._charge>=e?1:Math.max(0,this._charge/e)}draw(e){if(e<=0)return 0;const t=Math.min(e,this._charge);return this._charge-=t,t}regenerate(e){this._charge=Math.min(this.capacity,this._charge+this.regen*e)}}const Jl=new w(0,0,-1),Xx=new w(1,0,0),qx=new w(0,1,0),Yx=new w(0,0,1),Kx=new w(0,-2.2,-3),jx=new w(0,-3.8,-3),$x=18,Zx=4;class Bu{constructor(e){x(this,"id",0);x(this,"profile");x(this,"primary");x(this,"position",new w);x(this,"quaternion",new tt);x(this,"velocity",new w);x(this,"throttle",0);x(this,"strafe",0);x(this,"lift",0);x(this,"bankOffset",0);x(this,"hull");x(this,"turnInput",{pitch:0,yaw:0,roll:0});x(this,"angularVel",new w);x(this,"firing",!1);x(this,"thrusterPower",1);x(this,"weaponPower",1);x(this,"selectedWeaponIndex",0);x(this,"fireRequest",null);x(this,"aimPoint",new w);x(this,"hasAimPoint",!1);x(this,"directedOrigin",new w);x(this,"directedDir",new w);x(this,"hasDirected",!1);x(this,"weaponTimers");x(this,"charge");x(this,"prevPosition",new w);x(this,"prevQuaternion",new tt);x(this,"dq",new tt);x(this,"euler",new on);x(this,"forward",new w);x(this,"right",new w);x(this,"targetVel",new w);x(this,"targetAngular",new w);x(this,"muzzle",new w);x(this,"boltVel",new w);x(this,"aimDir",new w);x(this,"bankScratch",new tt);this.profile=e,this.hull=e.combat.hull,this.primary=new Wx(e.power.capacity,e.power.regen),this.weaponTimers=e.combat.weapons.map(()=>0),this.charge=e.combat.weapons.map(t=>t.maxEnergy)}get maxHull(){return this.profile.combat.hull}get primaryPower(){return{charge:this.primary.charge,capacity:this.primary.capacity,fraction:this.primary.fraction}}get selectedWeapon(){return this.selectedWeaponIndex}get selectedWeaponSpec(){return this.profile.combat.weapons[this.selectedWeaponIndex]}selectWeapon(e){e>=0&&e<this.profile.combat.weapons.length&&(this.selectedWeaponIndex=e)}cycleWeapon(e){const t=this.profile.combat.weapons.length;t>0&&(this.selectedWeaponIndex=(this.selectedWeaponIndex+e+t)%t)}isWeaponReady(e){const t=this.profile.combat.weapons[e];return!!t&&this.weaponTimers[e]<=0&&this.charge[e]>=t.energyCost}isSelectedDepleted(){const e=this.selectedWeaponIndex,t=this.profile.combat.weapons[e];return!!t&&this.charge[e]<t.energyCost}selectedChargeFraction(){const e=this.selectedWeaponIndex,t=this.profile.combat.weapons[e],n=t?t.maxEnergy*this.weaponPower:0;return n>0?this.charge[e]/n:0}getWeaponStatuses(){return this.profile.combat.weapons.map((e,t)=>({index:t,name:e.name,selected:t===this.selectedWeaponIndex,ready:this.isWeaponReady(t),energy:this.charge[t],maxEnergy:e.maxEnergy*this.weaponPower}))}requestShot(e){this.fireRequest=e}requestAimedShot(e){this.aimPoint.copy(e),this.hasAimPoint=!0}requestDirectedShot(e,t){this.directedOrigin.copy(e),this.directedDir.copy(t).normalize(),this.hasDirected=!0}applyImpulse(e,t,n){this.velocity.x+=e,this.velocity.y+=t,this.velocity.z+=n}update(e,t){this.prevPosition.copy(this.position),this.prevQuaternion.copy(this.quaternion);const n=this.thrusterPower,{yawRate:i,pitchRate:s,rollRate:o,angularResponse:a}=this.profile.handling;this.targetAngular.set(this.turnInput.pitch*s*n,-this.turnInput.yaw*i*n,this.turnInput.roll*o*n);const c=1-Math.exp(-a*e);this.angularVel.lerp(this.targetAngular,c),this.euler.set(this.angularVel.x*e,this.angularVel.y*e,this.angularVel.z*e,"XYZ"),this.dq.setFromEuler(this.euler),this.quaternion.multiply(this.dq).normalize();const l=n*(.25+.75*this.primary.availability),{maxSpeed:h,strafeSpeed:u,thrustResponse:d}=this.profile.handling;this.forward.copy(Jl).applyQuaternion(this.quaternion),this.right.copy(Xx).applyQuaternion(this.quaternion),this.targetVel.copy(this.forward).multiplyScalar(this.throttle*h*l).addScaledVector(this.right,this.strafe*u*l).addScaledVector(qx,this.lift*u*l);const p=1-Math.exp(-d*e);this.velocity.lerp(this.targetVel,p),this.position.addScaledVector(this.velocity,e),this.primary.draw(Math.abs(this.throttle)*$x*e);const g=Math.abs(this.turnInput.pitch)+Math.abs(this.turnInput.yaw)+Math.abs(this.turnInput.roll);this.primary.draw(g*Zx*e),this.updateWeapons(e,t),this.primary.regenerate(e)}updateWeapons(e,t){const n=this.profile.combat.weapons,i=this.weaponPower;for(let a=0;a<n.length;a++){this.weaponTimers[a]-=e;const c=n[a].maxEnergy*i,l=c-this.charge[a];if(l>0){const h=this.primary.draw(Math.min(n[a].rechargeRate*i*e,l));this.charge[a]=Math.min(c,this.charge[a]+h)}}const s=this.selectedWeaponIndex,o=n[s];if(o&&this.weaponTimers[s]<=0&&this.charge[s]>=o.energyCost){let c=!1;if(this.hasDirected)this.fireDirected(o,t,this.directedOrigin,this.directedDir),c=!0;else{let l;this.fireRequest&&t.get(this.fireRequest.id)?l=this.fireRequest.position:this.hasAimPoint?l=this.aimPoint:this.firing&&(l=null),l!==void 0&&(this.fireWeapon(o,t,l),c=!0)}c&&(this.weaponTimers[s]=o.cooldown,this.charge[s]-=o.energyCost)}this.fireRequest=null,this.hasAimPoint=!1,this.hasDirected=!1}fireDirected(e,t,n,i){if(e.kind==="missile"){t.add(new qs(n,i,null,this.id,e,this.velocity)),t.events.emit("weapon-fired",{shipId:this.id,weapon:e.name,kind:"missile"});return}this.boltVel.copy(i).multiplyScalar(e.projectileSpeed),e.scoped||this.boltVel.add(this.velocity);const s=e.range/e.projectileSpeed;t.add(new Xs(n,this.boltVel,e.damage,s,this.id,i,!e.scoped)),t.events.emit("weapon-fired",{shipId:this.id,weapon:e.name,kind:"bolt"})}fireWeapon(e,t,n){if(this.forward.copy(Jl).applyQuaternion(this.quaternion),e.kind==="missile"){const s=e.missile;s!=null&&s.launchLocal?this.muzzle.set(s.launchLocal.x,s.launchLocal.y,s.launchLocal.z):this.muzzle.copy(jx),this.muzzle.applyQuaternion(this.quaternion).add(this.position);let o=this.forward;s!=null&&s.launchStraight&&n&&(this.aimDir.copy(n).sub(this.muzzle).normalize(),o=this.aimDir),t.add(new qs(this.muzzle,o,n??null,this.id,e,this.velocity)),t.events.emit("weapon-fired",{shipId:this.id,weapon:e.name,kind:"missile"});return}this.muzzle.copy(Kx).applyQuaternion(this.quaternion).add(this.position),n?(this.aimDir.copy(n).sub(this.muzzle).normalize(),this.boltVel.copy(this.aimDir).multiplyScalar(e.projectileSpeed)):this.boltVel.copy(this.forward).multiplyScalar(e.projectileSpeed).add(this.velocity);const i=e.range/e.projectileSpeed;t.add(new Xs(this.muzzle,this.boltVel,e.damage,i,this.id)),t.events.emit("weapon-fired",{shipId:this.id,weapon:e.name,kind:"bolt"})}get speed(){return this.velocity.length()}getEffectiveQuaternion(e){return e.copy(this.quaternion).multiply(this.bankScratch.setFromAxisAngle(Yx,this.bankOffset))}}const Qx={name:"The Meridian",view:"bridge",handling:{maxSpeed:90,strafeSpeed:28,thrustResponse:1.2,yawRate:.32,pitchRate:.26,rollRate:.4,angularResponse:1.1,throttleRate:.4},combat:{hull:500,weapons:[{name:"Pulsar Cannon",damage:34,cooldown:.4,projectileSpeed:150,range:700,maxEnergy:100,energyCost:33,rechargeRate:12},{name:"Trident Missile",kind:"missile",damage:90,cooldown:1.4,projectileSpeed:170,range:1400,splashRadius:60,maxEnergy:100,energyCost:50,rechargeRate:8}]},systems:{sensorRange:260},power:{capacity:1200,regen:12}},Jx={name:"Paladin",view:"bridge",handling:{maxSpeed:110,strafeSpeed:95,thrustResponse:5.5,yawRate:1.1,pitchRate:1,rollRate:2,angularResponse:5.5,throttleRate:.9},combat:{hull:140,weapons:[{name:"Mini Gun",kind:"bolt",damage:6,cooldown:.0175,projectileSpeed:1200,range:2e4,maxEnergy:900,energyCost:2.2,rechargeRate:22},{name:"Scorpion Rocket",kind:"missile",damage:90,cooldown:.9,projectileSpeed:260,range:3e3,splashRadius:120,maxEnergy:100,energyCost:34,rechargeRate:16,missile:{emergeTime:0,igniteTime:0,fuelTime:5,initialBoostSpeed:105,homingRate:7,spin:5,wobble:0,detonateOnTerrain:!0,launchLocal:{x:0,y:-3,z:-.2},launchStraight:!0,inheritVelocity:!0}},{name:"Vigil Sniper",kind:"bolt",scoped:!0,damage:150,cooldown:1,projectileSpeed:3e3,range:6e3,maxEnergy:100,energyCost:30,rechargeRate:12}]},systems:{sensorRange:200},power:{capacity:800,regen:80}};class ev{constructor(e,t,n,i,s=!1){x(this,"discovered");this.id=e,this.name=t,this.position=n,this.kind=i,this.discovered=s}}class tv{constructor(e){x(this,"pois",[]);x(this,"nextPoiId",1);this.name=e}addPoi(e,t,n,i=!1){const s=new ev(this.nextPoiId++,e,t,n,i);return this.pois.push(s),s}revealNear(e,t){const n=t*t,i=[];for(const s of this.pois)!s.discovered&&e.distanceToSquared(s.position)<=n&&(s.discovered=!0,i.push(s));return i}get discoveredCount(){return this.pois.reduce((e,t)=>t.discovered?e+1:e,0)}}const nv=6,iv=8e3,sv=600;class rv{constructor(e,t){x(this,"el");x(this,"lines",[]);this.el=document.createElement("div"),this.el.className="report-feed",e.appendChild(this.el),t.on("report",n=>this.push(n))}push(e){var s;const t=document.createElement("div");t.className=`report-line${e.alert?" report-alert":""}`;const n=document.createElement("span");n.className="report-src",n.textContent=`${e.source}: `;const i=document.createElement("span");for(i.textContent=e.text,t.append(n,i),this.el.appendChild(t),this.lines.push(t);this.lines.length>nv;)(s=this.lines.shift())==null||s.remove();window.setTimeout(()=>{t.classList.add("report-out"),window.setTimeout(()=>{t.remove(),this.lines=this.lines.filter(o=>o!==t)},sv)},iv)}}class ov{constructor(e){x(this,"el");this.el=document.createElement("div"),this.el.className="damage-flash",e.appendChild(this.el)}flash(e){const t=Math.max(0,Math.min(1,e));t<=0||(this.el.style.transition="none",this.el.style.opacity=String(t),this.el.offsetWidth,this.el.style.transition="opacity 1400ms ease-in",this.el.style.opacity="0")}}const av={friend:"FRIENDLY",foe:"HOSTILE",neutral:"NEUTRAL"};function xt(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&t.appendChild(n),n}class cv{constructor(e,t){x(this,"panel");x(this,"root");x(this,"desig");x(this,"classVal");x(this,"alleg");x(this,"rangeVal");x(this,"compVal");x(this,"integrityRow");x(this,"integrityFill");x(this,"integrityVal");x(this,"attackBtn");x(this,"open",!1);this.panel=new gi({parent:e,id:"intel",title:"INTEL",defaults:{left:"34px",top:"120px"}}),this.root=this.panel.root,this.root.classList.add("intel-panel");const n=xt("div","intel-content",this.panel.body),i=xt("div","intel-header",n);xt("div","intel-icon",i);const s=xt("div","intel-titles",i);this.desig=xt("div","intel-desig",s),this.classVal=xt("div","intel-class",s);const o=xt("button","intel-close",i);o.type="button",o.textContent="×",o.title="Deselect (Esc)",o.addEventListener("click",t.onClose),this.alleg=xt("div","intel-alleg",n),this.rangeVal=this.statRow(n,"RANGE"),this.compVal=this.statRow(n,"COMPOSITION"),this.integrityRow=xt("div","intel-integrity",n),xt("div","intel-stat-label",this.integrityRow).textContent="INTEGRITY";const a=xt("div","intel-ibar",this.integrityRow);this.integrityFill=xt("div","intel-ifill",a),this.integrityVal=xt("div","intel-ival",this.integrityRow);const c=xt("div","intel-actions",n),l=xt("button","intel-btn intel-hail",c);l.type="button",l.textContent="⟟ HAIL",l.addEventListener("click",t.onHail),this.attackBtn=xt("button","intel-btn intel-attack",c),this.attackBtn.type="button",this.attackBtn.textContent="✦ ATTACK",this.attackBtn.addEventListener("click",t.onAttack),this.hide()}statRow(e,t){const n=xt("div","intel-stat",e);return xt("div","intel-stat-label",n).textContent=t,xt("div","intel-stat-val",n)}get isOpen(){return this.open}resetLayout(){this.panel.resetLayout()}show(){this.open=!0,this.root.style.display=""}hide(){this.open=!1,this.root.style.display="none"}update(e){if(this.desig.textContent=e.designation.toUpperCase(),this.classVal.textContent=e.className,this.rangeVal.textContent=`${Math.round(e.range)} u`,this.compVal.textContent=e.composition,this.root.classList.remove("alleg-friend","alleg-foe","alleg-neutral"),this.root.classList.add(`alleg-${e.allegiance}`),this.alleg.textContent=av[e.allegiance],e.integrity){this.integrityRow.style.display="";const t=e.integrity.max>0?e.integrity.hull/e.integrity.max:0;this.integrityFill.style.width=`${Math.max(0,Math.min(1,t))*100}%`,this.integrityVal.textContent=`${Math.round(e.integrity.hull)}`}else this.integrityRow.style.display="none";this.attackBtn.disabled=!e.canAttack}}const lv="audio/256269__jmayoff__space-ship-atmosphere.mp3",hv="audio/630027__el_boss__space-ship-accelerating.mp3",uv="audio/341831__ianstargem__laser-phaser.mp3",dv="audio/490266__anomaex__sci-fi_explosion_2.mp3",fv="audio/60823__nkenez__explosion1dbl.mp3",pv="audio/94131__bmaczero__rattle1.mp3",mv="audio/630442__marsounds__washing-machine_spinup.mp3",gv="audio/630442__marsounds__washing-machine_spin.mp3",_v="audio/739487__qubodup__fire-trap.mp3",xv="audio/774270__thelittlecrow__rocket-launch-boost-and-burning-version-b.mp3",vv="audio/628638__el_boss__menu-select-tick.mp3",Mv=1.7,yv=.18,Sv=.1,Ev=.6,Tv=900,eh=2.2,bv=7,wv=.18,Av=.3,Rv=650,Cv=.18,Iv=.8,Pv=.3,Lv=.7,Dv=.34,Nv=.5,Uv=.7,Fv=.5,Ov=1,Bv=.42,kv=.4,th=.18,zv=1,Hv=.42,Vv=.9,nh=.32,Gv=.85,Wv=.62,Xv=.32,qv=.28,Yv=.4,Kv=1,ih=100,jv=2500,$v=1.6,Zv=1,Pr=.95,Qv=1.08,sh=[{offset:0,duration:1.8},{offset:3.42,duration:1.9},{offset:6.85,duration:1.8}];class Jv{constructor(){x(this,"ctx");x(this,"laserBuffer",null);x(this,"explosionBuffer",null);x(this,"hitBuffer",null);x(this,"missileReleaseBuffer",null);x(this,"missileWindupBuffer",null);x(this,"missileSpinBuffer",null);x(this,"missileIgniteBuffer",null);x(this,"missileBoostBuffer",null);x(this,"tickBuffer",null);x(this,"missileVoices",new Map);x(this,"missileSpinVoices",new Map);x(this,"ambience");x(this,"thrustBuffer",null);x(this,"thrustStarted",!1);x(this,"accelLpf");x(this,"accelGain");x(this,"accelTarget",0);x(this,"decelLpf");x(this,"decelGain");x(this,"decelTarget",0);x(this,"ambienceRateTarget",Pr);x(this,"started",!1);x(this,"unlock",()=>this.start());this.ctx=new AudioContext,this.ambience=this.makeLoop(lv),eM(this.ambience),this.ambience.playbackRate=Pr;const e=this.ctx.createGain();e.gain.value=Mv,this.ctx.createMediaElementSource(this.ambience).connect(e),e.connect(this.ctx.destination);const t=this.makeThrustBus(Tv);this.accelLpf=t.lpf,this.accelGain=t.gain;const n=this.makeThrustBus(Rv);this.decelLpf=n.lpf,this.decelGain=n.gain,this.load(hv).then(i=>{this.thrustBuffer=i,this.startThrustSources()}),this.load(uv).then(i=>{this.laserBuffer=i}),this.load(dv).then(i=>{this.explosionBuffer=i}),this.load(fv).then(i=>{this.hitBuffer=i}),this.load(pv).then(i=>{this.missileReleaseBuffer=i}),this.load(mv).then(i=>{this.missileWindupBuffer=i}),this.load(gv).then(i=>{this.missileSpinBuffer=i}),this.load(_v).then(i=>{this.missileIgniteBuffer=i}),this.load(xv).then(i=>{this.missileBoostBuffer=i}),this.load(vv).then(i=>{this.tickBuffer=i}),window.addEventListener("keydown",this.unlock,{once:!0}),window.addEventListener("mousedown",this.unlock,{once:!0})}dispose(){window.removeEventListener("keydown",this.unlock),window.removeEventListener("mousedown",this.unlock);for(const e of this.missileVoices.values())try{e.src.stop()}catch{}for(const e of this.missileSpinVoices.values())try{e.src.stop()}catch{}this.missileVoices.clear(),this.missileSpinVoices.clear(),this.ambience.pause(),this.ctx.close()}makeLoop(e){const t=new Audio(e);return t.loop=!0,t.crossOrigin="anonymous",t}makeThrustBus(e){const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=e;const n=this.ctx.createGain();return n.gain.value=0,t.connect(n),n.connect(this.ctx.destination),{lpf:t,gain:n}}startThrustSources(){!this.thrustBuffer||!this.started||this.thrustStarted||(this.thrustStarted=!0,this.playThrustLoop(Ev,this.accelLpf),this.playThrustLoop(Av,this.decelLpf))}playThrustLoop(e,t){const n=this.ctx.createBufferSource();n.buffer=this.thrustBuffer,n.loop=!0,n.loopStart=eh,n.loopEnd=bv,n.playbackRate.value=e,n.connect(t),n.start(0,eh)}async load(e){try{const t=await(await fetch(e)).arrayBuffer();return await this.ctx.decodeAudioData(t)}catch{return null}}start(){this.started||(this.started=!0,this.ctx.resume(),this.ambience.play().catch(()=>{}),this.startThrustSources())}playTick(){this.oneShot(this.tickBuffer,Yv,Kv)}playPulsar(){const e=sh[Math.random()*sh.length|0];this.oneShot(this.laserBuffer,Cv,Iv,e.offset,e.duration)}playExplosion(e=0){const t=xn(e);t<=0||this.oneShot(this.explosionBuffer,Pv*t,Lv,Dv)}playHit(e=0){const t=xn(e);t<=0||this.oneShot(this.hitBuffer,Nv*t,Uv,0,Zv)}playMissileRelease(e=0){const t=xn(e);t>0&&this.oneShot(this.missileReleaseBuffer,Fv*t,Ov)}playMissileWindup(e=0){const t=xn(e);if(!this.missileWindupBuffer||this.ctx.state!=="running"||t<=0)return;const n=this.ctx.createBufferSource();n.buffer=this.missileWindupBuffer;const i=this.ctx.createGain();i.gain.value=Bv*t,n.connect(i).connect(this.ctx.destination),n.start(this.ctx.currentTime+kv)}startMissileSpin(e,t=0){if(!this.missileSpinBuffer||this.ctx.state!=="running"||this.missileSpinVoices.has(e))return;const n=this.ctx.createBufferSource();n.buffer=this.missileSpinBuffer,n.loop=!0,n.playbackRate.value=zv;const i=this.ctx.createGain();i.gain.value=th*xn(t),n.connect(i).connect(this.ctx.destination),n.start(0),this.missileSpinVoices.set(e,{src:n,gain:i})}updateMissileSpin(e,t){const n=this.missileSpinVoices.get(e);n&&(n.gain.gain.value=th*xn(t))}stopMissileSpin(e){const t=this.missileSpinVoices.get(e);if(!t)return;this.missileSpinVoices.delete(e);const n=this.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,n),t.gain.gain.linearRampToValueAtTime(0,n+.1);try{t.src.stop(n+.12)}catch{}}playMissileIgnite(e=0){const t=xn(e);t>0&&this.oneShot(this.missileIgniteBuffer,Hv*t,Vv)}playMissileDetonation(e=0){const t=xn(e);t>0&&this.oneShot(this.explosionBuffer,Wv*t,Xv,qv)}startMissileBoost(e,t=0){if(!this.missileBoostBuffer||this.ctx.state!=="running"||this.missileVoices.has(e))return;const n=this.ctx.createBufferSource();n.buffer=this.missileBoostBuffer,n.loop=!0,n.playbackRate.value=Gv;const i=this.ctx.createGain();i.gain.value=nh*xn(t),n.connect(i).connect(this.ctx.destination),n.start(0),this.missileVoices.set(e,{src:n,gain:i})}updateMissileBoost(e,t){const n=this.missileVoices.get(e);n&&(n.gain.gain.value=nh*xn(t))}stopMissileBoost(e){const t=this.missileVoices.get(e);if(!t)return;this.missileVoices.delete(e);const n=this.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,n),t.gain.gain.linearRampToValueAtTime(0,n+.08);try{t.src.stop(n+.12)}catch{}}oneShot(e,t,n=1,i=0,s){if(!e||this.ctx.state!=="running")return;const o=this.ctx.createBufferSource();o.buffer=e,o.playbackRate.value=n;const a=this.ctx.createGain();if(a.gain.value=t,o.connect(a).connect(this.ctx.destination),s!==void 0){const c=this.ctx.currentTime,l=s/n,h=Math.min(.12,l*.25);a.gain.setValueAtTime(t,c+l-h),a.gain.linearRampToValueAtTime(0,c+l),o.start(0,i,s)}else o.start(0,i)}setThrust(e,t){const n=t<0?0:t>1?1:t;this.accelTarget=e?yv:n*Sv}setDecel(e){this.decelTarget=e?wv:0}setSpeedFraction(e){const t=e<0?0:e>1?1:e;this.ambienceRateTarget=Pr+(Qv-Pr)*t}update(e){const t=1-Math.exp(-6*e),n=this.accelGain.gain;n.value+=(this.accelTarget-n.value)*t;const i=this.decelGain.gain;i.value+=(this.decelTarget-i.value)*t;const s=1-Math.exp(-3*e);this.ambience.playbackRate+=(this.ambienceRateTarget-this.ambience.playbackRate)*s}}function xn(r){return r<=ih?1:r>=jv?0:Math.pow(ih/r,$v)}function eM(r){const e=r;e.preservesPitch=!1,e.mozPreservesPitch=!1,e.webkitPreservesPitch=!1}const Lr=["thrusters","weapons","sensors"],rh=1,Dr=4,Go={balanced:{thrusters:2,weapons:2,sensors:2},combat:{thrusters:1,weapons:4,sensors:1},cruise:{thrusters:4,weapons:1,sensors:1},recon:{thrusters:1,weapons:1,sensors:4}};class tM{constructor(){x(this,"target",{...Go.balanced});x(this,"effective",{...Go.balanced})}get systems(){return Lr}get maxCells(){return Dr}level(e){return this.target[e]}factor(e){return .5+.25*this.effective[e]}boost(e){if(this.target[e]>=Dr)return;const t=this.richestOther(e);t&&(this.target[t]-=1,this.target[e]+=1)}reduce(e){if(this.target[e]<=rh)return;const t=this.poorestOther(e);t&&(this.target[e]-=1,this.target[t]+=1)}setPreset(e){this.target={...Go[e]}}update(e){const t=1-Math.exp(-2.5*e);for(const n of Lr)this.effective[n]+=(this.target[n]-this.effective[n])*t}richestOther(e){let t=null,n=rh;for(const i of Lr)i!==e&&this.target[i]>n&&(n=this.target[i],t=i);return t}poorestOther(e){let t=null,n=Dr+1;for(const i of Lr)i!==e&&this.target[i]<n&&(n=this.target[i],t=i);return t&&this.target[t]<Dr?t:null}}function nM(r){const e=r,t=[],n=(N,D)=>{window.addEventListener(N,D),t.push(()=>window.removeEventListener(N,D))},i=new Uu,s=new Ox(e),o=new ov(e),a=new Ou,c=new Vx(a),l=i.add(new Bu(Qx));c.bind(l),s.setPlayer(l);const h=new kx(e),u=new zx({onSelectWeapon:N=>{l.selectWeapon(N),R()},onRoutePower:(N,D)=>{const J=N;D?X.reduce(J):X.boost(J),R()}});h.register(u),h.setMode("bridge");const d=[[new w(-45,5,-220),"Raider Alpha","Autonomous Drone","Ferro-alloy hull"],[new w(50,18,-270),"Raider Bravo","Autonomous Drone","Ferro-alloy hull"],[new w(0,-25,-320),"Raider Charlie","Heavy Sentinel","Composite plating"],[new w(95,-8,-300),"Raider Delta","Autonomous Drone","Ferro-alloy hull"]];for(const[N,D,J,ae]of d)i.add(new qi(N,8,100,{designation:D,className:J,allegiance:"foe",composition:ae}));const p=new tv("Kepler Verge");p.addPoi("Drifting Beacon",new w(120,0,-180),"signal"),p.addPoi("Silent Signal",new w(60,0,-430),"signal"),p.addPoi("Derelict Hauler",new w(-330,40,-520),"derelict"),p.addPoi("Ion Anomaly",new w(520,-60,-900),"anomaly"),p.addPoi("Relay Station",new w(-160,20,-1220),"station"),s.setSector(p),new rv(u.sensorLog,i.events);const g={signal:"Signal Source",derelict:"Derelict Hulk",anomaly:"Spatial Anomaly",station:"Relay Station"},_={signal:"Modulated EM emission",derelict:"Cold ferro-alloy husk",anomaly:"Ionised plasma flux",station:"Alloy superstructure"};let m=null;function f(N){if(N.kind==="target"){const J=i.get(N.id);return J instanceof qi?{designation:J.designation,className:J.className,allegiance:J.allegiance,composition:J.composition,range:L(J.position.x,J.position.y,J.position.z),integrity:{hull:J.hull,max:J.maxHull},canAttack:J.allegiance==="foe"}:null}const D=p.pois.find(J=>J.id===N.id);return!D||!D.discovered?null:{designation:D.name,className:g[D.kind],allegiance:"neutral",composition:_[D.kind],range:L(D.position.x,D.position.y,D.position.z),canAttack:!1}}function T(N){const D=N?f(N):null;N&&D?(m=N,s.setSelected(N),S.update(D),S.show()):(m=null,s.setSelected(null),S.hide())}const S=new cv(e,{onClose:()=>T(null),onHail:()=>{if(R(),!m)return;const N=f(m);if(!N)return;const D=N.allegiance==="foe"?"no response to hail — hostile signature holds.":N.allegiance==="friend"?"channel open, telemetry nominal.":"automated beacon acknowledges; no crew aboard.";i.events.emit("report",{source:"Comms",text:`Hailing ${N.designation} — ${D}`,alert:N.allegiance==="foe"})},onAttack:()=>{if(R(),(m==null?void 0:m.kind)!=="target")return;const N=i.get(m.id);N&&Ws(N)&&l.requestShot(N)}}),v=new Jv,L=(N,D,J)=>Math.hypot(N-l.position.x,D-l.position.y,J-l.position.z);function R(){v.playTick()}i.events.on("weapon-fired",N=>{N.kind!=="missile"&&v.playPulsar()}),i.events.on("missile-launched",N=>{const D=L(N.x,N.y,N.z);v.playMissileRelease(D),v.playMissileWindup(D)}),i.events.on("missile-ignited",N=>v.playMissileIgnite(L(N.x,N.y,N.z))),i.events.on("missile-boost",N=>{const D=L(N.x,N.y,N.z);v.startMissileBoost(N.id,D),v.startMissileSpin(N.id,D)}),i.events.on("missile-burnout",N=>v.stopMissileBoost(N.id)),i.events.on("missile-removed",N=>{v.stopMissileBoost(N.id),v.stopMissileSpin(N.id)});const C=6,P=2.6,y=90,M=45,I=.4;i.events.on("missile-detonated",N=>{v.stopMissileBoost(N.id);const D=l.position.x-N.x,J=l.position.y-N.y,ae=l.position.z-N.z,ce=Math.hypot(D,J,ae)||.001;v.playMissileDetonation(ce),s.spawnExplosionEffect(N.x,N.y,N.z,N.radius);const Re=N.radius*C;if(ce>=Re)return;const _e=1-ce/Re;s.addShake(P*_e*_e);const ye=y*_e/ce;l.applyImpulse(D*ye,J*ye,ae*ye),ce<Re*I&&(l.hull=Math.max(0,l.hull-M*_e),o.flash(_e))});let k=0;i.events.on("entity-destroyed",N=>{if(k++,N.kind==="target"){const D=N.x-l.position.x,J=N.y-l.position.y,ae=N.z-l.position.z;v.playExplosion(Math.hypot(D,J,ae)),s.spawnExplosionEffect(N.x,N.y,N.z),s.spawnExplosionResidue(N.x,N.y,N.z),s.clearDamage(N.id)}});const z=8;i.events.on("target-hit",N=>{if(N.hull>0){const D=N.x-l.position.x,J=N.y-l.position.y,ae=N.z-l.position.z,ce=Math.hypot(D,J,ae);v.playHit(ce);const Re=ce>0?z/ce:0,_e=N.x-D*Re,ye=N.y-J*Re,U=N.z-ae*Re;s.spawnHitEffect(_e,ye,U),s.spawnDamage(N.targetId,_e,ye,U,N.damage,N.impact)}});let q=0;const $=new w;n("keydown",N=>{if(N.code!=="KeyP"||N.repeat)return;q++;const D=`Probe ${q}`;$.set(0,0,-1).applyQuaternion(l.quaternion);const J=l.position.clone().addScaledVector($,10);i.add(new za(J,$,220,1600,300,D,p)),i.events.emit("report",{source:"DEC",text:`${D} dispatched.`})}),s.renderer.domElement.addEventListener("mousedown",N=>{const D=s.renderer.domElement.getBoundingClientRect(),J=N.clientX-D.left,ae=N.clientY-D.top;if(!N.shiftKey){const ye=s.pickSelectable(J,ae,i);T(ye),ye&&R();return}let ce=null,Re=1/0;for(const ye of s.getTargetTracks(i)){const U=ye.size+8;if(Math.abs(J-ye.x)<=U&&Math.abs(ae-ye.y)<=U){const pt=Math.hypot(J-ye.x,ae-ye.y);pt<Re&&(Re=pt,ce=ye.id)}}const _e=ce!==null?i.get(ce):void 0;_e&&Ws(_e)?l.requestShot(_e):l.requestAimedShot(s.aimPointFromScreen(J,ae))});const Y=N=>{document.body.classList.toggle("targeting",N)};n("keydown",N=>{N.key==="Shift"&&Y(!0)}),n("keyup",N=>{N.key==="Shift"&&Y(!1)}),n("blur",()=>Y(!1)),n("keydown",N=>{if(!N.repeat)switch(N.code){case"KeyC":s.toggleCamera();break;case"BracketLeft":l.cycleWeapon(-1),R();break;case"BracketRight":l.cycleWeapon(1),R();break;case"Backslash":u.resetLayout(),S.resetLayout();break;case"Escape":T(null);break}});const X=new tM,W={thrusters:"THRUST",weapons:"WEAPON",sensors:"SENSOR"};n("keydown",N=>{if(!N.repeat){switch(N.code){case"Digit1":N.shiftKey?X.reduce("thrusters"):X.boost("thrusters");break;case"Digit2":N.shiftKey?X.reduce("weapons"):X.boost("weapons");break;case"Digit3":N.shiftKey?X.reduce("sensors"):X.boost("sensors");break;case"Digit0":X.setPreset("balanced");break;case"Digit7":X.setPreset("combat");break;case"Digit8":X.setPreset("cruise");break;case"Digit9":X.setPreset("recon");break;default:return}R()}});function ne(){return X.systems.map(N=>({key:N,label:W[N],level:X.level(N),max:X.maxCells,factor:X.factor(N)}))}const oe=800,fe=new w;function Ie(){const N=[];fe.set(0,0,-1).applyQuaternion(l.quaternion);const D=Math.hypot(fe.x,fe.z)||1,J=fe.x/D,ae=fe.z/D,ce=-ae,Re=J,_e=(ye,U,pt,Ue)=>{const Fe=pt-l.position.x,be=Ue-l.position.z;let je=(Fe*ce+be*Re)/oe,he=-(Fe*J+be*ae)/oe;const A=Math.hypot(je,he),E=A>1;E&&(je/=A,he/=A),N.push({key:ye,x:je,y:he,kind:U,edge:E})};for(const ye of p.pois)ye.discovered&&_e(`poi-${ye.id}`,ye.kind,ye.position.x,ye.position.z);for(const ye of i.all())ye instanceof za&&_e(`probe-${ye.id}`,"probe",ye.position.x,ye.position.z);return N}const Je=.3;let j=null;const ie=new Nu({fixedUpdate:N=>{c.update(N),X.update(N),l.thrusterPower=X.factor("thrusters"),l.weaponPower=X.factor("weapons"),i.tick(N);const D=l.speed,J=l.profile.handling.maxSpeed,ae=a.isDown("KeyR")&&D<J*.99,ce=l.turnInput,Re=Math.min(1,Math.abs(ce.pitch)+Math.abs(ce.yaw)+Math.abs(ce.roll));v.setThrust(ae,Math.max(l.throttle,Re*Je)),v.setDecel(a.isDown("KeyF")&&D>1),v.setSpeedFraction(D/J),v.update(N);for(const _e of i.all())if(_e instanceof qs){const ye=L(_e.position.x,_e.position.y,_e.position.z);v.updateMissileBoost(_e.id,ye),v.updateMissileSpin(_e.id,ye)}for(const _e of p.revealNear(l.position,l.profile.systems.sensorRange*X.factor("sensors")))i.events.emit("report",{source:"Sensors",text:`Contact detected — ${_e.name}`})},render:N=>{if(s.render(i,N),h.update({craftName:l.profile.name,throttle:l.throttle,speed:l.speed,maxSpeed:l.profile.handling.maxSpeed,hull:l.hull,maxHull:l.maxHull,weapons:l.getWeaponStatuses(),targetsDestroyed:k,sectorName:p.name,tracks:s.getTargetTracks(i),radar:Ie(),power:ne(),primaryPower:l.primaryPower,camera:s.currentCamera,metrics:j}),m){const D=f(m);D?S.update(D):T(null)}},onMetrics:N=>{j=N}});return ie.start(),{dispose(){ie.stop();for(const N of t)N();a.dispose(),s.dispose(),v.dispose(),document.body.classList.remove("targeting")}}}const iM=new w(0,0,-1),sM=new w(1,0,0),rM=1.1,oh=.9,oM=.7,aM=.6,ah=.6,cM=.9,lM=.6,ch=.6,lh=.6,hM=Math.PI/6,uM=.024,dM=.015,fM=.017,pM=.01,mM=.06;class gM{constructor(e){x(this,"ship",null);x(this,"forward",new w);x(this,"right",new w);x(this,"driftClock",0);x(this,"idleEase",0);this.input=e}bind(e){this.ship=e}update(e){var S;const t=this.ship;if(!t)return;const n=t.profile.handling,i=!!((S=t.selectedWeaponSpec)!=null&&S.scoped),s=v=>!i&&this.input.isDown(v),o=(v,L)=>i?0:this.input.axis(v,L),a=s("ShiftLeft")||s("ShiftRight"),c=!i&&!a&&!s("KeyA")&&!s("KeyD")&&!s("KeyW")&&!s("KeyS")&&!s("KeyQ")&&!s("KeyE");this.driftClock+=e,this.idleEase+=((c?1:0)-this.idleEase)*(1-Math.exp(-1.2*e));const l=this.driftClock,h=this.idleEase*(uM*Math.sin(l*.53)+dM*Math.sin(l*.91+1.7)),u=this.idleEase*(fM*Math.sin(l*.61+.5)+pM*Math.sin(l*1.13+2.3)),d=this.idleEase*mM*Math.sin(l*.43+.9);if(s("KeyX"))t.throttle=0;else{const v=o("KeyR","KeyF");v!==0&&(t.throttle=hh(t.throttle+v*n.throttleRate*e))}this.forward.copy(iM).applyQuaternion(t.quaternion),this.right.copy(sM).applyQuaternion(t.quaternion);const p=Math.asin(Hi(this.right.y,-1,1)),g=Math.asin(Hi(this.forward.y,-1,1));t.strafe=a?o("KeyD","KeyA"):0,t.lift=a?o("KeyW","KeyS"):0;const _=!a&&(s("KeyW")||s("KeyS"));!a&&!_&&(t.lift=Hi(-this.forward.y*t.throttle*n.maxSpeed/n.strafeSpeed,-1,1)),t.lift+=d;let m=0;!a&&s("KeyA")?m=oh:!a&&s("KeyD")&&(m=-oh),m+=h,t.turnInput.roll=Hi((m-p)*oM-t.angularVel.z*aM,-ah,ah);let f=-.13*hh(t.throttle);!a&&s("KeyW")?f=-lh:!a&&s("KeyS")&&(f=lh),f+=u,t.turnInput.pitch=Hi((f-g)*cM-t.angularVel.x*lM,-ch,ch),t.turnInput.yaw=Hi(-this.right.y*rM,-1,1);const T=o("KeyQ","KeyE")*hM;t.bankOffset+=(T-t.bankOffset)*(1-Math.exp(-3.5*e)),t.firing=!1}}function hh(r){return r<0?0:r>1?1:r}function Hi(r,e,t){return r<e?e:r>t?t:r}const _M=4,xM={walker:{speed:[6,9],hp:[10,16],gaitRate:[5,7],turnRate:.9,scale:[.9,1.12]},shambler:{speed:[3,5],hp:[14,20],gaitRate:[3,4.5],turnRate:.55,scale:[.98,1.18]},crawler:{speed:[2.5,4],hp:[8,13],gaitRate:[4,6],turnRate:.7,scale:[.82,.98]}},vM=9,MM=.15,uh=[3,6],Qe=(r,e,t)=>({r,g:e,b:t}),yM=[Qe(.5,.54,.47),Qe(.44,.5,.38),Qe(.52,.5,.36),Qe(.42,.36,.4),Qe(.5,.44,.34),Qe(.56,.58,.52),Qe(.4,.46,.4)],dh=[Qe(.42,.44,.42),Qe(.5,.5,.48),Qe(.34,.36,.35)],fh=[Qe(.2,.2,.22),Qe(.26,.24,.2),Qe(.24,.26,.24)],SM=[Qe(.34,.26,.18),Qe(.3,.32,.2),Qe(.36,.3,.22)],EM=Qe(.32,.4,.52),TM=[Qe(.16,.16,.18),Qe(.2,.19,.2),Qe(.24,.22,.22)],ph=[Qe(.5,.48,.3),Qe(.42,.4,.26),Qe(.46,.44,.32)],bM=[Qe(.55,.55,.52),Qe(.5,.48,.44),Qe(.46,.5,.5)],mh=[Qe(.36,.36,.32),Qe(.3,.3,.26),Qe(.4,.38,.32)],wM=[Qe(.09,.08,.07),Qe(.2,.14,.09),Qe(.5,.5,.48),Qe(.5,.44,.3)];function vt(r,e){return r+Math.random()*(e-r)}function qt(r){return r[Math.random()*r.length|0]}function Wo(r){return r<0?0:r>1?1:r}function kt(r,e){return{r:Wo(r.r+vt(-e,e)),g:Wo(r.g+vt(-e,e)),b:Wo(r.b+vt(-e,e))}}function AM(r){const e=vt(.9,1.16),t=vt(.82,1.32)*(r==="f"?.94:1),n=vt(.9,1.12)*(r==="f"?.95:1),i=kt(qt(yM),.05);let s=0,o=0,a=0,c,l;const h=Math.random();h<.2?(s=Math.random()<.5?1:0,o=0,a=Math.random()<.2?2:0,c=kt(qt(dh),.04),l=kt(qt(fh),.04)):h<.38?(s=2,o=1,a=Math.random()<.15?2:0,c=kt(qt(SM),.05),l=kt(EM,.05)):h<.52?(s=1,o=2,a=0,c=kt(qt(dh),.04),l=kt(qt(TM),.05)):h<.66?(s=3,o=0,a=Math.random()<.2?2:0,c=kt(qt(ph),.05),l=kt(qt(ph),.05)):h<.8?(s=0,o=Math.random()<.5?1:0,a=Math.random()<.4?1:0,c=kt(qt(bM),.05),l=kt(qt(fh),.05)):(s=0,o=Math.random()<.5?2:0,a=2,c=kt(qt(mh),.06),l=kt(qt(mh),.06));const u=Math.random()<.7?Math.random()*_M|0:-1;return{lengthMul:e,girth:t,headScale:n,torsoType:s,legType:o,armType:a,hairStyle:u,skin:i,shirt:c,pants:l,hair:kt(qt(wM),.04),hunchBias:vt(-.05,.3),headTilt:vt(-.35,.55),headRoll:vt(-.5,.5),armRaise:Math.random()<.3?vt(.7,1.5):0,raiseLeft:Math.random()<.5,limp:Math.random()<.4?vt(.1,.4):0,missingArm:Math.random()<.08?Math.random()<.5?0:1:-1}}class _c{constructor(e,t,n,i,s){x(this,"id",0);x(this,"position",new w);x(this,"prevPosition",new w);x(this,"radius");x(this,"hp");x(this,"maxHp");x(this,"collidable",!0);x(this,"type");x(this,"sex");x(this,"scale");x(this,"hitHeight");x(this,"look");x(this,"gaitRate");x(this,"gaitPhase");x(this,"heading");x(this,"targetHeading");x(this,"turnRate");x(this,"speed");x(this,"wanderTimer",0);x(this,"stun",0);x(this,"idling",!1);x(this,"idleTimer",0);x(this,"state","alive");x(this,"deadTime",0);x(this,"fallDir",0);x(this,"killImpact",null);x(this,"boundR");const o=xM[e];this.type=e,this.sex=t,this.boundR=s;const a=vt(o.scale[0],o.scale[1])*(t==="f"?.92:1);this.scale=a*vM,this.hp=Math.round(vt(o.hp[0],o.hp[1])),this.maxHp=this.hp,this.speed=vt(o.speed[0],o.speed[1]),this.gaitRate=vt(o.gaitRate[0],o.gaitRate[1]),this.turnRate=o.turnRate,this.gaitPhase=Math.random()*Math.PI*2,this.heading=Math.random()*Math.PI*2,this.targetHeading=this.heading,this.look=AM(t);const c=this.scale*1.9;e==="crawler"?(this.hitHeight=c*.32,this.radius=3.5*a):(this.hitHeight=c*.95,this.radius=2.6*a),this.position.set(n,zt(n,i),i),this.prevPosition.copy(this.position)}get stunned(){return this.stun>0}update(e){if(this.prevPosition.copy(this.position),this.state==="dead")return;if(this.stun>0){this.stun-=e;return}if(this.idleTimer>0){this.idleTimer-=e,this.idleTimer<=0&&(this.idling=!1);return}if(this.wanderTimer-=e,this.wanderTimer<=0){if(this.wanderTimer=vt(2,5),this.type!=="crawler"&&Math.random()<MM){this.idleTimer=vt(uh[0],uh[1]),this.idling=!0;return}this.targetHeading=this.heading+vt(-1.2,1.2)}const{x:t,z:n}=this.position;t*t+n*n>this.boundR*this.boundR&&(this.targetHeading=Math.atan2(-t,-n));let i=this.targetHeading-this.heading;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const s=this.turnRate*e;this.heading+=Math.abs(i)<s?i:Math.sign(i)*s,this.position.x+=Math.sin(this.heading)*this.speed*e,this.position.z+=Math.cos(this.heading)*this.speed*e,this.position.y=zt(this.position.x,this.position.z),this.gaitPhase+=this.gaitRate*e}applyDamage(e,t,n="bolt"){this.state!=="dead"&&(this.hp-=e,t.events.emit("target-hit",{targetId:this.id,damage:e,hull:Math.max(0,this.hp),x:this.position.x,y:this.position.y,z:this.position.z,impact:n}),this.hp<=0?(this.state="dead",this.collidable=!1,this.killImpact=n,this.deadTime=t.elapsed,this.fallDir=Math.random()*Math.PI*2,t.events.emit("entity-destroyed",{id:this.id,kind:"zombie",x:this.position.x,y:this.position.y,z:this.position.z})):this.stun=vt(1,3))}}function RM(r,e,t){const n=[],i=t*1.05;for(let s=0;s<e;s++){const o=t*Math.sqrt(Math.random()),a=Math.random()*Math.PI*2,c=Math.random(),l=c<.55?"walker":c<.85?"shambler":"crawler",h=Math.random()<.5?"m":"f";n.push(r.add(new _c(l,h,Math.cos(a)*o,Math.sin(a)*o,i)))}return n}function gh(r,e){if(e===Pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Fa||e===su){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Fa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class CM extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Bs.extractUrlBase(e);o=Bs.resolveURL(l,this.path)}else o=Bs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Du(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ku){try{o[qe.KHR_BINARY_GLTF]=new jM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new cy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new LM;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new $M(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new ZM;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new QM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function IM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PM{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ot);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new dc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new z0(h),l.distance=u;break;case"spot":l=new B0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class LM{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,bt))}return Promise.all(i)}}class DM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class NM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(s)}}class UM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class FM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class OM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class BM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class kM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],Ot),Promise.all(s)}}class zM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class HM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],Ot),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(s)}}class VM{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class GM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class WM{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class XM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YM{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class KM{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==en.TRIANGLES&&l.mode!==en.TRIANGLE_STRIP&&l.mode!==en.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new ke,m=new w,f=new tt,T=new w(1,1,1),S=new Ru(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&T.fromBufferAttribute(c.SCALE,v),S.setMatrixAt(v,_.compose(m,f,T));for(const v in c)if(v==="_COLOR_0"){const L=c[v];S.instanceColor=new Zi(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);ft.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const ku="glTF",Cs=12,_h={JSON:1313821514,BIN:5130562};class jM{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ku)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cs,s=new DataView(e,Cs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===_h.JSON){const l=new Uint8Array(e,Cs+o,a);this.content=n.decode(l)}else if(c===_h.BIN){const l=Cs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $M{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ha[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ha[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Qi[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,Ot,d)})})}}class ZM{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QM{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class zu extends Ks{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,T=1-m,S=f-d+u;for(let v=0;v!==a;v++){const L=o[_+v+a],R=o[_+v+c]*h,C=o[g+v+a],P=o[g+v]*h;s[v]=T*L+S*R+m*C+f*P}return s}}const JM=new tt;class ey extends zu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return JM.fromArray(s).normalize().toArray(s),s}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xh={9728:At,9729:Yt,9984:Kh,9985:Nr,9986:Ds,9987:On},vh={33071:yn,33648:Vr,10497:Sn},Xo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ha={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ty={CUBICSPLINE:void 0,LINEAR:Hs,STEP:zs},qo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ny(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),r.DefaultMaterial}function ui(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iy(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function sy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ry(r){let e;const t=r.extensions&&r.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yo(t.attributes):e=r.indices+":"+Yo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Yo(r.targets[n]);return e}function Yo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Va(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ay=new ke;class cy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new U0(this.options.manager):this.textureLoader=new G0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Du(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ui(s,a,i),Fn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Bs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Xo[i.type],a=Qi[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ft(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Xo[i.type],l=Qi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(T);S||(_=new l(a,f*p,i.count*p/h),S=new bu(_,p/h),t.cache.add(T,S)),m=new Gs(S,c,d%p/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Ft(_,c,g);if(i.sparse!==void 0){const f=Xo.SCALAR,T=Qi[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,L=new T(o[1],S,i.sparse.count*f),R=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,P=L.length;C<P;C++){const y=L[C];if(m.setX(y,R[C*c]),c>=2&&m.setY(y,R[C*c+1]),c>=3&&m.setZ(y,R[C*c+2]),c>=4&&m.setW(y,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=xh[d.magFilter]||Yt,h.minFilter=xh[d.minFilter]||On,h.wrapS=vh[d.wrapS]||Sn,h.wrapT=vh[d.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==At&&h.minFilter!==Yt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mt(_);m.needsUpdate=!0,d(m)}),t.load(Bs.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Fn(u,o),u.userData.mimeType=o.mimeType||oy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ac,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Cu,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return wt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ot),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Mn);const h=s.alphaMode||qo.OPAQUE;if(h===qo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===qo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==jt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Le(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==jt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==jt){const u=s.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],Ot)}return s.emissiveTexture!==void 0&&o!==jt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,bt)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Fn(u,s),t.associations.set(u,{materials:e}),s.extensions&&ui(i,u,s),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Mh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=ry(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Mh(new Dt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?ny(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const T=l[p];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new v0(_,T):new Be(_,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?f.geometry=gh(f.geometry,su):m.mode===en.TRIANGLE_FAN&&(f.geometry=gh(f.geometry,Fa));else if(m.mode===en.LINES)f=new S0(_,T);else if(m.mode===en.LINE_STRIP)f=new oc(_,T);else if(m.mode===en.LINE_LOOP)f=new E0(_,T);else if(m.mode===en.POINTS)f=new cc(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&sy(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Fn(f,s),m.extensions&&ui(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&ui(i,u[0],s),u[0];const d=new mt;s.extensions&&ui(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(rf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new rc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",T)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let T=0,S=d.length;T<S;T++){const v=d[T],L=p[T],R=g[T],C=_[T],P=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,L,R,C,P);if(y)for(let M=0;M<y.length;M++)f.push(y[M])}return new jr(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,ay)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Au:l.length>1?h=new mt:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Fn(h,s),s.extensions&&ui(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new mt;n.name&&(s.name=i.createUniqueName(n.name)),Fn(s,n),n.extensions&&ui(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof gn||d instanceof Mt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Zn[s.path]===Zn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Zn[s.path]){case Zn.weights:l=os;break;case Zn.rotation:l=as;break;case Zn.position:case Zn.scale:l=cs;break;default:switch(n.itemSize){case 1:l=os;break;case 2:case 3:default:l=cs;break}break}const h=i.interpolation!==void 0?ty[i.interpolation]:Hs,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+Zn[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Va(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof as?ey:zu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ly(r,e,t){const n=e.attributes,i=new Vn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){const h=Va(Qi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new w,c=new w;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Va(Qi[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Mh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Ha[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ye.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Fn(r,e),ly(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iy(r,e.targets,t):r})}function hy(r,e){const t=new Set;e.traverse(i=>{i.name&&t.add(Ze.sanitizeNodeName(i.name))});const n=r.tracks.filter(i=>t.has(Ze.sanitizeNodeName(Ze.parseTrackName(i.name).nodeName)));return new jr(r.name,r.duration,n)}const uy=new w(.45,.5,.4).normalize(),Hr=24;function dy(r,e,t){const n=new Map;let i=0;const s=t.map(y=>{const M=Math.max(1,Math.ceil(y.clip.duration*Hr)),I=i;return n.set(y.name,[I,M]),i+=M,{clip:y.clip,start:I,count:M,loop:y.loop??!1}}),o=e.map(y=>y.geometry.attributes.position),a=o.map(y=>new Float32Array(y.count*i*4));let c=0;for(const y of o)c+=y.count;const l=new Float32Array(i),h=new Float32Array(i),u=new w;let d=1/0,p=-1/0,g=1/0,_=-1/0,m=1/0,f=-1/0;for(const y of s){const M=new nx(r);M.clipAction(hy(y.clip,r)).play();for(let I=0;I<y.count;I++){const k=y.count>1?I/y.count*y.clip.duration:0;M.setTime(k),r.updateMatrixWorld(!0);const z=y.start===0&&I===0;for(let q=0;q<e.length;q++){const $=e[q],Y=o[q],X=a[q],W=Y.count,ne=(y.start+I)*W*4;for(let oe=0;oe<W;oe++){u.fromBufferAttribute(Y,oe),$.applyBoneTransform(oe,u);const fe=u.y;u.y=-u.z,u.z=fe;const Ie=ne+oe*4;X[Ie]=u.x,X[Ie+1]=u.y,X[Ie+2]=u.z,X[Ie+3]=0,l[y.start+I]+=u.x,h[y.start+I]+=u.z,z&&(u.x<d&&(d=u.x),u.x>p&&(p=u.x),u.y<g&&(g=u.y),u.y>_&&(_=u.y),u.z<m&&(m=u.z),u.z>f&&(f=u.z))}}}M.stopAllAction(),M.uncacheRoot(r)}const T=(d+p)/2,S=g,v=(m+f)/2,L=_-g||1,R=new Float32Array(i),C=new Float32Array(i);for(const y of s){if(!y.loop)continue;const M=l[y.start]/c,I=h[y.start]/c;for(let k=0;k<y.count;k++)R[y.start+k]=l[y.start+k]/c-M,C[y.start+k]=h[y.start+k]/c-I}return{vats:e.map((y,M)=>{const I=a[M],k=o[M].count;for(let q=0;q<i;q++){const $=T+R[q],Y=v+C[q],X=q*k*4;for(let W=0;W<k;W++){const ne=X+W*4;I[ne]-=$,I[ne+1]-=S,I[ne+2]-=Y}}const z=new sc(I,k,i,Kt,sn);return z.minFilter=At,z.magFilter=At,z.generateMipmaps=!1,z.needsUpdate=!0,{posTex:z,vertexCount:k,frameCount:i}}),ranges:n,height:L}}const fy=`
  attribute float aVertexId;
  attribute float aFrame;
  attribute vec2 aClip;      // (startRow, frameCount)
  attribute float aBright;   // per-instance brightness (corpses fade their NVG signature)
  uniform sampler2D uPos;
  uniform vec2 uTexSize;     // (vertexCount, frameCount)
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vBright;
  vec3 samplePos(float vid, float frame) {
    return texture2D(uPos, vec2((vid + 0.5) / uTexSize.x, (frame + 0.5) / uTexSize.y)).xyz;
  }
  void main() {
    float f0 = floor(aFrame);
    float f1 = mod(f0 + 1.0, aClip.y);          // wrap within the clip
    float frac = aFrame - f0;
    vec3 p = mix(samplePos(aVertexId, aClip.x + f0), samplePos(aVertexId, aClip.x + f1), frac);
    vec4 wp = instanceMatrix * vec4(p, 1.0);
    vWorldPos = wp.xyz;
    vUv = uv;
    vBright = aBright;
    gl_Position = projectionMatrix * modelViewMatrix * wp;
  }
`,py=`
  uniform sampler2D uMap;
  uniform float uHasMap;
  uniform vec3 uAmbient;
  uniform vec3 uMoonColor;
  uniform vec3 uMoonDir;
  uniform vec3 uGrade;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vBright;
  void main() {
    vec3 N = normalize(cross(dFdx(vWorldPos), dFdy(vWorldPos)));
    vec3 base = uHasMap > 0.5 ? texture2D(uMap, vUv).rgb : vec3(0.55, 0.57, 0.5);
    vec3 albedo = base * uGrade;
    // Half-lambert: forgiving of the flat normal's sign, keeps shape without hard dark.
    float ndl = dot(N, normalize(uMoonDir)) * 0.5 + 0.5;
    // Per-instance brightness dims a killed body so its NVG (luminance) signature fades.
    vec3 lit = albedo * (uAmbient + uMoonColor * ndl) * vBright;
    // Custom ShaderMaterial bypasses three's output-colorspace pass, so encode here.
    gl_FragColor = vec4(pow(clamp(lit, 0.0, 1.0), vec3(0.4545)), 1.0);
  }
`;function my(r,e){return new En({uniforms:{uPos:{value:r.posTex},uTexSize:{value:new Le(r.vertexCount,r.frameCount)},uMap:{value:e},uHasMap:{value:e?1:0},uAmbient:{value:new Ce(2765638)},uMoonColor:{value:new Ce(11453183)},uMoonDir:{value:uy.clone()},uGrade:{value:new Ce(.72,.74,.66)}},vertexShader:fy,fragmentShader:py})}const gy=480,_y=400,xy={burst:{parts:[{kind:"head",mat:"flesh",scale:1},{kind:"arm",mat:"flesh",scale:1},{kind:"arm",mat:"flesh",scale:1},{kind:"torsoU",mat:"cloth",scale:1},{kind:"torsoL",mat:"cloth",scale:1},{kind:"leg",mat:"cloth",scale:1},{kind:"leg",mat:"cloth",scale:1},{kind:"chunk",mat:"flesh",scale:1},{kind:"chunk",mat:"bone",scale:.9}],vel:1.4,up:1.3},split:{parts:[{kind:"torsoU",mat:"cloth",scale:1.5},{kind:"torsoL",mat:"cloth",scale:1.5},{kind:"head",mat:"flesh",scale:1},{kind:"arm",mat:"flesh",scale:.9}],vel:.75,up:.7,split:!0},clumps:{parts:[{kind:"chunk",mat:"flesh",scale:2},{kind:"chunk",mat:"flesh",scale:1.6},{kind:"chunk",mat:"cloth",scale:1.8},{kind:"chunk",mat:"bone",scale:1.3}],vel:.95,up:1}};class vy{constructor(e){x(this,"bloodTex");x(this,"blood",[]);x(this,"gibGeo");x(this,"gibMat");x(this,"gibs",[]);this.scene=e,this.bloodTex=this.makeBloodTex(),this.gibGeo={head:new hc(.16,8,6),arm:new nn(.05,.045,.5,6),leg:new nn(.07,.06,.6,6),torsoU:new Ht(.32,.34,.2),torsoL:new Ht(.3,.3,.2),chunk:new Ht(.15,.15,.15)},this.gibMat={flesh:new wt({color:7027252,roughness:.9,metalness:0}),bone:new wt({color:14209468,roughness:.7,metalness:0}),cloth:new wt({color:2896679,roughness:.95,metalness:0})}}hit(e,t,n){this.spawnBlood(e,t,n,4,.55,8)}death(e,t=!1){const n=e.position.y+e.hitHeight*.6;return this.spawnBlood(e.position.x,n,e.position.z,t?30:16,t?2:1.2,t?30:18),t?(this.spawnGibs(e,"burst",2.4),"gib"):"topple"}spawnBlood(e,t,n,i,s,o){for(let a=0;a<i;a++){let c=this.blood.find(h=>h.life<=0);if(!c){if(this.blood.length>=gy)break;const h=new $t(new rn({map:this.bloodTex,color:9049108,transparent:!0,depthWrite:!1,opacity:0}));this.scene.add(h),c={sprite:h,vel:new w,life:0,maxLife:1},this.blood.push(c)}c.sprite.visible=!0,c.sprite.position.set(e,t,n);const l=s*(1.6+Math.random()*2.4);c.sprite.scale.set(l,l,1),c.vel.set((Math.random()-.5)*o,o*(.4+Math.random()*.7),(Math.random()-.5)*o),c.maxLife=.4+Math.random()*.4,c.life=c.maxLife}}spawnGibs(e,t,n=1){const i=e.scale,s=xy[t],o=Math.random()*Math.PI*2,a=Math.sin(o),c=Math.cos(o);let l=0;for(const h of s.parts){let u=this.gibs.find(d=>d.life<=0);if(!u){if(this.gibs.length>=_y)break;const d=new Be(this.gibGeo[h.kind],this.gibMat[h.mat]);this.scene.add(d),u={mesh:d,vel:new w,spin:new w,life:0,settled:!1},this.gibs.push(u)}if(u.mesh.geometry=this.gibGeo[h.kind],u.mesh.material=this.gibMat[h.mat],u.mesh.visible=!0,u.mesh.scale.setScalar(i*h.scale*(1+(n-1)*.3)),u.mesh.position.set(e.position.x+(Math.random()-.5)*i,e.position.y+e.hitHeight*(.4+Math.random()*.6),e.position.z+(Math.random()-.5)*i),u.mesh.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),u.vel.set((Math.random()-.5)*26*s.vel*n,(10+Math.random()*20)*s.up*n,(Math.random()-.5)*26*s.vel*n),s.split){const d=l%2===0?1:-1;u.vel.x+=a*d*14,u.vel.z+=c*d*14}u.spin.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),u.settled=!1,u.life=7+Math.random()*5,this.spawnBlood(u.mesh.position.x,u.mesh.position.y,u.mesh.position.z,3,.8,12),l++}}update(e){for(const t of this.blood){if(t.life<=0)continue;t.life-=e,t.vel.y-=55*e,t.sprite.position.addScaledVector(t.vel,e);const n=1-Math.max(0,t.life)/t.maxLife;t.sprite.material.opacity=.85*(1-n),t.life<=0&&(t.sprite.visible=!1)}for(const t of this.gibs)if(!(t.life<=0)){if(t.life-=e,!t.settled){t.vel.y-=70*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.rotation.x+=t.spin.x*e,t.mesh.rotation.y+=t.spin.y*e,t.mesh.rotation.z+=t.spin.z*e;const n=zt(t.mesh.position.x,t.mesh.position.z);t.mesh.position.y<=n&&(t.mesh.position.y=n,t.settled=!0)}t.life<=0&&(t.mesh.visible=!1)}}makeBloodTex(){const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d"),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,32,32),new fn(e)}dispose(){for(const e of this.blood)this.scene.remove(e.sprite),e.sprite.material.dispose();this.blood.length=0;for(const e of this.gibs)this.scene.remove(e.mesh);this.gibs.length=0,this.bloodTex.dispose();for(const e of Object.values(this.gibGeo))e.dispose();for(const e of Object.values(this.gibMat))e.dispose()}}const Is=240,My=4,yy=.12,Sy=new w(0,1,0),Ey=new w(1,0,0),yh=.16,Sh=1.4,Ty=.4,by=.1;function wy(r){const e=[];return r.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e}function Ay(r){return(Array.isArray(r.material)?r.material[0]:r.material).map??null}function Ry(r,e){const t=e-1;if(t<=0)return 0;const n=(r%(2*t)+2*t)%(2*t);return n<=t?n:2*t-n}class Cy{constructor(e,t){x(this,"chars",[]);x(this,"gore");x(this,"states",new Map);x(this,"ready",!1);x(this,"disposed",!1);x(this,"_pos",new w);x(this,"_q",new tt);x(this,"_qy",new tt);x(this,"_qp",new tt);x(this,"_s",new w);x(this,"_m",new ke);this.scene=e,this.gore=new vy(e),this.init(t)}async init(e){const t=h=>new Promise((u,d)=>new CM().load(h,u,void 0,d)),[n,i,s,o,a]=await Promise.all([t(`${e}zombie-walk.glb`),t(`${e}zombie-crawl.glb`),t(`${e}zombie-death.glb`),t(`${e}zombie-idle.glb`),t(`${e}zombie-transition.glb`)]);if(this.disposed)return;const c=[{name:"walk",clip:n.animations[0],loop:!0},{name:"crawl",clip:i.animations[0],loop:!0},{name:"death",clip:s.animations[0],loop:!1},{name:"idle",clip:o.animations[0],loop:!0},{name:"idleTransition",clip:a.animations[0],loop:!1}],l=[n.scene];for(const h of["char-cop.glb","char-yaku.glb","char-survivor.glb"]){const u=await t(`${e}${h}`);if(this.disposed)return;l.push(u.scene)}for(const h of l){const u=wy(h);if(u.length===0)continue;const d=dy(h,u,c),p=u.map((g,_)=>{const m=d.vats[_],f=g.geometry,T=new Float32Array(m.vertexCount);for(let C=0;C<T.length;C++)T[C]=C;f.setAttribute("aVertexId",new ht(T,1));const S=new Ru(f,my(m,Ay(g)),Is);S.frustumCulled=!1,S.instanceMatrix.setUsage(Qs);const v=new Zi(new Float32Array(Is),1),L=new Zi(new Float32Array(Is*2),2),R=new Zi(new Float32Array(Is).fill(1),1);return v.setUsage(Qs),L.setUsage(Qs),R.setUsage(Qs),f.setAttribute("aFrame",v),f.setAttribute("aClip",L),f.setAttribute("aBright",R),S.count=0,this.scene.add(S),{mesh:S,aFrame:v,aClip:L,aBright:R}});if(this.chars.push({subs:p,ranges:d.ranges,height:d.height,count:0}),await new Promise(g=>setTimeout(g,0)),this.disposed)return}this.ready=!0}rateFor(e,t){return t==="death"?1:Math.min(1.8,Math.max(.6,e/(t==="crawl"?3.5:6)))}update(e,t,n){if(this.gore.update(n),!!this.ready){for(const i of this.chars)i.count=0;for(const i of e.all()){if(!(i instanceof _c))continue;const s=this.chars[i.id%this.chars.length];let o=this.states.get(i.id);if(!o){const g=i.type==="crawler"?"crawl":"walk";o={clip:g,t:Math.random()*2,rate:this.rateFor(i.speed,g),gibbed:!1,deadHandled:!1,lastHp:i.hp,flinch:0,wasStunned:!1,stunClip:"idle",deadElapsed:0,deathFrame:0,deathDir:0,deathReverseTo:0},this.states.set(i.id,o)}if(!o.deadHandled&&i.hp<o.lastHp&&(this.gore.hit(i.position.x,i.position.y+i.hitHeight*.62,i.position.z),o.flinch=yh),o.lastHp=i.hp,i.state==="dead"&&!o.deadHandled){o.deadHandled=!0;const g=i.killImpact==="blast";if(this.gore.death(i,g)==="gib")o.gibbed=!0;else if(o.clip="death",o.rate=1,i.type==="crawler")o.deathFrame=1e6,o.deathDir=0;else{const _=4+Math.floor(Math.random()*27),m=2+Math.floor(Math.random()*6);o.deathFrame=_,o.deathReverseTo=Math.max(0,_-m),o.deathDir=-1}}if(o.gibbed||s.count>=Is)continue;if(o.clip!=="death"&&i.type!=="crawler"){let g;i.stunned?(o.wasStunned||(o.stunClip=Math.random()<.5?"idle":"idleTransition"),g=o.stunClip):i.idling?g="idleTransition":g="walk",o.clip!==g&&(o.clip=g,o.t=0,o.rate=g==="walk"?this.rateFor(i.speed,"walk"):1)}o.wasStunned=i.stunned;const a=s.count++;i.type==="crawler"&&i.stunned||(o.t+=n*o.rate);const c=s.ranges.get(o.clip),l=c[1];let h;o.clip==="death"?(o.deathDir!==0&&(o.deathFrame+=o.deathDir*n*Hr,o.deathDir<0&&o.deathFrame<=o.deathReverseTo&&(o.deathFrame=o.deathReverseTo,o.deathDir=1)),h=Math.min(Math.max(o.deathFrame,0),l-1-.001)):o.clip==="idleTransition"?h=Ry(o.t*Hr,l):h=o.t*Hr%l,this._pos.lerpVectors(i.prevPosition,i.position,t);let u=i.heading,d=0;if(o.flinch>0){o.flinch-=n;const g=Math.max(0,o.flinch)/yh;this._pos.x-=Math.sin(i.heading)*g*Sh,this._pos.z-=Math.cos(i.heading)*g*Sh,this._pos.y+=g*Ty,d=-g*by,u+=Math.sin(g*Math.PI*4)*g*.07}this._qy.setFromAxisAngle(Sy,u),d!==0?(this._qp.setFromAxisAngle(Ey,d),this._q.multiplyQuaternions(this._qy,this._qp)):this._q.copy(this._qy),this._s.setScalar(i.scale*1.9/s.height),this._m.compose(this._pos,this._q,this._s);let p=1;o.deadHandled&&(o.deadElapsed+=n,p=1-(1-yy)*Math.min(1,o.deadElapsed/My));for(const g of s.subs)g.mesh.setMatrixAt(a,this._m),g.aFrame.setX(a,h),g.aClip.setXY(a,c[0],l),g.aBright.setX(a,p)}for(const i of this.chars)for(const s of i.subs)s.mesh.count=i.count,s.mesh.instanceMatrix.needsUpdate=!0,s.aFrame.needsUpdate=!0,s.aClip.needsUpdate=!0,s.aBright.needsUpdate=!0}}dispose(){var e,t;this.disposed=!0;for(const n of this.chars)for(const i of n.subs){this.scene.remove(i.mesh),i.mesh.geometry.dispose();const s=i.mesh.material;(e=s.uniforms.uMap.value)==null||e.dispose(),(t=s.uniforms.uPos.value)==null||t.dispose(),s.dispose()}this.chars.length=0,this.states.clear(),this.gore.dispose()}}const Iy=120;class Py{constructor(e){x(this,"tex");x(this,"puffs",[]);x(this,"tan",new Ce(11047794));this.scene=e,this.tex=this.makeTex()}spawn(e,t,n){for(let i=0;i<9;i++){let s=this.puffs.find(a=>a.life<=0);if(!s){if(this.puffs.length>=Iy)break;const a=new $t(new rn({map:this.tex,transparent:!0,depthWrite:!1,opacity:0}));a.material.color.copy(this.tan),this.scene.add(a),s={sprite:a,vel:new w,life:0,maxLife:1,size0:1,size1:1},this.puffs.push(s)}const o=i>=6;s.sprite.visible=!0,s.sprite.position.set(e+(Math.random()-.5)*3,t+.6,n+(Math.random()-.5)*3),s.vel.set((Math.random()-.5)*(o?6:12),(o?3:7)+Math.random()*(o?4:9),(Math.random()-.5)*(o?6:12)),s.maxLife=(o?.5:.35)+Math.random()*.4,s.life=s.maxLife,s.size0=(o?4:2)+Math.random()*2,s.size1=(o?16:9)+Math.random()*(o?10:7)}}update(e){for(const t of this.puffs){if(t.life<=0)continue;t.life-=e,t.vel.y-=18*e,t.vel.multiplyScalar(1-1.5*e),t.sprite.position.addScaledVector(t.vel,e);const n=1-Math.max(0,t.life)/t.maxLife,i=t.size0+(t.size1-t.size0)*n;t.sprite.scale.set(i,i,1),t.sprite.material.opacity=.62*(1-n),t.life<=0&&(t.sprite.visible=!1)}}makeTex(){const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d");for(let n=0;n<10;n++){const i=8+Math.random()*16,s=8+Math.random()*16,o=3+Math.random()*7,a=.08+Math.random()*.16,c=t.createRadialGradient(i,s,0,i,s,o);c.addColorStop(0,`rgba(255,255,255,${a})`),c.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=c,t.fillRect(0,0,32,32)}return new fn(e)}dispose(){for(const e of this.puffs)this.scene.remove(e.sprite),e.sprite.material.dispose();this.puffs.length=0,this.tex.dispose()}}const Eh=659488,Ly=2765373,Dy=700,Ny=5200,Uy=120,Th=new w(.45,.5,.4).normalize(),Fy=`
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aTwinkle;
  attribute float aSpeed;
  attribute float aPhase;
  uniform float uTime;
  varying vec3 vColor;
  void main() {
    float t = sin(uTime * aSpeed + aPhase);        // -1..1
    float b = 1.0 - aTwinkle * 0.5 * (1.0 - t);    // [1 - aTwinkle .. 1]
    vColor = aColor * b;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize;
  }
`,Oy=`
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float a = smoothstep(0.5, 0.05, d);            // soft round pinpoint
    if (a <= 0.001) discard;
    gl_FragColor = vec4(vColor, a);
  }
`,By=new w(0,.6,-.2),bh=new w(0,-1,-2.2),ky=new w(0,0,-1),zy=new w(0,0,1),Vi=1,wh=72,Hy=.6,Vy=.42,Gy=.03,Wy=.14,Xy=.006,Ah=1.4,Rh=3.05,qy=2.6,Ko=.0022,Ch=.025,Yy=30,Ky=16,jy=.1,$y=.18,Zy=16;function Jt(r){const e=Math.sin(r*12.9898)*43758.5453;return e-Math.floor(e)}function Ih(r){r.traverse(e=>{if(e instanceof Be){e.geometry.dispose();const t=e.material;Array.isArray(t)?t.forEach(n=>n.dispose()):t.dispose()}})}const Yi=class Yi{constructor(e){x(this,"renderer");x(this,"scene");x(this,"camera");x(this,"player",null);x(this,"terrain");x(this,"props");x(this,"gridTex");x(this,"crowd");x(this,"groundImpacts");x(this,"effects");x(this,"rockets",new Map);x(this,"rocketSeen",new Set);x(this,"rocketBodyGeo",null);x(this,"rocketNoseGeo",null);x(this,"rocketBodyMat",null);x(this,"rocketNoseMat",null);x(this,"stars");x(this,"starMat",null);x(this,"moon");x(this,"moonTex",null);x(this,"gunHousing");x(this,"gunBarrel");x(this,"gunTex",null);x(this,"tracers",new Map);x(this,"seenIds",new Set);x(this,"coreGeo",null);x(this,"coreMat",null);x(this,"glowGeo",null);x(this,"glowMat",null);x(this,"muzzleFlash",null);x(this,"flashTex",null);x(this,"renderPos",new w);x(this,"renderQuat",new tt);x(this,"eye",new w);x(this,"effQuat",new tt);x(this,"bankQuat",new tt);x(this,"tracerDir",new w);x(this,"aimScratch",new w);x(this,"aimDir",new w);x(this,"aimHit",new w);x(this,"scopeRecoil",0);x(this,"scopeClock",0);x(this,"scopePanYaw",0);x(this,"scopePanPitch",0);x(this,"scopeEuler",new on(0,0,0,"YXZ"));x(this,"scopeFwd",new w);x(this,"scopeAimOrigin",new w);x(this,"scopeAimDir",new w);x(this,"gunMountWorld",new w);x(this,"gunAimDir",new w);x(this,"gunDir",new w);x(this,"gunMuzzle",new w);x(this,"gunHoldRel",new tt);x(this,"gunDesiredRel",new tt);x(this,"gunPrevRel",new tt);x(this,"gunRel",new tt);x(this,"gunInvHull",new tt);x(this,"muzzleQuatScratch",new tt);x(this,"gunSwivelSpeedValue",0);x(this,"gunSpin",0);x(this,"lastFrameTime",performance.now());x(this,"smokeTex",null);x(this,"smoke",[]);x(this,"smokeEmitTimer",0);x(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});this.renderer=new Eu({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.scene=new Tu,this.scene.background=new Ce(Eh),this.scene.fog=new ic(Eh,Dy,Ny),this.camera=new Lt(72,window.innerWidth/window.innerHeight,.1,8e3);const t=new F0(1779520,329483,.4);t.layers.enable(Vi),this.scene.add(t);const n=new dc(11453183,.65);n.position.copy(Th),n.layers.enable(Vi),this.scene.add(n),this.buildStars(),this.buildMoon(),this.buildTerrain(),this.buildProps(),this.buildGun(),this.crowd=new Cy(this.scene,"./models/"),this.groundImpacts=new Py(this.scene),this.effects=new Fu(this.scene),window.addEventListener("resize",this.onResize)}setPlayer(e){this.player=e}groundHit(e,t,n){this.groundImpacts.spawn(e,t,n)}get gunSwivelSpeed(){return this.gunSwivelSpeedValue}get gunMuzzleWorld(){return this.gunMuzzle}get gunDirection(){return this.gunDir}get scopeOrigin(){return this.scopeAimOrigin}get scopeDirection(){return this.scopeAimDir}scopeKick(){this.scopeRecoil=Gy}computeMuzzle(e,t,n,i){this.muzzleQuatScratch.copy(t).multiply(this.gunHoldRel),i.set(0,0,-1).applyQuaternion(this.muzzleQuatScratch),n.copy(bh).applyQuaternion(t).add(e).addScaledVector(i,Rh)}aimPointFromScreen(e,t){const n=window.innerWidth,i=window.innerHeight;return this.camera.updateMatrixWorld(),this.aimScratch.set(e/n*2-1,-(t/i)*2+1,.5).unproject(this.camera).sub(this.camera.position).normalize().multiplyScalar(2e3).add(this.camera.position),this.aimScratch}groundAimFromScreen(e,t,n=3e3){const i=window.innerWidth,s=window.innerHeight;this.camera.updateMatrixWorld(),this.aimDir.set(e/i*2-1,-(t/s)*2+1,.5).unproject(this.camera).sub(this.camera.position).normalize();const o=this.camera.position;let a=0,c=o.y-zt(o.x,o.z)>0;const l=12;for(let h=l;h<=n;h+=l){this.aimHit.copy(o).addScaledVector(this.aimDir,h);const u=this.aimHit.y-zt(this.aimHit.x,this.aimHit.z)>0;if(c&&!u){let d=a,p=h;for(let g=0;g<12;g++){const _=(d+p)/2;this.aimHit.copy(o).addScaledVector(this.aimDir,_),this.aimHit.y-zt(this.aimHit.x,this.aimHit.z)>0?d=_:p=_}return this.aimHit.copy(o).addScaledVector(this.aimDir,(d+p)/2),this.aimHit}a=h,c=u}return this.aimHit.copy(o).addScaledVector(this.aimDir,n)}buildTerrain(){const t=new ls(ko,ko,200,200);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let o=0;o<n.count;o++){const a=n.getX(o),c=n.getZ(o);n.setY(o,zt(a,c))}n.needsUpdate=!0,t.computeVertexNormals(),this.gridTex=this.makeGridTexture();const i=ko/Uy;this.gridTex.repeat.set(i,i);const s=new wt({map:this.gridTex,color:Ly,roughness:.96,metalness:0});this.terrain=new Be(t,s),this.scene.add(this.terrain)}makeGridTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#2b333c",t.fillRect(0,0,128,128),t.strokeStyle="rgba(127, 227, 255, 0.16)",t.lineWidth=2,t.strokeRect(1,1,126,126);const n=new fn(e);return n.wrapS=Sn,n.wrapT=Sn,n}buildProps(){this.props=[];const e=new wt({color:4871520,roughness:.85,metalness:.1,flatShading:!0}),t=60,n=2400;for(let i=0;i<t;i++){const s=(Jt(i*3+1)-.5)*2*n,o=(Jt(i*3+2)-.5)*2*n,a=8+Jt(i*3+3)*26,c=new Ht(a,a*(.6+Jt(i+11)),a),l=new Be(c,e),h=a*(.6+Jt(i+11))*.5;l.position.set(s,zt(s,o)+h,o),l.rotation.y=Jt(i+17)*Math.PI,this.scene.add(l),this.props.push(l)}}buildStars(){const n=this.renderer.getPixelRatio(),i=new Float32Array(1600*3),s=new Float32Array(1600*3),o=new Float32Array(1600),a=new Float32Array(1600),c=new Float32Array(1600),l=new Float32Array(1600);for(let u=0;u<1600;u++){const d=Jt(u*7+1)*Math.PI*2,p=(.05+Jt(u*7+2)*.95)*(Math.PI/2),g=Math.cos(p)*7e3;i[u*3]=Math.cos(d)*g,i[u*3+1]=Math.sin(p)*7e3,i[u*3+2]=Math.sin(d)*g;const _=Jt(u*7+3);o[u]=(2.6-1.9*_)*n;const m=1-.55*_,f=Jt(u*7+4);let T,S,v;f<.12?[T,S,v]=[1,.8,.62]:f<.32?[T,S,v]=[1,.94,.84]:f<.72?[T,S,v]=[.92,.96,1]:[T,S,v]=[.72,.83,1],s[u*3]=T*m,s[u*3+1]=S*m,s[u*3+2]=v*m,a[u]=.15+.75*_,c[u]=1.2+Jt(u*7+5)*4.5,l[u]=Jt(u*7+6)*Math.PI*2}const h=new Dt;h.setAttribute("position",new ht(i,3)),h.setAttribute("aColor",new ht(s,3)),h.setAttribute("aSize",new ht(o,1)),h.setAttribute("aTwinkle",new ht(a,1)),h.setAttribute("aSpeed",new ht(c,1)),h.setAttribute("aPhase",new ht(l,1)),this.starMat=new En({uniforms:{uTime:{value:0}},vertexShader:Fy,fragmentShader:Oy,transparent:!0,depthWrite:!1,blending:pn,fog:!1}),this.stars=new cc(h,this.starMat),this.scene.add(this.stars)}buildMoon(){this.moonTex=this.makeMoonTexture(),this.moon=new $t(new rn({map:this.moonTex,color:16777215,transparent:!0,depthWrite:!1,fog:!1,opacity:.95})),this.moon.scale.set(900,900,1),this.scene.add(this.moon)}makeMoonTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=128/2,s=n.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(220,230,255,0.5)"),s.addColorStop(.35,"rgba(200,215,255,0.12)"),s.addColorStop(1,"rgba(200,215,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const o=n.createRadialGradient(i,i,0,i,i,128*.26);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.7,"rgba(240,245,255,0.98)"),o.addColorStop(1,"rgba(220,230,255,0)"),n.fillStyle=o,n.beginPath(),n.arc(i,i,128*.26,0,Math.PI*2),n.fill(),new fn(t)}render(e,t,n,i,s,o,a,c=!1,l=0,h=0){const u=performance.now(),d=Math.min((u-this.lastFrameTime)/1e3,.1);if(this.lastFrameTime=u,this.player&&(this.renderPos.lerpVectors(this.player.prevPosition,this.player.position,t),this.renderQuat.copy(this.player.prevQuaternion).slerp(this.player.quaternion,t),this.effQuat.copy(this.renderQuat).multiply(this.bankQuat.setFromAxisAngle(zy,this.player.bankOffset)),this.eye.copy(By).applyQuaternion(this.effQuat).add(this.renderPos),c?this.updateScopeCamera(l,o,a,d,h):(this.camera.fov!==wh&&(this.camera.fov=wh,this.camera.updateProjectionMatrix()),this.camera.position.copy(this.eye),this.camera.quaternion.copy(this.effQuat),this.updateGun(this.renderPos,this.effQuat,n?this.aimPointFromScreen(o,a):null,d,s),i&&(this.camera.rotateX((Math.random()*2-1)*Ko),this.camera.rotateY((Math.random()*2-1)*Ko),this.camera.rotateZ((Math.random()*2-1)*Ko*.6),this.camera.position.x+=(Math.random()*2-1)*Ch,this.camera.position.y+=(Math.random()*2-1)*Ch))),this.stars.position.copy(this.camera.position),this.moon.position.copy(this.camera.position).addScaledVector(Th,6500),this.starMat&&(this.starMat.uniforms.uTime.value+=d),this.crowd.update(e,t,d),this.groundImpacts.update(d),this.effects.update(d),this.syncTracers(e),this.syncRockets(e,d),this.updateSmoke(d,i),this.updateMuzzleFlash(i),this.camera.layers.set(0),c)this.renderer.render(this.scene,this.camera);else{this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.camera.layers.set(Vi),this.renderer.autoClear=!1;const p=this.scene.background;this.scene.background=null,this.renderer.render(this.scene,this.camera),this.scene.background=p,this.renderer.autoClear=!0,this.camera.layers.set(0)}}updateScopeCamera(e,t,n,i,s){e>0&&this.camera.fov!==e&&(this.camera.fov=e,this.camera.updateProjectionMatrix()),this.scopeFwd.set(0,0,-1).applyQuaternion(this.renderQuat);const o=Math.atan2(-this.scopeFwd.x,-this.scopeFwd.z),a=t/window.innerWidth*2-1,c=n/window.innerHeight*2-1,l=1-Math.exp(-12*i);this.scopePanYaw+=(-a*Hy-this.scopePanYaw)*l,this.scopePanPitch+=(-c*Vy-this.scopePanPitch)*l,this.scopeRecoil=Math.max(0,this.scopeRecoil-i*Wy),this.scopeClock+=i;const h=Xy*(1-s),u=Math.sin(this.scopeClock*Ah)*h,d=Math.sin(this.scopeClock*Ah*.7+1.3)*h*1.2,p=this.scopePanYaw+u,g=this.scopePanPitch+this.scopeRecoil+d;this.scopeEuler.set(g,o+p,0,"YXZ"),this.camera.quaternion.setFromEuler(this.scopeEuler),this.camera.position.copy(this.eye),this.scopeAimOrigin.copy(this.camera.position),this.scopeAimDir.set(0,0,-1).applyQuaternion(this.camera.quaternion)}updateSmoke(e,t){t&&(this.smokeEmitTimer-=e,this.smokeEmitTimer<=0&&(this.smokeEmitTimer=jy,this.emitSmoke()));for(const n of this.smoke){if(n.life<=0)continue;n.life-=e,n.sprite.position.addScaledVector(n.vel,e),n.vel.multiplyScalar(1-1.2*e);const i=1-Math.max(0,n.life)/n.maxLife,s=n.size0+(n.size1-n.size0)*i;n.sprite.scale.set(s,s,1);const o=i<.15?i/.15:1-(i-.15)/.85;n.sprite.material.opacity=$y*o,n.life<=0&&(n.sprite.visible=!1)}}emitSmoke(){this.smokeTex||(this.smokeTex=this.makeSmokeTexture());let e=this.smoke.find(t=>t.life<=0);if(!e){if(this.smoke.length>=Ky)return;const t=new $t(new rn({map:this.smokeTex,color:9146261,transparent:!0,depthWrite:!1,opacity:0}));this.scene.add(t),e={sprite:t,vel:new w,life:0,maxLife:1,size0:1,size1:1},this.smoke.push(e)}e.sprite.visible=!0,e.sprite.position.copy(this.gunMuzzle),e.sprite.material.rotation=Math.random()*Math.PI*2,e.vel.set((Math.random()-.5)*1.4,1.4+Math.random()*.9,(Math.random()-.5)*1.4).addScaledVector(this.gunDir,-1.5),e.maxLife=.9+Math.random()*.8,e.life=e.maxLife,e.size0=.6+Math.random()*.4,e.size1=2.6+Math.random()*1.8}makeSmokeTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");for(let n=0;n<16;n++){const i=14+Math.random()*36,s=14+Math.random()*36,o=5+Math.random()*13,a=.04+Math.random()*.1,c=140+Math.floor(Math.random()*40),l=t.createRadialGradient(i,s,0,i,s,o);l.addColorStop(0,`rgba(${c},${c},${c},${a})`),l.addColorStop(1,`rgba(${c},${c},${c},0)`),t.fillStyle=l,t.fillRect(0,0,64,64)}return new fn(e)}buildGun(){const e=this.getGunTexture(),t=new wt({map:e,color:9147293,metalness:.75,roughness:.42}),n=new wt({color:2106410,metalness:.5,roughness:.6,flatShading:!0}),i=(h,u,d,p=12)=>{const g=new nn(h,u,d,p);return g.rotateX(Math.PI/2),g};this.gunHousing=new mt;const s=new Be(new Ht(1.15,.55,1),n);s.position.z=.35,this.gunHousing.add(s);const o=new Be(i(.44,.44,1,16),t);o.position.z=.1,this.gunHousing.add(o),this.scene.add(this.gunHousing),this.gunBarrel=new mt;const a=new Be(i(.32,.32,.9,16),t);a.position.z=-.45,this.gunBarrel.add(a);const c=i(.08,.08,2.7,10);for(let h=0;h<6;h++){const u=h/6*Math.PI*2,d=new Be(c,t);d.position.set(Math.cos(u)*.17,Math.sin(u)*.17,-1.7),this.gunBarrel.add(d)}const l=new Be(i(.36,.32,.3,16),n);l.position.z=-2.85,this.gunBarrel.add(l),this.scene.add(this.gunBarrel),this.flashTex=this.makeFlashTexture(),this.muzzleFlash=new $t(new rn({map:this.flashTex,color:16777215,transparent:!0,opacity:0,blending:pn,depthWrite:!1,depthTest:!0,fog:!1})),this.muzzleFlash.visible=!1,this.scene.add(this.muzzleFlash),this.gunHousing.traverse(h=>h.layers.set(Vi)),this.gunBarrel.traverse(h=>h.layers.set(Vi)),this.muzzleFlash.layers.set(Vi)}updateMuzzleFlash(e){const t=this.muzzleFlash;if(!t)return;if(!e){t.visible=!1;return}t.visible=!0,t.position.copy(this.gunMuzzle);const n=1.8+Math.random()*2.4;t.scale.set(n,n,1);const i=t.material;i.rotation=Math.random()*Math.PI*2,i.opacity=.5+Math.random()*.5}makeFlashTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.translate(128/2,128/2),n.globalCompositeOperation="lighter";const i=(c,l,h)=>{n.save(),n.rotate(c);const u=n.createLinearGradient(0,0,l,0);u.addColorStop(0,"rgba(255,240,205,0.85)"),u.addColorStop(.4,"rgba(255,175,80,0.45)"),u.addColorStop(1,"rgba(255,110,35,0)"),n.fillStyle=u,n.beginPath(),n.moveTo(0,-h),n.lineTo(l,0),n.lineTo(0,h),n.closePath(),n.fill(),n.restore()},s=128*.5,o=18;for(let c=0;c<o;c++){const l=c/o*Math.PI*2+(Math.random()-.5)*.4;i(l,(.35+Math.random()*.55)*s,(.03+Math.random()*.05)*128)}for(let c=0;c<5;c++)i(Math.random()*Math.PI*2,(.8+Math.random()*.2)*s,(.015+Math.random()*.025)*128);const a=n.createRadialGradient(0,0,0,0,0,s*.42);return a.addColorStop(0,"rgba(255,255,250,1)"),a.addColorStop(.5,"rgba(255,220,140,0.8)"),a.addColorStop(1,"rgba(255,160,70,0)"),n.fillStyle=a,n.beginPath(),n.arc(0,0,s*.42,0,Math.PI*2),n.fill(),n.globalCompositeOperation="source-over",new fn(t)}updateGun(e,t,n,i,s){this.gunMountWorld.copy(bh).applyQuaternion(t).add(e),this.gunHousing.position.copy(this.gunMountWorld),this.gunHousing.quaternion.copy(t),this.gunBarrel.position.copy(this.gunMountWorld),n&&(this.gunAimDir.copy(n).sub(this.gunMountWorld),this.gunAimDir.lengthSq()>1e-6&&(this.gunAimDir.normalize(),this.gunRel.setFromUnitVectors(ky,this.gunAimDir),this.gunInvHull.copy(t).invert(),this.gunDesiredRel.copy(this.gunInvHull).multiply(this.gunRel),this.gunHoldRel.rotateTowards(this.gunDesiredRel,qy*i))),this.gunBarrel.quaternion.copy(t).multiply(this.gunHoldRel),s&&(this.gunSpin=(this.gunSpin+Yy*i)%(Math.PI*2)),this.gunBarrel.rotateZ(this.gunSpin),this.gunDir.set(0,0,-1).applyQuaternion(this.gunBarrel.quaternion),this.gunMuzzle.copy(this.gunMountWorld).addScaledVector(this.gunDir,Rh);const o=this.gunPrevRel.angleTo(this.gunHoldRel);this.gunSwivelSpeedValue=o/Math.max(i,.001),this.gunPrevRel.copy(this.gunHoldRel)}getGunTexture(){if(this.gunTex)return this.gunTex;const e=document.createElement("canvas");e.width=64,e.height=128;const t=e.getContext("2d");t.fillStyle="#3a4048",t.fillRect(0,0,64,128);for(let i=0;i<420;i++){const s=Math.random()*64,o=Math.random()*128,a=3+Math.random()*12,c=Math.random()<.5;t.strokeStyle=c?`rgba(150,160,172,${.05+Math.random()*.18})`:`rgba(14,16,20,${.05+Math.random()*.24})`,t.beginPath(),t.moveTo(s,o),t.lineTo(s,o+a),t.stroke()}t.strokeStyle="rgba(8,9,11,0.6)",t.lineWidth=1;for(const i of[20,54,92])t.beginPath(),t.moveTo(0,i+.5),t.lineTo(64,i+.5),t.stroke();t.fillStyle="#caa23a",t.fillRect(0,106,64,9),t.fillStyle="rgba(0,0,0,0.45)";for(let i=-10;i<64;i+=12)t.fillRect(i,106,6,9);const n=new fn(e);return n.wrapS=Sn,n.wrapT=yn,n.repeat.set(2,1),this.gunTex=n,n}syncTracers(e){this.seenIds.clear();for(const t of e.all()){if(!(t instanceof Xs)||!t.visibleTracer)continue;let n=this.tracers.get(t.id);if(n||(n=this.createTracer(),this.scene.add(n),this.tracers.set(t.id,n)),t.heading.lengthSq()>1e-6){this.tracerDir.copy(t.heading).normalize();const i=this.aimScratch.copy(t.position).sub(this.gunMuzzle).dot(this.tracerDir);n.position.copy(this.gunMuzzle).addScaledVector(this.tracerDir,i),n.quaternion.setFromUnitVectors(Yi.TRACER_AXIS,this.tracerDir),n.visible=i>Zy}else n.visible=!1;this.seenIds.add(t.id)}for(const[t,n]of this.tracers)this.seenIds.has(t)||(this.scene.remove(n),this.tracers.delete(t))}detonation(e,t,n,i){this.effects.spawnExplosion(e,t,n,i);const s=zt(e,n);t-s<i&&this.groundImpacts.spawn(e,s,n)}syncRockets(e,t){this.rocketSeen.clear();for(const n of e.all()){if(!(n instanceof qs))continue;let i=this.rockets.get(n.id);i||(i=this.createRocket(),this.scene.add(i.group),this.rockets.set(n.id,i)),i.group.position.copy(n.position),n.heading.lengthSq()>1e-6&&(this.tracerDir.copy(n.heading).normalize(),i.group.quaternion.setFromUnitVectors(Yi.ROCKET_AXIS,this.tracerDir));const s=n.burning;for(const o of i.flames)o.visible=s;if(s){const o=.75+Math.random()*.6;i.flames[0].scale.set(o*.95,o*2.2,1),i.flames[1].scale.set(o*.55,o*1.3,1)}i.trail-=t,i.trail<=0&&(i.trail=.03,this.effects.spawnSmoke(n.position.x-this.tracerDir.x*1.2,n.position.y-this.tracerDir.y*1.2,n.position.z-this.tracerDir.z*1.2)),this.rocketSeen.add(n.id)}for(const[n,i]of this.rockets)this.rocketSeen.has(n)||(this.scene.remove(i.group),this.rockets.delete(n))}createRocket(){this.rocketBodyGeo||(this.rocketBodyGeo=new nn(.16,.16,1.5,8),this.rocketBodyGeo.rotateX(Math.PI/2)),this.rocketNoseGeo||(this.rocketNoseGeo=new nn(0,.16,.5,8),this.rocketNoseGeo.rotateX(Math.PI/2)),this.rocketBodyMat||(this.rocketBodyMat=new wt({color:3817287,metalness:.6,roughness:.5})),this.rocketNoseMat||(this.rocketNoseMat=new jt({color:16765562,fog:!1}));const e=new mt,t=new Be(this.rocketBodyGeo,this.rocketBodyMat);e.add(t);const n=new Be(this.rocketNoseGeo,this.rocketNoseMat);n.position.z=1,e.add(n),this.smokeTex||(this.smokeTex=this.makeSmokeTexture());const i=(a,c)=>{const l=new $t(new rn({map:this.smokeTex,color:a,transparent:!0,depthWrite:!1,blending:pn,fog:!1}));return l.position.z=c,e.add(l),l},s=i(16742942,-1.5),o=i(16770720,-1.05);return{group:e,flames:[s,o],trail:0}}createTracer(){this.coreGeo||(this.coreGeo=new nn(.09,.07,2.2,6),this.coreGeo.rotateX(Math.PI/2)),this.coreMat||(this.coreMat=new jt({color:16773839,fog:!1})),this.glowGeo||(this.glowGeo=new nn(.1,0,11,6),this.glowGeo.rotateX(Math.PI/2)),this.glowMat||(this.glowMat=new jt({color:16762726,transparent:!0,opacity:.22,blending:pn,depthWrite:!1,fog:!1}));const e=new mt,t=new Be(this.coreGeo,this.coreMat);e.add(t);const n=new Be(this.glowGeo,this.glowMat);return n.position.z=-6.5,e.add(n),e}dispose(){var e,t,n,i,s,o,a,c,l,h,u,d,p;window.removeEventListener("resize",this.onResize),this.crowd.dispose(),this.groundImpacts.dispose(),this.scene.remove(this.stars),this.stars.geometry.dispose(),(e=this.starMat)==null||e.dispose(),this.scene.remove(this.moon),this.moon.material.dispose(),(t=this.moonTex)==null||t.dispose(),this.terrain.geometry.dispose(),this.terrain.material.dispose(),this.gridTex.dispose();for(const g of this.props)g instanceof Be&&g.geometry.dispose();this.props[0]instanceof Be&&this.props[0].material.dispose();for(const g of this.tracers.values())this.scene.remove(g);this.tracers.clear(),(n=this.coreGeo)==null||n.dispose(),(i=this.coreMat)==null||i.dispose(),(s=this.glowGeo)==null||s.dispose(),(o=this.glowMat)==null||o.dispose();for(const g of this.rockets.values()){this.scene.remove(g.group);for(const _ of g.flames)_.material.dispose()}this.rockets.clear(),(a=this.rocketBodyGeo)==null||a.dispose(),(c=this.rocketNoseGeo)==null||c.dispose(),(l=this.rocketBodyMat)==null||l.dispose(),(h=this.rocketNoseMat)==null||h.dispose(),this.muzzleFlash&&(this.scene.remove(this.muzzleFlash),this.muzzleFlash.material.dispose()),(u=this.flashTex)==null||u.dispose(),this.scene.remove(this.gunHousing),this.scene.remove(this.gunBarrel),Ih(this.gunHousing),Ih(this.gunBarrel),(d=this.gunTex)==null||d.dispose();for(const g of this.smoke)this.scene.remove(g.sprite),g.sprite.material.dispose();this.smoke.length=0,(p=this.smokeTex)==null||p.dispose(),this.renderer.dispose()}};x(Yi,"ROCKET_AXIS",new w(0,0,1)),x(Yi,"TRACER_AXIS",new w(0,0,1));let Ga=Yi;function Ne(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&t.appendChild(n),n}const Qy=["N","NE","E","SE","S","SW","W","NW"];class Jy{constructor(e,t={}){x(this,"container");x(this,"header");x(this,"areaLine");x(this,"throttleFill");x(this,"throttleText");x(this,"speedFill");x(this,"speedText");x(this,"altText");x(this,"hullFill");x(this,"hullText");x(this,"headingText");x(this,"threatText");x(this,"weaponsWrap");x(this,"weaponRows",new Map);x(this,"dev");x(this,"scope");x(this,"scopeReadout");x(this,"scopeRangeEl");x(this,"scopeHdgEl");x(this,"audioBars",[]);x(this,"breathFill");x(this,"panels",[]);x(this,"nvBtn");x(this,"nvOn",!1);x(this,"onKey",e=>{e.repeat||(e.code==="KeyN"?this.toggleNightVision():e.code==="Backslash"&&this.resetLayout())});this.options=t;const n=Ne("div","hud hud-paladin",e);this.container=n,Ne("div","hud-vignette",n),Ne("div","hud-nv",n);for(const f of["tl","tr","bl","br"])Ne("div",`hud-corner hud-corner-${f}`,n);const i=Ne("div","hud-ident",n);this.header=Ne("div","hud-header",i),this.areaLine=Ne("div","hud-sector",i),this.headingText=Ne("div","hud-heading",n),this.threatText=Ne("div","hud-threat",n),this.nvBtn=Ne("button","hud-nv-toggle",n),this.nvBtn.type="button",this.nvBtn.title="Toggle night vision (N)",this.nvBtn.addEventListener("click",()=>this.toggleNightVision()),this.updateNvButton();const s=new gi({parent:n,id:"paladin-flight",title:"FLIGHT",defaults:{left:"40px",bottom:"40px"}}),o=this.barRow(s.body,"THR","hud-fill-thr");this.throttleFill=o.fill,this.throttleText=o.val;const a=this.barRow(s.body,"VEL","hud-fill-spd");this.speedFill=a.fill,this.speedText=a.val;const c=Ne("div","hud-stat",s.body);Ne("div","hud-stat-label",c).textContent="ALT",Ne("div","hud-stat-spacer",c),this.altText=Ne("div","hud-stat-val",c),this.panels.push(s);const l=new gi({parent:n,id:"paladin-airframe",title:"AIRFRAME",defaults:{right:"40px",bottom:"40px"}}),h=this.barRow(l.body,"HULL","hud-fill-hull");this.hullFill=h.fill,this.hullText=h.val,this.weaponsWrap=Ne("div","hud-weapons",l.body),this.panels.push(l),this.dev=Ne("div","hud-dev",n),this.scope=Ne("div","hud-scope",n),Ne("div","hud-scope-mask",this.scope);const u=Ne("div","hud-scope-reticle",this.scope);Ne("div","hud-scope-ticks hud-scope-ticks-h",u),Ne("div","hud-scope-ticks hud-scope-ticks-v",u),Ne("div","hud-scope-dot",u);const d=Ne("div","hud-scope-info",this.scope);this.scopeRangeEl=Ne("div","hud-scope-line",d),this.scopeHdgEl=Ne("div","hud-scope-line",d);const p=Ne("div","hud-scope-audio",this.scope);Ne("div","hud-scope-audio-label",p).textContent="AUD";const g=Ne("div","hud-scope-meter",p);for(let f=0;f<10;f++)this.audioBars.push(Ne("div","hud-scope-bar",g));const _=Ne("div","hud-scope-breath",this.scope);Ne("div","hud-scope-breath-label",_).textContent="BREATH";const m=Ne("div","hud-scope-breath-track",_);this.breathFill=Ne("div","hud-scope-breath-fill",m),this.scopeReadout=Ne("div","hud-scope-readout",this.scope),window.addEventListener("keydown",this.onKey)}toggleNightVision(){var e,t;this.nvOn=!this.nvOn,document.body.classList.toggle("nightvision",this.nvOn),this.updateNvButton(),(t=(e=this.options).onNightVision)==null||t.call(e,this.nvOn)}updateNvButton(){this.nvBtn.textContent=`NV ${this.nvOn?"ON":"OFF"}`,this.nvBtn.classList.toggle("active",this.nvOn)}resetLayout(){for(const e of this.panels)e.resetLayout()}barRow(e,t,n){const i=Ne("div","hud-stat",e);Ne("div","hud-stat-label",i).textContent=t;const s=Ne("div","hud-bar",i),o=Ne("div",`hud-bar-fill ${n}`,s),a=Ne("div","hud-stat-val",i);return{fill:o,val:a}}update(e){this.header.textContent=`DEC · ${e.craftName.toUpperCase()}`,this.areaLine.textContent=e.areaName.toUpperCase(),this.throttleFill.style.width=`${Ps(e.throttle)}%`,this.throttleText.textContent=`${Math.round(e.throttle*100)}%`;const t=e.maxSpeed>0?e.speed/e.maxSpeed:0;this.speedFill.style.width=`${Ps(t)}%`,this.speedText.textContent=`${Math.round(e.speed)}`,this.altText.textContent=`${Math.round(e.altitude)}`;const n=e.maxHull>0?e.hull/e.maxHull:0;this.hullFill.style.width=`${Ps(n)}%`,this.hullFill.style.background=eS(n),this.hullText.textContent=`${Math.round(e.hull)}`;const i=(e.heading%360+360)%360,s=Qy[Math.round(i/45)%8];this.headingText.textContent=`HDG ${String(Math.round(i)).padStart(3,"0")}° ${s}`,e.hostiles!==void 0&&(this.threatText.textContent=`HOSTILES ${e.hostiles} · DOWNED ${e.downed??0}`),this.updateWeapons(e.weapons);const o=!!e.scoped;if(this.container.classList.toggle("scoped",o),o){const c=e.weapons.find(d=>d.selected),l=e.scopeZoom??1,h=c!=null&&c.ready?"READY":"CHARGING";this.scopeReadout.textContent=`${((c==null?void 0:c.name)??"SCOPE").toUpperCase()} · ${l}× · ${h}`,this.scopeRangeEl.textContent=`RNG ${Math.round(e.scopeRange??0)}`,this.scopeHdgEl.textContent=`HDG ${String(Math.round(i)).padStart(3,"0")}° ${s}`;const u=Math.round((e.audioLevel??0)*this.audioBars.length);for(let d=0;d<this.audioBars.length;d++)this.audioBars[d].classList.toggle("on",d<u);this.breathFill.style.width=`${Ps(e.breath??0)}%`}const a=e.metrics;this.dev.textContent=a?`${a.fps.toFixed(0)} fps · ${a.tps.toFixed(0)}/${mc} tps · cam:cockpit`:"cam:cockpit"}updateWeapons(e){const t=new Set;for(const n of e){let i=this.weaponRows.get(n.index);if(!i){const o=Ne("div","hud-wpn-row",this.weaponsWrap);Ne("div","hud-wpn-sel",o).textContent="▸";const a=Ne("div","hud-wpn-name",o),c=Ne("div","hud-wpn-state",o),l=Ne("div","hud-wpn-bar",o),h=Ne("div","hud-wpn-fill",l);o.addEventListener("click",()=>{var u,d;return(d=(u=this.options).onSelectWeapon)==null?void 0:d.call(u,n.index)}),i={row:o,name:a,state:c,fill:h},this.weaponRows.set(n.index,i)}i.name.textContent=n.name.toUpperCase(),i.state.textContent=n.ready?"READY":"CHRG",i.row.classList.toggle("selected",n.selected),i.row.classList.toggle("ready",n.ready);const s=n.maxEnergy>0?n.energy/n.maxEnergy:0;i.fill.style.width=`${Ps(s)}%`,i.fill.classList.toggle("low",!n.ready),t.add(n.index)}for(const[n,i]of this.weaponRows)t.has(n)||(i.row.remove(),this.weaponRows.delete(n))}dispose(){window.removeEventListener("keydown",this.onKey),document.body.classList.remove("nightvision"),this.container.remove()}}function Ps(r){return Math.max(0,Math.min(1,r))*100}function eS(r){return r>.5?"#4ee39a":r>.25?"#ffcc55":"#ff5a5a"}const tS="audio/381174__csnmedia__aircraft-cabin.mp3",nS="audio/153492__steelskull__minigun-shooting-awesome-sound.mp3",iS="audio/18724__lg__servo02.mp3",sS="audio/850634__chagusmk__minigun.mp3",rS="audio/187681__qubodup__helicopter-rotor-loop.mp3",oS="audio/456988__regoneff__camera-with-flash-sound-and-then-charge-fast.mp3",aS="audio/628638__el_boss__menu-select-tick.mp3",cS="audio/51469__smcameron__rocket_exhaust_1.mp3",lS="audio/186965__readeonly__explosion1.mp3",hS="audio/398348__evanboyerman__regular-sniper-rifle-shot-w-bolt-reload-outdoormixed.mp3",uS="audio/210018__supakid13__sniper-scope-zoom-in.mp3",dS=.4,fS=.82,pS=.5,jo=.9,mS=1,gS=.26,_S=.8,Ph=.3,xS=11,vS=.006,Lh=.08,MS=.28,yS=.35,SS=3.2,ES=.28,TS=.6,$o=.4,Dh=.74,bS=.01,Nh=.06,wS=.3,AS=1,Uh=.9,RS=9.5,CS=.02,Fh=.08,IS=.6,PS=.5,LS=.55,DS=.5,NS=.15,US=.3,FS=["audio/643790__snowfightstudios__zombie-noises.mp3","audio/643792__snowfightstudios__zombie-noises-2.mp3","audio/643791__snowfightstudios__zombie-noises-3.mp3"],OS="audio/63631__vtownpunks__multi-groan-2.mp3",BS=.24,kS=5,zS=.5,Oh=2.2,Bh=6,kh=1.2,zh=2.8,HS=["audio/555426__tonsil5__zombie-pain-5.mp3","audio/432763__xpoki__female_growl1.mp3","audio/754438__ownathan__zombie-groan-0.mp3","audio/754441__ownathan__zombie-groan-3.mp3"],VS=.32,GS=6,WS=.22,XS=.09,qS=.55,YS=1.6;class KS{constructor(){x(this,"ctx");x(this,"cabin");x(this,"rotor");x(this,"rotorRateTarget",jo);x(this,"reverb");x(this,"chaingunBuffer",null);x(this,"fireVoice",null);x(this,"servoBuffer",null);x(this,"servoVoice",null);x(this,"emptyBuffer",null);x(this,"emptyVoice",null);x(this,"nvgBuffer",null);x(this,"tickBuffer",null);x(this,"rocketBuffer",null);x(this,"explosionBuffer",null);x(this,"sniperBuffer",null);x(this,"scopeZoomBuffer",null);x(this,"zomBuffers",[]);x(this,"groanBuffer",null);x(this,"zomVoices",0);x(this,"zomSpawnTimer",0);x(this,"painBuffers",[]);x(this,"painVoices",0);x(this,"painNextAt",0);x(this,"started",!1);x(this,"firing",!1);x(this,"servoing",!1);x(this,"empty",!1);x(this,"unlock",()=>this.start());this.ctx=new AudioContext,this.cabin=new Audio(tS),this.cabin.loop=!0,this.cabin.crossOrigin="anonymous",Hh(this.cabin),this.cabin.playbackRate=fS;const e=this.ctx.createGain();e.gain.value=dS,this.ctx.createMediaElementSource(this.cabin).connect(e),e.connect(this.ctx.destination),this.rotor=new Audio(rS),this.rotor.loop=!0,this.rotor.crossOrigin="anonymous",Hh(this.rotor),this.rotor.playbackRate=jo;const t=this.ctx.createGain();t.gain.value=pS,this.ctx.createMediaElementSource(this.rotor).connect(t),t.connect(this.ctx.destination),this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this.makeImpulse(yS,SS);const n=this.ctx.createGain();n.gain.value=MS,this.reverb.connect(n),n.connect(this.ctx.destination),this.load(nS).then(i=>{this.chaingunBuffer=i}),this.load(iS).then(i=>{this.servoBuffer=i}),this.load(sS).then(i=>{this.emptyBuffer=i}),this.load(oS).then(i=>{this.nvgBuffer=i}),this.load(aS).then(i=>{this.tickBuffer=i}),this.load(cS).then(i=>{this.rocketBuffer=i}),this.load(lS).then(i=>{this.explosionBuffer=i}),this.load(hS).then(i=>{this.sniperBuffer=i}),this.load(uS).then(i=>{this.scopeZoomBuffer=i}),FS.forEach((i,s)=>{this.load(i).then(o=>{this.zomBuffers[s]=o})}),this.load(OS).then(i=>{this.groanBuffer=i}),HS.forEach((i,s)=>{this.load(i).then(o=>{this.painBuffers[s]=o})}),window.addEventListener("keydown",this.unlock,{once:!0}),window.addEventListener("mousedown",this.unlock,{once:!0})}start(){this.started||(this.started=!0,this.ctx.resume(),this.cabin.play().catch(()=>{}),this.rotor.play().catch(()=>{}),this.firing&&this.startFireLoop(),this.servoing&&this.startServoLoop(),this.empty&&this.startEmptyLoop())}setManeuvering(e){this.rotorRateTarget=e?mS:jo}update(e){const t=1-Math.exp(-4*e);this.rotor.playbackRate+=(this.rotorRateTarget-this.rotor.playbackRate)*t}async load(e){try{const t=await(await fetch(e)).arrayBuffer();return await this.ctx.decodeAudioData(t)}catch{return null}}makeImpulse(e,t){const n=this.ctx.sampleRate,i=Math.max(1,Math.floor(n*e)),s=this.ctx.createBuffer(2,i,n);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/i,t)}return s}setFiring(e){this.firing=e,e&&!this.fireVoice?this.startFireLoop():!e&&this.fireVoice&&this.stopFireLoop()}startFireLoop(){if(!this.chaingunBuffer||this.ctx.state!=="running"||this.fireVoice)return;const e=this.ctx.createBufferSource();e.buffer=this.chaingunBuffer,e.loop=!0,e.loopStart=Ph,e.loopEnd=xS,e.playbackRate.value=_S*(.92+Math.random()*.16);const t=this.ctx.createGain(),n=this.ctx.currentTime;t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(gS,n+vS),e.connect(t),t.connect(this.ctx.destination),t.connect(this.reverb),e.start(0,Ph),this.fireVoice={src:e,gain:t}}stopFireLoop(){const e=this.fireVoice;if(!e)return;this.fireVoice=null;const t=this.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,t),e.gain.gain.linearRampToValueAtTime(0,t+Lh);try{e.src.stop(t+Lh+.02)}catch{}}setServo(e){this.servoing=e,e&&!this.servoVoice?this.startServoLoop():!e&&this.servoVoice&&this.stopServoLoop()}startServoLoop(){if(!this.servoBuffer||this.ctx.state!=="running"||this.servoVoice)return;const e=this.ctx.createBufferSource();e.buffer=this.servoBuffer,e.loop=!0,e.loopStart=$o,e.loopEnd=Dh,e.playbackRate.value=TS;const t=this.ctx.createGain(),n=this.ctx.currentTime;t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(ES,n+bS),e.connect(t).connect(this.ctx.destination);const i=$o+Math.random()*(Dh-$o);e.start(0,i),this.servoVoice={src:e,gain:t}}stopServoLoop(){const e=this.servoVoice;if(!e)return;this.servoVoice=null;const t=this.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,t),e.gain.gain.linearRampToValueAtTime(0,t+Nh);try{e.src.stop(t+Nh+.02)}catch{}}setEmpty(e){this.empty=e,e&&!this.emptyVoice?this.startEmptyLoop():!e&&this.emptyVoice&&this.stopEmptyLoop()}startEmptyLoop(){if(!this.emptyBuffer||this.ctx.state!=="running"||this.emptyVoice)return;const e=this.ctx.createBufferSource();e.buffer=this.emptyBuffer,e.loop=!0,e.loopStart=Uh,e.loopEnd=RS,e.playbackRate.value=AS;const t=this.ctx.createGain(),n=this.ctx.currentTime;t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(wS,n+CS),e.connect(t).connect(this.ctx.destination),e.start(0,Uh),this.emptyVoice={src:e,gain:t}}stopEmptyLoop(){const e=this.emptyVoice;if(!e)return;this.emptyVoice=null;const t=this.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,t),e.gain.gain.linearRampToValueAtTime(0,t+Fh);try{e.src.stop(t+Fh+.02)}catch{}}playNvgToggle(){this.playOneShot(this.nvgBuffer,IS)}playSelect(){this.playOneShot(this.tickBuffer,PS)}playRocket(){this.playOneShot(this.rocketBuffer,NS,Ls())}playExplosion(e=1){this.playOneShot(this.explosionBuffer,US*e,Ls())}playSniper(){this.playOneShot(this.sniperBuffer,LS,Ls())}playScopeZoom(){this.playOneShot(this.scopeZoomBuffer,DS)}playOneShot(e,t,n=1){if(!e)return;this.ctx.resume();const i=this.ctx.createBufferSource();i.buffer=e,i.playbackRate.value=n;const s=this.ctx.createGain();s.gain.value=t,i.connect(s).connect(this.ctx.destination),i.start()}updateZombies(e,t,n){if(this.ctx.state!=="running")return;if(t<=0||n<=.02){this.zomSpawnTimer=0;return}if(this.zomSpawnTimer-=e,this.zomSpawnTimer>0)return;const i=Math.max(n,Math.min(1,t/12)),s=Oh+(zS-Oh)*i;this.zomSpawnTimer=s*(.6+Math.random()*.8);const o=t<=2?2:t<Bh?3:kS;if(this.zomVoices>=o)return;const a=t>=Bh&&Math.random()<.5,c=a?this.groanBuffer:this.zomBuffers[Math.random()*this.zomBuffers.length|0];if(!c)return;const l=Math.random()*Math.max(0,c.duration-zh),h=BS*n*(a?1:.85)*(.7+Math.random()*.4);this.playZombieVoice(c,l,h)}playZombieVoice(e,t,n){const i=this.ctx.createBufferSource();i.buffer=e,i.playbackRate.value=Ls();const s=this.ctx.createGain(),o=this.ctx.currentTime,a=kh+Math.random()*(zh-kh);s.gain.setValueAtTime(0,o),s.gain.linearRampToValueAtTime(n,o+.06),s.gain.setValueAtTime(n,o+a-.2),s.gain.linearRampToValueAtTime(0,o+a),i.connect(s).connect(this.ctx.destination),i.start(0,t),i.stop(o+a+.02),this.zomVoices++,i.onended=()=>{this.zomVoices=Math.max(0,this.zomVoices-1)}}zombieVocal(e,t){if(this.ctx.state!=="running"||e<=.02||this.painVoices>=GS)return;const n=this.ctx.currentTime;if(n<this.painNextAt||!t&&Math.random()>qS)return;this.painNextAt=n+(t?XS:WS);const i=this.painBuffers[Math.random()*this.painBuffers.length|0];if(!i)return;const s=VS*e*(t?1.15:.9)*(.8+Math.random()*.4),o=this.ctx.createBufferSource();o.buffer=i,o.playbackRate.value=Ls();const a=this.ctx.createGain(),c=Math.random()*i.duration*.35,l=Math.min(YS,i.duration-c);a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(s,n+.02),a.gain.setValueAtTime(s,n+l-.12),a.gain.linearRampToValueAtTime(0,n+l),o.connect(a).connect(this.ctx.destination),o.start(0,c),o.stop(n+l+.02),this.painVoices++,o.onended=()=>{this.painVoices=Math.max(0,this.painVoices-1)}}dispose(){window.removeEventListener("keydown",this.unlock),window.removeEventListener("mousedown",this.unlock),this.stopFireLoop(),this.stopServoLoop(),this.stopEmptyLoop(),this.cabin.pause(),this.rotor.pause(),this.ctx.close()}}function Ls(){return .8+Math.random()*.45}function Hh(r){const e=r;e.preservesPitch=!1,e.mozPreservesPitch=!1,e.webkitPreservesPitch=!1}const jS=6,Vh=1.5,Zo=.05,$S=.03,ZS=220,QS=60,Gh=400,JS=1400,eE="Verge III — Landing Zone",$r=450,tE=$r*$r,nE=1600,Wh=[24,12,6],Qo=4,iE=.5,sE=14,rE=72;function oE(r){const e=new Uu,t=new Ou,n=new gM(t),i=e.add(new Bu(Jx)),s=zt(0,0)+QS;i.position.set(0,s,0),i.prevPosition.copy(i.position),n.bind(i);const o=new Ga(r);o.setPlayer(i);const a=new KS,c=new Jy(r,{onNightVision:()=>a.playNvgToggle(),onSelectWeapon:D=>{i.selectWeapon(D),a.playSelect()}});RM(e,Gh,JS);let l=0;const h=new w().copy(i.position),u=(D,J,ae)=>{const ce=D-h.x,Re=J-h.y,_e=ae-h.z;return Math.max(0,1-Math.sqrt(ce*ce+Re*Re+_e*_e)/$r)},d=e.events.on("entity-destroyed",D=>{D.kind==="zombie"&&(l++,a.zombieVocal(u(D.x,D.y,D.z),!0))}),p=e.events.on("target-hit",D=>{D.hull<=0||a.zombieVocal(u(D.x,D.y,D.z),!1)}),g=e.events.on("ground-hit",D=>o.groundHit(D.x,D.y,D.z)),_=e.events.on("weapon-fired",D=>{D.kind==="missile"?a.playRocket():D.weapon==="Vigil Sniper"&&(a.playSniper(),o.scopeKick())}),m=e.events.on("missile-detonated",D=>{o.detonation(D.x,D.y,D.z,D.radius);const J=D.x-i.position.x,ae=D.y-i.position.y,ce=D.z-i.position.z,Re=Math.sqrt(J*J+ae*ae+ce*ce);a.playExplosion(Math.max(.08,1-Re/nE))});let f=!1,T=!1,S=window.innerWidth/2,v=window.innerHeight/2,L=0,R=!1;const C=D=>{D.button===0&&(f=!0)},P=D=>{D.button===0&&(f=!1)},y=D=>{S=D.clientX,v=D.clientY},M=()=>{f=!1},I=D=>{var J;if((J=i.selectedWeaponSpec)!=null&&J.scoped){D.preventDefault();const ae=D.deltaY<0?1:-1,ce=Math.max(0,Math.min(Wh.length-1,L+ae));ce!==L&&(L=ce,a.playScopeZoom())}},k=D=>{(D.code==="ControlLeft"||D.code==="ControlRight")&&!D.repeat&&(D.preventDefault(),T=!T,T||(f=!1)),!D.repeat&&(D.code==="BracketLeft"||D.code==="BracketRight")&&i.cycleWeapon(D.code==="BracketRight"?1:-1),D.code==="Space"&&D.preventDefault()};o.renderer.domElement.addEventListener("mousedown",C),o.renderer.domElement.addEventListener("wheel",I,{passive:!1}),window.addEventListener("mouseup",P),window.addEventListener("mousemove",y),window.addEventListener("blur",M),window.addEventListener("keydown",k);let z=null,q=0,$=S,Y=v,X=!1;const W=new w,ne=new w,oe=new w,fe=new tt;let Ie=0,Je=0,j=Qo,ie=0;const N=new Nu({fixedUpdate:D=>{n.update(D);const J=i.turnInput,ae=Math.abs(J.pitch)+Math.abs(J.yaw)+Math.abs(J.roll)>.15||Math.abs(i.strafe)>.02||Math.abs(i.lift)>.12||t.isDown("KeyR");a.setManeuvering(ae),a.update(D);const ce=i.selectedWeaponSpec,Re=(ce==null?void 0:ce.scoped)===!0,_e=Re&&t.isDown("Space")&&j>0;j=_e?Math.max(0,j-D):Math.min(Qo,j+D*iE),ie+=((_e?1:0)-ie)*(1-Math.exp(-10*D)),Re?h.copy(o.groundAimFromScreen(window.innerWidth/2,window.innerHeight/2)):h.copy(i.position),Je=Re?h.distanceTo(i.position):0;const ye=f&&T&&!Re,U=(ce==null?void 0:ce.kind)==="missile";if(Re)a.setFiring(!1),a.setEmpty(!1),X=!1;else if(U)a.setFiring(!1),a.setEmpty(!1),X=!1,ye&&i.requestAimedShot(o.groundAimFromScreen(S,v));else{i.isSelectedDepleted()?X=!0:!ye&&i.selectedChargeFraction()>=$S&&(X=!1);const he=ye&&!X;a.setFiring(he),a.setEmpty(ye&&!he),he&&(i.getEffectiveQuaternion(fe),o.computeMuzzle(i.position,fe,oe,ne),ne.copy(o.aimPointFromScreen(S,v)).sub(oe).normalize(),ne.x+=(Math.random()-.5)*Zo,ne.y+=(Math.random()-.5)*Zo,ne.z+=(Math.random()-.5)*Zo,ne.normalize(),i.requestDirectedShot(oe,ne))}e.tick(D);const pt=zt(i.position.x,i.position.z)+jS;i.position.y<pt&&(i.position.y=pt,i.velocity.y<0&&(i.velocity.y=0));for(const he of Array.from(e.all())){if(!(he instanceof Xs))continue;const A=zt(he.position.x,he.position.z);he.position.y<=A&&(e.events.emit("ground-hit",{x:he.position.x,y:A,z:he.position.z}),e.remove(he.id))}let Ue=0,Fe=1/0;for(const he of e.all()){if(!(he instanceof _c)||he.state==="dead")continue;const A=he.position.x-h.x,E=he.position.y-h.y,H=he.position.z-h.z,Q=A*A+E*E+H*H;Q<=tE&&(Ue++,Q<Fe&&(Fe=Q))}const be=Ue>0?Math.max(0,1-Math.sqrt(Fe)/$r):0;a.updateZombies(D,Ue,be);const je=Math.min(1,Ue/sE);Ie+=(je-Ie)*(1-Math.exp(-6*D))},render:D=>{const J=i.selectedWeaponSpec,ae=(J==null?void 0:J.scoped)===!0,ce=Wh[L],Re=T&&!ae,_e=!ae&&(J==null?void 0:J.kind)!=="missile",ye=f&&Re&&_e,U=ye&&!X;document.body.classList.toggle("targeting",Re),o.render(e,D,Re,U,ye,S,v,ae,ce,ie),o.renderer.domElement.style.cursor=ae?"none":"",ae?(f&&!R&&i.requestDirectedShot(o.scopeOrigin,o.scopeDirection),R=f):R=!1;const pt=performance.now(),Ue=S-$,Fe=v-Y;$=S,Y=v,Re&&Ue*Ue+Fe*Fe>=Vh*Vh&&(q=pt+ZS),a.setServo(pt<q),W.set(0,0,-1).applyQuaternion(i.quaternion);const be=Math.atan2(W.x,-W.z)*180/Math.PI,je=zt(i.position.x,i.position.z);c.update({craftName:i.profile.name,areaName:eE,throttle:i.throttle,speed:i.speed,maxSpeed:i.profile.handling.maxSpeed,altitude:i.position.y-je,hull:i.hull,maxHull:i.maxHull,heading:be,weapons:i.getWeaponStatuses(),hostiles:Gh-l,downed:l,scoped:ae,scopeZoom:Math.round(rE/ce),scopeRange:Je,audioLevel:Ie,breath:j/Qo,metrics:z})},onMetrics:D=>{z=D}});return N.start(),{dispose(){N.stop(),document.body.classList.remove("targeting"),window.removeEventListener("mouseup",P),window.removeEventListener("mousemove",y),window.removeEventListener("blur",M),window.removeEventListener("keydown",k),d(),p(),g(),_(),m(),t.dispose(),o.dispose(),c.dispose(),a.dispose()}}}const Hu=document.getElementById("app");if(!Hu)throw new Error("Missing #app container");const aE=new ju(Hu,[{id:"command",label:"Meridian · Command",create:nM},{id:"paladin",label:"Paladin · Sortie (POC)",create:oE}]);aE.enter("command");
