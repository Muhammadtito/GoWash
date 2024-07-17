((e,t,l,i,a,n,c,$,o)=>{"use strict";const s=e=>l.createTextNode(e),_=e.isFrontend?window.top:window;let d;e.ModuleContact=class extends e.Module{constructor(t){const l=t.mod_settings||{};if(l.send_to_admins!==o&&("true"!==l.send_to_admins&&!0!==l.send_to_admins?delete l.user_role:t.user_role||(l.user_role="admin"),delete l.send_to_admins),!l.v7){const t=e.ModuleContact.default();for(let e=["gdpr_label","field_recipients_label","field_captcha_label","field_send_label","field_sendcopy_label","field_optin_label"],i=e.length-1;i>-1;--i)l[e[i]]||(l[e[i]]=t[e[i]]);for(let e=["name","email","subject","message"],i=e.length-1;i>-1;--i){let a="field_"+e[i]+"_label";l[a]||l["field_"+e[i]+"_placeholder"]||(l[a]=t[a])}l.v7=1}super(t)}static getOptions(){const e=c.url+"assets/layouts.svg#";return[{id:"mod_title_contact",type:"title"},{id:"layout_contact",type:"layout",label:"lay",default:"style1",options:[{img:e+"style1",value:"style1",label:"cnt_sty1"},{img:e+"style2",value:"style2",label:"cnt_sty2"},{img:e+"style3",value:"style3",label:"cnt_sty3"},{img:e+"style4",value:"animated-label",label:"cnt_animlbl"}]},{id:"user_role",type:"select",label:"cnt_sendto",options:{"":"cnt_eaddrs",admin:"cnt_eadmin",author:"cnt_eauth",sr:"cnt_selrec"},binding:{"":{show:"mail_contact",hide:["tb_cont_sr_msg","tb_cont_sr_wrap"]},admin:{hide:["mail_contact","tb_cont_sr_msg","tb_cont_sr_wrap"]},author:{hide:["mail_contact","tb_cont_sr_msg","tb_cont_sr_wrap"]},sr:{hide:"mail_contact",show:["tb_cont_sr_msg","tb_cont_sr_wrap"]}}},{type:"message",wrap_class:"tb_cont_sr_msg",label:"",comment:"cnt_selrech"},{id:"mail_contact",type:"text",label:"cnt_recs",help:"cnt_recsh",control:!1,required:{message:"cnt_recse",rule:"tb_contact_recipient"}},{id:"specify_from_address",label:"cnt_sfromadrs",help:"cnt_sfromadrsh",type:"toggle_switch",options:{on:{name:"enable",value:"en"},off:{name:"",value:"dis"}},binding:{checked:{show:"specify_email_address"},not_checked:{hide:"specify_email_address"}},control:!1},{id:"specify_email_address",type:"text",label:"cnt_fromadrs",control:!1},{id:"bcc_mail",label:"cnt_bcc",help:"cnt_bcch",type:"toggle_switch",options:{on:{name:"enable",value:"en"},off:{name:"",value:"dis"}},binding:{checked:{show:"bcc_mail_contact"},not_checked:{hide:"bcc_mail_contact"}},control:!1},{id:"bcc_mail_contact",type:"text",label:"cnt_bccadrs",help:"cnt_bccadrsh",control:!1},{id:"gdpr",label:"gdpr",type:"toggle_switch",options:{on:{name:"accept",value:"en"},off:{name:"",value:"dis"}},binding:{checked:{show:"gdpr_label"},not_checked:{hide:"gdpr_label"}}},{id:"gdpr_label",type:"textarea",label:"gdpr_msg"},{id:"success_url",type:"url",label:"cnt_succurl",help:"cnt_succurlh",control:!1,binding:{empty:{hide:"nw"},not_empty:{show:"nw"}}},{id:"nw",type:"toggle_switch",options:{on:{name:"1",value:"en"},off:{name:"",value:"dis"}},control:!1,label:"cnt_onwin"},{id:"success_message_text",type:"textarea",label:"sucmsg",control:!1},{id:"auto_respond",label:"cnt_autoresp",type:"toggle_switch",options:{on:{name:"enable",value:"en"},off:{name:"",value:"dis"}},help:"cnt_autoresph",binding:{checked:{show:["auto_respond_message","auto_respond_subject"]},not_checked:{hide:["auto_respond_message","auto_respond_subject"]}},control:!1},{id:"auto_respond_subject",type:"text",label:"cnt_autoresps",control:!1},{id:"auto_respond_message",type:"textarea",label:"cnt_autorespm",control:!1},{id:"default_subject",type:"text",label:"cnt_defsubj",help:"cnt_defsubjh",control:!1},{id:"contact_sent_from",type:"checkbox",label:"cnt_sentfrom",options:[{name:"enable",value:"cnt_sentfrommsg"}],default:"enable",control:!1},{id:"include_name_mail",type:"checkbox",label:"cnt_nve",options:[{name:"enable",value:"cnt_nvemsg"}]},{type:"group",display:"accordion",label:"cnt_fields",options:[{id:"fields_contact",type:"contact_fields",options:{head:{f:"cnt_field",l:"label",sh:"s"},body:{name:"name",email:"em",subject:"cnt_subj",message:"cnt_msg",recipients:"cnt_recs"},foot:{captcha:"cnt_captcha",sendcopy:"cnt_sendcopy",optin:"nwsletopt",send:"cnt_sendbtn",align:{id:"field_send_align",label:"cnt_btnalign",options:{left:"left",right:"right",center:"center"}}}},new_row:"cnt_addfld"},{id:"field_extra",type:"hidden"},{id:"field_order",type:"hidden"}]},{type:"group",display:"accordion",label:"adv",options:[{id:"post_type",label:"cnt_posts",type:"toggle_switch",options:{on:{name:"enable",value:"en"},off:{name:"",value:"dis"}},binding:{checked:{show:"post_author"},not_checked:{hide:"post_author"}},help:"cnt_postsh",control:!1},{id:"post_author",type:"checkbox",label:"",wrap_class:"_tf-hide",options:[{name:"add",value:"cnt_ctpa"}],control:!1},{id:"custom_template",label:"cnt_emailtmpl",type:"toggle_switch",options:{on:{name:"enable",value:"en"},off:{name:"",value:"dis"}},binding:{checked:{show:["template","template_fields"],hide:["include_name_mail","contact_sent_from"]},not_checked:{hide:["template","template_fields"],show:["include_name_mail","contact_sent_from"]}},control:!1,help:"cnt_emailtmplh"},{id:"template",type:"textarea",control:!1},{type:"template_fields",id:"template_fields",title:"avfields",target:"template",fields:["%name%","%email%","%subject%","%message%","%referer%"],extra:'<div class="tb_contact_custom_tags"></div>'},{id:"upload_dir",type:"text",control:!1,label:"cnt_upldir",help:"cnt_upldirh"}]},{type:"custom_css_id",custom_css:"css_class_contact"}]}static getGroup(){return["addon"]}static default(){return{field_name_label:n.name,field_email_label:n.em,field_subject_label:n.cnt_subj,field_message_label:n.cnt_msg,field_sendcopy_label:n.cnt_sendcopydef,field_sendcopy_subject:n.cnt_sendcopysubj,field_send_label:n.cnt_send,gdpr_label:n.gdpr_opt_msg,field_recipients_label:n.cnt_rec,field_optin_label:n.sbscrbenws,field_captcha_label:n.cnt_captcha}}static builderSave(e){const t={layout_contact:"style1",contact_sent_from:"enable",include_name_mail:!1,post_author:!1,field_message_active:"yes",field_subject_active:"yes",field_subject_require:"yes",field_name_require:"yes",field_email_require:"yes",field_email_active:"yes",field_name_active:"yes",field_captcha_active:!1,field_sendcopy_active:!1,field_optin_active:!1,field_send_align:"left",sr_display:"radio"};delete e.send_to_admins;for(let l in t)e[l]===t[l]&&delete e[l];if(e.user_role&&delete e.mail_contact,"sr"!==e.user_role)delete e.sr;else{const t=e.sr||[];for(let e=t.length-1;e>-1;--e)t[e].email||t.splice(e,1);0===t.length&&delete e.sr}if(e.sr||(delete e.field_recipients_label,delete e.sr_display),e.specify_from_address||delete e.specify_email_address,e.bcc_mail||delete e.bcc_mail_contact,e.post_type&&"|"!==e.post_author||delete e.post_author,e.gdpr||delete e.gdpr_label,e.success_url||delete e.nw,e.auto_respond?e.auto_respond_message||delete e.auto_respond:delete e.auto_respond_message,e.auto_respond_message||delete e.auto_respond_subject,e.custom_template?delete e.contact_sent_from:delete e.template,(e.custom_template||"|"===e.include_name_mail)&&delete e.include_name_mail,e.field_captcha_active&&"|"!==e.field_captcha_active||(delete e.field_captcha_active,delete e.field_captcha_label),e.field_sendcopy_active&&"|"!==e.field_sendcopy_active||(delete e.field_sendcopy_active,delete e.field_sendcopy_label,delete e.field_sendcopy_subject),e.field_optin_active&&"|"!==e.field_optin_active||(delete e.field_optin_active,delete e.field_optin_label,delete e.provider),e.field_extra)try{const t="string"==typeof e.field_extra?JSON.parse(e.field_extra):e.field_extra;t.fields&&0!==t.fields.length?e.field_extra=t:delete e.field_extra}catch(e){}super.builderSave(e)}preview(t){const l=i(),n=i("form","builder-contact"),o=i("","builder-contact-fields tf_rel"),s=this.id,_=Object.assign({field_email_active:"yes",field_name_active:"yes",field_message_active:"yes",field_subject_active:"yes",field_subject_require:"yes",field_message_require:"",field_name_require:"yes",field_email_require:"yes",field_send_align:"left"},t),d="animated-label"===_.layout_contact,r=["module","module-contact","contact-"+(_.layout_contact||"style1")],p={},b=()=>i("span","required","*"),f={sendcopy:"yes",optin:"yes",gdpr:"accept"},u=this.constructor;let h,m;try{h="string"==typeof _.field_extra?JSON.parse(_.field_extra):_.field_extra||{},h=h.fields||{}}catch(e){h={}}try{m="string"==typeof _.field_order?JSON.parse(_.field_order):_.field_order||{}}catch(e){m={}}0===Object.keys(m).length&&(m={field_name_label:0,field_email_label:1,field_subject_label:2,field_recipients_label:3,field_message_label:4});for(let e=["name","email","subject","recipients","message"],t=e.length-1;t>-1;--t){let l=e[t],i="field_"+l;("yes"===_[i+"_active"]||"recipients"===i&&"sr"===_.user_role)&&(p[l]=m[i+"_label"]?parseInt(m[i+"_label"]):0)}for(let e in h)p[e]=parseInt(h[e].order);const y=Object.keys(p);y.sort(((e,t)=>p[e]-p[t])),_.css_class_contact&&r.push(_.css_class_contact),l.className=r.join(" ");for(let t=0;t<y.length;++t){let l=y[t],n=i("","builder-contact-field"),c=i("label","control-label"),r=i("","control-input tf_rel");if("name"===l||"email"===l||"subject"===l||"message"===l||"recipients"===l){let t=a(),o=i("span","tb-label-span"),p="field_"+l,f="recipients"===l||"yes"===_[p+"_active"]&&"yes"===_[p+"_require"],h="contact-"+l,m=s+"-"+h,y=!d&&_[p+"_placeholder"]?_[p+"_placeholder"]:" ";if(n.className+=" builder-contact-field-"+l+" builder-contact-"+("message"===l?"textarea":"text")+"-field",c.htmlFor=m,_[l+"_icon"]){let t=i("em");t.appendChild(e.Helper.getIcon(_[l+"_icon"])),c.appendChild(t)}if(c.appendChild(u.setEditableContent(o,p+"_label",_[p+"_label"])),f&&o.appendChild(b()),"recipients"===l){if(t=a(),_.sr?.length>0){let e="select"===_.sr_display;e&&(t=i("select"));for(let l=0;l<_.sr.length;++l){let a=i(e?"option":"label","",_.sr[l].label||"");e||a.appendChild(i("input",{type:"radio"})),t.appendChild(a)}}}else t=i("message"===l?"textarea":"input",{name:h,placeholder:y,id:m,class:"form-control"}),"message"!==l&&(t.type="text"),f&&(t.required=f);if(r.appendChild(t),d){let e=i("span","tb_contact_label"),t=i("span","tb-label-span");f&&t.appendChild(b()),e.appendChild(u.setEditableContent(t,p+"_label",_[p+"_label"])),r.appendChild(e)}}else{let t=h[l];if(!t)continue;let a=t.type,o="string"==typeof t.value?t.value.replace(/\\\\"/g,'"').replace(/\\\\n/g,"\n"):t.value||"",_="field_extra_"+s+"_"+l,p=!0===t.required,f=d||"upload"===a?" ":o;if(n.className+=" builder-contact-field-extra builder-contact-"+a+"-field",c.htmlFor=_,u.setEditableContent(c,"1",t.label),t.icon){let l=i("em");l.appendChild(e.Helper.getIcon(t.icon)),c.prepend(l)}if(p&&c.appendChild(b()),"textarea"===a||"text"===a||"tel"===a||"upload"===a||"email"===a||"number"===a||"date"===a){let e=i("textarea"===a?a:"input",{id:_,placeholder:f,class:"form-control"});if("upload"===a?e.type="file":"date"===a||"textarea"!==a&&("tel"===a?(n.className+=" builder-contact-text-field",e.type="text"):e.type=a),p&&(e.required=p),r.appendChild(e),d&&("text"===a||"tel"===a||"email"===a||"textarea"===a)){let e=i("span","tb_contact_label"),l=i("span");p&&l.appendChild(b()),e.appendChild(u.setEditableContent(l,"1",t.label)),r.appendChild(e)}}else if("static"===a){let e=i();e.innerHTML=o,r.appendChild(e)}else if("radio"!==a&&"checkbox"!==a||!o){if("select"===a){let e=i("select","form-control tf_scrollbar");p&&(e.required=1);for(let t=p?-1:0;t<o.length;++t)e.appendChild(i("option","",t>0?o[t]:""));r.appendChild(e)}}else for(let e=0,t=o.length;e<t;++e){let l=i("label"),n=i("input",{type:a,class:"form-control"});!p||"radio"!==a&&1!==t||(n.required=1),l.append(n,u.setEditableContent(i("span"),"1",o[e])),r.appendChild(l)}}n.append(c,r),o.appendChild(n)}if("yes"===_.field_captcha_active){const e=i("","builder-contact-field builder-contact-field-captcha"),t=i("","control-input tf_rel");if(_.field_captcha_label){const t=i("label","control-label"),l=u.setEditableContent(i("span"),"field_captcha_label",_.field_captcha_label);l.appendChild(b()),t.appendChild(l),e.appendChild(t)}t.appendChild(i("",{class:"themify_captcha_field"+("v2"===c.recaptcha_version?" g-recaptcha":""),"data-sitekey":c.captcha||"","data-ver":c.recaptcha_version||""})),e.appendChild(t),o.appendChild(e)}for(let e in f){if(("gdpr"===e?_[e]:_["field_"+e+"_active"])===f[e]){let t=i("","builder-contact-field builder-contact-field-"+e),l=i("","control-label"),a=i("label"),n=i("","control-input tf_rel"),c=i("input",{type:"checkbox",value:1}),s="gdpr"===e?"gdpr_label":"field_"+e+"_label",d=u.setEditableContent(i("span"),s,_[s]);"gdpr"===e?(c.required=!0,a.className="field-gdpr",c.name=e):a.className=c.name="sendcopy"===e?"send-copy":e,a.append(c,d),n.appendChild(a),l.appendChild(n),t.appendChild(l),o.appendChild(t)}}const g=i("","builder-contact-field builder-contact-field-send control-input tf_text"+_.field_send_align[0]),x=u.setEditableContent(i("button",{type:"submit",class:"btn btn-primary","data-name":"field_send_label"}),"field_send_label",_.field_send_label),w=i("span","tf_submit_icon");return _.send_icon&&w.appendChild(e.Helper.getIcon(_.send_icon)),x.prepend(w),g.appendChild(x),o.appendChild(g),n.appendChild(o),_.mod_title_contact&&l.appendChild(u.getModuleTitle(_.mod_title_contact,"mod_title_contact")),l.appendChild(n),l}saveInlinEdit(t,l){const i=l.closest(".builder-contact-field-extra");if(null!==i){let a=-1;for(let e=this.el.tfClass("builder-contact-field-extra"),t=e.length-1;t>-1;--t)if(e[t]===i){a=t;break}if(-1!==a){let i=l.closest(".control-input"),n=-1;if(null!==i)for(let e=i.children,t=e.length-1;t>-1;--t)if(e[t].contains(l)){n=t;break}if(d){let l=e.LightBox.el.tfClass("tb_new_field_textbox")[a];l!==o&&(-1!==n&&(l=l.closest("tr").querySelectorAll(".control-input li")[n].tfClass("tb_multi_option")[0]),l.value=t,d.t(!0))}else{const e=this.get("mod_settings"),l="string"==typeof e.field_extra?JSON.parse(e.field_extra):e.field_extra;if(l.fields?.[a]){const c=l.fields[a];if(null!==i){if(!c.value||-1===n||c.value[n]===o)return!1;c.value[n]=t}else c.label=t;e.fieldExtra=l,this.set("mod_settings",e)}}}return!1}return t}};class r{#e=null;#t=null;render={call(e,t){return this[t]===o?this.i(e,t):this[t].call(this,e,t)},setType(e,t){e.dataset.type=t},getText(e,t,l){const a=i(l,{class:"tb_new_field_value tb_field_type_text",placeholder:n.placeh});return"textarea"!==l&&(a.type="tel"!==l?"text":"tel"),e.value&&(e.value=e.value.replace(/\\\\n/g,"\n"),a.value=e.value.replace(/(&quot;)|(\\\\")/g,'"')),this.setType(a,t),a},date(e){const t=a(),l=ThemifyConstructor.select.render({id:"",class:"tb_date_show",options:{"":"cnt_show_dt",date:"cnt_show_d",time:"cnt_show_t"}},ThemifyConstructor);return e.show!==o&&(l.querySelector('option[value="'+e.show+'"]').selected=!0),t.append(l),t},static(e){const t=this.i(e,"textarea");return t.placeholder=n.cnt_stexth,this.setType(t,"static"),t},upload(e){e.allowed??="";let t=e.allowed.split(",");const l=a(),o=i("a",{href:"#",class:"tb_cnt_ext_btn"},n.cnt_allowext),_=i("",{class:"tf_scrollbar tb_allowed_ext_wrap tf_box tf_hide",tabindex:-1});_.tfOn("change",(e=>{const t=e.target,l=t.checked;if(t.dataset.all){const e=t.closest("div").querySelectorAll("label:not(.tb_allowed_ext_all) input");for(let t=0;t<e.length;++t)e[t].checked=l}d.t()}),{passive:!0});for(let e in c.allowed_ext){const l=i(),a=i("label","tb_allowed_ext_all"),o=c.allowed_ext[e];a.append(i("input",{type:"checkbox","data-all":1}),s(n[e])),l.appendChild(a);for(let e=o.length-1;e>-1;--e){let a=i("label"),n=i("input",{type:"checkbox",value:o[e]});t.includes(o[e])&&(n.checked=!0),a.append(n,s(o[e])),l.appendChild(a)}_.appendChild(l)}return l.append(o,_),l},icon:(e="")=>ThemifyConstructor.create([{type:"icon",id:"",after:"icon",default:e||"",wrap_class:"tb_disable_dc tb_new_field_icon"}]),getOptions(e){const t=a();Array.isArray(e)||(e=Object.values(e));for(let l=0;l<e.length;++l){let a=i("li"),c=i("","tb_move_opt");c.append(i("",{class:"tb_arrow tb_up_row",title:n.up}),i("","tb_drag_opt tb_no_sort tf_h"),i("",{class:"tb_arrow tb_down_row",title:n.down})),a.append(c,i("input",{type:"text",class:"tb_multi_option",value:e[l]}),i("a",{class:"tb_contact_value_remove tb_ui_icon_link tf_close",href:"#"})),t.appendChild(a)}return t},i(e,t){if("text"===t||"textarea"===t||"tel"===t||"number"===t||"email"===t||"date"===t){return this.getText(e,t,"textarea"===t?t:"input")}const l=i("ul"),c=i("a",{href:"#",class:"tb_add_field_option tb_ui_icon_link"},n.cnt_add_opt),o=a();return l.appendChild(this.getOptions(e.value||[""])),this.setType(c,t),o.append(l,c),o}};constructor(e,t){this.#e=$(e),this.o(t)}o(e){this.#t=e,this.p(e.values),this.u(),setTimeout((()=>{this.h()}),1500)}m(e,t){let l,i;try{l="string"==typeof e.field_order?JSON.parse(e.field_order):e.field_order}catch(e){}l??={};const n=this.#e[0].tfTag("tbody")[0],c=n.tfTag("tr"),s=[],_=a();for(let e=0;e<c.length;++e)c[e].classList.contains("tb_no_sort")?i=c[e]:s.push(c[e]);s.sort(((e,i)=>{let a,n,c,s,_=e.classList.contains("tb_extra_row"),d=i.classList.contains("tb_extra_row"),r=e=>{for(let l=t.length-1;l>-1;--l)if(t[l].order!==o&&(t[l].label===e||t[l].id===e))return t[l].order;return!1},p=_?e.tfClass("tb_new_field_textbox")[0]:e.tfClass("tb_lb_option")[0],b=d?i.tfClass("tb_new_field_textbox")[0]:i.tfClass("tb_lb_option")[0];return _&&p.dataset.order?c=p.dataset.order:(a=_?p.value:p.id,a=_&&""===a?p.dataset.id:a,a=a.trim(),c=l[a]??(!!_&&r(a))),d&&b.dataset.order?s=b.dataset.order:(n=d?b.value:b.id,n=d&&""===n?b.dataset.id:n,n=n.trim(),s=l[n]??(!!d&&r(n))),c-s}));for(let e=0;e<s.length;++e)_.appendChild(s[e]);_.appendChild(i),n.replaceChildren(_)}p(e){let t,l=this.#e[0].tfClass("tb_no_sort")[0];try{t="string"==typeof e.field_extra?JSON.parse(e.field_extra):e.field_extra,t=t?.fields}catch(e){}t??={fields:[]};const i=a();for(let e=0;e<t.length;++e)i.appendChild(this.k(t[e]));l.after(i),this.m(e,t)}u(){this.#e[0].tfOn(t.click,(t=>{const l=t.target?.closest(".tb_new_field_action,.tb_add_field_option,.tb_contact_value_remove,.tb_contact_field_remove,.tb_arrow");if(l){"A"===t.target.tagName&&t.preventDefault(),t.stopPropagation();const i=l.classList;if(i.contains("tb_new_field_action"))l.closest(".tb_no_sort").before(this.k({})),this.h("refresh");else if(i.contains("tb_add_field_option"))l.previousElementSibling.appendChild(this.render.getOptions([""]));else if(i.contains("tb_arrow")){const e=l.closest("li"),t=i.contains("tb_down_row")?e?.nextElementSibling:e?.previousElementSibling;if(!t)return;i.contains("tb_down_row")?t.after(e):t.before(e)}else if(i.contains("tb_contact_value_remove"))l.closest("li").remove();else{const t=l.closest(".tb_extra_row"),i=t.tfClass("tb_new_field_textbox")[0].value.trim();t.remove();const a=e.LightBox.el.querySelectorAll(".tb_contact_custom_tags span");for(let e=a.length-1;e>-1;--e)a[e].textContent.trim()==="%"+i+"%"&&a[e].remove()}this.t()}})).tfOn("change",(e=>{const t=e.target?.closest(".tb_new_field_type,.tb_extra_row .tb_new_field_required, .tb_new_field_icon, .tb_date_show");t&&(t.classList.contains("tb_new_field_type")&&this.j(t),this.t())})).tfOn("input",(e=>{e.target?.closest('.tb_extra_row input[type="text"], .tb_extra_row textarea')&&this.t()}))}h(e){const t=this,l=t.#e.find("tbody");l.sortable("refresh"===e?"refresh":{items:"tr:not(.tb_no_sort)",placeholder:"ui-state-highlight",axis:"y",containment:"parent",cancel:".tb_move_opt,input,textarea,button,select,option,a,.tb_help",handle:"> td:first-child",update(){t.t()}}),this.q(e)}q(e){const t=this;t.#e.find(".control-input ul").sortable({items:"li",placeholder:"ui-state-highlight",handle:".tb_drag_opt",axis:"y",containment:"parent",cursor:"grab",cancel:"input,textarea,button,select,option,a",update(){t.t()}})}k(t){const l=0===Object.keys(t).length,c=t.type||"text",o=a(),_=i("tr","tb_extra_row"),d=i("td"),r=i("td"),p=i("input",{type:"text",class:"tb_new_field_textbox",value:t.label?.replace(/&quot;/g,'"')??(!0===l?n.cnt_fname:""),"data-id":t.id||"","data-order":t.order??""}),b=i("td",{colspan:2}),f=i("","selectwrapper tf_rel tf_inline_b tf_vmiddle"),u=i("select","tb_new_field_type tb_lb_option"),h=i("","control-input tf_rel"),m=i("","tb_new_field"),y=i("label"),g=i("input",{type:"checkbox",class:"tb_new_field_required",value:"required"}),x=i("span"),w={text:"text",email:"em",number:"cnt_num",tel:"cnt_tel",textarea:"cnt_txta",upload:"cnt_upl",radio:"cnt_radio",select:"cnt_select",checkbox:"chkbox",static:"cnt_stattxt",date:"date"},v="tb_"+e.Helper.generateUniqueID();"static"===c&&(y.style.display="none"),!0===t.required&&(g.checked=!0),d.appendChild(p),_.appendChild(d);for(let e in w){let t=i("option",{name:v,value:e},n[w[e]]);e===c&&(t.selected="selected"),o.appendChild(t)}return u.appendChild(o),f.appendChild(u),h.appendChild(this.render.call(t,c)),y.append(g,s(n.req)),m.append(h,y,this.render.icon(t.icon)),b.append(f,m),r.appendChild(i("a",{href:"#",class:"tb_contact_field_remove tf_close tb_ui_icon_link"})),_.append(b,r),x.appendChild(s("%"+p.value+"%")),e.LightBox.el.querySelector(".tb_contact_custom_tags").appendChild(x),p.tfOn("change",(function(){x.textContent="%"+this.value+"%"}),{passive:!0}),_}j(e){const t=e.value,l=e.closest("td").tfClass("control-input")[0],i=l.closest(".tb_new_field").tfClass("tb_new_field_required")[0].parentNode;l.replaceChildren(this.render.call({},t)),i.style.display="static"===t?"none":"","radio"!==t&&"select"!==t&&"checkbox"!==t||this.q()}t(l){const i=this.#e[0].tfTag("tbody")[0].tfTag("tr"),a={fields:[]},n={};for(let e=0;e<i.length;++e){let t=i[e];if(t.classList.contains("tb_extra_row")){let l,i=t.tfClass("tb_new_field_type")[0].options[t.tfClass("tb_new_field_type")[0].selectedIndex].value,n=t.tfClass("tb_new_field_textbox")[0].value.trim(),c="static"!==i&&!0===t.tfClass("tb_new_field_required")[0].checked,s=t.tfClass("themify_field_icon")[0].value.trim();switch(i){case"text":case"email":case"number":case"textarea":case"static":case"tel":l=t.tfClass("tb_new_field_value")[0].value.trim();break;case"radio":case"select":case"checkbox":l=[];for(let e=t.tfClass("control-input")[0].tfTag("input"),a=0;a<e.length;++a){let t=e[a].value.trim();""===t&&"select"!==i||l.push(t)}break}if(""!==l&&l!==o||""!==n){let _={type:i,order:e,icon:s};if(c&&(_.required=c),"date"===i)_.show=t.tfClass("tb_date_show")[0].value;else if("upload"===i){let e=t.querySelectorAll(".tb_allowed_ext_wrap input:checked"),l=[];for(let t=e.length-1;t>-1;--t){let i=e[t].value;i&&!e[t].dataset.all&&l.push(i)}l.length>0&&(_.allowed=l.join(","))}""!==n?_.label=n.replace(/"/g,"&quot;"):_.id="ex"+e,l!==o&&""!==l&&l.length>0&&("static"===i?l=l.replace(/"/g,'\\\\"'):"text"!==i&&"textarea"!==i||(l=l.replace(/"/g,"&quot;")),"static"!==i&&"textarea"!==i||(l=l.replace(/\n/g,"\\\\n")),_.value=l),a.fields.push(_)}}else if(!t.classList.contains("tb_no_sort")){n[t.tfClass("tb_lb_option")[0].id]=e}}const c=e.LightBox.el.querySelector("#field_extra"),s=JSON.stringify(n);c.value=JSON.stringify(a),e.LightBox.el.querySelector("#field_order").value=s,this.#t.settings.field_order=s,l||t.triggerEvent(c,"change")}}e.jsModuleLoaded().then((()=>{ThemifyConstructor.contact_fields={render(e,l){_.Themify.fonts("ti-split-v");let o=i("tr");const p=i("table","contact_fields"),b=i("thead"),f=i("tbody"),u=i("tfoot"),h=a(),{head:m,body:y,foot:g}=e.options,x={text(e,t,i){const a={id:"field_"+e,placeholder:t,type:"text"};return i&&(a.help=i),l.create([a])},icon:e=>l.create([{type:"icon",id:e,after:"icon"}]),checkbox(e,t){const i={id:"field_"+e,new_line:!0,type:"checkbox",options:[{value:"",name:"yes"}]};return t&&(i.default="yes"),"sendcopy_active"===e?i.binding={checked:{show:"field_sendcopy_subject"},not_checked:{hide:"field_sendcopy_subject"}}:"optin_active"===e&&(i.binding={checked:{show:"optin"},not_checked:{hide:"optin"}}),l.create([i])}};for(let e in m)o.appendChild(i("th","l"===e?{colSpan:2}:"",n[m[e]]));b.appendChild(o);for(let e in y){o=i("tr");let t=n[y[e]];for(let c in m){let _=i("td"),d=null;if("f"===c)d=i("span","",t),_.appendChild(d),"recipients"===e&&d.appendChild(l.help(n.cnt_srinfo));else if("l"===c){_.colSpan="2";let i=x.text(e+"_label",t);if(i.append(x.text(e+"_placeholder",n.placeh),x.icon(e+"_icon")),"recipients"===e){d=a();const i=l.create([{type:"group",wrap_class:"tb_cont_sr_wrap",options:[{id:e+"_label",type:"text",placeholder:t},{id:e+"_icon",type:"icon",label:"icon"},{id:"sr_display",type:"select",label:n.disp,options:{radio:n.cnt_radio,select:n.cnt_select},control:!1},{id:"sr",type:"builder",options:[{id:"label",type:"text",label:n.label,wrap_class:"tb_disable_dc"},{id:"email",type:"text",label:n.em,wrap_class:"tb_disable_dc",control:!1}]}]}]);d.appendChild(i)}else{var w=a(),v=x.checkbox(e+"_require","message"!==e);v.querySelector(".tb_lb_option label").appendChild(s(n.req)),w.append(i,v),d=w}}else"sh"===c&&(d="recipients"===e?a():x.checkbox(e+"_active",1));null!==d&&_.appendChild(d),o.appendChild(_)}h.appendChild(o)}o=i("tr","tb_no_sort");const k=i("td",{colspan:4}),j=i("a",{href:"#",class:"tb_new_field_action"});j.append(i("span","tf_plus_icon tf_rel"),s(n[e.new_row])),k.appendChild(j),o.appendChild(k),h.appendChild(o),f.appendChild(h);for(let e in g)if("align"!==e){o=i("tr");for(let t in m){if("sh"===t&&"send"===e)continue;let c=i("td"),_=null;if("f"===t)c.textContent=n[g[e]];else if("l"===t){c.colSpan=2;let t=x.text(e+"_label",n[g[e]]);if("send"===e){c.colSpan=3;w=a();var q=l.select.render({id:g.align.id,options:g.align.options},l);w.append(t,q,s(n[g.align.label]));const e=l.create([{id:"send_icon",after:n.icon,type:"icon",wrap_class:"tb_disable_dc"}]);w.append(e),_=w}else if("optin"===e){_=a();let e=ThemifyConstructor.create([{type:"optin_provider",id:"optin"}]);_.append(t,e)}else _=t;w.appendChild(v)}else"sh"===t&&"send"!==e&&(_=x.checkbox(e+"_active"));null!==_&&c.appendChild(_),"l"===t&&"sendcopy"===e&&c.appendChild(l.create([{id:"field_"+e+"_subject",after:n.cnt_sndc_sub,type:"text",class:""}])),"l"===t&&"captcha"===e&&c.appendChild(l.create([{type:"captcha",id:"captcha_provider",recaptcha:"r",hcaptcha:"h",hide_empty:!0,label:!1}])),o.appendChild(c)}h.appendChild(o)}return u.appendChild(h),p.append(b,f,u),t.on("tb_editing_contact_setting",(e=>{const i=e.querySelector("#template");""===i.value&&(i.value=c.default_template),d=new r(p,l),t.on("themify_builder_lightbox_close",(()=>{d=null}),!0)}),!0),p}},e.Forms.registerValidator("tb_contact_recipient",(t=>""!==e.LightBox.el.querySelector("#user_role").value||(!!t.closest(".mail_contact.tb_has_dc")?.querySelector(".tpb_dc_toggle input").checked||""!==t.value.trim()&&e.Forms.getValidator("email")(t))))})),t.on("themify_builder_ready",(()=>{t.requestIdleCallback((()=>{_.Themify.loadCss(c.url+"assets/admin.css",null,c.v,_.document.tfId("themify-builder-lightbox-css")?.nextElementSibling)}),-1,1500)}),!0,e.is_builder_ready)})(tb_app,Themify,document,tb_createElement,tb_createDocumentFragment,themifyBuilder.i18n.label,themifyBuilder.contact_vars,jQuery,void 0);