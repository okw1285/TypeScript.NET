!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var i=t(require,exports);void 0!==i&&(module.exports=i)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","../Types","./Dictionaries/getIdentifier","./HashSet","../../extends"],function(e,t){"use strict";function i(e){return o.getIdentifier(e,typeof e!=n.Type.BOOLEAN)}/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var n=e("../Types"),o=e("./Dictionaries/getIdentifier"),r=e("./HashSet"),f=e("../../extends"),s=f["default"],u=function(e){function t(t){return e.call(this,t,i)||this}return s(t,e),t}(r.HashSet);t.Set=u,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u});
//# sourceMappingURL=Set.js.map