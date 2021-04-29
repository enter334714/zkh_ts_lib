
export default class Sort {

    /**
     *插入排序
     *在插入排序中,当待排序数组是有序时,是最优的情况,只需当前数跟前一个数比较一下就可以了,这时一共需要比较N- 1次,时间复杂度为O(N)
     *最坏的情况是待排序数组是逆序的,此时需要比较次数最多,总次数记为：1+2+3+…+N-1,所以,插入排序最坏情况下的时间复杂度为O(N^2)
     *插入排序适用于已经有部分数据已经排好，并且排好的部分越大越好。一般在输入规模大于1000的场合下不建议使用插入排序
     *空间复杂度O(1); 
     * @param arrs 
     * @param sortFun 
     */
    public static InsertSort(arrs: number[] | any[], sortFun?: (a: any, b: any) => boolean): void {
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
     * 空间复杂度O(1)
     * https://www.cnblogs.com/chengxiao/p/6104371.html
     * https://baike.baidu.com/item/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F/3229428?fr=aladdin
     * @param arrs 
     */
    public static ShellSort(arrs: number[] | any[], sortFun?: (a: any, b: any) => boolean): void {
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
    public static BubbleSort(arrs: number[] | any[], sortFun?: (a: any, b: any) => boolean): void {
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
     * 不稳定的排序方法
     * 第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
     * 然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
     * 以此类推，直到全部待排序的数据元素的个数为零。
     * @param arrs 
     * @param sortFun 
     */
    public static SelectSort<T>(arrs: number[] | T[], sortFun?: (a: T, b: T) => boolean): void {
        
    }

    /*测试函数*/
    public static test(): void {
        let testArr = [8, 15, 18, 20, 21, 40, 20, 45, 17];
        this.InsertSort(testArr, (a: number, b: number): boolean => {
            return a > b;
        });
        console.log("InsertSort插入排序 降序 ", testArr);
        this.InsertSort(testArr);
        console.log("InsertSort插入排序 升序 ", testArr);

        this.ShellSort(testArr, (a: number, b: number): boolean => {
            return a < b;
        });
        console.log("InsertSort希尔排序 降序 ", testArr);
        this.ShellSort(testArr)
        console.log("ShellSort希尔排 升序 ", testArr);

        let testArr1 = [{ value: 1 }, { value: 2 }, { value: 100 }, { value: 0 }]
        this.BubbleSort(testArr, (a: any, b: any): boolean => {
            return a < b;
        });
        console.log("BubbleSort冒泡排序 降序 ", testArr);
        this.BubbleSort(testArr)
        console.log("BubbleSort冒泡排序 升序 ", testArr);

        debugger;

    }
}