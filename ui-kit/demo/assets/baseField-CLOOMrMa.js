var A=Object.defineProperty;var H=(a,e,o)=>e in a?A(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var f=(a,e,o)=>H(a,typeof e!="symbol"?e+"":e,o);import{bf as _,W as E,bg as C,bh as T,h as $,r as D,j as N}from"./index-CtAjfk3U.js";import{F as w,C as b,a as j}from"./isArray-Dq3mFmoY.js";function O(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,_(a,e)}function I(a,e){return a.classList?!!e&&a.classList.contains(e):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+e+" ")!==-1}function W(a,e){a.classList?a.classList.add(e):I(a,e)||(typeof a.className=="string"?a.className=a.className+" "+e:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+e))}function V(a,e){return a.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function U(a,e){a.classList?a.classList.remove(e):typeof a.className=="string"?a.className=V(a.className,e):a.setAttribute("class",V(a.className&&a.className.baseVal||"",e))}const P={disabled:!1},k=E.createContext(null);var L=function(e){return e.scrollTop},x="unmounted",m="exited",g="entering",F="entered",R="exiting",c=function(a){O(e,a);function e(s,i){var t;t=a.call(this,s,i)||this;var r=i,n=r&&!r.isMounting?s.enter:s.appear,l;return t.appearStatus=null,s.in?n?(l=m,t.appearStatus=g):l=F:s.unmountOnExit||s.mountOnEnter?l=x:l=m,t.state={status:l},t.nextCallback=null,t}e.getDerivedStateFromProps=function(i,t){var r=i.in;return r&&t.status===x?{status:m}:null};var o=e.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(i){var t=null;if(i!==this.props){var r=this.state.status;this.props.in?r!==g&&r!==F&&(t=g):(r===g||r===F)&&(t=R)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var i=this.props.timeout,t,r,n;return t=r=n=i,i!=null&&typeof i!="number"&&(t=i.exit,r=i.enter,n=i.appear!==void 0?i.appear:r),{exit:t,enter:r,appear:n}},o.updateStatus=function(i,t){if(i===void 0&&(i=!1),t!==null)if(this.cancelNextCallback(),t===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);r&&L(r)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===m&&this.setState({status:x})},o.performEnter=function(i){var t=this,r=this.props.enter,n=this.context?this.context.isMounting:i,l=this.props.nodeRef?[n]:[C.findDOMNode(this),n],d=l[0],h=l[1],u=this.getTimeouts(),p=n?u.appear:u.enter;if(!i&&!r||P.disabled){this.safeSetState({status:F},function(){t.props.onEntered(d)});return}this.props.onEnter(d,h),this.safeSetState({status:g},function(){t.props.onEntering(d,h),t.onTransitionEnd(p,function(){t.safeSetState({status:F},function(){t.props.onEntered(d,h)})})})},o.performExit=function(){var i=this,t=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:C.findDOMNode(this);if(!t||P.disabled){this.safeSetState({status:m},function(){i.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:R},function(){i.props.onExiting(n),i.onTransitionEnd(r.exit,function(){i.safeSetState({status:m},function(){i.props.onExited(n)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(i,t){t=this.setNextCallback(t),this.setState(i,t)},o.setNextCallback=function(i){var t=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,t.nextCallback=null,i(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(i,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),n=i==null&&!this.props.addEndListener;if(!r||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],d=l[0],h=l[1];this.props.addEndListener(d,h)}i!=null&&setTimeout(this.nextCallback,i)},o.render=function(){var i=this.state.status;if(i===x)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var n=T(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(k.Provider,{value:null},typeof r=="function"?r(i,n):E.cloneElement(E.Children.only(r),n))},e}(E.Component);c.contextType=k;c.propTypes={};function v(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v};c.UNMOUNTED=x;c.EXITED=m;c.ENTERING=g;c.ENTERED=F;c.EXITING=R;var G=function(e,o){return e&&o&&o.split(" ").forEach(function(s){return W(e,s)})},S=function(e,o){return e&&o&&o.split(" ").forEach(function(s){return U(e,s)})},y=function(a){O(e,a);function e(){for(var s,i=arguments.length,t=new Array(i),r=0;r<i;r++)t[r]=arguments[r];return s=a.call.apply(a,[this].concat(t))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(n,l){var d=s.resolveArguments(n,l),h=d[0],u=d[1];s.removeClasses(h,"exit"),s.addClass(h,u?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(n,l)},s.onEntering=function(n,l){var d=s.resolveArguments(n,l),h=d[0],u=d[1],p=u?"appear":"enter";s.addClass(h,p,"active"),s.props.onEntering&&s.props.onEntering(n,l)},s.onEntered=function(n,l){var d=s.resolveArguments(n,l),h=d[0],u=d[1],p=u?"appear":"enter";s.removeClasses(h,p),s.addClass(h,p,"done"),s.props.onEntered&&s.props.onEntered(n,l)},s.onExit=function(n){var l=s.resolveArguments(n),d=l[0];s.removeClasses(d,"appear"),s.removeClasses(d,"enter"),s.addClass(d,"exit","base"),s.props.onExit&&s.props.onExit(n)},s.onExiting=function(n){var l=s.resolveArguments(n),d=l[0];s.addClass(d,"exit","active"),s.props.onExiting&&s.props.onExiting(n)},s.onExited=function(n){var l=s.resolveArguments(n),d=l[0];s.removeClasses(d,"exit"),s.addClass(d,"exit","done"),s.props.onExited&&s.props.onExited(n)},s.resolveArguments=function(n,l){return s.props.nodeRef?[s.props.nodeRef.current,n]:[n,l]},s.getClassNames=function(n){var l=s.props.classNames,d=typeof l=="string",h=d&&l?l+"-":"",u=d?""+h+n:l[n],p=d?u+"-active":l[n+"Active"],M=d?u+"-done":l[n+"Done"];return{baseClassName:u,activeClassName:p,doneClassName:M}},s}var o=e.prototype;return o.addClass=function(i,t,r){var n=this.getClassNames(t)[r+"ClassName"],l=this.getClassNames("enter"),d=l.doneClassName;t==="appear"&&r==="done"&&d&&(n+=" "+d),r==="active"&&i&&L(i),n&&(this.appliedClasses[t][r]=n,G(i,n))},o.removeClasses=function(i,t){var r=this.appliedClasses[t],n=r.base,l=r.active,d=r.done;this.appliedClasses[t]={},n&&S(i,n),l&&S(i,l),d&&S(i,d)},o.render=function(){var i=this.props;i.classNames;var t=T(i,["classNames"]);return E.createElement(c,$({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(E.Component);y.defaultProps={classNames:""};y.propTypes={};const B=({field:a,altLabel:e,children:o,fieldContainerStyle:s})=>{const i=a.getProps(),t=a.getFormProps();D.useSyncExternalStore(a.subscribe.bind(a),a.getSnapshot.bind(a));const r=a.getError(),n=a.isHidden(),l={height:"100%",...i.rowStyle};let d;t.layout==="horizontal"&&(d=" ");const h=typeof e<"u"?e:i.label??d,u=D.useRef(null),p=i.autoHeightResize?" auto-height":"";return N.jsx(y,{nodeRef:u,in:!n,timeout:300,classNames:"zoom",unmountOnExit:!0,children:N.jsx("div",{ref:u,className:"dform-field-container"+p,style:s,children:N.jsx(w.Item,{label:h,className:i.itemClassName,help:r||void 0,validateStatus:r?"error":void 0,required:!!i.requiredMark,tooltip:i.tooltip,style:l,children:o})})})};class J{constructor(e,o,s,i){f(this,"fieldProps");f(this,"fieldName");f(this,"model");f(this,"parent");f(this,"listeners",[]);f(this,"renderSnapshot",{});f(this,"fieldsMap",{});f(this,"rootFields",{});this.fieldName=e,this.fieldProps=o,this.model=s,this.parent=i}initChildrenFields(){return[{},{}]}getProps(){return this.fieldProps}setProps(e,o){this.fieldProps=e,o||this.emitRender()}noGrowWidth(){return!1}managesChildWidth(){return!1}getWidth(){var e;if(!((e=this.parent)!=null&&e.managesChildWidth()))return this.fieldProps.width}updateProps(e,o){const s=this.getProps()??{};this.setProps({...s,...e},o)}getName(){return this.fieldName}getFormProps(){return this.model.getFormProps()}getModel(){return this.model}getParent(){return this.parent}getLabel(){return this.model.getLabels()[this.fieldName]}setLabel(e,o,s){var t,r;const i=this.getLabel();i!==e&&(this.model.getLabels()[this.fieldName]=e,o||(r=(t=this.getProps())==null?void 0:t.onLabelChanged)==null||r.call(t,e,i,this),s||this.emitRender())}getValue(){return this.model.getValues()[this.fieldName]}setValue(e,o,s){var r,n,l,d;const i=this.getValue();if(i===e)return;const t=this.model.getValues();t[this.fieldName]=e,o||((n=(r=this.getProps())==null?void 0:r.onValueChanged)==null||n.call(r,e,i,this),(d=(l=this.model.getFormProps()).onFormValuesChanged)==null||d.call(l,this.fieldName,t,this.model.getFormApi(),new b),this.validate(o,s)),s||this.emitRender(),this.model.lockDependedFields(this,o,s)}isEmptyValue(){const e=this.getValue();return e===null||j(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0?!0:e!==0&&!e}isTouched(){return this.model.getTouchedFields()[this.fieldName]??!1}setTouched(e,o){var i,t;this.isTouched()!==e&&(this.model.getTouchedFields()[this.fieldName]=e,o||(t=(i=this.getProps())==null?void 0:i.onTouchedStateChanged)==null||t.call(i,e,this))}isDirty(){return this.model.getDirtyFields()[this.fieldName]??!1}setDirty(e,o){var t,r;if(this.isDirty()===e)return;this.model.getDirtyFields()[this.fieldName]=e,o||(r=(t=this.getProps())==null?void 0:t.onDirtyStateChanged)==null||r.call(t,e,this);let i=e;if(!e){for(const n in this.model.getDirtyFields())if(this.model.getDirtyFields()[n]){i=!0;break}}this.model.setFormDirty(i,o)}isDisabled(){return this.model.isFormDisabled()||this.getProps().nonEditable==="disabled"&&this.model.getFormMode()==="update"?!0:this.model.getDisabledFields()[this.fieldName]??!1}setDisabled(e,o,s){var t,r;this.isDisabled()!==e&&(this.model.getDisabledFields()[this.fieldName]=e,o||(r=(t=this.getProps())==null?void 0:t.onDisabledStateChanged)==null||r.call(t,e,this),s||this.model.emitFormRender())}isReadOnly(){return this.model.isFormReadOnly()||(this.getProps().nonEditable===!0||this.getProps().nonEditable==="readOnly")&&this.model.getFormMode()==="update"?!0:this.model.getReadOnlyFields()[this.fieldName]??!1}setReadOnly(e,o,s){var t,r;this.model.getReadOnlyFields()[this.fieldName]!==e&&(this.model.getReadOnlyFields()[this.fieldName]=e,o||(r=(t=this.getProps())==null?void 0:t.onReadOnlyStateChanged)==null||r.call(t,e,this),s||this.emitRender())}isHidden(){return this.model.getHiddenFields()[this.fieldName]??!1}setHidden(e,o,s){var t,r;this.isHidden()!==e&&(this.model.getHiddenFields()[this.fieldName]=e,this.model.lockDependedFields(this,o,s),e&&(this.setError("",o,s),this.setReady(!1,!0)),o||(r=(t=this.getProps())==null?void 0:t.onHiddenStateChanged)==null||r.call(t,e,this),s||this.model.emitFormRender())}isReady(){return this.model.isFormFetching()||this.model.isFormFetchingFailed()||this.model.getFetchingFields()[this.fieldName]?!1:this.model.getReadyFields()[this.fieldName]??!1}setReady(e,o){var i,t;this.isReady()!==e&&(this.model.getReadyFields()[this.fieldName]=e,o||(t=(i=this.getProps())==null?void 0:i.onReadyStateChanged)==null||t.call(i,e,this),this.model.checkFormReadyState())}getError(){return this.model.getErrors()[this.fieldName]??""}setError(e,o,s){var r,n,l;if(this.getError()===e)return;const t=this.model.getErrors();if(e?t[this.fieldName]=e:delete t[this.fieldName],!o){const d=this.getProps();(r=d==null?void 0:d.onErrorChanged)==null||r.call(d,e,this);const h=this.model.getFormProps(),u=this.model.getValues(),p=this.model.getFormDataSet();this.model.isFormHasError()?(n=h.onFormHasErrors)==null||n.call(h,u,p,t,this.model.getFormApi(),new b):(l=h.onFormHasNoErrors)==null||l.call(h,u,p,this.model.getFormApi(),new b)}s||this.emitRender()}validate(e,o){var r,n,l;const s=this.getProps().rules??[],i=((r=this.getFormProps().validationRules)==null?void 0:r[this.fieldName])??[],t=this.isHidden()?"":this.model.getValidator().validateValue(this.getValue(),this.model,s.concat(i));return this.setError(t,e),!e&&!this.isHidden()&&((l=(n=this.getProps())==null?void 0:n.onValidated)==null||l.call(n,this.getValue(),t,this.model.isFormSubmitting(),this)),o||this.emitRender(),t}onInitialFetch(){this.fetchData()}isFetching(){return this.model.getFetchingFields()[this.fieldName]===1}isFetchingFailed(){return this.model.getFetchingFields()[this.fieldName]===-1}fetchData(){var s,i;const e=(i=(s=this.fieldProps).onFieldDataFetch)==null?void 0:i.call(s,this);if(!e)return;const o=this.model.getFetchingFields();o[this.fieldName]=1,this.model.checkFormReadyState(),this.emitRender(),e.then(t=>{var n,l;if(!this.model.isFormMounted())return;o[this.fieldName]=0,(l=(n=this.fieldProps).onFieldDataFetchSuccess)==null||l.call(n,t,this);const r=t.data;this.model.setValues(r),this.model.checkFormReadyState(),this.emitRender()},t=>{var r,n;this.model.isFormMounted()&&(o[this.fieldName]=-1,(n=(r=this.fieldProps).onFieldDataFetchError)==null||n.call(r,t,this),this.model.checkFormReadyState(),this.emitRender())})}getFieldsMap(){return this.fieldsMap}getRootFields(){return this.rootFields}isContainer(){return Object.keys(this.rootFields).length>0}hasVisibleChildren(){for(const e in this.rootFields){const o=this.rootFields[e];if(!o.isContainer()&&!o.isHidden()||o.hasVisibleChildren())return!0}return!1}render(){throw new Error("Render method must be implemented in a derived class of the BaseField class")}renderField({altLabel:e=void 0,fieldContainerStyle:o=void 0}={}){return this.renderFieldWrapper({field:this.render(),altLabel:e,fieldContainerStyle:o})}renderFieldWrapper({field:e,altLabel:o,fieldContainerStyle:s}){return N.jsx(B,{field:this,altLabel:o,fieldContainerStyle:s,children:e},this.getName())}canHaveValue(){return!0}subscribe(e){return this.listeners=[...this.listeners,e],()=>{this.listeners=this.listeners.filter(o=>o!==e)}}getSnapshot(){return this.renderSnapshot}emitRender(){this.renderSnapshot={};for(const e of this.listeners)e()}}export{J as B,y as C};
