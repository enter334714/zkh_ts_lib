"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @author: zkh
* @date: 2020-04-10 20:21:41
* @QQ：839982440
* Breadth-First-Search,BFS 广度优先算法
*/
const Queue_1 = __importDefault(require("./Queue"));
class BFSNode {
    constructor() {
        this._friends = [];
    }
    get friends() {
        return this._friends;
    }
    set friend(friend) {
        if (Array.isArray(friend)) {
            this._friends = this._friends.concat(friend);
        }
        else {
            this._friends.push(friend);
        }
    }
}
exports.BFSNode = BFSNode;
class BFS {
    constructor() {
        this._step = 0;
        this._used = new Set();
        this._q = new Queue_1.default();
    }
    find(root, target) {
        this._step = 0;
        this._used.clear();
        this._q.clear();
        this._q.enQueue(root);
        this._used.add(root);
        while (!this._q.isEmpty()) {
            this._step += 1;
            let size = this._q.size;
            for (let i = 0; i < size; i++) {
                let node = this._q.front();
                if (node == null) {
                    this._step = -1;
                    return this._step;
                }
                node = node;
                if (node === target) {
                    return this._step;
                }
                let friends = node.friends;
                let friendSize = friends.length;
                for (var m = 0; m < friendSize; m++) {
                    let tmpNode = friends[m];
                    if (this._used.has(tmpNode))
                        continue;
                    this._used.add(tmpNode);
                    this._q.enQueue(tmpNode);
                }
                this._q.deQueue();
            }
        }
        return -1;
    }
    bfsTest() {
        var bfs = new BFS();
        var nodes = [];
        for (let i = 0; i < 13; i++) {
            let node = new BFSNode();
            nodes.push(node);
        }
        nodes[0].friend = [nodes[1], nodes[2], nodes[3]];
        nodes[1].friend = [nodes[4], nodes[5]];
        nodes[2].friend = [nodes[6], nodes[7]];
        nodes[3].friend = nodes[12];
        nodes[6].friend = [nodes[8], nodes[9]];
        nodes[7].friend = [nodes[10], nodes[11]];
        new Map;
        let num = bfs.find(nodes[0], nodes[11]);
        console.log("step:", num);
    }
}
exports.default = BFS;
//# sourceMappingURL=BFS.js.map