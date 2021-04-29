"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Vaild = /** @class */ (function () {
    function Vaild() {
        this.req = {
            "(": ")",
            "[": "]",
            "{": "}"
        };
    }
    Vaild.prototype.isValid = function (s) {
        if ("" == s)
            return true;
        if (!s)
            return false;
        s = s.replace(/\s+/g, "");
        var len = s.length;
        if (len % 2 != 0)
            return false;
        var stack = new Stack_1["default"]();
        for (var i = 0; i < len; i++) {
            var symbol = s[i];
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
    };
    ;
    Vaild.test = function () {
        var v = new Vaild().isValid("{{");
        console.log(v);
    };
    return Vaild;
}());
exports["default"] = Vaild;
