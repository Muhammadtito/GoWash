((t,e)=>{"use strict";const r=new IntersectionObserver(((t,e)=>{for(let r=t.length-1;r>-1;--r)if(!0===t[r].isIntersecting){let s=t[r].target,o=s.tfClass("tf_fa");e.unobserve(s),requestAnimationFrame((()=>{for(let t=o.length-1;t>-1;--t)o[t].style.transitionDelay=40*(t+1)+"ms";s.classList.add("tb_star_animate")}))}}),{thresholds:1});t.on("builder_load_module_partial",((t,s)=>{if(!0===s&&!t.classList.contains("module-star"))return;const o=(t||e).tfClass("tb_star_item");for(let t=o.length-1;t>-1;--t)r.observe(o[t])}))})(Themify,document);