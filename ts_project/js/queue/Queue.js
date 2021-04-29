"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
*@author: zkh
*@date: 2018-04-10 17:54:06
*@QQ：839982440
*/
class Queue {
    constructor(maxLen = 10) {
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
    enQueue(value) {
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
    }
    /**
     * 出队
     *
     */
    deQueue() {
        if (this.isEmpty()) {
            //@ts-ignore    
            return null;
        }
        let result = this.front();
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
    }
    /**
     * 获取队首的元素
     */
    front() {
        if (this.isEmpty()) {
            //@ts-ignore    
            return null;
        }
        return this._list[this._head];
    }
    /**
     * 获取队尾元素
     */
    rear() {
        if (this._size == 0) {
            //@ts-ignore    
            return null;
        }
        return this._list[this._tail];
    }
    /**
     * 是否满队列
     * @return 是 true 否 false
     */
    isFull() {
        if (this._size >= this._maxLen) {
            return true;
        }
        return false;
    }
    /**
     * 是否空队列
     */
    isEmpty() {
        return this._size == 0;
    }
    /**
     * 获取队列数据长度
    */
    get size() {
        return this._size;
    }
    clear() {
        this._list.length = 0;
        this._size = 0;
        this._head = -1;
        this._tail = -1;
    }
    print() {
        console.log(JSON.stringify(this._list));
    }
    test() {
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
    }
}
exports.default = Queue;
//# sourceMappingURL=Queue.js.map