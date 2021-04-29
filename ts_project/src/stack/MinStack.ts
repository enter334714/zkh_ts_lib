export default class MinStack{
    private _list:Array<number>;
    private _minData:Array<number>;
    constructor(){
        this._minData = new Array<number>();
        this._list = new Array<number>()
    }

    public push(x:number){
        if(this._minData.length==0 || this._minData[this._minData.length-1]>=x){
            this._minData.push(x);
        }      
        return this._list.push(x);
    }

    public top():number{
        let length:number = this._list.length;     
        return this._list[length-1];
    }

    public pop():number | undefined{   
        if(this._list[this._list.length-1]==this._minData[this._minData.length-1]){
            this._minData.pop();
        }
          
        return this._list.pop();
    }

    public getMin():number{
        return this._minData[this._minData.length-1];
    }


    public test():void{
        var a = new MinStack();
        var obj = new MinStack();
        obj.push(-2);
        obj.push(0);
        obj.push(-3);
        obj.getMin();
        obj.pop();
        obj.top();
        console.log("min:",obj.getMin());
    }

}