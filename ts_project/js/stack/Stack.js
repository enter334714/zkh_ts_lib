"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this._list = new Array();
    }
    push(val) {
        return this._list.push(val);
    }
    top() {
        let length = this._list.length;
        return this._list[length - 1];
    }
    pop() {
        return this._list.pop();
    }
    isEmpty() {
        return this._list.length === 0;
    }
}
exports.default = Stack;
//# sourceMappingURL=Stack.js.map