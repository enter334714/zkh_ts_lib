"use strict";
/**
 * 二分搜索树
 * 最坏的情况 会退化为一个链表
 * 前序遍历: 先访问根节点 在访问左子节点，后访问右子节点
 * 中序遍历: 先访问改节点的左子树，在访问该节点，然后访问该节点的右子树
 * 后续遍历
 */
exports.__esModule = true;
var Bstack = /** @class */ (function () {
    function Bstack(num) {
        this.num = num;
        //@ts-ignore
        this.left = null;
        //@ts-ignore
        this.right = null;
    }
    Bstack.prototype.compareTo = function (t) {
        return this.num - t.num;
    };
    return Bstack;
}());
exports.Bstack = Bstack;
var BFT = /** @class */ (function () {
    function BFT() {
        //@ts-ignore
        this._root = null;
        this._size = 0;
    }
    BFT.prototype.add = function (node) {
        this._root = this._add(this._root, node);
    };
    BFT.prototype._add = function (root, node) {
        if (root == null) {
            this._size++;
            return node;
        }
        var sub = node.compareTo(root);
        if (sub < 0)
            root.left = this._add(root.left, node);
        else if (sub > 0)
            root.right = this._add(root.right, node);
        // else     ==0;
        return root;
    };
    BFT.prototype.contains = function (node) {
        return this._contains(this._root, node);
    };
    BFT.prototype._contains = function (root, node) {
        var b = false;
        if (node == null)
            return false;
        var sub = node.compareTo(root);
        if (sub == 0) {
            return true;
        }
        else if (sub < 0) {
            return this._contains(root.left, node);
        }
        else {
            return this._contains(root.right, node);
        }
    };
    BFT.prototype.getMin = function (node) {
        return this._minimum(node || this._root);
    };
    BFT.prototype.getMax = function (node) {
        return this._maximum(node || this._root);
    };
    BFT.prototype.remove = function (node) {
        return this._remove(this._root, node);
    };
    BFT.prototype.removeMin = function (node) {
        node = node || this._root;
        node = this._removeMin(node);
        return node;
    };
    BFT.prototype.removeMax = function (node) {
        node = node || this._root;
        node = this._removeMax(node);
        return node;
    };
    BFT.prototype._remove = function (root, node) {
        if (root == null) {
            return root;
        }
        if (node.compareTo(root) < 0) {
            root.left = this._remove(root.left, node);
            return node;
        }
        else if (node.compareTo(root) > 0) {
            root.right = this._remove(root.right, node);
            return node;
        }
        else { //e==node.e
            if (node.left == null) {
                var rightNode = root.right;
                //@ts-ignore
                root.right = null;
                this._size--;
                return rightNode;
            }
            if (node.right == null) {
                var lNode = node.left;
                //@ts-ignore
                node.left = null;
                this._size--;
                return lNode;
            }
            //待删除的节点左右节点均为为空
            //找到待删除的节点大得最小节点，即待删除节点的右字树的最小节点
            //用这个节点代替待删除节点
            var successor = this._minimum(root.right);
            successor.right = this._removeMin(root.right);
            successor.left = root.left;
            //@ts-ignore
            root.left = root.right = null;
            return successor;
        }
    };
    BFT.prototype._removeMin = function (node) {
        if (node.left == null) {
            var rNode = node.right;
            //@ts-ignore
            node.right = null;
            this._size--;
            return rNode;
        }
        node.left = this._removeMin(node.left);
        return node;
    };
    BFT.prototype._removeMax = function (node) {
        if (node.right == null) {
            var lNode = node.left;
            //@ts-ignore
            node.left = null;
            this._size--;
            return lNode;
        }
        node.right = this._removeMax(node.right);
        return node;
    };
    // private _remove(node: T): T {
    // }
    BFT.prototype._minimum = function (node) {
        if (node == null) {
            throw new Error("bft  _minimum node == null");
        }
        if (node.left == null) {
            return node;
        }
        return this._minimum(node.left);
    };
    BFT.prototype._maximum = function (node) {
        if (node == null) {
            throw new Error("bft  _maximum node == null");
        }
        if (node.right == null) {
            return node;
        }
        return this._maximum(node.right);
    };
    //前序遍历 先访问根节点 在访问左子节点，后访问右子节点
    BFT.prototype.preOrder = function (node) {
        this._preOrder(this._root);
    };
    BFT.prototype._preOrder = function (node) {
        if (node == null) {
            return;
        }
        console.log("val:", node.num);
        this._preOrder(node.left);
        this._preOrder(node.right);
    };
    //中序遍历 先访问该节点的左子树，在访问该节点，后访问右子树
    BFT.prototype.inOrder = function () {
        this._inOrder(this._root);
    };
    BFT.prototype._inOrder = function (node) {
        if (node == null) {
            return;
        }
        this._inOrder(node.left);
        console.log("val:", node.num);
        this._inOrder(node.right);
    };
    BFT.prototype.postOrder = function () {
        this._postOrder(this._root);
    };
    BFT.prototype._postOrder = function (node) {
        if (node == null) {
            return;
        }
        this._postOrder(node.left);
        this._postOrder(node.right);
        console.log("val:", node.num);
    };
    Object.defineProperty(BFT.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    BFT.prototype.isEmpty = function () {
        return this._size === 0;
    };
    Object.defineProperty(BFT.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    BFT.prototype.toString = function () {
        return "";
    };
    return BFT;
}());
exports["default"] = BFT;
