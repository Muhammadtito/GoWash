((e,t,o)=>{"use strict";t.ModuleProductCategories=class extends t.Module{constructor(e){const t=e.mod_settings||{};"0"===t.latest_products?.toString()&&"products"===t.display&&(e.mod_settings.display="none"),super(e)}static getOptions(){const e=[...ThemifyConstructor.getOptions("post_grid")];for(let t=e.length-1;t>-1;--t){let o=e[t].value;e[t].value="list-post"===o?1:parseInt(o.replace("grid",""))}return[{id:"mod_title",type:"title"},{id:"columns",type:"layout",mode:"sprite",label:"lay",options:e,default:4,control:[]},{id:"child_of",type:"product_categories",label:"query_term_id",options:[["wc_allcat"],{label:"wc_toplvl",options:{"top-level":"wc_otoplvl"}},{label:"cat",options:[]}]},{id:"exclude",type:"text",label:"wc_exclcat",class:"large",help:"wc_exclcath"},{id:"orderby",type:"select",label:"orderby",options:{name:"name",id:"id",count:"wc_prodcnt",menu_order:"wc_mnuord"}},{id:"order",type:"select",label:"order",help:"ohelp",order:!0},{id:"number",type:"number",label:"npost",help:"nposth"},{id:"image_w",type:"number",label:"imgw"},{id:"image_h",type:"number",label:"imgh"},{id:"hide_empty",type:"toggle_switch",label:"wc_emptcat",default:"off"},{id:"pad_counts",type:"toggle_switch",label:"wc_prodcntdisp",default:"on",options:{on:{name:"yes",value:"s"},off:{name:"no",value:"hi"}}},{id:"cat_desc",type:"toggle_switch",label:"wc_catdesc",options:{on:{name:"yes",value:"s"},off:{name:"no",value:"hi"}}},{id:"display",type:"radio",label:"wc_dispincat",options:[{value:"products",name:"wc_prodnew"},{value:"subcategories",name:"wc_subcat"},{value:"none",name:"none"}],wrap_class:"tb_compact_radios",option_js:!0},{id:"latest_products",type:"select",label:"wc_prodnew",options:{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10},wrap_class:"tb_group_element_products",default:6},{id:"subcategories_number",type:"number",label:"wc_subcatlimit",help:"wc_subcatlimith",wrap_class:"tb_group_element_subcategories"},{type:"custom_css_id",custom_css:"css_products"}]}static getAnimation(){return!1}static getGroup(){return["addon"]}static builderSave(e){const t={columns:"4",child_of:"0",order:"desc",orderby:"name",hide_empty:"yes",pad_counts:"yes",cat_desc:"no",display:"products",latest_products:"6"};for(let o in t)e[o]===t[o]&&delete e[o];e.display&&delete e.latest_products,"subcategories"!==e.display&&delete e.subcategories_number,"6"===e.latest_products?.toString()&&delete e.latest_products,"4"===e.columns?.toString()&&delete e.columns,super.builderSave(e)}};t.jsModuleLoaded().then((()=>{ThemifyConstructor.product_categories={data:null,render(s,l){s.optgroup=1;const c={...s};c.type="select";const a=l.select.render(c,l),r=a.querySelector("select"),i=l.values[s.id]??"0",n=o.createElement("div"),d=()=>{const e=o.createDocumentFragment();for(let t=0;t<this.data.length;++t)e.appendChild(this.data[t]);r.lastChild.appendChild(e),r.selectedIndex=0;const t=r.tfTag("option");for(let e=t.length-1;e>-1;--e)if(t[e].value===i){t[e].selected=!0;break}};return null===this.data?(n.className="tf_loader tf_abs_c",r.classList.add("tb_search_wait"),r.parentNode.appendChild(n),t.LocalFetch({action:"builder_wc_get_terms"},"html").then((t=>{this.data=e.convert(t.querySelector("select").children),d()})).catch((()=>{t.Spinner.showLoader("error")})).finally((()=>{n.remove(),r.classList.remove("tb_search_wait")}))):d(),a}}}))})(Themify,tb_app,document);