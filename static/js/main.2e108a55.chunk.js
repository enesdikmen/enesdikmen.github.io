(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{77:function(e,t,s){},79:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(26),r=s.n(c),i=(s(77),s(6)),o=s(9),l=s.n(o),d=s(11),j=function(){var e=Object(d.a)(l.a.mark((function e(t,s){var a,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shoevideo.azurewebsites.net/api/save_video_props",{method:"POST",body:JSON.stringify({user_id:1,feed_id:t.feed_id,img_url:t.feed_data.data[0][t.img_url_col],title:t.feed_data.data[0][t.title_col],body:t.feed_data.data[0][t.body_col],site_url:t.feed_data.data[0][t.site_url_col]}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,!a.ok){e.next=19;break}return e.next=9,fetch("https://shoevideo.azurewebsites.net/api/generate_video",{method:"POST",body:JSON.stringify({video_id:n.video_id}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(r=e.sent,!c.ok){e.next=17;break}return e.abrupt("return",{stat:!0,url:r.result_url});case 17:e.next=20;break;case 19:return e.abrupt("return",{stat:!1,detail:"Invalid values in first row of the feed. Check again"});case 20:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),u=function(){sessionStorage.removeItem("functions-key"),sessionStorage.removeItem("email"),sessionStorage.removeItem("userToken"),window.location.reload()},b=(s(79),s(94)),h=s(71),x=s(34),m=s(7),O=(s(90),s(0)),p=s(100),g=s(93),f=s(104),v=function(e){var t=e.email,s=e.logout,a=e.setUserPageState;return Object(O.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(p.a.Brand,{as:x.b,to:"/",children:"AdVideoMaker"}),Object(O.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(p.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(f.a,{className:"me-auto",children:[Object(O.jsx)(f.a.Link,{as:x.b,to:"/",children:"Home"}),Object(O.jsx)(f.a.Link,{as:x.b,to:"/createFeed",children:"Create Feed"}),Object(O.jsx)(f.a.Link,{as:x.b,to:"/myFeeds",children:"My Feeds"})]}),Object(O.jsxs)(f.a,{children:[Object(O.jsx)(f.a.Link,{onClick:function(){a("")},as:x.b,to:"/user",children:t}),Object(O.jsx)(f.a.Link,{onClick:s,children:"Log Out"})]})]})]})})},y=s(105),k=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(b.a,{className:"justify-content-md-center",children:Object(O.jsx)(h.a,{lg:"8",children:Object(O.jsx)("div",{className:"mt-4 fs-4",children:Object(O.jsxs)(y.a,{variant:"dark",className:"w-100",style:{backgroundColor:"white"},children:[Object(O.jsxs)(y.a.Item,{style:{height:"360px"},children:[Object(O.jsxs)(b.a,{className:"gx-0",children:[Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsx)("img",{src:"https://videoappex.blob.core.windows.net/video-test/5319bd07-be0a-45d0-9fc6-cdbdf482f7ee",style:{width:"100%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:"https://videoappex.blob.core.windows.net/video-container/0b45fb2f-82bb-4e60-927f-d87913ce0ba9",type:"video/mp4"})})})]}),Object(O.jsx)(y.a.Caption,{children:Object(O.jsx)("p",{children:"Generate videos from single image."})})]}),Object(O.jsxs)(y.a.Item,{style:{height:"360px",backgroundColor:"white"},children:[Object(O.jsxs)(b.a,{className:"gx-0 mt-4",children:[Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("img",{src:"https://productimages.hepsiburada.net/s/178/1500/110000143052193.jpg",style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("img",{src:"https://productimages.hepsiburada.net/s/178/1500/110000143052194.jpg",style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:"https://videoappex.blob.core.windows.net/video-container/9673568c-d917-4d1d-a5dc-abe3f55cd760",type:"video/mp4"})})})]}),Object(O.jsx)(y.a.Caption,{children:Object(O.jsx)("p",{children:"Generate video from a image pair."})})]}),Object(O.jsxs)(y.a.Item,{style:{height:"360px"},children:[Object(O.jsx)(b.a,{className:"gx-0 justify-content-md-center",children:Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsx)("img",{src:"https://www.dignited.com/wp-content/uploads/2021/03/google-sheets.png",style:{width:"100%"},alt:""})})}),Object(O.jsx)(y.a.Caption,{children:Object(O.jsx)("p",{children:"Provide a feed to auto generate videos."})})]})]})})})})})})},w=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"Create Videos"})})},S=s(98),_=s(99),N=s(101),C=s(95),T=function(e){var t=e.setCreateFeedState,s=e.setAlertState,n=e.setData,c=(e.token,Object(a.useState)("")),r=Object(i.a)(c,2),o=r[0],j=r[1],u=Object(a.useState)("https://docs.google.com/spreadsheets/d/e/2PACX-1vQvm265NJfQjH0GtMLNRD7rJIA5vapYsz1BbIEsmdOYJGuvWlfARCYwy3SS9BmVGGOJ4-MGhcoO7h8w/pub?gid=0&single=true&output=csv"),b=Object(i.a)(u,2),h=b[0],x=b[1],m=function(){var e=Object(d.a)(l.a.mark((function e(){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),s({show:!1,text:""}),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/check_feed?"+new URLSearchParams({feedURL:h}),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,a.ok?(c.feed_name=o,n(c),t("arrangeFeed")):(t("checkURL"),s({show:!0,text:c.detail}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(N.a,{onSubmit:function(e){m(),e.preventDefault()},children:[Object(O.jsxs)(N.a.Group,{className:"mb-3",children:[Object(O.jsx)(N.a.Label,{children:"Feed Name"}),Object(O.jsx)(N.a.Control,{required:!0,type:"text",placeholder:"Enter a name for your feed.",value:o,onInput:function(e){return j(e.target.value)}})]}),Object(O.jsxs)(N.a.Group,{className:"mb-3",children:[Object(O.jsx)(N.a.Label,{children:"Feed URL"}),Object(O.jsx)(N.a.Control,{type:"text",placeholder:"Enter feed URL.",value:h,onInput:function(e){return x(e.target.value)}})]}),Object(O.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"})]})})},D=s(96),I=s(102),U=function(e){var t=e.show,s=e.title,a=e.text,n=e.buttonText,c=e.handleClose,r=e.handleConfirm;return Object(O.jsxs)(I.a,{show:t,onHide:c,children:[Object(O.jsx)(I.a.Header,{closeButton:!0,children:Object(O.jsx)(I.a.Title,{children:s})}),Object(O.jsx)(I.a.Body,{children:a}),Object(O.jsxs)(I.a.Footer,{children:[Object(O.jsx)(C.a,{variant:"secondary",onClick:c,children:"Close"}),Object(O.jsx)(C.a,{variant:"primary",onClick:function(){r(),c()},children:n})]})]})},F=function(e){var t=e.setCreateFeedState,s=e.setAlertState,c=e.feedData,r=e.setData,o=Object(a.useState)(!1),j=Object(i.a)(o,2),u=j[0],x=j[1],m=Object(a.useState)(!1),p=Object(i.a)(m,2),g=p[0],f=p[1],v=Object(a.useState)(!1),y=Object(i.a)(v,2),k=y[0],w=y[1],S=Object(a.useState)(!1),_=Object(i.a)(S,2),T=_[0],I=_[1],F=[{col:"Image URL",set:x,get:u},{col:"Title",set:f,get:g},{col:"Body",set:w,get:k},{col:"Website URL",set:I,get:T}],V=Object(a.useState)(!1),G=Object(i.a)(V,2),P=G[0],A=G[1],L=function(){var e=Object(d.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),s({show:!1,text:""}),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/create_feed",{method:"POST",body:JSON.stringify({user_id:1,feed_name:c.feed_name,feed_url:c.feed_url,img_url_col:u,title_col:g,site_url_col:T,body_col:k}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,a.ok?(c.title_col=n.title_col,c.site_url_col=n.site_url_col,c.img_url_col=n.img_url_col,c.body_col=n.body_col,c.feed_id=n.feed_id,r(c),t("arrangeVisuals")):(t("checkURL"),s({show:!0,text:n.detail}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsxs)(N.a,{onSubmit:function(e){u&&g&&k&&T?A(!0):s({show:!0,text:"Please fill all of the fields first."}),e.preventDefault()},children:[Object(O.jsx)(b.a,{children:F.map((function(e,t){return Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(h.a,{children:Object(O.jsxs)(N.a.Group,{as:b.a,className:"mb-3",children:[Object(O.jsx)(N.a.Label,{column:!0,sm:4,className:"text-end fw-bold",children:e.col}),Object(O.jsx)(h.a,{sm:8,children:Object(O.jsxs)(N.a.Select,{"aria-label":"Default select example",value:e.get,onChange:function(t){e.set(t.target.value)},children:[Object(O.jsx)("option",{disabled:!0,value:!1,children:"Select.."}),c.col_names.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))]})})]})}),t%2===1&&Object(O.jsx)("div",{className:"w-100"})]},t)}))}),Object(O.jsx)(C.a,{variant:"primary",type:"submit",children:"Save"})]}),Object(O.jsx)("div",{className:"mt-4",children:Object(O.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),c.col_names.map((function(e,t){return Object(O.jsx)("th",{children:e},t)}))]})}),Object(O.jsx)("tbody",{children:c.feed_data.data.map((function(e,t){return Object(O.jsx)("tr",{children:Object.values(e).map((function(e,t){return Object(O.jsx)("td",{children:e.toString().length<50?e:e.toString().substring(0,50)+"..."},t)}))},t)}))})]})}),Object(O.jsx)(U,{show:P,title:"Save Feed",text:"Are you sure to create a new feed?",buttonText:"Yes",handleClose:function(){return A(!1)},handleConfirm:L})]})},V=s(97),G=function(e){var t=e.height,s=void 0===t?100:t,a=e.width,n=void 0===a?200:a;return Object(O.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:s+"px",width:n+"px"},children:Object(O.jsx)(V.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},P=function(e){var t=e.setCreateFeedState,s=(e.setAlertState,e.feedData),n=(e.setData,e.token,Object(a.useState)(!1)),c=Object(i.a)(n,2),r=c[0],o=c[1],j=function(){var e=Object(d.a)(l.a.mark((function e(){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/save_video_props_feed",{method:"POST",body:JSON.stringify({feed_id:s.feed_id}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,!a.ok){e.next=21;break}return e.next=10,fetch("https://shoevideo.azurewebsites.net/api/generate_video_feed",{method:"POST",body:JSON.stringify({video_ids:n.video_ids}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 10:return c=e.sent,e.next=13,c.json();case 13:if(e.sent,!c.ok){e.next=19;break}return t("success"),e.abrupt("return");case 19:e.next=21;break;case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("video",{width:"320",height:"240",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:s.previewVideoUrl,type:"video/mp4"})}),Object(O.jsx)("div",{}),Object(O.jsx)(C.a,{variant:"primary",onClick:function(e){o(!0)},children:"Start Generating Videos"}),Object(O.jsx)(U,{show:r,title:"Save Feed",text:"Are you sure to start generating videos from this feed?",buttonText:"Yes",handleClose:function(){return o(!1)},handleConfirm:j})]})},A=function(e){var t=e.setCreateFeedState,s=e.setAlertState,a=e.feedData,n=e.setData,c=(e.token,function(){var e=Object(d.a)(l.a.mark((function e(c){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),e.next=3,j(a);case 3:(r=e.sent).stat?(a.previewVideoUrl=r.url,n(a),t("preview")):(t("arrangeFeed"),s({show:!0,text:r.detail}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:" Pick a theme "}),Object(O.jsx)("p",{children:" Pick a color etc..."}),Object(O.jsx)(C.a,{variant:"primary",onClick:c,children:"Continue"})]})},L=function(e){var t=e.token,s=Object(a.useState)("checkURL"),n=Object(i.a)(s,2),c=n[0],r=n[1],o=Object(a.useState)({show:!1,text:""}),l=Object(i.a)(o,2),d=l[0],j=l[1],u=Object(a.useState)({}),x=Object(i.a)(u,2),m=x[0],p=x[1],f=Object(a.useState)({percent:10,label:"1/5"}),v=Object(i.a)(f,2),y=v[0],k=v[1];Object(a.useEffect)((function(){switch(c){case"checkURL":k({percent:10,label:"1/5"});break;case"arrangeFeed":k({percent:35,label:"2/5"});break;case"arrangeVisuals":k({percent:60,label:"3/5"});break;case"preview":k({percent:85,label:"4/5"});break;case"success":k({percent:100,label:"5/5"});break;case"loading":break;default:return""}return function(){}}),[c]);return Object(O.jsx)("div",{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(b.a,{className:"justify-content-md-center",children:Object(O.jsxs)(h.a,{lg:"8",children:[Object(O.jsxs)("div",{className:"mt-2 fs-4",children:[Object(O.jsx)("strong",{children:"Create a new feed:"})," ",Object(O.jsx)("span",{children:function(e){switch(e){case"checkURL":return"Provide a URL";case"arrangeFeed":return m.feed_name+" - Match the columns";case"arrangeVisuals":return m.feed_name+" - Arrange Visuals";case"preview":return m.feed_name+" - Video Preview";default:return""}}(c)})]}),Object(O.jsx)(S.a,{className:"fs-5 fw-bold",style:{height:"25px"},striped:!0,variant:"info",now:y.percent,label:y.label}),Object(O.jsx)(_.a,{className:"mt-2",variant:"danger",style:{visibility:d.show?"visible":"hidden",height:"50px"},children:d.text}),function(e){switch(e){case"checkURL":default:return Object(O.jsx)(T,{setCreateFeedState:r,setAlertState:j,setData:p,token:t});case"arrangeFeed":return Object(O.jsx)(F,{setCreateFeedState:r,setAlertState:j,feedData:m,setData:p,token:t});case"arrangeVisuals":return Object(O.jsx)(A,{setCreateFeedState:r,setAlertState:j,feedData:m,setData:p,token:t});case"preview":return Object(O.jsx)(P,{setCreateFeedState:r,setAlertState:j,feedData:m,token:t});case"success":return Object(O.jsx)("div",{className:"fs-5",children:"Videos successfully generated."});case"loading":return Object(O.jsx)(G,{width:300,height:200})}}(c)]})})})})},z=function(e){var t=e.show,s=e.text;return Object(O.jsx)(I.a,{show:t,size:"sm",children:Object(O.jsxs)(I.a.Body,{className:"text-center",style:{height:"150px"},children:[s,Object(O.jsx)(G,{width:260,height:100})]})})},R=s(2),J=function(e){e.token;var t=e.setUserPageState,s=e.isGenerating,a=e.setIsGenerating,n=e.testVideoData,c=e.setTestVideoData,r=e.setToastShow,i=function(){var e=Object(d.a)(l.a.mark((function e(t){var s,i,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t.preventDefault(),s=window.performance.now(),c(Object(R.a)(Object(R.a)({},n),{},{videoData:!1,message:!1})),e.next=6,fetch("https://shoevideo.azurewebsites.net/api/test_video",{method:"POST",body:JSON.stringify({image_data:n.imageData.split(",",2)[1],image_type:n.imageType,is_save:n.checked}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 6:return i=e.sent,e.next=9,i.json();case 9:o=e.sent,i.ok?(d=window.performance.now(),c(Object(R.a)(Object(R.a)({},n),{},{videoData:o.result_url,message:{status:"success",message:"Video successfully generated in "+((d-s)/1e3).toFixed(2)+" seconds. Shoe counts, tensorflow: "+o["shoe-count-tensorflow"]+" mediapipe: "+o["shoe-count-mediapipe"]+" clip value: "+o["clip-value"]}})),a(!1),r(!0)):(404===i.status?c(Object(R.a)(Object(R.a)({},n),{},{message:{status:"danger",message:o.detail,time:""}})):c(Object(R.a)(Object(R.a)({},n),{},{message:{status:"danger",message:"Error code: "+i.status.toString()+o.Exception,time:""}})),a(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(g.a,{style:{},children:Object(O.jsxs)(b.a,{className:"mt-4",children:[Object(O.jsx)(h.a,{xs:!0,lg:"2",children:Object(O.jsx)(C.a,{variant:"warning",size:"sm",className:"",onClick:function(){t("")},children:"Back"})}),Object(O.jsxs)(h.a,{xs:!0,lg:"8",children:[Object(O.jsxs)(N.a,{onSubmit:i,className:"mb-4",children:[Object(O.jsxs)(b.a,{className:"mb-1",children:[Object(O.jsx)(h.a,{children:Object(O.jsx)(N.a.Group,{children:Object(O.jsx)(N.a.Control,{type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){var t=new FileReader;t.onload=function(e){c(Object(R.a)(Object(R.a)({},n),{},{imageData:e.target.result}))},c(Object(R.a)(Object(R.a)({},n),{},{imageType:e.target.files[0].type})),t.readAsDataURL(e.target.files[0])}},required:!0})})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)(C.a,{variant:"primary",type:"submit",disabled:s,style:{width:"160px"},children:s?"Generating video...":"Submit"})}),Object(O.jsx)(h.a,{xs:!0,lg:"1"})]}),Object(O.jsx)(b.a,{children:Object(O.jsx)(N.a.Group,{children:Object(O.jsxs)("div",{className:"form-check form-switch",children:[Object(O.jsx)(N.a.Control,{className:"form-check-input",type:"checkbox",checked:n.checked,onChange:function(e){return c(Object(R.a)(Object(R.a)({},n),{},{checked:e.currentTarget.checked}))}}),Object(O.jsx)("label",{className:"form-check-label text-muted",children:"Add to results"})]})})})]}),Object(O.jsxs)(b.a,{style:{height:"420px"},children:[Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsx)("img",{src:n.imageData,style:{width:"90%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"6",children:n.videoData&&Object(O.jsx)("video",{width:"90%",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:n.videoData,type:"video/mp4"})})})]}),n.message&&Object(O.jsx)(_.a,{variant:n.message.status,children:n.message.message})]})]})})},B=s(72),E=function(e){e.token;var t=e.setUserPageState,s=e.isGenerating,a=e.setIsGenerating,n=e.testVideo2,c=e.setTestVideo2,r=e.setToastShow,i=function(){var e=Object(d.a)(l.a.mark((function e(t){var s,i,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t.preventDefault(),s=window.performance.now(),c(Object(R.a)(Object(R.a)({},n),{},{videoData:!1,message:!1})),e.next=6,fetch("https://shoevideo.azurewebsites.net/api/test_video_double",{method:"POST",body:JSON.stringify({img_url_1:n.imageUrl1,img_url_2:n.imageUrl2,is_save:n.checked}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 6:return i=e.sent,e.next=9,i.json();case 9:o=e.sent,i.ok?(d=window.performance.now(),c(Object(R.a)(Object(R.a)({},n),{},{videoData:o.result_url,message:{status:"success",message:"Video successfully generated in "+((d-s)/1e3).toFixed(2)+" seconds. Shoe counts, 1-> tensorflow: "+o["shoe-count-tensorflow1"]+" mediapipe: "+o["shoe-count-mediapipe1"]+" clip value: "+o["clip-value1"]+", 2-> tensorflow: "+o["shoe-count-tensorflow2"]+" mediapipe: "+o["shoe-count-mediapipe2"]+" clip value: "+o["clip-value2"]}})),a(!1),r(!0)):(404===i.status?c(Object(R.a)(Object(R.a)({},n),{},{videoData:!1,message:{status:"danger",message:o.detail,time:""}})):c(Object(R.a)(Object(R.a)({},n),{},{videoData:!1,message:{status:"danger",message:"Error code: "+i.status.toString(),time:""}})),a(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(g.a,{style:{},children:Object(O.jsxs)(b.a,{className:"mt-4",children:[Object(O.jsx)(h.a,{xs:!0,lg:"2",children:Object(O.jsx)(C.a,{variant:"warning",size:"sm",className:"",onClick:function(){t("")},children:"Back"})}),Object(O.jsxs)(h.a,{xs:!0,lg:"8",children:[Object(O.jsxs)(N.a,{onSubmit:i,className:"mb-4",children:[Object(O.jsx)(N.a.Group,{className:"mb-3",children:Object(O.jsx)(B.a,{label:"Image 1 URL",children:Object(O.jsx)(N.a.Control,{type:"text",placeholder:"Image 1 URL",value:n.imageUrl1,onInput:function(e){return c(Object(R.a)(Object(R.a)({},n),{},{imageUrl1:e.target.value}))},required:!0})})}),Object(O.jsx)(N.a.Group,{className:"mb-3",children:Object(O.jsx)(B.a,{label:"Image 2 URL",children:Object(O.jsx)(N.a.Control,{type:"text",placeholder:"Image 2 URL",value:n.imageUrl2,onInput:function(e){return c(Object(R.a)(Object(R.a)({},n),{},{imageUrl2:e.target.value}))},required:!0})})}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(h.a,{xs:!0,lg:"3",children:Object(O.jsx)(C.a,{variant:"primary",type:"submit",disabled:s,style:{width:"160px"},children:s?"Generating video...":"Submit"})}),Object(O.jsx)(h.a,{className:"mx-2",children:Object(O.jsx)(N.a.Group,{children:Object(O.jsxs)("div",{className:"form-check form-switch",children:[Object(O.jsx)(N.a.Control,{className:"form-check-input",type:"checkbox",checked:n.checked,onChange:function(e){return c(Object(R.a)(Object(R.a)({},n),{},{checked:e.currentTarget.checked}))}}),Object(O.jsx)("label",{className:"form-check-label text-muted",children:"Add to results"})]})})})]})]}),Object(O.jsxs)(b.a,{style:{height:"350px"},children:[Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("img",{src:n.imageUrl1,style:{width:"90%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("img",{src:n.imageUrl2,style:{width:"90%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:n.videoData&&Object(O.jsx)("video",{width:"90%",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:n.videoData,type:"video/mp4"})})})]}),n.message&&Object(O.jsx)(_.a,{variant:n.message.status,children:n.message.message})]})]})})},H=function(e){var t=e.token,s=e.setUserPageState,c=Object(a.useState)([]),r=Object(i.a)(c,2),o=r[0],j=r[1],u=Object(a.useState)(!1),x=Object(i.a)(u,2),m=x[0],p=x[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_test_videos",{method:"GET",headers:{"x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok?(j(s.tests),p(!1)):p(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(C.a,{variant:"warning",size:"sm",className:"mt-2",onClick:function(){s("")},children:"Back"}),Object(O.jsxs)(b.a,{className:"mt-4",children:[Object(O.jsx)(z,{show:m,text:"Fetching test pairs"}),Object(O.jsx)(b.a,{style:{height:"320px"},children:o.map((function(e,t){return Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsxs)(b.a,{className:"gx-0",children:[Object(O.jsx)("div",{children:e.created_at}),Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsx)("img",{src:e.source_url,style:{width:"100%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:e.result_url,type:"video/mp4"})})})]})}),t%2===1&&Object(O.jsx)("div",{className:"w-100"})]},t)}))})]})]})},M=function(e){var t=e.token,s=e.setUserPageState,c=Object(a.useState)([]),r=Object(i.a)(c,2),o=r[0],j=r[1],u=Object(a.useState)(!1),x=Object(i.a)(u,2),m=x[0],p=x[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_test_videos_double",{method:"GET",headers:{"x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok?(j(s.tests),p(!1)):p(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(C.a,{variant:"warning",size:"sm",className:"mt-2",onClick:function(){s("")},children:"Back"}),Object(O.jsxs)(b.a,{className:"mt-4",children:[Object(O.jsx)(z,{show:m,text:"Fetching test pairs"}),Object(O.jsx)(b.a,{style:{height:"320px"},children:o.map((function(e,t){return Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(h.a,{xs:!0,lg:"6",children:Object(O.jsxs)(b.a,{className:"gx-0",children:[Object(O.jsx)("div",{children:e.created_at}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("img",{src:e.source_url_1,style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("img",{src:e.source_url_2,style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(O.jsx)(h.a,{xs:!0,lg:"4",children:Object(O.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(O.jsx)("source",{src:e.result_url,type:"video/mp4"})})})]})}),t%2===1&&Object(O.jsx)("div",{className:"w-100"})]},t)}))})]})]})},W=function(e){var t=e.setUserPageState,s=e.userData;return Object(O.jsxs)("div",{className:"mt-5",children:["admin"===s.userType&&Object(O.jsx)(b.a,{className:"justify-content-md-center",md:"auto",children:Object(O.jsx)(h.a,{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C.a,{variant:"primary",size:"sm",className:"ms-3 me-1",onClick:function(){t("testVideo")},children:"Generate Videos (1 image)"}),Object(O.jsx)(C.a,{variant:"primary",size:"sm",className:"me-4 ms-1",onClick:function(){t("compareTests")},children:"Results"}),Object(O.jsx)(C.a,{variant:"primary",size:"sm",className:"ms-4 me-1",onClick:function(){t("testVideoDouble")},children:"Generate Videos (2 images)"}),Object(O.jsx)(C.a,{variant:"primary",size:"sm",className:"me-3 ms-1",onClick:function(){t("compareTestsDouble")},children:"Results"})]})})}),Object(O.jsx)(b.a,{className:"justify-content-md-center mt-4",md:"auto"})]})},Y=function(e){var t=e.email,s=e.userPageState,n=e.setUserPageState,c=e.isGenerating,r=e.setIsGenerating,o=e.testVideoData,j=e.setTestVideoData,u=e.testVideoDoubleData,b=e.setTestVideoDoubleData,h=e.setToastShow,x=Object(a.useState)({userType:"",userFeeds:""}),m=Object(i.a)(x,2),p=m[0],g=m[1],f=Object(a.useState)(!1),v=Object(i.a)(f,2),y=v[0],k=v[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_user_info",{method:"POST",body:JSON.stringify({user_token:sessionStorage.getItem("userToken")}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok?(g({userType:s.user_type,userFeeds:s.user_feed_data}),k(!1)):k(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{show:y,text:"Getting user data"}),function(e){switch(e){case"compareTests":return Object(O.jsx)(H,{setUserPageState:n,className:"mt-4"});case"compareTestsDouble":return Object(O.jsx)(M,{setUserPageState:n,className:"mt-4"});case"testVideo":return Object(O.jsx)(J,{setUserPageState:n,className:"mt-4",isGenerating:c,setToastShow:h,setIsGenerating:r,testVideoData:o,setTestVideoData:j});case"testVideoDouble":return Object(O.jsx)(E,{setUserPageState:n,className:"mt-4",isGenerating:c,setToastShow:h,setIsGenerating:r,testVideo2:u,setTestVideo2:b});default:return Object(O.jsx)(W,{setUserPageState:n,className:"mt-4",isGenerating:c,setIsGenerating:r,email:t,userData:p})}}(s)]})},q=s(106),Q=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=r[0],j=r[1],u=Object(a.useState)(0),x=Object(i.a)(u,2),m=x[0],p=x[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_user_feed_data",{method:"POST",body:JSON.stringify({user_token:sessionStorage.getItem("userToken")}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok?(j(s.user_feed_data),console.log(s.user_feed_data),n(!1)):n(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{show:s,text:"Getting user feed data."}),Object(O.jsxs)(b.a,{className:"justify-content-md-center mt-4",md:"auto",children:[Object(O.jsx)(h.a,{xs:!0,lg:"2",children:Object(O.jsxs)(q.a,{children:[Object(O.jsx)(q.a.Item,{children:Object(O.jsx)("strong",{children:"My Feeds: "})}),o&&o.map((function(e,t){return Object(O.jsx)(q.a.Item,{action:!0,active:m==t?"true":"",onClick:function(){p(t),console.log("i",t)},children:Object(O.jsxs)("span",{children:[" ",e.feed_name]},t)},t)}))]})}),Object(O.jsx)(h.a,{xs:!0,lg:"6",children:o&&Object(O.jsxs)(O.Fragment,{children:[o[m].feed_id,Object.values(o[m]).map((function(e,t){return Object(O.jsx)("div",{children:e.toString().length<50?e.toString():e.toString().substring(0,50)+"..."},t)}))]})})]})]})},X=s(103),K=function(){return sessionStorage.getItem("email")};var Z=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(!(!sessionStorage.getItem("functions-key")||!sessionStorage.getItem("userToken"))),r=Object(i.a)(c,2),o=(r[0],r[1],Object(a.useState)("")),l=Object(i.a)(o,2),d=(l[0],l[1],Object(a.useState)(!1)),j=Object(i.a)(d,2),p=j[0],g=j[1],f=Object(a.useState)({imageType:"",imageData:"",videoData:!1,checked:!0,message:!1}),y=Object(i.a)(f,2),S=y[0],_=y[1],N=Object(a.useState)({imageUrl1:"",imageUrl2:"",videoData:!1,checked:!0,message:!1}),C=Object(i.a)(N,2),T=C[0],D=C[1],I=Object(a.useState)(!1),U=Object(i.a)(I,2),F=U[0],V=U[1];return sessionStorage.setItem("functions-key","Smo4cG7D/o/vkb3aMAAoO3OulBh52x0WkuRjy8lM/w50VKNAHzPO8Q=="),sessionStorage.setItem("email","admin@admin.com"),sessionStorage.setItem("userToken","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.uAYJSdBzgfW2rJi8msr5eVfzH2eVotAb5CXjGS2aqbo"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(x.a,{children:[Object(O.jsx)(v,{email:K(),logout:u,setUserPageState:n}),Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{path:"",element:Object(O.jsx)(k,{})}),Object(O.jsx)(m.a,{path:"createFeed",element:Object(O.jsx)(L,{})}),Object(O.jsx)(m.a,{path:"createVideos",element:Object(O.jsx)(w,{})}),Object(O.jsx)(m.a,{path:"user",element:Object(O.jsx)(Y,{email:K(),testVideoData:S,setTestVideoData:_,setUserPageState:n,userPageState:s,isGenerating:p,setIsGenerating:g,testVideoDoubleData:T,setTestVideoDoubleData:D,setToastShow:V})}),Object(O.jsx)(m.a,{path:"myFeeds",element:Object(O.jsx)(Q,{})})]}),Object(O.jsxs)(X.a,{onClose:function(){return V(!1)},show:F,delay:5e3,autohide:!0,bg:"light",className:"m-2",style:{position:"fixed",bottom:"0",right:"0"},children:[Object(O.jsxs)(X.a.Header,{children:[Object(O.jsx)("strong",{className:"me-auto text-success",children:"Success"}),Object(O.jsx)("small",{})]}),Object(O.jsx)(X.a.Body,{className:"text-success",children:"Video generated successfully!"})]})]}),p&&Object(O.jsx)("div",{className:"p-1 btn btn-outline-primary disabled m-2",style:{position:"fixed",bottom:"0",right:"0",height:"40px"},children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(h.a,{xs:"9",children:Object(O.jsx)("span",{style:{fontSize:"16px"},children:"Generating video"})}),Object(O.jsx)(h.a,{xs:"2",children:Object(O.jsx)("div",{className:"dot-windmill mt-2"})}),Object(O.jsx)(h.a,{xs:"1"})]})})]})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,107)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};s(88);r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(Z,{})}),document.getElementById("root")),$()}},[[89,1,2]]]);
//# sourceMappingURL=main.2e108a55.chunk.js.map