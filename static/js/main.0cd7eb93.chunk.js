(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),r=t(6),n=t.n(r),c=(t(15),t(16),t(3));function s(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement(c.b,{className:"navbar-brand",to:"/TextUtil"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(c.b,{className:"nav-link",to:"/about"},e.aboutText,o.a.createElement("span",{className:"sr-only"},"(current)")))),o.a.createElement("div",{className:"custom-control  custom-switch text-".concat("light"===e.mode?"dark":"light"," ")},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customSwitches"}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitches",onClick:e.toggle,style:{cursor:"pointer"}},"Enable Dark Mode")))))}function i(e){const[a,t]=Object(l.useState)("");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},e.title)),o.a.createElement("div",{className:"form-group my-3"},o.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:a,onChange:e=>{t(e.target.value)},style:{backgroundColor:"dark"===e.mode?"rgb(47 83 119)":"",color:"dark"===e.mode?"white":"black"}}),o.a.createElement("button",{disabled:0===a.length,type:"button",className:"btn btn-primary my-2 mx-1",onClick:()=>{let l=a.toUpperCase();t(l),e.showAlert("Text to Uppercase","success")}},"Text to upper"),o.a.createElement("button",{disabled:0===a.length,type:"button",className:"btn btn-primary my-2 mx-1",onClick:()=>{let l=a.toLowerCase();t(l),e.showAlert("Text to Lowercase","success")}},"Text to Lower"),o.a.createElement("button",{disabled:0===a.length,type:"button",className:"btn btn-primary my-2 mx-1",onClick:()=>{let l=a.charAt(0).toUpperCase()+a.slice(1);t(l),e.showAlert("Text capitalized","success")}},"Text to Capitalize"),o.a.createElement("button",{disabled:0===a.length,type:"button",className:"btn btn-primary my-2 mx-1",onClick:()=>{navigator.clipboard.writeText(a),e.showAlert("Text Copied","success")}},"Copy Text"),o.a.createElement("button",{disabled:0===a.length,type:"button",className:"btn btn-primary my-2 mx-1",onClick:()=>{t(""),e.showAlert("Text cleared","success")}},"Clear")),o.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h2",null,"Your Text Summary"),o.a.createElement("p",null,"Total ",a.split(/\s+/).filter(e=>0!==e.length).length," Words and ",a.length," Letters "),o.a.createElement("p",null,.008*a.split(" ").filter(e=>0!==e.length).length," Minutes to read"),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",null,0===a.split(" ").filter(e=>0!==e.length).length?"Nothing to Preview!":a)))}function m(e){let a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(47 83 119)":"white",border:"dark"===e.mode?"1px solid white ":"1px solid black"};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container my-2"},o.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},"About"),o.a.createElement("div",{className:"accordion accordion-flush",id:"accordionFlushExample"},o.a.createElement("div",{className:"accordion-item",style:a},o.a.createElement("h2",{className:"accordion-header",id:"flush-headingOne"},o.a.createElement("button",{style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(47 83 119)":"white"},className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},o.a.createElement("strong",null,"Analyze your Text"))),o.a.createElement("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample"},o.a.createElement("div",{style:a,className:"accordion-body"},"Dive deep into your written content with our text analysis tools. From word count and readability analysis to sentiment analysis and keyword extraction, our tools offer valuable insights to help you understand and optimize your text."))),o.a.createElement("div",{className:"accordion-item",style:a},o.a.createElement("h2",{className:"accordion-header",id:"flush-headingTwo"},o.a.createElement("button",{style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(47 83 119)":"white"},className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"},o.a.createElement("strong",null,"Free to use"))),o.a.createElement("div",{id:"flush-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#accordionFlushExample"},o.a.createElement("div",{style:a,className:"accordion-body"},"We believe in making powerful text analysis tools accessible to everyone. That's why all our tools are completely free to use. No subscriptions, no hidden fees \u2013 just unlimited access to essential text processing utilities."))),o.a.createElement("div",{className:"accordion-item",style:a},o.a.createElement("h2",{className:"accordion-header",id:"flush-headingThree"},o.a.createElement("button",{style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(47 83 119)":"white"},className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"},o.a.createElement("strong",null,"Browser Compatible"))),o.a.createElement("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample"},o.a.createElement("div",{style:a,className:"accordion-body"},"Our platform is designed to be seamlessly compatible with all major web browsers. Whether you prefer Chrome, Firefox, Safari, or any other browser, you can access TextUtils anytime, anywhere."))))))}var d=function(e){return o.a.createElement("div",{style:{height:60}},e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show "),role:"alert"},o.a.createElement("strong",null,(e=>{const a=e;return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type))," ",e.alert.message))},u=t(2);var b=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null),n=(e,a)=>{r({message:e,type:a}),setTimeout(()=>{r(null)},2e3)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(s,{title:"TextUtil",mode:e,toggle:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#042743",n("Dark mode enabled","success")):(a("light"),document.body.style.backgroundColor="",n("Light mode enabled","success"))},aboutText:"About"}),o.a.createElement(d,{alert:t}),o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/about",element:o.a.createElement(m,{mode:e})}),o.a.createElement(u.a,{exact:!0,path:"/TextUtil",element:o.a.createElement("div",{className:"container"},o.a.createElement(i,{title:"Try TextUtils - Word counter, Character counter, Uppercase to Lowercase(Vice versa)",mode:e,showAlert:n}))}))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:o,getLCP:r,getTTFB:n}=a;t(e),l(e),o(e),r(e),n(e)})};n.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),p()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.0cd7eb93.chunk.js.map