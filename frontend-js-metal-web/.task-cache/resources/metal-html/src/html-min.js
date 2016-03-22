define("frontend-js-metal-web@1.0.2/metal-html/src/html-min", ["exports","metal/src/metal"], function(e,r){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(){n(this,e)}return (e.compress=function(r){var n={};return (r=e.preserveBlocks_(r,n), r=e.simplifyDoctype_(r), r=e.removeComments_(r), r=e.removeIntertagSpaces_(r), r=e.collapseBreakingSpaces_(r), r=e.removeSpacesInsideTags_(r), r=e.removeSurroundingSpaces_(r), r=e.returnBlocks_(r,n), r.trim())}, e.collapseBreakingSpaces_=function(e){return r.string.collapseBreakingSpaces(e)}, e.lookupPossibleTagBoundary_=function(e,r){var n=e.indexOf(r);return (n>-1&&(n+=e.substring(n).indexOf(">")+1), n)}, e.preserveBlocks_=function(r,n){return (r=e.preserveOuterHtml_(r,"<!--[if","<![endif]-->",n), r=e.preserveInnerHtml_(r,"<code","</code",n), r=e.preserveInnerHtml_(r,"<pre","</pre",n), r=e.preserveInnerHtml_(r,"<script","</script",n), r=e.preserveInnerHtml_(r,"<style","</style",n), r=e.preserveInnerHtml_(r,"<textarea","</textarea",n))}, e.preserveInnerHtml_=function(r,n,t,s){for(var a=e.lookupPossibleTagBoundary_(r,n);a>-1;){var o=r.indexOf(t);r=e.preserveInterval_(r,a,o,s),r=r.replace(n,"%%%~1~%%%"),r=r.replace(t,"%%%~2~%%%"),a=e.lookupPossibleTagBoundary_(r,n)}return (r=r.replace(/%%%~1~%%%/g,n), r=r.replace(/%%%~2~%%%/g,t))}, e.preserveInterval_=function(e,n,t,s){var a="%%%~BLOCK~"+r.core.getUid()+"~%%%";return (s[a]=e.substring(n,t), r.string.replaceInterval(e,n,t,a))}, e.preserveOuterHtml_=function(r,n,t,s){for(var a=r.indexOf(n);a>-1;){var o=r.indexOf(t)+t.length;r=e.preserveInterval_(r,a,o,s),a=r.indexOf(n)}return r}, e.removeComments_=function(r){var n={};return (r=e.preserveOuterHtml_(r,"<![CDATA[","]]>",n), r=e.preserveOuterHtml_(r,"<!--","-->",n), r=e.replacePreservedBlocks_(r,n,""))}, e.removeIntertagSpaces_=function(r){return (r=r.replace(e.Patterns.INTERTAG_CUSTOM_CUSTOM,"~%%%%%%~"), r=r.replace(e.Patterns.INTERTAG_CUSTOM_TAG,"~%%%<"), r=r.replace(e.Patterns.INTERTAG_TAG,"><"), r=r.replace(e.Patterns.INTERTAG_TAG_CUSTOM,">%%%~"))}, e.removeSpacesInsideTags_=function(r){return (r=r.replace(e.Patterns.TAG_END_SPACES,"$1$2"), r=r.replace(e.Patterns.TAG_QUOTE_SPACES,"=$1$2$3"))}, e.removeSurroundingSpaces_=function(r){return r.replace(e.Patterns.SURROUNDING_SPACES,"$1")}, e.replacePreservedBlocks_=function(e,r,n){for(var t in r)e=e.replace(t,n);return e}, e.simplifyDoctype_=function(r){var n={};return (r=e.preserveOuterHtml_(r,"<!DOCTYPE",">",n), r=e.replacePreservedBlocks_(r,n,"<!DOCTYPE html>"))}, e.returnBlocks_=function(e,r){for(var n in r)e=e.replace(n,r[n]);return e}, e)}();t.Patterns={INTERTAG_CUSTOM_CUSTOM:/~%%%\s+%%%~/g,INTERTAG_TAG_CUSTOM:/>\s+%%%~/g,INTERTAG_CUSTOM_TAG:/~%%%\s+</g,INTERTAG_TAG:/>\s+</g,SURROUNDING_SPACES:/\s*(<[^>]+>)\s*/g,TAG_END_SPACES:/(<(?:[^>]+?))(?:\s+?)(\/?>)/g,TAG_QUOTE_SPACES:/\s*=\s*(["']?)\s*(.*?)\s*(\1)/g},e["default"]=t});