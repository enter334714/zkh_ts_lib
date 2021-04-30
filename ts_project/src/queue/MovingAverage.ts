/**
*@author: zkh
*@QQ：839982440
*给一个整数流和一个窗口，计算在给定大小的窗口里的数字的平均值
*/

import Queue from "./Queue";

export class MovingAverage{
    private _q:Queue<number>;   
    private _sum:number;
    constructor(size:number){
        this._q = new Queue<number>(size);
        this._sum = 0;
        console.log("移动平均值");
    }

    public next(value:number):number{
        if(this._q.isFull()){
            let front:number = this._q.front();
            this._sum -= front;
            this._q.deQueue();
        }
        this._q.enQueue(value);
        this._sum +=  value;
        return this._sum / this._q.size;
    }

    public test():void{
         // var mv:MovingAverage = new MovingAverage(5);
        // console.log(mv.next(10));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
        // console.log(mv.next(5));
    }
}