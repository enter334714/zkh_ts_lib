import BinaryHeap, { BinaryHeapSort } from "../heap/BinaryHeap";
/**
 * 一些排序算法
 * @author zkh
 */
export default class Sort {

    /**
     * 插入排序
     * 在插入排序中,当待排序数组是有序时,是最优的情况,只需当前数跟前一个数比较一下就可以了,这时一共需要比较N- 1次,时间复杂度为O(N)
     * 最坏的情况是待排序数组是逆序的,此时需要比较次数最多,总次数记为：1+2+3+…+N-1,所以,插入排序最坏情况下的时间复杂度为O(N^2)
     * 平均时间复杂度O(N^2)
     * 空间复杂度O(1) 
     * 插入排序适用于已经有部分数据已经排好，并且排好的部分越大越好。一般在输入规模大于1000的场合下不建议使用插入排序  
     * 稳定
     * @param arrs 
     * @param sortFun 
     */
    public static InsertSort<T>(arrs: T[], sortFun?: (a: T, b: T) => boolean): void {
        let len = arrs.length;
        for (let i: number = 1; i < len; i++) {
            for (let j = i; j > 0; j--) {
                let compare: boolean = false;
                if (sortFun) {
                    compare = sortFun(arrs[j], arrs[j - 1])
                } else {
                    compare = arrs[j] < arrs[j - 1];
                }
                if (compare) {
                    let temp = arrs[j];
                    arrs[j] = arrs[j - 1];
                    arrs[j - 1] = temp;
                }
            }
        }

    }
    /**
     * 希尔排序(Shell's Sort)是插入排序的一种又称“缩小增量排序”（Diminishing Increment Sort），是直接插入排序算法的一种更高效的改进版本
     * 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止
     * 时间复杂度O(n^（1.3—2）)
     * 平均时间复杂度O(nlogn)
     * 空间复杂度O(1)
     * https://www.cnblogs.com/chengxiao/p/6104371.html
     * https://baike.baidu.com/item/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F/3229428?fr=aladdin
     * @param arrs 
     */
    public static ShellSort<T>(arrs: T[], sortFun?: (a: T, b: T) => boolean): void {
        let len: number = arrs.length;
        for (let fraction = arrs.length / 2 >> 0; fraction > 0; fraction = fraction / 2 >> 0) {
            for (let i: number = fraction; i < len; i++) {
                for (let j = i - fraction; j >= 0; j -= fraction) {
                    let compare: boolean = false;
                    if (sortFun) {
                        compare = sortFun(arrs[j], arrs[j + fraction])
                    } else {
                        compare = arrs[j] > arrs[j + fraction];
                    }
                    if (compare) {
                        let temp = arrs[j];
                        arrs[j] = arrs[j + fraction];
                        arrs[j + fraction] = temp;
                    }
                }
            }
        }
    }

    /**
     * 冒泡排序
     * 稳定排序算法
     * 最好的时间复杂度为O（n）
     * 最坏的时间复杂度O（n²）
     * 平均时间复杂度为O（n²）
     * 空间复杂度O(1)    
     * https://baike.baidu.com/item/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F
     * @param arrs 
     * @param sortFun 
     */
    public static BubbleSort<T>(arrs: T[], sortFun?: (a: T, b: T) => boolean): void {
        let i: number = arrs.length - 1,
            j: number,
            temp: number,
            mark: Boolean = false; //mark一直为false 说明数组本身已经有序; 如:[1,2,3,4,5]
        while (i > 0) {
            mark = false;
            for (j = 0; j < i; j++) {
                let compare: boolean = false;
                if (sortFun) {
                    compare = sortFun(arrs[j], arrs[j + 1])
                } else {
                    compare = arrs[j] > arrs[j + 1];
                }
                if (compare) {
                    let temp = arrs[j];
                    arrs[j] = arrs[j + 1];
                    arrs[j + 1] = temp;
                    mark = true;
                }
            }
            if (!mark) {
                return;
            }
            i--;
        }
    }

