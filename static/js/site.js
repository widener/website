/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*! formstone v1.3.1 [core.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){p.Plugins[a].initialized||(p.Plugins[a].methods._setup.call(document),p.Plugins[a].initialized=!0)}function c(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function d(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},c=["transition","-webkit-transition"],d={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},e="transitionend",f="",g="",h=document.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in h.style){e=b[a],p.support.transition=!0;break}s.transitionEnd=e+".{ns}";for(a in c)if(c.hasOwnProperty(a)&&c[a]in h.style){f=c[a];break}p.transition=f;for(a in d)if(d.hasOwnProperty(a)&&d[a]in h.style){p.support.transform=!0,g=d[a];break}p.transform=g}function e(){p.windowWidth=p.$window.width(),p.windowHeight=p.$window.height(),t=o.startTimer(t,u,f)}function f(){for(var a in p.ResizeHandlers)p.ResizeHandlers.hasOwnProperty(a)&&p.ResizeHandlers[a].callback.call(window,p.windowWidth,p.windowHeight)}function g(){if(p.support.raf){p.window.requestAnimationFrame(g);for(var a in p.RAFHandlers)p.RAFHandlers.hasOwnProperty(a)&&p.RAFHandlers[a].callback.call(window)}}function h(a,b){return parseInt(a.priority)-parseInt(b.priority)}var i,j,k,l="undefined"!=typeof window?window:this,m=l.document,n=function(){this.Version="1.3.1",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=l,this.$window=a(l),this.document=m,this.$document=a(m),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},o={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(a){}},killGesture:function(a){try{a.preventDefault()}catch(a){}},lockViewport:function(b){v[b]=!0,a.isEmptyObject(v)||w||(i.length?i.attr("content",k):i=a("head").append('<meta name="viewport" content="'+k+'">'),p.$body.on(s.gestureChange,o.killGesture).on(s.gestureStart,o.killGesture).on(s.gestureEnd,o.killGesture),w=!0)},unlockViewport:function(b){"undefined"!==a.type(v[b])&&delete v[b],a.isEmptyObject(v)&&w&&(i.length&&(j?i.attr("content",j):i.remove()),p.$body.off(s.gestureChange).off(s.gestureStart).off(s.gestureEnd),w=!1)},startTimer:function(a,b,c,d){return o.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=p.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},p=new n,q=a.Deferred(),r={base:"{ns}",element:"{ns}-element"},s={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},t=null,u=20,v=[],w=!1;return n.prototype.NoConflict=function(){p.DontConflict=!0;for(var b in p.Plugins)p.Plugins.hasOwnProperty(b)&&(a[b]=p.Conflicts[b],a.fn[b]=p.Conflicts.fn[b])},n.prototype.Plugin=function(d,e){return p.Plugins[d]=function(b,d){function e(c){var e,f,h,i="object"===a.type(c),j=this,k=a();for(c=a.extend(!0,{},d.defaults||{},i?c:{}),f=0,h=j.length;f<h;f++)if(e=j.eq(f),!g(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,o=e.data(b+"-options"),p=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},c,"object"===a.type(o)?o:{});e.addClass(d.classes.raw.element).data(n,p),d.methods._construct.apply(e,[p].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,h=k.length;f<h;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[g(e)]);return j}function f(a){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(n)}function g(a){return a.data(n)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:e.apply(this,arguments)}}function j(b){var c=d.utilities[b]||d.utilities._initialize||!1;if(c)return c.apply(window,Array.prototype.slice.call(arguments,"object"===a.type(b)?0:1))}function k(b){d.defaults=a.extend(!0,d.defaults,b||{})}function l(b){for(var c=this,d=0,e=c.length;d<e;d++){var f=c.eq(d),h=g(f)||{};"undefined"!==a.type(h.$el)&&b.apply(f,[h].concat(Array.prototype.slice.call(arguments,1)))}return c}var m="fs-"+b,n="fs"+b.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=c("classes",m,r,d.classes),d.events=c("events",b,s,d.events),d.functions=a.extend({getData:g,iterate:l},o,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:f},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:k},d.utilities),d.widget&&(p.Conflicts.fn[b]=a.fn[b],a.fn[n]=i,p.DontConflict||(a.fn[b]=a.fn[n])),p.Conflicts[b]=a[b],a[n]=d.utilities._delegate||j,p.DontConflict||(a[b]=a[n]),d.namespace=b,d.namespaceClean=n,d.guid=0,d.methods._resize&&(p.ResizeHandlers.push({namespace:b,priority:d.priority,callback:d.methods._resize}),p.ResizeHandlers.sort(h)),d.methods._raf&&(p.RAFHandlers.push({namespace:b,priority:d.priority,callback:d.methods._raf}),p.RAFHandlers.sort(h)),d}(d,e),q.then(function(){b(d)}),p.Plugins[d]},p.$window.on("resize.fs",e),e(),g(),a(function(){p.$body=a("body"),i=a('meta[name="viewport"]'),j=!!i.length&&i.attr("content"),k="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",q.resolve(),p.support.nativeMatchMedia=p.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),s.clickTouchStart=s.click+" "+s.touchStart,d(),window.Formstone=p,p});
/*! formstone v1.3.1 [mediaquery.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(l[c]=b[c]?a.merge(b[c],l[c]):l[c]);l=a.extend(l,b),l.minWidth.sort(p.sortDesc),l.maxWidth.sort(p.sortAsc),l.minHeight.sort(p.sortDesc),l.maxHeight.sort(p.sortAsc);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var e in l[d])if(l[d].hasOwnProperty(e)){var f=window.matchMedia("("+t[d]+": "+(l[d][e]===1/0?1e5:l[d][e])+l.unit+")");f.addListener(g),s[d][l[d][e]]=f}}g()}function d(a,b,c){var d=o.matchMedia(b),e=i(d.media);r[e]||(r[e]={mq:d,active:!0,enter:{},leave:{}},r[e].mq.addListener(h));for(var f in c)c.hasOwnProperty(f)&&r[e].hasOwnProperty(f)&&(r[e][f][a]=c[f]);var g=r[e],j=d.matches;j&&g[m.enter].hasOwnProperty(a)?(g[m.enter][a].apply(d),g.active=!0):!j&&g[m.leave].hasOwnProperty(a)&&(g[m.leave][a].apply(d),g.active=!1)}function e(a,b){if(a)if(b){var c=i(b);r[c]&&(r[c].enter[a]&&delete r[c].enter[a],r[c].leave[a]&&delete r[c].leave[a])}else for(var d in r)r.hasOwnProperty(d)&&(r[d].enter[a]&&delete r[d].enter[a],r[d].leave[a]&&delete r[d].leave[a])}function f(){q={unit:l.unit};for(var a in t)if(t.hasOwnProperty(a))for(var c in s[a])if(s[a].hasOwnProperty(c)){var d="Infinity"===c?1/0:parseInt(c,10),e=t[a].indexOf("width")>-1?b.fallbackWidth:b.fallbackHeight,f=a.indexOf("max")>-1;b.support.nativeMatchMedia?s[a][c].matches&&(f?(!q[a]||d<q[a])&&(q[a]=d):(!q[a]||d>q[a])&&(q[a]=d)):f?!q[a]&&d>e&&(q[a]=d):(!q[a]&&0!==q[a]||d>q[a]&&d<e)&&(q[a]=d)}}function g(){f(),n.trigger(m.mqChange,[q])}function h(a){var b=i(a.media),c=r[b],d=a.matches,e=d?m.enter:m.leave;if(c&&(c.active||!c.active&&d)){for(var f in c[e])c[e].hasOwnProperty(f)&&c[e][f].apply(c.mq);c.active=!0}}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}function j(){return q}var k=b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:d,unbind:e},events:{mqChange:"mqchange"}}),l={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},m=a.extend(k.events,{enter:"enter",leave:"leave"}),n=b.$window,o=n[0],p=k.functions,q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});
/*! formstone v1.3.1 [analytics.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){u=b.$body}function d(){r.scrollDepth&&k()}function e(){if(arguments.length&&"object"!==a.type(arguments[0]))if("destroy"===arguments[0])g.apply(this);else{var b=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":n.apply(this,b);break;case"event":m.apply(this,b)}}else f.apply(this,arguments);return null}function f(b){!x&&u&&u.length&&(x=!0,r=a.extend(r,b||{}),r.autoEvents&&u.find("a").not("["+z+"]").each(h),r.scrollDepth&&(k(),t.on(w.scroll,i).one(w.load,d)),u.on(w.click,"*["+z+"]",l))}function g(){x&&u&&u.length&&(t.off(w.namespace),u.off(w.namespace),x=!1)}function h(){var b,c=a(this),d="undefined"!==a.type(c[0].href)?c[0].href:"",e=document.domain.split(".").reverse(),f=null!==d.match(e[1]+"."+e[0]);if(d.match(/^mailto\:/i))b="Email, Click, "+d.replace(/^mailto\:/i,"");else if(d.match(/^tel\:/i))b="Telephone, Click, "+d.replace(/^tel\:/i,"");else if(d.match(r.fileTypes)){var g=/[.]/.exec(d)?/[^.]+$/.exec(d):void 0;b="File, Download:"+g[0]+", "+d.replace(/ /g,"-")}else f||(b="ExternalLink, Click, "+d);b&&c.attr(z,b)}function i(a){v.startTimer(B,250,j)}function j(){for(var c,d=t.scrollTop()+b.windowHeight,e=1/r.scrollStops,f=e,g=1;g<=r.scrollStops;g++){if(c=Math.round(100*f).toString(),!A[C][c].passed&&d>A[C][c].edge){A[C][c].passed=!0;var h=a.extend(r.scrollFields,{eventCategory:"ScrollDepth",eventAction:C,eventLabel:c,nonInteraction:!0});m(h)}f+=e}}function k(){var b,c=a.mediaquery("state"),d=u.outerHeight(),e={},f=1/r.scrollStops,g=f,h=0;c.minWidth&&(C="MinWidth:"+c.minWidth+"px");for(var i=1;i<=r.scrollStops;i++)h=parseInt(d*g),b=Math.round(100*g).toString(),e[b]={edge:"100"===b?h-10:h,passsed:!(!A[C]||!A[C][b])&&A[C][b].passed},g+=f;A[C]=e}function l(b){var c=a(this),d=c.attr("href"),e=c.data(y).split(",");r.eventCallback&&b.preventDefault();for(var f in e)e.hasOwnProperty(f)&&(e[f]=a.trim(e[f]));m({eventCategory:e[0],eventAction:e[1],eventLabel:e[2]||d,eventValue:e[3],nonInteraction:e[4]},c)}function m(b,c){var d=(s.location,a.extend({hitType:"event"},b));if("undefined"!==a.type(c)&&!c.attr("data-analytics-stop")){var e="undefined"!==a.type(c[0].href)?c[0].href:"",f=!e.match(/^mailto\:/i)&&!e.match(/^tel\:/i)&&e.indexOf(":")<0?s.location.protocol+"//"+s.location.hostname+"/"+e:e;if(""!==f){var g=c.attr("target");if(g)s.open(f,g);else if(r.eventCallback){var h="hitCallback";d[h]=function(){D&&(v.clearTimer(D),p(f))},D=v.startTimer(D,r.eventTimeout,d[h])}}}o(d)}function n(b){var c=a.extend({hitType:"pageview"},b);o(c)}function o(b){if("function"===a.type(s.ga)&&"function"===a.type(s.ga.getAll))for(var c=s.ga.getAll(),d=0,e=c.length;d<e;d++)s.ga(c[d].get("name")+".send",b)}function p(a){document.location=a}var q=b.Plugin("analytics",{methods:{_setup:c,_resize:d},utilities:{_delegate:e}}),r={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5,scrollFields:{}},s=b.window,t=b.$window,u=null,v=q.functions,w=q.events,x=!1,y="analytics-event",z="data-"+y,A={},B=null,C="Site",D=null});
/*! formstone v1.3.1 [background.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){e(),G.on("scroll",e)}function d(){E.iterate.call(I,v),E.iterate.call(J,x),E.iterate.call(J,y)}function e(){H=G.scrollTop()+b.windowHeight,H<0&&(H=0),E.iterate.call(J,y)}function f(){I=a(B.base),J=a(B.lazy),E.iterate.call(J,x)}function g(b){b.youTubeGuid=0,b.$container=a('<div class="'+C.container+'"></div>').appendTo(this),b.thisClasses=[C.base,b.customClass],b.visible=!0,b.lazy&&(b.visible=!1,b.thisClasses.push(C.lazy)),this.addClass(b.thisClasses.join(" ")),f(),b.lazy?(x(b),y(b)):i(b)}function h(a){a.$container.remove(),this.removeClass(a.thisClasses.join(" ")).off(D.namespace),f()}function i(a){if(a.visible){var b=a.source;a.source=null,j(a,b,!0)}}function j(b,c,d){if(c!==b.source&&b.visible){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}var f=!b.isYouTube&&"object"===a.type(c)&&(c.hasOwnProperty("mp4")||c.hasOwnProperty("ogg")||c.hasOwnProperty("webm"));if(b.video=b.isYouTube||f,b.playing=!1,b.isYouTube)b.playerReady=!1,b.posterLoaded=!1,n(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))m(b,c,d);else{var g=c;if("object"===a.type(c)){var h,i=[],j=[];for(h in c)c.hasOwnProperty(h)&&j.push(h);j.sort(E.sortAsc);for(h in j)j.hasOwnProperty(h)&&i.push({width:parseInt(j[h]),url:c[j[h]],mq:F.matchMedia("(min-width: "+parseInt(j[h])+"px)")});b.responsive=!0,b.sources=i,g=k(b)}l(b,g,!1,d)}}else b.$el.trigger(D.loaded)}function k(a){var c=a.source;if(a.responsive){c=a.sources[0].url;for(var d in a.sources)a.sources.hasOwnProperty(d)&&(b.support.nativeMatchMedia?a.sources[d].mq.matches&&(c=a.sources[d].url):a.sources[d].width<b.fallbackWidth&&(c=a.sources[d].url))}return c}function l(b,c,d,e){var f=[C.media,C.image,e!==!0?C.animated:""].join(" "),g=a('<div class="'+f+'" aria-hidden="true"><img alt=""></div>'),h=g.find("img"),i=c;h.one(D.load,function(){K&&g.addClass(C.native).css({backgroundImage:"url('"+i+"')"}),g.fsTransition({property:"opacity"},function(){d||o(b)}).css({opacity:1}),w(b),d&&!e||b.$el.trigger(D.loaded)}).one(D.error,b,p).attr("src",i),b.responsive&&g.addClass(C.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(D.load),b.currentSource=i}function m(c,d,e){if(c.source&&c.source.poster&&(l(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[C.media,C.video,e!==!0?C.animated:""].join(" "),g='<div class="'+f+'" aria-hidden="true">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),i=h.find("video");i.one(D.loadedMetaData,function(a){h.fsTransition({property:"opacity"},function(){o(c)}).css({opacity:1}),w(c),c.$el.trigger(D.loaded),c.autoPlay&&s(c)}),c.$container.append(h)}}function n(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="//img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,l(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),L){var g=c.guid+"_"+c.youTubeGuid++,h=[C.media,C.embed,e!==!0?C.animated:""].join(" "),i='<div class="'+h+'" aria-hidden="true">';i+='<div id="'+g+'"></div>',i+="</div>";var j=a(i),k=a.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:F.location.protocol+"//"+F.location.host},c.youtubeOptions);k.autoplay=1,c.$container.append(j),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new F.YT.Player(g,{videoId:c.videoId,playerVars:k,events:{onReady:function(a){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay||c.player.pauseVideo()},onStateChange:function(a){c.playing||a.data!==F.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===F.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,j.fsTransition({property:"opacity"},function(){o(c)}).css({opacity:1}),w(c),c.$el.trigger(D.loaded)),c.$el.find(B.embed).addClass(C.ready)},onPlaybackQualityChange:function(a){},onPlaybackRateChange:function(a){},onError:function(a){p({data:c})},onApiChange:function(a){}}}),w(c)}else M.push({data:c,source:d})}function o(a){var b=a.$container.find(B.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function p(a){var b=a.data;b.$el.trigger(D.error)}function q(a){var b=a.$container.find(B.media);b.length>=1&&b.fsTransition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function r(a){if(a.video&&a.playing){if(a.isYouTube)a.playerReady?a.player.pauseVideo():a.autoPlay=!1;else{var b=a.$container.find("video");b.length&&b[0].pause()}a.playing=!1}}function s(a){if(a.video&&!a.playing)if(a.isYouTube)a.playerReady?a.player.playVideo():a.autoPlay=!0;else{var b=a.$container.find("video");b.length&&b[0].play(),a.playing=!0}}function t(a){if(a.video)if(a.isYouTube&&a.playerReady)a.player.mute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!0)}a.mute=!0}function u(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.unMute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!1)}a.playing=!0}a.mute=!1}function v(a){if(a.visible)if(a.responsive){var b=k(a);b!==a.currentSource?l(a,b,!1,!0):w(a)}else w(a)}function w(a){for(var b=a.$container.find(B.media),c=0,d=b.length;c<d;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!K)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=z(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function x(a){a.scrollTop=a.$el.offset().top}function y(a){!a.visible&&a.scrollTop<H+a.lazyEdge&&(a.visible=!0,i(a))}function z(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var A=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_setup:c,_construct:g,_destruct:h,_resize:d,play:s,pause:r,mute:t,unmute:u,resize:w,load:j,unload:q}}),B=A.classes,C=B.raw,D=A.events,E=A.functions,F=b.window,G=b.$window,H=0,I=[],J=[],K="backgroundSize"in b.document.documentElement.style,L=!1,M=[];F.onYouTubeIframeAPIReady=function(){L=!0;for(var a in M)M.hasOwnProperty(a)&&n(M[a].data,M[a].source);M=[]}});
/*! formstone v1.3.1 [carousel.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a){T.iterate.call(U,i)}function d(){U=a(Q.base)}function e(c){var e;c.didPan=!1,c.carouselClasses=[R.base,c.theme,c.customClass,c.rtl?R.rtl:R.ltr],c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,c.customPagination="string"===a.type(c.pagination),c.id=this.attr("id"),c.id?c.ariaId=c.id:(c.ariaId=c.rawGuid,this.attr("id",c.ariaId)),b.support.transform||(c.useMargin=!0);var f="",i="",k=[R.control,R.control_previous].join(" "),l=[R.control,R.control_next].join(" ");c.controls&&!c.customControls&&(f+='<div class="'+R.controls+'" aria-label="carousel controls" aria-controls="'+c.ariaId+'">',f+='<button type="button" class="'+k+'" aria-label="'+c.labels.previous+'">'+c.labels.previous+"</button>",f+='<button type="button" class="'+l+'" aria-label="'+c.labels.next+'">'+c.labels.next+"</button>",f+="</div>"),c.pagination&&!c.customPagination&&(i+='<div class="'+R.pagination+'" aria-label="carousel pagination" aria-controls="'+c.ariaId+'" role="navigation">',i+="</div>"),c.autoHeight&&c.carouselClasses.push(R.auto_height),c.contained&&c.carouselClasses.push(R.contained),c.single&&c.carouselClasses.push(R.single),this.addClass(c.carouselClasses.join(" ")).wrapInner('<div class="'+R.wrapper+'" aria-live="polite"><div class="'+R.container+'"><div class="'+R.canister+'"></div></div></div>').append(f).wrapInner('<div class="'+R.viewport+'"></div>').append(i),c.$viewport=this.find(Q.viewport).eq(0),c.$container=this.find(Q.container).eq(0),c.$canister=this.find(Q.canister).eq(0),c.$pagination=this.find(Q.pagination).eq(0),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controls=a(c.controls.container).addClass([R.controls,R.controls_custom].join(" ")),c.$controlPrevious=a(c.controls.previous).addClass(k),c.$controlNext=a(c.controls.next).addClass(l)):(c.$controls=this.find(Q.controls).eq(0),c.$controlPrevious=c.$controls.find(Q.control_previous),c.$controlNext=c.$controls.find(Q.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.customPagination&&(c.$pagination=a(c.pagination).addClass([R.pagination])),c.$paginationItems=c.$pagination.find(Q.page),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null;var m=this.data(O+"-linked");c.linked=!!m&&"[data-"+O+'-linked="'+m+'"]',c.linked&&(c.paged=!0);var n=this.data(O+"-controller-for")||"";if(c.$subordinate=a(n),c.$subordinate.length&&(c.controller=!0),"object"===a.type(c.show)){var o=c.show,p=[],q=[];for(e in o)o.hasOwnProperty(e)&&q.push(e);q.sort(T.sortAsc);for(e in q)q.hasOwnProperty(e)&&p.push({width:parseInt(q[e]),count:o[q[e]],mq:window.matchMedia("(min-width: "+parseInt(q[e])+"px)")});c.show=p}j(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),d(),c.carouselClasses.push(R.enabled),c.carouselClasses.push(R.animated)}function f(b){T.clearTimer(b.autoTimer),T.clearTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.id!==b.ariaId&&this.removeAttr("id"),b.$controlItems.removeClass([Q.control,R.control_previous,Q.control_next,Q.visible].join(" ")).off(S.namespace),b.$images.off(S.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([R.item,R.visible,Q.item_previous,Q.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.controls&&!b.customControls&&b.$controls.remove(),b.customControls&&b.$controls.removeClass([R.controls,R.controls_custom,R.visible].join(" ")),b.pagination&&!b.customPagination&&b.$pagination.remove(),b.customPagination&&b.$pagination.html("").removeClass([R.pagination,R.visible].join(" ")),this.removeClass(b.carouselClasses.join(" ")),d()}function g(a){a.enabled&&(T.clearTimer(a.autoTimer),a.enabled=!1,a.$subordinate.off(S.update),this.removeClass([R.enabled,R.animated].join(" ")).off(S.namespace),a.$canister.fsTouch("destroy").off(S.namespace).attr("style","").css(W,"none"),a.$items.css({width:"",height:""}).removeClass([R.visible,Q.item_previous,Q.item_next].join(" ")),a.$images.off(S.namespace),a.$controlItems.off(S.namespace),a.$pagination.html("").off(S.namespace),v(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(V,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(R.enabled),a.$controlItems.on(S.click,a,s),a.$pagination.on(S.click,Q.page,a,t),a.$items.on(S.click,a,I),a.$subordinate.on(S.update,a,K),K({data:a},0),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(S.panStart,a,z).on(S.pan,a,A).on(S.panEnd,a,B).on(S.swipe,a,F).on(S.focusIn,a,J).css(W,""),j(a),a.$images.on(S.load,a,q),a.autoAdvance&&(a.autoTimer=T.startTimer(a.autoTimer,a.autoTime,function(){r(a)},!0)),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g,h,i,j,k;if(a.count=a.$items.length,a.count<1)return v(a),void a.$canister.css({height:""});for(this.removeClass(R.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=y(a),a.perPage=a.paged?1:a.visible,a.itemMarginLeft=parseInt(a.$items.eq(0).css("marginLeft")),a.itemMarginRight=parseInt(a.$items.eq(0).css("marginRight")),a.itemMargin=a.itemMarginLeft+a.itemMarginRight,isNaN(a.itemMargin)&&(a.itemMargin=0),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=a.single?a.containerWidth:(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.matchWidth?a.canisterWidth:1e6,height:""}),a.$items.css({width:a.matchWidth?a.itemWidth:"",height:""}).removeClass([R.visible,R.item_previous,R.item_next].join(" ")),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){for(g=a.$items.slice(c,c+a.perPage),i=0,j=0,g.length<a.perPage&&(g=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),h=a.rtl?g.eq(g.length-1):g.eq(0),k=h.position().left,e=0;e<g.length;e++)f=g.eq(e).outerWidth(!0),b=g.eq(e).outerHeight(),i+=f,b>j&&(j=b);a.pages.push({left:a.rtl?k-(a.canisterWidth-i):k,height:j,width:i,$items:g}),j>a.itemHeight&&(a.itemHeight=j),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var l="";for(c=0;c<a.pageCount;c++)l+='<button type="button" class="'+R.page+'">'+(c+1)+"</button>";a.$pagination.html(l),a.pageCount<=1?v(a):w(a),a.$paginationItems=a.$pagination.find(Q.page),u(a,a.index,!1),setTimeout(function(){a.$el.addClass(R.animated)},5)}}function j(a){a.$items=a.$canister.children().not(":hidden").addClass(R.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function k(a){a.enabled&&l.call(this,a,!1)}function l(a,b){a.$images.off(S.namespace),b!==!1&&a.$canister.html(b),a.index=0,j(a),i.call(this,a)}function m(a,b,c,d,e){a.enabled&&(T.clearTimer(a.autoTimer),"undefined"==typeof e&&(e=!0),u(a,b-1,e,c,d))}function n(a){var b=a.index-1;a.infinite&&b<0&&(b=a.pageCount-1),u(a,b)}function o(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),u(a,b)}function p(a,b,c,d,e){if(a.enabled){T.clearTimer(a.autoTimer);var f=a.$items.eq(b-1);"undefined"==typeof e&&(e=!0);for(var g=0;g<a.pageCount;g++)if(a.pages[g].$items.is(f)){u(a,g,e,c,d);break}}}function q(a){var b=a.data;b.resizeTimer=T.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function r(a){var b=a.index+1;b>=a.pageCount&&(b=0),u(a,b)}function s(b){T.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(R.control_next)?1:-1);T.clearTimer(c.autoTimer),u(c,d)}function t(b){T.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));T.clearTimer(c.autoTimer),u(c,d)}function u(b,c,d,e,f){if(c<0&&(c=b.infinite?b.pageCount-1:0),c>=b.pageCount&&(c=b.infinite?0:b.pageCount-1),!(b.count<1)){b.pages[c]&&(b.leftPosition=-b.pages[c].left),b.leftPosition=L(b,b.leftPosition),b.useMargin?b.$canister.css({marginLeft:b.leftPosition}):d===!1?(b.$canister.css(W,"none").css(V,"translateX("+b.leftPosition+"px)"),setTimeout(function(){b.$canister.css(W,"")},5)):b.$canister.css(V,"translateX("+b.leftPosition+"px)"),b.$items.removeClass([R.visible,R.item_previous,R.item_next].join(" "));for(var g=0,h=b.pages.length;g<h;g++)g===c?b.pages[g].$items.addClass(R.visible).attr("aria-hidden","false"):b.pages[g].$items.not(b.pages[c].$items).addClass(g<c?R.item_previous:R.item_next).attr("aria-hidden","true");b.autoHeight&&b.$canister.css({height:b.pages[c].height}),d!==!1&&e!==!0&&c!==b.index&&(b.infinite||c>-1&&c<b.pageCount)&&b.$el.trigger(S.update,[c]),b.index=c,b.linked&&f!==!0&&a(b.linked).not(b.$el)[P]("jumpPage",b.index+1,!0,!0),x(b)}}function v(a){a.$controls.removeClass(R.visible),a.$controlItems.removeClass(R.visible),a.$pagination.removeClass(R.visible)}function w(a){a.$controls.addClass(R.visible),a.$controlItems.addClass(R.visible),a.$pagination.addClass(R.visible)}function x(a){a.$paginationItems.removeClass(R.active).eq(a.index).addClass(R.active),a.infinite?a.$controlItems.addClass(R.visible):a.pageCount<1?a.$controlItems.removeClass(R.visible):(a.$controlItems.addClass(R.visible),a.index<=0?a.$controlPrevious.removeClass(R.visible):(a.index>=a.pageCount-1||!a.single&&a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(R.visible))}function y(c){var d=1;if(c.single)return d;if("array"===a.type(c.show))for(var e in c.show)c.show.hasOwnProperty(e)&&(b.support.nativeMatchMedia?c.show[e].mq.matches&&(d=c.show[e].count):c.show[e].width<b.fallbackWidth&&(d=c.show[e].count));else d=c.show;return c.fill&&c.count<d?c.count:d}function z(b,c){var d=b.data;if(T.clearTimer(d.autoTimer),!d.single){if(d.useMargin)d.leftPosition=parseInt(d.$canister.css("marginLeft"));else{var e=d.$canister.css(V).split(",");d.leftPosition=parseInt(e[4])}if(d.$canister.css(W,"none"),A(b),d.linked&&c!==!0){var f=b.deltaX/d.pageWidth;d.rtl&&(f*=-1),a(d.linked).not(d.$el)[P]("panStart",f)}}d.isTouching=!0}function A(b,c){var d=b.data;if(!d.single&&(d.touchLeft=L(d,d.leftPosition+b.deltaX),d.useMargin?d.$canister.css({marginLeft:d.touchLeft}):d.$canister.css(V,"translateX("+d.touchLeft+"px)"),d.linked&&c!==!0)){var e=b.deltaX/d.pageWidth;d.rtl&&(e*=-1),a(d.linked).not(d.$el)[P]("pan",e)}}function B(b,c){var d=b.data,e=Math.abs(b.deltaX),f=M(d,b),g=!1;if(d.didPan=!1,!d.single){var h,i,j=Math.abs(d.touchLeft),k=!1,l=d.rtl?"right":"left";if(b.directionX===l)for(h=0,i=d.pages.length;h<i;h++)k=d.pages[h],j>Math.abs(k.left)+20&&(g=h+1);else for(h=d.pages.length-1,i=0;h>=i;h--)k=d.pages[h],j<Math.abs(k.left)&&(g=h-1)}g===!1&&(g=e<50?d.index:d.index+f),g!==d.index&&(d.didPan=!0),d.linked&&c!==!0&&a(d.linked).not(d.$el)[P]("panEnd",g),H(d,g)}function C(a,b){if(T.clearTimer(a.autoTimer),!a.single){if(a.rtl&&(b*=-1),a.useMargin)a.leftPosition=parseInt(a.$canister.css("marginLeft"));else{var c=a.$canister.css(V).split(",");a.leftPosition=parseInt(c[4])}a.$canister.css(W,"none");var d={data:a,deltaX:a.pageWidth*b};A(d,!0)}a.isTouching=!0}function D(a,b){if(!a.single){a.rtl&&(b*=-1);var c=a.pageWidth*b;a.touchLeft=L(a,a.leftPosition+c),a.useMargin?a.$canister.css({marginLeft:a.touchLeft}):a.$canister.css(V,"translateX("+a.touchLeft+"px)")}}function E(a,b){H(a,b,!0)}function F(b,c){var d=b.data,e=M(d,b),f=d.index+e;d.linked&&c!==!0&&a(d.linked).not(d.$el)[P]("swipe",b.directionX),H(d,f)}function G(a,b){var c={data:a,directionX:b};F(c,!0)}function H(a,b){a.$canister.css(W,""),u(a,b),a.isTouching=!1}function I(b){var c=b.data,d=a(b.currentTarget);if(!c.didPan&&(d.trigger(S.itemClick),c.controller)){var e=c.$items.index(d);K(b,e),c.$subordinate[P]("jumpPage",e+1,!0)}}function J(b){var c=b.data;if(c.enabled){T.clearTimer(c.autoTimer),c.$container.scrollLeft(0);var d,e=a(b.target);e.hasClass(R.item)?d=e:e.parents(Q.item).length&&(d=e.parents(Q.item).eq(0));for(var f=0;f<c.pageCount;f++)if(c.pages[f].$items.is(d)){u(c,f);break}}}function K(a,b){var c=a.data;if(c.controller){var d=c.$items.eq(b);c.$items.removeClass(R.active),d.addClass(R.active);for(var e=0;e<c.pageCount;e++)if(c.pages[e].$items.is(d)){u(c,e,!0,!0);break}}}function L(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),b<0&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function M(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var N=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:m,previous:n,next:o,jumpPage:m,previousPage:n,nextPage:o,jumpItem:p,reset:k,resize:i,update:l,panStart:C,pan:D,panEnd:E,swipe:G}}),O=N.namespace,P=N.namespaceClean,Q=N.classes,R=Q.raw,S=N.events,T=N.functions,U=[],V=b.transform,W=b.transition});
/*! formstone v1.3.1 [checkbox.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=[p.base,b.theme,b.customClass].join(" "),f="";b.radio="radio"===this.attr("type"),b.group=this.attr("name"),f+='<div class="'+p.marker+'" aria-hidden="true">',f+='<div class="'+p.flag+'"></div>',b.toggle&&(e+=" "+p.toggle,f+='<span class="'+[p.state,p.state_on].join(" ")+'">'+b.labels.on+"</span>",f+='<span class="'+[p.state,p.state_off].join(" ")+'">'+b.labels.off+"</span>"),b.radio&&(e+=" "+p.radio),f+="</div>",b.$placeholder=a('<span class="'+p.element_placeholder+'"></span>'),this.before(b.$placeholder),d.length?d.addClass(p.label).wrap('<div class="'+e+'"></div>').before(f):this.before('<div class=" '+e+'">'+f+"</div>"),b.$checkbox=d.length?d.parents(o.base):this.prev(o.base),b.$marker=b.$checkbox.find(o.marker),b.$states=b.$checkbox.find(o.state),b.$label=d,this.is(":checked")&&b.$checkbox.addClass(p.checked),this.is(":disabled")&&b.$checkbox.addClass(p.disabled),this.appendTo(b.$marker),this.on(q.focus,b,l).on(q.blur,b,m).on(q.change,b,i).on(q.click,b,h).on(q.deselect,b,k),b.$checkbox.on(q.click,b,h)}function d(a){a.$checkbox.off(q.namespace),a.$marker.remove(),a.$states.remove(),a.$label.unwrap().removeClass(p.label),a.$placeholder.before(this),a.$placeholder.remove(),this.off(q.namespace)}function e(a){this.prop("disabled",!1),a.$checkbox.removeClass(p.disabled)}function f(a){this.prop("disabled",!0),a.$checkbox.addClass(p.disabled)}function g(a){var b=a.$el.is(":disabled"),c=a.$el.is(":checked");b||(c?j({data:a}):k({data:a}))}function h(b){b.stopPropagation();var c=b.data;a(b.target).is(c.$el)||(b.preventDefault(),c.$el.trigger("click"))}function i(a){var b=a.data,c=b.$el.is(":disabled"),d=b.$el.is(":checked");c||(b.radio?d&&j(a):d?j(a):k(a))}function j(b){b.data.radio&&a('input[name="'+b.data.group+'"]').not(b.data.$el).trigger("deselect"),b.data.$el.trigger(q.focus),b.data.$checkbox.addClass(p.checked)}function k(a){a.data.$el.trigger(q.focus),a.data.$checkbox.removeClass(p.checked)}function l(a){a.data.$checkbox.addClass(p.focus)}function m(a){a.data.$checkbox.removeClass(p.focus)}var n=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"},theme:"fs-light"},classes:["element_placeholder","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:c,_destruct:d,enable:e,disable:f,update:g},events:{deselect:"deselect"}}),o=n.classes,p=o.raw,q=n.events;n.functions});
/*! formstone v1.3.1 [cookie.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b,c,h){if("object"===a.type(b))g=a.extend(g,b);else if(h=a.extend({},g,h||{}),"undefined"!==a.type(b)){if("undefined"===a.type(c))return e(b);null===c?f(b,h):d(b,c,h)}return null}function d(b,c,d){var e=!1,f=new Date;d.expires&&"number"===a.type(d.expires)&&(f.setTime(f.getTime()+d.expires),e=f.toGMTString());var g=d.domain?"; domain="+d.domain:"",i=e?"; expires="+e:"",j=e?"; max-age="+d.expires/1e3:"",k=d.path?"; path="+d.path:"",l=d.secure?"; secure":"";h.cookie=b+"="+c+i+j+g+k+l}function e(a){for(var b=a+"=",c=h.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function f(b,c){d(b,"",a.extend({},c,{expires:-6048e5})),console.log(h.cookie)}var g=(b.Plugin("cookie",{utilities:{_delegate:c}}),{domain:null,expires:6048e5,path:null,secure:null}),h=b.document});
/*! formstone v1.3.1 [dropdown.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){G=b.$body}function d(b){b.multiple=this.prop("multiple"),b.disabled=this.prop("disabled")||this.is("[readonly]"),b.lastIndex=!1,b.multiple?b.links=!1:b.external&&(b.links=!0);var c=this.find("[selected]").not(":disabled"),d=this.find(":selected").not(":disabled"),e=d.text(),f=this.find("option").index(d);b.multiple||""===b.label||c.length?b.label="":(d=this.prepend('<option value="" class="'+B.item_placeholder+'" selected>'+b.label+"</option>"),e=b.label,f=0);var g=this.find("option, optgroup"),h=g.filter("option"),k=a("[for="+this.attr("id")+"]");b.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,k.length&&(k[0].tabIndex=-1);var l=[B.base,b.theme,b.customClass];b.mobile?l.push(B.mobile):b.cover&&l.push(B.cover),b.multiple&&l.push(B.multiple),b.disabled&&l.push(B.disabled),b.id=this.attr("id"),b.id?b.ariaId=b.id:b.ariaId=b.rawGuid,b.ariaId+="-dropdown",b.selectedAriaId=b.ariaId+"-selected";var m="",n="";m+='<div class="'+l.join(" ")+'"id="'+b.ariaId+'" tabindex="'+b.tabIndex+'" role="listbox"',m+=b.multiple?' aria-label="multi select"':' aria-haspopup="true" aria-live="polite" aria-labeledby="'+b.selectedAriaId+'"',m+="></div>",b.multiple||(n+='<button type="button" class="'+B.selected+'" id="'+b.selectedAriaId+'" tabindex="-1">',n+=a("<span></span>").text(y(e,b.trim)).html(),n+="</button>"),n+='<div class="'+B.options+'">',n+="</div>",this.wrap(m).after(n),b.$dropdown=this.parent(A.base),b.$label=k,b.$allOptions=g,b.$options=h,b.$selected=b.$dropdown.find(A.selected),b.$wrapper=b.$dropdown.find(A.options),b.$placeholder=b.$dropdown.find(A.placeholder),b.index=-1,b.closed=!0,b.focused=!1,i(b),b.multiple||u(f,b),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar({theme:b.theme}).find(".fs-scrollbar-content").attr("tabindex",null),b.$dropdown.on(C.click,b,j),b.$selected.on(C.click,b,j),b.$dropdown.on(C.click,A.item,b,p).on(C.close,b,o),this.on(C.change,b,q),b.mobile||(this.on(C.focusIn,b,function(a){a.data.$dropdown.trigger(C.raw.focus)}),b.$dropdown.on(C.focusIn,b,r).on(C.focusOut,b,s))}function e(b){b.$dropdown.hasClass(B.open)&&b.$selected.trigger(C.click),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar("destroy"),b.$el[0].tabIndex=b.tabIndex,b.$label.length&&(b.$label[0].tabIndex=b.tabIndex),b.$dropdown.off(C.namespace),b.$options.off(C.namespace),b.$placeholder.remove(),b.$selected.remove(),b.$wrapper.remove(),b.$el.off(C.namespace).show().unwrap()}function f(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(B.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(B.open)&&a.$selected.trigger(C.click),a.$dropdown.addClass(B.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(B.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(B.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function h(b){void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar("destroy");var c=b.index;b.$allOptions=b.$el.find("option, optgroup"),b.$options=b.$allOptions.filter("option"),b.index=-1,c=b.$options.index(b.$options.filter(":selected")),i(b),b.multiple||u(c,b),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar({theme:b.theme}).find(".fs-scrollbar-content").attr("tabindex",null)}function i(b){for(var c="",d=0,e=0,f=b.$allOptions.length;e<f;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(B.group),g.prop("disabled")&&h.push(B.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val(),j=g.data("label"),k=b.links?"a":'button type="button"';g.attr("value")||g.attr("value",i),h.push(B.item),g.hasClass(B.item_placeholder)&&(h.push(B.item_placeholder),k="span"),g.prop("selected")&&h.push(B.item_selected),g.prop("disabled")&&h.push(B.item_disabled),c+="<"+k+' class="'+h.join(" ")+'"',b.links?"span"===k?c+=' aria-hidden="true"':(c+=' href="'+i+'"',b.external&&(c+=' target="_blank"')):c+=' data-value="'+i+'"',c+=' role="option"',g.prop("selected")&&(c+=' "aria-selected"="true"'),c+=">",c+=j?j:D.decodeEntities(y(g.text(),b.trim)),c+="</"+k+">",d++}}b.$items=b.$wrapper.html(a.parseHTML(c)).find(A.item)}function j(a){D.killEvent(a);var b=a.data;b.disabled||b.mobile||(b.closed?l(b):m(b)),k(b)}function k(b){a(A.base).not(b.$dropdown).trigger(C.close,[b])}function l(a){if(a.closed){var b=F.height(),c=a.$wrapper.outerHeight(!0),d=a.$dropdown[0].getBoundingClientRect();d.bottom+c>b-a.bottomEdge&&a.$dropdown.addClass(B.bottom),G.on(C.click+a.dotGuid,":not("+A.options+")",a,n),a.$dropdown.trigger(C.focusIn),a.$dropdown.addClass(B.open),v(a),a.closed=!1}}function m(a){a&&!a.closed&&(G.off(C.click+a.dotGuid),a.$dropdown.removeClass([B.open,B.bottom].join(" ")),a.closed=!0)}function n(b){D.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(A.base).length&&(m(c),c.$dropdown.trigger(C.focusOut))}function o(a){var b=a.data;b&&(m(b),b.$dropdown.trigger(C.focusOut))}function p(b){var c=a(this),d=b.data;if(D.killEvent(b),!d.disabled){var e=d.$items.index(c);d.focusIndex=e,d.$wrapper.is(":visible")&&(u(e,d,b.shiftKey,b.metaKey||b.ctrlKey),w(d)),d.multiple||m(d),d.$dropdown.trigger(C.focus)}}function q(b,c){var d=(a(this),b.data);if(!c&&!d.multiple){var e=d.$options.index(d.$options.filter(":selected"));d.focusIndex=e,u(e,d),w(d,!0)}}function r(b){D.killEvent(b);var c=(a(b.currentTarget),b.data);c.disabled||c.multiple||c.focused||(k(c),c.focused=!0,c.focusIndex=c.index,c.input="",c.$dropdown.addClass(B.focus).on(C.keyDown+c.dotGuid,c,t))}function s(b){D.killEvent(b);var c=(a(b.currentTarget),b.data);c.focused&&c.closed&&(c.focused=!1,c.$dropdown.removeClass(B.focus).off(C.keyDown+c.dotGuid),c.multiple||(m(c),c.index!==c.focusIndex&&(w(c),c.focusIndex=c.index)))}function t(c){var d=c.data;if(d.keyTimer=D.startTimer(d.keyTimer,1e3,function(){d.input=""}),13===c.keyCode)d.closed||(m(d),u(d.index,d)),w(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){D.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,f<0&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(d.input+=i,h=d.index+1;h<=e;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}if(f<0||f===d.index)for(h=0;h<=e;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}}f>=0&&(u(f,d),v(d))}}function u(a,b,c,d){var e=b.$items.eq(a),f=b.$options.eq(a),g=e.hasClass(B.item_selected),h=e.hasClass(B.item_disabled);if(!h)if(b.multiple)if(b.mobile)g?(f.prop("selected",null).attr("aria-selected",null),e.removeClass(B.item_selected)):(f.prop("selected",!0).attr("aria-selected",!0),e.addClass(B.item_selected));else if(c&&b.lastIndex!==!1){var i=b.lastIndex>a?a:b.lastIndex,j=(b.lastIndex>a?b.lastIndex:a)+1;b.$options.prop("selected",null).attr("aria-selected",null),b.$items.filter(A.item_selected).removeClass(B.item_selected),b.$options.slice(i,j).not("[disabled]").prop("selected",!0),b.$items.slice(i,j).not(A.item_disabled).addClass(B.item_selected)}else d?(g?(f.prop("selected",null).attr("aria-selected",null),e.removeClass(B.item_selected)):(f.prop("selected",!0).attr("aria-selected",!0),e.addClass(B.item_selected)),b.lastIndex=a):(b.$options.prop("selected",null).attr("aria-selected",null),b.$items.filter(A.item_selected).removeClass(B.item_selected),f.prop("selected",!0).attr("aria-selected",!0),e.addClass(B.item_selected),b.lastIndex=a);else if(a>-1&&a<b.$items.length){if(a!==b.index){var k=f.data("label")||e.html();b.$selected.html(k).removeClass(A.item_placeholder),b.$items.filter(A.item_selected).removeClass(B.item_selected),b.$el[0].selectedIndex=a,e.addClass(B.item_selected),b.index=a}}else""!==b.label&&b.$selected.html(b.label)}function v(b){var c=b.$items.eq(b.index),d=b.index>=0&&!c.hasClass(B.item_placeholder)?c.position():{left:0,top:0},e=(b.$wrapper.outerHeight()-c.outerHeight())/2;void 0!==a.fn.fsScrollbar?b.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",b.$wrapper.find(".fs-scrollbar-content").scrollTop()+d.top):b.$wrapper.scrollTop(b.$wrapper.scrollTop()+d.top-e)}function w(a,b){a.links?x(a):b||a.$el.trigger(C.raw.change,[!0])}function x(a){var b=a.$el.val();a.external?E.open(b):E.location.href=b}function y(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}var z=b.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,theme:"fs-light",trim:0},methods:{_setup:c,_construct:d,_destruct:e,disable:f,enable:g,update:h,open:l,close:m},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),A=z.classes,B=A.raw,C=z.events,D=z.functions,E=b.window,F=b.$window,G=(b.document,null)});
/*! formstone v1.3.1 [equalize.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a){n.iterate.call(o,g)}function d(){o=a(l.element)}function e(b){b.maxWidth=b.maxWidth===1/0?"100000px":b.maxWidth,b.mq="(min-width:"+b.minWidth+") and (max-width:"+b.maxWidth+")",b.type="height"===b.property?"outerHeight":"outerWidth",b.target?a.isArray(b.target)||(b.target=[b.target]):b.target=["> *"],d(),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){i.call(b.$el,b)},leave:function(){h.call(b.$el,b)}})}function f(b){j(b),a.fsMediaquery("unbind",b.rawGuid),d()}function g(a){if(a.data&&(a=a.data),a.enabled)for(var b,c,d,e=0;e<a.target.length;e++){b=0,c=0,d=a.$el.find(a.target[e]),d.css(a.property,"");for(var f=0;f<d.length;f++)c=d.eq(f)[a.type](),c>b&&(b=c);d.css(a.property,b)}}function h(a){a.enabled&&(a.enabled=!1,j(a))}function i(a){if(!a.enabled){a.enabled=!0;var b=a.$el.find("img");b.length&&b.on(m.load,a,g),g(a)}}function j(a){for(var b=0;b<a.target.length;b++)a.$el.find(a.target[b]).css(a.property,"");a.$el.find("img").off(m.namespace)}var k=b.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:e,_destruct:f,_resize:c,resize:g}}),l=k.classes,m=(l.raw,k.events),n=k.functions,o=[]});
/*! formstone v1.3.1 [lightbox.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){$=b.$body,_=a("html, body"),aa=b.window.location.hash.replace("#","")}function d(){ca&&i()}function e(a){this.on(W.click,a,h);var b=this.data(S+"-gallery");!ba&&aa&&b===aa&&(ba=!0,this.trigger(W.click))}function f(a){j(),this.off(W.namespace)}function g(b,c){b instanceof a&&h.apply(Y,[{data:a.extend(!0,{},{$object:b},T,c||{})}])}function h(c){if(!ca){var d=c.data;ca=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},d),ca.isViewer=ca.isMobile&&d.viewer&&void 0!==typeof a.fn.fsViewer;var e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(S+"-type"):""),k="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=P(g),n="url"===i||!k&&!l&&"http"===g.substr(0,4)&&!h,p="element"===i||!k&&!l&&!n&&"#"===h.substr(0,1),q="undefined"!=typeof f;if(p&&(g=h),!(k||l||n||p||q))return void(ca=null);if(X.killEvent(c),ca.margin*=2,k?ca.type="image":l?ca.type="video":ca.type="element",k||l){var s=e.data(S+"-gallery");s&&(ca.gallery.active=!0,ca.gallery.id=s,ca.gallery.$items=a("a[data-lightbox-gallery= "+ca.gallery.id+"], a[rel= "+ca.gallery.id+"]"),ca.gallery.index=ca.gallery.$items.index(ca.$el),ca.gallery.total=ca.gallery.$items.length-1)}ca.thumbnails&&(k||l)&&ca.gallery.active||(ca.thumbnails=!1);var u="";ca.isMobile||(u+='<div class="'+[V.overlay,ca.theme,ca.customClass].join(" ")+'"></div>');var v=[V.base,V.loading,V.animating,ca.theme,ca.customClass];if(ca.fixed&&v.push(V.fixed),ca.isMobile&&v.push(V.mobile),ca.isTouch&&v.push(V.touch),n&&v.push(V.iframed),(p||q)&&v.push(V.inline),ca.thumbnails&&v.push(V.thumbnailed),u+='<div class="'+v.join(" ")+'" role="dialog" aria-label="lightbox" tabindex="-1">',u+='<button type="button" class="'+V.close+'">'+ca.labels.close+"</button>",u+='<span class="'+V.loading_icon+'"></span>',u+='<div class="'+V.container+'">',ca.gallery.active&&ca.thumbnails){u+='<div class="'+[V.thumbnails]+'">',u+='<div class="'+[V.thumbnail_container]+'">';for(var w,x,z=0,A=ca.gallery.$items.length;z<A;z++)w=ca.gallery.$items.eq(z),x=w.data("lightbox-thumbnail"),x||(x=w.find("img").attr("src")),u+='<button class="'+[V.thumbnail_item]+'">',u+='<img src="'+x+'" alt="">',u+="</button>";u+="</div></div>"}u+='<div class="'+V.content+'"></div>',(k||l)&&(u+='<div class="'+V.tools+'">',u+='<div class="'+V.controls+'">',ca.gallery.active&&(u+='<button type="button" class="'+[V.control,V.control_previous].join(" ")+'">'+ca.labels.previous+"</button>",u+='<button type="button" class="'+[V.control,V.control_next].join(" ")+'">'+ca.labels.next+"</button>"),ca.isMobile&&ca.isTouch&&(u+='<button type="button" class="'+[V.toggle,V.caption_toggle].join(" ")+'">'+ca.labels.captionClosed+"</button>",ca.gallery.active&&ca.thumbnails&&(u+='<button type="button" class="'+[V.toggle,V.thumbnail_toggle].join(" ")+'">'+ca.labels.thumbnailsClosed+"</button>")),u+="</div>",u+='<div class="'+V.meta+'">',u+='<div class="'+V.meta_content+'">',ca.gallery.active&&(u+='<p class="'+V.position+'"',ca.gallery.total<1&&(u+=' style="display: none;"'),u+=">",u+='<span class="'+V.position_current+'">'+(ca.gallery.index+1)+"</span> ",u+=ca.labels.count,u+=' <span class="'+V.position_total+'">'+(ca.gallery.total+1)+"</span>",u+="</p>"),u+='<div class="'+V.caption+'">',u+=ca.formatter.call(e,d),u+="</div></div></div>",u+="</div>"),u+="</div></div>",$.append(u),ca.$overlay=a(U.overlay),ca.$lightbox=a(U.base),ca.$close=a(U.close),ca.$container=a(U.container),ca.$content=a(U.content),ca.$tools=a(U.tools),ca.$meta=a(U.meta),ca.$metaContent=a(U.meta_content),ca.$position=a(U.position),ca.$caption=a(U.caption),ca.$controlBox=a(U.controls),ca.$controls=a(U.control),ca.$thumbnails=a(U.thumbnails),ca.$thumbnailContainer=a(U.thumbnail_container),ca.$thumbnailItems=a(U.thumbnail_item),ca.isMobile?(ca.paddingVertical=ca.$close.outerHeight(),ca.paddingHorizontal=0,ca.mobilePaddingVertical=parseInt(ca.$content.css("paddingTop"),10)+parseInt(ca.$content.css("paddingBottom"),10),ca.mobilePaddingHorizontal=parseInt(ca.$content.css("paddingLeft"),10)+parseInt(ca.$content.css("paddingRight"),10)):(ca.paddingVertical=parseInt(ca.$lightbox.css("paddingTop"),10)+parseInt(ca.$lightbox.css("paddingBottom"),10),ca.paddingHorizontal=parseInt(ca.$lightbox.css("paddingLeft"),10)+parseInt(ca.$lightbox.css("paddingRight"),10),ca.mobilePaddingVertical=0,ca.mobilePaddingHorizontal=0),ca.contentHeight=ca.$lightbox.outerHeight()-ca.paddingVertical,ca.contentWidth=ca.$lightbox.outerWidth()-ca.paddingHorizontal,ca.controlHeight=ca.$controls.outerHeight(),m(),ca.gallery.active&&(ca.$lightbox.addClass(V.has_controls),G()),Z.on(W.keyDown,H),$.on(W.click,[U.overlay,U.close].join(", "),j).on([W.focus,W.focusIn].join(" "),Q),ca.gallery.active&&ca.$lightbox.on(W.click,U.control,B),ca.thumbnails&&ca.$lightbox.on(W.click,U.thumbnail_item,C),ca.isMobile&&ca.isTouch&&ca.$lightbox.on(W.click,U.caption_toggle,o).on(W.click,U.thumbnail_toggle,r),ca.$lightbox.fsTransition({property:"opacity"},function(){k?t(g):l?y(g):n?K(g):p?I(g):q&&L(ca.$object)}).addClass(V.open),ca.$overlay.addClass(V.open)}}function i(a){"object"!=typeof a&&(ca.targetHeight=arguments[0],ca.targetWidth=arguments[1]),"element"===ca.type?M(ca.$content.find("> :first-child")):"image"===ca.type?u():"video"===ca.type&&z(),l()}function j(a){X.killEvent(a),ca&&(ca.$lightbox.fsTransition("destroy"),ca.$content.fsTransition("destroy"),ca.$lightbox.addClass(V.animating).fsTransition({property:"opacity"},function(a){"undefined"!=typeof ca.$inlineTarget&&ca.$inlineTarget.length&&J(),ca.isViewer&&ca.$imageContainer.length&&ca.$imageContainer.fsViewer("destroy"),ca.$lightbox.off(W.namespace),ca.$container.off(W.namespace),Z.off(W.keyDown),$.off(W.namespace),$.off(W.namespace),ca.$overlay.remove(),ca.$lightbox.remove(),ca.$el.focus(),ca=null,Z.trigger(W.close)}),ca.$lightbox.removeClass(V.open),ca.$overlay.removeClass(V.open),ca.isMobile&&(_.removeClass(V.lock),X.unlockViewport(S)))}function k(){var a=n();ca.isMobile?0:ca.duration;ca.isMobile?X.lockViewport(S):ca.$controls.css({marginTop:(ca.contentHeight-ca.controlHeight-ca.metaHeight+ca.thumbnailHeight)/2}),""===ca.$caption.html()?(ca.$caption.hide(),ca.$lightbox.removeClass(V.has_caption),ca.gallery.active||ca.$tools.hide()):(ca.$caption.show(),ca.$lightbox.addClass(V.has_caption)),ca.$lightbox.fsTransition({property:ca.contentHeight!==ca.oldContentHeight?"height":"width"},function(){ca.$content.fsTransition({property:"opacity"},function(){ca.$lightbox.removeClass(V.animating),ca.isAnimating=!1}),ca.$lightbox.removeClass(V.loading).addClass(V.ready),ca.visible=!0,Z.trigger(W.open),ca.gallery.active&&(A(),D(),E()),ca.$lightbox.focus()}),ca.isMobile||ca.$lightbox.css({height:ca.contentHeight+ca.paddingVertical,width:ca.contentWidth+ca.paddingHorizontal,top:ca.fixed?0:a.top});var b=ca.oldContentHeight!==ca.contentHeight||ca.oldContentWidth!==ca.contentWidth;!ca.isMobile&&b||ca.$lightbox.fsTransition("resolve"),ca.oldContentHeight=ca.contentHeight,ca.oldContentWidth=ca.contentWidth,ca.isMobile&&_.addClass(V.lock)}function l(){if(ca.visible&&!ca.isMobile){var a=n();ca.$controls.css({marginTop:(ca.contentHeight-ca.controlHeight-ca.metaHeight+ca.thumbnailHeight)/2}),ca.$lightbox.css({height:ca.contentHeight+ca.paddingVertical,width:ca.contentWidth+ca.paddingHorizontal,top:ca.fixed?0:a.top}),ca.oldContentHeight=ca.contentHeight,ca.oldContentWidth=ca.contentWidth}}function m(){var a=n();ca.$lightbox.css({top:ca.fixed?0:a.top})}function n(){if(ca.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-ca.contentWidth-ca.paddingHorizontal)/2,top:ca.top<=0?(b.windowHeight-ca.contentHeight-ca.paddingVertical)/2:ca.top};return ca.fixed!==!0&&(a.top+=Z.scrollTop()),a}function o(a){if(X.killEvent(a),ca.captionOpen)p();else{s();var b=parseInt(ca.$metaContent.outerHeight(!0));b+=parseInt(ca.$meta.css("padding-top")),b+=parseInt(ca.$meta.css("padding-bottom")),ca.$meta.css({height:b}),ca.$lightbox.addClass(V.caption_open).find(U.caption_toggle).text(ca.labels.captionOpen),ca.captionOpen=!0}}function p(){ca.$lightbox.removeClass(V.caption_open).find(U.caption_toggle).text(ca.labels.captionClosed),ca.captionOpen=!1}function q(){var a=this.attr("title"),b=!(void 0===a||!a)&&a.replace(/^\s+|\s+$/g,"");return b?'<p class="caption">'+b+"</p>":""}function r(a){X.killEvent(a),ca.thumbnailsOpen?s():(p(),ca.$lightbox.addClass(V.thumbnails_open).find(U.thumbnail_toggle).text(ca.labels.thumbnailsOpen),ca.thumbnailsOpen=!0)}function s(){ca.$lightbox.removeClass(V.thumbnails_open).find(U.thumbnail_toggle).text(ca.labels.thumbnailsClosed),ca.thumbnailsOpen=!1}function t(b){ca.isViewer?(ca.$imageContainer=a('<div class="'+V.image_container+'"><img></div>'),ca.$image=ca.$imageContainer.find("img"),ca.$image.attr("src",b).addClass(V.image),ca.$content.prepend(ca.$imageContainer),u(),ca.$imageContainer.one("loaded.viewer",function(){k()}).fsViewer({theme:ca.theme})):(ca.$imageContainer=a('<div class="'+V.image_container+'"><img></div>'),ca.$image=ca.$imageContainer.find("img"),ca.$image.one(W.load,function(){var a=O(ca.$image);ca.naturalHeight=a.naturalHeight,ca.naturalWidth=a.naturalWidth,ca.retina&&(ca.naturalHeight/=2,ca.naturalWidth/=2),ca.$content.prepend(ca.$imageContainer),u(),k()}).on(W.error,N).attr("src",b).addClass(V.image),(ca.$image[0].complete||4===ca.$image[0].readyState)&&ca.$image.trigger(W.load))}function u(){if(ca.$image){var a=0;for(ca.windowHeight=ca.viewportHeight=b.windowHeight-ca.mobilePaddingVertical-ca.paddingVertical,ca.windowWidth=ca.viewportWidth=b.windowWidth-ca.mobilePaddingHorizontal-ca.paddingHorizontal,ca.contentHeight=1/0,ca.contentWidth=1/0,ca.imageMarginTop=0,ca.imageMarginLeft=0;ca.contentHeight>ca.viewportHeight&&a<2;)ca.imageHeight=0===a?ca.naturalHeight:ca.$image.outerHeight(),ca.imageWidth=0===a?ca.naturalWidth:ca.$image.outerWidth(),ca.metaHeight=0===a?0:ca.metaHeight,ca.spacerHeight=0===a?0:ca.spacerHeight,ca.thumbnailHeight=0===a?0:ca.thumbnailHeight,0===a&&(ca.ratioHorizontal=ca.imageHeight/ca.imageWidth,ca.ratioVertical=ca.imageWidth/ca.imageHeight,ca.isWide=ca.imageWidth>ca.imageHeight),ca.imageHeight<ca.minHeight&&(ca.minHeight=ca.imageHeight),ca.imageWidth<ca.minWidth&&(ca.minWidth=ca.imageWidth),ca.isMobile?(ca.isTouch?(ca.$controlBox.css({width:b.windowWidth}),ca.spacerHeight=ca.$controls.outerHeight(!0)):(ca.$tools.css({width:b.windowWidth}),ca.spacerHeight=ca.$tools.outerHeight(!0)),ca.contentHeight=ca.viewportHeight,ca.contentWidth=ca.viewportWidth,ca.isTouch||ca.$content.css({height:ca.contentHeight-ca.spacerHeight}),ca.spacerHeight+=ca.$thumbnails.outerHeight(!0)+10,v(),ca.imageMarginTop=(ca.contentHeight-ca.targetImageHeight-ca.spacerHeight)/2,ca.imageMarginLeft=(ca.contentWidth-ca.targetImageWidth)/2):(0===a&&(ca.viewportHeight-=ca.margin+ca.paddingVertical,ca.viewportWidth-=ca.margin+ca.paddingHorizontal),ca.viewportHeight-=ca.metaHeight,ca.thumbnails&&(ca.viewportHeight-=ca.thumbnailHeight),v(),ca.contentHeight=ca.targetImageHeight,ca.contentWidth=ca.targetImageWidth),ca.isMobile||ca.isTouch||ca.$meta.css({width:ca.contentWidth}),ca.$image.css({height:ca.targetImageHeight,width:ca.targetImageWidth,marginTop:ca.imageMarginTop,marginLeft:ca.imageMarginLeft}),ca.isMobile||(ca.metaHeight=ca.$meta.outerHeight(!0),ca.contentHeight+=ca.metaHeight),ca.thumbnails&&(ca.thumbnailHeight=ca.$thumbnails.outerHeight(!0),ca.contentHeight+=ca.thumbnailHeight),a++}}function v(){var a=ca.isMobile?ca.contentHeight-ca.spacerHeight:ca.viewportHeight,b=ca.isMobile?ca.contentWidth:ca.viewportWidth;ca.isWide?(ca.targetImageWidth=b,ca.targetImageHeight=ca.targetImageWidth*ca.ratioHorizontal,ca.targetImageHeight>a&&(ca.targetImageHeight=a,ca.targetImageWidth=ca.targetImageHeight*ca.ratioVertical)):(ca.targetImageHeight=a,ca.targetImageWidth=ca.targetImageHeight*ca.ratioVertical,ca.targetImageWidth>b&&(ca.targetImageWidth=b,ca.targetImageHeight=ca.targetImageWidth*ca.ratioHorizontal)),(ca.targetImageWidth>ca.imageWidth||ca.targetImageHeight>ca.imageHeight)&&(ca.targetImageHeight=ca.imageHeight,ca.targetImageWidth=ca.imageWidth),(ca.targetImageWidth<ca.minWidth||ca.targetImageHeight<ca.minHeight)&&(ca.targetImageWidth<ca.minWidth?(ca.targetImageWidth=ca.minWidth,ca.targetImageHeight=ca.targetImageWidth*ca.ratioHorizontal):(ca.targetImageHeight=ca.minHeight,ca.targetImageWidth=ca.targetImageHeight*ca.ratioVertical))}function w(a){return"//www.youtube.com/embed/"+a[1]}function x(a){return"//player.vimeo.com/video/"+a[3]}function y(b){var c=P(b),d=b.split("?");c?(d.length>=2&&(c+="?"+d.slice(1)[0].trim()),ca.$videoWrapper=a('<div class="'+V.video_wrapper+'"></div>'),ca.$video=a('<iframe class="'+V.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),ca.$video.attr("src",c).addClass(V.video).prependTo(ca.$videoWrapper),ca.$content.prepend(ca.$videoWrapper),z(),k()):N()}function z(){ca.windowHeight=ca.viewportHeight=b.windowHeight-ca.mobilePaddingVertical-ca.paddingVertical,ca.windowWidth=ca.viewportWidth=b.windowWidth-ca.mobilePaddingHorizontal-ca.paddingHorizontal,ca.videoMarginTop=0,ca.videoMarginLeft=0,ca.isMobile?(ca.isTouch?(ca.$controlBox.css({width:b.windowWidth}),ca.spacerHeight=ca.$controls.outerHeight(!0)+10):(ca.$tools.css({width:b.windowWidth}),ca.spacerHeight=ca.$tools.outerHeight(!0),ca.spacerHeight+=ca.$thumbnails.outerHeight(!0)+10),ca.viewportHeight-=ca.spacerHeight,ca.targetVideoWidth=ca.viewportWidth,ca.targetVideoHeight=ca.targetVideoWidth*ca.videoRatio,ca.targetVideoHeight>ca.viewportHeight&&(ca.targetVideoHeight=ca.viewportHeight,ca.targetVideoWidth=ca.targetVideoHeight/ca.videoRatio),ca.videoMarginTop=(ca.viewportHeight-ca.targetVideoHeight)/2,ca.videoMarginLeft=(ca.viewportWidth-ca.targetVideoWidth)/2):(ca.viewportHeight=ca.windowHeight-ca.margin,ca.viewportWidth=ca.windowWidth-ca.margin,ca.targetVideoWidth=ca.videoWidth>ca.viewportWidth?ca.viewportWidth:ca.videoWidth,ca.targetVideoWidth<ca.minWidth&&(ca.targetVideoWidth=ca.minWidth),ca.targetVideoHeight=ca.targetVideoWidth*ca.videoRatio,ca.contentHeight=ca.targetVideoHeight,ca.contentWidth=ca.targetVideoWidth),ca.isMobile||ca.isTouch||ca.$meta.css({width:ca.contentWidth}),ca.$videoWrapper.css({height:ca.targetVideoHeight,width:ca.targetVideoWidth,marginTop:ca.videoMarginTop,marginLeft:ca.videoMarginLeft}),ca.isMobile||(ca.metaHeight=ca.$meta.outerHeight(!0),ca.contentHeight+=ca.metaHeight),ca.thumbnails&&(ca.thumbnailHeight=ca.$thumbnails.outerHeight(!0),ca.contentHeight+=ca.thumbnailHeight)}function A(b){var c="";ca.gallery.index>0&&(c=ca.gallery.$items.eq(ca.gallery.index-1).attr("href"),P(c)||a('<img src="'+c+'">')),ca.gallery.index<ca.gallery.total&&(c=ca.gallery.$items.eq(ca.gallery.index+1).attr("href"),P(c)||a('<img src="'+c+'">'))}function B(b){X.killEvent(b);var c=a(b.currentTarget);ca.isAnimating||c.hasClass(V.control_disabled)||(ca.isAnimating=!0,p(),ca.gallery.index+=c.hasClass(V.control_next)?1:-1,ca.gallery.index>ca.gallery.total&&(ca.gallery.index=ca.infinite?0:ca.gallery.total),ca.gallery.index<0&&(ca.gallery.index=ca.infinite?ca.gallery.total:0),D(),ca.$lightbox.addClass(V.animating),ca.$content.fsTransition({property:"opacity"},F),ca.$lightbox.addClass(V.loading))}function C(b){X.killEvent(b);var c=a(b.currentTarget);ca.isAnimating||c.hasClass(V.active)||(ca.isAnimating=!0,p(),ca.gallery.index=ca.$thumbnailItems.index(c),D(),ca.$lightbox.addClass(V.animating),ca.$content.fsTransition({property:"opacity"},F),ca.$lightbox.addClass(V.loading))}function D(){if(ca.thumbnails){var a=ca.$thumbnailItems.eq(ca.gallery.index);ca.$thumbnailItems.removeClass(V.active),a.addClass(V.active)}}function E(){if(ca.thumbnails){var a=ca.$thumbnailItems.eq(ca.gallery.index),b=a.position().left+a.outerWidth(!1)/2-ca.$thumbnailContainer.outerWidth(!0)/2;ca.$thumbnailContainer.stop().animate({scrollLeft:b},200,"linear")}}function F(){"undefined"!=typeof ca.$imageContainer&&(ca.isViewer&&ca.$imageContainer.fsViewer("destroy"),ca.$imageContainer.remove()),"undefined"!=typeof ca.$videoWrapper&&ca.$videoWrapper.remove(),ca.$el=ca.gallery.$items.eq(ca.gallery.index),ca.$caption.html(ca.formatter.call(ca.$el,ca)),ca.$position.find(U.position_current).html(ca.gallery.index+1);var a=ca.$el.attr("href"),b=P(a);b?(ca.type="video",y(a)):(ca.type="image",t(a)),G()}function G(){ca.$controls.removeClass(V.control_disabled),ca.infinite||(0===ca.gallery.index&&ca.$controls.filter(U.control_previous).addClass(V.control_disabled),ca.gallery.index===ca.gallery.total&&ca.$controls.filter(U.control_next).addClass(V.control_disabled))}function H(a){!ca.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&ca.$close.trigger(W.click):(X.killEvent(a),ca.$controls.filter(37===a.keyCode?U.control_previous:U.control_next).trigger(W.click))}function I(b){ca.$inlineTarget=a(b),ca.$inlineContents=ca.$inlineTarget.children().detach(),L(ca.$inlineContents)}function J(){ca.$inlineTarget.append(ca.$inlineContents.detach())}function K(b){b+=b.indexOf("?")>-1?"&"+ca.requestKey+"=true":"?"+ca.requestKey+"=true";var c=a('<iframe class="'+V.iframe+'" src="'+b+'"></iframe>');L(c)}function L(a){ca.$content.append(a),M(a),k()}function M(a){ca.windowHeight=b.windowHeight-ca.mobilePaddingVertical-ca.paddingVertical,ca.windowWidth=b.windowWidth-ca.mobilePaddingHorizontal-ca.paddingHorizontal,ca.objectHeight=a.outerHeight(!0),ca.objectWidth=a.outerWidth(!0),ca.targetHeight=ca.targetHeight||(ca.$el?ca.$el.data(S+"-height"):null),ca.targetWidth=ca.targetWidth||(ca.$el?ca.$el.data(S+"-width"):null),ca.maxHeight=ca.windowHeight<0?ca.minHeight:ca.windowHeight,ca.isIframe=a.is("iframe"),ca.objectMarginTop=0,ca.objectMarginLeft=0,ca.isMobile||(ca.windowHeight-=ca.margin,ca.windowWidth-=ca.margin),ca.contentHeight=ca.targetHeight?ca.targetHeight:ca.isIframe||ca.isMobile?ca.windowHeight:ca.objectHeight,ca.contentWidth=ca.targetWidth?ca.targetWidth:ca.isIframe||ca.isMobile?ca.windowWidth:ca.objectWidth,(ca.isIframe||ca.isObject)&&ca.isMobile?(ca.contentHeight=ca.windowHeight,ca.contentWidth=ca.windowWidth):ca.isObject&&(ca.contentHeight=ca.contentHeight>ca.windowHeight?ca.windowHeight:ca.contentHeight,ca.contentWidth=ca.contentWidth>ca.windowWidth?ca.windowWidth:ca.contentWidth),ca.isMobile||(ca.contentHeight>ca.maxHeight&&(ca.contentHeight=ca.maxHeight),ca.contentWidth>ca.maxWidth&&(ca.contentWidth=ca.maxWidth))}function N(){var b=a('<div class="'+V.error+'"><p>Error Loading Resource</p></div>');ca.type="element",ca.$tools.remove(),ca.$image.off(W.namespace),L(b),Z.trigger(W.error)}function O(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}function P(a){var b,c=ca.videoFormatter;for(var d in c)if(c.hasOwnProperty(d)&&(b=a.match(c[d].pattern),null!==b))return c[d].format.call(ca,b);return!1}function Q(b){var c=b.target;a.contains(ca.$lightbox[0],c)||c===ca.$lightbox[0]||c===ca.$overlay[0]||(X.killEvent(b),ca.$lightbox.focus())}var R=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:q,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:w},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:x}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","scaling","zooming","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:e,_destruct:f,_resize:d,resize:i},utilities:{_initialize:g,close:j}}),S=R.namespace,T=R.defaults,U=R.classes,V=U.raw,W=R.events,X=R.functions,Y=b.window,Z=b.$window,$=null,_=null,aa=!1,ba=!1,ca=null});
/*! formstone v1.3.1 [navigation.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){A=a("html, body")}function d(b){b.handleGuid=x.handle+b.guid,b.isToggle="toggle"===b.type,b.open=!1,b.isToggle&&(b.gravity="");var c=x.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.theme,b.customClass].join(" ");b.handle=this.data(v+"-handle"),b.content=this.data(v+"-content"),b.handleClasses=[x.handle,x.handle.replace(c,d),e?x.handle.replace(c,e):"",b.handleGuid,f].join(" "),b.thisClasses=[x.nav.replace(c,d),e?x.nav.replace(c,e):"",f],b.contentClasses=[x.content.replace(c,d),f].join(" "),b.contentClassesOpen=[e?x.content.replace(c,e):"",x.open].join(" "),b.$nav=this.addClass(b.thisClasses.join(" ")).attr("role","navigation"),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),s(b),b.navTabIndex=b.$nav.attr("tabindex"),b.$nav.attr("tabindex",-1),b.id=this.attr("id"),b.id?b.ariaId=b.id:(b.ariaId=b.rawGuid,this.attr("id",b.ariaId)),b.$handle.attr("data-swap-target",b.dotGuid).attr("data-swap-linked",b.handleGuid).attr("data-swap-group",x.base).attr("tabindex",0).on("activate.swap"+b.dotGuid,b,m).on("deactivate.swap"+b.dotGuid,b,n).on("enable.swap"+b.dotGuid,b,o).on("disable.swap"+b.dotGuid,b,p).on(y.focus+b.dotGuid,b,j).on(y.blur+b.dotGuid,b,k).fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:w.enabled,active:w.open,raw:{target:b.rawGuid,enabled:x.enabled,active:x.open}}}),b.$handle.is("a, button")||b.$handle.on(y.keyPress+b.dotGuid,b,l)}function e(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off(y.namespace),a.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),a.$nav.attr("tabindex",a.navTabIndex),t(a),r(a),this.removeAttr("aria-hidden").removeClass(a.thisClasses.join(" ")).off(y.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")}function f(a){a.$handle.fsSwap("activate")}function g(a){a.$handle.fsSwap("deactivate")}function h(a){a.$handle.fsSwap("enable")}function i(a){a.$handle.fsSwap("disable")}function j(a){a.data.$handle.addClass(x.focus)}function k(a){a.data.$handle.removeClass(x.focus)}function l(a){var b=a.data;13!==a.keyCode&&32!==a.keyCode||(z.killEvent(a),b.$handle.trigger(y.raw.click))}function m(a){if(!a.originalEvent){var b=a.data;b.open||(b.$el.trigger(y.open).attr("aria-hidden",!1),b.$content.addClass(b.contentClassesOpen).one(y.click,function(){g(b)}),b.$handle.attr("aria-expanded",!0),b.label&&b.$handle.html(b.labels.open),q(b),b.open=!0,b.$nav.focus())}}function n(a){if(!a.originalEvent){var b=a.data;b.open&&(b.$el.trigger(y.close).attr("aria-hidden",!0),b.$content.removeClass(b.contentClassesOpen).off(y.namespace),b.$handle.attr("aria-expanded",!1),b.label&&b.$handle.html(b.labels.closed),r(b),b.open=!1,b.$el.focus())}}function o(a){var b=a.data;b.$el.attr("aria-hidden",!0),b.$handle.attr("aria-controls",b.ariaId).attr("aria-expanded",!1),b.$content.addClass(x.enabled),setTimeout(function(){b.$animate.addClass(x.animated)},0),b.label&&b.$handle.html(b.labels.closed)}function p(a){var b=a.data;b.$el.removeAttr("aria-hidden"),b.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),b.$content.removeClass(x.enabled,x.animated),b.$animate.removeClass(x.animated),t(b),r(b)}function q(a){a.isToggle||A.addClass(x.lock)}function r(a){a.isToggle||A.removeClass(x.lock)}function s(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var b=0,c=a.$handle.length;b<c;b++)a.originalLabel[b]=a.$handle.eq(b).html()}else a.originalLabel=a.$handle.html()}function t(a){if(a.label)if(a.$handle.length>1)for(var b=0,c=a.$handle.length;b<c;b++)a.$handle.eq(b).html(a.originalLabel[b]);else a.$handle.html(a.originalLabel)}var u=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),v=u.namespace,w=u.classes,x=w.raw,y=u.events,z=u.functions,A=null});
/*! formstone v1.3.1 [pagination.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c="";c+='<button type="button" class="'+[l.control,l.control_previous].join(" ")+'">'+b.labels.previous+"</button>",c+='<button type="button" class="'+[l.control,l.control_next].join(" ")+'">'+b.labels.next+"</button>",c+='<div class="'+l.position+'" aria-hidden="true">',c+='<span class="'+l.current+'">0</span>',c+=" "+b.labels.count+" ",c+='<span class="'+l.total+'">0</span>',c+='<select class="'+l.select+'" tabindex="-1" aria-hidden="true"></select>',c+="</div>",b.thisClasses=[l.base,b.theme,b.customClass],this.addClass(b.thisClasses.join(" ")).wrapInner('<div class="'+l.pages+'" aria-label="pagination"></div>').prepend(c),b.$controls=this.find(k.control),b.$pages=this.find(k.pages),b.$items=b.$pages.children().addClass(l.page),b.$position=this.find(k.position),b.$select=this.find(k.select),b.index=-1,b.total=b.$items.length-1;var d=b.$items.index(b.$items.filter("[data-"+j.namespace+"-active]"));d||(d=b.$items.index(b.$items.filter(k.active))),b.$items.eq(0).addClass(l.first).after('<span class="'+l.ellipsis+'">&hellip;</span>').end().eq(b.total).addClass(l.last).before('<span class="'+l.ellipsis+'">&hellip;</span>'),b.$ellipsis=b.$pages.find(k.ellipsis),i(b),this.on(m.click,k.page,b,g).on(m.click,k.control,b,e).on(m.change,k.select,b,f),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){b.$el.addClass(l.mobile)},leave:function(){b.$el.removeClass(l.mobile)}}),h(b,d)}function d(b){a.fsMediaquery("unbind",b.rawGuid),b.$controls.remove(),b.$ellipsis.remove(),b.$select.remove(),b.$position.remove(),b.$items.removeClass([l.page,l.active,l.visible,l.first,l.last].join(" ")).unwrap(),this.removeClass(b.thisClasses.join(" ")).off(m.namespace)}function e(b){n.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(l.control_previous)?-1:1);d>=0&&c.$items.eq(d).trigger(m.raw.click)}function f(b){n.killEvent(b);var c=b.data,d=a(b.currentTarget),e=parseInt(d.val(),10);c.$items.eq(e).trigger(m.raw.click)}function g(b){var c=b.data,d=a(b.currentTarget),e=c.$items.index(d);c.ajax?n.killEvent(b):d[0].click(),h(c,e)}function h(a,b){if(b<0&&(b=0),b>a.total&&(b=a.total),b!==a.index){a.index=b;var c=a.index-a.visible,d=a.index+(a.visible+1);c<0&&(c=0),d>a.total&&(d=a.total),a.$items.removeClass(l.visible).removeClass(l.hidden).filter(k.active).removeClass(l.active).end().eq(a.index).addClass(l.active).end().slice(c,d).addClass(l.visible),a.$items.not(k.visible).addClass(l.hidden),a.$position.find(k.current).text(a.index+1).end().find(k.total).text(a.total+1),a.$select.val(a.index),a.$controls.removeClass(l.visible),b>0&&a.$controls.filter(k.control_previous).addClass(l.visible),b<a.total&&a.$controls.filter(k.control_next).addClass(l.visible),a.$ellipsis.removeClass(l.visible),b>a.visible+1&&a.$ellipsis.eq(0).addClass(l.visible),b<a.total-a.visible-1&&a.$ellipsis.eq(1).addClass(l.visible),a.$el.trigger(m.update,[a.index])}}function i(a){for(var b="",c=0;c<=a.total;c++)b+='<option value="'+c+'"',c===a.index&&(b+='selected="selected"'),b+=">Page "+(c+1)+"</option>";a.$select.html(b)}var j=b.Plugin("pagination",{widget:!0,defaults:{ajax:!1,customClass:"",labels:{count:"of",next:"Next",previous:"Previous"},maxWidth:"740px",theme:"fs-light",visible:2},classes:["pages","page","active","first","last","ellipsis","visible","hidden","control","control_previous","control_next","position","select","mobile","current","total"],events:{update:"update"},methods:{_construct:c,_destruct:d}}),k=j.classes,l=k.raw,m=j.events,n=j.functions});
/*! formstone v1.3.1 [scrollbar.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){r=b.$body}function d(a){w.iterate.call(x,i)}function e(){x=a(t.base)}function f(a){var b="";b+='<div class="'+u.bar+'">',b+='<div class="'+u.track+'">',b+='<button type="button" class="'+u.handle+'" aria-hidden="true" tabindex="-1"></button>',b+="</div></div>",a.paddingRight=parseInt(this.css("padding-right"),10),a.paddingBottom=parseInt(this.css("padding-bottom"),10),a.thisClasses=[u.base,a.theme,a.customClass,a.horizontal?u.horizontal:""],this.addClass(a.thisClasses.join(" ")).wrapInner('<div class="'+u.content+'" tabindex="0"></div>').prepend(b),a.$content=this.find(t.content),a.$bar=this.find(t.bar),a.$track=this.find(t.track),a.$handle=this.find(t.handle),a.trackMargin=parseInt(a.trackMargin,10),a.$content.on(v.scroll,a,j),a.mouseWheel&&a.$content.on("wheel"+v.namespace,a,l),a.$track.fsTouch({axis:a.horizontal?"x":"y",pan:!0}).on(v.panStart,a,n).on(v.pan,a,o).on(v.panEnd,a,p).on(v.click,w.killEvent).on("wheel"+v.namespace,a,k),i(a),e()}function g(a){a.$track.fsTouch("destroy"),a.$bar.remove(),a.$content.off(v.namespace).contents().unwrap(),this.removeClass(a.thisClasses.join(" ")).off(v.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")}function h(b,c,d){var e=d||b.duration,f={};if("number"!==a.type(c)){var g=a(c);if(g.length>0){var h=g.position();c=b.horizontal?h.left+b.$content.scrollLeft():h.top+b.$content.scrollTop()}else c="top"===c?0:"bottom"===c?b.horizontal?b.$content[0].scrollWidth:b.$content[0].scrollHeight:b.$content.scrollTop()}f[b.horizontal?"scrollLeft":"scrollTop"]=c,b.$content.stop().animate(f,e)}function i(a){a.$el.addClass(u.isSetup);var b={},c={},d={},e=0,f=!0;if(a.horizontal){a.barHeight=a.$content[0].offsetHeight-a.$content[0].clientHeight,a.frameWidth=a.$content.outerWidth(),a.trackWidth=a.frameWidth-2*a.trackMargin,a.scrollWidth=a.$content[0].scrollWidth,a.ratio=a.trackWidth/a.scrollWidth,a.trackRatio=a.trackWidth/a.scrollWidth,a.handleWidth=a.handleSize>0?a.handleSize:a.trackWidth*a.trackRatio,a.scrollRatio=(a.scrollWidth-a.frameWidth)/(a.trackWidth-a.handleWidth),a.handleBounds={left:0,right:a.trackWidth-a.handleWidth},a.$content.css({paddingBottom:a.barHeight+a.paddingBottom});var g=a.$content.scrollLeft();e=g*a.ratio,f=a.scrollWidth<=a.frameWidth,b={width:a.frameWidth},c={width:a.trackWidth,marginLeft:a.trackMargin,marginRight:a.trackMargin},d={width:a.handleWidth}}else{a.barWidth=a.$content[0].offsetWidth-a.$content[0].clientWidth,a.frameHeight=a.$content.outerHeight(),a.trackHeight=a.frameHeight-2*a.trackMargin,a.scrollHeight=a.$content[0].scrollHeight,a.ratio=a.trackHeight/a.scrollHeight,a.trackRatio=a.trackHeight/a.scrollHeight,a.handleHeight=a.handleSize>0?a.handleSize:a.trackHeight*a.trackRatio,a.scrollRatio=(a.scrollHeight-a.frameHeight)/(a.trackHeight-a.handleHeight),a.handleBounds={top:0,bottom:a.trackHeight-a.handleHeight};var h=a.$content.scrollTop();e=h*a.ratio,f=a.scrollHeight<=a.frameHeight,b={height:a.frameHeight},c={height:a.trackHeight,marginBottom:a.trackMargin,marginTop:a.trackMargin},d={height:a.handleHeight}}f?a.$el.removeClass(u.active):a.$el.addClass(u.active),a.$bar.css(b),a.$track.css(c),a.$handle.css(d),a.panning=!1,q(a,e),j({data:a}),a.$el.removeClass(u.setup)}function j(a){w.killEvent(a);var b=a.data,c={};if(!b.panning){if(b.horizontal){var d=b.$content.scrollLeft();d<0&&(d=0),b.handleLeft=d/b.scrollRatio,b.handleLeft>b.handleBounds.right&&(b.handleLeft=b.handleBounds.right),c={left:b.handleLeft}}else{var e=b.$content.scrollTop();e<0&&(e=0),b.handleTop=e/b.scrollRatio,b.handleTop>b.handleBounds.bottom&&(b.handleTop=b.handleBounds.bottom),c={top:b.handleTop}}b.$handle.css(c)}}function k(a){l(a,!0)}function l(a,b){var c,d,e=a.data;if(e.horizontal){var f=e.$content[0].scrollLeft,g=e.$content[0].scrollWidth,h=e.$content.outerWidth();if(c=a.originalEvent.deltaX*(b===!0?-1:1),b===!0)return e.$content.scrollLeft(f-c),m(a);if(d=c<0?"right":"left","left"===d&&c>g-h-f)return e.$content.scrollLeft(g),m(a);if("right"===d&&-c>f)return e.$content.scrollLeft(0),m(a)}else{var i=e.$content[0].scrollTop,j=e.$content[0].scrollHeight,k=e.$content.outerHeight();if(c=a.originalEvent.deltaY*(b===!0?-1:1),b===!0)return e.$content.scrollTop(i-c),m(a);if(d=c<0?"up":"down","down"===d&&c>j-k-i)return e.$content.scrollTop(j),m(a);if("up"===d&&-c>i)return e.$content.scrollTop(0),m(a)}}function m(a){return w.killEvent(a),a.returnValue=!1,!1}function n(a){var b,c=a.data,d=c.$track.offset();c.panning=!0,b=c.horizontal?c.handleLeft=a.pageX-d.left-c.handleWidth/2:c.handleTop=a.pageY-d.top-c.handleHeight/2,q(c,b)}function o(a){var b,c=a.data;b=c.horizontal?c.handleLeft+a.deltaX:c.handleTop+a.deltaY,q(c,b)}function p(a){var b=a.data;b.panning=!1,b.horizontal?b.handleLeft+=a.deltaX:b.handleTop+=a.deltaY}function q(a,b){var c={};a.horizontal?(b<a.handleBounds.left&&(b=a.handleBounds.left),b>a.handleBounds.right&&(b=a.handleBounds.right),c={left:b},a.$content.scrollLeft(Math.round(b*a.scrollRatio))):(b<a.handleBounds.top&&(b=a.handleBounds.top),b>a.handleBounds.bottom&&(b=a.handleBounds.bottom),c={top:b},a.$content.scrollTop(Math.round(b*a.scrollRatio))),a.$handle.css(c)}var r,s=b.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,mouseWheel:!0,theme:"fs-light",trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_setup:c,_construct:f,_destruct:g,_resize:d,scroll:h,resize:i}}),t=s.classes,u=t.raw,v=s.events,w=s.functions,x=(b.$window,[])});
/*! formstone v1.3.1 [swap.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},m,b.classes),b.target=this.data(l+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c=this.data(l+"-linked");b.linked=!!c&&"[data-"+l+'-linked="'+c+'"]';var d=this.data(l+"-group");b.group=!!d&&"[data-"+l+'-group="'+d+'"]',b.$swaps=a().add(this).add(b.$target),this.on(n.click+b.dotGuid,b,j)}function d(b){b.collapse||!b.group||a(b.group).filter("[data-"+l+"-active]").length||a(b.group).eq(0).attr("data-"+l+"-active","true"),b.onEnable=this.data(l+"-active")||!1,a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){h.call(b.$el,b,!0)},leave:function(){i.call(b.$el,b,!0)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(n.namespace)}function f(b,c){if(b.enabled&&!b.active){b.group&&!c&&a(b.group).not(b.$el).not(b.linked)[k.namespaceClean]("deactivate",!0);var d=b.group?a(b.group).index(b.$el):null;b.$swaps.addClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[k.namespaceClean]("activate",!0),this.trigger(n.activate,[d]),b.active=!0}}function g(b,c){b.enabled&&b.active&&(b.$swaps.removeClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[k.namespaceClean]("deactivate",!0),this.trigger(n.deactivate),b.active=!1)}function h(b,c){b.enabled||(b.enabled=!0,b.$swaps.addClass(b.classes.raw.enabled),c||a(b.linked).not(b.$el)[k.namespaceClean]("enable"),this.trigger(n.enable),b.onEnable?(b.active=!1,f.call(this,b)):(b.active=!0,g.call(this,b)))}function i(b,c){b.enabled&&(b.enabled=!1,b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")),c||a(b.linked).not(b.$el)[k.namespaceClean]("disable"),this.trigger(n.disable))}function j(a){o.killEvent(a);var b=a.data;b.active&&b.collapse?g.call(b.$el,b):f.call(b.$el,b)}var k=b.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_postConstruct:d,_destruct:e,activate:f,deactivate:g,enable:h,disable:i}}),l=k.namespace,m=k.classes,n=k.events,o=k.functions});
/*! formstone v1.3.1 [touch.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a){if(a.touches=[],a.touching=!1,this.on(q.dragStart,r.killEvent),a.swipe&&(a.pan=!0),a.scale&&(a.axis=!1),a.axisX="x"===a.axis,a.axisY="y"===a.axis,b.support.pointer){var c="";!a.axis||a.axisX&&a.axisY?c="none":(a.axisX&&(c+=" pan-y"),a.axisY&&(c+=" pan-x")),n(this,c),this.on(q.pointerDown,a,e)}else this.on(q.touchStart,a,e).on(q.mouseDown,a,f)}function d(a){this.off(q.namespace),n(this,"")}function e(a){a.preventManipulation&&a.preventManipulation();var b=a.data,c=a.originalEvent;if(c.type.match(/(up|end|cancel)$/i))return void h(a);if(c.pointerId){var d=!1;for(var e in b.touches)b.touches[e].id===c.pointerId&&(d=!0,b.touches[e].pageX=c.pageX,b.touches[e].pageY=c.pageY);d||b.touches.push({id:c.pointerId,pageX:c.pageX,pageY:c.pageY})}else b.touches=c.touches;c.type.match(/(down|start)$/i)?f(a):c.type.match(/move$/i)&&g(a)}function f(c){var d=c.data,f="undefined"!==a.type(d.touches)&&d.touches.length?d.touches[0]:null;f&&d.$el.off(q.mouseDown),d.touching||(d.startE=c.originalEvent,d.startX=f?f.pageX:c.pageX,d.startY=f?f.pageY:c.pageY,d.startT=(new Date).getTime(),d.scaleD=1,d.passed=!1),d.$links&&d.$links.off(q.click);var i=k(d.scale?q.scaleStart:q.panStart,c,d.startX,d.startY,d.scaleD,0,0,"","");if(d.scale&&d.touches&&d.touches.length>=2){var j=d.touches;d.pinch={startX:l(j[0].pageX,j[1].pageX),startY:l(j[0].pageY,j[1].pageY),startD:m(j[1].pageX-j[0].pageX,j[1].pageY-j[0].pageY)},i.pageX=d.startX=d.pinch.startX,i.pageY=d.startY=d.pinch.startY}d.touching||(d.touching=!0,d.pan&&!f&&s.on(q.mouseMove,d,g).on(q.mouseUp,d,h),b.support.pointer?s.on([q.pointerMove,q.pointerUp,q.pointerCancel].join(" "),d,e):s.on([q.touchMove,q.touchEnd,q.touchCancel].join(" "),d,e),d.$el.trigger(i))}function g(b){var c=b.data,d="undefined"!==a.type(c.touches)&&c.touches.length?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,i=f-c.startY,j=g>0?"right":"left",n=i>0?"down":"up",o=Math.abs(g)>t,p=Math.abs(i)>t;if(!c.passed&&c.axis&&(c.axisX&&p||c.axisY&&o))h(b);else{!c.passed&&(!c.axis||c.axis&&c.axisX&&o||c.axisY&&p)&&(c.passed=!0),c.passed&&(r.killEvent(b),r.killEvent(c.startE));var s=!0,u=k(c.scale?q.scale:q.pan,b,e,f,c.scaleD,g,i,j,n);if(c.scale)if(c.touches&&c.touches.length>=2){var v=c.touches;c.pinch.endX=l(v[0].pageX,v[1].pageX),c.pinch.endY=l(v[0].pageY,v[1].pageY),c.pinch.endD=m(v[1].pageX-v[0].pageX,v[1].pageY-v[0].pageY),c.scaleD=c.pinch.endD/c.pinch.startD,u.pageX=c.pinch.endX,u.pageY=c.pinch.endY,u.scale=c.scaleD,u.deltaX=c.pinch.endX-c.pinch.startX,u.deltaY=c.pinch.endY-c.pinch.startY}else c.pan||(s=!1);s&&c.$el.trigger(u)}}function h(b){var c=b.data,d="undefined"!==a.type(c.touches)&&c.touches.length?c.touches[0]:null,e=d?d.pageX:b.pageX,g=d?d.pageY:b.pageY,h=e-c.startX,j=g-c.startY,l=(new Date).getTime(),m=c.scale?q.scaleEnd:q.panEnd,n=h>0?"right":"left",o=j>0?"down":"up",p=Math.abs(h)>1,v=Math.abs(j)>1;if(c.swipe&&Math.abs(h)>t&&l-c.startT<u&&(m=q.swipe),c.axis&&(c.axisX&&v||c.axisY&&p)||p||v){c.$links=c.$el.find("a");for(var w=0,x=c.$links.length;w<x;w++)i(c.$links.eq(w),c)}var y=k(m,b,e,g,c.scaleD,h,j,n,o);s.off([q.touchMove,q.touchEnd,q.touchCancel,q.mouseMove,q.mouseUp,q.pointerMove,q.pointerUp,q.pointerCancel].join(" ")),c.$el.trigger(y),c.touches=[],c.scale,d&&(c.touchTimer=r.startTimer(c.touchTimer,5,function(){c.$el.on(q.mouseDown,c,f)})),c.touching=!1}function i(b,c){b.on(q.click,c,j);var d=a._data(b[0],"events").click;d.unshift(d.pop())}function j(a){r.killEvent(a,!0),a.data.$links.off(q.click)}function k(b,c,d,e,f,g,h,i,j){return a.Event(b,{originalEvent:c,bubbles:!0,pageX:d,pageY:e,scale:f,deltaX:g,deltaY:h,directionX:i,directionY:j})}function l(a,b){return(a+b)/2}function m(a,b){return Math.sqrt(a*a+b*b)}function n(a,b){a.css({"-ms-touch-action":b,"touch-action":b})}var o=!b.window.PointerEvent,p=b.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1},methods:{_construct:c,_destruct:d},events:{pointerDown:o?"MSPointerDown":"pointerdown",pointerUp:o?"MSPointerUp":"pointerup",pointerMove:o?"MSPointerMove":"pointermove",pointerCancel:o?"MSPointerCancel":"pointercancel"}}),q=p.events,r=p.functions,s=b.$window,t=10,u=50;q.pan="pan",q.panStart="panstart",q.panEnd="panend",q.scale="scale",q.scaleStart="scalestart",q.scaleEnd="scaleend",q.swipe="swipe"});
/*! formstone v1.3.1 [transition.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a,c){if(c){a.$target=this.find(a.target),a.$check=a.target?a.$target:this,a.callback=c,a.styles=h(a.$check),a.timer=null;var d=a.$check.css(b.transition+"-duration"),f=parseFloat(d);b.support.transition&&d&&f?this.on(k.transitionEnd,a,e):a.timer=l.startTimer(a.timer,50,function(){g(a)},!0)}}function d(a){l.clearTimer(a.timer,!0),this.off(k.namespace)}function e(b){b.stopPropagation(),b.preventDefault();var c=b.data,d=b.originalEvent,e=c.target?c.$target:c.$el;c.property&&d.propertyName!==c.property||!a(d.target).is(e)||f(c)}function f(a){a.always||a.$el[j.namespaceClean]("destroy"),a.callback.apply(a.$el)}function g(a){var b=h(a.$check);i(a.styles,b)||f(a),a.styles=b}function h(b){var c,d,e,f={};if(b instanceof a&&(b=b[0]),m.getComputedStyle){c=m.getComputedStyle(b,null);for(var g=0,h=c.length;g<h;g++)d=c[g],e=c.getPropertyValue(d),f[d]=e}else if(b.currentStyle){c=b.currentStyle;for(d in c)c[d]&&(f[d]=c[d])}return f}function i(b,c){if(a.type(b)!==a.type(c))return!1;for(var d in b){if(!b.hasOwnProperty(d))return!1;if(!b.hasOwnProperty(d)||!c.hasOwnProperty(d)||b[d]!==c[d])return!1}return!0}var j=b.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:c,_destruct:d,resolve:f}}),k=j.events,l=j.functions,m=b.window});
/*! formstone v1.3.1 [viewer.js] 2017-01-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){e(),X.on("scroll",e),Q=b.$body}function d(){W.iterate.call(Z,N)}function e(){Y=X.scrollTop()+b.windowHeight,Y<0&&(Y=0)}function f(){W.iterate.call(Z,I)}function g(){Z=a(T.base),Z.length?W.lockViewport(S):W.unlockViewport(S)}function h(b){var c,d="",e=[U.control,U.control_previous].join(" "),f=[U.control,U.control_next].join(" "),h=[U.control,U.control_zoom_in].join(" "),i=[U.control,U.control_zoom_out].join(" ");b.thisClasses=[U.base,U.loading,b.customClass,b.theme],b.images=[],b.source=!1,b.gallery=!1,b.tapTimer=null,b.action=!1,b.isRendering=!1,b.isZooming=!1,b.isAnimating=!1,b.keyDownTime=1,b.$images=this.find("img").addClass(U.source),b.index=0,b.total=b.$images.length-1,b.customControls="object"===a.type(b.controls)&&b.controls.zoom_in&&b.controls.zoom_out,b.$images.length>1&&(b.gallery=!0,b.thisClasses.push(U.gallery),!b.customControls||b.controls.previous&&b.controls.next||(b.customControls=!1));for(var j=0;j<b.$images.length;j++)c=b.$images.eq(j),b.images.push(c.attr("src"));d+='<div class="'+U.wrapper+'">',d+='<div class="'+U.loading_icon+'"></div>',d+='<div class="'+U.viewport+'"></div>',d+="</div>",b.controls&&!b.customControls&&(d+='<div class="'+U.controls+'">',d+='<button type="button" class="'+e+'">'+b.labels.previous+"</button>",d+='<button type="button" class="'+i+'">'+b.labels.zoom_out+"</button>",d+='<button type="button" class="'+h+'">'+b.labels.zoom_in+"</button>",d+='<button type="button" class="'+f+'">'+b.labels.next+"</button>",d+="</div>"),this.addClass(b.thisClasses.join(" ")).prepend(d),b.$wrapper=this.find(T.wrapper),b.$viewport=this.find(T.viewport),b.customControls?(b.$controls=a(b.controls.container).addClass([U.controls,U.controls_custom].join(" ")),b.$controlPrevious=a(b.controls.previous).addClass(e),b.$controlNext=a(b.controls.next).addClass(f),b.$controlZoomIn=a(b.controls.zoom_in).addClass(h),b.$controlZoomOut=a(b.controls.zoom_out).addClass(i)):(b.$controls=this.find(T.controls),b.$controlPrevious=this.find(T.control_previous),b.$controlNext=this.find(T.control_next),b.$controlZoomIn=this.find(T.control_zoom_in),b.$controlZoomOut=this.find(T.control_zoom_out)),b.$controlItems=b.$controlPrevious.add(b.$controlNext),b.$controlZooms=b.$controlZoomIn.add(b.$controlZoomOut),g(),b.$controlItems.on(V.click,b,L),b.$controlZooms.on([V.touchStart,V.mouseDown].join(" "),b,E).on([V.touchEnd,V.mouseUp].join(" "),b,H),k(b,b.images[b.index],!0),M(b)}function i(a){a.$wrapper.remove(),a.$image.removeClass(U.source),a.controls&&!a.customControls&&a.$controls.remove(),a.customControls&&(a.$controls.removeClass([U.controls,U.controls_custom].join(" ")),a.$controlItems.off(V.click).removeClass([U.control,U.control_previous,U.control_next].join(" ")),a.$controlZooms.off([V.touchStart,V.mouseDown].join(" ")).off([V.touchStart,V.mouseDown].join(" ")).off([V.touchEnd,V.mouseUp].join(" ")).removeClass([U.control,U.control_zoom_in,U.control_zoom_out].join(" "))),this.removeClass(a.thisClasses.join(" ")).off(V.namespace),g()}function j(a,b){a.index=0,"string"==typeof b?(a.total=0,a.images=[b],a.gallery=!1,a.$el.removeClass(U.gallery)):(a.total=b.length-1,a.images=b,b.length>1&&(a.gallery=!0,a.$el.addClass(U.gallery)),b=a.images[a.index]),K(a,function(){k(a,b)})}function k(b,c,d){b.isAnimating||(b.isAnimating=!0,b.$container=a('<div class="'+U.container+'"><img></div>'),b.$image=b.$container.find("img"),b.$viewport.append(b.$container),b.$image.one(V.load,function(){m(b),b.isAnimating=!1,b.$container.fsTransition({property:"opacity"},function(){}),b.$el.removeClass(U.loading),b.$container.fsTouch({pan:!0,scale:!0}).on(V.scaleStart,b,A).on(V.scaleEnd,b,C).on(V.scale,b,B),b.$el.trigger(V.loaded)}).one(V.error,b,l).attr("src",c).addClass(U.image),(b.$image[0].complete||4===b.$image[0].readyState)&&b.$image.trigger(V.load),b.source=c)}function l(a){var b=a.data;b.$el.trigger(V.error)}function m(a){n(a),o(a),a.containerTop=a.viewportHeight/2,a.containerLeft=a.viewportWidth/2,q(a),a.imageHeight=a.naturalHeight,a.imageWidth=a.naturalWidth,u(a),p(a),r(a),s(a),t(a);var b={containerTop:a.containerTop,containerLeft:a.containerLeft,imageHeight:a.imageHeight,imageWidth:a.imageWidth,imageTop:a.imageTop,imageLeft:a.imageLeft};z(a,b),a.isRendering=!0}function n(a){var b=P(a.$image);a.naturalHeight=b.naturalHeight,a.naturalWidth=b.naturalWidth,a.ratioHorizontal=a.naturalHeight/a.naturalWidth,a.ratioVertical=a.naturalWidth/a.naturalHeight,a.isWide=a.naturalWidth>a.naturalHeight}function o(a){a.viewportHeight=a.$viewport.outerHeight(),a.viewportWidth=a.$viewport.outerWidth()}function p(a){a.imageHeight<=a.viewportHeight?(a.containerMinTop=a.viewportHeight/2,a.containerMaxTop=a.viewportHeight/2):(a.containerMinTop=a.viewportHeight-a.imageHeight/2,a.containerMaxTop=a.imageHeight/2),a.imageWidth<=a.viewportWidth?(a.containerMinLeft=a.viewportWidth/2,a.containerMaxLeft=a.viewportWidth/2):(a.containerMinLeft=a.viewportWidth-a.imageWidth/2,a.containerMaxLeft=a.imageWidth/2)}function q(a){a.isWide?(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal,a.imageMinHeight>a.viewportHeight&&(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical)):(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical,a.imageMinWidth>a.viewportWidth&&(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal)),(a.imageMinWidth>a.naturalWidth||a.imageMinHeight>a.naturalHeight)&&(a.imageMinHeight=a.naturalHeight,a.imageMinWidth=a.naturalWidth),a.imageMaxHeight=a.naturalHeight,a.imageMaxWidth=a.naturalWidth}function r(a){a.imageTop=-(a.imageHeight/2),a.imageLeft=-(a.imageWidth/2)}function s(a){a.lastContainerTop=a.containerTop,a.lastContainerLeft=a.containerLeft,a.lastImageHeight=a.imageHeight,a.lastImageWidth=a.imageWidth,a.lastImageTop=a.imageTop,a.lastImageLeft=a.imageLeft}function t(a){a.renderContainerTop=a.lastContainerTop,a.renderContainerLeft=a.lastContainerLeft,a.renderImageTop=a.lastImageTop,a.renderImageLeft=a.lastImageLeft,a.renderImageHeight=a.lastImageHeight,a.renderImageWidth=a.lastImageWidth}function u(a){a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth}function v(a){a.imageHeight<a.imageMinHeight&&(a.imageHeight=a.imageMinHeight),a.imageHeight>a.imageMaxHeight&&(a.imageHeight=a.imageMaxHeight),a.imageWidth<a.imageMinWidth&&(a.imageWidth=a.imageMinWidth),a.imageWidth>a.imageMaxWidth&&(a.imageWidth=a.imageMaxWidth)}function w(a){a.containerTop<a.containerMinTop&&(a.containerTop=a.containerMinTop),a.containerTop>a.containerMaxTop&&(a.containerTop=a.containerMaxTop),a.containerLeft<a.containerMinLeft&&(a.containerLeft=a.containerMinLeft),a.containerLeft>a.containerMaxLeft&&(a.containerLeft=a.containerMaxLeft)}function x(a){null===a.tapTimer?a.tapTimer=W.startTimer(a.tapTimer,500,function(){y(a)}):(y(a),D(a))}function y(a){W.clearTimer(a.tapTimer),a.tapTimer=null}function z(a,c){if(b.transform){var d=c.imageWidth/a.naturalWidth,e=c.imageHeight/a.naturalHeight;a.$container.css(b.transform,"translate3d("+c.containerLeft+"px, "+c.containerTop+"px, 0)"),a.$image.css(b.transform,"translate3d(-50%, -50%, 0) scale("+d+","+e+")")}else a.$container.css({top:c.containerTop,left:c.containerLeft}),a.$image.css({height:c.imageHeight,width:c.imageWidth,top:c.imageTop,left:c.imageLeft})}function A(a){var b=a.data;x(b),s(b)}function B(a){var b=a.data;y(b),b.isRendering=!1,b.isZooming=!1;b.imageHeight>b.imageMinHeight+1;b.containerTop=b.lastContainerTop+a.deltaY,b.containerLeft=b.lastContainerLeft+a.deltaX,b.imageHeight=b.lastImageHeight*a.scale,b.imageWidth=b.lastImageWidth*a.scale,p(b),w(b),v(b),r(b);var c={containerTop:b.containerTop,containerLeft:b.containerLeft,imageHeight:b.imageHeight,imageWidth:b.imageWidth,imageTop:b.imageTop,imageLeft:b.imageLeft};z(b,c)}function C(a){var b=a.data;b.isZooming||(s(b),t(b),b.isRendering=!0)}function D(a){var b=a.imageHeight>a.imageMinHeight+1;a.isZooming=!0,s(a),t(a),b?(a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth):(a.imageHeight=a.imageMaxHeight,a.imageWidth=a.imageMaxWidth),p(a),w(a),r(a),a.isRendering=!0}function E(b){W.killEvent(b);var c=a(b.currentTarget),d=b.data,e=c.hasClass(U.control_zoom_out)?"out":"in";"out"===e?G(d):F(d)}function F(a){a.keyDownTime=1,a.action="zoom_in"}function G(a){a.keyDownTime=1,a.action="zoom_out"}function H(a){var b=a.data;b.action=!1}function I(a){if(a.isRendering){if(a.action){a.keyDownTime+=a.zoomIncrement;var b=("zoom_out"===a.action?-1:1)*Math.round(a.imageWidth*a.keyDownTime-a.imageWidth);b>a.zoomDelta&&(b=a.zoomDelta),a.isWide?(a.imageWidth+=b,a.imageHeight=Math.round(a.imageWidth/a.ratioVertical)):(a.imageHeight+=b,a.imageWidth=Math.round(a.imageHeight/a.ratioHorizontal)),v(a),r(a),p(a),w(a)}a.renderContainerTop+=Math.round((a.containerTop-a.renderContainerTop)*a.zoomEnertia),a.renderContainerLeft+=Math.round((a.containerLeft-a.renderContainerLeft)*a.zoomEnertia),a.renderImageTop+=Math.round((a.imageTop-a.renderImageTop)*a.zoomEnertia),a.renderImageLeft+=Math.round((a.imageLeft-a.renderImageLeft)*a.zoomEnertia),a.renderImageHeight+=Math.round((a.imageHeight-a.renderImageHeight)*a.zoomEnertia),a.renderImageWidth+=Math.round((a.imageWidth-a.renderImageWidth)*a.zoomEnertia);var c={containerTop:a.renderContainerTop,containerLeft:a.renderContainerLeft,imageHeight:a.renderImageHeight,imageWidth:a.renderImageWidth,imageTop:a.renderImageTop,imageLeft:a.renderImageLeft};z(a,c)}}function J(a){K(a)}function K(a,b){a.isAnimating||(y(a),a.isAnimating=!0,a.isRendering=!1,a.isZooming=!1,O(a),a.$container.fsTransition({property:"opacity"},function(){a.isAnimating=!1,a.$container.remove(),"function"==typeof b&&b.call(window,a)}),a.$el.addClass(U.loading))}function L(b){W.killEvent(b);var c=a(b.currentTarget),d=b.data,e=d.index+(c.hasClass(U.control_next)?1:-1);d.isAnimating||(e<0&&(e=0),e>d.total&&(e=d.total),e!==d.index&&(d.index=e,K(d,function(){k(d,d.images[d.index])})),M(d))}function M(a){a.$controlItems.removeClass(U.control_disabled),0===a.index&&a.$controlPrevious.addClass(U.control_disabled),a.index===a.images.length-1&&a.$controlNext.addClass(U.control_disabled)}function N(a){o(a),p(a),q(a),r(a),p(a),w(a),v(a)}function O(a){a.$container&&a.$container.length&&a.$container.fsTouch("destroy").off(V.scaleStart,A).off(V.scaleEnd,C).off(V.scale,B)}function P(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}var Q,R=b.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_setup:c,_construct:h,_destruct:i,_resize:d,_raf:f,resize:N,load:j,unload:J}}),S=R.namespace,T=R.classes,U=T.raw,V=R.events,W=R.functions,X=(b.window,b.$window),Y=0,Z=[]});
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.8 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent);
                if (svg) {
                    var src = use.getAttribute("xlink:href") || use.getAttribute("href");
                    !src && opts.attributeName && (src = use.getAttribute(opts.attributeName));
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.1.3
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = null;

	  // form input types
	  var formInputs = ['input', 'select', 'textarea'];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch'
	  };

	  // array of all used input types
	  var inputTypes = [];

	  // boolean: true if touch buffer is active
	  var isBuffering = false;

	  // boolean: true if the page is being scrolled
	  var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null
	  };

	  // map of IE 10 pointer events
	  var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'
	  };

	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    setInput();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      docElem.addEventListener('pointerdown', updateInput);
	      docElem.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      docElem.addEventListener('MSPointerDown', updateInput);
	      docElem.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      docElem.addEventListener('mousedown', updateInput);
	      docElem.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        docElem.addEventListener('touchstart', touchBuffer);
	        docElem.addEventListener('touchend', touchBuffer);
	      }
	    }

	    // mouse wheel
	    docElem.addEventListener(detectWheel(), setIntent);

	    // keyboard events
	    docElem.addEventListener('keydown', updateInput);
	  };

	  // checks conditions before updating new input
	  var updateInput = function updateInput(event) {
	    // only execute if the touch buffer timer isn't running
	    if (!isBuffering) {
	      var eventKey = event.which;
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentInput !== value || currentIntent !== value) {
	        var activeElem = document.activeElement;
	        var activeInput = false;

	        if (activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1) {
	          activeInput = true;
	        }

	        if (value === 'touch' ||
	        // ignore mouse modifier keys
	        value === 'mouse' ||
	        // don't switch if the current element is a form input
	        value === 'keyboard' && activeInput && ignoreMap.indexOf(eventKey) === -1) {
	          // set the current and catch-all variable
	          currentInput = currentIntent = value;

	          setInput();
	        }
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var setInput = function setInput() {
	    docElem.setAttribute('data-whatinput', currentInput);
	    docElem.setAttribute('data-whatintent', currentInput);

	    if (inputTypes.indexOf(currentInput) === -1) {
	      inputTypes.push(currentInput);
	      docElem.className += ' whatinput-types-' + currentInput;
	    }
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    // test to see if `mousemove` happened relative to the screen
	    // to detect scrolling versus mousemove
	    if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
	      isScrolling = false;

	      mousePos['x'] = event.screenX;
	      mousePos['y'] = event.screenY;
	    } else {
	      isScrolling = true;
	    }

	    // only execute if the touch buffer timer isn't running
	    // or scrolling isn't happening
	    if (!isBuffering && !isScrolling) {
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentIntent !== value) {
	        currentIntent = value;

	        docElem.setAttribute('data-whatintent', currentIntent);
	      }
	    }
	  };

	  // buffers touch events because they frequently also fire mouse events
	  var touchBuffer = function touchBuffer(event) {
	    if (event.type === 'touchstart') {
	      isBuffering = false;

	      // set the current input
	      updateInput(event);
	    } else {
	      isBuffering = true;
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	  var detectWheel = function detectWheel() {
	    var wheelType = void 0;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'loose'|'strict'
	    // 'strict' (default): returns the same value as the `data-whatinput` attribute
	    // 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'loose' ? currentIntent : currentInput;
	    },

	    // returns array: all the detected input types
	    types: function types() {
	      return inputTypes;
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
/*-------------------------------------------
	Site
-------------------------------------------*/

	// !IE
	var IE8 = IE8 || false,
			IE9 = IE9 || false;

	// !Site
	var Site = (function($, window) {

		// !BaseController
		var BaseController = function() {
			this.namespace = "";

			this.minWidth = 320;
			this.maxWidth = Infinity;
			this.scrollTop = 0;
			this.windowHeight = 0;
			this.windowWidth = 0;

			this.window = null;
			this.doc = null;

			this.$window = null;
			this.$doc = null;
			this.$body = null;

			// Public modules
			this.modules = [];

			this.onInit = [];
			this.onRespond = [];
			this.onResize = [];
			this.onScroll = [];

			this.minXS = "320";
			this.minSM = "500";
			this.minMD = "740";
			this.minLG = "980";
			this.minXL = "1220";

			this.maxXS = this.minXS - 1;
			this.maxSM = this.minSM - 1;
			this.maxMD = this.minMD - 1;
			this.maxLG = this.minLG - 1;
			this.maxXL = this.minXL - 1;

			this.minHTsm = parseInt("800", 10);
			this.minHT = parseInt("800", 10);

			this.maxHTsm = this.minHTsm - 1;
			this.maxHT = this.minHT - 1;

			this.touch = false;
		};

		$.extend(BaseController.prototype, {
			// Init
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window = window;
				this.doc = document;
				this.$window = $(window);
				this.$doc = $(document);
				this.$body = $("body");
				this.touch = $("html").hasClass("touchevents");

				if ($.mediaquery) {
					$.mediaquery({
						minWidth: [
							this.minXS,
							this.minSM,
							this.minMD,
							this.minLG,
							this.minXL
						],
						maxWidth: [
							this.maxXL,
							this.maxLG,
							this.maxMD,
							this.maxSM,
							this.maxXS
						],
						minHeight: [
							this.minHTsm,
							this.minHT
						]
					});
				}

				if ($.cookie) {
					$.cookie({
						path: "/"
					});
				}

				// Init modules before scroll/resize/respond
				iterate(this.onInit);

				this.$window
					.on("mqchange.mediaquery", onRespond)
					.on(Controller.ns("resize"), onResize)
					.on(Controller.ns("scroll"), onScroll);

				this.resize();
			},
			// Namespace Text
			ns: function(text) {
				return text + "." + this.namespace;
			},
			// Resize Trigger
			resize: function() {
				this.$window.trigger(Controller.ns("resize"));
			},
			// Scroll Trigger
			scroll: function() {
				this.$window.trigger(Controller.ns("scroll"));
			},
			// Kill event
			killEvent: function(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			// Start timer
			startTimer: function(timer, time, callback, interval) {
				this.clearTimer(timer);
				return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
			},
			// Clear timer
			clearTimer: function(timer, interval) {
				if (timer) {
					if (interval) {
						clearInterval(timer);
					} else {
						clearTimeout(timer);
					}

					timer = null;
				}
			}
		});

		// Internal Instance
		var Controller = new BaseController();

		// Loop through callbacks
		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].apply(Controller, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		// Media Query Change Handler
		function onRespond(e, state) {
			iterate(Controller.onRespond, state);
		}

		// Resize Handler
		function onResize() {
			iterate(Controller.onResize);
		}

		// Scroll Handler
		function onScroll() {
			iterate(Controller.onScroll);
		}

		// Return Internal Instance
		return Controller;
	})(jQuery, window);

	// !Ready
	$(document).ready(function() {
		Site.init("@namespace");
	});

