(this.webpackJsonpkomiss=this.webpackJsonpkomiss||[]).push([[0],{173:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(11),u=n(13),l=n(98),j=new(n.n(l).a)("pk_test_29376e211a5b35950d873913465d1b5aad1353eeb6e46",!0),d=n(207),b=n(209),p=n(69),m=n(96),h=n(210),x=n(211),O=n.p+"static/media/komiss.fb09532a.png",f=n(18),g=n(95),v=n(17),y=Object(g.a)((function(t){return{appBar:Object(f.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(f.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(f.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(v.d)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.d)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),k=n(14),w=n(22),C=n(2),S=function(t){var e=t.totalItems,n=y(),a=Object(k.g)();return Object(C.jsx)("div",{children:Object(C.jsx)(d.a,{position:"fixed",color:"inherit",className:n.appBar,children:Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(p.a,{component:w.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:O,alt:"Komiss",height:"25px",className:n.image}),"Komiss"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(m.a,{component:w.b,to:"/cart","aria-label":"Show Cart Items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},_=n(217),N=n(212),T=n(213),B=n(214),E=n(215),F=n(216),R=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{paddingTop:500},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),A=n(103),I=n.n(A),q=function(t){var e=t.product,n=t.onAddToCart,a=R();return Object(C.jsxs)(N.a,{className:a.root,children:[Object(C.jsx)(I.a,{autoPlay:!1,children:e.assets.map((function(t){return Object(C.jsx)(T.a,{image:t.url,className:a.media,item:!0},t.id)}))}),Object(C.jsxs)(B.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(C.jsx)(p.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(C.jsx)(p.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(E.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(m.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(C.jsx)(F.a,{})})})]})},L=Object(g.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),P=function(t){var e=t.products,n=t.onAddToCart,a=L();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(q,{product:t,onAddToCart:n})},t.id)}))})]})},W=n(218),z=n(219),D=Object(g.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(f.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(f.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),G=Object(g.a)((function(){return{media:{height:500},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),Q=function(t){var e=t.item,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=G();return Object(C.jsxs)(N.a,{children:[Object(C.jsx)(T.a,{image:e.media.source,alt:e.name,className:r.media}),Object(C.jsxs)(B.a,{className:r.cardContent,children:[Object(C.jsx)(p.a,{variant:"h4",children:e.name}),Object(C.jsx)(p.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(C.jsxs)(E.a,{className:r.cartActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(W.a,{onClick:function(){return n(e.id,e.quantity-1)},type:"button",size:"small",children:"-"}),Object(C.jsx)(p.a,{children:e.quantity}),Object(C.jsx)(W.a,{onClick:function(){return n(e.id,e.quantity+1)},type:"button",size:"small",children:"+"})]}),Object(C.jsx)(W.a,{onClick:function(){return a(e.id)},variant:"contained",type:"button",color:"secondary",children:"Remove"})]})]})},Y=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=t.handleEmptyCart,c=D(),i=function(){return Object(C.jsxs)(p.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(C.jsx)(w.b,{to:"/",className:c.link,children:" start adding some!"})]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(Q,{item:t,handleUpdateCartQty:n,handleRemoveFromCart:a})},t.id)}))}),Object(C.jsxs)("div",{className:c.cartDetails,children:[Object(C.jsxs)(p.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(W.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(W.a,{component:w.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(C.jsxs)(z.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(p.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"Loading..."},U=n(225),J=n(226),M=n(227),X=n(106),Z=n(234),H=n(228),K=n(230),V=Object(g.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(f.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(f.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(f.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),$=n(45),tt=n(233),et=n(229),nt=n(223),at=n(57),rt=n(231),ct=function(t){var e=t.name,n=t.label,a=Object(at.d)().control;return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(at.a,{render:function(t){var e=t.field;return Object(C.jsx)(rt.a,Object($.a)(Object($.a)({},e),{},{label:n,fullWidth:!0,required:!0}))},control:a,name:e,defaultValue:""})})},it=function(t){var e=t.checkoutToken,n=t.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],l=c[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),m=b[0],h=b[1],x=Object(a.useState)([]),O=Object(u.a)(x,2),f=O[0],g=O[1],v=Object(a.useState)(""),y=Object(u.a)(v,2),k=y[0],S=y[1],N=Object(a.useState)([]),T=Object(u.a)(N,2),B=T[0],E=T[1],F=Object(a.useState)(""),R=Object(u.a)(F,2),A=R[0],I=R[1],q=Object(at.c)(),L=Object.entries(i).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),P=Object.entries(f).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),z=B.map((function(t){return{id:t.id,label:"".concat(t.description," - (").concat(t.price.formatted_with_symbol,")")}})),D=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.services.localeListShippingCountries(e);case 2:n=t.sent,a=n.countries,l(a),h(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.services.localeListSubdivisions(e);case 2:n=t.sent,a=n.subdivisions,g(a),S(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,t.next=3,j.checkout.getShippingOptions(e,{country:n,region:a});case 3:r=t.sent,E(r),I(r[0].id);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){D(e.id)}),[e.id]),Object(a.useEffect)((function(){m&&G(m)}),[e.id,m]),Object(a.useEffect)((function(){k&&Q(e.id,m,k)}),[k]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(at.b,Object($.a)(Object($.a)({},q),{},{children:Object(C.jsxs)("form",{onSubmit:q.handleSubmit((function(t){return n(Object($.a)(Object($.a)({},t),{},{shippingCountry:m,shippingSubdivision:k,shippingOption:A}))})),children:[Object(C.jsxs)(_.a,{container:!0,spacing:3,children:[Object(C.jsx)(ct,{required:!0,name:"firstName",label:"First name"}),Object(C.jsx)(ct,{required:!0,name:"lastName",label:"Last name"}),Object(C.jsx)(ct,{required:!0,name:"address1",label:"Address line 1"}),Object(C.jsx)(ct,{required:!0,name:"email",label:"Email"}),Object(C.jsx)(ct,{required:!0,name:"city",label:"City"}),Object(C.jsx)(ct,{required:!0,name:"zip",label:"ZIP / Postal code"}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(tt.a,{children:"Shipping Country"}),Object(C.jsx)(et.a,{value:m,fullWidth:!0,onChange:function(t){return h(t.target.value)},children:L.map((function(t){return Object(C.jsx)(nt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(tt.a,{children:"Shipping Subdivision"}),Object(C.jsx)(et.a,{value:k,fullWidth:!0,onChange:function(t){return S(t.target.value)},children:P.map((function(t){return Object(C.jsx)(nt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(tt.a,{children:"Shipping Options"}),Object(C.jsx)(et.a,{value:A,fullWidth:!0,onChange:function(t){return I(t.target.value)},children:z.map((function(t){return Object(C.jsx)(nt.a,{value:t.id,children:t.label},t.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(W.a,{component:w.b,to:"/cart",variant:"outlined",children:"Back To Cart"}),Object(C.jsx)(W.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},st=n(61),ot=n(104),ut=n(222),lt=n(179),jt=n(224),dt=function(t){var e=t.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Order Summary"}),Object(C.jsxs)(ut.a,{disablePadding:!0,children:[e.live.line_items.map((function(t){return Object(C.jsxs)(lt.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(jt.a,{primary:t.name,secondary:"Quantity: ".concat(t.quantity)}),Object(C.jsx)(p.a,{variant:"body2",children:t.line_total.formatted_with_symbol})]},t.name)})),Object(C.jsxs)(lt.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(jt.a,{primary:"Total"}),Object(C.jsx)(p.a,{variant:"subtitle1",style:{fontWeight:700},children:e.live.subtotal.formatted_with_symbol})]})]})]})},bt=Object(ot.a)("pk_test_51JJCwbH48guzrR7RXdplI1Lj0gZesXEYYqdLSOukNhGQ1gS4yZlFdYME4VUXYXZByFA0QE2IntNWAGFk59brf3xA00YwGEfeho"),pt=function(t){var e=t.checkoutToken,n=t.shippingData,a=t.nextStep,r=t.backStep,c=t.onCaptureCheckout,i=t.timeout,u=function(){var t=Object(o.a)(s.a.mark((function t(r,o,u){var l,j,d,b,p;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),u&&o){t.next=3;break}return t.abrupt("return");case 3:return l=o.getElement(st.CardElement),t.next=6,u.createPaymentMethod({type:"card",card:l});case 6:j=t.sent,d=j.error,b=j.paymentMethod,d?console.log(d):(p={list_items:e.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:b.id}}},c(e.id,p),i(),a());case 10:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(dt,{checkoutToken:e}),Object(C.jsx)(U.a,{}),Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(C.jsx)(st.Elements,{stripe:bt,children:Object(C.jsx)(st.ElementsConsumer,{children:function(t){var n=t.elements,a=t.stripe;return Object(C.jsxs)("form",{onSubmit:function(t){return u(t,n,a)},children:[Object(C.jsx)(st.CardElement,{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(W.a,{variant:"outlined",onClick:r,children:"Back"}),Object(C.jsxs)(W.a,{type:"submit",variant:"contained",disabled:!a,color:"primary",children:["Pay ",e.live.subtotal.formatted_with_symbol]})]})]})}})})]})},mt=["Shipping address","Payment details"],ht=function(t){var e=t.cart,n=t.order,r=t.onCaptureCheckout,c=t.error,i=Object(a.useState)(0),l=Object(u.a)(i,2),d=l[0],b=l[1],m=Object(a.useState)(null),h=Object(u.a)(m,2),x=h[0],O=h[1],f=Object(a.useState)(!1),g=Object(u.a)(f,2),v=g[0],y=g[1],S=V(),_=Object(a.useState)({}),N=Object(u.a)(_,2),T=N[0],B=N[1],E=Object(k.f)();Object(a.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,O(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),E.pushState("/");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var F=function(){return b((function(t){return t+1}))},R=function(){return b((function(t){return t-1}))},A=function(t){B(t),F(),console.log(t)},I=function(){setTimeout((function(){y(!0)}),3e3)},q=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(p.a,{variant:"h5",children:["Thank you for your purchase, ",n.customer.firstname," ",n.customer.lastname," "]}),Object(C.jsx)(U.a,{className:S.divider}),Object(C.jsxs)(p.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(W.a,{component:w.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):v?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{variant:"h5",children:"Thank you for your purchase"}),Object(C.jsx)(U.a,{className:S.divider})]}),Object(C.jsx)("br",{}),Object(C.jsx)(W.a,{component:w.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):Object(C.jsx)("div",{className:S.spinner,children:Object(C.jsx)(J.a,{})})};c&&(C.Fragment,p.a,W.a,w.b);var L=function(){return 0===d?Object(C.jsx)(it,{checkoutToken:x,nextStep:F,setShippingData:B,next:A}):Object(C.jsx)(pt,{shippingData:T,checkoutToken:x,backStep:R,nextStep:F,onCaptureCheckout:r,timeout:I})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M.a,{}),Object(C.jsx)("div",{className:S.toolbar}),Object(C.jsx)("main",{className:S.layout,children:Object(C.jsxs)(X.a,{className:S.paper,children:[Object(C.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(Z.a,{activeStep:0,className:S.stepper,children:mt.map((function(t){return Object(C.jsx)(H.a,{children:Object(C.jsx)(K.a,{children:t})},t)}))}),d===mt.length?Object(C.jsx)(q,{}):x&&Object(C.jsx)(L,{})]})})]})},xt=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],d=i[1],b=Object(a.useState)({}),p=Object(u.a)(b,2),m=p[0],h=p[1],x=Object(a.useState)(""),O=Object(u.a)(x,2),f=O[0],g=O[1],v=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.products.list();case 2:e=t.sent,n=e.data,console.log(n),r(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=d,t.next=3,j.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1),console.log(l);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.add(e,n);case 2:a=t.sent,r=a.cart,d(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.update(e,{quantity:n});case 2:a=t.sent,r=a.cart,d(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.remove(e);case 2:n=t.sent,a=n.cart,d(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.empty();case 2:e=t.sent,n=e.cart,d(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.refresh();case 2:e=t.sent,d(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.checkout.capture(e,n);case 3:a=t.sent,h(a),E(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),g(t.t0.data.error.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){v(),y()}),[]),Object(C.jsx)(w.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{totalItems:l.total_items}),Object(C.jsxs)(k.c,{children:[Object(C.jsx)(k.a,{exact:!0,path:"/",children:Object(C.jsx)(P,{products:n,onAddToCart:_})}),Object(C.jsx)(k.a,{exact:!0,path:"/cart",children:Object(C.jsx)(Y,{cart:l,handleUpdateCartQty:N,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(C.jsx)(k.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(ht,{cart:l,order:m,onCaptureCheckout:F,error:f})})]})]})})};c.a.render(Object(C.jsx)(xt,{}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.6dc38834.chunk.js.map