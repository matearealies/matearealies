(this.webpackJsonpmachine=this.webpackJsonpmachine||[]).push([[0],{4821:function(e,a,t){e.exports=t(4888)},4826:function(e,a,t){},4827:function(e,a,t){},4841:function(e,a,t){},4888:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),i=t.n(r),c=(t(4826),t(4827),t(122)),o=t(41),s=t(10),u=t(3),m=t.n(u),g=t(114),p=t(4925),d=t(4931),b=t(4932),f=t(4933),h=t(34),E=t.n(h);t(4841);function v(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),r=t[0],i=t[1];return l.a.createElement("div",{id:"cookie",onClick:function(a){var t=E()(a.target).offset();a.clientX,t.left,a.clientY,t.top,i(r+1),E()("#cookie").append('<div id="x'+r+'" hidden>+1.0</div>'),E()("#x"+r).css("top",a.clientY),E()("#x"+r).css("left",a.clientX-10),E()("#x"+r).css("position","absolute"),E()("#x"+r).css("width","25px"),E()("#x"+r).css("height","25px"),E()("#x"+r).css("color","white"),E()("#x"+r).css("font-weight","bold"),E()("#x"+r).css("animation","GoUp 2s forwards linear"),E()("#x"+r).show(),e.handlePP(1)}},e.children)}var w=t(72),O=t(4950),j=t(4949);function x(e){var a=Object(g.a)((function(a){return{root:{color:"#fff",fontSize:"32px",fontFamily:'PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',fontWeight:137,textShadow:"2px 2px 0px rgba(0, 0, 0, 0.2)",width:"100%",alignItems:"center",justifyContent:"center",display:"flex"},box:{width:e.marker.width,height:e.marker.height,background:"#fff",alignItems:"center",justifyContent:"center",display:"flex",position:"absolute",zIndex:1,opacity:.5,filter:"alpha(opacity=50)"}}})),t=e.id,n=e.image,l=e.selected,r=a(),i=Object(u.useGlobal)("selectedMarker"),c=Object(s.a)(i,2),o=(c[0],c[1]),d=Object(u.useGlobal)("markers"),b=Object(s.a)(d,2),f=b[0];b[1];var h={borderStyle:l?"solid":"none",borderColor:"#e91e63",borderRadius:37};return m.a.createElement(m.a.Fragment,null,m.a.createElement(w.a.button,{className:r.box,id:t,style:h,drag:!0,dragConstraints:e.constraintsRef,onDragEnd:function(e,a){var l=f[t];l.id=t,l.pageX=e.pageX,l.pageY=e.pageY,l.image=n,o(t)},whileHover:{scale:1.1},whileTap:{scale:1}},m.a.createElement(p.a,{container:!0,spacing:3},m.a.createElement(p.a,{item:!0,xs:12},m.a.createElement(O.a,{id:"free-solo-demo",freeSolo:!0,options:[{title:"Pussy"},{title:"Tits"},{title:"Ass"}].map((function(e){return e.title})),renderInput:function(e){return m.a.createElement(j.a,Object.assign({},e,{size:"small",fullWidth:!0}))}})))))}var k=t(4929),y=t(14),C=Object(g.a)((function(e){return{iconButton:{height:45,width:45}}}));function S(e){var a=C();return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{"aria-label":"next",className:a.iconButton,onClick:e.handleWIB},l.a.createElement(y.b,null)),e.children,l.a.createElement(k.a,{"aria-label":"back",className:a.iconButton,onClick:e.handleWIN},l.a.createElement(y.c,null)))}var z=Object(g.a)({card:{width:"auto",height:"100vh",pointerEvents:"auto"},exampleContainer:{background:"white",borderRadius:30,width:150,height:150,position:"absolute",top:"calc(50% - 150 / 2)",left:"calc(50% - 150 / 2)"}});function _(e){var a=e.load,t=Object(u.useState)(0),n=Object(s.a)(t,2),l=n[0],r=n[1],i=Object(u.useState)(0),c=Object(s.a)(i,2),o=c[0],g=c[1],h=z(),E=Object(u.useGlobal)("markers"),O=Object(s.a)(E,2),j=O[0],k=O[1],y=Object(u.useGlobal)("selectedMarker"),C=Object(s.a)(y,2),_=C[0],I=(C[1],Object(u.useRef)(null));Object(u.useEffect)((function(){k(e.markers)}),[e.markers]);var B=a[l];return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{container:!0,justify:"center",style:{position:"fixed"}},j?j.map((function(e,a){var t=!1;return t=e.image===B&&_===a,m.a.createElement(x,{key:a,id:a,image:B,marker:e,selected:t,constraintsRef:I})})):"",m.a.createElement(S,{handleWIB:function(){r(0===l?l-1:0)},handleWIN:function(){r(a.length>l+1?l+1:l)}},m.a.createElement(v,{handlePP:function(e){g(o>l?0:o+e+2)}},m.a.createElement(w.a.div,{ref:I},m.a.createElement(d.a,{className:"qcard"},m.a.createElement(b.a,null,m.a.createElement(f.a,{className:h.card,component:"img",image:B,onClick:function(e){o>l&&r(a.length>l+1?l+1:0)},src:B,onError:function(){r(a.length>l+1?l+1:0)}}))))))))}_.defaultProps={src:"https://lh3.googleusercontent.com/_1whFm6BwCQvIzSf-dn5oTmjz6QycDaLluhsBUSsUiwp84NnlflD_S4AVVt-CIQi2rWIHthJvqO-s8X2WA-bdBL2v5N1sxisI6-fDPvsPCZO9dxRc7scH-xBkKBIwIE6uRL6iOtxNHCqSaYUJomqf27rRFFEIEDune9pmBOwC1a6-77t9IWeIt7MM-SimbLChfTzJc9ILu6okMkHyeGyT8Q6vLUkVAx2HQq-Wtx_RAfz8uGV6C2Wx0qSA-lzyz4y0HB-vOWGC6HVXfE41iv1MgblqQg846WzEzK3JPRRSEWDXjHSPn8rQ7gHfQvkUd9ilzSrBJBpUnhPtg9_G94_VbZ4sNtcAQF85G0_k0vgAu3BDTbrU02lifxfXtwud19JdAfV4clVQUX2t4tTA_zdIqcxsbn1T-vWpfyN-E5gYk3VpSxTwJmh7_jZ_0mVEUtUZ8xup4Vdi9gFfidLmuEuJnt_JhyFqNp244CZHmQpTCZa4EgEwMZDH4w_6PMp7uz1aaXpMTHhlh0A6k-2I5acNvFxgsm6J3fIeUD_QRV4fKOKIiL0WH2wxrcaBZDMrMPUcHZmGp_zV5KTiSJ1gOozryZdzj3-GzH9KDTEGJpV4y1sTnkczjbCuCUGdrX-GrRPZCRzOYUl4n_0PDW7425ErbZ3IpVFgffN2qEMAg9gVYN_KZFqmF0-sVCgjep1lOjMhUwZKzmxyAnuGV42ZtL7EuwQhQ"};var I=t(28),B=t(42),T=t(4954),G=t(4946),N=t(4930),A=t(22),H=t(4889),V=t(4890),F=t(4934),R=t(4935),W=t(4936),P=t(4937),M=t(4938),U=t(37),L=t(4939),Q=(t(108),t(59)),Z=t.n(Q),D=Object(g.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},fab:{margin:e.spacing(1)}}})),J=m.a.forwardRef((function(e,a){return m.a.createElement(H.a,Object.assign({direction:"up",ref:a},e))}));function X(e){var a=D(),t=Object(u.useState)(!1),n=Object(s.a)(t,2),l=n[0],r=n[1],i=Object(u.useState)(""),c=Object(s.a)(i,2),o=c[0],g=c[1],p=Object(u.useGlobal)("profileToken"),d=Object(s.a)(p,2),b=d[0];d[1];var f=function(){r(!1)};return void 0===b?m.a.createElement("div",null):m.a.createElement(m.a.Fragment,null,m.a.createElement(V.a,{button:!0,onClick:function(){r(!0)}},m.a.createElement(F.a,null,m.a.createElement(y.g,null)),m.a.createElement(R.a,{primary:"Matterealize"})),m.a.createElement(W.a,{fullScreen:!0,open:l,onClose:f,TransitionComponent:J},m.a.createElement(P.a,{className:a.appBar},m.a.createElement(M.a,null,m.a.createElement(k.a,{edge:"start",color:"inherit",onClick:f,"aria-label":"close"},m.a.createElement(y.d,null)),m.a.createElement(U.a,{variant:"h6",className:a.title},"Matterealize"),m.a.createElement(L.a,{color:"inherit",onClick:function(){!function(){var a=Z.a.createWriteStream("matteReaLize.giz",{size:22,writableStrategy:void 0,readableStrategy:void 0}),t=!0;try{JSON.parse(o)}catch(l){t=!1}if(t){var n=JSON.parse(o);e.handleTeacHer(n)}else new Response(o.split(",").filter((function(e){return e.startsWith('["https://lh3')})).map((function(e){return e.replace(/(\[\"|\")/g,"").replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/\]/g,"")}))).body.pipeTo(a),e.handleMatterealize(o.split(",").filter((function(e){return e.startsWith('["https://lh3')})).map((function(e){return e.replace(/(\[\"|\")/g,"").replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/\]/g,"")})))}(),f()}},"Materialize"))),m.a.createElement(j.a,{id:"outlined-full-width",label:"Matterealize",style:{margin:8},placeholder:"Paste html content",margin:"normal",variant:"outlined",multiline:!0,rows:"33",InputLabelProps:{shrink:!0},onChange:function(e){g(e.target.value)}})))}var q=t(74),K=t(4940),Y=t(4941),$=t(4942),ee=t(117),ae=t.n(ee),te=t(118),ne=t.n(te);function le(e){return m.a.createElement(ae.a,{cancel:'[class*="MuiDialogContent-root"]'},m.a.createElement(q.a,e))}var re=Object(g.a)((function(e){return{fab:{margin:e.spacing(1)},icon:{marginRight:e.spacing(1)},dialogContent:{width:333}}}));function ie(e){var a=re(),t=Object(u.useGlobal)("profileToken"),n=Object(s.a)(t,2),l=n[0],r=(n[1],m.a.useState(!1)),i=Object(s.a)(r,2),c=i[0],o=i[1];return void 0===l?m.a.createElement("div",null):m.a.createElement("div",null,m.a.createElement(V.a,{button:!0,onClick:function(){o(!0)}},m.a.createElement(F.a,null,m.a.createElement(y.e,null)),m.a.createElement(R.a,{primary:"Terminal"})),m.a.createElement(W.a,{open:c,onClose:function(){o(!1)},PaperComponent:le,"aria-labelledby":"draggable-dialog-title"},m.a.createElement(K.a,{style:{cursor:"move"},id:"draggable-dialog-title"},"Terminal"),m.a.createElement(Y.a,{className:a.dialogContent},m.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},m.a.createElement(ne.a,{color:"green",backgroundColor:"black",barColor:"black",style:{fontWeight:"bold",fontSize:"1em"},commands:{"open-google":function(){return window.open("https://www.google.com/","_blank")},showmsg:function(){return"Hello World"},popup:function(){return alert("Terminal in React")}},descriptions:{"open-google":"opens google.com",showmsg:"shows a message",alert:"alert",popup:"alert"},msg:"shes a queen of diamonds"})),m.a.createElement($.a,null))))}var ce=Object(g.a)((function(e){return{card:{minWidth:200},fab:{margin:e.spacing(1)},icon:{marginRight:e.spacing(1)},speedDial:{margin:e.spacing(1)},title:{fontSize:14}}}));function oe(e){ce();var a=Object(u.useState)(null),t=Object(s.a)(a,2),n=(t[0],t[1],Object(u.useState)("")),l=Object(s.a)(n,2),r=(l[0],l[1],Object(u.useGlobal)("markers")),i=Object(s.a)(r,2),c=i[0],o=i[1],g=Object(u.useGlobal)("markerSize"),p=Object(s.a)(g,2),d=(p[0],p[1],m.a.useState(!1)),b=Object(s.a)(d,2),f=(b[0],b[1],Object(u.useGlobal)("selectedMarker")),h=Object(s.a)(f,2),E=(h[0],h[1],Object(u.useGlobal)("profileToken")),v=Object(s.a)(E,2),w=v[0];v[1];return void 0===w?m.a.createElement("div",null):m.a.createElement("div",null,m.a.createElement(V.a,{button:!0,onClick:function(e){c?(c.push({lession:"",height:100,width:100}),o(c)):o([{lession:"",height:100,width:100}])}},m.a.createElement(F.a,null,m.a.createElement(y.j,null)),m.a.createElement(R.a,{primary:"Teacher"})))}var se=t(8),ue=t(4953),me=t(4944),ge=t(4945),pe=(t(125),t(5)),de=(t(124),t(11));t(4928),t(4951),t(4943),[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}].map((function(e){return{value:e.label,label:e.label}})),Object(g.a)((function(e){return{root:{flexGrow:1,height:250,minWidth:290},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(de.b)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}}}));var be=Object(g.a)((function(e){return{card:{minWidth:200,minHeight:234},title:{fontSize:14}}}));function fe(e){var a=be(),t=Object(u.useGlobal)("markers"),n=Object(s.a)(t,2),l=n[0],r=n[1],i=Object(u.useGlobal)("selectedMarker"),c=Object(s.a)(i,2),o=c[0],g=c[1],p=Object(se.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(ue.a);if(l&&void 0!==o){var b=l[o];return m.a.createElement(d.a,{className:a.card},m.a.createElement(me.a,{title:b.lession,action:m.a.createElement(k.a,{"aria-label":"toylet",className:a.margin,onClick:function(e){r(l.filter((function(e){return e.id!==o}))),g(void 0)}},m.a.createElement(y.k,null))}),m.a.createElement(ge.a,null,"height",m.a.createElement(p,{valueLabelDisplay:"auto","aria-label":"pretto slider",defaultValue:b?b.height:100,max:600,onChangeCommitted:function(e,a){l[o].height=a,r(l)}}),"width",m.a.createElement(p,{valueLabelDisplay:"auto","aria-label":"pretto slider",defaultValue:b?b.width:100,max:600,onChangeCommitted:function(e,a){l[o].width=a,r(l)}})))}return m.a.createElement(m.a.Fragment,null)}var he=Object(g.a)((function(e){return{fab:{margin:e.spacing(1)},icon:{marginRight:e.spacing(1)}}}));function Ee(e){he();var a=Object(u.useGlobal)("profileToken"),t=Object(s.a)(a,2),n=t[0];t[1];return void 0===n?m.a.createElement("div",null):m.a.createElement("div",null,m.a.createElement(V.a,{button:!0},m.a.createElement(F.a,null,m.a.createElement(y.l,null)),m.a.createElement(R.a,{primary:"Story"})))}var ve=function(e){var a=Object(n.useState)({left:!1,right:!1}),t=Object(s.a)(a,2),r=t[0],i=t[1],c=Object(A.a)(),o=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(Object(B.a)({},r,Object(I.a)({},e,a)))}},u=Object(g.a)((function(e){return{root:{position:"relative"},list:{width:250},fab:{margin:e.spacing(1)},fabRight:{position:"absolute",top:e.spacing(2),right:e.spacing(2),zIndex:2},fabLeft:{position:"absolute",top:e.spacing(2),left:e.spacing(0),zIndex:2},iconFlipped:{"-o-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","-ms-transform":"scaleX(-1)",transform:"scaleX(-1)"}}}))();return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{className:u.fabLeft,onClick:o("left",!0)},l.a.createElement(y.i,{className:u.iconFlipped,fontSize:"large"})),l.a.createElement(k.a,{className:u.fabRight,onClick:o("right",!0)},l.a.createElement(y.i,{fontSize:"large"})),l.a.createElement(T.a,{open:r.left,variant:"persistent",onClose:o("left",!1),onOpen:o("left",!0)},l.a.createElement("div",{className:u.drawerHeader},l.a.createElement(k.a,{onClick:o("left",!1)},"ltr"===c.direction?l.a.createElement(y.b,null):l.a.createElement(y.c,null))),l.a.createElement(G.a,null),l.a.createElement(fe,null)),l.a.createElement(T.a,{anchor:"right",open:r.right,variant:"persistent",onClose:o("right",!1),onOpen:o("right",!0)},l.a.createElement("div",{className:u.drawerHeader},l.a.createElement(k.a,{onClick:o("right",!1)},"ltr"===c.direction?l.a.createElement(y.c,null):l.a.createElement(y.b,null))),l.a.createElement(G.a,null),l.a.createElement(N.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(X,{handleMatterealize:function(a){a&&e.handleLoad(a)},handleTeacHer:function(a){a&&e.handleTeacHer(a)}})),l.a.createElement(ie,null),l.a.createElement(oe,null),l.a.createElement(Ee,null)))};var we=function(e){var a=Object(n.useState)(["https://lh3.googleusercontent.com/_1whFm6BwCQvIzSf-dn5oTmjz6QycDaLluhsBUSsUiwp84NnlflD_S4AVVt-CIQi2rWIHthJvqO-s8X2WA-bdBL2v5N1sxisI6-fDPvsPCZO9dxRc7scH-xBkKBIwIE6uRL6iOtxNHCqSaYUJomqf27rRFFEIEDune9pmBOwC1a6-77t9IWeIt7MM-SimbLChfTzJc9ILu6okMkHyeGyT8Q6vLUkVAx2HQq-Wtx_RAfz8uGV6C2Wx0qSA-lzyz4y0HB-vOWGC6HVXfE41iv1MgblqQg846WzEzK3JPRRSEWDXjHSPn8rQ7gHfQvkUd9ilzSrBJBpUnhPtg9_G94_VbZ4sNtcAQF85G0_k0vgAu3BDTbrU02lifxfXtwud19JdAfV4clVQUX2t4tTA_zdIqcxsbn1T-vWpfyN-E5gYk3VpSxTwJmh7_jZ_0mVEUtUZ8xup4Vdi9gFfidLmuEuJnt_JhyFqNp244CZHmQpTCZa4EgEwMZDH4w_6PMp7uz1aaXpMTHhlh0A6k-2I5acNvFxgsm6J3fIeUD_QRV4fKOKIiL0WH2wxrcaBZDMrMPUcHZmGp_zV5KTiSJ1gOozryZdzj3-GzH9KDTEGJpV4y1sTnkczjbCuCUGdrX-GrRPZCRzOYUl4n_0PDW7425ErbZ3IpVFgffN2qEMAg9gVYN_KZFqmF0-sVCgjep1lOjMhUwZKzmxyAnuGV42ZtL7EuwQhQ"]),t=Object(s.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)({}),o=Object(s.a)(c,2),u=o[0],m=(o[1],Object(n.useState)([])),g=Object(s.a)(m,2),p=g[0],d=g[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(ve,{handleLoad:function(e){i(e)},handleTeacHer:function(e){d(e.markers)}}),l.a.createElement(_,{store:u,load:r,markers:p}))},Oe=t(4948),je=t(32),xe=(t(4882),t(4955)),ke=Object(g.a)((function(e){return{large:{width:e.spacing(7),height:e.spacing(7)}}}));function ye(e){var a=Object(u.useGlobal)("profileToken"),t=Object(s.a)(a,2),n=t[0],l=(t[1],ke());return Object(u.useEffect)((function(){n&&fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=".concat(n.tokenId)).then((function(e){return e.json()})).then((function(e){console.log(e)}))})),m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{container:!0,spacing:3},m.a.createElement(p.a,{item:!0,xs:5}),m.a.createElement(p.a,{item:!0,xs:2},m.a.createElement(xe.a,{alt:"Remy Sharp",src:n.Pt.QK,className:l.large})),m.a.createElement(p.a,{item:!0,xs:5}),m.a.createElement(U.a,{className:l.typography},"The content of the Popover.")))}var Ce=t(4952),Se=Object(g.a)((function(e){return{fab:{margin:e.spacing(1)},popover:{height:"33%"}}}));function ze(e){var a=Se(),t=Object(u.useState)(""),n=Object(s.a)(t,2),l=(n[0],n[1],m.a.useState(null)),r=Object(s.a)(l,2),i=r[0],c=r[1],o=Object(u.useGlobal)("profileToken"),g=Object(s.a)(o,2),p=g[0],d=g[1],b=Object(u.useGlobal)("sector"),f=Object(s.a)(b,2),h=(f[0],f[1],Boolean(i));function E(){return window.gapi.client.setApiKey("AIzaSyCEmxFXur3r9rQhcVDxeQ7mUI_UH1XLqpk"),window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest").then((function(){console.log("GAPI client loaded for API");var e=window.gapi.auth2.getAuthInstance();console.log("is signed in",e.isSignedIn.get())}),(function(e){console.error("Error loading GAPI client for API",e)}))}return window.gapi.load("client:auth2",(function(){window.gapi.auth2.init({client_id:"524121216771-vv0e5evrv7k59esgvp181p4tmqbvuvii.apps.googleusercontent.com"})})),p?m.a.createElement(m.a.Fragment,null,m.a.createElement(xe.a,{src:p.Pt.QK,onClick:function(e){console.log("clicked here"),c(e.currentTarget)}}),m.a.createElement(Ce.a,{open:h,anchorEl:i,className:a.popup,onClose:function(){c(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},m.a.createElement(ye,null))):m.a.createElement(L.a,{onClick:function(){window.gapi.auth2.getAuthInstance().signIn({scope:"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"}).then((function(e){d(e),console.log("Sign-in successful")}),(function(e){console.error("Error signing in",e)})).then(E)}},"Login")}var _e=t(4947),Ie=(t(61),t(83)),Be=t.n(Ie),Te=Object(g.a)((function(e){return{root:{flexGrow:1},fab:{position:"absolute",bottom:e.spacing(7),right:e.spacing(7)},paper:{height:345,width:345},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ge(e){var a=Te();return m.a.createElement(m.a.Fragment,null,m.a.createElement(_e.a,{className:a.fab,color:"primary","aria-label":"add"},m.a.createElement(Be.a,null)),m.a.createElement(p.a,{container:!0,className:a.root,spacing:2},m.a.createElement(p.a,{item:!0,xs:12},m.a.createElement(p.a,{container:!0,justify:"center",spacing:2},[0,1,2,3,4].map((function(e){return m.a.createElement(p.a,{key:e,item:!0},m.a.createElement(d.a,{className:a.paper}))}))))))}var Ne=Object(g.a)((function(e){return{root:{flexGrow:1},fab:{position:"absolute",bottom:e.spacing(7),right:e.spacing(7)},paper:{height:345,width:345},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ae(e){Ne();var a=Object(u.useGlobal)("profileToken"),t=Object(s.a)(a,2),n=t[0];t[1];return n?(window.gapi.client.drive.files.list({}).then((function(e){var a=e.result.files.find((function(e){return"23407 matrix"===e.name}));console.log(a)}),(function(e){console.error("Execute error",e)})),m.a.createElement(m.a.Fragment,null,"hey")):m.a.createElement(m.a.Fragment,null,"no")}var He=Object(g.a)((function(e){return{root:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:e.shadows[6],backgroundColor:e.palette.common.white},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},brandText:{flexGrow:1,fontFamily:"monospace",whiteSpace:"pre"},content:{flexGrow:1,marginLeft:e.spacing(8),marginTop:e.spacing(7),padding:e.spacing(3)},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(I.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),hide:{display:"none"},menuButton:{marginRight:e.spacing(2)},spacer:{marginTop:e.spacing(7)},title:{flexGrow:1},toolbar:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}}));function Ve(){var e,a,t=He(),n=Object(A.a)(),l=Object(u.useState)(!1),r=Object(s.a)(l,2),i=r[0],c=r[1],o=Object(u.useState)(""),g=Object(s.a)(o,2),p=g[0],d=g[1],b=Object(u.useGlobal)("profileToken"),f=Object(s.a)(b,2),h=f[0];f[1];return m.a.createElement("div",{className:t.root},m.a.createElement(Oe.a,null),m.a.createElement(P.a,{position:"fixed",className:Object(pe.a)(t.appBar,Object(I.a)({},t.appBarShift,i))},m.a.createElement(M.a,null,m.a.createElement(k.a,{color:"primary","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(pe.a)(t.menuButton,Object(I.a)({},t.hide,i))},m.a.createElement(y.h,null)),m.a.createElement(U.a,{className:t.brandText,color:"primary"},"__    _   ___/   ___/               _                         ",m.a.createElement("br",null),"|\\   |  .'  /\\ .'  /\\   ____ \\,___, /        ___  .___    ___ ",m.a.createElement("br",null),"| \\  |  |  / | |  / |  (     |    \\ |,---. .'   ` /   \\ .'   `",m.a.createElement("br",null),"|  \\ |  |,'  | |,'  |  `--.  |    | |'   ` |----' |   ' |----'",m.a.createElement("br",null),"|   \\|  /`---' /`---' \\___.' |`---' /    | `.___, /     `.___,",m.a.createElement("br",null),"\\"),m.a.createElement(ze,null))),m.a.createElement(je.a,{variant:"permanent",className:Object(pe.a)(t.drawer,(e={},Object(I.a)(e,t.drawerOpen,i),Object(I.a)(e,t.drawerClose,!i),e)),classes:{paper:Object(pe.a)((a={},Object(I.a)(a,t.drawerOpen,i),Object(I.a)(a,t.drawerClose,!i),a))}},m.a.createElement("div",{className:t.toolbar},m.a.createElement(k.a,{onClick:function(){c(!1)}},"rtl"===n.direction?m.a.createElement(y.c,null):m.a.createElement(y.b,null))),m.a.createElement(G.a,null),m.a.createElement("div",{className:t.spacer}),m.a.createElement(G.a,null),m.a.createElement((function(){return h?m.a.createElement(m.a.Fragment,null,m.a.createElement(N.a,null,m.a.createElement(V.a,{button:!0,key:"relay",onClick:function(){return d("relay")}},m.a.createElement(F.a,null,m.a.createElement(y.a,null)),m.a.createElement(R.a,{primary:"Relay"}))),m.a.createElement(G.a,null),m.a.createElement(N.a,null,m.a.createElement(V.a,{button:!0,key:"matrix",onClick:function(){return d("matrix")}},m.a.createElement(F.a,null,m.a.createElement(y.f,null)),m.a.createElement(R.a,{primary:"Matrix"})))):m.a.createElement(m.a.Fragment,null)}),null)),m.a.createElement("main",{className:t.content},m.a.createElement("div",{className:t.toolbar}),"relay"===p&&m.a.createElement(Ge,null),"matrix"===p&&m.a.createElement(Ae,null)))}function Fe(e){return m.a.createElement(Ve,null)}t(4886);var Re=function(){return l.a.createElement(c.a,{basename:"/"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/magazine",component:we}),l.a.createElement(o.a,{path:"/",component:Fe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4821,1,2]]]);
//# sourceMappingURL=main.37bc8c6f.chunk.js.map