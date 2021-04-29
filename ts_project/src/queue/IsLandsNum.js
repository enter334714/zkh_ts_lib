"use strict";
/**
*@author: zkh
*@date: 2020-04-13 12:04:30
*@QQ：839982440
*岛屿数量
*/
exports.__esModule = true;
var IsLandsNum = /** @class */ (function () {
    function IsLandsNum() {
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
        var index = 0;
        for (var i = 0; i < this.grid.length; i++) {
            var items = this.grid[i];
            for (var j = 0; j < items.length; j++) {
                if (items[j] == "0")
                    continue;
                index++;
                this.checkFriend(i, j);
            }
        }
        console.log("index:", index);
    }
    IsLandsNum.prototype.checkFriend = function (i, j) {
        this.createFriend(i + 1, j);
        this.createFriend(i - 1, j);
        this.createFriend(i, j + 1);
        this.createFriend(i, j - 1);
    };
    IsLandsNum.prototype.createFriend = function (i, j) {
        if (i < this.grid.length && i >= 0 && j >= 0 && j < this.grid[i].length) {
            if (this.grid[i][j] == "0")
                return;
            this.grid[i][j] = "0";
            this.checkFriend(i, j);
            // this._checkd.add(i+""+j);
        }
    };
    return IsLandsNum;
}());
exports["default"] = IsLandsNum;
