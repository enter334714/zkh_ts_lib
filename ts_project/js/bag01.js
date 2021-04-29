"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bag01 {
    constructor() {
    }
    /* 解决背包问题的递归函数
    *
    * @param w        物品的重量数组
    * @param v        物品的价值数组
    * @param index    当前待选择的物品索引
    * @param capacity 当前背包有效容量
    * @return 最大价值
    */
    solveKS(w, v, index, capacity) {
        //基准条件：如果索引无效或者容量不足，直接返回当前价值0
        if (index < 0 || capacity <= 0)
            return 0;
        //不放第index个物品所得价值
        console.log("index111:", index, w, v, capacity);
        var res = this.solveKS(w, v, index - 1, capacity);
        //放第index个物品所得价值（前提是：第index个物品可以放得下）
        if (w[index] <= capacity) {
            console.log("index222:", index, w, v, capacity);
            res = Math.max(res, v[index] + this.solveKS(w, v, index - 1, capacity - w[index]));
        }
        console.log("res:", res, "index:", index, w, v, capacity);
        return res;
    }
    knapSack(w, v, C) {
        let size = w.length;
        return this.solveKS(w, v, size - 1, C);
    }
    test() {
        var w = [2, 1, 3, 2];
        var v = [12, 10, 20, 15];
        console.log(this.knapSack(w, v, 5));
    }
}
exports.default = Bag01;
//# sourceMappingURL=Bag01.js.map