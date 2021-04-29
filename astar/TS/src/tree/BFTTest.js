"use strict";
exports.__esModule = true;
var BFT_1 = require("./BFT");
var BFTTest = /** @class */ (function () {
    function BFTTest() {
        var bft = new BFT_1["default"]();
        var nums = [5, 3, 6, 2, 4, 8];
        var tt = [];
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var node = new BFT_1.Bstack(a);
            tt.push(node);
            bft.add(node);
        }
        console.log("root:", bft.root);
        console.log("contains:", bft.contains(tt[0]));
        bft.inOrder();
        console.log("min11:", bft.getMax());
        var maxnode = bft.removeMax(tt[1]);
        console.log("max：", maxnode);
        console.log("min11:", bft.getMax());
        bft.removeMax();
        bft.inOrder();
    }
    return BFTTest;
}());
exports["default"] = BFTTest;