    /**
     * 选择排序
     * 最好复杂度O(n^2)
     * 最差复杂度O(n^2)
     * 平均时间复杂度O(N^2)
     * 空间复杂度O(1)   
     * 不稳定的排序方法
     * 第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
     * 然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
     * 以此类推，直到全部待排序的数据元素的个数为零。
     * https://baike.baidu.com/item/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F/9762418?fr=aladdin
     * @param arrs 
     * @param sortFun 
     */
    public static SelectSort<T>(arrs: T[], sortFun?: (a: T, b: T) => boolean): void {
        let len: number = arrs.length - 1,
            i: number = 0,
            j: number,
            temp: T;
        while (i < len) {
            let minIndex: number = i;
            for (j = i + 1; j <= len; j++) {
                let compare: boolean = false;
                if (sortFun) {
                    compare = sortFun(arrs[j], arrs[minIndex])
                } else {
                    compare = arrs[j] < arrs[minIndex];
                }
                if (compare) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                let temp = arrs[i];
                arrs[i] = arrs[minIndex];
                arrs[minIndex] = temp;
            }
            i++;
        }
    }

    /**
     * 堆排序
     * 最好时间复杂度是O(nlog2n)
     * 最差时间复杂度是O(nlog2n)
     * 平均时间复杂度是O(nlog2n)
     * 空间复杂度为O(1)
     * */
    public static HeapSort<T>(arrs: T[], sortFun: BinaryHeapSort<T>): BinaryHeap<T> {
        let binaryHeap = new BinaryHeap<T>(sortFun);
        binaryHeap.heapify(arrs);
        return binaryHeap;
    }

    /**
     * 快速排序
     * 最好时间复杂度是O(nlog2n)
     * 最差时间复杂度是O(n^2)
     * 平均时间复杂度是O(nlog2n)
     * 空间复杂度为O(log2n)
     * https://baike.baidu.com/item/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/369842?fromtitle=%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F&fromid=2084344&fr=aladdin
     * 递归实现，在浏览器数据太多会堆栈溢出
     * sortFun 未实现后面搞
     */
    public static QuickSort<T>(arrs: T[], sortFun?: (a: T, centerValue: T) => boolean): T[] {
        const sort = (arrs: T[], left: number = 0, right: number = arrs.length - 1) => {
            if (left >= right) //如果左边的索引大于等于右边的索引说明整理完毕
                return;
            let i: number = left,
                j: number = right;
            const splitValue: T = arrs[j]; // 取无序数组最后一个数为基准值
            while (i < j) {
                while (i < j && arrs[i] <= splitValue) {
                    i++;
                }
                arrs[j] = arrs[i];
                while (j > i && arrs[j] >= splitValue) {
                    j--;
                }
                arrs[i] = arrs[j];
            }
            arrs[j] = splitValue;
            sort(arrs, left, j - 1);
            sort(arrs, j + 1, right);
        }
        sort(arrs);
        return arrs;
    }
    /**
     * 普通归并排序（迭代法;递归法 数据量大浏览器会递归溢出）
     * 时间复杂度O(n log n)
     * 空间复杂度T（n)
     * @param arrs 
     */
    public static mergeSort(arrs: number[]): number[] {
        let len: number = arrs.length;
        let temp: number[] = new Array(len);
        let step: number = 1, t: number;

        const merge = (arr: number[], temp: number[], left: number, middle: number, right: number) => {
            const leftEnd: number = middle - 1; // 通过右边数组的起始位置得到左边数组的结束位置。
            while (left <= leftEnd && middle < right) { // 如果‘指针’没有越界。
                if (arr[left] > arr[middle]) { // 如果左边数组第一个元素比右边数组第一个元素大。
                    temp[left + middle - leftEnd - 1] = arr[middle++]; // 将右边数组最小的放入有序数组 temp（初始值为空)。
                } else {
                    temp[left + middle - leftEnd - 1] = arr[left++]; // 将左边数组最小的放入有序数组 temp（初始值为空)。
                }
            }
            while (left > leftEnd && middle < right) { // 如果左边数组放完了，右边数组还有元素。
                temp[left + middle - leftEnd - 1] = arr[middle++]; // 那么依次将右边数组剩余的元素放入 temp 。
            }
            while (left <= leftEnd && middle >= right) { // 如果右边数组放完了，左边数组还有元素
                temp[left + middle - leftEnd - 1] = arr[left++]; // 那么依次将左边数组剩余的元素放入 temp 。
            }
        }

        for (t = 0; Math.pow(2, t) < len; t++, step *= 2) {
            const even: boolean = t % 2 === 0;
            for (let left: number = 0; left < len; left += 2 * step) { //左边数组起始位置 0
                const middle: number = left + step < len ? left + step : left; //右边数组的起始位置;
                const right: number = left + (2 * step) < len ? left + (2 * step) : len; // 右边界 right 就是 left + 两个数组长度。
                merge(even ? arrs : temp, even ? temp : arrs, left, middle, right); // 合并每两个相邻的数组。
            }
        }
        if (t % 2 === 0) {
            return arrs;//返回arr
        }
        return temp; // 返回 temp 。
    }

