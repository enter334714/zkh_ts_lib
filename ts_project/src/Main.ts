import Queue from "./queue/Queue";
import BinaryHeap from "./heap/BinaryHeap";
import { MovingAverage } from "./queue/MovingAverage";
import BFS, { BFSNode } from "./queue/BFS";
import IsLandsNum from "./queue/IsLandsNum";
import MinStack from "./stack/MinStack";
import Vaild from "./stack/Vaild";
import BFT from "./tree/BFT";
import BFTTest from "./tree/BFTTest";
import PriorityQueue from "./heap/PriorityQueue";
import Bag01 from "./Bag01";
import Sort from "./sort/Sort";
import KaoShi from "./kaoShi";
class Main {
    constructor() {

        // Vaild.test();
        // new BFTTest();

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
        // Sort.test();
        new KaoShi();
    }

    private retire(): void {
        let moeny_by_month = 1000;
        let total_year = 30;

    }

    private calcInterest(): void {
        let orignalCapital: number = 100;
        let backRate: number = 0.20;
        let backMoney: number = 0;
        let count: number = 0;
        let money: number = orignalCapital;
        while (backMoney < orignalCapital) {
            money = orignalCapital * backRate + money;
            let temp = money * 0.05;
            backMoney += temp;
            money -= temp;
            count++;
        }

        console.log("backMoney:", backMoney, "count:", count, "money:", money)
    }

    private uiId = 9999;
    public p_strToNum(str: string): number {
        let num: number = 0;
        if (!str)
            return num;
        let len: number = str.length;
        console.log("字符串长度：", len);
        for (let i: number = 0; i < len; i++) {
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



    public decode(lenIdAddUiIdAddBtnId: number): string {
        let str: string = "";
        let codeStr = lenIdAddUiIdAddBtnId.toString();
        let oLen = Math.floor(lenIdAddUiIdAddBtnId / 10000000000);

        let oUiid = Math.floor((lenIdAddUiIdAddBtnId % 10000000000) / 100000);
        let btnId = lenIdAddUiIdAddBtnId % 10000000000 % 100000;
        console.log("还原长度：", oLen, "uiId:", oUiid, "btnid:", btnId);
        let btnIdLen: number = btnId.toString().length;

        for (let i: number = btnIdLen - 1; i >= 0; i--) {

        }
        return str;
    }



    private calc(): void {
        let up: number[] = [];
        let down: number[] = [];

        var i: number = 0;
        for (let i: number = 0; i < 10; i++) {
            up[i] = 1;
        }

        for (let i: number = 0; i < 42; i++) {
            down[i] = 2;
        }

        let arr: number[] = up.concat(down);
        arr.sort((a, b): number => {
            let r: number = Math.random();
            return r > 0.5 ? 1 : -1;
        })


        let a1 = arr.slice(0, 10);
        let a2 = arr.slice(10);

        for (let i: number = 0; i < a1.length; i++) {
            if (a1[i] == 1) {
                a1[i] = 2;
            } else {
                a1[i] = 1;
            }
        }

        let a1c: number = 0;
        let a2c: number = 0;
        for (let i: number = 0; i < a1.length; i++) {
            if (a1[i] == 1) {
                a1c++;
            }
        }

        for (let i: number = 0; i < a2.length; i++) {
            if (a2[i] == 1) {
                a2c++;
            }
        }

        console.log("a1:", a1c, "a2:", a2c);
    }

    public test(a: number): number;
    public test(a: string, b: number): string;

    public test(a?: number | string, b?: number): void | number | string {
        return 1;
    }

    private p_dot(p1: point, p2: point, p: point): number {
        return (p2.x - p1.x) * (p.x - p1.x) + (p2.y - p1.y) * (p.y - p1.y)
    }
}

let main = new Main();

type point = { x: number, y: number };