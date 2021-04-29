/**
* @author: zkh
* @date: 2020-04-10 20:21:41
* @QQ：839982440
* Breadth-First-Search,BFS 广度优先算法
*/
import Queue from "./Queue"

export class BFSNode{   
    protected _friends:BFSNode[];    
    constructor(){        
        this._friends = [];                
    }

    public get friends():BFSNode[]{ 
        return this._friends;
    }

    public set friend(friend:BFSNode | BFSNode[]){
        if(Array.isArray(friend)){
            this._friends = this._friends.concat(friend);
        }else{
            this._friends.push(friend);
        }        
    } 
}


export default class BFS<T extends BFSNode>{
    private _q:Queue<T>;
    private _step:number;
    private _used:Set<T>;
    constructor(){       
        this._step = 0;       
        this._used = new Set();  
        this._q = new Queue<T>();
    }


    find(root:T,target:T):number{
        this._step = 0;        
        this._used.clear()
        this._q.clear();
        this._q.enQueue(root); 
        this._used.add(root);    
        while(!this._q.isEmpty()){
            this._step += 1;
            let size:number = this._q.size;
            for(let i:number = 0;i<size;i++){
                let node:T= this._q.front();               
                if(node == null){
                    this._step = -1;
                    return this._step;
                }
                node = node as T;               
                if(node === target){
                    return this._step;
                }
                    
                let friends:T[] = <T[]>node.friends;
                let friendSize:number = friends.length;
                for(var m:number = 0;m<friendSize;m++){
                    let tmpNode:T = friends[m];
                    if(this._used.has(tmpNode))
                        continue;
                    this._used.add(tmpNode);
                    this._q.enQueue(tmpNode);                    
                }
                this._q.deQueue();                
            }
        }
        return -1;        
    }

    private bfsTest():void{
        var bfs =  new BFS();

        var nodes:BFSNode[] = [];
         for(let i:number = 0;i<13;i++){
             let node:BFSNode = new BFSNode();
             nodes.push(node);
         }

         nodes[0].friend = [nodes[1],nodes[2],nodes[3]];
         nodes[1].friend = [nodes[4],nodes[5]];
         nodes[2].friend = [nodes[6],nodes[7]];
         nodes[3].friend = nodes[12];
         nodes[6].friend = [nodes[8],nodes[9]];
         nodes[7].friend = [nodes[10],nodes[11]];
         new Map
         let num:number = bfs.find(nodes[0],nodes[11]);
         console.log("step:",num);
    }
}