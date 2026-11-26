const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GLTFLoader-qLVj3QHN.js","./index--1tzjZUs.js","./index-BhQL_qgP.css","./GLTFExporter-DTxVTKSX.js"])))=>i.map(i=>d[i]);
import{_ as za,Q as Fe,U as sn,W as Ot,X as ln,Y as mn,Z as bh,$ as $u,a0 as Ct,a1 as Eh,a2 as Th,a3 as z,a4 as U,a5 as yt,a6 as Pt,a7 as Hn,a8 as ka,a9 as wh,aa as Zu,ab as Ku,d as Et,j as qe,ac as Ju,u as Qu,o as ju,p as ed,ad as td,ae as nd,af as id,ag as sd,ah as rd}from"./index--1tzjZUs.js";const Lc=new WeakMap;function Ha(i){return{supported:!1,api:null,reason:i,maxTextureSize:null,renderer:null}}function ad(i){let e;try{e=i.createElement("canvas")}catch{return Ha("Could not create a canvas element")}for(const t of["webgl2","webgl1"]){let n=null;try{n=e.getContext(t==="webgl2"?"webgl2":"webgl",{failIfMajorPerformanceCaveat:!1})}catch{n=null}if(!n)continue;let s=null;try{const a=n.getExtension("WEBGL_debug_renderer_info");a&&(s=String(n.getParameter(a.UNMASKED_RENDERER_WEBGL)))}catch{s=null}let r=null;try{r=n.getParameter(n.MAX_TEXTURE_SIZE)}catch{r=null}try{n.getExtension("WEBGL_lose_context")?.loseContext()}catch{}return{supported:!0,api:t,reason:null,maxTextureSize:r,renderer:s}}return Ha("WebGL is unavailable or disabled in this browser. Text, preview, and the structure list remain usable.")}function od(i){if(typeof document>"u"&&!i)return Ha("No DOM available in this environment");const e=i??document,t=Lc.get(e);if(t)return t;const n=ad(e);return Lc.set(e,n),n}const Bo="187",Wi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,Dc=1,ld=2,Ar=1,hd=2,_s=3,ci=0,en=1,hn=2,Xi=0,Ss=1,Nc=2,Uc=3,Oc=4,ud=5,Hi=100,dd=101,fd=102,pd=103,md=104,gd=200,_d=201,vd=202,xd=203,Ah=204,Rh=205,Md=206,yd=207,Sd=208,bd=209,Ed=210,Td=211,wd=212,Ad=213,Rd=214,Ga=0,Va=1,Wa=2,ws=3,Xa=4,qa=5,Ya=6,$a=7,zo=0,Cd=1,Id=2,Wn=0,Ch=1,Ih=2,Ph=3,ko=4,Lh=5,Dh=6,Nh=7,Fc="attached",Pd="detached",Uh=300,Ki=301,As=302,ea=303,ta=304,Za=1e3,Gn=1001,Ka=1002,Xt=1003,Ld=1004,Xs=1005,nn=1006,na=1007,ri=1008,un=1009,Oh=1010,Fh=1011,Rs=1012,Ho=1013,Cn=1014,pn=1015,In=1016,Go=1017,Vo=1018,Ji=1020,Bh=35902,zh=35899,kh=1021,Hh=1022,Mn=1023,li=1026,ai=1027,Wo=1028,Xo=1029,xi=1030,qo=1031,Yo=1033,Rr=33776,Cr=33777,Ir=33778,Pr=33779,Ja=35840,Qa=35841,ja=35842,eo=35843,to=36196,no=37492,io=37496,so=37488,ro=37489,Dr=37490,ao=37491,oo=37808,co=37809,lo=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,vo=37818,xo=37819,Mo=37820,yo=37821,So=36492,bo=36494,Eo=36495,To=36283,wo=36284,Nr=36285,Ao=36286,Ur=2300,Ro=2301,ia=2302,Bc=2303,zc=2400,kc=2401,Hc=2402,Dd=2500,ny=0,iy=1,sy=2,Nd=3200,Or=0,Ud=1,si="",on="srgb",Fr="srgb-linear",Br="linear",gt="srgb",sa=7680,Od=519,Fd=512,Bd=513,zd=514,Gh=515,kd=516,Hd=517,Vh=518,Wh=519,Xh=35044,Gc="300 es",yn=2e3,Cs=2001;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=Is("canvas");return i.style.display="block",i}const Vc={};function zr(...i){const e="THREE."+i.shift();console.log(e,...i)}function qh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=qh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=qh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){const e=i.join(" ");e in Vc||(Vc[e]=!0,Le(...i))}function Xd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qd={[Ga]:Ga,[Wa]:Ya,[Xa]:Xa,[ws]:qa,[Va]:Va,[Ya]:Wa,[$a]:$a,[qa]:ws};class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wc=1234567;const Yi=Math.PI/180,Qi=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function $o(i,e){return(i%e+e)%e}function Yd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $d(i,e,t){return i!==e?(t-i)/(e-i):0}function bs(i,e,t){return(1-t)*i+t*e}function Zd(i,e,t,n){return bs(i,e,1-Math.exp(-t*n))}function Kd(i,e=1){return e-Math.abs($o(i,e*2)-e)}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ef(i,e){return i+Math.random()*(e-i)}function tf(i){return i*(.5-Math.random())}function nf(i){i!==void 0&&(Wc=i);let e=Wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sf(i){return i*Yi}function rf(i){return i*Qi}function af(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function of(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zo(i,e){if(e.constructor===Float32Array)return i;const t=Xr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ko(i,e){if(e.constructor===Float32Array)return i;const t=Xr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const vs={DEG2RAD:Yi,RAD2DEG:Qi,generateUUID:bn,clamp:Ze,euclideanModulo:$o,mapLinear:Yd,inverseLerp:$d,lerp:bs,damp:Zd,pingpong:Kd,smoothstep:Jd,smootherstep:Qd,randInt:jd,randFloat:ef,randFloatSpread:tf,seededRandom:nf,degToRad:sf,radToDeg:rf,isPowerOfTwo:af,ceilPowerOfTwo:of,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:cf,normalize:Ko,denormalize:Zo};class se{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*v;p<0&&(f=-f,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),S=Math.sin(M);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S,l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+v*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+v*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new C,Xc=new Pn;class Ye{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],S=s[4],x=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*v+o*M+l*w,r[3]=a*p+o*S+l*T,r[6]=a*m+o*x+l*_,r[1]=c*v+h*M+u*w,r[4]=c*p+h*S+u*T,r[7]=c*m+h*x+u*_,r[2]=f*v+d*M+g*w,r[5]=f*p+d*S+g*T,r[8]=f*m+d*x+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ye,qc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const ct=lf();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class hf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Is("canvas")),bi.width=e.width,bi.height=e.height;const s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uf=0;class Jo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let df=0;const ca=new C;class Vt extends hi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Gn,s=Gn,r=nn,a=ri,o=Mn,l=un,c=Vt.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=bn(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Uh;Vt.DEFAULT_ANISOTROPY=1;class St{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(d+1)/2,w=(m+1)/2,T=(h+f)/4,_=(u+v)/4,E=(g+p)/4;return S>x&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=_/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ff extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Vt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends ff{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $h extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class tt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Qn.crossVectors(n,rn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Qn.crossVectors(n,rn)),Qn.normalize(),qs.crossVectors(rn,Qn),s[0]=Qn.x,s[4]=qs.x,s[8]=rn.x,s[1]=Qn.y,s[5]=qs.y,s[9]=rn.y,s[2]=Qn.z,s[6]=qs.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],S=n[7],x=n[11],w=n[15],T=s[0],_=s[4],E=s[8],L=s[12],R=s[1],N=s[5],B=s[9],X=s[13],P=s[2],W=s[6],F=s[10],k=s[14],ie=s[3],q=s[7],j=s[11],ne=s[15];return r[0]=a*T+o*R+l*P+c*ie,r[4]=a*_+o*N+l*W+c*q,r[8]=a*E+o*B+l*F+c*j,r[12]=a*L+o*X+l*k+c*ne,r[1]=h*T+u*R+f*P+d*ie,r[5]=h*_+u*N+f*W+d*q,r[9]=h*E+u*B+f*F+d*j,r[13]=h*L+u*X+f*k+d*ne,r[2]=g*T+v*R+p*P+m*ie,r[6]=g*_+v*N+p*W+m*q,r[10]=g*E+v*B+p*F+m*j,r[14]=g*L+v*X+p*k+m*ne,r[3]=M*T+S*R+x*P+w*ie,r[7]=M*_+S*N+x*W+w*q,r[11]=M*E+S*B+x*F+w*j,r[15]=M*L+S*X+x*k+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],M=l*d-c*f,S=o*d-c*u,x=o*f-l*u,w=a*d-c*h,T=a*f-l*h,_=a*u-o*h;return t*(v*M-p*S+m*x)-n*(g*M-p*w+m*T)+s*(g*S-v*w+m*_)-r*(g*x-v*T+p*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=t*o-n*a,S=t*l-s*a,x=t*c-r*a,w=n*l-s*o,T=n*c-r*o,_=s*c-r*l,E=h*v-u*g,L=h*p-f*g,R=h*m-d*g,N=u*p-f*v,B=u*m-d*v,X=f*m-d*p,P=M*X-S*B+x*N+w*R-T*L+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/P;return e[0]=(o*X-l*B+c*N)*W,e[1]=(s*B-n*X-r*N)*W,e[2]=(v*_-p*T+m*w)*W,e[3]=(f*T-u*_-d*w)*W,e[4]=(l*R-a*X-c*L)*W,e[5]=(t*X-s*R+r*L)*W,e[6]=(p*x-g*_-m*S)*W,e[7]=(h*_-f*x+d*S)*W,e[8]=(a*B-o*R+c*E)*W,e[9]=(n*R-t*B-r*E)*W,e[10]=(g*T-v*x+m*M)*W,e[11]=(u*x-h*T-d*M)*W,e[12]=(o*L-a*N-l*E)*W,e[13]=(t*N-n*L+s*E)*W,e[14]=(v*S-g*w-p*M)*W,e[15]=(h*w-u*S+f*M)*W,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,p=a*u,m=o*u,M=l*c,S=l*h,x=l*u,w=n.x,T=n.y,_=n.z;return s[0]=(1-(v+m))*w,s[1]=(d+x)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+S)*_,s[9]=(p-M)*_,s[10]=(1-(f+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length();const o=Ei.set(s[4],s[5],s[6]).length(),l=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const c=1/a,h=1/o,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=yn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Cs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===yn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Cs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new C,_n=new tt,mf=new C(0,0,0),gf=new C(1,1,1),Qn=new C,qs=new C,rn=new C,$c=new tt,Zc=new Pn;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const Kc=new C,Ti=new Pn,Nn=new tt,Ys=new C,cs=new C,vf=new C,xf=new Pn,Jc=new C(1,0,0),Qc=new C(0,1,0),jc=new C(0,0,1),el={type:"added"},Mf={type:"removed"},wi={type:"childadded",child:null},la={type:"childremoved",child:null};class At extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new C,t=new Yn,n=new Pn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ye}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(cs,Ys,this.up):Nn.lookAt(Ys,cs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),wi.child=e,this.dispatchEvent(wi),wi.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new C(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yf={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=$o(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ua(a,r,e+1/3),this.g=ua(a,r,e),this.b=ua(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ct.workingToColorSpace(Zt.copy(this),e),Math.round(Ze(Zt.r*255,0,255))*65536+Math.round(Ze(Zt.g*255,0,255))*256+Math.round(Ze(Zt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=on){ct.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL($s);const n=bs(jn.h,$s.h,t),s=bs(jn.s,$s.s,t),r=bs(jn.l,$s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new He;He.NAMES=Zh;class Kh extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new C,Un=new C,da=new C,On=new C,Ai=new C,Ri=new C,tl=new C,fa=new C,pa=new C,ma=new C,ga=new St,_a=new St,va=new St;class fn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vn.subVectors(s,t),Un.subVectors(n,t),da.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Un),l=vn.dot(da),c=Un.dot(Un),h=Un.dot(da),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),va.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(va,r.z),a}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),Un.subVectors(e,t),vn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),vn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),Ri.subVectors(r,n),fa.subVectors(e,n);const l=Ai.dot(fa),c=Ri.dot(fa);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,s);const h=Ai.dot(pa),u=Ri.dot(pa);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ai,a);ma.subVectors(e,r);const d=Ai.dot(ma),g=Ri.dot(ma);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ri,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return tl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(tl,o);const m=1/(p+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ks.subVectors(this.max,ls),Ci.subVectors(e.a,ls),Ii.subVectors(e.b,ls),Pi.subVectors(e.c,ls),ei.subVectors(Ii,Ci),ti.subVectors(Pi,Ii),mi.subVectors(Ci,Pi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-mi.z,mi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,mi.z,0,-mi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-mi.y,mi.x,0];return!xa(t,Ci,Ii,Pi,Ks)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ci,Ii,Pi,Ks))?!1:(Js.crossVectors(ei,ti),t=[Js.x,Js.y,Js.z],xa(t,Ci,Ii,Pi,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,Zs=new Sn,Ci=new C,Ii=new C,Pi=new C,ei=new C,ti=new C,mi=new C,ls=new C,Ks=new C,Js=new C,gi=new C;function xa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nt=new C,Qs=new se;let Sf=0;class qn extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xh,this.updateRanges=[],this.gpuType=pn,this.version=0,this._normalizationScale=e!==void 0?Xr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ko(e,this.array)}}class Jh extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qh extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bf=new Sn,hs=new C,Ma=new C;class $n{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Ma)),this.expandByPoint(hs.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ef=0;const dn=new tt,ya=new At,Li=new C,an=new Sn,us=new Sn,Ht=new C;class It extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Qh:Jh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(an.min,us.min),an.expandByPoint(Ht),Ht.addVectors(an.max,us.max),an.expandByPoint(Ht)):(an.expandByPoint(us.min),an.expandByPoint(us.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Ht.add(Li)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new C,l[L]=new C;const h=new C,u=new C,f=new C,d=new se,g=new se,v=new se,p=new C,m=new C;function M(L,R,N){c[L]=c[R]=c[N]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),v.fromBufferAttribute(r,N),u.sub(h),f.sub(h),g.sub(d),v.sub(d);const B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(B),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(B),o[L].add(p),o[R].add(p),o[N].add(p),l[L].add(m),l[R].add(m),l[N].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,R=S.length;L<R;++L){const N=S[L],B=N.start,X=N.count;for(let P=B,W=B+X;P<W;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new C,w=new C,T=new C,_=new C;function E(L){T.fromBufferAttribute(s,L),_.copy(T);const R=o[L];x.copy(R),x.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(_,R);const B=w.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,B)}for(let L=0,R=n.count;L<R;++L)c[L]&&E(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new qn(f,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ry{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xh,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=nl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=nl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function nl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=bn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Jt=new C;class jh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Xr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zo(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ko(e,this.data.array)}}const Sa=new C,Tf=new C,wf=new Ye;class kn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Sa.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Sa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wf.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Af=0;class ui extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ss,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bn=new C,ba=new C,js=new C,er=new C;class ns{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ba.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),er.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=er.dot(this.direction),l=-er.dot(js),c=er.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector(js,f),d}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,S=n.z-a.z,x=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let _,E,L,R,N,B,X,P,W,F,k,ie;if(x>=w&&x>=T?(L=l,B=u,W=g,ie=m,l>=0?(_=c,E=h,R=f,N=d,X=v,P=p,F=M,k=S):(_=h,E=c,R=d,N=f,X=p,P=v,F=S,k=M)):w>=T?(L=c,B=f,W=v,ie=M,c>=0?(_=h,E=l,R=d,N=u,X=p,P=g,F=S,k=m):(_=l,E=h,R=u,N=d,X=g,P=p,F=m,k=S)):(L=h,B=d,W=p,ie=S,h>=0?(_=l,E=c,R=u,N=f,X=g,P=v,F=m,k=M):(_=c,E=l,R=f,N=u,X=v,P=g,F=M,k=m)),L===0)return null;const q=_/L,j=E/L,ne=1/L,we=R-q*B,Ue=N-j*B,Z=X-q*W,me=P-j*W,Ee=F-q*ie,Oe=k-j*ie,Me=Ee*me-Oe*Z,Ne=we*Oe-Ue*Ee,pt=Z*Ue-me*we;if(s){if(Me<0||Ne<0||pt<0)return null}else if((Me<0||Ne<0||pt<0)&&(Me>0||Ne>0||pt>0))return null;const ke=Me+Ne+pt;if(ke===0)return null;const je=ne*(Me*B+Ne*W+pt*ie);return(ke>0?je<0:je>0)?null:this.at(je/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Co extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const il=new tt,_i=new ns,tr=new $n,sl=new C,nr=new C,ir=new C,sr=new C,Ea=new C,rr=new C,rl=new C,ar=new C;class Tt extends At{constructor(e=new It,t=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,e),a?rr.addScaledVector(Ea,h):rr.addScaledVector(Ea.sub(t),h))}t.add(rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(tr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(tr,sl)===null||_i.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(il.copy(r).invert(),_i.copy(e.ray).applyMatrix4(il),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,w=S;x<w;x+=3){const T=o.getX(x),_=o.getX(x+1),E=o.getX(x+2);s=or(this,m,e,n,c,h,u,T,_,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const M=o.getX(p),S=o.getX(p+1),x=o.getX(p+2);s=or(this,a,e,n,c,h,u,M,S,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,w=S;x<w;x+=3){const T=x,_=x+1,E=x+2;s=or(this,m,e,n,c,h,u,T,_,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const M=p,S=p+1,x=p+2;s=or(this,a,e,n,c,h,u,M,S,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Rf(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ci,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);const h=Rf(i,e,t,n,nr,ir,sr,rl);if(h){const u=new C;fn.getBarycoord(rl,nr,ir,sr,u),s&&(h.uv=fn.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};fn.getNormal(nr,ir,sr,f.normal),h.face=f,h.barycoord=u}return h}const ds=new St,al=new St,ol=new St,Cf=new St,cl=new tt,cr=new C,Ta=new $n,ll=new tt,wa=new ns;class ay extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fc,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cr),this.boundingBox.expandByPoint(cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cr),this.boundingSphere.expandByPoint(cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(s),e.ray.intersectsSphere(Ta)!==!1&&(ll.copy(s).invert(),wa.copy(e.ray).applyMatrix4(ll),!(this.boundingBox!==null&&wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;al.fromBufferAttribute(s.attributes.skinIndex,e),ol.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ds.copy(t),t.set(0,0,0,0)):(ds.set(t.x,t.y,t.z,1),t.set(0,0,0)),ds.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=ol.getComponent(r);if(a!==0){const o=al.getComponent(r);cl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cf.copy(ds).applyMatrix4(cl),a)}}return t.isVector4&&(t.w=ds.w),t.applyMatrix4(this.bindMatrixInverse)}}class If extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jo extends Vt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,h=Xt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hl=new tt,Pf=new tt;class eu{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Pf;hl.multiplyMatrices(o,t[r]),hl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new eu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jo(t,e,e,Mn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new If),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class ul extends qn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new tt,dl=new tt,lr=[],fl=new Sn,Lf=new tt,fs=new Tt,ps=new $n;class Df extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),fl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ps.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),dl.multiplyMatrices(n,Di),fs.matrixWorld=dl,fs.raycast(e,lr);for(let a=0,o=lr.length;a<o;a++){const l=lr[a];l.instanceId=r,l.object=this,t.push(l)}lr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(s*this.count),s,this.count,Wo,pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vi=new $n,Nf=new se(.5,.5),hr=new C;class Ps{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],S=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,m-g,w-M).normalize(),s[1].setComponents(c+a,d+h,m+g,w+M).normalize(),s[2].setComponents(c+o,d+u,m+v,w+S).normalize(),s[3].setComponents(c-o,d-u,m-v,w-S).normalize(),n)s[4].setComponents(l,f,p,x).normalize(),s[5].setComponents(c-l,d-f,m-p,w-x).normalize();else if(s[4].setComponents(c-l,d-f,m-p,w-x).normalize(),t===yn)s[5].setComponents(c+l,d+f,m+p,w+x).normalize();else if(t===Cs)s[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=Nf.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(hr.x=s.normal.x>0?e.max.x:e.min.x,hr.y=s.normal.y>0?e.max.y:e.min.y,hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const pl=new tt;class ec{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];pl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ps),n[s].setFromProjectionMatrix(pl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ps),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new ec().copy(this)}}class tu extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kr=new C,Hr=new C,ml=new tt,ms=new ns,ur=new $n,Aa=new C,gl=new C;class nu extends At{constructor(e=new It,t=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kr.fromBufferAttribute(t,s-1),Hr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kr.distanceTo(Hr);e.setAttribute("lineDistance",new $e(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;ml.copy(s).invert(),ms.copy(e.ray).applyMatrix4(ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){const m=h.getX(v),M=h.getX(v+1),S=dr(this,e,ms,l,m,M,v);S&&t.push(S)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(d),m=dr(this,e,ms,l,v,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){const m=dr(this,e,ms,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=dr(this,e,ms,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(kr.fromBufferAttribute(o,s),Hr.fromBufferAttribute(o,r),t.distanceSqToSegment(kr,Hr,Aa,gl)>n)return;Aa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Aa);if(!(c<e.near||c>e.far))return{distance:c,point:gl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const _l=new C,vl=new C;class iu extends nu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_l.fromBufferAttribute(t,s),vl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_l.distanceTo(vl);e.setAttribute("lineDistance",new $e(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oy extends nu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uf extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new tt,Io=new ns,fr=new $n,pr=new C;class cy extends At{constructor(e=new It,t=new Uf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;xl.copy(s).invert(),Io.copy(e.ray).applyMatrix4(xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const p=c.getX(g);pr.fromBufferAttribute(u,p),Ml(pr,p,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)pr.fromBufferAttribute(u,g),Ml(pr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ml(i,e,t,n,s,r,a){const o=Io.distanceSqToPoint(i);if(o<t){const l=new C;Io.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ly extends Vt{constructor(e=[],t,n,s,r,a,o,l,c,h,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class su extends Vt{constructor(e=[],t=Ki,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ji extends Vt{constructor(e,t,n=Cn,s,r,a,o=Xt,l=Xt,c,h=li,u=1){if(h!==li&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ru extends ji{constructor(e,t=Cn,n=Ki,s,r,a=Xt,o=Xt,l,c=li){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class au extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Si extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(v,p,m,M,S,x,w,T,_,E,L){const R=x/_,N=w/E,B=x/2,X=w/2,P=T/2,W=_+1,F=E+1;let k=0,ie=0;const q=new C;for(let j=0;j<F;j++){const ne=j*N-X;for(let we=0;we<W;we++){const Ue=we*R-B;q[v]=Ue*M,q[p]=ne*S,q[m]=P,c.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[m]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(we/_),u.push(1-j/E),k+=1}}for(let j=0;j<E;j++)for(let ne=0;ne<_;ne++){const we=f+ne+W*j,Ue=f+ne+W*(j+1),Z=f+(ne+1)+W*(j+1),me=f+(ne+1)+W*j;l.push(we,Ue,me),l.push(Ue,Z,me),ie+=6}o.addGroup(d,ie,L),d+=ie,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tc extends It{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,v=s+1,p=new C,m=new C;for(let M=0;M<=g;M++){let S=0,x=0,w=0,T=0;if(M<=n){const L=M/n,R=L*Math.PI/2;x=-h-e*Math.cos(R),w=e*Math.sin(R),T=-e*Math.cos(R),S=L*u}else if(M<=n+r){const L=(M-n)/r;x=-h+L*t,w=e,T=0,S=u+L*f}else{const L=(M-n-r)/n,R=L*Math.PI/2;x=h+e*Math.sin(R),w=e*Math.cos(R),T=e*Math.sin(R),S=u+f+L*u}const _=Math.max(0,Math.min(1,S/d));let E=0;M===0?E=.5/s:M===g&&(E=-.5/s);for(let L=0;L<=s;L++){const R=L/s,N=R*Math.PI*2,B=Math.sin(N),X=Math.cos(N);m.x=-w*X,m.y=x,m.z=w*B,o.push(m.x,m.y,m.z),p.set(-w*X,T,w*B),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+E,_)}if(M>0){const L=(M-1)*v;for(let R=0;R<s;R++){const N=L+R,B=L+R+1,X=M*v+R,P=M*v+R+1;a.push(N,B,X),a.push(B,P,X)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class nc extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new C,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ls extends It{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;M(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function M(){const x=new C,w=new C;let T=0;const _=(t-e)/n;for(let E=0;E<=r;E++){const L=[],R=E/r,N=R*(t-e)+e;for(let B=0;B<=s;B++){const X=B/s,P=X*l+o,W=Math.sin(P),F=Math.cos(P);w.x=N*W,w.y=-R*n+p,w.z=N*F,u.push(w.x,w.y,w.z),x.set(W,_,F).normalize(),f.push(x.x,x.y,x.z),d.push(X,1-R),L.push(g++)}v.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){const R=v[L][E],N=v[L+1][E],B=v[L+1][E+1],X=v[L][E+1];(e>0||L!==0)&&(h.push(R,N,X),T+=3),(t>0||L!==r-1)&&(h.push(N,B,X),T+=3)}c.addGroup(m,T,0),m+=T}function S(x){const w=g,T=new se,_=new C;let E=0;const L=x===!0?e:t,R=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),g++;const N=g;for(let B=0;B<=s;B++){const P=B/s*l+o,W=Math.cos(P),F=Math.sin(P);_.x=L*F,_.y=p*R,_.z=L*W,u.push(_.x,_.y,_.z),f.push(0,R,0),T.x=W*.5+.5,T.y=F*.5*R+.5,d.push(T.x,T.y),g++}for(let B=0;B<s;B++){const X=w+B,P=N+B;x===!0?h.push(P,P+1,X):h.push(P+1,P,X),E+=3}c.addGroup(m,E,x===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ic extends Ls{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ic(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const mr=new C,gr=new C,Ra=new C,_r=new fn;class Of extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Yi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f=new Map,d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:m}=_r;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),_r.getNormal(Ra),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const S=(M+1)%3,x=u[M],w=u[S],T=_r[h[M]],_=_r[h[S]],E=`${x}_${w}`,L=`${w}_${x}`,R=f.get(L);R?(Ra.dot(R.normal)<=r&&(d.push(T.x,T.y,T.z),d.push(_.x,_.y,_.z)),f.set(L,null)):f.has(E)||f.set(E,{index0:c[M],index1:c[S],normal:Ra.clone()})}}for(const g of f.values())if(g){const{index0:v,index1:p}=g;mr.fromBufferAttribute(o,v),gr.fromBufferAttribute(o,p),d.push(mr.x,mr.y,mr.z),d.push(gr.x,gr.y,gr.z)}this.setAttribute("position",new $e(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,s=[],r=[],a=[],o=new C,l=new tt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ze(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class sc extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ff extends sc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const yl=new C,Sl=new C,Ca=new rc,Ia=new rc,Pa=new rc;class ou extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sl.subVectors(s[0],s[1]).add(s[0]),c=Sl);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ca.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,p),Ia.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,p),Pa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ia.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Pa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ca.calc(l),Ia.calc(l),Pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Bf(i,e){const t=1-i;return t*t*e}function zf(i,e){return 2*(1-i)*i*e}function kf(i,e){return i*i*e}function Es(i,e,t,n){return Bf(i,e)+zf(i,t)+kf(i,n)}function Hf(i,e){const t=1-i;return t*t*t*e}function Gf(i,e){const t=1-i;return 3*t*t*i*e}function Vf(i,e){return 3*(1-i)*i*i*e}function Wf(i,e){return i*i*i*e}function Ts(i,e,t,n,s){return Hf(i,e)+Gf(i,t)+Vf(i,n)+Wf(i,s)}class cu extends Ln{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xf extends Ln{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y),Ts(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lu extends Ln{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends Ln{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hu extends Ln{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(e,s.x,r.x,a.x),Es(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uu extends Ln{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(e,s.x,r.x,a.x),Es(e,s.y,r.y,a.y),Es(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(bl(o,l.x,c.x,h.x,u.x),bl(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var Gr=Object.freeze({__proto__:null,ArcCurve:Ff,CatmullRomCurve3:ou,CubicBezierCurve:cu,CubicBezierCurve3:Xf,EllipseCurve:sc,LineCurve:lu,LineCurve3:qf,QuadraticBezierCurve:hu,QuadraticBezierCurve3:uu,SplineCurve:du});class Yf extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Gr[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class El extends Yf{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new lu(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new hu(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new cu(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new du(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new sc(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ac extends El{constructor(e){super(e),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new El().fromJSON(s))}return this}}function $f(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=fu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ds(r,a,t,o,l,c,0),a}function fu(i,e,t,n,s){let r;if(s===hp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Tl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Tl(a/n|0,i[a],i[a+1],r);return r&&es(r,r.next)&&(Us(r),r=r.next),r}function Mi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(es(t,t.next)||wt(t.prev,t,t.next)===0)){if(Us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ds(i,e,t,n,s,r,a){if(!i)return;!a&&r&&sp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Kf(i,n,s,r):Zf(i)){e.push(l.i,i.i,c.i),Us(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jf(Mi(i),e),Ds(i,e,t,n,s,r,2)):a===2&&Qf(i,e,t,n,s,r):Ds(Mi(i),e,t,n,s,r,1);break}}}function Zf(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&xs(s,o,r,l,a,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(wt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),p=Math.max(h,u,f),m=Po(d,g,e,t,n),M=Po(v,p,e,t,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=m&&x&&x.z<=M;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&xs(o,h,l,u,c,f,S.x,S.y)&&wt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&xs(o,h,l,u,c,f,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&xs(o,h,l,u,c,f,S.x,S.y)&&wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&xs(o,h,l,u,c,f,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!es(n,s)&&mu(n,t,t.next,s)&&Ns(n,s)&&Ns(s,n)&&(e.push(n.i,t.i,s.i),Us(t),Us(t.next),t=i=s),t=t.next}while(t!==i);return Mi(t)}function Qf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&op(a,o)){let l=gu(a,o);a=Mi(a,a.next),l=Mi(l,l.next),Ds(a,e,t,n,s,r,0),Ds(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jf(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=fu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ap(c))}s.sort(ep);for(let r=0;r<s.length;r++)t=tp(s[r],t);return t}function ep(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function tp(i,e){const t=np(i,e);if(!t)return e;const n=gu(t,i);return Mi(n,n.next),Mi(t,t.next)}function np(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(es(i,t))return t;do{if(es(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Ns(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ip(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ip(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function sp(i,e,t,n){let s=i;do s.z===0&&(s.z=Po(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rp(s)}function rp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Po(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ap(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function xs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&pu(i,e,t,n,s,r,a,o)}function op(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cp(i,e)&&(Ns(i,e)&&Ns(e,i)&&lp(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||es(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function es(i,e){return i.x===e.x&&i.y===e.y}function mu(i,e,t,n){const s=xr(wt(i,e,t)),r=xr(wt(i,e,n)),a=xr(wt(t,n,i)),o=xr(wt(t,n,e));return!!(s!==r&&a!==o||s===0&&vr(i,t,e)||r===0&&vr(i,n,e)||a===0&&vr(t,i,n)||o===0&&vr(t,e,n))}function vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xr(i){return i>0?1:i<0?-1:0}function cp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function lp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gu(i,e){const t=Lo(i.i,i.x,i.y),n=Lo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Tl(i,e,t,n){const s=Lo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class up{static triangulate(e,t,n=2){return $f(e,t,n)}}class Vi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];wl(e),Al(n,e);let a=e.length;t.forEach(wl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Al(n,t[l]);const o=up.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function wl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Al(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class qr extends It{constructor(e=new ac([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:dp;let S,x=!1,w,T,_,E;if(m){S=m.getSpacedPoints(h),x=!0,f=!1;const te=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,te),T=new C,_=new C,E=new C}f||(p=0,d=0,g=0,v=0);const L=o.extractPoints(c);let R=L.shape;const N=L.holes;if(!Vi.isClockWise(R)){R=R.reverse();for(let te=0,ue=N.length;te<ue;te++){const ce=N[te];Vi.isClockWise(ce)&&(N[te]=ce.reverse())}}function X(te){const ce=10000000000000001e-36;let Te=te[0];for(let xe=1;xe<=te.length;xe++){const Xe=xe%te.length,Pe=te[Xe],st=Pe.x-Te.x,rt=Pe.y-Te.y,ut=st*st+rt*rt,O=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(Te.x),Math.abs(Te.y)),Lt=ce*O*O;if(ut<=Lt){te.splice(Xe,1),xe--;continue}Te=Pe}}X(R),N.forEach(X);const P=N.length,W=R;for(let te=0;te<P;te++){const ue=N[te];R=R.concat(ue)}function F(te,ue,ce){return ue||Ge("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ue,ce)}const k=R.length;function ie(te,ue,ce){let Te,xe,Xe;const Pe=te.x-ue.x,st=te.y-ue.y,rt=ce.x-te.x,ut=ce.y-te.y,O=Pe*Pe+st*st,Lt=Pe*ut-st*rt;if(Math.abs(Lt)>Number.EPSILON){const nt=Math.sqrt(O),vt=Math.sqrt(rt*rt+ut*ut),ge=ue.x-st/nt,Rt=ue.y+Pe/nt,ze=ce.x-ut/vt,Ve=ce.y+rt/vt,A=((ze-ge)*ut-(Ve-Rt)*rt)/(Pe*ut-st*rt);Te=ge+Pe*A-te.x,xe=Rt+st*A-te.y;const y=Te*Te+xe*xe;if(y<=2)return new se(Te,xe);Xe=Math.sqrt(y/2)}else{let nt=!1;Pe>Number.EPSILON?rt>Number.EPSILON&&(nt=!0):Pe<-Number.EPSILON?rt<-Number.EPSILON&&(nt=!0):Math.sign(st)===Math.sign(ut)&&(nt=!0),nt?(Te=-st,xe=Pe,Xe=Math.sqrt(O)):(Te=Pe,xe=st,Xe=Math.sqrt(O/2))}return new se(Te/Xe,xe/Xe)}const q=[];for(let te=0,ue=W.length,ce=ue-1,Te=te+1;te<ue;te++,ce++,Te++)ce===ue&&(ce=0),Te===ue&&(Te=0),q[te]=ie(W[te],W[ce],W[Te]);const j=[];let ne,we=q.concat();for(let te=0,ue=P;te<ue;te++){const ce=N[te];ne=[];for(let Te=0,xe=ce.length,Xe=xe-1,Pe=Te+1;Te<xe;Te++,Xe++,Pe++)Xe===xe&&(Xe=0),Pe===xe&&(Pe=0),ne[Te]=ie(ce[Te],ce[Xe],ce[Pe]);j.push(ne),we=we.concat(ne)}let Ue;if(p===0)Ue=Vi.triangulateShape(W,N);else{const te=[],ue=[];for(let ce=0;ce<p;ce++){const Te=ce/p,xe=d*Math.cos(Te*Math.PI/2),Xe=g*Math.sin(Te*Math.PI/2)+v;for(let Pe=0,st=W.length;Pe<st;Pe++){const rt=F(W[Pe],q[Pe],Xe);Ne(rt.x,rt.y,-xe),Te===0&&te.push(rt)}for(let Pe=0,st=P;Pe<st;Pe++){const rt=N[Pe];ne=j[Pe];const ut=[];for(let O=0,Lt=rt.length;O<Lt;O++){const nt=F(rt[O],ne[O],Xe);Ne(nt.x,nt.y,-xe),Te===0&&ut.push(nt)}Te===0&&ue.push(ut)}}Ue=Vi.triangulateShape(te,ue)}const Z=Ue.length,me=g+v;for(let te=0;te<k;te++){const ue=f?F(R[te],we[te],me):R[te];x?(_.copy(w.normals[0]).multiplyScalar(ue.x),T.copy(w.binormals[0]).multiplyScalar(ue.y),E.copy(S[0]).add(_).add(T),Ne(E.x,E.y,E.z)):Ne(ue.x,ue.y,0)}for(let te=1;te<=h;te++)for(let ue=0;ue<k;ue++){const ce=f?F(R[ue],we[ue],me):R[ue];x?(_.copy(w.normals[te]).multiplyScalar(ce.x),T.copy(w.binormals[te]).multiplyScalar(ce.y),E.copy(S[te]).add(_).add(T),Ne(E.x,E.y,E.z)):Ne(ce.x,ce.y,u/h*te)}for(let te=p-1;te>=0;te--){const ue=te/p,ce=d*Math.cos(ue*Math.PI/2),Te=g*Math.sin(ue*Math.PI/2)+v;for(let xe=0,Xe=W.length;xe<Xe;xe++){const Pe=F(W[xe],q[xe],Te);Ne(Pe.x,Pe.y,u+ce)}for(let xe=0,Xe=N.length;xe<Xe;xe++){const Pe=N[xe];ne=j[xe];for(let st=0,rt=Pe.length;st<rt;st++){const ut=F(Pe[st],ne[st],Te);x?Ne(ut.x,ut.y+S[h-1].y,S[h-1].x+ce):Ne(ut.x,ut.y,u+ce)}}}Ee(),Oe();function Ee(){const te=s.length/3;if(f){let ue=0,ce=k*ue;for(let Te=0;Te<Z;Te++){const xe=Ue[Te];pt(xe[2]+ce,xe[1]+ce,xe[0]+ce)}ue=h+p*2,ce=k*ue;for(let Te=0;Te<Z;Te++){const xe=Ue[Te];pt(xe[0]+ce,xe[1]+ce,xe[2]+ce)}}else{for(let ue=0;ue<Z;ue++){const ce=Ue[ue];pt(ce[2],ce[1],ce[0])}for(let ue=0;ue<Z;ue++){const ce=Ue[ue];pt(ce[0]+k*h,ce[1]+k*h,ce[2]+k*h)}}n.addGroup(te,s.length/3-te,0)}function Oe(){const te=s.length/3;let ue=0;Me(W,ue),ue+=W.length;for(let ce=0,Te=N.length;ce<Te;ce++){const xe=N[ce];Me(xe,ue),ue+=xe.length}n.addGroup(te,s.length/3-te,1)}function Me(te,ue){let ce=te.length;for(;--ce>=0;){const Te=ce;let xe=ce-1;xe<0&&(xe=te.length-1);for(let Xe=0,Pe=h+p*2;Xe<Pe;Xe++){const st=k*Xe,rt=k*(Xe+1),ut=ue+Te+st,O=ue+xe+st,Lt=ue+xe+rt,nt=ue+Te+rt;ke(ut,O,Lt,nt)}}}function Ne(te,ue,ce){l.push(te),l.push(ue),l.push(ce)}function pt(te,ue,ce){je(te),je(ue),je(ce);const Te=s.length/3,xe=M.generateTopUV(n,s,Te-3,Te-2,Te-1);it(xe[0]),it(xe[1]),it(xe[2])}function ke(te,ue,ce,Te){je(te),je(ue),je(Te),je(ue),je(ce),je(Te);const xe=s.length/3,Xe=M.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);it(Xe[0]),it(Xe[1]),it(Xe[3]),it(Xe[1]),it(Xe[2]),it(Xe[3])}function je(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function it(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Gr[s.type]().fromJSON(s)),new qr(n,e.options)}}const dp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(f,1-g),new se(v,1-m)]:[new se(o,1-l),new se(h,1-u),new se(d,1-g),new se(p,1-m)]}};function fp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yr extends It{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,f=new se,d=new C,g=new C,v=new C;let p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let M=0;M<=t;M++){const S=n+M*h*s,x=Math.sin(S),w=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),f.x=M/t,f.y=T/(e.length-1),o.push(f.x,f.y);const _=l[3*T+0]*x,E=l[3*T+1],L=l[3*T+0]*w;c.push(_,E,L)}}for(let M=0;M<t;M++)for(let S=0;S<e.length-1;S++){const x=S+M*e.length,w=x,T=x+e.length,_=x+e.length+1,E=x+1;r.push(w,T,E),r.push(_,E,T)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.points,e.segments,e.phiStart,e.phiLength)}}class $r extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*f-a;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-M,0),v.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const S=M+c*m,x=M+c*(m+1),w=M+1+c*(m+1),T=M+1+c*m;d.push(S,x,T),d.push(x,w,T)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}class oc extends It{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,d=new C,g=new se;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const M=m+p,S=M,x=M+n+1,w=M+n+2,T=M+1;o.push(S,x,T),o.push(x,w,T)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bs extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],S=m/n,x=a+S*o,w=e*Math.cos(x),T=Math.sqrt(e*e-w*w);let _=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const L=E/t,R=s+L*r;u.x=-T*Math.cos(R),u.y=w,u.z=T*Math.sin(R),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(L+_,1-S),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const S=h[m][M+1],x=h[m][M],w=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&d.push(S,x,T),(m!==n-1||l<Math.PI)&&d.push(x,w,T)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cc extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new C,d=new C,g=new C;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let m=0;m<=s;m++){const M=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,S=(s+1)*(v-1)+p,x=(s+1)*v+p;l.push(m,M,x),l.push(M,S,x)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class lc extends It{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],h=[],u=new C,f=new C,d=new C,g=new C,v=new C,p=new C,m=new C;for(let S=0;S<=n;++S){const x=S/n*r*Math.PI*2;M(x,r,a,e,d),M(x+.01,r,a,e,g),p.subVectors(g,d),m.addVectors(g,d),v.crossVectors(p,m),m.crossVectors(v,p),v.normalize(),m.normalize();for(let w=0;w<=s;++w){const T=w/s*Math.PI*2,_=-t*Math.cos(T),E=t*Math.sin(T);u.x=d.x+(_*m.x+E*v.x),u.y=d.y+(_*m.y+E*v.y),u.z=d.z+(_*m.z+E*v.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(S/n),h.push(w/s)}}for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){const w=(s+1)*(S-1)+(x-1),T=(s+1)*S+(x-1),_=(s+1)*S+x,E=(s+1)*(S-1)+x;o.push(w,T,E),o.push(T,_,E)}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2));function M(S,x,w,T,_){const E=Math.cos(S),L=Math.sin(S),R=w/x*S,N=Math.cos(R);_.x=T*(2+N)*.5*E,_.y=T*(2+N)*L*.5,_.z=T*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class hc extends It{constructor(e=new uu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new se;let h=new C;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function v(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),M(),m()}function p(S){h=e.getPointAt(S/t,h);const x=a.normals[S],w=a.binormals[S];for(let T=0;T<=s;T++){const _=T/s*Math.PI*2,E=Math.sin(_),L=-Math.cos(_);l.x=L*x.x+E*w.x,l.y=L*x.y+E*w.y,l.z=L*x.z+E*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){const w=(s+1)*(S-1)+(x-1),T=(s+1)*S+(x-1),_=(s+1)*S+x,E=(s+1)*(S-1)+x;g.push(w,T,E),g.push(T,_,E)}}function M(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)c.x=S/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hc(new Gr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Rl(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Rl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=ts(i[t]);for(const s in n)e[s]=n[s]}return e}function Rl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const mp={clone:ts,merge:Qt};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vp extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Os extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mp extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yp extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sp extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ii(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ms(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function bp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Cl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Ep(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class zs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Tp extends zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kc:r=e,o=2*t-n;break;case Hc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:a=e,l=2*n-t;break;case Hc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-f*p+2*f*v-f*g,M=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,S=(-1-d)*p+(1.5+d)*v+.5*g,x=d*p-d*v;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+M*a[c+w]+S*a[l+w]+x*a[u+w];return r}}class wp extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class Ap extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rp extends zs{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}const f=o*2,d=e-1;for(let g=0;g!==o;++g){const v=a[c+g],p=a[l+g],m=d*f+g*2,M=u[m],S=u[m+1],x=e*f+g*2,w=h[x],T=h[x+1],_=Ip(n,t,M,w,s);r[g]=vu(_,v,S,T,p)}return r}}function vu(i,e,t,n,s){const r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Cp(i,e,t,n,s){const r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ip(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){const o=vu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;const l=Cp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class En{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ii(t,this.TimeBufferType),this.values=ii(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ii(e.times,Array),values:ii(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ms(e.settings)&&(n.settings={inTangents:ii(e.settings.inTangents,Array),outTangents:ii(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Rp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break;case Bc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return ia;case this.InterpolantFactoryMethodBezier:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ms(this.settings)&&(Il(this.settings.inTangents,e),Il(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ms(this.settings)&&(Pl(this.settings.inTangents,e),Pl(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Vd(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ms(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function Il(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Pl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Ro;class is extends En{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ur;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class xu extends En{constructor(e,t,n,s){super(e,t,n,s)}}xu.prototype.ValueTypeName="color";class uc extends En{constructor(e,t,n,s){super(e,t,n,s)}}uc.prototype.ValueTypeName="number";class Pp extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Pn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class dc extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}}dc.prototype.ValueTypeName="quaternion";dc.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends En{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ur;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Mu extends En{constructor(e,t,n,s){super(e,t,n,s)}}Mu.prototype.ValueTypeName="vector";class hy{constructor(e="",t=-1,n=[],s=Dd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Dp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=bp(l);l=Cl(l,1,h),c=Cl(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new uc(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uc;case"vector":case"vector2":case"vector3":case"vector4":return Mu;case"color":return xu;case"quaternion":return dc;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lp(i.type);if(i.times===void 0){const n=[],s=[];Ep(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ms(i.settings)&&(t.settings={inTangents:ii(i.settings.inTangents,Float32Array),outTangents:ii(i.settings.outTangents,Float32Array)}),t}const Vn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ll(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ll(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ll(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Np{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Up=new Np;class ks{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class Op extends Error{constructor(e,t){super(e),this.response=t}}class uy extends ks{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const p=new ReadableStream({start(m){M();function M(){u.read().then(({done:S,value:x})=>{if(S)m.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let T=0,_=h.length;T<_;T++){const E=h[T];E.onProgress&&E.onProgress(w)}m.enqueue(x),M()}},S=>{m.error(S)})}}});return new Response(p)}else throw new Op(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vn.add(`file:${e}`,c);const h=zn[e];delete zn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ni=new WeakMap;class Fp extends ks{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ni.get(a);u===void 0&&(u=[],Ni.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Is("img");function l(){h(),t&&t(this);const u=Ni.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Ni.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Vn.remove(`image:${e}`);const f=Ni.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}Ni.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class dy extends ks{constructor(e){super(e)}load(e,t,n,s){const r=new Vt,a=new Fp(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Zr extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Bp extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const La=new tt,Dl=new C,Nl=new C;class fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(La,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Cs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mr=new C,yr=new Pn,Tn=new C;class yu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mr,yr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,yr,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Mr,yr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,yr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new C,Ul=new se,Ol=new se;class cn extends yu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Ol),t.subVectors(Ol,Ul)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zp extends fc{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Qi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class fy extends Zr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class kp extends fc{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Hp extends Zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Su extends yu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gp extends fc{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Gp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class py{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Na=new WeakMap;class my extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Na.has(a)===!0?(s&&s(Na.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Na.set(l,c),Vn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ui=-90,Oi=1;class Do extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ui,Oi,e,t);s.layers=this.layers,this.add(s);const r=new cn(Ui,Oi,e,t);r.layers=this.layers,this.add(r);const a=new cn(Ui,Oi,e,t);a.layers=this.layers,this.add(a);const o=new cn(Ui,Oi,e,t);o.layers=this.layers,this.add(o);const l=new cn(Ui,Oi,e,t);l.layers=this.layers,this.add(l);const c=new cn(Ui,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vp extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const pc="\\[\\]\\.:\\/",Wp=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",Xp="[^"+pc.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",mc),Yp=/(WCOD+)?/.source.replace("WCOD",Xp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),Kp=new RegExp("^"+qp+Yp+$p+Zp+"$"),Jp=["material","materials","bones","map"];class Qp{constructor(e,t,n){const s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){const t=Kp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=Qp;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fl=new tt;class jp{constructor(e,t,n=0,s=1/0){this.ray=new ns(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fl),this}intersectObject(e,t=!0,n=[]){return No(e,this,n,t),n.sort(Bl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)No(e[s],this,n,t);return n.sort(Bl),n}}function Bl(i,e){return i.distance-e.distance}function No(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)No(r[a],e,t,!0)}}class zl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class em extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kl(i,e,t,n){const s=tm(n);switch(t){case kh:return i*e;case Wo:return i*e/s.components*s.byteLength;case Xo:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case qo:return i*e*2/s.components*s.byteLength;case Hh:return i*e*3/s.components*s.byteLength;case Mn:return i*e*4/s.components*s.byteLength;case Yo:return i*e*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case eo:return Math.max(i,16)*Math.max(e,8)/4;case Ja:case ja:return Math.max(i,8)*Math.max(e,8)/2;case to:case no:case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case Dr:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case So:case bo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nr:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tm(i){switch(i){case un:case Oh:return{byteLength:1,components:1};case Rs:case Fh:case In:return{byteLength:2,components:1};case Go:case Vo:return{byteLength:2,components:4};case Cn:case Ho:case pn:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);function bu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nm(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,e0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,H0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Mg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
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
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,wg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ig=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Ng=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:cm,aomap_fragment:lm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:ym,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:Em,color_vertex:Tm,common:wm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Om,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:$m,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:km,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Km,lights_phong_fragment:Jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:jm,lights_physical_pars_fragment:e0,lights_fragment_begin:t0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:c0,map_fragment:l0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:v0,morphtarget_vertex:x0,normal_fragment_begin:M0,normal_fragment_maps:y0,normal_pars_fragment:S0,normal_pars_vertex:b0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:N0,dithering_pars_fragment:U0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:k0,shadowmask_pars_fragment:H0,skinbase_vertex:G0,skinning_pars_vertex:V0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:$0,tonemapping_pars_fragment:Z0,transmission_fragment:K0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:j0,uv_vertex:eg,worldpos_vertex:tg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:cg,depth_frag:lg,distance_vert:hg,distance_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:vg,meshlambert_frag:xg,meshmatcap_vert:Mg,meshmatcap_frag:yg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:wg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Ig,points_frag:Pg,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ng,sprite_frag:Ug},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},An={basic:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Qt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Qt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Qt([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Qt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Qt([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Qt([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Qt([Se.common,Se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Qt([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};An.physical={uniforms:Qt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Sr={r:0,b:0,g:0},Og=new tt,Eu=new Ye;Eu.set(-1,0,0,0,1,0,0,0,1);function Fg(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const x=M.backgroundBlurriness>0;S=e.get(S,x)}return S}function g(M){let S=!1;const x=d(M);x===null?p(a,o):x&&x.isColor&&(p(x,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,S){const x=d(S);x&&x.isCubeTexture?(c===void 0&&(c=new Tt(new Si(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ts(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==gt,(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Tt(new $r(2,2),new yi({name:"BackgroundMaterial",uniforms:ts(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(Sr,_u(i)),t.buffers.color.setClear(Sr.r,Sr.g,Sr.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:v,dispose:m}}function Bg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(N,B,X,P,W){let F=!1;const k=u(N,P,X,B);r!==k&&(r=k,c(r.object)),F=d(N,P,X,W),F&&g(N,P,X,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(N,B,X,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,B,X,P){const W=P.wireframe===!0;let F=n[B.id];F===void 0&&(F={},n[B.id]=F);const k=N.isInstancedMesh===!0?N.id:0;let ie=F[k];ie===void 0&&(ie={},F[k]=ie);let q=ie[X.id];q===void 0&&(q={},ie[X.id]=q);let j=q[W];return j===void 0&&(j=f(l()),q[W]=j),j}function f(N){const B=[],X=[],P=[];for(let W=0;W<t;W++)B[W]=0,X[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:P,object:N,attributes:{},index:null}}function d(N,B,X,P){const W=r.attributes,F=B.attributes;let k=0;const ie=X.getAttributes();for(const q in ie)if(ie[q].location>=0){const ne=W[q];let we=F[q];if(we===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),ne===void 0||ne.attribute!==we||we&&ne.data!==we.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function g(N,B,X,P){const W={},F=B.attributes;let k=0;const ie=X.getAttributes();for(const q in ie)if(ie[q].location>=0){let ne=F[q];ne===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const we={};we.attribute=ne,ne&&ne.data&&(we.data=ne.data),W[q]=we,k++}r.attributes=W,r.attributesNum=k,r.index=P}function v(){const N=r.newAttributes;for(let B=0,X=N.length;B<X;B++)N[B]=0}function p(N){m(N,0)}function m(N,B){const X=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;X[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),W[N]!==B&&(i.vertexAttribDivisor(N,B),W[N]=B)}function M(){const N=r.newAttributes,B=r.enabledAttributes;for(let X=0,P=B.length;X<P;X++)B[X]!==N[X]&&(i.disableVertexAttribArray(X),B[X]=0)}function S(N,B,X,P,W,F,k){k===!0?i.vertexAttribIPointer(N,B,X,W,F):i.vertexAttribPointer(N,B,X,P,W,F)}function x(N,B,X,P){v();const W=P.attributes,F=X.getAttributes(),k=B.defaultAttributeValues;for(const ie in F){const q=F[ie];if(q.location>=0){let j=W[ie];if(j===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const ne=j.normalized,we=j.itemSize,Ue=e.get(j);if(Ue===void 0)continue;const Z=Ue.buffer,me=Ue.type,Ee=Ue.bytesPerElement,Oe=me===i.INT||me===i.UNSIGNED_INT||j.gpuType===Ho;if(j.isInterleavedBufferAttribute){const Me=j.data,Ne=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,pt=j.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let ke=0;ke<q.locationSize;ke++)m(q.location+ke,Me.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ke=0;ke<q.locationSize;ke++)p(q.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ke=0;ke<q.locationSize;ke++)S(q.location+ke,we/q.locationSize,me,ne,Ne*Ee,(pt+we/q.locationSize*ke)*Ee,Oe)}else{if(j.isInstancedBufferAttribute){for(let Me=0;Me<q.locationSize;Me++)m(q.location+Me,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<q.locationSize;Me++)p(q.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Me=0;Me<q.locationSize;Me++)S(q.location+Me,we/q.locationSize,me,ne,we*Ee,we/q.locationSize*Me*Ee,Oe)}}else if(k!==void 0){const ne=k[ie];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(q.location,ne);break;case 3:i.vertexAttrib3fv(q.location,ne);break;case 4:i.vertexAttrib4fv(q.location,ne);break;default:i.vertexAttrib1fv(q.location,ne)}}}}M()}function w(){L();for(const N in n){const B=n[N];for(const X in B){const P=B[X];for(const W in P){const F=P[W];for(const k in F)h(F[k].object),delete F[k];delete P[W]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const B=n[N.id];for(const X in B){const P=B[X];for(const W in P){const F=P[W];for(const k in F)h(F[k].object),delete F[k];delete P[W]}}delete n[N.id]}function _(N){for(const B in n){const X=n[B];for(const P in X){const W=X[P];if(W[N.id]===void 0)continue;const F=W[N.id];for(const k in F)h(F[k].object),delete F[k];delete W[N.id]}}}function E(N){for(const B in n){const X=n[B],P=N.isInstancedMesh===!0?N.id:0,W=X[P];if(W!==void 0){for(const F in W){const k=W[F];for(const ie in k)h(k[ie].object),delete k[ie];delete W[F]}delete X[P],Object.keys(X).length===0&&delete n[B]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function zg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Mn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==un&&_!==pn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,maxSamples:w,samples:T}}function Hg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new kn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,S=M*4;let x=m.clippingState||null;l.value=x,x=h(g,f,S,d);for(let w=0;w!==S;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==v;++S,x+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class gc extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Xi});r.uniforms.tEquirect.value=t;const a=new Tt(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=nn),new Do(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Hl=256,Gg=3,Vg=20,Tu=256,wu=16,Wg=3,Xg=new C,qg=new He;class Fs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Do(1,10,null),this._boxMesh=new Tt(new Si(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Xg}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(qg));const p=new Do(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hl,Yh(e))}_fromTexture(e,t){e.mapping===Ki||e.mapping===As?this._setSize(e.image.length===0?Hl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Gl(e,!1,!1),n=Math.log2(e)-Gg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Gl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ki||e.mapping===As?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yg(),this._integrationMaterial=$g());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/wu);for(let a=0;a<=n;a++){const o=Fs.lodToRoughness(a,n);if(a>n-Wg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Tu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zg());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Gl(i,e,t){return new gc(i,{minFilter:ri,generateMipmaps:e,type:In,colorSpace:Fr,depthBuffer:t})}function Hs(i,e,t){return new yi({name:i,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:en,blending:Xi,depthTest:!1,depthWrite:!1})}function Yg(){return Hs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $g(){return Hs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zg(){return Hs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vl(){return Hs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wl(){return Hs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ea||d===ta)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new gc(g.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,g=d===ea||d===ta,v=d===Ki||d===As;if(g||v){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Fs(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const M=f.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Fs(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===ea?f.mapping=Ki:d===ta&&(f.mapping=As),f}function l(f){let d=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&d++;return d===g}function c(f){const d=f.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Jg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&qi("WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)e.update(v[p],i.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=v!==null?v.array.length:p.array.length/3-1,S=p.count>=65535?Qh:Jh,x=new S(Math.ceil(M/3)*6,1),w=x.array;if(v!==null){const _=v.array;m=v.version;for(let E=0,L=0;E<M;E+=3){const R=_[E+0],N=_[E+1],B=_[E+2];w[L++]=R,w[L++]=N,w[L++]=N,w[L++]=B,w[L++]=B,w[L++]=R}}else{m=p.version;for(let _=0,E=0;_<M;_+=3){const L=_+0,R=_+1,N=_+2;w[E++]=L,w[E++]=R,w[E++]=R,w[E++]=N,w[E++]=N,w[E++]=L}}x.version=m;const T=r.get(g);T&&e.remove(T),r.set(g,x)}function f(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function jg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let p=0;p<d;p++)v+=f[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function e_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t_(i,e,t){const n=new WeakMap,s=new St;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let x=o.attributes.position.count*S,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*w*4*u),_=new $h(T,x,w,u);_.type=pn,_.needsUpdate=!0;const E=S*4;for(let R=0;R<u;R++){const N=p[R],B=m[R],X=M[R],P=x*w*4*R;for(let W=0;W<N.count;W++){const F=W*E;d===!0&&(s.fromBufferAttribute(N,W),T[P+F+0]=s.x,T[P+F+1]=s.y,T[P+F+2]=s.z,T[P+F+3]=0),g===!0&&(s.fromBufferAttribute(B,W),T[P+F+4]=s.x,T[P+F+5]=s.y,T[P+F+6]=s.z,T[P+F+7]=0),v===!0&&(s.fromBufferAttribute(X,W),T[P+F+8]=s.x,T[P+F+9]=s.y,T[P+F+10]=s.z,T[P+F+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new se(x,w)},n.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function n_(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const i_={[Ch]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Ph]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function s_(i,e,t,n,s,r){const a=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new It;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));const u=new vp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Tt(h,u),d=new Su(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,M=null,S=[],x=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<S.length;_++){const E=S[_];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){S=w,x=S.length>0&&S[0].isRenderPass===!0;const T=a.width,_=a.height;S.length>0&&o===null&&(o=new Rn(T,_,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(T,_,{type:In,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&S.some(L=>L.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new ji(T,_),r===!0&&(c.format=ai,c.type=Ji)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let L=0;L<S.length;L++){const R=S[L];R.setSize&&R.setSize(T,_),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===Wn&&S.length===0)return!1;if(M=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return x===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Wn,!0},this.hasRenderPass=function(){return x},this.end=function(w,T){w.toneMapping=m,p=!0;let _=a,E=o;for(let L=0;L<S.length;L++){const R=S[L];R.enabled!==!1&&(R.render(w,E,_,T),R.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,u.defines={},ct.getTransfer(g)===gt&&(u.defines.SRGB_TRANSFER="");const L=i_[v];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Au=new Vt,Ru=new ji(1,1),Cu=new ru(1),Iu=new $h,Pu=new pf,Lu=new su,Xl=[],ql=[],Yl=new Float32Array(16),$l=new Float32Array(9),Zl=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kr(i,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function r_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function l_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Bt(t,n)}}function h_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Bt(t,n)}}function u_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),Bt(t,n)}}function d_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function g_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function Jr(i){return i.version===0&&(i.compareFunction=Wh,i.needsUpdate=!0),i}function M_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Jr(Ru):r=Au,t.setTexture2D(e||r,s)}function y_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pu,s)}function S_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Jr(Cu):r=Lu,t.setTextureCube(e||r,s)}function b_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Iu,s)}function E_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return c_;case 35674:return l_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return v_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function T_(i,e){i.uniform1fv(this.addr,e)}function w_(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function A_(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function R_(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function C_(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function I_(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function P_(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function L_(i,e){i.uniform1iv(this.addr,e)}function D_(i,e){i.uniform2iv(this.addr,e)}function N_(i,e){i.uniform3iv(this.addr,e)}function U_(i,e){i.uniform4iv(this.addr,e)}function O_(i,e){i.uniform1uiv(this.addr,e)}function F_(i,e){i.uniform2uiv(this.addr,e)}function B_(i,e){i.uniform3uiv(this.addr,e)}function z_(i,e){i.uniform4uiv(this.addr,e)}function k_(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jr(Ru):a=Au;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function H_(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pu,r[a])}function G_(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Jr(Cu):a=Lu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function V_(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Iu,r[a])}function W_(i){switch(i){case 5126:return T_;case 35664:return w_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return I_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return O_;case 36294:return F_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}class X_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E_(t.type)}}class q_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W_(t.type)}}class Y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Kl(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kl(t,c===void 0?new X_(o,i,e):new q_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Y_(o),Kl(t,u)),t=u}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Z_=37297;let K_=0;function J_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ql=new Ye;function Q_(i){ct._getMatrix(Ql,ct.workingColorSpace,i);const e=`mat3( ${Ql.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+J_(i.getShaderSource(e),o)}else return r}function j_(i,e){const t=Q_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ev={[Ch]:"Linear",[Ih]:"Reinhard",[Ph]:"Cineon",[ko]:"ACESFilmic",[Dh]:"AgX",[Nh]:"Neutral",[Lh]:"Custom"};function tv(i,e){const t=ev[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new C;function nv(){ct.getLuminanceCoefficients(br);const i=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function sv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ys(i){return i!==""}function eh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(av,ov)}function ov(i,e){const t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uo(t)}const cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(cv,lv)}function lv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hv={[Ar]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function uv(i){return hv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dv={[As]:"ENVMAP_MODE_REFRACTION"};function fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pv={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function mv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pv[i.combine]||"ENVMAP_BLENDING_NONE"}function gv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=fv(t),u=mv(t),f=iv(t),d=sv(r),g=s.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ys).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(v=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=Uo(a),a=eh(a,t),a=th(a,t),o=Uo(o),o=eh(o,t),o=th(o,t),a=nh(a),o=nh(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+v+a,S=m+p+o,x=Jl(s,s.VERTEX_SHADER,M),w=Jl(s,s.FRAGMENT_SHADER,S);s.attachShader(g,x),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(x)||"",X=s.getShaderInfoLog(w)||"",P=N.trim(),W=B.trim(),F=X.trim();let k=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,x,w);else{const q=jl(s,x,"vertex"),j=jl(s,w,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+q+`
`+j)}else P!==""?Le("WebGLProgram: Program Info Log:",P):(W===""||F==="")&&(ie=!1);ie&&(R.diagnostics={runnable:k,programLog:P,vertexShader:{log:W,prefix:v},fragmentShader:{log:F,prefix:p}})}s.deleteShader(x),s.deleteShader(w),_=new Lr(s,g),E=rv(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,Z_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=w,this}let _v=0;class vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xv(e),t.set(e,n)),n}}class xv{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}}function Mv(i){return i===xi||i===Dr||i===Nr}function yv(i,e,t,n,s,r){const a=new Qo,o=new vv,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,E,L,R,N,B){const X=R.fog,P=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||W,F),ie=f[_.type];let q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ne=j!==void 0?j.length:0;let we=0;P.morphAttributes.position!==void 0&&(we=1),P.morphAttributes.normal!==void 0&&(we=2),P.morphAttributes.color!==void 0&&(we=3);let Ue,Z,me,Ee;if(ie){const ye=An[ie];Ue=ye.vertexShader,Z=ye.fragmentShader}else{Ue=_.vertexShader,Z=_.fragmentShader;const ye=o.getVertexShaderStage(_),mt=o.getFragmentShaderStage(_);o.update(_,ye,mt),me=ye.id,Ee=mt.id}const Oe=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,pt=N.isBatchedMesh===!0,ke=!!_.map,je=!!_.matcap,it=!!k,te=it&&k.isPMREMTexture===!0,ue=!!_.aoMap,ce=!!_.lightMap,Te=!!_.bumpMap&&_.wireframe===!1,xe=!!_.normalMap,Xe=!!_.displacementMap,Pe=!!_.emissiveMap,st=!!_.metalnessMap,rt=!!_.roughnessMap,ut=_.anisotropy>0,O=_.clearcoat>0,Lt=_.diffuseRoughness>0,nt=_.dispersion>0,vt=_.retroreflectivity>0,ge=_.iridescence>0,Rt=_.sheen>0,ze=_.transmission>0,Ve=ut&&!!_.anisotropyMap,A=O&&!!_.clearcoatMap,y=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,re=Lt&&!!_.diffuseRoughnessMap,ee=ge&&!!_.iridescenceMap,le=ge&&!!_.iridescenceThicknessMap,_e=Rt&&!!_.sheenColorMap,K=Rt&&!!_.sheenRoughnessMap,J=!!_.specularMap,de=!!_.specularColorMap,I=!!_.specularIntensityMap,Q=ze&&!!_.transmissionMap,$=ze&&!!_.thicknessMap,fe=!!_.gradientMap,oe=!!_.alphaMap,he=_.alphaTest>0,De=!!_.alphaHash,Je=!!_.extensions;let ae=Wn;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Be=te?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ke={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Z,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:pt,batchingColor:pt&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:je,envMap:it,envMapMode:it&&k.mapping,envMapPMREM:te,envMapMaxLod:te?Be.length-1:null,envMapSize:te?Be[0].width:null,aoMap:ue,lightMap:ce,bumpMap:Te,normalMap:xe,displacementMap:Xe,emissiveMap:Pe,normalMapObjectSpace:xe&&_.normalMapType===Ud,normalMapTangentSpace:xe&&_.normalMapType===Or,packedNormalMap:xe&&_.normalMapType===Or&&Mv(_.normalMap.format),metalnessMap:st,roughnessMap:rt,anisotropy:ut,anisotropyMap:Ve,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:G,diffuseRoughness:Lt,diffuseRoughnessMap:re,dispersion:nt,retroreflection:vt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:Rt,sheenColorMap:_e,sheenRoughnessMap:K,specularMap:J,specularColorMap:de,specularIntensityMap:I,transmission:ze,transmissionMap:Q,thicknessMap:$,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Ss&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:De,combine:_.combine,mapUv:ke&&d(_.map.channel),aoMapUv:ue&&d(_.aoMap.channel),lightMapUv:ce&&d(_.lightMap.channel),bumpMapUv:Te&&d(_.bumpMap.channel),normalMapUv:xe&&d(_.normalMap.channel),displacementMapUv:Xe&&d(_.displacementMap.channel),emissiveMapUv:Pe&&d(_.emissiveMap.channel),metalnessMapUv:st&&d(_.metalnessMap.channel),roughnessMapUv:rt&&d(_.roughnessMap.channel),anisotropyMapUv:Ve&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(_.sheenRoughnessMap.channel),specularMapUv:J&&d(_.specularMap.channel),specularColorMapUv:de&&d(_.specularColorMap.channel),specularIntensityMapUv:I&&d(_.specularIntensityMap.channel),transmissionMapUv:Q&&d(_.transmissionMap.channel),thicknessMapUv:$&&d(_.thicknessMap.channel),alphaMapUv:oe&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xe||ut),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(ke||oe),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&ct.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function v(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)E.push(L),E.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(E,_),m(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function m(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const E=f[_.type];let L;if(E){const R=An[E];L=mp.clone(R.uniforms)}else L=_.uniforms;return L}function S(_,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new gv(i,E,_,s),c.push(L),h.set(E,L)),L}function x(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:S,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:T}}function Sv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function bv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,v,p,m){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=a(f),M.groupOrder=v,M.renderOrder=f.renderOrder,M.z=p,M.group=m),e++,M}function l(f,d,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);const S=o(f,d,g,v,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(f,d,g,v,p,m){const M=o(f,d,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||bv),n.length>1&&n.sort(d||sh),s.length>1&&s.sort(d||sh)}function u(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Ev(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new He};break;case"SpotLight":t={position:new C,direction:new C,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Av=0;function Rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cv(i){const e=new Tv,t=wv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new tt,a=new tt;function o(c){let h=0,u=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,M=0,S=0,x=0,w=0,T=0,_=0,E=0,L=0,R=0;c.sort(Rv);for(let B=0,X=c.length;B<X;B++){const P=c[B],W=P.color,F=P.intensity,k=P.distance;let ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===xi?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*F,u+=W.g*F,f+=W.b*F;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],F);R++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,ne=t.get(P);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=ie;const we=j.getViewportCount();for(let Ue=0;Ue<we;Ue++)n.sunShadowMatrix[v+Ue]=j.getMatrix(Ue),n.sunShadowCascade[v+Ue]=j._cascadeData[Ue];v+=we,g++}n.sun[d]=q,d++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,ne=t.get(P);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(W).multiplyScalar(F),q.distance=k,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;const j=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,j.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[M]=j.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,n.spotShadow[M]=ne,n.spotShadowMap[M]=ie,_++}M++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(W).multiplyScalar(F),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=q,S++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const j=P.shadow,ne=t.get(P);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=ie,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=q,m++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(F),q.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[x]=q,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==S||N.hemiLength!==x||N.numSunShadows!==g||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==E||N.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=S,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.sunLength=d,N.directionalLength=p,N.pointLength=m,N.spotLength=M,N.rectAreaLength=S,N.hemiLength=x,N.numSunShadows=g,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=E,N.numLightProbes=R,n.version=Av++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){const x=c[M];if(x.isSunLight){const w=n.sun[u];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),u++}else if(x.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(x.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const w=n.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function ah(i){const e=new Cv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Iv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ah(i),e.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Nv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],oh=new tt,gs=new C,Oa=new C;function Uv(i,e,t){let n=new Ps;const s=new se,r=new se,a=new St,o=new yp,l=new Sp,c={},h=t.maxTextureSize,u={[ci]:en,[en]:ci,[hn]:hn},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let m=this.type;this.render=function(T,_,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===hd&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);const L=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Xi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=m!==this.type;X&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=T.length;P<W;P++){const F=T[P],k=F.shadow;if(k===void 0){Le("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ie=k.getFrameExtents();s.multiply(ie),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,k.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===_s){if(F.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Rn(s.x,s.y,{format:xi,type:In,minFilter:nn,magFilter:nn,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new ji(s.x,s.y,pn),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=li,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt}else F.isPointLight?(k.map=new gc(s.x),k.map.depthTexture=new ru(s.x,Cn)):(k.map=new Rn(s.x,s.y),k.map.depthTexture=new ji(s.x,s.y,Cn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=li,this.type===Ar?(k.map.depthTexture.compareFunction=q?Vh:Gh,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,E);const ne=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:E.layers;for(let we=0;we<j;we++){const Ue=k.getCamera(we);if(F.isPointLight){const Z=k.camera,me=k.matrix,Ee=F.distance||Z.far;Ee!==Z.far&&(Z.far=Ee,Z.updateProjectionMatrix()),gs.setFromMatrixPosition(F.matrixWorld),Z.position.copy(gs),Oa.copy(Z.position),Oa.add(Dv[we]),Z.up.copy(Nv[we]),Z.lookAt(Oa),Z.updateMatrixWorld(),me.makeTranslation(-gs.x,-gs.y,-gs.z),oh.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(oh,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,we),i.clear();else{we===0&&(i.setRenderTarget(k.map),i.clear());const Z=k.getViewport(we);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),B.viewport(a)}n=k.getFrustum(we),x(_,E,Ue,F,ne,this.type)}k.isPointLightShadow!==!0&&this.type===_s&&M(k,E),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,R,N)};function M(T,_){const E=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Rn(s.x,s.y,{format:xi,type:In}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,d,v,null)}function S(T,_,E,L){let R=null;const N=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const B=R.uuid,X=_.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let W=P[X];W===void 0&&(W=R.clone(),P[X]=W,_.addEventListener("dispose",w)),R=W}if(R.visible=_.visible,R.wireframe=_.wireframe,L===_s?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=i.properties.get(R);B.light=E}return R}function x(T,_,E,L,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===_s)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const P=e.update(T),W=T.material;if(Array.isArray(W)){const F=P.groups;for(let k=0,ie=F.length;k<ie;k++){const q=F[k],j=W[q.materialIndex];if(j&&j.visible){const ne=S(T,j,L,N);T.onBeforeShadow(i,T,_,E,P,ne,q),i.renderBufferDirect(E,null,P,ne,T,q),T.onAfterShadow(i,T,_,E,P,ne,q)}}}else if(W.visible){const F=S(T,W,L,N);T.onBeforeShadow(i,T,_,E,P,F,null),i.renderBufferDirect(E,null,P,F,T,null),T.onAfterShadow(i,T,_,E,P,F,null)}}const X=T.children;for(let P=0,W=X.length;P<W;P++)x(X[P],_,E,L,R,N)}function w(T){T.target.removeEventListener("dispose",w);for(const E in c){const L=c[E],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function Ov(i,e){function t(){let I=!1;const Q=new St;let $=null;const fe=new St(0,0,0,0);return{setMask:function(oe){$!==oe&&!I&&(i.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){I=oe},setClear:function(oe,he,De,Je,ae){ae===!0&&(oe*=Je,he*=Je,De*=Je),Q.set(oe,he,De,Je),fe.equals(Q)===!1&&(i.clearColor(oe,he,De,Je),fe.copy(Q))},reset:function(){I=!1,$=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,$=null,fe=null,oe=null;return{setReversed:function(he){if(Q!==he){const De=e.get("EXT_clip_control");he?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Q=he;const Je=oe;oe=null,this.setClear(Je)}},getReversed:function(){return Q},setTest:function(he){he?Me(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(he){$!==he&&!I&&(i.depthMask(he),$=he)},setFunc:function(he){if(Q&&(he=qd[he]),fe!==he){switch(he){case Ga:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=he}},setLocked:function(he){I=he},setClear:function(he){oe!==he&&(oe=he,Q&&(he=1-he),i.clearDepth(he))},reset:function(){I=!1,$=null,fe=null,oe=null,Q=!1}}}function s(){let I=!1,Q=null,$=null,fe=null,oe=null,he=null,De=null,Je=null,ae=null;return{setTest:function(Be){I||(Be?Me(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Be){Q!==Be&&!I&&(i.stencilMask(Be),Q=Be)},setFunc:function(Be,Ke,ye){($!==Be||fe!==Ke||oe!==ye)&&(i.stencilFunc(Be,Ke,ye),$=Be,fe=Ke,oe=ye)},setOp:function(Be,Ke,ye){(he!==Be||De!==Ke||Je!==ye)&&(i.stencilOp(Be,Ke,ye),he=Be,De=Ke,Je=ye)},setLocked:function(Be){I=Be},setClear:function(Be){ae!==Be&&(i.clearStencil(Be),ae=Be)},reset:function(){I=!1,Q=null,$=null,fe=null,oe=null,he=null,De=null,Je=null,ae=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,g=[],v=null,p=!1,m=null,M=null,S=null,x=null,w=null,T=null,_=null,E=new He(0,0,0),L=0,R=!1,N=null,B=null,X=null,P=null,W=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ie=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=ie>=2);let j=null,ne={};const we=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Z=new St().fromArray(we),me=new St().fromArray(Ue);function Ee(I,Q,$,fe){const oe=new Uint8Array(4),he=i.createTexture();i.bindTexture(I,he),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<$;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Q+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return he}const Oe={};Oe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),a.setFunc(ws),Te(!1),xe(Dc),Me(i.CULL_FACE),ue(Xi);function Me(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ne(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function pt(I,Q){return f[I]!==Q?(i.bindFramebuffer(I,Q),f[I]=Q,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function ke(I,Q){let $=g,fe=!1;if(I){$=d.get(Q),$===void 0&&($=[],d.set(Q,$));const oe=I.textures;if($.length!==oe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let he=0,De=oe.length;he<De;he++)$[he]=i.COLOR_ATTACHMENT0+he;$.length=oe.length,fe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,fe=!0);fe&&i.drawBuffers($)}function je(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const it={[Hi]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};it[pd]=i.MIN,it[md]=i.MAX;const te={[gd]:i.ZERO,[_d]:i.ONE,[vd]:i.SRC_COLOR,[Ah]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(I,Q,$,fe,oe,he,De,Je,ae,Be){if(I===Xi){p===!0&&(Ne(i.BLEND),p=!1);return}if(p===!1&&(Me(i.BLEND),p=!0),I!==ud){if(I!==m||Be!==R){if((M!==Hi||w!==Hi)&&(i.blendEquation(i.FUNC_ADD),M=Hi,w=Hi),Be)switch(I){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",I);break}S=null,x=null,T=null,_=null,E.set(0,0,0),L=0,m=I,R=Be}return}oe=oe||Q,he=he||$,De=De||fe,(Q!==M||oe!==w)&&(i.blendEquationSeparate(it[Q],it[oe]),M=Q,w=oe),($!==S||fe!==x||he!==T||De!==_)&&(i.blendFuncSeparate(te[$],te[fe],te[he],te[De]),S=$,x=fe,T=he,_=De),(Je.equals(E)===!1||ae!==L)&&(i.blendColor(Je.r,Je.g,Je.b,ae),E.copy(Je),L=ae),m=I,R=!1}function ce(I,Q){I.side===hn?Ne(i.CULL_FACE):Me(i.CULL_FACE);let $=I.side===en;Q&&($=!$),Te($),I.blending===Ss&&I.transparent===!1?ue(Xi):ue(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function xe(I){I!==cd?(Me(i.CULL_FACE),I!==B&&(I===Dc?i.cullFace(i.BACK):I===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),B=I}function Xe(I){I!==X&&(k&&i.lineWidth(I),X=I)}function Pe(I,Q,$){I?(Me(i.POLYGON_OFFSET_FILL),(P!==Q||W!==$)&&(P=Q,W=$,a.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):Ne(i.POLYGON_OFFSET_FILL)}function st(I){I?Me(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function rt(I){I===void 0&&(I=i.TEXTURE0+F-1),j!==I&&(i.activeTexture(I),j=I)}function ut(I,Q,$){$===void 0&&(j===null?$=i.TEXTURE0+F-1:$=j);let fe=ne[$];fe===void 0&&(fe={type:void 0,texture:void 0},ne[$]=fe),(fe.type!==I||fe.texture!==Q)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(I,Q||Oe[I]),fe.type=I,fe.texture=Q)}function O(){const I=ne[j];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function vt(){try{i.texSubImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function ge(){try{i.texSubImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function Ve(){try{i.texStorage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function y(){try{i.texImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function G(){try{i.texImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function re(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function ee(I,Q){u[I]!==Q&&(i.pixelStorei(I,Q),u[I]=Q)}function le(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function _e(I){me.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),me.copy(I))}function K(I,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let fe=$.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,fe,fe),$.set(I,fe))}function J(I,Q,$){const oe=c.get(Q).get(I);l[oe]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,$),l[oe]=$)}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,ne={},f={},l={},d=new WeakMap,g=[],v=null,p=!1,m=null,M=null,S=null,x=null,w=null,T=null,_=null,E=new He(0,0,0),L=0,R=!1,N=null,B=null,X=null,P=null,W=null,Z.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:Ne,bindFramebuffer:pt,drawBuffers:ke,useProgram:je,setBlending:ue,setMaterial:ce,setFlipSided:Te,setCullFace:xe,setLineWidth:Xe,setPolygonOffset:Pe,setScissorTest:st,activeTexture:rt,bindTexture:ut,unbindTexture:O,compressedTexImage2D:Lt,compressedTexImage3D:nt,texImage2D:y,texImage3D:G,pixelStorei:ee,getParameter:re,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Ve,texStorage3D:A,texSubImage2D:vt,texSubImage3D:ge,compressedTexSubImage2D:Rt,compressedTexSubImage3D:ze,scissor:le,viewport:_e,reset:de}}function Fv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set;let f;const d=new WeakMap,g=new Set,v=new FinalizationRegistry(A=>g.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return p?new OffscreenCanvas(A,y):Is("canvas")}function M(A,y,G){let re=1;const ee=Ve(A);if((ee.width>G||ee.height>G)&&(re=G/Math.max(ee.width,ee.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const le=Math.floor(re*ee.width),_e=Math.floor(re*ee.height);f===void 0&&(f=m(le,_e));const K=y?m(le,_e):f;return K.width=le,K.height=_e,K.getContext("2d").drawImage(A,0,0,le,_e),Le("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+_e+")."),K}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function S(A){return A.generateMipmaps}function x(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,y,G,re,ee,le=!1){if(A!==null){if(i[A]!==void 0)return i[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e;re&&(_e=e.get("EXT_texture_norm16"),_e||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8),G===i.UNSIGNED_SHORT&&_e&&(K=_e.R16_EXT),G===i.SHORT&&_e&&(K=_e.R16_SNORM_EXT)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),y===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8),G===i.UNSIGNED_SHORT&&_e&&(K=_e.RG16_EXT),G===i.SHORT&&_e&&(K=_e.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_SHORT&&_e&&(K=_e.RGB16_EXT),G===i.SHORT&&_e&&(K=_e.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){const J=le?Br:ct.getTransfer(ee);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=J===gt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&_e&&(K=_e.RGBA16_EXT),G===i.SHORT&&_e&&(K=_e.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,y){let G;return A?y===null||y===Cn||y===Ji?G=i.DEPTH24_STENCIL8:y===pn?G=i.DEPTH32F_STENCIL8:y===Rs&&(G=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Cn||y===Ji?G=i.DEPTH_COMPONENT24:y===pn?G=i.DEPTH_COMPONENT32F:y===Rs&&(G=i.DEPTH_COMPONENT16),G}function E(A,y){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){const y=new WeakRef(A);n.get(A).__ref=y,g.add(y),v.register(A,y,y)}function R(A){const y=n.get(A).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function N(A){X(A.target)}function B(A){P(A.target)}function X(A){A.removeEventListener("dispose",N),R(A),F(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function P(A){A.removeEventListener("dispose",B),R(A),ie(A)}function W(){for(const A of g){const y=A.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):X(y))}g.clear(),u.clear()}function F(A){const y=n.get(A);if(y.__webglInit===void 0)return;const G=A.source,re=d.get(G);if(re){const ee=re[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&k(A),Object.keys(re).length===0&&d.delete(G)}n.remove(A)}function k(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const G=A.source,re=d.get(G);delete re[y.__cacheKey],a.memory.textures--}function ie(A){const y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&X(G),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let le=0;le<y.__webglFramebuffer[ee].length;le++)i.deleteFramebuffer(y.__webglFramebuffer[ee][le]);else i.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)i.deleteFramebuffer(y.__webglFramebuffer[ee]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const re=A.textures;for(let ee=0,le=re.length;ee<le;ee++){const _e=n.get(re[ee]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(re[ee])}n.remove(A)}let q=0;function j(){q=0}function ne(){return q}function we(A){q=A}function Ue(){const A=q;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function Z(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function me(A,y){const G=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const re=A.image;if(re===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,A,y);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function Ee(A,y){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ce(G,A,y);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Oe(A,y){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ce(G,A,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function Me(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){Te(G,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const Ne={[Za]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},pt={[Xt]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ke={[Fd]:i.NEVER,[Wh]:i.ALWAYS,[Bd]:i.LESS,[Gh]:i.LEQUAL,[zd]:i.EQUAL,[Vh]:i.GEQUAL,[kd]:i.GREATER,[Hd]:i.NOTEQUAL};function je(A,y){if(y.type===pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===na||y.magFilter===Xs||y.magFilter===ri||y.minFilter===nn||y.minFilter===na||y.minFilter===Xs||y.minFilter===ri)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ne[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ne[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ne[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==Xs&&y.minFilter!==ri||y.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function it(A,y){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",N),L(y));const re=y.source;let ee=d.get(re);ee===void 0&&(ee={},d.set(re,ee));const le=Z(y);if(le!==A.__cacheKey){ee[le]===void 0&&(ee[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[le].usedTimes++;const _e=ee[A.__cacheKey];_e!==void 0&&(ee[A.__cacheKey].usedTimes--,_e.usedTimes===0&&k(y)),A.__cacheKey=le,A.__webglTexture=ee[le].texture}return G}function te(A,y,G){return Math.floor(Math.floor(A/G)/y)}function ue(A,y,G,re){const le=A.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,re,y.data);else{le.sort((I,Q)=>I.start-Q.start);let _e=0;for(let I=1;I<le.length;I++){const Q=le[_e],$=le[I],fe=Q.start+Q.count,oe=te($.start,y.width,4),he=te(Q.start,y.width,4);$.start<=fe+1&&oe===he&&te($.start+$.count-1,y.width,4)===oe?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++_e,le[_e]=$)}le.length=_e+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let I=0,Q=le.length;I<Q;I++){const $=le[I],fe=Math.floor($.start/4),oe=Math.ceil($.count/4),he=fe%y.width,De=Math.floor(fe/y.width),Je=oe,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,he,De,Je,ae,G,re,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ce(A,y,G){let re=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=i.TEXTURE_3D);const ee=it(A,y),le=y.source;t.bindTexture(re,A.__webglTexture,i.TEXTURE0+G);const _e=n.get(le);if(le.version!==_e.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ae=ct.getPrimaries(ct.workingColorSpace),Be=y.colorSpace===si?null:ct.getPrimaries(y.colorSpace),Ke=y.colorSpace===si||ae===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let J=M(y.image,!1,s.maxTextureSize);J=ze(y,J);const de=r.convert(y.format,y.colorSpace),I=r.convert(y.type);let Q=T(y.internalFormat,de,I,y.normalized,y.colorSpace,y.isVideoTexture);je(re,y);let $;const fe=y.mipmaps,oe=y.isVideoTexture!==!0,he=_e.__version===void 0||ee===!0,De=le.dataReady,Je=E(y,J);if(y.isDepthTexture)Q=_(y.format===ai,y.type),he&&(oe?t.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,de,I,null));else if(y.isDataTexture)if(fe.length>0){oe&&he&&t.texStorage2D(i.TEXTURE_2D,Je,Q,fe[0].width,fe[0].height);for(let ae=0,Be=fe.length;ae<Be;ae++)$=fe[ae],oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,de,I,$.data):t.texImage2D(i.TEXTURE_2D,ae,Q,$.width,$.height,0,de,I,$.data);y.generateMipmaps=!1}else oe?(he&&t.texStorage2D(i.TEXTURE_2D,Je,Q,J.width,J.height),De&&ue(y,J,de,I)):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,de,I,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){oe&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,Q,fe[0].width,fe[0].height,J.depth);for(let ae=0,Be=fe.length;ae<Be;ae++)if($=fe[ae],y.format!==Mn)if(de!==null)if(oe){if(De)if(y.layerUpdates.size>0){const Ke=kl($.width,$.height,y.format,y.type);for(const ye of y.layerUpdates){const mt=$.data.subarray(ye*Ke/$.data.BYTES_PER_ELEMENT,(ye+1)*Ke/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ye,$.width,$.height,1,de,mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,J.depth,de,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Q,$.width,$.height,J.depth,0,$.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,J.depth,de,I,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Q,$.width,$.height,J.depth,0,de,I,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(i.TEXTURE_2D,Je,Q,fe[0].width,fe[0].height);for(let ae=0,Be=fe.length;ae<Be;ae++)$=fe[ae],y.format!==Mn?de!==null?oe?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,de,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Q,$.width,$.height,0,$.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,de,I,$.data):t.texImage2D(i.TEXTURE_2D,ae,Q,$.width,$.height,0,de,I,$.data)}else if(y.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,Q,J.width,J.height,J.depth),De)if(y.layerUpdates.size>0){const ae=kl(J.width,J.height,y.format,y.type);for(const Be of y.layerUpdates){const Ke=J.data.subarray(Be*ae/J.data.BYTES_PER_ELEMENT,(Be+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,J.width,J.height,1,de,I,Ke)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,I,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,de,I,J.data);else if(y.isData3DTexture)oe?(he&&t.texStorage3D(i.TEXTURE_3D,Je,Q,J.width,J.height,J.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,I,J.data)):t.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,de,I,J.data);else if(y.isFramebufferTexture){if(he)if(oe)t.texStorage2D(i.TEXTURE_2D,Je,Q,J.width,J.height);else{let ae=J.width,Be=J.height;for(let Ke=0;Ke<Je;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,Q,ae,Be,0,de,I,null),ae>>=1,Be>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),J.parentNode!==ae){ae.appendChild(J),u.add(y),ae.onpaint=Be=>{const Ke=Be.changedElements;for(const ye of u)Ke.includes(ye.image)&&(ye.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Ke=i.RGBA,ye=i.RGBA,mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,ye,mt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&he){const ae=Ve(fe[0]);t.texStorage2D(i.TEXTURE_2D,Je,Q,ae.width,ae.height)}for(let ae=0,Be=fe.length;ae<Be;ae++)$=fe[ae],oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,de,I,$):t.texImage2D(i.TEXTURE_2D,ae,Q,de,I,$);y.generateMipmaps=!1}else if(oe){if(he){const ae=Ve(J);t.texStorage2D(i.TEXTURE_2D,Je,Q,ae.width,ae.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,I,J)}else t.texImage2D(i.TEXTURE_2D,0,Q,de,I,J);S(y)&&y.mipmapsAutoUpdate===!0&&x(re),_e.__version=le.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Te(A,y,G){if(y.image.length!==6)return;const re=it(A,y),ee=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const le=n.get(ee);if(ee.version!==le.__version||re===!0){t.activeTexture(i.TEXTURE0+G);const _e=ct.getPrimaries(ct.workingColorSpace),K=y.colorSpace===si?null:ct.getPrimaries(y.colorSpace),J=y.colorSpace===si||_e===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let ye=0;ye<6;ye++)!de&&!I?Q[ye]=M(y.image[ye],!0,s.maxCubemapSize):Q[ye]=I?y.image[ye].image:y.image[ye],Q[ye]=ze(y,Q[ye]);const $=Q[0],fe=r.convert(y.format,y.colorSpace),oe=r.convert(y.type);let he=T(y.internalFormat,fe,oe,y.normalized,y.colorSpace);const De=y.isVideoTexture!==!0,Je=le.__version===void 0||re===!0,ae=ee.dataReady;let Be=E(y,$);je(i.TEXTURE_CUBE_MAP,y);let Ke;if(y.isDepthTexture){if(he=_(y.format===ai,y.type),Je)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,$.width,$.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,$.width,$.height,0,fe,oe,null)}else if(de){De&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,he,$.width,$.height);for(let ye=0;ye<6;ye++){Ke=Q[ye].mipmaps;for(let mt=0;mt<Ke.length;mt++){const zt=Ke[mt];y.format!==Mn?fe!==null?De?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,0,0,zt.width,zt.height,fe,zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,he,zt.width,zt.height,0,zt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,0,0,zt.width,zt.height,fe,oe,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,he,zt.width,zt.height,0,fe,oe,zt.data)}}}else{if(Ke=y.mipmaps,De&&Je){Ke.length>0&&Be++;const ye=Ve(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,he,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(I){De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Q[ye].width,Q[ye].height,fe,oe,Q[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,Q[ye].width,Q[ye].height,0,fe,oe,Q[ye].data);for(let mt=0;mt<Ke.length;mt++){const Kn=Ke[mt].image[ye].image;De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,0,0,Kn.width,Kn.height,fe,oe,Kn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,he,Kn.width,Kn.height,0,fe,oe,Kn.data)}}else{De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe,oe,Q[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,fe,oe,Q[ye]);for(let mt=0;mt<Ke.length;mt++){const zt=Ke[mt];De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,0,0,fe,oe,zt.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,he,fe,oe,zt.image[ye])}}}S(y)&&y.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),le.__version=ee.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function xe(A,y,G,re,ee,le){const _e=r.convert(G.format,G.colorSpace),K=r.convert(G.type),J=T(G.internalFormat,_e,K,G.normalized,G.colorSpace),de=n.get(y),I=n.get(G);if(I.__renderTarget=y,!de.__hasExternalTextures){const Q=Math.max(1,y.width>>le),$=Math.max(1,y.height>>le);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,le,J,Q,$,y.depth,0,_e,K,null):t.texImage2D(ee,le,J,Q,$,0,_e,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ge(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ee,I.__webglTexture,0,vt(y)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ee,I.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(A,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const re=y.depthTexture,ee=re&&re.isDepthTexture?re.type:null,le=_(y.stencilBuffer,ee),_e=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(y),le,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(y),le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,A)}else{const re=y.textures;for(let ee=0;ee<re.length;ee++){const le=re[ee],_e=r.convert(le.format,le.colorSpace),K=r.convert(le.type),J=T(le.internalFormat,_e,K,le.normalized,le.colorSpace);ge(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(y),J,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(A,y,G){const re=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(y.depthTexture);ee.__renderTarget=y;const le=re?y.depthTexture.image[0]:y.depthTexture.image;(!ee.__webglTexture||le.width!==y.width||le.height!==y.height)&&(le.width=y.width,le.height=y.height,y.depthTexture.needsUpdate=!0),re?Me(y.depthTexture,0):me(y.depthTexture,0);const _e=ee.__webglTexture,K=vt(y),J=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,de=y.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===li)ge(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,_e,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,_e,0);else if(y.depthTexture.format===ai)ge(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,_e,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){const y=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),re){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,re.removeEventListener("dispose",ee)};re.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=re}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let re=0;re<6;re++)Pe(y.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Pe(y.__webglFramebuffer[0],A,0):Pe(y.__webglFramebuffer,A,0);else if(G){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]===void 0)y.__webglDepthbuffer[re]=i.createRenderbuffer(),Xe(y.__webglDepthbuffer[re],A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Xe(y.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,y,G){const re=n.get(A);y!==void 0&&xe(re.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&st(A)}function ut(A){const y=A.texture,G=n.get(A),re=n.get(y);A.addEventListener("dispose",B),L(A);const ee=A.textures,le=A.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=y.version,a.memory.textures++),le){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let J=0;J<y.mipmaps.length;J++)G.__webglFramebuffer[K][J]=i.createFramebuffer()}else G.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)G.__webglFramebuffer[K]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(_e)for(let K=0,J=ee.length;K<J;K++){const de=n.get(ee[K]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){const J=ee[K];G.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const de=r.convert(J.format,J.colorSpace),I=r.convert(J.type),Q=T(J.internalFormat,de,I,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),$=vt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,G.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),je(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)xe(G.__webglFramebuffer[K][J],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else xe(G.__webglFramebuffer[K],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(y)?x(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let K=0,J=ee.length;K<J;K++){const de=ee[K],I=n.get(de);let Q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),je(Q,de),xe(G.__webglFramebuffer,A,de,i.COLOR_ATTACHMENT0+K,Q,0),S(de)&&x(Q)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,re.__webglTexture),je(K,y),y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)xe(G.__webglFramebuffer[J],A,y,i.COLOR_ATTACHMENT0,K,J);else xe(G.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,K,0);S(y)?x(K):y.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&st(A)}function O(A){const y=A.textures;for(let G=0,re=y.length;G<re;G++){const ee=y[G];if(S(ee)&&ee.mipmapsAutoUpdate===!0){const le=w(A),_e=n.get(ee).__webglTexture;t.bindTexture(le,_e),x(le),t.unbindTexture()}}}const Lt=[];function nt(A){if(A.samples>0){if(ge(A)===!1){const y=A.textures,G=A.width,re=A.height;let ee=i.COLOR_BUFFER_BIT;const le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(A),K=y.length>1;if(K)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<y.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const I=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,G,re,0,0,G,re,ee,i.NEAREST),l===!0&&(Lt.length=0,Lt.push(i.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Lt.push(le),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const I=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(A){return Math.min(s.maxSamples,A.samples)}function ge(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(A){const y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function ze(A,y){const G=A.colorSpace,re=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Fr&&G!==si&&(ct.getTransfer(G)===gt?(re!==Mn||ee!==un)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",G)),y}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=j,this.getTextureUnits=ne,this.setTextureUnits=we,this.setTexture2D=me,this.setTexture2DArray=Ee,this.setTexture3D=Oe,this.setTextureCube=Me,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge,this.dispose=W}function Bv(i,e){function t(n,s=si){let r;const a=ct.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return i.BYTE;if(n===Fh)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===Mn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===Wo)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Ir||n===Pr)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===ja||n===eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===no||n===io||n===so||n===ro||n===Dr||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to||n===no)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===so)return r.COMPRESSED_R11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return r.COMPRESSED_RG11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===bo||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===wo||n===Nr||n===Ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`;class Hv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new au(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yi({vertexShader:zv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gv extends hi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Hv,m={},M=t.getContextAttributes();let S=null,x=null;const w=[],T=[],_=new se;let E=null,L=null;const R=new cn;R.viewport=new St;const N=new cn;N.viewport=new St;const B=[R,N],X=new Vp;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=w[Z];return me===void 0&&(me=new ha,w[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=w[Z];return me===void 0&&(me=new ha,w[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=w[Z];return me===void 0&&(me=new ha,w[Z]=me),me.getHandSpace()};function F(Z){const me=T.indexOf(Z.inputSource);if(me===-1)return;const Ee=w[me];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,c||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<w.length;Z++){const me=T[Z];me!==null&&(T[Z]=null,w[Z].disconnect(me))}P=null,W=null,p.reset();for(const Z in m)delete m[Z];if(e.setRenderTarget(S),d=null,f=null,u=null,s=null,x=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),L!==null){const Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Oe=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?ai:li,Oe=M.stencil?Ji:Cn);const Ne={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Rn(f.textureWidth,f.textureHeight,{format:Mn,type:un,depthTexture:new ji(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(Z){for(let me=0;me<Z.removed.length;me++){const Ee=Z.removed[me],Oe=T.indexOf(Ee);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(Ee))}for(let me=0;me<Z.added.length;me++){const Ee=Z.added[me];let Oe=T.indexOf(Ee);if(Oe===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=T.length){T.push(Ee),Oe=Ne;break}else if(T[Ne]===null){T[Ne]=Ee,Oe=Ne;break}if(Oe===-1)break}const Me=w[Oe];Me&&Me.connect(Ee)}}function q(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let me=Z.near,Ee=Z.far;p.texture!==null&&(p.depthNear>0&&(me=p.depthNear),p.depthFar>0&&(Ee=p.depthFar)),X.near=N.near=R.near=me,X.far=N.far=R.far=Ee,(P!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,W=X.far),X.layers.mask=Z.layers.mask|6,R.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;const Oe=Z.parent,Me=X.cameras;q(X,Oe);for(let Ne=0;Ne<Me.length;Ne++)q(Me[Ne],Oe);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,X,Oe)};function j(Z,me,Ee){Ee===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(Z){return m[Z]};let ne=null;function we(Z,me){if(h=me.getViewerPose(c||a),g=me,h!==null){const Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Oe=!1;Ee.length!==X.cameras.length&&(X.cameras.length=0,Oe=!0);for(let ke=0;ke<Ee.length;ke++){const je=Ee[ke];let it=null;if(d!==null)it=d.getViewport(je);else{const ue=u.getViewSubImage(f,je);it=ue.viewport,ke===0&&(e.setRenderTargetTextures(x,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(x))}let te=B[ke];te===void 0&&(te=new cn,te.layers.enable(ke),te.viewport=new St,B[ke]=te),te.matrix.fromArray(je.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(je.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(it.x,it.y,it.width,it.height),ke===0&&(X.matrix.copy(te.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Oe===!0&&X.cameras.push(te)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const ke=u.getDepthInformation(Ee[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<Ee.length;ke++){const je=Ee[ke].camera;if(je){let it=m[je];it||(it=new au,m[je]=it);const te=u.getCameraImage(je);it.sourceTexture=te}}}}for(let Ee=0;Ee<w.length;Ee++){const Oe=T[Ee],Me=w[Ee];Oe!==null&&Me!==void 0&&Me.update(Oe,me,c||a)}ne&&ne(Z,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}const Ue=new bu;Ue.setAnimationLoop(we),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}const Vv=new tt,Du=new Ye;Du.set(-1,0,0,0,1,0,0,0,1);function Wv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_u(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,S,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),S=M.envMap,x=M.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Du),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xv(i,e,t,n){let s={},r={};function a(M,S){const x=S.program;n.uniformBlockBinding(M,x,s[M.id])}function o(M,S){let x=s[M.id];x===void 0&&(g(M),x=l(M),s[M.id]=x,M.addEventListener("dispose",p));const w=S.program;n.updateUBOMapping(M,w);const T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const S=i.createBuffer(),x=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,x,w),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(M){const S=s[M.id],x=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,_=x.length;T<_;T++){const E=x[T];if(Array.isArray(E))for(let L=0,R=E.length;L<R;L++)h(E[L],T,L,w);else h(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,S,x,w){if(f(M,S,x,w)===!0){const T=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let L=0;L<_.length;L++){const R=_[L],N=v(R,!0);u(R,M.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function u(M,S,x){typeof M=="number"||typeof M=="boolean"?S[x]=M:M.isMatrix3?(S[x]=M.elements[0],S[x+1]=M.elements[1],S[x+2]=M.elements[2],S[x+3]=0,S[x+4]=M.elements[3],S[x+5]=M.elements[4],S[x+6]=M.elements[5],S[x+7]=0,S[x+8]=M.elements[6],S[x+9]=M.elements[7],S[x+10]=M.elements[8],S[x+11]=0):ArrayBuffer.isView(M)?S.set(M.subarray(0,S.length-x),x):M.toArray(S,x)}function f(M,S,x,w){const T=M.value,_=S+"_"+x;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);const E=w[_];let L=!1;for(let R=0;R<T.length;R++)d(T[R],E,R)===!0&&(L=!0);return L}return d(T,w,_)}function d(M,S,x){if(S[x]===void 0)return typeof M=="number"||typeof M=="boolean"?S[x]=M:ArrayBuffer.isView(M)?S[x]=M.slice():S[x]=M.clone(),!0;{const w=S[x];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return S[x]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){const S=M.uniforms;let x=0;const w=16;for(let _=0,E=S.length;_<E;_++){const L=Array.isArray(S[_])?S[_]:[S[_]];for(let R=0,N=L.length;R<N;R++){const B=L[R],X=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(S[_])||Array.isArray(B.value);let W=x;for(let k=0,ie=X.length;k<ie;k++){const q=X[k],j=v(q,P),ne=x%w,we=ne%j.boundary,Ue=ne+we;x+=we,Ue!==0&&w-Ue<j.storage&&(x+=w-Ue),k===0&&(W=x),x+=j.storage}const F=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new F((x-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}const T=x%w;return T>0&&(x+=w-T),M.__size=x,M.__cache={},this}function v(M,S){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=16,x.storage=48):M.isMatrix4?(x.boundary=16,x.storage=64):M.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(x.boundary=16,x.storage=M.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",M),S===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(M){const S=M.target;S.removeEventListener("dispose",p),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}const qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function Yv(){return wn===null&&(wn=new jo(qv,16,16,xi,In),wn.name="DFG_LUT",wn.minFilter=nn,wn.magFilter=nn,wn.wrapS=Gn,wn.wrapT=Gn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class $v{constructor(e={}){const{canvas:t=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=un}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=d,p=new Set([Yo,qo,Xo]),m=new Set([un,Cn,Rs,Ji,Go,Vo]),M=new Uint32Array(4),S=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const _=[],E=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,B=null,X=null,P=null,W=null;this._outputColorSpace=on;let F=0,k=0,ie=null,q=-1,j=null;const ne=new St,we=new St;let Ue=null;const Z=new He(0);let me=0,Ee=t.width,Oe=t.height,Me=1,Ne=null,pt=null;const ke=new St(0,0,Ee,Oe),je=new St(0,0,Ee,Oe);let it=!1;const te=new Ps,ue=new ec;let ce=!1,Te=!1;const xe=new tt,Xe=new C,Pe=new St,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function ut(){return ie===null?Me:1}let O=n;function Lt(b,D){return t.getContext(b,D)}let nt,vt,ge,Rt,ze,Ve,A,y,G,re,ee,le,_e,K,J,de,I,Q,$,fe,oe,he,De;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",ye,!1),O===null){const D="webgl2";if(O=Lt(D,b),O===null)throw Lt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(b){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ge("WebGLRenderer: "+b.message),b}function Je(){nt=new Jg(O),nt.init(),oe=new Bv(O,nt),vt=new kg(O,nt,e,oe),ge=new Ov(O,nt),vt.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),X=O.createFramebuffer(),P=O.createFramebuffer(),W=O.createFramebuffer(),Rt=new e_(O),ze=new Sv,Ve=new Fv(O,nt,ge,ze,vt,oe,Rt),A=new Kg(R),y=new nm(O),he=new Bg(O,y),G=new Qg(O,y,Rt,he),re=new n_(O,G,y,he,Rt),Q=new t_(O,vt,Ve),J=new Hg(ze),ee=new yv(R,A,nt,vt,he,J),le=new Wv(R,ze),_e=new Ev,K=new Iv(nt),I=new Fg(R,A,ge,re,g,l),de=new Uv(R,re,vt),De=new Xv(O,Rt,vt,ge),$=new zg(O,nt,Rt),fe=new jg(O,nt,Rt),Rt.programs=ee.programs,R.capabilities=vt,R.extensions=nt,R.properties=ze,R.renderLists=_e,R.shadowMap=de,R.state=ge,R.info=Rt}v!==un&&(L=new s_(v,t.width,t.height,o,s,r));const ae=new Gv(R,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(Ee,Oe,!1))},this.getSize=function(b){return b.set(Ee,Oe)},this.setSize=function(b,D,Y=!0){if(ae.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Oe=D,t.width=Math.floor(b*Me),t.height=Math.floor(D*Me),Y===!0&&(t.style.width=b+"px",t.style.height=D+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Ee*Me,Oe*Me).floor()},this.setDrawingBufferSize=function(b,D,Y){Ee=b,Oe=D,Me=Y,t.width=Math.floor(b*Y),t.height=Math.floor(D*Y),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(v===un){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(ke)},this.setViewport=function(b,D,Y,H){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,D,Y,H),ge.viewport(ne.copy(ke).multiplyScalar(ut()).round())},this.getScissor=function(b){return b.copy(je)},this.setScissor=function(b,D,Y,H){b.isVector4?je.set(b.x,b.y,b.z,b.w):je.set(b,D,Y,H),ge.scissor(we.copy(je).multiplyScalar(ut()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(b){ge.setScissorTest(it=b)},this.setOpaqueSort=function(b){Ne=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,Y=!0){let H=0;if(b){let V=!1;if(ie!==null){const ve=ie.texture.format;V=p.has(ve)}if(V){const ve=ie.texture.type,Ae=m.has(ve),pe=I.getClearColor(),be=I.getClearAlpha(),Ie=pe.r,We=pe.g,at=pe.b;Ae?(M[0]=Ie,M[1]=We,M[2]=at,M[3]=be,O.clearBufferuiv(O.COLOR,0,M)):(S[0]=Ie,S[1]=We,S[2]=at,S[3]=be,O.clearBufferiv(O.COLOR,0,S))}else H|=O.COLOR_BUFFER_BIT}D&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),I.dispose(),_e.dispose(),K.dispose(),Ve.dispose(),ze.dispose(),A.dispose(),re.dispose(),G.dispose(),he.dispose(),De.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Sc),ae.removeEventListener("sessionend",bc),di.stop()};function Be(b){b.preventDefault(),zr("WebGLRenderer: Context Lost."),N=!0}function Ke(){zr("WebGLRenderer: Context Restored."),N=!1;const b=Rt.autoReset,D=de.enabled,Y=de.autoUpdate,H=de.needsUpdate,V=de.type;Je(),Rt.autoReset=b,de.enabled=D,de.autoUpdate=Y,de.needsUpdate=H,de.type=V}function ye(b){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){const D=b.target;D.removeEventListener("dispose",mt),zt(D)}function zt(b){Kn(b),ze.remove(b)}function Kn(b){const D=ze.get(b).programs;D!==void 0&&(D.forEach(function(Y){ee.releaseProgram(Y)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,Y,H,V,ve){D===null&&(D=st);const Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=Xu(b,D,Y,H,V);ge.setMaterial(H,Ae);let be=Y.index,Ie=1;if(H.wireframe===!0){if(be=G.getWireframeAttribute(Y),be===void 0)return;Ie=2}const We=Y.drawRange,at=Y.attributes.position;let Re=We.start*Ie,ot=(We.start+We.count)*Ie;ve!==null&&(Re=Math.max(Re,ve.start*Ie),ot=Math.min(ot,(ve.start+ve.count)*Ie)),be!==null?(Re=Math.max(Re,0),ot=Math.min(ot,be.count)):at!=null&&(Re=Math.max(Re,0),ot=Math.min(ot,at.count));const Dt=ot-Re;if(Dt<0||Dt===1/0)return;he.setup(V,H,pe,Y,be);let Mt,xt=$;if(be!==null&&(Mt=y.get(be),xt=fe,xt.setIndex(Mt)),V.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*ut()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(V.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),ge.setLineWidth(qt*ut()),V.isLineSegments?xt.setMode(O.LINES):V.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else V.isPoints?xt.setMode(O.POINTS):V.isSprite&&xt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))xt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qt=V._multiDrawStarts,Ce=V._multiDrawCounts,Kt=V._multiDrawCount,dt=be?y.get(be).bytesPerElement:1,fi=ze.get(H).currentProgram.getUniforms();for(let Yt=0;Yt<Kt;Yt++)fi.setValue(O,"_gl_DrawID",Yt),xt.render(qt[Yt]/dt,Ce[Yt])}else if(V.isInstancedMesh)xt.renderInstances(Re,Dt,V.count);else if(Y.isInstancedBufferGeometry){const qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,qt);xt.renderInstances(Re,Dt,Ce)}else xt.render(Re,Dt)};function yc(b,D,Y,H){B!==null&&b.isNodeMaterial&&B.setObject(H,b),ce===!0&&J.setState(b,Y,!1),b.transparent===!0&&b.side===hn&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,os(b,D,H),b.side=ci,b.needsUpdate=!0,os(b,D,H),b.side=hn):os(b,D,H)}this.compile=function(b,D,Y=null){Y===null&&(Y=b),B!==null&&B.renderStart(b,D,Y),T=K.get(Y),T.init(D),E.push(T),Y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),Te=this.localClippingEnabled,ce=J.init(this.clippingPlanes,Te),ce===!0&&J.setGlobalState(this.clippingPlanes,D),B!==null&&de.render(T.state.shadowsArray,Y,D);const H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ve=V.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const pe=ve[Ae];yc(pe,Y,D,V),H.add(pe)}else yc(ve,Y,D,V),H.add(ve)}),T=E.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(b,D,Y=null){const H=this.compile(b,D,Y);return new Promise(V=>{function ve(){if(H.forEach(function(Ae){const be=ze.get(Ae).currentProgram;(be===void 0||be.isReady())&&H.delete(Ae)}),H.size===0){V(b);return}setTimeout(ve,10)}nt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Qr=null;function Vu(b){Qr&&Qr(b)}function Sc(){di.stop()}function bc(){di.start()}const di=new bu;di.setAnimationLoop(Vu),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){Qr=b,ae.setAnimationLoop(b),b===null?di.stop():di.start()},ae.addEventListener("sessionstart",Sc),ae.addEventListener("sessionend",bc),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(b,D);const Y=ae.enabled===!0&&ae.isPresenting===!0,H=L!==null&&(ie===null||Y)&&L.begin(R,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,ie),T=K.get(b,E.length),T.init(D),T.state.textureUnits=Ve.getTextureUnits(),E.push(T),xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ue.setFromArrayCamera(D):te.setFromProjectionMatrix(xe,yn,D.reversedDepth),Te=this.localClippingEnabled,ce=J.init(this.clippingPlanes,Te),w=_e.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&jr(Ae,D,-1/0,R.sortObjects)}jr(b,D,0,R.sortObjects),w.finish(),B!==null&&B.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Ne,pt),rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,rt&&I.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),ce===!0&&J.beginShadows();const V=T.state.shadowsArray;if(de.render(V,b,D),ce===!0&&J.endShadows(),(H&&L.hasRenderPass())===!1){const Ae=w.opaque,pe=w.transmissive;if(T.setupLights(),D.isArrayCamera){const be=D.cameras;if(pe.length>0)for(let Ie=0,We=be.length;Ie<We;Ie++){const at=be[Ie];Tc(Ae,pe,b,at)}rt&&I.render(b);for(let Ie=0,We=be.length;Ie<We;Ie++){const at=be[Ie];Ec(w,b,at,at.viewport)}}else pe.length>0&&Tc(Ae,pe,b,D),rt&&I.render(b),Ec(w,b,D)}ie!==null&&k===0&&(Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie)),H&&L.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),he.resetDefaultState(),q=-1,j=null,E.pop(),E.length>0?(T=E[E.length-1],Ve.setTextureUnits(T.state.textureUnits),ce===!0&&J.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,B!==null&&B.renderEnd()};function jr(b,D,Y,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Ae=D.isArrayCamera?ue:te;if(!b.frustumCulled||b.intersectsFrustum(Ae)){H&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const pe=re.update(b),be=b.material;be.visible&&w.push(b,pe,be,Y,Pe.z,null,D)}}else if(b.isMesh||b.isLine||b.isPoints){const Ae=D.isArrayCamera?ue:te;if(!b.frustumCulled||b.intersectsFrustum(Ae)){const pe=re.update(b),be=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(be)){const Ie=pe.groups;for(let We=0,at=Ie.length;We<at;We++){const Re=Ie[We],ot=be[Re.materialIndex];ot&&ot.visible&&w.push(b,pe,ot,Y,Pe.z,Re,D)}}else be.visible&&w.push(b,pe,be,Y,Pe.z,null,D)}}}const ve=b.children;for(let Ae=0,pe=ve.length;Ae<pe;Ae++)jr(ve[Ae],D,Y,H)}function Ec(b,D,Y,H){const{opaque:V,transmissive:ve,transparent:Ae}=b;T.setupLightsView(Y),ce===!0&&J.setGlobalState(R.clippingPlanes,Y),H&&ge.viewport(ne.copy(H)),V.length>0&&Vs(V,D,Y),ve.length>0&&Vs(ve,D,Y),Ae.length>0&&Vs(Ae,D,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Tc(b,D,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Re=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Rn(1,1,{generateMipmaps:!0,type:Re?In:un,minFilter:ri,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const ve=T.state.transmissionRenderTarget[H.id],Ae=H.viewport||ne;ve.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),be=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(Z),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),rt&&I.render(Y);const We=R.toneMapping;R.toneMapping=Wn;const at=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ce===!0&&J.setGlobalState(R.clippingPlanes,H),Vs(b,Y,H),Ve.updateMultisampleRenderTarget(ve),Ve.updateRenderTargetMipmap(ve),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ot=0,Dt=D.length;ot<Dt;ot++){const Mt=D[ot],{object:xt,geometry:qt,material:Ce,group:Kt}=Mt;if(Ce.side===hn&&xt.layers.test(H.layers)){const dt=Ce.side;Ce.side=en,Ce.needsUpdate=!0,wc(xt,Y,H,qt,Ce,Kt),Ce.side=dt,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(ve),Ve.updateRenderTargetMipmap(ve))}R.setRenderTarget(pe,be,Ie),R.setClearColor(Z,me),at!==void 0&&(H.viewport=at),R.toneMapping=We}function Vs(b,D,Y){const H=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ve=b.length;V<ve;V++){const Ae=b[V],{object:pe,geometry:be,group:Ie}=Ae;let We=Ae.material;We.allowOverride===!0&&H!==null&&(We=H),pe.layers.test(Y.layers)&&wc(pe,D,Y,be,We,Ie)}}function wc(b,D,Y,H,V,ve){B!==null&&V.isNodeMaterial&&B.setObject(b,V),b.onBeforeRender(R,D,Y,H,V,ve),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(R,D,Y,H,b,ve),V.transparent===!0&&V.side===hn&&V.forceSinglePass===!1?(V.side=en,V.needsUpdate=!0,R.renderBufferDirect(Y,D,H,V,b,ve),V.side=ci,V.needsUpdate=!0,R.renderBufferDirect(Y,D,H,V,b,ve),V.side=hn):R.renderBufferDirect(Y,D,H,V,b,ve),b.onAfterRender(R,D,Y,H,V,ve)}function Ac(b){let D=0;for(const Y of b)Y.texture!==null&&D++;return D}function os(b,D,Y){D.isScene!==!0&&(D=st);const H=ze.get(b),V=T.state.lights,ve=T.state.shadowsArray,Ae=V.state.version,pe=ee.getParameters(b,V.state,ve,D,Y,T.state.lightProbeGridArray),be=ee.getProgramCacheKey(pe);let Ie=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=A.get(b.envMap||H.environment,We),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",mt),Ie=new Map,H.programs=Ie,H.programVariants=new Map);let at=Ie.get(be);if(at!==void 0){if(H.currentProgram===at&&H.lightsStateVersion===Ae)return Cc(b,pe),at}else pe.uniforms=ee.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,Y,pe),b.onBeforeCompile(pe,R),at=ee.acquireProgram(pe,be),Ie.set(be,at),H.uniforms=pe.uniforms;const Re=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=J.uniform),Cc(b,pe),H.needsLights=Yu(b),H.lightsStateVersion=Ae,H.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.sunLights.value=V.state.sun,Re.sunLightShadows.value=V.state.sunShadow,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.sunShadowMatrix.value=V.state.sunShadowMatrix,Re.sunShadowCascade.value=V.state.sunShadowCascade,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Ac(T.state.lightProbeGridArray),H.currentProgram=at,H.uniformsList=null,at}function Wu(b,D,Y,H,V){const ve=ze.get(b),Ae=ve.currentProgram.id+","+H+","+V;let pe=ve.programVariants.get(Ae);return pe===void 0?(pe=os(b,D,Y),ve.programVariants.set(Ae,pe)):(ve.currentProgram=pe,ve.uniformsList=null,ve.outputColorSpace=H,ve.toneMapping=V),pe}function Rc(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Lr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Cc(b,D){const Y=ze.get(b);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Xu(b,D,Y,H,V){D.isScene!==!0&&(D=st),Ve.resetTextureUnits();const ve=D.fog,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,pe=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ct.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ie=A.get(H.envMap||Ae,be),We=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,at=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,Dt=!!Y.morphAttributes.color;let Mt=Wn;H.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qt=xt!==void 0?xt.length:0,Ce=ze.get(H),Kt=T.state.lights;if(ce===!0&&(Te===!0||b!==j)){const bt=b===j&&H.id===q;J.setState(H,b,bt)}let dt=!1,fi=!1;H.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Kt.state.version||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Ie||H.fog===!0&&Ce.fog!==ve||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==J.numPlanes||Ce.numIntersection!==J.numIntersection)||Ce.vertexAlphas!==We||Ce.vertexTangents!==at||Ce.morphTargets!==Re||Ce.morphNormals!==ot||Ce.morphColors!==Dt||Ce.morphTargetsCount!==qt||Ce.numLightProbeGrids!==Ac(T.state.lightProbeGridArray)?dt=!0:(Ce.outputColorSpace!==pe||Ce.toneMapping!==Mt)&&(fi=!0):(dt=!0,Ce.__version=H.version);let Yt=Ce.currentProgram;(dt===!0||fi===!0)&&(Yt=fi===!0?Wu(H,D,V,pe,Mt):os(H,D,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Yt,Ce));let Ws=!1,Jn=!1,pi=!1;const lt=Yt.getUniforms(),Wt=Ce.uniforms;if(ge.useProgram(Yt.program)&&(Ws=!0,Jn=!0,pi=!0),H.id!==q&&(q=H.id,Jn=!0),Ws||j!==b){ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),lt.setValue(O,"projectionMatrix",b.projectionMatrix),lt.setValue(O,"viewMatrix",b.matrixWorldInverse);const kt=lt.map.cameraPosition;kt!==void 0&&kt.setValue(O,Xe.setFromMatrixPosition(b.matrixWorld)),vt.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Jn=!0,pi=!0)}if(Ce.needsLights&&(Kt.state.sunShadowMap.length>0&&lt.setValue(O,"sunShadowMap",Kt.state.sunShadowMap,Ve),Kt.state.directionalShadowMap.length>0&&lt.setValue(O,"directionalShadowMap",Kt.state.directionalShadowMap,Ve),Kt.state.spotShadowMap.length>0&&lt.setValue(O,"spotShadowMap",Kt.state.spotShadowMap,Ve),Kt.state.pointShadowMap.length>0&&lt.setValue(O,"pointShadowMap",Kt.state.pointShadowMap,Ve)),V.isSkinnedMesh){lt.setOptional(O,V,"bindMatrix"),lt.setOptional(O,V,"bindMatrixInverse");const bt=V.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),lt.setValue(O,"boneTexture",bt.boneTexture,Ve))}V.isBatchedMesh&&(lt.setOptional(O,V,"batchingTexture"),lt.setValue(O,"batchingTexture",V._matricesTexture,Ve),lt.setOptional(O,V,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",V._indirectTexture,Ve),lt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",V._colorsTexture,Ve));const gn=Y.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Q.update(V,Y,Yt),(Jn||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,lt.setValue(O,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Wt.envMapIntensity.value=D.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Yv()),Jn){if(lt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&qu(Wt,pi),ve&&H.fog===!0&&le.refreshFogUniforms(Wt,ve),le.refreshMaterialUniforms(Wt,H,Me,Oe,T.state.transmissionRenderTarget[b.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const bt=x;let kt=0;for(const Dn of T.state.lightProbeGridArray)Dn.texture!==null&&(bt.textures[kt]=Dn.texture,bt.min[kt]=Dn.boundingBox.min,bt.max[kt]=Dn.boundingBox.max,bt.resolution[kt]=Dn.resolution,kt++);for(const Dn in bt)bt[Dn].length=kt;Wt.probesSH.value=bt.textures,Wt.probesMin.value=bt.min,Wt.probesMax.value=bt.max,Wt.probesResolution.value=bt.resolution}Lr.upload(O,Rc(Ce),Wt,Ve)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Lr.upload(O,Rc(Ce),Wt,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(O,"center",V.center),lt.setValue(O,"modelViewMatrix",V.modelViewMatrix),lt.setValue(O,"normalMatrix",V.normalMatrix),lt.setValue(O,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const bt=H.uniformsGroups;for(let kt=0,Dn=bt.length;kt<Dn;kt++){const Pc=bt[kt];De.update(Pc,Yt),De.bind(Pc,Yt)}}return Yt}function qu(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Yu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,D,Y){const H=ze.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ze.get(b.texture).__webglTexture=D,ze.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const Y=ze.get(b);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,Y=0){ie=b,F=D,k=Y;let H=null,V=!1,ve=!1;if(b){const pe=ze.get(b);if(pe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),ne.copy(b.viewport),we.copy(b.scissor),Ue=b.scissorTest,ge.viewport(ne),ge.scissor(we),ge.setScissorTest(Ue),q=-1;return}else if(pe.__webglFramebuffer===void 0)Ve.setupRenderTarget(b);else if(pe.__hasExternalTextures)Ve.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(pe.__boundDepthTexture!==We){if(We!==null&&ze.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ve=!0);const Ie=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?H=Ie[D][Y]:H=Ie[D],V=!0):b.samples>0&&Ve.useMultisampledRTT(b)===!1?H=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[Y]:H=Ie,ne.copy(b.viewport),we.copy(b.scissor),Ue=b.scissorTest}else ne.copy(ke).multiplyScalar(Me).floor(),we.copy(je).multiplyScalar(Me).floor(),Ue=it;if(Y!==0&&(H=X),ge.bindFramebuffer(O.FRAMEBUFFER,H)&&ge.drawBuffers(b,H),ge.viewport(ne),ge.scissor(we),ge.setScissorTest(Ue),V){const pe=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,Y)}else if(ve){const pe=D;for(let be=0;be<b.textures.length;be++){const Ie=ze.get(b.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Ie.__webglTexture,Y,pe)}}else if(b!==null&&Y!==0){const pe=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,Y)}q=-1};function Ic(b){const D=ze.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=vt.textureFormatReadable(b.format),D.__typeReadable=vt.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,Y,H,V,ve,Ae,pe=0){if(!(b&&b.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae],Array.isArray(be)&&(be=be[0])),be){ge.bindFramebuffer(O.FRAMEBUFFER,be);try{const Ie=b.textures[pe],We=Ie.format,at=Ie.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);const Re=Ic(Ie);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&Y>=0&&Y<=b.height-V&&O.readPixels(D,Y,H,V,oe.convert(We),oe.convert(at),ve)}finally{const Ie=ie!==null?ze.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,D,Y,H,V,ve,Ae,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae],Array.isArray(be)&&(be=be[0])),be)if(D>=0&&D<=b.width-H&&Y>=0&&Y<=b.height-V){ge.bindFramebuffer(O.FRAMEBUFFER,be);const Ie=b.textures[pe],We=Ie.format,at=Ie.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);const Re=Ic(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(D,Y,H,V,oe.convert(We),oe.convert(at),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Dt=ie!==null?ze.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Dt);const Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Xd(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ot),O.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,Y=0){const H=Math.pow(2,-Y),V=Math.floor(b.image.width*H),ve=Math.floor(b.image.height*H),Ae=D!==null?D.x:0,pe=D!==null?D.y:0;Ve.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Ae,pe,V,ve),ge.unbindTexture()},this.copyTextureToTexture=function(b,D,Y=null,H=null,V=0,ve=0){let Ae,pe,be,Ie,We,at,Re,ot,Dt;const Mt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(Y!==null)Ae=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,We=Y.min.y,at=Y.isBox3?Y.min.z:0;else{const lt=Math.pow(2,-V);Ae=Math.floor(Mt.width*lt),pe=Math.floor(Mt.height*lt),b.isDataArrayTexture?be=Mt.depth:b.isData3DTexture?be=Math.floor(Mt.depth*lt):be=1,Ie=0,We=0,at=0}H!==null?(Re=H.x,ot=H.y,Dt=H.z):(Re=0,ot=0,Dt=0);const xt=oe.convert(D.format),qt=oe.convert(D.type);let Ce;D.isData3DTexture?(Ve.setTexture3D(D,0),Ce=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ve.setTexture2DArray(D,0),Ce=O.TEXTURE_2D_ARRAY):(Ve.setTexture2D(D,0),Ce=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Kt=ge.getParameter(O.UNPACK_ROW_LENGTH),dt=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),fi=ge.getParameter(O.UNPACK_SKIP_PIXELS),Yt=ge.getParameter(O.UNPACK_SKIP_ROWS),Ws=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),ge.pixelStorei(O.UNPACK_SKIP_ROWS,We),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,at);const Jn=b.isDataArrayTexture||b.isData3DTexture,pi=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const lt=ze.get(b),Wt=ze.get(D),gn=ze.get(lt.__renderTarget),bt=ze.get(Wt.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let kt=0;kt<be;kt++)Jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,V,at+kt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(D).__webglTexture,ve,Dt+kt)),O.blitFramebuffer(Ie,We,Ie+Ae,We+pe,Re,ot,Re+Ae,ot+pe,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||ze.has(b)){const lt=ze.get(b),Wt=ze.get(D);ge.bindFramebuffer(O.READ_FRAMEBUFFER,P),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,W);for(let gn=0;gn<be;gn++)Jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.__webglTexture,V,at+gn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,lt.__webglTexture,V),pi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wt.__webglTexture,ve,Dt+gn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wt.__webglTexture,ve),V!==0?O.blitFramebuffer(Ie,We,Ie+Ae,We+pe,Re,ot,Re+Ae,ot+pe,O.COLOR_BUFFER_BIT,O.NEAREST):pi?O.copyTexSubImage3D(Ce,ve,Re,ot,Dt+gn,Ie,We,Ae,pe):O.copyTexSubImage2D(Ce,ve,Re,ot,Ie,We,Ae,pe);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pi?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ce,ve,Re,ot,Dt,Ae,pe,be,xt,qt,Mt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,ve,Re,ot,Dt,Ae,pe,be,xt,Mt.data):O.texSubImage3D(Ce,ve,Re,ot,Dt,Ae,pe,be,xt,qt,Mt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,Re,ot,Ae,pe,xt,qt,Mt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,Re,ot,Mt.width,Mt.height,xt,Mt.data):O.texSubImage2D(O.TEXTURE_2D,ve,Re,ot,Ae,pe,xt,qt,Mt);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Kt),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,fi),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,Ws),ve===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Ce),ge.unbindTexture()},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&Ve.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ve.setTextureCube(b,0):b.isData3DTexture?Ve.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ve.setTexture2DArray(b,0):Ve.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){F=0,k=0,ie=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const ch={type:"change"},_c={type:"start"},Nu={type:"end"},Er=new ns,lh=new kn,Zv=Math.cos(70*vs.DEG2RAD),Ut=new C,tn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fa=1e-6;class Kv extends em{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Pn,this._lastTargetPosition=new C,this._quat=new Pn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zl,this._sphericalDelta=new zl,this._scale=1,this._panOffset=new C,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new C,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qv.bind(this),this._onPointerDown=Jv.bind(this),this._onPointerUp=jv.bind(this),this._onContextMenu=ax.bind(this),this._onMouseWheel=nx.bind(this),this._onKeyDown=ix.bind(this),this._onTouchStart=sx.bind(this),this._onTouchMove=rx.bind(this),this._onMouseDown=ex.bind(this),this._onMouseMove=tx.bind(this),this._interceptControlDown=ox.bind(this),this._interceptControlUp=cx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Er.origin.copy(this.object.position),Er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Er.direction))<Zv?this.object.lookAt(this.target):(lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Er.intersectPlane(lh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fa||this._lastTargetPosition.distanceToSquared(this.target)>Fa?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nu),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ex(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(_c)}function tx(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function nx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(_c),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nu))}function ix(i){this.enabled!==!1&&this._handleKeyDown(i)}function sx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1){this.state=ft.NONE;break}this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1){this.state=ft.NONE;break}this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(_c)}function rx(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function ax(i){this.enabled!==!1&&i.preventDefault()}function ox(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class lx extends Kh{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Si;e.deleteAttribute("uv");const t=new Os({side:en}),n=new Os,s=new Hp(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Tt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Df(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Tt(e,Fi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Tt(e,Fi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Tt(e,Fi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Tt(e,Fi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Tt(e,Fi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new Tt(e,Fi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Fi(i){return new Mp({color:0,emissive:16777215,emissiveIntensity:i})}const hh=new C(.46,.34,.86).normalize();class hx{camera;controls;homePosition=new C(2.1,1.55,3.2);homeTarget=new C(0,0,0);desiredPosition=new C;desiredTarget=new C;animating=!1;reduceMotion=!1;constructor(e,t){this.camera=e,this.controls=t}setHome(e,t=new C(0,0,0)){const n=vs.degToRad(this.camera.fov),s=vs.clamp(e/Math.tan(n/2)*1.18,2.1,6.5);this.homeTarget.copy(t),this.homePosition.copy(t).addScaledVector(hh,s)}setReduceMotion(e){this.reduceMotion=e}reset(){this.desiredPosition.copy(this.homePosition),this.desiredTarget.copy(this.homeTarget),this.animating=!0,this.reduceMotion&&this.snap()}frame(e){if(!e||e.isEmpty()){this.reset();return}const t=e.getCenter(new C),n=e.getSize(new C),s=Math.max(n.length()/2,.16),r=vs.degToRad(this.camera.fov),a=vs.clamp(s/Math.sin(r/2)*1.45,1.15,7),o=this.camera.position.clone().sub(this.controls.target);o.lengthSq()<1e-6&&o.copy(hh),o.normalize(),this.desiredTarget.copy(t),this.desiredPosition.copy(t).addScaledVector(o,a),this.animating=!0,this.reduceMotion&&this.snap()}cancel(){this.animating=!1}isAnimating(){return this.animating}update(e){if(!this.animating)return!1;const t=this.reduceMotion?1:1-Math.exp(-Math.min(e,.05)*10);return this.camera.position.lerp(this.desiredPosition,t),this.controls.target.lerp(this.desiredTarget,t),this.camera.position.distanceToSquared(this.desiredPosition)<1e-6&&this.controls.target.distanceToSquared(this.desiredTarget)<1e-6&&this.snap(),!0}snap(){this.camera.position.copy(this.desiredPosition),this.controls.target.copy(this.desiredTarget),this.controls.update(),this.animating=!1}}async function ux(i,e){const{GLTFLoader:t}=await za(async()=>{const{GLTFLoader:o}=await import("./GLTFLoader-qLVj3QHN.js");return{GLTFLoader:o}},__vite__mapDeps([0,1,2]),import.meta.url),n=new t;if((e.glbAudit?.extensionsRequired??[]).includes("EXT_meshopt_compression")){const{MeshoptDecoder:o}=await za(async()=>{const{MeshoptDecoder:l}=await import("./meshopt_decoder.module-DA_PxQo_.js");return{MeshoptDecoder:l}},[],import.meta.url);"ready"in o&&o.ready&&await o.ready,n.setMeshoptDecoder(o)}const a=(await n.parseAsync(i,"")).scene;if(!a)throw new Error("glTF file did not contain a scene");return a}async function dx(i){const{GLTFExporter:e}=await za(async()=>{const{GLTFExporter:s}=await import("./GLTFExporter-DTxVTKSX.js");return{GLTFExporter:s}},__vite__mapDeps([3,1,2]),import.meta.url),t=new e,n=await new Promise((s,r)=>{t.parse(i,a=>{a instanceof ArrayBuffer?s(a):r(new Error("GLB exporter returned JSON instead of binary output"))},a=>r(a instanceof Error?a:new Error(String(a))),{binary:!0,onlyVisible:!1})});return new Blob([n],{type:"model/gltf-binary"})}class fx{scene;accent;ghost;selectedClones=new Map;selectedId=null;mode="mesh";cutaway=!1;constructor(e,t){this.scene=e,this.accent=new He(t),this.ghost=new Os({color:new He("#8fa3ad"),roughness:.95,metalness:0,transparent:!0,opacity:.055,depthWrite:!1,side:hn}),this.ghost.name="ghost:context"}setFocus(e){return this.selectedId=e,this.apply(),this.selectedId?this.scene.structureMeshes.get(this.selectedId)?.length??0:0}getFocus(){return this.selectedId}setMode(e){this.mode=e,this.apply()}setCutaway(e){this.cutaway=e,this.apply()}dispose(){for(const e of this.scene.meshes)e.material=e.userData.baseMaterial,e.visible=!0,this.setOutlineVisibility(e,!0);for(const e of this.selectedClones.values())e.dispose();this.selectedClones.clear(),this.ghost.dispose()}apply(){const e=this.selectedId?this.scene.structureMeshes.get(this.selectedId)??[]:[],t=new Set(e),n=this.mode==="focus"&&this.selectedId!==null;for(const s of this.scene.meshes){const r=t.has(s),a=s.userData.baseMaterial;s.material=r?this.selectedMaterials(a):n?this.ghost:a;const o=this.cutaway&&!!s.userData.cutawayHide;s.visible=!o||r,this.setOutlineVisibility(s,!n||r)}}selectedMaterials(e){return Array.isArray(e)?e.map(t=>this.selectedMaterial(t)):this.selectedMaterial(e)}selectedMaterial(e){const t=this.selectedClones.get(e);if(t)return t;const n=e.clone();return n instanceof Os&&(n.emissive=this.accent.clone().multiplyScalar(.55),n.emissiveIntensity=Math.max(.38,n.emissiveIntensity),n.color.lerp(this.accent,.2),n.transparent&&n.opacity<.35&&(n.opacity=Math.min(.45,n.opacity+.16))),n.name=`highlight:${e.name||"material"}`,this.selectedClones.set(e,n),n}setOutlineVisibility(e,t){for(const n of e.children)n instanceof iu&&(n.visible=t)}}class px{element;camera;getMeshes;onPick;raycaster=new jp;pointer=new se;visibleCandidates=[];downX=0;downY=0;downTime=0;pointerDown=!1;lastHover=0;disposed=!1;constructor(e,t,n,s){this.element=e,this.camera=t,this.getMeshes=n,this.onPick=s,e.addEventListener("pointerdown",this.handleDown),e.addEventListener("pointerup",this.handleUp),e.addEventListener("pointercancel",this.handleCancel),e.addEventListener("pointermove",this.handleMove),e.addEventListener("pointerleave",this.handleLeave)}setPointer(e){const t=this.element.getBoundingClientRect();return t.width<=0||t.height<=0?!1:(this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,!0)}pick(){this.raycaster.setFromCamera(this.pointer,this.camera),this.visibleCandidates.length=0;for(const t of this.getMeshes())t.visible&&this.visibleCandidates.push(t);const e=this.raycaster.intersectObjects(this.visibleCandidates,!1);for(const t of e){const n=t.object.userData.structureId;if(typeof n=="string"&&n)return t.object}return null}handleDown=e=>{e.pointerType==="mouse"&&e.button!==0||e.pointerType==="touch"&&!e.isPrimary||(this.pointerDown=!0,this.downX=e.clientX,this.downY=e.clientY,this.downTime=performance.now())};handleCancel=()=>{this.pointerDown=!1};handleUp=e=>{const t=this.pointerDown;if(this.pointerDown=!1,this.disposed||!t||e.pointerType==="mouse"&&e.button!==0||e.pointerType==="touch"&&!e.isPrimary||Math.hypot(e.clientX-this.downX,e.clientY-this.downY)>8||performance.now()-this.downTime>700||!this.setPointer(e))return;const s=this.pick();this.onPick(s?.userData.structureId??null)};handleMove=e=>{if(this.disposed)return;const t=performance.now();if(t-this.lastHover<90||(this.lastHover=t,!this.setPointer(e)))return;const n=this.pick();this.element.style.cursor=n?"pointer":""};handleLeave=()=>{this.element.style.cursor=""};dispose(){this.disposed=!0,this.visibleCandidates.length=0,this.element.removeEventListener("pointerdown",this.handleDown),this.element.removeEventListener("pointerup",this.handleUp),this.element.removeEventListener("pointercancel",this.handleCancel),this.element.removeEventListener("pointermove",this.handleMove),this.element.removeEventListener("pointerleave",this.handleLeave),this.element.style.cursor=""}}class Gt extends Error{code;retryable;status;constructor(e,t,n={}){super(t),this.name="AssetLoadError",this.code=e,this.retryable=n.retryable??!1,this.status=n.status??null}}const mx=32*1024*1024,gx=2e4;function _x(i,e){return e?.aborted?Promise.reject(new Gt("cancelled","Asset loading was cancelled")):new Promise((t,n)=>{const s=()=>{clearTimeout(r),n(new Gt("cancelled","Asset loading was cancelled"))},r=setTimeout(()=>{e?.removeEventListener("abort",s),t()},i);e?.addEventListener("abort",s,{once:!0})})}async function vx(i,e,t={}){if(!i)throw new Gt("asset-missing","No asset URL was provided");const n=t.retries??1,s=t.timeoutMs??gx,r=t.fetchImpl??fetch,a=t.maxBytes??mx;for(let o=0;o<=n;o+=1)try{const l=await xx(i,r,t,s,a);try{return await e(l)}catch(c){throw new Gt("asset-corrupt",`Model could not be decoded: ${c instanceof Error?c.message:String(c)}`)}}catch(l){const c=l instanceof Gt?l:new Gt("unknown",l instanceof Error?l.message:String(l));if(c.code==="cancelled"||!c.retryable||o>=n)throw c;await _x(250*(o+1),t.signal)}throw new Gt("unknown","Asset loading failed after retries")}async function xx(i,e,t,n,s){const r=new AbortController;let a=!1;const o=setTimeout(()=>{a=!0,r.abort()},n),l=()=>r.abort();if(t.signal){if(t.signal.aborted)throw clearTimeout(o),new Gt("cancelled","Asset loading was cancelled");t.signal.addEventListener("abort",l,{once:!0})}const c=()=>{clearTimeout(o),t.signal?.removeEventListener("abort",l)};try{const h=await e(i,{signal:r.signal,headers:{Accept:"model/gltf-binary"},credentials:"same-origin"});if(!h.ok){const d=h.status>=500||h.status===408||h.status===429,g=h.status===404?"asset-missing":"asset-http";throw new Gt(g,h.status===404?`Model file was not found (${i})`:`Model request failed with HTTP ${h.status}`,{retryable:d,status:h.status})}const u=Number(h.headers.get("content-length")??"0");if(u>s)throw new Gt("asset-corrupt","Model exceeds the runtime size limit");return await Mx(h,u,s,t.onProgress)}catch(h){throw c(),h instanceof Gt?h:t.signal?.aborted?new Gt("cancelled","Asset loading was cancelled"):a?new Gt("asset-timeout","Model loading timed out",{retryable:!0}):new Gt("asset-http",h instanceof Error?h.message:"Network request failed",{retryable:!0})}finally{c()}}async function Mx(i,e,t,n){if(!i.body){const c=await i.arrayBuffer();if(c.byteLength>t)throw new Gt("asset-corrupt","Model exceeds the runtime size limit");return n?.(1),c}const s=i.body.getReader(),r=[];let a=0;for(;;){const{done:c,value:h}=await s.read();if(c)break;if(h){if(a+=h.byteLength,a>t)throw await s.cancel(),new Gt("asset-corrupt","Model exceeds the runtime size limit");r.push(h),e>0&&n?.(Math.min(.95,a/e))}}const o=new Uint8Array(a);let l=0;for(const c of r)o.set(c,l),l+=c.byteLength;return n?.(1),o.buffer}const Uu={status:"idle",specimenId:null,visibleSpecimenId:null,progress:0,error:null};function Bi(i,e){switch(e.type){case"start":return{...i,status:"loading",specimenId:e.specimenId,progress:0,error:null};case"progress":{if(i.status!=="loading"||i.specimenId!==e.specimenId)return i;const t=Math.max(0,Math.min(1,e.progress));return t<=i.progress?i:{...i,progress:t}}case"success":return i.specimenId!==e.specimenId?i:{...i,status:"ready",visibleSpecimenId:e.specimenId,progress:1,error:null};case"failure":return i.specimenId!==e.specimenId?i:{...i,status:"error",error:e.error};case"cancel":return i.status!=="loading"||i.specimenId!==e.specimenId?i:{...i,status:i.visibleSpecimenId?"ready":"idle",specimenId:i.visibleSpecimenId,progress:0,error:null};case"eject":return Uu;default:return i}}const yx=/^#[0-9a-fA-F]{6}$/,Oo=Fe().regex(yx,"Expected a 6-digit hex colour"),Sx=["approved","draft","blocked"],bx=sn(Sx),vc=Ot({status:bx,reviewer:Fe().min(2),reviewedAt:Fe().min(10).nullable(),notes:Fe().min(1)}),Ex=Ot({id:Fe().min(2),title:Fe().min(2),publisher:Fe().min(2),url:Th(),edition:Fe().min(1),accessedAt:Fe().min(10)}),Tx=Ot({id:Fe().min(2),statement:Fe().min(12),sourceId:Fe().min(2),locator:Fe().min(2),highImpact:ln().default(!1),secondReview:vc.nullable().default(null)}),Ba=["allowed","not-allowed","unknown"],wx=Ot({id:Fe().min(2),name:Fe().min(2),url:Th(),redistribution:sn(Ba),modification:sn(Ba),commercialUse:sn(Ba),attributionRequired:ln(),attributionText:Fe().min(2)}),Ax=Ot({kind:sn(["in-repo-authoring","url","document","permission"]),locator:Fe().min(2),retrievedAt:Fe().min(10),notes:Fe().min(8)}),Rx=["mesh-mapping","segmentation-mask","none"],Cx=Ot({kind:sn(Rx),meshNames:mn(Fe().min(2)).default([]),evidence:Fe().min(4),confidence:sn(["high","medium","low"]),note:Fe().min(4)}),Ix=Ot({id:Fe().min(2),name:Fe().min(2),shortName:Fe().min(2).optional(),summary:Fe().min(20),function:Fe().min(20),facts:mn(Tx).min(1),mapping:Cx,schematicNote:Fe().optional()}),Px=sn(bh),Lx=Ot({id:Px,value:Fe().min(1),note:Fe().optional()}),Dx=["plant","animal","bacteria","fungi","protist"],Nx=sn(Dx),Ux=["sphere","box","cylinder","capsule","cone","torus","torusKnot","disc","roundedBox","biconcave","curvedSheet","tubeHelix","organicBlob","taperedBranch","brainFrontalLobe","brainMotorCortex","brainSensoryCortex","brainParietalLobe","brainTemporalLobe","brainOccipitalLobe","brainCutoutHemisphere","cerebellumLobe","brainstemCore","corpusCallosum","limbicArch","hippocampusArch","ventricleHorn"],Ox=sn(Ux),Fx=["scatter","shell","ring","line","helix","grid"],Zi=$u([Ct(),Ct(),Ct()]),Bx=Ot({color:Oo,roughness:Ct().min(0).max(1).default(.55),metalness:Ct().min(0).max(1).default(.03),opacity:Ct().min(0).max(1).default(1),clearcoat:Ct().min(0).max(1).default(0),clearcoatRoughness:Ct().min(0).max(1).default(.25),emissive:Oo.optional(),emissiveIntensity:Ct().min(0).max(2).default(0),flatShading:ln().default(!1)}),zx=Ot({count:Ct().int().min(1).max(400),pattern:sn(Fx),seed:Ct().int().min(0).default(1),extent:Zi.default([.5,.5,.5]),radius:Ct().min(0).max(4).default(.5),turns:Ct().min(.25).max(12).default(2),axis:sn(["x","y","z"]).default("y"),jitter:Ct().min(0).max(1).default(0),jitterRotation:Ct().min(0).max(Math.PI).default(0)}),kx=Ot({id:Fe().min(2),shape:Ox,position:Zi,rotation:Zi.default([0,0,0]),scale:Zi,material:Bx,structureId:Fe().min(2).optional(),cutawayHide:ln().default(!1),outline:ln().default(!1),segments:Ct().int().min(6).max(96).default(32),mirrorZ:ln().optional(),repeat:zx.optional()}),Hx=Ot({units:Eh("schematic"),canonicalDiameter:Ct().positive().max(4).default(2),parts:mn(kx).min(1).max(260),notes:Fe().min(20)}),Ou=Ot({mesh:ln(),focus:ln(),cutaway:ln(),structureHighlight:sn(["mesh-mapping","none"]),screenshot:ln(),glbExport:ln()}),Gx=Ot({version:Eh(2),totalBytes:Ct().int().positive(),extensionsUsed:mn(Fe()),extensionsRequired:mn(Fe()),meshCount:Ct().int().min(0),materialCount:Ct().int().min(0),textureCount:Ct().int().min(0),nodeNames:mn(Fe()),bounds:Ot({min:Zi,max:Zi}).optional()}),Vx=Ot({id:Fe().min(2),kind:sn(["procedural","glb"]),uri:Fe().min(2),byteSize:Ct().int().nonnegative(),license:wx,licenseEvidence:mn(Ax).min(1),rightsReview:vc,attribution:Fe().min(2),export:Ot({png:ln(),glb:ln()}),capabilities:Ou,procedural:Hx.optional(),glbAudit:Gx.optional()}),Wx=Ot({id:Fe().min(2),slug:Fe().regex(/^[a-z0-9-]+$/),name:Fe().min(2),shortName:Fe().min(2),cellType:Fe().min(2),species:Fe().min(2),taxonNote:Fe().min(8),domain:Nx,accent:Oo,summary:Fe().min(20),overview:Fe().min(40),sizeNote:Fe().min(8),scaleNote:Fe().min(20),structures:mn(Ix).min(5),traits:mn(Lx).length(bh.length),assetId:Fe().min(2),previewPath:Fe().startsWith("/previews/"),capabilities:Ou,contentReview:vc,contentVersion:Fe().min(1),updatedAt:Fe().min(10)}),Xx=Ot({version:Fe().min(1),specimens:mn(Wx),assets:mn(Vx),sources:mn(Ex)});function qx(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Yx={sphere:[1,1,1],box:[1,1,1],cylinder:[1,1,1],capsule:[1,2,1],cone:[1,1,1],torus:[1,1,.3],torusKnot:[1.2,1.2,1.2],disc:[1,.12,1],roundedBox:[1,1,1],biconcave:[1,1,1],curvedSheet:[1,.4,1],tubeHelix:[1,.4,.4],organicBlob:[1,1,1],taperedBranch:[1,1,1],brainFrontalLobe:[1,1,1],brainMotorCortex:[1,1,1],brainSensoryCortex:[1,1,1],brainParietalLobe:[1,1,1],brainTemporalLobe:[1,1,1],brainOccipitalLobe:[1,1,1],brainCutoutHemisphere:[1,1,1],cerebellumLobe:[1,1,1],brainstemCore:[1,1,1],corpusCallosum:[1,1,1],limbicArch:[1,1,1],hippocampusArch:[1,1,1],ventricleHorn:[1,1,1]};function $x(i,e,t){const[n,s,r]=i.extent,a=i.count,o=a===1?.5:e/a;switch(i.pattern){case"scatter":{const l=t()*2-1,c=t()*Math.PI*2,h=Math.cbrt(t()),u=Math.sqrt(Math.max(0,1-l*l));return[Math.cos(c)*u*h*n,l*h*s,Math.sin(c)*u*h*r]}case"shell":{const l=t()*2-1,c=t()*Math.PI*2,h=Math.sqrt(Math.max(0,1-l*l));return[Math.cos(c)*h*n,l*s,Math.sin(c)*h*r]}case"ring":{const l=o*Math.PI*2,c=Math.cos(l)*i.radius,h=Math.sin(l)*i.radius;return i.axis==="x"?[0,c,h]:i.axis==="z"?[c,h,0]:[c,0,h]}case"line":{const l=(o*2-1)*(i.axis==="x"?n:i.axis==="y"?s:r);return i.axis==="x"?[l,0,0]:i.axis==="y"?[0,l,0]:[0,0,l]}case"helix":{const l=(o*2-1)*(i.axis==="x"?n:i.axis==="y"?s:r),c=o*Math.PI*2*i.turns,h=Math.cos(c)*i.radius,u=Math.sin(c)*i.radius;return i.axis==="x"?[l,h,u]:i.axis==="z"?[h,u,l]:[h,l,u]}case"grid":{const l=Math.max(1,Math.ceil(Math.sqrt(a))),c=l===1?0:e%l/(l-1)-.5,h=l===1?0:Math.floor(e/l)/(l-1)-.5;return[c*2*n,0,h*2*r]}}}function uh(i,e){return[i[0]+e[0],i[1]+e[1],i[2]+e[2]]}function Zx(i){const e={partId:i.id,structureId:i.structureId,shape:i.shape,scale:i.scale,material:i.material,cutawayHide:i.cutawayHide,outline:i.outline,segments:i.segments,...i.mirrorZ?{mirrorZ:!0}:{}};if(!i.repeat)return[{...e,key:i.id,position:i.position,rotation:i.rotation}];const t=qx(i.repeat.seed),n=[];for(let s=0;s<i.repeat.count;s+=1){const r=$x(i.repeat,s,t),a=i.repeat.jitter,o=a>0?[(t()*2-1)*a*.12,(t()*2-1)*a*.12,(t()*2-1)*a*.12]:[0,0,0],l=i.repeat.jitterRotation,c=l>0?[i.rotation[0]+(t()*2-1)*l,i.rotation[1]+(t()*2-1)*l,i.rotation[2]+(t()*2-1)*l]:i.rotation;n.push({...e,key:`${i.id}#${s}`,position:uh(i.position,uh(r,o)),rotation:c,repeatIndex:s})}return n}function Kx(i){return i.parts.flatMap(Zx)}function Jx([i,e,t],[n,s,r]){const a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r),f=l*h,d=-l*u,g=c,v=a*u+o*c*h,p=a*h-o*c*u,m=-o*l,M=o*u-a*c*h,S=o*h+a*c*u,x=a*l;return[f*i+d*e+g*t,v*i+p*e+m*t,M*i+S*e+x*t]}function Qx(i){if(i.length===0)throw new Error("Cannot compute bounds for zero procedural instances");const e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(const n of i){const s=Yx[n.shape],r=s[0]*n.scale[0]/2,a=s[1]*n.scale[1]/2,o=s[2]*n.scale[2]/2;for(const l of[-1,1])for(const c of[-1,1])for(const h of[-1,1]){const u=Jx([r*l,a*c,o*h],n.rotation),f=n.position[0]+u[0],d=n.position[1]+u[1],g=n.position[2]+u[2];f<e[0]&&(e[0]=f),d<e[1]&&(e[1]=d),g<e[2]&&(e[2]=g),f>t[0]&&(t[0]=f),d>t[1]&&(t[1]=d),g>t[2]&&(t[2]=g)}}return{min:e,max:t}}function jx(i){return[i.max[0]-i.min[0],i.max[1]-i.min[1],i.max[2]-i.min[2]]}function Fu(i,e){const t=jx(i),n=Math.max(t[0],t[1],t[2]);if(!Number.isFinite(n)||n<=0)throw new Error("Invalid bounds: procedural extent must be finite and non-zero");const s=e/n,r=[(i.min[0]+i.max[0])/2,(i.min[1]+i.max[1])/2,(i.min[2]+i.max[2])/2],a=[-r[0]*s,-r[1]*s,-r[2]*s],o={min:[(i.min[0]-r[0])*s,(i.min[1]-r[1])*s,(i.min[2]-r[2])*s],max:[(i.max[0]-r[0])*s,(i.max[1]-r[1])*s,(i.max[2]-r[2])*s]};return{scale:s,translation:a,sourceBounds:i,normalizedBounds:o,canonicalDiameter:e}}function Fo(i,e,t){return Math.max(e,Math.min(t,i))}function ht(i,e,t){return i+(e-i)*t}function et(i,e,t){const n=Fo((t-i)/(e-i),0,1);return n*n*(3-2*n)}function as(i,e,t,n){const s=1-n;return[s*s*i[0]+2*s*n*e[0]+n*n*t[0],s*s*i[1]+2*s*n*e[1]+n*n*t[1]]}function jt(i){const e=i*Math.PI/180;return[Math.cos(e),Math.sin(e)]}function eM(i,e){const t=i*i,n=e*e,s=2*Math.SQRT2,r=.5*Math.sqrt(Math.max(0,2+t-n+s*i))-.5*Math.sqrt(Math.max(0,2+t-n-s*i)),a=.5*Math.sqrt(Math.max(0,2-t+n+s*e))-.5*Math.sqrt(Math.max(0,2-t+n-s*e));return[Fo(r,-1,1),Fo(a,-1,1)]}function tM(i,e,t,n=.036){const s=i+.085*Math.sin(5.2*e+2.7*t)+.045*Math.cos(4.1*t-3.3*i),r=e+.085*Math.sin(4.8*t+3.1*i)+.045*Math.cos(4.5*i-2.9*e),a=t+.085*Math.sin(5*i+2.9*e)+.045*Math.cos(4.3*e-3.2*t),o=Math.sin(10.6*s+6.1*r)*Math.cos(9.8*a-5.4*s)+.55*Math.sin(11.4*r-7.8*a),l=Math.sin(17.5*r+10.8*s)*Math.cos(16*a+8.6*r),c=Math.exp(-Math.pow(o/.22,2)),h=Math.exp(-Math.pow(l/.24,2));return n*(.32-1.08*c-.38*h)}function xc(i,e,t,n={}){const s=n.cutawayRecess??!1,r=n.foldAmp??.036,a=Math.max(0,t),o=Math.max(0,-t);let l=i*.84;const c=.61*(1-.16*et(.25,.96,i)-.22*et(-.32,-.96,i))*(1+.05*(1-e*e));let h=e*.5+.08*(1-i*i);const u=et(.18,.82,i)*et(.02,-.76,e);h+=.12*u;const f=Math.exp(-Math.pow((i-.02)/.34,2)),d=et(.14,-.52,e),g=et(.02,.45,a),v=f*d*(.45+.55*g);h-=.14*v,l+=.055*v;const p=et(-.12,-.8,i)*et(.12,-.68,e);h+=.24*p;let m=t>=0?.004+t*c+.04*v:.004+t*.022;if(s&&o>.01){const S=et(.04,.52,o),x=et(-.62,-.22,i)*et(.64,.24,i),w=et(-.48,-.12,e)*et(.56,.16,e);m+=.23*S*x*w}const M=et(-.1,.16,t);if(M>0){const S=tM(l,h,m,r),x=-.06-.22*l,w=Math.exp(-Math.pow((h-x)/.05,2))*et(-.44,-.2,l)*et(.48,.26,l)*et(.1,.4,a),T=.06-.26*h,_=Math.exp(-Math.pow((l-T)/.042,2))*et(-.08,.12,h)*et(.06,.35,a),E=M*(S-.046*w-.032*_),L=0,R=.06,N=.02,B=l-L,X=h-R,P=m-N,W=Math.hypot(B,X,P)||1;l+=B/W*E,h+=X/W*E,m+=P/W*E}return[l,h,m]}const nM=jt(84),iM=jt(92),sM=jt(100),rM=jt(132),aM=jt(-82),oM=jt(-132),Vr=[-.46,.06],cM=[.02,-.06],lM=[.14,-.1],Wr=[.26,-.14],dh=.65,fh=.82;function Tr(i){const e=ht(Vr[0],Wr[0],i),t=ht(Vr[1],Wr[1],i)+.025*Math.sin(i*Math.PI);return[e,t]}function ph(i){return as(aM,[.42,-.44],Wr,i)}function mh(i){return as(Wr,[.22,.42],nM,i)}function gh(i){return as(lM,[.1,.44],iM,i)}function _h(i){return as(cM,[-.03,.46],sM,i)}function vh(i){return as(Vr,[-.52,.42],rM,i)}function xh(i){return as(oM,[-.58,-.35],Vr,i)}function zi(i,e,t,n,s,r){const a=.5*(i+1),o=.5*(e+1),l=t(o),c=n(o),h=s(a),u=r(a),f=t(0),d=n(0),g=t(1),v=n(1),p=(1-a)*l[0]+a*c[0]+(1-o)*h[0]+o*u[0]-((1-a)*(1-o)*f[0]+a*(1-o)*d[0]+(1-a)*o*g[0]+a*o*v[0]),m=(1-a)*l[1]+a*c[1]+(1-o)*h[1]+o*u[1]-((1-a)*(1-o)*f[1]+a*(1-o)*d[1]+(1-a)*o*g[1]+a*o*v[1]);return[p,m]}function hM(i,e,t){switch(i){case"frontal":return zi(e,t,mh,n=>jt(ht(-82,30,n)),n=>ph(1-n),n=>jt(ht(84,30,n)));case"motor":return zi(e,t,gh,mh,n=>Tr(ht(fh,1,n)),n=>jt(ht(92,84,n)));case"sensory":return zi(e,t,_h,gh,n=>Tr(ht(dh,fh,n)),n=>jt(ht(100,92,n)));case"parietal":return zi(e,t,vh,_h,n=>Tr(ht(0,dh,n)),n=>jt(ht(132,100,n)));case"temporal":return zi(e,t,xh,ph,n=>jt(ht(-132,-82,n)),Tr);case"occipital":return zi(e,t,n=>jt(ht(-162,-198,n)),n=>n<=.5?xh(n*2):vh((n-.5)*2),n=>jt(ht(-162,-132,n)),n=>jt(ht(162,132,n)))}}function Bu(i,e,t,n){const[s,r]=eM(e,t);let[a,o]=hM(i,s,r);const l=a*a+o*o;if(l>1){const w=1/Math.sqrt(l);a*=w,o*=w}const c=Math.sqrt(Math.max(0,1-a*a-o*o)),h=xc(a,o,c,{cutawayRecess:!1,foldAmp:.036}),f=.026*et(.06,.25,c),d=Math.max(.004,h[2]-f);if(n>=0){const w=ht(d,h[2],Math.pow(n,.45));return[h[0],h[1],w]}const g=Math.abs(n),v=ht(h[0],0,.48*g),p=ht(h[1],.04,.48*g),m=et(-.42,-.18,v)*et(.44,.18,v),M=et(-.34,-.14,p)*et(.3,.12,p),S=.004+.22*m*M,x=ht(d,Math.max(.004,Math.min(d,S)),Math.pow(g,.55));return[v,p,x]}function zu(i,e){const t=Math.max(6,Math.round(i)),n=Math.max(14,Math.round(t*.65));let s=1/0,r=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=0;h<=n;h+=1){const u=h/n*Math.PI,f=Math.sin(u),d=Math.cos(u);for(let g=0;g<=t;g+=1){const v=g/t*Math.PI*2,p=-Math.cos(v)*f,m=d,M=Math.sin(v)*f,[S,x,w]=e(p,m,M);S<s&&(s=S),x<r&&(r=x),w<a&&(a=w),S>o&&(o=S),x>l&&(l=x),w>c&&(c=w)}}return{position:[(s+o)/2,(r+l)/2,(a+c)/2],scale:[o-s,l-r,c-a]}}function uM(i,e=36){return zu(e,(t,n,s)=>Bu(i,t,n,s))}function dM(i,e=44){return zu(e,(t,n,s)=>xc(t,n,s,{cutawayRecess:i}))}function fM(i,e,t){let n=i*.5,s=e*.44;const r=t>=0?.02+t*.48:.02+t*.14;e>0&&i<.2&&(s-=.06*et(.1,.85,e)*et(.2,-.6,i)),i>.25&&t<.2&&(n-=.08*et(.25,.9,i));const a=et(-.2,.25,t),l=.015*Math.sin(e*27+2.1*Math.cos(i*2.8)+.8*Math.sin(t*3))*a,c=Math.hypot(n,s,r)||1;return[n+n/c*l,s+s/c*l,r+r/c*l]}function pM(i,e){const t=i*Math.PI*2,n=Math.cos(t),s=Math.sin(t),r=ht(-.07,.05,e),a=ht(-.5,.5,e);let o=.14,l=.14;const c=et(.32,.14,e);o=ht(o,.105,c),l=ht(l,.12,c);const h=Math.exp(-Math.pow((e-.39)/.12,2));o+=.03*h,l+=.03*h;const u=Math.max(0,n)*(.016*Math.cos(2*t))*h,f=Math.exp(-Math.pow((e-.67)/.11,2)),d=Math.max(0,n),g=.15*f*Math.pow(d,.85);l+=.105*f,o+=.045*f;const v=.008*Math.sin(e*68)*f*d,p=et(.8,1,e);o+=.05*p,l+=.06*p;const m=.022*(1-Math.cos(2*t))*p,M=o+u+v+m,S=l+m*.8;return[r+g+n*M,a,s*S]}function mM(i){const e=ht(-.22*Math.PI,1.14*Math.PI,i),t=Math.cos(e)*.31+.04,n=Math.sin(e)*.165+.06,s=.032*Math.exp(-Math.pow((i-.18)/.12,2)),r=.042*Math.exp(-Math.pow((i-.94)/.1,2)),a=ht(.55,1,et(0,.14,i)),o=(.05+s+r)*a,l=ht(.145,.18,et(.2,.95,i))*ht(.7,1,et(0,.12,i));return{point:[t,n,0],rx:o,ry:l}}function gM(i){const e=ht(-.14*Math.PI,1.18*Math.PI,i),t=Math.cos(e)*.36,n=Math.sin(e)*.25+.02,s=.72+.28*Math.sin(i*Math.PI);return{point:[t,n,0],rx:.055*s,ry:.068*s}}function _M(i){const e=ht(-.32*Math.PI,.76*Math.PI,i),t=.02-.18*Math.sin(e*1.1)+.16*Math.cos(i*Math.PI),n=-.14+.22*et(.18,1,i)-.04*Math.sin(i*Math.PI*1.4),s=.055*Math.sin(i*Math.PI*.92)-.05*et(.65,1,i),r=.032*Math.exp(-Math.pow((i-.1)/.14,2)),a=.008*Math.sin(i*28)*et(.45,.02,i),o=ht(.062,.028,et(.08,1,i))+r+a;return{point:[t,n,s],rx:o*1.12,ry:o*.88}}function vM(i){let e,t,n;if(i<.68){const l=i/.68,c=ht(.12*Math.PI,1.06*Math.PI,l);e=Math.cos(c)*.28-.01,t=Math.sin(c)*.18+.02,n=ht(-.04,.02,l)}else{const l=(i-.68)/.32,c=ht(1.06*Math.PI,1.78*Math.PI,l);e=Math.cos(c)*.24-.05,t=Math.sin(c)*.17-.01,n=ht(.02,.08,l)}const s=.024*Math.exp(-Math.pow((i-.08)/.1,2)),r=.028*Math.exp(-Math.pow((i-.68)/.1,2)),a=et(0,.08,i)*et(1,.92,i),o=(.036+s+r)*(.45+.55*a);return{point:[e,t,n],rx:o*.9,ry:o*1.18}}function xM(){const i=[{pos:[.06,.34,.14],rot:[.25,.35,-.95],scale:[.48,.18,.24]},{pos:[.14,.38,.18],rot:[.22,.38,-.98],scale:[.52,.18,.25]},{pos:[.2,.04,.26],rot:[.15,.55,-1.42],scale:[.5,.18,.24]},{pos:[.14,-.28,.12],rot:[-.25,.3,-2.05],scale:[.46,.18,.22]},{pos:[-.56,.38,-.18],rot:[.3,-.45,.95],scale:[.46,.18,.22]},{pos:[-.62,-.26,.2],rot:[-.22,.4,2.1],scale:[.44,.18,.22]}],e=[[[.24,.24,.16],[.44,.36,.26]],[[.44,.36,.26],[.58,.2,.16]],[[.44,.36,.26],[.38,.46,.02]],[[.28,.08,.28],[.52,.04,.32]],[[.52,.04,.32],[.58,.2,.16]],[[.52,.04,.32],[.64,-.06,.18]],[[.34,.14,-.14],[.5,.28,-.22]],[[.5,.28,-.22],[.58,.2,.16]],[[.5,.28,-.22],[.42,.02,-.32]]],t=[{pos:[-.46,-.52,.34],rot:[.35,.4,1.05]},{pos:[.02,-.56,-.24],rot:[-.45,.25,.85]},{pos:[.54,.34,-.3],rot:[.6,-.4,1.3]},{pos:[-.66,.04,.46],rot:[.2,.75,-.7]},{pos:[.06,.58,-.24],rot:[-.25,.5,1.4]},{pos:[.64,-.36,-.14],rot:[.5,-.3,.9]}],n=[[-.08,-.46,.42],[.64,.16,.26],[-.58,-.38,-.36],[.24,-.52,-.4],[-.2,.62,.26],[.48,-.1,-.48],[-.74,.14,-.2]],s=z("#72a6cf",{roughness:.42,clearcoat:.35,emissive:"#1f4969",emissiveIntensity:.12}),r=z("#64b8cc",{roughness:.38,clearcoat:.35,emissive:"#1a5668",emissiveIntensity:.14}),a=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),o=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26}),l=z("#b974d6",{opacity:.46,roughness:.28,clearcoat:.72,emissive:"#572173",emissiveIntensity:.16}),c=z("#d99cf2",{roughness:.45,emissive:"#78319c",emissiveIntensity:.22});return{units:"schematic",canonicalDiameter:2,notes:"Generic mammalian cell. A sculpted translucent membrane encloses a porous nuclear envelope with chromatin and nucleolus, curved rough ER cisternae with ribosomes, an interconnected smooth ER tubule network, arched Golgi cisternae with budding vesicles, double-membrane mitochondria with cristae, and enzyme-cored lysosomes.",parts:[U({id:"plasma-membrane",shape:"organicBlob",position:[0,0,0],scale:[1.94,1.72,1.64],material:z("#7cc9d6",{opacity:.1,roughness:.26,clearcoat:.78,emissive:"#265c66",emissiveIntensity:.06}),structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:48}),U({id:"nucleus",shape:"sphere",position:[-.28,.08,0],scale:[.76,.72,.7],material:z("#8b7bd8",{opacity:.46,roughness:.34,clearcoat:.62,emissive:"#3c2d78",emissiveIntensity:.14}),structureId:"nucleus",segments:40}),U({id:"nucleus-chromatin",shape:"torusKnot",position:[-.28,.08,0],scale:[.42,.4,.4],material:z("#a999f0",{roughness:.5,emissive:"#4f3ca1",emissiveIntensity:.18}),structureId:"nucleus",segments:32}),U({id:"nucleolus",shape:"sphere",position:[-.36,.16,.08],scale:[.22,.22,.22],material:z("#5645a8",{roughness:.45,emissive:"#2e1f78",emissiveIntensity:.2}),structureId:"nucleus",segments:22}),U({id:"nuclear-pore",shape:"torus",position:[-.28,.08,0],scale:[.055,.055,.055],material:z("#c8bbf5",{roughness:.4}),structureId:"nucleus",segments:12,repeat:yt({count:16,pattern:"shell",seed:109,extent:[.37,.35,.34],jitterRotation:1.5})}),...i.map((h,u)=>U({id:`rough-er-${u}`,shape:"curvedSheet",position:h.pos,rotation:h.rot,scale:h.scale,material:s,structureId:"rough-er",segments:20})),U({id:"rough-er-ribosome",shape:"sphere",position:[-.08,.12,.08],scale:[.022,.022,.022],material:z("#f2dc9b",{roughness:.5,emissive:"#785a1a",emissiveIntensity:.14}),structureId:"rough-er",segments:8,repeat:yt({count:42,pattern:"shell",seed:101,extent:[.46,.44,.38],jitter:.22})}),...e.map(([h,u],f)=>{const d=Pt(h,u,.042,2);return U({id:`smooth-er-${f}`,shape:"capsule",position:d.position,rotation:d.rotation,scale:d.scale,material:r,structureId:"smooth-er",segments:14})}),U({id:"golgi",shape:"curvedSheet",position:[.46,-.32,.32],scale:[.34,.22,.24],material:z("#e0c463",{roughness:.38,clearcoat:.35,emissive:"#6d5a18",emissiveIntensity:.14}),structureId:"golgi",rotation:[.22,.45,-.18],segments:20,repeat:yt({count:5,pattern:"line",axis:"y",extent:[.04,.11,.04]})}),U({id:"golgi-vesicle",shape:"sphere",position:[.6,-.32,.38],scale:[.036,.036,.036],material:z("#f2da83",{roughness:.35,emissive:"#8a6d19",emissiveIntensity:.16}),structureId:"golgi",segments:12,repeat:yt({count:7,pattern:"scatter",seed:111,extent:[.16,.12,.12],jitter:.25})}),...t.flatMap((h,u)=>[U({id:`mitochondrion-${u}`,shape:"capsule",position:h.pos,rotation:h.rot,scale:[.088,.15,.088],material:a,structureId:"mitochondrion",segments:16}),U({id:`mitochondrion-cristae-${u}`,shape:"torusKnot",position:h.pos,rotation:h.rot,scale:[.05,.115,.05],material:o,structureId:"mitochondrion",segments:18})]),...n.flatMap((h,u)=>[U({id:`lysosome-${u}`,shape:"sphere",position:h,scale:[.15,.15,.15],material:l,structureId:"lysosome",segments:20}),U({id:`lysosome-core-${u}`,shape:"sphere",position:h,scale:[.075,.075,.075],material:c,structureId:"lysosome",segments:12})])]}}function MM(){const i=[{pos:[-.36,.22,.04],rot:Hn([0,1,.2])},{pos:[.18,.14,.175],rot:Hn([0,.6,.8])},{pos:[.44,-.18,.135],rot:Hn([0,-.8,.6])},{pos:[-.14,-.205,-.09],rot:Hn([0,-.9,-.4])},{pos:[.3,.17,-.145],rot:Hn([0,.75,-.65])}],e=24,t=Array.from({length:e},(s,r)=>{const a=-.64+r/(e-1)*1.28,o=r*2.3999632,l=Math.cos(o),c=Math.sin(o),h=.215,u=.11+r*17%5*.012,f=(r%2===0?1:-1)*.18,d=[f,l,c];return{pos:[a+f*(u*.45),l*(h+u*.42),c*(h+u*.42)],rot:ka(d),len:u}}),n=z("#c8dec8",{roughness:.5,clearcoat:.25,emissive:"#405c44",emissiveIntensity:.08});return{units:"schematic",canonicalDiameter:2,notes:"Schematic Gram-negative rod aligned horizontally along X. Three glossy envelope layers (outer membrane with porins, peptidoglycan wall, and plasma membrane) have an authored cutaway enclosing dual supercoiled nucleoid DNA loops, plasmids, cytoplasmically confined 70S ribosomes, basal-body rotor rings with paired continuous helical flagella, and surface-anchored pili.",parts:[U({id:"outer-membrane",shape:"capsule",position:[0,0,0],scale:[.46,1,.46],material:z("#a8c9b8",{opacity:.14,roughness:.28,clearcoat:.68,emissive:"#2c5c44",emissiveIntensity:.07}),rotation:[0,0,Math.PI/2],structureId:"outer-membrane",cutawayHide:!0,outline:!0,segments:36}),...i.map((s,r)=>U({id:`outer-porin-${r}`,shape:"torus",position:s.pos,rotation:s.rot,scale:[.05,.05,.07],material:z("#cce3d6",{roughness:.35,emissive:"#3b6e52",emissiveIntensity:.12}),structureId:"outer-membrane",cutawayHide:!0,segments:12})),U({id:"cell-wall",shape:"capsule",position:[0,0,0],scale:[.42,.95,.42],material:z("#75b59a",{opacity:.22,roughness:.45,clearcoat:.55,emissive:"#1f5c44",emissiveIntensity:.08}),rotation:[0,0,Math.PI/2],structureId:"cell-wall",cutawayHide:!0,outline:!0,segments:32}),U({id:"plasma-membrane",shape:"capsule",position:[0,0,0],scale:[.38,.9,.38],material:z("#7cc9d6",{opacity:.16,roughness:.28,clearcoat:.68,emissive:"#2c6773",emissiveIntensity:.07}),rotation:[0,0,Math.PI/2],structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:32}),U({id:"nucleoid",shape:"torusKnot",position:[.06,0,0],scale:[.56,.22,.22],material:z("#8fe0a4",{roughness:.45,clearcoat:.2,emissive:"#296e3c",emissiveIntensity:.18}),rotation:[.35,.15,.25],structureId:"nucleoid",segments:84}),U({id:"nucleoid-loop-b",shape:"torusKnot",position:[-.08,.01,-.01],scale:[.44,.18,.18],material:z("#a8d99a",{roughness:.48,emissive:"#3a782f",emissiveIntensity:.14}),rotation:[1.1,.4,-.3],structureId:"nucleoid",segments:64}),U({id:"nucleoid-plasmid-a",shape:"torus",position:[.46,.06,.06],rotation:[.7,.3,.2],scale:[.075,.075,.06],material:z("#c4f0a8",{roughness:.4,emissive:"#4d8a32",emissiveIntensity:.2}),structureId:"nucleoid",segments:20}),U({id:"nucleoid-plasmid-b",shape:"torus",position:[-.42,-.06,-.06],rotation:[-.5,.8,.1],scale:[.065,.065,.06],material:z("#c4f0a8",{roughness:.4,emissive:"#4d8a32",emissiveIntensity:.2}),structureId:"nucleoid",segments:20}),U({id:"ribosome",shape:"sphere",position:[0,0,0],scale:[.024,.024,.024],material:z("#f5dd9d",{roughness:.5,emissive:"#785a18",emissiveIntensity:.14}),structureId:"ribosome",segments:8,repeat:yt({count:52,pattern:"scatter",seed:83,extent:[.64,.12,.12],jitter:.25})}),U({id:"flagellum-filament",shape:"tubeHelix",position:[-1.42,.02,0],scale:[.82,.24,.24],material:z("#d6e2e8",{roughness:.38,clearcoat:.45,emissive:"#526670",emissiveIntensity:.14}),structureId:"flagellum",segments:48}),U({id:"flagellum-filament-b",shape:"tubeHelix",position:[-1.44,-.06,.05],rotation:[1.8,.08,-.14],scale:[.8,.22,.22],material:z("#c5d4db",{roughness:.4,clearcoat:.4,emissive:"#455963",emissiveIntensity:.12}),structureId:"flagellum",segments:44}),U({id:"flagellum-hook",shape:"capsule",position:[-1,0,0],rotation:[0,0,Math.PI/2],scale:[.032,.075,.032],material:z("#e3ebf0",{roughness:.35,clearcoat:.5}),structureId:"flagellum",segments:16}),U({id:"flagellum-motor-l",shape:"torus",position:[-.94,0,0],rotation:[0,Math.PI/2,0],scale:[.095,.095,.08],material:z("#e8b878",{roughness:.4,emissive:"#784d18",emissiveIntensity:.18}),structureId:"flagellum",segments:18}),U({id:"flagellum-motor-ms",shape:"torus",position:[-.88,0,0],rotation:[0,Math.PI/2,0],scale:[.115,.115,.09],material:z("#d69d5a",{roughness:.4,emissive:"#6b4214",emissiveIntensity:.18}),structureId:"flagellum",segments:18}),...t.map((s,r)=>U({id:`pilus-${r}`,shape:"taperedBranch",position:s.pos,rotation:s.rot,scale:[.018,s.len,.018],material:n,structureId:"pilus",segments:10}))]}}function yM(){const i=[{pos:[-.495,.25,.16],rot:[0,0,Math.PI/2]},{pos:[-.495,-.22,-.14],rot:[0,0,Math.PI/2]},{pos:[.495,.28,-.14],rot:[0,0,Math.PI/2]},{pos:[.495,-.18,.18],rot:[0,0,Math.PI/2]},{pos:[.16,.2,.495],rot:[Math.PI/2,0,0]},{pos:[-.18,-.2,-.495],rot:[Math.PI/2,0,0]}],e=[{pos:[-.26,-.58,.24],rot:[.2,.1,.12]},{pos:[.26,-.56,-.22],rot:[-.15,.3,-.1]},{pos:[-.24,.44,-.2],rot:[.1,-.2,.18]},{pos:[.26,.42,.2],rot:[-.2,.25,-.15]},{pos:[-.28,.04,.24],rot:[.25,.1,-.08]},{pos:[.28,-.08,-.24],rot:[-.12,-.2,.14]}],t=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),n=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26});return{units:"schematic",canonicalDiameter:2,notes:"Schematic intestinal enterocyte. A glossy columnar membrane (with authored cutaway) carries apical a 7×7 brush border of tapered microvilli, a dual-strand tight-junction sealing belt, lateral desmosome plaques, basal porous nucleus, cristae-filled mitochondria, curved supranuclear rough ER sheets with ribosomes, and apical Golgi cisternae with budding secretory vesicles.",parts:[U({id:"basolateral-shell",shape:"roundedBox",position:[0,-.04,0],scale:[.99,1.58,.99],material:z("#7cc9d6",{opacity:.14,roughness:.26,clearcoat:.72,emissive:"#245761",emissiveIntensity:.06}),structureId:"basolateral-membrane",cutawayHide:!0,outline:!0,segments:20}),U({id:"basolateral-contact",shape:"roundedBox",position:[0,-.84,0],scale:[1.02,.06,1.02],material:z("#6ab5c2",{opacity:.32,roughness:.4,clearcoat:.45,emissive:"#1f4d57",emissiveIntensity:.08}),structureId:"basolateral-membrane",segments:16}),...i.map((s,r)=>U({id:`desmosome-${r}`,shape:"disc",position:s.pos,rotation:s.rot,scale:[.11,.16,.11],material:z("#e39d66",{roughness:.4,emissive:"#7a3b14",emissiveIntensity:.14}),structureId:"basolateral-membrane",cutawayHide:!0,segments:14})),U({id:"apical-membrane",shape:"roundedBox",position:[0,.76,0],scale:[.85,.055,.85],material:z("#e0b5a0",{opacity:.38,roughness:.32,clearcoat:.65,emissive:"#69412f",emissiveIntensity:.08}),structureId:"microvilli",segments:16}),U({id:"microvillus",shape:"taperedBranch",position:[0,.91,0],scale:[.055,.26,.055],material:z("#edd0be",{roughness:.4,clearcoat:.35,emissive:"#7a5038",emissiveIntensity:.08}),structureId:"microvilli",segments:12,repeat:yt({count:49,pattern:"grid",seed:5,extent:[.33,0,.33]})}),U({id:"tight-junction",shape:"torus",position:[0,.65,0],scale:[1.03,1.03,.44],material:z("#e8a85a",{roughness:.32,clearcoat:.45,emissive:"#8a4b12",emissiveIntensity:.2}),rotation:[Math.PI/2,0,0],structureId:"tight-junction",segments:40}),U({id:"tight-junction-lower",shape:"torus",position:[0,.6,0],scale:[1.03,1.03,.4],material:z("#d99245",{roughness:.35,emissive:"#783f0e",emissiveIntensity:.16}),rotation:[Math.PI/2,0,0],structureId:"tight-junction",segments:40}),U({id:"nucleus",shape:"sphere",position:[0,-.36,.02],scale:[.44,.44,.42],material:z("#8b7bd8",{opacity:.48,roughness:.35,clearcoat:.6,emissive:"#3c2d78",emissiveIntensity:.14}),structureId:"nucleus",segments:34}),U({id:"nucleus-chromatin",shape:"torusKnot",position:[0,-.36,.02],scale:[.24,.24,.24],material:z("#a999f0",{roughness:.5,emissive:"#4f3ca1",emissiveIntensity:.18}),structureId:"nucleus",segments:26}),U({id:"nucleolus",shape:"sphere",position:[.05,-.31,.07],scale:[.12,.12,.12],material:z("#5645a8",{roughness:.45,emissive:"#2e1f78",emissiveIntensity:.22}),structureId:"nucleus",segments:18}),U({id:"nuclear-pore",shape:"torus",position:[0,-.36,.02],scale:[.036,.036,.036],material:z("#c8bbf5",{roughness:.4}),structureId:"nucleus",segments:10,repeat:yt({count:12,pattern:"shell",seed:71,extent:[.21,.21,.2],jitterRotation:1.5})}),...e.flatMap((s,r)=>[U({id:`mitochondrion-${r}`,shape:"capsule",position:s.pos,rotation:s.rot,scale:[.064,.11,.064],material:t,structureId:"mitochondrion",segments:14}),U({id:`mitochondrion-cristae-${r}`,shape:"torusKnot",position:s.pos,rotation:s.rot,scale:[.036,.085,.036],material:n,structureId:"mitochondrion",segments:16})]),U({id:"rough-er-sheet",shape:"curvedSheet",position:[-.02,-.02,-.02],scale:[.54,.18,.28],material:z("#72a6cf",{roughness:.42,clearcoat:.35,emissive:"#1f4969",emissiveIntensity:.12}),structureId:"rough-er",rotation:[.25,.2,.15],segments:18,repeat:yt({count:5,pattern:"line",axis:"y",extent:[0,.16,0]})}),U({id:"rough-er-ribosome",shape:"sphere",position:[-.02,-.02,-.02],scale:[.022,.022,.022],material:z("#f2dc9b",{roughness:.5,emissive:"#785a1a",emissiveIntensity:.14}),structureId:"rough-er",segments:8,repeat:yt({count:34,pattern:"scatter",seed:73,extent:[.26,.22,.14],jitter:.25})}),U({id:"golgi",shape:"curvedSheet",position:[.04,.32,.02],scale:[.36,.18,.22],material:z("#e0c463",{roughness:.38,clearcoat:.35,emissive:"#6d5a18",emissiveIntensity:.14}),structureId:"golgi",rotation:[.18,-.35,0],segments:20,repeat:yt({count:5,pattern:"line",axis:"y",extent:[0,.11,0]})}),U({id:"golgi-vesicle",shape:"sphere",position:[.04,.48,.06],scale:[.032,.032,.032],material:z("#f2da83",{roughness:.35,emissive:"#8a6d19",emissiveIntensity:.16}),structureId:"golgi",segments:12,repeat:yt({count:6,pattern:"scatter",seed:77,extent:[.18,.08,.14],jitter:.2})})]}}function SM(){const e=dM(!0,44),t=z("#d9b8a4",{roughness:.48,clearcoat:.24,emissive:"#5c4032",emissiveIntensity:.07}),n=z("#f2e7d3",{roughness:.4,clearcoat:.28,emissive:"#6b5d47",emissiveIntensity:.1}),s=z("#e0765e",{roughness:.44,clearcoat:.3,emissive:"#692516",emissiveIntensity:.12}),r=z("#e8b254",{roughness:.38,clearcoat:.38,emissive:"#6e470c",emissiveIntensity:.16}),a=z("#d95574",{roughness:.36,clearcoat:.42,emissive:"#6e192c",emissiveIntensity:.18}),o=z("#e8d0b8",{roughness:.42,clearcoat:.3,emissive:"#5e4a36",emissiveIntensity:.12}),l=z("#b47cc9",{roughness:.4,clearcoat:.35,emissive:"#492459",emissiveIntensity:.14}),c=z("#5ab896",{roughness:.38,clearcoat:.35,emissive:"#1a543f",emissiveIntensity:.14}),h=z("#74d4b2",{roughness:.36,clearcoat:.42,emissive:"#1d634a",emissiveIntensity:.16}),u=z("#6fd8fa",{opacity:.44,roughness:.18,clearcoat:.86,emissive:"#1c7aa3",emissiveIntensity:.22}),f=z("#ebd58c",{roughness:.4,clearcoat:.3,emissive:"#69551c",emissiveIntensity:.12}),d=z("#bd8666",{roughness:.48,clearcoat:.22,emissive:"#4f311b",emissiveIntensity:.09}),g=z("#d4c2ad",{roughness:.45,clearcoat:.24,emissive:"#574a39",emissiveIntensity:.08}),v=Pt([.11,-.14,0],[.155,-.255,0],.024,1),p=Pt([-.06,-.05,0],[-.13,-.21,0],.022,1),m=Pt([.24,-.15,.045],[.54,-.15,.055],.02,1),M=Pt([.24,-.15,-.045],[.54,-.15,-.055],.02,1),S=Pt([.19,-.17,.03],[.46,-.19,.12],.024,1),x=Pt([.19,-.17,-.03],[.46,-.19,-.12],.024,1),w=Pt([.17,-.17,.03],[-.03,-.07,.1],.02,1),T=Pt([.17,-.17,-.03],[-.03,-.07,-.1],.02,1),_=Pt([-.175,-.68,0],[-.185,-.84,0],.112,1);return{units:"schematic",canonicalDiameter:2,notes:"Schematic sagittal and deep-structure cutout of the human brain. The left cerebral hemisphere forms a recessed background cradle while the right cortex is opened to expose the corpus callosum, cingulate gyrus, hippocampus, amygdala, fornix, mammillary bodies, thalamus, hypothalamus and pituitary gland, translucent ventricles, cranial olfactory and optic pathways, cerebellum, and brainstem with upper spinal cord.",parts:[U({id:"cutout-left-hemisphere",shape:"brainCutoutHemisphere",position:[e.position[0],e.position[1],-e.position[2]],scale:e.scale,material:t,structureId:"cerebral-cortex",cutawayHide:!0,mirrorZ:!0,segments:44}),U({id:"corpus-callosum",shape:"corpusCallosum",position:[.04,.12,-.01],scale:[.64,.25,.22],material:n,structureId:"corpus-callosum",segments:38}),U({id:"cingulate-gyrus-right",shape:"limbicArch",position:[.03,.14,.06],scale:[.74,.36,.075],material:s,structureId:"cingulate-gyrus",segments:32}),U({id:"cingulate-gyrus-left",shape:"limbicArch",position:[.03,.14,-.08],scale:[.74,.36,.075],material:s,structureId:"cingulate-gyrus",mirrorZ:!0,segments:32}),U({id:"hippocampus-right",shape:"hippocampusArch",position:[-.06,-.1,.155],scale:[.4,.26,.16],material:r,structureId:"hippocampus",segments:36}),U({id:"hippocampus-left",shape:"hippocampusArch",position:[-.06,-.1,-.155],scale:[.4,.26,.16],material:r,structureId:"hippocampus",mirrorZ:!0,segments:36}),U({id:"amygdala-right",shape:"organicBlob",position:[.15,-.17,.165],scale:[.11,.095,.09],material:a,structureId:"amygdala",segments:20}),U({id:"amygdala-left",shape:"organicBlob",position:[.15,-.17,-.165],scale:[.11,.095,.09],material:a,structureId:"amygdala",mirrorZ:!0,segments:20}),U({id:"fornix-right",shape:"limbicArch",position:[.01,.02,.045],rotation:[0,0,-.12],scale:[.42,.26,.055],material:o,structureId:"fornix",segments:32}),U({id:"fornix-left",shape:"limbicArch",position:[.01,.02,-.045],rotation:[0,0,-.12],scale:[.42,.26,.055],material:o,structureId:"fornix",mirrorZ:!0,segments:32}),U({id:"mammillary-right",shape:"sphere",position:[.06,-.14,.036],scale:[.048,.048,.048],material:o,structureId:"fornix",segments:16}),U({id:"mammillary-left",shape:"sphere",position:[.06,-.14,-.036],scale:[.048,.048,.048],material:o,structureId:"fornix",segments:16}),U({id:"anterior-commissure",shape:"cylinder",position:[.14,-.03,0],rotation:[Math.PI/2,0,0],scale:[.028,.14,.028],material:o,structureId:"fornix",segments:12}),U({id:"thalamus-right",shape:"organicBlob",position:[-.03,0,.075],scale:[.25,.17,.13],material:l,structureId:"thalamus",segments:24}),U({id:"thalamus-left",shape:"organicBlob",position:[-.03,0,-.075],scale:[.25,.17,.13],material:l,structureId:"thalamus",mirrorZ:!0,segments:24}),U({id:"interthalamic-adhesion",shape:"cylinder",position:[-.02,.01,0],rotation:[Math.PI/2,0,0],scale:[.045,.13,.045],material:l,structureId:"thalamus",segments:14}),U({id:"hypothalamus",shape:"organicBlob",position:[.09,-.1,0],scale:[.15,.12,.1],material:c,structureId:"hypothalamus-pituitary",segments:20}),U({id:"infundibulum",shape:"taperedBranch",position:v.position,rotation:v.rotation,scale:v.scale,material:c,structureId:"hypothalamus-pituitary",segments:14}),U({id:"pituitary-anterior",shape:"sphere",position:[.165,-.275,0],scale:[.078,.068,.075],material:h,structureId:"hypothalamus-pituitary",segments:18}),U({id:"pituitary-posterior",shape:"sphere",position:[.135,-.275,0],scale:[.052,.062,.058],material:c,structureId:"hypothalamus-pituitary",segments:16}),U({id:"lateral-ventricle-right",shape:"ventricleHorn",position:[0,0,.095],scale:[.6,.4,.14],material:u,structureId:"cerebral-ventricles",segments:34}),U({id:"lateral-ventricle-left",shape:"ventricleHorn",position:[0,0,-.095],scale:[.6,.4,.14],material:u,structureId:"cerebral-ventricles",mirrorZ:!0,segments:34}),U({id:"third-ventricle",shape:"organicBlob",position:[-.02,-.02,0],scale:[.15,.14,.042],material:u,structureId:"cerebral-ventricles",segments:18}),U({id:"cerebral-aqueduct",shape:"cylinder",position:p.position,rotation:p.rotation,scale:p.scale,material:u,structureId:"cerebral-ventricles",segments:12}),U({id:"fourth-ventricle",shape:"organicBlob",position:[-.14,-.25,0],scale:[.095,.13,.085],material:u,structureId:"cerebral-ventricles",segments:18}),U({id:"olfactory-tract-right",shape:"taperedBranch",position:m.position,rotation:m.rotation,scale:m.scale,material:f,structureId:"olfactory-optic",segments:12}),U({id:"olfactory-tract-left",shape:"taperedBranch",position:M.position,rotation:M.rotation,scale:M.scale,material:f,structureId:"olfactory-optic",segments:12}),U({id:"olfactory-bulb-right",shape:"capsule",position:[.57,-.15,.058],rotation:[0,0,Math.PI/2],scale:[.036,.068,.036],material:f,structureId:"olfactory-optic",segments:14}),U({id:"olfactory-bulb-left",shape:"capsule",position:[.57,-.15,-.058],rotation:[0,0,Math.PI/2],scale:[.036,.068,.036],material:f,structureId:"olfactory-optic",segments:14}),U({id:"optic-chiasm",shape:"organicBlob",position:[.18,-.17,0],scale:[.075,.042,.085],material:f,structureId:"olfactory-optic",segments:16}),U({id:"optic-nerve-right",shape:"taperedBranch",position:S.position,rotation:S.rotation,scale:S.scale,material:f,structureId:"olfactory-optic",segments:12}),U({id:"optic-nerve-left",shape:"taperedBranch",position:x.position,rotation:x.rotation,scale:x.scale,material:f,structureId:"olfactory-optic",segments:12}),U({id:"optic-tract-right",shape:"taperedBranch",position:w.position,rotation:w.rotation,scale:w.scale,material:f,structureId:"olfactory-optic",segments:12}),U({id:"optic-tract-left",shape:"taperedBranch",position:T.position,rotation:T.rotation,scale:T.scale,material:f,structureId:"olfactory-optic",segments:12}),U({id:"cerebellum-right",shape:"cerebellumLobe",position:[-.41,-.29,.17],scale:[.46,.36,.32],material:d,structureId:"cerebellum",segments:34}),U({id:"cerebellum-left",shape:"cerebellumLobe",position:[-.41,-.29,-.17],scale:[.46,.36,.32],material:d,structureId:"cerebellum",mirrorZ:!0,segments:34}),U({id:"cerebellum-vermis",shape:"organicBlob",position:[-.42,-.29,0],scale:[.28,.27,.12],material:d,structureId:"cerebellum",segments:20}),U({id:"brainstem",shape:"brainstemCore",position:[-.1,-.4,0],scale:[.3,.7,.26],material:g,structureId:"brainstem",segments:32}),U({id:"spinal-cord",shape:"taperedBranch",position:_.position,rotation:_.rotation,scale:_.scale,material:g,structureId:"brainstem",segments:18})]}}function bM(){const i={frontal:"brainFrontalLobe",motor:"brainMotorCortex",sensory:"brainSensoryCortex",parietal:"brainParietalLobe",temporal:"brainTemporalLobe",occipital:"brainOccipitalLobe"},e={frontal:z("#d9877a",{roughness:.44,clearcoat:.28,emissive:"#5e2820",emissiveIntensity:.08}),motor:z("#e2b666",{roughness:.42,clearcoat:.3,emissive:"#694c16",emissiveIntensity:.1}),sensory:z("#78b4d8",{roughness:.42,clearcoat:.3,emissive:"#1f4e6b",emissiveIntensity:.1}),parietal:z("#829acc",{roughness:.44,clearcoat:.28,emissive:"#243763",emissiveIntensity:.08}),temporal:z("#6ea895",{roughness:.44,clearcoat:.28,emissive:"#1c4d3e",emissiveIntensity:.08}),occipital:z("#9e89c4",{roughness:.44,clearcoat:.28,emissive:"#3a295e",emissiveIntensity:.08})},t=36;function n(u,f){const d=uM(u,t),g=i[u],v=e[u];return[U({id:`${u}-lobe-right`,shape:g,position:d.position,scale:d.scale,material:v,structureId:f,cutawayHide:!0,segments:t}),U({id:`${u}-lobe-left`,shape:g,position:[d.position[0],d.position[1],-d.position[2]],scale:d.scale,material:v,structureId:f,mirrorZ:!0,segments:t})]}const s=z("#b98867",{roughness:.48,clearcoat:.22,emissive:"#4f311b",emissiveIntensity:.09}),r=z("#d4c2ad",{roughness:.45,clearcoat:.24,emissive:"#574a39",emissiveIntensity:.08}),a=z("#f5ebd6",{roughness:.4,clearcoat:.28,emissive:"#6b5d47",emissiveIntensity:.1}),o=z("#b47cc9",{roughness:.4,clearcoat:.34,emissive:"#492459",emissiveIntensity:.12}),l=z("#e8b254",{roughness:.38,clearcoat:.36,emissive:"#69450d",emissiveIntensity:.14}),c=z("#d95574",{roughness:.36,clearcoat:.4,emissive:"#69192c",emissiveIntensity:.16}),h=z("#e3c18a",{roughness:.42,clearcoat:.3,emissive:"#5c4835",emissiveIntensity:.1});return{units:"schematic",canonicalDiameter:2,notes:"Schematic intact 3D human brain modelled after interactive whole-brain anatomy atlases. Bilateral cerebral hemispheres partition cleanly along anatomical sulcal landmarks into frontal, primary motor, primary somatosensory, parietal, temporal, and occipital regions with folded gyri and sulci, sitting above a striated cerebellum and sculpted brainstem. Enabling cutaway hides the right-hemisphere cortex to expose the midline corpus callosum and internal limbic core.",parts:[...n("frontal","frontal-lobe"),...n("motor","motor-cortex"),...n("sensory","somatosensory-cortex"),...n("parietal","parietal-lobe"),...n("temporal","temporal-lobe"),...n("occipital","occipital-lobe"),U({id:"cerebellum-right",shape:"cerebellumLobe",position:[-.43,-.32,.18],scale:[.5,.38,.35],material:s,structureId:"cerebellum",segments:34}),U({id:"cerebellum-left",shape:"cerebellumLobe",position:[-.43,-.32,-.18],scale:[.5,.38,.35],material:s,structureId:"cerebellum",mirrorZ:!0,segments:34}),U({id:"cerebellum-vermis",shape:"organicBlob",position:[-.43,-.32,0],scale:[.3,.28,.13],material:s,structureId:"cerebellum",segments:20}),U({id:"brainstem",shape:"brainstemCore",position:[-.08,-.42,0],scale:[.31,.72,.27],material:r,structureId:"brainstem",segments:32}),U({id:"corpus-callosum",shape:"corpusCallosum",position:[.04,.11,0],scale:[.62,.24,.28],material:a,structureId:"corpus-callosum",segments:36}),U({id:"thalamus-right",shape:"organicBlob",position:[-.03,0,.08],scale:[.24,.16,.13],material:o,structureId:"limbic-core",segments:22}),U({id:"thalamus-left",shape:"organicBlob",position:[-.03,0,-.08],scale:[.24,.16,.13],material:o,structureId:"limbic-core",mirrorZ:!0,segments:22}),U({id:"hippocampus-right",shape:"hippocampusArch",position:[-.06,-.09,.125],scale:[.34,.21,.12],material:l,structureId:"limbic-core",segments:32}),U({id:"hippocampus-left",shape:"hippocampusArch",position:[-.06,-.09,-.125],scale:[.34,.21,.12],material:l,structureId:"limbic-core",mirrorZ:!0,segments:32}),U({id:"amygdala-right",shape:"organicBlob",position:[.1,-.13,.13],scale:[.085,.075,.07],material:c,structureId:"limbic-core",segments:18}),U({id:"amygdala-left",shape:"organicBlob",position:[.1,-.13,-.13],scale:[.085,.075,.07],material:c,structureId:"limbic-core",mirrorZ:!0,segments:18}),U({id:"fornix-right",shape:"limbicArch",position:[.01,.02,.045],rotation:[0,0,-.1],scale:[.4,.24,.055],material:h,structureId:"limbic-core",segments:28}),U({id:"fornix-left",shape:"limbicArch",position:[.01,.02,-.045],rotation:[0,0,-.1],scale:[.4,.24,.055],material:h,structureId:"limbic-core",mirrorZ:!0,segments:28})]}}function EM(){const i=[-.9,-.6,-.3,0,.3,.6,.9],e=[-.75,-.45,-.15,.15,.45,.75],t=[-.675,-.225,.225,.675],n=[{pos:[-.82,.26,.26],rot:[.1,.1,Math.PI/2]},{pos:[-.4,-.28,.24],rot:[-.1,.2,Math.PI/2]},{pos:[.04,.28,-.24],rot:[.15,-.1,Math.PI/2]},{pos:[.46,-.26,-.26],rot:[-.2,.1,Math.PI/2]},{pos:[.82,.22,.26],rot:[.1,-.2,Math.PI/2]},{pos:[-.62,-.1,-.32],rot:[.2,.1,Math.PI/2]},{pos:[.22,.12,.34],rot:[-.1,.1,Math.PI/2]},{pos:[.64,-.32,.12],rot:[.1,.2,Math.PI/2]}],s=[{pos:[-.72,.42,.12],scale:[.28,.14,.18],rot:[.1,.2,.15]},{pos:[-.14,-.43,.1],scale:[.28,.14,.18],rot:[-.1,.25,-.1]},{pos:[.36,.41,-.16],scale:[.26,.14,.18],rot:[.12,-.2,.18]},{pos:[.82,-.4,-.12],scale:[.26,.14,.18],rot:[-.15,-.25,-.12]}],r=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),a=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26}),o=z("#8b7bd8",{opacity:.78,roughness:.38,clearcoat:.45,emissive:"#3c2d78",emissiveIntensity:.14}),l=z("#5645a8",{roughness:.45,emissive:"#2e1f78",emissiveIntensity:.22});return{units:"schematic",canonicalDiameter:2,notes:"Schematic skeletal muscle fiber drawn along the x-axis. A glossy sarcolemma (with authored cutaway) encloses 13 densely packed myofibrils crossed by alternating Z-discs and A-bands, transverse T-tubule rings with internal cross-bridges flanked by terminal sarcoplasmic reticulum cisternae forming triads, cristae-rich intermyofibrillar mitochondria, and peripheral flattened nuclei.",parts:[U({id:"sarcolemma",shape:"cylinder",position:[0,0,0],scale:[1.02,2.4,1.02],material:z("#e0a9a0",{opacity:.12,roughness:.26,clearcoat:.75,emissive:"#7a2f24",emissiveIntensity:.06}),rotation:[0,0,Math.PI/2],structureId:"sarcolemma",cutawayHide:!0,outline:!0,segments:40}),U({id:"myofibril-center",shape:"cylinder",position:[0,0,0],scale:[.082,2.12,.082],material:z("#c96b6b",{roughness:.46,clearcoat:.2,emissive:"#5c1f1f",emissiveIntensity:.09}),rotation:[0,0,Math.PI/2],structureId:"myofibril",segments:12}),U({id:"myofibril-inner",shape:"cylinder",position:[0,0,0],scale:[.08,2.12,.08],material:z("#cf7474",{roughness:.46,clearcoat:.2,emissive:"#5c1f1f",emissiveIntensity:.09}),rotation:[0,0,Math.PI/2],structureId:"myofibril",segments:12,repeat:yt({count:6,pattern:"ring",axis:"x",radius:.16})}),U({id:"myofibril",shape:"cylinder",position:[0,0,0],scale:[.08,2.12,.08],material:z("#c96b6b",{roughness:.46,clearcoat:.2,emissive:"#5c1f1f",emissiveIntensity:.09}),rotation:[0,0,Math.PI/2],structureId:"myofibril",segments:12,repeat:yt({count:6,pattern:"ring",axis:"x",radius:.32})}),...i.map((c,h)=>U({id:`sarcomere-z-${h}`,shape:"disc",position:[c,0,0],scale:[.84,.26,.84],material:z("#f2a68d",{roughness:.4,emissive:"#8a3622",emissiveIntensity:.18,opacity:.86}),rotation:[0,0,Math.PI/2],structureId:"sarcomere",segments:28})),...e.map((c,h)=>U({id:`sarcomere-a-${h}`,shape:"disc",position:[c,0,0],scale:[.8,.9,.8],material:z("#b84b48",{roughness:.5,emissive:"#5e1513",emissiveIntensity:.14,opacity:.65}),rotation:[0,0,Math.PI/2],structureId:"sarcomere",segments:26})),...t.flatMap((c,h)=>[U({id:`t-tubule-ring-${h}`,shape:"torus",position:[c,0,0],scale:[.96,.96,.48],material:z("#6ab4f0",{roughness:.32,clearcoat:.5,emissive:"#1c568c",emissiveIntensity:.2}),rotation:[0,Math.PI/2,0],structureId:"t-tubule",segments:36}),U({id:`t-tubule-cross-${h}`,shape:"cylinder",position:[c,0,0],scale:[.02,.8,.02],material:z("#7fc4f5",{roughness:.4,emissive:"#1f5a8f",emissiveIntensity:.18}),rotation:[h%2===0?.6:-.6,0,0],structureId:"t-tubule",segments:10})]),...t.flatMap((c,h)=>[U({id:`sr-cisterna-l-${h}`,shape:"torus",position:[c-.045,0,0],scale:[.84,.84,.44],material:z("#63d1c4",{opacity:.72,roughness:.36,clearcoat:.4,emissive:"#1b7068",emissiveIntensity:.18}),rotation:[0,Math.PI/2,0],structureId:"sarcoplasmic-reticulum",segments:32}),U({id:`sr-cisterna-r-${h}`,shape:"torus",position:[c+.045,0,0],scale:[.84,.84,.44],material:z("#63d1c4",{opacity:.72,roughness:.36,clearcoat:.4,emissive:"#1b7068",emissiveIntensity:.18}),rotation:[0,Math.PI/2,0],structureId:"sarcoplasmic-reticulum",segments:32})]),U({id:"sarcoplasmic-reticulum",shape:"capsule",position:[0,0,0],scale:[.024,.14,.024],material:z("#63d1c4",{opacity:.65,roughness:.42,emissive:"#1b7068",emissiveIntensity:.14}),rotation:[0,0,Math.PI/2],structureId:"sarcoplasmic-reticulum",segments:10,repeat:yt({count:14,pattern:"shell",seed:109,extent:[.95,.34,.34],jitter:.25,jitterRotation:.4})}),...n.flatMap((c,h)=>[U({id:`mitochondrion-${h}`,shape:"capsule",position:c.pos,rotation:c.rot,scale:[.068,.13,.068],material:r,structureId:"mitochondrion",segments:14}),U({id:`mitochondrion-cristae-${h}`,shape:"torusKnot",position:c.pos,rotation:c.rot,scale:[.038,.1,.038],material:a,structureId:"mitochondrion",segments:16})]),...s.flatMap((c,h)=>[U({id:`nucleus-peripheral-${h}`,shape:"sphere",position:c.pos,rotation:c.rot,scale:c.scale,material:o,structureId:"nucleus",segments:24}),U({id:`nucleolus-peripheral-${h}`,shape:"sphere",position:[c.pos[0]+.03,c.pos[1],c.pos[2]],scale:[.065,.065,.065],material:l,structureId:"nucleus",segments:14})])]}}function TM(){const i=[[[-.86,.18,.08],[-1.14,.44,.16],.13],[[-.9,.02,.14],[-1.2,.04,.32],.125],[[-.86,-.14,.04],[-1.14,-.38,.08],.125],[[-.82,.1,-.16],[-1.06,.24,-.4],.125],[[-.68,.26,.06],[-.72,.56,.12],.12],[[-.64,-.22,-.1],[-.58,-.52,-.2],.12]],e=[[[-1.12,.42,.15],[-1.3,.62,.22],.068],[[-1.12,.42,.15],[-1.28,.38,.02],.062],[[-1.18,.04,.3],[-1.36,.14,.44],.062],[[-1.18,.04,.3],[-1.32,-.12,.38],.058],[[-1.12,-.36,.08],[-1.3,-.52,.18],.062],[[-1.12,-.36,.08],[-1.26,-.42,-.08],.056],[[-1.04,.23,-.38],[-1.2,.38,-.54],.062],[[-1.04,.23,-.38],[-1.16,.08,-.52],.056],[[-.71,.54,.11],[-.82,.72,.18],.06],[[-.59,-.5,-.19],[-.66,-.68,-.28],.058]],t=z("#cfa87a",{roughness:.48,clearcoat:.22,emissive:"#5e401d",emissiveIntensity:.09}),n=z("#e3c196",{roughness:.4,emissive:"#704d24",emissiveIntensity:.12}),s=[-.24,.06,.36,.66,.96],r=[-.09,.21,.51,.81],a=[{branchTo:[1.34,.18,.1],bouton:[1.38,.2,.11],radius:.115},{branchTo:[1.38,-.14,-.12],bouton:[1.42,-.16,-.13],radius:.105},{branchTo:[1.28,.06,-.24],bouton:[1.32,.07,-.26],radius:.095},{branchTo:[1.26,-.06,.24],bouton:[1.3,-.07,.26],radius:.095}],o=z("#e39d86",{opacity:.44,roughness:.3,clearcoat:.72,emissive:"#7a301c",emissiveIntensity:.16}),l=z("#ffd584",{roughness:.35,emissive:"#9e6b16",emissiveIntensity:.26}),c=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),h=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26}),u=[{pos:[-.84,-.14,.12],rot:[.3,.5,1.1]},{pos:[-.6,.18,-.12],rot:[-.4,.2,.8]},{pos:[-.56,-.12,.14],rot:[.6,-.3,1.2]},{pos:[1.36,.19,.1],rot:[.2,.1,1.35]},{pos:[1.4,-.15,-.12],rot:[-.2,.3,1.45]}],f=[{pos:[-.86,.12,.12],rot:[.4,.5,1.1]},{pos:[-.84,-.12,-.1],rot:[-.3,-.5,-1.2]},{pos:[-.58,-.14,-.14],rot:[.5,.3,-.8]}];return{units:"schematic",canonicalDiameter:2,notes:"Schematic multipolar neuron. An organic translucent soma (with authored cutaway, Nissl ER bodies, and a flared axon hillock) houses a porous nucleus, connected two-tier tapered dendrites with spine knobs, a myelinated axon with evenly spaced internodes exposing nodes of Ranvier, and translucent synaptic boutons packed with neurotransmitter vesicles.",parts:[U({id:"soma",shape:"organicBlob",position:[-.72,.02,0],scale:[.58,.54,.52],material:z("#dfb88b",{opacity:.34,roughness:.28,clearcoat:.68,emissive:"#6b4a24",emissiveIntensity:.1}),structureId:"soma",cutawayHide:!0,outline:!0,segments:40}),U({id:"axon-hillock",shape:"taperedBranch",position:[-.41,.02,0],rotation:[0,0,-Math.PI/2],scale:[.22,.24,.22],material:z("#d9b486",{roughness:.42,clearcoat:.3,emissive:"#6b4a24",emissiveIntensity:.1}),structureId:"soma",segments:20}),...f.map((d,g)=>U({id:`soma-nissl-${g}`,shape:"curvedSheet",position:d.pos,rotation:d.rot,scale:[.16,.08,.12],material:z("#7fa8c9",{roughness:.48,emissive:"#24445c",emissiveIntensity:.12}),structureId:"soma",segments:14})),U({id:"nucleus",shape:"sphere",position:[-.72,.03,.01],scale:[.27,.26,.25],material:z("#8b7bd8",{opacity:.52,roughness:.34,clearcoat:.6,emissive:"#3c2d78",emissiveIntensity:.14}),structureId:"nucleus",segments:30}),U({id:"nucleus-chromatin",shape:"torusKnot",position:[-.72,.03,.01],scale:[.15,.15,.15],material:z("#a999f0",{roughness:.5,emissive:"#4f3ca1",emissiveIntensity:.18}),structureId:"nucleus",segments:24}),U({id:"nucleolus",shape:"sphere",position:[-.75,.06,.03],scale:[.095,.095,.095],material:z("#5645a8",{roughness:.45,emissive:"#2e1f78",emissiveIntensity:.22}),structureId:"nucleus",segments:18}),U({id:"nuclear-pore",shape:"torus",position:[-.72,.03,.01],scale:[.025,.025,.025],material:z("#c8bbf5",{roughness:.4}),structureId:"nucleus",segments:10,repeat:yt({count:10,pattern:"shell",seed:79,extent:[.13,.125,.12],jitterRotation:1.5})}),...i.map(([d,g,v],p)=>{const m=Pt(d,g,v,1);return U({id:`dendrite-trunk-${p}`,shape:"taperedBranch",position:m.position,rotation:m.rotation,scale:m.scale,material:t,structureId:"dendrite",segments:18})}),...e.flatMap(([d,g,v],p)=>{const m=Pt(d,g,v,1);return[U({id:`dendrite-branch-${p}`,shape:"taperedBranch",position:m.position,rotation:m.rotation,scale:m.scale,material:t,structureId:"dendrite",segments:14}),U({id:`dendrite-spine-${p}`,shape:"sphere",position:g,scale:[.028,.028,.028],material:n,structureId:"dendrite",segments:10})]}),U({id:"axon",shape:"cylinder",position:[.36,.02,0],scale:[.056,1.54,.056],material:z("#d9cab2",{roughness:.45,clearcoat:.25,emissive:"#6b5a42",emissiveIntensity:.1}),rotation:[0,0,Math.PI/2],structureId:"axon",segments:20}),...r.map((d,g)=>U({id:`axon-node-${g}`,shape:"torus",position:[d,.02,0],rotation:[0,Math.PI/2,0],scale:[.085,.085,.07],material:z("#e8b874",{roughness:.4,emissive:"#8a5a18",emissiveIntensity:.2}),structureId:"axon",segments:16})),...s.flatMap((d,g)=>[U({id:`myelin-sheath-${g}`,shape:"capsule",position:[d,.02,0],scale:[.135,.11,.135],material:z("#f2e4c9",{opacity:.56,roughness:.28,clearcoat:.72,emissive:"#8a7a5a",emissiveIntensity:.08}),rotation:[0,0,Math.PI/2],structureId:"myelin-sheath",segments:22}),U({id:`myelin-core-${g}`,shape:"capsule",position:[d,.02,0],scale:[.095,.095,.095],material:z("#d6c29a",{roughness:.45,emissive:"#78633e",emissiveIntensity:.12}),rotation:[0,0,Math.PI/2],structureId:"myelin-sheath",segments:18})]),...a.flatMap((d,g)=>{const v=Pt([1.11,.02,0],d.branchTo,.044,1);return[U({id:`axon-branch-${g}`,shape:"taperedBranch",position:v.position,rotation:v.rotation,scale:v.scale,material:z("#d9cab2",{roughness:.48}),structureId:"axon-terminal",segments:12}),U({id:`axon-bouton-${g}`,shape:"sphere",position:d.bouton,scale:[d.radius,d.radius*.9,d.radius*.9],material:o,structureId:"axon-terminal",segments:18}),U({id:`axon-vesicle-a-${g}`,shape:"sphere",position:[d.bouton[0]+.015,d.bouton[1]+.015,d.bouton[2]],scale:[.024,.024,.024],material:l,structureId:"axon-terminal",segments:10}),U({id:`axon-vesicle-b-${g}`,shape:"sphere",position:[d.bouton[0]-.012,d.bouton[1]-.014,d.bouton[2]+.014],scale:[.024,.024,.024],material:l,structureId:"axon-terminal",segments:10})]}),...u.flatMap((d,g)=>[U({id:`mitochondrion-${g}`,shape:"capsule",position:d.pos,rotation:d.rot,scale:[.046,.088,.046],material:c,structureId:"mitochondrion",segments:14}),U({id:`mitochondrion-cristae-${g}`,shape:"torusKnot",position:d.pos,rotation:d.rot,scale:[.026,.068,.026],material:h,structureId:"mitochondrion",segments:16})])]}}function wM(){const i=[];for(let u=0;u<4;u+=1){const f=u/4*Math.PI*2+.38;for(let d=0;d<15;d+=1){const g=-.82+d/14*1.64,v=Math.sqrt(Math.max(.08,1-g*g)),p=1-.14*Math.max(0,g),m=g*1.02,M=Math.cos(f)*v*p*.45,S=Math.sin(f)*v*p*.41,x=g*.44+.34,w=Math.cos(f)*v*p*1.02,T=Math.sin(f)*v*p*1.1,_=[m+x*.11,M+w*.11,S+T*.11],E=Pt([m,M,S],_,.015,1);i.push(E)}}const n=Array.from({length:6},(u,f)=>{const d=f/5,g=[-.62+d*.56,-.14-d*.04,.38-d*.06],v=[g[0]+.04,g[1]-.03,g[2]+.09];return Pt(g,v,.016,1)}),s=[[-.56,.14,-.02],[.58,.12,-.02]],r=s.flatMap((u,f)=>Array.from({length:6},(d,g)=>{const v=g/6*Math.PI*2+(f===0?.25:-.25),p=[u[0]+Math.cos(v)*.24,u[1]+Math.sin(v)*.17,u[2]+Math.sin(v*2)*.07];return{key:`cv-canal-${f}-${g}`,seg:Pt(u,p,.056,1)}})),a=[{pos:[.18,-.18,.14],scale:.12},{pos:[.36,-.12,-.08],scale:.11},{pos:[.34,.1,-.18],scale:.1},{pos:[-.26,-.16,-.18],scale:.11},{pos:[-.42,-.08,.14],scale:.1},{pos:[-.14,.22,.16],scale:.095}],o=z("#b4ebe3",{roughness:.38,clearcoat:.32,emissive:"#2b7369",emissiveIntensity:.1}),l=z("#70ccfa",{opacity:.65,roughness:.2,clearcoat:.8,emissive:"#1a689c",emissiveIntensity:.2}),c=z("#c7a95f",{opacity:.44,roughness:.28,clearcoat:.65,emissive:"#694d14",emissiveIntensity:.14}),h=z("#7aa859",{roughness:.5,emissive:"#2e541c",emissiveIntensity:.18});return{units:"schematic",canonicalDiameter:2,notes:"Schematic ciliate protist (Paramecium caudatum). A sculpted slipper-shaped pellicle (with authored cutaway) carries four longitudinal rows of tapered cilia, an indented anterior oral groove leading to the cytostome, a kidney-shaped polyploid macronucleus paired with a small micronucleus, two star-shaped contractile vacuoles with radiating canals, and cycling food vacuoles.",parts:[U({id:"pellicle-body",shape:"organicBlob",position:[0,0,0],scale:[2.08,.92,.84],material:z("#6cc9bf",{opacity:.16,roughness:.22,clearcoat:.82,emissive:"#1b5e57",emissiveIntensity:.08}),structureId:"pellicle",cutawayHide:!0,outline:!0,segments:44}),U({id:"pellicle-posterior",shape:"taperedBranch",position:[.82,-.02,0],rotation:[0,0,-Math.PI/2],scale:[.58,.56,.54],material:z("#6cc9bf",{opacity:.15,roughness:.24,clearcoat:.78,emissive:"#1b5e57",emissiveIntensity:.08}),structureId:"pellicle",cutawayHide:!0,segments:24}),...i.map((u,f)=>U({id:`cilium-${f}`,shape:"taperedBranch",position:u.position,rotation:u.rotation,scale:u.scale,material:o,structureId:"cilia",segments:8})),U({id:"oral-groove-channel",shape:"curvedSheet",position:[-.32,-.1,.24],rotation:[.35,-.42,-.22],scale:[.56,.14,.24],material:z("#4ea69d",{opacity:.48,roughness:.3,clearcoat:.55,emissive:"#164f49",emissiveIntensity:.14}),structureId:"oral-groove",segments:20}),U({id:"oral-cytostome",shape:"torus",position:[.02,-.17,.25],rotation:ka([-.3,-.2,.93]),scale:[.22,.22,.34],material:z("#8ee0d4",{roughness:.3,clearcoat:.55,emissive:"#236e63",emissiveIntensity:.2}),structureId:"oral-groove",segments:20}),U({id:"oral-cytopharynx",shape:"taperedBranch",position:[.09,-.17,.18],rotation:ka([.7,.05,-.7]),scale:[.1,.22,.1],material:z("#5db8ad",{opacity:.72,roughness:.35}),structureId:"oral-groove",segments:14}),...n.map((u,f)=>U({id:`oral-cilium-${f}`,shape:"taperedBranch",position:u.position,rotation:u.rotation,scale:u.scale,material:z("#c8f5ee",{roughness:.35,emissive:"#35786e",emissiveIntensity:.12}),structureId:"oral-groove",segments:8})),U({id:"macronucleus-anterior",shape:"organicBlob",position:[-.07,.09,-.03],rotation:[.1,.2,.42],scale:[.34,.24,.23],material:z("#8270d4",{opacity:.72,roughness:.34,clearcoat:.5,emissive:"#352670",emissiveIntensity:.16}),structureId:"macronucleus",segments:26}),U({id:"macronucleus-posterior",shape:"organicBlob",position:[.14,.07,-.04],rotation:[-.1,-.2,-.45],scale:[.32,.23,.22],material:z("#8270d4",{opacity:.72,roughness:.34,clearcoat:.5,emissive:"#352670",emissiveIntensity:.16}),structureId:"macronucleus",segments:26}),U({id:"macronucleus-chromatin",shape:"torusKnot",position:[.03,.09,-.03],scale:[.28,.14,.14],material:z("#a596eb",{roughness:.48,emissive:"#493796",emissiveIntensity:.18}),structureId:"macronucleus",segments:24}),U({id:"micronucleus",shape:"sphere",position:[.02,-.04,.06],scale:[.135,.135,.135],material:z("#d1a8ff",{roughness:.3,clearcoat:.65,emissive:"#6b38b5",emissiveIntensity:.26}),structureId:"micronucleus",segments:20}),...s.map((u,f)=>U({id:`cv-bladder-${f}`,shape:"sphere",position:u,scale:[.16,.15,.15],material:l,structureId:"contractile-vacuole",segments:20})),...r.map(({key:u,seg:f})=>U({id:u,shape:"taperedBranch",position:f.position,rotation:f.rotation,scale:f.scale,material:l,structureId:"contractile-vacuole",segments:12})),...a.flatMap((u,f)=>[U({id:`food-vacuole-${f}`,shape:"sphere",position:u.pos,scale:[u.scale,u.scale,u.scale],material:c,structureId:"food-vacuole",segments:16}),U({id:`food-vacuole-content-${f}`,shape:"sphere",position:u.pos,scale:[u.scale*.52,u.scale*.52,u.scale*.52],material:h,structureId:"food-vacuole",segments:10})])]}}function AM(){const i=z("#3d9e59",{opacity:.42,roughness:.32,clearcoat:.72,emissive:"#164d27",emissiveIntensity:.2}),e=z("#9be06c",{roughness:.42,clearcoat:.25,emissive:"#3b7d26",emissiveIntensity:.24}),t=z("#74bd5e",{roughness:.5,emissive:"#265c1f",emissiveIntensity:.16}),n=[{pos:[.88,.42,.26],rot:[.22,-.35,-.28]},{pos:[-.88,-.38,.28],rot:[-.25,.42,.3]},{pos:[.86,-.4,-.24],rot:[.3,.35,-.18]},{pos:[-.78,.46,-.32],rot:[-.18,-.45,.22]},{pos:[.18,.58,.42],rot:[.55,.15,-.1]},{pos:[-.14,-.58,.44],rot:[-.52,-.2,.14]},{pos:[.14,-.56,-.44],rot:[.58,.12,.08]},{pos:[-.24,.56,-.42],rot:[-.48,.25,-.12]}],s=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),r=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26}),a=[{pos:[.72,-.02,.46],rot:[.3,.3,1.1]},{pos:[-.86,-.1,-.32],rot:[-.3,.5,-.8]},{pos:[-.42,-.56,.14],rot:[.9,.2,.7]},{pos:[.54,.48,-.32],rot:[-.6,-.4,1.2]},{pos:[.68,.08,-.46],rot:[.2,.9,-.5]}],o=[{pos:[-1.14,.28,.18],rot:[0,0,Math.PI/2]},{pos:[-1.14,-.22,-.16],rot:[0,0,Math.PI/2]},{pos:[1.14,.24,-.2],rot:[0,0,Math.PI/2]},{pos:[1.14,-.26,.18],rot:[0,0,Math.PI/2]},{pos:[-.42,.78,.1],rot:[0,0,0]},{pos:[.48,-.78,-.08],rot:[0,0,0]}],l=n.map((u,f)=>U({id:`chloroplast-${f}`,shape:"sphere",position:u.pos,rotation:u.rot,scale:[.34,.15,.22],material:i,structureId:"chloroplast",segments:24})),c=n.flatMap((u,f)=>[U({id:`chloroplast-granum-a-${f}`,shape:"disc",position:[u.pos[0]-.055,u.pos[1],u.pos[2]],rotation:u.rot,scale:[.068,.42,.068],material:e,structureId:"chloroplast",segments:14}),U({id:`chloroplast-granum-b-${f}`,shape:"disc",position:[u.pos[0]+.055,u.pos[1]+.01,u.pos[2]],rotation:u.rot,scale:[.068,.42,.068],material:e,structureId:"chloroplast",segments:14}),U({id:`chloroplast-lamella-${f}`,shape:"capsule",position:u.pos,rotation:[u.rot[0],u.rot[1],u.rot[2]+Math.PI/2],scale:[.014,.09,.014],material:t,structureId:"chloroplast",segments:8})]),h=a.flatMap((u,f)=>[U({id:`mitochondrion-${f}`,shape:"capsule",position:u.pos,rotation:u.rot,scale:[.085,.145,.085],material:s,structureId:"mitochondrion",segments:18}),U({id:`mitochondrion-cristae-${f}`,shape:"torusKnot",position:u.pos,rotation:u.rot,scale:[.048,.11,.048],material:r,structureId:"mitochondrion",segments:20})]);return{units:"schematic",canonicalDiameter:2,notes:"Schematic mesophyll cell. Chamfered rounded-box cell wall with plasmodesmata channels encloses a translucent plasma membrane, sculpted organic vacuole, porous nuclear envelope with chromatin, eight chloroplasts housing stacked grana and stroma lamellae, double-membrane mitochondria with cristae, and arched Golgi cisternae with vesicles.",parts:[U({id:"cell-wall",shape:"roundedBox",position:[0,0,0],scale:[2.32,1.56,1.38],material:z("#8fae6b",{opacity:.16,roughness:.55,clearcoat:.48,emissive:"#3d5c2a",emissiveIntensity:.08}),structureId:"cell-wall",cutawayHide:!0,outline:!0,segments:24}),...o.map((u,f)=>U({id:`plasmodesma-${f}`,shape:"cylinder",position:u.pos,rotation:u.rot,scale:[.045,.12,.045],material:z("#b5cf88",{roughness:.5,emissive:"#4f6b2c",emissiveIntensity:.14}),structureId:"cell-wall",cutawayHide:!0,segments:12})),U({id:"plasma-membrane",shape:"roundedBox",position:[0,0,0],scale:[2.14,1.4,1.22],material:z("#7cc9d6",{opacity:.11,roughness:.3,clearcoat:.72,emissive:"#265c66",emissiveIntensity:.05}),structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:24}),U({id:"central-vacuole",shape:"organicBlob",position:[.14,-.04,-.02],scale:[1.34,.94,.84],material:z("#7fc3f5",{opacity:.26,roughness:.2,clearcoat:.85,emissive:"#225d8f",emissiveIntensity:.12}),structureId:"central-vacuole",segments:40}),U({id:"nucleus",shape:"sphere",position:[-.66,.18,.12],scale:[.42,.4,.4],material:z("#8b7bd8",{opacity:.48,roughness:.35,clearcoat:.6,emissive:"#3c2d78",emissiveIntensity:.14}),structureId:"nucleus",segments:36}),U({id:"nucleus-chromatin",shape:"torusKnot",position:[-.66,.18,.12],scale:[.22,.22,.22],material:z("#a999f0",{roughness:.5,emissive:"#4f3ca1",emissiveIntensity:.16}),structureId:"nucleus",segments:28}),U({id:"nucleolus",shape:"sphere",position:[-.71,.22,.15],scale:[.13,.13,.13],material:z("#5645a8",{roughness:.45,emissive:"#2e1f78",emissiveIntensity:.2}),structureId:"nucleus",segments:20}),U({id:"nuclear-pore",shape:"torus",position:[-.66,.18,.12],scale:[.036,.036,.036],material:z("#c8bbf5",{roughness:.4}),structureId:"nucleus",segments:12,repeat:yt({count:12,pattern:"shell",seed:13,extent:[.2,.19,.19],jitterRotation:1.5})}),...l,...c,...h,U({id:"golgi",shape:"curvedSheet",position:[-.5,-.34,.34],scale:[.3,.2,.22],material:z("#e0c463",{roughness:.4,clearcoat:.35,emissive:"#6d5a18",emissiveIntensity:.14}),structureId:"golgi",segments:20,rotation:[.25,.4,-.2],repeat:yt({count:5,pattern:"line",axis:"y",extent:[.04,.09,.04]})}),U({id:"golgi-vesicle",shape:"sphere",position:[-.36,-.34,.42],scale:[.035,.035,.035],material:z("#f2da83",{roughness:.35,emissive:"#8a6d19",emissiveIntensity:.16}),structureId:"golgi",segments:12,repeat:yt({count:6,pattern:"scatter",seed:29,extent:[.14,.1,.1],jitter:.25})})]}}function RM(){const e=Array.from({length:10},(f,d)=>{const g=d/10*Math.PI*2;return[Math.cos(g)*.6,.19,Math.sin(g)*.6]}),t=Array.from({length:10},(f,d)=>{const g=d/10*Math.PI*2;return[Math.cos(g)*.6,-.19,Math.sin(g)*.6]}),n=Array.from({length:10},(f,d)=>{const g=(d+.5)/10*Math.PI*2;return[Math.cos(g)*.85,0,Math.sin(g)*.85]}),s=[];for(let f=0;f<10;f+=1){const d=(f+1)%10;s.push([e[f],e[d]]),s.push([t[f],t[d]]),s.push([e[f],n[f]]),s.push([t[f],n[f]]),s.push([e[d],n[f]]),s.push([t[d],n[f]])}const r=Array.from({length:8},(f,d)=>{const g=d/8*Math.PI*2+.2,v=Math.cos(g),p=Math.sin(g),m=d%2===0?.08:-.08,M=.86;return{pos:[v*M,m,p*M],rot:Hn([v,m*.8,p])}}),a=Array.from({length:14},(f,d)=>{const g=d/14*Math.PI*2+.12,v=Math.cos(g),p=Math.sin(g),m=d%3===0?.25:d%3===1?-.25:0,M=m===0?.93:.72,S=m===0?1.03:.78,x=m===0?0:m*1.24,w=[v*M,m,p*M],T=[v*S,x,p*S];return{base:w,tip:T}}),o=z("#d68ca3",{roughness:.42,clearcoat:.3,emissive:"#6b293f",emissiveIntensity:.14}),l=z("#f2b8c9",{roughness:.35,emissive:"#853852",emissiveIntensity:.18}),c=z("#7ac4d4",{roughness:.32,clearcoat:.5,emissive:"#1f5a69",emissiveIntensity:.18}),h=z("#f0cfd6",{roughness:.45,clearcoat:.3}),u=z("#ffebf0",{roughness:.3,emissive:"#945464",emissiveIntensity:.16});return{units:"schematic",canonicalDiameter:2,notes:"Schematic human erythrocyte (biconcave disc). The glossy plasma membrane (with authored cutaway) encloses a triangulated sub-membrane spectrin-actin cytoskeleton, a biconcave hemoglobin-packed cytoplasm, transmembrane Band 3 / aquaporin channel complexes, cytosolic carbonic anhydrase clusters, and outer glycocalyx carbohydrate antennas.",parts:[U({id:"plasma-membrane",shape:"biconcave",position:[0,0,0],scale:[1.88,.56,1.88],material:z("#e36d78",{opacity:.2,roughness:.2,clearcoat:.88,emissive:"#781c26",emissiveIntensity:.1}),structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:48}),...s.map(([f,d],g)=>{const v=Pt(f,d,.012,2);return U({id:`spectrin-strut-${g}`,shape:"capsule",position:v.position,rotation:v.rotation,scale:v.scale,material:o,structureId:"spectrin-skeleton",segments:8})}),...n.map((f,d)=>U({id:`spectrin-node-${d}`,shape:"sphere",position:f,scale:[.036,.036,.036],material:l,structureId:"spectrin-skeleton",segments:12})),U({id:"hemoglobin-matrix",shape:"biconcave",position:[0,0,0],scale:[1.7,.44,1.7],material:z("#c43343",{opacity:.34,roughness:.32,clearcoat:.5,emissive:"#6b111d",emissiveIntensity:.18}),structureId:"hemoglobin",segments:40}),U({id:"hemoglobin-tetramer-rim",shape:"sphere",position:[0,0,0],scale:[.075,.075,.075],material:z("#eb4d5e",{roughness:.35,clearcoat:.38,emissive:"#8a1b28",emissiveIntensity:.22}),structureId:"hemoglobin",segments:14,repeat:yt({count:14,pattern:"ring",axis:"y",radius:.62,seed:211,jitter:.25})}),U({id:"hemoglobin-tetramer-inner",shape:"sphere",position:[0,0,0],scale:[.055,.055,.055],material:z("#d9384a",{roughness:.38,emissive:"#781420",emissiveIntensity:.2}),structureId:"hemoglobin",segments:12,repeat:yt({count:8,pattern:"ring",axis:"y",radius:.36,seed:213,jitter:.18})}),...r.map((f,d)=>U({id:`membrane-transporter-${d}`,shape:"torus",position:f.pos,rotation:f.rot,scale:[.08,.08,.11],material:c,structureId:"membrane-transporters",segments:16})),U({id:"carbonic-anhydrase",shape:"sphere",position:[0,.02,0],scale:[.058,.058,.058],material:z("#e8bd68",{roughness:.45,flatShading:!0,emissive:"#855b14",emissiveIntensity:.2}),structureId:"carbonic-anhydrase",segments:10,repeat:yt({count:10,pattern:"ring",axis:"y",radius:.5,seed:223,jitter:.35})}),...a.flatMap((f,d)=>{const g=Pt(f.base,f.tip,.018,1);return[U({id:`glycocalyx-stalk-${d}`,shape:"taperedBranch",position:g.position,rotation:g.rotation,scale:g.scale,material:h,structureId:"glycocalyx",cutawayHide:!0,segments:8}),U({id:`glycocalyx-sugar-${d}`,shape:"sphere",position:f.tip,scale:[.026,.026,.026],material:u,structureId:"glycocalyx",cutawayHide:!0,segments:10})]})]}}function CM(){const i=[{pos:[.16,.08,.04],scale:[.42,.34,.34],rot:[.2,.3,.1]},{pos:[-.22,.28,.1],scale:[.36,.3,.29],rot:[.2,.1,.6]},{pos:[-.28,-.18,.06],scale:[.34,.28,.28],rot:[-.2,.3,-.5]},{pos:[.06,-.26,-.18],scale:[.32,.26,.26],rot:[.4,-.2,-.3]}],e=[[[.06,.12,.06],[-.14,.24,.09]],[[-.24,.14,.08],[-.26,-.04,.07]],[[-.16,-.22,-.02],[-.02,-.25,-.12]]],t=[{from:[.46,.14,.04],to:[.98,.32,.1],baseRadius:.32},{from:[-.42,-.34,.1],to:[-.88,-.66,.22],baseRadius:.28},{from:[.02,.44,-.2],to:[.04,.88,-.44],baseRadius:.25},{from:[.32,-.32,.34],to:[.7,-.56,.58],baseRadius:.24}],n=[[[.24,.08,.04],[.78,.25,.08]],[[.36,.18,.08],[.72,.22,.06]],[[-.2,-.18,.06],[-.72,-.52,.16]],[[-.36,-.28,.14],[-.66,-.46,.18]],[[.02,.24,-.1],[.04,.72,-.34]],[[.2,-.2,.2],[.56,-.44,.45]],[[-.44,.18,.32],[.22,.46,.2]],[[-.46,-.06,-.28],[.26,.34,-.28]],[[-.3,.44,-.12],[.44,.2,-.22]],[[-.14,-.44,-.24],[.46,-.24,.16]]],s=[{pos:[.38,-.14,.28],rot:[.4,.3,.9]},{pos:[.34,.36,-.2],rot:[-.3,.6,1.2]},{pos:[-.46,.04,-.3],rot:[.5,-.2,.7]},{pos:[.06,-.42,.32],rot:[.2,.8,-.6]},{pos:[-.04,.46,.26],rot:[-.4,-.4,1.1]}],r=z("#8b7bd8",{opacity:.72,roughness:.36,clearcoat:.48,emissive:"#3c2d78",emissiveIntensity:.16}),a=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),o=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26}),l=z("#a9dde6",{opacity:.24,roughness:.25,clearcoat:.72,emissive:"#2c6773",emissiveIntensity:.1}),c=z("#7bb5db",{opacity:.75,roughness:.42,clearcoat:.2,emissive:"#275878",emissiveIntensity:.16});return{units:"schematic",canonicalDiameter:2,notes:"Schematic neutrophil. A ruffled organic membrane (with authored cutaway) encloses a four-lobed nucleus joined by chromatin bridges, two cytological granule classes, double-membrane mitochondria with cristae, four flared tapered pseudopods, and coherent actin bundles extending toward the leading edges.",parts:[U({id:"plasma-membrane",shape:"organicBlob",position:[0,0,0],scale:[1.4,1.28,1.24],material:z("#a9dde6",{opacity:.12,roughness:.26,clearcoat:.72,emissive:"#2c6773",emissiveIntensity:.06}),structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:48}),...i.map((h,u)=>U({id:`nucleus-lobe-${u}`,shape:"organicBlob",position:h.pos,rotation:h.rot,scale:h.scale,material:r,structureId:"nucleus",segments:28})),...e.map(([h,u],f)=>{const d=Pt(h,u,.065,2);return U({id:`nucleus-bridge-${f}`,shape:"capsule",position:d.position,rotation:d.rotation,scale:d.scale,material:r,structureId:"nucleus",segments:14})}),U({id:"granules-primary",shape:"sphere",position:[0,0,0],scale:[.056,.056,.056],material:z("#d96a95",{roughness:.35,clearcoat:.35,emissive:"#7a2042",emissiveIntensity:.18}),structureId:"granules",segments:14,repeat:yt({count:24,pattern:"scatter",seed:31,extent:[.52,.44,.4],jitter:.35})}),U({id:"granules-secondary",shape:"sphere",position:[0,0,0],scale:[.04,.04,.04],material:z("#ebb2c7",{roughness:.4,clearcoat:.25,emissive:"#8a4b61",emissiveIntensity:.12}),structureId:"granules",segments:12,repeat:yt({count:28,pattern:"scatter",seed:47,extent:[.54,.46,.42],jitter:.4})}),...s.flatMap((h,u)=>[U({id:`mitochondrion-${u}`,shape:"capsule",position:h.pos,rotation:h.rot,scale:[.072,.125,.072],material:a,structureId:"mitochondrion",segments:16}),U({id:`mitochondrion-cristae-${u}`,shape:"torusKnot",position:h.pos,rotation:h.rot,scale:[.042,.095,.042],material:o,structureId:"mitochondrion",segments:16})]),...t.map((h,u)=>{const f=Pt(h.from,h.to,h.baseRadius,1);return U({id:`pseudopod-${u}`,shape:"taperedBranch",position:f.position,rotation:f.rotation,scale:f.scale,material:l,structureId:"pseudopod",segments:20})}),...n.map(([h,u],f)=>{const d=Pt(h,u,.009,2);return U({id:`actin-filament-${f}`,shape:"capsule",position:d.position,rotation:d.rotation,scale:d.scale,material:c,structureId:"cytoskeleton",segments:10})})]}}function IM(){const i=[{pos:[-.62,.24,.26],rot:[.4,.3,.55],scale:[.068,.18,.068]},{pos:[.18,-.48,.28],rot:[.2,.5,1.35],scale:[.065,.16,.065]},{pos:[-.02,-.34,-.44],rot:[-.35,-.4,.85],scale:[.065,.16,.065]},{pos:[.24,.32,.04],rot:[.1,.2,-.78],scale:[.056,.14,.056]}],e=[{pos:[.12,.26,.16],rot:[.3,.35,-.65],scale:[.34,.14,.18]},{pos:[.18,.02,.22],rot:[-.2,.45,-1.45],scale:[.32,.14,.18]},{pos:[-.2,.32,-.14],rot:[.25,-.4,.55],scale:[.32,.14,.18]},{pos:[-.54,.42,.1],rot:[.3,.2,.85],scale:[.3,.12,.18]}],t=[{pos:[.18,-.14,.26],rot:[.2,.4,-.3]},{pos:[-.28,-.5,.16],rot:[-.3,.2,.4]},{pos:[.46,.5,.08],rot:[.1,-.4,-.5]}],n=z("#e38559",{opacity:.46,roughness:.32,clearcoat:.7,emissive:"#852d14",emissiveIntensity:.18}),s=z("#ffb878",{roughness:.48,emissive:"#9e491b",emissiveIntensity:.26});return{units:"schematic",canonicalDiameter:2,notes:"Schematic budding yeast (Saccharomyces cerevisiae). Glossy chitin-glucan cell wall and inner plasma membrane (both with authored cutaway) enclose a mother cell and emerging daughter bud with chitinous bud scars, migrating nucleus with chromatin and pores, large organic fungal vacuole, tubular mitochondria with cristae, perinuclear ER sheets, and dispersed Golgi cisternae trafficking vesicles across the bud neck.",parts:[U({id:"cell-wall-mother",shape:"sphere",position:[-.2,-.08,0],scale:[1.38,1.54,1.32],material:z("#dfb16b",{opacity:.16,roughness:.36,clearcoat:.58,emissive:"#6b4714",emissiveIntensity:.08}),structureId:"cell-wall",cutawayHide:!0,outline:!0,segments:42}),U({id:"cell-wall-bud",shape:"sphere",position:[.54,.56,.06],scale:[.7,.76,.68],material:z("#dfb16b",{opacity:.18,roughness:.36,clearcoat:.58,emissive:"#6b4714",emissiveIntensity:.08}),structureId:"cell-wall",cutawayHide:!0,outline:!0,segments:32}),U({id:"bud-neck-ring",shape:"torus",position:[.27,.34,.04],rotation:Hn([.74,.64,.06]),scale:[.46,.46,.32],material:z("#f2cb7e",{roughness:.35,clearcoat:.45,emissive:"#8a5a14",emissiveIntensity:.2}),structureId:"cell-wall",cutawayHide:!0,segments:28}),U({id:"bud-scar-a",shape:"torus",position:[-.84,-.22,.18],rotation:Hn([-.64,-.14,.18]),scale:[.22,.22,.2],material:z("#f2cb7e",{roughness:.4,emissive:"#8a5a14",emissiveIntensity:.18}),structureId:"cell-wall",cutawayHide:!0,segments:20}),U({id:"bud-scar-b",shape:"torus",position:[-.54,-.66,-.34],rotation:Hn([-.34,-.58,-.34]),scale:[.22,.22,.2],material:z("#f2cb7e",{roughness:.4,emissive:"#8a5a14",emissiveIntensity:.18}),structureId:"cell-wall",cutawayHide:!0,segments:20}),U({id:"plasma-membrane-mother",shape:"sphere",position:[-.2,-.08,0],scale:[1.26,1.42,1.2],material:z("#96d4dc",{opacity:.11,roughness:.24,clearcoat:.74,emissive:"#265c66",emissiveIntensity:.06}),structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:38}),U({id:"plasma-membrane-bud",shape:"sphere",position:[.54,.56,.06],scale:[.6,.66,.58],material:z("#96d4dc",{opacity:.12,roughness:.24,clearcoat:.74,emissive:"#265c66",emissiveIntensity:.06}),structureId:"plasma-membrane",cutawayHide:!0,outline:!0,segments:28}),U({id:"nucleus",shape:"sphere",position:[-.06,.14,.02],scale:[.46,.44,.42],material:z("#8b7bd8",{opacity:.48,roughness:.34,clearcoat:.6,emissive:"#3c2d78",emissiveIntensity:.14}),structureId:"nucleus",segments:34}),U({id:"nucleus-chromatin",shape:"torusKnot",position:[-.06,.14,.02],scale:[.24,.24,.24],material:z("#a999f0",{roughness:.5,emissive:"#4f3ca1",emissiveIntensity:.18}),structureId:"nucleus",segments:26}),U({id:"nucleolus",shape:"sphere",position:[-.13,.2,.06],scale:[.14,.14,.14],material:z("#5645a8",{roughness:.45,emissive:"#2e1f78",emissiveIntensity:.22}),structureId:"nucleus",segments:18}),U({id:"nuclear-pore",shape:"torus",position:[-.06,.14,.02],scale:[.036,.036,.036],material:z("#c8bbf5",{roughness:.4}),structureId:"nucleus",segments:10,repeat:yt({count:10,pattern:"shell",seed:233,extent:[.22,.21,.2],jitterRotation:1.5})}),U({id:"vacuole-mother",shape:"organicBlob",position:[-.42,-.26,-.06],scale:[.56,.62,.52],material:z("#75c9e3",{opacity:.3,roughness:.2,clearcoat:.85,emissive:"#1f5e78",emissiveIntensity:.14}),structureId:"vacuole",segments:34}),U({id:"vacuole-bud",shape:"sphere",position:[.5,.62,.08],scale:[.2,.22,.19],material:z("#75c9e3",{opacity:.34,roughness:.2,clearcoat:.85,emissive:"#1f5e78",emissiveIntensity:.14}),structureId:"vacuole",segments:20}),...i.flatMap((r,a)=>[U({id:`mitochondrion-${a}`,shape:"capsule",position:r.pos,rotation:r.rot,scale:r.scale,material:n,structureId:"mitochondrion",segments:16}),U({id:`mitochondrion-cristae-${a}`,shape:"torusKnot",position:r.pos,rotation:r.rot,scale:[r.scale[0]*.58,r.scale[1]*.78,r.scale[2]*.58],material:s,structureId:"mitochondrion",segments:16})]),...e.map((r,a)=>U({id:`er-sheet-${a}`,shape:"curvedSheet",position:r.pos,rotation:r.rot,scale:r.scale,material:z("#72a6cf",{roughness:.42,clearcoat:.35,emissive:"#1f4969",emissiveIntensity:.12}),structureId:"endoplasmic-reticulum",segments:18})),U({id:"er-ribosome",shape:"sphere",position:[-.04,.18,.04],scale:[.02,.02,.02],material:z("#f2dc9b",{roughness:.5,emissive:"#785a1a",emissiveIntensity:.14}),structureId:"endoplasmic-reticulum",segments:8,repeat:yt({count:26,pattern:"shell",seed:241,extent:[.29,.27,.25],jitter:.2})}),...t.map((r,a)=>U({id:`golgi-cisterna-${a}`,shape:"curvedSheet",position:r.pos,rotation:r.rot,scale:[.16,.09,.12],material:z("#e0c463",{roughness:.38,clearcoat:.35,emissive:"#6d5a18",emissiveIntensity:.14}),structureId:"golgi",segments:16})),U({id:"golgi-secretory-vesicle",shape:"sphere",position:[.58,.58,.06],scale:[.032,.032,.032],material:z("#f2da83",{roughness:.35,emissive:"#8a6d19",emissiveIntensity:.18}),structureId:"golgi",segments:10,repeat:yt({count:7,pattern:"scatter",seed:251,extent:[.14,.16,.12],jitter:.25})})]}}const PM={"asset-plant-cell":AM,"asset-white-blood-cell":CM,"asset-neuron":TM,"asset-epithelial-cell":yM,"asset-bacteria":MM,"asset-animal-cell":xM,"asset-muscle-cell":EM,"asset-red-blood-cell":RM,"asset-yeast-cell":IM,"asset-paramecium":wM,"asset-human-brain":bM,"asset-human-brain-cutout":SM},Mh=new Map,yh=new WeakMap;function ku(i){const e=Mh.get(i);if(e)return e;const t=PM[i];if(!t)return;const n=t();return Mh.set(i,n),n}function LM(i){if(i.kind!=="procedural"||i.procedural)return i;const e=yh.get(i);if(e)return e;const t=ku(i.id);if(!t)throw new Error(`Missing procedural spec for asset ${i.id}`);const n={...i,procedural:t};return yh.set(i,n),n}const DM=Object.fromEntries(wh.map(i=>{const e=ku(i.assetId);if(!e)throw new Error(`Missing procedural spec for asset ${i.assetId}`);return[i.assetId,e]})),NM=Zu.map(i=>{const e=DM[i.id];if(!e)throw new Error(`Missing procedural spec for asset ${i.id}`);return{...i,procedural:e}}),Gs=Xx.parse({version:"0.1.0",specimens:wh,assets:NM,sources:Ku});new Map(Gs.specimens.map(i=>[i.id,i]));new Map(Gs.assets.map(i=>[i.id,i]));new Map(Gs.sources.map(i=>[i.id,i]));Gs.specimens.map(i=>i.id);Gs.version;function Zn(i,e){i.computeBoundingBox();const t=i.boundingBox;if(t){const n=t.getCenter(new C);i.translate(-n.x,-n.y,-n.z);const s=t.getSize(new C);i.scale(s.x>1e-5?e[0]/s.x:1,s.y>1e-5?e[1]/s.y:1,s.z>1e-5?e[2]/s.z:1)}return i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere(),i}function UM(i){const n=new ac;n.moveTo(-.43+.12,-.43),n.lineTo(.43-.12,-.43),n.quadraticCurveTo(.43,-.43,.43,-.43+.12),n.lineTo(.43,.43-.12),n.quadraticCurveTo(.43,.43,.43-.12,.43),n.lineTo(-.43+.12,.43),n.quadraticCurveTo(-.43,.43,-.43,.43-.12),n.lineTo(-.43,-.43+.12),n.quadraticCurveTo(-.43,-.43,-.43+.12,-.43);const s=new qr(n,{depth:.72,bevelEnabled:!0,bevelSegments:Math.max(3,Math.round(i/6)),steps:1,bevelSize:.14,bevelThickness:.14,curveSegments:Math.max(4,Math.round(i/4))});return Zn(s,[1,1,1])}function OM(i){const e=Math.max(18,Math.round(i/2)),t=r=>{const a=Math.min(.9999,Math.max(0,r)),o=a*a;return Math.sqrt(Math.max(0,1-o))*(.21+2*o-1.12*o*o)},n=[];for(let r=0;r<=e;r+=1){const a=Math.max(.002,r/e);n.push(new se(a*.5,-t(a)))}for(let r=e-1;r>=0;r-=1){const a=Math.max(.002,r/e);n.push(new se(a*.5,t(a)))}const s=new Yr(n,i);return Zn(s,[1,1,1])}function FM(i){const e=Math.max(12,Math.round(i/2)),t=32*Math.PI/180,n=148*Math.PI/180,s=.56,r=.42,a=new ac;a.moveTo(Math.cos(t)*s,Math.sin(t)*s);for(let c=1;c<=e;c+=1){const h=t+(n-t)*c/e;a.lineTo(Math.cos(h)*s,Math.sin(h)*s)}const o=(s+r)/2;a.quadraticCurveTo(Math.cos(n+.08)*o,Math.sin(n+.08)*o,Math.cos(n)*r,Math.sin(n)*r);for(let c=e-1;c>=0;c-=1){const h=t+(n-t)*c/e;a.lineTo(Math.cos(h)*r,Math.sin(h)*r)}a.quadraticCurveTo(Math.cos(t-.08)*o,Math.sin(t-.08)*o,Math.cos(t)*s,Math.sin(t)*s);const l=new qr(a,{depth:.72,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:3,curveSegments:e});return Zn(l,[1,.4,1])}function BM(i){const e=[];for(let o=0;o<64;o+=1){const l=o/63,c=l-.5,h=l*Math.PI*2*2.5,f=.02+.15*Math.sin(Math.min(1,(1-l)*2.4)*(Math.PI/2));e.push(new C(c,Math.cos(h)*f,Math.sin(h)*f))}const n=new ou(e),s=Math.max(48,i*2),r=Math.max(8,Math.round(i/3)),a=new hc(n,s,.026,r,!1);return Zn(a,[1,.4,.4])}function zM(i){const e=new Bs(.5,i,Math.max(10,Math.round(i/2))),t=e.attributes.position;if(t){const n=new C;for(let s=0;s<t.count;s+=1){n.fromBufferAttribute(t,s);const r=n.length();if(r>1e-5){const a=n.x/r,o=n.y/r,l=n.z/r,c=1+.065*Math.sin(3*a+.4)*Math.cos(2*o)+.05*Math.sin(2.5*o+3*l)+.04*Math.cos(3*l-2*a);n.multiplyScalar(c),t.setXYZ(s,n.x,n.y,n.z)}}t.needsUpdate=!0}return Zn(e,[1,1,1])}function kM(i){const e=[];for(let h=0;h<=6;h+=1){const u=h/6*(Math.PI/2),f=Math.max(.002,Math.sin(u)*.5),d=-.5+(1-Math.cos(u))*.12;e.push(new se(f,d))}for(let h=1;h<12;h+=1){const u=h/12,f=.5-.5*Math.cos(u*Math.PI),d=.5+(.15-.5)*f,g=-.5+.12+u*(1-.12-.08);e.push(new se(d,g))}for(let h=0;h<=6;h+=1){const u=h/6*(Math.PI/2),f=Math.max(.002,Math.cos(u)*.15),d=.5-.08+Math.sin(u)*.08;e.push(new se(f,d))}const c=new Yr(e,i);return Zn(c,[1,1,1])}function Mc(i,e){const t=Math.max(6,Math.round(i)),n=Math.max(14,Math.round(t*.65)),s=new Bs(1,t,n),r=s.attributes.position;if(r){for(let a=0;a<r.count;a+=1){const[o,l,c]=e(r.getX(a),r.getY(a),r.getZ(a));r.setXYZ(a,o,l,c)}r.needsUpdate=!0}return Zn(s,[1,1,1])}function ki(i,e){return Mc(i,(t,n,s)=>Bu(e,t,n,s))}function HM(i){return Mc(i,(e,t,n)=>xc(e,t,n,{cutawayRecess:!0}))}function GM(i){return Mc(i,(e,t,n)=>fM(e,t,n))}function VM(i){const e=Math.max(12,Math.round(i)),t=Math.max(20,Math.round(i*.85)),n=e+1,s=[],r=[];for(let p=0;p<=t;p+=1){const m=p/t;for(let M=0;M<=e;M+=1){const S=M/e,[x,w,T]=pM(S,m);s.push(x,w,T)}}for(let p=0;p<t;p+=1)for(let m=0;m<e;m+=1){const M=p*n+m,S=M+1,x=(p+1)*n+m+1,w=(p+1)*n+m;r.push(M,w,S,S,w,x)}const a=s.length/3;let o=0,l=0,c=0;for(let p=0;p<e;p+=1)o+=s[p*3],l+=s[p*3+1],c+=s[p*3+2];s.push(o/e,l/e-.015,c/e);for(let p=0;p<e;p+=1)r.push(a,p,p+1);const h=t*n,u=s.length/3;let f=0,d=0,g=0;for(let p=0;p<e;p+=1){const m=(h+p)*3;f+=s[m],d+=s[m+1],g+=s[m+2]}s.push(f/e,d/e+.015,g/e);for(let p=0;p<e;p+=1)r.push(u,h+p+1,h+p);const v=new It;return v.setAttribute("position",new $e(s,3)),v.setIndex(r),Zn(v,[1,1,1])}function wr(i,e,t={}){const n=Math.max(24,Math.round(i)),s=t.radialSegments??Math.max(12,Math.round(i*.5)),r=t.ridgeAmp??0,a=t.ridgeFreq??0,o=[],l=[];for(let F=0;F<=n;F+=1){const k=e(F/n);o.push(k),l.push(new C(...k.point))}const c=[];for(let F=0;F<=n;F+=1){const k=l[Math.max(0,F-1)],q=l[Math.min(n,F+1)].clone().sub(k);q.lengthSq()<1e-10?q.set(1,0,0):q.normalize(),c.push(q)}const h=[],u=[],f=c[0],g=(Math.abs(f.z)<.9?new C(0,0,1):new C(0,1,0)).clone().cross(f).normalize(),v=f.clone().cross(g).normalize();h.push(g),u.push(v);const p=new Pn;for(let F=1;F<=n;F+=1){p.setFromUnitVectors(c[F-1],c[F]);const k=h[F-1].clone().applyQuaternion(p).normalize(),ie=c[F].clone().cross(k).normalize();h.push(k),u.push(ie)}const m=[],M=[],S=s+1,x=(F,k,ie,q,j,ne,we,Ue,Z)=>{for(let me=0;me<=s;me+=1){const Ee=me/s*Math.PI*2,Oe=Math.cos(Ee),Me=Math.sin(Ee),Ne=r>0?1+r*Math.cos(Ee*a)*(1-Z/n*.6):1,pt=F.clone().addScaledVector(k,we).addScaledVector(ie,Oe*j*Ue*Ne).addScaledVector(q,Me*ne*Ue*Ne);m.push(pt.x,pt.y,pt.z)}},w=o[0],T=Math.min(w.rx,w.ry)*.55;x(l[0],c[0],h[0],u[0],w.rx,w.ry,-Math.SQRT1_2*T,Math.SQRT1_2,0);for(let F=0;F<=n;F+=1){const k=o[F];x(l[F],c[F],h[F],u[F],k.rx,k.ry,0,1,F)}const _=o[n],E=Math.min(_.rx,_.ry)*.55;x(l[n],c[n],h[n],u[n],_.rx,_.ry,Math.SQRT1_2*E,Math.SQRT1_2,n);const L=n+3;for(let F=0;F<L-1;F+=1)for(let k=0;k<s;k+=1){const ie=F*S+k,q=ie+1,j=(F+1)*S+k+1,ne=(F+1)*S+k;M.push(ie,q,ne,q,j,ne)}const R=m.length/3,N=l[0].clone().addScaledVector(c[0],-T);m.push(N.x,N.y,N.z);for(let F=0;F<s;F+=1)M.push(R,F+1,F);const B=m.length/3,X=l[n].clone().addScaledVector(c[n],E);m.push(X.x,X.y,X.z);const P=(L-1)*S;for(let F=0;F<s;F+=1)M.push(B,P+F,P+F+1);const W=new It;return W.setAttribute("position",new $e(m,3)),W.setIndex(M),Zn(W,[1,1,1])}function WM(i){const e=i.clone(),t=e.attributes.position;if(t){for(let s=0;s<t.count;s+=1)t.setZ(s,-t.getZ(s));t.needsUpdate=!0}const n=e.getIndex();if(n){for(let s=0;s+2<n.count;s+=3){const r=n.getX(s+1),a=n.getX(s+2);n.setX(s+1,a),n.setX(s+2,r)}n.needsUpdate=!0}else if(t){for(let s=0;s+2<t.count;s+=3){const r=t.getX(s+1),a=t.getY(s+1),o=t.getZ(s+1);t.setXYZ(s+1,t.getX(s+2),t.getY(s+2),t.getZ(s+2)),t.setXYZ(s+2,r,a,o)}t.needsUpdate=!0}return e.computeVertexNormals(),e.computeBoundingBox(),e.computeBoundingSphere(),e}function XM(){const i=new Map;function e(s,r,a=!1){const o=`${s}:${r}:${a?"mz":"std"}`,l=i.get(o);if(l)return l;if(a){const u=e(s,r,!1),f=WM(u);return i.set(o,f),f}const c=Math.max(6,Math.round(r));let h;switch(s){case"sphere":h=new Bs(.5,c,Math.max(8,Math.round(c/2)));break;case"box":h=new Si(1,1,1);break;case"cylinder":h=new Ls(.5,.5,1,c,1,!1);break;case"capsule":h=new tc(.5,1,Math.max(4,Math.round(c/6)),c);break;case"cone":h=new ic(.5,1,c);break;case"torus":h=new cc(.35,.15,Math.max(8,Math.round(c/2)),c);break;case"torusKnot":h=new lc(.35,.06,Math.min(320,c*3),Math.max(6,Math.round(c/3)));break;case"disc":h=new Ls(.5,.5,.12,c);break;case"roundedBox":h=UM(c);break;case"biconcave":h=OM(c);break;case"curvedSheet":h=FM(c);break;case"tubeHelix":h=BM(c);break;case"organicBlob":h=zM(c);break;case"taperedBranch":h=kM(c);break;case"brainFrontalLobe":h=ki(c,"frontal");break;case"brainMotorCortex":h=ki(c,"motor");break;case"brainSensoryCortex":h=ki(c,"sensory");break;case"brainParietalLobe":h=ki(c,"parietal");break;case"brainTemporalLobe":h=ki(c,"temporal");break;case"brainOccipitalLobe":h=ki(c,"occipital");break;case"brainCutoutHemisphere":h=HM(c);break;case"cerebellumLobe":h=GM(c);break;case"brainstemCore":h=VM(c);break;case"corpusCallosum":h=wr(c,mM,{radialSegments:Math.max(14,Math.round(c*.5))});break;case"limbicArch":h=wr(c,gM,{radialSegments:Math.max(12,Math.round(c*.45))});break;case"hippocampusArch":h=wr(c,_M,{radialSegments:Math.max(14,Math.round(c*.5)),ridgeAmp:.08,ridgeFreq:5});break;case"ventricleHorn":h=wr(c,vM,{radialSegments:Math.max(12,Math.round(c*.45))});break}return i.set(o,h),h}function t(s){return e(s.shape,s.segments,!!s.mirrorZ)}function n(){for(const s of i.values())s.dispose();i.clear()}return{get:e,forInstance:t,dispose:n}}function qM(){const i=new Map,e=new Map;function t(r){const a=JSON.stringify(r),o=i.get(a);if(o)return o;const l=r.opacity<1,c=r.opacity<.85,h=l?hn:ci,u=c?Math.max(r.clearcoat??0,.55):r.flatShading?0:Math.max(r.clearcoat??0,.16),f=c?Math.min(r.clearcoatRoughness??.25,.18):r.clearcoatRoughness??.25,d=new xp({color:new He(r.color),roughness:r.roughness,metalness:r.metalness,transparent:l,opacity:r.opacity,depthWrite:!c,side:h,flatShading:r.flatShading,emissive:new He(r.emissive??"#000000"),emissiveIntensity:r.emissiveIntensity,clearcoat:u,clearcoatRoughness:f,...c?{ior:1.38,reflectivity:.72}:{}});return d.name=`schematic:${r.color}`,i.set(a,d),d}function n(r,a=.55){const o=`${r}:${a}`,l=e.get(o);if(l)return l;const c=new tu({color:new He(r),transparent:!0,opacity:a,depthWrite:!1});return e.set(o,c),c}function s(){for(const r of i.values())r.dispose();for(const r of e.values())r.dispose();i.clear(),e.clear()}return{get:t,line:n,dispose:s}}const YM=2;function $M(i,e){if(!e.procedural)throw new Error(`Asset ${e.id} has no procedural specification`);const t=Kx(e.procedural);if(t.length===0)throw new Error(`Asset ${e.id} expanded to zero meshes`);const n=Qx(t),s=Fu(n,e.procedural.canonicalDiameter),r=XM(),a=qM(),o=[],l=new Map,c=new oi;c.name=`${i.id}:normalized`,c.scale.setScalar(s.scale),c.position.set(...s.translation);const h=new oi;h.name=i.id,c.add(h);const u=[],f=new Map;for(const d of t){const g=r.forInstance(d),v=a.get(d.material),p=new Tt(g,v);if(p.name=d.key,p.position.set(...d.position),p.rotation.set(...d.rotation),p.scale.set(...d.scale),p.castShadow=!1,p.receiveShadow=!1,d.material.opacity<.22?p.renderOrder=2:d.material.opacity<.85?p.renderOrder=1:p.renderOrder=0,p.userData={baseMaterial:v,instanceKey:d.key,partId:d.partId,structureId:d.structureId??null,cutawayHide:d.cutawayHide},h.add(p),u.push(p),d.structureId){const m=f.get(d.structureId)??[];m.push(p),f.set(d.structureId,m)}if(d.outline){let m=l.get(g.uuid);m||(m=new Of(g,26),l.set(g.uuid,m),o.push(m));const M=d.material.color,S=new He(M).multiplyScalar(.62).getHexString(),x=new iu(m,a.line(`#${S}`,.3));x.raycast=()=>{},x.renderOrder=3,p.add(x)}}return{root:c,model:h,meshes:u,structureMeshes:f,bounds:n,normalization:s,meshCount:u.length,dispose:()=>{for(const d of o)d.dispose();r.dispose(),a.dispose(),c.removeFromParent(),c.clear()}}}function Hu(i){const e=new Set,t=new Set,n=new Set;i.traverse(s=>{if(!(s instanceof Tt))return;s.geometry&&e.add(s.geometry);const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){t.add(a);for(const o of Object.values(a))o instanceof Vt&&n.add(o)}});for(const s of e)s.dispose();for(const s of t)s.dispose();for(const s of n)s.dispose()}function ZM(i,e,t){const n=new Sn().setFromObject(t),s=n.getSize(new C);if(!n.isEmpty()&&[s.x,s.y,s.z].every(u=>Number.isFinite(u))){for(const u of["x","y","z"])if(!Number.isFinite(n.min[u])||!Number.isFinite(n.max[u]))throw new Error("Loaded scene has non-finite bounds")}const r={min:[n.min.x,n.min.y,n.min.z],max:[n.max.x,n.max.y,n.max.z]},a=Fu(r,YM),o=new oi;o.name=`${i.id}:normalized`,o.scale.setScalar(a.scale),o.position.set(...a.translation),o.add(t);const l=[],c=new Map,h=new Map(i.structures.map(u=>[u.id,new Set(u.mapping.meshNames)]));if(o.updateMatrixWorld(!0),t.traverse(u=>{if(u instanceof Tt){l.push(u),u.userData.baseMaterial=u.material;for(const[f,d]of h){let g=u,v=!1;for(;g;){if(d.has(g.name)){v=!0;break}g=g.parent}if(v){u.userData.structureId||(u.userData.structureId=f);const p=c.get(f)??[];p.push(u),c.set(f,p)}}}}),l.length===0)throw new Error(`Asset ${e.id} contains no meshes`);return{root:o,model:t,meshes:l,structureMeshes:c,bounds:r,normalization:a,meshCount:l.length,dispose:()=>{o.removeFromParent(),Hu(t),o.clear()}}}class Gu extends Error{reason;constructor(e,t){super(t),this.name="ViewerCreationError",this.reason=e}}class KM{capability;container;onEvent;renderer;scene=new Kh;camera;controls;director;picker;platform=new oi;ringMaterial;discMaterial;resizeObserver;envRenderTarget=null;built=null;highlighter=null;currentSpecimen=null;currentAsset=null;loadState=Uu;loadToken=0;loadAbort=null;view="mesh";focusedId=null;cutaway=!1;autoRotateRequested;reduceMotion;disposed=!1;contextLost=!1;lastFrame=0;loopActive=!1;needsRender=!1;dragging=!1;scratchBox=new Sn;scratchMeshBox=new Sn;constructor(e){this.container=e.container,this.onEvent=e.onEvent,this.reduceMotion=e.reduceMotion??!1,this.autoRotateRequested=e.autoRotate??!1,this.view=e.initialView??"mesh";let t;try{t=new $v({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch(u){throw new Gu("renderer-failed",`Could not create a WebGL renderer: ${u instanceof Error?u.message:String(u)}`)}this.renderer=t,this.capability=JM(t);const n=this.container.clientWidth||640,s=this.container.clientHeight||420;t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(n,s,!1),t.outputColorSpace=on,t.toneMapping=ko,t.toneMappingExposure=1.05,t.domElement.className="cas-canvas",t.domElement.setAttribute("aria-hidden","true"),t.domElement.style.display="block",t.domElement.style.width="100%",t.domElement.style.height="100%",t.domElement.style.touchAction="none",this.container.appendChild(t.domElement),this.camera=new cn(38,n/s,.05,80),this.camera.position.set(2.4,1.7,3.4),this.controls=new Kv(this.camera,t.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.enablePan=!1,this.controls.rotateSpeed=.7,this.controls.zoomSpeed=.8,this.controls.minDistance=1.05,this.controls.maxDistance=8.5,this.controls.minPolarAngle=Math.PI*.12,this.controls.maxPolarAngle=Math.PI*.88,this.controls.autoRotateSpeed=.65,this.controls.autoRotate=this.autoRotateRequested&&!this.reduceMotion,this.controls.target.set(0,0,0),this.controls.addEventListener("start",this.handleControlStart),this.controls.addEventListener("change",this.handleControlChange),this.controls.addEventListener("end",this.handleControlEnd),this.director=new hx(this.camera,this.controls),this.director.setReduceMotion(this.reduceMotion),this.setupEnvironment();const r=new Bp(15004159,1972260,.65),a=new Da(16773600,2.2);a.position.set(4.5,6.5,5);const o=new Da(9425151,1.45);o.position.set(-5,2.8,-4.5);const l=new Da(16771286,.4);l.position.set(-1.5,-3.5,4),this.scene.add(r,a,o,l),this.ringMaterial=new Co({color:new He("#7cc9d6"),transparent:!0,opacity:.22,depthWrite:!1,side:hn}),this.discMaterial=new Co({color:new He("#7cc9d6"),transparent:!0,opacity:.05,depthWrite:!1,side:hn});const c=new oc(1.06,1.12,96);c.rotateX(-Math.PI/2);const h=new nc(1.02,64);h.rotateX(-Math.PI/2),this.platform.add(new Tt(c,this.ringMaterial)),this.platform.add(new Tt(h,this.discMaterial)),this.scene.add(this.platform),this.picker=new px(t.domElement,this.camera,()=>this.built?.meshes??[],u=>{this.setFocusSilent(u),this.currentSpecimen&&this.emit({type:"structure-focused",specimenId:this.currentSpecimen.id,structureId:u})}),t.domElement.addEventListener("webglcontextlost",this.handleContextLost),t.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.resizeObserver=typeof ResizeObserver<"u"?new ResizeObserver(()=>this.resize()):null,this.resizeObserver?.observe(this.container),window.addEventListener("resize",this.resize),this.lastFrame=performance.now(),this.requestRender()}getLoadState(){return this.loadState}getCurrentSpecimenId(){return this.currentSpecimen?.id??null}async setSpecimen(e,t){if(this.disposed)return;const n=++this.loadToken;if(this.loadAbort?.abort(),this.loadAbort=null,this.loadState=Bi(this.loadState,{type:"start",specimenId:e.id}),this.emitProgress(e.id,0),t.kind==="procedural"){try{const r=performance.now(),a=$M(e,t);if(n!==this.loadToken||this.disposed){a.dispose();return}this.applyBuiltScene(a,e,t);const o=Math.round(performance.now()-r);this.loadState=Bi(this.loadState,{type:"success",specimenId:e.id}),this.emitProgress(e.id,1),this.emit({type:"specimen-ready",specimenId:e.id,meshCount:a.meshCount,buildMs:o,source:"procedural"})}catch(r){this.fail(e.id,"asset-corrupt",`The schematic for ${e.name} could not be built: ${r instanceof Error?r.message:String(r)}`,!1)}return}const s=new AbortController;this.loadAbort=s;try{const r=await vx(t.uri,o=>ux(o,t),{signal:s.signal,onProgress:o=>this.emitProgress(e.id,o),timeoutMs:2e4,retries:1});if(n!==this.loadToken||this.disposed){Hu(r);return}const a=ZM(e,t,r);this.applyBuiltScene(a,e,t),this.loadState=Bi(this.loadState,{type:"success",specimenId:e.id}),this.emit({type:"specimen-ready",specimenId:e.id,meshCount:a.meshCount,buildMs:0,source:"glb"})}catch(r){if(n!==this.loadToken||this.disposed)return;if(r instanceof Gt&&r.code==="cancelled"){this.loadState=Bi(this.loadState,{type:"cancel",specimenId:e.id});return}const a=r instanceof Gt?{code:r.code,message:r.message,retryable:r.retryable}:{code:"asset-decode",message:r instanceof Error?r.message:String(r),retryable:!1};this.fail(e.id,a.code,a.message,a.retryable)}}reload(){this.currentSpecimen&&this.currentAsset&&this.setSpecimen(this.currentSpecimen,this.currentAsset)}focusStructure(e){this.focusedId=e;const t=this.highlighter?.setFocus(e)??0;return e&&this.view==="focus"&&this.frameStructure(e),this.requestRender(),t}setView(e){this.view=e,this.highlighter?.setMode(e),e==="focus"&&this.focusedId&&this.frameStructure(this.focusedId),this.requestRender()}setCutaway(e){this.cutaway=e,this.highlighter?.setCutaway(e),this.requestRender()}setAutoRotate(e){this.autoRotateRequested=e,this.controls.autoRotate=e&&!this.reduceMotion,this.requestRender()}setReduceMotion(e){this.reduceMotion=e,this.director.setReduceMotion(e),this.controls.autoRotate=this.autoRotateRequested&&!e,this.requestRender()}resetCamera(){this.director.reset(),this.requestRender()}resize(){if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.requestRender()}getStats(){return{meshCount:this.built?.meshCount??0,triangles:this.renderer.info.render.triangles,webgl:this.capability.api??"none"}}captureScreenshot(){this.renderer.render(this.scene,this.camera);const e=this.renderer.domElement;return new Promise((t,n)=>{e.toBlob(s=>{s?t(s):n(new Error("The browser could not encode the screenshot"))},"image/png")})}async exportGlb(){if(!this.built)throw new Error("No specimen is currently rendered");if(this.currentAsset&&!this.currentAsset.export.glb)throw new Error("This specimen's license does not permit model export");return dx(this.built.root)}dispose(){if(!this.disposed){this.disposed=!0,this.loadAbort?.abort(),this.stopLoop(),this.resizeObserver?.disconnect(),window.removeEventListener("resize",this.resize),this.controls.removeEventListener("start",this.handleControlStart),this.controls.removeEventListener("change",this.handleControlChange),this.controls.removeEventListener("end",this.handleControlEnd),this.renderer.domElement.removeEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.handleContextRestored),document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.picker.dispose(),this.controls.dispose(),this.highlighter?.dispose(),this.built?.dispose();for(const e of this.platform.children)e instanceof Tt&&e.geometry.dispose();this.ringMaterial.dispose(),this.discMaterial.dispose(),this.scene.environment=null,this.envRenderTarget?.dispose(),this.envRenderTarget=null,this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}applyBuiltScene(e,t,n){this.loadAbort=null,this.highlighter?.dispose(),this.built?.dispose(),this.built=e,this.currentSpecimen=t,this.currentAsset=n,this.scene.add(e.root),this.scene.updateMatrixWorld(!0),this.highlighter=new fx(e,t.accent),this.highlighter.setMode(this.view),this.highlighter.setCutaway(this.cutaway),this.focusedId&&!t.structures.some(l=>l.id===this.focusedId)&&(this.focusedId=null),this.highlighter.setFocus(this.focusedId);const s=e.normalization.normalizedBounds,r=new C((s.min[0]+s.max[0])/2,(s.min[1]+s.max[1])/2,(s.min[2]+s.max[2])/2),a=Math.max(s.max[0]-s.min[0],s.max[1]-s.min[1],s.max[2]-s.min[2])/2;this.director.setHome(a*1.08,r),this.director.reset(),this.director.setReduceMotion(this.reduceMotion),this.platform.position.set(r.x,s.min[1]-.055,r.z);const o=Math.max(a*1.05,.75);this.platform.scale.setScalar(o),this.ringMaterial.color.set(t.accent),this.discMaterial.color.set(t.accent),this.camera.updateProjectionMatrix(),this.focusedId&&this.view==="focus"&&this.frameStructure(this.focusedId),this.renderer.render(this.scene,this.camera),this.needsRender=!1,this.director.isAnimating()||this.controls.autoRotate?this.requestRender():this.stopLoop()}frameStructure(e){if(!this.built)return;const t=this.built.structureMeshes.get(e)??[];if(t.length!==0){this.scene.updateMatrixWorld(!0),this.scratchBox.makeEmpty();for(const n of t)n.visible&&(this.scratchMeshBox.setFromObject(n),this.scratchBox.union(this.scratchMeshBox));this.director.frame(this.scratchBox.isEmpty()?null:this.scratchBox)}}setFocusSilent(e){this.focusedId=e,this.highlighter?.setFocus(e),this.requestRender()}fail(e,t,n,s){this.loadState=Bi(this.loadState,{type:"failure",specimenId:e,error:{code:t,message:n,retryable:s}}),this.emit({type:"viewer-error",specimenId:e,reason:t,message:n,retryable:s})}emitProgress(e,t){this.loadState=Bi(this.loadState,{type:"progress",specimenId:e,progress:t}),this.emit({type:"load-progress",specimenId:e,progress:t})}emit(e){try{this.onEvent?.(e)}catch(t){console.error("Viewer event listener failed",t)}}requestRender(){this.needsRender=!0,!(this.disposed||this.contextLost||document.hidden||this.loopActive)&&(this.loopActive=!0,this.lastFrame=performance.now(),this.renderer.setAnimationLoop(this.tick))}stopLoop(){this.loopActive&&(this.loopActive=!1,this.renderer.setAnimationLoop(null))}tick=()=>{if(this.disposed||this.contextLost||document.hidden){this.stopLoop();return}const e=performance.now(),t=Math.min((e-this.lastFrame)/1e3,.1);this.lastFrame=e;const n=this.controls.update(),s=this.director.update(t);(n||s||this.needsRender)&&(this.needsRender=!1,this.renderer.render(this.scene,this.camera)),this.dragging||this.controls.autoRotate||this.director.isAnimating()||n||this.needsRender||this.stopLoop()};handleControlStart=()=>{this.dragging=!0,this.director.cancel(),this.autoRotateRequested&&(this.autoRotateRequested=!1,this.controls.autoRotate=!1,this.emit({type:"auto-rotate-changed",enabled:!1})),this.requestRender()};handleControlChange=()=>{this.requestRender()};handleControlEnd=()=>{this.dragging=!1,this.requestRender()};handleVisibilityChange=()=>{this.disposed||this.contextLost||(document.hidden?this.stopLoop():this.requestRender())};handleContextLost=e=>{e.preventDefault(),this.contextLost=!0,this.stopLoop(),this.emit({type:"viewer-unavailable",reason:"context-lost",message:"The graphics context was lost. Text content and the structure list are still available; restore will be attempted automatically."})};handleContextRestored=()=>{this.disposed||(this.contextLost=!1,this.setupEnvironment(),this.requestRender(),this.emit({type:"context-restored"}),this.currentSpecimen&&this.currentAsset&&this.setSpecimen(this.currentSpecimen,this.currentAsset))};setupEnvironment(){this.scene.environment=null,this.envRenderTarget?.dispose(),this.envRenderTarget=null;try{const e=new Fs(this.renderer),t=new lx;this.envRenderTarget=e.fromScene(t,.04),this.scene.environment=this.envRenderTarget.texture,this.scene.environmentIntensity=.5,t.dispose(),e.dispose()}catch{}}}function JM(i){const e=i.getContext();let t=null;try{const n=e.getExtension("WEBGL_debug_renderer_info");n&&(t=String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)))}catch{t=null}return{supported:!0,api:i.capabilities.isWebGL2?"webgl2":"webgl1",reason:null,maxTextureSize:i.capabilities.maxTextureSize,renderer:t}}const QM=Et.memo(Et.forwardRef(function({specimen:e,asset:t,store:n,reduceMotion:s=!1,className:r,onReady:a,onUnavailable:o},l){const c=Et.useRef(null),h=Et.useRef(null),u=Et.useRef(null),f=Et.useRef(null),d=Et.useRef(e),g=Et.useRef(t),v=Et.useRef(s),p=Et.useRef({onReady:a,onUnavailable:o});return d.current=e,g.current=t,v.current=s,p.current={onReady:a,onUnavailable:o},Et.useEffect(()=>{const m=c.current;if(!m)return;const M=od(m.ownerDocument);if(f.current=M,!M.supported){const _=M.reason??"WebGL is not available in this browser.";n.getState().markUnavailable("webgl-unsupported",_),p.current.onUnavailable?.({reason:"webgl-unsupported",message:_,capability:M});return}const S=_=>{switch(_.type){case"load-progress":n.getState().setProgress(_.progress);break;case"specimen-ready":{const L=h.current?.getStats();n.getState().markReady(_.meshCount),p.current.onReady?.({specimenId:_.specimenId,meshCount:_.meshCount,buildMs:_.buildMs,source:_.source,triangles:L?.triangles??0,webgl:L?.webgl??"none"});break}case"structure-focused":n.getState().setFocusedStructure(_.structureId);break;case"viewer-error":n.getState().fail({code:_.reason,message:_.message,retryable:_.retryable});break;case"viewer-unavailable":n.getState().markUnavailable(_.reason,_.message),p.current.onUnavailable?.({reason:_.reason,message:_.message,capability:M});break;case"context-restored":n.getState().beginSpecimen(d.current.id);break;case"auto-rotate-changed":n.getState().setAutoRotate(_.enabled);break}};let x;try{x=new KM({container:m,onEvent:S,reduceMotion:v.current,autoRotate:n.getState().autoRotate,initialView:n.getState().view})}catch(_){const E=_ instanceof Gu?_.message:`3D viewing could not start: ${_ instanceof Error?_.message:String(_)}`;n.getState().markUnavailable("renderer-failed",E),p.current.onUnavailable?.({reason:"renderer-failed",message:E,capability:M});return}h.current=x;const w=d.current;n.getState().beginSpecimen(w.id),x.setView(n.getState().view),x.setCutaway(n.getState().cutaway),x.setAutoRotate(n.getState().autoRotate),x.focusStructure(n.getState().focusedStructureId),u.current=w.id,x.setSpecimen(w,g.current);const T=n.subscribe((_,E)=>{const L=h.current;L&&(_.resetNonce!==E.resetNonce&&L.resetCamera(),_.focusedStructureId!==E.focusedStructureId&&L.focusStructure(_.focusedStructureId),_.view!==E.view&&L.setView(_.view),_.cutaway!==E.cutaway&&L.setCutaway(_.cutaway),_.autoRotate!==E.autoRotate&&L.setAutoRotate(_.autoRotate))});return()=>{T(),x.dispose(),h.current=null}},[n]),Et.useEffect(()=>{const m=h.current;m&&u.current!==e.id&&(u.current=e.id,n.getState().beginSpecimen(e.id),m.focusStructure(null),m.setSpecimen(e,t))},[e,t,n]),Et.useEffect(()=>{h.current?.setReduceMotion(s)},[s]),Et.useImperativeHandle(l,()=>({async screenshot(){const m=h.current;if(!m)throw new Error("The 3D viewer is not available");return m.captureScreenshot()},async exportGlb(){const m=h.current;if(!m)throw new Error("The 3D viewer is not available");return m.exportGlb()},reload(){const m=h.current;if(!m)return;const M=d.current;n.getState().beginSpecimen(M.id),m.setSpecimen(M,g.current)},resetCamera(){h.current?.resetCamera()},focusStructure(m){h.current?.focusStructure(m)}}),[n]),qe.jsx("div",{ref:c,className:r??"viewer-host","data-viewer-host":"","aria-hidden":"true"})}));function jM(i={}){return Ju()((e,t)=>({specimenId:i.specimenId??null,focusedStructureId:null,view:i.view??"mesh",cutaway:i.cutaway??!1,autoRotate:i.autoRotate??!1,resetNonce:0,status:"idle",progress:0,meshCount:0,error:null,announcement:"",beginSpecimen:n=>{const s=t(),r=s.specimenId===n;r&&s.status==="loading"||e({specimenId:n,focusedStructureId:r?s.focusedStructureId:null,status:"loading",progress:0,meshCount:0,error:null})},setProgress:n=>{const s=Math.max(0,Math.min(1,n)),r=t().status;t().progress===s&&r==="loading"||e({progress:s,status:r==="error"||r==="idle"||r==="unavailable"?"loading":r})},markReady:n=>{const s=t().specimenId;e({status:"ready",progress:1,meshCount:n,error:null,announcement:s?`3D model ready for ${s}.`:"3D model ready."})},fail:n=>{e({status:"error",error:n,announcement:n.retryable?"The 3D model could not be loaded. A retry is available.":"The 3D model is unavailable for this specimen."})},markUnavailable:(n,s)=>{e({status:"unavailable",error:{code:n,message:s,retryable:!1},announcement:"3D viewing is unavailable. Text and structure information remain available."})},setFocusedStructure:n=>{t().focusedStructureId!==n&&e({focusedStructureId:n})},setView:n=>{t().view!==n&&e({view:n,announcement:n==="focus"?"Focus view. Only the selected structure is emphasised.":"Mesh view. All structures are shown."})},setCutaway:n=>{t().cutaway!==n&&e({cutaway:n,announcement:n?"Cutaway on. Outer layers hidden.":"Cutaway off."})},setAutoRotate:n=>{t().autoRotate!==n&&e({autoRotate:n})},requestCameraReset:()=>{e({resetNonce:t().resetNonce+1})}}))}function ey(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function Sh({specimen:i,asset:e,selectedStructureId:t,onSelectStructure:n,reduceMotion:s,autoRotate:r,compact:a=!1}){const[o]=Et.useState(()=>jM({specimenId:i.id,view:"mesh",autoRotate:r})),l=Qu(o),c=Et.useRef(null),[h,u]=Et.useState(null),[f,d]=Et.useState("");Et.useEffect(()=>{const T=o.getState();T.setFocusedStructure(t),T.setView(t?"focus":"mesh")},[t,i.id,o]),Et.useEffect(()=>{o.getState().setAutoRotate(r)},[r,o]),Et.useEffect(()=>{const T=o.getState().focusedStructureId;T!==t&&n(T)},[l.focusedStructureId,t,n,o]);const g=h?.specimenId===i.id?h:null,v=Et.useMemo(()=>LM(e),[e]),p=l.status==="ready",m=Et.useCallback(T=>{u({specimenId:T.specimenId,meshCount:T.meshCount,buildMs:T.buildMs,source:T.source,webgl:T.webgl}),d("")},[]),M=!p,S=ju(l.view==="focus"?1:0,s);async function x(){d("");try{const T=await c.current?.screenshot();if(!T)throw new Error("The viewer did not return an image");ey(T,`${i.slug}-${new Date().toISOString().slice(0,10)}.png`)}catch(T){d(T instanceof Error?T.message:"The screenshot could not be saved.")}}function w(){o.getState().beginSpecimen(i.id),c.current?.reload()}return qe.jsxs("section",{className:`viewer-pane${a?" viewer-pane--compact":""}`,"aria-label":`${i.name} 3D viewer`,"data-viewer-state":l.status,children:[qe.jsxs("div",{className:"viewer-pane__stage-wrap",children:[qe.jsxs("div",{className:"viewer-pane__stage",children:[M&&qe.jsx("img",{className:"viewer-pane__preview",src:ed(i.previewPath),alt:`${i.name} schematic preview. ${i.summary}`,width:640,height:640,loading:"eager",decoding:"async"}),qe.jsx(QM,{ref:c,specimen:i,asset:v,store:o,reduceMotion:s,className:"viewer-pane__host",onReady:m}),qe.jsxs("div",{className:"viewer-pane__badges",children:[qe.jsx("span",{className:"badge badge--schematic",children:"Schematic · not to scale"}),t&&qe.jsx("span",{className:"badge",children:l.view==="focus"?"Structure focus":"Mesh view"})]}),l.status==="loading"&&qe.jsxs("div",{className:"viewer-pane__overlay",role:"status","aria-live":"polite",children:[qe.jsx("span",{className:"spinner","aria-hidden":"true"}),qe.jsxs("p",{children:["Building ",i.name,l.progress>0&&l.progress<1?` — ${Math.round(l.progress*100)}%`:"…"]}),qe.jsx("div",{className:"progress","aria-hidden":"true",children:qe.jsx("span",{style:{width:`${Math.max(6,Math.round(l.progress*100))}%`}})})]}),(l.status==="error"||l.status==="unavailable")&&qe.jsxs("div",{className:"viewer-pane__overlay viewer-pane__overlay--error",role:"group","aria-label":"3D unavailable",children:[qe.jsx("p",{className:"eyebrow",children:l.status==="unavailable"?"3D unavailable":"Viewer error"}),qe.jsx("p",{children:l.error?.message??"The 3D view could not start."}),qe.jsx("p",{className:"muted",children:"The preview and the full structure list below stay available. Every fact can be read without graphics."}),l.status==="error"&&l.error?.retryable&&qe.jsx("button",{type:"button",className:"button button--primary",onClick:w,children:"Retry 3D view"})]})]}),qe.jsxs("div",{className:"viewer-pane__toolbar",role:"group","aria-label":`${i.name} view controls`,children:[qe.jsxs("div",{className:"segmented",role:"group","aria-label":"View mode",ref:S.containerRef,children:[qe.jsx("span",{className:"spring-pill","aria-hidden":"true",ref:S.pillRef}),qe.jsx("button",{ref:S.registerItem(0),type:"button","aria-pressed":l.view==="mesh",disabled:!p,onClick:()=>o.getState().setView("mesh"),children:"Mesh"}),qe.jsx("button",{ref:S.registerItem(1),type:"button","aria-pressed":l.view==="focus",disabled:!p||!t,onClick:()=>o.getState().setView("focus"),children:"Focus"})]}),e.capabilities.cutaway&&qe.jsxs("button",{type:"button",className:"button button--ghost","aria-pressed":l.cutaway,disabled:!p,onClick:()=>o.getState().setCutaway(!l.cutaway),children:[qe.jsx(td,{}),qe.jsx("span",{children:"Cutaway"})]}),qe.jsxs("button",{type:"button",className:"button button--ghost","aria-pressed":l.autoRotate,disabled:!p,onClick:()=>o.getState().setAutoRotate(!l.autoRotate),children:[qe.jsx(nd,{}),qe.jsx("span",{children:"Auto-rotate"})]}),qe.jsxs("button",{type:"button",className:"button button--ghost",disabled:!p,onClick:()=>o.getState().requestCameraReset(),children:[qe.jsx(id,{}),qe.jsx("span",{children:"Reset view"})]}),e.export.png&&qe.jsxs("button",{type:"button",className:"button button--ghost",disabled:!p,onClick:()=>{x()},children:[qe.jsx(sd,{}),qe.jsx("span",{children:"Save PNG"})]}),t&&qe.jsxs("button",{type:"button",className:"button button--ghost viewer-pane__clear",onClick:()=>n(null),children:[qe.jsx(rd,{}),qe.jsx("span",{children:"Clear selection"})]})]})]}),qe.jsxs("div",{className:"viewer-pane__status",children:[qe.jsx("p",{className:"muted small",role:"status","aria-live":"polite",children:l.announcement||(p?`${i.name} is ready. ${g?.meshCount??0} schematic meshes.`:"Preparing the 3D view.")}),qe.jsx("p",{className:"muted small",children:g?`${g.meshCount} meshes · ${g.buildMs} ms build · ${g.webgl}`:l.status==="loading"?"Loading only the viewer chunk":"Preview is a static SVG"})]}),f&&qe.jsx("p",{className:"form-error",role:"alert",children:f})]})}const gy=Object.freeze(Object.defineProperty({__proto__:null,ViewerPane:Sh,default:Sh},Symbol.toStringTag,{value:"Module"}));export{hy as $,_t as A,It as B,He as C,Da as D,ay as E,uy as F,Tt as G,iu as H,Df as I,nu as J,oy as K,ks as L,xp as M,Xs as N,At as O,Hp as P,Pn as Q,Za as R,on as S,ny as T,cy as U,se as V,oi as W,cn as X,vs as Y,Su as Z,eu as _,sy as a,If as a0,Ur as a1,Ro as a2,Vt as a3,Mu as a4,uc as a5,dc as a6,ct as a7,ci as a8,zs as a9,Sn as aa,$n as ab,Bo as ac,ly as ad,Jo as ae,si as af,Mn as ag,hf as ah,Kh as ai,gy as aj,iy as b,py as c,Fr as d,fy as e,tt as f,C as g,ul as h,dy as i,my as j,qn as k,ry as l,jh as m,ri as n,na as o,Ld as p,nn as q,Xt as r,Ka as s,Gn as t,Uf as u,ui as v,tu as w,Os as x,hn as y,Co as z};
//# sourceMappingURL=ViewerPane-DmWOuz29.js.map
