!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var o=t(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","../../../Exceptions/ArgumentNullException"],function(e,t){"use strict";/**
     * https://en.wikipedia.org/wiki/Insertion_sort
     * @param target
     * @returns {T[]}
     */
function o(e){if(!e)throw new r.ArgumentNullException("target");for(var t=e.length,o=1;o<t;o++)for(var n=o,i=void 0;n>0&&e[i=n-1]>e[n];){var u=e[n];e[n]=e[i],e[i]=u,n--}return e}var r=e("../../../Exceptions/ArgumentNullException");t.insertionSort=o});
//# sourceMappingURL=insertionSort.js.map