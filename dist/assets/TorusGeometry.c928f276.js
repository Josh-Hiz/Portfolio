import{B as j,V as w,F as y}from"./utils.8c864b2f.js";class I extends j{constructor(t=1,i=.4,h=8,o=6,v=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:h,tubularSegments:o,arc:v},h=Math.floor(h),o=Math.floor(o);const p=[],z=[],A=[],M=[],x=new w,n=new w,f=new w;for(let s=0;s<=h;s++)for(let c=0;c<=o;c++){const r=c/o*v,e=s/h*Math.PI*2;n.x=(t+i*Math.cos(e))*Math.cos(r),n.y=(t+i*Math.cos(e))*Math.sin(r),n.z=i*Math.sin(e),z.push(n.x,n.y,n.z),x.x=t*Math.cos(r),x.y=t*Math.sin(r),f.subVectors(n,x).normalize(),A.push(f.x,f.y,f.z),M.push(c/o),M.push(s/h)}for(let s=1;s<=h;s++)for(let c=1;c<=o;c++){const r=(o+1)*s+c-1,e=(o+1)*(s-1)+c-1,V=(o+1)*(s-1)+c,B=(o+1)*s+c;p.push(r,e,B),p.push(e,V,B)}this.setIndex(p),this.setAttribute("position",new y(z,3)),this.setAttribute("normal",new y(A,3)),this.setAttribute("uv",new y(M,2))}static fromJSON(t){return new I(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}export{I as T};