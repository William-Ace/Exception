(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1471:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return H}});var s=n(669),t=n(3630),a=n(9630),i=n(7357),o=n(5861),c=n(5568),l=n(3321),d=n(1519),u=n(7294),m=n(5675),h=n.n(m),p=n(4866);n(8522);var g=n(1163),f=n(7536),x=n(7533),j=n(6310),b=n(9499),v=n(4730),Z=n(2034),w=n(5893),N=["control","name","register"];function y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function I(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach(function(r){(0,b.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function E(e){var r=e.control,n=e.name,s=e.register,t=(0,v.Z)(e,N);return(0,w.jsx)(f.Qr,{name:n,control:r,render:function(e){var r,a=e.field,i=e.fieldState.error;return(0,w.jsx)(Z.Z,I(I(I(I({},a),t),{},{error:Boolean(null==i?void 0:i.message),helperText:null==i?void 0:i.message,value:null!==(r=a.value)&&void 0!==r?r:"",fullWidth:!0,InputLabelProps:{shrink:!0},sx:{mt:2,mb:1,height:"50px"}},s(n)),{},{"data-testid":"account-".concat(n)}))}})}var P=j.Ry().shape({email:j.Z_().email().required("This field is required")}),O={email:""},_=function(){var e=(0,f.cI)({resolver:(0,x.X)(P),defaultValues:O}),r=e.handleSubmit,n=e.control,s=e.register,t=(0,u.useCallback)(function(){},[]);return(0,w.jsxs)("form",{onSubmit:r(t),className:"signInForm",children:[(0,w.jsx)(E,{control:n,name:"email",label:"Email",type:"text",variant:"standard",register:s}),(0,w.jsx)(i.Z,{className:"signInForm__buttons",children:(0,w.jsx)(l.Z,{color:"primary",type:"submit",variant:"contained",children:"RECOVER"})})]})},k=j.Ry().shape({email:j.Z_().email().required("This field is required"),password:j.Z_().required("No password provided")}),C={email:"",password:""},T=function(e){var r=e.onForgotPwd,n=e.signInWithEmailAndPassword,s=(0,f.cI)({resolver:(0,x.X)(k),defaultValues:C}),t=s.handleSubmit,a=s.control,o=s.register,c=s.getValues,d=(0,u.useCallback)(function(){var e=c();n(e.email,e.password)},[c,n]);return(0,w.jsxs)("form",{onSubmit:t(d),className:"signInForm","data-testid":"account-sign-in",children:[(0,w.jsx)(E,{control:a,name:"email",label:"Email",type:"text",variant:"standard",register:o}),(0,w.jsx)(E,{name:"password",control:a,label:"Password",type:"password",variant:"standard",register:o}),(0,w.jsxs)(i.Z,{className:"signInForm__buttons",children:[(0,w.jsx)(l.Z,{color:"primary",type:"submit",variant:"contained",children:"SIGN IN"}),(0,w.jsx)(i.Z,{className:"passRecoveryForm__forgotPassword",onClick:r,children:"Forgot password?"})]})]})},S=j.Ry().shape({firstName:j.Z_().required("This field is required"),lastName:j.Z_().required("This field is required"),email:j.Z_().email().required("This field is required"),password:j.Z_().required("No password provided")}),W={firstName:"",lastName:"",email:"",password:""},A=function(e){var r=e.createUserWithEmailAndPassword,n=(0,f.cI)({resolver:(0,x.X)(S),defaultValues:W}),s=n.handleSubmit,t=n.control,a=n.register,o=n.getValues,c=(0,u.useCallback)(function(){return r(o())},[o,r]);return(0,w.jsxs)("form",{onSubmit:s(c),className:"signInForm",children:[(0,w.jsx)(E,{control:t,name:"firstName",label:"First name",type:"text",variant:"standard",register:a}),(0,w.jsx)(E,{control:t,name:"lastName",label:"Last name",type:"text",variant:"standard",register:a}),(0,w.jsx)(E,{control:t,name:"email",label:"Email",type:"text",variant:"standard",register:a}),(0,w.jsx)(E,{control:t,name:"password",label:"Password",type:"password",variant:"standard",register:a}),(0,w.jsx)(i.Z,{className:"signInForm__buttons",children:(0,w.jsx)(l.Z,{color:"primary",type:"submit",variant:"contained",children:"SIGN UP"})})]})},F=n(9589),q=new p.Z.auth.GoogleAuthProvider,R=new p.Z.auth.OAuthProvider("microsoft.com");q.setCustomParameters({prompt:"select_account"}),p.Z.initializeApp({apiKey:"AIzaSyBviOeCokAXqKJdMhKkLjLL-EJIgXNPfsE",authDomain:"project-1934.firebaseapp.com",projectId:"project-1934",storageBucket:"project-1934.appspot.com",messagingSenderId:"745239468727",appId:"1:745239468727:web:79fca89204e9e9c464cb32",measurementId:"G-VT27HK3Z0V"});var G=p.Z.auth();function H(){var e=(0,u.useCallback)(function(e){return m(e)},[]),r=(0,u.useState)("signin"),n=r[0],m=r[1],p=(0,g.useRouter)(),f=(0,u.useContext)(F.Z),x=f.user,j=f.setUser;return(0,u.useEffect)(function(){x&&(console.log("I am here!"),p.replace("/calendar"))},[x,p]),(0,w.jsx)(i.Z,{className:"mainBkg",style:{backgroundImage:"url('./assets/images/background.ed92fc21.jpg')"},children:(0,w.jsxs)(i.Z,{className:"contentWrap",children:[(0,w.jsxs)(i.Z,{className:"leftWrap",children:[(0,w.jsx)(i.Z,{className:"imgCont",children:(0,w.jsx)(h(),{src:"./assets/images/spiral.53b194f3.svg",alt:"spiral",width:150,height:31.5})}),(0,w.jsxs)(i.Z,{className:"textHld",children:[(0,w.jsx)(i.Z,{className:"majorCap",children:"WELCOME TO THE MARKETPLACE"}),(0,w.jsx)(i.Z,{className:"minorText",children:"Exceptionly provides hands-on tested remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%."})]})]}),(0,w.jsxs)(i.Z,{className:"rightWrap",children:[(0,w.jsxs)(i.Z,{className:"topHld",children:[(0,w.jsxs)(i.Z,{className:"actionTitle",children:[(0,w.jsx)(h(),{src:"./assets/images/logo.bf7070eb.svg",alt:"exceptionly logo",width:250,height:250}),(0,w.jsx)(i.Z,{className:"proText",children:(0,w.jsx)(o.Z,{children:"signin"===n?"Sign in to your account":"signup"===n?"Sign up to your account":"Password Recovery"})})]}),(0,w.jsx)(i.Z,{className:"vertical-centre",children:"forgotpwd"===n?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(c.Z,{severity:"info",icon:!1,sx:{mt:8,mb:8},children:[(0,w.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"What's Next?"}),"We are going to send a recovery email to your address if there is an associated account. You can use the link for resetting your password."]}),(0,w.jsx)(_,{})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(i.Z,{className:"signInGroup",children:[(0,w.jsx)(l.Z,{onClick:function(){return G.signInWithPopup(q).then(function(e){return j(e)}).catch(function(e){return console.log(e)})},variant:"contained",color:"primary",startIcon:(0,w.jsx)(s.Z,{}),sx:{width:"100%",mb:2},children:"SIGN IN WITH GOOGLE"}),(0,w.jsx)(l.Z,{variant:"contained",color:"primary",startIcon:(0,w.jsx)(t.Z,{}),sx:{width:"100%",mb:2},children:"SIGN IN WITH LINKEDIN"}),(0,w.jsx)(l.Z,{onClick:function(){return G.signInWithPopup(R).then(function(e){return j(e)}).catch(function(e){return console.log(e)})},variant:"contained",color:"warning",startIcon:(0,w.jsx)(a.Z,{}),sx:{width:"100%",mb:2},children:"SIGN IN WITH MICROSOFT"}),(0,w.jsx)(d.Z,{sx:{color:"rgb(102, 102, 102)"},children:"or use business email"})]}),(0,w.jsx)(i.Z,{children:"signin"===n?(0,w.jsx)(T,{signInWithEmailAndPassword:function(e,r){return G.signInWithEmailAndPassword(e,r).then(function(e){return j(e)}).catch(function(e){return console.log(e)})},onForgotPwd:function(){return e("forgotpwd")}}):(0,w.jsx)(A,{createUserWithEmailAndPassword:function(e){var r=e.email,n=e.password;G.createUserWithEmailAndPassword(r,n).then(function(e){return console.log("success")}).catch(function(e){return console.log(e)})}})})]})})]}),(0,w.jsx)(i.Z,{children:(0,w.jsx)(i.Z,{className:"btHld",children:(0,w.jsxs)(i.Z,{className:"innerNewText",children:[(0,w.jsx)(o.Z,{component:"span",children:"signin"===n?"Don't have an account?":"Already have an account?"}),"signin"===n?(0,w.jsx)(i.Z,{onClick:function(){return e("signup")},children:(0,w.jsx)(o.Z,{component:"span",children:"CREATE ACCOUNT"})}):(0,w.jsx)(i.Z,{onClick:function(){return e("signin")},children:(0,w.jsx)(o.Z,{component:"span",children:"SIGN IN HERE"})})]})})})]})]})})}},8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1471)}])}},function(e){e.O(0,[18,477,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);