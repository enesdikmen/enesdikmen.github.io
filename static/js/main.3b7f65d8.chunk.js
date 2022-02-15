(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(24),r=a.n(c),i=(a(70),a(6)),o=(a(71),a(30)),l=a(7),j=a(88),d=a(82),u=a(90),b=a(0),h=function(e){var t=e.email,a=e.logout,s=e.setUserPageState;return Object(b.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(j.a.Brand,{as:o.b,to:"/",children:"AdVideoMaker"}),Object(b.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(u.a,{className:"me-auto",children:[Object(b.jsx)(u.a.Link,{as:o.b,to:"/",children:"Home"}),Object(b.jsx)(u.a.Link,{as:o.b,to:"/createFeed",children:"Create Feed"})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.a.Link,{onClick:function(){s("")},as:o.b,to:"/user",children:t}),Object(b.jsx)(u.a.Link,{onClick:a,children:"Log Out"})]})]})]})})},x=a(83),O=a(63),m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{className:"justify-content-md-center",children:Object(b.jsx)(O.a,{lg:"8",children:Object(b.jsxs)("div",{className:"mt-2 fs-4",children:[Object(b.jsx)("strong",{children:"Main Page"})," ",Object(b.jsx)("span",{})]})})})})})},p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Create Videos"})})},f=a(92),g=a(87),v=a(9),y=a.n(v),k=a(10),w=a(89),S=a(84),_=function(e){var t=e.setCreateFeedState,a=e.setAlertState,n=e.setData,c=e.token,r=Object(s.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(s.useState)("https://docs.google.com/spreadsheets/d/e/2PACX-1vQvm265NJfQjH0GtMLNRD7rJIA5vapYsz1BbIEsmdOYJGuvWlfARCYwy3SS9BmVGGOJ4-MGhcoO7h8w/pub?gid=0&single=true&output=csv"),u=Object(i.a)(d,2),h=u[0],x=u[1],O=function(){var e=Object(k.a)(y.a.mark((function e(){var s,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),a({show:!1,text:""}),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/check_feed?"+new URLSearchParams({feedURL:h}),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":c}});case 4:return s=e.sent,e.next=7,s.json();case 7:r=e.sent,s.ok?(r.feed_name=l,n(r),t("arrangeFeed")):(t("checkURL"),a({show:!0,text:r.detail}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(w.a,{onSubmit:function(e){O(),e.preventDefault()},children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Feed Name"}),Object(b.jsx)(w.a.Control,{required:!0,type:"text",placeholder:"Enter a name for your feed.",value:l,onInput:function(e){return j(e.target.value)}})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Feed URL"}),Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Enter feed URL.",value:h,onInput:function(e){return x(e.target.value)}})]}),Object(b.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})},N=a(85),C=a(91),T=function(e){var t=e.show,a=e.title,s=e.text,n=e.buttonText,c=e.handleClose,r=e.handleConfirm;return Object(b.jsxs)(C.a,{show:t,onHide:c,children:[Object(b.jsx)(C.a.Header,{closeButton:!0,children:Object(b.jsx)(C.a.Title,{children:a})}),Object(b.jsx)(C.a.Body,{children:s}),Object(b.jsxs)(C.a.Footer,{children:[Object(b.jsx)(S.a,{variant:"secondary",onClick:c,children:"Close"}),Object(b.jsx)(S.a,{variant:"primary",onClick:function(){r(),c()},children:n})]})]})},D=function(e){var t=e.setCreateFeedState,a=e.setAlertState,c=e.feedData,r=e.setData,o=e.token,l=Object(s.useState)(!1),j=Object(i.a)(l,2),d=j[0],u=j[1],h=Object(s.useState)(!1),m=Object(i.a)(h,2),p=m[0],f=m[1],g=Object(s.useState)(!1),v=Object(i.a)(g,2),_=v[0],C=v[1],D=Object(s.useState)(!1),P=Object(i.a)(D,2),U=P[0],G=P[1],F=[{col:"Image URL",set:u,get:d},{col:"Title",set:f,get:p},{col:"Body",set:C,get:_},{col:"Website URL",set:G,get:U}],L=Object(s.useState)(!1),V=Object(i.a)(L,2),A=V[0],I=V[1],z=function(){var e=Object(k.a)(y.a.mark((function e(){var s,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),a({show:!1,text:""}),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/create_feed",{method:"POST",body:JSON.stringify({user_id:1,feed_name:c.feed_name,feed_url:c.feed_url,img_url_col:d,title_col:p,site_url_col:U,body_col:_}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":o}});case 4:return s=e.sent,e.next=7,s.json();case 7:n=e.sent,s.ok?(c.title_col=n.title_col,c.site_url_col=n.site_url_col,c.img_url_col=n.img_url_col,c.body_col=n.body_col,c.feed_id=n.feed_id,r(c),t("arrangeVisuals")):(t("checkURL"),a({show:!0,text:n.detail}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsxs)(w.a,{onSubmit:function(e){d&&p&&_&&U?I(!0):a({show:!0,text:"Please fill all of the fields first."}),e.preventDefault()},children:[Object(b.jsx)(x.a,{children:F.map((function(e,t){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(O.a,{children:Object(b.jsxs)(w.a.Group,{as:x.a,className:"mb-3",children:[Object(b.jsx)(w.a.Label,{column:!0,sm:4,className:"text-end fw-bold",children:e.col}),Object(b.jsx)(O.a,{sm:8,children:Object(b.jsxs)(w.a.Select,{"aria-label":"Default select example",value:e.get,onChange:function(t){e.set(t.target.value)},children:[Object(b.jsx)("option",{disabled:!0,value:!1,children:"Select.."}),c.col_names.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))]})})]})}),t%2===1&&Object(b.jsx)("div",{className:"w-100"})]},t)}))}),Object(b.jsx)(S.a,{variant:"primary",type:"submit",children:"Save"})]}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),c.col_names.map((function(e,t){return Object(b.jsx)("th",{children:e},t)}))]})}),Object(b.jsx)("tbody",{children:c.feed_data.data.map((function(e,t){return Object(b.jsx)("tr",{children:Object.values(e).map((function(e,t){return Object(b.jsx)("td",{children:e.toString().length<50?e:e.toString().substring(0,50)+"..."},t)}))},t)}))})]})}),Object(b.jsx)(T,{show:A,title:"Save Feed",text:"Are you sure to create a new feed?",buttonText:"Yes",handleClose:function(){return I(!1)},handleConfirm:z})]})},P=a(86),U=function(e){var t=e.height,a=void 0===t?100:t,s=e.width,n=void 0===s?200:s;return Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:a+"px",width:n+"px"},children:Object(b.jsx)(P.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},G=function(e){var t=e.setCreateFeedState,a=(e.setAlertState,e.feedData),n=(e.setData,e.token),c=Object(s.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1],j=function(){var e=Object(k.a)(y.a.mark((function e(){var s,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/save_video_props_feed",{method:"POST",body:JSON.stringify({feed_id:a.feed_id}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":n}});case 3:return s=e.sent,e.next=6,s.json();case 6:if(c=e.sent,!s.ok){e.next=21;break}return e.next=10,fetch("https://shoevideo.azurewebsites.net/api/generate_video_feed",{method:"POST",body:JSON.stringify({video_ids:c.video_ids}),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 10:return r=e.sent,e.next=13,r.json();case 13:if(e.sent,!r.ok){e.next=19;break}return t("success"),e.abrupt("return");case 19:e.next=21;break;case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("video",{width:"320",height:"240",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:a.previewVideoUrl,type:"video/mp4"})}),Object(b.jsx)("div",{}),Object(b.jsx)(T,{show:o,title:"Save Feed",text:"Are you sure to start generating videos from this feed?",buttonText:"Yes",handleClose:function(){return l(!1)},handleConfirm:j})]})},F=function(){var e=Object(k.a)(y.a.mark((function e(t,a){var s,n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shoevideo.azurewebsites.net/api/save_video_props",{method:"POST",body:JSON.stringify({user_id:1,feed_id:t.feed_id,img_url:t.feed_data.data[0][t.img_url_col],title:t.feed_data.data[0][t.title_col],body:t.feed_data.data[0][t.body_col],site_url:t.feed_data.data[0][t.site_url_col]}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":a}});case 2:return s=e.sent,e.next=5,s.json();case 5:if(n=e.sent,!s.ok){e.next=19;break}return e.next=9,fetch("https://shoevideo.azurewebsites.net/api/generate_video",{method:"POST",body:JSON.stringify({video_id:n.video_id}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":a}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(r=e.sent,!c.ok){e.next=17;break}return e.abrupt("return",r.result_url);case 17:e.next=19;break;case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(e){var t=e.setCreateFeedState,a=(e.setAlertState,e.feedData),s=e.setData,n=e.token,c=function(){var e=Object(k.a)(y.a.mark((function e(c){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),e.next=3,F(a,n);case 3:a.previewVideoUrl=e.sent,s(a),t("preview");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:" Pick a theme "}),Object(b.jsx)("p",{children:" Pick a color etc..."}),Object(b.jsx)(S.a,{variant:"primary",onClick:c,children:"Continue"})]})},V=function(e){var t=e.token,a=Object(s.useState)("checkURL"),n=Object(i.a)(a,2),c=n[0],r=n[1],o=Object(s.useState)({show:!1,text:""}),l=Object(i.a)(o,2),j=l[0],u=l[1],h=Object(s.useState)({}),m=Object(i.a)(h,2),p=m[0],v=m[1],y=Object(s.useState)({percent:10,label:"1/5"}),k=Object(i.a)(y,2),w=k[0],S=k[1];Object(s.useEffect)((function(){switch(c){case"checkURL":S({percent:10,label:"1/5"});break;case"arrangeFeed":S({percent:35,label:"2/5"});break;case"arrangeVisuals":S({percent:60,label:"3/5"});break;case"preview":S({percent:85,label:"4/5"});break;case"success":S({percent:100,label:"5/5"});break;case"loading":break;default:return""}return function(){}}),[c]);return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{className:"justify-content-md-center",children:Object(b.jsxs)(O.a,{lg:"8",children:[Object(b.jsxs)("div",{className:"mt-2 fs-4",children:[Object(b.jsx)("strong",{children:"Create a new feed:"})," ",Object(b.jsx)("span",{children:function(e){switch(e){case"checkURL":return"Provide a URL";case"arrangeFeed":return p.feed_name+" - Match the columns";case"arrangeVisuals":return p.feed_name+" - Arrange Visuals";case"preview":return p.feed_name+" - Video Preview";default:return""}}(c)})]}),Object(b.jsx)(f.a,{className:"fs-5 fw-bold",style:{height:"25px"},striped:!0,variant:"info",now:w.percent,label:w.label}),Object(b.jsx)(g.a,{className:"mt-2",variant:"danger",style:{visibility:j.show?"visible":"hidden",height:"50px"},children:j.text}),function(e){switch(e){case"checkURL":default:return Object(b.jsx)(_,{setCreateFeedState:r,setAlertState:u,setData:v,token:t});case"arrangeFeed":return Object(b.jsx)(D,{setCreateFeedState:r,setAlertState:u,feedData:p,setData:v,token:t});case"arrangeVisuals":return Object(b.jsx)(L,{setCreateFeedState:r,setAlertState:u,feedData:p,setData:v,token:t});case"preview":return Object(b.jsx)(G,{setCreateFeedState:r,setAlertState:u,feedData:p,token:t});case"success":return Object(b.jsx)("div",{className:"fs-5",children:"Videos successfully generated."});case"loading":return Object(b.jsx)(U,{width:300,height:200})}}(c)]})})})})},A=function(e){var t=e.show,a=e.text;return Object(b.jsx)(C.a,{show:t,size:"sm",children:Object(b.jsxs)(C.a.Body,{className:"text-center",style:{height:"150px"},children:[a,Object(b.jsx)(U,{width:260,height:100})]})})},I=function(e){var t=e.email,a=e.password,n=e.setEmail,c=e.setPassword,r=e.saveToken,o=e.setToken,l=Object(s.useState)(!1),j=Object(i.a)(l,2),u=j[0],h=j[1],m=function(){var e=Object(k.a)(y.a.mark((function e(s){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),s.preventDefault(),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/authenticate",{method:"POST",body:JSON.stringify({email:t,password:a}),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,n.ok?(r(c.key,t),o(c.key),h(!1)):h(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(A,{show:u,text:"Logging in..."}),Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{className:"justify-content-md-center",children:Object(b.jsx)(O.a,{lg:"5",children:Object(b.jsxs)(w.a,{onSubmit:m,className:"mt-4",children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(w.a.Label,{children:"Email address"}),Object(b.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",value:t,onInput:function(e){return n(e.target.value)}})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(w.a.Label,{children:"Password"}),Object(b.jsx)(w.a.Control,{type:"password",placeholder:"Password",value:a,onInput:function(e){return c(e.target.value)}})]}),Object(b.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})]})},z=a(2),R=function(e){var t=e.token,a=e.setUserPageState,s=e.isGenerating,n=e.setIsGenerating,c=e.testVideoData,r=e.setTestVideoData,i=function(){var e=Object(k.a)(y.a.mark((function e(a){var s,i,o,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),a.preventDefault(),s=window.performance.now(),r(Object(z.a)(Object(z.a)({},c),{},{videoData:!1,message:!1})),e.next=6,fetch("https://shoevideo.azurewebsites.net/api/test_video",{method:"POST",body:JSON.stringify({image_data:c.imageData.split(",",2)[1],image_type:c.imageType,is_save:c.checked}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":t}});case 6:return i=e.sent,e.next=9,i.json();case 9:o=e.sent,i.ok?(l=window.performance.now(),r(Object(z.a)(Object(z.a)({},c),{},{videoData:o.result_url,message:{status:"success",message:"Video successfully generated in "+((l-s)/1e3).toFixed(2)+" seconds."}})),n(!1)):(404===i.status?r(Object(z.a)(Object(z.a)({},c),{},{message:{status:"danger",message:o.detail,time:""}})):r(Object(z.a)(Object(z.a)({},c),{},{message:{status:"danger",message:"Error code: "+i.status.toString(),time:""}})),n(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(d.a,{style:{},children:Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(O.a,{xs:!0,lg:"2",children:Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"",onClick:function(){a("")},children:"Back"})}),Object(b.jsxs)(O.a,{xs:!0,lg:"8",children:[Object(b.jsxs)(w.a,{onSubmit:i,className:"mb-4",children:[Object(b.jsxs)(x.a,{className:"mb-1",children:[Object(b.jsx)(O.a,{children:Object(b.jsx)(w.a.Group,{children:Object(b.jsx)(w.a.Control,{type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){var t=new FileReader;t.onload=function(e){r(Object(z.a)(Object(z.a)({},c),{},{imageData:e.target.result}))},r(Object(z.a)(Object(z.a)({},c),{},{imageType:e.target.files[0].type})),t.readAsDataURL(e.target.files[0])}}})})}),Object(b.jsx)(O.a,{xs:!0,lg:"4",children:Object(b.jsx)(S.a,{variant:"primary",type:"submit",disabled:s,style:{width:"160px"},children:s?"Generating video...":"Submit"})}),Object(b.jsx)(O.a,{xs:!0,lg:"1"})]}),Object(b.jsx)(x.a,{children:Object(b.jsx)(w.a.Group,{children:Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)(w.a.Control,{className:"form-check-input",type:"checkbox",checked:c.checked,onChange:function(e){return r(Object(z.a)(Object(z.a)({},c),{},{checked:e.currentTarget.checked}))}}),Object(b.jsx)("label",{className:"form-check-label text-muted",children:"Add to results"})]})})})]}),Object(b.jsxs)(x.a,{style:{height:"420px"},children:[Object(b.jsx)(O.a,{xs:!0,lg:"6",children:Object(b.jsx)("img",{src:c.imageData,style:{width:"90%"},alt:""})}),Object(b.jsx)(O.a,{xs:!0,lg:"6",children:c.videoData&&Object(b.jsx)("video",{width:"90%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:c.videoData,type:"video/mp4"})})})]}),c.message&&Object(b.jsx)(g.a,{variant:c.message.status,children:c.message.message})]})]})})},E=a(64),B=function(e){var t=e.token,a=e.setUserPageState,s=e.isGenerating,n=e.setIsGenerating,c=e.testVideo2,r=e.setTestVideo2,i=function(){var e=Object(k.a)(y.a.mark((function e(a){var s,i,o,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),a.preventDefault(),s=window.performance.now(),r(Object(z.a)(Object(z.a)({},c),{},{videoData:!1,message:!1})),e.next=6,fetch("https://shoevideo.azurewebsites.net/api/test_video_double",{method:"POST",body:JSON.stringify({img_url_1:c.imageUrl1,img_url_2:c.imageUrl2,is_save:c.checked}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":t}});case 6:return i=e.sent,e.next=9,i.json();case 9:o=e.sent,i.ok?(l=window.performance.now(),r(Object(z.a)(Object(z.a)({},c),{},{videoData:o.result_url,message:{status:"success",message:"Video successfully generated in "+((l-s)/1e3).toFixed(2)+" seconds."}})),n(!1)):(404===i.status?r(Object(z.a)(Object(z.a)({},c),{},{message:{status:"danger",message:o.detail,time:""}})):r(Object(z.a)(Object(z.a)({},c),{},{message:{status:"danger",message:"Error code: "+i.status.toString(),time:""}})),n(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(d.a,{style:{},children:Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(O.a,{xs:!0,lg:"2",children:Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"",onClick:function(){a("")},children:"Back"})}),Object(b.jsxs)(O.a,{xs:!0,lg:"8",children:[Object(b.jsxs)(w.a,{onSubmit:i,className:"mb-4",children:[Object(b.jsx)(w.a.Group,{className:"mb-3",children:Object(b.jsx)(E.a,{label:"Image 1 URL",children:Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Image 1 URL",value:c.imageUrl1,onInput:function(e){return r(Object(z.a)(Object(z.a)({},c),{},{imageUrl1:e.target.value}))},required:!0})})}),Object(b.jsx)(w.a.Group,{className:"mb-3",children:Object(b.jsx)(E.a,{label:"Image 2 URL",children:Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Image 2 URL",value:c.imageUrl2,onInput:function(e){return r(Object(z.a)(Object(z.a)({},c),{},{imageUrl2:e.target.value}))},required:!0})})}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(O.a,{xs:!0,lg:"3",children:Object(b.jsx)(S.a,{variant:"primary",type:"submit",disabled:s,style:{width:"160px"},children:s?"Generating video...":"Submit"})}),Object(b.jsx)(O.a,{className:"mx-2",children:Object(b.jsx)(w.a.Group,{children:Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)(w.a.Control,{className:"form-check-input",type:"checkbox",checked:c.checked,onChange:function(e){return r(Object(z.a)(Object(z.a)({},c),{},{checked:e.currentTarget.checked}))}}),Object(b.jsx)("label",{className:"form-check-label text-muted",children:"Add to results"})]})})})]})]}),Object(b.jsxs)(x.a,{style:{height:"400px"},children:[Object(b.jsx)(O.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:c.imageUrl1,style:{width:"90%"},alt:""})}),Object(b.jsx)(O.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:c.imageUrl2,style:{width:"90%"},alt:""})}),Object(b.jsx)(O.a,{xs:!0,lg:"4",children:c.videoData&&Object(b.jsx)("video",{width:"90%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:c.videoData,type:"video/mp4"})})})]}),c.message&&Object(b.jsx)(g.a,{variant:c.message.status,children:c.message.message})]})]})})},J=function(e){var t=e.token,a=e.setUserPageState,c=Object(s.useState)([]),r=Object(i.a)(c,2),o=r[0],l=r[1],j=Object(s.useState)(!1),u=Object(i.a)(j,2),h=u[0],m=u[1];return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(y.a.mark((function e(){var a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_test_videos",{method:"GET",headers:{"x-functions-key":t}});case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,a.ok?(l(s.tests),m(!1)):m(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"mt-2",onClick:function(){a("")},children:"Back"}),Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(A,{show:h,text:"Fetching test pairs"}),Object(b.jsx)(x.a,{style:{height:"320px"},children:o.map((function(e,t){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(O.a,{xs:!0,lg:"6",children:Object(b.jsxs)(x.a,{className:"gx-0",children:[Object(b.jsx)("div",{children:e.created_at}),Object(b.jsx)(O.a,{xs:!0,lg:"6",children:Object(b.jsx)("img",{src:e.source_url,style:{width:"100%"},alt:""})}),Object(b.jsx)(O.a,{xs:!0,lg:"6",children:Object(b.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:e.result_url,type:"video/mp4"})})})]})}),t%2===1&&Object(b.jsx)("div",{className:"w-100"})]},t)}))})]})]})},H=function(e){var t=e.token,a=e.setUserPageState,c=Object(s.useState)([]),r=Object(i.a)(c,2),o=r[0],l=r[1],j=Object(s.useState)(!1),u=Object(i.a)(j,2),h=u[0],m=u[1];return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(y.a.mark((function e(){var a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_test_videos_double",{method:"GET",headers:{"x-functions-key":t}});case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,a.ok?(l(s.tests),m(!1)):m(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"mt-2",onClick:function(){a("")},children:"Back"}),Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(A,{show:h,text:"Fetching test pairs"}),Object(b.jsx)(x.a,{style:{height:"320px"},children:o.map((function(e,t){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(O.a,{xs:!0,lg:"6",children:Object(b.jsxs)(x.a,{className:"gx-0",children:[Object(b.jsx)("div",{children:e.created_at}),Object(b.jsx)(O.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:e.source_url_1,style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(b.jsx)(O.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:e.source_url_2,style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(b.jsx)(O.a,{xs:!0,lg:"4",children:Object(b.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:e.result_url,type:"video/mp4"})})})]})}),t%2===1&&Object(b.jsx)("div",{className:"w-100"})]},t)}))})]})]})},M=function(e){var t=e.token,a=e.email,n=e.userPageState,c=e.setUserPageState,r=e.isGenerating,o=e.setIsGenerating,l=Object(s.useState)(""),j=Object(i.a)(l,2),d=j[0],u=j[1],h=Object(s.useState)(!1),m=Object(i.a)(h,2),p=m[0],f=m[1],g=Object(s.useState)({imageType:"",imageData:"",videoData:!1,checked:!0,message:!1}),v=Object(i.a)(g,2),w=v[0],_=v[1],N=Object(s.useState)({imageUrl1:"",imageUrl2:"",videoData:!1,checked:!0,message:!1}),C=Object(i.a)(N,2),T=C[0],D=C[1];return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(y.a.mark((function e(){var s,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_user_info",{method:"POST",body:JSON.stringify({email:a}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":t}});case 3:return s=e.sent,e.next=6,s.json();case 6:n=e.sent,s.ok?(u(n.user_type),f(!1)):f(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,t]),Object(b.jsxs)("div",{children:[Object(b.jsx)(A,{show:p,text:"Getting user data"}),function(e){switch(e){case"compareTests":return Object(b.jsx)(J,{token:t,setUserPageState:c,className:"mt-4"});case"compareTestsDouble":return Object(b.jsx)(H,{token:t,setUserPageState:c,className:"mt-4"});case"testVideo":return Object(b.jsx)(R,{token:t,setUserPageState:c,className:"mt-4",isGenerating:r,setIsGenerating:o,testVideoData:w,setTestVideoData:_});case"testVideoDouble":return Object(b.jsx)(B,{token:t,setUserPageState:c,className:"mt-4",isGenerating:r,setIsGenerating:o,testVideo2:T,setTestVideo2:D});default:return Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsx)(x.a,{className:"justify-content-md-center",md:"auto",children:Object(b.jsx)(O.a,{xs:!0,lg:"",children:"admin"===d&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"ms-3 me-1",onClick:function(){c("testVideo")},children:"Generate Videos (1 image)"}),Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"me-4 ms-1",onClick:function(){c("compareTests")},children:"Results"}),Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"ms-4 me-1",onClick:function(){c("testVideoDouble")},children:"Generate Videos (2 images)"}),Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"me-3 ms-1",onClick:function(){c("compareTestsDouble")},children:"Results"})]})})})})}}(n)]})},Y=function(){return sessionStorage.getItem("token")},W=function(){return sessionStorage.getItem("email")},q=function(e,t){sessionStorage.setItem("token",e),sessionStorage.setItem("email",t)},Q=function(){sessionStorage.removeItem("token"),window.location.reload()};var X=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(i.a)(c,2),j=r[0],d=r[1],u=Object(s.useState)(""),x=Object(i.a)(u,2),O=x[0],f=x[1],g=Object(s.useState)(Y()),v=Object(i.a)(g,2),y=v[0],k=v[1],w=Object(s.useState)(!1),S=Object(i.a)(w,2),_=S[0],N=S[1];return y?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h,{email:W(),logout:Q,setUserPageState:n}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"",element:Object(b.jsx)(m,{})}),Object(b.jsx)(l.a,{path:"createFeed",element:Object(b.jsx)(V,{token:Y()})}),Object(b.jsx)(l.a,{path:"createVideos",element:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{path:"user",element:Object(b.jsx)(M,{token:Y(),email:W(),setUserPageState:n,userPageState:a,isGenerating:_,setIsGenerating:N})})]})]}),_&&Object(b.jsx)("div",{className:"p-1 btn btn-outline-primary disabled m-2",style:{position:"fixed",bottom:"0",right:"0"},children:"Generating video..."})]}):Object(b.jsx)(I,{email:j,password:O,setEmail:d,setPassword:f,saveToken:q,setToken:k})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};a(79);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),K()}},[[80,1,2]]]);
//# sourceMappingURL=main.3b7f65d8.chunk.js.map