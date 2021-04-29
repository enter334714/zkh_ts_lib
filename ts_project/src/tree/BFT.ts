/**
 * 二分搜索树
 * 最坏的情况 会退化为一个链表
 * 前序遍历: 先访问根节点 在访问左子节点，后访问右子节点
 * 中序遍历: 先访问改节点的左子树，在访问该节点，然后访问该节点的右子树
 * 后续遍历
 */

export interface Comparable<T> {
    left: T;
    right: T;
    num: number;
    compareTo: (t: T) => number;
}

export class Bstack implements Comparable<Bstack>{
    public left: Bstack;
    public right: Bstack;
    public num: number;
    constructor(num: number) {
        this.num = num;
        //@ts-ignore
        this.left = null;
        //@ts-ignore
        this.right = null;
    }
    public compareTo(t: Bstack): number {
        return this.num - t.num;
    }
}

export default class BFT<T extends Bstack>{
    private _root: T; _size: number;
    constructor() {
        //@ts-ignore
        this._root = null;
        this._size = 0;
    }

    public add(node: T): void {
        this._root = this._add(this._root, node);
    }

    private _add(root: T, node: T): T {
        if (root == null) {
            this._size++;
            return node;
        }
        let sub: number = node.compareTo(root)
        if (sub < 0)
            root.left = this._add(root.left as T, node);
        else if (sub > 0)
            root.right = this._add(root.right as T, node);
        // else     ==0;
        return root;
    }


    public contains(node: T): boolean {
        return this._contains(this._root, node);
    }

    private _contains(root: T, node: T): boolean {
        let b: boolean = false;
        if (node == null)
            return false;
        let sub: number = node.compareTo(root);
        if (sub == 0) {
            return true;
        }
        else if (sub < 0) {
            return this._contains(root.left as T, node);
        } else {
            return this._contains(root.right as T, node);
        }
    }
    public getMin(node?: T): T {
        return this._minimum(node || this._root);
    }

    public getMax(node?: T) {
        return this._maximum(node || this._root);
    }

    public remove(node: T): T {
        return this._remove(this._root,node)       
    }

    public removeMin(node?: T): T {
        node = node || this._root;
        node = this._removeMin(node);
        return node;
    }

    public removeMax(node?: T): T {
        node = node || this._root;
        node = this._removeMax(node);
        return node;
    }

    private _remove(root:T,node:T):T{
        if(root == null){   
             return root;
        }
        
        if(node.compareTo(root) < 0){
            root.left = this._remove(root.left as T,node)
            return node;
        }else if(node.compareTo(root) > 0){
            root.right = this._remove(root.right as T,node);
            return node;
        }else{ //e==node.e
            if(node.left == null){
                let rightNode  = root.right as T;
                 //@ts-ignore
                root.right = null;
                this._size--;
                return rightNode;
            }

            if(node.right == null){
                let lNode: T = node.left as T;
                //@ts-ignore
                node.left = null;
                this._size--;
                return lNode;
            }

            //待删除的节点左右节点均为为空
            //找到待删除的节点大得最小节点，即待删除节点的右字树的最小节点
            //用这个节点代替待删除节点
            
            let successor = this._minimum(root.right as T);
            successor.right = this._removeMin(root.right as T);
            successor.left = root.left;
            //@ts-ignore
            root.left = root.right = null;
            return successor;
        }
        
    }

    private _removeMin(node: T): T {
        if (node.left == null) {
            let rNode: T = node.right as T;
            //@ts-ignore
            node.right = null;
            this._size--;
            return rNode;
        }
        node.left = this._removeMin(node.left as T);
        return node;
    }

    private _removeMax(node: T): T {
        if (node.right == null) {
            let lNode: T = node.left as T;
            //@ts-ignore
            node.left = null;
            this._size--;
            return lNode;
        }
        node.right = this._removeMax(node.right as T);
        return node;
    }

    // private _remove(node: T): T {

    // }

    private _minimum(node: T): T {
        if (node == null) {
            throw new Error("bft  _minimum node == null")
        }
        if (node.left == null) {
            return node;
        }
        return this._minimum(node.left as T);
    }


    private _maximum(node: T): T {
        if (node == null) {
            throw new Error("bft  _maximum node == null")
        }
        if (node.right == null) {
            return node;
        }
        return this._maximum(node.right as T);
    }

    //前序遍历 先访问根节点 在访问左子节点，后访问右子节点
    public preOrder(node?: T): void {
        this._preOrder(this._root);
    }

    private _preOrder(node: T): void {
        if (node == null) {
            return;
        }
        console.log("val:", node.num);
        this._preOrder(node.left as T);
        this._preOrder(node.right as T);
    }

    //中序遍历 先访问该节点的左子树，在访问该节点，后访问右子树
    public inOrder(): void {
        this._inOrder(this._root);
    }

    private _inOrder(node: T): void {
        if (node == null) {
            return;
        }
        this._inOrder(node.left as T);
        console.log("val:", node.num);
        this._inOrder(node.right as T);
    }

    public postOrder(): void {
        this._postOrder(this._root);
    }

    private _postOrder(node: T): void {
        if (node == null) {
            return;
        }
        this._postOrder(node.left as T);
        this._postOrder(node.right as T);
        console.log("val:", node.num);
    }


    public get size(): number {
        return this._size;
    }

    public isEmpty(): boolean {
        return this._size === 0;
    }

    public get root(): T {
        return this._root;
    }

    public toString(): string {
        return "";
    }
}