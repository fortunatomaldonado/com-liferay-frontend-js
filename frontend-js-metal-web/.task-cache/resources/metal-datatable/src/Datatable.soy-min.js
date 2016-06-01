define("frontend-js-metal-web@1.0.7/metal-datatable/src/Datatable.soy-min", ["exports","metal-component/src/Component","metal-soy/src/Soy"], function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function r(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Datatable=void 0;var o,u=t(a),p=t(l);goog.loadModule(function(e){function a(e,a,t){g("div",null,null,"class","datatable"+(e.elementClasses?" "+e.elementClasses:"")),l(i.$$augmentMap(e.data,{displayColumnsType:e.displayColumnsType,tableClasses:e.tableClasses}),null,t),y("div")}function l(e,a,l){var o;switch(goog.isObject(o=e.type)?o.toString():o){case"array":e.columns?s(e,null,l):t(e,null,l);break;case"boolean":n(e,null,l);break;case"null":r(e,null,l);break;case"number":u(e,null,l);break;case"object":p(e,null,l);break;case"string":c(e,null,l);break;case"undefined":d(e,null,l)}}function t(e,a,t){g("span",null,null,"class","datatable-array"),g("span",null,null,"class","datatable-label collapsed","data-onclick","toggleTableContents"),f("Array, "),f((goog.asserts.assert(null!=e.value.length),e.value.length)),f(" items"),y("span"),g("table",null,null,"class",(e.tableClasses?e.tableClasses+"":"")+" hidden"),g("tbody");for(var s=e.value,n=s.length,r=0;n>r;r++){var o=s[r];g("tr"),g("td"),l(i.$$augmentMap(o,{tableClasses:e.tableClasses,displayColumnsType:e.displayColumnsType}),null,t),y("td"),y("tr")}y("tbody"),y("table"),y("span")}function s(e,a,t){g("span",null,null,"class","datatable-array-object"),g("table",null,null,"class",e.tableClasses?e.tableClasses:""),g("thead"),g("tr");for(var s=e.columns,n=s.length,r=0;n>r;r++){var o=s[r];g("th"),f((goog.asserts.assert(null!=o),o)),e.displayColumnsType&&e.columnsType&&(g("span",null,null,"class","datatable-type"),f((goog.asserts.assert(null!=e.columnsType[o]),e.columnsType[o])),y("span")),y("th")}y("tr"),y("thead"),g("tbody");for(var u=e.value,p=u.length,d=0;p>d;d++){var c=u[d];g("tr");for(var b=e.columns,m=b.length,v=0;m>v;v++){var C=b[v];g("td"),l(i.$$augmentMap(c.value[C],{displayColumnsType:e.displayColumnsType,tableClasses:e.tableClasses}),null,t),y("td")}y("tr")}y("tbody"),y("table"),y("span")}function n(e,a,l){g("span",null,null,"class","datatable-boolean"),f((goog.asserts.assert(null!=e.value),e.value)),y("span")}function r(e,a,l){g("span",null,null,"class","datatable-null"),f("null"),y("span")}function u(e,a,l){g("span",null,null,"class","datatable-number"),f((goog.asserts.assert(null!=e.value),e.value)),y("span")}function p(e,a,t){g("span",null,null,"class","datatable-object"),g("span",null,null,"class","datatable-label collapsed","data-onclick","toggleTableContents"),f("Object, "),f((goog.asserts.assert(null!=i.$$getMapKeys(e.value).length),i.$$getMapKeys(e.value).length)),f(" items"),y("span"),g("table",null,null,"class",(e.tableClasses?e.tableClasses:"")+" hidden"),g("thead"),g("tr");for(var s=e.columns,n=s.length,r=0;n>r;r++){var o=s[r];g("th"),f((goog.asserts.assert(null!=o),o)),e.displayColumnsType&&e.columnsType&&(g("span",null,null,"class","datatable-type"),f((goog.asserts.assert(null!=e.columnsType[o]),e.columnsType[o])),y("span")),y("th")}y("tr"),y("thead"),g("tbody"),g("tr");for(var u=e.columns,p=u.length,d=0;p>d;d++){var c=u[d];g("td"),l(i.$$augmentMap(e.value[c],{displayColumnsType:e.displayColumnsType,tableClasses:e.tableClasses}),null,t),y("td")}y("tr"),y("tbody"),y("table"),y("span")}function d(e,a,l){g("span",null,null,"class","datatable-undefined"),f("undefined"),y("span")}function c(e,a,l){i.asserts.assertType(e.value instanceof Function||e.value instanceof b.UnsanitizedText||goog.isString(e.value),"value",e.value,"Function");var t=e.value;g("span",null,null,"class","datatable-string"),t(),y("span")}goog.module("Datatable.incrementaldom");var i=goog.require("soy"),b=goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi");var m=goog.require("incrementaldom"),g=m.elementOpen,y=m.elementClose,f=(m.elementVoid,m.elementOpenStart,m.elementOpenEnd,m.text);m.attr;return (e.render=a, goog.DEBUG&&(a.soyTemplateName="Datatable.render"), e.render_=l, goog.DEBUG&&(l.soyTemplateName="Datatable.render_"), e.renderArray_=t, goog.DEBUG&&(t.soyTemplateName="Datatable.renderArray_"), e.renderArrayOfObjects_=s, goog.DEBUG&&(s.soyTemplateName="Datatable.renderArrayOfObjects_"), e.renderBoolean_=n, goog.DEBUG&&(n.soyTemplateName="Datatable.renderBoolean_"), e.renderNull_=r, goog.DEBUG&&(r.soyTemplateName="Datatable.renderNull_"), e.renderNumber_=u, goog.DEBUG&&(u.soyTemplateName="Datatable.renderNumber_"), e.renderObject_=p, goog.DEBUG&&(p.soyTemplateName="Datatable.renderObject_"), e.renderUndefined_=d, goog.DEBUG&&(d.soyTemplateName="Datatable.renderUndefined_"), e.renderString_=c, goog.DEBUG&&(c.soyTemplateName="Datatable.renderString_"), e.render.params=["data","displayColumnsType","elementClasses","tableClasses"], e.render_.params=["type","columns"], e.renderArray_.params=["value","displayColumnsType","tableClasses"], e.renderArrayOfObjects_.params=["columns","value","columnsType","displayColumnsType","tableClasses"], e.renderBoolean_.params=["value"], e.renderNull_.params=[], e.renderNumber_.params=["value"], e.renderObject_.params=["columns","value","columnsType","displayColumnsType","tableClasses"], e.renderUndefined_.params=[], e.renderString_.params=["value"], e.templates=o=e, e)});var d=function(e){function a(){return (s(this,a), n(this,e.apply(this,arguments)))}return (r(a,e), a)}(u["default"]);p["default"].register(d,o),e["default"]=o,e.Datatable=d,e.templates=o});