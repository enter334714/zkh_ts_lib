"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MinStack {
    constructor() {
        this._minData = new Array();
        this._list = new Array();
    }
    push(x) {
        if (this._minData.length == 0 || this._minData[this._minData.length - 1] >= x) {
            this._minData.push(x);
        }
        return this._list.push(x);
    }
    top() {
        let length = this._list.length;
        return this._list[length - 1];
    }
    pop() {
        if (this._list[this._list.length - 1] == this._minData[this._minData.length - 1]) {
            this._minData.pop();
        }
        return this._list.pop();
    }
    getMin() {
        return this._minData[this._minData.length - 1];
    }
    test() {
        var a = new MinStack();
        var obj = new MinStack();
        obj.push(-2);
        obj.push(0);
        obj.push(-3);
        obj.getMin();
        obj.pop();
        obj.top();
        console.log("min:", obj.getMin());
    }
}
exports.default = MinStack;
//# sourceMappingURL=MinStack.js.map