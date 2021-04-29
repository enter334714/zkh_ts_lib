/**
 * (a,b)=>{return a - b}; 大顶堆
 * (a,b)=>{return b - a};  小顶堆
 */
export interface BinaryHeapSort<T> {
    (a: T, b: T): number;
}

/**
 * 二叉堆
 * 二叉堆是一个完全二叉树
 * 有最大的，最小堆
 * 最大堆性质:  父节点的值一定比子节点的值大
 * 最小堆性质:  父节点的值一定比子节点的值小
 * @author zkh
 */
export default class BinaryHeap<T> {
    private _list: T[];
    private _sortFun: BinaryHeapSort<T>
    constructor(sortFun: BinaryHeapSort<T>) {
        this._list = new Array<T>();
        this._sortFun = sortFun;
    }

    /**
     * 插入一个元素
     * @param e 
     */
    public push(e: T): void {
        this._list.push(e);
        this.shiftUp(this._list.length - 1);
    }

    /**
     * 弹出堆顶
     */
    public pop(): T {
        let e = this.front();
        this.swap(0, this._list.length - 1);
        this._list.length = this._list.length - 1;
        this.shiftDown(0);
        return e;
    }

    private swap(i: number, j: number): void {
        let ie = this._list[i];
        this._list[i] = this._list[j];
        this._list[j] = ie;
    }
    /**
     * 把下标为K的元素对比上浮，维持二叉堆的性质
     * @param k 
     */
    private shiftUp(k: number): void {
        while (k > 0 && this._sortFun(this._list[this.parent(k)], this._list[k]) < 0) {
            this.swap(this.parent(k), k);
            k = this.parent(k)
        }
    }

    /**
    * 把下标为K的元素对比下沉，维持二叉堆的性质
    * @param k 
    */
    private shiftDown(k: number): void {
        while (this.leftChild(k) < this.size) {
            let leftIndex: number = this.leftChild(k);
            let j: number = leftIndex;
            let rightIndex = leftIndex + 1;
            //右节点索引未越界 且 右子节点大于左子节点
            if (rightIndex < this.size && this._sortFun(this._list[rightIndex], this._list[leftIndex]) > 0) {
                j = rightIndex;
            }

            if (this._sortFun(this._list[k], this._list[j]) < 0) {
                this.swap(k, j);
                k = j;
            } else {
                break;
            }
        }
    }

    /**
     * 获取父节点的下标
     * @param k 
     */
    private parent(index: number): number {
        if (index == 0) {
            throw new Error("index_0 doesn't hava parent.");
        }
        return Math.floor((index - 1) / 2)
    }

    /**
     * 获取左子节点的下标
     * @param index 
     */
    private leftChild(index: number): number {
        return index * 2 + 1;
    }

    /**
    * 获取右子节点的下标
    * @param index 
    */
    private rightChild(index: number): number {
        return index * 2 + 2;
    }

    /**
     * 获取堆顶
     */
    public front(): T {
        if (this.isEmpty()) {
            throw new Error("can not find, when heap is empty")
        }
        return this._list[0];
    }

    /**
     * 取出最大元素，并替换为传入的元素
     */
    public replace(value: T): T {
        let e = this.front();
        this._list[0] = value;
        this.shiftDown(0);
        return e;
    }

    /**
     * 把数组转为为一个堆
     * @param e 
     */
    public heapify(e: T[]): void {
        this._list = e;
        for (let i = this.parent(e.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    /**
     * 堆大小
    */
    public get size(): number {
        return this._list.length;
    }

    /**
     * 是否空堆
     */
    public isEmpty(): boolean {
        return this._list.length == 0;
    }

    //测试
    public static test(): void {
        let n = 100;
        let bh = new BinaryHeap<number>((a: number, b: number) => {
            return a - b;
        });

        for (let i = 0; i < n; i++) {
            let value = Math.random() * 1000;
            value = value ^ 0;
            bh.push(value);
        }


        let bhArr: number[] = [];
        for (let i = 0; i < n; i++) {
            let value = bh.pop();
            bhArr.push(value);
            // console.log("value:",value)
        }
        for (let i = 1; i < n; i++) {
            if (bhArr[i - 1] < bhArr[i]) {
                console.error("测试失败")
            }
        }

        // var testArr= [8,10,20,301,201,40,201,333];
        bh.heapify([8, 10, 20, 301, 201, 40, 201, 333]);
        // console.log("testArrlen：",testArr.length)
        for (let i = 0; i < 8; i++) {
            // console.log("len:",testArr.length)
            console.log('bh' + i + "：", bh.pop())
        }
    }
}