/**
*@author: zkh
*@QQ：839982440
*岛屿数量
*/

import Queue from "./Queue";
import BFS, { BFSNode } from "./BFS";









export default class IsLandsNum{

    // private grid = [
    //     [1,1,1,1,0],
    //     [1,1,0,1,0],
    //     [1,1,0,0,0],
    //     [0,0,0,0,0],
    // ]

    private grid = [
        ["0", "0", "0", "0", "1"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ]

 
    constructor(){                   
        let index:number = 0;
        for(let i:number = 0;i<this.grid.length;i++){
            let items = this.grid[i];
            for(let j:number = 0;j<items.length;j++){ 
                if(items[j] == "0")
                   continue;            
                index++;                             
                this.checkFriend(i,j);               
            }
        }
                
        console.log("index:",index);               
    }

    private checkFriend(i:number,j:number):void{
        this.createFriend(i+1,j);
        this.createFriend(i-1,j);
        this.createFriend(i,j+1);
        this.createFriend(i,j-1);
    }
 
    private createFriend(i:number,j:number):void{
      
        if(i<this.grid.length && i>=0 && j>=0 && j<this.grid[i].length){
             if(this.grid[i][j] == "0")return; 
            this.grid[i][j] = "0";   
            this.checkFriend(i,j);      
            // this._checkd.add(i+""+j);
        }
    }


}