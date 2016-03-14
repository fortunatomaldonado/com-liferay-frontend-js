define("frontend-js-metal-web@1.0.0/metal-slider/src/Slider-min", ["exports","metal/src/metal","metal-drag-drop/src/all/drag","metal-position/src/all/position","./Slider.soy","metal-jquery-adapter/src/JQueryAdapter"], function(t,e,n,i,a,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var p=r(e),h=r(i),d=r(a),c=r(o),f=function(t){function e(n){s(this,e);var i=l(this,t.call(this,n));return (i.elements_=new Map, i)}return (u(e,t), e.prototype.attached=function(){this.drag_=new n.Drag({constrain:this.getElement_(".rail"),handles:this.getElement_(".handle"),sources:this.getElement_(".rail-handle")}),this.elementRegion_=h["default"].getRegion(this.element),this.attachDragEvents_()}, e.prototype.attachDragEvents_=function(){this.drag_.on(n.Drag.Events.DRAG,this.updateValueFromDragData_.bind(this)),this.drag_.on(n.Drag.Events.END,this.updateValueFromDragData_.bind(this))}, e.prototype.disposeInternal=function(){t.prototype.disposeInternal.call(this),this.drag_.dispose(),this.elements_=null,this.elementRegion_=null}, e.prototype.getElement_=function(t){var e=this.elements_.get(t);return (e||(e=this.element.querySelector(t),this.elements_.set(t,e)), e)}, e.prototype.onRailMouseDown_=function(t){t.target!==this.getElement_(".rail")&&t.target!==this.getElement_(".rail-active")||this.updateValue_(t.offsetX,0)}, e.prototype.syncMax=function(t){t<this.value?this.value=t:this.updateHandlePosition_()}, e.prototype.syncMin=function(t){t>this.value?this.value=t:this.updateHandlePosition_()}, e.prototype.syncValue=function(){this.updateHandlePosition_()}, e.prototype.updateHandlePosition_=function(){var t=100*(this.value-this.min)/(this.max-this.min)+"%";this.drag_&&this.drag_.isDragging()||(this.getElement_(".rail-handle").style.left=t),this.getElement_(".rail-active").style.width=t}, e.prototype.updateValue_=function(t,e){this.value=Math.round(e+t/this.elementRegion_.width*(this.max-this.min))}, e.prototype.updateValueFromDragData_=function(t){this.updateValue_(t.relativeX,this.min)}, e)}(d["default"]);f.prototype.registerMetalComponent&&f.prototype.registerMetalComponent(f,"Slider"),f.ATTRS={inputName:{validator:p["default"].isString},max:{value:100},min:{value:0},value:{validator:function(t){return p["default"].isNumber(t)&&this.min<=t&&t<=this.max},value:80}},f.ELEMENT_CLASSES="slider",t["default"]=f,c["default"].register("slider",f)});