let ThemifyBuilderPage;((t,e,s)=>{"use strict";const i=t.click,n={credentials:"omit",method:"GET",mode:"cors"},l=new IntersectionObserver(((t,s)=>{for(let i=t.length-1;i>-1;--i)if(!0===t[i].isIntersecting){s.unobserve(t[i].target);let n=t[i].target,l=new Image(300,348),o=e.createElement("div"),a=n.tfTag("img")[0],r=a.dataset.src;o.className="tf_loader tf_abs_c",l.decoding="async",l.src=r,l.title=l.alt=a.alt,n.appendChild(o),l.decode().catch((()=>{})).finally((()=>{a.replaceWith(l),o.remove()}))}}),{threshold:.1});ThemifyBuilderPage={el:null,layoutsList:()=>t.fetch("",null,n,s.layouts.predesigned.url+"index.json"),savedList:()=>t.fetch({action:"tb_get_save_custom_layout",nonce:s.nonce,bid:0}),publish:e=>(e.set("nonce",s.nonce),e.set("action","tb_builder_page_publish"),t.fetch(e).then((t=>{if(!t.success)throw t.error;window.location=t.data}))),getIcon(t){const s="http://www.w3.org/2000/svg",i=e.createElementNS(s,"use"),n=e.createElementNS(s,"svg");return t="tf-"+t.trim().replace(" ","-"),n.setAttribute("class","tf_fa "+t),i.setAttributeNS(null,"href","#"+t),n.appendChild(i),n},renderLayouts(n,o=!0){const a=new Set,r=s.i18n.preview,h=this.getIcon("ti-search"),c=e.createElement("ul"),_=e.createDocumentFragment(),b=e.createElement("li");b.textContent=s.i18n.all,_.appendChild(b),o&&n.unshift({slug:"blank",title:s.i18n.blank});for(let s=0;s<n.length;++s){let i=n[s],o=e.createElement("li"),b=e.createElement("div"),d=e.createElement("div"),f=new Image(300,348);if(i.category&&(o.dataset.category=i.category),o.dataset.slug=i.slug,b.className="thumb tf_rel",f.loading="lazy",f.decoding="async",f.src="blank"===i.slug?t.builder_url+"img/blank-layout.webp":"https://placehold.co/300x348.webp?text="+encodeURI(i.title),f.alt=f.title=i.title,i.thumbnail&&(f.dataset.src=i.thumbnail,l.observe(b)),d.className="title",d.textContent=i.title,i.url){let t=e.createElement("a");t.className="link tf_box",t.href=i.url,t.target="_blank",t.title=r,t.appendChild(h.cloneNode(!0)),b.appendChild(t)}if(b.appendChild(f),o.append(b,d),c.appendChild(o),i.category){let t=(""+i.category).split(",");for(let s=0;s<t.length;++s)if(""!==t[s]&&!a.has(t[s])){let i=e.createElement("li");i.textContent=t[s],_.appendChild(i),a.add(t[s])}}}return c.tfOn(i,(t=>{const e=t.target.closest("li");e&&this.select(e)}),{passive:!0}).className="content",{items:c,cats:_}},dropDown:()=>t.fetch({action:"tb_builder_page_dropdown",nonce:s.nonce},"html"),render(t,n,l){const o=e.createElement("form"),a=e.createElement("div"),r=e.createElement("button"),h=e.createElement("button"),c=e.createElement("span"),_=e.createElement("div"),b=e.createElement("input"),d=e.createElement("div"),f=e.createElement("div"),u=e.createElement("div"),p=e.createElement("button"),v=e.createElement("ul"),m=e.createElement("input"),w=e.createElement("div"),g=this.renderLayouts(t),y=e.createElement("div"),k=e.createElement("div"),x=e.createElement("div"),I=e.createElement("div"),T=e.createElement("div"),L=e.createElement("a"),P=e.createElement("a");o.method="POST",a.className="top",w.className="wrapper tf_scrollbar tf_overflow tf_box",r.type="submit",p.type=h.type="button",r.className="submit",m.type=b.type="text",_.className="header",b.className="post_title",b.name="post_title",b.required=!0,d.className="parent",f.className="sticky",u.className="category tf_rel",p.className="filter_label tf_rel",c.textContent=s.i18n.cancel,r.textContent=s.i18n.publish,p.textContent=s.i18n.all,b.placeholder=s.i18n.title,m.placeholder=s.i18n.search,h.appendChild(c),o.tfOn("submit",(t=>{t.preventDefault(),this.submit(t.currentTarget)})).className="tf_h",m.tfOn("input",(t=>{this.filter(v.firstElementChild),this.search(t.currentTarget.value)}),{passive:!0}).className="search",v.tfOn(i,(t=>{"LI"===t.target.tagName&&(this.clearSearch(t.target),this.filter(t.target))}),{passive:!0}).className="filter tf_scrollbar tf_abs_t tf_overflow tf_opacity tf_box",h.tfOn(i,(()=>{this.close()}),{passive:!0}).className="tf_close",a.append(h,r),d.appendChild(l),_.append(b,d),v.appendChild(g.cats),u.append(p,v),f.append(u,m),y.className="tb_tabs",k.className="tb_tab_nav tf_clearfix",["predesigned","saved"].forEach(((t,n)=>{const l=e.createElement("li"),o=e.createElement("a");l.className="tab_title"+(0===n?" current":""),o.href="#",o.dataset.id="tb_tabs_"+t,o.textContent=s.i18n[t],l.appendChild(o),k.appendChild(l),o.tfOn(i,(()=>{const t=y.tfClass("tb_tab");for(let e=t.length-1;e>-1;--e)t[e].style.display=t[e].id===o.dataset.id?"block":"none",k.querySelector('[data-id="'+t[e].id+'"]').parentElement.classList.toggle("current",t[e].id===o.dataset.id)}),{passive:!0})})),x.className=I.className="tb_tab tf_clear",x.id="tb_tabs_predesigned",I.id="tb_tabs_saved",I.style.display="none",x.append(f,g.items),L.className=P.className="add_new tf_plus_icon tb_icon_btn tf_rel",L.href=s.add_layout_link,L.target=P.target="_blank",L.textContent=s.i18n.add_layout,P.href=s.manage_layout_link,P.textContent=s.i18n.manage_layout,T.className="links_wrap",T.append(L,P),I.append(this.renderLayouts(n,!1).items,T),y.append(k,x,I),w.append(_,y),o.append(a,w),this.el.classList.add("tf_abs_c","tf_overflow","tf_box"),this.el.appendChild(o),setTimeout((()=>{b.focus()}),30)},submit(e){const i=new FormData(e),l=i.get("post_title"),o=this.el.tfClass("selected")[0],a=o?.dataset.slug;if(l)if(this.showLoader(),!a||"blank"===a||o.closest("#tb_tabs_saved"))a&&"blank"!==a&&i.set("slug",a),this.publish(i).finally((()=>{this.showLoader("hide"),this.close()}));else{const e=s.layouts.predesigned.url+a+".json";t.fetch("",null,n,e).then((e=>{const l={builder_data:e},o=t=>{i.set("layout",JSON.stringify(t)),this.publish(i).finally((()=>{this.showLoader("hide"),this.close()}))};JSON.stringify(e).includes("global_styles")?t.fetch("",null,n,s.layouts.predesigned.url+a+"-gs.json").then((t=>{l.used_gs=t})).finally((()=>{o(l)})):o(l)})).catch((()=>{this.showLoader("hide"),alert(s.i18n.layout_error.replace("{FILE}",e))}))}},showLoader(t="show"){this.el.getRootNode().querySelector(".spinner").style.display="show"===t?"":"none"},show(){this.el.style.setProperty("transform","translate(-50%,100%)"),this.el.style.display="",setTimeout((()=>{this.el.style.setProperty("transform","")}),20)},close(){this.el.tfOn("transitionend",(function(){this.style.display="none"}),{passive:!0,once:!0}).style.setProperty("transform","translate(-50%, 100%)")},filter(t){if(!t.classList.contains("current")){const e=this.el.tfClass("content")[0].children,s=t.classList.contains("all"),i=t.parentNode,n=t.textContent,l=i.children;for(let t=e.length-1;t>-1;--t){let i=s;if(!i){let s=e[t].getAttribute("data-category");s&&(i=n===s||s.includes(n))}e[t].style.display=i?"":"none"}for(let e=l.length-1;e>-1;--e)l[e].classList.toggle("current",l[e]===t);i.parentNode.tfClass("filter_label")[0].textContent=n}},search(t){t=t.trim().toUpperCase();const e=this.el.tfClass("title");for(let s=e.length-1;s>-1;--s)e[s].parentNode.style.display=""===t||e[s].textContent.toUpperCase().includes(t)?"":"none"},clearSearch(){const e=this.el.tfClass("search")[0];e.value="",t.triggerEvent(e,"input")},select(t){this.el.tfClass("selected")[0]?.classList.remove("selected"),t.classList.add("selected")},async run(e){if(!this.el){this.el=e;const s=await Promise.all([this.layoutsList(),this.savedList(),this.dropDown(),t.fonts("ti-search")]),i=this.el.getRootNode();i.prepend(i.host.ownerDocument.getElementById("tf_svg").cloneNode(!0)),this.render(s[0],s[1],s[2]),this.showLoader("hide")}this.el.style.display&&this.show()}}})(Themify,document,tbBuilderPage);