    /*测试函数*/
    public static test(): void {
        let testArr = [8, 15, 18, 20, 21, 40, 20, 45, 17];
        let testObjArr1 = [{ v: 8 }, { v: 15 }, { v: 18 }, { v: 20 }, { v: 21 }, { v: 40 }, { v: 20 }, { v: 45 }, { v: 17 }];
        this.InsertSort(testArr, (a: number, b: number): boolean => {
            return a > b;
        });
        console.log("InsertSort插入排序 降序 ", testArr);

        this.InsertSort(testObjArr1, (a: any, b: any): boolean => {
            return a.v < b.v;
        });
        console.log("InsertSort插入排序Object 升序 ", testObjArr1);

        this.InsertSort(testArr);
        console.log("InsertSort插入排序 升序 ", testArr);

        this.ShellSort(testArr, (a: number, b: number): boolean => {
            return a < b;
        });
        console.log("ShellSort希尔排序 降序 ", testArr);

        this.ShellSort(testObjArr1, (a: any, b: any): boolean => {
            return a.v < b.v;
        });
        console.log("ShellSort希尔排序Object 升序 ", testObjArr1);
        this.ShellSort(testArr)
        console.log("ShellSort希尔排序 升序 ", testArr);


        this.BubbleSort(testArr, (a: any, b: any): boolean => {
            return a < b;
        });
        console.log("BubbleSort冒泡排序 降序 ", testArr);
        this.BubbleSort(testArr)
        console.log("BubbleSort冒泡排序 升序 ", testArr);

        this.BubbleSort(testArr, (a: any, b: any): boolean => {
            return a < b;
        });
        console.log("SelectSort选择排序 降序 ", testArr);
        this.SelectSort<number>(testArr)
        console.log("SelectSort选择排序 升序 ", testArr);

        let heapSort = this.HeapSort<number>(testArr.concat(), (a: number, b: number): number => {
            return b - a;
        });
        let tempArr = [];
        while (!heapSort.isEmpty()) {
            tempArr.push(heapSort.pop())
        }
        console.log("heapSort 堆排序小顶堆 升序 ", tempArr);

        let heapSort1 = this.HeapSort<number>(testArr.concat(), (a: number, b: number): number => {
            return a - b;
        });
        tempArr = [];
        while (!heapSort1.isEmpty()) {
            tempArr.push(heapSort1.pop())
        }
        console.log("heapSort 堆排序大顶堆 降序", tempArr);

        let heapSort2 = this.HeapSort<any>(testObjArr1.concat(), (a: any, b: any): number => {
            return b.v - a.v;
        });
        tempArr = [];
        while (!heapSort2.isEmpty()) {
            tempArr.push(heapSort2.pop())
        }
        console.log("heapSort 堆排序OBJECT大顶堆 降序", tempArr);

        let quickSortArr = [3, 2, 8, 10, 15, 60, 7, 9]
        this.QuickSort<number>(quickSortArr);
        console.log("QuickSort 快速排序 升序 ", quickSortArr);


        this.mergeSort(quickSortArr);
        console.log("mergeSort 归并排序 升序 ", testArr);
        debugger;
    }
}