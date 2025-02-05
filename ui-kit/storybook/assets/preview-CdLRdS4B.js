import{j as s}from"./jsx-runtime-CLpGMVip.js";import{f as xe,h as ye,P as ve,a as _e}from"./index-B7PzOH0v.js";import{r as u,g as be}from"./index-C9MQhBv9.js";import{t as he,C as k,o as ge,c as Z,k as Re}from"./compact-item-DA-GXfnI.js";import{t as F}from"./index-BW5SL8mY.js";import{A as Pe}from"./index--n2SL9R3.js";import{a as $e}from"./useToken-C7r1PZCj.js";import{S as ee,u as re,L as Ce,a as je}from"./Sider-DE0fVHvD.js";import"./iframe-CY9gikd3.js";import"./index-DYSaHhaM.js";import"./index-B-Tif3g2.js";import"./index-Cu4lwwaE.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./CloseOutlined-DRVLVuFC.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-Br7KB4bY.js";import"./context-55JlqysY.js";import"./ExclamationCircleFilled-DH9qZ7y2.js";import"./index-C3W8-LPG.js";import"./motion-hLQ8GYzu.js";import"./button-bcPEIH53.js";import"./ContextIsolator-QgC1AqAH.js";import"./useClosable-D8jC4WSZ.js";import"./index-3upY0JfS.js";function Oe(e,t,o){return typeof o=="boolean"?o:e.length?!0:he(t).some(a=>a.type===ee)}var te=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]]);return o};function g(e){let{suffixCls:t,tagName:o,displayName:r}=e;return a=>u.forwardRef((i,l)=>u.createElement(a,Object.assign({ref:l,suffixCls:t,tagName:o},i)))}const E=u.forwardRef((e,t)=>{const{prefixCls:o,suffixCls:r,className:a,tagName:n}=e,i=te(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:l}=u.useContext(k),c=l("layout",o),[P,$,C]=re(c),j=r?`${c}-${r}`:c;return P(u.createElement(n,Object.assign({className:Z(o||j,a,$,C),ref:t},i)))}),Se=u.forwardRef((e,t)=>{const{direction:o}=u.useContext(k),[r,a]=u.useState([]),{prefixCls:n,className:i,rootClassName:l,children:c,hasSider:P,tagName:$,style:C}=e,j=te(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),ie=ge(j,["suffixCls"]),{getPrefixCls:le,layout:f}=u.useContext(k),h=le("layout",n),se=Oe(r,c,P),[ue,ce,pe]=re(h),fe=Z(h,{[`${h}-has-sider`]:se,[`${h}-rtl`]:o==="rtl"},f==null?void 0:f.className,i,l,ce,pe),de=u.useMemo(()=>({siderHook:{addSider:O=>{a(S=>[].concat($e(S),[O]))},removeSider:O=>{a(S=>S.filter(me=>me!==O))}}}),[]);return ue(u.createElement(Ce.Provider,{value:de},u.createElement($,Object.assign({ref:t,className:fe,style:Object.assign(Object.assign({},f==null?void 0:f.style),C)},ie),c)))}),qe=g({tagName:"div",displayName:"Layout"})(Se),Ue=g({suffixCls:"header",tagName:"header",displayName:"Header"})(E),Ne=g({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(E),De=g({suffixCls:"content",tagName:"main",displayName:"Content"})(E),p=qe;p.Header=Ue;p.Footer=Ne;p.Content=De;p.Sider=ee;p._InternalSiderContext=je;var d={},q={exports:{}},A;function R(){return A||(A=1,function(e){function t(o){return o&&o.__esModule?o:{default:o}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(q)),q.exports}var m={},Y;function Te(){if(Y)return m;Y=1,Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var e={items_per_page:"/ стр.",jump_to:"Перейти",jump_to_confirm:"подтвердить",page:"Страница",prev_page:"Назад",next_page:"Вперед",prev_5:"Предыдущие 5",next_5:"Следующие 5",prev_3:"Предыдущие 3",next_3:"Следующие 3",page_size:"размер страницы"};return m.default=e,m}var x={},y={},v={},U={exports:{}},N={exports:{}},D={exports:{}},T={exports:{}},L;function oe(){return L||(L=1,function(e){function t(o){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(T)),T.exports}var M={exports:{}},I;function Me(){return I||(I=1,function(e){var t=oe().default;function o(r,a){if(t(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var i=n.call(r,a||"default");if(t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(M)),M.exports}var K;function we(){return K||(K=1,function(e){var t=oe().default,o=Me();function r(a){var n=o(a,"string");return t(n)=="symbol"?n:n+""}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(D)),D.exports}var H;function ke(){return H||(H=1,function(e){var t=we();function o(r,a,n){return(a=t(a))in r?Object.defineProperty(r,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[a]=n,r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(N)),N.exports}var V;function Ee(){return V||(V=1,function(e){var t=ke();function o(a,n){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),i.push.apply(i,l)}return i}function r(a){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?o(Object(i),!0).forEach(function(l){t(a,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach(function(l){Object.defineProperty(a,l,Object.getOwnPropertyDescriptor(i,l))})}return a}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(U)),U.exports}var _={},z;function Fe(){return z||(z=1,Object.defineProperty(_,"__esModule",{value:!0}),_.commonLocale=void 0,_.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),_}var W;function Ae(){if(W)return v;W=1;var e=R().default;Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var t=e(Ee()),o=Fe(),r=(0,t.default)((0,t.default)({},o.commonLocale),{},{locale:"ru_RU",today:"Сегодня",now:"Сейчас",backToToday:"Текущая дата",ok:"ОК",clear:"Очистить",month:"Месяц",year:"Год",timeSelect:"Выбрать время",dateSelect:"Выбрать дату",monthSelect:"Выбрать месяц",yearSelect:"Выбрать год",decadeSelect:"Выбрать десятилетие",dateFormat:"D-M-YYYY",dateTimeFormat:"D-M-YYYY HH:mm:ss",previousMonth:"Предыдущий месяц (PageUp)",nextMonth:"Следующий месяц (PageDown)",previousYear:"Предыдущий год (Control + left)",nextYear:"Следующий год (Control + right)",previousDecade:"Предыдущее десятилетие",nextDecade:"Следущее десятилетие",previousCentury:"Предыдущий век",nextCentury:"Следующий век"});return v.default=r,v}var b={},B;function ae(){if(B)return b;B=1,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;const e={placeholder:"Выберите время",rangePlaceholder:["Время начала","Время окончания"]};return b.default=e,b}var Q;function ne(){if(Q)return y;Q=1;var e=R().default;Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var t=e(Ae()),o=e(ae());const r={lang:Object.assign({placeholder:"Выберите дату",yearPlaceholder:"Выберите год",quarterPlaceholder:"Выберите квартал",monthPlaceholder:"Выберите месяц",weekPlaceholder:"Выберите неделю",rangePlaceholder:["Начальная дата","Конечная дата"],rangeYearPlaceholder:["Начальный год","Год окончания"],rangeMonthPlaceholder:["Начальный месяц","Конечный месяц"],rangeWeekPlaceholder:["Начальная неделя","Конечная неделя"],shortWeekDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]},t.default),timePickerLocale:Object.assign({},o.default)};return y.default=r,y}var G;function Ye(){if(G)return x;G=1;var e=R().default;Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var t=e(ne());return x.default=t.default,x}var J;function Le(){if(J)return d;J=1;var e=R().default;Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var t=e(Te()),o=e(Ye()),r=e(ne()),a=e(ae());const n="${label} не является типом ${type}",i={locale:"ru",Pagination:t.default,DatePicker:r.default,TimePicker:a.default,Calendar:o.default,global:{placeholder:"Пожалуйста выберите"},Table:{filterTitle:"Фильтр",filterConfirm:"OK",filterReset:"Сбросить",filterEmptyText:"Без фильтров",filterCheckall:"Выбрать все элементы",filterSearchPlaceholder:"Поиск в фильтрах",emptyText:"Нет данных",selectAll:"Выбрать всё",selectInvert:"Инвертировать выбор",selectNone:"Очистить все данные",selectionAll:"Выбрать все данные",sortTitle:"Сортировка",expand:"Развернуть строку",collapse:"Свернуть строку",triggerDesc:"Нажмите для сортировки по убыванию",triggerAsc:"Нажмите для сортировки по возрастанию",cancelSort:"Нажмите, чтобы отменить сортировку"},Tour:{Next:"Далее",Previous:"Назад",Finish:"Завершить"},Modal:{okText:"OK",cancelText:"Отмена",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Отмена"},Transfer:{titles:["",""],searchPlaceholder:"Поиск",itemUnit:"элем.",itemsUnit:"элем.",remove:"Удалить",selectAll:"Выбрать все данные",deselectAll:"Очистить все данные",selectCurrent:"Выбрать текущую страницу",selectInvert:"Инвертировать выбор",removeAll:"Удалить все данные",removeCurrent:"Удалить текущую страницу"},Upload:{uploading:"Загрузка...",removeFile:"Удалить файл",uploadError:"При загрузке произошла ошибка",previewFile:"Предпросмотр файла",downloadFile:"Загрузить файл"},Empty:{description:"Нет данных"},Icon:{icon:"иконка"},Text:{edit:"Редактировать",copy:"Копировать",copied:"Скопировано",expand:"Раскрыть",collapse:"Свернуть"},Form:{optional:"(необязательно)",defaultValidateMessages:{default:"Ошибка проверки поля ${label}",required:"Пожалуйста, введите ${label}",enum:"${label} должен быть одним из [${enum}]",whitespace:"${label} не может быть пустым",date:{format:"${label} не правильный формат даты",parse:"${label} не может быть преобразовано в дату",invalid:"${label} не является корректной датой"},types:{string:n,method:n,array:n,object:n,number:n,date:n,boolean:n,integer:n,float:n,regexp:n,email:n,url:n,hex:n},string:{len:"${label} должна быть ${len} символов",min:"${label} должна быть больше или равна ${min} символов",max:"${label} должна быть меньше или равна ${max} символов",range:"Длина ${label} должна быть между ${min}-${max} символами"},number:{len:"${label} должна быть равна ${len}",min:"${label} должна быть больше или равна ${min}",max:"${label} должна быть меньше или равна ${max}",range:"${label} должна быть между ${min}-${max}"},array:{len:"Количество элементов ${label} должно быть равно ${len}",min:"Количество элементов ${label} должно быть больше или равно ${min}",max:"Количество элементов ${label} должно быть меньше или равно ${max}",range:"Количество элементов ${label} должно быть между ${min} и ${max}"},pattern:{mismatch:"${label} не соответствует шаблону ${pattern}"}}},Image:{preview:"Предпросмотр"},QRCode:{expired:"QR-код устарел",refresh:"Обновить"},ColorPicker:{presetEmpty:"Пустой",transparent:"Прозрачный",singleColor:"Один цвет",gradientColor:"Градиент"}};return d.default=i,d}var w,X;function Ie(){return X||(X=1,w=Le()),w}var Ke=Ie();const He=be(Ke),{Content:Ve}=p,ze=({mode:e,children:t})=>s.jsx(Re,{locale:He,theme:{token:{borderRadius:4},components:{Modal:{paddingContentHorizontal:0}},algorithm:e==="dark"?F.darkAlgorithm:F.defaultAlgorithm},children:s.jsx(Pe,{children:s.jsx(p,{style:{padding:10},children:s.jsx(Ve,{style:{maxWidth:1e3},children:t})})})}),_r={globalTypes:{theme:{description:"Global theme for components",value:"light",toolbar:{title:"Theme",items:[{value:"light",title:"Light",icon:"sun"},{value:"dark",title:"Dark",icon:"moon"}],dynamicTitle:!0}}},parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{page:()=>s.jsxs(s.Fragment,{children:[s.jsx(xe,{}),s.jsx(ye,{}),s.jsx(ve,{}),s.jsx("p",{children:"Parameters:"}),s.jsx(_e,{})]})},options:{storySort:{order:["Controls","DForm",["Fields","Examples","Advanced Examples"],"*"]}}},decorators:[(e,t)=>{const o=t.globals.theme;return s.jsx(ze,{mode:o,children:s.jsx(e,{})})}]};export{_r as default};
