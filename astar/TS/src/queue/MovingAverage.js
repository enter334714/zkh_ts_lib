"use strict";
/**
*@author: zkh
*@date: 2020-04-10 19:31:36
*@QQ：839982440
*给一个整数流和一个窗口，计算在给定大小的窗口里的数字的平均值
*/
exports.__esModule = true;
var Queue_1 = require("./Queue");
var MovingAverage = /** @class */ (function () {
    function MovingAverage(size) {
        this._q = new Queue_1["default"](size);
        this._sum = 0;
        console.log("移动平均值");
    }
    MovingAverage.prototype.next = function (value) {
        if (this._q.isFull()) {
            var front = this._q.front();
            this._sum -= front;
            this._q.deQueue();
        }
        this._q.enQueue(value);
        this._sum += value;
        return this._sum / this._q.size;
    };
    MovingAverage.prototype.test = function () {
        // var mv:MovingAverage = new MovingAverage(5);
        // console.log(mv.next(10));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
    };
    return MovingAverage;
}());
exports.MovingAverage = MovingAverage;
