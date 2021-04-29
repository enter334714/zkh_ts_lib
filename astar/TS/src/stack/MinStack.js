"use strict";
exports.__esModule = true;
var MinStack = /** @class */ (function () {
    function MinStack() {
        this._minData = new Array();
        this._list = new Array();
    }
    MinStack.prototype.push = function (x) {
        if (this._minData.length == 0 || this._minData[this._minData.length - 1] >= x) {
            this._minData.push(x);
        }
        return this._list.push(x);
    };
    MinStack.prototype.top = function () {
        var length = this._list.length;
        return this._list[length - 1];
    };
    MinStack.prototype.pop = function () {
        if (this._list[this._list.length - 1] == this._minData[this._minData.length - 1]) {
            this._minData.pop();
        }
        return this._list.pop();
    };
    MinStack.prototype.getMin = function () {
        return this._minData[this._minData.length - 1];
    };
    MinStack.prototype.test = function () {
        var a = new MinStack();
        var obj = new MinStack();
        obj.push(-2);
        obj.push(0);
        obj.push(-3);
        obj.getMin();
        obj.pop();
        obj.top();
        console.log("min:", obj.getMin());
    };
    return MinStack;
}());
exports["default"] = MinStack;