/*-------------------------------------------
	Page
-------------------------------------------*/

/* global picturefill, svg4everybody */

Site.modules.Page = (function($, Site) {

	var $mainNav = $(".js-main-nav");
	var $subNav = $(".js-sub-nav");
	var prev = "caret_left";
	var next = "caret_right";
	var $search = $(".site_search");

	function init() {

		// Plugins
		picturefill();
		svg4everybody();

		Site.$body.find(".js-background").background();
		Site.$body.find(".js-carousel").carousel({
			labels: {
				previous: "<span class='fs-carousel-icon'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + prev + "'></use></svg></span>",
				next: "<span class='fs-carousel-icon'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + next + "'></use></svg></span>"
			}
		});
		Site.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox();
		Site.$body.find(".js-dropdown").dropdown();
		Site.$body.find(".js-equalize").equalize();
		Site.$body.find(".js-lightbox").lightbox({
			mobile: true,
			viewer: false,
			labels: {
				close: "<span class='fs-lightbox-icon-close'><svg class='symbol symbol_close'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#close'></use></svg></span>",
				previous: "<span class='fs-lightbox-icon-previous'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + prev + "'></use></svg></span>",
				count: "<span class='fs-lightbox-meta-divider'></span>",
				next: "<span class='fs-lightbox-icon-next'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='" + next + "'></use></svg></span>"
			}
		});
		Site.$body.find(".js-navigation")
			.navigation({
				maxWidth: Site.maxLG + "px"
			})
			.on("open.navigation", function() {
				trackEvent($(this).data("analytics-open"));
				Site.$body.find(".js-navigation").attr("aria-hidden", "false").removeAttr("hidden");
			})
			.on("close.navigation", function() {
				trackEvent($(this).data("analytics-close"));
				Site.$body.find(".js-navigation").attr("aria-hidden", "true").attr("hidden", "");
			});
		Site.$body.find(".js-swap").swap();

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				$subNav.attr("aria-hidden", "false").removeAttr("hidden");
			},
			leave: function() {
				$subNav.attr("aria-hidden", "true").attr("hidden", "");
			}
		});

		$(".mini_search").on("click", function() {
			if($(this).attr("data-toggled") == "on") {
				$(this).attr("data-toggled", "off");
				$search.removeClass("swap-active");
			} else {
				$(this).attr("data-toggled", "on");
				$search.addClass("swap-active");
				console.log($search.find(".site_search_input").focus());
				$search.find(".site_search_input").focus();
			}
		});

		// Explorer

		$(".explorer_discovery").on("click", function() {
			if($(".explorer_panel").css("position") == "fixed") {
				$("body").addClass("fs-navigation-lock");
			}
		});

		$(".explorer_panel_close").on("click", function() {
			if($(".explorer_panel").css("position") == "fixed") {
				$("body").removeClass("fs-navigation-lock");
			}
		});


		// Collage

		$(".collage_item_link:not(.js-lightbox)").on("click", function() {
			$("body").addClass("fs-navigation-lock");
		});

		$(".collage_gallery_close").on("click", function() {
			$("body").removeClass("fs-navigation-lock");
		});


		// Quotes

		if($(".quote").length) {
			var count = $(".quote").length;

			$(".quote").each(function() {
				$(this).hide();
			});

			$(".quote").eq(Math.floor(Math.random() * count)).show();
		}


		// Display children of focused nav items

		$mainNav.find("a")
			.focus(function() {
				$(this).closest(".main_nav_item").addClass("focused");
			})
			.blur(function() {
				$(this).closest(".main_nav_item").removeClass("focused");
			});


		// Media Gallery

		if($(".media_gallery_items").length) {
			$(".media_gallery_items").equalize({
				target: ".media_gallery_label"
			});

			var height = $(".media_gallery_label").css("height");
			height = height.replace("px", "");
			height = parseInt(height) + 30;

			$(".media_gallery .fs-carousel-controls").css("margin-top", height);


		}


		// Analytics

		$.analytics({
			scrollDepth: true
		});


		// Wrapper for Tables

		Site.$body.find(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
		tableOverflow();


		// Responsive Video

		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});


		// Scrolling

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);

		Site.scroll();
	}

	function scroll() {}

	function resize() {
		scroll();
		tableOverflow();
	}

	function respond() {
		scroll();
	}

	function onScrollTo(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
				id = $target.attr("href");

		scrollToElement(id);
	}

	function scrollToElement(id) {
		var $to = $(id);

		if ($to.length) {
			var offset = $to.offset();

			scrollToPosition(offset.top);
		}
	}

	function scrollToPosition(top) {
		$("html, body").animate({
			scrollTop: top
		});
	}

	function onToggleClick(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
				activeClass = "js-toggle_active";

		if ($target.hasClass(activeClass)) {
			$target.removeClass(activeClass);
		} else {
			$target.addClass(activeClass);
		}
	}

	function trackEvent(data) {
		if ($.type(data) === "string") {
			data = data.split(",");

			$.analytics.apply(this, data);
		}
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			$(this).removeClass("table_wrapper_overflow");
			if ($(this).prop("scrollWidth") > $(this).width() + 1) {
				$(this).addClass("table_wrapper_overflow");
			} else {
				$(this).removeClass("table_wrapper_overflow");
			}
		});
	}


	// Hook Into Main init Routine

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Stats
-------------------------------------------*/

