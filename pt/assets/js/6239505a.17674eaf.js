"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[646],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||n;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1179:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),s=["components"],i={id:"project",title:"Gerenciamento do Projeto",sidebar_label:"Gerenciamento do Projeto",slug:"/project"},u="Gerenciamento do Projeto",l={unversionedId:"management/project",id:"management/project",isDocsHomePage:!1,title:"Gerenciamento do Projeto",description:"Para manter tudo organizado, todos os nossos reposit\xf3rios podem ter seus problemas, mas voc\xea pode encontrar nosso quadro de projeto com todos os tickets aqui.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/management/project.md",sourceDirName:"management",slug:"/project",permalink:"/pt/docs/project",editUrl:"https://crowdin.com/project/sum-lms-website/pt",tags:[],version:"current",lastUpdatedBy:"Ricardo L\xfcders",lastUpdatedAt:1623054307,formattedLastUpdatedAt:"07/06/2021",frontMatter:{id:"project",title:"Gerenciamento do Projeto",sidebar_label:"Gerenciamento do Projeto",slug:"/project"}},c=[{value:"Classifica\xe7\xe3o de Ticket",id:"classifica\xe7\xe3o-de-ticket",children:[{value:"Epics e User Stories",id:"epics-e-user-stories",children:[]},{value:"Issues",id:"issues",children:[]}]},{value:"Mesclando um PR",id:"mesclando-um-pr",children:[]},{value:"Versionamento Sem\xe2ntico",id:"versionamento-sem\xe2ntico",children:[]}],m={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gerenciamento-do-projeto"},"Gerenciamento do Projeto"),(0,n.kt)("p",null,"Para manter tudo organizado, todos os nossos reposit\xf3rios podem ter seus problemas, mas voc\xea pode encontrar nosso quadro de projeto ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/sumelms/projects/1"},"com todos os tickets aqui"),"."),(0,n.kt)("h2",{id:"classifica\xe7\xe3o-de-ticket"},"Classifica\xe7\xe3o de Ticket"),(0,n.kt)("h3",{id:"epics-e-user-stories"},"Epics e User Stories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Epics")," s\xe3o problemas para serem resolvidos precisam ser divididos em pequenas tarefas chamadas ",(0,n.kt)("em",{parentName:"li"},"User Stories"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Stories")," s\xe3o problemas que devem ser resolvidos precisam ser divididos em pequenos e execut\xe1veis.")),(0,n.kt)("p",null,'Este tipo de issues que chamamos de "quest\xf5es de planeamento", porque s\xe3o elas que podem controlar e acompanhar a execu\xe7\xe3o das outras quest\xf5es.'),(0,n.kt)("p",null,"Estas tarefas devem ter a necess\xe1ria vis\xe3o estrat\xe9gica do seu objetivo, bem como as liga\xe7\xf5es com outros documentos e issues relacionadas - nada mais, nada menos que isso."),(0,n.kt)("p",null,"Para ajud\xe1-lo a identificar uma Epic e User Story, lembre-se:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"N\xe3o pode ser atribu\xeddo a ningu\xe9m"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Normalmente")," vive no ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sumelms/sumelms"},"reposit\xf3rio principal")),(0,n.kt)("li",{parentName:"ul"},"N\xe3o gera qualquer PR"),(0,n.kt)("li",{parentName:"ul"},"N\xe3o pode ser executada diretamente")),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"Issues s\xe3o tarefas execut\xe1veis. Se elas est\xe3o relacionados a novos recursos ou melhorias, \xe9 bem comum que fa\xe7am parte de uma User Story, mas tamb\xe9m essas pequenas e execut\xe1veis tarefas podem ser bugs, neste caso, \xe9 bem normal que eles ",(0,n.kt)("strong",{parentName:"p"},"n\xe3o estejam")," relacionados a nenhuma hist\xf3ria do usu\xe1rio."),(0,n.kt)("p",null,"Para ajud\xe1-lo a identificar uma Issue, lembre-se:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pode ser atribu\xeddo a algu\xe9m"),(0,n.kt)("li",{parentName:"ul"},"Est\xe1 ativo no reposit\xf3rio espec\xedfico para tarefas"),(0,n.kt)("li",{parentName:"ul"},"Pode ser executada"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Normalmente")," resulta em um PR")),(0,n.kt)("h2",{id:"mesclando-um-pr"},"Mesclando um PR"),(0,n.kt)("p",null," Um PR s\xf3 pode ser mesclado com o ",(0,n.kt)("strong",{parentName:"p"},"main")," por um mantenedor se:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CI est\xe1 passando."),(0,n.kt)("li",{parentName:"ul"},"Foi aprovado por pelo menos dois mantenedores. Se for um mantenedor que abriu a RP, apenas \xe9 necess\xe1ria apenas uma aprova\xe7\xe3o extra."),(0,n.kt)("li",{parentName:"ul"},"Nenhuma altera\xe7\xe3o solicitada."),(0,n.kt)("li",{parentName:"ul"},"Ele est\xe1 atualizado com o c\xf3digo principal da branch atual.")),(0,n.kt)("h2",{id:"versionamento-sem\xe2ntico"},"Versionamento Sem\xe2ntico"),(0,n.kt)("p",null,"O Sum\xe9 LMS segue ",(0,n.kt)("a",{parentName:"p",href:"http://semver.org/"},"versionamento sem\xe2ntico"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"patch - para corre\xe7\xf5es de erros cr\xedticos."),(0,n.kt)("li",{parentName:"ul"},"minor - para novos recursos e mudan\xe7as n\xe3o essenciais."),(0,n.kt)("li",{parentName:"ul"},"major - para quaisquer altera\xe7\xf5es de ruptura.")),(0,n.kt)("p",null,"Toda altera\xe7\xe3o de quebra \xe9 documentada no arquivo ",(0,n.kt)("em",{parentName:"p"},"changelog")))}p.isMDXComponent=!0}}]);