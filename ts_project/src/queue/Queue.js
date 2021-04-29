"use strict";
exports.__esModule = true;
/**
*@author: zkh
*@date: 2018-04-10 17:54:06
*@QQ：839982440
*/
var Queue = /** @class */ (function () {
    function Queue(maxLen) {
        if (maxLen === void 0) { maxLen = 10; }
        this._maxLen = maxLen;
        this._list = new Array(this._maxLen);
        this._size = 0;
        this._head = -1;
        this._tail = -1;
        console.log("Queue _maxLen=", this._maxLen);
    }
    /**
     * 入队
     */
    Queue.prototype.enQueue = function (value) {
        if (this.isFull()) {
            console.error("队列已满,插入失败!");
            return false;
        }
        if (this.isEmpty())
            this._head = 0;
        this._tail = (this._tail + 1) % this._maxLen;
        this._list[this._tail] = value;
        this._size++;
        return true;
    };
    /**
     * 出队
     *
     */
    Queue.prototype.deQueue = function () {
        if (this.isEmpty()) {
            //@ts-ignore    
            return null;
        }
        var result = this.front();
        if (this._head == this._tail) {
            this._head = -1;
            this._tail = -1;
            this._size--;
        }
        else {
            this._head = (this._head + 1) % this._maxLen;
            this._size--;
        }
        return result;
    };
    /**
     * 获取队首的元素
     */
    Queue.prototype.front = function () {
        if (this.isEmpty()) {
            //@ts-ignore    
            return null;
        }
        return this._list[this._head];
    };
    /**
     * 获取队尾元素
     */
    Queue.prototype.rear = function () {
        if (this._size == 0) {
            //@ts-ignore    
            return null;
        }
        return this._list[this._tail];
    };
    /**
     * 是否满队列
     * @return 是 true 否 false
     */
    Queue.prototype.isFull = function () {
        if (this._size >= this._maxLen) {
            return true;
        }
        return false;
    };
    /**
     * 是否空队列
     */
    Queue.prototype.isEmpty = function () {
        return this._size == 0;
    };
    Object.defineProperty(Queue.prototype, "size", {
        /**
         * 获取队列数据长度
        */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.clear = function () {
        this._list.length = 0;
        this._size = 0;
        this._head = -1;
        this._tail = -1;
    };
    Queue.prototype.print = function () {
        console.log(JSON.stringify(this._list));
    };
    Queue.prototype.test = function () {
        // var queue:Queue<number> = new Queue<number>(5);
        // queue.enQueue(1);
        // queue.enQueue(1);
        // queue.enQueue(1);
        // queue.enQueue(1);
        // queue.enQueue(1);
        // queue.enQueue(1);
        // queue.deQueue();
        // queue.enQueue(2);
        // queue.deQueue();
        // queue.deQueue();
        // console.log(queue.size)
        // queue.enQueue(888);
        // console.log(queue.size)
        // queue.enQueue(999);  
    };
    return Queue;
}());
exports["default"] = Queue;
