(()=>{"use strict";!0===window.matchMedia("(prefers-reduced-motion: reduce)")||window.matchMedia("(prefers-reduced-motion: reduce)").matches,window.location.href.includes("webflow.io")||(document.addEventListener("contextmenu",(e=>e.preventDefault())),document.addEventListener("copy",(e=>e.preventDefault()))),function(){const e=document.querySelector(".burgermenu"),t=document.querySelector('[data-trigger="burger"]'),n=document.querySelector(".burgermenubutton"),i=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scroll-bar-width",`${i}px`),t.addEventListener("click",(function(){e.classList.add("opened"),document.documentElement.classList.add("scroll-blocked")})),n.addEventListener("click",(function(){e.classList.remove("opened"),document.documentElement.classList.remove("scroll-blocked")}))}(),function(){if("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)return;const e=window.devicePixelRatio||1,t=document.createElement("canvas");t.classList.add("cursor-canvas");const n=t.getContext("2d");document.body.appendChild(t);const i=document.querySelectorAll('a, [data-animation="cursor-hover"]'),o={width:window.innerWidth,height:window.innerHeight},d={x:o.width/2,y:o.height/2},a={radius:6,targetRadius:6,lastX:d.x,lastY:d.y};let r;function c(){o.width=t.width=window.innerWidth*e,o.height=t.height=window.innerHeight*e,e>1&&n.scale(e,e)}function s(e,t,n){return(1-n)*e+n*t}c(),requestAnimationFrame((function e(t){r||(r=t);const i=.01*(t-r);a.lastX=s(a.lastX,d.x,i),a.lastY=s(a.lastY,d.y,i),function(e){a.radius=function(e,t,n){const i=t-e,o=.8*Math.sign(i)*Math.cbrt(.05*n*Math.abs(i)*Math.abs(i));return Math.abs(o)<.1?t:e+o}(a.radius,a.targetRadius,e)}(i),n.fillStyle="white",n.clearRect(0,0,o.width,o.height),n.beginPath(),n.arc(a.lastX,a.lastY,a.radius,0,2*Math.PI,!1),n.fill(),n.closePath(),r=t,requestAnimationFrame(e)})),window.addEventListener("mousemove",(e=>{d.x=e.clientX,d.y=e.clientY})),window.addEventListener("resize",c,!1),i.forEach((e=>{e.addEventListener("mouseenter",(()=>a.targetRadius=14),!1),e.addEventListener("mouseleave",(()=>a.targetRadius=6),!1)}))}()})();