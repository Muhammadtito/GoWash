(($,c,t)=>{"use strict";const e=e=>{const i=e.target?.closest(".tf_wc_acc_title");if(i){e.preventDefault(),e.stopPropagation();const _=i.closest("li"),n=_.tfClass("tf_wc_acc_content")[0],a=_.classList;if(a.contains("active"))a.remove("active"),$(n).slideUp();else{const c=_.parentNode.tfClass("active")[0];c&&(c.classList.remove("active"),$(c.querySelector(".tf_wc_acc_content")).slideUp()),a.add("active"),$(n).slideDown()}c.trigger("tfsmartresize",{w:c.w,h:c.h}),$(t).triggerHandler("resize")}};c.on("tf_wc_acc_tabs_init",(t=>{t.tfOff(c.click,e).tfOn(c.click,e)})),t.tfOn("hashchange",(e=>{const i=t.location.hash.replace("#","");if(i){const e=document.querySelector(".tf_wc_acc_content #"+CSS.escape(i));if(e){const i=e.closest(".tf_wc_acc_content").closest("li");i.classList.contains("active")||c.triggerEvent(i.tfClass("tf_wc_acc_title")[0],c.click),c.scrollTo(i.getBoundingClientRect().top),t.location.hash="",t.history.replaceState("","",t.location.pathname)}}}),{passive:!0})})(jQuery,Themify,window);