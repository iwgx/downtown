(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(8),l=n.n(c),i=n(1),u=n(3),s=n(2);!function(e){e[e.CHANGE_HOUR_FIRST_DIGIT=0]="CHANGE_HOUR_FIRST_DIGIT",e[e.CHANGE_HOUR_SECOND_DIGIT=1]="CHANGE_HOUR_SECOND_DIGIT",e[e.CHANGE_MINUTE_FIRST_DIGIT=2]="CHANGE_MINUTE_FIRST_DIGIT",e[e.CHANGE_MINUTE_SECOND_DIGIT=3]="CHANGE_MINUTE_SECOND_DIGIT",e[e.CHANGE_SECOND_FIRST_DIGIT=4]="CHANGE_SECOND_FIRST_DIGIT",e[e.CHANGE_SECOND_SECOND_DIGIT=5]="CHANGE_SECOND_SECOND_DIGIT"}(a||(a={}));var E,f=function(e,t){switch(t.type){case a.CHANGE_HOUR_FIRST_DIGIT:return Object(s.a)({},e,{hour:"".concat(t.payload).concat(e.hour[1])});case a.CHANGE_HOUR_SECOND_DIGIT:return Object(s.a)({},e,{hour:"".concat(e.hour[0]).concat(t.payload)});case a.CHANGE_MINUTE_FIRST_DIGIT:return Object(s.a)({},e,{minute:"".concat(t.payload).concat(e.minute[1])});case a.CHANGE_MINUTE_SECOND_DIGIT:return Object(s.a)({},e,{minute:"".concat(e.minute[0]).concat(t.payload)});case a.CHANGE_SECOND_FIRST_DIGIT:return Object(s.a)({},e,{second:"".concat(t.payload).concat(e.second[1])});case a.CHANGE_SECOND_SECOND_DIGIT:return Object(s.a)({},e,{second:"".concat(e.second[0]).concat(t.payload)});default:return e}},m={hour:"00",minute:"00",second:"00"};!function(e){e[e.TO_INPUT_STAGE=0]="TO_INPUT_STAGE",e[e.TO_COUNT_STAGE=1]="TO_COUNT_STAGE"}(E||(E={}));var d=function(e,t){switch(t.type){case E.TO_INPUT_STAGE:return"input";case E.TO_COUNT_STAGE:return"count";default:return e}},p=Object(r.createContext)({}),_=function(e){var t=e.children,n=Object(r.useReducer)(f,m),a=Object(r.useReducer)(d,"input");return o.a.createElement(p.Provider,{value:{timeInput:n,stage:a}},t)},b=function(){return Object(r.useContext)(p)},g=i.a.create({container:{width:"50%"},separator:{fontSize:75,color:"#263238"},inputsContainer:{display:"flex",justifyContent:"space-between",alignItems:"center"},inputContainer:{display:"flex",justifyContent:"space-between",width:175},input:{height:150,width:75,border:"1px solid #607D8B",borderRadius:5,fontSize:75,textAlign:"center",color:"#263238",outline:"none"}}),I=function(){var e=b(),t=Object(u.a)(e.timeInput,2),n=t[0],r=t[1],c=function(e,t,n){return o.a.createElement("input",{className:Object(i.b)(g.input),type:"text",onFocus:function(e){return e.target.select()},onInput:function(e){e.target.form.elements[t+1].focus()},onChange:function(e){var a=e.target.value;parseInt(a)>n||r({type:t,payload:a})},value:e})};return o.a.createElement("div",{className:Object(i.b)(g.inputsContainer)},o.a.createElement("div",{className:Object(i.b)(g.inputContainer)},c(n.hour[0],a.CHANGE_HOUR_FIRST_DIGIT,2),c(n.hour[1],a.CHANGE_HOUR_SECOND_DIGIT,3)),o.a.createElement("span",{className:Object(i.b)(g.separator)},":"),o.a.createElement("div",{className:Object(i.b)(g.inputContainer)},c(n.minute[0],a.CHANGE_MINUTE_FIRST_DIGIT,5),c(n.minute[1],a.CHANGE_MINUTE_SECOND_DIGIT,9)),o.a.createElement("span",{className:Object(i.b)(g.separator)},":"),o.a.createElement("div",{className:Object(i.b)(g.inputContainer)},c(n.second[0],a.CHANGE_SECOND_FIRST_DIGIT,5),c(n.second[1],a.CHANGE_SECOND_SECOND_DIGIT,9)))},O=i.a.create({buttonContainer:{textAlign:"center"},button:{backgroundColor:"#0091EA",color:"white",borderRadius:2.5,border:"none",padding:"0 15px",height:40,width:100,marginTop:75,cursor:"pointer",fontSize:16}}),N=function(){var e=b(),t=Object(u.a)(e.stage,2)[1];return o.a.createElement("div",{className:Object(i.b)(O.buttonContainer)},o.a.createElement("button",{className:Object(i.b)(O.button),onClick:function(){t({type:E.TO_COUNT_STAGE})}},"Start"))},C=i.a.create({container:{width:"50%"}}),T=function(){return o.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:Object(i.b)(C.container)},o.a.createElement(I,null),o.a.createElement(N,null))},h=function(){var e=b(),t=Object(u.a)(e.stage,1)[0];return o.a.createElement("main",{className:Object(i.b)(v.content)},"input"===t?o.a.createElement(T,null):"count"===t?o.a.createElement("p",null,"count"):void 0)},v=i.a.create({content:{flex:1,backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}});function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var G=o.a.createElement("g",null,o.a.createElement("path",{d:"M138.357,0C62.066,0,0,62.066,0,138.357s62.066,138.357,138.357,138.357s138.357-62.066,138.357-138.357 S214.648,0,138.357,0z M138.357,258.715C71.992,258.715,18,204.723,18,138.357S71.992,18,138.357,18 s120.357,53.992,120.357,120.357S204.723,258.715,138.357,258.715z"}),o.a.createElement("path",{d:"M194.798,160.903c-4.188-2.677-9.753-1.454-12.432,2.732c-8.694,13.593-23.503,21.708-39.614,21.708 c-25.908,0-46.985-21.078-46.985-46.986s21.077-46.986,46.985-46.986c15.633,0,30.2,7.747,38.968,20.723 c2.782,4.117,8.375,5.201,12.496,2.418c4.118-2.782,5.201-8.377,2.418-12.496c-12.118-17.937-32.262-28.645-53.882-28.645 c-35.833,0-64.985,29.152-64.985,64.986s29.152,64.986,64.985,64.986c22.281,0,42.759-11.218,54.778-30.009 C200.208,169.147,198.985,163.582,194.798,160.903z"})),D=o.a.createElement("g",null),y=o.a.createElement("g",null),j=o.a.createElement("g",null),A=o.a.createElement("g",null),H=o.a.createElement("g",null),x=o.a.createElement("g",null),R=o.a.createElement("g",null),U=o.a.createElement("g",null),k=o.a.createElement("g",null),F=o.a.createElement("g",null),M=o.a.createElement("g",null),P=o.a.createElement("g",null),W=o.a.createElement("g",null),z=o.a.createElement("g",null),B=o.a.createElement("g",null),J=function(e){var t=e.svgRef,n=S(e,["svgRef"]);return o.a.createElement("svg",w({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 276.715 276.715",style:{enableBackground:"new 0 0 276.715 276.715"},xmlSpace:"preserve",ref:t},n),G,D,y,j,A,H,x,R,U,k,F,M,P,W,z,B)},L=o.a.forwardRef(function(e,t){return o.a.createElement(J,w({svgRef:t},e))}),$=(n.p,function(){return o.a.createElement("footer",{className:Object(i.b)(q.footer)},o.a.createElement("a",{href:"https://github.com/iwgx/downtown",className:Object(i.b)(q.link),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",null,"Downtown"),o.a.createElement(L,{className:Object(i.b)(q.copyrightSvgIcon)}),o.a.createElement("span",null,"2019 Ilham Wahabi")))}),q=i.a.create({footer:{backgroundColor:"white",textAlign:"center",padding:"24px 50px"},link:{display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",outline:"none",cursor:"pointer",color:"rgba(0,0,0,.65)",fontSize:14},copyrightSvgIcon:{width:14,height:14,fill:"rgba(0, 0, 0, 0.75)",margin:"0 2.5px",paddingBottom:1}}),K=i.a.create({layout:{height:"100vh",display:"flex",flex:"auto",flexDirection:"column"}}),Q=function(){return o.a.createElement(_,null,o.a.createElement("main",{className:Object(i.b)(K.layout)},o.a.createElement(h,null),o.a.createElement($,null)))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(15);l.a.render(o.a.createElement(Q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/downtown",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/downtown","/service-worker.js");V?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):X(t,e)})}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.dd891771.chunk.js.map