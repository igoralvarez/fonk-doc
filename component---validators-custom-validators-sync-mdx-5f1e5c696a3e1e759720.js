(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{971:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return c}));t(12),t(6),t(4),t(3),t(7),t(5),t(9);var n=t(77),s=t(958);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"validators/custom-validators-sync.mdx"}});var r={_frontmatter:l},i=s.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(i,o({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"custom-validators-synchronous"},"Custom validators synchronous"),Object(n.b)("p",null,"Once you have checked that a given field or record validation is not available in the base or\nthird parties list of validators, it's time to create your own validator."),Object(n.b)("h2",{id:"field-validator"},"Field Validator"),Object(n.b)("p",null,"A field synchronous validator is just a function that expected one argument (this arugment is an object that contains\nseveral fields), and return a validation result."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"What do we mean by synchronous? That is any validation that executes some code and returns a straightforward result,\nif your validation needs to make a request to a server, it cannot provide a straightdforward result and probably\nyou will have to manage it using promises, that is an asynchronous validation and it's covered in the following\n",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validators/custom-validators-async"}),"link"),".")),Object(n.b)("p",null,"Usually a Field Validator can be a perfect piece of code to be reused across the application and even as a library."),Object(n.b)("h3",{id:"disecting-a-validator"},"Disecting a validator"),Object(n.b)("p",null,"The definition of a synchronous field validator:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"FielValidationArgs"),": This is passed as a single argument in th validator",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"value"),": current field value."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"values"),": form / record values (all fields)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"customArgs"),": we can pass custom arguments to our validator, this allow us to create flexible and configurable\nvalidators (e.g. in a min-lenght validator we can pass as customArgument a number indicating the minlenght allowed,\nor if we have a password / repeat password validator we can pass the id of the password field to the repeat password\nfield)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"message"),": you can override here the error message that the validator returns in case of failure. You can inject\nin a message ",Object(n.b)("em",{parentName:"li"},"parameters")," to be interpolated by the validator (e.g. 'string must be at least {{minlength}}'),\nin some validators there may be more than one error message defined, in that case we can pass an array of strings."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"ValidationResult"),": once the validator has been executed it returns a ",Object(n.b)("em",{parentName:"li"},"ValidationResult"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If the validation succeeds, you get as return value a ",Object(n.b)("em",{parentName:"li"},"ValidationResult")," where it's field ",Object(n.b)("em",{parentName:"li"},"succeeded")," is true."),Object(n.b)("li",{parentName:"ul"},"If the validation fails, you get as return value a ",Object(n.b)("em",{parentName:"li"},"ValidationResult","_","_"," where it's field ","_","succeeded")," is false,\na ",Object(n.b)("em",{parentName:"li"},"message")," where you get the error message (user friendly) and a ",Object(n.b)("em",{parentName:"li"},"type")," field that indicates the validator that\nfailed.")))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface FieldValidatorArgs {\n  value: any;\n  values?: any;\n  customArgs?: any;\n  message?: string | string[];\n}\n\nexport interface ValidationResult {\n  type: string;\n  succeeded: boolean;\n  message: string;\n}\n\nexport type FieldValidationFunctionSync = (\n  fieldValidatorArgs: FieldValidatorArgs\n) => ValidationResult;\n")),Object(n.b)("h3",{id:"learning-by-example"},"Learning by example"),Object(n.b)("p",null,"The best way to learn how to implementing a validator is just by doing it so."),Object(n.b)("p",null,"Let's get started, we want to validate that an ",Object(n.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/International_Bank_Account_Number"}),"IBAN"),"\n(International Bank Account) field belongs to Spain (that is first two characters are equal to ",Object(n.b)("em",{parentName:"p"},"ES"),")."),Object(n.b)("p",null,"We will start simple, in order to check we only need use the ",Object(n.b)("em",{parentName:"p"},"value")," we\ndon't need the rest of optional params: ",Object(n.b)("em",{parentName:"p"},"values"),", ",Object(n.b)("em",{parentName:"p"},"customArgs"),", ",Object(n.b)("em",{parentName:"p"},"message"),", we will follow a TDD like approach\nwe will create the validator always faling (returning a failed validation result)."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nexport const myValidator = fieldValidatorArgs => {\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message: 'IBAN does not belong to Spain',\n  };\n\n  return validationResult;\n};\n")),Object(n.b)("p",null,"Cool, we got a validator that always fails, now is time to inject our logic; we just want to validate\nthat the IBAN belongs to spain (first two characters must be ",Object(n.b)("em",{parentName:"p"},"ES"),")."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nexport const myValidator = fieldValidatorArgs => {\n+ const { value } = fieldValidatorArgs;\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message: 'IBAN does not belong to Spain',\n  };\n\n+ if (value && value[0] === 'E' && value[1] === 'S') {\n+   validationResult.succeeded = true;\n+   validationResult.message = '';\n+ }\n\n  return validationResult;\n}\n")),Object(n.b)("p",null,"No we got our simple validator working, if you enter an IBAN that belongs to spain it will pass\nthe validation if not if will fail."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Watch out... what if we pass a null/undefined/empty string?")," Validation will succeed in this case, ",Object(n.b)("em",{parentName:"p"},"but is\nnot a valid IBAN isn't it?")," Usually is a good practice to delegate this validation to a prior validator like\nthe built-in ",Object(n.b)("strong",{parentName:"p"},"required")," validator, why: maybe the field you want to validate is optional hence the\nIBAN validator should not fail, by doing that we are following the single responsibility principle."),Object(n.b)("p",null,"The validator was fine but what happens if we need to override the validation message? For instance you\nneed give support to multiple languages (english, spanish, french...), you can override the\nmessage(s) validators in two ways:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can setup the validator message(s) globally for any ValidationSchema instance (for instance you\njust change from english to french language and you want that ",Object(n.b)("em",{parentName:"p"},"MyValidator")," shows the error message\nin french in all the application forms where it's being used).")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can override the validation message just for a given ValidationSchema (for instance if you use\nthe ",Object(n.b)("em",{parentName:"p"},"pattern")," (regex) validator you may want for an specific field in a validation schema to return\n",Object(n.b)("em",{parentName:"p"},"invalid credit card")," and for other cases ",Object(n.b)("em",{parentName:"p"},"invalid shield number"),")."))),Object(n.b)("p",null,"Let's start by preparing our validator to change the message for all the instances:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\n+ let defaultMessage = 'IBAN does not belong to Spain';\n+ export const setErrorMessage = message => (defaultMessage = message);\n\nexport const myValidator = fieldValidatorArgs => {\n  const { value } = fieldValidatorArgs;\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n-   message: 'IBAN does not belong to Spain',\n+   message: defaultMessage,\n  };\n\n  if (value && value[0] === 'E' && value[1] === 'S') {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n};\n")),Object(n.b)("p",null,"Now let's go for the specific override:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nlet defaultMessage = 'IBAN does not belong to Spain';\nexport const setErrorMessage = message => (defaultMessage = message);\n\nexport const myValidator = fieldValidatorArgs => {\n- const { value } = fieldValidatorArgs;\n+ const { value, message = defaultMessage } = fieldValidatorArgs;\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n-   message: defaultMessage,\n+   message,\n  };\n\n  if (value && value[0] === 'E' && value[1] === 'S') {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n};\n\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"If you want to learn more about how to customize error message + internazionalization you can jump\nto the following ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/messages/error-message"}),"section"),".")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"That was awesome, but I need to implement this same validator for countries like france, germany, and others, is there a way to make this validator more generic?"),"\nYes, we can make use of ",Object(n.b)("em",{parentName:"p"},"customArgs")," and pass the ",Object(n.b)("em",{parentName:"p"},"country")," prefix to validate (in a real case you could opt in to implement this inside the validator using a switch\nstatement but the goal of this example is to show you how to deal with ",Object(n.b)("em",{parentName:"p"},"customArgs"),")."),Object(n.b)("p",null,"We can assume the consumer of this validator will pass the country code in the ",Object(n.b)("em",{parentName:"p"},"customArgs")," something like:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"{\n  countryCode: 'ES',\n}\n")),Object(n.b)("p",null,"Let's further enhance the validator:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nlet defaultMessage = 'IBAN does not belong to Spain';\nexport const setErrorMessage = message => (defaultMessage = message);\n\n+ const hasValidCountryCode = (value, customArgs) =>\n+   value &&\n+   value[0] === customArgs.countryCode[0] &&\n+   value[1] === customArgs.countryCode[1];\n\nexport const myValidator = fieldValidatorArgs => {\n- const { value, message = defaultMessage } = fieldValidatorArgs;\n+ const { value, customArgs, message = defaultMessage } = fieldValidatorArgs;\n\n+ // Depending in your case you may feed default values to customArgs or throw\n+ // an exception or a console.log error\n+ if (!customArgs.countryCode || customArgs.countryCode.length !== 2) {\n+   throw `${validatorType}: error you should inform customArgs countryCode prefix (2 characters length)`;\n+ }\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message,\n  };\n\n- if (value && value[0] === 'E' && value[1] === 'S') {\n+ if (hasValidCountryCode(value, customArgs)) {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n};\n\n")),Object(n.b)("p",null,"That was great, but there's something going wrong, the validation error message still says:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"'IBAN does not belong to Spain'")),Object(n.b)("p",null,"We could just go the easy way and change the validation message to:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"'IBAN country code not valid'")),Object(n.b)("p",null,"But we want to use a more elegant solution, why not building a message like:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"IBAN country code prefix must be {{countryCode}}")),Object(n.b)("p",null,"Let's implement this:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"+ import { parseMessageWithCustomArgs } from '@lemoncode/fonk';\nconst validatorType = 'MY_IBAN_VALIDATOR';\n\n- let defaultMessage = 'IBAN does not belong to Spain';\n+ let defaultMessage = 'IBAN does not belong to {{countryCode}}';\nexport const setErrorMessage = message => (defaultMessage = message);\n...\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n-   message,\n+   message: parseMessageWithCustomArgs(message, customArgs),\n  };\n\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Wow ! That was awesome ! but how can I customize this message if I need internazionalization?")," You can\noverride the message and just use the same interpolation sequence ",Object(n.b)("em",{parentName:"p"},"{{countryCode}}")," where applies."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note down: you have to document this in your validator so consumers of your validator are aware of this params.")),Object(n.b)("p",null,"Check here:\nFull example vanilla js\nFull eample vanilla ts\nFull example react final form js\nFull example react final form ts"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"So far so good, but what happens if I need another form field value to execute my field validator?")," Let's say for\ninstance I got a signUp form where the user has to enter his password, then reenter it in a different field\nto avoid him introducing any typo by mistake. That's a great use case, let's dig into that:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"This validator is already available as a third party plugin, you can find it in the following ",Object(n.b)("a",o({parentName:"p"},{href:"TODO"}),"link"),".")),Object(n.b)("p",null,"We've got the following form:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const mySignupFormData = {\n  email: 'john.doe@mydomain.com'\n  password : '123',\n  repeatPassword: '124',\n}\n")),Object(n.b)("p",null,"First we will implement a validator specific for that form, we will access ",Object(n.b)("em",{parentName:"p"},"customArgs.values")," field to get other form field value:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const validatorType = 'FIELDS_MATCH_VALIDATOR';\n\n let defaultMessage = 'Fields does not match';\n export const setErrorMessage = message => (defaultMessage = message);\n\nexport const fieldMatchValidator = (fieldValidatorArgs) {\n  // All form/record data is passed in the fielValidatorArgs.values field\n  const {value, values, message = defaultMessage} = fieldValidatorArgs\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message,\n  };\n\n  // Now we can acces the 'password' field from the values field\n  if (value === values.password) {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n}\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Fine, we managed to build to the validator, but is too tied up to the form, couldn't it be possible to create a reusable validator?"),"\nthe answer is yes if we combine togheter ",Object(n.b)("em",{parentName:"p"},"fieldValidationArgs.values")," and ",Object(n.b)("em",{parentName:"p"},"fieldValidationArgs.customArgs")," (in customArgs we will\npass the name of the field to compare with)."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"customArgs"),": here we will pass the id of the field to check (in this case the ",Object(n.b)("em",{parentName:"p"},"password")," field).")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"values"),": here we get all the form/record values, we can use the following approach to access\nthe ",Object(n.b)("em",{parentName:"p"},"password")," field: ","_","_"))),Object(n.b)("p",null,"Let's see how to combine this both together:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'FIELDS_MATCH_VALIDATOR';\n\n let defaultMessage = 'Fields does not match';\n export const setErrorMessage = message => (defaultMessage = message);\n\nexport const fieldMatchValidator = (fieldValidatorArgs) {\n  // All form/record data is passed in the fielValidatorArgs.values field\n+ // We will make use of customArgs\n-  const {value, values, message = defaultMessage} = fieldValidatorArgs\n+   const {value, values, customArgs, message = defaultMessage} = fieldValidatorArgs\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message,\n  };\n\n+  // Depending in your case you may feed default values to customArgs or throw\n+  // an exception or a console.log error\n+  if(!customArgs.fieldToCompareName) {\n+    throw(`${validatorType}: you need to inform the fieldToCompareName`)\n+  }\n\n-  // Now we can acces the 'password' field from the values field\n+  We just grab the value of the field using the bracke accesor\n+  more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors\n-  if (value === values.password) {\n+  if(value === value[customArgs.fieldToCompareName])\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n}\n")),Object(n.b)("p",null,"Check here:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/js/vanilla/iban-custom-sync-validator"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/ts/vanilla/iban-custom-sync-validator"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/js/react-final-form/iban-custom-sync-validator"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/ts/react-final-form/iban-custom-sync-validator"}),"React + React Final Form TS"),".")),Object(n.b)("h2",{id:"record-validator"},"Record Validator"),Object(n.b)("p",null,"A record validator is a validation that is not tied up to an specific field, is usually something that we trigger\nwhen the user hits submit, and previous to send the information to the server."),Object(n.b)("p",null,"Record validations usually are not highly reusable functions, they are tied up to the domain of the form to be evaluated."),Object(n.b)("h3",{id:"disecting-a-record-validator"},"Disecting a record validator"),Object(n.b)("p",null,"The definition of a synchronous field validator:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"RecordValidationArgs"),": This is passed as a single argument in the validator",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"values"),": form / record values (all fields)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"message"),": you can override here the error message that the validator returns in case of failure. You can inject\nin a message ",Object(n.b)("em",{parentName:"li"},"parameters")," to be interpolated by the validator (e.g. 'string must be at least {{minlength}}'),\nin some validators there may be more than one error message defined, in that case we can pass an array of strings."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"ValidationResult"),": once the validator has been executed it returns a ",Object(n.b)("em",{parentName:"li"},"ValidationResult"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If the validation succeeds, you get as return value a ",Object(n.b)("em",{parentName:"li"},"ValidationResult")," where it's field ",Object(n.b)("em",{parentName:"li"},"succeeded")," is true."),Object(n.b)("li",{parentName:"ul"},"If the validation fails, you get as return value a ",Object(n.b)("em",{parentName:"li"},"ValidationResult","_","_"," where it's field ","_","succeeded")," is false,\na ",Object(n.b)("em",{parentName:"li"},"message")," where you get the error message (user friendly) and a ",Object(n.b)("em",{parentName:"li"},"type")," field that indicates the validator that\nfailed.")))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface RecordValidatorArgs {\n  values: any;\n  message?: string | string[];\n}\n\nexport interface ValidationResult {\n  type: string;\n  succeeded: boolean;\n  message: string;\n}\n\nexport type RecordValidationFunctionSync = (\n  recordValidatorArgs: RecordValidatorArgs\n) => ValidationResult;\n")),Object(n.b)("h3",{id:"learning-by-example-1"},"Learning by example"),Object(n.b)("p",null,"We got a form that displays the total of a given shopping order:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const myFormValues = {\n  product: 'shoes',\n  discount: 5,\n  price: 20,\n  isPrime: false,\n};\n")),Object(n.b)("p",null,"Once the user hits on submit order and before sending the request to the server we want to check the following rule:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"FreeShipping can be true if the total amount (price - discount) is greater than 20 USD, or if the fied ",Object(n.b)("em",{parentName:"li"},"isPrime")," is true. We want to trigger\nthis validation when the user hits on submit.")),Object(n.b)("p",null,"We only want to trigger this once the user has finished picking up the product he wants to buy (we don't want to annoy him meanwhile he is in the\nshopping cart process)."),Object(n.b)("p",null,"A validator to implement this:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// A record validator receives in the args an object with\n// all the record values and optionally the custom message\nconst freeShippingRecordValidator = ({ values }) => {\n  const succeeded = values.isPrime || values.price - values.discount > 20;\n\n  return {\n    succeeded,\n    message: succeeded\n      ? ''\n      : 'Subscribe to prime service or total must be greater than 20USD',\n    type: 'RECORD_FREE_SHIPPING',\n  };\n};\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"If you need to implement internazionalization or customize messages you can follow the same approach\nas the described for the field record validations.")),Object(n.b)("p",null,"Check here:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-record"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/validate-record"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-record"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-record"}),"React + React Final Form TS"),".")),Object(n.b)("h1",{id:"next-section"},"Next section"),Object(n.b)("p",null,"Now that you have learn how to build synchronous custom validators is time to learn how to implement ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validators/custom-validators-async"}),"asynchronous custom validators"),"."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"validators/custom-validators-sync.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---validators-custom-validators-sync-mdx-5f1e5c696a3e1e759720.js.map