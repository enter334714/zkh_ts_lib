"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InsertSort {
    /*插入排序
    *在插入排序中,当待排序数组是有序时,是最优的情况,只需当前数跟前一个数比较一下就可以了,这时一共需要比较N- 1次,时间复杂度为O(N)
    *最坏的情况是待排序数组是逆序的,此时需要比较次数最多,总次数记为：1+2+3+…+N-1,所以,插入排序最坏情况下的时间复杂度为O(N^2)
    *空间复杂度O(1);
    */
    static InsertSort(arrs, sortFun) {
        let len = arrs.length;
        for (let i = 1; i < len; i++) {
            for (let j = i; j > 0; j--) {
                if (arrs[j] < arrs[j - 1]) {
                    let temp = arrs[j];
                    arrs[j] = arrs[j - 1];
                    arrs[j - 1] = temp;
                }
            }
        }
    }
    static test() {
        let testArr = [8, 15, 18, 20, 21, 40, 20, 45, 17];
        this.InsertSort(testArr);
        console.log(testArr);
    }
}
exports.default = InsertSort;
//# sourceMappingURL=InsertSort.js.map