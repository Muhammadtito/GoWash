let TBP_ImportFromFile;((t,i,a)=>{"use strict";TBP_ImportFromFile={async read(o,e){if("text/plain"!==o.type){if("application/x-zip-compressed"===o.type||"application/zip"===o.type){await t.loadJs("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",!!i.JSZip,!1);const n=new JSZip,s=await n.loadAsync(o),r=s.files;if(r){const t="export_file.txt",i="builder_gs_data_export.txt",o="custom-fonts.txt";if(r[t]!==a){const e=[];return e.push(s.file(r[t].name).async("text")),r[i]!==a&&e.push(s.file(r[i].name).async("text")),r[o]!==a&&e.push(s.file(r[o].name).async("text")),Promise.all(e)}throw e.importBuilderNotExist}throw e.zipFileEmpty}throw e.importWrongFormat}(new FileReader).tfOn("loadend",(function(t){this.readyState===FileReader.DONE&&resolve(t.target.result)}),{passive:!0,once:!0}).readAsText(o)},async init(a,o,e){const n=t=>(t.preventDefault(),t.returnValue="Are you sure");i.top.tfOn("beforeunload",n);try{await t.loadJs(t.url+"js/admin/notification",!!i.TF_Notification);let[n,s,r]=await this.read(a,e);if(n=JSON.parse(n),n.content){s&&(s=JSON.parse(s)),n=n.content;const i=n[0].templates||n;let a;if(n[0].theme_info||n[0].title){if(await TF_Notification.show("info",e.import_theme_name.replaceAll("%post%",n[0].title)),a=await t.fetch({is_draft:1,action:"tbp_theme_saving",nonce:e.nonce,data:{tbp_theme_name:n[0].title,tbp_theme_screenshot:n[0].theme_info&&n[0].theme_info.tbp_theme_screenshot?n[0].theme_info.tbp_theme_screenshot:n[0].screenshot||""}}),!a.success)throw a.data;a=a.data,a.title=n[0].title}else{if(!n[0].tbp_template_type)throw e.importBuilderNotExist;if(!e.active)throw e.no_active}if(i){if(s){await TF_Notification.show("info",e.import_gs_data);try{await t.fetch({action:"tb_import_gs_posts_ajax",data:s,nonce:e.nonce})}catch(i){try{await t.fetch({action:"tb_import_gs_posts_ajax",data:new Blob([JSON.stringify(s)],{type:"application/json"}),nonce:e.nonce})}catch(t){}}}await o.importTemplate(a?a.id:e.active,i,"file_templates")}return a}throw e.importBuilderNotExist}catch(t){throw t}finally{i.top.tfOff("beforeunload",n)}}}})(Themify,window,void 0);