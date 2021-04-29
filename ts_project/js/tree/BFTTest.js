"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BFT_1 = __importStar(require("./BFT"));
class BFTTest {
    constructor() {
        var bft = new BFT_1.default();
        var nums = [5, 3, 6, 2, 4, 8];
        var tt = [];
        for (let i = 0; i < nums.length; i++) {
            var a = nums[i];
            let node = new BFT_1.Bstack(a);
            tt.push(node);
            bft.add(node);
        }
        console.log("root:", bft.root);
        console.log("contains:", bft.contains(tt[0]));
        bft.inOrder();
        console.log("min11:", bft.getMax());
        let maxnode = bft.removeMax(tt[1]);
        console.log("max：", maxnode);
        console.log("min11:", bft.getMax());
        bft.removeMax();
        bft.inOrder();
    }
}
exports.default = BFTTest;
//# sourceMappingURL=BFTTest.js.map