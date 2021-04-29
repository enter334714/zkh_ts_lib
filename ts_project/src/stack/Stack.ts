export default class Stack<T>{
    private _list:Array<T>;
 
    constructor(){
        this._list = new Array<T>()
    }

    public push(val:T){
        return this._list.push(val);
    }

    public top():T{
        let length:number = this._list.length;       
        return this._list[length-1];
    }

    public pop():T{      
        return this._list.pop() as T;
    }

    public isEmpty():boolean{
        return this._list.length === 0;
    }
}