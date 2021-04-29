"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this._list = new Array();
    }
    Stack.prototype.push = function (val) {
        return this._list.push(val);
    };
    Stack.prototype.top = function () {
        var length = this._list.length;
        return this._list[length - 1];
    };
    Stack.prototype.pop = function () {
        return this._list.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this._list.length === 0;
    };
    return Stack;
}());
exports["default"] = Stack;
