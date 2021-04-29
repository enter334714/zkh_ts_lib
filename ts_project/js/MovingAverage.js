"use strict";
/**
*@author: zkh
*@date: 2020-04-10 19:31:36
*@QQ：839982440
*给一个整数流和一个窗口，计算在给定大小的窗口里的数字的平均值
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = __importDefault(require("./queue/Queue"));
class MovingAverage {
    constructor(size) {
        this._q = new Queue_1.default(size);
        this._sum = 0;
        console.log("移动平均值");
    }
    next(value) {
        if (this._q.isFull()) {
            let front = this._q.front();
            this._sum -= front;
            this._q.deQueue();
        }
        this._q.enQueue(value);
        this._sum += value;
        return this._sum / this._q.Size;
    }
}
exports.MovingAverage = MovingAverage;
//# sourceMappingURL=MovingAverage.js.map