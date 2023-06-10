"use strict";(self.webpackChunkacadify_saas_frontend=self.webpackChunkacadify_saas_frontend||[]).push([[672],{4672:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var a=r(5861),s=r(885),t=r(7757),o=r.n(t),i=r(2791),l=r(6006),c=r(9237),d=r(1244),u=r(5133),m=r(1795),h=r(9271),p=r(2806),f=r(364),v=r(184);var x=function(){var e=(0,h.useHistory)(),n=(0,f.I0)(),r=(0,i.useState)(!1),t=(0,s.Z)(r,2),x=t[0],g=t[1],w=l.Ry().shape({oldPassword:l.Z_().max(255).required("Old password is required"),newPassword:l.Z_().max(255).required("confirm password is required"),confirmPassword:l.Z_().when("newPassword",{is:function(e){return!!(e&&e.length>0)},then:l.Z_().oneOf([l.iH("newPassword")],"Both confirm password must be match!")})}),j=(0,m.TA)({initialValues:{oldPassword:"",newPassword:""},enableReinitialize:!0,validationSchema:w,onSubmit:function(){var r=(0,a.Z)(o().mark((function r(a){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n((0,p.Cp)({currentPassword:a.oldPassword,newPassword:a.newPassword,resetForm:j.resetForm,history:e,setIsLoading:g}));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()});return(0,v.jsxs)("div",{className:"col-sm-12 p-0",children:[(0,v.jsx)(c.Z,{}),(0,v.jsx)("div",{className:"col-sm-12 px-5 py-4",children:(0,v.jsxs)("div",{className:"col-sm-12 ",children:[(0,v.jsx)("div",{className:"col-sm-12 pt-5",children:(0,v.jsx)("h2",{className:"pb-4 color_gray",children:(0,v.jsx)("b",{children:"Change Password"})})}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(m.Hy,{value:j,children:(0,v.jsx)(m.l0,{noValidate:!0,onSubmit:j.handleSubmit,children:(0,v.jsxs)("div",{className:"col-sm-12 ",children:[(0,v.jsxs)("div",{className:"col-sm-12 pl-0",children:[(0,v.jsx)("label",{className:"label_login m-0",children:"Old Password"}),(0,v.jsx)(u.Z,{type:"oldPassword",placeholder:"Enter old password",name:"oldPassword",value:j.values&&j.values.oldPassword,onHandleChange:j.handleChange,error:Boolean(j.touched.oldPassword&&j.errors.oldPassword),helpertext:j.errors.oldPassword})]}),(0,v.jsxs)("div",{className:"col-sm-12 pl-0 pt-4",children:[(0,v.jsx)("label",{className:"label_login m-0",children:"New Password"}),(0,v.jsx)(u.Z,{name:"newPassword",placeholder:"Enter new password",value:j.values&&j.values.newPassword,onHandleChange:j.handleChange,error:Boolean(j.touched.newPassword&&j.errors.newPassword),helpertext:j.errors.newPassword})]}),(0,v.jsxs)("div",{className:"col-sm-12 pl-0 pt-4",children:[(0,v.jsx)("label",{className:"label_login m-0",children:"Confirm confirmPassword"}),(0,v.jsx)(u.Z,{type:"confirmPassword",placeholder:"Enter new password",name:"confirmPassword",value:j.values&&j.values.confirmPassword,onHandleChange:j.handleChange,error:Boolean(j.touched.confirmPassword&&j.errors.confirmPassword),helpertext:j.errors.confirmPassword})]}),(0,v.jsx)("div",{className:"col-sm-12 pl-0 mt-4",children:(0,v.jsxs)(d.Z,{size:"sm",className:" button_style_login",variant:"outline",isLoading:x,onHandleClick:j.handleSubmit,children:["Change"," ",(0,v.jsxs)("span",{className:"right_arrow_login",children:[" ",(0,v.jsx)("i",{className:"fas fa-arrow-right"})," "]})]})})]})})})}),(0,v.jsx)("div",{className:"col-sm-6 m-auto text-center",children:(0,v.jsx)("img",{src:"../images/shield.gif",className:"img-fluid  img_width_shield"})})]})]})})]})}},9237:function(e,n,r){r.d(n,{Z:function(){return P}});var a=r(885),s=r(7022),t=r(8390),o=r(2664),i=r(1523),l=r(2791),c=r(364),d=r(9271),u=r(1413),m=r(6863),h=r(2065),p=r(7205),f=r(6250),v=r(9407),x=r(7608),g=r(5172),w=r(1130),j=r(2806),b=r(2025),y=r(184),Z=(0,m.ZP)((function(e){return(0,y.jsx)(f.Z,(0,u.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var n=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:n.spacing(1),minWidth:180,color:"light"===n.palette.mode?"rgb(55, 65, 81)":n.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:n.palette.text.secondary,marginRight:n.spacing(1.5)},"&:active":{backgroundColor:(0,h.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}}}}));function _(){var e=(0,b.k6)(),n=(0,c.I0)(),r=l.useState(null),s=(0,a.Z)(r,2),t=s[0],o=s[1],i=Boolean(t);return(0,y.jsxs)("div",{children:[(0,y.jsx)(p.Z,{id:"demo-customized-button","aria-controls":i?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,disableElevation:!0,onClick:function(e){o(e.currentTarget)},endIcon:(0,y.jsx)(g.Z,{}),className:"rounded btn-outline-primary btn_style_dash ",children:"A"}),(0,y.jsxs)(Z,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:t,open:i,onClose:function(){o(null)},children:[(0,y.jsxs)(v.Z,{onClick:function(){return e.push("/change-password")},disableRipple:!0,children:[(0,y.jsx)(w.Z,{}),"Change Password"]}),(0,y.jsxs)(v.Z,{onClick:function(){return n((0,j.kS)())},disableRipple:!0,children:[(0,y.jsx)(x.Z,{}),"Sign out"]})]})]})}var P=function(){(0,c.I0)();var e=(0,l.useState)(!1),n=(0,a.Z)(e,2);return n[0],n[1],(0,d.useHistory)(),(0,y.jsx)("div",{className:"col-sm-12 pb-2 pt-1 border_bottom_header",children:(0,y.jsx)(o.Z,{bg:"",expand:"lg",children:(0,y.jsxs)(s.Z,{fluid:!0,children:[(0,y.jsx)(o.Z.Brand,{href:"/Dashboard-Admin",children:(0,y.jsx)("div",{className:"col-sm-12",children:(0,y.jsx)("img",{src:"../images/logo.png",className:"img-fluid "})})}),(0,y.jsx)(o.Z.Toggle,{"aria-controls":"navbarScroll"}),(0,y.jsxs)(o.Z.Collapse,{id:"navbarScroll",children:[(0,y.jsxs)(t.Z,{className:"mr-md-auto my-2 my-lg-0 pt-2",style:{maxHeight:"100px"},navbarScroll:!0,children:[(0,y.jsx)(t.Z.Link,{className:"font_header_admin1 pl-md-4",children:(0,y.jsx)(i.rU,{to:"/advisorListing",children:"Advisors Management"})}),(0,y.jsx)(t.Z.Link,{className:"font_header_admin1 pl-md-4",children:(0,y.jsx)(i.rU,{to:"#",children:"Seller Management"})}),(0,y.jsx)(t.Z.Link,{className:"font_header_admin1 pl-md-4",children:(0,y.jsx)(i.rU,{to:"#",children:"Buyer Management"})})]}),(0,y.jsx)("div",{class:"dropdown dropleft ",children:(0,y.jsx)(_,{})})]})]})})})}},1244:function(e,n,r){r.d(n,{Z:function(){return u}});var a=r(1413),s=r(4942),t=r(5987),o=(r(2791),r(1694)),i=r.n(o),l="style_btnDesign__SmFZj",c=r(184),d=["className","onHandleClick","children","variant","color","type","size","shape","isLoading"];function u(e){var n=e.className,r=e.onHandleClick,o=e.children,u=e.variant,m=e.color,h=e.type,p=e.size,f=e.shape,v=e.isLoading,x=(0,t.Z)(e,d),g=i()("btn ".concat(l),u?"btn-".concat(u,"-").concat(m):"btn-".concat(m),(0,s.Z)({},"btn-".concat(p),p),f,n);return(0,c.jsx)("button",(0,a.Z)((0,a.Z)({className:g,type:h,disabled:v,onClick:r},x),{},{children:v?(0,c.jsx)("div",{class:"spinner-border",role:"status"}):o}))}u.defaultProps={className:"",variant:null,size:null,isLoading:!1,onHandleClick:function(){},color:"primary",type:"button",shape:"rounded-1"}},5133:function(e,n,r){r.d(n,{Z:function(){return c}});r(2791);var a=r(7990),s="style_inputFormDiv__YOxui",t="style_inputDesign__QioYv",o="style_errorMessage__exT93",i=r(184);function l(e){var n=e.placeholder,r=e.type,l=e.onHandleChange,c=e.value,d=e.name,u=e.className,m=e.error,h=e.disabled,p=e.helpertext,f=e.inputFormDiv;return(0,i.jsxs)("div",{className:"".concat(s," ").concat(f),children:[(0,i.jsx)("input",{type:r,placeholder:n,name:d,className:"".concat(t," ").concat(u),disabled:h,onChange:l,value:c}),m?(0,i.jsx)(a.Z,{className:o,children:p}):null]})}l.defaultProps={placeholder:"",type:"",value:"",name:"",inputFormDiv:"",onHandleChange:function(){},className:null,disabled:null,helpertext:null,error:!0};var c=l},1523:function(e,n,r){r.d(n,{rU:function(){return f}});var a=r(9271),s=r(4578),t=r(2791),o=r(2610),i=r(7462),l=r(3366),c=r(6111);t.Component;t.Component;var d=function(e,n){return"function"===typeof e?e(n):e},u=function(e,n){return"string"===typeof e?(0,o.createLocation)(e,null,null,n):e},m=function(e){return e},h=t.forwardRef;"undefined"===typeof h&&(h=m);var p=h((function(e,n){var r=e.innerRef,a=e.navigate,s=e.onClick,o=(0,l.Z)(e,["innerRef","navigate","onClick"]),c=o.target,d=(0,i.Z)({},o,{onClick:function(e){try{s&&s(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return d.ref=m!==h&&n||r,t.createElement("a",d)}));var f=h((function(e,n){var r=e.component,s=void 0===r?p:r,f=e.replace,v=e.to,x=e.innerRef,g=(0,l.Z)(e,["component","replace","to","innerRef"]);return t.createElement(a.__RouterContext.Consumer,null,(function(e){e||(0,c.default)(!1);var r=e.history,a=u(d(v,e.location),e.location),l=a?r.createHref(a):"",p=(0,i.Z)({},g,{href:l,navigate:function(){var n=d(v,e.location),a=(0,o.createPath)(e.location)===(0,o.createPath)(u(n));(f||a?r.replace:r.push)(n)}});return m!==h?p.ref=n||x:p.innerRef=x,t.createElement(s,p)}))})),v=function(e){return e},x=t.forwardRef;"undefined"===typeof x&&(x=v);x((function(e,n){var r=e["aria-current"],s=void 0===r?"page":r,o=e.activeClassName,m=void 0===o?"active":o,h=e.activeStyle,p=e.className,g=e.exact,w=e.isActive,j=e.location,b=e.sensitive,y=e.strict,Z=e.style,_=e.to,P=e.innerRef,N=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return t.createElement(a.__RouterContext.Consumer,null,(function(e){e||(0,c.default)(!1);var r=j||e.location,o=u(d(_,r),r),l=o.pathname,C=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=C?(0,a.matchPath)(r.pathname,{path:C,exact:g,sensitive:b,strict:y}):null,S=!!(w?w(k,r):k),R="function"===typeof p?p(S):p,H="function"===typeof Z?Z(S):Z;S&&(R=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((function(e){return e})).join(" ")}(R,m),H=(0,i.Z)({},H,h));var z=(0,i.Z)({"aria-current":S&&s||null,className:R,style:H,to:o},N);return v!==x?z.ref=n||P:z.innerRef=P,t.createElement(f,z)}))}))},5861:function(e,n,r){function a(e,n,r,a,s,t,o){try{var i=e[t](o),l=i.value}catch(c){return void r(c)}i.done?n(l):Promise.resolve(l).then(a,s)}function s(e){return function(){var n=this,r=arguments;return new Promise((function(s,t){var o=e.apply(n,r);function i(e){a(o,s,t,i,l,"next",e)}function l(e){a(o,s,t,i,l,"throw",e)}i(void 0)}))}}r.d(n,{Z:function(){return s}})}}]);
//# sourceMappingURL=672.98e0bf56.chunk.js.map