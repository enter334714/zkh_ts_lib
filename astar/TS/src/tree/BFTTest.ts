import BFT, { Comparable,Bstack } from "./BFT";

export default class BFTTest {
    constructor() {
       
        var bft = new BFT<Bstack>();
        var nums: number[] = [5,3,6,2,4,8];
        var tt = []
        for (let i: number = 0; i < nums.length; i++) {
            var a = nums[i];           
            let node = new Bstack(a);
            tt.push(node);
            bft.add(node);
        }

        console.log("root:", bft.root);
        console.log("contains:", bft.contains(tt[0]))       
        bft.inOrder();
        console.log("min11:",bft.getMax());
        let maxnode = bft.removeMax(tt[1]);
        console.log("max：",maxnode);
        console.log("min11:",bft.getMax());
        bft.removeMax();
        bft.inOrder();
    }
}