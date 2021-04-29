"use strict";
/**
 * 二分搜索树
 * 最坏的情况 会退化为一个链表
 * 前序遍历: 先访问根节点 在访问左子节点，后访问右子节点
 * 中序遍历: 先访问改节点的左子树，在访问该节点，然后访问该节点的右子树
 * 后续遍历
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Bstack {
    constructor(num) {
        this.num = num;
        //@ts-ignore
        this.left = null;
        //@ts-ignore
        this.right = null;
    }
    compareTo(t) {
        return this.num - t.num;
    }
}
exports.Bstack = Bstack;
class BFT {
    constructor() {
        //@ts-ignore
        this._root = null;
        this._size = 0;
    }
    add(node) {
        this._root = this._add(this._root, node);
    }
    _add(root, node) {
        if (root == null) {
            this._size++;
            return node;
        }
        let sub = node.compareTo(root);
        if (sub < 0)
            root.left = this._add(root.left, node);
        else if (sub > 0)
            root.right = this._add(root.right, node);
        // else     ==0;
        return root;
    }
    contains(node) {
        return this._contains(this._root, node);
    }
    _contains(root, node) {
        let b = false;
        if (node == null)
            return false;
        let sub = node.compareTo(root);
        if (sub == 0) {
            return true;
        }
        else if (sub < 0) {
            return this._contains(root.left, node);
        }
        else {
            return this._contains(root.right, node);
        }
    }
    getMin(node) {
        return this._minimum(node || this._root);
    }
    getMax(node) {
        return this._maximum(node || this._root);
    }
    remove(node) {
        return this._remove(this._root, node);
    }
    removeMin(node) {
        node = node || this._root;
        node = this._removeMin(node);
        return node;
    }
    removeMax(node) {
        node = node || this._root;
        node = this._removeMax(node);
        return node;
    }
    _remove(root, node) {
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
                let rightNode = root.right;
                //@ts-ignore
                root.right = null;
                this._size--;
                return rightNode;
            }
            if (node.right == null) {
                let lNode = node.left;
                //@ts-ignore
                node.left = null;
                this._size--;
                return lNode;
            }
            //待删除的节点左右节点均为为空
            //找到待删除的节点大得最小节点，即待删除节点的右字树的最小节点
            //用这个节点代替待删除节点
            let successor = this._minimum(root.right);
            successor.right = this._removeMin(root.right);
            successor.left = root.left;
            //@ts-ignore
            root.left = root.right = null;
            return successor;
        }
    }
    _removeMin(node) {
        if (node.left == null) {
            let rNode = node.right;
            //@ts-ignore
            node.right = null;
            this._size--;
            return rNode;
        }
        node.left = this._removeMin(node.left);
        return node;
    }
    _removeMax(node) {
        if (node.right == null) {
            let lNode = node.left;
            //@ts-ignore
            node.left = null;
            this._size--;
            return lNode;
        }
        node.right = this._removeMax(node.right);
        return node;
    }
    // private _remove(node: T): T {
    // }
    _minimum(node) {
        if (node == null) {
            throw new Error("bft  _minimum node == null");
        }
        if (node.left == null) {
            return node;
        }
        return this._minimum(node.left);
    }
    _maximum(node) {
        if (node == null) {
            throw new Error("bft  _maximum node == null");
        }
        if (node.right == null) {
            return node;
        }
        return this._maximum(node.right);
    }
    //前序遍历 先访问根节点 在访问左子节点，后访问右子节点
    preOrder(node) {
        this._preOrder(this._root);
    }
    _preOrder(node) {
        if (node == null) {
            return;
        }
        console.log("val:", node.num);
        this._preOrder(node.left);
        this._preOrder(node.right);
    }
    //中序遍历 先访问该节点的左子树，在访问该节点，后访问右子树
    inOrder() {
        this._inOrder(this._root);
    }
    _inOrder(node) {
        if (node == null) {
            return;
        }
        this._inOrder(node.left);
        console.log("val:", node.num);
        this._inOrder(node.right);
    }
    postOrder() {
        this._postOrder(this._root);
    }
    _postOrder(node) {
        if (node == null) {
            return;
        }
        this._postOrder(node.left);
        this._postOrder(node.right);
        console.log("val:", node.num);
    }
    get size() {
        return this._size;
    }
    isEmpty() {
        return this._size === 0;
    }
    get root() {
        return this._root;
    }
    toString() {
        return "";
    }
}
exports.default = BFT;
//# sourceMappingURL=BFT.js.map