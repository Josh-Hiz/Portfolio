import{S as y,P as f,W as m,T as d,M as i,a as w,I as u,b as P,G as p,r as x,c as I}from"./utils.c0190130.js";new Array;const e=new y,a=new f(80,window.innerWidth/window.innerHeight,.1,1e3),o=new m({canvas:document.querySelector("#background")});o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),a.position.setZ(50),a.position.setY(0),o.render(e,a);const s=new w(new d(15,.4,3,100),new i({color:16777215,wireframe:!1}));s.rotateX(90*Math.PI/180),e.add(s);const t=new w(new d(20,.4,3,100),new i({color:16777215,wireframe:!1}));t.rotateX(45*Math.PI/180),t.rotateY(135*Math.PI/180),e.add(t);const r=new w(new d(25,.4,3,100),new i({color:16777215,wireframe:!1}));r.rotateX(45*Math.PI/180),r.rotateY(45*Math.PI/180),e.add(r);const h=new w(new u(10,0),new i({color:16777215,wireframe:!0,transparent:!0,opacity:.5}));e.add(h);const M=new w(new P(3.25,25,9),new i({color:16753920,wireframe:!1,transparent:!0,opacity:.7}));e.add(M);const c=new p;e.add(c),Array(1500).fill().forEach(()=>x(c));const l=function(){requestAnimationFrame(l),c.children.forEach(n=>{n.rotation.x+=n.userData.rx,n.rotation.y+=n.userData.ry,n.rotation.z+=n.userData.rz}),s.rotation.y+=.005,s.rotation.x+=.015,t.rotation.x+=.01,t.rotation.y+=.005,r.rotation.y+=.005,r.rotation.x+=.005,h.rotation.y+=.001,o.render(e,a)};l(),I(o,a);