!function(r){if("object"==typeof module&&"object"==typeof module.exports){var e=r(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../../Compare","../../Types"],r)}(function(r,e){function n(r,e){if(r&&e&&r===e||!r&&!e)return!0;if(!r||!e)return!1;var n=r.length;return n!==e.length?!1:0===n?!0:n}function t(r,e,n){if(void 0===n&&(n=i.areEqual),!r)throw new Error("ArgumentNullException: 'arrays' cannot be null.");if(r.length<2)throw new Error("Cannot compare a set of arrays less than 2.");for(var t=r[0],a=0,u=r.length;u>a;++a)if(!o(t,r[a],e,n))return!1;return!0}function o(r,e,t,o){void 0===o&&(o=i.areEqual);var a=n(r,e);if(f["default"].isBoolean(a))return a;for(var u=0;a>u;++u)if(!o(r[u],e[u],t))return!1;return!0}function a(r,e){if(!r)return null;if(Array.isArray(r))return r.slice();var n,t=r.length;t>65536?n=new Array(t):(n=[],n.length=t);for(var o=0;t>o;o++)n[o]=r[o];return n.sort(e),n}function u(r,e,t){void 0===t&&(t=i.compare);var o=n(r,e);if(f["default"].isBoolean(o))return o;r=a(r,t),e=a(e,t);for(var u=0;o>u;++u)if(0!==t(r[u],e[u]))return!1;return!0}var i=r("../../Compare"),f=r("../../Types");e.areAllEqual=t,e.areEqual=o,e.areEquivalent=u});
//# sourceMappingURL=Compare.js.map
