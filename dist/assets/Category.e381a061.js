import"./vendor.e18121a5.js";/* empty css             *//* empty css               *//* empty css              */import{_ as e,r as a,u as t,g as r,o as l,c as o,w as n,a as i,f as s,q as d,D as c,K as u,h as p,i as m,l as g,j as y,L as f,v,d as b,U as _,e as h,M as k,N as C,O as w,P as x,E as j,R as S,S as F,T as I}from"./index.d0a06d2f.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                   *//* empty css                *//* empty css                  */const D={class:"dialog-footer"};var L=e({__name:"DialogAddCategory",props:{type:String,reload:Function},setup(e){const v=e,b=a(null);t();const _=r({visible:!1,categoryLevel:1,parentId:0,ruleForm:{name:"",rank:""},rules:{name:[{required:"true",message:"名称不能为空",trigger:["change"]}],rank:[{required:"true",message:"编号不能为空",trigger:["change"]}]},id:""}),h=()=>{b.value.validate((e=>{e&&("add"==v.type?c.post("/categories",{categoryLevel:_.categoryLevel,parentId:_.parentId,categoryName:_.ruleForm.name,categoryRank:_.ruleForm.rank}).then((()=>{u.success("添加成功"),_.visible=!1,v.reload&&v.reload()})):c.put("/categories",{categoryId:_.id,categoryLevel:_.categoryLevel,parentId:_.categoryLevel,categoryName:_.ruleForm.name,categoryRank:_.ruleForm.rank}).then((()=>{u.success("修改成功"),_.visible=!1,v.reload&&v.reload()})))}))};return(e,a)=>{const t=p,r=m,c=g,u=y,v=f;return l(),o(v,{title:"add"==_.type?"添加分类":"修改分类",modelValue:_.visible,"onUpdate:modelValue":a[3]||(a[3]=e=>_.visible=e),width:"400px"},{footer:n((()=>[i("span",D,[s(u,{onClick:a[2]||(a[2]=e=>_.visible=!1)},{default:n((()=>[d("取 消")])),_:1}),s(u,{type:"primary",onClick:h},{default:n((()=>[d("确 定")])),_:1})])])),default:n((()=>[s(c,{model:_.ruleForm,rules:_.rules,ref_key:"formRef",ref:b,"label-width":"100px",class:"good-form"},{default:n((()=>[s(r,{label:"商品名称",prop:"name"},{default:n((()=>[s(t,{type:"text",modelValue:_.ruleForm.name,"onUpdate:modelValue":a[0]||(a[0]=e=>_.ruleForm.name=e)},null,8,["modelValue"])])),_:1}),s(r,{label:"排序值",prop:"rank"},{default:n((()=>[s(t,{type:"number",modelValue:_.ruleForm.rank,"onUpdate:modelValue":a[1]||(a[1]=e=>_.ruleForm.rank=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])}}},[["__file","D:/1-web/web/6codeDBs/vue3-admin/src/components/DialogAddCategory.vue"]]);const V={class:"header"},z=["onClick"],P=["onClick"],T=i("a",{style:{cursor:"pointer"}},"删除",-1);var B=e({__name:"Category",setup(e){const p=a(null),m=v(),g=t(),f=r({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,type:"add",level:1,parent_id:0});b((()=>{B()})),_((()=>{console.log(f.pageSize)}));const D=m.afterEach((e=>{["category","level2","level3"].includes(e.name)&&B()}));h((()=>{D()}));const B=()=>{const{level:e=1,parent_id:a=0}=g.query;f.loading=!0,c.get("/categories",{params:{pageNumber:f.currentPage,pageSize:f.pageSize,categoryLevel:e,parentId:a}}).then((t=>{f.tableData=t.list,f.total=t.totalCount,f.currentPage=t.currPage,f.loading=!1,f.level=e,f.parentId=a}))},q=e=>{f.currentPage=e,B()},N=()=>{f.type="add",p.value.open()},R=e=>{f.multipleSelection=e},U=()=>{f.multipleSelection.length?c.delete("/categories",{data:{ids:f.multipleSelection.map((e=>e.categoryId))}}).then((()=>{u.success("删除成功"),B()})):u.error("请选择项")};return(e,a)=>{const t=y,r=k,g=C,v=w,b=x,_=j;return l(),o(_,{class:"category-container"},{header:n((()=>[i("div",V,[s(t,{type:"primary",icon:S(F),onClick:N},{default:n((()=>[d("增加")])),_:1},8,["icon"]),s(r,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:U},{reference:n((()=>[s(t,{type:"danger",icon:S(I)},{default:n((()=>[d("批量删除")])),_:1},8,["icon"])])),_:1})])])),default:n((()=>[s(v,{load:f.loading,ref:"multipleTable",data:f.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:R},{default:n((()=>[s(g,{type:"selection",width:"55"}),s(g,{prop:"categoryName",label:"分类名称"}),s(g,{prop:"categoryRank",label:"排序值",width:"120"}),s(g,{prop:"createTime",label:"添加时间",width:"200"}),s(g,{label:"操作",width:"220"},{default:n((e=>[i("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:a=>{return t=e.row.categoryId,f.type="edit",void p.value.open(t);var t}},"修改",8,z),i("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:a=>(e=>{const a=e.categoryLevel+1;4!=a?m.push({name:`level${a}`,query:{level:a,parent_id:e.categoryId}}):u.error("没有下一级")})(e.row)},"下级分类",8,P),s(r,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:a=>{return t=e.row.categoryId,void c.delete("/categories",{data:{ids:[t]}}).then((()=>{u.success("删除成功"),B()}));var t}},{reference:n((()=>[T])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["load","data"]),s(b,{background:"",layout:"prev, pager, next",total:f.total,"page-size":f.pageSize,"current-page":f.currentPage,onCurrentChange:q},null,8,["total","page-size","current-page"]),s(L,{ref_key:"addCate",ref:p,reload:B,type:f.type},null,8,["type"])])),_:1})}}},[["__file","D:/1-web/web/6codeDBs/vue3-admin/src/views/Category.vue"]]);export{B as default};
