(function(){const r=document.createElement("link").relList;if(!(r&&r.supports&&r.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const n=function(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}(t);fetch(t.href,n)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl=0,aa=1,Pl=2,Co=1,Il=2,ci=3,yi=0,Oe=1,kn=2,jt=0,ui=1,oa=2,la=3,ca=4,Dl=5,Cn=100,Nl=101,zl=102,ha=103,ua=104,Ol=200,Bl=201,Fl=202,Ul=203,Po=204,Io=205,Hl=206,Gl=207,Vl=208,kl=209,Wl=210,jl=0,ql=1,Xl=2,ms=3,Yl=4,Zl=5,Jl=6,Ql=7,vr=0,Kl=1,$l=2,ln=0,ec=1,tc=2,nc=3,ic=4,rc=5,xr=301,hr=302,fs=303,gs=304,yr=306,vs=307,xs=1e3,ot=1001,ys=1002,Ve=1003,da=1004,pa=1005,ht=1006,sc=1007,_r=1008,Xt=1009,ac=1010,oc=1011,ur=1012,lc=1013,cr=1014,Gt=1015,Fn=1016,cc=1017,hc=1018,uc=1019,di=1020,dc=1021,Un=1022,Qe=1023,pc=1024,mc=1025,fc=Qe,Hn=1026,_i=1027,gc=1028,vc=1029,xc=1030,yc=1031,_c=1032,Mc=1033,ma=33776,fa=33777,ga=33778,va=33779,xa=35840,ya=35841,_a=35842,Ma=35843,bc=36196,ba=37492,wa=37496,wc=37808,Sc=37809,Tc=37810,Ec=37811,Ac=37812,Lc=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Dc=37818,Nc=37819,zc=37820,Oc=37821,Bc=36492,Fc=37840,Uc=37841,Hc=37842,Gc=37843,Vc=37844,kc=37845,Wc=37846,jc=37847,qc=37848,Xc=37849,Yc=37850,Zc=37851,Jc=37852,Qc=37853,dr=2300,pr=2301,Pr=2302,Nn=2400,zn=2401,mr=2402,Kc=2500,Xe=3e3,hn=3001,Cs=3007,Ps=3002,$c=3003,Do=3004,No=3005,zo=3006,eh=3201,qn=0,th=1,Ir=7680,Mi=35044,Ci=35048,Sa="300 es";class un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}let Pi=1234567;const pi=Math.PI/180,bi=180/Math.PI,ke=[];for(let r=0;r<256;r++)ke[r]=(r<16?"0":"")+r.toString(16);const nh=typeof crypto!="undefined"&&"randomUUID"in crypto;function yt(){if(nh)return crypto.randomUUID().toUpperCase();const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ke[255&r]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[255&e]+ke[e>>8&255]+"-"+ke[e>>16&15|64]+ke[e>>24&255]+"-"+ke[63&t|128]+ke[t>>8&255]+"-"+ke[t>>16&255]+ke[t>>24&255]+ke[255&n]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toUpperCase()}function et(r,e,t){return Math.max(e,Math.min(t,r))}function _s(r,e){return(r%e+e)%e}function mi(r,e,t){return(1-t)*r+t*e}function Ms(r){return(r&r-1)==0&&r!==0}function Oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var ih=Object.freeze({__proto__:null,DEG2RAD:pi,RAD2DEG:bi,generateUUID:yt,clamp:et,euclideanModulo:_s,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:mi,damp:function(r,e,t,n){return mi(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(_s(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){return r!==void 0&&(Pi=r%2147483647),Pi=16807*Pi%2147483647,(Pi-1)/2147483646},degToRad:function(r){return r*pi},radToDeg:function(r){return r*bi},isPowerOfTwo:Ms,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Oo,setQuaternionFromProperEuler:function(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}});class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}J.prototype.isVector2=!0;class We{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],g=i[0],v=i[3],f=i[6],_=i[1],x=i[4],y=i[7],T=i[2],E=i[5],L=i[8];return s[0]=a*g+o*_+l*T,s[3]=a*v+o*x+l*E,s[6]=a*f+o*y+l*L,s[1]=c*g+h*_+d*T,s[4]=c*v+h*x+d*E,s[7]=c*f+h*y+d*L,s[2]=u*g+p*_+m*T,s[5]=u*v+p*x+m*E,s[8]=u*f+p*y+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,m=t*d+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Bo(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function Mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}let dn;We.prototype.isMatrix3=!0;class Pn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dn===void 0&&(dn=Mr("canvas")),dn.width=e.width,dn.height=e.height;const n=dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let rh=0;class je extends un{constructor(e=je.DEFAULT_IMAGE,t=je.DEFAULT_MAPPING,n=ot,i=ot,s=ht,a=_r,o=Qe,l=Xt,c=1,h=Xe){super(),Object.defineProperty(this,"id",{value:rh++}),this.uuid=yt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=yt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Dr(i[a].image)):s.push(Dr(i[a]))}else s=Dr(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case ot:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case ot:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}function Dr(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Pn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}je.DEFAULT_IMAGE=void 0,je.DEFAULT_MAPPING=300,je.prototype.isTexture=!0;class Le{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],g=l[2],v=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,T=(f+1)/2,E=(h+u)/4,L=(d+g)/4,I=(m+v)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=L/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=I/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=L/s,i=I/s),this.set(n,i,s,t),this}let _=Math.sqrt((v-m)*(v-m)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(d-g)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Le.prototype.isVector4=!0;class wt extends un{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Le(0,0,e,t),this.scissorTest=!1,this.viewport=new Le(0,0,e,t),this.texture=new je(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.prototype.isWebGLRenderTarget=!0;(class extends wt{constructor(r,e,t){super(r,e);const n=this.texture;this.texture=[];for(let i=0;i<t;i++)this.texture[i]=n.clone()}setSize(r,e,t=1){if(this.width!==r||this.height!==e||this.depth!==t){this.width=r,this.height=e,this.depth=t;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=r,this.texture[n].image.height=e,this.texture[n].image.depth=t;this.dispose()}return this.viewport.set(0,0,r,e),this.scissor.set(0,0,r,e),this}copy(r){this.dispose(),this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.texture.length=0;for(let e=0,t=r.texture.length;e<t;e++)this.texture[e]=r.texture[e].clone();return this}}).prototype.isWebGLMultipleRenderTargets=!0;class Fo extends wt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Fo.prototype.isWebGLMultisampleRenderTarget=!0;class nt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],p=s[a+1],m=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=m,void(e[t+3]=g);if(d!==g||l!==u||c!==p||h!==m){let v=1-o;const f=l*u+c*p+h*m+d*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,f*_);v=Math.sin(v*E)/T,o=Math.sin(o*E)/T}const y=o*_;if(l=l*v+u*y,c=c*v+p*y,h=h*v+m*y,d=d*v+g*y,v===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*p-c*u,e[t+1]=l*m+h*u+c*d-o*p,e[t+2]=c*m+h*p+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}nt.prototype.isQuaternion=!0;class S{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,d=l*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=c*l+u*-s+h*-o-d*-a,this.y=h*l+u*-a+d*-s-c*-o,this.z=d*l+u*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}S.prototype.isVector3=!0;const Nr=new S,Ta=new nt;class xt{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),Ii.subVectors(this.max,$n),pn.subVectors(e.a,$n),mn.subVectors(e.b,$n),fn.subVectors(e.c,$n),Dt.subVectors(mn,pn),Nt.subVectors(fn,mn),sn.subVectors(pn,fn);let t=[0,-Dt.z,Dt.y,0,-Nt.z,Nt.y,0,-sn.z,sn.y,Dt.z,0,-Dt.x,Nt.z,0,-Nt.x,sn.z,0,-sn.x,-Dt.y,Dt.x,0,-Nt.y,Nt.x,0,-sn.y,sn.x,0];return!!Or(t,pn,mn,fn,Ii)&&(t=[1,0,0,0,1,0,0,0,1],!!Or(t,pn,mn,fn,Ii)&&(Di.crossVectors(Dt,Nt),t=[Di.x,Di.y,Di.z],Or(t,pn,mn,fn,Ii)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Kn).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Et[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Et[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Et[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Et[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Et[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Et[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Et[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Et[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Et)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}xt.prototype.isBox3=!0;const Et=[new S,new S,new S,new S,new S,new S,new S,new S],Kn=new S,zr=new xt,pn=new S,mn=new S,fn=new S,Dt=new S,Nt=new S,sn=new S,$n=new S,Ii=new S,Di=new S,an=new S;function Or(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){an.fromArray(r,s);const o=i.x*Math.abs(an.x)+i.y*Math.abs(an.y)+i.z*Math.abs(an.z),l=e.dot(an),c=t.dot(an),h=n.dot(an);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const sh=new xt,Ea=new S,Br=new S,Fr=new S;class Xn{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.add(Fr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Br.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ea.copy(e.center).add(Br)),this.expandByPoint(Ea.copy(e.center).sub(Br)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const At=new S,Ur=new S,Ni=new S,zt=new S,Hr=new S,zi=new S,Gr=new S;class Gn{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,At)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=At.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(At.copy(this.direction).multiplyScalar(t).add(this.origin),At.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ur.copy(e).add(t).multiplyScalar(.5),Ni.copy(t).sub(e).normalize(),zt.copy(this.origin).sub(Ur);const s=.5*e.distanceTo(t),a=-this.direction.dot(Ni),o=zt.dot(this.direction),l=-zt.dot(Ni),c=zt.lengthSq(),h=Math.abs(1-a*a);let d,u,p,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Ni).multiplyScalar(u).add(Ur),p}intersectSphere(e,t){At.subVectors(e.center,this.origin);const n=At.dot(this.direction),i=At.dot(At)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i?null:((s>n||n!=n)&&(n=s),(a<i||i!=i)&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,At)!==null}intersectTriangle(e,t,n,i,s){Hr.subVectors(t,e),zi.subVectors(n,e),Gr.crossVectors(Hr,zi);let a,o=this.direction.dot(Gr);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}zt.subVectors(this.origin,e);const l=a*this.direction.dot(zi.crossVectors(zt,zi));if(l<0)return null;const c=a*this.direction.dot(Hr.cross(zt));if(c<0||l+c>o)return null;const h=-a*zt.dot(Gr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,h,d,u,p,m,g,v){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=g,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gn.setFromMatrixColumn(e,0).length(),s=1/gn.setFromMatrixColumn(e,1).length(),a=1/gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,m=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,m=c*h,g=c*d;t[0]=u+g*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,m=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,m=o*h,g=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*l,p=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,oh)}lookAt(e,t,n){const i=this.elements;return st.subVectors(e,t),st.lengthSq()===0&&(st.z=1),st.normalize(),Ot.crossVectors(n,st),Ot.lengthSq()===0&&(Math.abs(n.z)===1?st.x+=1e-4:st.z+=1e-4,st.normalize(),Ot.crossVectors(n,st)),Ot.normalize(),Oi.crossVectors(st,Ot),i[0]=Ot.x,i[4]=Oi.x,i[8]=st.x,i[1]=Ot.y,i[5]=Oi.y,i[9]=st.y,i[2]=Ot.z,i[6]=Oi.z,i[10]=st.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],g=n[6],v=n[10],f=n[14],_=n[3],x=n[7],y=n[11],T=n[15],E=i[0],L=i[4],I=i[8],H=i[12],D=i[1],O=i[5],$=i[9],X=i[13],F=i[2],q=i[6],ee=i[10],ne=i[14],se=i[3],le=i[7],ce=i[11],Y=i[15];return s[0]=a*E+o*D+l*F+c*se,s[4]=a*L+o*O+l*q+c*le,s[8]=a*I+o*$+l*ee+c*ce,s[12]=a*H+o*X+l*ne+c*Y,s[1]=h*E+d*D+u*F+p*se,s[5]=h*L+d*O+u*q+p*le,s[9]=h*I+d*$+u*ee+p*ce,s[13]=h*H+d*X+u*ne+p*Y,s[2]=m*E+g*D+v*F+f*se,s[6]=m*L+g*O+v*q+f*le,s[10]=m*I+g*$+v*ee+f*ce,s[14]=m*H+g*X+v*ne+f*Y,s[3]=_*E+x*D+y*F+T*se,s[7]=_*L+x*O+y*q+T*le,s[11]=_*I+x*$+y*ee+T*ce,s[15]=_*H+x*X+y*ne+T*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],g=e[13],v=e[14],f=e[15],_=d*v*c-g*u*c+g*l*p-o*v*p-d*l*f+o*u*f,x=m*u*c-h*v*c-m*l*p+a*v*p+h*l*f-a*u*f,y=h*g*c-m*d*c+m*o*p-a*g*p-h*o*f+a*d*f,T=m*d*l-h*g*l-m*o*u+a*g*u+h*o*v-a*d*v,E=t*_+n*x+i*y+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=_*L,e[1]=(g*u*s-d*v*s-g*i*p+n*v*p+d*i*f-n*u*f)*L,e[2]=(o*v*s-g*l*s+g*i*c-n*v*c-o*i*f+n*l*f)*L,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*L,e[4]=x*L,e[5]=(h*v*s-m*u*s+m*i*p-t*v*p-h*i*f+t*u*f)*L,e[6]=(m*l*s-a*v*s-m*i*c+t*v*c+a*i*f-t*l*f)*L,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*p+t*l*p)*L,e[8]=y*L,e[9]=(m*d*s-h*g*s-m*n*p+t*g*p+h*n*f-t*d*f)*L,e[10]=(a*g*s-m*o*s+m*n*c-t*g*c-a*n*f+t*o*f)*L,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*L,e[12]=T*L,e[13]=(h*g*i-m*d*i+m*n*u-t*g*u-h*n*v+t*d*v)*L,e[14]=(m*o*i-a*g*i-m*n*l+t*g*l+a*n*v-t*o*v)*L,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,m=s*d,g=a*h,v=a*d,f=o*d,_=l*c,x=l*h,y=l*d,T=n.x,E=n.y,L=n.z;return i[0]=(1-(g+f))*T,i[1]=(p+y)*T,i[2]=(m-x)*T,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(u+f))*E,i[6]=(v+_)*E,i[7]=0,i[8]=(m+x)*L,i[9]=(v-_)*L,i[10]=(1-(u+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gn.set(i[0],i[1],i[2]).length();const a=gn.set(i[4],i[5],i[6]).length(),o=gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mt.copy(this);const l=1/s,c=1/a,h=1/o;return mt.elements[0]*=l,mt.elements[1]*=l,mt.elements[2]*=l,mt.elements[4]*=c,mt.elements[5]*=c,mt.elements[6]*=c,mt.elements[8]*=h,mt.elements[9]*=h,mt.elements[10]*=h,t.setFromRotationMatrix(mt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),d=(t+e)*l,u=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}de.prototype.isMatrix4=!0;const gn=new S,mt=new de,ah=new S(0,0,0),oh=new S(1,1,1),Ot=new S,Oi=new S,st=new S,Aa=new de,La=new nt;class Vn{constructor(e=0,t=0,n=0,i=Vn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Vn.prototype.isEuler=!0,Vn.DefaultOrder="XYZ",Vn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class lh{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let ch=0;const Ra=new S,vn=new nt,Lt=new de,Bi=new S,ei=new S,hh=new S,uh=new nt,Ca=new S(1,0,0),Pa=new S(0,1,0),Ia=new S(0,0,1),dh={type:"added"},Da={type:"removed"};class Me extends un{constructor(){super(),Object.defineProperty(this,"id",{value:ch++}),this.uuid=yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DefaultUp.clone();const e=new S,t=new Vn,n=new nt,i=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new We}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.multiply(vn),this}rotateOnWorldAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.premultiply(vn),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Lt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lt.lookAt(ei,Bi,this.up):Lt.lookAt(Bi,ei,this.up),this.quaternion.setFromRotationMatrix(Lt),i&&(Lt.extractRotation(i.matrixWorld),vn.setFromRotationMatrix(Lt),this.quaternion.premultiply(vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Da)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Da)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Lt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Me.DefaultUp=new S(0,1,0),Me.DefaultMatrixAutoUpdate=!0,Me.prototype.isObject3D=!0;const ft=new S,Rt=new S,Vr=new S,Ct=new S,xn=new S,yn=new S,Na=new S,kr=new S,Wr=new S,jr=new S;class ze{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ft.subVectors(e,t),i.cross(ft);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ft.subVectors(i,t),Rt.subVectors(n,t),Vr.subVectors(e,t);const a=ft.dot(ft),o=ft.dot(Rt),l=ft.dot(Vr),c=Rt.dot(Rt),h=Rt.dot(Vr),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ct),Ct.x>=0&&Ct.y>=0&&Ct.x+Ct.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ct),l.set(0,0),l.addScaledVector(s,Ct.x),l.addScaledVector(a,Ct.y),l.addScaledVector(o,Ct.z),l}static isFrontFacing(e,t,n,i){return ft.subVectors(n,t),Rt.subVectors(e,t),ft.cross(Rt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ft.subVectors(this.c,this.b),Rt.subVectors(this.a,this.b),.5*ft.cross(Rt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ze.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ze.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ze.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ze.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ze.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xn.subVectors(i,n),yn.subVectors(s,n),kr.subVectors(e,n);const l=xn.dot(kr),c=yn.dot(kr);if(l<=0&&c<=0)return t.copy(n);Wr.subVectors(e,i);const h=xn.dot(Wr),d=yn.dot(Wr);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xn,a);jr.subVectors(e,s);const p=xn.dot(jr),m=yn.dot(jr);if(m>=0&&p<=m)return t.copy(s);const g=p*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(yn,o);const v=h*m-p*d;if(v<=0&&d-h>=0&&p-m>=0)return Na.subVectors(s,i),o=(d-h)/(d-h+(p-m)),t.copy(i).addScaledVector(Na,o);const f=1/(v+g+u);return a=g*f,o=u*f,t.copy(n).addScaledVector(xn,a).addScaledVector(yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ph=0;class Ze extends un{constructor(){super(),Object.defineProperty(this,"id",{value:ph++}),this.uuid=yt(),this.name="",this.type="Material",this.fog=!0,this.blending=ui,this.side=yi,this.vertexColors=!1,this.opacity=1,this.format=Qe,this.transparent=!1,this.blendSrc=Po,this.blendDst=Io,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==Qe&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Ze.prototype.isMaterial=!0;const Uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function Xr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Yr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}class he{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=_s(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=qr(s,i,e+1/3),this.g=qr(s,i,e),this.b=qr(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Uo[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,t,n){return this.getHSL(gt),gt.h+=e,gt.s+=t,gt.l+=n,this.setHSL(gt.h,gt.s,gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gt),e.getHSL(Fi);const n=mi(gt.h,Fi.h,t),i=mi(gt.s,Fi.s,t),s=mi(gt.l,Fi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}he.NAMES=Uo,he.prototype.isColor=!0,he.prototype.r=1,he.prototype.g=1,he.prototype.b=1;class br extends Ze{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}br.prototype.isMeshBasicMaterial=!0;const Re=new S,Ui=new J;class Be{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Mi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new he),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new J),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new S),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Le),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Re.fromBufferAttribute(this,t),Re.applyMatrix3(e),this.setXYZ(t,Re.x,Re.y,Re.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Re.x=this.getX(t),Re.y=this.getY(t),Re.z=this.getZ(t),Re.applyMatrix4(e),this.setXYZ(t,Re.x,Re.y,Re.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Re.x=this.getX(t),Re.y=this.getY(t),Re.z=this.getZ(t),Re.applyNormalMatrix(e),this.setXYZ(t,Re.x,Re.y,Re.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Re.x=this.getX(t),Re.y=this.getY(t),Re.z=this.getZ(t),Re.transformDirection(e),this.setXYZ(t,Re.x,Re.y,Re.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mi&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}Be.prototype.isBufferAttribute=!0;class Ho extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Go extends Be{constructor(e,t,n){super(new Uint32Array(e),t,n)}}(class extends Be{constructor(r,e,t){super(new Uint16Array(r),e,t)}}).prototype.isFloat16BufferAttribute=!0;class be extends Be{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mh=0;const ct=new de,Zr=new Me,_n=new S,at=new xt,ti=new xt,Ge=new S;class Ee extends un{constructor(){super(),Object.defineProperty(this,"id",{value:mh++}),this.uuid=yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bo(e)>65535?Go:Ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ct.makeRotationFromQuaternion(e),this.applyMatrix4(ct),this}rotateX(e){return ct.makeRotationX(e),this.applyMatrix4(ct),this}rotateY(e){return ct.makeRotationY(e),this.applyMatrix4(ct),this}rotateZ(e){return ct.makeRotationZ(e),this.applyMatrix4(ct),this}translate(e,t,n){return ct.makeTranslation(e,t,n),this.applyMatrix4(ct),this}scale(e,t,n){return ct.makeScale(e,t,n),this.applyMatrix4(ct),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];at.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,at.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,at.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(at.min),this.boundingBox.expandByPoint(at.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new S,1/0);if(e){const n=this.boundingSphere.center;if(at.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(at.min,ti.min),at.expandByPoint(Ge),Ge.addVectors(at.max,ti.max),at.expandByPoint(Ge)):(at.expandByPoint(ti.min),at.expandByPoint(ti.max))}at.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ge.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ge));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(_n.fromBufferAttribute(e,c),Ge.add(_n)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Be(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let D=0;D<o;D++)c[D]=new S,h[D]=new S;const d=new S,u=new S,p=new S,m=new J,g=new J,v=new J,f=new S,_=new S;function x(D,O,$){d.fromArray(i,3*D),u.fromArray(i,3*O),p.fromArray(i,3*$),m.fromArray(a,2*D),g.fromArray(a,2*O),v.fromArray(a,2*$),u.sub(d),p.sub(d),g.sub(m),v.sub(m);const X=1/(g.x*v.y-v.x*g.y);isFinite(X)&&(f.copy(u).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(X),_.copy(p).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(X),c[D].add(f),c[O].add(f),c[$].add(f),h[D].add(_),h[O].add(_),h[$].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,O=y.length;D<O;++D){const $=y[D],X=$.start;for(let F=X,q=X+$.count;F<q;F+=3)x(n[F+0],n[F+1],n[F+2])}const T=new S,E=new S,L=new S,I=new S;function H(D){L.fromArray(s,3*D),I.copy(L);const O=c[D];T.copy(O),T.sub(L.multiplyScalar(L.dot(O))).normalize(),E.crossVectors(I,O);const $=E.dot(h[D])<0?-1:1;l[4*D]=T.x,l[4*D+1]=T.y,l[4*D+2]=T.z,l[4*D+3]=$}for(let D=0,O=y.length;D<O;++D){const $=y[D],X=$.start;for(let F=X,q=X+$.count;F<q;F+=3)H(n[F+0]),H(n[F+1]),H(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),g=e.getX(u+1),v=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],o=a.array,l=a.itemSize*t,c=Math.min(o.length,s.length-l);for(let h=0,d=l;h<c;h++,d++)s[d]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ge.fromBufferAttribute(e,t),Ge.normalize(),e.setXYZ(t,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,m=0;for(let g=0,v=l.length;g<v;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let f=0;f<h;f++)u[m++]=c[p++]}return new Be(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ee,n=this.index.array,i=this.attributes;for(const o in i){const l=e(i[o],n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.prototype.isBufferGeometry=!0;const za=new de,Mn=new Gn,Jr=new Xn,Bt=new S,Ft=new S,Ut=new S,Qr=new S,Kr=new S,$r=new S,Hi=new S,Gi=new S,Vi=new S,ki=new J,Wi=new J,ji=new J,es=new S,qi=new S;class Je extends Me{constructor(e=new Ee,t=new br){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),e.ray.intersectsSphere(Jr)===!1)||(za.copy(s).invert(),Mn.copy(e.ray).applyMatrix4(za),n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,p=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=p.length;g<v;g++){const f=p[g],_=i[f.materialIndex];for(let x=Math.max(f.start,m.start),y=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));x<y;x+=3){const T=o.getX(x),E=o.getX(x+1),L=o.getX(x+2);a=Xi(this,_,e,Mn,l,c,h,d,u,T,E,L),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else for(let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);g<v;g+=3){const f=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);a=Xi(this,i,e,Mn,l,c,h,d,u,f,_,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else if(l!==void 0)if(Array.isArray(i))for(let g=0,v=p.length;g<v;g++){const f=p[g],_=i[f.materialIndex];for(let x=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));x<y;x+=3)a=Xi(this,_,e,Mn,l,c,h,d,u,x,x+1,x+2),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=f.materialIndex,t.push(a))}else for(let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);g<v;g+=3)a=Xi(this,i,e,Mn,l,c,h,d,u,g,g+1,g+2),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}function Xi(r,e,t,n,i,s,a,o,l,c,h,d){Bt.fromBufferAttribute(i,c),Ft.fromBufferAttribute(i,h),Ut.fromBufferAttribute(i,d);const u=r.morphTargetInfluences;if(s&&u){Hi.set(0,0,0),Gi.set(0,0,0),Vi.set(0,0,0);for(let m=0,g=s.length;m<g;m++){const v=u[m],f=s[m];v!==0&&(Qr.fromBufferAttribute(f,c),Kr.fromBufferAttribute(f,h),$r.fromBufferAttribute(f,d),a?(Hi.addScaledVector(Qr,v),Gi.addScaledVector(Kr,v),Vi.addScaledVector($r,v)):(Hi.addScaledVector(Qr.sub(Bt),v),Gi.addScaledVector(Kr.sub(Ft),v),Vi.addScaledVector($r.sub(Ut),v)))}Bt.add(Hi),Ft.add(Gi),Ut.add(Vi)}r.isSkinnedMesh&&(r.boneTransform(c,Bt),r.boneTransform(h,Ft),r.boneTransform(d,Ut));const p=function(m,g,v,f,_,x,y,T){let E;if(E=g.side===Oe?f.intersectTriangle(y,x,_,!0,T):f.intersectTriangle(_,x,y,g.side!==kn,T),E===null)return null;qi.copy(T),qi.applyMatrix4(m.matrixWorld);const L=v.ray.origin.distanceTo(qi);return L<v.near||L>v.far?null:{distance:L,point:qi.clone(),object:m}}(r,e,t,n,Bt,Ft,Ut,es);if(p){o&&(ki.fromBufferAttribute(o,c),Wi.fromBufferAttribute(o,h),ji.fromBufferAttribute(o,d),p.uv=ze.getUV(es,Bt,Ft,Ut,ki,Wi,ji,new J)),l&&(ki.fromBufferAttribute(l,c),Wi.fromBufferAttribute(l,h),ji.fromBufferAttribute(l,d),p.uv2=ze.getUV(es,Bt,Ft,Ut,ki,Wi,ji,new J));const m={a:c,b:h,c:d,normal:new S,materialIndex:0};ze.getNormal(Bt,Ft,Ut,m.normal),p.face=m}return p}Je.prototype.isMesh=!0;class Yn extends Ee{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;function m(g,v,f,_,x,y,T,E,L,I,H){const D=y/L,O=T/I,$=y/2,X=T/2,F=E/2,q=L+1,ee=I+1;let ne=0,se=0;const le=new S;for(let ce=0;ce<ee;ce++){const Y=ce*O-X;for(let w=0;w<q;w++){const A=w*D-$;le[g]=A*_,le[v]=Y*x,le[f]=F,c.push(le.x,le.y,le.z),le[g]=0,le[v]=0,le[f]=E>0?1:-1,h.push(le.x,le.y,le.z),d.push(w/L),d.push(1-ce/I),ne+=1}}for(let ce=0;ce<I;ce++)for(let Y=0;Y<L;Y++){const w=u+Y+q*ce,A=u+Y+q*(ce+1),G=u+(Y+1)+q*(ce+1),U=u+(Y+1)+q*ce;l.push(w,A,U),l.push(A,G,U),se+=6}o.addGroup(p,se,H),p+=se,u+=ne}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qe(r){const e={};for(let t=0;t<r.length;t++){const n=Wn(r[t]);for(const i in n)e[i]=n[i]}return e}const fh={clone:Wn,merge:qe};class cn extends Ze{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}cn.prototype.isShaderMaterial=!0;class Is extends Me{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Is.prototype.isCamera=!0;class tt extends Is{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*bi*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*pi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*bi*Math.atan(Math.tan(.5*pi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*pi*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}tt.prototype.isPerspectiveCamera=!0;const bn=90;class bs extends Me{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new tt(bn,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const s=new tt(bn,1,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const a=new tt(bn,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new S(0,1,0)),this.add(a);const o=new tt(bn,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);const l=new tt(bn,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new tt(bn,1,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=h}}class wr extends je{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:xr,n,i,s,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}wr.prototype.isCubeTexture=!0;class Vo extends wt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new wr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Qe,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yn(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:jt});s.uniforms.tEquirect.value=t;const a=new Je(i,s),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=ht),new bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Vo.prototype.isWebGLCubeRenderTarget=!0;const ts=new S,gh=new S,vh=new We;class Pt{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ts.subVectors(n,t).cross(gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ts),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vh.getNormalMatrix(e),i=this.coplanarPoint(ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Pt.prototype.isPlane=!0;const wn=new Xn,Yi=new S;class Sr{constructor(e=new Pt,t=new Pt,n=new Pt,i=new Pt,s=new Pt,a=new Pt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],p=n[9],m=n[10],g=n[11],v=n[12],f=n[13],_=n[14],x=n[15];return t[0].setComponents(o-i,d-l,g-u,x-v).normalize(),t[1].setComponents(o+i,d+l,g+u,x+v).normalize(),t[2].setComponents(o+s,d+c,g+p,x+f).normalize(),t[3].setComponents(o-s,d-c,g-p,x-f).normalize(),t[4].setComponents(o-a,d-h,g-m,x-_).normalize(),t[5].setComponents(o+a,d+h,g+m,x+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSprite(e){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yi.x=i.normal.x>0?e.max.x:e.min.x,Yi.y=i.normal.y>0?e.max.y:e.min.y,Yi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ko(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xh(r,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){const o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a===void 0?n.set(i,function(o,l){const c=o.array,h=o.usage,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let u=5126;return c instanceof Float32Array?u=5126:c instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):c instanceof Uint16Array?o.isFloat16BufferAttribute?t?u=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):u=5123:c instanceof Int16Array?u=5122:c instanceof Uint32Array?u=5125:c instanceof Int32Array?u=5124:c instanceof Int8Array?u=5120:(c instanceof Uint8Array||c instanceof Uint8ClampedArray)&&(u=5121),{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}}(i,s)):a.version<i.version&&(function(o,l,c){const h=l.array,d=l.updateRange;r.bindBuffer(c,o),d.count===-1?r.bufferSubData(c,0,h):(t?r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}(a.buffer,i,s),a.version=i.version)}}}class Ds extends Ee{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],m=[],g=[],v=[];for(let f=0;f<h;f++){const _=f*u-a;for(let x=0;x<c;x++){const y=x*d-s;m.push(y,-_,0),g.push(0,0,1),v.push(x/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const x=_+c*f,y=_+c*(f+1),T=_+1+c*(f+1),E=_+1+c*f;p.push(x,y,E),p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(v,2))}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}const ye={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},te={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new We},uv2Transform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}}},bt={basic:{uniforms:qe([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:qe([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new he(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:qe([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:qe([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:qe([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new he(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:qe([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:qe([te.points,te.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:qe([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:qe([te.common,te.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:qe([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:qe([te.sprite,te.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},cube:{uniforms:qe([te.envmap,{opacity:{value:1}}]),vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:qe([te.common,te.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:qe([te.lights,te.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};function yh(r,e,t,n,i){const s=new he(0);let a,o,l=0,c=null,h=0,d=null;function u(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,i)}return{getClearColor:function(){return s},setClearColor:function(p,m=1){s.set(p),l=m,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,u(s,l)},render:function(p,m){let g=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=e.get(v));const f=r.xr,_=f.getSession&&f.getSession();_&&_.environmentBlendMode==="additive"&&(v=null),v===null?u(s,l):v&&v.isColor&&(u(v,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===yr)?(o===void 0&&(o=new Je(new Yn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Wn(bt.cube.uniforms),vertexShader:bt.cube.vertexShader,fragmentShader:bt.cube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(x,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c===v&&h===v.version&&d===r.toneMapping||(o.material.needsUpdate=!0,c=v,h=v.version,d=r.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new Je(new Ds(2,2),new cn({name:"BackgroundMaterial",uniforms:Wn(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),c===v&&h===v.version&&d===r.toneMapping||(a.material.needsUpdate=!0,c=v,h=v.version,d=r.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}}}function _h(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=u(null);let c=l;function h(y){return n.isWebGL2?r.bindVertexArray(y):s.bindVertexArrayOES(y)}function d(y){return n.isWebGL2?r.deleteVertexArray(y):s.deleteVertexArrayOES(y)}function u(y){const T=[],E=[],L=[];for(let I=0;I<i;I++)T[I]=0,E[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:E,attributeDivisors:L,object:y,attributes:{},index:null}}function p(){const y=c.newAttributes;for(let T=0,E=y.length;T<E;T++)y[T]=0}function m(y){g(y,0)}function g(y,T){const E=c.newAttributes,L=c.enabledAttributes,I=c.attributeDivisors;E[y]=1,L[y]===0&&(r.enableVertexAttribArray(y),L[y]=1),I[y]!==T&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,T),I[y]=T)}function v(){const y=c.newAttributes,T=c.enabledAttributes;for(let E=0,L=T.length;E<L;E++)T[E]!==y[E]&&(r.disableVertexAttribArray(E),T[E]=0)}function f(y,T,E,L,I,H){n.isWebGL2!==!0||E!==5124&&E!==5125?r.vertexAttribPointer(y,T,E,L,I,H):r.vertexAttribIPointer(y,T,E,I,H)}function _(){x(),c!==l&&(c=l,h(c.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(y,T,E,L,I){let H=!1;if(a){const D=function(O,$,X){const F=X.wireframe===!0;let q=o[O.id];q===void 0&&(q={},o[O.id]=q);let ee=q[$.id];ee===void 0&&(ee={},q[$.id]=ee);let ne=ee[F];return ne===void 0&&(ne=u(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),ee[F]=ne),ne}(L,E,T);c!==D&&(c=D,h(c.object)),H=function(O,$){const X=c.attributes,F=O.attributes;let q=0;for(const ee in F){const ne=X[ee],se=F[ee];if(ne===void 0||ne.attribute!==se||ne.data!==se.data)return!0;q++}return c.attributesNum!==q||c.index!==$}(L,I),H&&function(O,$){const X={},F=O.attributes;let q=0;for(const ee in F){const ne=F[ee],se={};se.attribute=ne,ne.data&&(se.data=ne.data),X[ee]=se,q++}c.attributes=X,c.attributesNum=q,c.index=$}(L,I)}else{const D=T.wireframe===!0;c.geometry===L.id&&c.program===E.id&&c.wireframe===D||(c.geometry=L.id,c.program=E.id,c.wireframe=D,H=!0)}y.isInstancedMesh===!0&&(H=!0),I!==null&&t.update(I,34963),H&&(function(D,O,$,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const F=X.attributes,q=$.getAttributes(),ee=O.defaultAttributeValues;for(const ne in q){const se=q[ne];if(se.location>=0){let le=F[ne];if(le===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),le!==void 0){const ce=le.normalized,Y=le.itemSize,w=t.get(le);if(w===void 0)continue;const A=w.buffer,G=w.type,U=w.bytesPerElement;if(le.isInterleavedBufferAttribute){const R=le.data,Q=R.stride,K=le.offset;if(R&&R.isInstancedInterleavedBuffer){for(let P=0;P<se.locationSize;P++)g(se.location+P,R.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let P=0;P<se.locationSize;P++)m(se.location+P);r.bindBuffer(34962,A);for(let P=0;P<se.locationSize;P++)f(se.location+P,Y/se.locationSize,G,ce,Q*U,(K+Y/se.locationSize*P)*U)}else{if(le.isInstancedBufferAttribute){for(let R=0;R<se.locationSize;R++)g(se.location+R,le.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let R=0;R<se.locationSize;R++)m(se.location+R);r.bindBuffer(34962,A);for(let R=0;R<se.locationSize;R++)f(se.location+R,Y/se.locationSize,G,ce,Y*U,Y/se.locationSize*R*U)}}else if(ee!==void 0){const ce=ee[ne];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(se.location,ce);break;case 3:r.vertexAttrib3fv(se.location,ce);break;case 4:r.vertexAttrib4fv(se.location,ce);break;default:r.vertexAttrib1fv(se.location,ce)}}}}v()}(y,T,E,L),I!==null&&r.bindBuffer(34963,t.get(I).buffer))},reset:_,resetDefaultState:x,dispose:function(){_();for(const y in o){const T=o[y];for(const E in T){const L=T[E];for(const I in L)d(L[I].object),delete L[I];delete T[E]}delete o[y]}},releaseStatesOfGeometry:function(y){if(o[y.id]===void 0)return;const T=o[y.id];for(const E in T){const L=T[E];for(const I in L)d(L[I].object),delete L[I];delete T[E]}delete o[y.id]},releaseStatesOfProgram:function(y){for(const T in o){const E=o[T];if(E[y.id]===void 0)continue;const L=E[y.id];for(const I in L)d(L[I].object),delete L[I];delete E[y.id]}},initAttributes:p,enableAttribute:m,disableUnusedAttributes:v}}function Mh(r,e,t,n){const i=n.isWebGL2;let s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)}}function bh(r,e,t){let n;function i(y){if(y==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),u=r.getParameter(3379),p=r.getParameter(34076),m=r.getParameter(34921),g=r.getParameter(36347),v=r.getParameter(36348),f=r.getParameter(36349),_=d>0,x=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:f,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:_&&x,maxSamples:s?r.getParameter(36183):0}}function wh(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Pt,o=new We,l={value:null,needsUpdate:!1};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,m){const g=d!==null?d.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const f=p+4*g,_=u.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<f)&&(v=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)a.copy(d[x]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,p){const m=d.length!==0||u||n!==0||i;return i=u,t=h(d,p,0),n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,p){const m=d.clippingPlanes,g=d.clipIntersection,v=d.clipShadows,f=r.get(d);if(!i||m===null||m.length===0||s&&!v)s?h(null):c();else{const _=s?0:n,x=4*_;let y=f.clippingState||null;l.value=y,y=h(m,u,x,p);for(let T=0;T!==x;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}}}function Sh(r){let e=new WeakMap;function t(i,s){return s===fs?i.mapping=xr:s===gs&&(i.mapping=hr),i}function n(i){const s=i.target;s.removeEventListener("dispose",n);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const s=i.mapping;if(s===fs||s===gs){if(e.has(i))return t(e.get(i).texture,i.mapping);{const a=i.image;if(a&&a.height>0){const o=r.getRenderTarget(),l=new Vo(a.height/2);return l.fromEquirectangularTexture(r,i),e.set(i,l),r.setRenderTarget(o),i.addEventListener("dispose",n),t(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}bt.physical={uniforms:qe([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new he(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new he(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new he(1,1,1)},specularTintMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};class Ns extends Is{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ns.prototype.isOrthographicCamera=!0;class Tr extends cn{constructor(e){super(e),this.type="RawShaderMaterial"}}Tr.prototype.isRawShaderMaterial=!0;const Mt=Math.pow(2,8),Wo=[.125,.215,.35,.446,.526,.582],jo=5+Wo.length,Zi=20,Vt={[Xe]:0,[hn]:1,[Ps]:2,[Do]:3,[No]:4,[zo]:5,[Cs]:6},ns=new Ns,{_lodPlanes:ni,_sizeLods:Oa,_sigmas:Ji}=Ah(),Ba=new he;let is=null;const on=(1+Math.sqrt(5))/2,Sn=1/on,Fa=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,on,Sn),new S(0,on,-Sn),new S(Sn,0,on),new S(-Sn,0,on),new S(on,Sn,0),new S(-on,Sn,0)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=function(t){const n=new Float32Array(t),i=new S(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i},inputEncoding:{value:Vt[Xe]},outputEncoding:{value:Vt[Xe]}},vertexShader:zs(),fragmentShader:`

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

			${Os()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}(Zi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){is=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Ga(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Ha(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ni.length;e++)ni[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(is),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e){is=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Xt,format:fc,encoding:Eh(e)?e.encoding:Ps,depthBuffer:!1},n=Ua(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Ua(t),n}_compileMaterial(e){const t=new Je(ni[0],e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,n,i){const s=new tt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.outputEncoding,d=l.toneMapping;l.getClearColor(Ba),l.toneMapping=ln,l.outputEncoding=Xe,l.autoClear=!1;const u=new br({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),p=new Je(new Yn,u);let m=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,m=!0):(u.color.copy(Ba),m=!0);for(let v=0;v<6;v++){const f=v%3;f==0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):f==1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v])),Qi(i,f*Mt,v>2?Mt:0,Mt,Mt),l.setRenderTarget(i),m&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=d,l.outputEncoding=h,l.autoClear=c,e.background=g}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Qe&&t.type===Xt&&t.encoding===hn?e.value=Vt[Xe]:e.value=Vt[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Ga()):this._equirectShader==null&&(this._equirectShader=Ha());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Je(ni[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),Qi(t,0,0,3*Mt,2*Mt),n.setRenderTarget(t),n.render(s,ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<jo;i++){const s=Math.sqrt(Ji[i]*Ji[i]-Ji[i-1]*Ji[i-1]),a=Fa[(i-1)%Fa.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=new Je(ni[i],c),d=c.uniforms,u=Oa[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,m=s/p,g=isFinite(s)?1+Math.floor(3*m):Zi;g>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);const v=[];let f=0;for(let x=0;x<Zi;++x){const y=x/m,T=Math.exp(-y*y/2);v.push(T),x==0?f+=T:x<g&&(f+=2*T)}for(let x=0;x<v.length;x++)v[x]=v[x]/f;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=p,d.mipInt.value=8-n,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);const _=Oa[i];Qi(t,3*Math.max(0,Mt-2*_),(i===0?0:2*Mt)+2*_*(i>4?i-8+4:0),3*_,2*_),l.setRenderTarget(t),l.render(h,ns)}}function Eh(r){return r!==void 0&&r.type===Xt&&(r.encoding===Xe||r.encoding===hn||r.encoding===Cs)}function Ah(){const r=[],e=[],t=[];let n=8;for(let i=0;i<jo;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>4?a=Wo[i-8+4-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,m=2,g=1,v=new Float32Array(p*u*d),f=new Float32Array(m*u*d),_=new Float32Array(g*u*d);for(let y=0;y<d;y++){const T=y%3*2/3-1,E=y>2?0:-1,L=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];v.set(L,p*u*y),f.set(h,m*u*y);const I=[y,y,y,y,y,y];_.set(I,g*u*y)}const x=new Ee;x.setAttribute("position",new Be(v,p)),x.setAttribute("uv",new Be(f,m)),x.setAttribute("faceIndex",new Be(_,g)),r.push(x),n>4&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Ua(r){const e=new wt(3*Mt,3*Mt,r);return e.texture.mapping=yr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Qi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ha(){const r=new J(1,1);return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Vt[Xe]},outputEncoding:{value:Vt[Xe]}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Os()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Ga(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Vt[Xe]},outputEncoding:{value:Vt[Xe]}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Os()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function zs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Os(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Lh(r){let e=new WeakMap,t=null;function n(i){const s=i.target;s.removeEventListener("dispose",n);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const s=i.mapping,a=s===fs||s===gs,o=s===xr||s===hr;if(a||o){if(e.has(i))return e.get(i).texture;{const l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0;const d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d}(l)){const c=r.getRenderTarget();t===null&&(t=new Th(r));const h=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,h),r.setRenderTarget(c),i.addEventListener("dispose",n),h.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Rh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ch(r,e,t,n){const i={},s=new WeakMap;function a(l){const c=l.target;c.index!==null&&e.remove(c.index);for(const d in c.attributes)e.remove(c.attributes[d]);c.removeEventListener("dispose",a),delete i[c.id];const h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){const c=[],h=l.index,d=l.attributes.position;let u=0;if(h!==null){const g=h.array;u=h.version;for(let v=0,f=g.length;v<f;v+=3){const _=g[v+0],x=g[v+1],y=g[v+2];c.push(_,x,x,y,y,_)}}else{const g=d.array;u=d.version;for(let v=0,f=g.length/3-1;v<f;v+=3){const _=v+0,x=v+1,y=v+2;c.push(_,x,x,y,y,_)}}const p=new(Bo(c)>65535?Go:Ho)(c,1);p.version=u;const m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){const c=l.attributes;for(const d in c)e.update(c[d],34962);const h=l.morphAttributes;for(const d in h){const u=h[d];for(let p=0,m=u.length;p<m;p++)e.update(u[p],34962)}},getWireframeAttribute:function(l){const c=s.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Ph(r,e,t,n){const i=n.isWebGL2;let s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(i)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,c,a,l*o,h),t.update(c,s,h)}}function Ih(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}class Bs extends je{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}function Dh(r,e){return r[0]-e[0]}function Nh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Va(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function zh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new S,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position.length;let m=s.get(c);if(m===void 0||m.count!==p){m!==void 0&&m.texture.dispose();const f=c.morphAttributes.normal!==void 0,_=c.morphAttributes.position,x=c.morphAttributes.normal||[],y=f===!0?2:1;let T=c.attributes.position.count*y,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*E*4*p),I=new Bs(L,T,E,p);I.format=Qe,I.type=Gt;const H=4*y;for(let D=0;D<p;D++){const O=_[D],$=x[D],X=T*E*4*D;for(let F=0;F<O.count;F++){a.fromBufferAttribute(O,F),O.normalized===!0&&Va(a,O);const q=F*H;L[X+q+0]=a.x,L[X+q+1]=a.y,L[X+q+2]=a.z,L[X+q+3]=0,f===!0&&(a.fromBufferAttribute($,F),$.normalized===!0&&Va(a,$),L[X+q+4]=a.x,L[X+q+5]=a.y,L[X+q+6]=a.z,L[X+q+7]=0)}}m={count:p,texture:I,size:new J(T,E)},s.set(c,m)}let g=0;for(let f=0;f<u.length;f++)g+=u[f];const v=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const p=u===void 0?0:u.length;let m=n[c.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];n[c.id]=m}for(let x=0;x<p;x++){const y=m[x];y[0]=x,y[1]=u[x]}m.sort(Nh);for(let x=0;x<8;x++)x<p&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Dh);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const y=o[x],T=y[0],E=y[1];T!==Number.MAX_SAFE_INTEGER&&E?(g&&c.getAttribute("morphTarget"+x)!==g[T]&&c.setAttribute("morphTarget"+x,g[T]),v&&c.getAttribute("morphNormal"+x)!==v[T]&&c.setAttribute("morphNormal"+x,v[T]),i[x]=E,f+=E):(g&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),v&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Oh(r,e,t,n){let i=new WeakMap;function s(a){const o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=n.render.frame,l=a.geometry,c=e.get(a,l);return i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){i=new WeakMap}}}Bs.prototype.isDataTexture2DArray=!0;class qo extends je{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}qo.prototype.isDataTexture3D=!0;const Xo=new je,Bh=new Bs,Fh=new qo,Yo=new wr,ka=[],Wa=[],ja=new Float32Array(16),qa=new Float32Array(9),Xa=new Float32Array(4);function Zn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ka[i];if(s===void 0&&(s=new Float32Array(i),ka[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ke(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ye(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zo(r,e){let t=Wa[e];t===void 0&&(t=new Int32Array(e),Wa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Uh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;r.uniform2fv(this.addr,e),Ye(t,e)}}function Gh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;r.uniform3fv(this.addr,e),Ye(t,e)}}function Vh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;r.uniform4fv(this.addr,e),Ye(t,e)}}function kh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ye(t,e)}else{if(Ke(t,n))return;Xa.set(n),r.uniformMatrix2fv(this.addr,!1,Xa),Ye(t,n)}}function Wh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ye(t,e)}else{if(Ke(t,n))return;qa.set(n),r.uniformMatrix3fv(this.addr,!1,qa),Ye(t,n)}}function jh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ye(t,e)}else{if(Ke(t,n))return;ja.set(n),r.uniformMatrix4fv(this.addr,!1,ja),Ye(t,n)}}function qh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xh(r,e){const t=this.cache;Ke(t,e)||(r.uniform2iv(this.addr,e),Ye(t,e))}function Yh(r,e){const t=this.cache;Ke(t,e)||(r.uniform3iv(this.addr,e),Ye(t,e))}function Zh(r,e){const t=this.cache;Ke(t,e)||(r.uniform4iv(this.addr,e),Ye(t,e))}function Jh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qh(r,e){const t=this.cache;Ke(t,e)||(r.uniform2uiv(this.addr,e),Ye(t,e))}function Kh(r,e){const t=this.cache;Ke(t,e)||(r.uniform3uiv(this.addr,e),Ye(t,e))}function $h(r,e){const t=this.cache;Ke(t,e)||(r.uniform4uiv(this.addr,e),Ye(t,e))}function eu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Xo,i)}function tu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fh,i)}function nu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Yo,i)}function iu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bh,i)}function ru(r,e){r.uniform1fv(this.addr,e)}function su(r,e){const t=Zn(e,this.size,2);r.uniform2fv(this.addr,t)}function au(r,e){const t=Zn(e,this.size,3);r.uniform3fv(this.addr,t)}function ou(r,e){const t=Zn(e,this.size,4);r.uniform4fv(this.addr,t)}function lu(r,e){const t=Zn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cu(r,e){const t=Zn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hu(r,e){const t=Zn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uu(r,e){r.uniform1iv(this.addr,e)}function du(r,e){r.uniform2iv(this.addr,e)}function pu(r,e){r.uniform3iv(this.addr,e)}function mu(r,e){r.uniform4iv(this.addr,e)}function fu(r,e){r.uniform1uiv(this.addr,e)}function gu(r,e){r.uniform2uiv(this.addr,e)}function vu(r,e){r.uniform3uiv(this.addr,e)}function xu(r,e){r.uniform4uiv(this.addr,e)}function yu(r,e,t){const n=e.length,i=Zo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Xo,i[s])}function _u(r,e,t){const n=e.length,i=Zo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Yo,i[s])}function Mu(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return Uh;case 35664:return Hh;case 35665:return Gh;case 35666:return Vh;case 35674:return kh;case 35675:return Wh;case 35676:return jh;case 5124:case 35670:return qh;case 35667:case 35671:return Xh;case 35668:case 35672:return Yh;case 35669:case 35673:return Zh;case 5125:return Jh;case 36294:return Qh;case 36295:return Kh;case 36296:return $h;case 35678:case 36198:case 36298:case 36306:case 35682:return eu;case 35679:case 36299:case 36307:return tu;case 35680:case 36300:case 36308:case 36293:return nu;case 36289:case 36303:case 36311:case 36292:return iu}}(e.type)}function Jo(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(n){switch(n){case 5126:return ru;case 35664:return su;case 35665:return au;case 35666:return ou;case 35674:return lu;case 35675:return cu;case 35676:return hu;case 5124:case 35670:return uu;case 35667:case 35671:return du;case 35668:case 35672:return pu;case 35669:case 35673:return mu;case 5125:return fu;case 36294:return gu;case 36295:return vu;case 36296:return xu;case 35678:case 36198:case 36298:case 36306:case 35682:return yu;case 35680:case 36300:case 36308:case 36293:return _u}}(e.type)}function Qo(r){this.id=r,this.seq=[],this.map={}}Jo.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Ye(e,r)},Qo.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const rs=/(\w+)(\])?(\[|\.)?/g;function Ya(r,e){r.seq.push(e),r.map[e.id]=e}function bu(r,e,t){const n=r.name,i=n.length;for(rs.lastIndex=0;;){const s=rs.exec(n),a=rs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Ya(t,c===void 0?new Mu(o,r,e):new Jo(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Qo(o),Ya(t,h)),t=h}}}function kt(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n);bu(i,r.getUniformLocation(e,i.name),this)}}function Za(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}kt.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)},kt.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)},kt.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}},kt.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};let wu=0;function Ko(r){switch(r){case Xe:return["Linear","( value )"];case hn:return["sRGB","( value )"];case Ps:return["RGBE","( value )"];case Do:return["RGBM","( value, 7.0 )"];case No:return["RGBM","( value, 16.0 )"];case zo:return["RGBD","( value, 256.0 )"];case Cs:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case $c:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ja(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+function(s){const a=s.split(`
`);for(let o=0;o<a.length;o++)a[o]=o+1+": "+a[o];return a.join(`
`)}(r.getShaderSource(e))}function Tn(r,e){const t=Ko(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Su(r,e){const t=Ko(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tu(r,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ii(r){return r!==""}function Qa(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ka(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(r){return r.replace(Eu,Au)}function Au(r,e){const t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ws(t)}const Lu=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ru=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(r){return r.replace(Ru,$o).replace(Lu,Cu)}function Cu(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),$o(r,e,t,n)}function $o(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function eo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pu(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(I){let H="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===Co?H="SHADOWMAP_TYPE_PCF":I.shadowMapType===Il?H="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===ci&&(H="SHADOWMAP_TYPE_VSM"),H}(t),c=function(I){let H="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case xr:case hr:H="ENVMAP_TYPE_CUBE";break;case yr:case vs:H="ENVMAP_TYPE_CUBE_UV"}return H}(t),h=function(I){let H="ENVMAP_MODE_REFLECTION";if(I.envMap)switch(I.envMapMode){case hr:case vs:H="ENVMAP_MODE_REFRACTION"}return H}(t),d=function(I){let H="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case vr:H="ENVMAP_BLENDING_MULTIPLY";break;case Kl:H="ENVMAP_BLENDING_MIX";break;case $l:H="ENVMAP_BLENDING_ADD"}return H}(t),u=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":function(I){return[I.extensionDerivatives||I.envMapCubeUV||I.bumpMap||I.tangentSpaceNormalMap||I.clearcoatNormalMap||I.flatShading||I.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(I.extensionFragDepth||I.logarithmicDepthBuffer)&&I.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",I.extensionDrawBuffers&&I.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(I.extensionShaderTextureLOD||I.envMap||I.transmission)&&I.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}(t),m=function(I){const H=[];for(const D in I){const O=I[D];O!==!1&&H.push("#define "+D+" "+O)}return H.join(`
`)}(s),g=i.createProgram();let v,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[m].filter(ii).join(`
`),v.length>0&&(v+=`
`),f=[p,m].filter(ii).join(`
`),f.length>0&&(f+=`
`)):(v=[eo(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),f=[p,eo(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?ye.tonemapping_pars_fragment:"",t.toneMapping!==ln?Tu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Un?"#define OPAQUE":"",ye.encodings_pars_fragment,t.map?Tn("mapTexelToLinear",t.mapEncoding):"",t.matcap?Tn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Tn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Tn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Tn("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Tn("lightMapTexelToLinear",t.lightMapEncoding):"",Su("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),a=ws(a),a=Qa(a,t),a=Ka(a,t),o=ws(o),o=Qa(o,t),o=Ka(o,t),a=$a(a),o=$a(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Sa?"":"out highp vec4 pc_fragColor;",t.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+f+o,y=Za(i,35633,_+v+a),T=Za(i,35632,x);if(i.attachShader(g,y),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),H=i.getShaderInfoLog(y).trim(),D=i.getShaderInfoLog(T).trim();let O=!0,$=!0;if(i.getProgramParameter(g,35714)===!1){O=!1;const X=Ja(i,y,"vertex"),F=Ja(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+I+`
`+X+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):H!==""&&D!==""||($=!1);$&&(this.diagnostics={runnable:O,programLog:I,vertexShader:{log:H,prefix:v},fragmentShader:{log:D,prefix:f}})}let E,L;return i.deleteShader(y),i.deleteShader(T),this.getUniforms=function(){return E===void 0&&(E=new kt(i,g)),E},this.getAttributes=function(){return L===void 0&&(L=function(I,H){const D={},O=I.getProgramParameter(H,35721);for(let $=0;$<O;$++){const X=I.getActiveAttrib(H,$),F=X.name;let q=1;X.type===35674&&(q=2),X.type===35675&&(q=3),X.type===35676&&(q=4),D[F]={type:X.type,location:I.getAttribLocation(H,F),locationSize:q}}return D}(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=wu++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}function Iu(r,e,t,n,i,s,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,d=i.maxVertexUniforms,u=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function v(f){let _;return f&&f.isTexture?_=f.encoding:f&&f.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),_=f.texture.encoding):_=Xe,l&&f&&f.isTexture&&f.format===Qe&&f.type===Xt&&f.encoding===hn&&(_=Xe),_}return{getParameters:function(f,_,x,y,T){const E=y.fog,L=f.isMeshStandardMaterial?y.environment:null,I=(f.isMeshStandardMaterial?t:e).get(f.envMap||L),H=m[f.type],D=T.isSkinnedMesh?function(ee){const ne=ee.skeleton.bones;if(h)return 1024;{const se=d,le=Math.floor((se-20)/4),ce=Math.min(le,ne.length);return ce<ne.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ne.length+" bones. This GPU supports "+ce+"."),0):ce}}(T):0;let O,$;if(f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead.")),H){const ee=bt[H];O=ee.vertexShader,$=ee.fragmentShader}else O=f.vertexShader,$=f.fragmentShader;const X=r.getRenderTarget(),F=f.alphaTest>0,q=f.clearcoat>0;return{isWebGL2:l,shaderID:H,shaderName:f.type,vertexShader:O,fragmentShader:$,defines:f.defines,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,instancing:T.isInstancedMesh===!0,instancingColor:T.isInstancedMesh===!0&&T.instanceColor!==null,supportsVertexTextures:u,outputEncoding:X!==null?v(X.texture):r.outputEncoding,map:!!f.map,mapEncoding:v(f.map),matcap:!!f.matcap,matcapEncoding:v(f.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:v(I),envMapCubeUV:!!I&&(I.mapping===yr||I.mapping===vs),lightMap:!!f.lightMap,lightMapEncoding:v(f.lightMap),aoMap:!!f.aoMap,emissiveMap:!!f.emissiveMap,emissiveMapEncoding:v(f.emissiveMap),bumpMap:!!f.bumpMap,normalMap:!!f.normalMap,objectSpaceNormalMap:f.normalMapType===th,tangentSpaceNormalMap:f.normalMapType===qn,clearcoat:q,clearcoatMap:q&&!!f.clearcoatMap,clearcoatRoughnessMap:q&&!!f.clearcoatRoughnessMap,clearcoatNormalMap:q&&!!f.clearcoatNormalMap,displacementMap:!!f.displacementMap,roughnessMap:!!f.roughnessMap,metalnessMap:!!f.metalnessMap,specularMap:!!f.specularMap,specularIntensityMap:!!f.specularIntensityMap,specularTintMap:!!f.specularTintMap,specularTintMapEncoding:v(f.specularTintMap),alphaMap:!!f.alphaMap,alphaTest:F,gradientMap:!!f.gradientMap,sheen:f.sheen>0,transmission:f.transmission>0,transmissionMap:!!f.transmissionMap,thicknessMap:!!f.thicknessMap,combine:f.combine,vertexTangents:!!f.normalMap&&!!T.geometry&&!!T.geometry.attributes.tangent,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.geometry&&!!T.geometry.attributes.color&&T.geometry.attributes.color.itemSize===4,vertexUvs:!!(f.map||f.bumpMap||f.normalMap||f.specularMap||f.alphaMap||f.emissiveMap||f.roughnessMap||f.metalnessMap||f.clearcoatMap||f.clearcoatRoughnessMap||f.clearcoatNormalMap||f.displacementMap||f.transmissionMap||f.thicknessMap||f.specularIntensityMap||f.specularTintMap),uvsVertexOnly:!(f.map||f.bumpMap||f.normalMap||f.specularMap||f.alphaMap||f.emissiveMap||f.roughnessMap||f.metalnessMap||f.clearcoatNormalMap||f.transmission>0||f.transmissionMap||f.thicknessMap||f.specularIntensityMap||f.specularTintMap||!f.displacementMap),fog:!!E,useFog:f.fog,fogExp2:E&&E.isFogExp2,flatShading:!!f.flatShading,sizeAttenuation:f.sizeAttenuation,logarithmicDepthBuffer:c,skinning:T.isSkinnedMesh===!0&&D>0,maxBones:D,useVertexTexture:h,morphTargets:!!T.geometry&&!!T.geometry.morphAttributes.position,morphNormals:!!T.geometry&&!!T.geometry.morphAttributes.normal,morphTargetsCount:T.geometry&&T.geometry.morphAttributes.position?T.geometry.morphAttributes.position.length:0,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:f.format,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:f.toneMapped?r.toneMapping:ln,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===kn,flipSided:f.side===Oe,depthPacking:f.depthPacking!==void 0&&f.depthPacking,index0AttributeName:f.index0AttributeName,extensionDerivatives:f.extensions&&f.extensions.derivatives,extensionFragDepth:f.extensions&&f.extensions.fragDepth,extensionDrawBuffers:f.extensions&&f.extensions.drawBuffers,extensionShaderTextureLOD:f.extensions&&f.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){const _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.fragmentShader),_.push(f.vertexShader)),f.defines!==void 0)for(const x in f.defines)_.push(x),_.push(f.defines[x]);if(f.isRawShaderMaterial===!1){for(let x=0;x<g.length;x++)_.push(f[g[x]]);_.push(r.outputEncoding),_.push(r.gammaFactor)}return _.push(f.customProgramCacheKey),_.join()},getUniforms:function(f){const _=m[f.type];let x;if(_){const y=bt[_];x=fh.clone(y.uniforms)}else x=f.uniforms;return x},acquireProgram:function(f,_){let x;for(let y=0,T=o.length;y<T;y++){const E=o[y];if(E.cacheKey===_){x=E,++x.usedTimes;break}}return x===void 0&&(x=new Pu(r,_,f,s),o.push(x)),x},releaseProgram:function(f){if(--f.usedTimes==0){const _=o.indexOf(f);o[_]=o[o.length-1],o.pop(),f.destroy()}},programs:o}}function Du(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Nu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function to(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function no(r){const e=[];let t=0;const n=[],i=[],s=[],a={id:-1};function o(l,c,h,d,u,p){let m=e[t];const g=r.get(h);return m===void 0?(m={id:l.id,object:l,geometry:c,material:h,program:g.program||a,groupOrder:d,renderOrder:l.renderOrder,z:u,group:p},e[t]=m):(m.id=l.id,m.object=l,m.geometry=c,m.material=h,m.program=g.program||a,m.groupOrder=d,m.renderOrder=l.renderOrder,m.z=u,m.group=p),t++,m}return{opaque:n,transmissive:i,transparent:s,init:function(){t=0,n.length=0,i.length=0,s.length=0},push:function(l,c,h,d,u,p){const m=o(l,c,h,d,u,p);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):n.push(m)},unshift:function(l,c,h,d,u,p){const m=o(l,c,h,d,u,p);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):n.unshift(m)},finish:function(){for(let l=t,c=e.length;l<c;l++){const h=e[l];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.program=null,h.group=null}},sort:function(l,c){n.length>1&&n.sort(l||Nu),i.length>1&&i.sort(c||to),s.length>1&&s.sort(c||to)}}}function zu(r){let e=new WeakMap;return{get:function(t,n){let i;return e.has(t)===!1?(i=new no(r),e.set(t,[i])):n>=e.get(t).length?(i=new no(r),e.get(t).push(i)):i=e.get(t)[n],i},dispose:function(){e=new WeakMap}}}function Ou(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new he};break;case"SpotLight":t={position:new S,direction:new S,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new S,halfWidth:new S,halfHeight:new S}}return r[e.id]=t,t}}}let Bu=0;function Fu(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Uu(r,e){const t=new Ou,n=function(){const l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)i.probe.push(new S);const s=new S,a=new de,o=new de;return{setup:function(l,c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,m=0,g=0,v=0,f=0,_=0,x=0,y=0;l.sort(Fu);const T=c!==!0?Math.PI:1;for(let L=0,I=l.length;L<I;L++){const H=l[L],D=H.color,O=H.intensity,$=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=D.r*O*T,d+=D.g*O*T,u+=D.b*O*T;else if(H.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(H.sh.coefficients[F],O);else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const q=H.shadow,ee=n.get(H);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=H.shadow.matrix,_++}i.directional[p]=F,p++}else if(H.isSpotLight){const F=t.get(H);if(F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(D).multiplyScalar(O*T),F.distance=$,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,H.castShadow){const q=H.shadow,ee=n.get(H);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,i.spotShadow[g]=ee,i.spotShadowMap[g]=X,i.spotShadowMatrix[g]=H.shadow.matrix,y++}i.spot[g]=F,g++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(D).multiplyScalar(O),F.halfWidth.set(.5*H.width,0,0),F.halfHeight.set(0,.5*H.height,0),i.rectArea[v]=F,v++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity*T),F.distance=H.distance,F.decay=H.decay,H.castShadow){const q=H.shadow,ee=n.get(H);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,ee.shadowCameraNear=q.camera.near,ee.shadowCameraFar=q.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=H.shadow.matrix,x++}i.point[m]=F,m++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(O*T),F.groundColor.copy(H.groundColor).multiplyScalar(O*T),i.hemi[f]=F,f++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const E=i.hash;E.directionalLength===p&&E.pointLength===m&&E.spotLength===g&&E.rectAreaLength===v&&E.hemiLength===f&&E.numDirectionalShadows===_&&E.numPointShadows===x&&E.numSpotShadows===y||(i.directional.length=p,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=y,E.directionalLength=p,E.pointLength=m,E.spotLength=g,E.rectAreaLength=v,E.hemiLength=f,E.numDirectionalShadows=_,E.numPointShadows=x,E.numSpotShadows=y,i.version=Bu++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,m=0;const g=c.matrixWorldInverse;for(let v=0,f=l.length;v<f;v++){const _=l[v];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(_.isSpotLight){const x=i.spot[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(_.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(.5*_.width,0,0),x.halfHeight.set(0,.5*_.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),x.direction.normalize(),m++}}},state:i}}function io(r,e){const t=new Uu(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Hu(r,e){let t=new WeakMap;return{get:function(n,i=0){let s;return t.has(n)===!1?(s=new io(r,e),t.set(n,[s])):i>=t.get(n).length?(s=new io(r,e),t.get(n).push(s)):s=t.get(n)[i],s},dispose:function(){t=new WeakMap}}}class el extends Ze{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}el.prototype.isMeshDepthMaterial=!0;class tl extends Ze{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}tl.prototype.isMeshDistanceMaterial=!0;const Gu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
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
}`;function nl(r,e,t){let n=new Sr;const i=new J,s=new J,a=new Le,o=new el({depthPacking:eh}),l=new tl,c={},h=t.maxTextureSize,d={0:Oe,1:yi,2:kn},u=new cn({uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4},samples:{value:8}},vertexShader:Gu,fragmentShader:Vu}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ee;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Je(m,u),v=this;function f(y,T){const E=e.update(g);u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,u.uniforms.samples.value=y.blurSamples,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(T,null,E,u,g,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,p.uniforms.samples.value=y.blurSamples,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(T,null,E,p,g,null)}function _(y,T,E,L,I,H,D){let O=null;const $=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(O=$!==void 0?$:L.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const X=O.uuid,F=E.uuid;let q=c[X];q===void 0&&(q={},c[X]=q);let ee=q[F];ee===void 0&&(ee=O.clone(),q[F]=ee),O=ee}return O.visible=E.visible,O.wireframe=E.wireframe,O.side=D===ci?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:d[E.side],O.alphaMap=E.alphaMap,O.alphaTest=E.alphaTest,O.clipShadows=E.clipShadows,O.clippingPlanes=E.clippingPlanes,O.clipIntersection=E.clipIntersection,O.displacementMap=E.displacementMap,O.displacementScale=E.displacementScale,O.displacementBias=E.displacementBias,O.wireframeLinewidth=E.wireframeLinewidth,O.linewidth=E.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(L.matrixWorld),O.nearDistance=I,O.farDistance=H),O}function x(y,T,E,L,I){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===ci)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const D=e.update(y),O=y.material;if(Array.isArray(O)){const $=D.groups;for(let X=0,F=$.length;X<F;X++){const q=$[X],ee=O[q.materialIndex];if(ee&&ee.visible){const ne=_(y,0,ee,L,E.near,E.far,I);r.renderBufferDirect(E,null,D,ne,y,q)}}}else if(O.visible){const $=_(y,0,O,L,E.near,E.far,I);r.renderBufferDirect(E,null,D,$,y,null)}}const H=y.children;for(let D=0,O=H.length;D<O;D++)x(H[D],T,E,L,I)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co,this.render=function(y,T,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const L=r.getRenderTarget(),I=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),D=r.state;D.setBlending(jt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let O=0,$=y.length;O<$;O++){const X=y[O],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const q=F.getFrameExtents();if(i.multiply(q),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===ci){const ne={minFilter:ht,magFilter:ht,format:Qe};F.map=new wt(i.x,i.y,ne),F.map.texture.name=X.name+".shadowMap",F.mapPass=new wt(i.x,i.y,ne),F.camera.updateProjectionMatrix()}if(F.map===null){const ne={minFilter:Ve,magFilter:Ve,format:Qe};F.map=new wt(i.x,i.y,ne),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const ee=F.getViewportCount();for(let ne=0;ne<ee;ne++){const se=F.getViewport(ne);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),D.viewport(a),F.updateMatrices(X,ne),n=F.getFrustum(),x(T,E,F.camera,X,this.type)}F.isPointLightShadow||this.type!==ci||f(F,E),F.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(L,I,H)}}function ku(r,e,t){const n=t.isWebGL2,i=new function(){let M=!1;const C=new Le;let k=null;const W=new Le(0,0,0,0);return{setMask:function(V){k===V||M||(r.colorMask(V,V,V,V),k=V)},setLocked:function(V){M=V},setClear:function(V,ie,oe,re,me){me===!0&&(V*=re,ie*=re,oe*=re),C.set(V,ie,oe,re),W.equals(C)===!1&&(r.clearColor(V,ie,oe,re),W.copy(C))},reset:function(){M=!1,k=null,W.set(-1,0,0,0)}}},s=new function(){let M=!1,C=null,k=null,W=null;return{setTest:function(V){V?Y(2929):w(2929)},setMask:function(V){C===V||M||(r.depthMask(V),C=V)},setFunc:function(V){if(k!==V){if(V)switch(V){case jl:r.depthFunc(512);break;case ql:r.depthFunc(519);break;case Xl:r.depthFunc(513);break;case ms:r.depthFunc(515);break;case Yl:r.depthFunc(514);break;case Zl:r.depthFunc(518);break;case Jl:r.depthFunc(516);break;case Ql:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);k=V}},setLocked:function(V){M=V},setClear:function(V){W!==V&&(r.clearDepth(V),W=V)},reset:function(){M=!1,C=null,k=null,W=null}}},a=new function(){let M=!1,C=null,k=null,W=null,V=null,ie=null,oe=null,re=null,me=null;return{setTest:function(pe){M||(pe?Y(2960):w(2960))},setMask:function(pe){C===pe||M||(r.stencilMask(pe),C=pe)},setFunc:function(pe,Fe,we){k===pe&&W===Fe&&V===we||(r.stencilFunc(pe,Fe,we),k=pe,W=Fe,V=we)},setOp:function(pe,Fe,we){ie===pe&&oe===Fe&&re===we||(r.stencilOp(pe,Fe,we),ie=pe,oe=Fe,re=we)},setLocked:function(pe){M=pe},setClear:function(pe){me!==pe&&(r.clearStencil(pe),me=pe)},reset:function(){M=!1,C=null,k=null,W=null,V=null,ie=null,oe=null,re=null,me=null}}};let o={},l=null,c={},h=null,d=!1,u=null,p=null,m=null,g=null,v=null,f=null,_=null,x=!1,y=null,T=null,E=null,L=null,I=null;const H=r.getParameter(35661);let D=!1,O=0;const $=r.getParameter(7938);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),D=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),D=O>=2);let X=null,F={};const q=r.getParameter(3088),ee=r.getParameter(2978),ne=new Le().fromArray(q),se=new Le().fromArray(ee);function le(M,C,k){const W=new Uint8Array(4),V=r.createTexture();r.bindTexture(M,V),r.texParameteri(M,10241,9728),r.texParameteri(M,10240,9728);for(let ie=0;ie<k;ie++)r.texImage2D(C+ie,0,6408,1,1,0,6408,5121,W);return V}const ce={};function Y(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function w(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}ce[3553]=le(3553,3553,1),ce[34067]=le(34067,34069,6),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(2929),s.setFunc(ms),R(!1),Q(aa),Y(2884),U(jt);const A={[Cn]:32774,[Nl]:32778,[zl]:32779};if(n)A[ha]=32775,A[ua]=32776;else{const M=e.get("EXT_blend_minmax");M!==null&&(A[ha]=M.MIN_EXT,A[ua]=M.MAX_EXT)}const G={[Ol]:0,[Bl]:1,[Fl]:768,[Po]:770,[Wl]:776,[Vl]:774,[Hl]:772,[Ul]:769,[Io]:771,[kl]:775,[Gl]:773};function U(M,C,k,W,V,ie,oe,re){if(M!==jt){if(d===!1&&(Y(3042),d=!0),M===Dl)V=V||C,ie=ie||k,oe=oe||W,C===p&&V===v||(r.blendEquationSeparate(A[C],A[V]),p=C,v=V),k===m&&W===g&&ie===f&&oe===_||(r.blendFuncSeparate(G[k],G[W],G[ie],G[oe]),m=k,g=W,f=ie,_=oe),u=M,x=null;else if(M!==u||re!==x){if(p===Cn&&v===Cn||(r.blendEquation(32774),p=Cn,v=Cn),re)switch(M){case ui:r.blendFuncSeparate(1,771,1,771);break;case oa:r.blendFunc(1,1);break;case la:r.blendFuncSeparate(0,0,769,771);break;case ca:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case ui:r.blendFuncSeparate(770,771,1,771);break;case oa:r.blendFunc(770,1);break;case la:r.blendFunc(0,769);break;case ca:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}m=null,g=null,f=null,_=null,u=M,x=re}}else d===!0&&(w(3042),d=!1)}function R(M){y!==M&&(M?r.frontFace(2304):r.frontFace(2305),y=M)}function Q(M){M!==Cl?(Y(2884),M!==T&&(M===aa?r.cullFace(1029):M===Pl?r.cullFace(1028):r.cullFace(1032))):w(2884),T=M}function K(M,C,k){M?(Y(32823),L===C&&I===k||(r.polygonOffset(C,k),L=C,I=k)):w(32823)}function P(M){M===void 0&&(M=33984+H-1),X!==M&&(r.activeTexture(M),X=M)}return{buffers:{color:i,depth:s,stencil:a},enable:Y,disable:w,bindFramebuffer:function(M,C){return C===null&&l!==null&&(C=l),c[M]!==C&&(r.bindFramebuffer(M,C),c[M]=C,n&&(M===36009&&(c[36160]=C),M===36160&&(c[36009]=C)),!0)},bindXRFramebuffer:function(M){M!==l&&(r.bindFramebuffer(36160,M),l=M)},useProgram:function(M){return h!==M&&(r.useProgram(M),h=M,!0)},setBlending:U,setMaterial:function(M,C){M.side===kn?w(2884):Y(2884);let k=M.side===Oe;C&&(k=!k),R(k),M.blending===ui&&M.transparent===!1?U(jt):U(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),i.setMask(M.colorWrite);const W=M.stencilWrite;a.setTest(W),W&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),K(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Y(32926):w(32926)},setFlipSided:R,setCullFace:Q,setLineWidth:function(M){M!==E&&(D&&r.lineWidth(M),E=M)},setPolygonOffset:K,setScissorTest:function(M){M?Y(3089):w(3089)},activeTexture:P,bindTexture:function(M,C){X===null&&P();let k=F[X];k===void 0&&(k={type:void 0,texture:void 0},F[X]=k),k.type===M&&k.texture===C||(r.bindTexture(M,C||ce[M]),k.type=M,k.texture=C)},unbindTexture:function(){const M=F[X];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ne.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),ne.copy(M))},viewport:function(M){se.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),se.copy(M))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},X=null,F={},l=null,c={},h=null,d=!1,u=null,p=null,m=null,g=null,v=null,f=null,_=null,x=!1,y=null,T=null,E=null,L=null,I=null,ne.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Wu(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=new WeakMap;let p,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,A){return m?new OffscreenCanvas(w,A):Mr("canvas")}function v(w,A,G,U){let R=1;if((w.width>U||w.height>U)&&(R=U/Math.max(w.width,w.height)),R<1||A===!0){if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const Q=A?Oo:Math.floor,K=Q(R*w.width),P=Q(R*w.height);p===void 0&&(p=g(K,P));const M=G?g(K,P):p;return M.width=K,M.height=P,M.getContext("2d").drawImage(w,0,0,K,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+K+"x"+P+")."),M}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function f(w){return Ms(w.width)&&Ms(w.height)}function _(w,A){return w.generateMipmaps&&A&&w.minFilter!==Ve&&w.minFilter!==ht}function x(w,A,G,U,R=1){r.generateMipmap(w),n.get(A).__maxMipLevel=Math.log2(Math.max(G,U,R))}function y(w,A,G,U){if(o===!1)return A;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let R=A;return A===6403&&(G===5126&&(R=33326),G===5131&&(R=33325),G===5121&&(R=33321)),A===6407&&(G===5126&&(R=34837),G===5131&&(R=34843),G===5121&&(R=32849)),A===6408&&(G===5126&&(R=34836),G===5131&&(R=34842),G===5121&&(R=U===hn?35907:32856)),R!==33325&&R!==33326&&R!==34842&&R!==34836||e.get("EXT_color_buffer_float"),R}function T(w){return w===Ve||w===da||w===pa?9728:9729}function E(w){const A=w.target;A.removeEventListener("dispose",E),function(G){const U=n.get(G);U.__webglInit!==void 0&&(r.deleteTexture(U.__webglTexture),n.remove(G))}(A),A.isVideoTexture&&u.delete(A),a.memory.textures--}function L(w){const A=w.target;A.removeEventListener("dispose",L),function(G){const U=G.texture,R=n.get(G),Q=n.get(U);if(!!G){if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)r.deleteFramebuffer(R.__webglFramebuffer[K]),R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[K]);else r.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer&&r.deleteRenderbuffer(R.__webglColorRenderbuffer),R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer);if(G.isWebGLMultipleRenderTargets)for(let K=0,P=U.length;K<P;K++){const M=n.get(U[K]);M.__webglTexture&&(r.deleteTexture(M.__webglTexture),a.memory.textures--),n.remove(U[K])}n.remove(U),n.remove(G)}}(A)}let I=0;function H(w,A){const G=n.get(w);if(w.isVideoTexture&&function(U){const R=a.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}(w),w.version>0&&G.__version!==w.version){const U=w.image;if(U===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(U.complete!==!1)return void q(G,w,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+A),t.bindTexture(3553,G.__webglTexture)}function D(w,A){const G=n.get(w);w.version>0&&G.__version!==w.version?function(U,R,Q){if(R.image.length!==6)return;F(U,R),t.activeTexture(33984+Q),t.bindTexture(34067,U.__webglTexture),r.pixelStorei(37440,R.flipY),r.pixelStorei(37441,R.premultiplyAlpha),r.pixelStorei(3317,R.unpackAlignment),r.pixelStorei(37443,0);const K=R&&(R.isCompressedTexture||R.image[0].isCompressedTexture),P=R.image[0]&&R.image[0].isDataTexture,M=[];for(let re=0;re<6;re++)M[re]=K||P?P?R.image[re].image:R.image[re]:v(R.image[re],!1,!0,c);const C=M[0],k=f(C)||o,W=s.convert(R.format),V=s.convert(R.type),ie=y(R.internalFormat,W,V,R.encoding);let oe;if(X(34067,R,k),K){for(let re=0;re<6;re++){oe=M[re].mipmaps;for(let me=0;me<oe.length;me++){const pe=oe[me];R.format!==Qe&&R.format!==Un?W!==null?t.compressedTexImage2D(34069+re,me,ie,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+re,me,ie,pe.width,pe.height,0,W,V,pe.data)}}U.__maxMipLevel=oe.length-1}else{oe=R.mipmaps;for(let re=0;re<6;re++)if(P){t.texImage2D(34069+re,0,ie,M[re].width,M[re].height,0,W,V,M[re].data);for(let me=0;me<oe.length;me++){const pe=oe[me].image[re].image;t.texImage2D(34069+re,me+1,ie,pe.width,pe.height,0,W,V,pe.data)}}else{t.texImage2D(34069+re,0,ie,W,V,M[re]);for(let me=0;me<oe.length;me++){const pe=oe[me];t.texImage2D(34069+re,me+1,ie,W,V,pe.image[re])}}U.__maxMipLevel=oe.length}_(R,k)&&x(34067,R,C.width,C.height),U.__version=R.version,R.onUpdate&&R.onUpdate(R)}(G,w,A):(t.activeTexture(33984+A),t.bindTexture(34067,G.__webglTexture))}const O={[xs]:10497,[ot]:33071,[ys]:33648},$={[Ve]:9728,[da]:9984,[pa]:9986,[ht]:9729,[sc]:9985,[_r]:9987};function X(w,A,G){if(G?(r.texParameteri(w,10242,O[A.wrapS]),r.texParameteri(w,10243,O[A.wrapT]),w!==32879&&w!==35866||r.texParameteri(w,32882,O[A.wrapR]),r.texParameteri(w,10240,$[A.magFilter]),r.texParameteri(w,10241,$[A.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),w!==32879&&w!==35866||r.texParameteri(w,32882,33071),A.wrapS===ot&&A.wrapT===ot||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,T(A.magFilter)),r.texParameteri(w,10241,T(A.minFilter)),A.minFilter!==Ve&&A.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(A.type===Gt&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Fn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function F(w,A){w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",E),w.__webglTexture=r.createTexture(),a.memory.textures++)}function q(w,A,G){let U=3553;A.isDataTexture2DArray&&(U=35866),A.isDataTexture3D&&(U=32879),F(w,A),t.activeTexture(33984+G),t.bindTexture(U,w.__webglTexture),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);const R=function(V){return!o&&(V.wrapS!==ot||V.wrapT!==ot||V.minFilter!==Ve&&V.minFilter!==ht)}(A)&&f(A.image)===!1,Q=v(A.image,R,!1,h),K=f(Q)||o,P=s.convert(A.format);let M,C=s.convert(A.type),k=y(A.internalFormat,P,C,A.encoding);X(U,A,K);const W=A.mipmaps;if(A.isDepthTexture)k=6402,o?k=A.type===Gt?36012:A.type===cr?33190:A.type===di?35056:33189:A.type===Gt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Hn&&k===6402&&A.type!==ur&&A.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ur,C=s.convert(A.type)),A.format===_i&&k===6402&&(k=34041,A.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=di,C=s.convert(A.type))),t.texImage2D(3553,0,k,Q.width,Q.height,0,P,C,null);else if(A.isDataTexture)if(W.length>0&&K){for(let V=0,ie=W.length;V<ie;V++)M=W[V],t.texImage2D(3553,V,k,M.width,M.height,0,P,C,M.data);A.generateMipmaps=!1,w.__maxMipLevel=W.length-1}else t.texImage2D(3553,0,k,Q.width,Q.height,0,P,C,Q.data),w.__maxMipLevel=0;else if(A.isCompressedTexture){for(let V=0,ie=W.length;V<ie;V++)M=W[V],A.format!==Qe&&A.format!==Un?P!==null?t.compressedTexImage2D(3553,V,k,M.width,M.height,0,M.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,V,k,M.width,M.height,0,P,C,M.data);w.__maxMipLevel=W.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,k,Q.width,Q.height,Q.depth,0,P,C,Q.data),w.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,k,Q.width,Q.height,Q.depth,0,P,C,Q.data),w.__maxMipLevel=0;else if(W.length>0&&K){for(let V=0,ie=W.length;V<ie;V++)M=W[V],t.texImage2D(3553,V,k,P,C,M);A.generateMipmaps=!1,w.__maxMipLevel=W.length-1}else t.texImage2D(3553,0,k,P,C,Q),w.__maxMipLevel=0;_(A,K)&&x(U,A,Q.width,Q.height),w.__version=A.version,A.onUpdate&&A.onUpdate(A)}function ee(w,A,G,U,R){const Q=s.convert(G.format),K=s.convert(G.type),P=y(G.internalFormat,Q,K,G.encoding);R===32879||R===35866?t.texImage3D(R,0,P,A.width,A.height,A.depth,0,Q,K,null):t.texImage2D(R,0,P,A.width,A.height,0,Q,K,null),t.bindFramebuffer(36160,w),r.framebufferTexture2D(36160,U,R,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ne(w,A,G){if(r.bindRenderbuffer(36161,w),A.depthBuffer&&!A.stencilBuffer){let U=33189;if(G){const R=A.depthTexture;R&&R.isDepthTexture&&(R.type===Gt?U=36012:R.type===cr&&(U=33190));const Q=le(A);r.renderbufferStorageMultisample(36161,Q,U,A.width,A.height)}else r.renderbufferStorage(36161,U,A.width,A.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(A.depthBuffer&&A.stencilBuffer){if(G){const U=le(A);r.renderbufferStorageMultisample(36161,U,35056,A.width,A.height)}else r.renderbufferStorage(36161,34041,A.width,A.height);r.framebufferRenderbuffer(36160,33306,36161,w)}else{const U=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,R=s.convert(U.format),Q=s.convert(U.type),K=y(U.internalFormat,R,Q,U.encoding);if(G){const P=le(A);r.renderbufferStorageMultisample(36161,P,K,A.width,A.height)}else r.renderbufferStorage(36161,K,A.width,A.height)}r.bindRenderbuffer(36161,null)}function se(w){const A=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(G)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,U),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const Q=n.get(R.depthTexture).__webglTexture;if(R.depthTexture.format===Hn)r.framebufferTexture2D(36160,36096,3553,Q,0);else{if(R.depthTexture.format!==_i)throw new Error("Unknown depthTexture format");r.framebufferTexture2D(36160,33306,3553,Q,0)}})(A.__webglFramebuffer,w)}else if(G){A.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(36160,A.__webglFramebuffer[U]),A.__webglDepthbuffer[U]=r.createRenderbuffer(),ne(A.__webglDepthbuffer[U],w,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),ne(A.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function le(w){return o&&w.isWebGLMultisampleRenderTarget?Math.min(d,w.samples):0}let ce=!1,Y=!1;this.allocateTextureUnit=function(){const w=I;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),I+=1,w},this.resetTextureUnits=function(){I=0},this.setTexture2D=H,this.setTexture2DArray=function(w,A){const G=n.get(w);w.version>0&&G.__version!==w.version?q(G,w,A):(t.activeTexture(33984+A),t.bindTexture(35866,G.__webglTexture))},this.setTexture3D=function(w,A){const G=n.get(w);w.version>0&&G.__version!==w.version?q(G,w,A):(t.activeTexture(33984+A),t.bindTexture(32879,G.__webglTexture))},this.setTextureCube=D,this.setupRenderTarget=function(w){const A=w.texture,G=n.get(w),U=n.get(A);w.addEventListener("dispose",L),w.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture=r.createTexture(),U.__version=A.version,a.memory.textures++);const R=w.isWebGLCubeRenderTarget===!0,Q=w.isWebGLMultipleRenderTargets===!0,K=w.isWebGLMultisampleRenderTarget===!0,P=A.isDataTexture3D||A.isDataTexture2DArray,M=f(w)||o;if(!o||A.format!==Un||A.type!==Gt&&A.type!==Fn||(A.format=Qe,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),R){G.__webglFramebuffer=[];for(let C=0;C<6;C++)G.__webglFramebuffer[C]=r.createFramebuffer()}else if(G.__webglFramebuffer=r.createFramebuffer(),Q)if(i.drawBuffers){const C=w.texture;for(let k=0,W=C.length;k<W;k++){const V=n.get(C[k]);V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(K)if(o){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer);const C=s.convert(A.format),k=s.convert(A.type),W=y(A.internalFormat,C,k,A.encoding),V=le(w);r.renderbufferStorageMultisample(36161,V,W,w.width,w.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(R){t.bindTexture(34067,U.__webglTexture),X(34067,A,M);for(let C=0;C<6;C++)ee(G.__webglFramebuffer[C],w,A,36064,34069+C);_(A,M)&&x(34067,A,w.width,w.height),t.unbindTexture()}else if(Q){const C=w.texture;for(let k=0,W=C.length;k<W;k++){const V=C[k],ie=n.get(V);t.bindTexture(3553,ie.__webglTexture),X(3553,V,M),ee(G.__webglFramebuffer,w,V,36064+k,3553),_(V,M)&&x(3553,V,w.width,w.height)}t.unbindTexture()}else{let C=3553;P&&(o?C=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(C,U.__webglTexture),X(C,A,M),ee(G.__webglFramebuffer,w,A,36064,C),_(A,M)&&x(C,A,w.width,w.height,w.depth),t.unbindTexture()}w.depthBuffer&&se(w)},this.updateRenderTargetMipmap=function(w){const A=f(w)||o,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let U=0,R=G.length;U<R;U++){const Q=G[U];if(_(Q,A)){const K=w.isWebGLCubeRenderTarget?34067:3553,P=n.get(Q).__webglTexture;t.bindTexture(K,P),x(K,Q,w.width,w.height),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.isWebGLMultisampleRenderTarget)if(o){const A=w.width,G=w.height;let U=16384;w.depthBuffer&&(U|=256),w.stencilBuffer&&(U|=1024);const R=n.get(w);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer),r.blitFramebuffer(0,0,A,G,0,0,A,G,U,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(w,A){w&&w.isWebGLRenderTarget&&(ce===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ce=!0),w=w.texture),H(w,A)},this.safeSetTextureCube=function(w,A){w&&w.isWebGLCubeRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Y=!0),w=w.texture),D(w,A)}}function ju(r,e,t){const n=t.isWebGL2;return{convert:function(i){let s;if(i===Xt)return 5121;if(i===cc)return 32819;if(i===hc)return 32820;if(i===uc)return 33635;if(i===ac)return 5120;if(i===oc)return 5122;if(i===ur)return 5123;if(i===lc)return 5124;if(i===cr)return 5125;if(i===Gt)return 5126;if(i===Fn)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===dc)return 6406;if(i===Un)return 6407;if(i===Qe)return 6408;if(i===pc)return 6409;if(i===mc)return 6410;if(i===Hn)return 6402;if(i===_i)return 34041;if(i===gc)return 6403;if(i===vc)return 36244;if(i===xc)return 33319;if(i===yc)return 33320;if(i===_c)return 36248;if(i===Mc)return 36249;if(i===ma||i===fa||i===ga||i===va){if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===xa||i===ya||i===_a||i===Ma){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===bc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===ba||i===wa)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(i===ba)return s.COMPRESSED_RGB8_ETC2;if(i===wa)return s.COMPRESSED_RGBA8_ETC2_EAC}return i===wc||i===Sc||i===Tc||i===Ec||i===Ac||i===Lc||i===Rc||i===Cc||i===Pc||i===Ic||i===Dc||i===Nc||i===zc||i===Oc||i===Fc||i===Uc||i===Hc||i===Gc||i===Vc||i===kc||i===Wc||i===jc||i===qc||i===Xc||i===Yc||i===Zc||i===Jc||i===Qc?(s=e.get("WEBGL_compressed_texture_astc"),s!==null?i:null):i===Bc?(s=e.get("EXT_texture_compression_bptc"),s!==null?i:null):i===di?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class il extends tt{constructor(e=[]){super(),this.cameras=e}}il.prototype.isArrayCamera=!0;class hi extends Me{constructor(){super(),this.type="Group"}}hi.prototype.isGroup=!0;const qu={type:"move"};class ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qu))),c&&e.hand){a=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const _=new hi;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[g.jointName]=_,c.add(_)}const f=c.joints[g.jointName];v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=v.radius),f.visible=v!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Xu extends un{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",c=null,h=null,d=null,u=null,p=null,m=!1,g=null,v=null,f=null,_=null,x=null,y=null;const T=[],E=new Map,L=new tt;L.layers.enable(1),L.viewport=new Le;const I=new tt;I.layers.enable(2),I.viewport=new Le;const H=[L,I],D=new il;D.layers.enable(1),D.layers.enable(2);let O=null,$=null;function X(Y){const w=E.get(Y.inputSource);w&&w.dispatchEvent({type:Y.type,data:Y.inputSource})}function F(){E.forEach(function(Y,w){Y.disconnect(w)}),E.clear(),O=null,$=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),d&&t.deleteFramebuffer(d),g&&t.deleteFramebuffer(g),v&&t.deleteRenderbuffer(v),f&&t.deleteRenderbuffer(f),d=null,g=null,v=null,f=null,p=null,u=null,h=null,s=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function q(Y){const w=s.inputSources;for(let A=0;A<T.length;A++)E.set(w[A],T[A]);for(let A=0;A<Y.removed.length;A++){const G=Y.removed[A],U=E.get(G);U&&(U.dispatchEvent({type:"disconnected",data:G}),E.delete(G))}for(let A=0;A<Y.added.length;A++){const G=Y.added[A],U=E.get(G);U&&U.dispatchEvent({type:"connected",data:G})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let w=T[Y];return w===void 0&&(w=new ss,T[Y]=w),w.getTargetRaySpace()},this.getControllerGrip=function(Y){let w=T[Y];return w===void 0&&(w=new ss,T[Y]=w),w.getGripSpace()},this.getHand=function(Y){let w=T[Y];return w===void 0&&(w=new ss,T[Y]=w),w.getHandSpace()},this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q);const w=t.getContextAttributes();if(w.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const A={antialias:w.antialias,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,A),s.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const A={antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,A),s.updateRenderState({layers:[p]})}else{m=w.antialias;let A=null;w.depth&&(y=256,w.stencil&&(y|=1024),x=w.stencil?33306:36096,A=w.stencil?35056:33190);const G={colorFormat:w.alpha?32856:32849,depthFormat:A,scaleFactor:a};h=new XRWebGLBinding(s,t),u=h.createProjectionLayer(G),d=t.createFramebuffer(),s.updateRenderState({layers:[u]}),m&&(g=t.createFramebuffer(),v=t.createRenderbuffer(),t.bindRenderbuffer(36161,v),t.renderbufferStorageMultisample(36161,4,32856,u.textureWidth,u.textureHeight),i.bindFramebuffer(36160,g),t.framebufferRenderbuffer(36160,36064,36161,v),t.bindRenderbuffer(36161,null),A!==null&&(f=t.createRenderbuffer(),t.bindRenderbuffer(36161,f),t.renderbufferStorageMultisample(36161,4,A,u.textureWidth,u.textureHeight),t.framebufferRenderbuffer(36160,x,36161,f),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await s.requestReferenceSpace(l),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};const ee=new S,ne=new S;function se(Y,w){w===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(w.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;D.near=I.near=L.near=Y.near,D.far=I.far=L.far=Y.far,O===D.near&&$===D.far||(s.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,$=D.far);const w=Y.parent,A=D.cameras;se(D,w);for(let U=0;U<A.length;U++)se(A[U],w);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),Y.position.copy(D.position),Y.quaternion.copy(D.quaternion),Y.scale.copy(D.scale),Y.matrix.copy(D.matrix),Y.matrixWorld.copy(D.matrixWorld);const G=Y.children;for(let U=0,R=G.length;U<R;U++)G[U].updateMatrixWorld(!0);A.length===2?function(U,R,Q){ee.setFromMatrixPosition(R.matrixWorld),ne.setFromMatrixPosition(Q.matrixWorld);const K=ee.distanceTo(ne),P=R.projectionMatrix.elements,M=Q.projectionMatrix.elements,C=P[14]/(P[10]-1),k=P[14]/(P[10]+1),W=(P[9]+1)/P[5],V=(P[9]-1)/P[5],ie=(P[8]-1)/P[0],oe=(M[8]+1)/M[0],re=C*ie,me=C*oe,pe=K/(-ie+oe),Fe=pe*-ie;R.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Fe),U.translateZ(pe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const we=C+pe,Ue=k+pe,it=re-Fe,Jt=me+(K-Fe),Qt=W*k/Ue*we,Kt=V*k/Ue*we;U.projectionMatrix.makePerspective(it,Jt,Qt,Kt,we,Ue)}(D,L,I):D.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){return u!==null?u.fixedFoveation:p!==null?p.fixedFoveation:void 0},this.setFoveation=function(Y){u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let le=null;const ce=new ko;ce.setAnimationLoop(function(Y,w){if(c=w.getViewerPose(o),_=w,c!==null){const G=c.views;p!==null&&i.bindXRFramebuffer(p.framebuffer);let U=!1;G.length!==D.cameras.length&&(D.cameras.length=0,U=!0);for(let R=0;R<G.length;R++){const Q=G[R];let K=null;if(p!==null)K=p.getViewport(Q);else{const M=h.getViewSubImage(u,Q);i.bindXRFramebuffer(d),M.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,x,3553,M.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,M.colorTexture,0),K=M.viewport}const P=H[R];P.matrix.fromArray(Q.transform.matrix),P.projectionMatrix.fromArray(Q.projectionMatrix),P.viewport.set(K.x,K.y,K.width,K.height),R===0&&D.matrix.copy(P.matrix),U===!0&&D.cameras.push(P)}m&&(i.bindXRFramebuffer(g),y!==null&&t.clear(y))}const A=s.inputSources;for(let G=0;G<T.length;G++){const U=T[G],R=A[G];U.update(R,w,o)}if(le&&le(Y,w),m){const G=u.textureWidth,U=u.textureHeight;i.bindFramebuffer(36008,g),i.bindFramebuffer(36009,d),t.invalidateFramebuffer(36008,[x]),t.invalidateFramebuffer(36009,[x]),t.blitFramebuffer(0,0,G,U,0,0,G,U,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,g)}_=null}),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}function Yu(r){function e(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.specularMap&&(n.specularMap.value=i.specularMap),i.alphaTest>0&&(n.alphaTest.value=i.alphaTest);const s=r.get(i).envMap;if(s){n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=i.reflectivity,n.ior.value=i.ior,n.refractionRatio.value=i.refractionRatio;const l=r.get(s).__maxMipLevel;l!==void 0&&(n.maxMipLevel.value=l)}let a,o;i.lightMap&&(n.lightMap.value=i.lightMap,n.lightMapIntensity.value=i.lightMapIntensity),i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?a=i.map:i.specularMap?a=i.specularMap:i.displacementMap?a=i.displacementMap:i.normalMap?a=i.normalMap:i.bumpMap?a=i.bumpMap:i.roughnessMap?a=i.roughnessMap:i.metalnessMap?a=i.metalnessMap:i.alphaMap?a=i.alphaMap:i.emissiveMap?a=i.emissiveMap:i.clearcoatMap?a=i.clearcoatMap:i.clearcoatNormalMap?a=i.clearcoatNormalMap:i.clearcoatRoughnessMap?a=i.clearcoatRoughnessMap:i.specularIntensityMap?a=i.specularIntensityMap:i.specularTintMap?a=i.specularTintMap:i.transmissionMap?a=i.transmissionMap:i.thicknessMap&&(a=i.thicknessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}function t(n,i){n.roughness.value=i.roughness,n.metalness.value=i.metalness,i.roughnessMap&&(n.roughnessMap.value=i.roughnessMap),i.metalnessMap&&(n.metalnessMap.value=i.metalnessMap),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,i.side===Oe&&(n.bumpScale.value*=-1)),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),i.side===Oe&&n.normalScale.value.negate()),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),r.get(i).envMap&&(n.envMapIntensity.value=i.envMapIntensity)}return{refreshFogUniforms:function(n,i){n.fogColor.value.copy(i.color),i.isFog?(n.fogNear.value=i.near,n.fogFar.value=i.far):i.isFogExp2&&(n.fogDensity.value=i.density)},refreshMaterialUniforms:function(n,i,s,a,o){i.isMeshBasicMaterial?e(n,i):i.isMeshLambertMaterial?(e(n,i),function(l,c){c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap)}(n,i)):i.isMeshToonMaterial?(e(n,i),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===Oe&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===Oe&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshPhongMaterial?(e(n,i),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===Oe&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===Oe&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshStandardMaterial?(e(n,i),i.isMeshPhysicalMaterial?function(l,c,h){t(l,c),l.ior.value=c.ior,c.sheen>0&&(l.sheenTint.value.copy(c.sheenTint).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),l.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===Oe&&l.clearcoatNormalScale.value.negate())),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap),l.attenuationDistance.value=c.attenuationDistance,l.attenuationTint.value.copy(c.attenuationTint)),l.specularIntensity.value=c.specularIntensity,l.specularTint.value.copy(c.specularTint),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap),c.specularTintMap&&(l.specularTintMap.value=c.specularTintMap)}(n,i,o):t(n,i)):i.isMeshMatcapMaterial?(e(n,i),function(l,c){c.matcap&&(l.matcap.value=c.matcap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===Oe&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===Oe&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshDepthMaterial?(e(n,i),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshDistanceMaterial?(e(n,i),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias),l.referencePosition.value.copy(c.referencePosition),l.nearDistance.value=c.nearDistance,l.farDistance.value=c.farDistance}(n,i)):i.isMeshNormalMaterial?(e(n,i),function(l,c){c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===Oe&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===Oe&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity}(n,i),i.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(n,i)):i.isPointsMaterial?function(l,c,h,d){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*d,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let u;c.map?u=c.map:c.alphaMap&&(u=c.alphaMap),u!==void 0&&(u.matrixAutoUpdate===!0&&u.updateMatrix(),l.uvTransform.value.copy(u.matrix))}(n,i,s,a):i.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),l.uvTransform.value.copy(h.matrix))}(n,i):i.isShadowMaterial?(n.color.value.copy(i.color),n.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function Ae(r={}){const e=r.canvas!==void 0?r.canvas:function(){const b=Mr("canvas");return b.style.display="block",b}(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0&&r.alpha,i=r.depth===void 0||r.depth,s=r.stencil===void 0||r.stencil,a=r.antialias!==void 0&&r.antialias,o=r.premultipliedAlpha===void 0||r.premultipliedAlpha,l=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat;let d=null,u=null;const p=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Xe,this.physicallyCorrectLights=!1,this.toneMapping=ln,this.toneMappingExposure=1;const g=this;let v=!1,f=0,_=0,x=null,y=-1,T=null;const E=new Le,L=new Le;let I=null,H=e.width,D=e.height,O=1,$=null,X=null;const F=new Le(0,0,H,D),q=new Le(0,0,H,D);let ee=!1;const ne=[],se=new Sr;let le=!1,ce=!1,Y=null;const w=new de,A=new S,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function U(){return x===null?O:1}let R,Q,K,P,M,C,k,W,V,ie,oe,re,me,pe,Fe,we,Ue,it,Jt,Qt,Kt,lt,$e,Z=t;function Zs(b,B){for(let z=0;z<b.length;z++){const N=b[z],j=e.getContext(N,B);if(j!==null)return j}return null}try{const b={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",Qs,!1),e.addEventListener("webglcontextrestored",Ks,!1),Z===null){const B=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&B.shift(),Z=Zs(B,b),Z===null)throw Zs(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function Js(){R=new Rh(Z),Q=new bh(Z,R,r),R.init(Q),lt=new ju(Z,R,Q),K=new ku(Z,R,Q),ne[0]=1029,P=new Ih,M=new Du,C=new Wu(Z,R,K,M,Q,lt,P),k=new Sh(g),W=new Lh(g),V=new xh(Z,Q),$e=new _h(Z,R,V,Q),ie=new Ch(Z,V,P,$e),oe=new Oh(Z,ie,V,P),Jt=new zh(Z,Q,C),we=new wh(M),re=new Iu(g,k,W,R,Q,$e,we),me=new Yu(M),pe=new zu(M),Fe=new Hu(R,Q),it=new yh(g,k,K,oe,o),Ue=new nl(g,oe,Q),Qt=new Mh(Z,R,P,Q),Kt=new Ph(Z,R,P,Q),P.programs=re.programs,g.capabilities=Q,g.extensions=R,g.properties=M,g.renderLists=pe,g.shadowMap=Ue,g.state=K,g.info=P}Js();const rt=new Xu(g,Z);function Qs(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ks(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=P.autoReset,B=Ue.enabled,z=Ue.autoUpdate,N=Ue.needsUpdate,j=Ue.type;Js(),P.autoReset=b,Ue.enabled=B,Ue.autoUpdate=z,Ue.needsUpdate=N,Ue.type=j}function $s(b){const B=b.target;B.removeEventListener("dispose",$s),function(z){(function(N){const j=M.get(N).programs;j!==void 0&&j.forEach(function(ue){re.releaseProgram(ue)})})(z),M.remove(z)}(B)}this.xr=rt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const b=R.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=R.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(H,D,!1))},this.getSize=function(b){return b.set(H,D)},this.setSize=function(b,B,z){rt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(H=b,D=B,e.width=Math.floor(b*O),e.height=Math.floor(B*O),z!==!1&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B))},this.getDrawingBufferSize=function(b){return b.set(H*O,D*O).floor()},this.setDrawingBufferSize=function(b,B,z){H=b,D=B,O=z,e.width=Math.floor(b*z),e.height=Math.floor(B*z),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,B,z,N){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,B,z,N),K.viewport(E.copy(F).multiplyScalar(O).floor())},this.getScissor=function(b){return b.copy(q)},this.setScissor=function(b,B,z,N){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,B,z,N),K.scissor(L.copy(q).multiplyScalar(O).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){K.setScissorTest(ee=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(b,B,z){let N=0;(b===void 0||b)&&(N|=16384),(B===void 0||B)&&(N|=256),(z===void 0||z)&&(N|=1024),Z.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Qs,!1),e.removeEventListener("webglcontextrestored",Ks,!1),pe.dispose(),Fe.dispose(),M.dispose(),k.dispose(),W.dispose(),oe.dispose(),$e.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ea),rt.removeEventListener("sessionend",ta),Y&&(Y.dispose(),Y=null),$t.stop()},this.renderBufferImmediate=function(b,B){$e.initAttributes();const z=M.get(b);b.hasPositions&&!z.position&&(z.position=Z.createBuffer()),b.hasNormals&&!z.normal&&(z.normal=Z.createBuffer()),b.hasUvs&&!z.uv&&(z.uv=Z.createBuffer()),b.hasColors&&!z.color&&(z.color=Z.createBuffer());const N=B.getAttributes();b.hasPositions&&(Z.bindBuffer(34962,z.position),Z.bufferData(34962,b.positionArray,35048),$e.enableAttribute(N.position.location),Z.vertexAttribPointer(N.position.location,3,5126,!1,0,0)),b.hasNormals&&(Z.bindBuffer(34962,z.normal),Z.bufferData(34962,b.normalArray,35048),$e.enableAttribute(N.normal.location),Z.vertexAttribPointer(N.normal.location,3,5126,!1,0,0)),b.hasUvs&&(Z.bindBuffer(34962,z.uv),Z.bufferData(34962,b.uvArray,35048),$e.enableAttribute(N.uv.location),Z.vertexAttribPointer(N.uv.location,2,5126,!1,0,0)),b.hasColors&&(Z.bindBuffer(34962,z.color),Z.bufferData(34962,b.colorArray,35048),$e.enableAttribute(N.color.location),Z.vertexAttribPointer(N.color.location,3,5126,!1,0,0)),$e.disableUnusedAttributes(),Z.drawArrays(4,0,b.count),b.count=0},this.renderBufferDirect=function(b,B,z,N,j,ue){B===null&&(B=G);const ae=j.isMesh&&j.matrixWorld.determinant()<0,fe=sa(b,B,z,N,j);K.setMaterial(N,ae);let ve=z.index;const Te=z.attributes.position;if(ve===null){if(Te===void 0||Te.count===0)return}else if(ve.count===0)return;let _e,xe=1;N.wireframe===!0&&(ve=ie.getWireframeAttribute(z),xe=2),$e.setup(j,N,fe,z,ve);let Ne=Qt;ve!==null&&(_e=V.get(ve),Ne=Kt,Ne.setIndex(_e));const en=ve!==null?ve.count:Te.count,ge=z.drawRange.start*xe,Jn=z.drawRange.count*xe,He=ue!==null?ue.start*xe:0,tn=ue!==null?ue.count*xe:1/0,nn=Math.max(ge,He),rn=Math.min(en,ge+Jn,He+tn)-1,It=Math.max(0,rn-nn+1);if(It!==0){if(j.isMesh)N.wireframe===!0?(K.setLineWidth(N.wireframeLinewidth*U()),Ne.setMode(1)):Ne.setMode(4);else if(j.isLine){let Ie=N.linewidth;Ie===void 0&&(Ie=1),K.setLineWidth(Ie*U()),j.isLineSegments?Ne.setMode(1):j.isLineLoop?Ne.setMode(2):Ne.setMode(3)}else j.isPoints?Ne.setMode(0):j.isSprite&&Ne.setMode(4);if(j.isInstancedMesh)Ne.renderInstances(nn,It,j.count);else if(z.isInstancedBufferGeometry){const Ie=Math.min(z.instanceCount,z._maxInstanceCount);Ne.renderInstances(nn,It,Ie)}else Ne.render(nn,It)}},this.compile=function(b,B){u=Fe.get(b),u.init(),m.push(u),b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights(g.physicallyCorrectLights),b.traverse(function(z){const N=z.material;if(N)if(Array.isArray(N))for(let j=0;j<N.length;j++)Cr(N[j],b,z);else Cr(N,b,z)}),m.pop(),u=null};let Rr=null;function ea(){$t.stop()}function ta(){$t.start()}const $t=new ko;function na(b,B,z,N){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){N&&A.setFromMatrixPosition(b.matrixWorld).applyMatrix4(w);const ue=oe.update(b),ae=b.material;ae.visible&&d.push(b,ue,ae,z,A.z,null)}}else if(b.isImmediateRenderObject)N&&A.setFromMatrixPosition(b.matrixWorld).applyMatrix4(w),d.push(b,null,b.material,z,A.z,null);else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==P.render.frame&&(b.skeleton.update(),b.skeleton.frame=P.render.frame),!b.frustumCulled||se.intersectsObject(b))){N&&A.setFromMatrixPosition(b.matrixWorld).applyMatrix4(w);const ue=oe.update(b),ae=b.material;if(Array.isArray(ae)){const fe=ue.groups;for(let ve=0,Te=fe.length;ve<Te;ve++){const _e=fe[ve],xe=ae[_e.materialIndex];xe&&xe.visible&&d.push(b,ue,xe,z,A.z,_e)}}else ae.visible&&d.push(b,ue,ae,z,A.z,null)}}const j=b.children;for(let ue=0,ae=j.length;ue<ae;ue++)na(j[ue],B,z,N)}function ia(b,B,z,N){const j=b.opaque,ue=b.transmissive,ae=b.transparent;u.setupLightsView(z),ue.length>0&&function(fe,ve,Te){if(Y===null){const Ne=a===!0&&Q.isWebGL2===!0;Y=new(Ne?Fo:wt)(1024,1024,{generateMipmaps:!0,type:lt.convert(Fn)!==null?Fn:Xt,minFilter:_r,magFilter:Ve,wrapS:ot,wrapT:ot})}const _e=g.getRenderTarget();g.setRenderTarget(Y),g.clear();const xe=g.toneMapping;g.toneMapping=ln,Ri(fe,ve,Te),g.toneMapping=xe,C.updateMultisampleRenderTarget(Y),C.updateRenderTargetMipmap(Y),g.setRenderTarget(_e)}(j,B,z),N&&K.viewport(E.copy(N)),j.length>0&&Ri(j,B,z),ue.length>0&&Ri(ue,B,z),ae.length>0&&Ri(ae,B,z)}function Ri(b,B,z){const N=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ue=b.length;j<ue;j++){const ae=b[j],fe=ae.object,ve=ae.geometry,Te=N===null?ae.material:N,_e=ae.group;fe.layers.test(z.layers)&&Rl(fe,B,z,ve,Te,_e)}}function Rl(b,B,z,N,j,ue){if(b.onBeforeRender(g,B,z,N,j,ue),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(g,B,z,N,b,ue),b.isImmediateRenderObject){const ae=sa(z,B,N,j,b);K.setMaterial(j),$e.reset(),function(fe,ve){fe.render(function(Te){g.renderBufferImmediate(Te,ve)})}(b,ae)}else j.transparent===!0&&j.side===kn?(j.side=Oe,j.needsUpdate=!0,g.renderBufferDirect(z,B,N,j,b,ue),j.side=yi,j.needsUpdate=!0,g.renderBufferDirect(z,B,N,j,b,ue),j.side=kn):g.renderBufferDirect(z,B,N,j,b,ue);b.onAfterRender(g,B,z,N,j,ue)}function Cr(b,B,z){B.isScene!==!0&&(B=G);const N=M.get(b),j=u.state.lights,ue=u.state.shadowsArray,ae=j.state.version,fe=re.getParameters(b,j.state,ue,B,z),ve=re.getProgramCacheKey(fe);let Te=N.programs;N.environment=b.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(b.isMeshStandardMaterial?W:k).get(b.envMap||N.environment),Te===void 0&&(b.addEventListener("dispose",$s),Te=new Map,N.programs=Te);let _e=Te.get(ve);if(_e!==void 0){if(N.currentProgram===_e&&N.lightsStateVersion===ae)return ra(b,fe),_e}else fe.uniforms=re.getUniforms(b),b.onBuild(fe,g),b.onBeforeCompile(fe,g),_e=re.acquireProgram(fe,ve),Te.set(ve,_e),N.uniforms=fe.uniforms;const xe=N.uniforms;(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(xe.clippingPlanes=we.uniform),ra(b,fe),N.needsLights=function(ge){return ge.isMeshLambertMaterial||ge.isMeshToonMaterial||ge.isMeshPhongMaterial||ge.isMeshStandardMaterial||ge.isShadowMaterial||ge.isShaderMaterial&&ge.lights===!0}(b),N.lightsStateVersion=ae,N.needsLights&&(xe.ambientLightColor.value=j.state.ambient,xe.lightProbe.value=j.state.probe,xe.directionalLights.value=j.state.directional,xe.directionalLightShadows.value=j.state.directionalShadow,xe.spotLights.value=j.state.spot,xe.spotLightShadows.value=j.state.spotShadow,xe.rectAreaLights.value=j.state.rectArea,xe.ltc_1.value=j.state.rectAreaLTC1,xe.ltc_2.value=j.state.rectAreaLTC2,xe.pointLights.value=j.state.point,xe.pointLightShadows.value=j.state.pointShadow,xe.hemisphereLights.value=j.state.hemi,xe.directionalShadowMap.value=j.state.directionalShadowMap,xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,xe.spotShadowMap.value=j.state.spotShadowMap,xe.spotShadowMatrix.value=j.state.spotShadowMatrix,xe.pointShadowMap.value=j.state.pointShadowMap,xe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ne=_e.getUniforms(),en=kt.seqWithValue(Ne.seq,xe);return N.currentProgram=_e,N.uniformsList=en,_e}function ra(b,B){const z=M.get(b);z.outputEncoding=B.outputEncoding,z.instancing=B.instancing,z.skinning=B.skinning,z.morphTargets=B.morphTargets,z.morphNormals=B.morphNormals,z.morphTargetsCount=B.morphTargetsCount,z.numClippingPlanes=B.numClippingPlanes,z.numIntersection=B.numClipIntersection,z.vertexAlphas=B.vertexAlphas,z.vertexTangents=B.vertexTangents}function sa(b,B,z,N,j){B.isScene!==!0&&(B=G),C.resetTextureUnits();const ue=B.fog,ae=N.isMeshStandardMaterial?B.environment:null,fe=x===null?g.outputEncoding:x.texture.encoding,ve=(N.isMeshStandardMaterial?W:k).get(N.envMap||ae),Te=N.vertexColors===!0&&!!z&&!!z.attributes.color&&z.attributes.color.itemSize===4,_e=!!N.normalMap&&!!z&&!!z.attributes.tangent,xe=!!z&&!!z.morphAttributes.position,Ne=!!z&&!!z.morphAttributes.normal,en=z&&z.morphAttributes.position?z.morphAttributes.position.length:0,ge=M.get(N),Jn=u.state.lights;if(le===!0&&(ce===!0||b!==T)){const pt=b===T&&N.id===y;we.setState(N,b,pt)}let He=!1;N.version===ge.__version?ge.needsLights&&ge.lightsStateVersion!==Jn.state.version||ge.outputEncoding!==fe||j.isInstancedMesh&&ge.instancing===!1?He=!0:j.isInstancedMesh||ge.instancing!==!0?j.isSkinnedMesh&&ge.skinning===!1?He=!0:j.isSkinnedMesh||ge.skinning!==!0?ge.envMap!==ve||N.fog&&ge.fog!==ue?He=!0:ge.numClippingPlanes===void 0||ge.numClippingPlanes===we.numPlanes&&ge.numIntersection===we.numIntersection?(ge.vertexAlphas!==Te||ge.vertexTangents!==_e||ge.morphTargets!==xe||ge.morphNormals!==Ne||Q.isWebGL2===!0&&ge.morphTargetsCount!==en)&&(He=!0):He=!0:He=!0:He=!0:(He=!0,ge.__version=N.version);let tn=ge.currentProgram;He===!0&&(tn=Cr(N,B,j));let nn=!1,rn=!1,It=!1;const Ie=tn.getUniforms(),Qn=ge.uniforms;if(K.useProgram(tn.program)&&(nn=!0,rn=!0,It=!0),N.id!==y&&(y=N.id,rn=!0),nn||T!==b){if(Ie.setValue(Z,"projectionMatrix",b.projectionMatrix),Q.logarithmicDepthBuffer&&Ie.setValue(Z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,rn=!0,It=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const pt=Ie.map.cameraPosition;pt!==void 0&&pt.setValue(Z,A.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ie.setValue(Z,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||j.isSkinnedMesh)&&Ie.setValue(Z,"viewMatrix",b.matrixWorldInverse)}if(j.isSkinnedMesh){Ie.setOptional(Z,j,"bindMatrix"),Ie.setOptional(Z,j,"bindMatrixInverse");const pt=j.skeleton;pt&&(Q.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),Ie.setValue(Z,"boneTexture",pt.boneTexture,C),Ie.setValue(Z,"boneTextureSize",pt.boneTextureSize)):Ie.setOptional(Z,pt,"boneMatrices"))}var _t,dt;return!z||z.morphAttributes.position===void 0&&z.morphAttributes.normal===void 0||Jt.update(j,z,N,tn),(rn||ge.receiveShadow!==j.receiveShadow)&&(ge.receiveShadow=j.receiveShadow,Ie.setValue(Z,"receiveShadow",j.receiveShadow)),rn&&(Ie.setValue(Z,"toneMappingExposure",g.toneMappingExposure),ge.needsLights&&(dt=It,(_t=Qn).ambientLightColor.needsUpdate=dt,_t.lightProbe.needsUpdate=dt,_t.directionalLights.needsUpdate=dt,_t.directionalLightShadows.needsUpdate=dt,_t.pointLights.needsUpdate=dt,_t.pointLightShadows.needsUpdate=dt,_t.spotLights.needsUpdate=dt,_t.spotLightShadows.needsUpdate=dt,_t.rectAreaLights.needsUpdate=dt,_t.hemisphereLights.needsUpdate=dt),ue&&N.fog&&me.refreshFogUniforms(Qn,ue),me.refreshMaterialUniforms(Qn,N,O,D,Y),kt.upload(Z,ge.uniformsList,Qn,C)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(kt.upload(Z,ge.uniformsList,Qn,C),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ie.setValue(Z,"center",j.center),Ie.setValue(Z,"modelViewMatrix",j.modelViewMatrix),Ie.setValue(Z,"normalMatrix",j.normalMatrix),Ie.setValue(Z,"modelMatrix",j.matrixWorld),tn}$t.setAnimationLoop(function(b){Rr&&Rr(b)}),typeof window!="undefined"&&$t.setContext(window),this.setAnimationLoop=function(b){Rr=b,rt.setAnimationLoop(b),b===null?$t.stop():$t.start()},rt.addEventListener("sessionstart",ea),rt.addEventListener("sessionend",ta),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(v===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,B,x),u=Fe.get(b,m.length),u.init(),m.push(u),w.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),se.setFromProjectionMatrix(w),ce=this.localClippingEnabled,le=we.init(this.clippingPlanes,ce,B),d=pe.get(b,p.length),d.init(),p.push(d),na(b,B,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort($,X),le===!0&&we.beginShadows();const z=u.state.shadowsArray;if(Ue.render(z,b,B),le===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(d,b),u.setupLights(g.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let j=0,ue=N.length;j<ue;j++){const ae=N[j];ia(d,b,ae,ae.viewport)}}else ia(d,b,B);x!==null&&(C.updateMultisampleRenderTarget(x),C.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(g,b,B),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1),$e.resetDefaultState(),y=-1,T=null,m.pop(),u=m.length>0?m[m.length-1]:null,p.pop(),d=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTarget=function(b,B=0,z=0){x=b,f=B,_=z,b&&M.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b);let N=null,j=!1,ue=!1;if(b){const ae=b.texture;(ae.isDataTexture3D||ae.isDataTexture2DArray)&&(ue=!0);const fe=M.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(N=fe[B],j=!0):N=b.isWebGLMultisampleRenderTarget?M.get(b).__webglMultisampledFramebuffer:fe,E.copy(b.viewport),L.copy(b.scissor),I=b.scissorTest}else E.copy(F).multiplyScalar(O).floor(),L.copy(q).multiplyScalar(O).floor(),I=ee;if(K.bindFramebuffer(36160,N)&&Q.drawBuffers){let ae=!1;if(b)if(b.isWebGLMultipleRenderTargets){const fe=b.texture;if(ne.length!==fe.length||ne[0]!==36064){for(let ve=0,Te=fe.length;ve<Te;ve++)ne[ve]=36064+ve;ne.length=fe.length,ae=!0}}else ne.length===1&&ne[0]===36064||(ne[0]=36064,ne.length=1,ae=!0);else ne.length===1&&ne[0]===1029||(ne[0]=1029,ne.length=1,ae=!0);ae&&(Q.isWebGL2?Z.drawBuffers(ne):R.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}if(K.viewport(E),K.scissor(L),K.setScissorTest(I),j){const ae=M.get(b.texture);Z.framebufferTexture2D(36160,36064,34069+B,ae.__webglTexture,z)}else if(ue){const ae=M.get(b.texture),fe=B||0;Z.framebufferTextureLayer(36160,36064,ae.__webglTexture,z||0,fe)}y=-1},this.readRenderTargetPixels=function(b,B,z,N,j,ue,ae){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){K.bindFramebuffer(36160,fe);try{const ve=b.texture,Te=ve.format,_e=ve.type;if(Te!==Qe&&lt.convert(Te)!==Z.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const xe=_e===Fn&&(R.has("EXT_color_buffer_half_float")||Q.isWebGL2&&R.has("EXT_color_buffer_float"));if(!(_e===Xt||lt.convert(_e)===Z.getParameter(35738)||_e===Gt&&(Q.isWebGL2||R.has("OES_texture_float")||R.has("WEBGL_color_buffer_float"))||xe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z.checkFramebufferStatus(36160)===36053?B>=0&&B<=b.width-N&&z>=0&&z<=b.height-j&&Z.readPixels(B,z,N,j,lt.convert(Te),lt.convert(_e),ue):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ve=x!==null?M.get(x).__webglFramebuffer:null;K.bindFramebuffer(36160,ve)}}},this.copyFramebufferToTexture=function(b,B,z=0){const N=Math.pow(2,-z),j=Math.floor(B.image.width*N),ue=Math.floor(B.image.height*N);let ae=lt.convert(B.format);Q.isWebGL2&&(ae===6407&&(ae=32849),ae===6408&&(ae=32856)),C.setTexture2D(B,0),Z.copyTexImage2D(3553,z,ae,b.x,b.y,j,ue,0),K.unbindTexture()},this.copyTextureToTexture=function(b,B,z,N=0){const j=B.image.width,ue=B.image.height,ae=lt.convert(z.format),fe=lt.convert(z.type);C.setTexture2D(z,0),Z.pixelStorei(37440,z.flipY),Z.pixelStorei(37441,z.premultiplyAlpha),Z.pixelStorei(3317,z.unpackAlignment),B.isDataTexture?Z.texSubImage2D(3553,N,b.x,b.y,j,ue,ae,fe,B.image.data):B.isCompressedTexture?Z.compressedTexSubImage2D(3553,N,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,ae,B.mipmaps[0].data):Z.texSubImage2D(3553,N,b.x,b.y,ae,fe,B.image),N===0&&z.generateMipmaps&&Z.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(b,B,z,N,j=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const ue=b.max.x-b.min.x+1,ae=b.max.y-b.min.y+1,fe=b.max.z-b.min.z+1,ve=lt.convert(N.format),Te=lt.convert(N.type);let _e;if(N.isDataTexture3D)C.setTexture3D(N,0),_e=32879;else{if(!N.isDataTexture2DArray)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");C.setTexture2DArray(N,0),_e=35866}Z.pixelStorei(37440,N.flipY),Z.pixelStorei(37441,N.premultiplyAlpha),Z.pixelStorei(3317,N.unpackAlignment);const xe=Z.getParameter(3314),Ne=Z.getParameter(32878),en=Z.getParameter(3316),ge=Z.getParameter(3315),Jn=Z.getParameter(32877),He=z.isCompressedTexture?z.mipmaps[0]:z.image;Z.pixelStorei(3314,He.width),Z.pixelStorei(32878,He.height),Z.pixelStorei(3316,b.min.x),Z.pixelStorei(3315,b.min.y),Z.pixelStorei(32877,b.min.z),z.isDataTexture||z.isDataTexture3D?Z.texSubImage3D(_e,j,B.x,B.y,B.z,ue,ae,fe,ve,Te,He.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(_e,j,B.x,B.y,B.z,ue,ae,fe,ve,He.data)):Z.texSubImage3D(_e,j,B.x,B.y,B.z,ue,ae,fe,ve,Te,He),Z.pixelStorei(3314,xe),Z.pixelStorei(32878,Ne),Z.pixelStorei(3316,en),Z.pixelStorei(3315,ge),Z.pixelStorei(32877,Jn),j===0&&N.generateMipmaps&&Z.generateMipmap(_e),K.unbindTexture()},this.initTexture=function(b){C.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){f=0,_=0,x=null,K.reset(),$e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}(class extends Ae{}).prototype.isWebGL1Renderer=!0;class rl extends Me{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}rl.prototype.isScene=!0;class wi{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}wi.prototype.isInterleavedBuffer=!0;const De=new S;class Si{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.applyMatrix4(e),this.setXYZ(t,De.x,De.y,De.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.applyNormalMatrix(e),this.setXYZ(t,De.x,De.y,De.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.transformDirection(e),this.setXYZ(t,De.x,De.y,De.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Si(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Si.prototype.isInterleavedBufferAttribute=!0;class sl extends Ze{constructor(e){super(),this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}let En;sl.prototype.isSpriteMaterial=!0;const ri=new S,An=new S,Ln=new S,Rn=new J,si=new J,al=new de,Ki=new S,ai=new S,$i=new S,ro=new J,as=new J,so=new J;function er(r,e,t,n,i,s){Rn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(si.x=s*Rn.x-i*Rn.y,si.y=i*Rn.x+s*Rn.y):si.copy(Rn),r.copy(e),r.x+=si.x,r.y+=si.y,r.applyMatrix4(al)}(class extends Me{constructor(r){if(super(),this.type="Sprite",En===void 0){En=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new wi(e,5);En.setIndex([0,1,2,0,2,3]),En.setAttribute("position",new Si(t,3,0,!1)),En.setAttribute("uv",new Si(t,2,3,!1))}this.geometry=En,this.material=r!==void 0?r:new sl,this.center=new J(.5,.5)}raycast(r,e){r.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),An.setFromMatrixScale(this.matrixWorld),al.copy(r.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(r.camera.matrixWorldInverse,this.matrixWorld),Ln.setFromMatrixPosition(this.modelViewMatrix),r.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&An.multiplyScalar(-Ln.z);const t=this.material.rotation;let n,i;t!==0&&(i=Math.cos(t),n=Math.sin(t));const s=this.center;er(Ki.set(-.5,-.5,0),Ln,s,An,n,i),er(ai.set(.5,-.5,0),Ln,s,An,n,i),er($i.set(.5,.5,0),Ln,s,An,n,i),ro.set(0,0),as.set(1,0),so.set(1,1);let a=r.ray.intersectTriangle(Ki,ai,$i,!1,ri);if(a===null&&(er(ai.set(-.5,.5,0),Ln,s,An,n,i),as.set(0,1),a=r.ray.intersectTriangle(Ki,$i,ai,!1,ri),a===null))return;const o=r.ray.origin.distanceTo(ri);o<r.near||o>r.far||e.push({distance:o,point:ri.clone(),uv:ze.getUV(ri,Ki,ai,$i,ro,as,so,new J),face:null,object:this})}copy(r){return super.copy(r),r.center!==void 0&&this.center.copy(r.center),this.material=r.material,this}}).prototype.isSprite=!0;const ao=new S,oo=new Le,lo=new Le,Zu=new S,co=new de;class ol extends Je{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new de,this.bindMatrixInverse=new de}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Le,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;oo.fromBufferAttribute(i.attributes.skinIndex,e),lo.fromBufferAttribute(i.attributes.skinWeight,e),ao.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=lo.getComponent(s);if(a!==0){const o=oo.getComponent(s);co.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zu.copy(ao).applyMatrix4(co),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}ol.prototype.isSkinnedMesh=!0;(class extends Me{constructor(){super(),this.type="Bone"}}).prototype.isBone=!0;(class extends je{constructor(r=null,e=1,t=1,n,i,s,a,o,l=Ve,c=Ve,h,d){super(null,s,a,o,l,c,n,i,h,d),this.image={data:r,width:e,height:t},this.magFilter=l,this.minFilter=c,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}).prototype.isDataTexture=!0;class Ss extends Be{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Ss.prototype.isInstancedBufferAttribute=!0;const ho=new de,uo=new de,tr=[],oi=new Je;(class extends Je{constructor(r,e,t){super(r,e),this.instanceMatrix=new Ss(new Float32Array(16*t),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}copy(r){return super.copy(r),this.instanceMatrix.copy(r.instanceMatrix),r.instanceColor!==null&&(this.instanceColor=r.instanceColor.clone()),this.count=r.count,this}getColorAt(r,e){e.fromArray(this.instanceColor.array,3*r)}getMatrixAt(r,e){e.fromArray(this.instanceMatrix.array,16*r)}raycast(r,e){const t=this.matrixWorld,n=this.count;if(oi.geometry=this.geometry,oi.material=this.material,oi.material!==void 0)for(let i=0;i<n;i++){this.getMatrixAt(i,ho),uo.multiplyMatrices(t,ho),oi.matrixWorld=uo,oi.raycast(r,tr);for(let s=0,a=tr.length;s<a;s++){const o=tr[s];o.instanceId=i,o.object=this,e.push(o)}tr.length=0}}setColorAt(r,e){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*r)}setMatrixAt(r,e){e.toArray(this.instanceMatrix.array,16*r)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}).prototype.isInstancedMesh=!0;class Ti extends Ze{constructor(e){super(),this.type="LineBasicMaterial",this.color=new he(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Ti.prototype.isLineBasicMaterial=!0;const po=new S,mo=new S,fo=new de,os=new Gn,nr=new Xn;class Fs extends Me{constructor(e=new Ee,t=new Ti){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)po.fromBufferAttribute(t,i-1),mo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=po.distanceTo(mo);e.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,e.ray.intersectsSphere(nr)===!1)return;fo.copy(i).invert(),os.copy(e.ray).applyMatrix4(fo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,d=new S,u=new S,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,g=n.attributes.position;if(m!==null)for(let v=Math.max(0,a.start),f=Math.min(m.count,a.start+a.count)-1;v<f;v+=p){const _=m.getX(v),x=m.getX(v+1);if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,x),os.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}else for(let v=Math.max(0,a.start),f=Math.min(g.count,a.start+a.count)-1;v<f;v+=p){if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),os.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Fs.prototype.isLine=!0;const go=new S,vo=new S;class Ts extends Fs{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)go.fromBufferAttribute(t,i),vo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+go.distanceTo(vo);e.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ts.prototype.isLineSegments=!0;(class extends Fs{constructor(r,e){super(r,e),this.type="LineLoop"}}).prototype.isLineLoop=!0;class ll extends Ze{constructor(e){super(),this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}ll.prototype.isPointsMaterial=!0;const xo=new de,Es=new Gn,ir=new Xn,rr=new S;function yo(r,e,t,n,i,s,a){const o=Es.distanceSqToPoint(r);if(o<t){const l=new S;Es.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}(class extends Me{constructor(r=new Ee,e=new ll){super(),this.type="Points",this.geometry=r,this.material=e,this.updateMorphTargets()}copy(r){return super.copy(r),this.material=r.material,this.geometry=r.geometry,this}raycast(r,e){const t=this.geometry,n=this.matrixWorld,i=r.params.Points.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere),ir.applyMatrix4(n),ir.radius+=i,r.ray.intersectsSphere(ir)===!1)return;xo.copy(n).invert(),Es.copy(r.ray).applyMatrix4(xo);const a=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;if(t.isBufferGeometry){const l=t.index,c=t.attributes.position;if(l!==null)for(let h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);h<d;h++){const u=l.getX(h);rr.fromBufferAttribute(c,u),yo(rr,u,o,n,r,e,this)}else for(let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);h<d;h++)rr.fromBufferAttribute(c,h),yo(rr,h,o,n,r,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const r=this.geometry;if(r.isBufferGeometry){const e=r.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}else{const e=r.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}).prototype.isPoints=!0;(class extends je{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.format=a!==void 0?a:Un,this.minFilter=s!==void 0?s:ht,this.magFilter=i!==void 0?i:ht,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(function h(){c.needsUpdate=!0,r.requestVideoFrameCallback(h)})}clone(){return new this.constructor(this.image).copy(this)}update(){const r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}).prototype.isVideoTexture=!0;(class extends je{constructor(r,e,t,n,i,s,a,o,l,c,h,d){super(null,s,a,o,l,c,n,i,h,d),this.image={width:e,height:t},this.mipmaps=r,this.flipY=!1,this.generateMipmaps=!1}}).prototype.isCompressedTexture=!0;(class extends je{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.needsUpdate=!0}}).prototype.isCanvasTexture=!0;(class extends je{constructor(r,e,t,n,i,s,a,o,l,c){if((c=c!==void 0?c:Hn)!==Hn&&c!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===Hn&&(t=ur),t===void 0&&c===_i&&(t=di),super(null,n,i,s,a,o,c,t,l),this.image={width:r,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=o!==void 0?o:Ve,this.flipY=!1,this.generateMipmaps=!1}}).prototype.isDepthTexture=!0;class Us extends Ee{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];function o(u,p,m,g){const v=g+1,f=[];for(let _=0;_<=v;_++){f[_]=[];const x=u.clone().lerp(m,_/v),y=p.clone().lerp(m,_/v),T=v-_;for(let E=0;E<=T;E++)f[_][E]=E===0&&_===v?x:x.clone().lerp(y,E/T)}for(let _=0;_<v;_++)for(let x=0;x<2*(v-_)-1;x++){const y=Math.floor(x/2);x%2==0?(l(f[_][y+1]),l(f[_+1][y]),l(f[_][y])):(l(f[_][y+1]),l(f[_+1][y+1]),l(f[_+1][y]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){const m=3*u;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(u,p,m,g){g<0&&u.x===1&&(a[p]=u.x-1),m.x===0&&m.z===0&&(a[p]=g/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){const p=new S,m=new S,g=new S;for(let v=0;v<t.length;v+=3)c(t[v+0],p),c(t[v+1],m),c(t[v+2],g),o(p,m,g,u)})(i),function(u){const p=new S;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(u),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z}(n),function(){const u=new S;for(let m=0;m<s.length;m+=3){u.x=s[m+0],u.y=s[m+1],u.z=s[m+2];const g=d(u)/2/Math.PI+.5,v=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-v)}var p;(function(){const m=new S,g=new S,v=new S,f=new S,_=new J,x=new J,y=new J;for(let T=0,E=0;T<s.length;T+=9,E+=6){m.set(s[T+0],s[T+1],s[T+2]),g.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),_.set(a[E+0],a[E+1]),x.set(a[E+2],a[E+3]),y.set(a[E+4],a[E+5]),f.copy(m).add(g).add(v).divideScalar(3);const L=d(f);h(_,E+0,m,L),h(x,E+2,g,L),h(y,E+4,v,L)}})(),function(){for(let m=0;m<a.length;m+=6){const g=a[m+0],v=a[m+2],f=a[m+4],_=Math.max(g,v,f),x=Math.min(g,v,f);_>.9&&x<.1&&(g<.2&&(a[m+0]+=1),v<.2&&(a[m+2]+=1),f<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new Us(e.vertices,e.indices,e.radius,e.details)}}new S,new S,new S,new ze;class ut{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);const h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new J:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],s=[],a=[],o=new S,l=new de;for(let p=0;p<=e;p++){const m=p/e;i[p]=this.getTangentAt(m,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(et(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(et(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Er extends ut{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new J,i=2*Math.PI;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Er.prototype.isEllipseCurve=!0;class cl extends Er{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}function Hs(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(s){const a=s*s;return r+e*s+t*a+n*(a*s)}}}cl.prototype.isArcCurve=!0;const sr=new S,ls=new Hs,cs=new Hs,hs=new Hs;class hl extends ut{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(sr.subVectors(i[0],i[1]).add(i[0]),o=sr);const d=i[c%s],u=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(sr.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(o.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(l),p);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),ls.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,m,g,v),cs.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,m,g,v),hs.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,m,g,v)}else this.curveType==="catmullrom"&&(ls.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),cs.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),hs.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(ls.calc(h),cs.calc(h),hs.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _o(r,e,t,n,i){const s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function fi(r,e,t,n){return function(i,s){const a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function gi(r,e,t,n,i){return function(s,a){const o=1-s;return o*o*o*a}(r,e)+function(s,a){const o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}hl.prototype.isCatmullRomCurve3=!0;class Gs extends ut{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gi(e,i.x,s.x,a.x,o.x),gi(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Gs.prototype.isCubicBezierCurve=!0;class ul extends ut{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gi(e,i.x,s.x,a.x,o.x),gi(e,i.y,s.y,a.y,o.y),gi(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ul.prototype.isCubicBezierCurve3=!0;class Ar extends ut{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new J;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ar.prototype.isLineCurve=!0;class Vs extends ut{constructor(e=new J,t=new J,n=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(fi(e,i.x,s.x,a.x),fi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Vs.prototype.isQuadraticBezierCurve=!0;class dl extends ut{constructor(e=new S,t=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(fi(e,i.x,s.x,a.x),fi(e,i.y,s.y,a.y),fi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}dl.prototype.isQuadraticBezierCurve3=!0;class ks extends ut{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(_o(o,l.x,c.x,h.x,d.x),_o(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}ks.prototype.isSplineCurve=!0;var pl=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:hl,CubicBezierCurve:Gs,CubicBezierCurve3:ul,EllipseCurve:Er,LineCurve:Ar,LineCurve3:class extends ut{constructor(r=new S,e=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=r,this.v2=e}getPoint(r,e=new S){const t=e;return r===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(r).add(this.v1)),t}getPointAt(r,e){return this.getPoint(r,e)}copy(r){return super.copy(r),this.v1.copy(r.v1),this.v2.copy(r.v2),this}toJSON(){const r=super.toJSON();return r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r}fromJSON(r){return super.fromJSON(r),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this}},QuadraticBezierCurve:Vs,QuadraticBezierCurve3:dl,SplineCurve:ks});class Ju extends ut{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ar(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new pl[i.type]().fromJSON(i))}return this}}class As extends Ju{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ar(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Vs(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Gs(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ks(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Er(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vi extends As{constructor(e){super(e),this.uuid=yt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new As().fromJSON(i))}return this}}const Qu=function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Mo(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=function(m,g,v,f){const _=[];let x,y,T,E,L;for(x=0,y=g.length;x<y;x++)T=g[x]*f,E=x<y-1?g[x+1]*f:m.length,L=Mo(m,T,E,f,!1),L===L.next&&(L.steiner=!0),_.push(sd(L));for(_.sort(nd),x=0;x<_.length;x++)id(_[x],v),v=Yt(v,v.next);return v}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)d=r[m],u=r[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return Ei(s,a,t,o,l,p),a};function Mo(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=bo(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=bo(s,r[s],r[s+1],a);return a&&Lr(a,a.next)&&(Li(a),a=a.next),a}function Yt(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Lr(n,n.next)&&Pe(n.prev,n,n.next)!==0)n=n.next;else{if(Li(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ei(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let m=h;do m.z===null&&(m.z=Ls(m.x,m.y,d,u,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,function(g){let v,f,_,x,y,T,E,L,I=1;do{for(f=g,g=null,y=null,T=0;f;){for(T++,_=f,E=0,v=0;v<I&&(E++,_=_.nextZ,_);v++);for(L=I;E>0||L>0&&_;)E!==0&&(L===0||!_||f.z<=_.z)?(x=f,f=f.nextZ,E--):(x=_,_=_.nextZ,L--),y?y.nextZ=x:g=x,x.prevZ=y,y=x;f=_}y.nextZ=null,I*=2}while(T>1)}(m)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?$u(r,n,i,s):Ku(r))e.push(o.i/t),e.push(r.i/t),e.push(l.i/t),Li(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Ei(r=ed(Yt(r),e,t),e,t,n,i,s,2):a===2&&td(r,e,t,n,i,s):Ei(Yt(r),e,t,n,i,s,1);break}}function Ku(r){const e=r.prev,t=r,n=r.next;if(Pe(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(On(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Pe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function $u(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Pe(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,d=Ls(o,l,e,t,n),u=Ls(c,h,e,t,n);let p=r.prevZ,m=r.nextZ;for(;p&&p.z>=d&&m&&m.z<=u;){if(p!==r.prev&&p!==r.next&&On(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Pe(p.prev,p,p.next)>=0||(p=p.prevZ,m!==r.prev&&m!==r.next&&On(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&Pe(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=d;){if(p!==r.prev&&p!==r.next&&On(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Pe(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=u;){if(m!==r.prev&&m!==r.next&&On(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function ed(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Lr(i,s)&&ml(i,n,n.next,s)&&Ai(i,s)&&Ai(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Li(n),Li(n.next),n=r=s),n=n.next}while(n!==r);return Yt(n)}function td(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ad(a,o)){let l=fl(a,o);return a=Yt(a,a.next),l=Yt(l,l.next),Ei(a,e,t,n,i,s),void Ei(l,e,t,n,i,s)}o=o.next}a=a.next}while(a!==r)}function nd(r,e){return r.x-e.x}function id(r,e){if(e=function(t,n){let i=n;const s=t.x,a=t.y;let o,l=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const m=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(m<=s&&m>l){if(l=m,m===s){if(a===i.y)return i;if(a===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==n);if(!o)return null;if(s===l)return o;const c=o,h=o.x,d=o.y;let u,p=1/0;i=o;do s>=i.x&&i.x>=h&&s!==i.x&&On(a<d?s:l,a,h,d,a<d?l:s,a,i.x,i.y)&&(u=Math.abs(a-i.y)/(s-i.x),Ai(i,t)&&(u<p||u===p&&(i.x>o.x||i.x===o.x&&rd(o,i)))&&(o=i,p=u)),i=i.next;while(i!==c);return o}(r,e),e){const t=fl(e,r);Yt(e,e.next),Yt(t,t.next)}}function rd(r,e){return Pe(r.prev,r,e.prev)<0&&Pe(e.next,r,r.next)<0}function Ls(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-t)*i)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function sd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function On(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function ad(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&ml(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(Ai(r,e)&&Ai(e,r)&&function(t,n){let i=t,s=!1;const a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(Pe(r.prev,r,e.prev)||Pe(r,e.prev,e))||Lr(r,e)&&Pe(r.prev,r,r.next)>0&&Pe(e.prev,e,e.next)>0)}function Pe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Lr(r,e){return r.x===e.x&&r.y===e.y}function ml(r,e,t,n){const i=or(Pe(r,e,t)),s=or(Pe(r,e,n)),a=or(Pe(t,n,r)),o=or(Pe(t,n,e));return i!==s&&a!==o||!(i!==0||!ar(r,t,e))||!(s!==0||!ar(r,n,e))||!(a!==0||!ar(t,r,n))||!(o!==0||!ar(t,e,n))}function ar(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function or(r){return r>0?1:r<0?-1:0}function Ai(r,e){return Pe(r.prev,r,r.next)<0?Pe(r,e,r.next)>=0&&Pe(r,r.prev,e)>=0:Pe(r,e,r.prev)<0||Pe(r,r.next,e)<0}function fl(r,e){const t=new Rs(r.i,r.x,r.y),n=new Rs(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bo(r,e,t,n){const i=new Rs(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Li(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Rs(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class qt{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return qt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];wo(e),So(n,e);let a=e.length;t.forEach(wo);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,So(n,t[l]);const o=Qu(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function wo(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function So(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Bn extends Ee{constructor(e=new vi([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:od;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let x,y,T,E,L,I=!1;f&&(x=f.getSpacedPoints(h),I=!0,u=!1,y=f.computeFrenetFrames(h,!1),T=new S,E=new S,L=new S),u||(v=0,p=0,m=0,g=0);const H=o.extractPoints(c);let D=H.shape;const O=H.holes;if(!qt.isClockWise(D)){D=D.reverse();for(let P=0,M=O.length;P<M;P++){const C=O[P];qt.isClockWise(C)&&(O[P]=C.reverse())}}const $=qt.triangulateShape(D,O),X=D;for(let P=0,M=O.length;P<M;P++){const C=O[P];D=D.concat(C)}function F(P,M,C){return M||console.error("THREE.ExtrudeGeometry: vec does not exist"),M.clone().multiplyScalar(C).add(P)}const q=D.length,ee=$.length;function ne(P,M,C){let k,W,V;const ie=P.x-M.x,oe=P.y-M.y,re=C.x-P.x,me=C.y-P.y,pe=ie*ie+oe*oe,Fe=ie*me-oe*re;if(Math.abs(Fe)>Number.EPSILON){const we=Math.sqrt(pe),Ue=Math.sqrt(re*re+me*me),it=M.x-oe/we,Jt=M.y+ie/we,Qt=((C.x-me/Ue-it)*me-(C.y+re/Ue-Jt)*re)/(ie*me-oe*re);k=it+ie*Qt-P.x,W=Jt+oe*Qt-P.y;const Kt=k*k+W*W;if(Kt<=2)return new J(k,W);V=Math.sqrt(Kt/2)}else{let we=!1;ie>Number.EPSILON?re>Number.EPSILON&&(we=!0):ie<-Number.EPSILON?re<-Number.EPSILON&&(we=!0):Math.sign(oe)===Math.sign(me)&&(we=!0),we?(k=-oe,W=ie,V=Math.sqrt(pe)):(k=ie,W=oe,V=Math.sqrt(pe/2))}return new J(k/V,W/V)}const se=[];for(let P=0,M=X.length,C=M-1,k=P+1;P<M;P++,C++,k++)C===M&&(C=0),k===M&&(k=0),se[P]=ne(X[P],X[C],X[k]);const le=[];let ce,Y=se.concat();for(let P=0,M=O.length;P<M;P++){const C=O[P];ce=[];for(let k=0,W=C.length,V=W-1,ie=k+1;k<W;k++,V++,ie++)V===W&&(V=0),ie===W&&(ie=0),ce[k]=ne(C[k],C[V],C[ie]);le.push(ce),Y=Y.concat(ce)}for(let P=0;P<v;P++){const M=P/v,C=p*Math.cos(M*Math.PI/2),k=m*Math.sin(M*Math.PI/2)+g;for(let W=0,V=X.length;W<V;W++){const ie=F(X[W],se[W],k);G(ie.x,ie.y,-C)}for(let W=0,V=O.length;W<V;W++){const ie=O[W];ce=le[W];for(let oe=0,re=ie.length;oe<re;oe++){const me=F(ie[oe],ce[oe],k);G(me.x,me.y,-C)}}}const w=m+g;for(let P=0;P<q;P++){const M=u?F(D[P],Y[P],w):D[P];I?(E.copy(y.normals[0]).multiplyScalar(M.x),T.copy(y.binormals[0]).multiplyScalar(M.y),L.copy(x[0]).add(E).add(T),G(L.x,L.y,L.z)):G(M.x,M.y,0)}for(let P=1;P<=h;P++)for(let M=0;M<q;M++){const C=u?F(D[M],Y[M],w):D[M];I?(E.copy(y.normals[P]).multiplyScalar(C.x),T.copy(y.binormals[P]).multiplyScalar(C.y),L.copy(x[P]).add(E).add(T),G(L.x,L.y,L.z)):G(C.x,C.y,d/h*P)}for(let P=v-1;P>=0;P--){const M=P/v,C=p*Math.cos(M*Math.PI/2),k=m*Math.sin(M*Math.PI/2)+g;for(let W=0,V=X.length;W<V;W++){const ie=F(X[W],se[W],k);G(ie.x,ie.y,d+C)}for(let W=0,V=O.length;W<V;W++){const ie=O[W];ce=le[W];for(let oe=0,re=ie.length;oe<re;oe++){const me=F(ie[oe],ce[oe],k);I?G(me.x,me.y+x[h-1].y,x[h-1].x+C):G(me.x,me.y,d+C)}}}function A(P,M){let C=P.length;for(;--C>=0;){const k=C;let W=C-1;W<0&&(W=P.length-1);for(let V=0,ie=h+2*v;V<ie;V++){const oe=q*V,re=q*(V+1);R(M+k+oe,M+W+oe,M+W+re,M+k+re)}}}function G(P,M,C){l.push(P),l.push(M),l.push(C)}function U(P,M,C){Q(P),Q(M),Q(C);const k=i.length/3,W=_.generateTopUV(n,i,k-3,k-2,k-1);K(W[0]),K(W[1]),K(W[2])}function R(P,M,C,k){Q(P),Q(M),Q(k),Q(M),Q(C),Q(k);const W=i.length/3,V=_.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);K(V[0]),K(V[1]),K(V[3]),K(V[1]),K(V[2]),K(V[3])}function Q(P){i.push(l[3*P+0]),i.push(l[3*P+1]),i.push(l[3*P+2])}function K(P){s.push(P.x),s.push(P.y)}(function(){const P=i.length/3;if(u){let M=0,C=q*M;for(let k=0;k<ee;k++){const W=$[k];U(W[2]+C,W[1]+C,W[0]+C)}M=h+2*v,C=q*M;for(let k=0;k<ee;k++){const W=$[k];U(W[0]+C,W[1]+C,W[2]+C)}}else{for(let M=0;M<ee;M++){const C=$[M];U(C[2],C[1],C[0])}for(let M=0;M<ee;M++){const C=$[M];U(C[0]+q*h,C[1]+q*h,C[2]+q*h)}}n.addGroup(P,i.length/3-P,0)})(),function(){const P=i.length/3;let M=0;A(X,M),M+=X.length;for(let C=0,k=O.length;C<k;C++){const W=O[C];A(W,M),M+=W.length}n.addGroup(P,i.length/3-P,1)}()}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals()}toJSON(){const e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){const o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pl[i.type]().fromJSON(i)),new Bn(n,e.options)}}const od={generateTopUV:function(r,e,t,n,i){const s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new J(s,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],m=e[3*i+2],g=e[3*s],v=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-d),new J(u,1-m),new J(g,1-f)]:[new J(o,1-l),new J(h,1-d),new J(p,1-m),new J(v,1-f)]}};class gl extends Us{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gl(e.radius,e.detail)}}class Ws extends Ee{constructor(e=new vi([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){const d=i.length/3,u=h.extractPoints(t);let p=u.shape;const m=u.holes;qt.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,f=m.length;v<f;v++){const _=m[v];qt.isClockWise(_)===!0&&(m[v]=_.reverse())}const g=qt.triangulateShape(p,m);for(let v=0,f=m.length;v<f;v++){const _=m[v];p=p.concat(_)}for(let v=0,f=p.length;v<f;v++){const _=p[v];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,f=g.length;v<f;v++){const _=g[v],x=_[0]+d,y=_[1]+d,T=_[2]+d;n.push(x,y,T),l+=3}}this.setIndex(n),this.setAttribute("position",new be(i,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(a,2))}toJSON(){const e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Ws(n,e.curveSegments)}}class vl extends Ee{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new S,u=new S,p=[],m=[],g=[],v=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let y=0;f==0&&a==0?y=.5/t:f==n&&l==Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;d.x=-e*Math.cos(i+E*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+E*s)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),v.push(E+y,1-x),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){const x=h[f][_+1],y=h[f][_],T=h[f+1][_],E=h[f+1][_+1];(f!==0||a>0)&&p.push(x,y,E),(f!==n-1||l<Math.PI)&&p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(v,2))}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xl extends Ee{constructor(e=1,t=.4,n=8,i=6,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new S,d=new S,u=new S;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){const g=m/i*s,v=p/n*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(g),d.y=(e+t*Math.cos(v))*Math.sin(g),d.z=t*Math.sin(v),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){const g=(i+1)*p+m-1,v=(i+1)*(p-1)+m-1,f=(i+1)*(p-1)+m,_=(i+1)*p+m;a.push(g,v,_),a.push(v,f,_)}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}static fromJSON(e){return new xl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yl extends Ee{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],d=new S,u=new S,p=new S,m=new S,g=new S,v=new S,f=new S;for(let x=0;x<=n;++x){const y=x/n*s*Math.PI*2;_(y,s,a,e,p),_(y+.01,s,a,e,m),v.subVectors(m,p),f.addVectors(m,p),g.crossVectors(v,f),f.crossVectors(g,v),g.normalize(),f.normalize();for(let T=0;T<=i;++T){const E=T/i*Math.PI*2,L=-t*Math.cos(E),I=t*Math.sin(E);d.x=p.x+(L*f.x+I*g.x),d.y=p.y+(L*f.y+I*g.y),d.z=p.z+(L*f.z+I*g.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(x/n),h.push(T/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const T=(i+1)*(x-1)+(y-1),E=(i+1)*x+(y-1),L=(i+1)*x+y,I=(i+1)*(x-1)+y;o.push(T,E,I),o.push(E,L,I)}function _(x,y,T,E,L){const I=Math.cos(x),H=Math.sin(x),D=T/y*x,O=Math.cos(D);L.x=E*(2+O)*.5*I,L.y=E*(2+O)*H*.5,L.z=E*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}static fromJSON(e){return new yl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}(class extends Ze{constructor(r){super(),this.type="ShadowMaterial",this.color=new he(0),this.transparent=!0,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this}}).prototype.isShadowMaterial=!0;class _l extends Ze{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}_l.prototype.isMeshStandardMaterial=!0;(class extends _l{constructor(r){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenTint=new he(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new he(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(r)}get sheen(){return this._sheen}set sheen(r){this._sheen>0!=r>0&&this.version++,this._sheen=r}get clearcoat(){return this._clearcoat}set clearcoat(r){this._clearcoat>0!=r>0&&this.version++,this._clearcoat=r}get transmission(){return this._transmission}set transmission(r){this._transmission>0!=r>0&&this.version++,this._transmission=r}copy(r){return super.copy(r),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=r.clearcoat,this.clearcoatMap=r.clearcoatMap,this.clearcoatRoughness=r.clearcoatRoughness,this.clearcoatRoughnessMap=r.clearcoatRoughnessMap,this.clearcoatNormalMap=r.clearcoatNormalMap,this.clearcoatNormalScale.copy(r.clearcoatNormalScale),this.ior=r.ior,this.sheen=r.sheen,this.sheenTint.copy(r.sheenTint),this.sheenRoughness=r.sheenRoughness,this.transmission=r.transmission,this.transmissionMap=r.transmissionMap,this.thickness=r.thickness,this.thicknessMap=r.thicknessMap,this.attenuationDistance=r.attenuationDistance,this.attenuationTint.copy(r.attenuationTint),this.specularIntensity=r.specularIntensity,this.specularIntensityMap=r.specularIntensityMap,this.specularTint.copy(r.specularTint),this.specularTintMap=r.specularTintMap,this}}).prototype.isMeshPhysicalMaterial=!0;(class extends Ze{constructor(r){super(),this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.specular.copy(r.specular),this.shininess=r.shininess,this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this.flatShading=r.flatShading,this}}).prototype.isMeshPhongMaterial=!0;(class extends Ze{constructor(r){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.gradientMap=r.gradientMap,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.alphaMap=r.alphaMap,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this}}).prototype.isMeshToonMaterial=!0;(class extends Ze{constructor(r){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.flatShading=r.flatShading,this}}).prototype.isMeshNormalMaterial=!0;(class extends Ze{constructor(r){super(),this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this}}).prototype.isMeshLambertMaterial=!0;(class extends Ze{constructor(r){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new he(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.defines={MATCAP:""},this.color.copy(r.color),this.matcap=r.matcap,this.map=r.map,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.alphaMap=r.alphaMap,this.flatShading=r.flatShading,this}}).prototype.isMeshMatcapMaterial=!0;(class extends Ti{constructor(r){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(r)}copy(r){return super.copy(r),this.scale=r.scale,this.dashSize=r.dashSize,this.gapSize=r.gapSize,this}}).prototype.isLineDashedMaterial=!0;const Ce={arraySlice:function(r,e,t){return Ce.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){const e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let p=0;p<c.times.length;++p){const m=c.times[p]*i;if(!(m<t||m>=n)){d.push(c.times[p]);for(let g=0;g<h;++g)u.push(c.values[p*h+g])}}d.length!==0&&(c.times=Ce.convertArray(d,c.times.constructor),c.values=Ce.convertArray(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const m=o.times.length-1;let g;if(s<=o.times[0]){const f=h,_=d-h;g=Ce.arraySlice(o.values,f,_)}else if(s>=o.times[m]){const f=m*d+h,_=f+d-h;g=Ce.arraySlice(o.values,f,_)}else{const f=o.createInterpolant(),_=h,x=d-h;f.evaluate(s),g=Ce.arraySlice(f.resultBuffer,_,x)}l==="quaternion"&&new nt().fromArray(g).normalize().conjugate().toArray(g);const v=c.times.length;for(let f=0;f<v;++f){const _=f*p+u;if(l==="quaternion")nt.multiplyQuaternionsFlat(c.values,_,g,0,c.values,_);else{const x=p-2*u;for(let y=0;y<x;++y)c.values[_+y]-=g[y]}}}return r.blendMode=2501,r}};class Wt{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=s)break e;{const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Wt.prototype.beforeStart_=Wt.prototype.copySampleValue_,Wt.prototype.afterEnd_=Wt.prototype.copySampleValue_;class ld extends Wt{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nn,endingEnd:Nn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zn:s=e,o=2*t-n;break;case mr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zn:a=e,l=2*n-t;break;case mr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),g=m*m,v=g*m,f=-u*v+2*u*g-u*m,_=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*m+1,x=(-1-p)*v+(1.5+p)*g+.5*m,y=p*v-p*g;for(let T=0;T!==o;++T)s[T]=f*a[h+T]+_*a[c+T]+x*a[l+T]+y*a[d+T];return s}}class Ml extends Wt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class cd extends Wt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class St{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ce.convertArray(t,this.TimeBufferType),this.values=Ce.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ce.convertArray(e.times,Array),values:Ce.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ld(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Pr:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Pr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Ce.arraySlice(n,s,a),this.values=Ce.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ce.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ce.arraySlice(this.times),t=Ce.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Pr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){const m=t[h+p];if(m!==t[d+p]||m!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ce.arraySlice(e,0,a),this.values=Ce.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ce.arraySlice(this.times,0),t=Ce.arraySlice(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}St.prototype.TimeBufferType=Float32Array,St.prototype.ValueBufferType=Float32Array,St.prototype.DefaultInterpolation=pr;class In extends St{}In.prototype.ValueTypeName="bool",In.prototype.ValueBufferType=Array,In.prototype.DefaultInterpolation=dr,In.prototype.InterpolantFactoryMethodLinear=void 0,In.prototype.InterpolantFactoryMethodSmooth=void 0;class bl extends St{}bl.prototype.ValueTypeName="color";class fr extends St{}fr.prototype.ValueTypeName="number";class hd extends Wt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)nt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class xi extends St{InterpolantFactoryMethodLinear(e){return new hd(this.times,this.values,this.getValueSize(),e)}}xi.prototype.ValueTypeName="quaternion",xi.prototype.DefaultInterpolation=pr,xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Dn extends St{}Dn.prototype.ValueTypeName="string",Dn.prototype.ValueBufferType=Array,Dn.prototype.DefaultInterpolation=dr,Dn.prototype.InterpolantFactoryMethodLinear=void 0,Dn.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends St{}gr.prototype.ValueTypeName="vector";class To{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ud(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(St.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ce.getKeyframeOrder(l);l=Ce.sortedArray(l,1,h),c=Ce.sortedArray(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new fr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,u,p,m){if(u.length!==0){const g=[],v=[];Ce.flattenJSON(u,g,v,p),g.length!==0&&m.push(new h(d,g,v))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(d&&d.length!==0)if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let m=0;m<d[p].morphTargets.length;m++)u[d[p].morphTargets[m]]=-1;for(const m in u){const g=[],v=[];for(let f=0;f!==d[p].morphTargets.length;++f){const _=d[p];g.push(_.time),v.push(_.morphTarget===m?1:0)}i.push(new fr(".morphTargetInfluence["+m+"]",g,v))}l=u.length*(a||1)}else{const u=".bones["+t[h].name+"]";n(gr,u+".position",d,"pos",i),n(xi,u+".quaternion",d,"rot",i),n(gr,u+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ud(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return gr;case"color":return bl;case"quaternion":return xi;case"bool":case"boolean":return In;case"string":return Dn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){const t=[],n=[];Ce.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const jn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},dd=new class{constructor(r,e,t){const n=this;let i,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=r,this.onProgress=e,this.onError=t,this.itemStart=function(c){o++,s===!1&&n.onStart!==void 0&&n.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return i?i(c):c},this.setURLModifier=function(c){return i=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){const u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return p}return null}}};class Zt{constructor(e){this.manager=e!==void 0?e:dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const vt={};class pd extends Zt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;if(vt[e]!==void 0)return void vt[e].push({onLoad:t,onProgress:n,onError:i});const o=e.match(/^data:(.*?)(;base64)?,(.*)$/);let l;if(o){const c=o[1],h=!!o[2];let d=o[3];d=decodeURIComponent(d),h&&(d=atob(d));try{let u;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const m=new Uint8Array(d.length);for(let v=0;v<d.length;v++)m[v]=d.charCodeAt(v);u=p==="blob"?new Blob([m.buffer],{type:c}):m.buffer;break;case"document":u=new DOMParser().parseFromString(d,c);break;case"json":u=JSON.parse(d);break;default:u=d}setTimeout(function(){t&&t(u),s.manager.itemEnd(e)},0)}catch(u){setTimeout(function(){i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{vt[e]=[],vt[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(c){const h=this.response,d=vt[e];if(delete vt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),jn.add(e,h);for(let u=0,p=d.length;u<p;u++){const m=d[u];m.onLoad&&m.onLoad(h)}s.manager.itemEnd(e)}else{for(let u=0,p=d.length;u<p;u++){const m=d[u];m.onError&&m.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(c){const h=vt[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onProgress&&p.onProgress(c)}},!1),l.addEventListener("error",function(c){const h=vt[e];delete vt[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),l.addEventListener("abort",function(c){const h=vt[e];delete vt[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const c in this.requestHeader)l.setRequestHeader(c,this.requestHeader[c]);l.send(null)}return s.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wl extends Zt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),jn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class md extends Zt{constructor(e){super(e)}load(e,t,n,i){const s=new wr,a=new wl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class fd extends Zt{constructor(e){super(e)}load(e,t,n,i){const s=new je,a=new wl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Tt extends Me{constructor(e,t=1){super(),this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Tt.prototype.isLight=!0;(class extends Tt{constructor(r,e,t){super(r,t),this.type="HemisphereLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.groundColor=new he(e)}copy(r){return Tt.prototype.copy.call(this,r),this.groundColor.copy(r.groundColor),this}}).prototype.isHemisphereLight=!0;const Eo=new de,Ao=new S,Lo=new S;class js{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ao),Lo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lo),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sl extends js{constructor(){super(new tt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=2*bi*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Sl.prototype.isSpotLightShadow=!0;(class extends Tt{constructor(r,e,t=0,n=Math.PI/3,i=0,s=1){super(r,e),this.type="SpotLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.distance=t,this.angle=n,this.penumbra=i,this.decay=s,this.shadow=new Sl}get power(){return this.intensity*Math.PI}set power(r){this.intensity=r/Math.PI}dispose(){this.shadow.dispose()}copy(r){return super.copy(r),this.distance=r.distance,this.angle=r.angle,this.penumbra=r.penumbra,this.decay=r.decay,this.target=r.target.clone(),this.shadow=r.shadow.clone(),this}}).prototype.isSpotLight=!0;const Ro=new de,li=new S,us=new S;class Tl extends js{constructor(){super(new tt(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),li.setFromMatrixPosition(e.matrixWorld),n.position.copy(li),us.copy(n.position),us.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(us),n.updateMatrixWorld(),i.makeTranslation(-li.x,-li.y,-li.z),Ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro)}}Tl.prototype.isPointLightShadow=!0;(class extends Tt{constructor(r,e,t=0,n=1){super(r,e),this.type="PointLight",this.distance=t,this.decay=n,this.shadow=new Tl}get power(){return 4*this.intensity*Math.PI}set power(r){this.intensity=r/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(r){return super.copy(r),this.distance=r.distance,this.decay=r.decay,this.shadow=r.shadow.clone(),this}}).prototype.isPointLight=!0;class El extends js{constructor(){super(new Ns(-5,5,5,-5,.5,500))}}El.prototype.isDirectionalLightShadow=!0;(class extends Tt{constructor(r,e){super(r,e),this.type="DirectionalLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.shadow=new El}dispose(){this.shadow.dispose()}copy(r){return super.copy(r),this.target=r.target.clone(),this.shadow=r.shadow.clone(),this}}).prototype.isDirectionalLight=!0;(class extends Tt{constructor(r,e){super(r,e),this.type="AmbientLight"}}).prototype.isAmbientLight=!0;(class extends Tt{constructor(r,e,t=10,n=10){super(r,e),this.type="RectAreaLight",this.width=t,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(r){this.intensity=r/(this.width*this.height*Math.PI)}copy(r){return super.copy(r),this.width=r.width,this.height=r.height,this}toJSON(r){const e=super.toJSON(r);return e.object.width=this.width,e.object.height=this.height,e}}).prototype.isRectAreaLight=!0;class Al{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],n*s*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Al.prototype.isSphericalHarmonics3=!0;class qs extends Tt{constructor(e=new Al,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}qs.prototype.isLightProbe=!0;class gd{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}(class extends Ee{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(r){return super.copy(r),this.instanceCount=r.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const r=super.toJSON(this);return r.instanceCount=this.instanceCount,r.isInstancedBufferGeometry=!0,r}}).prototype.isInstancedBufferGeometry=!0;let ds;(class extends Zt{constructor(r){super(r),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(r){return this.options=r,this}load(r,e,t,n){r===void 0&&(r=""),this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);const i=this,s=jn.get(r);if(s!==void 0)return i.manager.itemStart(r),setTimeout(function(){e&&e(s),i.manager.itemEnd(r)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(r,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){jn.add(r,o),e&&e(o),i.manager.itemEnd(r)}).catch(function(o){n&&n(o),i.manager.itemError(r),i.manager.itemEnd(r)}),i.manager.itemStart(r)}}).prototype.isImageBitmapLoader=!0;const vd=function(){return ds===void 0&&(ds=new(window.AudioContext||window.webkitAudioContext)),ds};class xd extends Zt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pd(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);vd().decodeAudioData(l,function(c){t(c)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}(class extends qs{constructor(r,e,t=1){super(void 0,t);const n=new he().set(r),i=new he().set(e),s=new S(n.r,n.g,n.b),a=new S(i.r,i.g,i.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}}).prototype.isHemisphereLightProbe=!0;(class extends qs{constructor(r,e=1){super(void 0,e);const t=new he().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}}).prototype.isAmbientLightProbe=!0;class yd{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;nt.multiplyQuaternionsFlat(e,a,e,t,e,n),nt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Xs="\\[\\]\\.:\\/",_d=new RegExp("["+Xs+"]","g"),Ys="[^"+Xs+"]",Md="[^"+Xs.replace("\\.","")+"]",bd=/((?:WC+[\/:])*)/.source.replace("WC",Ys),wd=/(WCOD+)?/.source.replace("WCOD",Md),Sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ys),Td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ys),Ed=new RegExp("^"+bd+wd+Sd+Td+"$"),Ad=["material","materials","bones"];class Se{constructor(e,t,n){this.path=t,this.parsedPath=n||Se.parseTrackName(t),this.node=Se.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Se.Composite(e,t,n):new Se(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_d,"")}static parseTrackName(e){const t=Ed.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ad.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Se.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Se.Composite=class{constructor(r,e,t){const n=t||Se.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray],Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ld{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Nn,endingEnd:Nn};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===2202;if(e===0)return s===-1?i:a&&(1&s)==1?t-i:i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&s)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zn,i.endingEnd=zn):(i.endingStart=e?this.zeroSlopeAtStart?zn:Nn:mr,i.endingEnd=t?this.zeroSlopeAtEnd?zn:Nn:mr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}(class extends un{constructor(r){super(),this._root=r,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(r,e){const t=r._localRoot||this._root,n=r._clip.tracks,i=n.length,s=r._propertyBindings,a=r._interpolants,o=t.uuid,l=this._bindingsByRootAndName;let c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==i;++h){const d=n[h],u=d.name;let p=c[u];if(p!==void 0)s[h]=p;else{if(p=s[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,u));continue}const m=e&&e._propertyBindings[h].binding.parsedPath;p=new yd(Se.create(t,u,m),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,u),s[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(r){if(!this._isActiveAction(r)){if(r._cacheIndex===null){const t=(r._localRoot||this._root).uuid,n=r._clip.uuid,i=this._actionsByClip[n];this._bindAction(r,i&&i.knownActions[0]),this._addInactiveAction(r,n,t)}const e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const i=e[t];i.useCount++==0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(r)}}_deactivateAction(r){if(this._isActiveAction(r)){const e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const i=e[t];--i.useCount==0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(r)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const r=this;this.stats={actions:{get total(){return r._actions.length},get inUse(){return r._nActiveActions}},bindings:{get total(){return r._bindings.length},get inUse(){return r._nActiveBindings}},controlInterpolants:{get total(){return r._controlInterpolants.length},get inUse(){return r._nActiveControlInterpolants}}}}_isActiveAction(r){const e=r._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(r,e,t){const n=this._actions,i=this._actionsByClip;let s=i[e];if(s===void 0)s={knownActions:[r],actionByRoot:{}},r._byClipCacheIndex=0,i[e]=s;else{const a=s.knownActions;r._byClipCacheIndex=a.length,a.push(r)}r._cacheIndex=n.length,n.push(r),s.actionByRoot[t]=r}_removeInactiveAction(r){const e=this._actions,t=e[e.length-1],n=r._cacheIndex;t._cacheIndex=n,e[n]=t,e.pop(),r._cacheIndex=null;const i=r._clip.uuid,s=this._actionsByClip,a=s[i],o=a.knownActions,l=o[o.length-1],c=r._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),r._byClipCacheIndex=null,delete a.actionByRoot[(r._localRoot||this._root).uuid],o.length===0&&delete s[i],this._removeInactiveBindingsForAction(r)}_removeInactiveBindingsForAction(r){const e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const i=e[t];--i.referenceCount==0&&this._removeInactiveBinding(i)}}_lendAction(r){const e=this._actions,t=r._cacheIndex,n=this._nActiveActions++,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_takeBackAction(r){const e=this._actions,t=r._cacheIndex,n=--this._nActiveActions,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_addInactiveBinding(r,e,t){const n=this._bindingsByRootAndName,i=this._bindings;let s=n[e];s===void 0&&(s={},n[e]=s),s[t]=r,r._cacheIndex=i.length,i.push(r)}_removeInactiveBinding(r){const e=this._bindings,t=r.binding,n=t.rootNode.uuid,i=t.path,s=this._bindingsByRootAndName,a=s[n],o=e[e.length-1],l=r._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[i],Object.keys(a).length===0&&delete s[n]}_lendBinding(r){const e=this._bindings,t=r._cacheIndex,n=this._nActiveBindings++,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_takeBackBinding(r){const e=this._bindings,t=r._cacheIndex,n=--this._nActiveBindings,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_lendControlInterpolant(){const r=this._controlInterpolants,e=this._nActiveControlInterpolants++;let t=r[e];return t===void 0&&(t=new Ml(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),t.__cacheIndex=e,r[e]=t),t}_takeBackControlInterpolant(r){const e=this._controlInterpolants,t=r.__cacheIndex,n=--this._nActiveControlInterpolants,i=e[n];r.__cacheIndex=n,e[n]=r,i.__cacheIndex=t,e[t]=i}clipAction(r,e,t){const n=e||this._root,i=n.uuid;let s=typeof r=="string"?To.findByName(n,r):r;const a=s!==null?s.uuid:r,o=this._actionsByClip[a];let l=null;if(t===void 0&&(t=s!==null?s.blendMode:Kc),o!==void 0){const h=o.actionByRoot[i];if(h!==void 0&&h.blendMode===t)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new Ld(this,s,e,t);return this._bindAction(c,l),this._addInactiveAction(c,a,i),c}existingAction(r,e){const t=e||this._root,n=t.uuid,i=typeof r=="string"?To.findByName(t,r):r,s=i?i.uuid:r,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const r=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)r[e].stop();return this}update(r){r*=this.timeScale;const e=this._actions,t=this._nActiveActions,n=this.time+=r,i=Math.sign(r),s=this._accuIndex^=1;for(let l=0;l!==t;++l)e[l]._update(n,r,i,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(r){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(r)}getRoot(){return this._root}uncacheClip(r){const e=this._actions,t=r.uuid,n=this._actionsByClip,i=n[t];if(i!==void 0){const s=i.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const c=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,e[c]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[t]}}uncacheRoot(r){const e=r.uuid,t=this._actionsByClip;for(const i in t){const s=t[i].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const n=this._bindingsByRootAndName[e];if(n!==void 0)for(const i in n){const s=n[i];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(r,e){const t=this.existingAction(r,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}}).prototype._controlInterpolantsResultBuffer=new Float32Array(1);(class extends wi{constructor(r,e,t=1){super(r,e),this.meshPerAttribute=t}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){const e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){const e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}).prototype.isInstancedInterleavedBuffer=!0;(class extends Me{constructor(r){super(),this.material=r,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}).prototype.isImmediateRenderObject=!0;const Ht=new S,lr=new de,ps=new de;function Ll(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ll(r.children[t]));return e}const Rd=new Float32Array(1);function Cd(r){const e=new Yn(1,1,1),t=new br({color:16777215,wireframe:!0}),n=new Je(e,t),[i,s,a]=Array(3).fill().map(()=>ih.randFloatSpread(500));n.position.set(i,s,a),n.userData.rx=.01*Math.random()-.005,n.userData.ry=.01*Math.random()-.005,n.userData.rz=.01*Math.random()-.005,r.add(n)}function Pd(r,e){window.addEventListener("resize",function(){r.setSize(window.innerWidth,window.innerHeight),e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix()})}new Int32Array(Rd.buffer),ut.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(ut.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r},As.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)},class extends Ts{constructor(r=10,e=10,t=4473924,n=8947848){t=new he(t),n=new he(n);const i=e/2,s=r/e,a=r/2,o=[],l=[];for(let h=0,d=0,u=-a;h<=e;h++,u+=s){o.push(-a,0,u,a,0,u),o.push(u,0,-a,u,0,a);const p=h===i?t:n;p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3}const c=new Ee;c.setAttribute("position",new be(o,3)),c.setAttribute("color",new be(l,3)),super(c,new Ti({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},class extends Ts{constructor(r){const e=Ll(r),t=new Ee,n=[],i=[],s=new he(0,0,1),a=new he(0,1,0);for(let o=0;o<e.length;o++){const l=e[o];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(s.r,s.g,s.b),i.push(a.r,a.g,a.b))}t.setAttribute("position",new be(n,3)),t.setAttribute("color",new be(i,3)),super(t,new Ti({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){const e=this.bones,t=this.geometry,n=t.getAttribute("position");ps.copy(this.root.matrixWorld).invert();for(let i=0,s=0;i<e.length;i++){const a=e[i];a.parent&&a.parent.isBone&&(lr.multiplyMatrices(ps,a.matrixWorld),Ht.setFromMatrixPosition(lr),n.setXYZ(s,Ht.x,Ht.y,Ht.z),lr.multiplyMatrices(ps,a.parent.matrixWorld),Ht.setFromMatrixPosition(lr),n.setXYZ(s+1,Ht.x,Ht.y,Ht.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}}.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Zt.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),gd.extractUrlBase(r)},Zt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},xt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)},xt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},xt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},xt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},xt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)},Xn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Sr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)},We.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},We.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},We.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},We.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},We.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},We.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},de.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)},de.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},de.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)},de.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)},de.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},de.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},de.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},de.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},de.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)},de.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},de.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},de.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},de.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},de.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},de.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},de.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},de.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},de.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)},de.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},Pt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)},nt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)},nt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Gn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},Gn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)},Gn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},ze.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},ze.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)},ze.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)},ze.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)},ze.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)},ze.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ze.getBarycoord(r,e,t,n,i)},ze.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ze.getNormal(r,e,t,n)},vi.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)},vi.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Bn(this,r)},vi.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ws(this,r)},J.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},J.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},S.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)},S.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)},S.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)},S.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)},S.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},S.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Le.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},Le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Me.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)},Me.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Me.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)},Me.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Me.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(Me.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Je.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Je.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),ol.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},tt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)},Object.defineProperties(Tt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}}),Object.defineProperties(Be.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ci},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ci)}}}),Be.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ci:Mi),this},Be.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Be.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Ee.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)},Ee.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Be(arguments[1],arguments[2])))},Ee.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)},Ee.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},Ee.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},Ee.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)},Ee.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(Ee.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),wi.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ci:Mi),this},wi.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Bn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Bn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Bn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},rl.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(Ze.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new he}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(cn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}}),Ae.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)},Ae.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)},Ae.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ae.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ae.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ae.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ae.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ae.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ae.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ae.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ae.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ae.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ae.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ae.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ae.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)},Ae.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ae.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ae.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ae.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ae.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ae.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ae.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ae.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ae.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ae.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ae.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?hn:Xe}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(nl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(wt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}}),class extends Me{constructor(r){super(),this.type="Audio",this.listener=r,this.context=r.context,this.gain=this.context.createGain(),this.gain.connect(r.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(r){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=r,this.connect(),this}setMediaElementSource(r){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(r),this.connect(),this}setMediaStreamSource(r){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(r),this.connect(),this}setBuffer(r){return this.buffer=r,this.sourceType="buffer",this.autoplay&&this.play(),this}play(r=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+r;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let r=1,e=this.filters.length;r<e;r++)this.filters[r-1].connect(this.filters[r]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let r=1,e=this.filters.length;r<e;r++)this.filters[r-1].disconnect(this.filters[r]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(r){return r||(r=[]),this._connected===!0?(this.disconnect(),this.filters=r.slice(),this.connect()):this.filters=r.slice(),this}setDetune(r){if(this.detune=r,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(r){return this.setFilters(r?[r]:[])}setPlaybackRate(r){if(this.hasPlaybackControl!==!1)return this.playbackRate=r,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(r){if(this.hasPlaybackControl!==!1)return this.loop=r,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(r){return this.loopStart=r,this}setLoopEnd(r){return this.loopEnd=r,this}getVolume(){return this.gain.gain.value}setVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}}.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new xd().load(r,function(t){e.setBuffer(t)}),this},bs.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)},bs.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)},Pn.crossOrigin=void 0,Pn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new fd;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},Pn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new md;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},Pn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Pn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"133"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="133");export{hi as G,gl as I,br as M,tt as P,rl as S,xl as T,Ae as W,Je as a,vl as b,Pd as c,yl as d,Cd as r};
