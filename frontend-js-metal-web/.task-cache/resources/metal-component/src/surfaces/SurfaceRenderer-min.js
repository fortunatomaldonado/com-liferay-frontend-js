define("frontend-js-metal-web@1.0.4/metal-component/src/surfaces/SurfaceRenderer-min", ["exports","metal/src/metal","metal-dom/src/all/dom","metal-html/src/html","../Component","../ComponentCollector","../ComponentRenderer","../EventsCollector","./SurfaceCollector"], function(e,t,n,r,o,c,a,s,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var p=u(r),m=u(o),h=u(c),_=u(a),S=u(s),C=u(i),E=function(e){function r(n){d(this,r);var o=f(this,e.call(this,n));return (o.collectedSurfaces_=[], o.generatedIdCount_={}, o.removedSurfaces_=[], o.surfaceIds_={}, o.eventsCollector_=new S["default"](o.component_), t.core.mergeSuperClassesProperty(o.component_.constructor,"SURFACE_TAG_NAME",t.array.firstDefinedValue), o.component_.constructor.SURFACE_TAG_NAME_MERGED=o.component_.constructor.SURFACE_TAG_NAME_MERGED||"div", o.setShouldUseFacade(!0), o.addSurfacesFromStaticHint_(), o.addSurface(o.component_.id,{componentName:o.component_.getName()}), o.component_.once("attached",o.handleComponentAttachedOnce_.bind(o)), o.component_.on("detached",o.handleComponentDetached_.bind(o)), o.on("renderSurface",o.defaultRenderSurfaceFn_,!0), o)}return (l(r,e), r.prototype.addMissingAttr_=function(e,t){this.component_.getAttrConfig(e)||this.component_.addAttr(e,{},t)}, r.prototype.addSurface=function(e,t){var n=t||{},o=this.getSurfaceElementId(e,n);return (this.surfaceIds_[o]?r.surfacesCollector.updateSurface(o,n):(this.surfaceIds_[o]=!0,n.cacheState=n.cacheState||r.Cache.NOT_INITIALIZED,r.surfacesCollector.addSurface(o,n),n.componentName&&e!==this.component_.id&&this.addSubComponent(n.componentName,o)), this.cacheSurfaceRenderAttrs_(o,n.renderAttrs), this)}, r.prototype.addSurfaces=function(e){for(var t in e)this.addSurface(t,e[t]);return this}, r.prototype.addSurfacesFromStaticHint_=function(){t.core.mergeSuperClassesProperty(this.component_.constructor,"SURFACES",this.mergeObjects_),this.surfacesRenderAttrs_={};var e=this.component_.constructor.SURFACES_MERGED;for(var n in e)this.addSurface(n,t.object.mixin({},e[n]))}, r.prototype.addToRemovedSurfaces_=function(e){for(var t=0;t<e.length;t++){var n=this.getSurface(e[t]);this.removedSurfaces_.push(n),n.parent=null}}, r.prototype.buildElement=function(){var e=this.component_.id,t=this.findElementInContent_(e,this.getElementContent_(!0)||"");return (t||(t=this.findElementInContent_(e,this.getComponentHtml(""))), n.dom.removeChildren(t), n.dom.exitDocument(t), t)}, r.prototype.buildFragment_=function(e){var t=n.dom.buildFragment(e);return(-1!==e.indexOf("<script")&&n.globalEval.runScriptsInElement(t), t)}, r.prototype.buildPlaceholder=function(e,t){return (e&&t&&(t.surfaceElementId=e,this.addSurface(e,t)), "%%%%~s"+(e?"-"+e:"")+"~%%%%")}, r.prototype.cacheSurfaceContent=function(e,t){var n=this.computeSurfaceCacheState_(t),r=this.getSurfaceFromElementId(e);r.cacheState=n}, r.prototype.cacheSurfaceRenderAttrs_=function(e,t){for(var n=t||[],r=0;r<n.length;r++)this.surfacesRenderAttrs_[n[r]]||(this.surfacesRenderAttrs_[n[r]]={},this.addMissingAttr_(n[r],this.component_.getInitialConfig()[n[r]])),this.surfacesRenderAttrs_[n[r]][e]=!0}, r.prototype.checkHasElementTag_=function(e,t){return-1!==e.indexOf(' id="'+t+'"')}, r.prototype.clearSurfaceCache=function(e){this.getSurface(e).cacheState=r.Cache.NOT_INITIALIZED}, r.prototype.compareCacheStates_=function(e,t){return e!==r.Cache.NOT_INITIALIZED&&e===t}, r.prototype.computeSurfaceCacheState_=function(e){return (e=e||"", n.features.checkAttrOrderChange()&&(e=this.convertHtmlToBrowserFormat_(e)), t.string.hashCode(e))}, r.prototype.convertHtmlToBrowserFormat_=function(e){var t=document.createElement("div");return (n.dom.append(t,e), t.innerHTML)}, r.prototype.createPlaceholderSurface_=function(e,n){var r=n;t.core.isDefAndNotNull(r)||(r=this.generateSurfaceElementId(e));var o=this.getSurfaceFromElementId(r);return (o||(o={surfaceElementId:r},this.addSurface(r,o)), o)}, r.prototype.addSubComponent=function(e,t){var n=this.getSurfaceFromElementId(t).componentData||{};return (n.id=t, n.element="#"+t, this.component_.addSubComponent(e,n))}, r.prototype.createSurfaceElement_=function(e){var t=document.createElement(this.component_.constructor.SURFACE_TAG_NAME_MERGED);return (t.id=e, t)}, r.prototype.defaultRenderSurfaceFn_=function(e){var t=e.surfaceElementId,n=this.getSurfaceFromElementId(t);if(n.componentName&&t!==this.component_.id)return void this.renderComponentSurface_(t,e.content);var r=e.content||this.getSurfaceContent_(t),o=e.cacheContent||r,c=n["static"];if(!n["static"]){var a=n.cacheState;this.cacheSurfaceContent(t,o),c=this.compareCacheStates_(n.cacheState,a)}c?this.renderPlaceholderSurfaceContents_(o,t):(this.eventsCollector_.attachListenersFromHtml(o,t),this.replaceSurfaceContent_(t,n,r))}, r.prototype.disposeInternal=function(){var t=this;e.prototype.disposeInternal.call(this),this.eventsCollector_.dispose(),this.eventsCollector_=null,this.surfacesRenderAttrs_=null,Object.keys(this.surfaceIds_).forEach(function(e){return t.removeSurface(e,!0)}),this.surfaceIds_=null}, r.prototype.emitRenderSurfaceEvent_=function(e,t,n,r){this.emit("renderSurface",{cacheContent:n,content:t,renderAttrs:r||[],surfaceElementId:e,surfaceId:this.getSurfaceId(this.getSurfaceFromElementId(e))})}, r.prototype.findElementInContent_=function(e,r){r=t.core.isString(r)?n.dom.buildFragment(r):r;var o=r.childNodes[0];return o&&o.id===e?o:void 0}, r.prototype.generateSurfaceElementId=function(e){return (this.generatedIdCount_[e]=(this.generatedIdCount_[e]||0)+1, e+"-s"+this.generatedIdCount_[e])}, r.prototype.getComponentHtml=function(e){return this.wrapContentIfNecessary(e,this.component_.id,this.component_.constructor.ELEMENT_TAG_NAME_MERGED)}, r.prototype.getElementContent_=function(e){return this.getSurfaceContent(this.getSurface(this.component_.id),e)}, r.prototype.getElementExtendedContent=function(){var e=this.getElementContent_()||"";return (this.eventsCollector_.attachListenersFromHtml(e,this.component_.id), this.cacheSurfaceContent(this.component_.id,e), this.replaceSurfacePlaceholders_(e,this.component_.id,this.getSurface(this.component_.id)))}, r.prototype.getModifiedSurfacesFromChanges_=function(e){var t={};for(var n in e)for(var r=Object.keys(this.surfacesRenderAttrs_[n]||{}),o=0;o<r.length;o++)t[r[o]]||(t[r[o]]=[]),t[r[o]].push(n);return t}, r.prototype.getNonComponentSurfaceHtml=function(e,t){return this.wrapContentIfNecessary(t,e,this.component_.constructor.SURFACE_TAG_NAME_MERGED)}, r.prototype.getSurface=function(e){var t=this.getSurfaceFromElementId(this.getSurfaceElementId(e));return t?t:this.getSurfaceFromElementId(e)}, r.prototype.getSurfaceContent=function(){t.core.abstractMethod()}, r.prototype.getSurfaceContent_=function(e){var t=this.getSurfaceFromElementId(e);if(t.componentName&&e!==this.component_.id){var n=h["default"].components[e];return n.wasRendered?"":n.getRenderer().getElementExtendedContent()}return this.getSurfaceContent(t)||""}, r.prototype.getSurfaceElement=function(e,t){var n=t||this.getSurface(e);if(!n)return null;if(!n.element)if(n.componentName){var r=h["default"].components[e];r&&(n.element=r.element)}else{var o=this.getSurfaceElementId(e,n);n.element=this.component_.findElementById(o)||this.createSurfaceElement_(o)}return n.element}, r.prototype.getSurfaceElementId=function(e,t){var n=t||{};return n.surfaceElementId?n.surfaceElementId:n.componentName||this.hasComponentPrefix_(e)?e:this.prefixSurfaceId(e)}, r.prototype.getSurfaceFromElementId=function(e){return r.surfacesCollector.getSurface(e)}, r.prototype.getSurfaceHtml_=function(e,t){var n=e.surfaceElementId;if(e.componentName){var r=h["default"].components[n];return r.getRenderer().getComponentHtml(t)}return this.getNonComponentSurfaceHtml(n,t)}, r.prototype.getSurfaceId=function(e){return e.componentName||!this.hasComponentPrefix_(e.surfaceElementId)?e.surfaceElementId:e.surfaceElementId.substr(this.component_.id.length+1)}, r.prototype.getSurfaces=function(){var e={};return (Object.keys(this.surfaceIds_).forEach(function(t){var n=this.getSurfaceFromElementId(t);e[this.getSurfaceId(n)]=n}.bind(this)), e)}, r.prototype.handleComponentAttachedOnce_=function(){this.updatePlaceholderSurfaces_()}, r.prototype.handleComponentDetached_=function(){this.eventsCollector_.detachAllListeners()}, r.prototype.hasComponentPrefix_=function(e){var t=this.component_.id;return e.substr(0,t.length)===t&&(e.length===t.length||"-"===e[t.length])}, r.prototype.mergeObjects_=function(e){return t.object.mixin.apply(null,[{}].concat(e.reverse()))}, r.prototype.prefixSurfaceId=function(e){return this.component_.id+"-"+e}, r.prototype.removeSurface=function(e,t){if(!t){var n=this.getSurfaceElement(e);n&&n.parentNode&&n.parentNode.removeChild(n)}var o=this.getSurfaceElementId(e,this.getSurface(e));return (r.surfacesCollector.removeSurface(o), this.surfaceIds_[o]=!1, this)}, r.prototype.removeUnusedSurfaces_=function(){for(var e=[],t=0;t<this.removedSurfaces_.length;t++){var n=this.removedSurfaces_[t];n.parent||(this.removeSurface(n.surfaceElementId),n.componentName&&e.push(n.surfaceElementId))}this.component_.disposeSubComponents(e)}, r.prototype.render=function(e){var t=this.component_.id;if(e.decorating){var n=this.getElementExtendedContent(),r=this.computeSurfaceCacheState_(n),o=p["default"].compress(this.component_.element.outerHTML),c=this.computeSurfaceCacheState_(o);this.compareCacheStates_(c,r)||this.replaceElementContent(n)}else this.emitRenderSurfaceEvent_(t)}, r.prototype.renderComponentSurface_=function(e,t){var r=h["default"].components[e];if(r.wasRendered){var o=this.getSurfaceFromElementId(e);m["default"].componentsCollector.updateComponent(e,o.componentData)}else t&&n.dom.isEmpty(r.element)&&r.getRenderer().replaceElementContent(t),r.renderAsSubComponent()}, r.prototype.renderPlaceholderSurfaceContents_=function(e,t){var n=this;e.replace(r.SURFACE_REGEX,function(e,r){var o=n.createPlaceholderSurface_(t,r);return (n.emitRenderSurfaceEvent_(o.surfaceElementId), e)})}, r.prototype.renderSurfacesContent_=function(e){this.generatedIdCount_={},this.removedSurfaces_=[];var t=this.component_.id,n=Object.keys(e),r=n.indexOf(t);-1!==r&&(n.splice(r,1),n=[t].concat(n));for(var o=0;o<n.length;o++){var c=this.getSurfaceFromElementId(n[o]);c.handled||!c.parent&&n[o]!==t||this.emitRenderSurfaceEvent_(n[o],null,null,e[n[o]])}this.updatePlaceholderSurfaces_(),this.eventsCollector_.detachUnusedListeners(),this.removeUnusedSurfaces_()}, r.prototype.replaceElementContent=function(e){var t=this.component_.element,r=this.buildFragment_(e),o=this.findElementInContent_(this.component_.id,r);o&&(this.updateElementAttributes_(t,o),r=o.childNodes),n.dom.removeChildren(t),n.dom.append(t,r)}, r.prototype.replaceSurfaceContent_=function(e,t,r){if(r=this.replaceSurfacePlaceholders_(r,e,t),e===this.component_.id)return void this.replaceElementContent(r);var o=this.getSurfaceElement(e),c=this.buildFragment_(r),a=this.findElementInContent_(e,c);a?(t.element=a,n.dom.replace(o,t.element)):(n.dom.removeChildren(o),n.dom.append(o,c))}, r.prototype.replaceSurfacePlaceholders_=function(e,t,n){n.componentName&&t!==this.component_.id||(this.addToRemovedSurfaces_(n.children||[]),n.children=[]);var o=this;return e.replace(r.SURFACE_REGEX,function(e,r){var c=o.createPlaceholderSurface_(t,r);r=c.surfaceElementId,c.handled=!0,c.parent=t,n.children.push(r);var a=o.getSurfaceContent_(r),s=o.getSurfaceHtml_(c,a),i=o.replaceSurfacePlaceholders_(s,r,c);return (o.collectedSurfaces_.push({cacheContent:a,content:i,surface:c}), i)})}, r.prototype.update=function(e){this.renderSurfacesContent_(this.getModifiedSurfacesFromChanges_(e.changes))}, r.prototype.updateElementAttributes_=function(e,t){for(var n=t.attributes,r=0;r<n.length;r++)"id"!==n[r].name&&"class"!==n[r].name&&e.setAttribute(n[r].name,n[r].value);e.tagName!==t.tagName}, r.prototype.updatePlaceholderSurface_=function(e){var t=e.surface,r=t.surfaceElementId;t.componentName?(n.dom.replace(this.component_.findElementById(r),this.getSurfaceElement(r,t)),this.emitRenderSurfaceEvent_(r,e.content,e.cacheContent)):(t.element=null,this.cacheSurfaceContent(r,e.cacheContent),this.eventsCollector_.attachListenersFromHtml(e.cacheContent,r))}, r.prototype.updatePlaceholderSurfaces_=function(){for(var e=this.collectedSurfaces_.length-1;e>=0;e--)this.updatePlaceholderSurface_(this.collectedSurfaces_[e]),this.collectedSurfaces_[e].surface.handled=!1;this.collectedSurfaces_=[]}, r.prototype.wrapContentIfNecessary=function(e,t,n){return (this.checkHasElementTag_(e,t)||(e="<"+n+' id="'+t+'">'+e+"</"+n+">"), e)}, r)}(_["default"]);E.prototype.registerMetalComponent&&E.prototype.registerMetalComponent(E,"SurfaceRenderer"),E.Cache={NOT_INITIALIZED:-2},E.SURFACE_REGEX=/\%\%\%\%~s(?:-([^~:]+))?~\%\%\%\%/g,E.surfacesCollector=new C["default"],e["default"]=E});