Site.modules.Stats = (function($, Site) {

	function init() {
		if($(".stats").hasClass("theme_expanded")) {
			randomize();
			bindUI();
			bindWindow();
			kickStart();
			resizeStats();
		}

		if($(".stats").hasClass("theme_condensed")) {
			randomize();
			bindWindow();
			resizeStats();
		}
	}

	function randomize() {
		$(".stat_wrapper").each(function() {
			var $item = $(this).find(".stat_item");
			var amount = $item.length;
			var limit = amount - 4;
			var random;

			for(var i = 0; i < limit; i++) {
				random = grabRandom(amount);

				while(!($item.eq(random).length)) {
					random = grabRandom(amount);
				}

				$item.eq(random).remove();
			}
		});
	}

	function grabRandom(limit) {
		return Math.round(Math.random() * (limit - 1) + 1);
	}

	function bindUI() {
		$(".stats select").on("change", function() {
			var index = $(this).find(":selected").index();

			$(".stats_list .stat_wrapper").removeClass("selected");
			$(".stats_list .stat_wrapper").eq(index).addClass("selected");
		});
	}

	function bindWindow() {
		Site.onResize.push(resizeStats);
	}

	function kickStart() {
		$(".stats select option").eq(0).trigger("change");
	}

	function resizeStats() {
		$(".stat_aside").carousel();

		if($(".stats").hasClass("theme_expanded")) {
			var height = 0;

			$(".stat .js-carousel").carousel("resize");
			$(".stat .js-carousel").carousel("update");

			if($(".stats_accordion_wrapper").css("padding-right") == "40px" || $(".stats_accordion_wrapper").css("padding-right") == "140px") {
				$(".stats_accordion_wrapper .js-carousel").carousel("disable");
			} else {
				$(".stats_accordion_wrapper .js-carousel").carousel("enable");
			}

			if($(".stats_accordion_wrapper").css("padding-right") == "40px" || $(".stats_accordion_wrapper").css("padding-right") == "140px") {
				$(".stat_aside").each(function() {
					if($(this).height() > height) {
						height = $(this).height();
					}
				});
			} else {
				$(".stat_wrapper").each(function() {
					if($(this).height() > height) {
						height = $(this).height();
					}
				});
			}

			$(".stats_list").css("height", height + 30);
			$(".stats_accordion_wrapper").css("min-height", height);
		}

		if($(".stats").hasClass("theme_condensed")) {
			if($(".stat_aside").css("padding-right") == "15px") {
				$(".stats_accordion_wrapper .js-carousel").carousel("disable");
			} else {
				$(".stats_accordion_wrapper .js-carousel").carousel("enable");
			}
		}

		$(".stat .js-carousel").carousel("reset");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Spotlight
-------------------------------------------*/

Site.modules.Spotlight = (function($, Site) {

	function init() {
    bindUI();
    determineCarousel();
	}

  function bindUI() {
    Site.onResize.push(determineCarousel);
  }

  function determineCarousel() {
    if($(".spotlight_switches_wrapper").css("top") == "0px") {
      $(".spotlight_switches").carousel("disable");
    } else {
      $(".spotlight_switches").carousel("enable");
    }
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Gallery
-------------------------------------------*/

Site.modules.Gallery = (function($, Site) {

	var height = 0;
	var padding = 0;

	function init() {
		$(".gallery_panel .fs-carousel-controls").each(function() {
			$(this).wrap("<div class='fs-carousel-controls-wrapper'><div class='row'></div></div>");
		});

		$(".gallery_switch_background").background("loaded", function() {
			adjustGallery();
		});

		$(".gallery_switch").on("click", function() {
			$(".gallery_switches_close").trigger("click");
		});

		$(".gallery_slide_control").on("click", function() {
			var $video = $(this).next();
			$video.addClass("played");

			if(!($video.hasClass("playing"))) {
				$video.background("play");
				$video.addClass("playing");
				$(this).addClass("play-state");
			} else {
				$video.background("pause");
				$video.removeClass("playing");
				$(this).removeClass("play-state");
			}
		});

		$(".gallery_panel").on("update.carousel", function() {
			$(".gallery_slide_video").background("pause");
			$(".gallery_slide_video").removeClass("playing");
		});

		$(".gallery_slide_details_inner").equalize({
			target: ".gallery_slide_caption"
		});

		adjustGallery();

		$(window).on("resize", function() {
			setTimeout(function() {
				adjustGallery();
			}, 100)
		});
	}

	function adjustGallery() {
		resetValues();
		adjustCaptions();
		adjustControls();

		if($(".gallery_slide_caption").css("padding") == "0px") {
			$(".gallery").css("padding-bottom", 0);
			$(".gallery_panels").css("height", height);
		} else {
			$(".gallery").css("padding-bottom", padding + 20);
			$(".gallery_panels").css("height", height - padding);
		}
	}

	function resetValues() {
		height = $(".gallery_switches_wrapper").innerHeight();
		padding = 0;
	}

	function adjustCaptions() {
		$(".gallery_slide_caption").each(function() {
			$(this).innerHeight("auto");

			if($(this).innerHeight() > padding) {
				padding = $(this).innerHeight();
			}
		});

		$(".gallery_slide_caption").each(function() {
			$(this).innerHeight(padding);
		});
	}

	function adjustControls() {
		$(".gallery_panel .fs-carousel-controls-wrapper").css("bottom", padding + 40);
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Collage
-------------------------------------------*/

Site.modules.Collage = (function($, Site) {

	function init() {
    countItems();
    bindUI();
    sizeCarousel();
  }

  function bindUI() {
    Site.onResize.push(sizeCarousel);

		$(".collage_item_link").on("click", function() {
			$(".collage_gallery_carousel").carousel("jump", $(this).data("index"));
		});
  }

  function countItems() {
    var images = $(".collage_gallery_background").length;
    var videos = $(".collage_gallery_image iframe").length;

    $(".collage_detail_images").html(images);
    $(".collage_detail_videos").html(videos);
  }

  function sizeCarousel() {
    var height = 0;

    $(".collage_gallery_caption").each(function() {
			$(this).css("height", "auto");

      if($(this).height() > height) {
        height = $(this).height();
      }
    });

    $(".collage_gallery_caption").each(function() {
      $(this).css("height", height);
    });

    $(".collage_gallery_carousel .fs-carousel-controls").css("margin-bottom", height - $(".collage_gallery_carousel .fs-carousel-controls").height() + 10);

    $(".collage_gallery_background").each(function() {
      $(this).css("height", $(".collage_gallery").height() - ($(".collage_gallery_header").outerHeight() + $(".collage_gallery_details").outerHeight() + 80));
    });

		$(".collage_gallery_image iframe").each(function() {
      $(this).css("height", $(".collage_gallery").height() - ($(".collage_gallery_header").outerHeight() + $(".collage_gallery_details").outerHeight() + 80));
    });
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Alert
-------------------------------------------*/

Site.modules.Alert = (function($, Site) {

	var $alert = $(".alert");
	var $alertClose = $(".alert_close");
	var $alertTime = $alert.data("time");
	var cookieName = "widener-alert";

	function init() {
		showAlert();

		if($alert.length) {
			if ($.cookie(cookieName) === $alertTime) {
				hideAlert();
			}

			$alertClose.on("click", function() {
				$.cookie(cookieName, $alertTime);

				console.log($.cookie(cookieName));

				hideAlert();
			});
		}
	}

	function showAlert() {

		$alert.addClass("show_alert");

	}

	function hideAlert() {

		$alert.removeClass("show_alert");

	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
