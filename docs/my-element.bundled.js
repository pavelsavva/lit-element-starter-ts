/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;class o{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}}const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:a,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,u=globalThis,p=u.trustedTypes,f=p?p.emptyScript:"",v=u.reactiveElementPolyfillSupport,g=(t,s)=>t,y={toAttribute(t,s){switch(s){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,s)=>!n(t,s),m={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=m){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&h(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:o}=c(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);o.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,s=[...a(t),...l(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(r(t))}else void 0!==t&&s.push(r(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(s,i.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=o.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,v?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,x=$.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,A="?"+k,T=`<${A}>`,C=document,E=()=>C.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,D=/>/g,N=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,B=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),H=new WeakMap,J=C.createTreeWalker(C,129);function Z(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(s):s}const q=(t,s)=>{const i=t.length-1,e=[];let o,r=2===s?"<svg>":"",n=O;for(let s=0;s<i;s++){const i=t[s];let h,c,a=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===O?"!--"===c[1]?n=j:void 0!==c[1]?n=D:void 0!==c[2]?(R.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=N):void 0!==c[3]&&(n=N):n===N?">"===c[0]?(n=o??O,a=-1):void 0===c[1]?a=-2:(a=n.lastIndex-c[2].length,h=c[1],n=void 0===c[3]?N:'"'===c[3]?I:z):n===I||n===z?n=N:n===j||n===D?n=O:(n=N,o=void 0);const d=n===N&&t[s+1].startsWith("/>")?" ":"";r+=n===O?i+T:a>=0?(e.push(h),i.slice(0,a)+_+i.slice(a)+k+d):i+k+(-2===a?s:d)}return[Z(t,r+(t[i]||"<?>")+(2===s?"</svg>":"")),e]};class K{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,r=0;const n=t.length-1,h=this.parts,[c,a]=q(t,s);if(this.el=K.createElement(c,i),J.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=J.nextNode())&&h.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(_)){const s=a[r++],i=e.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?Y:"@"===n[1]?tt:Q}),e.removeAttribute(t)}else t.startsWith(k)&&(h.push({type:6,index:o}),e.removeAttribute(t));if(R.test(e.tagName)){const t=e.textContent.split(k),s=t.length-1;if(s>0){e.textContent=x?x.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],E()),J.nextNode(),h.push({type:2,index:++o});e.append(t[s],E())}}}else if(8===e.nodeType)if(e.data===A)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(k,t+1));)h.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,s){const i=C.createElement("template");return i.innerHTML=t,i}}function V(t,s,i=t,e){if(s===L)return s;let o=void 0!==e?i._$Co?.[e]:i._$Cl;const r=P(s)?void 0:s._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=o:i._$Cl=o),void 0!==o&&(s=V(t,o._$AS(t,s.values),o,e)),s}class F{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??C).importNode(s,!0);J.currentNode=e;let o=J.nextNode(),r=0,n=0,h=i[0];for(;void 0!==h;){if(r===h.index){let s;2===h.type?s=new G(o,o.nextSibling,this,t):1===h.type?s=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(s=new st(o,this,t)),this._$AV.push(s),h=i[++n]}r!==h?.index&&(o=J.nextNode(),r++)}return J.currentNode=C,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=V(this,t,s),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new F(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=H.get(t.strings);return void 0===s&&H.set(t.strings,s=new K(t)),s}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new G(this.S(E()),this.S(E()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,s=this,i,e){const o=this.strings;let r=!1;if(void 0===o)t=V(this,t,s,0),r=!P(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=V(this,e[i+n],s,n),h===L&&(h=this._$AH[n]),r||=!P(h)||h!==this._$AH[n],h===W?t=W:t!==W&&(t+=(h??"")+o[n+1]),this._$AH[n]=h}r&&!e&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class Y extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class tt extends Q{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){if((t=V(this,t,s,0)??W)===L)return;const i=this._$AH,e=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||e);e&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const it=$.litHtmlPolyfillSupport;it?.(K,G),($.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class et extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let o=e._$litPart$;if(void 0===o){const t=i?.renderBefore??null;e._$litPart$=o=new G(s.insertBefore(E(),t),t,void 0,i??{})}return o._$AI(t),o})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}et._$litElement$=!0,et.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:et});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:et}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},nt=(t=rt,s,i)=>{const{kind:e,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const o=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,o,t)},init(s){return void 0!==s&&this.P(e,void 0,t),s}}}if("setter"===e){const{name:e}=i;return function(i){const o=this[e];s.call(this,i),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(t){return function(t){return(s,i)=>"object"==typeof i?nt(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)}({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=(t,s,i)=>(i.configurable=!0,i.enumerable=!0,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=1;class lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(t=>(...s)=>({_$litDirective$:t,values:s}))(class extends lt{constructor(t){if(super(t),t.type!==at||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(t,[s]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(s)}const i=t.element.classList;for(const t of this.st)t in s||(i.remove(t),this.st.delete(t));for(const t in s){const e=!!s[t];e===this.st.has(t)||this.nt?.has(t)||(e?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return L}});var ut=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};class pt{constructor(t,s){this.name=t,this.version=s,this.db=null}async init(){return new Promise(((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onupgradeneeded=t=>{this.db=t.target?.result,this.db?.objectStoreNames.contains("todos")||this.db?.createObjectStore("todos",{keyPath:"id",autoIncrement:!0})},i.onsuccess=s=>{this.db=s.target?.result,t("Database opened successfully")},i.onerror=t=>{console.error("IndexedDB error:",t.target?.errorCode),s(t.target?.errorCode)}}))}async getTodos(){return new Promise(((t,s)=>{if(this.db){const i=this.db.transaction(["todos"],"readonly").objectStore("todos").getAll();i.onsuccess=()=>{t(i.result)},i.onerror=()=>{s(i.error)}}else s("Database not initialized")}))}async addTodos(t){return new Promise(((s,i)=>{if(this.db){const e=this.db.transaction(["todos"],"readwrite"),o=e.objectStore("todos");o.clear(),t.forEach((t=>{o.add(t)})),e.oncomplete=()=>{s("Todos added successfully")},e.onerror=()=>{i(e.error)}}else i("Database not initialized")}))}async clearTodos(){return new Promise(((t,s)=>{if(this.db){const i=this.db.transaction(["todos"],"readwrite").objectStore("todos").clear();i.onsuccess=()=>{t("Todos cleared successfully")},i.onerror=()=>{s(i.error)}}else s("Database not initialized")}))}}let ft=class extends et{render(){return B`
      <h1>
        Today's todos
      </h1>
      ${this._getTodosBlock()}

      <form class="add-todo-group" @submit=${this._addTodo}>
        <input type="text" id="todo" placeholder="Enter a new todo" />
        <button id="add" @click=${this._addTodo}>
          Add todo
        </button>
      </form>
      <button class="destructive" id="clear" @click=${this._clearTodos}>
        Clear todos
      </button>
    `}async _addTodo(t){t.preventDefault();const s=this.todoInput.value;s&&(this.todos=[...this.todos,{text:s,completed:!1}],this.todoInput.value=""),await this.db.addTodos(this.todos)}_getTodosBlock(){return this.loading?B`<p>Loading...</p>`:0===this.todos.length?B`<p class="no-todos-message">No todos yet</p>`:B`
      <ul class="todos-list">
        ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(t,s){if(void 0!==t){let i=0;for(const e of t)yield s(e,i++)}}(this.todos,((t,s)=>B`
            <div class="todo-item" @click=${()=>this._checkTodoItem(s)}>
              <input type="checkbox" id="todo-${s}" ?checked=${t.completed}/>
              <li class=${dt({completed:t.completed})}>${s+1}. ${t.text}</li>
            </div>
          `))}
      </ul>
    `}async _checkTodoItem(t){this.todos=this.todos.map(((s,i)=>i===t?{...s,completed:!s.completed}:s)),await this.db.addTodos(this.todos)}async _clearTodos(){this.todos=[],await this.db.clearTodos()}constructor(){super(),this.todos=[],this.loading=!0,this.db=new pt("todoDB",1),this.initDB()}async initDB(){await this.db.init();const t=await this.db.getTodos();this.todos=t.map((t=>({text:t.text,completed:t.completed}))),this.loading=!1}};ft.styles=((t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new o(e,t,i)})`
      :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border: solid 1px #000;
          padding: 16px;
          max-width: 400px;
          margin: 0 auto;
          border-radius: 10px;
          font-family: sans-serif;

          --primary-color: #6200ee;
          --secondary-color: #03dac6;
          --text-color: #121212;
          --destructive-color: #b00020;
          --destructive-color-light: #ff1744;
          --destructive-color-dark: #8e0000;
      }

      button {
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background-color 0.3s, color 0.3s;

          background-color: var(--primary-color);
          color: white;
      }

      button.destructive {
          background-color: var(--destructive-color);
          color: white;
      }

      button.destructive:hover {
          background-color: var(--destructive-color-dark);
      }

      button.destructive:active {
          background-color: var(--destructive-color);
      }

      #clear {
          width: 100%;
      }

      .add-todo-group {
          display: flex;
          gap: 8px;
          width: 100%;
      }

      #todo {
          flex: 1;
      }

      input {
          padding: 8px;
          border-radius: 5px;
          border: 1px solid #000;
      }

      h1 {
          padding: 0;
          margin: 0 0 16px;
      }
      
      .todos-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-start;
          width: 100%;
      }
      
      .no-todos-message {
          color: #8292a2;
          width: 100%;
          text-align: left;
          padding: 0;
          margin: 0;
      }
      
      .todo-item {
          display: flex;
          gap: 8px;
          align-items: center;
          cursor: pointer;
      }
      
      li.completed {
          text-decoration: line-through;
          color: #8292a2;
      }
  `,ut([function(t,s){return(i,e,o)=>{const r=s=>s.renderRoot?.querySelector(t)??null;if(s){const{get:t,set:s}="object"==typeof e?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(s){this[t]=s}}})();return ct(0,0,{get(){let i=t.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&s.call(this,i)),i}})}return ct(0,0,{get(){return r(this)}})}}("#todo")],ft.prototype,"todoInput",void 0),ut([ht()],ft.prototype,"todos",void 0),ut([ht()],ft.prototype,"loading",void 0),ft=ut([(t=>(s,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,s)})):customElements.define(t,s)})("my-element")],ft);export{ft as MyElement};
