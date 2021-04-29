"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("./stack/Stack"));
class Vaild {
    constructor() {
        this.req = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
    }
    isValid(s) {
        if ("" == s)
            return true;
        if (!s)
            return false;
        s = s.replace(/\s+/g, "");
        let len = s.length;
        if (len % 2 != 0)
            return false;
        let stack = new Stack_1.default();
        for (let i = 0; i < len; i++) {
            let symbol = s[i];
            if (symbol == "{" || symbol == "(" || symbol == "[") {
                stack.push(symbol);
            }
            else {
                if (stack.isEmpty())
                    return false;
                if (symbol == "}" && stack.top() != "{")
                    return false;
                if (symbol == ")" && stack.top() != "(")
                    return false;
                if (symbol == "]" && stack.top() != "[")
                    return false;
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
    ;
    static test() {
        let v = new Vaild().isValid("{{");
        console.log(v);
    }
}
exports.default = Vaild;
//# sourceMappingURL=Vaild.js.map