"use strict";
exports.__esModule = true;
var Vaild_1 = require("./stack/Vaild");
var BFTTest_1 = require("./tree/BFTTest");
var PriorityQueue_1 = require("./heap/PriorityQueue");
var Main = /** @class */ (function () {
    function Main() {
        Vaild_1["default"].test();
        new BFTTest_1["default"]();
        //    BinaryHeap.test();
        PriorityQueue_1["default"].test();
    }
    Main.prototype.test = function (a, b) {
        return 1;
    };
    return Main;
}());
var main = new Main();
