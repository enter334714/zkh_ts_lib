/**
 * 二叉堆实现的优先队列
*/
import BinaryHeap, { BinaryHeapSort } from "./BinaryHeap";
export default class PriorityQueue<T>{
    private _binaryHeap: BinaryHeap<T>;
    constructor(sortFun: BinaryHeapSort<T>) {
        this._binaryHeap = new BinaryHeap<T>(sortFun);
    }

    /**
    * 入队
    */
    public enQueue(e: T): void {
        this._binaryHeap.push(e);
    }

    /**
     * 出队
    */
    public deQueue(): T {
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
    public front(): T {
        if (this.isEmpty()) {
            //@ts-ignore
            return null;
        }
        return this._binaryHeap.front();
    }


    /**
     * 是否空队列
     */
    public isEmpty(): boolean {
        return this._binaryHeap.size == 0;
    }

    /**
     * 获取队列数据长度
    */
    public get size(): number {
        return this._binaryHeap.size;
    }



    public static test():void{
        var pq = new PriorityQueue<number>((a:number,b:number)=>{
            return a-b;
        });


        var arr = [34,4,5,12343,1,2,3,-1,-3,-4,-19,1,2];

        for(let i:number = 0;i<arr.length;i++){
            pq.enQueue(arr[i]);
        }

        for(let i:number = 0;i<arr.length;i++){
            console.log("dequeue:",pq.deQueue())
        }       
    }

}