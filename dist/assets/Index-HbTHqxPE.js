import{d as N,r as c,a as g,o as f,c as U,b as l,n as w,e as t,w as o,f as p,g as n,h as v,i as b,_ as X}from"./index--hdqjN_Y.js";const q={class:"h-[100vh] w-[100vw] flex items-center max-w-[1200px]",style:{margin:"0 auto"}},$={class:"w-[434px] m-4"},P={class:"text-2xl mb-[60px]"},M={class:"flex items-center mb-10"},S={class:"text-center"},T=N({__name:"Index",setup(j){const k=(u,e,d)=>{e===""?d(new Error("请输入手机号")):/^1\d{10}$/.test(e)?d():d(new Error("请输入正确手机号"))},a=c(!0),_=c(!1),m=c(),r=g({phone:"",password:"",code:""}),V=g({phone:[{required:!0,validator:k,trigger:"change"}],code:[{required:!0,message:"请输入验证码",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}]}),y=()=>{alert("d")},C=()=>{m.value&&m.value.validate(u=>{console.log(u?"submit!":"error submit!")})};function h(u){r.phone=u.replace(/[^\d]/g,"")}return(u,e)=>{const d=n("el-icon"),x=n("el-input"),i=n("el-form-item"),E=n("el-button"),B=n("el-form"),z=n("el-checkbox"),I=n("router-link");return f(),U("div",null,[e[13]||(e[13]=l("header",{class:"max-w-[1852] w-full h-[72px] px-4",style:{"margin-bottom":"-72px"}},"logo",-1)),l("div",q,[l("main",$,[l("div",P,[l("span",{class:w(["mr-[90px] cursor-pointer",a.value?"text-black":"text-[#a2a2a2]"]),onClick:e[0]||(e[0]=s=>a.value=!0)},"密码登录",2),l("span",{class:w(["cursor-pointer",a.value?"text-[#a2a2a2]":"text-black"]),onClick:e[1]||(e[1]=s=>a.value=!1)},"验证码登录",2)]),t(B,{ref_key:"formEl",ref:m,model:r,rules:V,"label-width":"auto",style:{"max-width":"600px"}},{default:o(()=>[t(i,{label:"",prop:"phone"},{default:o(()=>[t(x,{modelValue:r.name,"onUpdate:modelValue":e[2]||(e[2]=s=>r.name=s),modelModifiers:{number:!0},placeholder:"请输入手机号码",size:"large",class:"h-[56px] rounded-3xl",onInput:h},{prefix:o(()=>[t(d,{class:"el-input__icon"},{default:o(()=>e[6]||(e[6]=[p("XX")])),_:1})]),_:1},8,["modelValue"])]),_:1}),a.value?(f(),v(i,{prop:"password",label:"",key:"password"},{default:o(()=>[t(x,{modelValue:r.password,"onUpdate:modelValue":e[3]||(e[3]=s=>r.password=s),placeholder:"请输入密码",size:"large",class:"h-[56px] rounded-3xl",type:"password","show-password":""},{prefix:o(()=>[t(d,{class:"el-input__icon"},{default:o(()=>e[7]||(e[7]=[p("XX")])),_:1})]),_:1},8,["modelValue"])]),_:1})):b("",!0),a.value?b("",!0):(f(),v(i,{prop:"code",label:"",key:"code"},{default:o(()=>[t(x,{modelValue:r.code,"onUpdate:modelValue":e[4]||(e[4]=s=>r.code=s),placeholder:"请输入验证码",size:"large",class:"h-[56px] rounded-3xl",type:"password","show-password":""},{prefix:o(()=>e[8]||(e[8]=[l("span",null,"xx",-1)])),suffix:o(()=>[l("span",{class:"text-[#2563EB] cursor-pointer",onClick:y},"获取验证码")]),_:1},8,["modelValue"])]),_:1})),t(i,{class:"mt-[50px]"},{default:o(()=>[t(E,{type:"primary",onClick:C,class:"w-full !h-[60px] !text-xl !bg-[#E47531] !rounded-3xl !border-0"},{default:o(()=>e[9]||(e[9]=[p("登录")])),_:1})]),_:1})]),_:1},8,["model","rules"]),l("div",M,[t(z,{modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=s=>_.value=s),size:"large",class:"!mr-2"},null,8,["modelValue"]),e[10]||(e[10]=l("p",null,"同意并阅读《用户协议》和《隐私政策》",-1))]),l("div",S,[e[12]||(e[12]=p(" 还没有账号？")),t(I,{to:"/reg",class:"text-[#2563EB]"},{default:o(()=>e[11]||(e[11]=[p("立即注册")])),_:1})])])])])}}}),D=X(T,[["__scopeId","data-v-28d4099a"]]);export{D as default};
