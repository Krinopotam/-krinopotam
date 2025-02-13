import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{f as ye,h as ve,P as _e,a as be}from"./index-j4BjCIe5.js";import{r as u,g as he}from"./index-iW-139IE.js";import{t as ge,C as J,o as Re,u as Pe,c as X,n as $e}from"./compact-item-Cxv0YLF9.js";import{t as k}from"./index-CMYZVoVF.js";import{A as Ce}from"./index-DSj8ZEWj.js";import{a as je}from"./useToken-C9qwXZKU.js";import{S as Z,u as ee,L as Oe,a as Se}from"./Sider-zAVKy6og.js";import"./iframe-DYpgBSvW.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./CloseOutlined-C5nLa7GN.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-DOtYDQG6.js";import"./context-u9dygr8g.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./index-CvIgV7lr.js";import"./motion-HGHEQR47.js";import"./button-D87aS1YS.js";import"./ContextIsolator-BX2WkAUK.js";import"./useClosable-DLVmVXm2.js";import"./index-Bi_XhfGV.js";function qe(e,t,o){return typeof o=="boolean"?o:e.length?!0:ge(t).some(a=>a.type===Z)}var re=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]]);return o};function h(e){let{suffixCls:t,tagName:o,displayName:r}=e;return a=>u.forwardRef((i,l)=>u.createElement(a,Object.assign({ref:l,suffixCls:t,tagName:o},i)))}const M=u.forwardRef((e,t)=>{const{prefixCls:o,suffixCls:r,className:a,tagName:n}=e,i=re(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:l}=u.useContext(J),c=l("layout",o),[R,P,$]=ee(c),C=r?`${c}-${r}`:c;return R(u.createElement(n,Object.assign({className:X(o||C,a,P,$),ref:t},i)))}),Ue=u.forwardRef((e,t)=>{const{direction:o}=u.useContext(J),[r,a]=u.useState([]),{prefixCls:n,className:i,rootClassName:l,children:c,hasSider:R,tagName:P,style:$}=e,C=re(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),ne=Re(C,["suffixCls"]),{getPrefixCls:ie,className:le,style:se}=Pe("layout"),b=ie("layout",n),ue=qe(r,c,R),[ce,pe,fe]=ee(b),de=X(b,{[`${b}-has-sider`]:ue,[`${b}-rtl`]:o==="rtl"},le,i,l,pe,fe),me=u.useMemo(()=>({siderHook:{addSider:j=>{a(O=>[].concat(je(O),[j]))},removeSider:j=>{a(O=>O.filter(xe=>xe!==j))}}}),[]);return ce(u.createElement(Oe.Provider,{value:me},u.createElement(P,Object.assign({ref:t,className:de,style:Object.assign(Object.assign({},se),$)},ne),c)))}),Ne=h({tagName:"div",displayName:"Layout"})(Ue),De=h({suffixCls:"header",tagName:"header",displayName:"Header"})(M),Te=h({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(M),we=h({suffixCls:"content",tagName:"main",displayName:"Content"})(M),p=Ne;p.Header=De;p.Footer=Te;p.Content=we;p.Sider=Z;p._InternalSiderContext=Se;var f={},S={exports:{}},E;function g(){return E||(E=1,function(e){function t(o){return o&&o.__esModule?o:{default:o}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(S)),S.exports}var d={},A;function Me(){if(A)return d;A=1,Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var e={items_per_page:"/ стр.",jump_to:"Перейти",jump_to_confirm:"подтвердить",page:"Страница",prev_page:"Назад",next_page:"Вперед",prev_5:"Предыдущие 5",next_5:"Следующие 5",prev_3:"Предыдущие 3",next_3:"Следующие 3",page_size:"размер страницы"};return d.default=e,d}var m={},x={},y={},q={exports:{}},U={exports:{}},N={exports:{}},D={exports:{}},F;function te(){return F||(F=1,function(e){function t(o){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(D)),D.exports}var T={exports:{}},Y;function ke(){return Y||(Y=1,function(e){var t=te().default;function o(r,a){if(t(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var i=n.call(r,a||"default");if(t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(T)),T.exports}var L;function Ee(){return L||(L=1,function(e){var t=te().default,o=ke();function r(a){var n=o(a,"string");return t(n)=="symbol"?n:n+""}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(N)),N.exports}var I;function Ae(){return I||(I=1,function(e){var t=Ee();function o(r,a,n){return(a=t(a))in r?Object.defineProperty(r,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[a]=n,r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(U)),U.exports}var K;function Fe(){return K||(K=1,function(e){var t=Ae();function o(a,n){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),i.push.apply(i,l)}return i}function r(a){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?o(Object(i),!0).forEach(function(l){t(a,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach(function(l){Object.defineProperty(a,l,Object.getOwnPropertyDescriptor(i,l))})}return a}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(q)),q.exports}var v={},H;function Ye(){return H||(H=1,Object.defineProperty(v,"__esModule",{value:!0}),v.commonLocale=void 0,v.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),v}var V;function Le(){if(V)return y;V=1;var e=g().default;Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var t=e(Fe()),o=Ye(),r=(0,t.default)((0,t.default)({},o.commonLocale),{},{locale:"ru_RU",today:"Сегодня",now:"Сейчас",backToToday:"Текущая дата",ok:"ОК",clear:"Очистить",week:"Неделя",month:"Месяц",year:"Год",timeSelect:"Выбрать время",dateSelect:"Выбрать дату",monthSelect:"Выбрать месяц",yearSelect:"Выбрать год",decadeSelect:"Выбрать десятилетие",dateFormat:"D-M-YYYY",dateTimeFormat:"D-M-YYYY HH:mm:ss",previousMonth:"Предыдущий месяц (PageUp)",nextMonth:"Следующий месяц (PageDown)",previousYear:"Предыдущий год (Control + left)",nextYear:"Следующий год (Control + right)",previousDecade:"Предыдущее десятилетие",nextDecade:"Следущее десятилетие",previousCentury:"Предыдущий век",nextCentury:"Следующий век"});return y.default=r,y}var _={},z;function oe(){if(z)return _;z=1,Object.defineProperty(_,"__esModule",{value:!0}),_.default=void 0;const e={placeholder:"Выберите время",rangePlaceholder:["Время начала","Время окончания"]};return _.default=e,_}var W;function ae(){if(W)return x;W=1;var e=g().default;Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var t=e(Le()),o=e(oe());const r={lang:Object.assign({placeholder:"Выберите дату",yearPlaceholder:"Выберите год",quarterPlaceholder:"Выберите квартал",monthPlaceholder:"Выберите месяц",weekPlaceholder:"Выберите неделю",rangePlaceholder:["Начальная дата","Конечная дата"],rangeYearPlaceholder:["Начальный год","Год окончания"],rangeMonthPlaceholder:["Начальный месяц","Конечный месяц"],rangeWeekPlaceholder:["Начальная неделя","Конечная неделя"],shortWeekDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]},t.default),timePickerLocale:Object.assign({},o.default)};return x.default=r,x}var B;function Ie(){if(B)return m;B=1;var e=g().default;Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var t=e(ae());return m.default=t.default,m}var Q;function Ke(){if(Q)return f;Q=1;var e=g().default;Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var t=e(Me()),o=e(Ie()),r=e(ae()),a=e(oe());const n="${label} не является типом ${type}",i={locale:"ru",Pagination:t.default,DatePicker:r.default,TimePicker:a.default,Calendar:o.default,global:{placeholder:"Пожалуйста выберите"},Table:{filterTitle:"Фильтр",filterConfirm:"OK",filterReset:"Сбросить",filterEmptyText:"Без фильтров",filterCheckAll:"Выбрать все элементы",filterSearchPlaceholder:"Поиск в фильтрах",emptyText:"Нет данных",selectAll:"Выбрать всё",selectInvert:"Инвертировать выбор",selectNone:"Очистить все данные",selectionAll:"Выбрать все данные",sortTitle:"Сортировка",expand:"Развернуть строку",collapse:"Свернуть строку",triggerDesc:"Нажмите для сортировки по убыванию",triggerAsc:"Нажмите для сортировки по возрастанию",cancelSort:"Нажмите, чтобы отменить сортировку"},Tour:{Next:"Далее",Previous:"Назад",Finish:"Завершить"},Modal:{okText:"OK",cancelText:"Отмена",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Отмена"},Transfer:{titles:["",""],searchPlaceholder:"Поиск",itemUnit:"элем.",itemsUnit:"элем.",remove:"Удалить",selectAll:"Выбрать все данные",deselectAll:"Очистить все данные",selectCurrent:"Выбрать текущую страницу",selectInvert:"Инвертировать выбор",removeAll:"Удалить все данные",removeCurrent:"Удалить текущую страницу"},Upload:{uploading:"Загрузка...",removeFile:"Удалить файл",uploadError:"При загрузке произошла ошибка",previewFile:"Предпросмотр файла",downloadFile:"Загрузить файл"},Empty:{description:"Нет данных"},Icon:{icon:"иконка"},Text:{edit:"Редактировать",copy:"Копировать",copied:"Скопировано",expand:"Раскрыть",collapse:"Свернуть"},Form:{optional:"(необязательно)",defaultValidateMessages:{default:"Ошибка проверки поля ${label}",required:"Пожалуйста, введите ${label}",enum:"${label} должен быть одним из [${enum}]",whitespace:"${label} не может быть пустым",date:{format:"${label} не правильный формат даты",parse:"${label} не может быть преобразовано в дату",invalid:"${label} не является корректной датой"},types:{string:n,method:n,array:n,object:n,number:n,date:n,boolean:n,integer:n,float:n,regexp:n,email:n,url:n,hex:n},string:{len:"${label} должна быть ${len} символов",min:"${label} должна быть больше или равна ${min} символов",max:"${label} должна быть меньше или равна ${max} символов",range:"Длина ${label} должна быть между ${min}-${max} символами"},number:{len:"${label} должна быть равна ${len}",min:"${label} должна быть больше или равна ${min}",max:"${label} должна быть меньше или равна ${max}",range:"${label} должна быть между ${min}-${max}"},array:{len:"Количество элементов ${label} должно быть равно ${len}",min:"Количество элементов ${label} должно быть больше или равно ${min}",max:"Количество элементов ${label} должно быть меньше или равно ${max}",range:"Количество элементов ${label} должно быть между ${min} и ${max}"},pattern:{mismatch:"${label} не соответствует шаблону ${pattern}"}}},Image:{preview:"Предпросмотр"},QRCode:{expired:"QR-код устарел",refresh:"Обновить"},ColorPicker:{presetEmpty:"Пустой",transparent:"Прозрачный",singleColor:"Один цвет",gradientColor:"Градиент"}};return f.default=i,f}var w,G;function He(){return G||(G=1,w=Ke()),w}var Ve=He();const ze=he(Ve),{Content:We}=p,Be=({mode:e,children:t})=>s.jsx($e,{locale:ze,theme:{token:{borderRadius:4},components:{Modal:{paddingContentHorizontal:0}},algorithm:e==="dark"?k.darkAlgorithm:k.defaultAlgorithm},children:s.jsx(Ce,{children:s.jsx(p,{style:{padding:10},children:s.jsx(We,{style:{maxWidth:1e3},children:t})})})}),hr={globalTypes:{theme:{description:"Global theme for components",value:"light",toolbar:{title:"Theme",items:[{value:"light",title:"Light",icon:"sun"},{value:"dark",title:"Dark",icon:"moon"}],dynamicTitle:!0}}},parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{page:()=>s.jsxs(s.Fragment,{children:[s.jsx(ye,{}),s.jsx(ve,{}),s.jsx(_e,{}),s.jsx("p",{children:"Parameters:"}),s.jsx(be,{})]})},options:{storySort:{order:["Controls","DForm",["Fields","Examples","Advanced Examples"],"*"]}}},decorators:[(e,t)=>{const o=t.globals.theme;return s.jsx(Be,{mode:o,children:s.jsx(e,{})})}]};export{hr as default};
