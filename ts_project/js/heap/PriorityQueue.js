"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 二叉堆实现的优先队列
*/
const BinaryHeap_1 = __importDefault(require("./BinaryHeap"));
class PriorityQueue {
    constructor(sortFun) {
        this._binaryHeap = new BinaryHeap_1.default(sortFun);
    }
    /**
    * 入队
    */
    enQueue(e) {
        this._binaryHeap.push(e);
    }
    /**
     * 出队
    */
    deQueue() {
        if (this.isEmpty()) {
            //@ts-ignore
            return null;
        }
        return this._binaryHeap.pop();
    }
    /**
     * 获取队首的元素
     * @return 成功 返回元素，失败返回-1;
     */
    front() {
        if (this.isEmpty()) {
            //@ts-ignore
            return null;
        }
        return this._binaryHeap.front();
    }
    /**
     * 是否空队列
     */
    isEmpty() {
        return this._binaryHeap.size == 0;
    }
    /**
     * 获取队列数据长度
    */
    get size() {
        return this._binaryHeap.size;
    }
    static test() {
        var pq = new PriorityQueue((a, b) => {
            return a - b;
        });
        var arr = [34, 4, 5, 12343, 1, 2, 3, -1, -3, -4, -19, 1, 2];
        for (let i = 0; i < arr.length; i++) {
            pq.enQueue(arr[i]);
        }
        for (let i = 0; i < arr.length; i++) {
            console.log("dequeue:", pq.deQueue());
        }
    }
}
exports.default = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map