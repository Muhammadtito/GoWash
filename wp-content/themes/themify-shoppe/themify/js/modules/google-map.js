((e,o,a,i)=>{"use strict";let t,n=async(o,n)=>{if(a.google?.maps?.importLibrary)t=null;else{if(!t){const n=new URLSearchParams;n.set("libraries",o),n.set("key",themify_vars.map_key||""),n.set("v","weekly"),n.set("callback","google.maps.__ib__"),a.google??={},google.maps??={},t=new i(((o,a)=>{google.maps.__ib__=o,e.loadJs("https://maps.googleapis.com/maps/api/js?"+n,null,!1).catch(a)}))}await t}return google.maps.importLibrary(o,n)},s=a=>{for(let s=a.length-1;s>-1;--s){let l=a[s];l.classList.contains("tf_map_loaded")||(l.classList.add("tf_map_loaded"),e.requestIdleCallback((async()=>{const a=l.dataset,{address:s,type:r,reverseGeocoding:c,infoWindow:d}=a,m=!c||"false"===c,p=e.isTouch?"0"!==a.mdrag:"1"===a.drag,_=p&&"1"===a.scroll,[{Map:f,MapTypeId:w},{LatLng:g},{Geocoder:u},{Marker:y}]=await i.all([n("maps"),n("core"),m?n("geocoding"):{},n("marker")]);let h,b={zoom:~~a.zoom,center:new g(-34.397,150.644),mapTypeId:w[r.toUpperCase()]||w.ROADMAP,gestureHandling:p?_?"auto":"cooperative":"none",disableDefaultUI:"1"===a.control},k=new f(l,b);if(k.addListener("idle",(()=>{e.trigger("themify_map_loaded",[l,k])})),m){const{results:e}=await(new u).geocode({address:s});h=e[0].geometry.location}else{const e=s.split(",",2);h=new g(parseFloat(e[0]),parseFloat(e[1]))}const v=new y({map:k,position:h});if(k.setCenter(h),d){let a;v.addListener("click",(async function(){const i="themify_builder_map_w";if(!o.tfId(i)){const a=e.createElement("style",{id:i});a.textContent=".themify_builder_map_info_window{color:#000}",o.head.appendChild(a)}if(!a){const{InfoWindow:e}=await n("streetView");a=new e({content:'<div class="themify_builder_map_info_window">'+d+"</div>"})}a.open(this.getMap(),this)}))}t=null}),-1,1e3*(s+1)))}};e.on("tf_gmap_init",(e=>{queueMicrotask((()=>{setTimeout((()=>{s(e)}),0)}))}))})(Themify,document,window,Promise);