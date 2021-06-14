(this["webpackJsonpbutton-component"]=this["webpackJsonpbutton-component"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),s=c(15),r=c.n(s),a=(c(23),c(24),c(4)),i=c(14),j=c(13),d=(c(25),c(44)),l=c(43),b=c(0),x=function(e){switch(e){case"primary":return u.primary;case"secondary":return u.secondary;case"danger":return u.danger;default:return u.default}},u={default:{text:"#3F3F3F",background:"#E0E0E0",focus:"#AEAEAE"},primary:{text:"#FFFFFF",background:"#2962FF",focus:"#0039CB"},secondary:{text:"#FFFFFF",background:"#455A64",focus:"#1C313A"},danger:{text:"#FFFFFF",background:"#D32F2F",focus:"#9A0007"}},O=Object(d.a)({button:function(e){e._theme;var t=Object(i.a)(e,["_theme"]);return Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({outline:0,display:"flex",justifyContent:"center",alignItems:"center",gap:"0.7rem",border:0,borderRadius:6,fontFamily:"Noto Sans JP",fontWeight:500,fontSize:14,height:36,color:x(t.color).text,background:x(t.color).background,boxShadow:"0px 2px 3px ".concat(Object(j.a)(x(t.color).background,{format:"css",alpha:.2})),padding:"0 16px"},"sm"===t.size&&{height:32}),"lg"===t.size&&{height:42}),"outline"===t.variant&&{background:"none",border:"1px solid ".concat(x(t.color).background),boxShadow:"none",color:x(t.color).background}),"text"===t.variant&&{background:"none",border:0,boxShadow:"none",color:x(t.color).background}),t.disabled&&{background:x(t.color).background,color:"#9E9E9E",boxShadow:"none"}),"text"===t.variant&&t.disabled&&{background:"none"}),t.disableShadow&&{boxShadow:"none"}),{},{"&:hover, &:focus":Object(a.a)(Object(a.a)(Object(a.a)({background:x(t.color).focus},("outline"===t.variant||"text"===t.variant)&&{background:"".concat(Object(j.a)(x(t.color).background,{format:"css",alpha:.1}))}),t.disabled&&{background:"#E0E0E0",color:"#9E9E9E"}),"text"===t.variant&&t.disabled&&{background:"none"})})},icon:{fontSize:14}}),h=function(e){var t=e.placeholder,c=void 0===t?"Default":t,o=e.startIcon,s=e.endIcon,r=Object(i.a)(e,["placeholder","startIcon","endIcon"]),j=Object(a.a)(Object(a.a)({},r),{},{_theme:u}),d=O(j),x=o&&Object(b.jsx)(l.a,{className:d.icon,children:o}),h=s&&Object(b.jsx)(l.a,{className:d.icon,children:s});return Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsxs)("button",{className:d.button,disabled:r.disabled,children:[x,c,h]})})};var p=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("h1",{children:"Buttons"})}),Object(b.jsxs)("main",{className:"Main",children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:"<Button />"}),Object(b.jsx)(h,{})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:"<Button variant=\u201doutline\u201d />"}),Object(b.jsx)(h,{variant:"outline"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:"<Button variant=\u201dtext\u201d />"}),Object(b.jsx)(h,{variant:"text"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:"<Button disableShadow />"}),Object(b.jsx)(h,{disableShadow:!0})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:"<Button disabled />"}),Object(b.jsx)(h,{disabled:!0})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button variant="text" disabled />'}),Object(b.jsx)(h,{variant:"text",disabled:!0})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button startIcon="access_alarm" />'}),Object(b.jsx)(h,{startIcon:"access_alarm"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button endIcon="local_grocery_store" />'}),Object(b.jsx)(h,{endIcon:"local_grocery_store"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button size="sm" />'}),Object(b.jsx)(h,{size:"sm"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button size="md" />'}),Object(b.jsx)(h,{size:"md"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button size="lg" />'}),Object(b.jsx)(h,{size:"lg"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="default" />'}),Object(b.jsx)(h,{color:"default"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="primary" />'}),Object(b.jsx)(h,{color:"primary"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="secondary" />'}),Object(b.jsx)(h,{color:"secondary"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="danger" />'}),Object(b.jsx)(h,{color:"danger"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="secondary" variant="outline" />'}),Object(b.jsx)(h,{color:"secondary",variant:"outline"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="danger" disableShadow />'}),Object(b.jsx)(h,{color:"danger",disableShadow:!0})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="primary" variant="text" />'}),Object(b.jsx)(h,{color:"primary",variant:"text"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button color="secondary" startIcon="access_alarm" />'}),Object(b.jsx)(h,{color:"secondary",startIcon:"access_alarm"})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:'<Button size="lg" color="danger" />'}),Object(b.jsx)(h,{size:"lg",color:"danger"})]})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.3de6c857.chunk.js.map