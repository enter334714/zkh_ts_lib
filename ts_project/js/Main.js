"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = __importDefault(require("./sort/Sort"));
class Main {
    constructor() {
        // Vaild.test();
        // new BFTTest();
        this.uiId = 9999;
        //    BinaryHeap.test();
        // PriorityQueue.test();
        // let str = "fbxb";
        // var n = this.p_strToNum(str)
        // console.log(n);
        // console.log("还原：", this.decode(n))
        // let p1: point = { x: 29, y: 214 };
        // let p2: point = { x: 79, y: 190 };
        // let p3: point = { x: 128, y: 215 };
        // let p4: point = { x: 80, y: 233 };
        // let p: point = { x: 67, y: 112 }
        // let a = this.p_dot(p1, p2, p);
        // let b = this.p_dot(p1, p4, p);
        // let c = this.p_dot(p3, p4, p);
        // let d = this.p_dot(p3, p2, p);
        // console.log(a, b, c, d)
        // this.calcInterest();
        // new Bag01().test();
        Sort_1.default.test();
    }
    retire() {
        let moeny_by_month = 1000;
        let total_year = 30;
    }
    calcInterest() {
        let orignalCapital = 100;
        let backRate = 0.20;
        let backMoney = 0;
        let count = 0;
        let money = orignalCapital;
        while (backMoney < orignalCapital) {
            money = orignalCapital * backRate + money;
            let temp = money * 0.05;
            backMoney += temp;
            money -= temp;
            count++;
        }
        console.log("backMoney:", backMoney, "count:", count, "money:", money);
    }
    p_strToNum(str) {
        let num = 0;
        if (!str)
            return num;
        let len = str.length;
        console.log("字符串长度：", len);
        for (let i = 0; i < len; i++) {
            let n = str.charCodeAt(i) * (i + 1);
            num += n;
        }
        console.log(`${str} bt11111nId:`, num);
        let uiId = this.uiId * 100000;
        let uiLen = uiId.toString().length;
        let lenId = len * 10000000000;
        let lenIdAddUiId = lenId + uiId + num;
        console.log("长度ID:", lenId, "UIID:", uiId, "lenId+uiId:", lenIdAddUiId);
        return lenIdAddUiId;
    }
    decode(lenIdAddUiIdAddBtnId) {
        let str = "";
        let codeStr = lenIdAddUiIdAddBtnId.toString();
        let oLen = Math.floor(lenIdAddUiIdAddBtnId / 10000000000);
        let oUiid = Math.floor((lenIdAddUiIdAddBtnId % 10000000000) / 100000);
        let btnId = lenIdAddUiIdAddBtnId % 10000000000 % 100000;
        console.log("还原长度：", oLen, "uiId:", oUiid, "btnid:", btnId);
        let btnIdLen = btnId.toString().length;
        for (let i = btnIdLen - 1; i >= 0; i--) {
        }
        return str;
    }
    calc() {
        let up = [];
        let down = [];
        var i = 0;
        for (let i = 0; i < 10; i++) {
            up[i] = 1;
        }
        for (let i = 0; i < 42; i++) {
            down[i] = 2;
        }
        let arr = up.concat(down);
        arr.sort((a, b) => {
            let r = Math.random();
            return r > 0.5 ? 1 : -1;
        });
        let a1 = arr.slice(0, 10);
        let a2 = arr.slice(10);
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] == 1) {
                a1[i] = 2;
            }
            else {
                a1[i] = 1;
            }
        }
        let a1c = 0;
        let a2c = 0;
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] == 1) {
                a1c++;
            }
        }
        for (let i = 0; i < a2.length; i++) {
            if (a2[i] == 1) {
                a2c++;
            }
        }
        console.log("a1:", a1c, "a2:", a2c);
    }
    test(a, b) {
        return 1;
    }
    p_dot(p1, p2, p) {
        return (p2.x - p1.x) * (p.x - p1.x) + (p2.y - p1.y) * (p.y - p1.y);
    }
}
let main = new Main();
//# sourceMappingURL=Main.js.map