/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/system.systemexception%28v=vs.110%29.aspx
 */
'use strict'; // For compatibility with (let, const, function, class);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", '../Exception'], function (require, exports) {
    var Exception_1 = require('../Exception');
    var NAME = 'SystemException';
    var SystemException = (function (_super) {
        __extends(SystemException, _super);
        function SystemException() {
            _super.apply(this, arguments);
        }
        /*
            constructor(
                message:string = null,
                innerException:Error = null,
                beforeSealing?:(ex:any)=>void)
            {
                super(message, innerException, beforeSealing);
            }
        */
        SystemException.prototype.getName = function () {
            return NAME;
        };
        return SystemException;
    })(Exception_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SystemException;
});
//# sourceMappingURL=SystemException.js.map