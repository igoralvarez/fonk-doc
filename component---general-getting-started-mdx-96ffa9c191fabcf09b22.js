(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5N2S":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return c}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var n=t("SAVP"),l=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"general/getting-started.mdx"}});var r={_frontmatter:o},s=l.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(n.b)(s,i({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"getting-started"},"Getting Started"),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("p",null,"Getting started with ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/Lemoncode/fonk"}),Object(n.b)("strong",{parentName:"a"},"Fonk"))," is something really easy and quick. First of all you will need to install ",Object(n.b)("strong",{parentName:"p"},"Fonk")," in your existing project using your favorite package manager (we'll assume npm for this example)."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"npm install @lemoncode/fonk --save\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Fonk")," is Typescript friendly, typing definitions are already included in the main package.")),Object(n.b)("h2",{id:"using"},"Using"),Object(n.b)("p",null,"Fonk is framework agnostic, it just works out of the box (no dependencies)."),Object(n.b)("p",null,"We are going to start by adding some lines of code to define a login validation record:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const loginRecord = {\n  user: '',\n  password: '',\n};\n")),Object(n.b)("p",null,"Now we are going to define the following validation schema for this form:"),Object(n.b)("p",null,"- ",Object(n.b)("strong",{parentName:"p"},"User field")," is a required field."),Object(n.b)("p",null,"- ",Object(n.b)("strong",{parentName:"p"},"Password")," field is a required field."),Object(n.b)("p",null,"Let's get started with Fonk: is time to create the validation schema:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    user: [Validators.required.validator],\n    password: [Validators.required.validator],\n  },\n};\n\nconst formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("p",null,"And let's fire a field validation (usually we will fire this in the ",Object(n.b)("em",{parentName:"p"},"onChange")," or ",Object(n.b)("em",{parentName:"p"},"onBlur")," event of every HTML field):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"formValidation\n  .validateField('user', loginRecord.user)\n  .then(validationResult => {\n    console.log(validationResult);\n  });\n")),Object(n.b)("p",null,"Since the record fields user is empty, we will get the following output from the ",Object(n.b)("em",{parentName:"p"},"console.log(validationResult)"),":"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'{\n  succeeded: false,\n  message: "Please fill in this mandatory field.",\n  type: "REQUIRED"\n}\n')),Object(n.b)("p",null,"What happens if we feed the login.user field with data?"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"loginRecord.user = 'John';\n")),Object(n.b)("p",null,"And we fire again the field valdation"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"formValidation\n  .validateField('user', loginRecord.user)\n  .then(validationResult => {\n    console.log(validationResult);\n  });\n")),Object(n.b)("p",null,"We get the following result (validation succeeded):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'{\n  succeeded: true,\n  message: "",\n  type: "REQUIRED"\n}\n')),Object(n.b)("p",null,"If you want to fire all the form validations in one go, you can execute ",Object(n.b)("em",{parentName:"p"},"validateForm")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"formValidation.validateForm(loginRecord).then(validationResult => {\n  console.log(validationResult);\n});\n")),Object(n.b)("p",null,"And you will get the result of firing all defined validations in the schema (in this case ",Object(n.b)("em",{parentName:"p"},"user")," has been\nalready informaed and ",Object(n.b)("em",{parentName:"p"},"passowrd")," field is empty):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'{\n  succeeded: false,\n  fieldErrors: {\n    user: {\n      succeeded: true,\n      message: "",\n      type: "REQUIRED"\n    },\n    password: {\n      succeeded: false,\n      message: "Please fill in this mandatory field.",\n      type: "REQUIRED"\n    },\n  },\n  recordErrors: {}\n}\n')),Object(n.b)("h2",{id:"ui-examples"},"UI Examples"),Object(n.b)("p",null,"You can play with this example in the following sandbox ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-field"}),"validate-field js")," and ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-form"}),"validate-form js"),"."),Object(n.b)("p",null,"Typescript version: ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/validate-field"}),"validate-field ts")," and ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/validate-form"}),"validate-form ts")),Object(n.b)("p",null,"If you want to check a full example including user interface interaction, check the following sandboxes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Plain vanilla js example: ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-field"}),"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-field"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"React + React Final Form: ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field"}),"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"React + Formik: ",Object(n.b)("a",i({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/basic"}),"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/basic")))),Object(n.b)("h2",{id:"next-steps"},"Next steps"),Object(n.b)("p",null,"Now you many questions will be arising in your head:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Can I define more than one field validation per field?"),Object(n.b)("li",{parentName:"ul"},"Where can I find more validations already implemented? (we call this ",Object(n.b)("em",{parentName:"li"},"validators"),")."),Object(n.b)("li",{parentName:"ul"},"How can I create my custom ",Object(n.b)("em",{parentName:"li"},"validator"),"?"),Object(n.b)("li",{parentName:"ul"},"What about asynchronous validations?"),Object(n.b)("li",{parentName:"ul"},"And global form validations?(we call them record level validations)."),Object(n.b)("li",{parentName:"ul"},"Does it integrate well with libraries like React Final Form?"),Object(n.b)("li",{parentName:"ul"},"What about multilanguage support?")),Object(n.b)("p",null,"All this cases are covered by the library, let's jump into the next topic\n",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/validation-schema"}),"Validation Schema")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"general/getting-started.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---general-getting-started-mdx-96ffa9c191fabcf09b22.js.map