"use strict";
/**
*@author: zkh
*@date: 2020-04-13 12:04:30
*@QQ：839982440
*岛屿数量
*/
Object.defineProperty(exports, "__esModule", { value: true });
class IsLandsNum {
    constructor() {
        // private grid = [
        //     [1,1,1,1,0],
        //     [1,1,0,1,0],
        //     [1,1,0,0,0],
        //     [0,0,0,0,0],
        // ]
        this.grid = [
            ["0", "0", "0", "0", "1"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ];
        let index = 0;
        for (let i = 0; i < this.grid.length; i++) {
            let items = this.grid[i];
            for (let j = 0; j < items.length; j++) {
                if (items[j] == "0")
                    continue;
                index++;
                this.checkFriend(i, j);
            }
        }
        console.log("index:", index);
    }
    checkFriend(i, j) {
        this.createFriend(i + 1, j);
        this.createFriend(i - 1, j);
        this.createFriend(i, j + 1);
        this.createFriend(i, j - 1);
    }
    createFriend(i, j) {
        if (i < this.grid.length && i >= 0 && j >= 0 && j < this.grid[i].length) {
            if (this.grid[i][j] == "0")
                return;
            this.grid[i][j] = "0";
            this.checkFriend(i, j);
            // this._checkd.add(i+""+j);
        }
    }
}
exports.default = IsLandsNum;
//# sourceMappingURL=IsLandsNum.js.map