(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(20),o=n.n(i),r=n(8),l=(n(31),n(25)),u=n(3),d=n(2),p=c.a.createContext(),j=n(21),b=n(22),_=new(function(){function e(t){Object(j.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(b.a)(e,[{key:"_checkAnswer",value:function(e){return e.ok?e.json():Promise.reject(new Error(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkAnswer)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkAnswer)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkAnswer)}},{key:"setNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkAnswer)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then(this._checkAnswer)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkAnswer)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"41df799d-3987-4f60-8d34-e2c5aaa920c0","Content-Type":"application/json"}}),m=n.p+"static/media/header__logo.c2821b38.svg",h=n.p+"static/media/button__menu.57f7784f.svg",f=n.p+"static/media/button__close.b9c42c3d.svg";var O=function(e){var t=e.userEmail,n=e.handleLogout,s=e.handleMenuClick,c=e.isMenuOpened;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:m,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"}),Object(a.jsxs)("div",{className:"header__user-info",children:[Object(a.jsx)(d.b,{exact:!0,path:"/sign-in",children:Object(a.jsx)(r.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(d.b,{exact:!0,path:"/sign-up",children:Object(a.jsx)(r.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsxs)(d.b,{exact:!0,path:"/",children:[Object(a.jsx)("p",{className:"header__email",children:t}),Object(a.jsx)("button",{onClick:n,className:"header__logout",type:"button",children:"\u0412\u044b\u0439\u0442\u0438"}),Object(a.jsx)("button",{onClick:s,className:"header__menu",type:"button",children:Object(a.jsx)("img",{className:"header__image",src:c?f:h,alt:"Menu"})})]})]})]})};var g=function(){return Object(a.jsx)("div",{className:"preloader"})};var x=function(e){var t=e.data,n=e.onCardClick,s=e.onCardLike,i=e.onCardDelete,o=c.a.useContext(p),r=t.owner._id===o._id,l="element__button-delete ".concat(r&&"element__button-delete_active"),u=t.likes.some((function(e){return e._id===o._id}));return Object(a.jsxs)("li",{className:"element",id:t._id,children:[Object(a.jsxs)("button",{className:l,type:"button",onClick:function(){i(t)},children:[Object(a.jsx)("div",{className:"element__button-delete_top"}),Object(a.jsx)("div",{className:"element__button-delete_bottom"})]}),Object(a.jsx)("img",{className:"element__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"element__description",children:[Object(a.jsx)("h2",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:"element__button-like ".concat(u&&"element__button-like_active"),type:"button",onClick:function(){s(t)}}),Object(a.jsx)("div",{className:"element__like-count",children:t.likes.length})]})]})]})};var v=function(e){var t=e.cards,n=e.onCardLike,s=e.onCardDelete,i=e.onCardClick,o=e.onEditAvatar,r=e.onEditProfile,l=e.onAddPlace,u=e.isLoading,d=c.a.useContext(p);return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("button",{className:"profile__button-avatar",id:"avatar__button-edit",type:"button",onClick:o}),Object(a.jsx)("img",{className:"profile__avatar",id:"avatar",src:d.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__info_name",children:d.name}),Object(a.jsx)("button",{className:"profile__info_button-edit",id:"button-edit",name:"button-edit",type:"button",onClick:r}),Object(a.jsx)("h2",{className:"profile__info_about",children:d.about})]}),Object(a.jsx)("button",{className:"profile__button-add",id:"button-add",name:"button-add",type:"button",onClick:l})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"element__table",children:u?Object(a.jsx)(g,{}):Array.from(t).map((function(e){return Object(a.jsx)(x,{data:e,onCardClick:i,onCardLike:n,onCardDelete:s},e._id)}))})})]})};var N=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var C=function(e){var t=e.name,n=e.data,s=e.onClose,c=e.isOpen,i=e.isolatePopup;return Object(a.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(c&&"popup_opened"),id:"popup__image",onClick:s,children:Object(a.jsxs)("div",{className:"popup__container_image",onClick:i,children:[Object(a.jsx)("img",{className:"popup__image",src:n.link,alt:n.name}),Object(a.jsx)("h2",{className:"popup__title_image",children:n.name}),Object(a.jsx)("button",{className:"popup__button-close",id:"image__button-close",type:"button",onClick:s})]})})};var k=function(e){var t=e.name,n=e.title,s=e.isOpen,c=e.onClose,i=e.onSubmit,o=e.children,r=e.isolatePopup;return Object(a.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(s&&"popup_opened"),id:"popup__".concat(t),onClick:c,children:Object(a.jsxs)("div",{className:"popup__container",onClick:r,children:[Object(a.jsx)("button",{className:"popup__button-close",id:"profile__button-close",type:"button",onClick:c}),Object(a.jsx)("h2",{className:"popup__title",children:n}),Object(a.jsx)("form",{className:"popup__form",name:t,onSubmit:i,noValidate:!0,children:o})]})})},y=n(13),S=n(10);var w=function(){var e=c.a.useState({}),t=Object(u.a)(e,2),n=t[0],a=t[1],s=c.a.useState({}),i=Object(u.a)(s,2),o=i[0],r=i[1],l=c.a.useState(!1),d=Object(u.a)(l,2),p=d[0],j=d[1];return{values:n,errors:o,isValid:p,handleChange:function(e){a(Object(S.a)(Object(S.a)({},n),{},Object(y.a)({},e.target.name,e.target.value))),r(Object(S.a)(Object(S.a)({},o),{},Object(y.a)({},e.target.name,e.target.validationMessage))),j(e.target.closest("form").checkValidity())},resetForm:function(){a({}),r({}),j(!1)}}};var L=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=e.isLoading,o=e.isolatePopup,r=w(),l=r.values,u=r.errors,d=r.isValid,j=r.handleChange,b=r.resetForm,_=c.a.useContext(p),m=c.a.useRef(),h=c.a.useRef();return c.a.useEffect((function(){b(),setTimeout((function(){m.current.focus()}),0)}),[t]),Object(a.jsxs)(k,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:m.current.value,about:h.current.value})},isolatePopup:o,children:[Object(a.jsx)("input",{ref:m,placeholder:_.name,className:"popup__field",id:"profile__name",name:"name",type:"text",value:l.name||"",minLength:"2",maxLength:"40",onChange:j,required:!0}),Object(a.jsx)("span",{className:"popup__field-error",id:"profile__name-error",children:u.name||""}),Object(a.jsx)("input",{ref:h,placeholder:_.about,className:"popup__field",id:"profile__description",name:"about",type:"text",value:l.about||"",minLength:"2",maxLength:"200",onChange:j,required:!0}),Object(a.jsx)("span",{className:"popup__field-error",id:"profile__description-error",children:u.about||""}),Object(a.jsx)("button",{className:"popup__button-save ".concat(!d&&"popup__button-save_disabled"),id:"profile__button-save",type:"submit",children:"".concat(i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})]})};var P=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,i=e.isLoading,o=e.isolatePopup,r=w(),l=r.values,u=r.errors,d=r.isValid,p=r.handleChange,j=r.resetForm,b=c.a.useRef();return c.a.useEffect((function(){b.current.value="",j(),setTimeout((function(){b.current.focus()}),0)}),[t]),Object(a.jsxs)(k,{name:"avatar",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({avatar:b.current.value})},isolatePopup:o,children:[Object(a.jsx)("input",{ref:b,className:"popup__field",id:"avatar__link",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:l.link||"",onChange:p,required:!0}),Object(a.jsx)("span",{className:"popup__field-error",id:"avatar__link-error",children:u.link||""}),Object(a.jsx)("button",{className:"popup__button-save ".concat(!d&&"popup__button-save_disabled"),id:"avatar__button-save",type:"submit",disabled:!d,children:"".concat(i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})]})};var E=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,i=e.isLoading,o=e.isolatePopup,r=w(),l=r.values,u=r.errors,d=r.isValid,p=r.handleChange,j=r.resetForm,b=c.a.useRef(),_=c.a.useRef();return c.a.useEffect((function(){b.current.value="",_.current.value="",j(),setTimeout((function(){b.current.focus()}),0)}),[t]),Object(a.jsxs)(k,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:b.current.value,link:_.current.value})},isolatePopup:o,children:[Object(a.jsx)("input",{ref:b,className:"popup__field",id:"place__name",name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:l.title,onChange:p,required:!0}),Object(a.jsx)("span",{className:"popup__field-error",id:"place__name-error",children:u.name||""}),Object(a.jsx)("input",{ref:_,className:"popup__field",id:"place__link",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:l.link||"",onChange:p,required:!0}),Object(a.jsx)("span",{className:"popup__field-error",id:"place__link-error",children:u.link||""}),Object(a.jsx)("button",{className:"popup__button-save ".concat(!d&&"popup__button-save_disabled"),id:"place__button-save",type:"submit",disabled:!d,children:"".concat(i?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")})]})};var A=function(e){var t=e.isOpen,n=e.onClose,s=e.handleSubmit,c=e.card,i=e.isLoading,o=e.isolatePopup;return Object(a.jsx)(k,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(c),n()},isolatePopup:o,children:Object(a.jsx)("button",{className:"popup__button-save",id:"deletion__button-save",type:"submit",children:"".concat(i?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430")})})};var T=function(e){var t=e.onLogin,n=e.isLoading,s=w(),i=s.values,o=s.errors,r=s.isValid,l=s.handleChange,u=s.resetForm,d=c.a.useRef(),p=c.a.useRef();return c.a.useEffect((function(){u(),setTimeout((function(){d.current.focus()}),0)}),[]),Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t(d.current.value,p.current.value)},children:[Object(a.jsx)("input",{ref:d,className:"login__input",id:"login__email",name:"email",type:"email",placeholder:"Email",onChange:l,value:i.email||"",required:!0}),Object(a.jsx)("span",{className:"login__error",id:"email__error",children:o.email||""}),Object(a.jsx)("input",{ref:p,className:"login__input",id:"login__password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:l,value:i.password||"",required:!0}),Object(a.jsx)("span",{className:"login__error",id:"email__error",children:o.password||""}),Object(a.jsx)("button",{className:"login__button ".concat(!r&&"login__button_disabled"),id:"login__submit-button",type:"submit",children:"".concat(n?"\u0412\u043e\u0439\u0442\u0438":"\u0412\u0445\u043e\u0434...")})]})]})};var U=function(e){var t=e.onRegister,n=e.isLoading,s=w(),i=s.values,o=s.errors,l=s.isValid,u=s.handleChange,d=s.resetForm,p=c.a.useRef(),j=c.a.useRef();return c.a.useEffect((function(){d(),setTimeout((function(){p.current.focus()}),0)}),[]),Object(a.jsxs)("div",{className:"register",children:[Object(a.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),t(p.current.value,j.current.value)},children:[Object(a.jsx)("input",{ref:p,className:"register__input",id:"register__email",name:"email",type:"email",placeholder:"Email",onChange:u,value:i.email||"",required:!0}),Object(a.jsx)("span",{className:"register__error",id:"email__error",children:o.email||""}),Object(a.jsx)("input",{ref:j,className:"register__input",id:"register__password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:u,value:i.password||"",required:!0}),Object(a.jsx)("span",{className:"register__error",id:"password__error",children:o.password||""}),Object(a.jsx)("button",{className:"register__button ".concat(!l&&"register__button_disabled"),id:"login__submit-button",type:"submit",children:"".concat(n?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...")})]}),Object(a.jsxs)("p",{className:"register__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\u2002",Object(a.jsx)(r.b,{to:"/sign-in",className:"register__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},D=n(24);var I=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(a.jsx)(d.b,{children:n.loggedIn?Object(a.jsx)(t,Object(S.a)({},n)):Object(a.jsx)(d.a,{to:"/sign-in"})})},R=n.p+"static/media/reg_ok.a9eb6caf.svg",F=n.p+"static/media/reg_error.d4ce2a26.svg";var q=function(e){var t=e.isOpen,n=e.onClose,s=e.isolatePopup,c=e.status,i=e.errorText;return Object(a.jsx)("div",{className:"popup popup_type_info ".concat(t&&"popup_opened"),id:"popup__info",onClick:n,children:Object(a.jsxs)("div",{className:"popup__container",onClick:s,children:[Object(a.jsx)("button",{className:"popup__button-close",id:"info__button-close",type:"button",onClick:n}),c?Object(a.jsx)("img",{src:R,alt:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e",className:"popup__status"}):Object(a.jsx)("img",{src:F,alt:"\u041e\u0448\u0438\u0431\u043a\u0430",className:"popup__status"}),Object(a.jsx)("h2",{className:"popup__status-title",children:c?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":i})]})})},M="https://auth.nomoreparties.co";function V(e){return e.ok?e.json():Promise.reject(e)}var J=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"error",children:[Object(a.jsxs)("p",{className:"error__text",children:["E",Object(a.jsx)("span",{children:"r"}),"ror"]}),Object(a.jsxs)("p",{className:"error__number",children:["4",Object(a.jsx)("span",{children:"0"}),Object(a.jsx)("span",{children:"4"})]})]}),Object(a.jsx)("p",{className:"error__message",children:"\u0422\u0430\u043a\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0438\u043b\u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430"}),Object(a.jsx)(r.b,{className:"error__link",to:"/",children:"\u22d8 \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})]})};var B=function(e){var t=e.userEmail,n=e.handleLogout;return Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("p",{className:"menu__email",children:t}),Object(a.jsx)("button",{onClick:n,className:"menu__logout",children:"\u0412\u044b\u0439\u0442\u0438"})]})};var z=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],i=c.a.useState(!1),o=Object(u.a)(i,2),r=o[0],j=o[1],b=c.a.useState(!1),m=Object(u.a)(b,2),h=m[0],f=m[1],g=c.a.useState(!1),x=Object(u.a)(g,2),k=x[0],y=x[1],S=c.a.useState(!1),w=Object(u.a)(S,2),D=w[0],R=w[1],F=c.a.useState(!1),z=Object(u.a)(F,2),H=z[0],G=z[1],K=c.a.useState(!1),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=c.a.useState(!1),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState({}),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],ce=c.a.useState({}),ie=Object(u.a)(ce,2),oe=ie[0],re=ie[1],le=c.a.useState([]),ue=Object(u.a)(le,2),de=ue[0],pe=ue[1],je=c.a.useState(!1),be=Object(u.a)(je,2),_e=be[0],me=be[1],he=c.a.useState(!1),fe=Object(u.a)(he,2),Oe=fe[0],ge=fe[1],xe=c.a.useState(""),ve=Object(u.a)(xe,2),Ne=ve[0],Ce=ve[1],ke=c.a.useState(""),ye=Object(u.a)(ke,2),Se=ye[0],we=ye[1],Le=Object(d.g)();function Pe(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(M,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(V)}(e).then((function(e){me(!0),Ce(e.data.email),Le.push("/")})).catch((function(e){401===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),console.log(new Error(e.status))}))}function Ee(e){"Escape"===e.key&&Ae()}function Ae(){s(!1),j(!1),f(!1),y(!1),R(!1),G(!1),se({})}function Te(e){e.stopPropagation()}function Ue(){localStorage.removeItem("jwt"),Le.push("/sign-in"),me(!1)}return c.a.useEffect((function(){if(ee(!0),_e){var e=[_.getUserInfo(),_.getInitialCards()];Promise.all(e).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];re(n),pe(a)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( ".concat(e))})).finally((function(){return ee(!1)}))}}),[_e]),c.a.useEffect((function(){Pe()}),[]),c.a.useEffect((function(){return window.addEventListener("keydown",Ee),function(){window.removeEventListener("keydown",Ee)}})),Object(a.jsx)(p.Provider,{value:oe,children:Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)("div",{className:"content",children:[W&&_e&&Object(a.jsx)(B,{userEmail:Ne,handleLogout:Ue}),Object(a.jsx)(O,{userEmail:Ne,handleLogout:Ue,handleMenuClick:function(){X(!W)},isMenuOpened:W}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(I,{component:v,loggedIn:_e,cards:de,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===oe._id}));_.changeLikeCardStatus(e._id,!t).then((function(t){var n=de.map((function(n){return n._id===e._id?t:n}));pe(n)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( ".concat(e))}))},onCardDelete:function(e){se(e),R(!0)},onEditProfile:function(){s(!0)},onEditAvatar:function(){f(!0)},onAddPlace:function(){j(!0)},onCardClick:function(e){se(e),y(!0)},isLoading:$})}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(U,{onRegister:function(e,t){ee(!0),function(e,t){return fetch("".concat(M,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(V)}(e,t).then((function(e){Ce(e.email),ge(!0),Le.push("/sign-in"),ee(!1)})).catch((function(e){ge(!1),400===e.status?we("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):we(e.status)})).finally((function(){G(!0)}))},isLoading:$})}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(T,{onLogin:function(e,t){ee(!0),X(!1),function(e,t){return fetch("".concat(M,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(V)}(e,t).then((function(e){localStorage.setItem("jwt",e.token),me(!0),Le.push("/"),ge(!0),ee(!1)})).catch((function(e){ge(!1),G(!0),400===e.status?we("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status?we("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):we(e.status)}))},isLoading:$})}),Object(a.jsx)(d.b,{exact:!0,path:"/",children:_e?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(d.a,{to:"/sign-in"})}),Object(a.jsx)(d.b,{path:"*",children:Object(a.jsx)(J,{})})]}),Object(a.jsx)(N,{}),Object(a.jsx)(L,{isOpen:n,onClose:Ae,onUpdateUser:function(e){ee(!0),_.setUserInfo(e).then((function(e){re(e),ee(!1),Ae()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( ".concat(e))}))},isLoading:$,isolatePopup:Te}),Object(a.jsx)(E,{isOpen:r,onClose:Ae,onAddPlace:function(e){ee(!0),_.setNewCard(e).then((function(e){pe([e].concat(Object(l.a)(de))),ee(!1),Ae()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( ".concat(e))}))},isLoading:$,isolatePopup:Te}),Object(a.jsx)(P,{isOpen:h,onClose:Ae,onUpdateAvatar:function(e){ee(!0),_.editAvatar(e).then((function(e){re(e),ee(!1),Ae()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( ".concat(e))}))},isLoading:$,isolatePopup:Te}),Object(a.jsx)(C,{name:"image",data:ae,onClose:Ae,isOpen:k,isolatePopup:Te}),Object(a.jsx)(A,{isOpen:D,onClose:Ae,handleSubmit:function(e){_.deleteCard(e._id).then((function(){var t=de.filter((function(t){return t!==e}));pe(t)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( ".concat(e))}))},card:ae,isLoading:$,isolatePopup:Te}),Object(a.jsx)(q,{isOpen:H,onClose:Ae,isolatePopup:Te,status:Oe,errorText:Se})]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(z,{})})}),document.getElementById("root")),H()}},[[37,1,2]]]);
//# sourceMappingURL=main.dc4669d4.chunk.js.map