(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9J9y":function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return i})),a.d(n,"default",(function(){return c}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var t=a("SAVP"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"messages/internationalization.mdx"}});var l={_frontmatter:i},s=r.a;function c(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(t.b)(s,o({},l,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"internationalization"},"Internationalization"),Object(t.b)("p",null,"Check the section ",Object(t.b)("a",o({parentName:"p"},{href:"/fonk-doc/messages/error-message"}),"customize error message")," to learn the basics about how to customize your error messages."),Object(t.b)("p",null,"There are serveral libraries to work with i18n, we will use ",Object(t.b)("a",o({parentName:"p"},{href:"https://github.com/i18next/i18next"}),"i18next")," which we can define translations as:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// translations.js\nexport const translations = {\n  en: {\n    required: 'Required field',\n    email: 'Not valid email address',\n  },\n  es: {\n    required: 'Debe informar el campo',\n    email: 'La dirección de email no es válida',\n  },\n};\n")),Object(t.b)("p",null,"Create the ",Object(t.b)("inlineCode",{parentName:"p"},"i18n")," instance:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import i18next from 'i18next';\nimport { translations } from './translations';\n\nexport const createI18n = language => {\n  const i18n = i18next.createInstance();\n\n  i18n.init({\n    lng: language,\n    fallbackLng: language,\n    resources: {\n      en: {\n        translation: {\n          ...translations.en,\n        },\n      },\n      es: {\n        translation: {\n          ...translations.es,\n        },\n      },\n    },\n  });\n\n  return i18n;\n};\n")),Object(t.b)("p",null,"The ",Object(t.b)("inlineCode",{parentName:"p"},"i18n")," instance provides the ",Object(t.b)("inlineCode",{parentName:"p"},"t")," method for translate your app by defined ",Object(t.b)("inlineCode",{parentName:"p"},"keys")," (e.g: ",Object(t.b)("inlineCode",{parentName:"p"},"required")," and ",Object(t.b)("inlineCode",{parentName:"p"},"email")," previously defined in translations):"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const i18n = createI18n('en');\n\ni18n.t('required'); // Required field\n\ni18n.changeLanguage('es');\n\ni18n.t('required'); // Debe informar el campo\n")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"NOTE: This is pseudocode due to ",Object(t.b)("inlineCode",{parentName:"p"},"changeLanguage")," returns a Promise.")),Object(t.b)("p",null,"If we are using ",Object(t.b)("inlineCode",{parentName:"p"},"React"),", we will need to use the ",Object(t.b)("inlineCode",{parentName:"p"},"I18nextProvider")," from ",Object(t.b)("inlineCode",{parentName:"p"},"react-i18next")," and even we can create a ",Object(t.b)("inlineCode",{parentName:"p"},"LanguageContext")," where we will provide the ",Object(t.b)("inlineCode",{parentName:"p"},"current language")," and a method to change the language. That is, something like:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nexport const LanguageContext = React.createContext(null);\n")),Object(t.b)("p",null,"Create ",Object(t.b)("inlineCode",{parentName:"p"},"LanguageProvider")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\n+ import { I18nextProvider } from 'react-i18next';\n\nexport const LanguageContext = React.createContext(null);\n\n+ export const LanguageProvider = props => {\n+   const { children } = props;\n\n+   return (\n+     <I18nextProvider i18n={}>\n+       <LanguageContext.Provider value={}>\n+         {children}\n+       </LanguageContext.Provider>\n+     </I18nextProvider>\n+   );\n+ };\n")),Object(t.b)("p",null,"Create language state and i18n instance:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\nimport { I18nextProvider } from 'react-i18next';\n+ import { createI18n } from './i18n';\n\nexport const LanguageContext = React.createContext(null);\n\nexport const LanguageProvider = props => {\n  const { children } = props;\n+ const [language, setLanguage] = React.useState('en');\n+ const i18n = React.useMemo(() => createI18n(language), []);\n\n  return (\n-   <I18nextProvider i18n={}>\n+   <I18nextProvider i18n={i18n}>\n-     <LanguageContext.Provider value={}>\n+     <LanguageContext.Provider value={{ language }}>\n        {children}\n      </LanguageContext.Provider>\n    </I18nextProvider>\n  );\n};\n")),Object(t.b)("p",null,"Use ",Object(t.b)("inlineCode",{parentName:"p"},"i18n.changeLanguage")," when language changes:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\nimport { I18nextProvider } from 'react-i18next';\n  import { createI18n } from './i18n';\n\nexport const LanguageContext = React.createContext(null);\n\nexport const LanguageProvider = props => {\n  const { children } = props;\n  const [language, setLanguage] = React.useState('en');\n  const i18n = React.useMemo(() => createI18n(language), []);\n\n+ const handleSetLanguage = newLanguage => {\n+   i18n.changeLanguage(newLanguage);\n+   setLanguage(newLanguage);\n+ };\n\n  return (\n    <I18nextProvider i18n={i18n}>\n      <LanguageContext.Provider\n        value={{\n          language,\n+         setLanguage: handleSetLanguage,\n        }}\n      >\n        {children}\n      </LanguageContext.Provider>\n    </I18nextProvider>\n  );\n};\n")),Object(t.b)("h2",{id:"global-error-message-translation"},"Global error message translation"),Object(t.b)("p",null,"As we learned in previous section, we can customize error message globally using the ",Object(t.b)("inlineCode",{parentName:"p"},"setErrorMessage")," method provided by validators. We only need to provide the translated message when language changes:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { Validators } from '@lemoncode/fonk';\nimport { createI18n } from './i18n';\n\nconst i18n = createI18n('en');\n\nValidators.required.setErrorMessage(i18n.t('required'));\nValidators.email.setErrorMessage(i18n.t('email'));\n")),Object(t.b)("p",null,"If we are using ",Object(t.b)("inlineCode",{parentName:"p"},"React"),", we can use ",Object(t.b)("inlineCode",{parentName:"p"},"useTranslation")," hook and acces to the ",Object(t.b)("inlineCode",{parentName:"p"},"t")," method:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { Validators } from '@lemoncode/fonk';\nimport { useTranslation } from 'react-i18next';\n\n\nconst App = () => {\n  const { t } = useTranslation();\n  Validators.required.setErrorMessage(t('required'));\n  Validators.email.setErrorMessage(t('email'));\n  ...\n}\n")),Object(t.b)("p",null,"Check these ",Object(t.b)("inlineCode",{parentName:"p"},"i18next React Final Form")," examples:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/react-final-form/i18n-global-message"}),"React React Final Form JS"),"."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/react-final-form/i18n-global-message"}),"React React Final Form TS"),".")),Object(t.b)("h2",{id:"custom-validation-schema-error-messages-translation"},"Custom Validation Schema error messages translation"),Object(t.b)("p",null,"This time, we will use ",Object(t.b)("inlineCode",{parentName:"p"},"message")," property available in ",Object(t.b)("inlineCode",{parentName:"p"},"validationSchema"),". Each time language selection is changed, we need to update value assigned to the message property in order to assign the new literal, we need to refresh the Form Validation instance:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// form-validation.js\n\nimport { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    user: [\n      {\n        validator: Validators.required.validator,\n      },\n    ],\n  },\n};\n\nexport const formValidation = createFormValidation(validationSchema);\n")),Object(t.b)("p",null,"Provide the ",Object(t.b)("inlineCode",{parentName:"p"},"t")," method:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\n+ export const createValidation = t => {\n    const validationSchema = {\n      field: {\n        user: [\n          {\n            validator: Validators.required.validator,\n+           message: t('required'),\n          },\n        ],\n      },\n    };\n\n-   export const formValidation = createFormValidation(validationSchema);\n+   return createFormValidation(validationSchema);\n+ }\n\n")),Object(t.b)("p",null,"If we are using ",Object(t.b)("inlineCode",{parentName:"p"},"React"),", we can create a custom hook to create a new form validation instance when language changes:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// use-validation.js\nimport React from 'react';\nimport { useTranslation } from 'react-i18next';\nimport { LanguageContext } from './i18n';\nimport { createValidation } from './form-validation';\n\nexport const useValidation = () => {\n  const { language } = React.useContext(LanguageContext);\n  const { t } = useTranslation();\n\n  const formValidation = React.useMemo(() => {\n    return createValidation(t);\n  }, [language]);\n\n  return { formValidation };\n};\n")),Object(t.b)("p",null,"Check these ",Object(t.b)("inlineCode",{parentName:"p"},"i18next React Final Form")," examples:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/react-final-form/i18n-local-message"}),"React React Final Form JS"),"."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/react-final-form/i18n-local-message"}),"React React Final Form TS"),".")),Object(t.b)("h2",{id:"full-implementation-global--local-validation-schema-messages"},"Full implementation (global + local validation schema messages)"),Object(t.b)("p",null,"We can mix both approaches:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// form-validation.js\n\nimport { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    name: [Validators.required.validator],\n    email: [Validators.required.validator, Validators.email.validator],\n  },\n};\n\nexport const formValidation = createFormValidation(validationSchema);\n")),Object(t.b)("p",null,"Add local translations:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\n+ export const createValidation = t => {\n    const validationSchema = {\n      field: {\n        name: [Validators.required.validator],\n        email: [\n          Validators.required.validator,\n-         Validators.email.validator\n+         {\n+           validator: Validators.email.validator,\n+           message: t('email'),\n+         },\n        ],\n      },\n    };\n\n-   export const formValidation = createFormValidation(validationSchema);\n+   return createFormValidation(validationSchema);\n+ }\n")),Object(t.b)("p",null,"Add global translations:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\nexport const createValidation = t => {\n+ Validators.required.setErrorMessage(t('required'));\n\n  const validationSchema = {\n    field: {\n      name: [Validators.required.validator],\n      email: [\n        Validators.required.validator,\n        {\n          validator: Validators.email.validator,\n          message: t('email'),\n        },\n      ],\n    },\n  };\n\n  return createFormValidation(validationSchema);\n};\n\n")),Object(t.b)("p",null,"Check these ",Object(t.b)("inlineCode",{parentName:"p"},"i18next React Final Form")," examples:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/react-final-form/i18n-full-example"}),"React React Final Form JS"),"."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/react-final-form/i18n-full-example"}),"React React Final Form TS"),".")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"messages/internationalization.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---messages-internationalization-mdx-7f01992415715a5eab73.js.map