(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input-error",errorClass:"popup__span-error_active"},r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.validatorConfig=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this.validatorConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this.validatorConfig.submitButtonSelector)}var n,r;return n=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this.validatorConfig.inputErrorClass),n.textContent=t,n.classList.add(this.validatorConfig.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this.validatorConfig.inputErrorClass),t.classList.remove(this.validatorConfig.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonStatus(),this._formElement.addEventListener("reset",(function(){setTimeout((function(){e._toggleButtonStatus()}),0)})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonStatus()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonStatus",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this.validatorConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled","true")):(this._buttonElement.classList.remove(this.validatorConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonStatus(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),a=(document.querySelector(".profile__title"),document.querySelector(".profile__description"),document.querySelector(".profile__logo")),u=document.forms["popup-form-account"],c=u.elements["input-name"],l=u.elements["input-description"],s=document.forms["popup-form-card"],f=document.forms["popup-form-avatar"];function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var m=function(){function e(t,n){var r,o,i,a=this,u=t.data,c=t.userId,l=t.handleCardClick,s=t.handleCardDelete,f=t.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=function(){a._buttonLike.addEventListener("click",(function(){return a._handleCardLike(a._cardId)})),a._buttonDelete.addEventListener("click",(function(){a._handleCardDelete({cardObj:a._card,cardDom:a._cardElement})})),a._cardElementImage.addEventListener("click",(function(){return a._handleCardClick(a._cardName,a._cardImage)}))},(o=d(o="_eventListeners"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._card=u,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardLikes=this._card.likes,this._cardId=this._card._id,this._userId=c,this._cardTemplate=n,this._handleCardClick=l,this._handleCardDelete=s,this._handleCardLike=f}var t,n;return t=e,(n=[{key:"_createCard",value:function(){return this._cardTemp=document.querySelector(this._cardTemplate).content,this._cardElement=this._cardTemp.querySelector(".element").cloneNode(!0),this._cardElement}},{key:"removeCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"randerCard",value:function(){return this._cardElement=this._createCard(),this._cardElementImage=this._cardElement.querySelector(".element__image"),this._cardElementImage.src=this._cardImage,this._cardElementImage.alt=this._cardName,this._descriptionElement=this._cardElement.querySelector(".element__description"),this._descriptionElement.textContent=this._cardName,this._buttonLike=this._cardElement.querySelector(".element__like"),this._buttonDelete=this._cardElement.querySelector(".element__delete-button"),this._userId!==this._card.owner._id&&(this._buttonDelete.style.display="none"),this._numberLikes=this._cardElement.querySelector(".element__number-likes"),this._numberLikes.textContent=this._cardLikes.length,this.showLike(),this._eventListeners(),this._cardElement}},{key:"showLike",value:function(){var e=this;this._cardLikes.forEach((function(t){t._id===e._userId&&e._buttonLike.classList.add("element__like_liked")}))}},{key:"isLiked",value:function(){return this._buttonLike.classList.contains("element__like_liked")}},{key:"likeCard",value:function(e){this._likes=this._card.likes,this._numberLikes.textContent=e,this._buttonLike.classList.toggle("element__like_liked")}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var b=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"removeCard",value:function(e){console.log("sectionRemoveElement",e),this._container.remove(e)}},{key:"renderItems",value:function(e){for(var t=e.length-1;t>-1;t--)this._renderer(e[t])}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S(r.key),r)}}function S(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var w=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=S(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__button-close")&&e.close()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupDescription=t._popup.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupDescription.textContent=e,C(O(a.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(w);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._apiCallBacks=t,n._buttonConfirm=n._popup.querySelector(".popup__button-save"),n}return t=a,(n=[{key:"open",value:function(e){R(q(a.prototype),"open",this).call(this),this._card=e}},{key:"close",value:function(){R(q(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;R(q(a.prototype),"setEventListeners",this).call(this),this._buttonConfirm.addEventListener("mousedown",(function(){e._apiCallBacks(e._card)}))}},{key:"loadingConfirm",value:function(e,t){this._buttonConfirm.textContent=e?"Сохранение...":t}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(w);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var x=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_serverResponse",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._serverResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._serverResponse(t)}))}},{key:"editCustomProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e["input-name"],about:e["input-description"]})}).then((function(e){return t._serverResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e["input-name"],link:e["input-description"]})}).then((function(e){return t._serverResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._serverResponse(e)}))}},{key:"setCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._serverResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._serverResponse(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._serverResponse(e)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackSubmitForm=t,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._formElement.querySelectorAll(".popup__input")),n._buttonElement=n._formElement.querySelector(".popup__button-save"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=new Object;return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;V(F(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){V(F(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"loadingConfirm",value:function(e,t){this._buttonElement.textContent=e?"Сохранение...":t}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(w);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var $=function(){function e(t){var n=t.selectorUserName,r=t.selectorUserAbout,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(r),this._selectorAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userDescription:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userDescription.textContent=e.about}},{key:"setAvatar",value:function(e){this._selectorAvatar.style.backgroundImage="url(".concat(e,")")}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new r(n,s);K.enableValidation();var Q=new r(n,u);Q.enableValidation(),new r(n,f).enableValidation();var W,X=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"731083b8-75e9-4b19-a7af-5fdc5003b112","Content-Type":"application/json"}}),Y=new $({selectorUserName:".profile__title",selectorUserAbout:".profile__description",selectorAvatar:".profile__logo"});Promise.all([X.getUserData(),X.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W=o._id,Y.setUserInfo(o),Y.setAvatar(o.avatar),Z.renderItems(i)})).catch((function(e){console.log(e)})),o.addEventListener("click",(function(){var e=Y.getUserInfo();ee.open(),Q.resetValidation(),c.value=e.userName,l.value=e.userDescription}));var Z=new b({renderer:function(e){var t=re(e);Z.addItem(t)}},".elements__section-elements"),ee=new H(".popup_type_account",(function(e){ee.loadingConfirm(!0),X.editCustomProfile(e).then((function(e){Y.setUserInfo(e),ee.close()})).catch((function(e){console.log(e)})).finally((function(){ee.loadingConfirm(!1,"Сохранить")}))}));ee.setEventListeners();var te=new H(".popup_type_card",(function(e){te.loadingConfirm(!0),X.addNewCard(e).then((function(e){var t=re(e);Z.addItem(t),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.loadingConfirm(!1,"Создать")}))}));te.setEventListeners(),i.addEventListener("click",(function(){te.open(),K.resetValidation()}));var ne=new D(".popup_type_delete-card",(function(e){ne.loadingConfirm(!0),X.deleteCard(e.cardObj._id).then((function(t){e.cardDom.remove(),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.loadingConfirm(!1,"Да")}))}));function re(e){var t=new m({data:e,userId:W,handleCardClick:function(e,t){oe.open(e,t)},handleCardDelete:function(e){ne.open(e)},handleCardLike:function(e){t.isLiked()?X.deleteCardLike(e).then((function(e){t.likeCard(e.likes.length)})).catch((function(e){console.log(e)})):X.setCardLike(e).then((function(e){t.likeCard(e.likes.length)})).catch((function(e){console.log(e)}))}},"#card-template");return t.randerCard()}ne.setEventListeners();var oe=new P(".popup_type_image");oe.setEventListeners();var ie=new H(".popup_type_avatar",(function(e){ie.loadingConfirm(!0),X.updateAvatar({avatar:e["input-description"]}).then((function(t){Y.setAvatar(e["input-description"]),ie.close()})).catch((function(e){console.log("qwe",e)})).finally((function(){ie.loadingConfirm(!1,"Сохранить")}))}));ie.setEventListeners(),a.addEventListener("click",(function(){ie.open()}))})();