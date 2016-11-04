/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based on code from: https://github.com/kriskowal/q
 */
define(["require","exports","../Types","../Collections/LinkedNodeList","../Collections/Queue","../Disposable/ObjectPool","../Environment"],function(e,n,t,o,i,r,s){"use strict";function a(){for(var e;e=p.first;){var n=e.task,t=e.domain,o=e.context,i=e.args;e.canceller(),t&&t.enter(),c(n,t,o,i)}for(var r;r=N.dequeue();)c(r);m=!1}function c(e,n,t,o){try{e.apply(t,o)}catch(i){if(s.isNodeJS)throw n&&n.exit(),setTimeout(a,0),n&&n.enter(),i;setTimeout(function(){throw i},0)}n&&n.exit()}function u(){m||(m=!0,d())}function l(e,n,t){var o=g.take();return o.task=e,o.domain=s.isNodeJS&&process.domain,o.context=n,o.args=t&&t.slice(),o.canceller=function(){if(!o)return!1;var e=!!p.removeNode(o);return g.add(o),e},p.addNode(o),u(),{cancel:o.canceller,dispose:function(){o&&o.canceller()}}}function f(e){N.enqueue(e),u()}var d,m=!1,p=new o.LinkedNodeList,N=new i.Queue,g=new r.ObjectPool(40,function(){return{}},function(e){e.task=null,e.domain=null,e.context=null,e.args&&(e.args.length=0),e.args=null,e.canceller=null});if(n.deferImmediate=l,n.runAfterDeferred=f,s.isNodeJS)d=function(){process.nextTick(a)};else if(typeof setImmediate===t.Type.FUNCTION)d=typeof window!==t.Type.UNDEFINED?setImmediate.bind(window,a):function(){setImmediate(a)};else if(typeof MessageChannel!==t.Type.UNDEFINED){var v=new MessageChannel;v.port1.onmessage=function(){d=w,v.port1.onmessage=a,a()};var w=function(){v.port2.postMessage(0)};d=function(){setTimeout(a,0),w()}}else d=function(){setTimeout(a,0)};Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=l});
//# sourceMappingURL=deferImmediate.js.map