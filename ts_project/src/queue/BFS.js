"use strict";
exports.__esModule = true;
/**
* @author: zkh
* @date: 2020-04-10 20:21:41
* @QQ：839982440
* Breadth-First-Search,BFS 广度优先算法
*/
var Queue_1 = require("./Queue");
var BFSNode = /** @class */ (function () {
    function BFSNode() {
        this._friends = [];
    }
    Object.defineProperty(BFSNode.prototype, "friends", {
        get: function () {
            return this._friends;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BFSNode.prototype, "friend", {
        set: function (friend) {
            if (Array.isArray(friend)) {
                this._friends = this._friends.concat(friend);
            }
            else {
                this._friends.push(friend);
            }
        },
        enumerable: true,
        configurable: true
    });
    return BFSNode;
}());
exports.BFSNode = BFSNode;
var BFS = /** @class */ (function () {
    function BFS() {
        this._step = 0;
        this._used = new Set();
        this._q = new Queue_1["default"]();
    }
    BFS.prototype.find = function (root, target) {
        this._step = 0;
        this._used.clear();
        this._q.clear();
        this._q.enQueue(root);
        this._used.add(root);
        while (!this._q.isEmpty()) {
            this._step += 1;
            var size = this._q.size;
            for (var i = 0; i < size; i++) {
                var node = this._q.front();
                if (node == null) {
                    this._step = -1;
                    return this._step;
                }
                node = node;
                if (node === target) {
                    return this._step;
                }
                var friends = node.friends;
                var friendSize = friends.length;
                for (var m = 0; m < friendSize; m++) {
                    var tmpNode = friends[m];
                    if (this._used.has(tmpNode))
                        continue;
                    this._used.add(tmpNode);
                    this._q.enQueue(tmpNode);
                }
                this._q.deQueue();
            }
        }
        return -1;
    };
    BFS.prototype.bfsTest = function () {
        var bfs = new BFS();
        var nodes = [];
        for (var i = 0; i < 13; i++) {
            var node = new BFSNode();
            nodes.push(node);
        }
        nodes[0].friend = [nodes[1], nodes[2], nodes[3]];
        nodes[1].friend = [nodes[4], nodes[5]];
        nodes[2].friend = [nodes[6], nodes[7]];
        nodes[3].friend = nodes[12];
        nodes[6].friend = [nodes[8], nodes[9]];
        nodes[7].friend = [nodes[10], nodes[11]];
        new Map;
        var num = bfs.find(nodes[0], nodes[11]);
        console.log("step:", num);
    };
    return BFS;
}());
exports["default"] = BFS;
