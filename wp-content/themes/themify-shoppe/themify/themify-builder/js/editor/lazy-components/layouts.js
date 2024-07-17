var TB_Layouts;((t,e,s,a,l,i,o,r)=>{"use strict";let n;const _={credentials:"omit",method:"GET",mode:"cors"};TB_Layouts={el:null,init(e){const s=e.classList;(s.contains("load_layout")||s.contains("save_layout"))&&t.LightBox.save().then((()=>{e.classList.contains("load_layout")?this.t(e):this.l(e)})).catch((()=>{t.Spinner.showLoader("spinhide")}))},i(e){const a=l.i18n.label,i=s("","tb_options_tab_content"),o=s("form",{id:"tb_load_template_form",method:"POST"}),r=s("a",{class:"tb_icon_btn",href:a.layoutEditUrl,target:"_blank"},a.layoutEditText);return r.prepend(t.Helper.getIcon("ti-folder")),e.querySelector("#tb_tabs_custom")?.append(s("a",{class:"add_new tf_plus_icon tb_icon_btn tf_rel",href:a.layoutAddUrl,target:"_blank"},a.layoutAddText),r),o.appendChild(e),i.appendChild(o),i},async t(o){t.Spinner.showLoader();const r=o.closest("ul").getBoundingClientRect(),_=[],u=c.instances;for(let[t,e]of u){let t=e.data||e.getList();_.push(t)}try{const e=await i.all(_);let l=0,o=a(),r=a(),c=s("","tb_tabs"),b=s("","tb_tab_nav");(t=>{n||(n=new IntersectionObserver(((t,e)=>{for(let a=t.length-1;a>-1;--a)if(!0===t[a].isIntersecting){let l=t[a].target;if(e.unobserve(l),l?.isConnected){let t=l.tfTag("img")[0],e=t.dataset.src,a=new Image(t.getAttribute("width"),t.getAttribute("height")),i=s("","tf_loader tf_abs_c");a.decoding="async",a.src=e,a.title=a.alt=t.alt,l.appendChild(i),a.decode().catch((()=>{})).finally((()=>{t.replaceWith(a),i.remove()}))}}}),{root:t||null,rootMargin:"0px 0px 180px 0px"}))})(t.LightBox.el.querySelector(".tf_scrollbar:not(.tb_action_breadcrumb )"));for(let[t,a]of u){let i="tb_tabs_"+t,n=s("li","title"+(0===l?" current":"")),_=a.getClass?.()||"",c=s("",{id:i,class:"tb_tab"+(""!==_?" "+_:"")+(0!==l?" tf_hide":"")});n.appendChild(s("a",{href:"javascript:;","data-id":i},a.title)),a.data=e[l],c.appendChild(a.o()),r.appendChild(n),o.appendChild(c),++l}b.appendChild(r),c.append(b,o),this.el=this.i(c)}catch(t){this.el=null}const b=this.el;t.LightBox.el.classList.add("tb_predesigned_lightbox"),await t.Spinner.showLoader(b?"spinhide":"error"),await t.LightBox.setStandAlone(r.left,r.top).open({loadMethod:"html",save:!1,data:b||l.i18n.label.layoutError}),b&&(this.u(b),e.isTouch||setTimeout((()=>{b.querySelector("#"+b.querySelector(".title.current a").dataset.id).tfClass("tb_layout_search")[0].focus(),this.el=null}),125)),e.on("themify_builder_lightbox_close",(t=>{t.classList.remove("tb_predesigned_lightbox"),n?.disconnect(),n=null}),!0)},async l(s){t.Spinner.showLoader("spinhide");let a={contructor:!0,loadMethod:"html",save:{},data:{save_as_layout:{options:[{id:"layout_title_field",type:"text",label:"title"},{id:"layout_img_field",type:"image",label:"image_preview"},{id:"layout_img_field_id",type:"hidden"},{id:"postid",type:"hidden",value:t.Builder.get().id}]}}},l=t.LightBox,i=s.closest("ul").getBoundingClientRect();l.el.classList.add("tb_savead_lightbox"),await l.setStandAlone(i.left,i.top).open(a);let o=l.el.tfClass("builder_save_button")[0],r=async e=>{e.stopPropagation(),t.Spinner.showLoader();try{const e={action:"tb_save_custom_layout",...t.Forms.serialize(l.el)},s=await t.LocalFetch(e);if("success"!==s.status)throw s.msg;t.Spinner.showLoader("done"),l.close(),this.el=this.json=null}catch(e){t.Spinner.showLoader("error"),t.LiteLightBox.alert(e.message||e)}};o.tfOn(e.click,r,{passive:!0}),e.on("themify_builder_lightbox_close",(()=>{l.el.classList.remove("tb_savead_lightbox"),o.tfOff(e.click,r,{passive:!0}),o=l=r=null}),!0)},u(s){s.querySelector("#tb_load_template_form").tfOn(e.click,(async e=>{const s=e.target?.closest(".tb_layout_thumb");if(!s||"_blank"===e.target.closest("a")?.target)return;e.stopPropagation();const a=s.closest("li"),l=a.dataset.slug,i=await t.LiteLightBox.confirm({msg:"confirm_template_selected",buttons:{no:"layout_replace",yes:"layout_append"}});if(i){t.layouts_selected??={};let s,o=t.layouts_selected;if(!o[l])try{t.Spinner.showLoader();const e=await c.instances.get(a.closest("ul").dataset.group).getItem(l);o[l]=e}catch(e){t.Spinner.showLoader("error"),t.LiteLightBox.alert(e.message||e),s=!0}if(!s){const e=t.Helper.cloneObject(o[l].builder_data),s=e.custom_css;delete e.custom_css,t.Builder.get().reLoad({builder_data:e,used_gs:o[l].used_gs,custom_css:s},"no"!==i)}t.LightBox.close()}}),{passive:!0}).tfOn("submit",(t=>{t.preventDefault(),t.stopPropagation()}))}};class c{static instances=new Map;constructor(t){this.constructor.instances.set(t,this)}h(t){const e=t.value.trim().toUpperCase(),s=t.closest(".tb_tab").tfClass("tb_layout_title");for(let t=s.length-1;t>-1;--t)s[t].closest("li").style.display=""===e||s[t].textContent.toUpperCase().includes(e)?"":"none"}p(t){const s=t.closest(".tb_tab").tfClass("tb_layout_search")[0];s.value="",e.triggerEvent(s,"input")}m(t){if(!t.classList.contains("current")){const e=t.closest("ul");if(e){const s=e.closest(".tb_tab").tfClass("tb_layout_lists")[0].children,a=t.classList.contains("all"),l=t.textContent,i=e.children;for(let t=s.length-1;t>-1;--t){let e=a;if(!e){let a=s[t].dataset.category;a&&(e=l===a||a.includes(l))}s[t].style.display=e?"":"none"}for(let e=i.length-1;e>-1;--e)i[e].classList.toggle("current",i[e]===t);e.parentNode.tfClass("tb_ui_dropdown_label")[0].textContent=l}}}v(e,i){const o=this.imgW||300,_=this.imgH||348,c="https://placehold.co/"+o+"x"+_+".webp?text=",u=new Set,b=t.Helper.getIcon("ti-search"),d=a(),h=a();for(let t=0;t<e.length;++t){let a=s("li"),f=s("","tb_layout_thumb tf_rel"),p=s("","tb_layout_title tf_inline_b"),y=new Image(o,_);if(e[t].id&&(a.dataset.id=e[t].id),e[t].slug&&(a.dataset.slug=e[t].slug),y.loading="lazy",y.decoding="async",y.src=c+encodeURI(e[t].title),y.alt=y.title=e[t].title,e[t].thumbnail&&(y.dataset.src=e[t].thumbnail,n.observe(f)),p.innerHTML=e[t].title,e[t].url!==r){let a=s("a",{class:"tb_layout_link",target:"_blank",href:e[t].url,title:l.i18n.label.preview});a.appendChild(b.cloneNode(!0)),f.appendChild(a)}if(f.appendChild(y),e[t].category){a.dataset.category=e[t].category;let l=(""+e[t].category).split(",");for(let t=0;t<l.length;++t)""===l[t]||u.has(l[t])||(h.appendChild(s("li",l[t]===i?{class:"tb_selected_cat"}:"",l[t])),u.add(l[t]))}a.append(f,p),d.appendChild(a)}return{items:d,cats:h}}o(){const t=l.i18n.label,i=a(),o=s("ul",{class:"tb_layout_lists","data-group":this.id}),r=s("","tb_layout_sticky"),n=s("","tb-layout-search-container"),_=s("input",{type:"text",class:"tb_layout_search",placeHolder:t.search,required:!0}),c=s("button",{type:"button",class:"tb_clear_input tf_close"}),u=s("li","all",t.all),b=this.v(this.data);if(n.append(_,c),r.appendChild(n),b.cats.querySelector("li")){const a=s("","tb_ui_dropdown tf_rel"),l=s("ul","tf_scrollbar");l.tfOn(e.click,(t=>{"LI"===t.target.tagName&&(t.stopPropagation(),this.p(t.target),this.m(t.target))}),{passive:!0}).append(u,b.cats),a.append(s("span",{class:"tb_ui_dropdown_label tf_rel",tabindex:-1},t.all),l),r.appendChild(a)}return _.tfOn("input",(t=>{u.classList.contains("all")&&this.m(u),this.h(t.target)}),{passive:!0}),c.tfOn(e.click,(t=>{t.stopPropagation(),this.p(t.target)}),{passive:!0}),o.appendChild(b.items),i.append(r,o),i}}class u extends c{constructor(){const t="predesigned";super(t),this.id=t,this.title=l.layouts[this.id].title}getList(){return e.fetch("",null,_,l.layouts[this.id].url+"index.json")}async getItem(s){const a=l.layouts[this.id],i=a.url+s+".json";try{let l=await e.fetch("",null,_,i),r=o.stringify(l);if(r.includes(t.GS.key)){r={builder_data:o.parse(r)};try{r.used_gs=await e.fetch("",null,_,a.url+s+"-gs.json")}catch(t){}}else r={builder_data:o.parse(r)};return r}catch(t){throw l.i18n.label.layout_error.replace("{FILE}",i)}}}if("object"==typeof l.layouts.predesigned&&new u,new class extends c{constructor(){const t="custom";super(t),this.id=t,this.title=l.i18n.label.savedLayoutTitle}getList(e){return t.LocalFetch({slug:e||"",action:"tb_get_save_custom_layout"})}getItem(t){return this.getList(t).then((t=>({builder_data:t})))}},l.layouts.theme){class s extends c{constructor(){const t="theme";super(t),this.id=t,this.title=l.layouts[this.id].title}getList(){const t=l.layouts[this.id].data,e=[],s=themify_vars.theme_url+"/builder-layouts/",a=t=>{const e=t.replace(/[\r\n]/gm,"").replace(/  +/g," ").split(" ");for(let t=0;t<e.length;++t)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};for(let l=0,i=t.length;l<i;++l){let i=t[l].replace(".zip","");e[l]={title:a(i.replaceAll("-"," ")),slug:i,thumbnail:s+i+".webp"}}return i.resolve(e)}async getItem(s){const a=themify_vars.theme_url+"/builder-layouts/",n=await i.all([t.Helper.loadJsZip(),e.fetch("","blob",{credentials:"omit"},a+s+".zip")]),_=await JSZip.loadAsync(n[1]),c=_.files,u=l.i18n.label;if(!c)throw u.zipFileEmpty;const b="builder_data_export.txt";if(c[b]===r)throw u.importBuilderNotExist;const d=await i.resolve(_.file(c[b].name).async("text"));return o.parse(d)}}new s}e.trigger("tb_layout_loaded",c)})(tb_app,Themify,tb_createElement,tb_createDocumentFragment,themifyBuilder,Promise,JSON,void 0);