!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).XCanvas=e()}(this,(function(){"use strict";var t=Object.freeze({}),e=Object.freeze([]),n=/^on[^a-z]/,i=function(t){return n.test(t)},r=function(t){return"number"==typeof t},o=function(t){return"auto"===t},l=function(t){if("string"==typeof t)return t.match("%")},s=function(t){var e=parseInt(t.replace("%",""));return isNaN(e)||e<0?0:e/100},d=Array.isArray,a=function(t){return"function"==typeof t},h=function(t){return"string"==typeof t},c=function(t){return null!==t&&"object"==typeof t};function g(t){return.5+t<<0}function u(t,e){if(t)for(var n=t,i=!1,r=function(){i=!0};n.parent&&(e(n.parent,r),!i);)n=n.parent}var f=function(){try{return Boolean(wx.getSystemInfoSync)}catch(t){return!1}}();function y(t){if(d(t)){for(var e={},n=0;n<t.length;n++){var i=t[n],r=h(i)?x(i):y(i);if(r)for(var o in r)e[o]=r[o]}return e}return h(t)||c(t)?t:void 0}var p,m=/;(?![^(]*\))/g,v=/:([^]+)/,S=/\/\*.*?\*\//gs;function x(t){var e={};return t.replace(S,"").split(m).forEach((function(t){if(t){var n=t.split(v);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function _(t){var e="";if(h(t))e=t;else if(d(t))for(var n=0;n<t.length;n++){var i=_(t[n]);i&&(e+=i+" ")}else if(c(t))for(var r in t)t[r]&&(e+=r+" ");return e.trim()}(p={})[1]="TEXT",p[2]="CLASS",p[4]="STYLE",p[8]="PROPS",p[16]="FULL_PROPS",p[32]="HYDRATE_EVENTS",p[64]="STABLE_FRAGMENT",p[128]="KEYED_FRAGMENT",p[256]="UNKEYED_FRAGMENT",p[512]="NEED_PATCH",p[1024]="DYNAMIC_SLOTS",p[2048]="DEV_ROOT_FRAGMENT",p[-1]="HOISTED",p[-2]="BAIL";var L=Symbol.for("v-fgt"),C=Symbol.for("v-cmt");function w(t){return!!t&&!0===t.__v_isVNode}function T(t,e,n,i){if(void 0===e&&(e=null),void 0===n&&(n=null),w(t)){var r=b(t,e);return n&&function(t,e){null==e?e=null:d(e)||"object"==typeof e||a(e)||(e=[E(e)]);t.children=e}(r,n),r}if(e){var o=e.class,l=e.style;o&&!h(o)&&(e.class=_(o)),c(l)&&(e.style=y(l))}return function(t,e,n,i){return void 0===e&&(e=null),void 0===n&&(n=null),{__v_isVNode:!0,__v_skip:!0,type:t,props:e,children:n,component:null,el:null,staticCount:0,appContext:null,ctx:null}}(t,e,n)}function b(t,e,n){if(t&&"object"!=typeof t)return t;var r=t.props,o=t.children,l=e?function(){for(var t=arguments,e=[],n=0;n<arguments.length;n++)e[n]=t[n];for(var r={},o=0;o<e.length;o++){var l=e[o];for(var s in l)if("class"===s)r.class!==l.class&&(r.class=_([r.class,l.class]));else if("style"===s)r.style=y([r.style,l.style]);else if(i(s)){var a=r[s],h=l[s];!h||a===h||d(a)&&a.includes(h)||(r[s]=a?[].concat(a,h):h)}else""!==s&&(r[s]=l[s])}return r}(r||{},e):r;return{__v_isVNode:!0,type:t.type,props:l,children:d(o)?o.map(W):o,staticCount:t.staticCount,appContext:t.appContext,component:t.component,el:t.el,ctx:t.ctx}}function W(t){var e=b(t);return d(t.children)&&(e.children=t.children.map(W)),e}function E(t,e){return void 0===t&&(t=" "),T("Text",null,t)}function R(t){return null==t||"boolean"==typeof t?T(C):d(t)?T(L,null,t.slice()):"object"==typeof t?function(t){return b(t)}(t):E(String(t))}var B=0;function I(t){return function(e,n){void 0===n&&(n=null);var i={_uid:B++,_component:e,_props:n,_container:null,_instance:null,mount:function(r){var o=T(e,n);i._container=r,t(o,r)}};return i}}var A=function(){return A=Object.assign||function(t){for(var e,n=arguments,i=1,r=arguments.length;i<r;i++)for(var o in e=n[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},A.apply(this,arguments)};var H=[],P=[],O=null,F=0,X=100;function N(t){if(P.length){var e=function(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}([],new Set(P),!0);if(P.length=0,O)return void O.push.apply(O,e);for(O=e,t=t||new Map,O.sort((function(t,e){return k(t)-k(e)})),F=0;F<O.length;F++)D(t,O[F])||O[F]();O=null,F=0}}var k=function(t){return null==t.id?1/0:t.id};function D(t,e){if(t.has(e)){var n=t.get(e);if(n>X)return!0;t.set(e,n+1)}else t.set(e,1)}function Y(t){return!!t&&!0===t.__v_isTreeNode}function U(t){t.hasChildren()&&(t.children=t.children.filter((function(t){Y(t)})),t._getChildren().map((function(e,n){e._setParent(t),e._setSibling(t._getChildren()[n-1],t._getChildren()[n+1]),U(e)})))}var j={BLOCK:"block",INLINE_BLOCK:"inline-block",INLINE:"inline",FLEX:"flex",NONE:"none"},V={AUTO:"auto",OUTER:"100%"},z={ROW:"row",COLUMN:"column"},G={DISPLAY:j,WIDTH:V,POSITION:{ABSOLUTE:"absolute",FIXED:"fixed",RELATIVE:"relative",STATIC:"static"},TEXT_ALIGN:{LEFT:"left",RIGHT:"right",CENTER:"center"},FLEX_DIRECTION:z,DEFAULT_STYLES:{display:j.BLOCK,fontSize:14,fontWeight:400,fontFamily:"sans-serif",color:"#000",paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,height:V.AUTO,borderRadius:0,borderColor:"#000",lineCap:"square",flexDirection:z.ROW,verticalAlign:"middle",textAlign:"left",justifyContent:"flex-start",alignItems:"flex-start",alignSelf:"auto",whiteSpace:"normal",zIndex:1,visible:!0,position:"static"}};function K(t){!function(t){t.parent&&t.parent.styles.display===G.DISPLAY.FLEX&&(t.styles.flex?"column"===t.parent.styles.flexDirection&&r(t.styles.flex)?t.styles.height=0:"row"===t.parent.styles.flexDirection&&r(t.styles.flex)&&(t.styles.width=0):r(t.styles.height)||r(t.styles.width)||(t.styles.flex=1))}(t),function(t){t.styles.width||(t.styles.display!==G.DISPLAY.INLINE_BLOCK&&t.styles.display!==G.DISPLAY.INLINE&&t.isInFlow()?t.styles.display===G.DISPLAY.BLOCK||t.styles.display===G.DISPLAY.FLEX?t.styles.width=G.WIDTH.OUTER:t.styles.width=0:t.styles.width=G.WIDTH.AUTO);l(t.styles.width)&&t.parent&&o(t.parent.styles.width)&&(t.styles.width=G.WIDTH.AUTO);l(t.styles.height)&&t.parent&&o(t.parent.styles.height)&&(t.styles.height=G.WIDTH.AUTO)}(t),function(t){var e=t.styles,n=e.borderWidth,i=e.borderLeftWidth,r=e.borderRightWidth,o=e.borderBottomWidth,l=e.borderTopWidth,s=e.borderRadius;n||(t.styles.borderWidth=0,n=0);Array.isArray(n)?(t.styles.borderTopWidth=n[0],t.styles.borderRightWidth=n[1],t.styles.borderBottomWidth=n[2],t.styles.borderLeftWidth=n[3]):(i||(t.styles.borderLeftWidth=n),r||(t.styles.borderRightWidth=n),o||(t.styles.borderBottomWidth=n),l||(t.styles.borderTopWidth=n));s&&(t.styles.overflow="hidden")}(t),function(t){t.styles.fontSize&&!t.styles.lineHeight&&(t.styles.lineHeight=1.4*t.styles.fontSize)}(t),function(t){t.styles.padding&&(r(t.styles.padding)?(t.styles.paddingLeft=t.styles.padding,t.styles.paddingBottom=t.styles.padding,t.styles.paddingRight=t.styles.padding,t.styles.paddingTop=t.styles.padding):Array.isArray(t.styles.padding)&&(2===t.styles.padding.length?(t.styles.paddingLeft=t.styles.paddingRight=t.styles.padding[1],t.styles.paddingBottom=t.styles.paddingTop=t.styles.padding[0]):4===t.styles.padding.length&&(t.styles.paddingLeft=t.styles.padding[3],t.styles.paddingBottom=t.styles.padding[2],t.styles.paddingRight=t.styles.padding[1],t.styles.paddingTop=t.styles.padding[0])));r(t.styles.margin)?(t.styles.marginLeft=t.styles.margin,t.styles.marginBottom=t.styles.margin,t.styles.marginRight=t.styles.margin,t.styles.marginTop=t.styles.margin):Array.isArray(t.styles.margin)&&(2===t.styles.margin.length?(t.styles.marginLeft=t.styles.marginRight=t.styles.margin[1],t.styles.marginBottom=t.styles.marginTop=t.styles.margin[0]):4===t.styles.margin.length&&(t.styles.marginLeft=t.styles.margin[3],t.styles.marginBottom=t.styles.margin[2],t.styles.marginRight=t.styles.margin[1],t.styles.marginTop=t.styles.margin[0]))}(t)}var M,q=0;var J=((M={})[G.FLEX_DIRECTION.ROW]={width:"width",contentWidth:"contentWidth",x:"x",y:"y",contentX:"contentX",height:"height",contentHeight:"contentHeight"},M[G.FLEX_DIRECTION.COLUMN]={width:"height",contentWidth:"contentHeight",x:"y",y:"x",contentX:"contentY",height:"width",contentHeight:"contentWidth"},M);var Q={renderStyles:{width:"100%",height:"100%",paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,contentWidth:0,contentHeight:0,lineCap:"butt",visible:!0},layout:{x:0,y:0,contentX:0,contentY:0}};function Z(t){return function(e,n,i){function a(t){return t.borderLeftWidth+t.borderRightWidth}function h(t){return t.borderTopWidth+t.borderBottomWidth}void 0===n&&(n={});var c=function(t){void 0===t&&(t=[]);var e={__v_isTreeNode:!0,_children:t,parent:null,root:null,prev:null,next:null,get children(){return e._children},_setParent:function(t){console.log("_setParent",e,this,t),e.parent=t},_setSibling:function(t,n){e.prev=t,e.next=n},hasChildren:function(){return!(!Array.isArray(e._children)||!e._children.length)},appendChild:function(t){if(!Y(t))throw Error("Unknown treeNode type");var n=e._children[e._children.length-1]||null;n&&Y(n)&&n._setSibling(n.prev,t),Array.isArray(e._children)&&e._children.push(t),t._setParent(this),t._setSibling(n,null)},prependChild:function(t){if(!Y(t))throw Error("Unknown treeNode type")},removeChild:function(t){if(!Y(t))throw Error("Unknown treeNode type")},append:function(){},prepend:function(){},remove:function(){}};return e}(i),f={__v_isElement:!0,type:e,options:n,styles:{},renderStyles:{},debugColor:null,x:0,y:0,contentX:0,contentY:0,left:0,top:0,height:0,width:0,visible:!0,layer:t,relativeTo:null,layout:{x:0,y:0,contentX:0,contentY:0,width:0,height:0},treeNode:c,get container(){return console.log("1219219209100",c.parent,c),c.parent||A(A({},Q),{layout:{contentWidth:t.options.width,contentHeight:t.options.height}})},_initStyles:function(){console.log("[_initStyles-000000]",this),f.styles=Object.assign({},f._getDefaultStyles(),f._getExtendStyles(),f.options.style||{}),f._completeStyles(),f.renderStyles=function(t){var e=A({},t.styles),n=t.getContainerLayout().contentWidth,i=t.getContainerLayout().contentHeight;console.log(n,i),o(e.width)?e.paddingWidth=0:l(e.width)?e.paddingWidth=s(e.width)*n-e.marginLeft-e.marginRight:e.paddingWidth=e.width;o(e.height)?e.paddingHeight=0:l(e.height)?e.paddingHeight=s(e.height)*i-e.marginTop-e.marginBottom:e.paddingHeight=e.height;e.paddingWidth||(e.paddingWidth=0);e.paddingHeight||(e.paddingHeight=0);return e.contentWidth=e.paddingWidth-e.paddingLeft-e.paddingRight,e.contentHeight=e.paddingHeight-e.paddingTop-e.paddingBottom,e.width=e.paddingWidth+e.marginLeft+e.marginRight+a(e),e.height=e.paddingHeight+e.marginTop+e.marginBottom+h(e),e}(f),console.log("_initStyles",f,f.renderStyles),f._InFlexBox()?f._bindFlexBox():f.isInFlow()||(f.relativeTo=function(t){if(t.isInFlow())return t.parent;if("fixed"===t.renderStyles.position)return t.root;var e=null;return u(t,(function(t){"static"===t.renderStyles.position||e||(e=t)})),e||(e=t.root),e}(f))},_getExtendStyles:function(){var t={};return console.log("_getExtendStyles",f,f.getContainer()),["textAlign","fontSize","color","fontFamily","alignItems","visible"].map((function(e){var n=f.container.renderStyles[e];n&&(t[e]=n),"visible"===e&&(t[e]=n)})),t},_getDefaultStyles:function(){return G.DEFAULT_STYLES},_completeStyles:function(){K(f)},_getChildren:function(){return d(this.children)?this.children:[]},_getChildrenInFlow:function(){return f._getChildren().filter((function(t){return t.isInFlow()}))},_reflow:function(){},_initWidthHeight:function(){var t=f.styles,e=t.width,n=t.height,i=t.display;if(t.flex,t.marginLeft,t.marginRight,t.marginTop,t.marginBottom,o(e)||o(n)){var r=f._measureLayout();o(e)&&(f.renderStyles.contentWidth=g(r.width)),o(n)&&(f.renderStyles.contentHeight=g(r.height))}f._refreshLayoutWithContent(),f._InFlexBox()?f.line.refreshWidthHeight(f):i===G.DISPLAY.INLINE_BLOCK&&f._bindLine()},_initPosition:function(){var t=f.getContainerLayout().contentX,e=f.renderStyles,n=e.paddingLeft,i=e.paddingTop,o=e.borderLeftWidth,d=e.borderTopWidth,a=e.marginLeft,h=e.marginTop;if(f.isInFlow())f._InFlexBox()||f.renderStyles.display===G.DISPLAY.INLINE_BLOCK?f.line.refreshElementPosition(f):(f.x=t,f.y=f.getPrevLayout().y+f.getPrevLayout().height);else{var c=f.getContainerLayout(f.relativeTo),u=c.contentX,y=c.contentY,p=c.contentWidth,m=c.contentHeight,v=f.renderStyles,S=v.top,x=v.bottom,_=v.right,L=v.left,C=v.width,w=v.height;l(S)&&(S=s(S)*m),l(x)&&(x=s(x)*m),l(L)&&(L=s(L)*p),l(_)&&(_=s(_)*p),r(S)?f.y=y+S:r(x)&&(f.y=y+m-x-w),r(L)?f.x=u+L:r(_)&&(f.x=u+p-_-C)}f.x=g(f.x),f.y=g(f.y),f.contentX=f.x+n+o+a,f.contentY=f.y+i+d+h},_InFlexBox:function(){return!!f.isInFlow()&&(!!f.container&&(!(!f.container||f.container.renderStyles.display!==G.DISPLAY.FLEX)||void 0))},_refreshLayoutWithContent:function(){f.renderStyles.height=g(f.renderStyles.contentHeight+f.renderStyles.paddingTop+f.renderStyles.paddingBottom+f.renderStyles.marginTop+f.renderStyles.marginBottom+h(f.renderStyles)),f.renderStyles.width=g(f.renderStyles.contentWidth+f.renderStyles.paddingLeft+f.renderStyles.paddingRight+f.renderStyles.marginLeft+f.renderStyles.marginRight+a(f.renderStyles)),f.renderStyles.paddingWidth=g(f.renderStyles.contentWidth+f.renderStyles.paddingLeft+f.renderStyles.paddingRight),f.renderStyles.paddingHeight=g(f.renderStyles.contentHeight+f.renderStyles.paddingTop+f.renderStyles.paddingBottom)},_refreshContentWithLayout:function(){f.renderStyles.contentHeight=f.renderStyles.height-f.renderStyles.paddingTop-f.renderStyles.paddingBottom-f.renderStyles.marginTop-f.renderStyles.marginBottom-h(f.renderStyles),f.renderStyles.contentWidth=f.renderStyles.width-f.renderStyles.paddingLeft-f.renderStyles.paddingRight-f.renderStyles.marginLeft-f.renderStyles.marginRight-a(f.renderStyles),f.renderStyles.paddingWidth=g(f.renderStyles.contentWidth+f.renderStyles.paddingLeft+f.renderStyles.paddingRight),f.renderStyles.paddingHeight=g(f.renderStyles.contentHeight+f.renderStyles.paddingTop+f.renderStyles.paddingBottom)},_bindLine:function(){var t;f.prev&&f.prev.line&&f.prev.line.canIEnter(f)?f.prev.line.add(f):(t={width:0,height:0,contentWidth:0,x:0,y:0,right:0,doorClosed:!1,outerWidth:0,container:null,elements:[],start:null,end:null,offsetX:0,id:++q,_initHeight:function(e){t.height=e.parent&&e.parent.context.renderStyles.lineHeight||0},_initLayout:function(e){t.right=e.getContainerLayout().contentX||0,t.x=e.getContainerLayout().contentX||0,t.y=t._getPrevLine(e).y},_getOffsetY:function(e){return"bottom"===e.renderStyles.verticalAlign?t.height-e.renderStyles.height:"middle"===e.renderStyles.verticalAlign?(t.height-e.renderStyles.height)/2:0},_refreshWidthHeight:function(e){e.renderStyles.height>t.height&&(t.height=e.renderStyles.height),t.width+=e.renderStyles.width},_closeLine:function(){t.end=t.elements[t.elements.length-1],t._refreshXAlign()},_getPrevLine:function(t){if(t.prev){var e=t.prev.context.line;if(e)return{y:e.height+e.y,x:e.x};var n=t.getPrevLayout();return{y:n.y+n.height,x:n.x}}return{y:t.getContainerLayout().contentY,x:t.getContainerLayout().contentX}},_refreshXAlign:function(){if(!(t.outerWidth>5e3)&&t.end&&t.end.parent){var e=t.outerWidth-t.width;"center"===t.end.parent.context.renderStyles.textAlign?e/=2:"left"===t.end.parent.context.renderStyles.textAlign&&(e=0),t.offsetX=e}},bindElement:function(e){var n,i;t.container=null===(n=e.parent)||void 0===n?void 0:n.context,t._initHeight(e),t.outerWidth=e.parent&&o(e.parent.context.styles.width)?1/0:null===(i=e.parent)||void 0===i?void 0:i.context.renderStyles.contentWidth,t.start=e,t.addElement(e)},refreshElementPosition:function(e){t.start===e&&t._initLayout(e),e.x=t.right+t.offsetX,e.y=t.y+t._getOffsetY(e),t.right+=e.renderStyles.width},addElement:function(e){t.elements.push(e),e.line=t,t._refreshWidthHeight(e),e.next&&"inline-block"===e.next.context.renderStyles.display||t._closeLine()},canIEnter:function(e){return!(e.renderStyles.width+t.width>t.outerWidth&&(t._closeLine(),1))}},t).bindElement(f)},_bindFlexBox:function(){var t;f.pre&&f.pre.line?f.pre.line.add(f):(t={key:null,exactValue:0,flexTotal:0,_closeLine:function(){_super.closeLine.call(this),this.calcFlex()},_initHeight:function(){this[this.key.height]=0},_refreshWidthHeight:function(t){t.renderStyles[this.key.height]>this[this.key.height]&&(this[this.key.height]=t.renderStyles[this.key.height]),this[this.key.width]+=t.renderStyles[this.key.width]},_initLayout:function(t){this.right=t.getContainerLayout()[this.key.contentX],this[this.key.x]=t.getContainerLayout()[this.key.contentX],this[this.key.y]=this.getPreLine(t)[this.key.y]},_refreshElementPosition:function(t){this.start===t&&this.initLayout(t),t[this.key.x]=this.right+this.offsetX,t[this.key.y]=this[this.key.y]+this.getOffsetY(t),this.right+=t.renderStyles[this.key.width]},_calcFlex:function(){var t=this,e=this.container.renderStyles[this.key.contentWidth];this.elements.forEach((function(n){r(n.styles.flex)&&(n.renderStyles[t.key.width]=n.styles.flex/t.flexTotal*(e-t.exactValue),n._refreshContentWithLayout())}))},_refreshXAlign:function(){if(this.end.parent){var t=this.outerWidth-this[this.key.width];"center"===this.end.parent.renderStyles.justifyContent?t/=2:"flex-start"===this.end.parent.renderStyles.justifyContent&&(t=0),this.offsetX=t}},_getOffsetY:function(t){return"flex-end"===t.renderStyles.alignSelf?this.container.renderStyles[this.key.contentHeight]-t.renderStyles[this.key.height]:"center"===t.renderStyles.alignSelf?(this.container.renderStyles[this.key.contentHeight]-t.renderStyles[this.key.height])/2:0},bindElement:function(t){var e;this.container=t.parent,t.parent&&(this.key=J[t.parent.context.renderStyles.flexDirection]),this.initHeight(t),this.outerWidth=t.parent&&o(t.parent.context.styles[this.key.width])?1/0:null===(e=t.parent)||void 0===e?void 0:e.context.renderStyles[this.key.contentWidth],this.start=t,this.add(t)},addElement:function(t){r(t.styles[this.key.width])?this.exactValue+=t.renderStyles[this.key.width]:r(t.styles.flex)&&(this.flexTotal+=t.renderStyles.flex),this.elements.push(t),t.line=this,this.refreshWidthHeight(t),t.next||this.closeLine()}},t).bindElement(f)},_measureLayout:function(){var t=0,e=0;return f._getChildrenInFlow().forEach((function(n){n.line?n.line.start===n&&(n.line.width>t&&(t=n.line.width),e+=n.line.height):n.renderStyles.width>t?(t=n.renderStyles.width,e+=n.renderStyles.height):e+=n.renderStyles.height})),{width:t,height:e}},init:function(){f._initStyles()},appendChild:function(t){console.log("appendChild"),c.appendChild.call(this,t),f.layer.onElementAdd(t)},getContainer:function(){return c.parent||Q},getContainerLayout:function(){var t=f.container;return{width:t.renderStyles.width,height:t.renderStyles.height,paddingTop:t.renderStyles.paddingTop,paddingBottom:t.renderStyles.paddingBottom,paddingLeft:t.renderStyles.paddingLeft,paddingRight:t.renderStyles.paddingRight,marginLeft:t.renderStyles.marginLeft,marginRight:t.renderStyles.marginRight,marginTop:t.renderStyles.marginTop,marginBottom:t.renderStyles.marginBottom,x:t.layout.x,y:t.layout.y,contentX:t.layout.contentX,contentY:t.layout.contentY,contentWidth:t.layout.contentWidth,contentHeight:t.layout.contentHeight}},getPrevLayout:function(){for(var t=f.prev;t&&!t.isInFlow();)t=t.prev;return t?{width:t.renderStyles.width,height:t.renderStyles.height,x:t.x,y:t.y}:{width:0,height:0,x:f.getContainerLayout().contentX,y:f.getContainerLayout().contentY}},isInFlow:function(){var t=f.styles,e=t.position;return t.display,e!==G.POSITION.ABSOLUTE&&e!==G.POSITION.FIXED},isVisible:function(){return f.renderStyles.visible&&f.visible},getLayer:function(){return this.layer},getRenderer:function(){return this.layer.renderer},paint:function(t){}};return f.__proto__=Object.create(c.__proto__),f.root=t.node,"text"===f.type?function(t){var e=A(A({},t),{layout:null,lines:[],debugColor:"blue",_getDefaultStyles:function(){return A(A({},G.DEFAULT_STYLES),{display:G.DISPLAY.INLINE_BLOCK,width:G.WIDTH.AUTO,textAlign:"left"})},_measureLayout:function(){return console.log("_measureLayout",e),e.layout=e.getRenderer().measureText(e,e.children),e.layout.height=e.renderStyles.lineHeight,e._calcLine(),e.layout},_getFont:function(){var t=e.renderStyles,n=t.fontSize,i=t.fontWeight,r=t.fontFamily;return"".concat(i," ").concat(n,"px ").concat(r)},_calcLine:function(){if(console.log("_calcLine",e.parent),e.parent&&e.children){var t=e.layout,n=t.width;t.height;var i=e.parent.renderStyles.contentWidth,l=e.parent.styles.width;if(o(e.styles.width)||(i=e.renderStyles.width),r(i)&&i>=n||l===G.WIDTH.AUTO)e.lines=[{text:e.children,layout:e.layout}];else{e.lines=[];for(var s=1,d="",a=null,h=null,c=0;c<e.children.length;c++){if((a=e.getRenderer().measureText(e,d+e.children[c]))&&a.width>i){if(s>=e.renderStyles.maxLine){d=d.substring(0,d.length-2)+"...";break}e.lines.push({text:d,layout:h||a}),d="",s+=1}d+=e.children[c],h=a}e.layout.width=i,e.lines.push({text:d,layout:e.getRenderer().measureText(e,d)}),e.layout.height=e.lines.length*e.renderStyles.lineHeight}}},paint:function(){var t=this.getRenderer();t._drawBackground(e),t._drawText(e),t._drawBox(e)}});return e}(f):function(t){return A(A({},t),{paint:function(){var t=this.getRenderer();this.options.render?this.options.render(t.getCtx(),t.getCanvas(),this):(t._drawBackground(this),t._drawBox(this))}})}(f)}}var $=function(t){var e=[];if(null!=t){var n=[],i=void 0,r=void 0;for(n.unshift(t);0!=n.length;)if(i=n.shift(),e.push(i),r=i.children,d(r))for(var o=r.length-1;o>=0;o--)n.push(r[o])}return e},tt=function(t){var e=[];if(null!=t){var n=[],i=void 0,r=void 0;for(n.unshift(t);0!=n.length;)if(i=n.shift(),e.push(i),r=i.children,d(r))for(var o=0;o<r.length;o++)n.push(r[o])}return e};function et(t){var e=t.renderStyles,n=e.paddingWidth,i=e.paddingHeight,r=t.renderStyles.borderRadius;return 2*r>n&&(r=n/2),2*r>i&&(r=i/2),r<0&&(r=0),g(r)}function nt(t){var e,n,i={layer:t,imageBus:{},isAnimate:!1,lastPaintTime:0,lastFrameComplete:!1,throttle:(e=16,function(t){n||(n=setTimeout((function(){t(),n=null}),e))}),_restore:function(t){this.getCtx().save(),t(),this.getCtx().restore()},_path:function(t){this.getCtx().beginPath(),t(),this.getCtx().closePath()},_helpParentRestoreCtx:function(t){if(!(t.isVisible()&&(e=t,!e.parent||e.next||e.hasChildren())||!t.isVisible()&&t.next)){var e;this.getCtx().restore();for(var n=t.parent;n&&!n.next;)this.getCtx().restore(),n=n.parent}},_drawBox:function(t){var e=this;if(t.renderStyles={borderColor:"red",borderWidth:4,borderLeftWidth:4,borderRightWidth:4,borderTopWidth:4,borderBottomWidth:4,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,contentWidth:100,contentHeight:100},t.renderStyles.borderColor||t.renderStyles.shadowBlur){var n=t.renderStyles,i=n.contentWidth,r=n.contentHeight,o=n.paddingLeft,l=n.paddingTop,s=n.borderStyle,d=n.paddingRight,a=n.paddingBottom,h=n.borderLeftWidth,c=n.borderRightWidth,g=n.borderTopWidth,u=n.borderBottomWidth,f=n.borderWidth,y=et(t),p=t.contentX-t.renderStyles.paddingLeft-h/2,m=t.contentY-t.renderStyles.paddingTop-g/2,v=i+o+d+(h+c)/2,S=r+l+a+(g+u)/2;this.getCtx().lineCap=t.renderStyles.lineCap||"butt",this.getCtx().strokeStyle=t.renderStyles.borderColor,this.getCtx().lineJoin="round",s&&"solid"!==s&&(Array.isArray(s)?this.getCtx().setLineDash(s):this.getCtx().setLineDash([5,5]));var x=function(t){e.getCtx().lineWidth=t,e.getCtx().stroke()};this._restore((function(){e._path((function(){t.renderStyles.borderTopWidth&&(e.topBorder({x:p,y:m,borderRadius:y?y+t.renderStyles.borderTopWidth/2:0,w:v,h:S}),!f&&x(t.renderStyles.borderTopWidth)),t.renderStyles.borderRightWidth&&(e.getCtx().moveTo(p+v-y-(y?t.renderStyles.borderTopWidth/2:0),m),e.rightBorder({x:p,y:m,borderRadius:y?y+t.renderStyles.borderRightWidth/2:0,w:v,h:S}),!f&&x(t.renderStyles.borderRightWidth)),t.renderStyles.borderBottomWidth&&(e.getCtx().moveTo(p+v,m+S-y-(y?t.renderStyles.borderRightWidth/2:0)),e.bottomBorder({x:p,y:m,borderRadius:y?y+t.renderStyles.borderBottomWidth/2:0,w:v,h:S}),!f&&x(t.renderStyles.borderBottomWidth)),t.renderStyles.borderLeftWidth&&(e.getCtx().moveTo(p+y+(y?t.renderStyles.borderBottomWidth/2:0),m+S),e.leftBorder({x:p,y:m,borderRadius:y?y+t.renderStyles.borderLeftWidth/2:0,w:v,h:S}),x(t.renderStyles.borderLeftWidth))}))}))}},_drawBackground:function(t){var e=this,n=t.renderStyles,i=n.backgroundColor,o=n.contentWidth,l=n.contentHeight,s=n.shadowColor,d=n.shadowBlur,a=n.paddingLeft,h=n.paddingRight,c=n.paddingTop,g=n.paddingBottom,u=n.opacity,f=n.shadowOffsetX,y=n.shadowOffsetY,p=n.borderLeftWidth,m=n.borderRightWidth,v=n.borderTopWidth,S=n.borderBottomWidth,x=this.getCtx(),_=et(t),L=t.contentX-t.renderStyles.paddingLeft-p,C=t.contentY-t.renderStyles.paddingTop-v,w=o+a+h+(p+m),T=l+c+g+(v+S);r(u)&&(x.globalAlpha=u),s&&d&&this._restore((function(){e._path((function(){e.topBorder({x:L,y:C,borderRadius:_,w:w,h:T}),e.rightBorder({x:L,y:C,borderRadius:_,w:w,h:T}),e.bottomBorder({x:L,y:C,borderRadius:_,w:w,h:T}),e.leftBorder({x:L,y:C,borderRadius:_,w:w,h:T})})),r(f)&&(e.getCtx().shadowOffsetX=f),r(y)&&(e.getCtx().shadowOffsetY=y),e.getCtx().shadowBlur=d,e.getCtx().shadowColor=s,e.getCtx().fillStyle=s,e.getCtx().fill()})),this._clip(t),i&&(this.getCtx().fillStyle=this._parseBackground(i,t),this.getCtx().fillRect(t.contentX-a,t.contentY-c,o+a+h,l+c+g)),this.isDebug()&&(this.getCtx().strokeStyle=t.debugColor||"green",this.getCtx().strokeRect(t.contentX,t.contentY,t.renderStyles.contentWidth,t.renderStyles.contentHeight))},_clip:function(t){var e=this;if("hidden"===t.renderStyles.overflow){var n=t.renderStyles,i=n.contentWidth,r=n.contentHeight,o=n.paddingLeft,l=n.paddingTop,s=n.paddingRight,d=n.paddingBottom,a=n.borderLeftWidth,h=n.borderRightWidth,c=n.borderTopWidth,g=n.borderBottomWidth,u=et(t),f=.7,y=t.contentX-t.renderStyles.paddingLeft-a*f,p=t.contentY-t.renderStyles.paddingTop-c*f,m=i+o+s+(a+h)*f,v=r+l+d+(c+g)*f;this._path((function(){e.topBorder({x:y,y:p,borderRadius:u,w:m,h:v}),e.rightBorder({x:y,y:p,borderRadius:u,w:m,h:v}),e.bottomBorder({x:y,y:p,borderRadius:u,w:m,h:v}),e.leftBorder({x:y,y:p,borderRadius:u,w:m,h:v})})),this.getCtx().clip()}},_parseBackground:function(t,e){if(Array.isArray(t)){for(var n=this.getCtx().createLinearGradient(e.contentX,e.contentY,e.contentX+e.renderStyles.contentWidth,e.contentY+e.renderStyles.contentHeight),i=0;i<t.length;i++)0===i?n.addColorStop(0,t[0]):n.addColorStop(i/(t.length-1),t[i]);return n}return t},_drawText:function(t){var e=this,n=t.renderStyles,i=n.color,r=n.contentWidth,o=n.lineHeight,l=n.textAlign,s=n.textIndent,d=n.textDecoration,a=t.contentX;this.getCtx().fillStyle=i,this.getCtx().textAlign=l,this.getCtx().font=t._getFont(),this.getCtx().textBaseline="middle",l===G.TEXT_ALIGN.RIGHT?a=t.contentX+r:l===G.TEXT_ALIGN.CENTER&&(a=t.contentX+r/2);for(var h,c=a,g=0,u=function(n){if(h=t.lines[n],c=0===n&&s?a+s:a,g=t.contentY+o/2+o*n+.5,y.getCtx().fillText(h.text,c,g),f&&400!==t.renderStyles.fontWeight){var r=.001*t.renderStyles.fontSize;y.getCtx().fillText(h.text,c-r,g)}if(d){var l=d[0];g+=1,y._restore((function(){e._path((function(){var n=g;"underline"===l?n=g+t._layout.fontHeight/2:"line-through"===l&&(n=g),e.getCtx().moveTo(c,n),e.getCtx().lineTo(c+h.layout.width,n)})),e.getCtx().strokeStyle=i,e.getCtx().stroke()}))}},y=this,p=0;p<t.lines.length;p++)u(p)},_drawImage:function(t){if(t._image){var e=t.renderStyles,n=e.contentWidth,i=e.contentHeight,r=t.options.attrs.mode,o=t._imageInfo,l=o.sx,s=o.sy,d=o.swidth,a=o.sheight,h=o.dx,c=o.dy,g=o.dwidth,u=o.dheight,f=o.width,y=o.height;"aspectFill"===r?this.getCtx().drawImage(t._image,l,s,d,a,t.contentX,t.contentY,n,i):"aspectFit"===r?this.getCtx().drawImage(t._image,0,0,f,y,h,c,g,u):this.getCtx().drawImage(t._image,t.contentX,t.contentY,n,i)}},_drawScroll:function(t){this.getCtx().translate(t.currentScrollX,t.currentScrollY)},_animate:function(){var t=this,e=Date.now();this.render(this.element),this.isAnimate&&window.requestAnimationFrame((function(){return t._animate(e)}))},isDebug:function(){return this.getLayer().options&&this.getLayer().options.debug},getCtx:function(){return this.layer.ctx},getLayer:function(){return this.layer},paint:function(t){this.getCtx().save(),t.paint(this.lastPaintTime),this.afterPaint(t)},afterPaint:function(t){t.hasChildren()&&"text"!==t.type||this.getCtx().restore(),this._helpParentRestoreCtx(t)},topBorder:function(t){var e=t.x,n=t.y,i=t.borderRadius,r=t.w;t.h,this.getCtx().moveTo(e,n+i),i&&this.getCtx().arc(e+i,n+i,i,2*angle,3*angle),this.getCtx().lineTo(e+r-i,n)},rightBorder:function(t){var e=t.x,n=t.y,i=t.borderRadius,r=t.w,o=t.h;i&&this.getCtx().arc(e+r-i,n+i,i,3*angle,4*angle),this.getCtx().lineTo(e+r,n+o-i)},bottomBorder:function(t){var e=t.x,n=t.y,i=t.borderRadius,r=t.w,o=t.h;i&&this.getCtx().arc(e+r-i,n+o-i,i,0,angle),this.getCtx().lineTo(e+i,n+o)},leftBorder:function(t){var e=t.x,n=t.y,i=t.borderRadius;t.w;var r=t.h;i&&this.getCtx().arc(e+i,n+r-i,i,angle,2*angle),this.getCtx().lineTo(e,n+i)},measureText:function(t,e){var n=this,i=0,r=0;return this._restore((function(){n.getCtx().font=t._getFont();var o=n.getCtx().measureText(e),l=o.width,s=o.actualBoundingBoxAscent;i=l,r=s||.7*t.renderStyles.fontSize})),{width:i,fontHeight:r+1}},getImageInstance:function(t){var e,n,i=this,r=null;return this.imageBus[t]?r=this.imageBus[t]:(f?this.getCanvas()?r=this.getCanvas().createImage():(console.warn("小程序请使用设置canvas参数以创建图片"),e=t,n={onload:function(){}},new Promise((function(t,n){wx.downloadFile({url:e,success:function(e){wx.getImageInfo({src:e.tempFilePath,success:function(n){t({target:{width:n.width,height:n.height},image:e.tempFilePath})}})},fail:function(t){n(t)}})})).then((function(t){n.onload(t)})).catch((function(t){})),r=n):(r=new Image).crossOrigin="anonymous",t&&(this.imageBus[t]=new Promise((function(t,e){r.onload=function(e){t({image:f&&!i.getCanvas()?e.image:r,info:{width:f?r.width:e.target.width,height:f?r.height:e.target.height}})},r.onerror=function(t){e(t)}}))),r.src=t),this.imageBus[t]},render:function(t){var e=this;this.lastFrameComplete=!1,this.lastPaintTime=Date.now(),t.parent?this.getCtx().clearRect(t.x,t.y,t.renderStyles.width,t.renderStyles.height):this.getCtx().clearRect(0,0,this.getLayer().options.width,this.getLayer().options.height),function(t,e){var n=!1,i=!1,r=function(){return n=!0},o=function(){return i=!0};if(null!=t){var l=[],s=null,a=[];for(l.push(t);0!==l.length&&(s=l.pop());)if(e(s,r,o),!i&&s){if(a=s.children,d(a))for(var h=a.length-1;h>=0;h--)n?n=!1:l.push(a[h])}else i=!1}}(t,(function(t,n,i){var r;(r=t)&&!0===r.__v_isElement&&t.isVisible()?e.paint(t):(i(),e._helpParentRestoreCtx(t))})),f&&this.getCtx().draw&&this.getCtx().draw(),this.lastFrameComplete=!0},renderFPS:function(){},readyToRender:function(t){this.element=t;var e=this.getLayer().options;this.lastPaintTime=Date.now(),e&&e.animate?this.animate():this.render(t)},requestRepaint:function(t){this.isAnimate||this.render(this.element)},getCanvas:function(){var t=this.getLayer().options;return t&&t.canvas||null},stopAnimate:function(){this.isAnimate=!1},onEffectFinished:function(){var t=this,e=Object.keys(this.imageBus).map((function(e){return t.imageBus[e]}));return Promise.all(e)}};return i}var it={createNodeOps:function(t){return{insert:function(t,e,n){t&&e.appendChild(t)},remove:function(t){},createElement:function(e,n){var i=(n=n||{}).style;return t("view",{style:i})},createText:function(e){return t("text",{},e)},createComment:function(t){},setText:function(t,e){},setElementText:function(t,e){},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling}}},createRenderer:function(n){var i=n.insert,r=n.remove,o=n.patchProp,l=n.createElement,s=n.createText;n.createComment;var d=n.setText,a=n.setElementText;n.parentNode;var h=n.nextSibling,c=function(t,e,n,i,r){if(void 0===i&&(i=null),void 0===r&&(r=null),t!==e)if(t&&!function(t,e){return t.type===e.type}(t,e)&&(i=C(t),x(t,r,!0),t=null),"Text"===e.type)g(t,e,n,i);else u(t,e,n,i,r)},g=function(t,e,n,r){null==t?i(s(e.children),n,r):e.children!==t.children&&d(e,e.children)},u=function(t,e,n,i,r){null==t?f(e,n,i,r):p(t,e,r)},f=function(t,e,n,r){var o;t.type;var s=t.props;o=t.el=l(t.type,s),y(t.children,o,null,r),i(o,e,n)},y=function(t,e,n,i,r){if(void 0===r&&(r=0),"string"==typeof t)c(null,R(t),e,n,i);else for(var o=r;o<t.length;o++){var l=R(t[o]);c(null,l,e,n,i)}},p=function(e,n,i){var r=n.el=e.el,o=e.props||t,l=n.props||t;m(e,n,r,null,i),e.children!==n.children&&a(r,n.children),S(r,n,o,l,i)},m=function(t,e,n,i,r){var o=t&&t.children,l=e.children;v(o,l,n,i,r)},v=function(t,n,i,r,o){n=n||e;var l,s=(t=t||e).length,d=n.length,a=Math.min(s,d);for(l=0;l<a;l++){var h=R(n[l]);c(t[l],h,i,null,o)}s>d?L(t,o,!0,!1,a):y(n,i,r,o,a)},S=function(e,n,i,r,l){if(i!==r){if(i!==t)for(var s in i)o(e,s,i[s],null,n.children,l,L);for(var s in r){var d=r[s],a=i[s];d!==a&&"value"!==s&&o(e,s,a,d,n.children,l,L)}"value"in r&&o(e,"value",i.value,r.value)}},x=function(t,e,n,i){void 0===n&&(n=!1),t.type,t.props;var r=t.children;L(r,e),n&&_(t)},_=function(t){r(t)},L=function(t,e,n,i,r){void 0===n&&(n=!1),void 0===r&&(r=0);for(var o=r;o<t.length;o++)x(t[o],e,n)},C=function(t){return h(t)},w=function(t,e){null==t?e._vnode&&x(e._vnode,null,!0):c(e._vnode||null,t,e,null,null),function(t,e){for(void 0===e&&(e=0),t=t||new Map;e<H.length;e++){var n=H[e];if(n&&n.pre){if(D(t,n))continue;H.splice(e,1),e--,n()}}}(),N(),e._vnode=t};return{render:w,createApp:I(w)}},h:function(t,e,n){var i=arguments.length;return 2===i?c(e)&&!d(e)?w(e)?T(t,null,[e]):T(t,e):T(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&w(n)&&(n=[n]),T(t,e,n))},createLayer:function(t,e){var n={ctx:t,node:null,p2cList:[],c2pList:[],nodeList:[],options:e,renderer:null,_initRender:function(){var t=Date.now();U(n.node),n._initC2PList(),n._initP2CList(),n._flow(),n.renderer.onEffectFinished().then((function(t){return n.lifecycle("onEffectSuccess",t)})).catch((function(t){return n.lifecycle("onEffectFail",t)})),n._repaint(),console.log("渲染".concat(n.p2cList.length,"个元素 耗时 ").concat(Date.now()-t," ms"))},_initP2CList:function(){n.node&&(n.p2cList=tt(n.node))},_initC2PList:function(){n.node&&(n.c2pList=$(n.node))},_flow:function(){for(var t=0;t<n.p2cList.length;t++)n.p2cList[t].init();n._reflow()},_reflow:function(){},_initPaintList:function(){},_reflowElement:function(t){for(var e=t;e&&e.line;)e=e.parent;for(var n=tt(e),i=0;i<n.length;i++);var r=$(e);for(i=0;i<r.length;i++)r[i]._initWidthHeight();if(t.isInFlow())this.onElementChange(e);else{for(i=0;i<n.length;i++)n[i]._initPosition();this._repaint()}},_callBeforePaint:function(){for(var t=0;t<n.p2cList.length;t++)n.p2cList[t].beforePaint&&n.p2cList[t].beforePaint()},_repaint:function(t){if(void 0===t&&(t=n.node),f&&(t=n.node),t&&!t.isInFlow()&&(t=n.node),n._callBeforePaint(),!n.node||!n.renderer)throw Error("repaint need node in layer");n.renderer.readyToRender(n.node)},update:function(t,e){n.ctx=t,n.options=e,n.options.renderStyles=e},init:function(){n.renderer=nt(n),n._initRender()},mount:function(t){console.log("mount"),n.node.appendChild(t)},onElementRemove:function(){},onElementAdd:function(t){console.log("onElementAdd",t),n._initC2PList(),n._initP2CList(),console.log(n.p2cList),n.p2cList.forEach((function(t){console.log("onElementAdd-000000",t),t.init()}))},onElementChange:function(t){u(t,(function(t,e){t._initWidthHeight(),"scroll-view"===t.type&&e()}));for(var e=0;e<n.p2cList.length;e++)n.p2cList[e]._initPosition();n._repaint()},animate:function(){console.warn("use [animate] option instead!")},getElementBy:function(){var t;return(t=n.node).getElementBy.apply(t,arguments)},lifecycle:function(t,e){n.options.lifecycle&&n.options.lifecycle[t]&&n.options.lifecycle[t](e)}},i=Z(n),r=function(){return i("root",{},[])};return n.node=r(),n.node.layer=n,n.node.root=n.node,n.init(),{layer:n,createCanvasElement:i,createRootCanvasElement:r}}};return it}));
//# sourceMappingURL=x-canvas.js.map
