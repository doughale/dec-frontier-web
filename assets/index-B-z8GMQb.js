var pf=Object.defineProperty;var mf=(r,t,e)=>t in r?pf(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var _=(r,t,e)=>mf(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Ce(r,t,e){const n=document.createElement(r);return t&&(n.className=t),e&&e.appendChild(n),n}const gf=[{title:"General",rows:[["`  ·  ☰ MENU","Open this menu / switch scenes"]]},{title:"The Meridian — Command",rows:[["A / D","Yaw left / right"],["W / S","Pitch up / down"],["Q / E","Roll"],["R / F","Throttle up / down"],["X","All-stop"],["C","Bridge / chase camera"],["Shift + Click","Fire (Shift shows the reticle)"],["Click","Select target"],["P","Launch probe"],["1 / 2 / 3","Route power (hold Shift to draw out)"],["0","Balance power"],["7 / 8 / 9","Power presets"],["[ / ]","Cycle weapon"],["\\","Reset HUD layout"]]},{title:"Paladin — Sortie",rows:[["W / S","Fly forward / backward (holds altitude)"],["A / D","Bank-to-turn left / right"],["Q / E","Roll lean (±30°)"],["Shift + A / D","Strafe left / right"],["Shift + W / S","Ascend / descend"],["R / F","Fly forward / backward (alias)"],["X","All-stop"],["Ctrl","Toggle fire mode (gun / rocket)"],["Left mouse","Fire the selected weapon"],["[ / ]  ·  click","Cycle / select weapon (gun · rocket · sniper)"],["Mouse wheel","Scope zoom — Vigil sniper"],["Space","Hold breath — steady the scope"],["N","Night vision"],["\\","Reset HUD layout"]]}];class _f{constructor(t,e,n){_(this,"root");_(this,"panel");_(this,"controlsOverlay");_(this,"rows",new Map);_(this,"open",!1);_(this,"activeId",null);_(this,"onKey",t=>{t.code==="Backquote"&&!t.repeat?(t.preventDefault(),this.toggle()):t.code==="Escape"&&this.controlsOverlay.style.display!=="none"&&this.showControls(!1)});this.onEnter=n,this.root=Ce("div","dev-menu",t);const i=Ce("button","dev-menu-btn",this.root);i.type="button",i.textContent="☰ MENU",i.title="Scenes / options (`)",i.addEventListener("click",()=>this.toggle()),this.panel=Ce("div","dev-menu-panel",this.root),Ce("div","dev-menu-title",this.panel).textContent="DEV · SCENES";for(const a of e){const c=Ce("button","dev-menu-row",this.panel);c.type="button",c.textContent=a.label,c.addEventListener("click",()=>this.onEnter(a.id)),this.rows.set(a.id,c)}const s=Ce("button","dev-menu-row",this.panel);s.type="button",s.textContent="⌨ CONTROLS",s.addEventListener("click",()=>{this.close(),this.showControls(!0)});const o=Ce("div","dev-menu-hint",this.panel);o.textContent="` toggles this menu",this.controlsOverlay=this.buildControls(t),this.setOpen(!1),window.addEventListener("keydown",this.onKey)}buildControls(t){const e=Ce("div","controls-overlay",t);e.style.display="none",e.addEventListener("click",a=>{a.target===e&&this.showControls(!1)});const n=Ce("div","controls-panel",e),i=Ce("div","controls-head",n);Ce("div","controls-title",i).textContent="CONTROLS";const s=Ce("button","controls-close",i);s.type="button",s.textContent="✕",s.addEventListener("click",()=>this.showControls(!1));const o=Ce("div","controls-cols",n);for(const a of gf){const c=Ce("div","controls-section",o);Ce("div","controls-section-title",c).textContent=a.title;for(const[l,h]of a.rows){const u=Ce("div","controls-row",c);Ce("span","controls-keys",u).textContent=l,Ce("span","controls-action",u).textContent=h}}return e}showControls(t){this.controlsOverlay.style.display=t?"":"none"}toggle(){this.setOpen(!this.open)}setOpen(t){this.open=t,this.panel.style.display=t?"":"none"}close(){this.setOpen(!1)}setActive(t){this.activeId=t;for(const[e,n]of this.rows)n.classList.toggle("active",e===this.activeId)}dispose(){window.removeEventListener("keydown",this.onKey),this.controlsOverlay.remove(),this.root.remove()}}class vf{constructor(t,e){_(this,"current",null);_(this,"sceneRoot",null);_(this,"menu");this.host=t,this.scenes=e,this.menu=new _f(t,e.map(n=>({id:n.id,label:n.label})),n=>this.enter(n))}enter(t){var i,s;const e=this.scenes.find(o=>o.id===t);if(!e){console.warn(`App: unknown scene "${t}"`);return}(i=this.current)==null||i.dispose(),this.current=null,(s=this.sceneRoot)==null||s.remove();const n=document.createElement("div");n.className="scene-root",this.host.insertBefore(n,this.menu.root),this.sceneRoot=n,this.current=e.create(n),this.menu.setActive(t),this.menu.close()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="170",as={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,dl=1,yf=2,id=1,Mf=2,Vn=3,$n=0,Je=1,An=2,Yn=0,cs=1,We=2,fl=3,pl=4,Sf=5,Ti=100,bf=101,Tf=102,Ef=103,wf=104,Af=200,Rf=201,Cf=202,Pf=203,Ca=204,Pa=205,If=206,Lf=207,Df=208,Nf=209,Uf=210,Of=211,Ff=212,Bf=213,kf=214,Ia=0,La=1,Da=2,fs=3,Na=4,Ua=5,Oa=6,Fa=7,sd=0,zf=1,Hf=2,hi=0,Vf=1,Gf=2,Wf=3,Xf=4,qf=5,Yf=6,jf=7,ml="attached",Kf="detached",rd=300,ps=301,ms=302,Ba=303,ka=304,vo=306,Pn=1e3,Rn=1001,lo=1002,Oe=1003,od=1004,js=1005,rn=1006,eo=1007,Wn=1008,Zn=1009,ad=1010,cd=1011,tr=1012,Ec=1013,Ri=1014,fn=1015,jn=1016,wc=1017,Ac=1018,gs=1020,ld=35902,hd=1021,ud=1022,on=1023,dd=1024,fd=1025,ls=1026,_s=1027,Rc=1028,Cc=1029,pd=1030,Pc=1031,Ic=1033,no=33776,io=33777,so=33778,ro=33779,za=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,qa=37496,Ya=37808,ja=37809,Ka=37810,$a=37811,Za=37812,Qa=37813,Ja=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,oo=36492,ac=36494,cc=36495,md=36283,lc=36284,hc=36285,uc=36286,gd=2200,$f=2201,Zf=2202,er=2300,nr=2301,Eo=2302,ns=2400,is=2401,ho=2402,Lc=2500,Qf=2501,Jf=0,_d=1,dc=2,tp=3200,ep=3201,vd=0,np=1,ci="",Ie="srgb",Ye="srgb-linear",xo="linear",ue="srgb",Ii=7680,gl=519,ip=512,sp=513,rp=514,xd=515,op=516,ap=517,cp=518,lp=519,fc=35044,Is=35048,_l="300 es",Xn=2e3,uo=2001;class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const Zs=Math.PI/180,vs=180/Math.PI;function Mn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[r&255]+Be[r>>8&255]+Be[r>>16&255]+Be[r>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function De(r,t,e){return Math.max(t,Math.min(e,r))}function Dc(r,t){return(r%t+t)%t}function hp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function up(r,t,e){return r!==t?(e-r)/(t-r):0}function Qs(r,t,e){return(1-e)*r+e*t}function dp(r,t,e,n){return Qs(r,t,1-Math.exp(-e*n))}function fp(r,t=1){return t-Math.abs(Dc(r,t*2)-t)}function pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function mp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function gp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function _p(r,t){return r+Math.random()*(t-r)}function vp(r){return r*(.5-Math.random())}function xp(r){r!==void 0&&(vl=r);let t=vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(r){return r*Zs}function Mp(r){return r*vs}function Sp(r){return(r&r-1)===0&&r!==0}function bp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Tp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ep(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const yd={DEG2RAD:Zs,RAD2DEG:vs,generateUUID:Mn,clamp:De,euclideanModulo:Dc,mapLinear:hp,inverseLerp:up,lerp:Qs,damp:dp,pingpong:fp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:_p,randFloatSpread:vp,seededRandom:xp,degToRad:yp,radToDeg:Mp,isPowerOfTwo:Sp,ceilPowerOfTwo:bp,floorPowerOfTwo:Tp,setQuaternionFromProperEuler:Ep,normalize:le,denormalize:yn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,s,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],S=i[4],x=i[7],P=i[2],C=i[5],A=i[8];return s[0]=o*v+a*y+c*P,s[3]=o*g+a*S+c*C,s[6]=o*p+a*x+c*A,s[1]=l*v+h*y+u*P,s[4]=l*g+h*S+u*C,s[7]=l*p+h*x+u*A,s[2]=d*v+f*y+m*P,s[5]=d*g+f*S+m*C,s[8]=d*p+f*x+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Xt;function Md(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wp(){const r=ir("canvas");return r.style.display="block",r}const xl={};function Ks(r){r in xl||(xl[r]=!0,console.warn(r))}function Ap(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Rp(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cp(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const yl=[.64,.33,.3,.6,.15,.06],Ml=[.2126,.7152,.0722],Sl=[.3127,.329],bl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Ye]:{primaries:yl,whitePoint:Sl,transfer:xo,toXYZ:bl,fromXYZ:Tl,luminanceCoefficients:Ml,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:yl,whitePoint:Sl,transfer:ue,toXYZ:bl,fromXYZ:Tl,luminanceCoefficients:Ml,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let Li;class Pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=ir("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ip=0;class Sd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ao(i[o].image)):s.push(Ao(i[o]))}else s=Ao(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ao(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lp=0;class Ee extends ui{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Rn,i=Rn,s=rn,o=Wn,a=on,c=Zn,l=Ee.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Mn(),this.name="",this.source=new Sd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=rd;Ee.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,P=(p+1)/2,C=(h+d)/4,A=(u+v)/4,I=(m+g)/4;return S>x&&S>P?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=A/n):x>P?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=I/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=A/s,i=I/s),this.set(n,i,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dp extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Dp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bd extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Np extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*v,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),C=Math.atan2(P,p*y);g=Math.sin(g*C)/P,a=Math.sin(a*C)/P}const x=a*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+v*x,g===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new T,El=new Zt;class bn{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),_r.subVectors(this.max,Ls),Di.subVectors(t.a,Ls),Ni.subVectors(t.b,Ls),Ui.subVectors(t.c,Ls),ti.subVectors(Ni,Di),ei.subVectors(Ui,Ni),fi.subVectors(Di,Ui);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-fi.z,fi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,fi.z,0,-fi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-fi.y,fi.x,0];return!Co(e,Di,Ni,Ui,_r)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Di,Ni,Ui,_r))?!1:(vr.crossVectors(ti,ei),e=[vr.x,vr.y,vr.z],Co(e,Di,Ni,Ui,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new T,new T,new T,new T,new T,new T,new T,new T],_n=new T,gr=new bn,Di=new T,Ni=new T,Ui=new T,ti=new T,ei=new T,fi=new T,Ls=new T,_r=new T,vr=new T,pi=new T;function Co(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){pi.fromArray(r,s);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Up=new bn,Ds=new T,Po=new T;class In{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Po)),this.expandByPoint(Ds.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new T,Io=new T,xr=new T,ni=new T,Lo=new T,yr=new T,Do=new T;class hr{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Io.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Io);const s=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=ni.dot(this.direction),c=-ni.dot(xr),l=ni.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Io).addScaledVector(xr,d),f}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,s){Lo.subVectors(e,t),yr.subVectors(n,t),Do.crossVectors(Lo,yr);let o=this.direction.dot(Do),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const c=a*this.direction.dot(yr.crossVectors(ni,yr));if(c<0)return null;const l=a*this.direction.dot(Lo.cross(ni));if(l<0||c+l>o)return null;const h=-a*ni.dot(Do);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,m,v,g){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,m,v,g)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),s=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Fp)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ii.crossVectors(n,en),ii.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ii.crossVectors(n,en)),ii.normalize(),Mr.crossVectors(en,ii),i[0]=ii.x,i[4]=Mr.x,i[8]=en.x,i[1]=ii.y,i[5]=Mr.y,i[9]=en.y,i[2]=ii.z,i[6]=Mr.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],S=n[7],x=n[11],P=n[15],C=i[0],A=i[4],I=i[8],M=i[12],b=i[1],L=i[5],z=i[9],H=i[13],q=i[2],Q=i[6],j=i[10],K=i[14],G=i[3],st=i[7],ct=i[11],ut=i[15];return s[0]=o*C+a*b+c*q+l*G,s[4]=o*A+a*L+c*Q+l*st,s[8]=o*I+a*z+c*j+l*ct,s[12]=o*M+a*H+c*K+l*ut,s[1]=h*C+u*b+d*q+f*G,s[5]=h*A+u*L+d*Q+f*st,s[9]=h*I+u*z+d*j+f*ct,s[13]=h*M+u*H+d*K+f*ut,s[2]=m*C+v*b+g*q+p*G,s[6]=m*A+v*L+g*Q+p*st,s[10]=m*I+v*z+g*j+p*ct,s[14]=m*M+v*H+g*K+p*ut,s[3]=y*C+S*b+x*q+P*G,s[7]=y*A+S*L+x*Q+P*st,s[11]=y*I+S*z+x*j+P*ct,s[15]=y*M+S*H+x*K+P*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+g*(+e*l*u-e*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,S=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,P=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,C=e*y+n*S+i*x+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=y*A,t[1]=(v*d*s-u*g*s-v*i*f+n*g*f+u*i*p-n*d*p)*A,t[2]=(a*g*s-v*c*s+v*i*l-n*g*l-a*i*p+n*c*p)*A,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*A,t[4]=S*A,t[5]=(h*g*s-m*d*s+m*i*f-e*g*f-h*i*p+e*d*p)*A,t[6]=(m*c*s-o*g*s-m*i*l+e*g*l+o*i*p-e*c*p)*A,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*f+e*c*f)*A,t[8]=x*A,t[9]=(m*u*s-h*v*s-m*n*f+e*v*f+h*n*p-e*u*p)*A,t[10]=(o*v*s-m*a*s+m*n*l-e*v*l-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=P*A,t[13]=(h*v*i-m*u*i+m*n*d-e*v*d-h*n*g+e*u*g)*A,t[14]=(m*a*i-o*v*i-m*n*c+e*v*c+o*n*g-e*a*g)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,m=s*u,v=o*h,g=o*u,p=a*u,y=c*l,S=c*h,x=c*u,P=n.x,C=n.y,A=n.z;return i[0]=(1-(v+p))*P,i[1]=(f+x)*P,i[2]=(m-S)*P,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+p))*C,i[6]=(g+y)*C,i[7]=0,i[8]=(m+S)*A,i[9]=(g-y)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),a=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const l=1/s,h=1/o,u=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Xn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===Xn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===uo)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Xn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,f=(n+i)*h;let m,v;if(a===Xn)m=(o+s)*u,v=-2*u;else if(a===uo)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new T,vn=new Ht,Op=new T(0,0,0),Fp=new T(1,1,1),ii=new T,Mr=new T,en=new T,wl=new Ht,Al=new Zt;class Kt{constructor(t=0,e=0,n=0,i=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class Td{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bp=0;const Rl=new T,Fi=new Zt,Bn=new Ht,Sr=new T,Ns=new T,kp=new T,zp=new Zt,Cl=new T(1,0,0),Pl=new T(0,1,0),Il=new T(0,0,1),Ll={type:"added"},Hp={type:"removed"},Bi={type:"childadded",child:null},No={type:"childremoved",child:null};class _e extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new T,e=new Kt,n=new Zt,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Xt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ns,Sr,this.up):Bn.lookAt(Sr,Ns,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new T(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new T,kn=new T,Uo=new T,zn=new T,ki=new T,zi=new T,Dl=new T,Oo=new T,Fo=new T,Bo=new T,ko=new se,zo=new se,Ho=new se;class dn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){xn.subVectors(i,e),kn.subVectors(n,e),Uo.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(kn),c=xn.dot(Uo),l=kn.dot(kn),h=kn.dot(Uo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return ko.setScalar(0),zo.setScalar(0),Ho.setScalar(0),ko.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Ho.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ko,s.x),o.addScaledVector(zo,s.y),o.addScaledVector(Ho,s.z),o}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ki.subVectors(i,n),zi.subVectors(s,n),Oo.subVectors(t,n);const c=ki.dot(Oo),l=zi.dot(Oo);if(c<=0&&l<=0)return e.copy(n);Fo.subVectors(t,i);const h=ki.dot(Fo),u=zi.dot(Fo);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ki,o);Bo.subVectors(t,s);const f=ki.dot(Bo),m=zi.dot(Bo);if(m>=0&&f<=m)return e.copy(s);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(zi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Dl.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Dl,a);const p=1/(g+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(ki,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},br={h:0,s:0,l:0};function Vo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Dc(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Vo(o,s,t+1/3),this.g=Vo(o,s,t),this.b=Vo(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Jt.fromWorkingColorSpace(ke.copy(this),t),Math.round(De(ke.r*255,0,255))*65536+Math.round(De(ke.g*255,0,255))*256+Math.round(De(ke.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,s=ke.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ie){Jt.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(br);const n=Qs(si.h,br.h,e),i=Qs(si.s,br.s,e),s=Qs(si.l,br.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new bt;bt.NAMES=Ed;let Vp=0;class Sn extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Mn(),this.name="",this.blending=cs,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ue extends Sn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new T,Tr=new vt;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class wd extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ad extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gp=0;const ln=new Ht,Go=new _e,Hi=new T,nn=new bn,Us=new bn,Pe=new T;class Re extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?Ad:wd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(nn.min,Us.min),nn.expandByPoint(Pe),Pe.addVectors(nn.max,Us.max),nn.expandByPoint(Pe)):(nn.expandByPoint(Us.min),nn.expandByPoint(Us.max))}nn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Pe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pe.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(t,l),Pe.add(Hi)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new T,c[I]=new T;const l=new T,h=new T,u=new T,d=new vt,f=new vt,m=new vt,v=new T,g=new T;function p(I,M,b){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(v),a[M].add(v),a[b].add(v),c[I].add(g),c[M].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,M=y.length;I<M;++I){const b=y[I],L=b.start,z=b.count;for(let H=L,q=L+z;H<q;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new T,x=new T,P=new T,C=new T;function A(I){P.fromBufferAttribute(i,I),C.copy(P);const M=a[I];S.copy(M),S.sub(P.multiplyScalar(P.dot(M))).normalize(),x.crossVectors(C,M);const L=x.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,M=y.length;I<M;++I){const b=y[I],L=b.start,z=b.count;for(let H=L,q=L+z;H<q;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Ht,mi=new hr,Er=new In,Ul=new T,wr=new T,Ar=new T,Rr=new T,Wo=new T,Cr=new T,Ol=new T,Pr=new T;class Lt extends _e{constructor(t=new Re,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Wo.fromBufferAttribute(u,t),o?Cr.addScaledVector(Wo,h):Cr.addScaledVector(Wo.sub(e),h))}e.add(Cr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(Er.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Er,Ul)===null||mi.origin.distanceToSquared(Ul)>(t.far-t.near)**2))&&(Nl.copy(s).invert(),mi.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,P=S;x<P;x+=3){const C=a.getX(x),A=a.getX(x+1),I=a.getX(x+2);i=Ir(this,p,t,n,l,h,u,C,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);i=Ir(this,o,t,n,l,h,u,y,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,P=S;x<P;x+=3){const C=x,A=x+1,I=x+2;i=Ir(this,p,t,n,l,h,u,C,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=g,S=g+1,x=g+2;i=Ir(this,o,t,n,l,h,u,y,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Wp(r,t,e,n,i,s,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===$n,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:r}}function Ir(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,wr),r.getVertexPosition(c,Ar),r.getVertexPosition(l,Rr);const h=Wp(r,t,e,n,wr,Ar,Rr,Ol);if(h){const u=new T;dn.getBarycoord(Ol,wr,Ar,Rr,u),i&&(h.uv=dn.getInterpolatedAttribute(i,a,c,l,u,new vt)),s&&(h.uv1=dn.getInterpolatedAttribute(s,a,c,l,u,new vt)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new T,materialIndex:0};dn.getNormal(wr,Ar,Rr,d.normal),h.face=d,h.barycoord=u}return h}class ze extends Re{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(v,g,p,y,S,x,P,C,A,I,M){const b=x/A,L=P/I,z=x/2,H=P/2,q=C/2,Q=A+1,j=I+1;let K=0,G=0;const st=new T;for(let ct=0;ct<j;ct++){const ut=ct*L-H;for(let It=0;It<Q;It++){const Qt=It*b-z;st[v]=Qt*y,st[g]=ut*S,st[p]=q,l.push(st.x,st.y,st.z),st[v]=0,st[g]=0,st[p]=C>0?1:-1,h.push(st.x,st.y,st.z),u.push(It/A),u.push(1-ct/I),K+=1}}for(let ct=0;ct<I;ct++)for(let ut=0;ut<A;ut++){const It=d+ut+Q*ct,Qt=d+ut+Q*(ct+1),U=d+(ut+1)+Q*(ct+1),Z=d+(ut+1)+Q*ct;c.push(It,Qt,Z),c.push(Qt,U,Z),G+=6}a.addGroup(f,G,M),f+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(r){const t={};for(let e=0;e<r.length;e++){const n=xs(r[e]);for(const i in n)t[i]=n[i]}return t}function Xp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Rd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const sr={clone:xs,merge:Ve};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Le extends Sn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cd extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new T,Fl=new vt,Bl=new vt;class Ne extends Cd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Fl,Bl),e.subVectors(Bl,Fl)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class jp extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(Vi,Gi,t,e);i.layers=this.layers,this.add(i);const s=new Ne(Vi,Gi,t,e);s.layers=this.layers,this.add(s);const o=new Ne(Vi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new Ne(Vi,Gi,t,e);a.layers=this.layers,this.add(a);const c=new Ne(Vi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new Ne(Vi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Pd extends Ee{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kp extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ze(5,5,5),s=new Le({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Yn});s.uniforms.tEquirect.value=e;const o=new Lt(i,s),a=e.minFilter;return e.minFilter===Wn&&(e.minFilter=rn),new jp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Xo=new T,$p=new T,Zp=new Xt;class ai{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zp.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new In,Lr=new T;class Nc{constructor(t=new ai,e=new ai,n=new ai,i=new ai,s=new ai,o=new ai){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,g-f,x-p).normalize(),n[1].setComponents(c+s,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+y).normalize(),n[3].setComponents(c-o,d-h,g-m,x-y).normalize(),n[4].setComponents(c-a,d-u,g-v,x-S).normalize(),e===Xn)n[5].setComponents(c+a,d+u,g+v,x+S).normalize();else if(e===uo)n[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Id(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Qp(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class Ts extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const y=p*d-o;for(let S=0;S<l;S++){const x=S*u-s;m.push(x,-y,0),v.push(0,0,1),g.push(S/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const S=y+l*p,x=y+l*(p+1),P=y+1+l*(p+1),C=y+1+l*p;f.push(S,x,C),f.push(x,P,C)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,Zm=`struct PhysicalMaterial {
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
}`,Qm=`
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,T0=`#define TOON
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
}`,E0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,P0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Jp,alphahash_pars_fragment:tm,alphamap_fragment:em,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:om,batching_pars_vertex:am,batching_vertex:cm,begin_vertex:lm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:vm,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Em,displacementmap_vertex:wm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Om,fog_pars_vertex:Fm,fog_fragment:Bm,fog_pars_fragment:km,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:jm,lights_phong_pars_fragment:Km,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Qm,lights_fragment_maps:Jm,lights_fragment_end:tg,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:og,map_particle_fragment:ag,map_particle_pars_fragment:cg,metalnessmap_fragment:lg,metalnessmap_pars_fragment:hg,morphinstance_vertex:ug,morphcolor_vertex:dg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:_g,normal_pars_fragment:vg,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Eg,opaque_fragment:wg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Ig,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Og,shadowmask_pars_fragment:Fg,skinbase_vertex:Bg,skinning_pars_vertex:kg,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:$g,worldpos_vertex:Zg,background_vert:Qg,background_frag:Jg,backgroundCube_vert:t0,backgroundCube_frag:e0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distanceRGBA_vert:o0,distanceRGBA_frag:a0,equirect_vert:c0,equirect_frag:l0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:_0,meshnormal_vert:v0,meshnormal_frag:x0,meshphong_vert:y0,meshphong_frag:M0,meshphysical_vert:S0,meshphysical_frag:b0,meshtoon_vert:T0,meshtoon_frag:E0,points_vert:w0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:I0},dt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ve([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new bt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ve([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ve([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ve([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new bt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ve([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ve([dt.points,dt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ve([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ve([dt.common,dt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ve([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ve([dt.sprite,dt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ve([dt.common,dt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ve([dt.lights,dt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Dr={r:0,b:0,g:0},_i=new Kt,L0=new Ht;function D0(r,t,e,n,i,s,o){const a=new bt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function v(y){let S=!1;const x=m(y);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,S){const x=m(S);x&&(x.isCubeTexture||x.mapping===vo)?(h===void 0&&(h=new Lt(new ze(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:xs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(S.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(_i)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ue,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Lt(new Ts(2,2),new Le({name:"BackgroundMaterial",uniforms:xs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Dr,Rd(r)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:g}}function N0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(b,L,z,H,q){let Q=!1;const j=u(H,z,L);s!==j&&(s=j,l(s.object)),Q=f(b,H,z,q),Q&&m(b,H,z,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(b,L,z,H),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return r.createVertexArray()}function l(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,L,z){const H=z.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let Q=q[L.id];Q===void 0&&(Q={},q[L.id]=Q);let j=Q[H];return j===void 0&&(j=d(c()),Q[H]=j),j}function d(b){const L=[],z=[],H=[];for(let q=0;q<e;q++)L[q]=0,z[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,L,z,H){const q=s.attributes,Q=L.attributes;let j=0;const K=z.getAttributes();for(const G in K)if(K[G].location>=0){const ct=q[G];let ut=Q[G];if(ut===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor)),ct===void 0||ct.attribute!==ut||ut&&ct.data!==ut.data)return!0;j++}return s.attributesNum!==j||s.index!==H}function m(b,L,z,H){const q={},Q=L.attributes;let j=0;const K=z.getAttributes();for(const G in K)if(K[G].location>=0){let ct=Q[G];ct===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor));const ut={};ut.attribute=ct,ct&&ct.data&&(ut.data=ct.data),q[G]=ut,j++}s.attributes=q,s.attributesNum=j,s.index=H}function v(){const b=s.newAttributes;for(let L=0,z=b.length;L<z;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const z=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;z[b]=1,H[b]===0&&(r.enableVertexAttribArray(b),H[b]=1),q[b]!==L&&(r.vertexAttribDivisor(b,L),q[b]=L)}function y(){const b=s.newAttributes,L=s.enabledAttributes;for(let z=0,H=L.length;z<H;z++)L[z]!==b[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function S(b,L,z,H,q,Q,j){j===!0?r.vertexAttribIPointer(b,L,z,q,Q):r.vertexAttribPointer(b,L,z,H,q,Q)}function x(b,L,z,H){v();const q=H.attributes,Q=z.getAttributes(),j=L.defaultAttributeValues;for(const K in Q){const G=Q[K];if(G.location>=0){let st=q[K];if(st===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const ct=st.normalized,ut=st.itemSize,It=t.get(st);if(It===void 0)continue;const Qt=It.buffer,U=It.type,Z=It.bytesPerElement,D=U===r.INT||U===r.UNSIGNED_INT||st.gpuType===Ec;if(st.isInterleavedBufferAttribute){const W=st.data,et=W.stride,gt=st.offset;if(W.isInstancedInterleavedBuffer){for(let pt=0;pt<G.locationSize;pt++)p(G.location+pt,W.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pt=0;pt<G.locationSize;pt++)g(G.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let pt=0;pt<G.locationSize;pt++)S(G.location+pt,ut/G.locationSize,U,ct,et*Z,(gt+ut/G.locationSize*pt)*Z,D)}else{if(st.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)p(G.location+W,st.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let W=0;W<G.locationSize;W++)g(G.location+W);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let W=0;W<G.locationSize;W++)S(G.location+W,ut/G.locationSize,U,ct,ut*Z,ut/G.locationSize*W*Z,D)}}else if(j!==void 0){const ct=j[K];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(G.location,ct);break;case 3:r.vertexAttrib3fv(G.location,ct);break;case 4:r.vertexAttrib4fv(G.location,ct);break;default:r.vertexAttrib1fv(G.location,ct)}}}}y()}function P(){I();for(const b in n){const L=n[b];for(const z in L){const H=L[z];for(const q in H)h(H[q].object),delete H[q];delete L[z]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const z in L){const H=L[z];for(const q in H)h(H[q].object),delete H[q];delete L[z]}delete n[b.id]}function A(b){for(const L in n){const z=n[L];if(z[b.id]===void 0)continue;const H=z[b.id];for(const q in H)h(H[q].object),delete H[q];delete z[b.id]}}function I(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function U0(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function O0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==on&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Zn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!I)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:P,maxSamples:C}}function F0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ai,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{const y=s?0:n,S=y*4;let x=p.clippingState||null;c.value=x,x=h(m,d,S,f);for(let P=0;P!==S;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=f;S!==v;++S,x+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function B0(r){let t=new WeakMap;function e(o,a){return a===Ba?o.mapping=ps:a===ka&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===ka)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kp(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class yo extends Cd{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,kl=[.125,.215,.35,.446,.526,.582],Ei=20,qo=new yo,zl=new bt;let Yo=null,jo=0,Ko=0,$o=!1;const bi=(1+Math.sqrt(5))/2,Wi=1/bi,Hl=[new T(-bi,Wi,0),new T(bi,Wi,0),new T(-Wi,0,bi),new T(Wi,0,bi),new T(0,bi,-Wi),new T(0,bi,Wi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,jo,Ko),this._renderer.xr.enabled=$o,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:jn,format:on,colorSpace:Ye,depthBuffer:!1},i=Gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k0(s)),this._blurMaterial=z0(s,t,e)}return i}_compileMaterial(t){const e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i){const a=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zl),h.toneMapping=hi,h.autoClear=!1;const f=new Ue({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new Lt(new ze,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(zl),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Nr(i,y*S,p>2?S:0,S,S),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ps||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hl[(i-s-1)%Hl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Lt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):Ei;g>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);const p=[];let y=0;for(let A=0;A<Ei;++A){const I=A/v,M=Math.exp(-I*I/2);p.push(M),A===0?y+=M:A<g&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;const x=this._sizeLods[i],P=3*x*(i>S-ss?i-S+ss:0),C=4*(this._cubeSize-x);Nr(e,P,C,3*x,2*x),c.setRenderTarget(e),c.render(u,qo)}}function k0(r){const t=[],e=[],n=[];let i=r;const s=r-ss+1+kl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ss?c=kl[o-r+ss-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),S=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,I=C>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(M,v*m*C),S.set(d,g*m*C);const b=[C,C,C,C,C,C];x.set(b,p*m*C)}const P=new Re;P.setAttribute("position",new qe(y,v)),P.setAttribute("uv",new qe(S,g)),P.setAttribute("faceIndex",new qe(x,p)),t.push(P),i>ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gl(r,t,e){const n=new pn(r,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function z0(r,t,e){const n=new Float32Array(Ei),i=new T(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Wl(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Xl(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function H0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ba||c===ka,h=c===ps||c===ms;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Vl(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Vl(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function V0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function G0(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let S=0,x=y.length;S<x;S+=3){const P=y[S+0],C=y[S+1],A=y[S+2];d.push(P,C,C,A,A,P)}}else if(m!==void 0){const y=m.array;v=m.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const P=S+0,C=S+1,A=S+2;d.push(P,C,C,A,A,P)}}else return;const g=new(Md(d)?Ad:wd)(d,1);g.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function W0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function q0(r,t,e){const n=new WeakMap,i=new se;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let P=a.attributes.position.count*x,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*C*4*u),I=new bd(A,P,C,u);I.type=fn,I.needsUpdate=!0;const M=x*4;for(let L=0;L<u;L++){const z=p[L],H=y[L],q=S[L],Q=P*C*4*L;for(let j=0;j<z.count;j++){const K=j*M;m===!0&&(i.fromBufferAttribute(z,j),A[Q+K+0]=i.x,A[Q+K+1]=i.y,A[Q+K+2]=i.z,A[Q+K+3]=0),v===!0&&(i.fromBufferAttribute(H,j),A[Q+K+4]=i.x,A[Q+K+5]=i.y,A[Q+K+6]=i.z,A[Q+K+7]=0),g===!0&&(i.fromBufferAttribute(q,j),A[Q+K+8]=i.x,A[Q+K+9]=i.y,A[Q+K+10]=i.z,A[Q+K+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new vt(P,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Y0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Ld extends Ee{constructor(t,e,n,i,s,o,a,c,l,h=ls){if(h!==ls&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Ri),n===void 0&&h===_s&&(n=gs),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dd=new Ee,ql=new Ld(1,1),Nd=new bd,Ud=new Np,Od=new Pd,Yl=[],jl=[],Kl=new Float32Array(16),$l=new Float32Array(9),Zl=new Float32Array(4);function Es(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Yl[i];if(s===void 0&&(s=new Float32Array(i),Yl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Mo(r,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function j0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function K0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Ae(e,t)}}function $0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Ae(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Ae(e,t)}}function Q0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Zl.set(n),r.uniformMatrix2fv(this.addr,!1,Zl),Ae(e,n)}}function J0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;$l.set(n),r.uniformMatrix3fv(this.addr,!1,$l),Ae(e,n)}}function t_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Kl.set(n),r.uniformMatrix4fv(this.addr,!1,Kl),Ae(e,n)}}function e_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function n_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Ae(e,t)}}function i_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Ae(e,t)}}function s_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Ae(e,t)}}function r_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function o_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Ae(e,t)}}function a_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Ae(e,t)}}function c_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Ae(e,t)}}function l_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ql.compareFunction=xd,s=ql):s=Dd,e.setTexture2D(t||s,i)}function h_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ud,i)}function u_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Od,i)}function d_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nd,i)}function f_(r){switch(r){case 5126:return j0;case 35664:return K0;case 35665:return $0;case 35666:return Z0;case 35674:return Q0;case 35675:return J0;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}function p_(r,t){r.uniform1fv(this.addr,t)}function m_(r,t){const e=Es(t,this.size,2);r.uniform2fv(this.addr,e)}function g_(r,t){const e=Es(t,this.size,3);r.uniform3fv(this.addr,e)}function __(r,t){const e=Es(t,this.size,4);r.uniform4fv(this.addr,e)}function v_(r,t){const e=Es(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function x_(r,t){const e=Es(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function y_(r,t){const e=Es(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function M_(r,t){r.uniform1iv(this.addr,t)}function S_(r,t){r.uniform2iv(this.addr,t)}function b_(r,t){r.uniform3iv(this.addr,t)}function T_(r,t){r.uniform4iv(this.addr,t)}function E_(r,t){r.uniform1uiv(this.addr,t)}function w_(r,t){r.uniform2uiv(this.addr,t)}function A_(r,t){r.uniform3uiv(this.addr,t)}function R_(r,t){r.uniform4uiv(this.addr,t)}function C_(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Dd,s[o])}function P_(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ud,s[o])}function I_(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Od,s[o])}function L_(r,t,e){const n=this.cache,i=t.length,s=Mo(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nd,s[o])}function D_(r){switch(r){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return x_;case 35676:return y_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return T_;case 5125:return E_;case 36294:return w_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}class N_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f_(e.type)}}class U_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D_(e.type)}}class O_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Ql(r,t){r.seq.push(t),r.map[t.id]=t}function F_(r,t,e){const n=r.name,i=n.length;for(Zo.lastIndex=0;;){const s=Zo.exec(n),o=Zo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ql(e,l===void 0?new N_(a,r,t):new U_(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new O_(a),Ql(e,u)),e=u}}}class ao{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);F_(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const B_=37297;let k_=0;function z_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const th=new Xt;function H_(r){Jt._getMatrix(th,Jt.workingColorSpace,r);const t=`mat3( ${th.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(r)){case xo:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function eh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+z_(r.getShaderSource(t),o)}else return i}function V_(r,t){const e=H_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function G_(r,t){let e;switch(t){case Vf:e="Linear";break;case Gf:e="Reinhard";break;case Wf:e="Cineon";break;case Xf:e="ACESFilmic";break;case Yf:e="AgX";break;case jf:e="Neutral";break;case qf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new T;function W_(){Jt.getLuminanceCoefficients(Ur);const r=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function q_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function $s(r){return r!==""}function nh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(r){return r.replace(j_,$_)}const K_=new Map;function $_(r,t){let e=qt[t];if(e===void 0){const n=K_.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(r){return r.replace(Z_,Q_)}function Q_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rh(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function J_(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===id?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function tv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ev(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function nv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sd:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function iv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=J_(e),l=tv(e),h=ev(e),u=nv(e),d=iv(e),f=X_(e),m=q_(s),v=i.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($s).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($s).join(`
`),p.length>0&&(p+=`
`)):(g=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?qt.tonemapping_pars_fragment:"",e.toneMapping!==hi?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=pc(o),o=nh(o,e),o=ih(o,e),a=pc(a),a=nh(a,e),a=ih(a,e),o=sh(o),a=sh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+g+o,x=y+p+a,P=Jl(i,i.VERTEX_SHADER,S),C=Jl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,P),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(L){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),H=i.getShaderInfoLog(P).trim(),q=i.getShaderInfoLog(C).trim();let Q=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,P,C);else{const K=eh(i,P,"vertex"),G=eh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||q==="")&&(j=!1);j&&(L.diagnostics={runnable:Q,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:q,prefix:p}})}i.deleteShader(P),i.deleteShader(C),I=new ao(i,v),M=Y_(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,B_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let rv=0;class ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new av(t),e.set(t,n)),n}}class av{constructor(t){this.id=rv++,this.code=t,this.usedTimes=0}}function cv(r,t,e,n,i,s,o){const a=new Td,c=new ov,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,b,L,z,H){const q=z.fog,Q=H.geometry,j=M.isMeshStandardMaterial?z.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||j),G=K&&K.mapping===vo?K.image.height:null,st=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ct=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ut=ct!==void 0?ct.length:0;let It=0;Q.morphAttributes.position!==void 0&&(It=1),Q.morphAttributes.normal!==void 0&&(It=2),Q.morphAttributes.color!==void 0&&(It=3);let Qt,U,Z,D;if(st){const ce=wn[st];Qt=ce.vertexShader,U=ce.fragmentShader}else Qt=M.vertexShader,U=M.fragmentShader,c.update(M),Z=c.getVertexShaderID(M),D=c.getFragmentShaderID(M);const W=r.getRenderTarget(),et=r.state.buffers.depth.getReversed(),gt=H.isInstancedMesh===!0,pt=H.isBatchedMesh===!0,Ct=!!M.map,St=!!M.matcap,Tt=!!K,F=!!M.aoMap,he=!!M.lightMap,kt=!!M.bumpMap,Ft=!!M.normalMap,Mt=!!M.displacementMap,ee=!!M.emissiveMap,Rt=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,V=M.clearcoat>0,J=M.dispersion>0,nt=M.iridescence>0,N=M.sheen>0,at=M.transmission>0,it=E&&!!M.anisotropyMap,lt=V&&!!M.clearcoatMap,Ot=V&&!!M.clearcoatNormalMap,rt=V&&!!M.clearcoatRoughnessMap,_t=nt&&!!M.iridescenceMap,Dt=nt&&!!M.iridescenceThicknessMap,Nt=N&&!!M.sheenColorMap,yt=N&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,Bt=!!M.specularColorMap,re=!!M.specularIntensityMap,O=at&&!!M.transmissionMap,ot=at&&!!M.thicknessMap,$=!!M.gradientMap,tt=!!M.alphaMap,mt=M.alphaTest>0,ft=!!M.alphaHash,Gt=!!M.extensions;let xe=hi;M.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(xe=r.toneMapping);const Fe={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:Qt,fragmentShader:U,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:D,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:pt,batchingColor:pt&&H._colorsTexture!==null,instancing:gt,instancingColor:gt&&H.instanceColor!==null,instancingMorph:gt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ye,alphaToCoverage:!!M.alphaToCoverage,map:Ct,matcap:St,envMap:Tt,envMapMode:Tt&&K.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:he,bumpMap:kt,normalMap:Ft,displacementMap:d&&Mt,emissiveMap:ee,normalMapObjectSpace:Ft&&M.normalMapType===np,normalMapTangentSpace:Ft&&M.normalMapType===vd,metalnessMap:Rt,roughnessMap:R,anisotropy:E,anisotropyMap:it,clearcoat:V,clearcoatMap:lt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:rt,dispersion:J,iridescence:nt,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:N,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:Vt,specularColorMap:Bt,specularIntensityMap:re,transmission:at,transmissionMap:O,thicknessMap:ot,gradientMap:$,opaque:M.transparent===!1&&M.blending===cs&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:ft,combine:M.combine,mapUv:Ct&&v(M.map.channel),aoMapUv:F&&v(M.aoMap.channel),lightMapUv:he&&v(M.lightMap.channel),bumpMapUv:kt&&v(M.bumpMap.channel),normalMapUv:Ft&&v(M.normalMap.channel),displacementMapUv:Mt&&v(M.displacementMap.channel),emissiveMapUv:ee&&v(M.emissiveMap.channel),metalnessMapUv:Rt&&v(M.metalnessMap.channel),roughnessMapUv:R&&v(M.roughnessMap.channel),anisotropyMapUv:it&&v(M.anisotropyMap.channel),clearcoatMapUv:lt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(M.sheenRoughnessMap.channel),specularMapUv:Vt&&v(M.specularMap.channel),specularColorMapUv:Bt&&v(M.specularColorMap.channel),specularIntensityMapUv:re&&v(M.specularIntensityMap.channel),transmissionMapUv:O&&v(M.transmissionMap.channel),thicknessMapUv:ot&&v(M.thicknessMap.channel),alphaMapUv:tt&&v(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ft||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Ct||tt),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:et,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ue,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ue,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===Je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&M.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)b.push(L),b.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(b,M),S(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const b=m[M.type];let L;if(b){const z=wn[b];L=sr.clone(z.uniforms)}else L=M.uniforms;return L}function P(M,b){let L;for(let z=0,H=h.length;z<H;z++){const q=h[z];if(q.cacheKey===b){L=q,++L.usedTimes;break}}return L===void 0&&(L=new sv(r,b,M,s),h.push(L)),L}function C(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:I}}function lv(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function oh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ah(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,v,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||hv),n.length>1&&n.sort(d||oh),i.length>1&&i.sort(d||oh)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function uv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ah,r.set(n,[o])):i>=s.length?(o=new ah,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function dv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new bt};break;case"SpotLight":e={position:new T,direction:new T,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function fv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let pv=0;function mv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gv(r){const t=new dv,e=fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const i=new T,s=new Ht,o=new Ht;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,S=0,x=0,P=0,C=0,A=0;l.sort(mv);for(let M=0,b=l.length;M<b;M++){const L=l[M],z=L.color,H=L.intensity,q=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],H);A++}else if(L.isDirectionalLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=j,f++}else if(L.isSpotLight){const j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(z).multiplyScalar(H),j.distance=q,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[v]=j;const K=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,K.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Q,x++}v++}else if(L.isRectAreaLight){const j=t.get(L);j.color.copy(z).multiplyScalar(H),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=j,g++}else if(L.isPointLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=j,m++}else if(L.isHemisphereLight){const j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(H),j.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[p]=j,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==P||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,I.directionalLength=f,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=P,I.numLightProbes=A,n.version=pv++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function ch(r){const t=new gv(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function _v(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new ch(r),t.set(i,[a])):s>=o.length?(a=new ch(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class vv extends Sn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xv extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function Sv(r,t,e){let n=new Nc;const i=new vt,s=new vt,o=new se,a=new vv({depthPacking:ep}),c=new xv,l={},h=e.maxTextureSize,u={[$n]:Je,[Je]:$n,[An]:An},d=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:yv,fragmentShader:Mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Re;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let p=this.type;this.render=function(C,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Yn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==Vn&&this.type===Vn,q=p===Vn&&this.type!==Vn;for(let Q=0,j=C.length;Q<j;Q++){const K=C[Q],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,G.mapSize.y=s.y)),G.map===null||H===!0||q===!0){const ut=this.type!==Vn?{minFilter:Oe,magFilter:Oe}:{};G.map!==null&&G.map.dispose(),G.map=new pn(i.x,i.y,ut),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ct=G.getViewportCount();for(let ut=0;ut<ct;ut++){const It=G.getViewport(ut);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),z.viewport(o),G.updateMatrices(K,ut),n=G.getFrustum(),x(A,I,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Vn&&y(G,I),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,b,L)};function y(C,A){const I=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(A,null,I,f,v,null)}function S(C,A,I,M){let b=null;const L=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=b.uuid,H=A.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let Q=q[H];Q===void 0&&(Q=b.clone(),q[H]=Q,A.addEventListener("dispose",P)),b=Q}if(b.visible=A.visible,b.wireframe=A.wireframe,M===Vn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=r.properties.get(b);z.light=I}return b}function x(C,A,I,M,b){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Vn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const H=t.update(C),q=C.material;if(Array.isArray(q)){const Q=H.groups;for(let j=0,K=Q.length;j<K;j++){const G=Q[j],st=q[G.materialIndex];if(st&&st.visible){const ct=S(C,st,M,b);C.onBeforeShadow(r,C,A,I,H,ct,G),r.renderBufferDirect(I,null,H,ct,C,G),C.onAfterShadow(r,C,A,I,H,ct,G)}}}else if(q.visible){const Q=S(C,q,M,b);C.onBeforeShadow(r,C,A,I,H,Q,null),r.renderBufferDirect(I,null,H,Q,C,null),C.onAfterShadow(r,C,A,I,H,Q,null)}}const z=C.children;for(let H=0,q=z.length;H<q;H++)x(z[H],A,I,M,b)}function P(C){C.target.removeEventListener("dispose",P);for(const I in l){const M=l[I],b=C.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const bv={[Ia]:La,[Da]:Oa,[Na]:Fa,[fs]:Ua,[La]:Ia,[Oa]:Da,[Fa]:Na,[Ua]:fs};function Tv(r,t){function e(){let O=!1;const ot=new se;let $=null;const tt=new se(0,0,0,0);return{setMask:function(mt){$!==mt&&!O&&(r.colorMask(mt,mt,mt,mt),$=mt)},setLocked:function(mt){O=mt},setClear:function(mt,ft,Gt,xe,Fe){Fe===!0&&(mt*=xe,ft*=xe,Gt*=xe),ot.set(mt,ft,Gt,xe),tt.equals(ot)===!1&&(r.clearColor(mt,ft,Gt,xe),tt.copy(ot))},reset:function(){O=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,ot=!1,$=null,tt=null,mt=null;return{setReversed:function(ft){if(ot!==ft){const Gt=t.get("EXT_clip_control");ot?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const xe=mt;mt=null,this.setClear(xe)}ot=ft},getReversed:function(){return ot},setTest:function(ft){ft?W(r.DEPTH_TEST):et(r.DEPTH_TEST)},setMask:function(ft){$!==ft&&!O&&(r.depthMask(ft),$=ft)},setFunc:function(ft){if(ot&&(ft=bv[ft]),tt!==ft){switch(ft){case Ia:r.depthFunc(r.NEVER);break;case La:r.depthFunc(r.ALWAYS);break;case Da:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case Na:r.depthFunc(r.EQUAL);break;case Ua:r.depthFunc(r.GEQUAL);break;case Oa:r.depthFunc(r.GREATER);break;case Fa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=ft}},setLocked:function(ft){O=ft},setClear:function(ft){mt!==ft&&(ot&&(ft=1-ft),r.clearDepth(ft),mt=ft)},reset:function(){O=!1,$=null,tt=null,mt=null,ot=!1}}}function i(){let O=!1,ot=null,$=null,tt=null,mt=null,ft=null,Gt=null,xe=null,Fe=null;return{setTest:function(ce){O||(ce?W(r.STENCIL_TEST):et(r.STENCIL_TEST))},setMask:function(ce){ot!==ce&&!O&&(r.stencilMask(ce),ot=ce)},setFunc:function(ce,mn,Nn){($!==ce||tt!==mn||mt!==Nn)&&(r.stencilFunc(ce,mn,Nn),$=ce,tt=mn,mt=Nn)},setOp:function(ce,mn,Nn){(ft!==ce||Gt!==mn||xe!==Nn)&&(r.stencilOp(ce,mn,Nn),ft=ce,Gt=mn,xe=Nn)},setLocked:function(ce){O=ce},setClear:function(ce){Fe!==ce&&(r.clearStencil(ce),Fe=ce)},reset:function(){O=!1,ot=null,$=null,tt=null,mt=null,ft=null,Gt=null,xe=null,Fe=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,S=null,x=null,P=null,C=null,A=new bt(0,0,0),I=0,M=!1,b=null,L=null,z=null,H=null,q=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=K>=2);let st=null,ct={};const ut=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Qt=new se().fromArray(ut),U=new se().fromArray(It);function Z(O,ot,$,tt){const mt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(O,ft),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<$;Gt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(ot+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return ft}const D={};D[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),D[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),D[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(r.DEPTH_TEST),o.setFunc(fs),kt(!1),Ft(dl),W(r.CULL_FACE),F(Yn);function W(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function et(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function gt(O,ot){return u[O]!==ot?(r.bindFramebuffer(O,ot),u[O]=ot,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ot),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ot),!0):!1}function pt(O,ot){let $=f,tt=!1;if(O){$=d.get(ot),$===void 0&&($=[],d.set(ot,$));const mt=O.textures;if($.length!==mt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Gt=mt.length;ft<Gt;ft++)$[ft]=r.COLOR_ATTACHMENT0+ft;$.length=mt.length,tt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,tt=!0);tt&&r.drawBuffers($)}function Ct(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const St={[Ti]:r.FUNC_ADD,[bf]:r.FUNC_SUBTRACT,[Tf]:r.FUNC_REVERSE_SUBTRACT};St[Ef]=r.MIN,St[wf]=r.MAX;const Tt={[Af]:r.ZERO,[Rf]:r.ONE,[Cf]:r.SRC_COLOR,[Ca]:r.SRC_ALPHA,[Uf]:r.SRC_ALPHA_SATURATE,[Df]:r.DST_COLOR,[If]:r.DST_ALPHA,[Pf]:r.ONE_MINUS_SRC_COLOR,[Pa]:r.ONE_MINUS_SRC_ALPHA,[Nf]:r.ONE_MINUS_DST_COLOR,[Lf]:r.ONE_MINUS_DST_ALPHA,[Of]:r.CONSTANT_COLOR,[Ff]:r.ONE_MINUS_CONSTANT_COLOR,[Bf]:r.CONSTANT_ALPHA,[kf]:r.ONE_MINUS_CONSTANT_ALPHA};function F(O,ot,$,tt,mt,ft,Gt,xe,Fe,ce){if(O===Yn){v===!0&&(et(r.BLEND),v=!1);return}if(v===!1&&(W(r.BLEND),v=!0),O!==Sf){if(O!==g||ce!==M){if((p!==Ti||x!==Ti)&&(r.blendEquation(r.FUNC_ADD),p=Ti,x=Ti),ce)switch(O){case cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case We:r.blendFunc(r.ONE,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case We:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,P=null,C=null,A.set(0,0,0),I=0,g=O,M=ce}return}mt=mt||ot,ft=ft||$,Gt=Gt||tt,(ot!==p||mt!==x)&&(r.blendEquationSeparate(St[ot],St[mt]),p=ot,x=mt),($!==y||tt!==S||ft!==P||Gt!==C)&&(r.blendFuncSeparate(Tt[$],Tt[tt],Tt[ft],Tt[Gt]),y=$,S=tt,P=ft,C=Gt),(xe.equals(A)===!1||Fe!==I)&&(r.blendColor(xe.r,xe.g,xe.b,Fe),A.copy(xe),I=Fe),g=O,M=!1}function he(O,ot){O.side===An?et(r.CULL_FACE):W(r.CULL_FACE);let $=O.side===Je;ot&&($=!$),kt($),O.blending===cs&&O.transparent===!1?F(Yn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):et(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(O){b!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),b=O)}function Ft(O){O!==xf?(W(r.CULL_FACE),O!==L&&(O===dl?r.cullFace(r.BACK):O===yf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):et(r.CULL_FACE),L=O}function Mt(O){O!==z&&(j&&r.lineWidth(O),z=O)}function ee(O,ot,$){O?(W(r.POLYGON_OFFSET_FILL),(H!==ot||q!==$)&&(r.polygonOffset(ot,$),H=ot,q=$)):et(r.POLYGON_OFFSET_FILL)}function Rt(O){O?W(r.SCISSOR_TEST):et(r.SCISSOR_TEST)}function R(O){O===void 0&&(O=r.TEXTURE0+Q-1),st!==O&&(r.activeTexture(O),st=O)}function E(O,ot,$){$===void 0&&(st===null?$=r.TEXTURE0+Q-1:$=st);let tt=ct[$];tt===void 0&&(tt={type:void 0,texture:void 0},ct[$]=tt),(tt.type!==O||tt.texture!==ot)&&(st!==$&&(r.activeTexture($),st=$),r.bindTexture(O,ot||D[O]),tt.type=O,tt.texture=ot)}function V(){const O=ct[st];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){Qt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Qt.copy(O))}function yt(O){U.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),U.copy(O))}function Vt(O,ot){let $=l.get(ot);$===void 0&&($=new WeakMap,l.set(ot,$));let tt=$.get(O);tt===void 0&&(tt=r.getUniformBlockIndex(ot,O.name),$.set(O,tt))}function Bt(O,ot){const tt=l.get(ot).get(O);c.get(ot)!==tt&&(r.uniformBlockBinding(ot,tt,O.__bindingPointIndex),c.set(ot,tt))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,ct={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,S=null,x=null,P=null,C=null,A=new bt(0,0,0),I=0,M=!1,b=null,L=null,z=null,H=null,q=null,Qt.set(0,0,r.canvas.width,r.canvas.height),U.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:W,disable:et,bindFramebuffer:gt,drawBuffers:pt,useProgram:Ct,setBlending:F,setMaterial:he,setFlipSided:kt,setCullFace:Ft,setLineWidth:Mt,setPolygonOffset:ee,setScissorTest:Rt,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:_t,texImage3D:Dt,updateUBOMapping:Vt,uniformBlockBinding:Bt,texStorage2D:Ot,texStorage3D:rt,texSubImage2D:N,texSubImage3D:at,compressedTexSubImage2D:it,compressedTexSubImage3D:lt,scissor:Nt,viewport:yt,reset:re}}function lh(r,t,e,n){const i=Ev(n);switch(e){case hd:return r*t;case dd:return r*t;case fd:return r*t*2;case Rc:return r*t/i.components*i.byteLength;case Cc:return r*t/i.components*i.byteLength;case pd:return r*t*2/i.components*i.byteLength;case Pc:return r*t*2/i.components*i.byteLength;case ud:return r*t*3/i.components*i.byteLength;case on:return r*t*4/i.components*i.byteLength;case Ic:return r*t*4/i.components*i.byteLength;case no:case io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(r,16)*Math.max(t,8)/4;case za:case Va:return Math.max(r,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case oo:case ac:case cc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case md:case lc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ev(r){switch(r){case Zn:case ad:return{byteLength:1,components:1};case tr:case cd:case jn:return{byteLength:2,components:1};case wc:case Ac:return{byteLength:2,components:4};case Ri:case Ec:case fn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function wv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return f?new OffscreenCanvas(R,E):ir("canvas")}function v(R,E,V){let J=1;const nt=Rt(R);if((nt.width>V||nt.height>V)&&(J=V/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const N=Math.floor(J*nt.width),at=Math.floor(J*nt.height);u===void 0&&(u=m(N,at));const it=E?m(N,at):u;return it.width=N,it.height=at,it.getContext("2d").drawImage(R,0,0,N,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+N+"x"+at+")."),it}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,E,V,J,nt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let N=E;if(E===r.RED&&(V===r.FLOAT&&(N=r.R32F),V===r.HALF_FLOAT&&(N=r.R16F),V===r.UNSIGNED_BYTE&&(N=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(N=r.R8UI),V===r.UNSIGNED_SHORT&&(N=r.R16UI),V===r.UNSIGNED_INT&&(N=r.R32UI),V===r.BYTE&&(N=r.R8I),V===r.SHORT&&(N=r.R16I),V===r.INT&&(N=r.R32I)),E===r.RG&&(V===r.FLOAT&&(N=r.RG32F),V===r.HALF_FLOAT&&(N=r.RG16F),V===r.UNSIGNED_BYTE&&(N=r.RG8)),E===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(N=r.RG8UI),V===r.UNSIGNED_SHORT&&(N=r.RG16UI),V===r.UNSIGNED_INT&&(N=r.RG32UI),V===r.BYTE&&(N=r.RG8I),V===r.SHORT&&(N=r.RG16I),V===r.INT&&(N=r.RG32I)),E===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(N=r.RGB8UI),V===r.UNSIGNED_SHORT&&(N=r.RGB16UI),V===r.UNSIGNED_INT&&(N=r.RGB32UI),V===r.BYTE&&(N=r.RGB8I),V===r.SHORT&&(N=r.RGB16I),V===r.INT&&(N=r.RGB32I)),E===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(N=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(N=r.RGBA16UI),V===r.UNSIGNED_INT&&(N=r.RGBA32UI),V===r.BYTE&&(N=r.RGBA8I),V===r.SHORT&&(N=r.RGBA16I),V===r.INT&&(N=r.RGBA32I)),E===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(N=r.RGB9_E5),E===r.RGBA){const at=nt?xo:Jt.getTransfer(J);V===r.FLOAT&&(N=r.RGBA32F),V===r.HALF_FLOAT&&(N=r.RGBA16F),V===r.UNSIGNED_BYTE&&(N=at===ue?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(N=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(N=r.RGB5_A1)}return(N===r.R16F||N===r.R32F||N===r.RG16F||N===r.RG32F||N===r.RGBA16F||N===r.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function x(R,E){let V;return R?E===null||E===Ri||E===gs?V=r.DEPTH24_STENCIL8:E===fn?V=r.DEPTH32F_STENCIL8:E===tr&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ri||E===gs?V=r.DEPTH_COMPONENT24:E===fn?V=r.DEPTH_COMPONENT32F:E===tr&&(V=r.DEPTH_COMPONENT16),V}function P(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),I(E),E.isVideoTexture&&h.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),b(E)}function I(R){const E=n.get(R);if(E.__webglInit===void 0)return;const V=R.source,J=d.get(V);if(J){const nt=J[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(R),Object.keys(J).length===0&&d.delete(V)}n.remove(R)}function M(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const V=R.source,J=d.get(V);delete J[E.__cacheKey],o.memory.textures--}function b(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let nt=0;nt<E.__webglFramebuffer[J].length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[J][nt]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,nt=V.length;J<nt;J++){const N=n.get(V[J]);N.__webglTexture&&(r.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(R)}let L=0;function z(){L=0}function H(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Q(R,E){const V=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(V,R,E);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function j(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){U(V,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function K(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){U(V,R,E);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function G(R,E){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const st={[Pn]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[lo]:r.MIRRORED_REPEAT},ct={[Oe]:r.NEAREST,[od]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[eo]:r.LINEAR_MIPMAP_NEAREST,[Wn]:r.LINEAR_MIPMAP_LINEAR},ut={[ip]:r.NEVER,[lp]:r.ALWAYS,[sp]:r.LESS,[xd]:r.LEQUAL,[rp]:r.EQUAL,[cp]:r.GEQUAL,[op]:r.GREATER,[ap]:r.NOTEQUAL};function It(R,E){if(E.type===fn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===eo||E.magFilter===js||E.magFilter===Wn||E.minFilter===rn||E.minFilter===eo||E.minFilter===js||E.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,st[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,st[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,st[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ct[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ct[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Oe||E.minFilter!==js&&E.minFilter!==Wn||E.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Qt(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const J=E.source;let nt=d.get(J);nt===void 0&&(nt={},d.set(J,nt));const N=q(E);if(N!==R.__cacheKey){nt[N]===void 0&&(nt[N]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[N].usedTimes++;const at=nt[R.__cacheKey];at!==void 0&&(nt[R.__cacheKey].usedTimes--,at.usedTimes===0&&M(E)),R.__cacheKey=N,R.__webglTexture=nt[N].texture}return V}function U(R,E,V){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);const nt=Qt(R,E),N=E.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+V);const at=n.get(N);if(N.version!==at.__version||nt===!0){e.activeTexture(r.TEXTURE0+V);const it=Jt.getPrimaries(Jt.workingColorSpace),lt=E.colorSpace===ci?null:Jt.getPrimaries(E.colorSpace),Ot=E.colorSpace===ci||it===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let rt=v(E.image,!1,i.maxTextureSize);rt=ee(E,rt);const _t=s.convert(E.format,E.colorSpace),Dt=s.convert(E.type);let Nt=S(E.internalFormat,_t,Dt,E.colorSpace,E.isVideoTexture);It(J,E);let yt;const Vt=E.mipmaps,Bt=E.isVideoTexture!==!0,re=at.__version===void 0||nt===!0,O=N.dataReady,ot=P(E,rt);if(E.isDepthTexture)Nt=x(E.format===_s,E.type),re&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Nt,rt.width,rt.height,0,_t,Dt,null));else if(E.isDataTexture)if(Vt.length>0){Bt&&re&&e.texStorage2D(r.TEXTURE_2D,ot,Nt,Vt[0].width,Vt[0].height);for(let $=0,tt=Vt.length;$<tt;$++)yt=Vt[$],Bt?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,_t,Dt,yt.data):e.texImage2D(r.TEXTURE_2D,$,Nt,yt.width,yt.height,0,_t,Dt,yt.data);E.generateMipmaps=!1}else Bt?(re&&e.texStorage2D(r.TEXTURE_2D,ot,Nt,rt.width,rt.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Dt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,rt.width,rt.height,0,_t,Dt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Nt,Vt[0].width,Vt[0].height,rt.depth);for(let $=0,tt=Vt.length;$<tt;$++)if(yt=Vt[$],E.format!==on)if(_t!==null)if(Bt){if(O)if(E.layerUpdates.size>0){const mt=lh(yt.width,yt.height,E.format,E.type);for(const ft of E.layerUpdates){const Gt=yt.data.subarray(ft*mt/yt.data.BYTES_PER_ELEMENT,(ft+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ft,yt.width,yt.height,1,_t,Gt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,rt.depth,_t,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Nt,yt.width,yt.height,rt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,rt.depth,_t,Dt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Nt,yt.width,yt.height,rt.depth,0,_t,Dt,yt.data)}else{Bt&&re&&e.texStorage2D(r.TEXTURE_2D,ot,Nt,Vt[0].width,Vt[0].height);for(let $=0,tt=Vt.length;$<tt;$++)yt=Vt[$],E.format!==on?_t!==null?Bt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,_t,Dt,yt.data):e.texImage2D(r.TEXTURE_2D,$,Nt,yt.width,yt.height,0,_t,Dt,yt.data)}else if(E.isDataArrayTexture)if(Bt){if(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Nt,rt.width,rt.height,rt.depth),O)if(E.layerUpdates.size>0){const $=lh(rt.width,rt.height,E.format,E.type);for(const tt of E.layerUpdates){const mt=rt.data.subarray(tt*$/rt.data.BYTES_PER_ELEMENT,(tt+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,_t,Dt,mt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Dt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,_t,Dt,rt.data);else if(E.isData3DTexture)Bt?(re&&e.texStorage3D(r.TEXTURE_3D,ot,Nt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Dt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,_t,Dt,rt.data);else if(E.isFramebufferTexture){if(re)if(Bt)e.texStorage2D(r.TEXTURE_2D,ot,Nt,rt.width,rt.height);else{let $=rt.width,tt=rt.height;for(let mt=0;mt<ot;mt++)e.texImage2D(r.TEXTURE_2D,mt,Nt,$,tt,0,_t,Dt,null),$>>=1,tt>>=1}}else if(Vt.length>0){if(Bt&&re){const $=Rt(Vt[0]);e.texStorage2D(r.TEXTURE_2D,ot,Nt,$.width,$.height)}for(let $=0,tt=Vt.length;$<tt;$++)yt=Vt[$],Bt?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,_t,Dt,yt):e.texImage2D(r.TEXTURE_2D,$,Nt,_t,Dt,yt);E.generateMipmaps=!1}else if(Bt){if(re){const $=Rt(rt);e.texStorage2D(r.TEXTURE_2D,ot,Nt,$.width,$.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Dt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Nt,_t,Dt,rt);g(E)&&p(J),at.__version=N.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Z(R,E,V){if(E.image.length!==6)return;const J=Qt(R,E),nt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const N=n.get(nt);if(nt.version!==N.__version||J===!0){e.activeTexture(r.TEXTURE0+V);const at=Jt.getPrimaries(Jt.workingColorSpace),it=E.colorSpace===ci?null:Jt.getPrimaries(E.colorSpace),lt=E.colorSpace===ci||at===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!Ot&&!rt?_t[tt]=v(E.image[tt],!0,i.maxCubemapSize):_t[tt]=rt?E.image[tt].image:E.image[tt],_t[tt]=ee(E,_t[tt]);const Dt=_t[0],Nt=s.convert(E.format,E.colorSpace),yt=s.convert(E.type),Vt=S(E.internalFormat,Nt,yt,E.colorSpace),Bt=E.isVideoTexture!==!0,re=N.__version===void 0||J===!0,O=nt.dataReady;let ot=P(E,Dt);It(r.TEXTURE_CUBE_MAP,E);let $;if(Ot){Bt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,Vt,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){$=_t[tt].mipmaps;for(let mt=0;mt<$.length;mt++){const ft=$[mt];E.format!==on?Nt!==null?Bt?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ft.width,ft.height,Nt,yt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Vt,ft.width,ft.height,0,Nt,yt,ft.data)}}}else{if($=E.mipmaps,Bt&&re){$.length>0&&ot++;const tt=Rt(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,Vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Bt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Nt,yt,_t[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,_t[tt].width,_t[tt].height,0,Nt,yt,_t[tt].data);for(let mt=0;mt<$.length;mt++){const Gt=$[mt].image[tt].image;Bt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Gt.width,Gt.height,Nt,yt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Vt,Gt.width,Gt.height,0,Nt,yt,Gt.data)}}else{Bt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,yt,_t[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,Nt,yt,_t[tt]);for(let mt=0;mt<$.length;mt++){const ft=$[mt];Bt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Nt,yt,ft.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Vt,Nt,yt,ft.image[tt])}}}g(E)&&p(r.TEXTURE_CUBE_MAP),N.__version=nt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function D(R,E,V,J,nt,N){const at=s.convert(V.format,V.colorSpace),it=s.convert(V.type),lt=S(V.internalFormat,at,it,V.colorSpace),Ot=n.get(E),rt=n.get(V);if(rt.__renderTarget=E,!Ot.__hasExternalTextures){const _t=Math.max(1,E.width>>N),Dt=Math.max(1,E.height>>N);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,N,lt,_t,Dt,E.depth,0,at,it,null):e.texImage2D(nt,N,lt,_t,Dt,0,at,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ft(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,nt,rt.__webglTexture,0,kt(E)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,nt,rt.__webglTexture,N),e.bindFramebuffer(r.FRAMEBUFFER,null)}function W(R,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const J=E.depthTexture,nt=J&&J.isDepthTexture?J.type:null,N=x(E.stencilBuffer,nt),at=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=kt(E);Ft(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,N,E.width,E.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,N,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,N,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,R)}else{const J=E.textures;for(let nt=0;nt<J.length;nt++){const N=J[nt],at=s.convert(N.format,N.colorSpace),it=s.convert(N.type),lt=S(N.internalFormat,at,it,N.colorSpace),Ot=kt(E);V&&Ft(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,lt,E.width,E.height):Ft(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot,lt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,lt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function et(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const nt=J.__webglTexture,N=kt(E);if(E.depthTexture.format===ls)Ft(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(E.depthTexture.format===_s)Ft(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function gt(R){const E=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");et(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=r.createRenderbuffer(),W(E.__webglDepthbuffer[J],R,!1);else{const nt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=E.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,N),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,N)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),W(E.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,nt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(R,E,V){const J=n.get(R);E!==void 0&&D(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&gt(R)}function Ct(R){const E=R.texture,V=n.get(R),J=n.get(E);R.addEventListener("dispose",A);const nt=R.textures,N=R.isWebGLCubeRenderTarget===!0,at=nt.length>1;if(at||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,o.memory.textures++),N){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let lt=0;lt<E.mipmaps.length;lt++)V.__webglFramebuffer[it][lt]=r.createFramebuffer()}else V.__webglFramebuffer[it]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)V.__webglFramebuffer[it]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(at)for(let it=0,lt=nt.length;it<lt;it++){const Ot=n.get(nt[it]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Ft(R)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){const lt=nt[it];V.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[it]);const Ot=s.convert(lt.format,lt.colorSpace),rt=s.convert(lt.type),_t=S(lt.internalFormat,Ot,rt,lt.colorSpace,R.isXRRenderTarget===!0),Dt=kt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,_t,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,V.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),W(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(N){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),It(r.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let lt=0;lt<E.mipmaps.length;lt++)D(V.__webglFramebuffer[it][lt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt);else D(V.__webglFramebuffer[it],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);g(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let it=0,lt=nt.length;it<lt;it++){const Ot=nt[it],rt=n.get(Ot);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),It(r.TEXTURE_2D,Ot),D(V.__webglFramebuffer,R,Ot,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),g(Ot)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),It(it,E),E.mipmaps&&E.mipmaps.length>0)for(let lt=0;lt<E.mipmaps.length;lt++)D(V.__webglFramebuffer[lt],R,E,r.COLOR_ATTACHMENT0,it,lt);else D(V.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,it,0);g(E)&&p(it),e.unbindTexture()}R.depthBuffer&&gt(R)}function St(R){const E=R.textures;for(let V=0,J=E.length;V<J;V++){const nt=E[V];if(g(nt)){const N=y(R),at=n.get(nt).__webglTexture;e.bindTexture(N,at),p(N),e.unbindTexture()}}}const Tt=[],F=[];function he(R){if(R.samples>0){if(Ft(R)===!1){const E=R.textures,V=R.width,J=R.height;let nt=r.COLOR_BUFFER_BIT;const N=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(R),it=E.length>1;if(it)for(let lt=0;lt<E.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);const Ot=n.get(E[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,V,J,0,0,V,J,nt,r.NEAREST),c===!0&&(Tt.length=0,F.length=0,Tt.push(r.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Tt.push(N),F.push(N),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let lt=0;lt<E.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);const Ot=n.get(E[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function kt(R){return Math.min(i.maxSamples,R.samples)}function Ft(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ee(R,E){const V=R.colorSpace,J=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Ye&&V!==ci&&(Jt.getTransfer(V)===ue?(J!==on||nt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=pt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=D,this.useMultisampledRTT=Ft}function Av(r,t){function e(n,i=ci){let s;const o=Jt.getTransfer(i);if(n===Zn)return r.UNSIGNED_BYTE;if(n===wc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return r.BYTE;if(n===cd)return r.SHORT;if(n===tr)return r.UNSIGNED_SHORT;if(n===Ec)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===fn)return r.FLOAT;if(n===jn)return r.HALF_FLOAT;if(n===hd)return r.ALPHA;if(n===ud)return r.RGB;if(n===on)return r.RGBA;if(n===dd)return r.LUMINANCE;if(n===fd)return r.LUMINANCE_ALPHA;if(n===ls)return r.DEPTH_COMPONENT;if(n===_s)return r.DEPTH_STENCIL;if(n===Rc)return r.RED;if(n===Cc)return r.RED_INTEGER;if(n===pd)return r.RG;if(n===Pc)return r.RG_INTEGER;if(n===Ic)return r.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ha||n===Va||n===Ga)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wa||n===Xa)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===ja||n===Ka||n===$a||n===Za||n===Qa||n===Ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ya)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===ac||n===cc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oo)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===lc||n===hc||n===uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===oo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Rv extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
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

}`;class Lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Le({vertexShader:Pv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dv extends ui{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const v=new Lv,g=e.getContextAttributes();let p=null,y=null;const S=[],x=[],P=new vt;let C=null;const A=new Ne;A.viewport=new se;const I=new Ne;I.viewport=new se;const M=[A,I],b=new Rv;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=S[U];return Z===void 0&&(Z=new Qo,S[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=S[U];return Z===void 0&&(Z=new Qo,S[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=S[U];return Z===void 0&&(Z=new Qo,S[U]=Z),Z.getHandSpace()};function H(U){const Z=x.indexOf(U.inputSource);if(Z===-1)return;const D=S[Z];D!==void 0&&(D.update(U.inputSource,U.frame,l||o),D.dispatchEvent({type:U.type,data:U.inputSource}))}function q(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Q);for(let U=0;U<S.length;U++){const Z=x[U];Z!==null&&(x[U]=null,S[U].disconnect(Z))}L=null,z=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const Z={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pn(f.framebufferWidth,f.framebufferHeight,{format:on,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,D=null,W=null;g.depth&&(W=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?_s:ls,D=g.stencil?gs:Ri);const et={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new pn(d.textureWidth,d.textureHeight,{format:on,type:Zn,depthTexture:new Ld(d.textureWidth,d.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(U){for(let Z=0;Z<U.removed.length;Z++){const D=U.removed[Z],W=x.indexOf(D);W>=0&&(x[W]=null,S[W].disconnect(D))}for(let Z=0;Z<U.added.length;Z++){const D=U.added[Z];let W=x.indexOf(D);if(W===-1){for(let gt=0;gt<S.length;gt++)if(gt>=x.length){x.push(D),W=gt;break}else if(x[gt]===null){x[gt]=D,W=gt;break}if(W===-1)break}const et=S[W];et&&et.connect(D)}}const j=new T,K=new T;function G(U,Z,D){j.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(D.matrixWorld);const W=j.distanceTo(K),et=Z.projectionMatrix.elements,gt=D.projectionMatrix.elements,pt=et[14]/(et[10]-1),Ct=et[14]/(et[10]+1),St=(et[9]+1)/et[5],Tt=(et[9]-1)/et[5],F=(et[8]-1)/et[0],he=(gt[8]+1)/gt[0],kt=pt*F,Ft=pt*he,Mt=W/(-F+he),ee=Mt*-F;if(Z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ee),U.translateZ(Mt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),et[10]===-1)U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Rt=pt+Mt,R=Ct+Mt,E=kt-ee,V=Ft+(W-ee),J=St*Ct/R*Rt,nt=Tt*Ct/R*Rt;U.projectionMatrix.makePerspective(E,V,J,nt,Rt,R),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function st(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let Z=U.near,D=U.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(D=v.depthFar)),b.near=I.near=A.near=Z,b.far=I.far=A.far=D,(L!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,z=b.far),A.layers.mask=U.layers.mask|2,I.layers.mask=U.layers.mask|4,b.layers.mask=A.layers.mask|I.layers.mask;const W=U.parent,et=b.cameras;st(b,W);for(let gt=0;gt<et.length;gt++)st(et[gt],W);et.length===2?G(b,A,I):b.projectionMatrix.copy(A.projectionMatrix),ct(U,b,W)};function ct(U,Z,D){D===null?U.matrix.copy(Z.matrixWorld):(U.matrix.copy(D.matrixWorld),U.matrix.invert(),U.matrix.multiply(Z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=vs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ut=null;function It(U,Z){if(h=Z.getViewerPose(l||o),m=Z,h!==null){const D=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let W=!1;D.length!==b.cameras.length&&(b.cameras.length=0,W=!0);for(let gt=0;gt<D.length;gt++){const pt=D[gt];let Ct=null;if(f!==null)Ct=f.getViewport(pt);else{const Tt=u.getViewSubImage(d,pt);Ct=Tt.viewport,gt===0&&(t.setRenderTargetTextures(y,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(y))}let St=M[gt];St===void 0&&(St=new Ne,St.layers.enable(gt),St.viewport=new se,M[gt]=St),St.matrix.fromArray(pt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(pt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),gt===0&&(b.matrix.copy(St.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),W===!0&&b.cameras.push(St)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){const gt=u.getDepthInformation(D[0]);gt&&gt.isValid&&gt.texture&&v.init(t,gt,i.renderState)}}for(let D=0;D<S.length;D++){const W=x[D],et=S[D];W!==null&&et!==void 0&&et.update(W,Z,l||o)}ut&&ut(U,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const Qt=new Id;Qt.setAnimationLoop(It),this.setAnimationLoop=function(U){ut=U},this.dispose=function(){}}}const vi=new Kt,Nv=new Ht;function Uv(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Rd(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,x=y.envMapRotation;S&&(g.envMap.value=S,vi.copy(x),vi.x*=-1,vi.y*=-1,vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(vi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ov(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function l(y,S){let x=i[y.id];x===void 0&&(m(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const P=S.program;n.updateUBOMapping(y,P);const C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function h(y){const S=u();y.__bindingPointIndex=S;const x=r.createBuffer(),P=y.__size,C=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,P,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=i[y.id],x=y.uniforms,P=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let C=0,A=x.length;C<A;C++){const I=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,b=I.length;M<b;M++){const L=I[M];if(f(L,C,M,P)===!0){const z=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let Q=0;Q<H.length;Q++){const j=H[Q],K=v(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,z+q,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,x,P){const C=y.value,A=S+"_"+x;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const I=P[A];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return P[A]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function m(y){const S=y.uniforms;let x=0;const P=16;for(let A=0,I=S.length;A<I;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,L=M.length;b<L;b++){const z=M[b],H=Array.isArray(z.value)?z.value:[z.value];for(let q=0,Q=H.length;q<Q;q++){const j=H[q],K=v(j),G=x%P,st=G%K.boundary,ct=G+st;x+=st,ct!==0&&P-ct<K.storage&&(x+=P-ct),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=K.storage}}}const C=x%P;return C>0&&(x+=P-C),y.__size=x,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function g(y){const S=y.target;S.removeEventListener("dispose",g);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Oc{constructor(t={}){const{canvas:e=wp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=hi,this.toneMappingExposure=1;const x=this;let P=!1,C=0,A=0,I=null,M=-1,b=null;const L=new se,z=new se;let H=null;const q=new bt(0);let Q=0,j=e.width,K=e.height,G=1,st=null,ct=null;const ut=new se(0,0,j,K),It=new se(0,0,j,K);let Qt=!1;const U=new Nc;let Z=!1,D=!1;const W=new Ht,et=new Ht,gt=new T,pt=new se,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Tt(){return I===null?G:1}let F=n;function he(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){const B="webgl2";if(F=he(B,w),F===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Ft,Mt,ee,Rt,R,E,V,J,nt,N,at,it,lt,Ot,rt,_t,Dt,Nt,yt,Vt,Bt,re,O;function ot(){kt=new V0(F),kt.init(),Bt=new Av(F,kt),Ft=new O0(F,kt,t,Bt),Mt=new Tv(F,kt),Ft.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),ee=new X0(F),Rt=new lv,R=new wv(F,kt,Mt,Rt,Ft,Bt,ee),E=new B0(x),V=new H0(x),J=new Qp(F),re=new N0(F,J),nt=new G0(F,J,ee,re),N=new Y0(F,nt,J,ee),Nt=new q0(F,Ft,R),rt=new F0(Rt),at=new cv(x,E,V,kt,Ft,re,rt),it=new Uv(x,Rt),lt=new uv,Ot=new _v(kt),Dt=new D0(x,E,V,Mt,N,f,c),_t=new Sv(x,N,Ft),O=new Ov(F,ee,Ft,Mt),yt=new U0(F,kt,ee),Vt=new W0(F,kt,ee),ee.programs=at.programs,x.capabilities=Ft,x.extensions=kt,x.properties=Rt,x.renderLists=lt,x.shadowMap=_t,x.state=Mt,x.info=ee}ot();const $=new Dv(x,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(j,K,!1))},this.getSize=function(w){return w.set(j,K)},this.setSize=function(w,B,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,K=B,e.width=Math.floor(w*G),e.height=Math.floor(B*G),X===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(j*G,K*G).floor()},this.setDrawingBufferSize=function(w,B,X){j=w,K=B,G=X,e.width=Math.floor(w*X),e.height=Math.floor(B*X),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,B,X,Y){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,B,X,Y),Mt.viewport(L.copy(ut).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(It)},this.setScissor=function(w,B,X,Y){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,B,X,Y),Mt.scissor(z.copy(It).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){Mt.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,B=!0,X=!0){let Y=0;if(w){let k=!1;if(I!==null){const ht=I.texture.format;k=ht===Ic||ht===Pc||ht===Cc}if(k){const ht=I.texture.type,xt=ht===Zn||ht===Ri||ht===tr||ht===gs||ht===wc||ht===Ac,Et=Dt.getClearColor(),wt=Dt.getClearAlpha(),zt=Et.r,Wt=Et.g,At=Et.b;xt?(m[0]=zt,m[1]=Wt,m[2]=At,m[3]=wt,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=zt,v[1]=Wt,v[2]=At,v[3]=wt,F.clearBufferiv(F.COLOR,0,v))}else Y|=F.COLOR_BUFFER_BIT}B&&(Y|=F.DEPTH_BUFFER_BIT),X&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),lt.dispose(),Ot.dispose(),Rt.dispose(),E.dispose(),V.dispose(),N.dispose(),re.dispose(),O.dispose(),at.dispose(),$.dispose(),$.removeEventListener("sessionstart",sl),$.removeEventListener("sessionend",rl),di.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ee.autoReset,B=_t.enabled,X=_t.autoUpdate,Y=_t.needsUpdate,k=_t.type;ot(),ee.autoReset=w,_t.enabled=B,_t.autoUpdate=X,_t.needsUpdate=Y,_t.type=k}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Gt(w){const B=w.target;B.removeEventListener("dispose",Gt),xe(B)}function xe(w){Fe(w),Rt.remove(w)}function Fe(w){const B=Rt.get(w).programs;B!==void 0&&(B.forEach(function(X){at.releaseProgram(X)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,X,Y,k,ht){B===null&&(B=Ct);const xt=k.isMesh&&k.matrixWorld.determinant()<0,Et=uf(w,B,X,Y,k);Mt.setMaterial(Y,xt);let wt=X.index,zt=1;if(Y.wireframe===!0){if(wt=nt.getWireframeAttribute(X),wt===void 0)return;zt=2}const Wt=X.drawRange,At=X.attributes.position;let ie=Wt.start*zt,fe=(Wt.start+Wt.count)*zt;ht!==null&&(ie=Math.max(ie,ht.start*zt),fe=Math.min(fe,(ht.start+ht.count)*zt)),wt!==null?(ie=Math.max(ie,0),fe=Math.min(fe,wt.count)):At!=null&&(ie=Math.max(ie,0),fe=Math.min(fe,At.count));const me=fe-ie;if(me<0||me===1/0)return;re.setup(k,Y,Et,X,wt);let je,oe=yt;if(wt!==null&&(je=J.get(wt),oe=Vt,oe.setIndex(je)),k.isMesh)Y.wireframe===!0?(Mt.setLineWidth(Y.wireframeLinewidth*Tt()),oe.setMode(F.LINES)):oe.setMode(F.TRIANGLES);else if(k.isLine){let Pt=Y.linewidth;Pt===void 0&&(Pt=1),Mt.setLineWidth(Pt*Tt()),k.isLineSegments?oe.setMode(F.LINES):k.isLineLoop?oe.setMode(F.LINE_LOOP):oe.setMode(F.LINE_STRIP)}else k.isPoints?oe.setMode(F.POINTS):k.isSprite&&oe.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,Un=k._multiDrawCounts,ae=k._multiDrawCount,gn=wt?J.get(wt).bytesPerElement:1,Pi=Rt.get(Y).currentProgram.getUniforms();for(let tn=0;tn<ae;tn++)Pi.setValue(F,"_gl_DrawID",tn),oe.render(Pt[tn]/gn,Un[tn])}else if(k.isInstancedMesh)oe.renderInstances(ie,me,k.count);else if(X.isInstancedBufferGeometry){const Pt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Un=Math.min(X.instanceCount,Pt);oe.renderInstances(ie,me,Un)}else oe.render(ie,me)};function ce(w,B,X){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,mr(w,B,X),w.side=$n,w.needsUpdate=!0,mr(w,B,X),w.side=An):mr(w,B,X)}this.compile=function(w,B,X=null){X===null&&(X=w),p=Ot.get(X),p.init(B),S.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==X&&w.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Y=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ht=k.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){const Et=ht[xt];ce(Et,X,k),Y.add(Et)}else ce(ht,X,k),Y.add(ht)}),S.pop(),p=null,Y},this.compileAsync=function(w,B,X=null){const Y=this.compile(w,B,X);return new Promise(k=>{function ht(){if(Y.forEach(function(xt){Rt.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){k(w);return}setTimeout(ht,10)}kt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let mn=null;function Nn(w){mn&&mn(w)}function sl(){di.stop()}function rl(){di.start()}const di=new Id;di.setAnimationLoop(Nn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(w){mn=w,$.setAnimationLoop(w),w===null?di.stop():di.start()},$.addEventListener("sessionstart",sl),$.addEventListener("sessionend",rl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,I),p=Ot.get(w,S.length),p.init(B),S.push(p),et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),U.setFromProjectionMatrix(et),D=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,D),g=lt.get(w,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&To(ht,B,-1/0,x.sortObjects)}To(w,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ct),St=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,St&&Dt.addToRenderList(g,w),this.info.render.frame++,Z===!0&&rt.beginShadows();const X=p.state.shadowsArray;_t.render(X,w,B),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ht=B.cameras;if(k.length>0)for(let xt=0,Et=ht.length;xt<Et;xt++){const wt=ht[xt];al(Y,k,w,wt)}St&&Dt.render(w);for(let xt=0,Et=ht.length;xt<Et;xt++){const wt=ht[xt];ol(g,w,wt,wt.viewport)}}else k.length>0&&al(Y,k,w,B),St&&Dt.render(w),ol(g,w,B);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(x,w,B),re.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],Z===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function To(w,B,X,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){Y&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const xt=N.update(w),Et=w.material;Et.visible&&g.push(w,xt,Et,X,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){const xt=N.update(w),Et=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),pt.copy(xt.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(Et)){const wt=xt.groups;for(let zt=0,Wt=wt.length;zt<Wt;zt++){const At=wt[zt],ie=Et[At.materialIndex];ie&&ie.visible&&g.push(w,xt,ie,X,pt.z,At)}}else Et.visible&&g.push(w,xt,Et,X,pt.z,null)}}const ht=w.children;for(let xt=0,Et=ht.length;xt<Et;xt++)To(ht[xt],B,X,Y)}function ol(w,B,X,Y){const k=w.opaque,ht=w.transmissive,xt=w.transparent;p.setupLightsView(X),Z===!0&&rt.setGlobalState(x.clippingPlanes,X),Y&&Mt.viewport(L.copy(Y)),k.length>0&&pr(k,B,X),ht.length>0&&pr(ht,B,X),xt.length>0&&pr(xt,B,X),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function al(w,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new pn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?jn:Zn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ht=p.state.transmissionRenderTarget[Y.id],xt=Y.viewport||L;ht.setSize(xt.z,xt.w);const Et=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(q),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),St&&Dt.render(X);const wt=x.toneMapping;x.toneMapping=hi;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Z===!0&&rt.setGlobalState(x.clippingPlanes,Y),pr(w,X,Y),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let At=0,ie=B.length;At<ie;At++){const fe=B[At],me=fe.object,je=fe.geometry,oe=fe.material,Pt=fe.group;if(oe.side===An&&me.layers.test(Y.layers)){const Un=oe.side;oe.side=Je,oe.needsUpdate=!0,cl(me,X,Y,je,oe,Pt),oe.side=Un,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht))}x.setRenderTarget(Et),x.setClearColor(q,Q),zt!==void 0&&(Y.viewport=zt),x.toneMapping=wt}function pr(w,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ht=w.length;k<ht;k++){const xt=w[k],Et=xt.object,wt=xt.geometry,zt=Y===null?xt.material:Y,Wt=xt.group;Et.layers.test(X.layers)&&cl(Et,B,X,wt,zt,Wt)}}function cl(w,B,X,Y,k,ht){w.onBeforeRender(x,B,X,Y,k,ht),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,B,X,Y,w,ht),k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=Je,k.needsUpdate=!0,x.renderBufferDirect(X,B,Y,k,w,ht),k.side=$n,k.needsUpdate=!0,x.renderBufferDirect(X,B,Y,k,w,ht),k.side=An):x.renderBufferDirect(X,B,Y,k,w,ht),w.onAfterRender(x,B,X,Y,k,ht)}function mr(w,B,X){B.isScene!==!0&&(B=Ct);const Y=Rt.get(w),k=p.state.lights,ht=p.state.shadowsArray,xt=k.state.version,Et=at.getParameters(w,k.state,ht,B,X),wt=at.getProgramCacheKey(Et);let zt=Y.programs;Y.environment=w.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",Gt),zt=new Map,Y.programs=zt);let Wt=zt.get(wt);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===xt)return hl(w,Et),Wt}else Et.uniforms=at.getUniforms(w),w.onBeforeCompile(Et,x),Wt=at.acquireProgram(Et,wt),zt.set(wt,Wt),Y.uniforms=Et.uniforms;const At=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=rt.uniform),hl(w,Et),Y.needsLights=ff(w),Y.lightsStateVersion=xt,Y.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMap.value=k.state.directionalShadowMap,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotShadowMap.value=k.state.spotShadowMap,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMap.value=k.state.pointShadowMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function ll(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=ao.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function hl(w,B){const X=Rt.get(w);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function uf(w,B,X,Y,k){B.isScene!==!0&&(B=Ct),R.resetTextureUnits();const ht=B.fog,xt=Y.isMeshStandardMaterial?B.environment:null,Et=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ye,wt=(Y.isMeshStandardMaterial?V:E).get(Y.envMap||xt),zt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,fe=!!X.morphAttributes.color;let me=hi;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(me=x.toneMapping);const je=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=je!==void 0?je.length:0,Pt=Rt.get(Y),Un=p.state.lights;if(Z===!0&&(D===!0||w!==b)){const cn=w===b&&Y.id===M;rt.setState(Y,w,cn)}let ae=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Un.state.version||Pt.outputColorSpace!==Et||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==wt||Y.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==Wt||Pt.morphTargets!==At||Pt.morphNormals!==ie||Pt.morphColors!==fe||Pt.toneMapping!==me||Pt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Pt.__version=Y.version);let gn=Pt.currentProgram;ae===!0&&(gn=mr(Y,B,k));let Pi=!1,tn=!1,Cs=!1;const ge=gn.getUniforms(),Tn=Pt.uniforms;if(Mt.useProgram(gn.program)&&(Pi=!0,tn=!0,Cs=!0),Y.id!==M&&(M=Y.id,tn=!0),Pi||b!==w){Mt.buffers.depth.getReversed()?(W.copy(w.projectionMatrix),Rp(W),Cp(W),ge.setValue(F,"projectionMatrix",W)):ge.setValue(F,"projectionMatrix",w.projectionMatrix),ge.setValue(F,"viewMatrix",w.matrixWorldInverse);const Qn=ge.map.cameraPosition;Qn!==void 0&&Qn.setValue(F,gt.setFromMatrixPosition(w.matrixWorld)),Ft.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ge.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,tn=!0,Cs=!0)}if(k.isSkinnedMesh){ge.setOptional(F,k,"bindMatrix"),ge.setOptional(F,k,"bindMatrixInverse");const cn=k.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),ge.setValue(F,"boneTexture",cn.boneTexture,R))}k.isBatchedMesh&&(ge.setOptional(F,k,"batchingTexture"),ge.setValue(F,"batchingTexture",k._matricesTexture,R),ge.setOptional(F,k,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",k._indirectTexture,R),ge.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",k._colorsTexture,R));const Ps=X.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Nt.update(k,X,gn),(tn||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,ge.setValue(F,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Tn.envMap.value=wt,Tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Tn.envMapIntensity.value=B.environmentIntensity),tn&&(ge.setValue(F,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&df(Tn,Cs),ht&&Y.fog===!0&&it.refreshFogUniforms(Tn,ht),it.refreshMaterialUniforms(Tn,Y,G,K,p.state.transmissionRenderTarget[w.id]),ao.upload(F,ll(Pt),Tn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ao.upload(F,ll(Pt),Tn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ge.setValue(F,"center",k.center),ge.setValue(F,"modelViewMatrix",k.modelViewMatrix),ge.setValue(F,"normalMatrix",k.normalMatrix),ge.setValue(F,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const cn=Y.uniformsGroups;for(let Qn=0,Jn=cn.length;Qn<Jn;Qn++){const ul=cn[Qn];O.update(ul,gn),O.bind(ul,gn)}}return gn}function df(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function ff(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,B,X){Rt.get(w.texture).__webglTexture=B,Rt.get(w.depthTexture).__webglTexture=X;const Y=Rt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const X=Rt.get(w);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,X=0){I=w,C=B,A=X;let Y=!0,k=null,ht=!1,xt=!1;if(w){const wt=Rt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(wt.__hasExternalTextures)R.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const At=w.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&Rt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(xt=!0);const Wt=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?k=Wt[B][X]:k=Wt[B],ht=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[X]:k=Wt,L.copy(w.viewport),z.copy(w.scissor),H=w.scissorTest}else L.copy(ut).multiplyScalar(G).floor(),z.copy(It).multiplyScalar(G).floor(),H=Qt;if(Mt.bindFramebuffer(F.FRAMEBUFFER,k)&&Y&&Mt.drawBuffers(w,k),Mt.viewport(L),Mt.scissor(z),Mt.setScissorTest(H),ht){const wt=Rt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,X)}else if(xt){const wt=Rt.get(w.texture),zt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,X||0,zt)}M=-1},this.readRenderTargetPixels=function(w,B,X,Y,k,ht,xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){Mt.bindFramebuffer(F.FRAMEBUFFER,Et);try{const wt=w.texture,zt=wt.format,Wt=wt.type;if(!Ft.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&X>=0&&X<=w.height-k&&F.readPixels(B,X,Y,k,Bt.convert(zt),Bt.convert(Wt),ht)}finally{const wt=I!==null?Rt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,B,X,Y,k,ht,xt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){const wt=w.texture,zt=wt.format,Wt=wt.type;if(!Ft.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-Y&&X>=0&&X<=w.height-k){Mt.bindFramebuffer(F.FRAMEBUFFER,Et);const At=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,At),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(B,X,Y,k,Bt.convert(zt),Bt.convert(Wt),0);const ie=I!==null?Rt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,ie);const fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ap(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,At),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(At),F.deleteSync(fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,X=0){w.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(w.image.width*Y),ht=Math.floor(w.image.height*Y),xt=B!==null?B.x:0,Et=B!==null?B.y:0;R.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,xt,Et,k,ht),Mt.unbindTexture()},this.copyTextureToTexture=function(w,B,X=null,Y=null,k=0){w.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],B=arguments[2],k=arguments[3]||0,X=null);let ht,xt,Et,wt,zt,Wt,At,ie,fe;const me=w.isCompressedTexture?w.mipmaps[k]:w.image;X!==null?(ht=X.max.x-X.min.x,xt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,zt=X.min.y,Wt=X.isBox3?X.min.z:0):(ht=me.width,xt=me.height,Et=me.depth||1,wt=0,zt=0,Wt=0),Y!==null?(At=Y.x,ie=Y.y,fe=Y.z):(At=0,ie=0,fe=0);const je=Bt.convert(B.format),oe=Bt.convert(B.type);let Pt;B.isData3DTexture?(R.setTexture3D(B,0),Pt=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Pt=F.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Un=F.getParameter(F.UNPACK_ROW_LENGTH),ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=F.getParameter(F.UNPACK_SKIP_PIXELS),Pi=F.getParameter(F.UNPACK_SKIP_ROWS),tn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Cs=w.isDataArrayTexture||w.isData3DTexture,ge=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Tn=Rt.get(w),Ps=Rt.get(B),cn=Rt.get(Tn.__renderTarget),Qn=Rt.get(Ps.__renderTarget);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,cn.__webglFramebuffer),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Jn=0;Jn<Et;Jn++)Cs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,k,Wt+Jn),w.isDepthTexture?(ge&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(B).__webglTexture,k,fe+Jn),F.blitFramebuffer(wt,zt,ht,xt,At,ie,ht,xt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ge?F.copyTexSubImage3D(Pt,k,At,ie,fe+Jn,wt,zt,ht,xt):F.copyTexSubImage2D(Pt,k,At,ie,fe+Jn,wt,zt,ht,xt);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Pt,k,At,ie,fe,ht,xt,Et,je,oe,me.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,k,At,ie,fe,ht,xt,Et,je,me.data):F.texSubImage3D(Pt,k,At,ie,fe,ht,xt,Et,je,oe,me):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,At,ie,ht,xt,je,oe,me.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,At,ie,me.width,me.height,je,me.data):F.texSubImage2D(F.TEXTURE_2D,k,At,ie,ht,xt,je,oe,me);F.pixelStorei(F.UNPACK_ROW_LENGTH,Un),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tn),k===0&&B.generateMipmaps&&F.generateMipmap(Pt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,X=null,Y=null,k=0){return w.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],B=arguments[3],k=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,X,Y,k)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){C=0,A=0,I=null,Mt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class Fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bc extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new T;class rr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qe extends Sn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xi;const Os=new T,qi=new T,Yi=new T,ji=new vt,Fs=new vt,Bd=new Ht,Or=new T,Bs=new T,Fr=new T,hh=new vt,Jo=new vt,uh=new vt;class Xe extends _e{constructor(t=new Qe){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fd(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new rr(n,3,0,!1)),Xi.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),Bd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Br(Or.set(-.5,-.5,0),Yi,o,qi,i,s),Br(Bs.set(.5,-.5,0),Yi,o,qi,i,s),Br(Fr.set(.5,.5,0),Yi,o,qi,i,s),hh.set(0,0),Jo.set(1,0),uh.set(1,1);let a=t.ray.intersectTriangle(Or,Bs,Fr,!1,Os);if(a===null&&(Br(Bs.set(-.5,.5,0),Yi,o,qi,i,s),Jo.set(0,1),a=t.ray.intersectTriangle(Or,Fr,Bs,!1,Os),a===null))return;const c=t.ray.origin.distanceTo(Os);c<t.near||c>t.far||e.push({distance:c,point:Os.clone(),uv:dn.getInterpolation(Os,Or,Bs,Fr,hh,Jo,uh,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Br(r,t,e,n,i,s){ji.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Fs.x=s*ji.x-i*ji.y,Fs.y=i*ji.x+s*ji.y):Fs.copy(ji),r.copy(t),r.x+=Fs.x,r.y+=Fs.y,r.applyMatrix4(Bd)}const dh=new T,fh=new se,ph=new se,Fv=new T,mh=new Ht,kr=new T,ta=new In,gh=new Ht,ea=new hr;class Bv extends Lt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ml,this.bindMatrix=new Ht,this.bindMatrixInverse=new Ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),t.ray.intersectsSphere(ta)!==!1&&(gh.copy(i).invert(),ea.copy(t.ray).applyMatrix4(gh),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ea)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;fh.fromBufferAttribute(i.attributes.skinIndex,t),ph.fromBufferAttribute(i.attributes.skinWeight,t),dh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=ph.getComponent(s);if(o!==0){const a=fh.getComponent(s);mh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Fv.copy(dh).applyMatrix4(mh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class kd extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kc extends Ee{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Oe,h=Oe,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new Ht,kv=new Ht;class zc{constructor(t=[],e=[]){this.uuid=Mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ht)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ht;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:kv;_h.multiplyMatrices(a,e[s]),_h.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new kc(e,t,t,on,fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new kd),this.bones.push(o),this.boneInverses.push(new Ht().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class wi extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new Ht,vh=new Ht,zr=[],xh=new bn,zv=new Ht,ks=new Lt,zs=new In;class zd extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),xh.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),zs.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ki),vh.multiplyMatrices(n,Ki),ks.matrixWorld=vh,ks.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=s,c.object=this,e.push(c)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(i*this.count),i,this.count,Rc,fn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hc extends Sn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fo=new T,po=new T,yh=new Ht,Hs=new hr,Hr=new In,na=new T,Mh=new T;class Vc extends _e{constructor(t=new Re,e=new Hc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)fo.fromBufferAttribute(e,i-1),po.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fo.distanceTo(po);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=s,t.ray.intersectsSphere(Hr)===!1)return;yh.copy(i).invert(),Hs.copy(t.ray).applyMatrix4(yh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),y=h.getX(v+1),S=Vr(this,t,Hs,c,p,y);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Vr(this,t,Hs,c,v,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=Vr(this,t,Hs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Vr(this,t,Hs,c,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vr(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(fo.fromBufferAttribute(o,i),po.fromBufferAttribute(o,s),e.distanceSqToSegment(fo,po,na,Mh)>n)return;na.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(na);if(!(c<t.near||c>t.far))return{distance:c,point:Mh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Sh=new T,bh=new T;class Hd extends Vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Sh.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sh.distanceTo(bh);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hv extends Vc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Gc extends Sn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Th=new Ht,mc=new hr,Gr=new In,Wr=new T;class Wc extends _e{constructor(t=new Re,e=new Gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=s,t.ray.intersectsSphere(Gr)===!1)return;Th.copy(i).invert(),mc.copy(t.ray).applyMatrix4(Th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,v=f;m<v;m++){const g=l.getX(m);Wr.fromBufferAttribute(u,g),Eh(Wr,g,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)Wr.fromBufferAttribute(u,m),Eh(Wr,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Eh(r,t,e,n,i,s,o){const a=mc.distanceSqToPoint(r);if(a<e){const c=new T;mc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class an extends Ee{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ze extends Re{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){const x=new T,P=new T;let C=0;const A=(e-t)/n;for(let I=0;I<=s;I++){const M=[],b=I/s,L=b*(e-t)+t;for(let z=0;z<=i;z++){const H=z/i,q=H*c+a,Q=Math.sin(q),j=Math.cos(q);P.x=L*Q,P.y=-b*n+g,P.z=L*j,u.push(P.x,P.y,P.z),x.set(Q,A,j).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-b),M.push(m++)}v.push(M)}for(let I=0;I<i;I++)for(let M=0;M<s;M++){const b=v[M][I],L=v[M+1][I],z=v[M+1][I+1],H=v[M][I+1];(t>0||M!==0)&&(h.push(b,L,H),C+=3),(e>0||M!==s-1)&&(h.push(L,z,H),C+=3)}l.addGroup(p,C,0),p+=C}function S(x){const P=m,C=new vt,A=new T;let I=0;const M=x===!0?t:e,b=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;const L=m;for(let z=0;z<=i;z++){const q=z/i*c+a,Q=Math.cos(q),j=Math.sin(q);A.x=M*j,A.y=g*b,A.z=M*Q,u.push(A.x,A.y,A.z),d.push(0,b,0),C.x=Q*.5+.5,C.y=j*.5*b+.5,f.push(C.x,C.y),m++}for(let z=0;z<i;z++){const H=P+z,q=L+z;x===!0?h.push(q,q+1,H):h.push(q+1,q,H),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mo extends Ze{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class So extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new T,x=new T,P=new T;for(let C=0;C<e.length;C+=3)f(e[C+0],S),f(e[C+1],x),f(e[C+2],P),c(S,x,P,y)}function c(y,S,x,P){const C=P+1,A=[];for(let I=0;I<=C;I++){A[I]=[];const M=y.clone().lerp(x,I/C),b=S.clone().lerp(x,I/C),L=C-I;for(let z=0;z<=L;z++)z===0&&I===C?A[I][z]=M:A[I][z]=M.clone().lerp(b,z/L)}for(let I=0;I<C;I++)for(let M=0;M<2*(C-I)-1;M++){const b=Math.floor(M/2);M%2===0?(d(A[I][b+1]),d(A[I+1][b]),d(A[I][b])):(d(A[I][b+1]),d(A[I+1][b+1]),d(A[I+1][b]))}}function l(y){const S=new T;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(y),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){const y=new T;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];const x=g(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(x,1-P)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){const S=o[y+0],x=o[y+2],P=o[y+4],C=Math.max(S,x,P),A=Math.min(S,x,P);C>.9&&A<.1&&(S<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,S){const x=y*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function m(){const y=new T,S=new T,x=new T,P=new T,C=new vt,A=new vt,I=new vt;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),S.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),C.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),P.copy(y).add(S).add(x).divideScalar(3);const L=g(P);v(C,b+0,y,L),v(A,b+2,S,L),v(I,b+4,x,L)}}function v(y,S,x,P){P<0&&y.x===1&&(o[S]=y.x-1),x.x===0&&x.z===0&&(o[S]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.vertices,t.indices,t.radius,t.details)}}class Xc extends So{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xc(t.radius,t.detail)}}class go extends So{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new go(t.radius,t.detail)}}class qc extends Re{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,d=new T,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(i+C*s)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+C*s)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(C+x,1-S),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=h[p][y+1],x=h[p][y],P=h[p+1][y],C=h[p+1][y+1];(p!==0||o>0)&&f.push(S,x,C),(p!==n-1||c<Math.PI)&&f.push(x,P,C)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ye extends Sn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ln extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Xr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Vv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Gv(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function wh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function Vd(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class ur{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wv extends ur{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ns,endingEnd:ns}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case is:s=t,a=2*e-n;break;case ho:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case is:o=t,c=2*n-e;break;case ho:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let P=0;P!==a;++P)s[P]=p*o[h+P]+y*o[l+P]+S*o[c+P]+x*o[u+P];return s}}class Gd extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Xv extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Dn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case nr:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Vv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=nr;class ws extends Dn{constructor(t,e,n){super(t,e,n)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=er;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Wd extends Dn{}Wd.prototype.ValueTypeName="color";class ys extends Dn{}ys.prototype.ValueTypeName="number";class qv extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Zt.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ms extends Dn{InterpolantFactoryMethodLinear(t){return new qv(this.times,this.values,this.getValueSize(),t)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Dn{constructor(t,e,n){super(t,e,n)}}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=er;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Dn{}Ss.prototype.ValueTypeName="vector";class or{constructor(t="",e=-1,n=[],i=Lc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(jv(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Gv(c);c=wh(c,1,h),l=wh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ys(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];Vd(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const S=d[m];g.push(S.time),p.push(S.morphTarget===v?1:0)}i.push(new ys(".morphTargetInfluence["+v+"]",g,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(Ss,f+".position",d,"pos",i),n(Ms,f+".quaternion",d,"rot",i),n(Ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Wd;case"quaternion":return Ms;case"bool":case"boolean":return ws;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function jv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Yv(r.type);if(r.times===void 0){const e=[],n=[];Vd(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const li={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kv{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const $v=new Kv;class Rs{constructor(t){this.manager=t!==void 0?t:$v,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Zv extends Error{constructor(t,e){super(t),this.response=e}}class Xd extends Rs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=li.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Hn[t]!==void 0){Hn[t].push({onLoad:e,onProgress:n,onError:i});return}Hn[t]=[],Hn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Hn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:x})=>{if(S)p.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let C=0,A=h.length;C<A;C++){const I=h[C];I.onProgress&&I.onProgress(P)}p.enqueue(x),y()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Zv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{li.add(t,l);const h=Hn[t];delete Hn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Hn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Hn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Qv extends Rs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=li.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ir("img");function c(){h(),li.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class qd extends Rs{constructor(t){super(t)}load(t,e,n,i){const s=new Ee,o=new Qv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class dr extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yd extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ia=new Ht,Ah=new T,Rh=new T;class Yc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jv extends Yc{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=vs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class tx extends dr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Jv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ch=new Ht,Vs=new T,sa=new T;class ex extends Yc{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),sa.copy(n.position),sa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sa),n.updateMatrixWorld(),i.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}}class nx extends dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ex}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ix extends Yc{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ar extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new ix}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sx extends dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Js{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class rx extends Rs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=li.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return li.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),li.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});li.add(t,c),s.manager.itemStart(t)}}class ox{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ph(){return performance.now()}class ax{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Zt.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Zt.multiplyQuaternionsFlat(t,o,t,e,t,n),Zt.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const jc="\\[\\]\\.:\\/",cx=new RegExp("["+jc+"]","g"),Kc="[^"+jc+"]",lx="[^"+jc.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",Kc),ux=/(WCOD+)?/.source.replace("WCOD",lx),dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),px=new RegExp("^"+hx+ux+dx+fx+"$"),mx=["material","materials","bones","map"];class gx{constructor(t,e,n){const i=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Yt{constructor(t,e,n){this.path=e,this.parsedPath=n||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Yt.Composite(t,e,n):new Yt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(t){const e=px.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);mx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Yt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=gx;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _x{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:ns,endingEnd:ns};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$f,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Qf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Lc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Zf;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===gd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=is,i.endingEnd=is):(t?i.endingStart=this.zeroSlopeAtStart?is:ns:i.endingStart=ho,e?i.endingEnd=this.zeroSlopeAtEnd?is:ns:i.endingEnd=ho)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const vx=new Float32Array(1);class $c extends ui{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;m=new ax(Yt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Gd(new Float32Array(2),new Float32Array(2),1,vx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?or.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Lc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new _x(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?or.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ih{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xx extends Hd{constructor(t=10,e=10,n=4473924,i=8947848){n=new bt(n),i=new bt(i);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const v=d===s?n:i;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new Re;h.setAttribute("position",new te(c,3)),h.setAttribute("color",new te(l,3));const u=new Hc({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yx extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);const Zc=60,$i=1/Zc,ra=5;class jd{constructor(t){_(this,"cb");_(this,"running",!1);_(this,"rafId",0);_(this,"prevTime",0);_(this,"accumulator",0);_(this,"totalTicks",0);_(this,"frameCount",0);_(this,"tickCount",0);_(this,"metricTimer",0);_(this,"fps",0);_(this,"tps",0);_(this,"stepsLastFrame",0);_(this,"frame",t=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);let e=(t-this.prevTime)/1e3;this.prevTime=t,e>ra*$i&&(e=ra*$i),this.accumulator+=e;let n=0;for(;this.accumulator>=$i&&n<ra;)this.cb.fixedUpdate($i),this.accumulator-=$i,n++,this.totalTicks++,this.tickCount++;this.stepsLastFrame=n;const i=this.accumulator/$i;this.cb.render(i),this.sampleMetrics(e)});this.cb=t}start(){this.running||(this.running=!0,this.prevTime=performance.now(),this.accumulator=0,this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=0}sampleMetrics(t){var e,n;this.frameCount++,this.metricTimer+=t,this.metricTimer>=1&&(this.fps=this.frameCount/this.metricTimer,this.tps=this.tickCount/this.metricTimer,this.frameCount=0,this.tickCount=0,this.metricTimer=0,(n=(e=this.cb).onMetrics)==null||n.call(e,{fps:this.fps,tps:this.tps,totalTicks:this.totalTicks,stepsLastFrame:this.stepsLastFrame}))}}class Mx{constructor(){_(this,"handlers",{})}on(t,e){var n;return((n=this.handlers)[t]??(n[t]=[])).push(e),()=>this.off(t,e)}off(t,e){const n=this.handlers[t];if(!n)return;const i=n.indexOf(e);i>=0&&n.splice(i,1)}emit(t,e){const n=this.handlers[t];if(n)for(const i of n.slice())i(e)}}class Kd{constructor(){_(this,"nextId",1);_(this,"entities",new Map);_(this,"events",new Mx);_(this,"elapsed",0)}add(t){return t.id=this.nextId++,this.entities.set(t.id,t),t}remove(t){this.entities.delete(t)}get(t){return this.entities.get(t)}all(){return this.entities.values()}get count(){return this.entities.size}tick(t){var e;this.elapsed+=t;for(const n of Array.from(this.entities.values()))(e=n.update)==null||e.call(n,t,this)}}class rs{constructor(t,e,n,i={}){_(this,"id",0);_(this,"position");_(this,"radius");_(this,"hull");_(this,"maxHull");_(this,"designation");_(this,"className");_(this,"allegiance");_(this,"composition");this.position=t.clone(),this.radius=e,this.hull=n,this.maxHull=n,this.designation=i.designation??"Unknown Contact",this.className=i.className??"Autonomous Drone",this.allegiance=i.allegiance??"foe",this.composition=i.composition??"Ferro-alloy hull"}applyDamage(t,e,n="bolt"){this.hull-=t,e.events.emit("target-hit",{targetId:this.id,damage:t,hull:Math.max(0,this.hull),x:this.position.x,y:this.position.y,z:this.position.z,impact:n}),this.hull<=0&&(e.remove(this.id),e.events.emit("entity-destroyed",{id:this.id,kind:"target",x:this.position.x,y:this.position.y,z:this.position.z}))}}function cr(r){return typeof r.applyDamage=="function"}const Sx=.5;function Gs(r,t,e){return r<t?t:r>e?e:r}function bx(r,t,e,n,i,s,o,a,c,l,h,u){const d=n-r,f=i-t,m=s-e,v=l-o,g=h-a,p=u-c,y=r-o,S=t-a,x=e-c,P=d*d+f*f+m*m,C=v*v+g*g+p*p,A=v*y+g*S+p*x,I=1e-9;let M,b;if(P<=I&&C<=I)return y*y+S*S+x*x;if(P<=I)M=0,b=Gs(A/C,0,1);else{const ct=d*y+f*S+m*x;if(C<=I)b=0,M=Gs(-ct/P,0,1);else{const ut=d*v+f*g+m*p,It=P*C-ut*ut;M=It>I?Gs((ut*A-ct*C)/It,0,1):0,b=(ut*M+A)/C,b<0?(b=0,M=Gs(-ct/P,0,1)):b>1&&(b=1,M=Gs((ut-ct)/P,0,1))}}const L=r+d*M,z=t+f*M,H=e+m*M,q=o+v*b,Q=a+g*b,j=c+p*b,K=L-q,G=z-Q,st=H-j;return K*K+G*G+st*st}class Ci{constructor(t,e,n,i,s,o,a=!0,c=!1,l=!1){_(this,"id",0);_(this,"position");_(this,"velocity");_(this,"heading");_(this,"damage");_(this,"lifetime");_(this,"ownerId");_(this,"visibleTracer");_(this,"precision");_(this,"commando");this.position=t.clone(),this.velocity=e.clone(),this.heading=(o?o.clone():this.velocity.clone()).normalize(),this.damage=n,this.lifetime=i,this.ownerId=s,this.visibleTracer=a,this.precision=c,this.commando=l}update(t,e){const n=this.position.x,i=this.position.y,s=this.position.z;this.position.addScaledVector(this.velocity,t);const o=this.position.x,a=this.position.y,c=this.position.z;if(this.lifetime-=t,this.lifetime<=0){e.remove(this.id);return}for(const l of e.all()){if(l.id===this.ownerId||!cr(l)||l.collidable===!1)continue;const h=l.radius+Sx,u=l.hitHeight??0;if(bx(n,i,s,o,a,c,l.position.x,l.position.y,l.position.z,l.position.x,l.position.y+u,l.position.z)<=h*h){l.applyDamage(this.damage,e,"bolt",this.precision,this.commando),e.remove(this.id);return}}}}const oa=6e3;function ve(r,t){return 22*Math.sin(r*.0016)*Math.cos(t*.0013)+11*Math.sin(r*.0041+1.3)*Math.sin(t*.0035-.7)+5*Math.cos((r+t)*.009+.5)}const Tx=2.5,Ex=.35,wx=5.5,Ax=16,Rx=40,Cx=1.3,Px=2,Ix=14,Lx=.3,Lh=5.5,Dx=new T(0,-3.8,-3),Nx=new T(0,-2,-8),Ux=new T(0,0,-1);class lr{constructor(t,e,n,i,s,o){_(this,"id",0);_(this,"position",new T);_(this,"heading",new T(0,0,-1));_(this,"phase","emerge");_(this,"spin",0);_(this,"bayLocal",new T);_(this,"velocity",new T);_(this,"ownerId");_(this,"damage");_(this,"maxSpeed");_(this,"range");_(this,"splashRadius");_(this,"accel");_(this,"target");_(this,"emergeTime");_(this,"igniteTime");_(this,"fuelTime");_(this,"initialBoostSpeed");_(this,"homingRate");_(this,"spinRate");_(this,"wobbleAmp");_(this,"detonateOnArrival");_(this,"arriveRadius");_(this,"detonateOnTerrain");_(this,"straightTime");_(this,"inheritSpeed",0);_(this,"age",0);_(this,"traveled",0);_(this,"speed",0);_(this,"launched",!1);_(this,"scratch",new T);this.position.copy(t),this.heading.copy(e).normalize(),this.target=n?n.clone():null,this.ownerId=i,this.damage=s.damage,this.maxSpeed=s.projectileSpeed,this.range=s.range,this.splashRadius=s.splashRadius??0;const a=s.missile??{};this.emergeTime=a.emergeTime??Tx,this.igniteTime=a.igniteTime??Ex,this.fuelTime=a.fuelTime??wx,this.initialBoostSpeed=a.initialBoostSpeed??Rx,this.homingRate=a.homingRate??Cx,this.spinRate=a.spin??Ix,this.wobbleAmp=a.wobble??Lx,this.detonateOnArrival=a.detonateOnArrival??!1,this.arriveRadius=a.arriveRadius??0,this.detonateOnTerrain=a.detonateOnTerrain??!1,this.straightTime=a.straightTime??0,a.inheritVelocity&&o&&(this.inheritSpeed=o.length()),this.accel=(this.maxSpeed-this.initialBoostSpeed)/(this.fuelTime*.9)}get burning(){return this.phase==="ignite"||this.phase==="boost"}update(t,e){this.age+=t,this.launched||(this.launched=!0,this.emit(e,"missile-launched"));const n=this.computePhase();n!==this.phase&&this.enterPhase(n,e);const i=this.phase==="emerge"?Math.min(1,this.age/this.emergeTime):1;this.spin+=this.spinRate*i*t;const s=this.getCarrier(e);if(this.phase==="emerge"||this.phase==="ignite"){if(s){this.heading.copy(Ux).applyQuaternion(s.quaternion);const o=this.phase==="emerge"?this.age/this.emergeTime:1,a=1-(1-o)*(1-o);this.bayLocal.copy(Dx).lerp(Nx,a);const c=i*this.wobbleAmp,l=this.id*2.4;this.bayLocal.x+=c*Math.sin(this.age*Lh+l),this.bayLocal.y+=c*Math.cos(this.age*Lh*1.17+l),this.position.copy(this.bayLocal).applyQuaternion(s.quaternion).add(s.position),this.velocity.copy(s.velocity)}return}if(this.phase==="boost"&&(this.speed=Math.min(this.maxSpeed,this.speed+this.accel*t),this.target&&this.age>=this.straightTime&&this.steerToward(this.target,t)),this.velocity.copy(this.heading).multiplyScalar(this.speed+this.inheritSpeed),this.position.addScaledVector(this.velocity,t),this.traveled+=this.speed*t,this.detonateOnArrival&&this.target&&this.position.distanceToSquared(this.target)<=this.arriveRadius*this.arriveRadius){this.detonate(e);return}if(this.detonateOnTerrain&&this.position.y<=ve(this.position.x,this.position.z)){this.detonate(e);return}if(this.checkContact(e)){this.detonate(e);return}(this.traveled>=this.range||this.age>=Ax)&&(e.events.emit("missile-removed",{id:this.id}),e.remove(this.id))}computePhase(){return this.age<this.emergeTime?"emerge":this.age<this.emergeTime+this.igniteTime?"ignite":this.age<this.emergeTime+this.igniteTime+this.fuelTime?"boost":"coast"}enterPhase(t,e){this.phase=t,t==="ignite"?this.emit(e,"missile-ignited"):t==="boost"?(this.speed=Math.max(this.initialBoostSpeed,this.velocity.length()),this.emit(e,"missile-boost")):t==="coast"&&e.events.emit("missile-burnout",{id:this.id})}steerToward(t,e){if(this.scratch.copy(t).sub(this.position),this.scratch.lengthSq()<1e-6)return;this.scratch.normalize();const n=this.heading.angleTo(this.scratch);if(n<1e-4)return;const i=Math.min(1,this.homingRate*e/n);this.heading.lerp(this.scratch,i).normalize()}checkContact(t){for(const e of t.all()){if(e.id===this.ownerId||!cr(e))continue;const n=e.radius+Px;if(this.position.distanceToSquared(e.position)<=n*n)return!0}return!1}detonate(t){if(this.splashRadius>0){const e=this.splashRadius*this.splashRadius;for(const n of Array.from(t.all())){if(n.id===this.ownerId||!cr(n))continue;const i=this.position.distanceToSquared(n.position);if(i>e)continue;const s=1-Math.sqrt(i)/this.splashRadius,o=this.damage*s;o>0&&n.applyDamage(o,t,"blast")}}t.events.emit("missile-detonated",{id:this.id,x:this.position.x,y:this.position.y,z:this.position.z,radius:this.splashRadius>0?this.splashRadius*.6:30}),t.events.emit("missile-removed",{id:this.id}),t.remove(this.id)}getCarrier(t){const e=t.get(this.ownerId);return e&&e.quaternion&&e.position&&e.velocity?e:null}emit(t,e){t.events.emit(e,{id:this.id,x:this.position.x,y:this.position.y,z:this.position.z})}}class gc{constructor(t,e,n,i,s,o,a){_(this,"id",0);_(this,"position",new T);_(this,"label");_(this,"velocity",new T);_(this,"speed");_(this,"maxRange");_(this,"sensorRange");_(this,"sector");_(this,"traveled",0);this.position.copy(t),this.velocity.copy(e).normalize().multiplyScalar(n),this.speed=n,this.maxRange=i,this.sensorRange=s,this.label=o,this.sector=a}update(t,e){this.position.addScaledVector(this.velocity,t),this.traveled+=this.speed*t;for(const n of this.sector.revealNear(this.position,this.sensorRange))e.events.emit("report",{source:this.label,text:`Contact detected — ${n.name}`,alert:!0});this.traveled>=this.maxRange&&(e.events.emit("report",{source:this.label,text:"Survey complete — telemetry returned."}),e.remove(this.id))}}function Ox(){return{glow:Fx(64),fire:kx(128),ring:Bx(128)}}function Qc(r){const t=document.createElement("canvas");t.width=t.height=r;const e=t.getContext("2d");if(!e)throw new Error("2d canvas context unavailable");return{c:t,g:e}}function Fx(r){const{c:t,g:e}=Qc(r),n=r/2,i=e.createRadialGradient(n,n,0,n,n,n);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,r,r),new an(t)}function Bx(r){const{c:t,g:e}=Qc(r),n=r/2,i=e.createRadialGradient(n,n,0,n,n,n);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.55,"rgba(255,255,255,0)"),i.addColorStop(.72,"rgba(255,255,255,1)"),i.addColorStop(.82,"rgba(255,255,255,0.4)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,r,r),new an(t)}function kx(r){const{c:t,g:e}=Qc(r),n=e.createImageData(r,r),i=n.data,s=Math.random()*100,o=Math.random()*100,a=r/2;for(let c=0;c<r;c++)for(let l=0;l<r;l++){const h=(l-a)/a,u=(c-a)/a;let f=1-Math.hypot(h,u);f<0&&(f=0),f=f*f;const m=Hx(l/r*5+s,c/r*5+o),v=f*Vx(m*1.6),g=(c*r+l)*4;i[g]=255,i[g+1]=255,i[g+2]=255,i[g+3]=Math.round(v*255)}return e.putImageData(n,0,0),new an(t)}function qr(r,t){const e=Math.sin(r*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function zx(r,t){const e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n,o=i*i*(3-2*i),a=s*s*(3-2*s),c=qr(e,n),l=qr(e+1,n),h=qr(e,n+1),u=qr(e+1,n+1),d=c+(l-c)*o,f=h+(u-h)*o;return d+(f-d)*a}function Hx(r,t){let e=0,n=.5,i=1;for(let s=0;s<4;s++)e+=n*zx(r*i,t*i),i*=2,n*=.5;return e}function Vx(r){return r<0?0:r>1?1:r}const Dh=.35,Nh=.95,Uh=[16773824,16764506,16751155,16736030,16757066],Yr=[4870232,3817544,5659750,3027771],Oh=3;class $d{constructor(t){_(this,"group",new pe);_(this,"effects",[]);_(this,"tex");t.add(this.group),this.tex=Ox()}get textures(){return this.tex}spawnHit(t,e,n){this.add(this.buildHit(t,e,n)),this.add(this.buildHitSmoke(t,e,n))}spawnExplosion(t,e,n,i=8){this.add(this.buildExplosion(t,e,n,i))}spawnExplosionResidue(t,e,n,i,s){const o=Math.max(1,Math.round((3+Math.random()*3)*s.smokiness));for(let a=0;a<o;a++)this.add(this.buildSmokePlume(t,e,n,i,s));this.add(this.buildParticulate(t,e,n,i,s))}spawnMist(t,e,n){this.add(this.buildMist(t,e,n))}spawnSmoke(t,e,n){this.add(this.buildSmoke(t,e,n))}spawnDamageSmoke(t,e,n,i=1){this.add(this.buildDamageSmoke(t,e,n,i))}update(t){for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e];n.age+=t,n.age>=n.duration?(this.group.remove(n.root),Gx(n.root),this.effects.splice(e,1)):n.update(n.age,t)}}add(t){this.group.add(t.root),this.effects.push({...t,age:0})}sprite(t,e,n){const i=new Qe({map:t,color:e,transparent:!0,opacity:n,blending:We,depthWrite:!1,depthTest:!1,rotation:Math.random()*Math.PI*2});return new Xe(i)}buildHit(t,e,n){const i=new pe;i.position.set(t,e,n);const s=this.sprite(this.tex.glow,12580607,1);i.add(s);const o=s.material,a=this.makeSparks(i,5,this.tex.glow,10482687,3,8,.9);return{root:i,duration:Dh,update:(c,l)=>{const h=c/Dh,u=1-h,d=3+h*5;s.scale.set(d,d,1),o.opacity=u*u,this.updateMovers(a,u,l)}}}buildHitSmoke(t,e,n){const i=new pe;i.position.set(t,e,n);const s=.8,o=[];for(let a=0;a<5;a++){const c=this.sprite(this.tex.fire,9675192,0);c.position.copy(xi()).multiplyScalar(2*Math.random()),i.add(c),o.push({sprite:c,mat:c.material,vel:xi().multiplyScalar(2+Math.random()*3),from:1.2+Math.random(),to:3+Math.random()*2.5,spin:(Math.random()-.5)*1.5,peak:.18+Math.random()*.12})}return{root:i,duration:s,update:(a,c)=>{const l=a/s,h=Math.sin(Math.PI*l);for(const u of o){u.sprite.position.addScaledVector(u.vel,c);const d=u.from+(u.to-u.from)*l;u.sprite.scale.set(d,d,1),u.mat.rotation+=u.spin*c,u.mat.opacity=u.peak*h}}}}buildExplosion(t,e,n,i){const s=new pe;s.position.set(t,e,n);const o=this.sprite(this.tex.glow,16777198,1);s.add(o);const a=o.material,c=[];for(let d=0;d<7;d++){const f=Uh[Math.random()*Uh.length|0],m=this.sprite(this.tex.fire,f,.95);m.position.copy(xi()).multiplyScalar(i*(.1+Math.random()*.55)),s.add(m),c.push({sprite:m,mat:m.material,from:i*.4,to:i*(1.1+Math.random()*1.5),aspectX:.8+Math.random()*.5,aspectY:.8+Math.random()*.5,spin:(Math.random()-.5)*3,fadePow:1.2+Math.random()*1.3})}const l=this.sprite(this.tex.ring,16767392,.7);s.add(l);const h=l.material,u=this.makeSparks(s,14,this.tex.glow,16762726,i*.5,i*3.2,i*.5);return{root:s,duration:Nh,update:(d,f)=>{const m=d/Nh,v=1-m,g=1-v*v,p=i*(.8+g*1.6);o.scale.set(p,p,1),a.opacity=Math.max(0,1-m*3);for(const S of c){const x=S.from+(S.to-S.from)*g;S.sprite.scale.set(x*S.aspectX,x*S.aspectY,1),S.mat.rotation+=S.spin*f,S.mat.opacity=Math.pow(v,S.fadePow)*.95}const y=i*(.4+g*4.2);l.scale.set(y,y,1),h.opacity=v*v*.7,this.updateMovers(u,v,f)}}}buildMist(t,e,n){const i=new pe;i.position.set(t,e,n);const s=this.sprite(this.tex.fire,9430783,.3);i.add(s);const o=s.material,a=(Math.random()-.5)*2,c=1.6,l=5.5,h=.55;return{root:i,duration:h,update:(u,d)=>{const f=u/h,m=1-f,v=c+(l-c)*f;s.scale.set(v,v,1),o.rotation+=a*d,o.opacity=m*m*.3}}}buildSmoke(t,e,n){const i=new pe;i.position.set(t,e,n);const s=this.sprite(this.tex.fire,9082019,0);i.add(s);const o=s.material,a=xi().multiplyScalar(1.5+Math.random()*2),c=(Math.random()-.5)*1.2,l=2.2,h=8+Math.random()*3,u=.28+Math.random()*.12,d=1.2;return{root:i,duration:d,update:(f,m)=>{const v=f/d,g=l+(h-l)*v;s.scale.set(g,g,1),s.position.addScaledVector(a,m),o.rotation+=c*m,o.opacity=u*Math.sin(Math.PI*v)}}}buildDamageSmoke(t,e,n,i=1){const s=new pe;s.position.set(t,e,n);const o=this.sprite(this.tex.fire,7765128,0);s.add(o);const a=o.material,c=new T((Math.random()-.5)*.9,.8+Math.random()*.9,(Math.random()-.5)*.9),l=(Math.random()-.5)*1.2,h=1*i,u=3.2*i,d=(.16+Math.random()*.08)*Math.min(1.5,.7+i*.4),f=1.4+(i-1)*.35;return{root:s,duration:f,update:(m,v)=>{const g=m/f,p=h+(u-h)*g;o.scale.set(p,p,1),o.position.addScaledVector(c,v),a.rotation+=l*v,a.opacity=d*Math.sin(Math.PI*g)}}}buildSmokePlume(t,e,n,i,s){const o=new pe;o.position.set(t,e,n);const a=Yr[Math.random()*Yr.length|0],c=this.sprite(this.tex.fire,a,0);c.position.copy(xi()).multiplyScalar(i*.4*s.spread*Math.random()),o.add(c);const l=c.material,h=new T((Math.random()-.5)*2,1.4+Math.random()*2.2,(Math.random()-.5)*2),u=(Math.random()-.5)*.7,d=i*(.4+Math.random()*.3)*s.sizeScale*Oh,f=i*(1.5+Math.random()*1.6)*s.sizeScale*Oh,m=(.2+Math.random()*.12)*(.55+.9*s.darkness),v=3.5+Math.random()*2;return{root:o,duration:v,update:(g,p)=>{const y=g/v,S=d+(f-d)*y;c.scale.set(S,S,1),c.position.addScaledVector(h,p),h.multiplyScalar(1-.4*p),l.rotation+=u*p,l.opacity=m*Math.sin(Math.PI*y)}}}buildParticulate(t,e,n,i,s){const o=new pe;o.position.set(t,e,n);const a=[],c=Math.max(6,Math.round((14+Math.random()*10)*s.smokiness));for(let u=0;u<c;u++){const d=Math.random()<.35,f=d?16753994:Yr[Math.random()*Yr.length|0],m=this.sprite(d?this.tex.glow:this.tex.fire,f,1),v=xi();m.position.copy(v).multiplyScalar(i*.3*s.spread*Math.random());const g=(d?.4+Math.random()*.6:.8+Math.random()*1.4)*s.sizeScale;m.scale.set(g,g,1),o.add(m),a.push({sprite:m,mat:m.material,vel:v.multiplyScalar((d?6:3)*(.4+Math.random())*s.spread),size:g,ember:d})}const l=.35+.5*s.darkness,h=2.8+Math.random()*1.6;return{root:o,duration:h,update:(u,d)=>{const m=1-u/h;for(const v of a)if(v.sprite.position.addScaledVector(v.vel,d),v.vel.multiplyScalar(1-1.1*d),v.ember){v.mat.opacity=m*m;const g=v.size*(.4+m*.6);v.sprite.scale.set(g,g,1)}else v.mat.opacity=m*l}}}makeSparks(t,e,n,i,s,o,a){const c=[];for(let l=0;l<e;l++){const h=this.sprite(n,i,1),u=xi();h.position.copy(u).multiplyScalar(a*Math.random());const d=s*(.6+Math.random()*.8);h.scale.set(d,d,1),t.add(h),c.push({sprite:h,mat:h.material,vel:u.multiplyScalar(o*(.5+Math.random())),size:d})}return c}updateMovers(t,e,n){for(const i of t){i.sprite.position.addScaledVector(i.vel,n);const s=i.size*(.4+e*.8);i.sprite.scale.set(s,s,1),i.mat.opacity=e*e}}}function xi(){const r=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-r*r);return new T(e*Math.cos(t),e*Math.sin(t),r)}function Gx(r){r.traverse(t=>{t instanceof Xe&&t.material.dispose()})}const Fh=2500,Wx=800,Xx=new T(0,1.9,8),qx=new T(0,.3,-.2),Bh=5,kh=7,Yx=4,jx=new T(0,0,-1),Kx=new T(0,0,1),$x=new T(0,0,1),Zx=16,Qx={bolt:{marks:1,spread:0,sizeScale:1,darkness:.65,smokiness:.6},blast:{marks:6,spread:1.4,sizeScale:.95,darkness:1,smokiness:2.2}},Jx={spread:1.2,sizeScale:1.15,darkness:.8,smokiness:1.4};function ty(){const r=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-r*r);return new T(e*Math.cos(t),e*Math.sin(t),r)}class ey{constructor(t){_(this,"renderer");_(this,"scene");_(this,"camera");_(this,"stars");_(this,"player",null);_(this,"playerMesh",null);_(this,"cameraMode","bridge");_(this,"shakeMag",0);_(this,"selected",null);_(this,"selectionRing",null);_(this,"entityMeshes",new Map);_(this,"seenIds",new Set);_(this,"boltMistAnchors",new Map);_(this,"missileSmokeAnchors",new Map);_(this,"sector",null);_(this,"poiMeshes",new Map);_(this,"seenPoiIds",new Set);_(this,"effects");_(this,"lastRenderTime",performance.now());_(this,"missileTex",null);_(this,"scorchGeo",null);_(this,"damageDecals",new Map);_(this,"renderPos",new T);_(this,"renderQuat",new Zt);_(this,"spinQuat",new Zt);_(this,"desiredCamPos",new T);_(this,"camForward",new T);_(this,"toTarget",new T);_(this,"ndc",new T);_(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});this.renderer=new Oc({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement),this.scene=new Bc,this.scene.background=new bt(131850),this.camera=new Ne(70,window.innerWidth/window.innerHeight,.1,5e3),this.camera.position.set(0,2,10),this.scene.add(new sx(5595248,1.6));const e=new ar(13625599,1.4);e.position.set(.5,1,.3),this.scene.add(e),this.stars=this.createStarfield(),this.scene.add(this.stars),this.effects=new $d(this.scene),window.addEventListener("resize",this.onResize)}spawnHitEffect(t,e,n){this.effects.spawnHit(t,e,n)}addShake(t){this.shakeMag=Math.min(Yx,this.shakeMag+t)}spawnExplosionEffect(t,e,n,i=8){this.effects.spawnExplosion(t,e,n,i)}spawnExplosionResidue(t,e,n,i=8){this.effects.spawnExplosionResidue(t,e,n,i,Jx)}spawnDamage(t,e,n,i,s,o="bolt"){const a=this.entityMeshes.get(t);if(!(a instanceof Lt))return;this.scorchGeo||(this.scorchGeo=new Ts(1,1));let c=this.damageDecals.get(t);c||(c={meshes:[],localPoints:[],smokeTimer:.3,smokiness:1},this.damageDecals.set(t,c));const l=Qx[o],h=new T(e,n,i).sub(a.position).applyQuaternion(new Zt().copy(a.quaternion).invert()),u=h.length()||1,d=Math.min(1,s/90),f=Math.min(13,1.5+s*.12),m=Math.min(1,l.darkness*(.55+.45*d));for(let v=0;v<l.marks&&!(c.meshes.length>=Zx);v++){const g=v===0?h.clone():h.clone().addScaledVector(ty(),l.spread*u*Math.random()).normalize().multiplyScalar(u),p=g.clone().normalize(),y=new Ue({map:this.effects.textures.fire,color:723725,transparent:!0,opacity:m,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),S=new Lt(this.scorchGeo,y);S.quaternion.setFromUnitVectors($x,p),S.rotateZ(Math.random()*Math.PI*2),S.position.copy(g).addScaledVector(p,.12);const x=f*l.sizeScale*(.75+Math.random()*.5);S.scale.set(x,x,1),a.add(S),c.meshes.push(S),c.localPoints.push(g.clone())}c.smokiness=Math.max(c.smokiness,l.smokiness)}clearDamage(t){var n;const e=this.damageDecals.get(t);if(e){for(const i of e.meshes)(n=i.parent)==null||n.remove(i),i.material.dispose();this.damageDecals.delete(t)}}updateDamageSmoke(t){for(const[e,n]of this.damageDecals){const i=this.entityMeshes.get(e);if(!(i instanceof Lt)){this.damageDecals.delete(e);continue}if(n.smokeTimer-=t,n.smokeTimer<=0){const s=n.smokiness;n.smokeTimer=(.4+Math.random()*.6)/Math.max(.4,s);const o=n.localPoints[Math.random()*n.localPoints.length|0];if(o){const a=o.clone().applyQuaternion(i.quaternion).add(i.position);this.effects.spawnDamageSmoke(a.x,a.y,a.z,s)}}}}setPlayer(t){this.player=t,this.playerMesh=this.createShipMesh(),this.scene.add(this.playerMesh),this.cameraMode=t.profile.view}setSector(t){this.sector=t}toggleCamera(){return this.cameraMode=this.cameraMode==="bridge"?"chase":"bridge",this.cameraMode}get currentCamera(){return this.cameraMode}render(t,e){const n=performance.now(),i=Math.min((n-this.lastRenderTime)/1e3,.1);if(this.lastRenderTime=n,this.stars.rotation.y+=8e-5,this.effects.update(i),this.player&&this.playerMesh&&this.syncPlayer(this.player,this.playerMesh,e,i),this.syncEntities(t,n/1e3),this.syncPois(),this.updateSelectionRing(t,n/1e3),this.updateDamageSmoke(i),this.shakeMag>.001){const s=this.shakeMag;this.camera.position.x+=(Math.random()*2-1)*s,this.camera.position.y+=(Math.random()*2-1)*s,this.camera.position.z+=(Math.random()*2-1)*s,this.camera.rotateZ((Math.random()*2-1)*s*.05),this.shakeMag*=Math.exp(-4.5*i)}else this.shakeMag=0;this.renderer.render(this.scene,this.camera)}syncPois(){if(this.sector){this.seenPoiIds.clear();for(const t of this.sector.pois){if(!t.discovered)continue;let e=this.poiMeshes.get(t.id);e||(e=this.createPoiMesh(),this.scene.add(e),this.poiMeshes.set(t.id,e)),e.position.copy(t.position),e.rotation.y+=.006,this.seenPoiIds.add(t.id)}for(const[t,e]of this.poiMeshes)this.seenPoiIds.has(t)||(this.scene.remove(e),e.geometry.dispose(),e.material.dispose(),this.poiMeshes.delete(t))}}createPoiMesh(){const t=new go(10,0),e=new Ue({color:8381439,wireframe:!0,transparent:!0,opacity:.8});return new Lt(t,e)}getTargetTracks(t){const e=[],n=window.innerWidth,i=window.innerHeight;this.camera.getWorldDirection(this.camForward);const s=i/(2*Math.tan(this.camera.fov*Math.PI/180/2));for(const o of t.all()){if(!(o instanceof rs)||(this.toTarget.subVectors(o.position,this.camera.position),this.toTarget.dot(this.camForward)<=0)||(this.ndc.copy(o.position).project(this.camera),this.ndc.x<-1||this.ndc.x>1||this.ndc.y<-1||this.ndc.y>1))continue;const a=this.toTarget.length();e.push({id:o.id,x:(this.ndc.x*.5+.5)*n,y:(-this.ndc.y*.5+.5)*i,size:Math.max(14,o.radius/a*s),dist:a})}return e}pickSelectable(t,e,n){const i=window.innerWidth,s=window.innerHeight;this.camera.getWorldDirection(this.camForward);const o=s/(2*Math.tan(this.camera.fov*Math.PI/180/2));let a=null,c=1/0;const l=(h,u,d)=>{if(this.toTarget.subVectors(u,this.camera.position),this.toTarget.dot(this.camForward)<=0||(this.ndc.copy(u).project(this.camera),this.ndc.x<-1||this.ndc.x>1||this.ndc.y<-1||this.ndc.y>1))return;const f=(this.ndc.x*.5+.5)*i,m=(-this.ndc.y*.5+.5)*s,g=Math.max(16,d/this.toTarget.length()*o)+12;if(Math.abs(t-f)>g||Math.abs(e-m)>g)return;const p=Math.hypot(t-f,e-m);p<c&&(c=p,a=h)};for(const h of n.all())h instanceof rs&&l({kind:"target",id:h.id},h.position,h.radius);if(this.sector)for(const h of this.sector.pois)h.discovered&&l({kind:"poi",id:h.id},h.position,10);return a}setSelected(t){this.selected=t}aimPointFromScreen(t,e){const n=window.innerWidth,i=window.innerHeight,s=new T(t/n*2-1,-(e/i)*2+1,.5).unproject(this.camera);return s.sub(this.camera.position).normalize(),this.camera.position.clone().addScaledVector(s,2e3)}updateSelectionRing(t,e){var o,a;this.selectionRing||(this.selectionRing=new Xe(new Qe({map:this.effects.textures.ring,color:10481919,transparent:!0,opacity:.9,blending:We,depthWrite:!1,depthTest:!1})),this.selectionRing.visible=!1,this.scene.add(this.selectionRing));const n=this.selectionRing;let i=null,s=10;if(((o=this.selected)==null?void 0:o.kind)==="target"){const c=t.get(this.selected.id);c instanceof rs&&(i=c.position,s=c.radius)}else if(((a=this.selected)==null?void 0:a.kind)==="poi"&&this.sector){const c=this.sector.pois.find(l=>l.id===this.selected.id);c!=null&&c.discovered&&(i=c.position,s=12)}if(i){n.visible=!0,n.position.copy(i);const c=s*3.6*(1+.06*Math.sin(e*3));n.scale.set(c,c,1),n.material.rotation=e*.6}else n.visible=!1}syncEntities(t,e){this.seenIds.clear();for(const n of t.all()){let i=this.entityMeshes.get(n.id);n instanceof rs?(i||(i=this.createTargetMesh(n.radius),this.scene.add(i),this.entityMeshes.set(n.id,i)),i.position.copy(n.position),i.rotation.y+=.01,this.seenIds.add(n.id)):n instanceof Ci?(i||(i=this.createBolt(),this.scene.add(i),this.entityMeshes.set(n.id,i)),i.position.copy(n.position),this.animateBolt(i,n.id,e),this.trailMist(n.id,n.position),this.seenIds.add(n.id)):n instanceof lr?(i||(i=this.createMissileMesh(),this.scene.add(i),this.entityMeshes.set(n.id,i)),this.syncMissile(i,n,e),this.seenIds.add(n.id)):n instanceof gc&&(i||(i=this.createProbeMesh(),this.scene.add(i),this.entityMeshes.set(n.id,i)),i.position.copy(n.position),i.rotation.y+=.05,this.seenIds.add(n.id))}for(const[n,i]of this.entityMeshes)this.seenIds.has(n)||(this.scene.remove(i),ny(i),this.entityMeshes.delete(n),this.boltMistAnchors.delete(n),this.missileSmokeAnchors.delete(n))}trailMist(t,e){const n=this.boltMistAnchors.get(t);if(!n){this.boltMistAnchors.set(t,e.clone());return}e.distanceToSquared(n)>=Bh*Bh&&(this.effects.spawnMist(e.x,e.y,e.z),n.copy(e))}animateBolt(t,e,n){const i=e*1.7,s=Math.sin(n*24+i),o=Math.sin(n*15+i*.6),a=t.children[0],c=t.children[1],l=4*(1+.3*o);a.scale.set(l,l,1),a.material.rotation=n*1.6+i,a.material.opacity=.5+.2*o;const h=1.6*(1+.2*s);c.scale.set(h,h,1),c.material.opacity=.85+.15*s}syncMissile(t,e,n){t.position.copy(e.position),this.renderQuat.setFromUnitVectors(jx,e.heading),this.spinQuat.setFromAxisAngle(Kx,e.spin+e.id),t.quaternion.copy(this.renderQuat).multiply(this.spinQuat);const i=t.userData.burner;if(e.burning){const s=.75+.25*Math.sin(n*40+e.id);i.material.opacity=.9*s;const o=1.6+3*s;i.scale.set(o,o,1),this.trailSmoke(e.id,e.position)}else i.material.opacity=0}trailSmoke(t,e){const n=this.missileSmokeAnchors.get(t);if(!n){this.missileSmokeAnchors.set(t,e.clone());return}e.distanceToSquared(n)>=kh*kh&&(this.effects.spawnSmoke(e.x,e.y,e.z),n.copy(e))}createTargetMesh(t){const e=new Xc(t,0),n=new ye({color:16738906,emissive:3804426,emissiveIntensity:1,metalness:.2,roughness:.6,flatShading:!0});return new Lt(e,n)}createBolt(){const t=this.effects.textures,e=new pe,n=new Xe(new Qe({map:t.fire,color:6280447,transparent:!0,opacity:.6,blending:We,depthWrite:!1,depthTest:!1}));n.scale.setScalar(4),e.add(n);const i=new Xe(new Qe({map:t.glow,color:14220799,transparent:!0,opacity:1,blending:We,depthWrite:!1,depthTest:!1}));return i.scale.setScalar(1.6),e.add(i),e}createMissileMesh(){const t=new pe,e=this.getMissileTexture(),n=new ye({map:e,color:13620442,emissive:592396,metalness:.5,roughness:.5}),i=new ye({color:1842980,metalness:.4,roughness:.65,flatShading:!0}),s=new Ze(.55,.55,4,14);s.rotateX(Math.PI/2),t.add(new Lt(s,n));const o=new mo(.55,1.4,14);o.rotateX(-Math.PI/2);const a=new Lt(o,i);a.position.set(0,0,-2.4),t.add(a);const c=new Ze(.62,.62,.3,14);c.rotateX(Math.PI/2);const l=new Lt(c,i);l.position.set(0,0,.9),t.add(l);const h=new ze(.1,.95,1.7);h.translate(0,.55,0);for(let d=0;d<4;d++){const f=d*Math.PI/2,m=new Lt(h,i);m.position.z=1.55,m.rotation.z=f,t.add(m)}const u=new Xe(new Qe({map:this.effects.textures.glow,color:16757575,transparent:!0,opacity:0,blending:We,depthWrite:!1,depthTest:!1}));return u.position.set(0,0,2.5),u.scale.setScalar(3),t.add(u),t.userData.burner=u,t}getMissileTexture(){if(this.missileTex)return this.missileTex;const t=document.createElement("canvas");t.width=64,t.height=128;const e=t.getContext("2d");e.fillStyle="#333941",e.fillRect(0,0,64,128);for(let i=0;i<500;i++){const s=Math.random()*64,o=Math.random()*128,a=2+Math.random()*10,c=Math.random()<.5;e.strokeStyle=c?`rgba(90,98,108,${.05+Math.random()*.18})`:`rgba(16,18,22,${.05+Math.random()*.22})`,e.beginPath(),e.moveTo(s,o),e.lineTo(s,o+a),e.stroke()}e.strokeStyle="rgba(8,9,11,0.6)",e.lineWidth=1;for(const i of[16,46,78,104])e.beginPath(),e.moveTo(0,i+.5),e.lineTo(64,i+.5),e.stroke();e.fillStyle="#9a3a2c",e.fillRect(0,24,64,12),e.fillStyle="rgba(0,0,0,0.4)";for(let i=-12;i<64;i+=12)e.fillRect(i,24,6,12);const n=new an(t);return n.wrapS=Pn,n.wrapT=Rn,n.repeat.set(2,1),this.missileTex=n,n}createProbeMesh(){const t=new go(1.8,0),e=new Ue({color:8381439});return new Lt(t,e)}syncPlayer(t,e,n,i){if(this.renderPos.lerpVectors(t.prevPosition,t.position,n),this.renderQuat.copy(t.prevQuaternion).slerp(t.quaternion,n),e.position.copy(this.renderPos),e.quaternion.copy(this.renderQuat),this.cameraMode==="bridge")e.visible=!1,this.desiredCamPos.copy(qx).applyQuaternion(this.renderQuat).add(this.renderPos),this.camera.position.copy(this.desiredCamPos),this.camera.quaternion.copy(this.renderQuat);else{e.visible=!0,this.desiredCamPos.copy(Xx).applyQuaternion(this.renderQuat).add(this.renderPos);const s=1-Math.exp(-9*i),o=1-Math.exp(-11*i);this.camera.position.lerp(this.desiredCamPos,s),this.camera.quaternion.slerp(this.renderQuat,o)}}createShipMesh(){const t=new pe,e=new ye({color:10135234,metalness:.6,roughness:.4}),n=new ye({color:8381439,metalness:.3,roughness:.5}),i=new ye({color:1717584,emissive:3399167,emissiveIntensity:1.4}),s=new mo(.5,2.4,12);s.rotateX(-Math.PI/2),t.add(new Lt(s,e));const o=new ze(3.2,.12,.9),a=new Lt(o,e);a.position.z=.4,t.add(a);const c=new ze(.1,.7,.8),l=new Lt(c,n);l.position.set(0,.4,.6),t.add(l);const h=new ze(.7,.3,.3),u=new Lt(h,i);return u.position.z=1.25,t.add(u),t}createStarfield(){const t=new Float32Array(Fh*3);for(let i=0;i<Fh;i++){const s=aa(i*2+1),o=aa(i*2+2),a=2*Math.PI*s,c=Math.acos(2*o-1),l=Wx*(.6+.4*aa(i+7919));t[i*3+0]=l*Math.sin(c)*Math.cos(a),t[i*3+1]=l*Math.sin(c)*Math.sin(a),t[i*3+2]=l*Math.cos(c)}const e=new Re;e.setAttribute("position",new te(t,3));const n=new Gc({color:12576511,size:1.4,sizeAttenuation:!1});return new Wc(e,n)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}function ny(r){r.traverse(t=>{if(t instanceof Lt){t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()}else t instanceof Xe&&t.material.dispose()})}function aa(r){const t=Math.sin(r*12.9898)*43758.5453;return t-Math.floor(t)}class iy{constructor(t){_(this,"root");_(this,"modes",new Map);_(this,"current",null);_(this,"lastState",null);this.root=document.createElement("div"),this.root.className="hud-root",t.appendChild(this.root)}register(t){this.modes.set(t.name,t)}setMode(t){var n,i;if(((n=this.current)==null?void 0:n.name)===t)return;const e=this.modes.get(t);if(!e){console.warn(`HudManager: unknown HUD mode "${t}"`);return}(i=this.current)==null||i.unmount(),this.current=e,e.mount(this.root),this.lastState&&e.update(this.lastState)}update(t){var e;this.lastState=t,(e=this.current)==null||e.update(t)}get currentMode(){var t;return(t=this.current)==null?void 0:t.name}}const ca="dec.hud.panel.";function yi(r,t,e){const n=document.createElement(r);return t&&(n.className=t),e&&e.appendChild(n),n}class Ai{constructor(t){_(this,"root");_(this,"body");_(this,"bar");_(this,"collapseBtn");_(this,"lockBtn");_(this,"id");_(this,"defaults");_(this,"collapsed",!1);_(this,"locked",!1);_(this,"pos",null);_(this,"dragging",!1);_(this,"dragDX",0);_(this,"dragDY",0);_(this,"onPointerDown",t=>{if(this.locked||t.target.closest(".hud-panel-ctrl"))return;const e=this.root.getBoundingClientRect();this.dragDX=t.clientX-e.left,this.dragDY=t.clientY-e.top,this.dragging=!0,this.bar.setPointerCapture(t.pointerId),t.preventDefault()});_(this,"onPointerMove",t=>{if(!this.dragging)return;const e=this.root.offsetWidth,n=this.root.offsetHeight,i=4,s=zh(t.clientX-this.dragDX,i,window.innerWidth-e-i),o=zh(t.clientY-this.dragDY,i,window.innerHeight-n-i);this.applyPosition(s,o)});_(this,"onPointerUp",t=>{this.dragging&&(this.dragging=!1,this.bar.releasePointerCapture(t.pointerId),this.save())});this.id=t.id,this.defaults=t.defaults,this.root=yi("div","hud-panel",t.parent),this.bar=yi("div","hud-panel-bar",this.root);const e=yi("div",`hud-panel-title${t.titleClass?` ${t.titleClass}`:""}`,this.bar);e.textContent=t.title;const n=yi("div","hud-panel-ctrls",this.bar);this.collapseBtn=yi("button","hud-panel-ctrl hud-panel-collapse",n),this.collapseBtn.type="button",this.lockBtn=yi("button","hud-panel-ctrl hud-panel-lock",n),this.lockBtn.type="button",this.body=yi("div","hud-panel-body",this.root),this.collapseBtn.addEventListener("click",i=>{i.stopPropagation(),this.toggleCollapse()}),this.lockBtn.addEventListener("click",i=>{i.stopPropagation(),this.toggleLock()}),this.bar.addEventListener("pointerdown",this.onPointerDown),this.bar.addEventListener("pointermove",this.onPointerMove),this.bar.addEventListener("pointerup",this.onPointerUp),this.applyDefaults(),this.restore()}toggleCollapse(){this.locked||(this.setCollapsed(!this.collapsed),this.save())}setCollapsed(t){this.collapsed=t,this.root.classList.toggle("hud-panel-collapsed",t),this.collapseBtn.textContent=t?"▸":"▾",this.collapseBtn.title=t?"Expand":"Collapse"}toggleLock(){this.setLocked(!this.locked),this.save()}setLocked(t){this.locked=t,this.root.classList.toggle("hud-panel-locked",t),this.lockBtn.textContent=t?"🔒":"🔓",this.lockBtn.title=t?"Locked — click to unlock":"Unlocked — click to lock"}applyDefaults(){const t=this.defaults,e=this.root.style;e.left=t.left??(t.centerX?"50%":"auto"),e.right=t.right??"auto",e.top=t.top??"auto",e.bottom=t.bottom??"auto",e.transform=t.centerX?"translateX(-50%)":"none",this.pos=null}applyPosition(t,e){const n=this.root.style;n.left=`${t}px`,n.top=`${e}px`,n.right="auto",n.bottom="auto",n.transform="none",this.pos={x:t,y:e}}restore(){let t={};try{const e=localStorage.getItem(ca+this.id);e&&(t=JSON.parse(e))}catch{t={}}typeof t.x=="number"&&typeof t.y=="number"&&this.applyPosition(t.x,t.y),this.setCollapsed(!!t.collapsed),this.setLocked(!!t.locked)}save(){const t={collapsed:this.collapsed,locked:this.locked};this.pos&&(t.x=this.pos.x,t.y=this.pos.y);try{localStorage.setItem(ca+this.id,JSON.stringify(t))}catch{}}resetLayout(){this.setCollapsed(!1),this.setLocked(!1),this.applyDefaults();try{localStorage.removeItem(ca+this.id)}catch{}}}function zh(r,t,e){return r<t?t:r>e?e:r}function jt(r,t,e){const n=document.createElement(r);return t&&(n.className=t),e&&e.appendChild(n),n}class sy{constructor(t={}){_(this,"name","bridge");_(this,"container",null);_(this,"header");_(this,"sectorLine");_(this,"throttleFill");_(this,"throttleText");_(this,"speedFill");_(this,"speedText");_(this,"hullFill");_(this,"hullText");_(this,"kills");_(this,"dev");_(this,"panels",[]);_(this,"weaponsWrap");_(this,"weaponRows",new Map);_(this,"trackLayer");_(this,"trackPool",new Map);_(this,"radarCount");_(this,"radarScope");_(this,"blipPool",new Map);_(this,"sensorLogEl");_(this,"uupFill");_(this,"powerBody");_(this,"powerRows",new Map);this.options=t}barRow(t,e,n){const i=jt("div","hud-stat",t);jt("div","hud-stat-label",i).textContent=e;const s=jt("div","hud-bar",i),o=jt("div",`hud-bar-fill ${n}`,s),a=jt("div","hud-stat-val",i);return{fill:o,val:a}}mount(t){const e=jt("div","hud hud-bridge",t);this.container=e,jt("div","hud-vignette",e),this.trackLayer=jt("div","hud-tracklayer",e);for(const f of["tl","tr","bl","br"])jt("div",`hud-corner hud-corner-${f}`,e);const n=jt("div","hud-ident",e);this.header=jt("div","hud-header",n),this.sectorLine=jt("div","hud-sector",n);const i=new Ai({parent:e,id:"sensors",title:"SENSORS",defaults:{right:"32px",top:"76px"}});i.root.classList.add("hud-radar"),this.radarScope=jt("div","hud-radar-scope",i.body),jt("div","hud-radar-rings",this.radarScope),jt("div","hud-radar-ship",this.radarScope),this.radarCount=jt("div","hud-radar-count",i.body),this.sensorLogEl=jt("div","hud-sensor-log",i.body),this.panels.push(i);const s=new Ai({parent:e,id:"reactor",title:"REACTOR",defaults:{centerX:!0,bottom:"40px"}});s.root.classList.add("hud-power");const o=jt("div","hud-uup",s.body);jt("div","hud-uup-label",o).innerHTML="Uup<sup>115</sup>";const a=jt("div","hud-uup-bar",o);this.uupFill=jt("div","hud-uup-fill",a),jt("div","hud-power-hint",s.body).textContent="click / 1·2·3 route · 0 bal · 7·8·9 presets",this.powerBody=s.body,this.panels.push(s);const c=new Ai({parent:e,id:"flight",title:"FLIGHT",defaults:{left:"40px",bottom:"40px"}}),l=this.barRow(c.body,"THR","hud-fill-thr");this.throttleFill=l.fill,this.throttleText=l.val;const h=this.barRow(c.body,"VEL","hud-fill-spd");this.speedFill=h.fill,this.speedText=h.val,this.panels.push(c);const u=new Ai({parent:e,id:"combat",title:"COMBAT",defaults:{right:"40px",bottom:"40px"}}),d=this.barRow(u.body,"HULL","hud-fill-hull");this.hullFill=d.fill,this.hullText=d.val,this.weaponsWrap=jt("div","hud-weapons",u.body),this.kills=jt("div","hud-kills",u.body),this.panels.push(u),this.dev=jt("div","hud-dev",e)}resetLayout(){for(const t of this.panels)t.resetLayout()}get sensorLog(){return this.sensorLogEl}update(t){if(!this.container)return;this.header.textContent=`DEC · ${t.craftName.toUpperCase()}`,this.sectorLine.textContent=t.sectorName.toUpperCase(),this.throttleFill.style.width=`${Ws(t.throttle)}%`,this.throttleText.textContent=`${Math.round(t.throttle*100)}%`;const e=t.maxSpeed>0?t.speed/t.maxSpeed:0;this.speedFill.style.width=`${Ws(e)}%`,this.speedText.textContent=`${Math.round(t.speed)}`;const n=t.maxHull>0?t.hull/t.maxHull:0;this.hullFill.style.width=`${Ws(n)}%`,this.hullFill.style.background=ry(n),this.hullText.textContent=`${Math.round(t.hull)}`,this.updateWeapons(t.weapons),this.kills.textContent=t.targetsDestroyed>0?`NEUTRALISED · ${t.targetsDestroyed}`:"",this.updateTracks(t.tracks),this.updateRadar(t),this.uupFill.style.width=`${Ws(t.primaryPower.fraction)}%`,this.updatePower(t.power);const i=t.metrics;this.dev.textContent=i?`${i.fps.toFixed(0)} fps · ${i.tps.toFixed(0)}/${Zc} tps · cam:${t.camera} (C)`:`cam:${t.camera} (C)`}updateWeapons(t){const e=new Set;for(const n of t){let i=this.weaponRows.get(n.index);if(!i){const o=jt("div","hud-wpn-row",this.weaponsWrap);jt("div","hud-wpn-sel",o).textContent="▸";const a=jt("div","hud-wpn-name",o),c=jt("div","hud-wpn-state",o),l=jt("div","hud-wpn-bar",o),h=jt("div","hud-wpn-fill",l);o.addEventListener("click",()=>{var u,d;return(d=(u=this.options).onSelectWeapon)==null?void 0:d.call(u,n.index)}),i={row:o,name:a,state:c,fill:h},this.weaponRows.set(n.index,i)}i.name.textContent=n.name.toUpperCase(),i.state.textContent=n.ready?"READY":"CHRG",i.row.classList.toggle("selected",n.selected),i.row.classList.toggle("ready",n.ready);const s=n.maxEnergy>0?n.energy/n.maxEnergy:0;i.fill.style.width=`${Ws(s)}%`,i.fill.classList.toggle("low",!n.ready),e.add(n.index)}for(const[n,i]of this.weaponRows)e.has(n)||(i.row.remove(),this.weaponRows.delete(n))}updateTracks(t){const e=new Set;for(const n of t){let i=this.trackPool.get(n.id);i||(i=jt("div","hud-track",this.trackLayer),this.trackPool.set(n.id,i)),i.style.left=`${n.x}px`,i.style.top=`${n.y}px`,i.style.width=`${n.size*2}px`,i.style.height=`${n.size*2}px`,e.add(n.id)}for(const[n,i]of this.trackPool)e.has(n)||(i.remove(),this.trackPool.delete(n))}updateRadar(t){this.radarCount.textContent=`CONTACTS · ${t.radar.length}`;const e=70,n=new Set;for(const i of t.radar){let s=this.blipPool.get(i.key);s||(s=jt("div","hud-blip",this.radarScope),this.blipPool.set(i.key,s)),s.style.left=`${75+i.x*e}px`,s.style.top=`${75+i.y*e}px`,s.classList.toggle("hud-blip-edge",i.edge),s.classList.toggle("hud-blip-probe",i.kind==="probe"),n.add(i.key)}for(const[i,s]of this.blipPool)n.has(i)||(s.remove(),this.blipPool.delete(i))}updatePower(t){for(const e of t){let n=this.powerRows.get(e.key);if(!n){const i=jt("div",`hud-power-row hud-power-${e.key}`,this.powerBody);i.addEventListener("click",c=>{var l,h;return(h=(l=this.options).onRoutePower)==null?void 0:h.call(l,e.key,c.shiftKey)}),jt("div","hud-power-label",i).textContent=e.label;const s=jt("div","hud-pips",i),o=[];for(let c=0;c<e.max;c++)o.push(jt("div","hud-pip",s));const a=jt("div","hud-power-factor",i);n={pips:o,factor:a},this.powerRows.set(e.key,n)}for(let i=0;i<n.pips.length;i++)n.pips[i].classList.toggle("filled",i<e.level);n.factor.textContent=`×${e.factor.toFixed(2)}`}}unmount(){var t;this.trackPool.clear(),this.blipPool.clear(),this.powerRows.clear(),this.weaponRows.clear(),this.panels.length=0,(t=this.container)==null||t.remove(),this.container=null}}function Ws(r){return Math.max(0,Math.min(1,r))*100}function ry(r){return r>.5?"#4ee39a":r>.25?"#ffcc55":"#ff5a5a"}class Zd{constructor(){_(this,"held",new Set);_(this,"onKeyDown",t=>{this.held.add(t.code)});_(this,"onKeyUp",t=>{this.held.delete(t.code)});_(this,"onBlur",()=>{this.held.clear()});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}isDown(t){return this.held.has(t)}axis(t,e){return(this.isDown(t)?1:0)-(this.isDown(e)?1:0)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}}class oy{constructor(t){_(this,"ship",null);_(this,"impulseEngaged",!1);this.input=t}bind(t){this.ship=t}update(t){const e=this.ship;if(!e)return;const i=e.profile.handling.throttleRate*t,s=this.input.isDown("Space"),o=this.input.axis("KeyR","KeyF");this.input.isDown("KeyX")?(e.throttle=0,this.impulseEngaged=!1):s?(this.impulseEngaged=!0,e.throttle=la(e.throttle+i)):o!==0?(this.impulseEngaged=!1,e.throttle=la(e.throttle+o*i)):this.impulseEngaged&&(e.throttle=la(e.throttle-i),e.throttle<=0&&(this.impulseEngaged=!1)),e.firing=!1,e.turnInput.pitch=this.input.axis("KeyW","KeyS"),e.turnInput.yaw=this.input.axis("KeyD","KeyA"),e.turnInput.roll=this.input.axis("KeyQ","KeyE"),e.strafe=0}}function la(r){return r<0?0:r>1?1:r}const ay=.15;class cy{constructor(t,e){_(this,"capacity");_(this,"regen");_(this,"_charge");this.capacity=t,this.regen=e,this._charge=t}get charge(){return this._charge}get fraction(){return this.capacity>0?this._charge/this.capacity:0}get availability(){const t=this.capacity*ay;return this._charge>=t?1:Math.max(0,this._charge/t)}draw(t){if(t<=0)return 0;const e=Math.min(t,this._charge);return this._charge-=e,e}regenerate(t){this._charge=Math.min(this.capacity,this._charge+this.regen*t)}}const Hh=new T(0,0,-1),ly=new T(1,0,0),hy=new T(0,1,0),uy=new T(0,0,1),dy=new T(0,-2.2,-3),fy=new T(0,-3.8,-3),py=18,my=4;class Qd{constructor(t){_(this,"id",0);_(this,"profile");_(this,"primary");_(this,"position",new T);_(this,"quaternion",new Zt);_(this,"velocity",new T);_(this,"throttle",0);_(this,"strafe",0);_(this,"lift",0);_(this,"bankOffset",0);_(this,"hull");_(this,"turnInput",{pitch:0,yaw:0,roll:0});_(this,"angularVel",new T);_(this,"firing",!1);_(this,"thrusterPower",1);_(this,"weaponPower",1);_(this,"selectedWeaponIndex",0);_(this,"fireRequest",null);_(this,"aimPoint",new T);_(this,"hasAimPoint",!1);_(this,"directedOrigin",new T);_(this,"directedDir",new T);_(this,"hasDirected",!1);_(this,"weaponTimers");_(this,"charge");_(this,"prevPosition",new T);_(this,"prevQuaternion",new Zt);_(this,"dq",new Zt);_(this,"euler",new Kt);_(this,"forward",new T);_(this,"right",new T);_(this,"targetVel",new T);_(this,"targetAngular",new T);_(this,"muzzle",new T);_(this,"boltVel",new T);_(this,"aimDir",new T);_(this,"bankScratch",new Zt);this.profile=t,this.hull=t.combat.hull,this.primary=new cy(t.power.capacity,t.power.regen),this.weaponTimers=t.combat.weapons.map(()=>0),this.charge=t.combat.weapons.map(e=>e.maxEnergy)}get maxHull(){return this.profile.combat.hull}get primaryPower(){return{charge:this.primary.charge,capacity:this.primary.capacity,fraction:this.primary.fraction}}get selectedWeapon(){return this.selectedWeaponIndex}get selectedWeaponSpec(){return this.profile.combat.weapons[this.selectedWeaponIndex]}selectWeapon(t){t>=0&&t<this.profile.combat.weapons.length&&(this.selectedWeaponIndex=t)}cycleWeapon(t){const e=this.profile.combat.weapons.length;e>0&&(this.selectedWeaponIndex=(this.selectedWeaponIndex+t+e)%e)}isWeaponReady(t){const e=this.profile.combat.weapons[t];return!!e&&this.weaponTimers[t]<=0&&this.charge[t]>=e.energyCost}isSelectedDepleted(){const t=this.selectedWeaponIndex,e=this.profile.combat.weapons[t];return!!e&&this.charge[t]<e.energyCost}selectedChargeFraction(){const t=this.selectedWeaponIndex,e=this.profile.combat.weapons[t],n=e?e.maxEnergy*this.weaponPower:0;return n>0?this.charge[t]/n:0}getWeaponStatuses(){return this.profile.combat.weapons.map((t,e)=>({index:e,name:t.name,selected:e===this.selectedWeaponIndex,ready:this.isWeaponReady(e),energy:this.charge[e],maxEnergy:t.maxEnergy*this.weaponPower}))}requestShot(t){this.fireRequest=t}requestAimedShot(t){this.aimPoint.copy(t),this.hasAimPoint=!0}requestDirectedShot(t,e){this.directedOrigin.copy(t),this.directedDir.copy(e).normalize(),this.hasDirected=!0}applyImpulse(t,e,n){this.velocity.x+=t,this.velocity.y+=e,this.velocity.z+=n}update(t,e){this.prevPosition.copy(this.position),this.prevQuaternion.copy(this.quaternion);const n=this.thrusterPower,{yawRate:i,pitchRate:s,rollRate:o,angularResponse:a}=this.profile.handling;this.targetAngular.set(this.turnInput.pitch*s*n,-this.turnInput.yaw*i*n,this.turnInput.roll*o*n);const c=1-Math.exp(-a*t);this.angularVel.lerp(this.targetAngular,c),this.euler.set(this.angularVel.x*t,this.angularVel.y*t,this.angularVel.z*t,"XYZ"),this.dq.setFromEuler(this.euler),this.quaternion.multiply(this.dq).normalize();const l=n*(.25+.75*this.primary.availability),{maxSpeed:h,strafeSpeed:u,thrustResponse:d}=this.profile.handling;this.forward.copy(Hh).applyQuaternion(this.quaternion),this.right.copy(ly).applyQuaternion(this.quaternion),this.targetVel.copy(this.forward).multiplyScalar(this.throttle*h*l).addScaledVector(this.right,this.strafe*u*l).addScaledVector(hy,this.lift*u*l);const f=1-Math.exp(-d*t);this.velocity.lerp(this.targetVel,f),this.position.addScaledVector(this.velocity,t),this.primary.draw(Math.abs(this.throttle)*py*t);const m=Math.abs(this.turnInput.pitch)+Math.abs(this.turnInput.yaw)+Math.abs(this.turnInput.roll);this.primary.draw(m*my*t),this.updateWeapons(t,e),this.primary.regenerate(t)}updateWeapons(t,e){const n=this.profile.combat.weapons,i=this.weaponPower;for(let a=0;a<n.length;a++){this.weaponTimers[a]-=t;const c=n[a].maxEnergy*i,l=c-this.charge[a];if(l>0){const h=this.primary.draw(Math.min(n[a].rechargeRate*i*t,l));this.charge[a]=Math.min(c,this.charge[a]+h)}}const s=this.selectedWeaponIndex,o=n[s];if(o&&this.weaponTimers[s]<=0&&this.charge[s]>=o.energyCost){let c=!1;if(this.hasDirected)this.fireDirected(o,e,this.directedOrigin,this.directedDir),c=!0;else{let l;this.fireRequest&&e.get(this.fireRequest.id)?l=this.fireRequest.position:this.hasAimPoint?l=this.aimPoint:this.firing&&(l=null),l!==void 0&&(this.fireWeapon(o,e,l),c=!0)}c&&(this.weaponTimers[s]=o.cooldown,this.charge[s]-=o.energyCost)}this.fireRequest=null,this.hasAimPoint=!1,this.hasDirected=!1}fireDirected(t,e,n,i){if(t.kind==="missile"){e.add(new lr(n,i,null,this.id,t,this.velocity)),e.events.emit("weapon-fired",{shipId:this.id,weapon:t.name,kind:"missile"});return}this.boltVel.copy(i).multiplyScalar(t.projectileSpeed),t.scoped||this.boltVel.add(this.velocity);const s=t.range/t.projectileSpeed;e.add(new Ci(n,this.boltVel,t.damage,s,this.id,i,!t.scoped,t.scoped===!0)),e.events.emit("weapon-fired",{shipId:this.id,weapon:t.name,kind:"bolt"})}fireWeapon(t,e,n){if(this.forward.copy(Hh).applyQuaternion(this.quaternion),t.kind==="missile"){const s=t.missile;s!=null&&s.launchLocal?this.muzzle.set(s.launchLocal.x,s.launchLocal.y,s.launchLocal.z):this.muzzle.copy(fy),this.muzzle.applyQuaternion(this.quaternion).add(this.position);let o=this.forward;s!=null&&s.launchStraight&&n&&(this.aimDir.copy(n).sub(this.muzzle).normalize(),o=this.aimDir),e.add(new lr(this.muzzle,o,n??null,this.id,t,this.velocity)),e.events.emit("weapon-fired",{shipId:this.id,weapon:t.name,kind:"missile"});return}this.muzzle.copy(dy).applyQuaternion(this.quaternion).add(this.position),n?(this.aimDir.copy(n).sub(this.muzzle).normalize(),this.boltVel.copy(this.aimDir).multiplyScalar(t.projectileSpeed)):this.boltVel.copy(this.forward).multiplyScalar(t.projectileSpeed).add(this.velocity);const i=t.range/t.projectileSpeed;e.add(new Ci(this.muzzle,this.boltVel,t.damage,i,this.id)),e.events.emit("weapon-fired",{shipId:this.id,weapon:t.name,kind:"bolt"})}get speed(){return this.velocity.length()}getEffectiveQuaternion(t){return t.copy(this.quaternion).multiply(this.bankScratch.setFromAxisAngle(uy,this.bankOffset))}}const gy={name:"The Meridian",view:"bridge",handling:{maxSpeed:90,strafeSpeed:28,thrustResponse:1.2,yawRate:.32,pitchRate:.26,rollRate:.4,angularResponse:1.1,throttleRate:.4},combat:{hull:500,weapons:[{name:"Pulsar Cannon",damage:34,cooldown:.4,projectileSpeed:150,range:700,maxEnergy:100,energyCost:33,rechargeRate:12},{name:"Trident Missile",kind:"missile",damage:90,cooldown:1.4,projectileSpeed:170,range:1400,splashRadius:60,maxEnergy:100,energyCost:50,rechargeRate:8}]},systems:{sensorRange:260},power:{capacity:1200,regen:12}},_y={name:"Paladin",view:"bridge",handling:{maxSpeed:110,strafeSpeed:95,thrustResponse:5.5,yawRate:1.4,pitchRate:1,rollRate:2,angularResponse:5.5,throttleRate:.9},combat:{hull:140,weapons:[{name:"Mini Gun",kind:"bolt",damage:6,cooldown:.0175,projectileSpeed:1200,range:2e4,maxEnergy:900,energyCost:2.2,rechargeRate:22},{name:"Scorpion Rocket",kind:"missile",damage:90,cooldown:.9,projectileSpeed:520,range:3e3,splashRadius:60,maxEnergy:100,energyCost:34,rechargeRate:16,missile:{emergeTime:0,igniteTime:0,fuelTime:5,initialBoostSpeed:105,homingRate:7,spin:5,wobble:0,detonateOnTerrain:!0,launchLocal:{x:0,y:-3,z:-.2},launchStraight:!0,inheritVelocity:!0}},{name:"Vigil Sniper",kind:"bolt",scoped:!0,damage:150,cooldown:1,projectileSpeed:3e3,range:6e3,maxEnergy:100,energyCost:30,rechargeRate:12}]},systems:{sensorRange:200},power:{capacity:800,regen:80}};class vy{constructor(t,e,n,i,s=!1){_(this,"discovered");this.id=t,this.name=e,this.position=n,this.kind=i,this.discovered=s}}class xy{constructor(t){_(this,"pois",[]);_(this,"nextPoiId",1);this.name=t}addPoi(t,e,n,i=!1){const s=new vy(this.nextPoiId++,t,e,n,i);return this.pois.push(s),s}revealNear(t,e){const n=e*e,i=[];for(const s of this.pois)!s.discovered&&t.distanceToSquared(s.position)<=n&&(s.discovered=!0,i.push(s));return i}get discoveredCount(){return this.pois.reduce((t,e)=>e.discovered?t+1:t,0)}}const yy=6,My=8e3,Sy=600;class by{constructor(t,e){_(this,"el");_(this,"lines",[]);this.el=document.createElement("div"),this.el.className="report-feed",t.appendChild(this.el),e.on("report",n=>this.push(n))}push(t){var s;const e=document.createElement("div");e.className=`report-line${t.alert?" report-alert":""}`;const n=document.createElement("span");n.className="report-src",n.textContent=`${t.source}: `;const i=document.createElement("span");for(i.textContent=t.text,e.append(n,i),this.el.appendChild(e),this.lines.push(e);this.lines.length>yy;)(s=this.lines.shift())==null||s.remove();window.setTimeout(()=>{e.classList.add("report-out"),window.setTimeout(()=>{e.remove(),this.lines=this.lines.filter(o=>o!==e)},Sy)},My)}}class Ty{constructor(t){_(this,"el");this.el=document.createElement("div"),this.el.className="damage-flash",t.appendChild(this.el)}flash(t){const e=Math.max(0,Math.min(1,t));e<=0||(this.el.style.transition="none",this.el.style.opacity=String(e),this.el.offsetWidth,this.el.style.transition="opacity 1400ms ease-in",this.el.style.opacity="0")}}const Ey={friend:"FRIENDLY",foe:"HOSTILE",neutral:"NEUTRAL"};function Se(r,t,e){const n=document.createElement(r);return t&&(n.className=t),e&&e.appendChild(n),n}class wy{constructor(t,e){_(this,"panel");_(this,"root");_(this,"desig");_(this,"classVal");_(this,"alleg");_(this,"rangeVal");_(this,"compVal");_(this,"integrityRow");_(this,"integrityFill");_(this,"integrityVal");_(this,"attackBtn");_(this,"open",!1);this.panel=new Ai({parent:t,id:"intel",title:"INTEL",defaults:{left:"34px",top:"120px"}}),this.root=this.panel.root,this.root.classList.add("intel-panel");const n=Se("div","intel-content",this.panel.body),i=Se("div","intel-header",n);Se("div","intel-icon",i);const s=Se("div","intel-titles",i);this.desig=Se("div","intel-desig",s),this.classVal=Se("div","intel-class",s);const o=Se("button","intel-close",i);o.type="button",o.textContent="×",o.title="Deselect (Esc)",o.addEventListener("click",e.onClose),this.alleg=Se("div","intel-alleg",n),this.rangeVal=this.statRow(n,"RANGE"),this.compVal=this.statRow(n,"COMPOSITION"),this.integrityRow=Se("div","intel-integrity",n),Se("div","intel-stat-label",this.integrityRow).textContent="INTEGRITY";const a=Se("div","intel-ibar",this.integrityRow);this.integrityFill=Se("div","intel-ifill",a),this.integrityVal=Se("div","intel-ival",this.integrityRow);const c=Se("div","intel-actions",n),l=Se("button","intel-btn intel-hail",c);l.type="button",l.textContent="⟟ HAIL",l.addEventListener("click",e.onHail),this.attackBtn=Se("button","intel-btn intel-attack",c),this.attackBtn.type="button",this.attackBtn.textContent="✦ ATTACK",this.attackBtn.addEventListener("click",e.onAttack),this.hide()}statRow(t,e){const n=Se("div","intel-stat",t);return Se("div","intel-stat-label",n).textContent=e,Se("div","intel-stat-val",n)}get isOpen(){return this.open}resetLayout(){this.panel.resetLayout()}show(){this.open=!0,this.root.style.display=""}hide(){this.open=!1,this.root.style.display="none"}update(t){if(this.desig.textContent=t.designation.toUpperCase(),this.classVal.textContent=t.className,this.rangeVal.textContent=`${Math.round(t.range)} u`,this.compVal.textContent=t.composition,this.root.classList.remove("alleg-friend","alleg-foe","alleg-neutral"),this.root.classList.add(`alleg-${t.allegiance}`),this.alleg.textContent=Ey[t.allegiance],t.integrity){this.integrityRow.style.display="";const e=t.integrity.max>0?t.integrity.hull/t.integrity.max:0;this.integrityFill.style.width=`${Math.max(0,Math.min(1,e))*100}%`,this.integrityVal.textContent=`${Math.round(t.integrity.hull)}`}else this.integrityRow.style.display="none";this.attackBtn.disabled=!t.canAttack}}const Ay="audio/256269__jmayoff__space-ship-atmosphere.mp3",Ry="audio/630027__el_boss__space-ship-accelerating.mp3",Cy="audio/341831__ianstargem__laser-phaser.mp3",Py="audio/490266__anomaex__sci-fi_explosion_2.mp3",Iy="audio/60823__nkenez__explosion1dbl.mp3",Ly="audio/94131__bmaczero__rattle1.mp3",Dy="audio/630442__marsounds__washing-machine_spinup.mp3",Ny="audio/630442__marsounds__washing-machine_spin.mp3",Uy="audio/739487__qubodup__fire-trap.mp3",Oy="audio/774270__thelittlecrow__rocket-launch-boost-and-burning-version-b.mp3",Fy="audio/628638__el_boss__menu-select-tick.mp3",By=1.7,ky=.18,zy=.1,Hy=.6,Vy=900,Vh=2.2,Gy=7,Wy=.18,Xy=.3,qy=650,Yy=.18,jy=.8,Ky=.3,$y=.7,Zy=.34,Qy=.5,Jy=.7,tM=.5,eM=1,nM=.42,iM=.4,Gh=.18,sM=1,rM=.42,oM=.9,Wh=.32,aM=.85,cM=.62,lM=.32,hM=.28,uM=.4,dM=1,Xh=100,fM=2500,pM=1.6,mM=1,jr=.95,gM=1.08,qh=[{offset:0,duration:1.8},{offset:3.42,duration:1.9},{offset:6.85,duration:1.8}];class _M{constructor(){_(this,"ctx");_(this,"laserBuffer",null);_(this,"explosionBuffer",null);_(this,"hitBuffer",null);_(this,"missileReleaseBuffer",null);_(this,"missileWindupBuffer",null);_(this,"missileSpinBuffer",null);_(this,"missileIgniteBuffer",null);_(this,"missileBoostBuffer",null);_(this,"tickBuffer",null);_(this,"missileVoices",new Map);_(this,"missileSpinVoices",new Map);_(this,"ambience");_(this,"thrustBuffer",null);_(this,"thrustStarted",!1);_(this,"accelLpf");_(this,"accelGain");_(this,"accelTarget",0);_(this,"decelLpf");_(this,"decelGain");_(this,"decelTarget",0);_(this,"ambienceRateTarget",jr);_(this,"started",!1);_(this,"unlock",()=>this.start());this.ctx=new AudioContext,this.ambience=this.makeLoop(Ay),vM(this.ambience),this.ambience.playbackRate=jr;const t=this.ctx.createGain();t.gain.value=By,this.ctx.createMediaElementSource(this.ambience).connect(t),t.connect(this.ctx.destination);const e=this.makeThrustBus(Vy);this.accelLpf=e.lpf,this.accelGain=e.gain;const n=this.makeThrustBus(qy);this.decelLpf=n.lpf,this.decelGain=n.gain,this.load(Ry).then(i=>{this.thrustBuffer=i,this.startThrustSources()}),this.load(Cy).then(i=>{this.laserBuffer=i}),this.load(Py).then(i=>{this.explosionBuffer=i}),this.load(Iy).then(i=>{this.hitBuffer=i}),this.load(Ly).then(i=>{this.missileReleaseBuffer=i}),this.load(Dy).then(i=>{this.missileWindupBuffer=i}),this.load(Ny).then(i=>{this.missileSpinBuffer=i}),this.load(Uy).then(i=>{this.missileIgniteBuffer=i}),this.load(Oy).then(i=>{this.missileBoostBuffer=i}),this.load(Fy).then(i=>{this.tickBuffer=i}),window.addEventListener("keydown",this.unlock,{once:!0}),window.addEventListener("mousedown",this.unlock,{once:!0})}dispose(){window.removeEventListener("keydown",this.unlock),window.removeEventListener("mousedown",this.unlock);for(const t of this.missileVoices.values())try{t.src.stop()}catch{}for(const t of this.missileSpinVoices.values())try{t.src.stop()}catch{}this.missileVoices.clear(),this.missileSpinVoices.clear(),this.ambience.pause(),this.ctx.close()}makeLoop(t){const e=new Audio(t);return e.loop=!0,e.crossOrigin="anonymous",e}makeThrustBus(t){const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=t;const n=this.ctx.createGain();return n.gain.value=0,e.connect(n),n.connect(this.ctx.destination),{lpf:e,gain:n}}startThrustSources(){!this.thrustBuffer||!this.started||this.thrustStarted||(this.thrustStarted=!0,this.playThrustLoop(Hy,this.accelLpf),this.playThrustLoop(Xy,this.decelLpf))}playThrustLoop(t,e){const n=this.ctx.createBufferSource();n.buffer=this.thrustBuffer,n.loop=!0,n.loopStart=Vh,n.loopEnd=Gy,n.playbackRate.value=t,n.connect(e),n.start(0,Vh)}async load(t){try{const e=await(await fetch(t)).arrayBuffer();return await this.ctx.decodeAudioData(e)}catch{return null}}start(){this.started||(this.started=!0,this.ctx.resume(),this.ambience.play().catch(()=>{}),this.startThrustSources())}playTick(){this.oneShot(this.tickBuffer,uM,dM)}playPulsar(){const t=qh[Math.random()*qh.length|0];this.oneShot(this.laserBuffer,Yy,jy,t.offset,t.duration)}playExplosion(t=0){const e=En(t);e<=0||this.oneShot(this.explosionBuffer,Ky*e,$y,Zy)}playHit(t=0){const e=En(t);e<=0||this.oneShot(this.hitBuffer,Qy*e,Jy,0,mM)}playMissileRelease(t=0){const e=En(t);e>0&&this.oneShot(this.missileReleaseBuffer,tM*e,eM)}playMissileWindup(t=0){const e=En(t);if(!this.missileWindupBuffer||this.ctx.state!=="running"||e<=0)return;const n=this.ctx.createBufferSource();n.buffer=this.missileWindupBuffer;const i=this.ctx.createGain();i.gain.value=nM*e,n.connect(i).connect(this.ctx.destination),n.start(this.ctx.currentTime+iM)}startMissileSpin(t,e=0){if(!this.missileSpinBuffer||this.ctx.state!=="running"||this.missileSpinVoices.has(t))return;const n=this.ctx.createBufferSource();n.buffer=this.missileSpinBuffer,n.loop=!0,n.playbackRate.value=sM;const i=this.ctx.createGain();i.gain.value=Gh*En(e),n.connect(i).connect(this.ctx.destination),n.start(0),this.missileSpinVoices.set(t,{src:n,gain:i})}updateMissileSpin(t,e){const n=this.missileSpinVoices.get(t);n&&(n.gain.gain.value=Gh*En(e))}stopMissileSpin(t){const e=this.missileSpinVoices.get(t);if(!e)return;this.missileSpinVoices.delete(t);const n=this.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,n),e.gain.gain.linearRampToValueAtTime(0,n+.1);try{e.src.stop(n+.12)}catch{}}playMissileIgnite(t=0){const e=En(t);e>0&&this.oneShot(this.missileIgniteBuffer,rM*e,oM)}playMissileDetonation(t=0){const e=En(t);e>0&&this.oneShot(this.explosionBuffer,cM*e,lM,hM)}startMissileBoost(t,e=0){if(!this.missileBoostBuffer||this.ctx.state!=="running"||this.missileVoices.has(t))return;const n=this.ctx.createBufferSource();n.buffer=this.missileBoostBuffer,n.loop=!0,n.playbackRate.value=aM;const i=this.ctx.createGain();i.gain.value=Wh*En(e),n.connect(i).connect(this.ctx.destination),n.start(0),this.missileVoices.set(t,{src:n,gain:i})}updateMissileBoost(t,e){const n=this.missileVoices.get(t);n&&(n.gain.gain.value=Wh*En(e))}stopMissileBoost(t){const e=this.missileVoices.get(t);if(!e)return;this.missileVoices.delete(t);const n=this.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,n),e.gain.gain.linearRampToValueAtTime(0,n+.08);try{e.src.stop(n+.12)}catch{}}oneShot(t,e,n=1,i=0,s){if(!t||this.ctx.state!=="running")return;const o=this.ctx.createBufferSource();o.buffer=t,o.playbackRate.value=n;const a=this.ctx.createGain();if(a.gain.value=e,o.connect(a).connect(this.ctx.destination),s!==void 0){const c=this.ctx.currentTime,l=s/n,h=Math.min(.12,l*.25);a.gain.setValueAtTime(e,c+l-h),a.gain.linearRampToValueAtTime(0,c+l),o.start(0,i,s)}else o.start(0,i)}setThrust(t,e){const n=e<0?0:e>1?1:e;this.accelTarget=t?ky:n*zy}setDecel(t){this.decelTarget=t?Wy:0}setSpeedFraction(t){const e=t<0?0:t>1?1:t;this.ambienceRateTarget=jr+(gM-jr)*e}update(t){const e=1-Math.exp(-6*t),n=this.accelGain.gain;n.value+=(this.accelTarget-n.value)*e;const i=this.decelGain.gain;i.value+=(this.decelTarget-i.value)*e;const s=1-Math.exp(-3*t);this.ambience.playbackRate+=(this.ambienceRateTarget-this.ambience.playbackRate)*s}}function En(r){return r<=Xh?1:r>=fM?0:Math.pow(Xh/r,pM)}function vM(r){const t=r;t.preservesPitch=!1,t.mozPreservesPitch=!1,t.webkitPreservesPitch=!1}const Kr=["thrusters","weapons","sensors"],Yh=1,$r=4,ha={balanced:{thrusters:2,weapons:2,sensors:2},combat:{thrusters:1,weapons:4,sensors:1},cruise:{thrusters:4,weapons:1,sensors:1},recon:{thrusters:1,weapons:1,sensors:4}};class xM{constructor(){_(this,"target",{...ha.balanced});_(this,"effective",{...ha.balanced})}get systems(){return Kr}get maxCells(){return $r}level(t){return this.target[t]}factor(t){return .5+.25*this.effective[t]}boost(t){if(this.target[t]>=$r)return;const e=this.richestOther(t);e&&(this.target[e]-=1,this.target[t]+=1)}reduce(t){if(this.target[t]<=Yh)return;const e=this.poorestOther(t);e&&(this.target[t]-=1,this.target[e]+=1)}setPreset(t){this.target={...ha[t]}}update(t){const e=1-Math.exp(-2.5*t);for(const n of Kr)this.effective[n]+=(this.target[n]-this.effective[n])*e}richestOther(t){let e=null,n=Yh;for(const i of Kr)i!==t&&this.target[i]>n&&(n=this.target[i],e=i);return e}poorestOther(t){let e=null,n=$r+1;for(const i of Kr)i!==t&&this.target[i]<n&&(n=this.target[i],e=i);return e&&this.target[e]<$r?e:null}}function yM(r){const t=r,e=[],n=(D,W)=>{window.addEventListener(D,W),e.push(()=>window.removeEventListener(D,W))},i=new Kd,s=new ey(t),o=new Ty(t),a=new Zd,c=new oy(a),l=i.add(new Qd(gy));c.bind(l),s.setPlayer(l);const h=new iy(t),u=new sy({onSelectWeapon:D=>{l.selectWeapon(D),C()},onRoutePower:(D,W)=>{const et=D;W?K.reduce(et):K.boost(et),C()}});h.register(u),h.setMode("bridge");const d=[[new T(-45,5,-220),"Raider Alpha","Autonomous Drone","Ferro-alloy hull"],[new T(50,18,-270),"Raider Bravo","Autonomous Drone","Ferro-alloy hull"],[new T(0,-25,-320),"Raider Charlie","Heavy Sentinel","Composite plating"],[new T(95,-8,-300),"Raider Delta","Autonomous Drone","Ferro-alloy hull"]];for(const[D,W,et,gt]of d)i.add(new rs(D,8,100,{designation:W,className:et,allegiance:"foe",composition:gt}));const f=new xy("Kepler Verge");f.addPoi("Drifting Beacon",new T(120,0,-180),"signal"),f.addPoi("Silent Signal",new T(60,0,-430),"signal"),f.addPoi("Derelict Hauler",new T(-330,40,-520),"derelict"),f.addPoi("Ion Anomaly",new T(520,-60,-900),"anomaly"),f.addPoi("Relay Station",new T(-160,20,-1220),"station"),s.setSector(f),new by(u.sensorLog,i.events);const m={signal:"Signal Source",derelict:"Derelict Hulk",anomaly:"Spatial Anomaly",station:"Relay Station"},v={signal:"Modulated EM emission",derelict:"Cold ferro-alloy husk",anomaly:"Ionised plasma flux",station:"Alloy superstructure"};let g=null;function p(D){if(D.kind==="target"){const et=i.get(D.id);return et instanceof rs?{designation:et.designation,className:et.className,allegiance:et.allegiance,composition:et.composition,range:P(et.position.x,et.position.y,et.position.z),integrity:{hull:et.hull,max:et.maxHull},canAttack:et.allegiance==="foe"}:null}const W=f.pois.find(et=>et.id===D.id);return!W||!W.discovered?null:{designation:W.name,className:m[W.kind],allegiance:"neutral",composition:v[W.kind],range:P(W.position.x,W.position.y,W.position.z),canAttack:!1}}function y(D){const W=D?p(D):null;D&&W?(g=D,s.setSelected(D),S.update(W),S.show()):(g=null,s.setSelected(null),S.hide())}const S=new wy(t,{onClose:()=>y(null),onHail:()=>{if(C(),!g)return;const D=p(g);if(!D)return;const W=D.allegiance==="foe"?"no response to hail — hostile signature holds.":D.allegiance==="friend"?"channel open, telemetry nominal.":"automated beacon acknowledges; no crew aboard.";i.events.emit("report",{source:"Comms",text:`Hailing ${D.designation} — ${W}`,alert:D.allegiance==="foe"})},onAttack:()=>{if(C(),(g==null?void 0:g.kind)!=="target")return;const D=i.get(g.id);D&&cr(D)&&l.requestShot(D)}}),x=new _M,P=(D,W,et)=>Math.hypot(D-l.position.x,W-l.position.y,et-l.position.z);function C(){x.playTick()}i.events.on("weapon-fired",D=>{D.kind!=="missile"&&x.playPulsar()}),i.events.on("missile-launched",D=>{const W=P(D.x,D.y,D.z);x.playMissileRelease(W),x.playMissileWindup(W)}),i.events.on("missile-ignited",D=>x.playMissileIgnite(P(D.x,D.y,D.z))),i.events.on("missile-boost",D=>{const W=P(D.x,D.y,D.z);x.startMissileBoost(D.id,W),x.startMissileSpin(D.id,W)}),i.events.on("missile-burnout",D=>x.stopMissileBoost(D.id)),i.events.on("missile-removed",D=>{x.stopMissileBoost(D.id),x.stopMissileSpin(D.id)});const A=6,I=2.6,M=90,b=45,L=.4;i.events.on("missile-detonated",D=>{x.stopMissileBoost(D.id);const W=l.position.x-D.x,et=l.position.y-D.y,gt=l.position.z-D.z,pt=Math.hypot(W,et,gt)||.001;x.playMissileDetonation(pt),s.spawnExplosionEffect(D.x,D.y,D.z,D.radius);const Ct=D.radius*A;if(pt>=Ct)return;const St=1-pt/Ct;s.addShake(I*St*St);const Tt=M*St/pt;l.applyImpulse(W*Tt,et*Tt,gt*Tt),pt<Ct*L&&(l.hull=Math.max(0,l.hull-b*St),o.flash(St))});let z=0;i.events.on("entity-destroyed",D=>{if(z++,D.kind==="target"){const W=D.x-l.position.x,et=D.y-l.position.y,gt=D.z-l.position.z;x.playExplosion(Math.hypot(W,et,gt)),s.spawnExplosionEffect(D.x,D.y,D.z),s.spawnExplosionResidue(D.x,D.y,D.z),s.clearDamage(D.id)}});const H=8;i.events.on("target-hit",D=>{if(D.hull>0){const W=D.x-l.position.x,et=D.y-l.position.y,gt=D.z-l.position.z,pt=Math.hypot(W,et,gt);x.playHit(pt);const Ct=pt>0?H/pt:0,St=D.x-W*Ct,Tt=D.y-et*Ct,F=D.z-gt*Ct;s.spawnHitEffect(St,Tt,F),s.spawnDamage(D.targetId,St,Tt,F,D.damage,D.impact)}});let q=0;const Q=new T;n("keydown",D=>{if(D.code!=="KeyP"||D.repeat)return;q++;const W=`Probe ${q}`;Q.set(0,0,-1).applyQuaternion(l.quaternion);const et=l.position.clone().addScaledVector(Q,10);i.add(new gc(et,Q,220,1600,300,W,f)),i.events.emit("report",{source:"DEC",text:`${W} dispatched.`})}),s.renderer.domElement.addEventListener("mousedown",D=>{const W=s.renderer.domElement.getBoundingClientRect(),et=D.clientX-W.left,gt=D.clientY-W.top;if(!D.shiftKey){const Tt=s.pickSelectable(et,gt,i);y(Tt),Tt&&C();return}let pt=null,Ct=1/0;for(const Tt of s.getTargetTracks(i)){const F=Tt.size+8;if(Math.abs(et-Tt.x)<=F&&Math.abs(gt-Tt.y)<=F){const he=Math.hypot(et-Tt.x,gt-Tt.y);he<Ct&&(Ct=he,pt=Tt.id)}}const St=pt!==null?i.get(pt):void 0;St&&cr(St)?l.requestShot(St):l.requestAimedShot(s.aimPointFromScreen(et,gt))});const j=D=>{document.body.classList.toggle("targeting",D)};n("keydown",D=>{D.key==="Shift"&&j(!0)}),n("keyup",D=>{D.key==="Shift"&&j(!1)}),n("blur",()=>j(!1)),n("keydown",D=>{if(!D.repeat)switch(D.code){case"KeyC":s.toggleCamera();break;case"BracketLeft":l.cycleWeapon(-1),C();break;case"BracketRight":l.cycleWeapon(1),C();break;case"Backslash":u.resetLayout(),S.resetLayout();break;case"Escape":y(null);break}});const K=new xM,G={thrusters:"THRUST",weapons:"WEAPON",sensors:"SENSOR"};n("keydown",D=>{if(!D.repeat){switch(D.code){case"Digit1":D.shiftKey?K.reduce("thrusters"):K.boost("thrusters");break;case"Digit2":D.shiftKey?K.reduce("weapons"):K.boost("weapons");break;case"Digit3":D.shiftKey?K.reduce("sensors"):K.boost("sensors");break;case"Digit0":K.setPreset("balanced");break;case"Digit7":K.setPreset("combat");break;case"Digit8":K.setPreset("cruise");break;case"Digit9":K.setPreset("recon");break;default:return}C()}});function st(){return K.systems.map(D=>({key:D,label:G[D],level:K.level(D),max:K.maxCells,factor:K.factor(D)}))}const ct=800,ut=new T;function It(){const D=[];ut.set(0,0,-1).applyQuaternion(l.quaternion);const W=Math.hypot(ut.x,ut.z)||1,et=ut.x/W,gt=ut.z/W,pt=-gt,Ct=et,St=(Tt,F,he,kt)=>{const Ft=he-l.position.x,Mt=kt-l.position.z;let ee=(Ft*pt+Mt*Ct)/ct,Rt=-(Ft*et+Mt*gt)/ct;const R=Math.hypot(ee,Rt),E=R>1;E&&(ee/=R,Rt/=R),D.push({key:Tt,x:ee,y:Rt,kind:F,edge:E})};for(const Tt of f.pois)Tt.discovered&&St(`poi-${Tt.id}`,Tt.kind,Tt.position.x,Tt.position.z);for(const Tt of i.all())Tt instanceof gc&&St(`probe-${Tt.id}`,"probe",Tt.position.x,Tt.position.z);return D}const Qt=.3;let U=null;const Z=new jd({fixedUpdate:D=>{c.update(D),K.update(D),l.thrusterPower=K.factor("thrusters"),l.weaponPower=K.factor("weapons"),i.tick(D);const W=l.speed,et=l.profile.handling.maxSpeed,gt=a.isDown("KeyR")&&W<et*.99,pt=l.turnInput,Ct=Math.min(1,Math.abs(pt.pitch)+Math.abs(pt.yaw)+Math.abs(pt.roll));x.setThrust(gt,Math.max(l.throttle,Ct*Qt)),x.setDecel(a.isDown("KeyF")&&W>1),x.setSpeedFraction(W/et),x.update(D);for(const St of i.all())if(St instanceof lr){const Tt=P(St.position.x,St.position.y,St.position.z);x.updateMissileBoost(St.id,Tt),x.updateMissileSpin(St.id,Tt)}for(const St of f.revealNear(l.position,l.profile.systems.sensorRange*K.factor("sensors")))i.events.emit("report",{source:"Sensors",text:`Contact detected — ${St.name}`})},render:D=>{if(s.render(i,D),h.update({craftName:l.profile.name,throttle:l.throttle,speed:l.speed,maxSpeed:l.profile.handling.maxSpeed,hull:l.hull,maxHull:l.maxHull,weapons:l.getWeaponStatuses(),targetsDestroyed:z,sectorName:f.name,tracks:s.getTargetTracks(i),radar:It(),power:st(),primaryPower:l.primaryPower,camera:s.currentCamera,metrics:U}),g){const W=p(g);W?S.update(W):y(null)}},onMetrics:D=>{U=D}});return Z.start(),{dispose(){Z.stop();for(const D of e)D();a.dispose(),s.dispose(),x.dispose(),document.body.classList.remove("targeting")}}}const MM=new T(0,0,-1),SM=new T(1,0,0),bM=1.1,jh=.9,TM=.7,EM=.6,Kh=.6,wM=.9,AM=.6,$h=.6,RM=-.5,CM=Math.PI/6,PM=.024,IM=.015,LM=.017,DM=.01,NM=.06;class UM{constructor(t){_(this,"ship",null);_(this,"forward",new T);_(this,"right",new T);_(this,"driftClock",0);_(this,"idleEase",0);this.input=t}bind(t){this.ship=t}update(t){var y;const e=this.ship;if(!e)return;const n=e.profile.handling,i=!!((y=e.selectedWeaponSpec)!=null&&y.scoped),s=S=>!i&&this.input.isDown(S),o=(S,x)=>i?0:this.input.axis(S,x),a=s("ShiftLeft")||s("ShiftRight"),c=!i&&!a&&!s("KeyA")&&!s("KeyD")&&!s("KeyW")&&!s("KeyS")&&!s("KeyQ")&&!s("KeyE");this.driftClock+=t,this.idleEase+=((c?1:0)-this.idleEase)*(1-Math.exp(-1.2*t));const l=this.driftClock,h=this.idleEase*(PM*Math.sin(l*.53)+IM*Math.sin(l*.91+1.7)),u=this.idleEase*(LM*Math.sin(l*.61+.5)+DM*Math.sin(l*1.13+2.3)),d=this.idleEase*NM*Math.sin(l*.43+.9);s("KeyX")?e.throttle=0:e.throttle=Mi((a?0:o("KeyW","KeyS"))+o("KeyR","KeyF"),RM,1),this.forward.copy(MM).applyQuaternion(e.quaternion),this.right.copy(SM).applyQuaternion(e.quaternion);const f=Math.asin(Mi(this.right.y,-1,1)),m=Math.asin(Mi(this.forward.y,-1,1));e.strafe=a?o("KeyD","KeyA"):0,e.lift=a?o("KeyW","KeyS"):0,a||(e.lift=Mi(-this.forward.y*e.throttle*n.maxSpeed/n.strafeSpeed,-1,1)),e.lift+=d;let v=0;!a&&s("KeyA")?v=jh:!a&&s("KeyD")&&(v=-jh),v+=h,e.turnInput.roll=Mi((v-f)*TM-e.angularVel.z*EM,-Kh,Kh);let g=-.15*e.throttle;g+=u,e.turnInput.pitch=Mi((g-m)*wM-e.angularVel.x*AM,-$h,$h),e.turnInput.yaw=Mi(-this.right.y*bM,-1,1);const p=o("KeyQ","KeyE")*CM;e.bankOffset+=(p-e.bankOffset)*(1-Math.exp(-3.5*t)),e.firing=!1}}function Mi(r,t,e){return r<t?t:r>e?e:r}let Jc=[];function OM(r){Jc=r}function FM(){Jc=[]}function Jd(r,t){for(const e of Jc){const n=r.x-e.x,i=r.z-e.z,s=e.r+t,o=n*n+i*i;if(!(o>=s*s))if(o>1e-6){const a=Math.sqrt(o),c=(s-a)/a;r.x+=n*c,r.z+=i*c}else r.x+=s}}const BM=4,kM={walker:{speed:[6,9],hp:[10,16],gaitRate:[5,7],turnRate:.9,scale:[.9,1.12]},shambler:{speed:[3,5],hp:[14,20],gaitRate:[3,4.5],turnRate:.55,scale:[.98,1.18]},crawler:{speed:[2.5,4],hp:[8,13],gaitRate:[4,6],turnRate:.7,scale:[.82,.98]}},zM=9,HM=.15,Zh=[3,6],ne=(r,t,e)=>({r,g:t,b:e}),VM=[ne(.5,.54,.47),ne(.44,.5,.38),ne(.52,.5,.36),ne(.42,.36,.4),ne(.5,.44,.34),ne(.56,.58,.52),ne(.4,.46,.4)],Qh=[ne(.42,.44,.42),ne(.5,.5,.48),ne(.34,.36,.35)],Jh=[ne(.2,.2,.22),ne(.26,.24,.2),ne(.24,.26,.24)],GM=[ne(.34,.26,.18),ne(.3,.32,.2),ne(.36,.3,.22)],WM=ne(.32,.4,.52),XM=[ne(.16,.16,.18),ne(.2,.19,.2),ne(.24,.22,.22)],tu=[ne(.5,.48,.3),ne(.42,.4,.26),ne(.46,.44,.32)],qM=[ne(.55,.55,.52),ne(.5,.48,.44),ne(.46,.5,.5)],eu=[ne(.36,.36,.32),ne(.3,.3,.26),ne(.4,.38,.32)],YM=[ne(.09,.08,.07),ne(.2,.14,.09),ne(.5,.5,.48),ne(.5,.44,.3)];function Te(r,t){return r+Math.random()*(t-r)}function sn(r){return r[Math.random()*r.length|0]}function ua(r){return r<0?0:r>1?1:r}function Ke(r,t){return{r:ua(r.r+Te(-t,t)),g:ua(r.g+Te(-t,t)),b:ua(r.b+Te(-t,t))}}function jM(r){const t=Te(.9,1.16),e=Te(.82,1.32)*(r==="f"?.94:1),n=Te(.9,1.12)*(r==="f"?.95:1),i=Ke(sn(VM),.05);let s=0,o=0,a=0,c,l;const h=Math.random();h<.2?(s=Math.random()<.5?1:0,o=0,a=Math.random()<.2?2:0,c=Ke(sn(Qh),.04),l=Ke(sn(Jh),.04)):h<.38?(s=2,o=1,a=Math.random()<.15?2:0,c=Ke(sn(GM),.05),l=Ke(WM,.05)):h<.52?(s=1,o=2,a=0,c=Ke(sn(Qh),.04),l=Ke(sn(XM),.05)):h<.66?(s=3,o=0,a=Math.random()<.2?2:0,c=Ke(sn(tu),.05),l=Ke(sn(tu),.05)):h<.8?(s=0,o=Math.random()<.5?1:0,a=Math.random()<.4?1:0,c=Ke(sn(qM),.05),l=Ke(sn(Jh),.05)):(s=0,o=Math.random()<.5?2:0,a=2,c=Ke(sn(eu),.06),l=Ke(sn(eu),.06));const u=Math.random()<.7?Math.random()*BM|0:-1;return{lengthMul:t,girth:e,headScale:n,torsoType:s,legType:o,armType:a,hairStyle:u,skin:i,shirt:c,pants:l,hair:Ke(sn(YM),.04),hunchBias:Te(-.05,.3),headTilt:Te(-.35,.55),headRoll:Te(-.5,.5),armRaise:Math.random()<.3?Te(.7,1.5):0,raiseLeft:Math.random()<.5,limp:Math.random()<.4?Te(.1,.4):0,missingArm:Math.random()<.08?Math.random()<.5?0:1:-1}}class qn{constructor(t,e,n,i,s){_(this,"id",0);_(this,"position",new T);_(this,"prevPosition",new T);_(this,"radius");_(this,"hp");_(this,"maxHp");_(this,"collidable",!0);_(this,"type");_(this,"sex");_(this,"scale");_(this,"hitHeight");_(this,"look");_(this,"gaitRate");_(this,"gaitPhase");_(this,"heading");_(this,"targetHeading");_(this,"turnRate");_(this,"speed");_(this,"wanderTimer",0);_(this,"stun",0);_(this,"idling",!1);_(this,"idleTimer",0);_(this,"state","alive");_(this,"deadTime",0);_(this,"fallDir",0);_(this,"killImpact",null);_(this,"killedPrecision",!1);_(this,"killedByCommando",!1);_(this,"boundR");const o=kM[t];this.type=t,this.sex=e,this.boundR=s;const a=Te(o.scale[0],o.scale[1])*(e==="f"?.92:1);this.scale=a*zM,this.hp=Math.round(Te(o.hp[0],o.hp[1])),this.maxHp=this.hp,this.speed=Te(o.speed[0],o.speed[1]),this.gaitRate=Te(o.gaitRate[0],o.gaitRate[1]),this.turnRate=o.turnRate,this.gaitPhase=Math.random()*Math.PI*2,this.heading=Math.random()*Math.PI*2,this.targetHeading=this.heading,this.look=jM(e);const c=this.scale*1.9;t==="crawler"?(this.hitHeight=c*.32,this.radius=3.5*a):(this.hitHeight=c*.95,this.radius=2.6*a),this.position.set(n,ve(n,i),i),this.prevPosition.copy(this.position)}get alive(){return this.state==="alive"}get stunned(){return this.stun>0}update(t){if(this.prevPosition.copy(this.position),this.state==="dead")return;if(this.stun>0){this.stun-=t;return}if(this.idleTimer>0){this.idleTimer-=t,this.idleTimer<=0&&(this.idling=!1);return}if(this.wanderTimer-=t,this.wanderTimer<=0){if(this.wanderTimer=Te(2,5),this.type!=="crawler"&&Math.random()<HM){this.idleTimer=Te(Zh[0],Zh[1]),this.idling=!0;return}this.targetHeading=this.heading+Te(-1.2,1.2)}const{x:e,z:n}=this.position;e*e+n*n>this.boundR*this.boundR&&(this.targetHeading=Math.atan2(-e,-n));let i=this.targetHeading-this.heading;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const s=this.turnRate*t;this.heading+=Math.abs(i)<s?i:Math.sign(i)*s,this.position.x+=Math.sin(this.heading)*this.speed*t,this.position.z+=Math.cos(this.heading)*this.speed*t,Jd(this.position,this.radius),this.position.y=ve(this.position.x,this.position.z),this.gaitPhase+=this.gaitRate*t}applyDamage(t,e,n="bolt",i=!1,s=!1){this.state!=="dead"&&(this.hp-=t,e.events.emit("target-hit",{targetId:this.id,damage:t,hull:Math.max(0,this.hp),x:this.position.x,y:this.position.y,z:this.position.z,impact:n}),this.hp<=0?(this.state="dead",this.collidable=!1,this.killImpact=n,this.killedPrecision=i,this.killedByCommando=s,this.deadTime=e.elapsed,this.fallDir=Math.random()*Math.PI*2,e.events.emit("entity-destroyed",{id:this.id,kind:"zombie",x:this.position.x,y:this.position.y,z:this.position.z})):this.stun=Te(1,3))}}function KM(r,t,e){const n=[],i=e*1.05;for(let s=0;s<t;s++){const o=e*Math.sqrt(Math.random()),a=Math.random()*Math.PI*2,c=Math.random(),l=c<.55?"walker":c<.85?"shambler":"crawler",h=Math.random()<.5?"m":"f";n.push(r.add(new qn(l,h,Math.cos(a)*o,Math.sin(a)*o,i)))}return n}const tl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $M=new yo(-1,1,1,-1,0,1);class ZM extends Re{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const QM=new ZM;class el{constructor(t){this._mesh=new Lt(QM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$M)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class _c extends fr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=sr.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new el(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nu extends fr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class JM extends fr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class tS{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _c(tl),this.copyPass.material.blending=Yn,this.clock=new ox}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nu!==void 0&&(o instanceof nu?n=!0:o instanceof JM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eS extends fr{constructor(t,e){super();const n=tl;this.map=t,this.opacity=e!==void 0?e:1,this.uniforms=sr.clone(n.uniforms),this.material=new Le({uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0}),this.needsSwap=!1,this.fsQuad=new el(null)}render(t,e,n){const i=t.autoClear;t.autoClear=!1,this.fsQuad.material=this.material,this.uniforms.opacity.value=this.opacity,this.uniforms.tDiffuse.value=this.map,this.material.transparent=this.opacity<1,t.setRenderTarget(this.renderToScreen?null:n),this.clear&&t.clear(),this.fsQuad.render(t),t.autoClear=i}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const nS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class bs extends fr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,o,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new pn(s,o,{type:jn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new pn(s,o,{type:jn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=nS;this.highPassUniforms=sr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=tl;this.copyUniforms=sr.clone(h.uniforms),this.blendMaterial=new Le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:We,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new Ue,this.fsQuad=new el(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new vt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}bs.BlurDirectionX=new vt(1,0);bs.BlurDirectionY=new vt(0,1);function iu(r,t){if(t===Jf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===dc||t===_d){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===dc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class nl extends Rs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new aS(e)}),this.register(function(e){return new cS(e)}),this.register(function(e){return new _S(e)}),this.register(function(e){return new vS(e)}),this.register(function(e){return new xS(e)}),this.register(function(e){return new hS(e)}),this.register(function(e){return new uS(e)}),this.register(function(e){return new dS(e)}),this.register(function(e){return new fS(e)}),this.register(function(e){return new oS(e)}),this.register(function(e){return new pS(e)}),this.register(function(e){return new lS(e)}),this.register(function(e){return new gS(e)}),this.register(function(e){return new mS(e)}),this.register(function(e){return new sS(e)}),this.register(function(e){return new yS(e)}),this.register(function(e){return new MS(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Js.extractUrlBase(t);o=Js.resolveURL(l,this.path)}else o=Js.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new Xd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===tf){try{o[$t.KHR_BINARY_GLTF]=new SS(t)}catch(u){i&&i(u);return}s=JSON.parse(o[$t.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new US(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case $t.KHR_MATERIALS_UNLIT:o[u]=new rS;break;case $t.KHR_DRACO_MESH_COMPRESSION:o[u]=new bS(s,this.dracoLoader);break;case $t.KHR_TEXTURE_TRANSFORM:o[u]=new TS;break;case $t.KHR_MESH_QUANTIZATION:o[u]=new ES;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function iS(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const $t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sS{constructor(t){this.parser=t,this.name=$t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new bt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ye);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ar(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new nx(h),l.distance=u;break;case"spot":l=new tx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class rS{constructor(){this.name=$t.KHR_MATERIALS_UNLIT}getMaterialType(){return Ue}extendParams(t,e,n){const i=[];t.color=new bt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ye),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ie))}return Promise.all(i)}}class oS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class aS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new vt(a,a)}return Promise.all(s)}}class cS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class lS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class hS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new bt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ye)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ie)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class uS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class dS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new bt().setRGB(a[0],a[1],a[2],Ye),Promise.all(s)}}class fS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class pS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new bt().setRGB(a[0],a[1],a[2],Ye),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ie)),Promise.all(s)}}class mS{constructor(t){this.parser=t,this.name=$t.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class gS{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class _S{constructor(t){this.parser=t,this.name=$t.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class vS{constructor(t){this.parser=t,this.name=$t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class xS{constructor(t){this.parser=t,this.name=$t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class yS{constructor(t){this.name=$t.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class MS{constructor(t){this.name=$t.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==un.TRIANGLES&&l.mode!==un.TRIANGLE_STRIP&&l.mode!==un.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const v=new Ht,g=new T,p=new Zt,y=new T(1,1,1),S=new zd(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,v.compose(g,p,y));for(const x in c)if(x==="_COLOR_0"){const P=c[x];S.instanceColor=new wi(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);_e.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const tf="glTF",Xs=12,su={JSON:1313821514,BIN:5130562};class SS{constructor(t){this.name=$t.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xs,s=new DataView(t,Xs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===su.JSON){const l=new Uint8Array(t,Xs+o,a);this.content=n.decode(l)}else if(c===su.BIN){const l=Xs+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$t.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=vc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=vc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=us[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},a,l,Ye,d)})})}}class TS{constructor(){this.name=$t.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ES{constructor(){this.name=$t.KHR_MESH_QUANTIZATION}}class ef extends ur{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,v=m-l,g=-2*f+3*d,p=f-d,y=1-g,S=p-d+u;for(let x=0;x!==a;x++){const P=o[v+x+a],C=o[v+x+c]*h,A=o[m+x+a],I=o[m+x]*h;s[x]=y*P+S*C+g*A+p*I}return s}}const wS=new Zt;class AS extends ef{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return wS.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ru={9728:Oe,9729:rn,9984:od,9985:eo,9986:js,9987:Wn},ou={33071:Rn,33648:lo,10497:Pn},da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RS={CUBICSPLINE:void 0,LINEAR:nr,STEP:er},fa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),r.DefaultMaterial}function Si(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Gn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function PS(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function IS(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LS(r){let t;const e=r.extensions&&r.extensions[$t.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+pa(e.attributes):t=r.indices+":"+pa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+pa(r.targets[n]);return t}function pa(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function xc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const NS=new Ht;class US{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new qd(this.options.manager):this.textureLoader=new rx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Si(s,a,i),Gn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[$t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Js.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=da[i.type],a=us[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new qe(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=da[i.type],l=us[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=e.cache.get(y);S||(v=new l(a,p*f,i.count*f/h),S=new Fd(v,f/h),e.cache.add(y,S)),g=new rr(S,c,d%f/h,m)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),g=new qe(v,c,m);if(i.sparse!==void 0){const p=da.SCALAR,y=us[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,P=new y(o[1],S,i.sparse.count*p),C=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new qe(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,I=P.length;A<I;A++){const M=P[A];if(g.setX(M,C[A*c]),c>=2&&g.setY(M,C[A*c+1]),c>=3&&g.setZ(M,C[A*c+2]),c>=4&&g.setW(M,C[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=ru[d.magFilter]||rn,h.minFilter=ru[d.minFilter]||Wn,h.wrapS=ou[d.wrapS]||Pn,h.wrapT=ou[d.wrapT]||Pn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Oe&&h.minFilter!==rn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(v){const g=new Ee(v);g.needsUpdate=!0,d(g)}),e.load(Js.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Gn(u,o),u.userData.mimeType=o.mimeType||DS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[$t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[$t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Gc,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Hc,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ye}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},c=s.extensions||{},l=[];if(c[$t.KHR_MATERIALS_UNLIT]){const u=i[$t.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new bt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ye),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ie)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=An);const h=s.alphaMode||fa.OPAQUE;if(h===fa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ue&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new vt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Ue&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ue){const u=s.emissiveFactor;a.emissive=new bt().setRGB(u[0],u[1],u[2],Ye)}return s.emissiveTexture!==void 0&&o!==Ue&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ie)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Gn(u,s),e.associations.set(u,{materials:t}),s.extensions&&Si(i,u,s),u})}createUniqueName(t){const e=Yt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[$t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return au(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=LS(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$t.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=au(new Re,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?CS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=o[f];let p;const y=l[f];if(g.mode===un.TRIANGLES||g.mode===un.TRIANGLE_STRIP||g.mode===un.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Bv(v,y):new Lt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===un.TRIANGLE_STRIP?p.geometry=iu(p.geometry,_d):g.mode===un.TRIANGLE_FAN&&(p.geometry=iu(p.geometry,dc));else if(g.mode===un.LINES)p=new Hd(v,y);else if(g.mode===un.LINE_STRIP)p=new Vc(v,y);else if(g.mode===un.LINE_LOOP)p=new Hv(v,y);else if(g.mode===un.POINTS)p=new Wc(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&IS(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Gn(p,s),g.extensions&&Si(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Si(i,u[0],s),u[0];const d=new pe;s.extensions&&Si(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ne(yd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new yo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Gn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ht;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new zc(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,S=d.length;y<S;y++){const x=d[y],P=f[y],C=m[y],A=v[y],I=g[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,P,C,A,I);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new or(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,NS)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new kd:l.length>1?h=new pe:l.length===1?h=l[0]:h=new _e,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Gn(h,s),s.extensions&&Si(n,h,s),s.matrix!==void 0){const u=new Ht;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new pe;n.name&&(s.name=i.createUniqueName(n.name)),Gn(s,n),n.extensions&&Si(e,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Sn||d instanceof Ee)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,c=[];oi[s.path]===oi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(oi[s.path]){case oi.weights:l=ys;break;case oi.rotation:l=Ms;break;case oi.position:case oi.scale:l=Ss;break;default:switch(n.itemSize){case 1:l=ys;break;case 2:case 3:default:l=Ss;break}break}const h=i.interpolation!==void 0?RS[i.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+oi[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=xc(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ms?AS:ef;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function OS(r,t,e){const n=t.attributes,i=new bn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),a.normalized){const h=xc(us[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new T,c=new T;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=xc(us[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new In;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function au(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=vc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return Jt.workingColorSpace!==Ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Jt.workingColorSpace}" not supported.`),Gn(r,t),OS(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?PS(r,t.targets,e):r})}const cu=.13;function FS(r,t){const e=new Set;t.traverse(i=>{i.name&&e.add(Yt.sanitizeNodeName(i.name))});const n=r.tracks.filter(i=>e.has(Yt.sanitizeNodeName(Yt.parseTrackName(i.name).nodeName)));return new or(r.name,r.duration,n)}const nf=new T(.45,.5,.4).normalize(),co=24;function BS(r,t,e){const n=new Map;let i=0;const s=e.map(M=>{const b=Math.max(1,Math.ceil(M.clip.duration*co)),L=i;return n.set(M.name,[L,b]),i+=b,{clip:M.clip,start:L,count:b,loop:M.loop??!1}}),o=t.map(M=>M.geometry.attributes.position),a=o.map(M=>new Float32Array(M.count*i*4));let c=0;for(const M of o)c+=M.count;const l=new Float32Array(i),h=new Float32Array(i),u=new T;let d=1/0,f=-1/0,m=1/0,v=-1/0,g=1/0,p=-1/0;for(const M of s){const b=new $c(r);b.clipAction(FS(M.clip,r)).play();for(let L=0;L<M.count;L++){const z=M.count>1?L/M.count*M.clip.duration:0;b.setTime(z),r.updateMatrixWorld(!0);const H=M.start===0&&L===0;for(let q=0;q<t.length;q++){const Q=t[q],j=o[q],K=a[q],G=j.count,st=(M.start+L)*G*4;for(let ct=0;ct<G;ct++){u.fromBufferAttribute(j,ct),Q.applyBoneTransform(ct,u);const ut=u.y;u.y=-u.z,u.z=ut;const It=st+ct*4;K[It]=u.x,K[It+1]=u.y,K[It+2]=u.z,K[It+3]=0,l[M.start+L]+=u.x,h[M.start+L]+=u.z,H&&(u.x<d&&(d=u.x),u.x>f&&(f=u.x),u.y<m&&(m=u.y),u.y>v&&(v=u.y),u.z<g&&(g=u.z),u.z>p&&(p=u.z))}}}b.stopAllAction(),b.uncacheRoot(r)}const y=(d+f)/2,S=m,x=(g+p)/2,P=v-m||1,C=new Float32Array(i),A=new Float32Array(i);for(const M of s){if(!M.loop)continue;const b=l[M.start]/c,L=h[M.start]/c;for(let z=0;z<M.count;z++)C[M.start+z]=l[M.start+z]/c-b,A[M.start+z]=h[M.start+z]/c-L}return{vats:t.map((M,b)=>{const L=a[b],z=o[b].count;for(let q=0;q<i;q++){const Q=y+C[q],j=x+A[q],K=q*z*4;for(let G=0;G<z;G++){const st=K+G*4;L[st]-=Q,L[st+1]-=S,L[st+2]-=j}}const H=new kc(L,z,i,on,fn);return H.minFilter=Oe,H.magFilter=Oe,H.generateMipmaps=!1,H.needsUpdate=!0,{posTex:H,data:L,vertexCount:z,frameCount:i}}),ranges:n,height:P}}const kS=`
  attribute float aVertexId;
  attribute float aFrame;
  attribute vec2 aClip;      // (startRow, frameCount)
  attribute float aBright;   // per-instance brightness (corpses fade their NVG signature)
  attribute vec2 aPart;      // per-vertex: (region 0=body/1=head/2=Larm/3=Rarm, upperHalf 0/1)
  attribute float aSever;    // per-instance bitmask: 1 head, 2 Larm, 4 Rarm, 8 torso-cut
  uniform sampler2D uPos;
  uniform vec2 uTexSize;     // (vertexCount, frameCount)
  uniform vec4 uAnchors;     // socket vertex ids: neck, L-shoulder, R-shoulder, waist
  uniform float uGoreR;      // gore reach around a cut (baked units)
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vBright;
  varying float vGore;       // 0..1 stump redness at the fragment
  vec3 samplePos(float vid, float frame) {
    return texture2D(uPos, vec2((vid + 0.5) / uTexSize.x, (frame + 0.5) / uTexSize.y)).xyz;
  }
  vec3 interp(float vid, float f0, float f1, float frac) {
    return mix(samplePos(vid, f0), samplePos(vid, f1), frac);
  }
  void main() {
    float f0 = aClip.x + floor(aFrame);
    float f1 = aClip.x + mod(floor(aFrame) + 1.0, aClip.y); // wrap within the clip
    float frac = aFrame - floor(aFrame);
    vec3 p = interp(aVertexId, f0, f1, frac);
    float gore = 0.0;
    // Dismemberment (coherent per instance, so this branch is cheap on the un-severed).
    if (aSever > 0.5) {
      float s = aSever + 0.5;
      float sH = mod(floor(s), 2.0);
      float sL = mod(floor(s / 2.0), 2.0);
      float sR = mod(floor(s / 4.0), 2.0);
      float sB = mod(floor(s / 8.0), 2.0);
      float region = aPart.x;
      float upper = aPart.y;
      bool sev = false; float av = 0.0;
      if (sB > 0.5 && upper > 0.5) { sev = true; av = uAnchors.w; }          // torso cut: whole upper
      else if (sH > 0.5 && abs(region - 1.0) < 0.5) { sev = true; av = uAnchors.x; }
      else if (sL > 0.5 && abs(region - 2.0) < 0.5) { sev = true; av = uAnchors.y; }
      else if (sR > 0.5 && abs(region - 3.0) < 0.5) { sev = true; av = uAnchors.z; }
      if (sev) {
        p = interp(av, f0, f1, frac); // collapse the severed part into its socket (hidden)
      } else if (region < 0.5) {
        // Kept torso/legs: redden the stump ring around each active cut.
        if (sH > 0.5) gore = max(gore, 1.0 - length(p - interp(uAnchors.x, f0, f1, frac)) / uGoreR);
        if (sL > 0.5) gore = max(gore, 1.0 - length(p - interp(uAnchors.y, f0, f1, frac)) / uGoreR);
        if (sR > 0.5) gore = max(gore, 1.0 - length(p - interp(uAnchors.z, f0, f1, frac)) / uGoreR);
        if (sB > 0.5 && upper < 0.5)
          gore = max(gore, 1.0 - abs(p.y - interp(uAnchors.w, f0, f1, frac).y) / (uGoreR * 0.6));
      }
    }
    vGore = clamp(gore, 0.0, 1.0);
    vec4 wp = instanceMatrix * vec4(p, 1.0);
    vWorldPos = wp.xyz;
    vUv = uv;
    vBright = aBright;
    gl_Position = projectionMatrix * modelViewMatrix * wp;
  }
`,zS=`
  uniform sampler2D uMap;
  uniform float uHasMap;
  uniform vec3 uAmbient;
  uniform vec3 uMoonColor;
  uniform vec3 uMoonDir;
  uniform vec3 uGrade;
  uniform vec3 uBlood;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vBright;
  varying float vGore;
  void main() {
    vec3 N = normalize(cross(dFdx(vWorldPos), dFdy(vWorldPos)));
    vec3 base = uHasMap > 0.5 ? texture2D(uMap, vUv).rgb : vec3(0.55, 0.57, 0.5);
    vec3 albedo = base * uGrade;
    // Bloody stump: redden the ring of verts around the cut on a decapitated body.
    albedo = mix(albedo, uBlood, clamp(vGore, 0.0, 1.0));
    // Half-lambert: forgiving of the flat normal's sign, keeps shape without hard dark.
    float ndl = dot(N, normalize(uMoonDir)) * 0.5 + 0.5;
    // Per-instance brightness dims a killed body so its NVG (luminance) signature fades.
    vec3 lit = albedo * (uAmbient + uMoonColor * ndl) * vBright;
    // Custom ShaderMaterial bypasses three's output-colorspace pass, so encode here.
    gl_FragColor = vec4(pow(clamp(lit, 0.0, 1.0), vec3(0.4545)), 1.0);
  }
`;function HS(r,t){return new Le({uniforms:{uPos:{value:r.posTex},uTexSize:{value:new vt(r.vertexCount,r.frameCount)},uMap:{value:t},uHasMap:{value:t?1:0},uAmbient:{value:new bt(1514793)},uMoonColor:{value:new bt(11453183)},uMoonDir:{value:nf.clone()},uGrade:{value:new bt(.13,.14,.12)},uBlood:{value:new bt(2885381)},uAnchors:{value:new se(0,0,0,0)},uGoreR:{value:1}},vertexShader:kS,fragmentShader:zS})}const Cn={body:0,head:1,larm:2,rarm:3};function VS(r){return/Head/.test(r)?Cn.head:/Left(Arm|ForeArm|Hand)/.test(r)?Cn.larm:/Right(Arm|ForeArm|Hand)/.test(r)?Cn.rarm:Cn.body}function GS(r){return/Hips|Leg|Foot|Toe/.test(r)?0:1}function WS(r,t,e,n,i){var p;const s=r.skeleton.bones,o=r.geometry.attributes.skinIndex,a=r.geometry.attributes.skinWeight,c=new Float32Array(e*2);let l=0,h=1/0,u=-1,d=-1/0,f=-1,m=-1/0,v=0,g=1/0;for(let y=0;y<e;y++){let S=o?o.getX(y):0;if(o&&a){let I=a.getX(y);const M=a.getY(y),b=a.getZ(y),L=a.getW(y);M>I&&(I=M,S=o.getY(y)),b>I&&(I=b,S=o.getZ(y)),L>I&&(I=L,S=o.getW(y))}const x=((p=s[S])==null?void 0:p.name)??"",P=VS(x),C=GS(x);c[y*2]=P,c[y*2+1]=C;const A=t[(n*e+y)*4+1];P===Cn.head&&A<h&&(h=A,l=y),P===Cn.larm&&A>d&&(d=A,u=y),P===Cn.rarm&&A>m&&(m=A,f=y),C===1&&A<g&&(g=A,v=y)}return u<0&&(u=l,d=h),f<0&&(f=l,m=h),{aPart:c,anchors:[l,u,f,v],fracs:{head:h/i,larm:d/i,rarm:m/i,upper:g/i}}}function XS(r,t,e,n,i,s,o){const a=n.attributes.uv,c=n.index;if(!c)return null;const l=new Int32Array(t).fill(-1),h=[],u=[],d=[];let f=0;for(let g=0;g<t;g++){if(!i[g])continue;l[g]=f++;const p=(e*t+g)*4,y=r[p]-s[0],S=r[p+1]-s[1],x=r[p+2]-s[2];h.push(y,S,x),u.push(a?a.getX(g):0,a?a.getY(g):0);const P=Math.max(0,1-Math.sqrt(y*y+S*S+x*x)/o);d.push(1-P*.72,1-P*.93,1-P*.93)}const m=[];for(let g=0;g<c.count;g+=3){const p=c.getX(g),y=c.getX(g+1),S=c.getX(g+2);i[p]&&i[y]&&i[S]&&m.push(l[p],l[y],l[S])}if(f===0||m.length===0)return null;const v=new Re;return v.setAttribute("position",new te(h,3)),v.setAttribute("uv",new te(u,2)),v.setAttribute("color",new te(d,3)),v.setIndex(m),v.computeVertexNormals(),v}const qS=`
  attribute vec3 color;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vCol;
  void main() {
    vUv = uv;
    vCol = color;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,YS=`
  uniform sampler2D uMap;
  uniform vec3 uAmbient;
  uniform vec3 uMoonColor;
  uniform vec3 uMoonDir;
  uniform vec3 uGrade;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vCol;
  void main() {
    vec3 N = normalize(cross(dFdx(vWorldPos), dFdy(vWorldPos)));
    vec3 albedo = texture2D(uMap, vUv).rgb * uGrade * vCol; // vCol reds the cut base
    float ndl = dot(N, normalize(uMoonDir)) * 0.5 + 0.5;
    vec3 lit = albedo * (uAmbient + uMoonColor * ndl);
    gl_FragColor = vec4(pow(clamp(lit, 0.0, 1.0), vec3(0.4545)), 1.0);
  }
`;function jS(r){return new Le({uniforms:{uMap:{value:r},uAmbient:{value:new bt(1514793)},uMoonColor:{value:new bt(11453183)},uMoonDir:{value:nf.clone()},uGrade:{value:new bt(.13,.14,.12)}},vertexShader:qS,fragmentShader:YS})}const KS=480,$S=400,ZS={burst:{parts:[{kind:"head",mat:"flesh",scale:1},{kind:"arm",mat:"flesh",scale:1},{kind:"arm",mat:"flesh",scale:1},{kind:"torsoU",mat:"cloth",scale:1},{kind:"torsoL",mat:"cloth",scale:1},{kind:"leg",mat:"cloth",scale:1},{kind:"leg",mat:"cloth",scale:1},{kind:"chunk",mat:"flesh",scale:1},{kind:"chunk",mat:"bone",scale:.9}],vel:1.4,up:1.3},split:{parts:[{kind:"torsoU",mat:"cloth",scale:1.5},{kind:"torsoL",mat:"cloth",scale:1.5},{kind:"head",mat:"flesh",scale:1},{kind:"arm",mat:"flesh",scale:.9}],vel:.75,up:.7,split:!0},clumps:{parts:[{kind:"chunk",mat:"flesh",scale:2},{kind:"chunk",mat:"flesh",scale:1.6},{kind:"chunk",mat:"cloth",scale:1.8},{kind:"chunk",mat:"bone",scale:1.3}],vel:.95,up:1}};class QS{constructor(t){_(this,"bloodTex");_(this,"blood",[]);_(this,"gibGeo");_(this,"gibMat");_(this,"gibs",[]);this.scene=t,this.bloodTex=this.makeBloodTex(),this.gibGeo={head:new qc(.16,8,6),arm:new Ze(.05,.045,.5,6),leg:new Ze(.07,.06,.6,6),torsoU:new ze(.32,.34,.2),torsoL:new ze(.3,.3,.2),chunk:new ze(.15,.15,.15)},this.gibMat={flesh:new ye({color:7027252,roughness:.9,metalness:0}),bone:new ye({color:14209468,roughness:.7,metalness:0}),cloth:new ye({color:2896679,roughness:.95,metalness:0})}}hit(t,e,n){this.spawnBlood(t,e,n,4,.55,8)}spray(t,e,n){this.spawnBlood(t,e,n,26,1.6,26)}death(t,e=!1){const n=t.position.y+t.hitHeight*.6;return this.spawnBlood(t.position.x,n,t.position.z,e?30:16,e?2:1.2,e?30:18),e?(this.spawnGibs(t,"burst",2.4),"gib"):"topple"}spawnBlood(t,e,n,i,s,o){for(let a=0;a<i;a++){let c=this.blood.find(h=>h.life<=0);if(!c){if(this.blood.length>=KS)break;const h=new Xe(new Qe({map:this.bloodTex,color:3934216,transparent:!0,depthWrite:!1,opacity:0}));this.scene.add(h),c={sprite:h,vel:new T,life:0,maxLife:1},this.blood.push(c)}c.sprite.visible=!0,c.sprite.position.set(t,e,n);const l=s*(1.6+Math.random()*2.4);c.sprite.scale.set(l,l,1),c.sprite.material.rotation=Math.random()*Math.PI*2,c.vel.set((Math.random()-.5)*o,o*(.4+Math.random()*.7),(Math.random()-.5)*o),c.maxLife=.4+Math.random()*.4,c.life=c.maxLife}}spawnGibs(t,e,n=1){const i=t.scale,s=ZS[e],o=Math.random()*Math.PI*2,a=Math.sin(o),c=Math.cos(o);let l=0;for(const h of s.parts){let u=this.gibs.find(d=>d.life<=0);if(!u){if(this.gibs.length>=$S)break;const d=new Lt(this.gibGeo[h.kind],this.gibMat[h.mat]);this.scene.add(d),u={mesh:d,vel:new T,spin:new T,life:0,settled:!1},this.gibs.push(u)}if(u.mesh.geometry=this.gibGeo[h.kind],u.mesh.material=this.gibMat[h.mat],u.mesh.visible=!0,u.mesh.scale.setScalar(i*h.scale*(1+(n-1)*.3)),u.mesh.position.set(t.position.x+(Math.random()-.5)*i,t.position.y+t.hitHeight*(.4+Math.random()*.6),t.position.z+(Math.random()-.5)*i),u.mesh.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),u.vel.set((Math.random()-.5)*26*s.vel*n,(10+Math.random()*20)*s.up*n,(Math.random()-.5)*26*s.vel*n),s.split){const d=l%2===0?1:-1;u.vel.x+=a*d*14,u.vel.z+=c*d*14}u.spin.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),u.settled=!1,u.life=7+Math.random()*5,this.spawnBlood(u.mesh.position.x,u.mesh.position.y,u.mesh.position.z,3,.8,12),l++}}update(t){for(const e of this.blood){if(e.life<=0)continue;e.life-=t,e.vel.y-=55*t,e.sprite.position.addScaledVector(e.vel,t);const n=1-Math.max(0,e.life)/e.maxLife;e.sprite.material.opacity=.85*(1-n),e.life<=0&&(e.sprite.visible=!1)}for(const e of this.gibs)if(!(e.life<=0)){if(e.life-=t,!e.settled){e.vel.y-=70*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t;const n=ve(e.mesh.position.x,e.mesh.position.z);e.mesh.position.y<=n&&(e.mesh.position.y=n,e.settled=!0)}e.life<=0&&(e.mesh.visible=!1)}}makeBloodTex(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.clearRect(0,0,64,64);const n=(i,s,o,a)=>{const c=e.createRadialGradient(i,s,0,i,s,o);c.addColorStop(0,`rgba(255,255,255,${a})`),c.addColorStop(.55,`rgba(255,255,255,${a*.6})`),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.beginPath(),e.arc(i,s,o,0,Math.PI*2),e.fill()};n(32,32,19,.95);for(let i=0;i<16;i++){const s=Math.random()*Math.PI*2,o=7+Math.random()*23;n(32+Math.cos(s)*o,32+Math.sin(s)*o,3.5+Math.random()*9,.45+Math.random()*.5)}return new an(t)}dispose(){for(const t of this.blood)this.scene.remove(t.sprite),t.sprite.material.dispose();this.blood.length=0;for(const t of this.gibs)this.scene.remove(t.mesh);this.gibs.length=0,this.bloodTex.dispose();for(const t of Object.values(this.gibGeo))t.dispose();for(const t of Object.values(this.gibMat))t.dispose()}}const Zi=240,lu=.25,JS=.1,tb=120,Ge={head:1,larm:2,rarm:4,torso:8},yc=[{sever:Ge.head,fly:["head"]},{sever:Ge.larm,fly:["larm"]},{sever:Ge.rarm,fly:["rarm"]}],eb=[...yc,{sever:Ge.head|Ge.larm,fly:["head","larm"]},{sever:Ge.head|Ge.rarm,fly:["head","rarm"]},{sever:Ge.head|Ge.larm|Ge.rarm,fly:["head","larm","rarm"]},{sever:Ge.torso,fly:["upper"]}],nb=4,ib=.12,sb=new T(0,1,0),rb=new T(1,0,0),hu=.16,uu=1.4,ob=.4,ab=.1;function cb(r){const t=[];return r.traverse(e=>{e.isSkinnedMesh&&t.push(e)}),t}function lb(r){return(Array.isArray(r.material)?r.material[0]:r.material).map??null}function hb(r,t){const e=t-1;if(e<=0)return 0;const n=(r%(2*e)+2*e)%(2*e);return n<=e?n:2*e-n}class ub{constructor(t,e){_(this,"chars",[]);_(this,"gore");_(this,"states",new Map);_(this,"parts",[]);_(this,"partAssets",[]);_(this,"ready",!1);_(this,"disposed",!1);_(this,"_pos",new T);_(this,"_q",new Zt);_(this,"_qy",new Zt);_(this,"_qp",new Zt);_(this,"_s",new T);_(this,"_m",new Ht);this.scene=t,this.gore=new QS(t),this.init(e)}async init(t){var h;const e=u=>new Promise((d,f)=>new nl().load(u,d,void 0,f)),[n,i,s,o,a]=await Promise.all([e(`${t}zombie-walk.glb`),e(`${t}zombie-crawl.glb`),e(`${t}zombie-death.glb`),e(`${t}zombie-idle.glb`),e(`${t}zombie-transition.glb`)]);if(this.disposed)return;const c=[{name:"walk",clip:n.animations[0],loop:!0},{name:"crawl",clip:i.animations[0],loop:!0},{name:"death",clip:s.animations[0],loop:!1},{name:"idle",clip:o.animations[0],loop:!0},{name:"idleTransition",clip:a.animations[0],loop:!1}],l=[n.scene];for(const u of["char-cop.glb","char-yaku.glb","char-survivor.glb"]){const d=await e(`${t}${u}`);if(this.disposed)return;l.push(d.scene)}for(const u of l){const d=cb(u);if(d.length===0)continue;const f=BS(u,d,c),m=((h=f.ranges.get("idle"))==null?void 0:h[0])??0,v=f.height;let g=null;const p=d.map((y,S)=>{const x=f.vats[S],P=y.geometry,C=lb(y),A=new Float32Array(x.vertexCount);for(let Q=0;Q<A.length;Q++)A[Q]=Q;P.setAttribute("aVertexId",new te(A,1));const I=HS(x,C),M=new zd(P,I,Zi);M.frustumCulled=!1,M.instanceMatrix.setUsage(Is);const b=new wi(new Float32Array(Zi),1),L=new wi(new Float32Array(Zi*2),2),z=new wi(new Float32Array(Zi).fill(1),1),H=new wi(new Float32Array(Zi),1);b.setUsage(Is),L.setUsage(Is),z.setUsage(Is),H.setUsage(Is),P.setAttribute("aFrame",b),P.setAttribute("aClip",L),P.setAttribute("aBright",z),P.setAttribute("aSever",H);const q=WS(y,x.data,x.vertexCount,m,v);return P.setAttribute("aPart",new te(q.aPart,2)),I.uniforms.uAnchors.value.set(q.anchors[0],q.anchors[1],q.anchors[2],q.anchors[3]),I.uniforms.uGoreR.value=cu*v,!g&&C&&(g=this.buildPartAssets(x.data,x.vertexCount,m,v,P,q,C)),M.count=0,this.scene.add(M),{mesh:M,aFrame:b,aClip:L,aBright:z,aSever:H}});if(this.chars.push({subs:p,ranges:f.ranges,height:v,count:0}),this.partAssets.push(g??{mat:null,geo:{head:null,larm:null,rarm:null,upper:null},frac:{head:0,larm:0,rarm:0,upper:0}}),await new Promise(y=>setTimeout(y,0)),this.disposed)return}this.ready=!0}rateFor(t,e){return e==="death"?1:Math.min(1.8,Math.max(.6,t/(e==="crawl"?3.5:6)))}update(t,e,n){if(this.gore.update(n),!!this.ready){for(const i of this.chars)i.count=0;for(const i of t.all()){if(!(i instanceof qn))continue;const s=this.chars[i.id%this.chars.length];let o=this.states.get(i.id);if(!o){const m=i.type==="crawler"?"crawl":"walk";o={clip:m,t:Math.random()*2,rate:this.rateFor(i.speed,m),gibbed:!1,sever:0,deadHandled:!1,lastHp:i.hp,flinch:0,wasStunned:!1,stunClip:"idle",deadElapsed:0,deathFrame:0,deathDir:0,deathReverseTo:0},this.states.set(i.id,o)}if(!o.deadHandled&&i.hp<o.lastHp&&(this.gore.hit(i.position.x,i.position.y+i.hitHeight*.62,i.position.z),o.flinch=hu),o.lastHp=i.hp,i.state==="dead"&&!o.deadHandled){o.deadHandled=!0;const m=i.killImpact==="blast";if(this.gore.death(i,m)==="gib")o.gibbed=!0;else if(o.clip="death",o.rate=1,i.type==="crawler")o.deathFrame=1e6,o.deathDir=0;else{const v=4+Math.floor(Math.random()*27),g=2+Math.floor(Math.random()*6);o.deathFrame=v,o.deathReverseTo=Math.max(0,v-g),o.deathDir=-1;let p=eb,y=lu;if(i.killedByCommando?(p=yc,y=JS):i.killedPrecision&&(p=yc,y=lu),Math.random()<y){const S=p[Math.random()*p.length|0];o.sever=S.sever,this.spawnParts(i,S.sever,S.fly)}}}if(o.gibbed||s.count>=Zi)continue;if(o.clip!=="death"&&i.type!=="crawler"){let m;i.stunned?(o.wasStunned||(o.stunClip=Math.random()<.5?"idle":"idleTransition"),m=o.stunClip):i.idling?m="idleTransition":m="walk",o.clip!==m&&(o.clip=m,o.t=0,o.rate=m==="walk"?this.rateFor(i.speed,"walk"):1)}o.wasStunned=i.stunned;const a=s.count++;i.type==="crawler"&&i.stunned||(o.t+=n*o.rate);const c=s.ranges.get(o.clip),l=c[1];let h;o.clip==="death"?(o.deathDir!==0&&(o.deathFrame+=o.deathDir*n*co,o.deathDir<0&&o.deathFrame<=o.deathReverseTo&&(o.deathFrame=o.deathReverseTo,o.deathDir=1)),h=Math.min(Math.max(o.deathFrame,0),l-1-.001)):o.clip==="idleTransition"?h=hb(o.t*co,l):h=o.t*co%l,this._pos.lerpVectors(i.prevPosition,i.position,e);let u=i.heading,d=0;if(o.flinch>0){o.flinch-=n;const m=Math.max(0,o.flinch)/hu;this._pos.x-=Math.sin(i.heading)*m*uu,this._pos.z-=Math.cos(i.heading)*m*uu,this._pos.y+=m*ob,d=-m*ab,u+=Math.sin(m*Math.PI*4)*m*.07}this._qy.setFromAxisAngle(sb,u),d!==0?(this._qp.setFromAxisAngle(rb,d),this._q.multiplyQuaternions(this._qy,this._qp)):this._q.copy(this._qy),this._s.setScalar(i.scale*1.9/s.height),this._m.compose(this._pos,this._q,this._s);let f=1;o.deadHandled&&(o.deadElapsed+=n,f=1-(1-ib)*Math.min(1,o.deadElapsed/nb));for(const m of s.subs)m.mesh.setMatrixAt(a,this._m),m.aFrame.setX(a,h),m.aClip.setXY(a,c[0],l),m.aBright.setX(a,f),m.aSever.setX(a,o.sever)}for(const i of this.chars)for(const s of i.subs)s.mesh.count=i.count,s.mesh.instanceMatrix.needsUpdate=!0,s.aFrame.needsUpdate=!0,s.aClip.needsUpdate=!0,s.aBright.needsUpdate=!0,s.aSever.needsUpdate=!0;this.updateParts(n)}}buildPartAssets(t,e,n,i,s,o,a){const c=cu*i,l=o.aPart,h=f=>{const m=(n*e+f)*4;return[t[m],t[m+1],t[m+2]]},u=f=>{const m=new Uint8Array(e);for(let v=0;v<e;v++)f(l[v*2],l[v*2+1])&&(m[v]=1);return m},d=(f,m,v=c)=>XS(t,e,n,s,f,h(m),v);return{mat:jS(a),geo:{head:d(u(f=>f===Cn.head),o.anchors[0]),larm:d(u(f=>f===Cn.larm),o.anchors[1]),rarm:d(u(f=>f===Cn.rarm),o.anchors[2]),upper:d(u((f,m)=>m===1),o.anchors[3],c*1.6)},frac:o.fracs}}spawnParts(t,e,n){const i=t.id%this.chars.length,s=this.partAssets[i],o=t.scale*1.9/this.chars[i].height,a=c=>this.gore.spray(t.position.x,t.position.y+c*1.9*t.scale,t.position.z);if(e&Ge.head&&a(s.frac.head),e&Ge.larm&&a(s.frac.larm),e&Ge.rarm&&a(s.frac.rarm),e&Ge.torso&&a(s.frac.upper),!!s.mat)for(const c of n){const l=s.geo[c];if(!l)continue;const h=c==="upper";let u=this.parts.find(v=>v.life<=0);if(!u){if(this.parts.length>=tb)return;const v=new Lt(l,s.mat);v.frustumCulled=!1,this.scene.add(v),u={mesh:v,vel:new T,spin:new T,life:0,settled:!1},this.parts.push(u)}u.mesh.geometry=l,u.mesh.material=s.mat,u.mesh.visible=!0,u.mesh.scale.setScalar(o),u.mesh.position.set(t.position.x,t.position.y+s.frac[c]*1.9*t.scale,t.position.z),u.mesh.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6);const d=Math.random()*Math.PI*2,f=h?4:7;u.vel.set(Math.cos(d)*f,(h?8:15)+Math.random()*8,Math.sin(d)*f);const m=h?5:12;u.spin.set((Math.random()-.5)*m,(Math.random()-.5)*m,(Math.random()-.5)*m),u.settled=!1,u.life=8+Math.random()*4}}updateParts(t){for(const e of this.parts)if(!(e.life<=0)){if(e.life-=t,!e.settled){e.vel.y-=60*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t;const n=ve(e.mesh.position.x,e.mesh.position.z);e.mesh.position.y<=n&&(e.mesh.position.y=n,e.settled=!0)}e.life<=0&&(e.mesh.visible=!1)}}dispose(){var t,e,n;this.disposed=!0;for(const i of this.chars)for(const s of i.subs){this.scene.remove(s.mesh),s.mesh.geometry.dispose();const o=s.mesh.material;(t=o.uniforms.uMap.value)==null||t.dispose(),(e=o.uniforms.uPos.value)==null||e.dispose(),o.dispose()}this.chars.length=0;for(const i of this.parts)this.scene.remove(i.mesh);this.parts.length=0;for(const i of this.partAssets){(n=i.mat)==null||n.dispose();for(const s of Object.values(i.geo))s==null||s.dispose()}this.partAssets.length=0,this.states.clear(),this.gore.dispose()}}function db(r){const t=new Map,e=new Map,n=r.clone();return sf(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function sf(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)sf(r.children[n],t.children[n],e)}function rf(r,t){const e=new Set;t.traverse(i=>{i.name&&e.add(Yt.sanitizeNodeName(i.name))});const n=r.tracks.filter(i=>e.has(Yt.sanitizeNodeName(Yt.parseTrackName(i.name).nodeName)));return new or(r.name,r.duration,n)}function of(r){for(const t of r.tracks){if(!/Hips\.position$/.test(t.name))continue;const e=t.values,n=e[0],i=e[1];for(let s=0;s<e.length;s+=3)e[s]=n,e[s+1]=i}}const fb=12,pb=28,du=.05,mb=3.4,gb=16769188,ma=700,_b=.64,vb=.12,xb=2.8,fu=.13,yb=16773839,Mb=16,Sb=.16,pu=.28,bb=16762726,Tb=new T(0,0,1);class Eb{constructor(t){_(this,"flashes",[]);_(this,"tracers",[]);_(this,"tex");_(this,"boltGeo");_(this,"trailGeo");_(this,"q",new Zt);this.scene=t,this.tex=wb();for(let e=0;e<fb;e++){const n=new Xe(new Qe({map:this.tex,color:gb,transparent:!0,opacity:0,blending:We,depthWrite:!1,fog:!1}));n.visible=!1,t.add(n),this.flashes.push({sprite:n,life:0})}this.boltGeo=new Ze(fu,fu*.8,xb,6),this.boltGeo.rotateX(Math.PI/2),this.trailGeo=new Ze(Sb,0,Mb,6),this.trailGeo.rotateX(Math.PI/2);for(let e=0;e<pb;e++){const n=new Lt(this.boltGeo,new Ue({color:yb,transparent:!0,opacity:0,fog:!1})),i=new Lt(this.trailGeo,new Ue({color:bb,transparent:!0,opacity:0,blending:We,depthWrite:!1,fog:!1}));i.position.z=-9.4;const s=new pe;s.add(n,i),s.visible=!1,t.add(s),this.tracers.push({group:s,bolt:n,trail:i,vel:new T,life:0,travelled:0,maxDist:1/0})}}flash(t,e,n=!0,i=1/0){const s=n?this.flashes.find(a=>a.life<=0):void 0;if(s){s.life=du,s.sprite.visible=!0,s.sprite.position.copy(t);const a=mb*(.8+Math.random()*.5);s.sprite.scale.set(a,a,1);const c=s.sprite.material;c.rotation=Math.random()*Math.PI*2,c.opacity=1}const o=this.tracers.find(a=>a.life<=0);o&&(o.life=_b,o.travelled=0,o.maxDist=i,o.group.visible=!0,o.group.position.copy(t),this.q.setFromUnitVectors(Tb,e),o.group.quaternion.copy(this.q),o.vel.copy(e).multiplyScalar(ma),o.bolt.material.opacity=1,o.trail.material.opacity=pu)}update(t){for(const e of this.flashes)e.life<=0||(e.life-=t,e.sprite.material.opacity=Math.max(0,e.life/du),e.life<=0&&(e.sprite.visible=!1));for(const e of this.tracers){if(e.life<=0)continue;const n=ma*t;if(e.travelled+n>=e.maxDist){const s=Math.max(0,e.maxDist-e.travelled);e.group.position.addScaledVector(e.vel,s/ma),e.life=0,e.group.visible=!1;continue}e.life-=t,e.travelled+=n,e.group.position.addScaledVector(e.vel,t);const i=Math.min(1,e.life/vb);e.bolt.material.opacity=i,e.trail.material.opacity=pu*i,e.life<=0&&(e.group.visible=!1)}}dispose(){for(const t of this.flashes)this.scene.remove(t.sprite),t.sprite.material.dispose();for(const t of this.tracers)this.scene.remove(t.group),t.bolt.material.dispose(),t.trail.material.dispose();this.flashes.length=0,this.tracers.length=0,this.boltGeo.dispose(),this.trailGeo.dispose(),this.tex.dispose()}}function wb(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.translate(64/2,64/2),e.globalCompositeOperation="lighter",e.strokeStyle="rgba(255,230,170,0.55)",e.lineWidth=2;for(let i=0;i<6;i++){const s=i/6*Math.PI*2+Math.random()*.4,o=64*(.28+Math.random()*.2);e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(s)*o,Math.sin(s)*o),e.stroke()}const n=e.createRadialGradient(0,0,0,0,0,64*.5);return n.addColorStop(0,"rgba(255,250,235,1)"),n.addColorStop(.35,"rgba(255,220,150,0.75)"),n.addColorStop(1,"rgba(255,150,60,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,64*.5,0,Math.PI*2),e.fill(),new an(t)}class Ab{constructor(t,e,n){_(this,"id",0);_(this,"position",new T);_(this,"radius");_(this,"hitHeight");_(this,"hp");_(this,"collidable",!0);_(this,"state","alive");this.radius=t,this.hitHeight=e,this.hp=n}applyDamage(t,e,n="bolt"){this.state!=="dead"&&(this.hp-=t,this.hp<=0&&(this.state="dead",this.collidable=!1))}}const Rb={formation:"v",formationSpacing:20,formationDepth:22,anchorSpeed:11,unitSpeed:13,slotDeadzone:1.5,arriveRadius:22,touchRadius:75,maxStretch:145,patrolPause:3,restDuration:2,turnRate:2.5,engageRadius:130,walkfireStandoff:14,engageRouteBias:.7,walkfireAlign:.35,aimYawLimit:1.15,burstMin:2,burstMax:6,burstGapMin:.25,burstGapMax:.7,roundInterval:.07,roundIntervalJitter:.03,targetStickiness:.6,startPos:new T(0,0,-90)},Cb=[{lat:0,back:0},{lat:-1,back:-1},{lat:1,back:-1},{lat:-2,back:-2},{lat:2,back:-2}],Pb=[{lat:0,back:0},{lat:0,back:-1},{lat:0,back:-2},{lat:0,back:-3},{lat:0,back:-4}],Ib=.25;function Qi(r,t,e,n){const i=Math.atan2(Math.sin(t-r),Math.cos(t-r)),s=n*e;return i>s?r+s:i<-s?r-s:t}class Lb{constructor(t,e){_(this,"slots");_(this,"state","rest");_(this,"waypointIndex",0);_(this,"anchorMoving",!1);_(this,"pauseTimer",0);_(this,"waypoints",[]);_(this,"anchor",new T);_(this,"forward",new T(0,0,-1));_(this,"right",new T(1,0,0));_(this,"slotScratch",new T);this.profile=t,this.deps=e,this.slots=t.formation==="column"?Pb:Cb}get phase(){return this.state}progressText(){return`WAYPOINT ${Math.min(this.waypointIndex+1,this.waypoints.length)}/${this.waypoints.length}`}reset(t,e){this.waypoints=e,this.waypointIndex=0,this.anchor.copy(this.profile.startPos),this.anchor.y=this.deps.height(this.anchor.x,this.anchor.z),this.state="rest",this.pauseTimer=this.profile.restDuration,this.formUp(t)}updateSquad(t,e){var o,a,c,l,h,u,d,f;if(this.waypoints.length===0)return"active";if(this.state==="rest")return this.pauseTimer-=t,this.pauseTimer<=0&&(this.state="advance",(a=(o=this.deps).movingOut)==null||a.call(o)),"active";if(this.state==="pause")return this.pauseTimer-=t,this.pauseTimer<=0?"recycle":"active";const n=e.filter(m=>m.alive);if(n.length===0)return this.enterPause("TEAM DOWN — recycling…"),"active";const i=this.waypoints[this.waypointIndex];this.forward.set(i.x-this.anchor.x,0,i.z-this.anchor.z),this.forward.lengthSq()<1e-4&&this.forward.set(0,0,-1),this.forward.normalize(),this.right.set(this.forward.z,0,-this.forward.x);let s=0;for(const m of n){const v=m.pos.x-this.anchor.x,g=m.pos.z-this.anchor.z;s=Math.max(s,v*v+g*g)}if(this.anchorMoving=!1,s<=this.profile.maxStretch*this.profile.maxStretch){const m=i.x-this.anchor.x,v=i.z-this.anchor.z,g=Math.hypot(m,v);if(g>.001){const p=Math.min(this.profile.anchorSpeed*t,g);this.anchor.x+=m/g*p,this.anchor.z+=v/g*p,this.anchorMoving=!0}this.anchor.y=this.deps.height(this.anchor.x,this.anchor.z),g<=this.profile.arriveRadius&&this.waypointIndex<this.waypoints.length-1&&(this.waypointIndex++,(l=(c=this.deps).status)==null||l.call(c,this.progressText()),(u=(h=this.deps).checkpoint)==null||u.call(h,this.waypointIndex))}for(const m of n)for(let v=0;v<this.waypoints.length;v++){if(m.touched.has(v))continue;const g=this.waypoints[v],p=m.pos.x-g.x,y=m.pos.z-g.z;p*p+y*y<=this.profile.touchRadius*this.profile.touchRadius&&m.touched.add(v)}return n.every(m=>m.touched.size>=this.waypoints.length)&&(this.enterPause("SECTOR CLEARED — recycling…"),(f=(d=this.deps).objectiveComplete)==null||f.call(d)),"active"}enterPause(t){var e,n;this.state="pause",this.pauseTimer=this.profile.patrolPause,(n=(e=this.deps).status)==null||n.call(e,t)}updateUnit(t,e){var s,o;const n=this.profile.turnRate,i=Math.atan2(this.forward.x,this.forward.z);if(t.poseHold>0&&(t.poseHold-=e),this.state==="rest"){t.pose="kneelIdle",t.mode="move",t.facing=Qi(t.facing,i,e,n);return}if(this.state==="pause"){t.mode==="kneeldown"?(t.moveTimer-=e,t.moveTimer<=0&&(t.pose="kneelIdle",t.mode="move")):t.pose!=="kneelIdle"&&(t.pose="standToKneel",t.moveTimer=this.deps.poseDuration("standToKneel"),t.mode="kneeldown"),t.facing=Qi(t.facing,i,e,n);return}if(t.mode==="standup"){t.moveTimer-=e,t.facing=Qi(t.facing,i,e,n),t.moveTimer<=0&&(t.mode="move",t.moveTimer=Math.random()*this.profile.burstGapMax);return}if(t.pose==="kneelIdle"){t.pose="kneelToStand",t.moveTimer=this.deps.poseDuration("kneelToStand"),t.mode="standup",t.facing=Qi(t.facing,i,e,n);return}if(t.mode="move",t.target=this.acquireTarget(t),t.target){const a=t.target.position.x-t.pos.x,c=t.target.position.z-t.pos.z,l=Math.hypot(a,c)||1,h=this.slotWorldPos(t.index,this.slotScratch);let u=h.x-t.pos.x,d=h.z-t.pos.z;const f=Math.hypot(u,d);if(f>.001?(u/=f,d/=f):(u=this.forward.x,d=this.forward.z),l>this.profile.walkfireStandoff){const p=this.profile.engageRouteBias;u=u*p+a/l*(1-p),d=d*p+c/l*(1-p)}const m=Math.hypot(u,d),v=Math.atan2(a,c);t.facing=Qi(t.facing,v,e,n);let g=!1;if(m>.001){const p=this.profile.unitSpeed*e,y=t.pos.x+u/m*p,S=t.pos.z+d/m*p;Math.hypot(t.target.position.x-y,t.target.position.z-S)>=this.profile.walkfireStandoff&&(t.pos.x=y,t.pos.z=S,t.pos.y=this.deps.height(y,S),g=!0)}if(!g)this.wantPose(t,"standFireBurst");else{const p=t.facing,y=(u*Math.sin(p)+d*Math.cos(p))/m,S=(u*-Math.cos(p)+d*Math.sin(p))/m;this.wantPose(t,this.fireDirectionalWalk(y,S,t.pose))}this.updateWalkFire(t,e)}else{t.roundsLeft=0;const a=this.slotWorldPos(t.index,this.slotScratch),c=a.x-t.pos.x,l=a.z-t.pos.z,h=Math.hypot(c,l);t.facing=Qi(t.facing,i,e,n);let u;if(h<this.profile.slotDeadzone&&!this.anchorMoving)u="idle";else{const d=t.facing,f=(c*Math.sin(d)+l*Math.cos(d))/h,m=(c*-Math.cos(d)+l*Math.sin(d))/h;u=this.directionalWalk(f,m,t.pose)}this.wantPose(t,u),this.steerToSlot(t,e)}(o=(s=this.deps).avoid)==null||o.call(s,t.pos)}wantPose(t,e){e!==t.pose&&(t.poseHold>0&&e!=="idle"||(t.pose=e,t.poseHold=Ib))}acquireTarget(t){const e=t.pos.x,n=t.pos.z,i=this.deps.nearestThreat(e,n,this.profile.engageRadius);let s=1/0;if(i){const a=i.position.x-e,c=i.position.z-n;s=a*a+c*c}const o=t.target;if(o&&o.alive){const a=o.position.x-e,c=o.position.z-n,l=a*a+c*c,h=this.profile.engageRadius*this.profile.engageRadius,u=this.profile.targetStickiness;if(l<=h&&(i===null||s>=l*u*u))return o}return i}updateWalkFire(t,e){if(!t.target)return;if(t.roundsLeft>0){if(t.roundTimer-=e,t.roundTimer<=0&&(this.deps.fireRound(t),t.roundsLeft--,t.roundTimer=this.profile.roundInterval+(Math.random()-.5)*this.profile.roundIntervalJitter,t.roundsLeft<=0)){const s=this.profile.longBurstThreshold!=null&&t.burstSize>=this.profile.longBurstThreshold,o=s?this.profile.longBurstGapMin??this.profile.burstGapMin:this.profile.burstGapMin,a=s?this.profile.longBurstGapMax??this.profile.burstGapMax:this.profile.burstGapMax;t.moveTimer=o+Math.random()*(a-o)}return}t.moveTimer-=e;const n=Math.atan2(t.target.position.x-t.pos.x,t.target.position.z-t.pos.z),i=Math.atan2(Math.sin(n-t.facing),Math.cos(n-t.facing));if(t.moveTimer<=0&&Math.abs(i)<=this.profile.aimYawLimit){const s=this.profile.burstSizes;t.roundsLeft=s?s[Math.random()*s.length|0]:this.profile.burstMin+Math.floor(Math.random()*(this.profile.burstMax-this.profile.burstMin+1)),t.burstSize=t.roundsLeft,t.roundTimer=0,this.deps.burstStart(t,t.roundsLeft)}}directionalWalk(t,e,n){const s=n==="strafeLeftAim"||n==="strafeRightAim";return Math.abs(e)>Math.abs(t)+(s?-.15:.15)?e>=0?"strafeRightAim":"strafeLeftAim":t>=0?"walkAim":"walkBackAim"}fireDirectionalWalk(t,e,n){const s=n==="strafeLeftAim"||n==="strafeRightAim";return Math.abs(e)>Math.abs(t)+(s?-.15:.15)?e>=0?"strafeRightAim":"strafeLeftAim":t>=0?"walkFireBurst":"walkBackAim"}formUp(t){const e=this.waypoints[0]??this.anchor;this.forward.set(e.x-this.anchor.x,0,e.z-this.anchor.z),this.forward.lengthSq()<1e-4&&this.forward.set(0,0,-1),this.forward.normalize(),this.right.set(this.forward.z,0,-this.forward.x);const n=Math.atan2(this.forward.x,this.forward.z);for(let i=0;i<t.length;i++){const s=this.slotWorldPos(i,this.slotScratch);t[i].pos.copy(s),t[i].facing=n}}steerToSlot(t,e){const n=this.slotWorldPos(t.index,this.slotScratch),i=n.x-t.pos.x,s=n.z-t.pos.z,o=Math.hypot(i,s);if(o>this.profile.slotDeadzone){const a=Math.min(this.profile.unitSpeed*e,o);t.pos.x+=i/o*a,t.pos.z+=s/o*a}t.pos.y=this.deps.height(t.pos.x,t.pos.z)}slotWorldPos(t,e){const n=this.slots[Math.min(t,this.slots.length-1)];return e.set(this.anchor.x+this.right.x*n.lat*this.profile.formationSpacing+this.forward.x*n.back*this.profile.formationDepth,0,this.anchor.z+this.right.z*n.lat*this.profile.formationSpacing+this.forward.z*n.back*this.profile.formationDepth),e.y=this.deps.height(e.x,e.z),e}}const Db=5,Nb=18,mu=new T(0,0,-130),Ub=16,gu=Math.PI,ga="mixamorig:RightHand",_u="mixamorig:Hips",Ob=["mixamorig:Spine","mixamorig:Spine1","mixamorig:Spine2"],vu=1.15,Fb=1,Bb=new T(0,1,0),kb=8.55,Mc={idle:{pos:new T(-.908,7.263,0),rot:new Kt(9.24,6.64,4.7)},run:{pos:new T(.78,4.96,2.48),rot:new Kt(3.038,.238,-1.712)},runAim:{pos:new T(-.908,7.44,4.44),rot:new Kt(3.108,.148,-1.942)},walk:{pos:new T(-1.7,7.44,1.3),rot:new Kt(-3.042,.128,-1.632)},walkAim:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},walkBackAim:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},strafeLeftAim:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},strafeRightAim:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},standAim:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},walkFireBurst:{pos:new T(-2.22,8.34,2.08),rot:new Kt(3.138,.238,-1.602)},standFireBurst:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},crouchFireBurst:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},crouchWalk:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},crouchWalkBack:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},crouchStrafeLeft:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},crouchStrafeRight:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},kneelIdle:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},standToKneel:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},kneelToStand:{pos:new T(-2.6,9.26,4.82),rot:new Kt(3.138,.238,-1.602)},standToCrouch:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},crouchToStand:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},crouchToWalk:{pos:new T(-1.04,7.44,2.6),rot:new Kt(-3.042,.068,-1.682)},crouchToRunAim:{pos:new T(-.908,7.44,4.44),rot:new Kt(3.108,.148,-1.672)},runToStop:{pos:new T(-1.7,7.44,1.3),rot:new Kt(-3.042,.128,-1.632)}},af="run",ds=[{name:"run",file:"alpha-run.glb",strip:!0},{name:"runAim",file:"alpha-run-aim.glb",strip:!0},{name:"walk",file:"alpha-walk.glb",strip:!0},{name:"walkAim",file:"alpha-walk-aim.glb",strip:!0},{name:"walkBackAim",file:"alpha-walk-backwards-aim.glb",strip:!0},{name:"strafeLeftAim",file:"alpha-strafe-left-aim.glb",strip:!0},{name:"strafeRightAim",file:"alpha-strafe-right-aim.glb",strip:!0},{name:"standAim",file:"alpha-stand.glb",strip:!0},{name:"crouchWalk",file:"alpha-crouch-walk.glb",strip:!0},{name:"crouchWalkBack",file:"alpha-crouch-walk-back.glb",strip:!0},{name:"crouchStrafeLeft",file:"alpha-crouch-strafe-left.glb",strip:!0},{name:"crouchStrafeRight",file:"alpha-crouch-strafe-right.glb",strip:!0},{name:"kneelIdle",file:"alpha-kneel-idle.glb",strip:!0},{name:"standToKneel",file:"alpha-stand-to-kneel.glb",strip:!1,oneShot:!0},{name:"kneelToStand",file:"alpha-kneel-to-stand.glb",strip:!1,oneShot:!0},{name:"walkFireBurst",file:"alpha-walk-fire-burst.glb",strip:!0},{name:"standFireBurst",file:"alpha-stand-fire-burst.glb",strip:!0},{name:"crouchFireBurst",file:"alpha-crouch-fire-burst.glb",strip:!0},{name:"standToCrouch",file:"alpha-stand-to-crouch.glb",strip:!1,oneShot:!0},{name:"crouchToStand",file:"alpha-crouch-to-stand.glb",strip:!1,oneShot:!0},{name:"crouchToWalk",file:"alpha-crouch-to-walk.glb",strip:!0,oneShot:!0},{name:"crouchToRunAim",file:"alpha-crouch-to-run-aim.glb",strip:!0,oneShot:!0},{name:"runToStop",file:"alpha-run-to-stop.glb",strip:!0,oneShot:!0},{name:"standDeath",file:"alpha-stand-death.glb",strip:!0,oneShot:!0},{name:"crouchDeath",file:"alpha-crouch-death.glb",strip:!0,oneShot:!0}],zb="standDeath",Hb="crouchDeath",xu=new Set(["standToCrouch","crouchFireBurst"]),_a=new Set(ds.filter(r=>r.oneShot).map(r=>r.name)),Vb={Main:657931,MainDark:263173,MainLight:1316121},Gb=526602,Wb=131587,Xb=new T(3.2,.65,0),qb=new Kt(0,.01,0),Yb=1,jb=0,Kb=new Set(["walkFireBurst","standFireBurst","crouchFireBurst"]),yu=1,$b=5,Zb=.07,Qb=.5,Zr=new T(3.3,.7,0),Mu=new T(1,0,0),Su=700,bu=.64,Tu=3,Ji=.02,Eu=-1,Jb=.5,tT=3,eT=16,nT=80,iT=46,sT=.4,rT={walk:11,walkFireBurst:9,run:24,runAim:21,crouchToRunAim:16},oT=2.5,aT=5,cT=.04,lT=.18,va=["idle","walk","walkFireBurst","run","runAim","runToStop","standAim","standFireBurst","standToCrouch","crouchFireBurst","crouchToStand","standToCrouch","crouchToRunAim","runAim"],hT=3,wu=3,uT=6743551,dT=new T(0,1.95,0),fT=.22,pT=1.6,mT=Math.PI*2,xa=.4,gT={light:1,dark:.18,black:.08},_T=1.2,vT=22;function xT(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.9)"),n.addColorStop(.6,"rgba(255,255,255,0.25)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new an(t)}function ya(r,t){const e=Mc[t]??Mc[af];r.position.copy(e.pos),r.rotation.copy(e.rot)}function yT(r,t,e,n,i,s,o,a,c,l,h){const u=r-o,d=t-a,f=e-c,m=i*l,v=n*u+i*d+s*f,g=l*d,p=l*l-m*m;let y=p>1e-9?(g-v*m)/p:0;y=y<0?0:y>1?1:y;let S=y*m-v;S<0&&(S=0);const x=r+n*S-o,P=t+i*S-(a+l*y),C=e+s*S-c;return x*x+P*P+C*C<=h*h?S:-1}function MT(r,t,e){const n=Math.atan2(Math.sin(t-r),Math.cos(t-r)),i=oT*e;return n>i?r+i:n<-i?r-i:t}function Au(r){r.traverse(t=>{if(t instanceof Lt){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n instanceof ye&&(n.color.setHex(Vb[n.name]??Gb),n.emissive.setHex(Wb))}})}class ST{constructor(t,e,n={}){_(this,"units",[]);_(this,"markerPositions",[]);_(this,"templates",null);_(this,"rifleLen",1);_(this,"clips",new Map);_(this,"beaconTex",xT());_(this,"clock",0);_(this,"disposed",!1);_(this,"count");_(this,"startAnim");_(this,"demo");_(this,"onAnim");_(this,"onFire");_(this,"onLoop");_(this,"demoClock",0);_(this,"demoIndex",0);_(this,"patrol");_(this,"waypoints");_(this,"onStatus");_(this,"onMoveOut");_(this,"onCheckpoint");_(this,"onObjectiveComplete");_(this,"silenced");_(this,"outfit");_(this,"clothMats",[]);_(this,"formation");_(this,"tactics",null);_(this,"tacUnits",[]);_(this,"world");_(this,"currentAnim");_(this,"muzzleFx");_(this,"firing",!1);_(this,"roundsLeft",0);_(this,"roundTimer",0);_(this,"pauseTimer",0);_(this,"burstTarget",null);_(this,"crouched",!1);_(this,"droppedGuns",[]);_(this,"muzzlePos",new T);_(this,"aheadPos",new T);_(this,"fireDir",new T);_(this,"aimPos",new T);_(this,"torsoQuat",new Zt);this.scene=t,this.count=n.count??Db,this.startAnim=n.startAnim??af,this.currentAnim=this.startAnim,this.demo=n.demo??!1,this.onAnim=n.onAnim,this.onFire=n.onFire,this.onLoop=n.onLoop,this.world=n.world,this.patrol=n.patrol??!1,this.waypoints=n.waypoints??[],this.onStatus=n.onStatus,this.onMoveOut=n.onMoveOut,this.onCheckpoint=n.onCheckpoint,this.onObjectiveComplete=n.onObjectiveComplete,this.formation=n.formation??"v",this.silenced=n.silenced??!1,this.outfit=n.outfit??"light",this.muzzleFx=new Eb(t),this.init(e)}async init(t){var h,u;const e=d=>new Promise((f,m)=>new nl().load(d,f,void 0,m)),[n,i,s,...o]=await Promise.all([e(`${t}char-alpha.glb`),e(`${t}weapon-rifle.glb`),e(`${t}weapon-silencer.glb`),...ds.map(d=>e(`${t}${d.file}`))]);if(this.disposed)return;n.animations[0]&&this.clips.set("idle",n.animations[0]),ds.forEach((d,f)=>{const m=o[f].animations[0];m&&(d.strip&&of(m),this.clips.set(d.name,m))});const a=i.scene,c=s.scene;Au(a),Au(c),n.scene.traverse(d=>{const f=d,m=f.material;if(!m)return;const v=Array.isArray(m)?m:[m];for(let g=0;g<v.length;g++){const p=v[g];if(p instanceof ye)if(this.outfit!=="light"&&p.map){const y=new ye({map:this.makeBlackCamo(p.map,gT[this.outfit]),normalMap:p.normalMap??null,roughness:1,metalness:0});y.name=p.name,y.emissive.setScalar(1),y.emissiveMap=y.map,y.emissiveIntensity=xa,this.clothMats.push(y),Array.isArray(f.material)?f.material[g]=y:f.material=y}else p.emissive.setScalar(1),p.emissiveMap=p.map,p.emissiveIntensity=xa,p.needsUpdate=!0}}),this.templates={char:n,rifle:a,silencer:c};const l=new bn().setFromObject(a);this.rifleLen=Math.max(l.max.x-l.min.x,l.max.y-l.min.y,l.max.z-l.min.z)||1;for(let d=0;d<this.count;d++)this.units.push(this.buildUnit(d));this.demo&&((h=this.onAnim)==null||h.call(this,this.startAnim)),this.patrol&&(this.tactics=new Lb(this.buildProfile(),this.buildDeps()),this.syncTacUnits(),this.tactics.reset(this.tacUnits,this.waypoints),this.applyTacToHolders(),(u=this.onStatus)==null||u.call(this,this.tactics.progressText()))}buildProfile(){const t={...Rb,formation:this.formation};return this.silenced&&(t.burstSizes=[1,3],t.burstGapMin=1,t.burstGapMax=1.5,t.longBurstThreshold=2,t.longBurstGapMin=1.8,t.longBurstGapMax=2.3),t}buildDeps(){return{height:(t,e)=>ve(t,e),nearestThreat:(t,e,n)=>this.nearestThreatAt(t,e,n),poseDuration:t=>this.clipDuration(t),fireRound:t=>{const e=this.units[t.index];e.holder.position.copy(t.pos),e.holder.rotation.y=t.facing,this.fireUnitRound(e,t.target)},burstStart:(t,e)=>{var n;return(n=this.onFire)==null?void 0:n.call(this,e,t.pos)},status:t=>{var e;return(e=this.onStatus)==null?void 0:e.call(this,t)},movingOut:()=>{var t;return(t=this.onMoveOut)==null?void 0:t.call(this)},checkpoint:t=>{var e;return(e=this.onCheckpoint)==null?void 0:e.call(this,t)},objectiveComplete:()=>{var t;return(t=this.onObjectiveComplete)==null?void 0:t.call(this)},avoid:t=>{Jd(t,aT),t.y=ve(t.x,t.z)}}}syncTacUnits(){this.tacUnits.length=0;for(const t of this.units)this.tacUnits.push(t.tac)}applyTacToHolders(){var t;for(const e of this.units)e.holder.position.copy(e.tac.pos),e.holder.rotation.y=e.tac.facing,(t=e.soldier)==null||t.position.copy(e.tac.pos)}applyTorsoAim(t,e){if(t.spine.length===0)return;let n=0;const i=t.tac.target;if(i){const o=Math.atan2(i.position.x-t.holder.position.x,i.position.z-t.holder.position.z),a=Math.atan2(Math.sin(o-t.holder.rotation.y),Math.cos(o-t.holder.rotation.y));n=Math.max(-vu,Math.min(vu,a))}if(t.torsoYaw+=(n-t.torsoYaw)*(1-Math.exp(-12*e)),Math.abs(t.torsoYaw)<1e-4)return;const s=t.torsoYaw*Fb/t.spine.length;this.torsoQuat.setFromAxisAngle(Bb,s);for(const o of t.spine)o.quaternion.multiply(this.torsoQuat)}nearestThreatAt(t,e,n){if(!this.world)return null;let i=null,s=n*n;for(const o of this.world.all()){if(!(o instanceof qn)||o.state!=="alive")continue;const a=o.position.x-t,c=o.position.z-e,l=a*a+c*c;l<s&&(s=l,i=o)}return i}buildUnit(t){const{char:e,rifle:n,silencer:i}=this.templates,s=db(e.scene);let o=0;s.traverse(I=>{const M=I;if(M.isSkinnedMesh){M.geometry.computeBoundingBox();const b=M.geometry.boundingBox;o=Math.max(o,b.max.y-b.min.y)}});const a=Nb/(o||1),c=new pe;c.scale.setScalar(a),c.rotation.y=gu;const l=mu.x+(t-(this.count-1)/2)*Ub,h=mu.z;c.position.set(l,ve(l,h),h),c.add(s),this.scene.add(c),c.updateWorldMatrix(!0,!0);const u=new $c(s),d=new Map;for(const[I,M]of this.clips){const b=u.clipAction(rf(M,s));_a.has(I)&&(b.loop=gd,b.clampWhenFinished=!0),d.set(I,b)}const f=Math.random(),m=d.get(this.startAnim);if(m){m.reset().play();const I=this.clips.get(this.startAnim);I&&(m.time=f*I.duration)}const v=s.getObjectByName(Yt.sanitizeNodeName(ga))??s.getObjectByName(ga),g=s.getObjectByName(Yt.sanitizeNodeName(_u))??s.getObjectByName(_u),p=g?g.position.x:0,y=g?g.position.y:0,S=Ob.map(I=>s.getObjectByName(Yt.sanitizeNodeName(I))??s.getObjectByName(I)).filter(I=>I!==void 0);let x,P;if(v){const I=v.getWorldScale(new T).x||1;P=n.clone(),P.scale.setScalar(kb/(this.rifleLen*I)),ya(P,this.startAnim),v.add(P),x=i.clone(),x.position.copy(Xb),x.rotation.copy(qb),x.scale.setScalar(Yb),x.visible=this.silenced||t<jb,P.add(x)}else console.warn(`AlphaSquad: hand bone "${ga}" not found`);const C=new Xe(new Qe({map:this.beaconTex,color:uT,transparent:!0,depthWrite:!1,blending:We,fog:!1}));C.scale.setScalar(fT),C.position.copy(dT),c.add(C);let A;return this.world&&(A=this.world.add(new Ab(tT,eT,nT)),A.position.copy(c.position)),{holder:c,mixer:u,rifle:P,actions:d,hips:g,hipsRestX:p,hipsRestY:y,silencer:x,beacon:C,beaconPhase:t*1.3,startX:l,startZ:h,soldier:A,dead:!1,combatAnim:this.startAnim,animPhase:f,spine:S,torsoYaw:0,tac:{index:t,pos:c.position.clone(),facing:c.rotation.y,alive:!0,pose:this.startAnim,mode:"move",moveTimer:0,target:null,roundsLeft:0,roundTimer:0,burstSize:0,poseHold:0,touched:new Set}}}respawnDead(){var t;for(let e=0;e<this.units.length;e++){const n=this.units[e];n.dead&&(this.scene.remove(n.holder),n.mixer.stopAllAction(),n.beacon.material.dispose(),n.soldier&&((t=this.world)==null||t.remove(n.soldier.id)),this.units[e]=this.buildUnit(e))}for(const e of this.droppedGuns)this.scene.remove(e.obj);this.droppedGuns.length=0}recyclePatrol(){var t,e,n,i,s;for(const o of this.units)this.scene.remove(o.holder),o.mixer.stopAllAction(),o.beacon.material.dispose(),o.soldier&&((t=this.world)==null||t.remove(o.soldier.id));this.units.length=0;for(const o of this.droppedGuns)this.scene.remove(o.obj);this.droppedGuns.length=0;for(let o=0;o<this.count;o++)this.units.push(this.buildUnit(o));this.syncTacUnits(),(e=this.tactics)==null||e.reset(this.tacUnits,this.waypoints),this.applyTacToHolders(),(n=this.onLoop)==null||n.call(this),(s=this.onStatus)==null||s.call(this,((i=this.tactics)==null?void 0:i.progressText())??"")}clipDuration(t){var e;return((e=this.clips.get(t))==null?void 0:e.duration)??.6}nearestTracerHit(t,e){if(!this.world)return 1/0;let n=1/0;for(const i of this.world.all()){if(!(i instanceof qn)||i.state!=="alive"||i.collidable===!1)continue;const s=i.radius+Jb,o=yT(t.x,t.y,t.z,e.x,e.y,e.z,i.position.x,i.position.y,i.position.z,i.hitHeight??0,s);o>=0&&o<n&&(n=o)}return n}fireUnitRound(t,e){const n=t.rifle;if(n&&(n.updateWorldMatrix(!0,!1),this.muzzlePos.copy(Zr).applyMatrix4(n.matrixWorld),e?(this.aimPos.copy(e.position),this.aimPos.y+=(e.hitHeight??0)*.6,this.fireDir.copy(this.aimPos).sub(this.muzzlePos).normalize()):(this.aheadPos.copy(Zr).add(Mu).applyMatrix4(n.matrixWorld),this.fireDir.copy(this.aheadPos).sub(this.muzzlePos).normalize()),this.fireDir.x+=(Math.random()-.5)*Ji,this.fireDir.y+=(Math.random()-.5)*Ji,this.fireDir.z+=(Math.random()-.5)*Ji,this.fireDir.normalize(),this.muzzleFx.flash(this.muzzlePos,this.fireDir,!this.silenced,this.nearestTracerHit(this.muzzlePos,this.fireDir)),this.world)){this.aheadPos.copy(this.fireDir).multiplyScalar(Su);const i=t.soldier?t.soldier.id:Eu;this.world.add(new Ci(this.muzzlePos,this.aheadPos,Tu,bu,i,this.fireDir,!1,!1,!0))}}setUnitAnim(t,e){const n=t.actions.get(e);if(!n)return;const i=e!==t.combatAnim?t.actions.get(t.combatAnim):void 0;if(n.reset(),!_a.has(e)){const s=this.clips.get(e);s&&(n.time=t.animPhase*s.duration)}n.play(),i&&i!==n?i.crossFadeTo(n,lT,!1):n.setEffectiveWeight(1),t.rifle&&ya(t.rifle,e),t.combatAnim=e}update(t){var i,s,o,a,c;if(this.clock+=t,this.demo&&this.units.length>0){this.demoClock+=t;const l=va[this.demoIndex];let h=this.demoIndex===0?hT:wu;if(_a.has(l)&&(h=(((i=this.clips.get(l))==null?void 0:i.duration)??wu)+.03),this.demoClock>=h){this.demoClock=0,this.demoIndex=(this.demoIndex+1)%va.length;const u=va[this.demoIndex];this.demoIndex===0&&(this.respawnDead(),this.resetPositions(),(s=this.onLoop)==null||s.call(this)),this.setAnimation(u),(o=this.onAnim)==null||o.call(this,u)}}if(this.patrol&&this.tactics&&this.units.length>0){for(const l of this.units)l.tac.alive=!l.dead;this.tactics.updateSquad(t,this.tacUnits)==="recycle"&&this.recyclePatrol()}const e=rT[this.currentAnim]??0,n=this.firing?this.burstTarget:null;for(let l=0;l<this.units.length;l++){const h=this.units[l];if(h.mixer.update(t),h.hips&&(h.hips.position.x=h.hipsRestX,h.hips.position.y=h.hipsRestY),!h.dead&&((a=h.soldier)==null?void 0:a.state)==="dead"&&this.killUnit(h),h.dead)continue;if(this.patrol&&this.tactics)this.tactics.updateUnit(h.tac,t),h.holder.position.copy(h.tac.pos),h.holder.rotation.y=h.tac.facing,h.tac.pose!==h.combatAnim&&this.setUnitAnim(h,h.tac.pose),this.applyTorsoAim(h,t);else{const d=n?Math.atan2(n.position.x-h.holder.position.x,n.position.z-h.holder.position.z):gu;h.holder.rotation.y=MT(h.holder.rotation.y,d,t),e&&(h.holder.position.x+=Math.sin(h.holder.rotation.y)*e*t,h.holder.position.z+=Math.cos(h.holder.rotation.y)*e*t,h.holder.position.y=ve(h.holder.position.x,h.holder.position.z))}const u=.5+.5*Math.sin(this.clock*pT*mT+h.beaconPhase);h.beacon.material.opacity=.4+.6*u,(c=h.soldier)==null||c.position.copy(h.holder.position)}this.patrol||this.updateFiring(t),this.updateDroppedGuns(t),this.muzzleFx.update(t)}updateFiring(t){if(!this.firing||this.units.length===0)return;const e=this.units.find(n=>!n.dead&&n.rifle);if(this.roundsLeft>0){this.roundTimer-=t,this.roundTimer<=0&&(this.fireRound(),this.roundsLeft--,this.roundTimer=Zb,this.roundsLeft===0&&(this.pauseTimer=Qb));return}e&&(!this.burstTarget||this.burstTarget.state!=="alive")&&(this.burstTarget=this.nearestZombie(e.holder.position)),this.pauseTimer-=t,this.pauseTimer<=0&&this.alignedToTarget(e)&&this.startBurst(e)}startBurst(t){var e;if(!t||!this.burstTarget){this.roundsLeft=0;return}this.roundsLeft=yu+Math.floor(Math.random()*($b-yu+1)),this.roundTimer=0,(e=this.onFire)==null||e.call(this,this.roundsLeft,t.holder.position)}alignedToTarget(t){if(!t||!this.burstTarget)return!1;const e=Math.atan2(this.burstTarget.position.x-t.holder.position.x,this.burstTarget.position.z-t.holder.position.z),n=Math.atan2(Math.sin(e-t.holder.rotation.y),Math.cos(e-t.holder.rotation.y));return Math.abs(n)<=cT}fireRound(){const t=this.burstTarget;for(const e of this.units){const n=e.rifle;if(!(!n||e.dead)&&(n.updateWorldMatrix(!0,!1),this.muzzlePos.copy(Zr).applyMatrix4(n.matrixWorld),t?(this.aimPos.copy(t.position),this.aimPos.y+=(t.hitHeight??0)*.6,this.fireDir.copy(this.aimPos).sub(this.muzzlePos).normalize()):(this.aheadPos.copy(Zr).add(Mu).applyMatrix4(n.matrixWorld),this.fireDir.copy(this.aheadPos).sub(this.muzzlePos).normalize()),this.fireDir.x+=(Math.random()-.5)*Ji,this.fireDir.y+=(Math.random()-.5)*Ji,this.fireDir.z+=(Math.random()-.5)*Ji,this.fireDir.normalize(),this.muzzleFx.flash(this.muzzlePos,this.fireDir,!this.silenced,this.nearestTracerHit(this.muzzlePos,this.fireDir)),this.world)){this.aheadPos.copy(this.fireDir).multiplyScalar(Su);const i=e.soldier?e.soldier.id:Eu;this.world.add(new Ci(this.muzzlePos,this.aheadPos,Tu,bu,i,this.fireDir,!1,!1,!0))}}}nearestZombie(t){if(!this.world)return null;let e=null,n=1/0;for(const i of this.world.all()){if(!(i instanceof qn)||i.state!=="alive")continue;const s=t.distanceToSquared(i.position);s<n&&(n=s,e=i)}return e}killUnit(t){t.dead=!0;const n=(this.patrol?xu.has(t.combatAnim):this.crouched)?Hb:zb;for(const[i,s]of t.actions)i===n?s.reset().play():s.stop();this.dropRifle(t),t.beacon.visible=!1}dropRifle(t){const e=t.rifle;if(!e)return;e.updateWorldMatrix(!0,!1);const n=e.getWorldPosition(new T),i=e.getWorldQuaternion(new Zt),s=e.getWorldScale(new T);e.removeFromParent(),e.position.copy(n),e.quaternion.copy(i),e.scale.copy(s),this.scene.add(e),this.droppedGuns.push({obj:e,vel:new T((Math.random()-.5)*5,2+Math.random()*2,(Math.random()-.5)*5),spin:new T((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),resting:!1}),t.rifle=void 0,t.silencer=void 0}updateDroppedGuns(t){for(const e of this.droppedGuns){if(e.resting)continue;e.vel.y-=iT*t,e.obj.position.addScaledVector(e.vel,t),e.obj.rotation.x+=e.spin.x*t,e.obj.rotation.y+=e.spin.y*t,e.obj.rotation.z+=e.spin.z*t;const n=ve(e.obj.position.x,e.obj.position.z)+sT;e.obj.position.y<=n&&(e.obj.position.y=n,e.resting=!0)}}setAnimation(t){this.currentAnim=t,this.crouched=xu.has(t);for(const e of this.units)if(!(e.dead||!e.actions.has(t))){for(const[n,i]of e.actions)n===t?i.reset().play():i.stop();e.rifle&&ya(e.rifle,t)}if(this.firing=Kb.has(t),this.roundsLeft=0,this.pauseTimer=0,this.firing){const e=this.units.find(n=>!n.dead&&n.rifle);this.burstTarget=e?this.nearestZombie(e.holder.position):null}else this.burstTarget=null}resetPositions(){for(const t of this.units)t.dead||t.holder.position.set(t.startX,ve(t.startX,t.startZ),t.startZ)}setSilencer(t){for(const e of this.units)e.silencer&&(e.silencer.visible=t)}setNightVision(t){for(const e of this.clothMats)e.emissiveIntensity=t?_T:xa}makeBlackCamo(t,e){const n=t.image,i=document.createElement("canvas");i.width=n.width,i.height=n.height;const s=i.getContext("2d");s.drawImage(n,0,0);const o=s.getImageData(0,0,i.width,i.height),a=o.data;for(let l=0;l<a.length;l+=4){const h=(.299*a[l]+.587*a[l+1]+.114*a[l+2])*e;a[l]=a[l+1]=a[l+2]=h}s.putImageData(o,0,0);const c=new an(i);return c.colorSpace=t.colorSpace,c.flipY=t.flipY,c.wrapS=t.wrapS,c.wrapT=t.wrapT,c.repeat.copy(t.repeat),c.needsUpdate=!0,c}livingHeadPositions(){this.markerPositions.length=0;for(const t of this.units){if(t.dead)continue;const e=t.holder.position;this.markerPositions.push(new T(e.x,e.y+vT,e.z))}return this.markerPositions}dispose(){var t,e,n;this.disposed=!0,this.muzzleFx.dispose();for(const i of this.droppedGuns)this.scene.remove(i.obj);this.droppedGuns.length=0;for(const i of this.units)i.mixer.stopAllAction(),i.beacon.material.dispose(),this.scene.remove(i.holder);this.units.length=0,this.beaconTex.dispose();for(const i of[(t=this.templates)==null?void 0:t.char.scene,(e=this.templates)==null?void 0:e.rifle,(n=this.templates)==null?void 0:n.silencer])i==null||i.traverse(s=>{if(s instanceof Lt){s.geometry.dispose();const o=Array.isArray(s.material)?s.material:[s.material];for(const a of o)a.dispose()}});this.templates=null}}const bT=120;class TT{constructor(t){_(this,"tex");_(this,"puffs",[]);_(this,"tan",new bt(11047794));this.scene=t,this.tex=this.makeTex()}spawn(t,e,n){for(let i=0;i<9;i++){let s=this.puffs.find(a=>a.life<=0);if(!s){if(this.puffs.length>=bT)break;const a=new Xe(new Qe({map:this.tex,transparent:!0,depthWrite:!1,opacity:0}));a.material.color.copy(this.tan),this.scene.add(a),s={sprite:a,vel:new T,life:0,maxLife:1,size0:1,size1:1},this.puffs.push(s)}const o=i>=6;s.sprite.visible=!0,s.sprite.position.set(t+(Math.random()-.5)*3,e+.6,n+(Math.random()-.5)*3),s.vel.set((Math.random()-.5)*(o?6:12),(o?3:7)+Math.random()*(o?4:9),(Math.random()-.5)*(o?6:12)),s.maxLife=(o?.5:.35)+Math.random()*.4,s.life=s.maxLife,s.size0=(o?4:2)+Math.random()*2,s.size1=(o?16:9)+Math.random()*(o?10:7)}}update(t){for(const e of this.puffs){if(e.life<=0)continue;e.life-=t,e.vel.y-=18*t,e.vel.multiplyScalar(1-1.5*t),e.sprite.position.addScaledVector(e.vel,t);const n=1-Math.max(0,e.life)/e.maxLife,i=e.size0+(e.size1-e.size0)*n;e.sprite.scale.set(i,i,1),e.sprite.material.opacity=.62*(1-n),e.life<=0&&(e.sprite.visible=!1)}}makeTex(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d");for(let n=0;n<10;n++){const i=8+Math.random()*16,s=8+Math.random()*16,o=3+Math.random()*7,a=.08+Math.random()*.16,c=e.createRadialGradient(i,s,0,i,s,o);c.addColorStop(0,`rgba(255,255,255,${a})`),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.fillRect(0,0,32,32)}return new an(t)}dispose(){for(const t of this.puffs)this.scene.remove(t.sprite),t.sprite.material.dispose();this.puffs.length=0,this.tex.dispose()}}const Ru=659488,ET=3683372,wT=700,AT=5200,RT=120,Cu=new T(.45,.5,.4).normalize(),CT=`
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
`,PT=`
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float a = smoothstep(0.5, 0.05, d);            // soft round pinpoint
    if (a <= 0.001) discard;
    gl_FragColor = vec4(vColor, a);
  }
`,IT=new T(0,.6,-.2),Pu=new T(0,-1,-2.2),LT=new T(0,0,-1),DT=new T(0,0,1),ts=1,NT=72,UT=.6,OT=.42,FT=.03,BT=.14,kT=.006,Iu=1.4,Lu=3.05,zT=2.6,Ma=.0022,Du=.025,HT=30,VT=16,GT=.1,WT=.18,XT=16,qT=1.15,YT=.55,jT=0,cf=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,KT={uniforms:{tDiffuse:{value:null},resolution:{value:new vt(1,1)},edgeStrength:{value:2.4},edgeThreshold:{value:.05},hotColor:{value:new bt(16742938)},peakColor:{value:new bt(16773846)},coolColor:{value:new bt(3133695)},chroma:{value:1.4}},vertexShader:cf,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float edgeStrength, edgeThreshold, chroma;
    uniform vec3 hotColor, peakColor, coolColor;
    varying vec2 vUv;
    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
    float sobel(vec2 uv, vec2 texel) {
      float tl = luma(texture2D(tDiffuse, uv + texel * vec2(-1.0, -1.0)).rgb);
      float l  = luma(texture2D(tDiffuse, uv + texel * vec2(-1.0,  0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + texel * vec2(-1.0,  1.0)).rgb);
      float t  = luma(texture2D(tDiffuse, uv + texel * vec2( 0.0, -1.0)).rgb);
      float b  = luma(texture2D(tDiffuse, uv + texel * vec2( 0.0,  1.0)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + texel * vec2( 1.0, -1.0)).rgb);
      float r  = luma(texture2D(tDiffuse, uv + texel * vec2( 1.0,  0.0)).rgb);
      float br = luma(texture2D(tDiffuse, uv + texel * vec2( 1.0,  1.0)).rgb);
      float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br;
      float gy = -tl - 2.0 * t - tr + bl + 2.0 * b + br;
      return length(vec2(gx, gy));
    }
    void main() {
      vec2 texel = 1.0 / resolution;
      float eC = sobel(vUv, texel);
      float eR = sobel(vUv + vec2(chroma, 0.0) * texel, texel);
      float eB = sobel(vUv - vec2(chroma, 0.0) * texel, texel);
      float e = clamp((eC - edgeThreshold) * edgeStrength, 0.0, 1.5);
      vec3 col = mix(hotColor, peakColor, smoothstep(0.6, 1.3, e)) * e;
      col += hotColor  * clamp((eR - eC) * edgeStrength, 0.0, 1.0) * 0.5; // warm fringe
      col += coolColor * clamp((eB - eC) * edgeStrength, 0.0, 1.0) * 0.5; // cool fringe
      gl_FragColor = vec4(col, 1.0);
    }
  `},$T={uniforms:{tDiffuse:{value:null},resolution:{value:new vt(1,1)},uTime:{value:0},vignette:{value:1.15},scanline:{value:.09}},vertexShader:cf,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float uTime, vignette, scanline;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      c *= 1.0 - scanline * (0.5 + 0.5 * sin(vUv.y * resolution.y * 3.14159)); // scanlines
      vec2 d = vUv - 0.5;
      c *= smoothstep(0.85, 0.2, length(d) * vignette);                        // vignette
      c += (hash(vUv * resolution + uTime) - 0.5) * 0.02;                      // grain
      gl_FragColor = vec4(c, 1.0);
    }
  `};function hn(r){const t=Math.sin(r*12.9898)*43758.5453;return t-Math.floor(t)}function Nu(r){r.traverse(t=>{if(t instanceof Lt){t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()}})}const os=class os{constructor(t,e){_(this,"renderer");_(this,"scene");_(this,"camera");_(this,"player",null);_(this,"terrain");_(this,"props");_(this,"desertMaps",[]);_(this,"crowd");_(this,"alphaSquad");_(this,"waypointBoxes",[]);_(this,"waypointBoxGeo",null);_(this,"waypointCapGeo",null);_(this,"waypointBoxMat",null);_(this,"waypointCapMat",null);_(this,"groundImpacts");_(this,"effects");_(this,"rockets",new Map);_(this,"rocketSeen",new Set);_(this,"rocketBodyGeo",null);_(this,"rocketNoseGeo",null);_(this,"rocketBodyMat",null);_(this,"rocketNoseMat",null);_(this,"stars");_(this,"starMat",null);_(this,"moon");_(this,"moonTex",null);_(this,"gunHousing");_(this,"gunBarrel");_(this,"gunTex",null);_(this,"tracers",new Map);_(this,"seenIds",new Set);_(this,"coreGeo",null);_(this,"coreMat",null);_(this,"glowGeo",null);_(this,"glowMat",null);_(this,"muzzleFlash",null);_(this,"flashTex",null);_(this,"renderPos",new T);_(this,"renderQuat",new Zt);_(this,"eye",new T);_(this,"effQuat",new Zt);_(this,"bankQuat",new Zt);_(this,"tracerDir",new T);_(this,"aimScratch",new T);_(this,"aimDir",new T);_(this,"aimHit",new T);_(this,"scopeRecoil",0);_(this,"scopeClock",0);_(this,"scopePanYaw",0);_(this,"scopePanPitch",0);_(this,"scopeEuler",new Kt(0,0,0,"YXZ"));_(this,"scopeFwd",new T);_(this,"scopeAimOrigin",new T);_(this,"scopeAimDir",new T);_(this,"gunMountWorld",new T);_(this,"gunAimDir",new T);_(this,"gunDir",new T);_(this,"gunMuzzle",new T);_(this,"gunHoldRel",new Zt);_(this,"gunDesiredRel",new Zt);_(this,"gunPrevRel",new Zt);_(this,"gunRel",new Zt);_(this,"gunInvHull",new Zt);_(this,"muzzleQuatScratch",new Zt);_(this,"gunSwivelSpeedValue",0);_(this,"gunSpin",0);_(this,"lastFrameTime",performance.now());_(this,"smokeTex",null);_(this,"smoke",[]);_(this,"smokeEmitTimer",0);_(this,"thermal",!1);_(this,"thermalComposer",null);_(this,"thermalTarget",null);_(this,"thermalEdge",null);_(this,"thermalFinish",null);_(this,"bloomPass",null);_(this,"markerTmp",new T);_(this,"markerFwd",new T);_(this,"onResize",()=>{if(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.thermalComposer){const t=this.renderer.getDrawingBufferSize(new vt);this.thermalTarget.setSize(t.x,t.y),this.thermalComposer.setSize(t.x,t.y),this.thermalEdge.uniforms.resolution.value.copy(t),this.thermalFinish.uniforms.resolution.value.copy(t),this.bloomPass.setSize(t.x,t.y)}});var s;this.renderer=new Oc({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement),this.scene=new Bc,this.scene.background=new bt(Ru),this.scene.fog=new Fc(Ru,wT,AT),this.camera=new Ne(72,window.innerWidth/window.innerHeight,.1,8e3);const n=new Yd(1779520,329483,.4);n.layers.enable(ts),this.scene.add(n);const i=new ar(11453183,.65);i.position.copy(Cu),i.layers.enable(ts),this.scene.add(i),this.buildStars(),this.buildMoon(),this.buildTerrain(),this.buildProps(),this.buildGun(),this.crowd=new ub(this.scene,"./models/"),e&&(this.alphaSquad=new ST(this.scene,"./models/",e)),(s=e==null?void 0:e.waypoints)!=null&&s.length&&this.buildWaypointBoxes(e.waypoints),this.groundImpacts=new TT(this.scene),this.effects=new $d(this.scene),window.addEventListener("resize",this.onResize)}setPlayer(t){this.player=t}groundHit(t,e,n){this.groundImpacts.spawn(t,e,n)}get gunSwivelSpeed(){return this.gunSwivelSpeedValue}get gunMuzzleWorld(){return this.gunMuzzle}get gunDirection(){return this.gunDir}get scopeOrigin(){return this.scopeAimOrigin}get scopeDirection(){return this.scopeAimDir}scopeKick(){this.scopeRecoil=FT}computeMuzzle(t,e,n,i){this.muzzleQuatScratch.copy(e).multiply(this.gunHoldRel),i.set(0,0,-1).applyQuaternion(this.muzzleQuatScratch),n.copy(Pu).applyQuaternion(e).add(t).addScaledVector(i,Lu)}aimPointFromScreen(t,e){const n=window.innerWidth,i=window.innerHeight;return this.camera.updateMatrixWorld(),this.aimScratch.set(t/n*2-1,-(e/i)*2+1,.5).unproject(this.camera).sub(this.camera.position).normalize().multiplyScalar(2e3).add(this.camera.position),this.aimScratch}groundAimFromScreen(t,e,n=3e3){const i=window.innerWidth,s=window.innerHeight;this.camera.updateMatrixWorld(),this.aimDir.set(t/i*2-1,-(e/s)*2+1,.5).unproject(this.camera).sub(this.camera.position).normalize();const o=this.camera.position;let a=0,c=o.y-ve(o.x,o.z)>0;const l=12;for(let h=l;h<=n;h+=l){this.aimHit.copy(o).addScaledVector(this.aimDir,h);const u=this.aimHit.y-ve(this.aimHit.x,this.aimHit.z)>0;if(c&&!u){let d=a,f=h;for(let m=0;m<12;m++){const v=(d+f)/2;this.aimHit.copy(o).addScaledVector(this.aimDir,v),this.aimHit.y-ve(this.aimHit.x,this.aimHit.z)>0?d=v:f=v}return this.aimHit.copy(o).addScaledVector(this.aimDir,(d+f)/2),this.aimHit}a=h,c=u}return this.aimHit.copy(o).addScaledVector(this.aimDir,n)}buildTerrain(){const e=new Ts(oa,oa,200,200);e.rotateX(-Math.PI/2);const n=e.attributes.position;for(let l=0;l<n.count;l++){const h=n.getX(l),u=n.getZ(l);n.setY(l,ve(h,u))}n.needsUpdate=!0,e.computeVertexNormals();const i=new qd,s=oa/RT,o=this.renderer.capabilities.getMaxAnisotropy(),a=(l,h=!1)=>{const u=i.load(`./texture/desert/${l}`);return u.wrapS=Pn,u.wrapT=Pn,u.repeat.set(s,s),u.anisotropy=o,h&&(u.colorSpace=Ie),this.desertMaps.push(u),u},c=new ye({map:a("Ground033_2K_Color.jpg",!0),normalMap:a("Ground033_2K_NormalGL.jpg"),roughnessMap:a("Ground033_2K_Roughness.jpg"),aoMap:a("Ground033_2K_AmbientOcclusion.jpg"),color:ET,roughness:1,metalness:0});this.terrain=new Lt(e,c),this.scene.add(this.terrain)}buildProps(){this.props=[];const t=new ye({color:4871520,roughness:.85,metalness:.1,flatShading:!0}),e=60,n=2400;for(let i=0;i<e;i++){const s=(hn(i*3+1)-.5)*2*n,o=(hn(i*3+2)-.5)*2*n,a=8+hn(i*3+3)*26,c=new ze(a,a*(.6+hn(i+11)),a),l=new Lt(c,t),h=a*(.6+hn(i+11))*.5;l.position.set(s,ve(s,o)+h,o),l.rotation.y=hn(i+17)*Math.PI,this.scene.add(l),this.props.push(l)}}buildWaypointBoxes(t){this.waypointBoxGeo=new ze(26,26,26),this.waypointCapGeo=new ze(26*.5,26*.28,26*.5),this.waypointBoxMat=new ye({color:5917732,emissive:2366730,roughness:.7,metalness:.15,flatShading:!0}),this.waypointCapMat=new Ue({color:16764762,fog:!1});for(const n of t){const i=ve(n.x,n.z),s=new pe,o=new Lt(this.waypointBoxGeo,this.waypointBoxMat);o.position.set(n.x,i+26/2,n.z),s.add(o);const a=new Lt(this.waypointCapGeo,this.waypointCapMat);a.position.set(n.x,i+26+26*.14,n.z),s.add(a),this.scene.add(s),this.waypointBoxes.push(s)}}buildStars(){const n=this.renderer.getPixelRatio(),i=new Float32Array(1600*3),s=new Float32Array(1600*3),o=new Float32Array(1600),a=new Float32Array(1600),c=new Float32Array(1600),l=new Float32Array(1600);for(let u=0;u<1600;u++){const d=hn(u*7+1)*Math.PI*2,f=(.05+hn(u*7+2)*.95)*(Math.PI/2),m=Math.cos(f)*7e3;i[u*3]=Math.cos(d)*m,i[u*3+1]=Math.sin(f)*7e3,i[u*3+2]=Math.sin(d)*m;const v=hn(u*7+3);o[u]=(2.6-1.9*v)*n;const g=1-.55*v,p=hn(u*7+4);let y,S,x;p<.12?[y,S,x]=[1,.8,.62]:p<.32?[y,S,x]=[1,.94,.84]:p<.72?[y,S,x]=[.92,.96,1]:[y,S,x]=[.72,.83,1],s[u*3]=y*g,s[u*3+1]=S*g,s[u*3+2]=x*g,a[u]=.15+.75*v,c[u]=1.2+hn(u*7+5)*4.5,l[u]=hn(u*7+6)*Math.PI*2}const h=new Re;h.setAttribute("position",new te(i,3)),h.setAttribute("aColor",new te(s,3)),h.setAttribute("aSize",new te(o,1)),h.setAttribute("aTwinkle",new te(a,1)),h.setAttribute("aSpeed",new te(c,1)),h.setAttribute("aPhase",new te(l,1)),this.starMat=new Le({uniforms:{uTime:{value:0}},vertexShader:CT,fragmentShader:PT,transparent:!0,depthWrite:!1,blending:We,fog:!1}),this.stars=new Wc(h,this.starMat),this.scene.add(this.stars)}buildMoon(){this.moonTex=this.makeMoonTexture(),this.moon=new Xe(new Qe({map:this.moonTex,color:16777215,transparent:!0,depthWrite:!1,fog:!1,opacity:.95})),this.moon.scale.set(900,900,1),this.scene.add(this.moon)}makeMoonTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=128/2,s=n.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(220,230,255,0.5)"),s.addColorStop(.35,"rgba(200,215,255,0.12)"),s.addColorStop(1,"rgba(200,215,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const o=n.createRadialGradient(i,i,0,i,i,128*.26);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.7,"rgba(240,245,255,0.98)"),o.addColorStop(1,"rgba(220,230,255,0)"),n.fillStyle=o,n.beginPath(),n.arc(i,i,128*.26,0,Math.PI*2),n.fill(),new an(e)}render(t,e,n,i,s,o,a,c=!1,l=0,h=0,u=NT){var m;const d=performance.now(),f=Math.min((d-this.lastFrameTime)/1e3,.1);this.lastFrameTime=d,this.player&&(this.renderPos.lerpVectors(this.player.prevPosition,this.player.position,e),this.renderQuat.copy(this.player.prevQuaternion).slerp(this.player.quaternion,e),this.effQuat.copy(this.renderQuat).multiply(this.bankQuat.setFromAxisAngle(DT,this.player.bankOffset)),this.eye.copy(IT).applyQuaternion(this.effQuat).add(this.renderPos),c?this.updateScopeCamera(l,o,a,f,h):(this.camera.fov!==u&&(this.camera.fov=u,this.camera.updateProjectionMatrix()),this.camera.position.copy(this.eye),this.camera.quaternion.copy(this.effQuat),this.updateGun(this.renderPos,this.effQuat,n?this.aimPointFromScreen(o,a):null,f,s),i&&(this.camera.rotateX((Math.random()*2-1)*Ma),this.camera.rotateY((Math.random()*2-1)*Ma),this.camera.rotateZ((Math.random()*2-1)*Ma*.6),this.camera.position.x+=(Math.random()*2-1)*Du,this.camera.position.y+=(Math.random()*2-1)*Du))),this.stars.position.copy(this.camera.position),this.moon.position.copy(this.camera.position).addScaledVector(Cu,6500),this.starMat&&(this.starMat.uniforms.uTime.value+=f),this.crowd.update(t,e,f),(m=this.alphaSquad)==null||m.update(f),this.groundImpacts.update(f),this.effects.update(f),this.syncTracers(t),this.syncRockets(t,f),this.updateSmoke(f,i),this.updateMuzzleFlash(i),this.thermal?(this.ensureThermal(),this.renderer.setRenderTarget(this.thermalTarget),this.renderScene(c),this.renderer.setRenderTarget(null),this.thermalFinish.uniforms.uTime.value+=f,this.thermalComposer.render()):this.renderScene(c)}renderScene(t){if(this.camera.layers.set(0),t)this.renderer.render(this.scene,this.camera);else{this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.camera.layers.set(ts),this.renderer.autoClear=!1;const e=this.scene.background;this.scene.background=null,this.renderer.render(this.scene,this.camera),this.scene.background=e,this.renderer.autoClear=!0,this.camera.layers.set(0)}}setThermal(t){this.thermal=t,t&&this.ensureThermal()}setCommandoNightVision(t){var e;(e=this.alphaSquad)==null||e.setNightVision(t)}friendlyMarkers(){const t=[];if(!this.alphaSquad)return t;this.camera.getWorldDirection(this.markerFwd);for(const e of this.alphaSquad.livingHeadPositions()){const n=this.camera.position.distanceTo(e),i=this.markerTmp.subVectors(e,this.camera.position).dot(this.markerFwd)>0;this.markerTmp.copy(e).project(this.camera);const s=i&&Math.abs(this.markerTmp.x)<=1&&Math.abs(this.markerTmp.y)<=1;t.push({x:(this.markerTmp.x*.5+.5)*window.innerWidth,y:(-this.markerTmp.y*.5+.5)*window.innerHeight,dist:n,onScreen:s})}return t}ensureThermal(){if(this.thermalComposer)return;const t=this.renderer.getDrawingBufferSize(new vt);this.thermalTarget=new pn(t.x,t.y);const e=new tS(this.renderer);e.addPass(new eS(this.thermalTarget.texture)),this.thermalEdge=new _c(KT),this.thermalEdge.uniforms.resolution.value.copy(t),e.addPass(this.thermalEdge),this.bloomPass=new bs(t.clone(),qT,YT,jT),e.addPass(this.bloomPass),this.thermalFinish=new _c($T),this.thermalFinish.uniforms.resolution.value.copy(t),this.thermalFinish.renderToScreen=!0,e.addPass(this.thermalFinish),e.setSize(t.x,t.y),this.thermalComposer=e}updateScopeCamera(t,e,n,i,s){t>0&&this.camera.fov!==t&&(this.camera.fov=t,this.camera.updateProjectionMatrix()),this.scopeFwd.set(0,0,-1).applyQuaternion(this.renderQuat);const o=Math.atan2(-this.scopeFwd.x,-this.scopeFwd.z),a=e/window.innerWidth*2-1,c=n/window.innerHeight*2-1,l=1-Math.exp(-12*i);this.scopePanYaw+=(-a*UT-this.scopePanYaw)*l,this.scopePanPitch+=(-c*OT-this.scopePanPitch)*l,this.scopeRecoil=Math.max(0,this.scopeRecoil-i*BT),this.scopeClock+=i;const h=kT*(1-s),u=Math.sin(this.scopeClock*Iu)*h,d=Math.sin(this.scopeClock*Iu*.7+1.3)*h*1.2,f=this.scopePanYaw+u,m=this.scopePanPitch+this.scopeRecoil+d;this.scopeEuler.set(m,o+f,0,"YXZ"),this.camera.quaternion.setFromEuler(this.scopeEuler),this.camera.position.copy(this.eye),this.scopeAimOrigin.copy(this.camera.position),this.scopeAimDir.set(0,0,-1).applyQuaternion(this.camera.quaternion)}updateSmoke(t,e){e&&(this.smokeEmitTimer-=t,this.smokeEmitTimer<=0&&(this.smokeEmitTimer=GT,this.emitSmoke()));for(const n of this.smoke){if(n.life<=0)continue;n.life-=t,n.sprite.position.addScaledVector(n.vel,t),n.vel.multiplyScalar(1-1.2*t);const i=1-Math.max(0,n.life)/n.maxLife,s=n.size0+(n.size1-n.size0)*i;n.sprite.scale.set(s,s,1);const o=i<.15?i/.15:1-(i-.15)/.85;n.sprite.material.opacity=WT*o,n.life<=0&&(n.sprite.visible=!1)}}emitSmoke(){this.smokeTex||(this.smokeTex=this.makeSmokeTexture());let t=this.smoke.find(e=>e.life<=0);if(!t){if(this.smoke.length>=VT)return;const e=new Xe(new Qe({map:this.smokeTex,color:9146261,transparent:!0,depthWrite:!1,opacity:0}));this.scene.add(e),t={sprite:e,vel:new T,life:0,maxLife:1,size0:1,size1:1},this.smoke.push(t)}t.sprite.visible=!0,t.sprite.position.copy(this.gunMuzzle),t.sprite.material.rotation=Math.random()*Math.PI*2,t.vel.set((Math.random()-.5)*1.4,1.4+Math.random()*.9,(Math.random()-.5)*1.4).addScaledVector(this.gunDir,-1.5),t.maxLife=.9+Math.random()*.8,t.life=t.maxLife,t.size0=.6+Math.random()*.4,t.size1=2.6+Math.random()*1.8}makeSmokeTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");for(let n=0;n<16;n++){const i=14+Math.random()*36,s=14+Math.random()*36,o=5+Math.random()*13,a=.04+Math.random()*.1,c=140+Math.floor(Math.random()*40),l=e.createRadialGradient(i,s,0,i,s,o);l.addColorStop(0,`rgba(${c},${c},${c},${a})`),l.addColorStop(1,`rgba(${c},${c},${c},0)`),e.fillStyle=l,e.fillRect(0,0,64,64)}return new an(t)}buildGun(){const t=this.getGunTexture(),e=new ye({map:t,color:9147293,metalness:.75,roughness:.42}),n=new ye({color:2106410,metalness:.5,roughness:.6,flatShading:!0}),i=(h,u,d,f=12)=>{const m=new Ze(h,u,d,f);return m.rotateX(Math.PI/2),m};this.gunHousing=new pe;const s=new Lt(new ze(1.15,.55,1),n);s.position.z=.35,this.gunHousing.add(s);const o=new Lt(i(.44,.44,1,16),e);o.position.z=.1,this.gunHousing.add(o),this.scene.add(this.gunHousing),this.gunBarrel=new pe;const a=new Lt(i(.32,.32,.9,16),e);a.position.z=-.45,this.gunBarrel.add(a);const c=i(.08,.08,2.7,10);for(let h=0;h<6;h++){const u=h/6*Math.PI*2,d=new Lt(c,e);d.position.set(Math.cos(u)*.17,Math.sin(u)*.17,-1.7),this.gunBarrel.add(d)}const l=new Lt(i(.36,.32,.3,16),n);l.position.z=-2.85,this.gunBarrel.add(l),this.scene.add(this.gunBarrel),this.flashTex=this.makeFlashTexture(),this.muzzleFlash=new Xe(new Qe({map:this.flashTex,color:16777215,transparent:!0,opacity:0,blending:We,depthWrite:!1,depthTest:!0,fog:!1})),this.muzzleFlash.visible=!1,this.scene.add(this.muzzleFlash),this.gunHousing.traverse(h=>h.layers.set(ts)),this.gunBarrel.traverse(h=>h.layers.set(ts)),this.muzzleFlash.layers.set(ts)}updateMuzzleFlash(t){const e=this.muzzleFlash;if(!e)return;if(!t){e.visible=!1;return}e.visible=!0,e.position.copy(this.gunMuzzle);const n=1.8+Math.random()*2.4;e.scale.set(n,n,1);const i=e.material;i.rotation=Math.random()*Math.PI*2,i.opacity=.5+Math.random()*.5}makeFlashTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.translate(128/2,128/2),n.globalCompositeOperation="lighter";const i=(c,l,h)=>{n.save(),n.rotate(c);const u=n.createLinearGradient(0,0,l,0);u.addColorStop(0,"rgba(255,240,205,0.85)"),u.addColorStop(.4,"rgba(255,175,80,0.45)"),u.addColorStop(1,"rgba(255,110,35,0)"),n.fillStyle=u,n.beginPath(),n.moveTo(0,-h),n.lineTo(l,0),n.lineTo(0,h),n.closePath(),n.fill(),n.restore()},s=128*.5,o=18;for(let c=0;c<o;c++){const l=c/o*Math.PI*2+(Math.random()-.5)*.4;i(l,(.35+Math.random()*.55)*s,(.03+Math.random()*.05)*128)}for(let c=0;c<5;c++)i(Math.random()*Math.PI*2,(.8+Math.random()*.2)*s,(.015+Math.random()*.025)*128);const a=n.createRadialGradient(0,0,0,0,0,s*.42);return a.addColorStop(0,"rgba(255,255,250,1)"),a.addColorStop(.5,"rgba(255,220,140,0.8)"),a.addColorStop(1,"rgba(255,160,70,0)"),n.fillStyle=a,n.beginPath(),n.arc(0,0,s*.42,0,Math.PI*2),n.fill(),n.globalCompositeOperation="source-over",new an(e)}updateGun(t,e,n,i,s){this.gunMountWorld.copy(Pu).applyQuaternion(e).add(t),this.gunHousing.position.copy(this.gunMountWorld),this.gunHousing.quaternion.copy(e),this.gunBarrel.position.copy(this.gunMountWorld),n&&(this.gunAimDir.copy(n).sub(this.gunMountWorld),this.gunAimDir.lengthSq()>1e-6&&(this.gunAimDir.normalize(),this.gunRel.setFromUnitVectors(LT,this.gunAimDir),this.gunInvHull.copy(e).invert(),this.gunDesiredRel.copy(this.gunInvHull).multiply(this.gunRel),this.gunHoldRel.rotateTowards(this.gunDesiredRel,zT*i))),this.gunBarrel.quaternion.copy(e).multiply(this.gunHoldRel),s&&(this.gunSpin=(this.gunSpin+HT*i)%(Math.PI*2)),this.gunBarrel.rotateZ(this.gunSpin),this.gunDir.set(0,0,-1).applyQuaternion(this.gunBarrel.quaternion),this.gunMuzzle.copy(this.gunMountWorld).addScaledVector(this.gunDir,Lu);const o=this.gunPrevRel.angleTo(this.gunHoldRel);this.gunSwivelSpeedValue=o/Math.max(i,.001),this.gunPrevRel.copy(this.gunHoldRel)}getGunTexture(){if(this.gunTex)return this.gunTex;const t=document.createElement("canvas");t.width=64,t.height=128;const e=t.getContext("2d");e.fillStyle="#3a4048",e.fillRect(0,0,64,128);for(let i=0;i<420;i++){const s=Math.random()*64,o=Math.random()*128,a=3+Math.random()*12,c=Math.random()<.5;e.strokeStyle=c?`rgba(150,160,172,${.05+Math.random()*.18})`:`rgba(14,16,20,${.05+Math.random()*.24})`,e.beginPath(),e.moveTo(s,o),e.lineTo(s,o+a),e.stroke()}e.strokeStyle="rgba(8,9,11,0.6)",e.lineWidth=1;for(const i of[20,54,92])e.beginPath(),e.moveTo(0,i+.5),e.lineTo(64,i+.5),e.stroke();e.fillStyle="#caa23a",e.fillRect(0,106,64,9),e.fillStyle="rgba(0,0,0,0.45)";for(let i=-10;i<64;i+=12)e.fillRect(i,106,6,9);const n=new an(t);return n.wrapS=Pn,n.wrapT=Rn,n.repeat.set(2,1),this.gunTex=n,n}syncTracers(t){this.seenIds.clear();for(const e of t.all()){if(!(e instanceof Ci)||!e.visibleTracer)continue;let n=this.tracers.get(e.id);if(n||(n=this.createTracer(),this.scene.add(n),this.tracers.set(e.id,n)),e.heading.lengthSq()>1e-6){this.tracerDir.copy(e.heading).normalize();const i=this.aimScratch.copy(e.position).sub(this.gunMuzzle).dot(this.tracerDir);n.position.copy(this.gunMuzzle).addScaledVector(this.tracerDir,i),n.quaternion.setFromUnitVectors(os.TRACER_AXIS,this.tracerDir),n.visible=i>XT}else n.visible=!1;this.seenIds.add(e.id)}for(const[e,n]of this.tracers)this.seenIds.has(e)||(this.scene.remove(n),this.tracers.delete(e))}detonation(t,e,n,i){this.effects.spawnExplosion(t,e,n,i);const s=ve(t,n);e-s<i&&this.groundImpacts.spawn(t,s,n)}syncRockets(t,e){this.rocketSeen.clear();for(const n of t.all()){if(!(n instanceof lr))continue;let i=this.rockets.get(n.id);i||(i=this.createRocket(),this.scene.add(i.group),this.rockets.set(n.id,i)),i.group.position.copy(n.position),n.heading.lengthSq()>1e-6&&(this.tracerDir.copy(n.heading).normalize(),i.group.quaternion.setFromUnitVectors(os.ROCKET_AXIS,this.tracerDir));const s=n.burning;for(const o of i.flames)o.visible=s;if(s){const o=.75+Math.random()*.6;i.flames[0].scale.set(o*.95,o*2.2,1),i.flames[1].scale.set(o*.55,o*1.3,1)}i.trail-=e,i.trail<=0&&(i.trail=.03,this.effects.spawnSmoke(n.position.x-this.tracerDir.x*1.2,n.position.y-this.tracerDir.y*1.2,n.position.z-this.tracerDir.z*1.2)),this.rocketSeen.add(n.id)}for(const[n,i]of this.rockets)this.rocketSeen.has(n)||(this.scene.remove(i.group),this.rockets.delete(n))}createRocket(){this.rocketBodyGeo||(this.rocketBodyGeo=new Ze(.16,.16,1.5,8),this.rocketBodyGeo.rotateX(Math.PI/2)),this.rocketNoseGeo||(this.rocketNoseGeo=new Ze(0,.16,.5,8),this.rocketNoseGeo.rotateX(Math.PI/2)),this.rocketBodyMat||(this.rocketBodyMat=new ye({color:3817287,metalness:.6,roughness:.5})),this.rocketNoseMat||(this.rocketNoseMat=new Ue({color:16765562,fog:!1}));const t=new pe,e=new Lt(this.rocketBodyGeo,this.rocketBodyMat);t.add(e);const n=new Lt(this.rocketNoseGeo,this.rocketNoseMat);n.position.z=1,t.add(n),this.smokeTex||(this.smokeTex=this.makeSmokeTexture());const i=(a,c)=>{const l=new Xe(new Qe({map:this.smokeTex,color:a,transparent:!0,depthWrite:!1,blending:We,fog:!1}));return l.position.z=c,t.add(l),l},s=i(16742942,-1.5),o=i(16770720,-1.05);return{group:t,flames:[s,o],trail:0}}createTracer(){this.coreGeo||(this.coreGeo=new Ze(.09,.07,2.2,6),this.coreGeo.rotateX(Math.PI/2)),this.coreMat||(this.coreMat=new Ue({color:16773839,fog:!1})),this.glowGeo||(this.glowGeo=new Ze(.1,0,11,6),this.glowGeo.rotateX(Math.PI/2)),this.glowMat||(this.glowMat=new Ue({color:16762726,transparent:!0,opacity:.22,blending:We,depthWrite:!1,fog:!1}));const t=new pe,e=new Lt(this.coreGeo,this.coreMat);t.add(e);const n=new Lt(this.glowGeo,this.glowMat);return n.position.z=-6.5,t.add(n),t}dispose(){var t,e,n,i,s,o,a,c,l,h,u,d,f,m,v,g,p,y,S,x;window.removeEventListener("resize",this.onResize),(t=this.thermalComposer)==null||t.dispose(),(e=this.thermalTarget)==null||e.dispose(),this.crowd.dispose(),(n=this.alphaSquad)==null||n.dispose();for(const P of this.waypointBoxes)this.scene.remove(P);this.waypointBoxes.length=0,(i=this.waypointBoxGeo)==null||i.dispose(),(s=this.waypointCapGeo)==null||s.dispose(),(o=this.waypointBoxMat)==null||o.dispose(),(a=this.waypointCapMat)==null||a.dispose(),this.groundImpacts.dispose(),this.scene.remove(this.stars),this.stars.geometry.dispose(),(c=this.starMat)==null||c.dispose(),this.scene.remove(this.moon),this.moon.material.dispose(),(l=this.moonTex)==null||l.dispose(),this.terrain.geometry.dispose(),this.terrain.material.dispose();for(const P of this.desertMaps)P.dispose();for(const P of this.props)P instanceof Lt&&P.geometry.dispose();this.props[0]instanceof Lt&&this.props[0].material.dispose();for(const P of this.tracers.values())this.scene.remove(P);this.tracers.clear(),(h=this.coreGeo)==null||h.dispose(),(u=this.coreMat)==null||u.dispose(),(d=this.glowGeo)==null||d.dispose(),(f=this.glowMat)==null||f.dispose();for(const P of this.rockets.values()){this.scene.remove(P.group);for(const C of P.flames)C.material.dispose()}this.rockets.clear(),(m=this.rocketBodyGeo)==null||m.dispose(),(v=this.rocketNoseGeo)==null||v.dispose(),(g=this.rocketBodyMat)==null||g.dispose(),(p=this.rocketNoseMat)==null||p.dispose(),this.muzzleFlash&&(this.scene.remove(this.muzzleFlash),this.muzzleFlash.material.dispose()),(y=this.flashTex)==null||y.dispose(),this.scene.remove(this.gunHousing),this.scene.remove(this.gunBarrel),Nu(this.gunHousing),Nu(this.gunBarrel),(S=this.gunTex)==null||S.dispose();for(const P of this.smoke)this.scene.remove(P.sprite),P.sprite.material.dispose();this.smoke.length=0,(x=this.smokeTex)==null||x.dispose(),this.renderer.dispose()}};_(os,"ROCKET_AXIS",new T(0,0,1)),_(os,"TRACER_AXIS",new T(0,0,1));let Sc=os;function Ut(r,t,e){const n=document.createElement(r);return t&&(n.className=t),e&&e.appendChild(n),n}const ZT=["N","NE","E","SE","S","SW","W","NW"];class QT{constructor(t,e={}){_(this,"container");_(this,"header");_(this,"areaLine");_(this,"throttleFill");_(this,"throttleText");_(this,"speedFill");_(this,"speedText");_(this,"altText");_(this,"hullFill");_(this,"hullText");_(this,"headingText");_(this,"threatText");_(this,"weaponsWrap");_(this,"weaponRows",new Map);_(this,"dev");_(this,"scope");_(this,"scopeReadout");_(this,"scopeRangeEl");_(this,"scopeHdgEl");_(this,"audioBars",[]);_(this,"breathFill");_(this,"panels",[]);_(this,"nvGreenBtn");_(this,"nvThermalBtn");_(this,"nvMode","off");_(this,"friendlyLayer");_(this,"friendlyPool",[]);_(this,"onKey",t=>{t.repeat||(t.code==="KeyN"?this.setNv("green"):t.code==="KeyT"?this.setNv("thermal"):t.code==="Backslash"&&this.resetLayout())});this.options=e;const n=Ut("div","hud hud-paladin",t);this.container=n,Ut("div","hud-vignette",n),Ut("div","hud-nv",n),this.friendlyLayer=Ut("div","hud-friendly-layer",n);for(const y of["tl","tr","bl","br"])Ut("div",`hud-corner hud-corner-${y}`,n);const i=Ut("div","hud-ident",n);this.header=Ut("div","hud-header",i),this.areaLine=Ut("div","hud-sector",i),this.headingText=Ut("div","hud-heading",n),this.threatText=Ut("div","hud-threat",n);const s=Ut("div","hud-nv-toggles",n);this.nvGreenBtn=Ut("button","hud-nv-toggle",s),this.nvGreenBtn.type="button",this.nvGreenBtn.textContent="GEN2",this.nvGreenBtn.title="Green night vision (N)",this.nvGreenBtn.addEventListener("click",()=>this.setNv("green")),this.nvThermalBtn=Ut("button","hud-nv-toggle thermal",s),this.nvThermalBtn.type="button",this.nvThermalBtn.textContent="THRM",this.nvThermalBtn.title="Thermal night vision (T)",this.nvThermalBtn.addEventListener("click",()=>this.setNv("thermal")),this.updateNvButtons();const o=new Ai({parent:n,id:"paladin-flight",title:"FLIGHT",defaults:{left:"40px",bottom:"40px"}}),a=this.barRow(o.body,"THR","hud-fill-thr");this.throttleFill=a.fill,this.throttleText=a.val;const c=this.barRow(o.body,"VEL","hud-fill-spd");this.speedFill=c.fill,this.speedText=c.val;const l=Ut("div","hud-stat",o.body);Ut("div","hud-stat-label",l).textContent="ALT",Ut("div","hud-stat-spacer",l),this.altText=Ut("div","hud-stat-val",l),this.panels.push(o);const h=new Ai({parent:n,id:"paladin-airframe",title:"AIRFRAME",defaults:{right:"40px",bottom:"40px"}}),u=this.barRow(h.body,"HULL","hud-fill-hull");this.hullFill=u.fill,this.hullText=u.val,this.weaponsWrap=Ut("div","hud-weapons",h.body),this.panels.push(h),this.dev=Ut("div","hud-dev",n),this.scope=Ut("div","hud-scope",n),Ut("div","hud-scope-mask",this.scope);const d=Ut("div","hud-scope-reticle",this.scope);Ut("div","hud-scope-ticks hud-scope-ticks-h",d),Ut("div","hud-scope-ticks hud-scope-ticks-v",d),Ut("div","hud-scope-dot",d);const f=Ut("div","hud-scope-info",this.scope);this.scopeRangeEl=Ut("div","hud-scope-line",f),this.scopeHdgEl=Ut("div","hud-scope-line",f);const m=Ut("div","hud-scope-audio",this.scope);Ut("div","hud-scope-audio-label",m).textContent="AUD";const v=Ut("div","hud-scope-meter",m);for(let y=0;y<10;y++)this.audioBars.push(Ut("div","hud-scope-bar",v));const g=Ut("div","hud-scope-breath",this.scope);Ut("div","hud-scope-breath-label",g).textContent="BREATH";const p=Ut("div","hud-scope-breath-track",g);this.breathFill=Ut("div","hud-scope-breath-fill",p),this.scopeReadout=Ut("div","hud-scope-readout",this.scope),window.addEventListener("keydown",this.onKey)}setNv(t){var e,n;this.nvMode=this.nvMode===t?"off":t,document.body.classList.toggle("nightvision",this.nvMode==="green"),this.updateNvButtons(),(n=(e=this.options).onNightVision)==null||n.call(e,this.nvMode)}updateNvButtons(){this.nvGreenBtn.classList.toggle("active",this.nvMode==="green"),this.nvThermalBtn.classList.toggle("active",this.nvMode==="thermal")}setFriendlyMarkers(t){for(;this.friendlyPool.length<t.length;){const e=Ut("div","hud-friendly",this.friendlyLayer);Ut("div","hud-friendly-tip",e).textContent="▼";const n=Ut("div","hud-friendly-range",e);this.friendlyPool.push({wrap:e,range:n})}for(let e=0;e<this.friendlyPool.length;e++){const n=this.friendlyPool[e],i=t[e];i&&i.onScreen?(n.wrap.style.display="",n.wrap.style.left=`${i.x}px`,n.wrap.style.top=`${i.y}px`,n.range.textContent=`${Math.round(i.dist)}m`):n.wrap.style.display="none"}}resetLayout(){for(const t of this.panels)t.resetLayout()}barRow(t,e,n){const i=Ut("div","hud-stat",t);Ut("div","hud-stat-label",i).textContent=e;const s=Ut("div","hud-bar",i),o=Ut("div",`hud-bar-fill ${n}`,s),a=Ut("div","hud-stat-val",i);return{fill:o,val:a}}update(t){this.header.textContent=`DEC · ${t.craftName.toUpperCase()}`,this.areaLine.textContent=t.areaName.toUpperCase(),this.throttleFill.style.width=`${qs(Math.abs(t.throttle))}%`,this.throttleText.textContent=t.throttle<0?`REV ${Math.round(-t.throttle*100)}%`:`${Math.round(t.throttle*100)}%`;const e=t.maxSpeed>0?t.speed/t.maxSpeed:0;this.speedFill.style.width=`${qs(e)}%`,this.speedText.textContent=`${Math.round(t.speed)}`,this.altText.textContent=`${Math.round(t.altitude)}`;const n=t.maxHull>0?t.hull/t.maxHull:0;this.hullFill.style.width=`${qs(n)}%`,this.hullFill.style.background=JT(n),this.hullText.textContent=`${Math.round(t.hull)}`;const i=(t.heading%360+360)%360,s=ZT[Math.round(i/45)%8];this.headingText.textContent=`HDG ${String(Math.round(i)).padStart(3,"0")}° ${s}`,t.hostiles!==void 0&&(this.threatText.textContent=`HOSTILES ${t.hostiles} · DOWNED ${t.downed??0}`),this.updateWeapons(t.weapons);const o=!!t.scoped;if(this.container.classList.toggle("scoped",o),o){const c=t.weapons.find(d=>d.selected),l=t.scopeZoom??1,h=c!=null&&c.ready?"READY":"CHARGING";this.scopeReadout.textContent=`${((c==null?void 0:c.name)??"SCOPE").toUpperCase()} · ${l}× · ${h}`,this.scopeRangeEl.textContent=`RNG ${Math.round(t.scopeRange??0)}`,this.scopeHdgEl.textContent=`HDG ${String(Math.round(i)).padStart(3,"0")}° ${s}`;const u=Math.round((t.audioLevel??0)*this.audioBars.length);for(let d=0;d<this.audioBars.length;d++)this.audioBars[d].classList.toggle("on",d<u);this.breathFill.style.width=`${qs(t.breath??0)}%`}const a=t.metrics;this.dev.textContent=a?`${a.fps.toFixed(0)} fps · ${a.tps.toFixed(0)}/${Zc} tps · cam:cockpit`:"cam:cockpit"}updateWeapons(t){const e=new Set;for(const n of t){let i=this.weaponRows.get(n.index);if(!i){const o=Ut("div","hud-wpn-row",this.weaponsWrap);Ut("div","hud-wpn-sel",o).textContent="▸";const a=Ut("div","hud-wpn-name",o),c=Ut("div","hud-wpn-state",o),l=Ut("div","hud-wpn-bar",o),h=Ut("div","hud-wpn-fill",l);o.addEventListener("click",()=>{var u,d;return(d=(u=this.options).onSelectWeapon)==null?void 0:d.call(u,n.index)}),i={row:o,name:a,state:c,fill:h},this.weaponRows.set(n.index,i)}i.name.textContent=n.name.toUpperCase(),i.state.textContent=n.ready?"READY":"CHRG",i.row.classList.toggle("selected",n.selected),i.row.classList.toggle("ready",n.ready);const s=n.maxEnergy>0?n.energy/n.maxEnergy:0;i.fill.style.width=`${qs(s)}%`,i.fill.classList.toggle("low",!n.ready),e.add(n.index)}for(const[n,i]of this.weaponRows)e.has(n)||(i.row.remove(),this.weaponRows.delete(n))}dispose(){window.removeEventListener("keydown",this.onKey),document.body.classList.remove("nightvision"),this.container.remove()}}function qs(r){return Math.max(0,Math.min(1,r))*100}function JT(r){return r>.5?"#4ee39a":r>.25?"#ffcc55":"#ff5a5a"}const tE="audio/381174__csnmedia__aircraft-cabin.mp3",eE="audio/153492__steelskull__minigun-shooting-awesome-sound.mp3",nE="audio/18724__lg__servo02.mp3",iE="audio/850634__chagusmk__minigun.mp3",sE="audio/187681__qubodup__helicopter-rotor-loop.mp3",rE="audio/435991__qubodup__night-vision.mp3",oE="audio/628638__el_boss__menu-select-tick.mp3",aE="audio/51469__smcameron__rocket_exhaust_1.mp3",cE="audio/186965__readeonly__explosion1.mp3",lE="audio/398348__evanboyerman__regular-sniper-rifle-shot-w-bolt-reload-outdoormixed.mp3",hE="audio/210018__supakid13__sniper-scope-zoom-in.mp3",uE="audio/vox_alpha_moving_out.mp3",dE=["audio/vox_checkpoint_1.mp3","audio/vox_checkpoint_2.mp3","audio/vox_checkpoint_3.mp3","audio/vox_checkpoint_4.mp3"],fE="audio/vox_objective_complete.mp3",pE="audio/432366__superphat__ar15-real-recording.mp3",mE="audio/182815__qubodup__silenced-sniper-rifle.mp3",gE=[[1,2],[3,3.98]],_E=[[6.003,7.115],[8.01,9.1]],vE=.4,xE=.82,yE=.5,Sa=.9,ME=1,SE=.26,bE=.8,Uu=.3,TE=11,EE=.006,Ou=.08,wE=.28,AE=.35,RE=3.2,CE=.28,PE=.6,ba=.4,Fu=.74,IE=.01,Bu=.06,LE=.3,DE=1,ku=.9,NE=9.5,UE=.02,zu=.08,OE=.28,FE=.5,BE=.55,kE=.5,Ta=.9,zE=.28,HE=.42,VE=.4,Qr=900,Hu=.12,Jr=150,Vu=.9,Ea=[.075,.14,.21,.279,.344],GE=.012,WE=.15,XE=.3,qE=["audio/643790__snowfightstudios__zombie-noises.mp3","audio/643792__snowfightstudios__zombie-noises-2.mp3","audio/643791__snowfightstudios__zombie-noises-3.mp3"],YE="audio/63631__vtownpunks__multi-groan-2.mp3",jE=.24,KE=5,$E=.5,Gu=2.2,Wu=6,Xu=1.2,qu=2.8,ZE=["audio/555426__tonsil5__zombie-pain-5.mp3","audio/432763__xpoki__female_growl1.mp3","audio/754438__ownathan__zombie-groan-0.mp3","audio/754441__ownathan__zombie-groan-3.mp3"],QE=.32,JE=6,tw=.22,ew=.09,nw=.55,iw=1.6;class sw{constructor(){_(this,"ctx");_(this,"cabin");_(this,"rotor");_(this,"rotorRateTarget",Sa);_(this,"reverb");_(this,"burstReverb");_(this,"chaingunBuffer",null);_(this,"fireVoice",null);_(this,"servoBuffer",null);_(this,"servoVoice",null);_(this,"emptyBuffer",null);_(this,"emptyVoice",null);_(this,"nvgBuffer",null);_(this,"tickBuffer",null);_(this,"rocketBuffer",null);_(this,"explosionBuffer",null);_(this,"sniperBuffer",null);_(this,"scopeZoomBuffer",null);_(this,"voxMovingOutBuffer",null);_(this,"voxCheckpointBuffers",[]);_(this,"voxObjectiveBuffer",null);_(this,"burstBuffer",null);_(this,"silencedBuffer",null);_(this,"zomBuffers",[]);_(this,"groanBuffer",null);_(this,"zomVoices",0);_(this,"zomSpawnTimer",0);_(this,"painBuffers",[]);_(this,"painVoices",0);_(this,"painNextAt",0);_(this,"started",!1);_(this,"firing",!1);_(this,"servoing",!1);_(this,"empty",!1);_(this,"unlock",()=>this.start());this.ctx=new AudioContext,this.cabin=new Audio(tE),this.cabin.loop=!0,this.cabin.crossOrigin="anonymous",Yu(this.cabin),this.cabin.playbackRate=xE;const t=this.ctx.createGain();t.gain.value=vE,this.ctx.createMediaElementSource(this.cabin).connect(t),t.connect(this.ctx.destination),this.rotor=new Audio(sE),this.rotor.loop=!0,this.rotor.crossOrigin="anonymous",Yu(this.rotor),this.rotor.playbackRate=Sa;const e=this.ctx.createGain();e.gain.value=yE,this.ctx.createMediaElementSource(this.rotor).connect(e),e.connect(this.ctx.destination),this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this.makeImpulse(AE,RE);const n=this.ctx.createGain();n.gain.value=wE,this.reverb.connect(n),n.connect(this.ctx.destination),this.burstReverb=this.ctx.createConvolver(),this.burstReverb.buffer=this.makeImpulse(.9,2.6);const i=this.ctx.createGain();i.gain.value=.9,this.burstReverb.connect(i),i.connect(this.ctx.destination),this.load(eE).then(s=>{this.chaingunBuffer=s}),this.load(nE).then(s=>{this.servoBuffer=s}),this.load(iE).then(s=>{this.emptyBuffer=s}),this.load(rE).then(s=>{this.nvgBuffer=s}),this.load(oE).then(s=>{this.tickBuffer=s}),this.load(aE).then(s=>{this.rocketBuffer=s}),this.load(cE).then(s=>{this.explosionBuffer=s}),this.load(lE).then(s=>{this.sniperBuffer=s}),this.load(hE).then(s=>{this.scopeZoomBuffer=s}),this.load(uE).then(s=>{this.voxMovingOutBuffer=s}),dE.forEach((s,o)=>{this.load(s).then(a=>{this.voxCheckpointBuffers[o]=a})}),this.load(fE).then(s=>{this.voxObjectiveBuffer=s}),this.load(pE).then(s=>{this.burstBuffer=s}),this.load(mE).then(s=>{this.silencedBuffer=s}),qE.forEach((s,o)=>{this.load(s).then(a=>{this.zomBuffers[o]=a})}),this.load(YE).then(s=>{this.groanBuffer=s}),ZE.forEach((s,o)=>{this.load(s).then(a=>{this.painBuffers[o]=a})}),window.addEventListener("keydown",this.unlock,{once:!0}),window.addEventListener("mousedown",this.unlock,{once:!0})}start(){this.started||(this.started=!0,this.ctx.resume(),this.cabin.play().catch(()=>{}),this.rotor.play().catch(()=>{}),this.firing&&this.startFireLoop(),this.servoing&&this.startServoLoop(),this.empty&&this.startEmptyLoop())}setManeuvering(t){this.rotorRateTarget=t?ME:Sa}update(t){const e=1-Math.exp(-4*t);this.rotor.playbackRate+=(this.rotorRateTarget-this.rotor.playbackRate)*e}async load(t){try{const e=await(await fetch(t)).arrayBuffer();return await this.ctx.decodeAudioData(e)}catch{return null}}makeImpulse(t,e){const n=this.ctx.sampleRate,i=Math.max(1,Math.floor(n*t)),s=this.ctx.createBuffer(2,i,n);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)}return s}setFiring(t){this.firing=t,t&&!this.fireVoice?this.startFireLoop():!t&&this.fireVoice&&this.stopFireLoop()}startFireLoop(){if(!this.chaingunBuffer||this.ctx.state!=="running"||this.fireVoice)return;const t=this.ctx.createBufferSource();t.buffer=this.chaingunBuffer,t.loop=!0,t.loopStart=Uu,t.loopEnd=TE,t.playbackRate.value=bE*(.92+Math.random()*.16);const e=this.ctx.createGain(),n=this.ctx.currentTime;e.gain.setValueAtTime(0,n),e.gain.linearRampToValueAtTime(SE,n+EE),t.connect(e),e.connect(this.ctx.destination),e.connect(this.reverb),t.start(0,Uu),this.fireVoice={src:t,gain:e}}stopFireLoop(){const t=this.fireVoice;if(!t)return;this.fireVoice=null;const e=this.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,e),t.gain.gain.linearRampToValueAtTime(0,e+Ou);try{t.src.stop(e+Ou+.02)}catch{}}setServo(t){this.servoing=t,t&&!this.servoVoice?this.startServoLoop():!t&&this.servoVoice&&this.stopServoLoop()}startServoLoop(){if(!this.servoBuffer||this.ctx.state!=="running"||this.servoVoice)return;const t=this.ctx.createBufferSource();t.buffer=this.servoBuffer,t.loop=!0,t.loopStart=ba,t.loopEnd=Fu,t.playbackRate.value=PE;const e=this.ctx.createGain(),n=this.ctx.currentTime;e.gain.setValueAtTime(0,n),e.gain.linearRampToValueAtTime(CE,n+IE),t.connect(e).connect(this.ctx.destination);const i=ba+Math.random()*(Fu-ba);t.start(0,i),this.servoVoice={src:t,gain:e}}stopServoLoop(){const t=this.servoVoice;if(!t)return;this.servoVoice=null;const e=this.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,e),t.gain.gain.linearRampToValueAtTime(0,e+Bu);try{t.src.stop(e+Bu+.02)}catch{}}setEmpty(t){this.empty=t,t&&!this.emptyVoice?this.startEmptyLoop():!t&&this.emptyVoice&&this.stopEmptyLoop()}startEmptyLoop(){if(!this.emptyBuffer||this.ctx.state!=="running"||this.emptyVoice)return;const t=this.ctx.createBufferSource();t.buffer=this.emptyBuffer,t.loop=!0,t.loopStart=ku,t.loopEnd=NE,t.playbackRate.value=DE;const e=this.ctx.createGain(),n=this.ctx.currentTime;e.gain.setValueAtTime(0,n),e.gain.linearRampToValueAtTime(LE,n+UE),t.connect(e).connect(this.ctx.destination),t.start(0,ku),this.emptyVoice={src:t,gain:e}}stopEmptyLoop(){const t=this.emptyVoice;if(!t)return;this.emptyVoice=null;const e=this.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,e),t.gain.gain.linearRampToValueAtTime(0,e+zu);try{t.src.stop(e+zu+.02)}catch{}}playNvgToggle(){this.playOneShot(this.nvgBuffer,OE)}playSelect(){this.playOneShot(this.tickBuffer,FE)}playRocket(){this.playOneShot(this.rocketBuffer,WE,Ys())}playExplosion(t=1){this.playOneShot(this.explosionBuffer,XE*t,Ys())}playSniper(){this.playOneShot(this.sniperBuffer,BE,Ys())}playScopeZoom(){this.playOneShot(this.scopeZoomBuffer,kE)}playAlphaMovingOut(){this.playOneShot(this.voxMovingOutBuffer,Ta)}playCheckpoint(t){this.playOneShot(this.voxCheckpointBuffers[t-1]??null,Ta)}playObjectiveComplete(){this.playOneShot(this.voxObjectiveBuffer,Ta)}playBurst(t,e=0){const n=this.burstBuffer;if(!n)return;this.ctx.resume();const i=Math.max(1,Math.min(Ea.length,Math.round(t))),s=Ea.length-i,o=Math.max(0,Ea[s]-GE),a=Math.max(Hu,1-e/Qr),c=Math.max(0,Math.min(1,(e-Jr)/(Qr-Jr)))*Vu,l=this.ctx.createBufferSource();l.buffer=n,l.playbackRate.value=.97+Math.random()*.06;const h=this.ctx.createGain(),u=this.ctx.currentTime;if(h.gain.setValueAtTime(0,u),h.gain.linearRampToValueAtTime(zE*a,u+.008),l.connect(h),h.connect(this.ctx.destination),c>0){const d=this.ctx.createGain();d.gain.value=c,h.connect(d),d.connect(this.burstReverb)}l.start(u,o,n.duration-o)}playSilencedBurst(t,e=0){const n=this.silencedBuffer;if(!n)return;this.ctx.resume();const i=Math.max(Hu,1-e/Qr),s=Math.max(VE,Math.max(0,Math.min(1,(e-Jr)/(Qr-Jr)))*Vu),o=t>=2?_E:gE,[a,c]=o[Math.random()*o.length|0],l=this.ctx.createBufferSource();l.buffer=n,l.playbackRate.value=.97+Math.random()*.06;const h=this.ctx.createGain(),u=this.ctx.currentTime;if(h.gain.setValueAtTime(0,u),h.gain.linearRampToValueAtTime(HE*i,u+.008),l.connect(h),h.connect(this.ctx.destination),s>0){const d=this.ctx.createGain();d.gain.value=s,h.connect(d),d.connect(this.burstReverb)}l.start(u,a,c-a)}playOneShot(t,e,n=1){if(!t)return;this.ctx.resume();const i=this.ctx.createBufferSource();i.buffer=t,i.playbackRate.value=n;const s=this.ctx.createGain();s.gain.value=e,i.connect(s).connect(this.ctx.destination),i.start()}updateZombies(t,e,n){if(this.ctx.state!=="running")return;if(e<=0||n<=.02){this.zomSpawnTimer=0;return}if(this.zomSpawnTimer-=t,this.zomSpawnTimer>0)return;const i=Math.max(n,Math.min(1,e/12)),s=Gu+($E-Gu)*i;this.zomSpawnTimer=s*(.6+Math.random()*.8);const o=e<=2?2:e<Wu?3:KE;if(this.zomVoices>=o)return;const a=e>=Wu&&Math.random()<.5,c=a?this.groanBuffer:this.zomBuffers[Math.random()*this.zomBuffers.length|0];if(!c)return;const l=Math.random()*Math.max(0,c.duration-qu),h=jE*n*(a?1:.85)*(.7+Math.random()*.4);this.playZombieVoice(c,l,h)}playZombieVoice(t,e,n){const i=this.ctx.createBufferSource();i.buffer=t,i.playbackRate.value=Ys();const s=this.ctx.createGain(),o=this.ctx.currentTime,a=Xu+Math.random()*(qu-Xu);s.gain.setValueAtTime(0,o),s.gain.linearRampToValueAtTime(n,o+.06),s.gain.setValueAtTime(n,o+a-.2),s.gain.linearRampToValueAtTime(0,o+a),i.connect(s).connect(this.ctx.destination),i.start(0,e),i.stop(o+a+.02),this.zomVoices++,i.onended=()=>{this.zomVoices=Math.max(0,this.zomVoices-1)}}zombieVocal(t,e){if(this.ctx.state!=="running"||t<=.02||this.painVoices>=JE)return;const n=this.ctx.currentTime;if(n<this.painNextAt||!e&&Math.random()>nw)return;this.painNextAt=n+(e?ew:tw);const i=this.painBuffers[Math.random()*this.painBuffers.length|0];if(!i)return;const s=QE*t*(e?1.15:.9)*(.8+Math.random()*.4),o=this.ctx.createBufferSource();o.buffer=i,o.playbackRate.value=Ys();const a=this.ctx.createGain(),c=Math.random()*i.duration*.35,l=Math.min(iw,i.duration-c);a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(s,n+.02),a.gain.setValueAtTime(s,n+l-.12),a.gain.linearRampToValueAtTime(0,n+l),o.connect(a).connect(this.ctx.destination),o.start(0,c),o.stop(n+l+.02),this.painVoices++,o.onended=()=>{this.painVoices=Math.max(0,this.painVoices-1)}}dispose(){window.removeEventListener("keydown",this.unlock),window.removeEventListener("mousedown",this.unlock),this.stopFireLoop(),this.stopServoLoop(),this.stopEmptyLoop(),this.cabin.pause(),this.rotor.pause(),this.ctx.close()}}function Ys(){return .8+Math.random()*.45}function Yu(r){const t=r;t.preservesPitch=!1,t.mozPreservesPitch=!1,t.webkitPreservesPitch=!1}const rw=6,ju=1.5,Ku=.01,ow=.07,$u=3,aw=2.5,cw=.03,lw=220,hw=60,Zu=400,uw=1400,dw=150,fw=[[-210,-345],[225,-495],[-135,-705],[255,-900],[0,-1080]],pw={x0:-430,x1:430,z0:-1140,z1:-90},mw=420,gw=[[0,-300],[70,-510],[-70,-735],[60,-960],[0,-1170]],_w={x0:-380,x1:380,z0:-1230,z1:-180},vw="Verge III — Landing Zone",_o=450,xw=_o*_o,yw=1600,Qu=[24,12,6],wa=4,Mw=.5,Sw=14,bc=72,Ju=[bc,44,28,17];function bw(r){return bo(r,"sortie")}function Tw(r){return bo(r,"demo")}function Ew(r){return bo(r,"eval")}function ww(r){return bo(r,"silenced")}function bo(r,t){const e=t==="demo",n=t==="eval",i=t==="silenced",s=n||i,o=i?{count:3,zombies:mw,boxes:gw,area:_w,formation:"column"}:{count:5,zombies:dw,boxes:fw,area:pw,formation:"v"},a=new Kd,c=new Zd,l=new UM(c),h=a.add(new Qd(_y)),u=ve(0,0)+hw;h.position.set(0,u,0),h.prevPosition.copy(h.position),l.bind(h);const d=new sw,f=10;let m=0;const v=()=>{for(const N of Array.from(a.all()))N instanceof qn&&a.remove(N.id)},g=()=>{v();for(let N=0;N<f;N++){const at=-45+N*10,it=-290-N%3*25;a.add(new qn("walker",N%2?"m":"f",at,it,500))}m=0},p=()=>{const N=Math.random();return N<.55?"walker":N<.85?"shambler":"crawler"},y=()=>{v();for(let N=0;N<o.zombies;N++){const at=o.area.x0+Math.random()*(o.area.x1-o.area.x0),it=o.area.z0+Math.random()*(o.area.z1-o.area.z0);a.add(new qn(p(),Math.random()<.5?"m":"f",at,it,1100))}m=0},S=s?o.boxes.map(([N,at])=>new T(N,ve(N,at),at)):void 0;OM(S?S.map(N=>({x:N.x,z:N.z,r:14})):[]),e?g():s?y():KM(a,Zu,uw);const x=e||s?document.createElement("div"):null;x&&(x.style.cssText="position:absolute;bottom:104px;left:50%;transform:translateX(-50%);z-index:5;font:600 15px/1.4 monospace;letter-spacing:2px;color:#8fe6ff;text-shadow:0 0 8px #04121c;pointer-events:none;text-transform:uppercase;",r.appendChild(x));const P=N=>N.replace(/([A-Z])/g," $1");let C;e?C={count:1,startAnim:"idle",demo:!0,onAnim:N=>{x&&(x.textContent=`ALPHA · ${P(N)}`)},onFire:(N,at)=>d.playBurst(N,at.distanceTo(h.position)),world:a,onLoop:g}:s&&(C={count:o.count,startAnim:"kneelIdle",patrol:!0,waypoints:S,formation:o.formation,silenced:i,outfit:i?"black":"light",onStatus:N=>{x&&(x.textContent=`ALPHA · ${N}`)},onMoveOut:()=>d.playAlphaMovingOut(),onCheckpoint:N=>d.playCheckpoint(N),onObjectiveComplete:()=>d.playObjectiveComplete(),onFire:(N,at)=>{const it=at.distanceTo(h.position);i?d.playSilencedBurst(N,it):d.playBurst(N,it)},world:a,onLoop:y});const A=new Sc(r,C);A.setPlayer(h);const I=new QT(r,{onNightVision:N=>{d.playNvgToggle(),A.setThermal(N==="thermal"),A.setCommandoNightVision(N!=="off")},onSelectWeapon:N=>{h.selectWeapon(N),d.playSelect()}}),M=new T().copy(h.position),b=(N,at,it)=>{const lt=N-M.x,Ot=at-M.y,rt=it-M.z;return Math.max(0,1-Math.sqrt(lt*lt+Ot*Ot+rt*rt)/_o)},L=a.events.on("entity-destroyed",N=>{N.kind==="zombie"&&(m++,d.zombieVocal(b(N.x,N.y,N.z),!0))}),z=a.events.on("target-hit",N=>{N.hull<=0||d.zombieVocal(b(N.x,N.y,N.z),!1)}),H=a.events.on("ground-hit",N=>A.groundHit(N.x,N.y,N.z)),q=a.events.on("weapon-fired",N=>{N.kind==="missile"?d.playRocket():N.weapon==="Vigil Sniper"&&(d.playSniper(),A.scopeKick())}),Q=a.events.on("missile-detonated",N=>{A.detonation(N.x,N.y,N.z,N.radius);const at=N.x-h.position.x,it=N.y-h.position.y,lt=N.z-h.position.z,Ot=Math.sqrt(at*at+it*it+lt*lt);d.playExplosion(Math.max(.08,1-Ot/yw))});let j=!1,K=!1,G=window.innerWidth/2,st=window.innerHeight/2,ct=0,ut=0,It=!1,Qt=0;const U=N=>{N.button===0&&(j=!0)},Z=N=>{N.button===0&&(j=!1)},D=N=>{G=N.clientX,st=N.clientY},W=()=>{j=!1},et=N=>{var it;N.preventDefault();const at=N.deltaY<0?1:-1;if((it=h.selectedWeaponSpec)!=null&&it.scoped){const lt=Math.max(0,Math.min(Qu.length-1,ct+at));lt!==ct&&(ct=lt,d.playScopeZoom())}else{const lt=Math.max(0,Math.min(Ju.length-1,ut+at));lt!==ut&&(ut=lt,d.playScopeZoom())}},gt=N=>{var at;(N.code==="ControlLeft"||N.code==="ControlRight")&&!N.repeat&&(N.preventDefault(),K=!K,K||(j=!1)),!N.repeat&&(N.code==="BracketLeft"||N.code==="BracketRight")&&h.cycleWeapon(N.code==="BracketRight"?1:-1),N.code==="Escape"&&!N.repeat&&((at=h.selectedWeaponSpec)!=null&&at.scoped)&&h.selectWeapon(Qt),N.code==="Space"&&N.preventDefault()};A.renderer.domElement.addEventListener("mousedown",U),A.renderer.domElement.addEventListener("wheel",et,{passive:!1}),window.addEventListener("mouseup",Z),window.addEventListener("mousemove",D),window.addEventListener("blur",W),window.addEventListener("keydown",gt);const pt=document.createElement("div");pt.style.cssText="position:absolute;top:14px;left:50%;transform:translateX(-50%);z-index:5;font:600 13px/1.4 monospace;letter-spacing:3px;color:#8fe6ff;text-shadow:0 0 8px #04121c;pointer-events:none;",r.appendChild(pt);let Ct=null,St=0,Tt=G,F=st,he=!1,kt=0;const Ft=new T,Mt=new T,ee=new T,Rt=new Zt;let R=0,E=0,V=wa,J=0;const nt=new jd({fixedUpdate:N=>{l.update(N);const at=h.turnInput,it=Math.abs(at.pitch)+Math.abs(at.yaw)+Math.abs(at.roll)>.15||Math.abs(h.strafe)>.02||Math.abs(h.lift)>.12||c.isDown("KeyR");d.setManeuvering(it),d.update(N);const lt=h.selectedWeaponSpec,Ot=(lt==null?void 0:lt.scoped)===!0,rt=Ot&&c.isDown("Space")&&V>0;V=rt?Math.max(0,V-N):Math.min(wa,V+N*Mw),J+=((rt?1:0)-J)*(1-Math.exp(-10*N)),Ot?M.copy(A.groundAimFromScreen(window.innerWidth/2,window.innerHeight/2)):M.copy(h.position),E=Ot?M.distanceTo(h.position):0;const _t=j&&K&&!Ot,Dt=(lt==null?void 0:lt.kind)==="missile";let Nt=!1;if(Ot)d.setFiring(!1),d.setEmpty(!1),he=!1;else if(Dt)d.setFiring(!1),d.setEmpty(!1),he=!1,_t&&h.requestAimedShot(A.groundAimFromScreen(G,st));else{h.isSelectedDepleted()?he=!0:!_t&&h.selectedChargeFraction()>=cw&&(he=!1);const ot=_t&&!he;if(Nt=ot,d.setFiring(ot),d.setEmpty(_t&&!ot),ot){h.getEffectiveQuaternion(Rt),A.computeMuzzle(h.position,Rt,ee,Mt),Mt.copy(A.aimPointFromScreen(G,st)).sub(ee).normalize();const $=Ku+(ow-Ku)*(kt/$u);Mt.x+=(Math.random()-.5)*$,Mt.y+=(Math.random()-.5)*$,Mt.z+=(Math.random()-.5)*$,Mt.normalize(),h.requestDirectedShot(ee,Mt)}}kt=Nt?Math.min($u,kt+N):Math.max(0,kt-N*aw),a.tick(N);const yt=ve(h.position.x,h.position.z)+rw;h.position.y<yt&&(h.position.y=yt,h.velocity.y<0&&(h.velocity.y=0));for(const ot of Array.from(a.all())){if(!(ot instanceof Ci))continue;const $=ve(ot.position.x,ot.position.z);ot.position.y<=$&&(a.events.emit("ground-hit",{x:ot.position.x,y:$,z:ot.position.z}),a.remove(ot.id))}let Vt=0,Bt=1/0;for(const ot of a.all()){if(!(ot instanceof qn)||ot.state==="dead")continue;const $=ot.position.x-M.x,tt=ot.position.y-M.y,mt=ot.position.z-M.z,ft=$*$+tt*tt+mt*mt;ft<=xw&&(Vt++,ft<Bt&&(Bt=ft))}const re=Vt>0?Math.max(0,1-Math.sqrt(Bt)/_o):0;d.updateZombies(N,Vt,re);const O=Math.min(1,Vt/Sw);R+=(O-R)*(1-Math.exp(-6*N))},render:N=>{const at=h.selectedWeaponSpec,it=(at==null?void 0:at.scoped)===!0;it||(Qt=h.selectedWeapon);const lt=Qu[ct],Ot=K&&!it,rt=!it&&(at==null?void 0:at.kind)!=="missile",_t=j&&Ot&&rt,Dt=_t&&!he;document.body.classList.toggle("targeting",Ot);const Nt=Ju[ut];A.render(a,N,Ot,Dt,_t,G,st,it,lt,J,Nt),I.setFriendlyMarkers(A.friendlyMarkers()),pt.textContent=!it&&ut>0?`ZOOM ×${(bc/Nt).toFixed(1)}`:"",A.renderer.domElement.style.cursor=it?"none":"",it?(j&&!It&&h.requestDirectedShot(A.scopeOrigin,A.scopeDirection),It=j):It=!1;const yt=performance.now(),Vt=G-Tt,Bt=st-F;Tt=G,F=st,Ot&&Vt*Vt+Bt*Bt>=ju*ju&&(St=yt+lw),d.setServo(yt<St),Ft.set(0,0,-1).applyQuaternion(h.quaternion);const re=Math.atan2(Ft.x,-Ft.z)*180/Math.PI,O=ve(h.position.x,h.position.z);I.update({craftName:h.profile.name,areaName:vw,throttle:h.throttle,speed:h.speed,maxSpeed:h.profile.handling.maxSpeed,altitude:h.position.y-O,hull:h.hull,maxHull:h.maxHull,heading:re,weapons:h.getWeaponStatuses(),hostiles:(e?f:s?o.zombies:Zu)-m,downed:m,scoped:it,scopeZoom:Math.round(bc/lt),scopeRange:E,audioLevel:R,breath:V/wa,metrics:Ct})},onMetrics:N=>{Ct=N}});return nt.start(),{dispose(){nt.stop(),FM(),document.body.classList.remove("targeting"),window.removeEventListener("mouseup",Z),window.removeEventListener("mousemove",D),window.removeEventListener("blur",W),window.removeEventListener("keydown",gt),L(),z(),H(),q(),Q(),x==null||x.remove(),pt.remove(),c.dispose(),A.dispose(),I.dispose(),d.dispose()}}}const td={type:"change"},il={type:"start"},lf={type:"end"},to=new hr,ed=new ai,Aw=Math.cos(70*yd.DEG2RAD),be=new T,$e=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Aa=1e-6;class Rw extends yx{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Zt,this._lastTargetPosition=new T,this._quat=new Zt().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ih,this._sphericalDelta=new Ih,this._scale=1,this._panOffset=new T,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new T,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pw.bind(this),this._onPointerDown=Cw.bind(this),this._onPointerUp=Iw.bind(this),this._onContextMenu=Bw.bind(this),this._onMouseWheel=Nw.bind(this),this._onKeyDown=Uw.bind(this),this._onTouchStart=Ow.bind(this),this._onTouchMove=Fw.bind(this),this._onMouseDown=Lw.bind(this),this._onMouseMove=Dw.bind(this),this._interceptControlDown=kw.bind(this),this._interceptControlUp=zw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(td),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=$e:n>Math.PI&&(n-=$e),i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(to.origin.copy(this.object.position),to.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(to.direction))<Aw?this.object.lookAt(this.target):(ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),to.intersectPlane(ed,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Aa||this._lastTargetPosition.distanceToSquared(this.target)>Aa?(this.dispatchEvent(td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;be.copy(i).sub(this.target);let s=be.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Cw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Pw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Iw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Lw(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=de.DOLLY;break;case as.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=de.ROTATE}break;case as.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(il)}function Dw(r){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Nw(r){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(r.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(lf))}function Uw(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function Ow(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=de.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=de.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(il)}function Fw(r){switch(this._trackPointer(r),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=de.NONE}}function Bw(r){this.enabled!==!1&&r.preventDefault()}function kw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ra="mixamorig:RightHand",Hw=2,Vw=.95,Gw={Main:657931,MainDark:263173,MainLight:1316121},Ww=526602,Xw=131587;function nd(r){r.traverse(t=>{if(t instanceof Lt){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n instanceof ye&&(n.color.setHex(Gw[n.name]??Ww),n.emissive.setHex(Xw))}})}function qw(r){const t=new Oc({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),r.appendChild(t.domElement);const e=new Bc;e.background=new bt(1711394);const n=new Ne(50,window.innerWidth/window.innerHeight,.1,100);n.position.set(1.8,1.5,3.2),e.add(new Yd(12767972,3817285,.9));const i=new ar(16777215,1.5);i.position.set(3,5,4),e.add(i);const s=new ar(8956671,.5);s.position.set(-3,2,-4),e.add(s),e.add(new xx(10,10,4477030,2765376));const o=new Rw(n,t.domElement);o.target.set(0,1.1,0),o.enableDamping=!0,o.update();const a=U=>(U%=Math.PI*2,U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),U),c=Mc;for(const U in c){const Z=c[U].rot;Z.set(a(Z.x),a(Z.y),a(Z.z))}const l={name:"rifle",obj:null,rot:c.run.rot,pos:c.run.pos,scale:1},h={name:"silencer",obj:null,rot:new Kt(0,.01,0),pos:new T(3.2,.65,0),scale:1};h.rot.set(a(h.rot.x),a(h.rot.y),a(h.rot.z));let u=h;const d=U=>{U.obj&&(U.obj.rotation.copy(U.rot),U.obj.position.copy(U.pos),U.obj.scale.setScalar(U.scale))};let f=()=>{};const m=(U,Z,D)=>{const W=document.createElement(U);return W.style.cssText=Z,D&&D.appendChild(W),W},v=m("div","position:absolute;top:12px;right:12px;width:266px;padding:12px 14px;font:12px/1.5 monospace;color:#cfe;background:rgba(10,16,24,.9);border:1px solid #2a3a4a;border-radius:8px;z-index:6;user-select:none;");m("div","font-weight:bold;letter-spacing:1px;margin-bottom:8px;color:#8fdcff;",v).textContent="GUN MODELER";const g=new Map,p=new Map;let y="run";const S=U=>{y=U;for(const[D,W]of p)W.style.background=D===U?"#1d4a63":"#122430";const Z=c[U];Z&&(l.rot=Z.rot,l.pos=Z.pos,d(l),f());for(const[D,W]of g)D===U?W.reset().play():W.stop()},x=m("div","display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:8px;",v);m("span","width:34px;color:#7fb0c8;",x).textContent="anim";for(const U of["idle",...ds.map(Z=>Z.name)]){const Z=m("button","flex:1;padding:4px;color:#cfe;border:1px solid #26384a;border-radius:4px;cursor:pointer;font:12px monospace;",x);Z.textContent=U,Z.addEventListener("click",()=>S(U)),p.set(U,Z)}S(y);const P=m("div","display:flex;gap:6px;margin-bottom:10px;",v),C=m("div","",v),A=m("textarea","width:100%;box-sizing:border-box;height:78px;margin-top:10px;background:#0a1018;color:#9fe;border:1px solid #26384a;border-radius:4px;font:11px/1.4 monospace;resize:none;user-select:text;",v);A.readOnly=!0;const I=()=>{const U=u;let D=`// ${U===l?`rifle · ${y}`:U.name}
ROT  new Euler(${U.rot.x.toFixed(3)}, ${U.rot.y.toFixed(3)}, ${U.rot.z.toFixed(3)})
POS  new Vector3(${U.pos.x.toFixed(3)}, ${U.pos.y.toFixed(3)}, ${U.pos.z.toFixed(3)})`;U===h&&(D+=`
SCALE ${U.scale.toFixed(3)}`),A.value=D},M=(U,Z,D,W,et,gt)=>{const pt=m("div","display:flex;align-items:center;gap:6px;margin:3px 0;",C);m("span","width:38px;color:#7fb0c8;",pt).textContent=U;const Ct=m("input","flex:1;min-width:0;",pt);Ct.type="range",Ct.min=String(Z),Ct.max=String(D),Ct.step=String(W),Ct.value=String(et());const St=m("span","width:48px;text-align:right;",pt);St.textContent=et().toFixed(2),Ct.addEventListener("input",()=>{const Tt=parseFloat(Ct.value);gt(Tt),St.textContent=Tt.toFixed(2),d(u),I()})},b=Math.PI,L=()=>{C.innerHTML="";const U=u,Z=U===l?12:6;M("posX",-Z,Z,.02,()=>U.pos.x,D=>{U.pos.x=D}),M("posY",-Z,Z,.02,()=>U.pos.y,D=>{U.pos.y=D}),M("posZ",-Z,Z,.02,()=>U.pos.z,D=>{U.pos.z=D}),M("rotX",-b,b,.01,()=>U.rot.x,D=>{U.rot.x=D}),M("rotY",-b,b,.01,()=>U.rot.y,D=>{U.rot.y=D}),M("rotZ",-b,b,.01,()=>U.rot.z,D=>{U.rot.z=D}),U===h&&M("scale",.05,3,.01,()=>U.scale,D=>{U.scale=D}),I()};f=()=>{u===l&&L()};const z=new Map,H=U=>{u=U;for(const[Z,D]of z)D.style.background=Z===U?"#1d4a63":"#122430";L()};for(const U of[l,h]){const Z=m("button","flex:1;padding:5px;color:#cfe;border:1px solid #26384a;border-radius:4px;cursor:pointer;font:12px monospace;",P);Z.textContent=U.name,Z.addEventListener("click",()=>H(U)),z.set(U,Z)}r.appendChild(v),H(h);const q=m("div","position:absolute;left:16px;bottom:16px;font:11px/1.5 monospace;color:#89a;background:rgba(10,16,24,.6);padding:6px 10px;border-radius:5px;pointer-events:none;",r);q.textContent="drag: orbit   ·   wheel: zoom";let Q=null;const j=[];let K=!1;const G=U=>new Promise((Z,D)=>new nl().load(U,Z,void 0,D)),st="./models/";Promise.all([G(`${st}char-alpha.glb`),G(`${st}weapon-rifle.glb`),G(`${st}weapon-silencer.glb`),...ds.map(U=>G(`${st}${U.file}`))]).then(([U,Z,D,...W])=>{if(K)return;const et=U.scene;j.push(et,Z.scene,D.scene);let gt=0;et.traverse(kt=>{const Ft=kt;if(Ft.isSkinnedMesh){Ft.geometry.computeBoundingBox();const Mt=Ft.geometry.boundingBox;gt=Math.max(gt,Mt.max.y-Mt.min.y)}}),et.scale.setScalar(Hw/(gt||1)),e.add(et),et.updateWorldMatrix(!0,!0),Q=new $c(et),U.animations.length>0&&g.set("idle",Q.clipAction(U.animations[0])),ds.forEach((kt,Ft)=>{const Mt=W[Ft].animations[0];Mt&&(kt.strip&&of(Mt),g.set(kt.name,Q.clipAction(rf(Mt,et))))}),S(y);const pt=Z.scene;nd(pt);const Ct=new bn().setFromObject(pt),St=Math.max(Ct.max.x-Ct.min.x,Ct.max.y-Ct.min.y,Ct.max.z-Ct.min.z)||1,Tt=et.getObjectByName(Yt.sanitizeNodeName(Ra))??et.getObjectByName(Ra);if(!Tt){console.warn(`CharacterPreview: hand bone "${Ra}" not found`);return}const F=Tt.getWorldScale(new T).x||1;Tt.add(pt),l.obj=pt,l.scale=Vw/(St*F),d(l);const he=D.scene;nd(he),pt.add(he),h.obj=he,d(h)});let ct=0,ut=performance.now();const It=()=>{ct=requestAnimationFrame(It);const U=performance.now(),Z=Math.min((U-ut)/1e3,.1);ut=U,Q==null||Q.update(Z),o.update(),t.render(e,n)};It();const Qt=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Qt),{dispose(){K=!0,cancelAnimationFrame(ct),window.removeEventListener("resize",Qt),Q==null||Q.stopAllAction(),o.dispose(),v.remove(),q.remove();for(const U of j)U.traverse(Z=>{if(Z instanceof Lt){Z.geometry.dispose();const D=Array.isArray(Z.material)?Z.material:[Z.material];for(const W of D)W.dispose()}});t.dispose()}}}const hf=document.getElementById("app");if(!hf)throw new Error("Missing #app container");const Yw=new vf(hf,[{id:"command",label:"Meridian · Command",create:yM},{id:"paladin",label:"Paladin · Sortie (POC)",create:bw},{id:"commando-demo",label:"Commando · Combat Demo",create:Tw},{id:"commando-eval",label:"Commando · Eval (5-man patrol)",create:Ew},{id:"commando-silent",label:"Commando · Silent Sweep (3-man)",create:ww},{id:"alpha-preview",label:"Alpha · Preview (dev)",create:qw}]);Yw.enter("command");
