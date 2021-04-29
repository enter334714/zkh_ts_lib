"use strict";
exports.__esModule = true;
/**
 * 二叉堆实现的优先队列
*/
var BinaryHeap_1 = require("./BinaryHeap");
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(sortFun) {
        this._binaryHeap = new BinaryHeap_1["default"](sortFun);
    }
    /**
    * 入队
    */
    PriorityQueue.prototype.enQueue = function (e) {
        this._binaryHeap.push(e);
    };
    /**
     * 出队
    */
    PriorityQueue.prototype.deQueue = function () {
        if (this.isEmpty()) {
            //@ts-ignore
            return null;
        }
        return this._binaryHeap.pop();
    };
    /**
     * 获取队首的元素
     * @return 成功 返回元素，失败返回-1;
     */
    PriorityQueue.prototype.front = function () {
        if (this.isEmpty()) {
            //@ts-ignore
            return null;
        }
        return this._binaryHeap.front();
    };
    /**
     * 是否空队列
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this._binaryHeap.size == 0;
    };
    Object.defineProperty(PriorityQueue.prototype, "size", {
        /**
         * 获取队列数据长度
        */
        get: function () {
            return this._binaryHeap.size;
        },
        enumerable: true,
        configurable: true
    });
    PriorityQueue.test = function () {
        var pq = new PriorityQueue(function (a, b) {
            return a - b;
        });
        var arr = [34, 4, 5, 12343, 1, 2, 3, -1, -3, -4, -19, 1, 2];
        for (var i = 0; i < arr.length; i++) {
            pq.enQueue(arr[i]);
        }
        for (var i = 0; i < arr.length; i++) {
            console.log("dequeue:", pq.deQueue());
        }
    };
    return PriorityQueue;
}());
exports["default"] = PriorityQueue;
