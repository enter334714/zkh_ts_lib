"use strict";
/**
 * 二叉堆
 * 二叉堆是一个完全二叉树
 * 有最大的，最小堆
 * 最大堆性质:  父节点的值一定比子节点的值大
 * 最小堆性质:  父节点的值一定比子节点的值小
 */
exports.__esModule = true;
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(sortFun) {
        this._list = new Array();
        this._sortFun = sortFun;
    }
    /**
     * 插入一个元素
     * @param e
     */
    BinaryHeap.prototype.push = function (e) {
        this._list.push(e);
        this.shiftUp(this._list.length - 1);
    };
    /**
     * 弹出堆顶
     */
    BinaryHeap.prototype.pop = function () {
        var e = this.front();
        this.swap(0, this._list.length - 1);
        this._list.length = this._list.length - 1;
        this.shiftDown(0);
        return e;
    };
    BinaryHeap.prototype.swap = function (i, j) {
        var ie = this._list[i];
        this._list[i] = this._list[j];
        this._list[j] = ie;
    };
    /**
     * 把下标为K的元素对比上浮，维持二叉堆的性质
     * @param k
     */
    BinaryHeap.prototype.shiftUp = function (k) {
        while (k > 0 && this._sortFun(this._list[this.parent(k)], this._list[k]) < 0) {
            this.swap(this.parent(k), k);
            k = this.parent(k);
        }
    };
    /**
    * 把下标为K的元素对比下沉，维持二叉堆的性质
    * @param k
    */
    BinaryHeap.prototype.shiftDown = function (k) {
        while (this.leftChild(k) < this.size) {
            var leftIndex = this.leftChild(k);
            var j = leftIndex;
            var rightIndex = leftIndex + 1;
            //右节点索引未越界 且 右子节点大于左子节点
            if (rightIndex < this.size && this._sortFun(this._list[rightIndex], this._list[leftIndex]) > 0) {
                j = rightIndex;
            }
            if (this._sortFun(this._list[k], this._list[j]) < 0) {
                this.swap(k, j);
                k = j;
            }
            else {
                break;
            }
        }
    };
    /**
     * 获取父节点的下标
     * @param k
     */
    BinaryHeap.prototype.parent = function (index) {
        if (index == 0) {
            throw new Error("index_0 doesn't hava parent.");
        }
        return Math.floor((index - 1) / 2);
    };
    /**
     * 获取左子节点的下标
     * @param index
     */
    BinaryHeap.prototype.leftChild = function (index) {
        return index * 2 + 1;
    };
    /**
    * 获取右子节点的下标
    * @param index
    */
    BinaryHeap.prototype.rightChild = function (index) {
        return index * 2 + 2;
    };
    /**
     * 获取堆顶
     */
    BinaryHeap.prototype.front = function () {
        if (this.isEmpty()) {
            throw new Error("can not find, when heap is empty");
        }
        return this._list[0];
    };
    /**
     * 取出最大元素，并替换为传入的元素
     */
    BinaryHeap.prototype.replace = function (value) {
        var e = this.front();
        this._list[0] = value;
        this.shiftDown(0);
        return e;
    };
    /**
     * 把数组转为为一个堆
     * @param e
     */
    BinaryHeap.prototype.heapify = function (e) {
        this._list = e;
        for (var i = this.parent(e.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    };
    Object.defineProperty(BinaryHeap.prototype, "size", {
        /**
         * 堆大小
        */
        get: function () {
            return this._list.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 是否空堆
     */
    BinaryHeap.prototype.isEmpty = function () {
        return this._list.length == 0;
    };
    //测试
    BinaryHeap.test = function () {
        var n = 100;
        var bh = new BinaryHeap(function (a, b) {
            return a - b;
        });
        for (var i = 0; i < n; i++) {
            var value = Math.random() * 1000;
            value = value ^ 0;
            bh.push(value);
        }
        var bhArr = [];
        for (var i = 0; i < n; i++) {
            var value = bh.pop();
            bhArr.push(value);
            // console.log("value:",value)
        }
        for (var i = 1; i < n; i++) {
            if (bhArr[i - 1] < bhArr[i]) {
                console.error("测试失败");
            }
        }
        // var testArr= [8,10,20,301,201,40,201,333];
        bh.heapify([8, 10, 20, 301, 201, 40, 201, 333]);
        // console.log("testArrlen：",testArr.length)
        for (var i = 0; i < 8; i++) {
            // console.log("len:",testArr.length)
            console.log('bh' + i + "：", bh.pop());
        }
    };
    return BinaryHeap;
}());
exports["default"] = BinaryHeap;
