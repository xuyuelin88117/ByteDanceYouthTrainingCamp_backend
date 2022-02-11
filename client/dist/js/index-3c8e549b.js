var Y=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var z=(b,p,m)=>p in b?Y(b,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):b[p]=m,A=(b,p)=>{for(var m in p||(p={}))X.call(p,m)&&z(b,m,p[m]);if(P)for(var m of P(p))Z.call(p,m)&&z(b,m,p[m]);return b},I=(b,p)=>H(b,J(p));import{f as U,g as q,r as v,o as g,c as w,a as t,s as l,q as T,F as V,Q as O,u as o,G as M,b as h,a7 as ee,P as R,x as L,y as G,z as B,A as te,m as S,Y as oe,k as le,i as ue,ad as ae}from"./vendor-6d6bc7e7.js";import{_ as j,e as K,P as ne,g as se,T as ie}from"./index-525df1be.js";const re={class:"tableWapper"},ce={name:"TableEditor"},de=U(I(A({},ce),{setup(b){const p=K(),{table:m}=p;function $(i){i.errors.typeErr=i.checkType(),i.dataDef.defed?i.checkColDefine():i.initColDefine(),i.dataSift.defed||i.initColSift(),i.errors.haveError=i.errors.haveError||i.errors.typeErr,m.refreshComputedTable()}const x=q(()=>m.mappedTable());function r({row:i,rowIndex:e,column:_,columnIndex:E}){var u;const n=m.cols.find(s=>_.field===s.cKey);return((u=n==null?void 0:n.errors)==null?void 0:u.haveError)&&(n.errors.maxErr.has(i.rowId)||n.errors.minErr.has(i.rowId)||n.errors.nnErr.has(i.rowId))?{backgroundColor:"#FF6A6A",color:"#fff"}:{}}return(i,e)=>{const _=v("vxe-column"),E=v("vxe-input"),n=v("vxe-table");return g(),w("div",re,[t(n,{height:"100%",class:"mytable-style","edit-config":{trigger:"click",mode:"cell"},data:o(x),"cell-style":r},{default:l(()=>[(g(),T(_,{key:-1,field:"rowId",title:"ID"})),(g(!0),w(V,null,O(o(m).cols.filter(u=>!u.computed),u=>(g(),T(_,{key:u.cid,field:u.cKey,title:u.cname,"edit-render":{autofocus:".vxe-input--inner"}},{edit:l(({row:s})=>[t(E,{modelValue:s[u.cKey],"onUpdate:modelValue":a=>s[u.cKey]=a,modelModifiers:{lazy:!0},onBlur:a=>$(u)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["field","title","edit-render"]))),128)),(g(!0),w(V,null,O(o(m).cols.filter(u=>u.computed),u=>(g(),T(_,{key:u.cid,field:u.cKey,title:u.cname},null,8,["field","title"]))),128))]),_:1},8,["data"])])}}}));var pe=j(de,[["__scopeId","data-v-1e9cf44e"]]);const _e=b=>(L("data-v-613274ed"),b=b(),G(),b),fe={class:"title"},me=_e(()=>h("h3",null,"\u9009\u62E9\u60A8\u9700\u8981\u7684\u6570\u636E",-1)),ve=B("\u8BA1\u7B97\u5C5E\u6027"),Ee={class:"table"},be=B(" \u6CE8: \u53EA\u6709number, date, boolean\u7C7B\u578B\u6570\u636E\u652F\u6301\u53C2\u4E0E\u8FD0\u7B97 "),Ce={name:"FieldSelect"},ye=U(I(A({},Ce),{setup(b){const p=[{title:"\u5B57\u6BB5",dataIndex:"title",key:"title"},{title:"\u793A\u4F8B",dataIndex:"demo",key:"demo"}],m=K(),{table:$}=m,x=q(()=>$.cols.map(s=>({cid:s.cid,title:s.cname,demo:s.computed?`=${s.equation}`:$.data[0][s.cKey]}))),r=p,i={onChange:(s,a)=>{$.cols.forEach(f=>{!!a.find(c=>c.cid===f.cid)!==f.selected&&(f.selected=!f.selected,f.selected===!1&&(f.initColDefine(),f.initColSift()))})},getCheckboxProps:s=>{const a=$.cols.find(f=>f.cid===s.cid);return(a==null?void 0:a.computed)?{checked:!0,disabled:!0}:{}}},e=M({showCompModal:!1,compTitle:"",compEquation:"",rawEquation:[],lastSelect:[],compCols:[],opsCount:0});function _(s){let a=!1,f=null;if(e.lastSelect.forEach(d=>{s.includes(d)||(a=!0,f=d)}),a||s.forEach(d=>{e.lastSelect.includes(d)||(f=d)}),a){const d=e.compCols.findIndex(c=>c.value===f);d+1&&e.compCols.splice(d,1)}else{const d=e.compCols.findIndex(F=>F.value===f),c=M({value:e.compCols[d].value,label:e.compCols[d].label});if(/F-\d+$/.test(c.value)?c.value=c.value.replace(/F-\d+$/,`F-${e.opsCount++}`):c.value=c.value.replace(/\d+$/,`${e.opsCount++}`),d+1){//! 为了保证options不变顺序, 不破坏proxy只能这样搞
let F=e.compCols.length;for(e.compCols.push(...e.compCols.slice(0,d+1),c,...e.compCols.slice(d+1));F--;)e.compCols.shift()}}e.lastSelect=s}function E(){te(()=>{e.showCompModal?document.querySelectorAll(".ant-select-dropdown").forEach(s=>s.classList.add("mulTagSelect")):document.querySelectorAll(".ant-select-dropdown").forEach(s=>s.classList.remove("mulTagSelect"))})}function n(){if(e.compTitle.trim().length===0&&e.showCompModal){S.error("\u5B57\u6BB5\u540D\u4E0D\u80FD\u4E3A\u7A7A");return}e.compEquation=e.rawEquation.map(s=>{let a=s;return/-F-\d+$/.test(a)?a=a.replace(/-F-\d+$/,""):(a=`$${a}`,a=a.replace(/-\d+$/,"$")),a}).join(""),$.addComputedValue({equation:e.compEquation,cname:e.compTitle}),u()}function u(){e.showCompModal=!e.showCompModal,e.opsCount=0,e.rawEquation=[],e.compEquation="",e.compTitle="",e.lastSelect=[],e.compCols=$.cols.filter(s=>!s.computed&&s.compareable).map(s=>({value:`${s.cKey}-${e.opsCount++}`,label:s.cname})),e.compCols.push({value:`(-F-${e.opsCount++}`,label:"("},{value:`)-F-${e.opsCount++}`,label:")"},{value:`--F-${e.opsCount++}`,label:"-"},{value:`+-F-${e.opsCount++}`,label:"+"},{value:`*-F-${e.opsCount++}`,label:"*"},{value:`/-F-${e.opsCount++}`,label:"/"},{value:`^-F-${e.opsCount++}`,label:"^"},{value:`&-F-${e.opsCount++}`,label:"&"},{value:`|-F-${e.opsCount++}`,label:"|"},{value:`<<-F-${e.opsCount++}`,label:"<<"},{value:`>>-F-${e.opsCount++}`,label:">>"},{value:`>>>-F-${e.opsCount++}`,label:">>>"},{value:`sqrt-F-${e.opsCount++}`,label:"sqrt"},{value:`sin-F-${e.opsCount++}`,label:"sin"},{value:`cos-F-${e.opsCount++}`,label:"cos"},{value:`tan-F-${e.opsCount++}`,label:"tan"},{value:`pi-F-${e.opsCount++}`,label:"pi"},{value:`e-F-${e.opsCount++}`,label:"e"})}return(s,a)=>{const f=v("a-button"),d=v("a-table"),c=v("a-input"),F=v("a-form-item"),C=v("a-select"),k=v("a-form"),N=v("a-modal");return g(),w(V,null,[h("div",fe,[me,t(f,{type:"primary",ghost:"",onClick:u},{default:l(()=>[t(o(ee)),ve]),_:1})]),h("div",Ee,[t(d,{"row-key":D=>D.cid,pagination:!1,"row-selection":i,columns:o(r),"data-source":o(x)},{name:l(({text:D})=>[h("a",null,R(D),1)]),_:1},8,["row-key","columns","data-source"])]),h("div",null,[t(N,{visible:o(e).showCompModal,"onUpdate:visible":a[2]||(a[2]=D=>o(e).showCompModal=D),title:"\u5B9A\u4E49\u8BA1\u7B97\u5C5E\u6027\u5217",onOk:n},{default:l(()=>[t(k,{"label-col":{span:4},"wrapper-col":{span:14}},{default:l(()=>[t(F,{label:"\u5B57\u6BB5\u540D"},{default:l(()=>[t(c,{value:o(e).compTitle,"onUpdate:value":a[0]||(a[0]=D=>o(e).compTitle=D)},null,8,["value"])]),_:1}),t(F,{label:"\u8868\u8FBE\u5F0F"},{default:l(()=>[t(C,{value:o(e).rawEquation,"onUpdate:value":a[1]||(a[1]=D=>o(e).rawEquation=D),options:o(e).compCols,mode:"multiple",placeholder:"Please select",style:{width:"200px"},onChange:_,onDropdownVisibleChange:E},null,8,["value","options"])]),_:1})]),_:1}),be]),_:1},8,["visible"])])],64)}}}));var Be=j(ye,[["__scopeId","data-v-613274ed"]]);const Fe=B("\u91CD\u7F6E"),he=B("\u786E\u5B9A"),$e={name:"FieldSift"},Q=U(I(A({},$e),{props:{colId:{type:Number,required:!0},modalType:{type:String,required:!0}},setup(b){const p=b,m=K(),{table:$}=m,{modalType:x}=p,r=$.cols.find(d=>d.cid===p.colId)||null,i=r?r[x]:null,e=q(()=>x==="dataDef"?"\u5B9A\u4E49\u60A8\u7684\u6570\u636E":"\u7B5B\u9009\u60A8\u7684\u6570\u636E"),_=q(()=>r?r.compareable:null);function E(){r==null||r.initColDefine()}function n(){r==null||r.initColSift()}function u(){r==null||r.checkColDefine(),r&&(r.dataDef.onEdit=!1)}function s(){r&&(r.dataSift.onEdit=!1)}function a(){r&&(r.dataDef.defed=!0)}function f(){r&&(r.dataSift.defed=!0)}return(d,c)=>{const F=v("a-button"),C=v("a-input"),k=v("a-form-item"),N=v("a-switch"),D=v("a-form"),W=v("a-modal");return g(),T(W,{visible:o(i).onEdit,"onUpdate:visible":c[8]||(c[8]=y=>o(i).onEdit=y),title:o(e)},oe({default:l(()=>[o(x)==="dataDef"?(g(),T(D,{key:0,model:o(i),"label-col":{span:4},"wrapper-col":{span:14}},{default:l(()=>[t(k,{label:"\u6700\u5927\u503C"},{default:l(()=>[t(C,{value:o(i).max,"onUpdate:value":c[0]||(c[0]=y=>o(i).max=y),disabled:!o(_),onChange:a},null,8,["value","disabled"])]),_:1}),t(k,{label:"\u6700\u5C0F\u503C"},{default:l(()=>[t(C,{value:o(i).min,"onUpdate:value":c[1]||(c[1]=y=>o(i).min=y),disabled:!o(_),onChange:a},null,8,["value","disabled"])]),_:1}),t(k,{label:"\u975E\u7A7A"},{default:l(()=>[t(N,{checked:o(i).nn,"onUpdate:checked":c[2]||(c[2]=y=>o(i).nn=y),onChange:a},null,8,["checked"])]),_:1})]),_:1},8,["model"])):(g(),T(D,{key:1,model:o(i),"label-col":{span:4},"wrapper-col":{span:14}},{default:l(()=>[t(k,{label:"\u6700\u5927\u503C"},{default:l(()=>[t(C,{value:o(i).max,"onUpdate:value":c[3]||(c[3]=y=>o(i).max=y),disabled:!o(_),onChange:f},null,8,["value","disabled"])]),_:1}),t(k,{label:"\u6700\u5C0F\u503C"},{default:l(()=>[t(C,{value:o(i).min,"onUpdate:value":c[4]||(c[4]=y=>o(i).min=y),disabled:!o(_),onChange:f},null,8,["value","disabled"])]),_:1}),t(k,{label:"\u524D\u767E\u5206\u4E4B(%)"},{default:l(()=>[t(C,{value:o(i).top,"onUpdate:value":c[5]||(c[5]=y=>o(i).top=y),disabled:!o(_),onChange:f},null,8,["value","disabled"])]),_:1}),t(k,{label:"\u540E\u767E\u5206\u4E4B(%)"},{default:l(()=>[t(C,{value:o(i).last,"onUpdate:value":c[6]||(c[6]=y=>o(i).last=y),disabled:!o(_),onChange:f},null,8,["value","disabled"])]),_:1}),t(k,{label:"\u975E\u7A7A"},{default:l(()=>[t(N,{checked:o(i).nn,"onUpdate:checked":c[7]||(c[7]=y=>o(i).nn=y),onChange:f},null,8,["checked"])]),_:1})]),_:1},8,["model"]))]),_:2},[o(x)==="dataDef"?{name:"footer",fn:l(()=>[t(F,{key:"reset",onClick:E},{default:l(()=>[Fe]),_:1}),t(F,{key:"back",type:"primary",onClick:u},{default:l(()=>[he]),_:1})])}:{name:"footer",fn:l(()=>[t(F,{key:"reset",onClick:n},{default:l(()=>[B("\u91CD\u7F6E")]),_:1}),t(F,{key:"back",type:"primary",onClick:s},{default:l(()=>[B("\u786E\u5B9A")]),_:1})])}]),1032,["visible","title"])}}}));const xe=b=>(L("data-v-43be8ab1"),b=b(),G(),b),De=xe(()=>h("div",{class:"title"},[h("h3",null,"\u5B9A\u4E49\u60A8\u7684\u6570\u636E")],-1)),ge={class:"table"},ke=B("\u70B9\u51FB\u5B9A\u4E49"),Se=B("\u70B9\u51FB\u7B5B\u9009"),we={name:"FieldDefine"},Te=U(I(A({},we),{setup(b){const p=[{title:"\u5B57\u6BB5",dataIndex:"cname",key:"cname"},{title:"\u6570\u636E\u7C7B\u578B",slots:{customRender:"defineType"},key:"defineType"},{title:"\u6570\u636E\u5B9A\u4E49",slots:{customRender:"defineRange"},key:"defineRange"},{title:"\u7B5B\u9009",slots:{customRender:"defineSift"},key:"defineSift"},{title:"\u9519\u8BEF",slots:{customRender:"errors"},key:"errors"}],m=K(),$=M(m.table),x=q(()=>$.cols.filter(n=>n.selected)),r=p,i=M(ne.colType.map(n=>({value:n,label:n})));function e(n,u){const s=$.cols.find(a=>a.cid===n);!s||(s[u].onEdit=!s[u].onEdit)}function _(n){n.initColDefine(),n.initColSift(),n.errors.typeErr=n.checkType(),n.errors.haveError=n.errors.haveError||n.errors.typeErr}function E(n){var s,a,f,d,c,F;if(!n.errors.haveError)return"\u672A\u68C0\u67E5\u5230\u9519\u8BEF";let u="";return n.errors.typeErr&&(u+=`\u4E0D\u80FD\u5B9A\u4E49\u4E3A${n.type}\u7C7B\u578B`),((a=(s=n.errors)==null?void 0:s.maxErr)==null?void 0:a.size)&&(u+=u.length?" / ID=":"ID=",n.errors.maxErr.forEach(C=>{u+=`${C} `}),u+=`\u5927\u4E8E\u6700\u5927\u503C
`),((d=(f=n.errors)==null?void 0:f.minErr)==null?void 0:d.size)&&(u+=u.length?" / ID=":"ID=",n.errors.minErr.forEach(C=>{u+=`${C} `}),u+=`\u5C0F\u4E8E\u6700\u5C0F\u503C
`),((F=(c=n.errors)==null?void 0:c.nnErr)==null?void 0:F.size)&&(u+=u.length?" / ID=":"ID=",n.errors.nnErr.forEach(C=>{u+=`${C} `}),u+="\u5B58\u5728\u7A7A\u503C"),u}return(n,u)=>{const s=v("a-select"),a=v("a-button"),f=v("a-table");return g(),w(V,null,[De,h("div",ge,[t(f,{"row-key":d=>d.cid,pagination:!1,columns:o(r),"data-source":o(x)},{defineType:l(({record:d})=>[t(s,{ref:"select",value:d.type,"onUpdate:value":c=>d.type=c,options:o(i),onChange:c=>_(d)},null,8,["value","onUpdate:value","options","onChange"])]),defineRange:l(({record:d})=>[t(a,{type:"primary",onClick:c=>e(d.cid,"dataDef")},{default:l(()=>[ke]),_:2},1032,["onClick"]),t(Q,{"col-id":d.cid,"modal-type":"dataDef"},null,8,["col-id"])]),defineSift:l(({record:d})=>[t(a,{type:"primary",onClick:c=>e(d.cid,"dataSift")},{default:l(()=>[Se]),_:2},1032,["onClick"]),t(Q,{"col-id":d.cid,"modal-type":"dataSift"},null,8,["col-id"])]),errors:l(({record:d})=>[B(R(E(d)),1)]),_:1},8,["row-key","columns","data-source"])])],64)}}}));var Ae=j(Te,[["__scopeId","data-v-43be8ab1"]]);const Ie={class:"wapper"},Ue=B(" \u9009\u5B9A\u6570\u636E\u6E90 "),qe={id:"tableSelects"},Ve={id:"TableEditor"},Me={id:"FieldSelect"},Ke={id:"FiledDefs"},Ne={id:"tableSubmit"},je=B("\u4E0B\u4E00\u6B65"),Re=B("\u4FDD\u5B58\u8868\u683C"),Pe=B("\u4F7F\u7528\u9009\u5B9A\u7684\u5B57\u6BB5"),ze=B("\u4F7F\u7528\u5168\u90E8\u5B57\u6BB5"),Oe=B("\u4F7F\u7528\u7B5B\u9009\u540E\u6570\u636E"),Le=B("\u4F7F\u7528\u5168\u90E8\u6570\u636E"),Ge=U({setup(b){const p=K(),{table:m}=p,$=le(),x=se();ue(async()=>{p.project_id=x,await p.getTable(p.project_id)||ae.open({message:"\u7F51\u7EDC\u9519\u8BEF",description:"\u8BF7\u6C42\u6570\u636E\u5931\u8D25, \u8BF7\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC.",duration:0})});const r=M({expVis:!1,save1:!0,save2:!0,curType:0});function i(_){r.curType=_,r.expVis=!0}function e(){if(!m.geted){S.error("\u8868\u683C\u83B7\u53D6\u5931\u8D25"),r.expVis=!1;return}if(m.cols.find(_=>{var E;return!_.computed&&((E=_==null?void 0:_.errors)==null?void 0:E.haveError)})){S.error("\u5B58\u5728\u6709\u8BEF\u6570\u636E, \u65E0\u6CD5\u7EE7\u7EED"),r.expVis=!1;return}if(p.tableExport=m.exportTable(r.save1,r.save2),r.curType)p.putTable(p.project_id).then(_=>{_.code?S.error("\u4FDD\u5B58\u5931\u8D25"):(S.success("\u4FDD\u5B58\u6210\u529F"),r.expVis=!1)},()=>{S.error("\u4FDD\u5B58\u5931\u8D25")});else{const _=p.tableExport.cols.filter(E=>{var n;return(n=ie.colType.find(u=>u.typeName===E.type))==null?void 0:n.compareable});if(!_.length){S.error("\u53EF\u8BA1\u7B97\u5B57\u6BB5\u6570\u5C11\u4E8E1");return}p.tableExport.x=_.slice(0).shift().cKey,p.tableExport.y=_.slice(0).pop().cKey,$.push("visual")}}return(_,E)=>{const n=v("a-col"),u=v("a-row"),s=v("a-button"),a=v("a-radio"),f=v("a-radio-group"),d=v("a-form-item"),c=v("a-form"),F=v("a-modal");return g(),w(V,null,[h("div",Ie,[h("header",null,[t(u,null,{default:l(()=>[t(n,{span:3},{default:l(()=>[Ue]),_:1}),t(n,{span:9},{default:l(()=>[B(R(o(m).title),1)]),_:1})]),_:1})]),h("section",qe,[h("div",Ve,[t(pe)]),h("div",Me,[t(Be)])]),h("section",Ke,[t(Ae)]),h("section",Ne,[t(s,{type:"primary",style:{"margin-left":"10px"},onClick:E[0]||(E[0]=C=>i(0))},{default:l(()=>[je]),_:1}),t(s,{type:"primary",onClick:E[1]||(E[1]=C=>i(1))},{default:l(()=>[Re]),_:1})])]),h("div",null,[t(F,{visible:o(r).expVis,"onUpdate:visible":E[4]||(E[4]=C=>o(r).expVis=C),title:"\u4F7F\u7528\u54EA\u4E9B\u6570\u636E?",onOk:e},{default:l(()=>[t(c,null,{default:l(()=>[t(d,{label:"\u4F7F\u7528\u9009\u5B9A\u6570\u636E?"},{default:l(()=>[t(f,{value:o(r).save1,"onUpdate:value":E[2]||(E[2]=C=>o(r).save1=C)},{default:l(()=>[t(a,{value:!0},{default:l(()=>[Pe]),_:1}),t(a,{value:!1},{default:l(()=>[ze]),_:1})]),_:1},8,["value"])]),_:1}),t(d,{label:"\u4F7F\u7528\u7B5B\u9009\u540E\u6570\u636E?"},{default:l(()=>[t(f,{value:o(r).save2,"onUpdate:value":E[3]||(E[3]=C=>o(r).save2=C)},{default:l(()=>[t(a,{value:!0},{default:l(()=>[Oe]),_:1}),t(a,{value:!1},{default:l(()=>[Le]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["visible"])])],64)}}});var He=j(Ge,[["__scopeId","data-v-35f6f5eb"]]);export{He as default};
