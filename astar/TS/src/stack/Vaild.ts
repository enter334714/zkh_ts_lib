import Stack from "./Stack";

export default class Vaild{
    constructor(){}

    private req:any = {
        "(":")",
       
        "[":"]",
       
        "{":"}",
    };

    
   
    private isValid(s:string) {
        if("" == s)
            return true;    
        if(!s)
            return false;
        s = s.replace(/\s+/g,"");
        let len = s.length;
        if(len%2!=0)
            return false;      
        let stack:Stack<String> = new Stack<String>()
        for(let i:number = 0;i<len;i++){
            let symbol = s[i];
            if(symbol=="{" || symbol == "(" || symbol== "["){
                stack.push(symbol)
            }else{
                if(stack.isEmpty())
                    return false;
                if(symbol=="}" && stack.top()!="{")  
                    return false;
                if(symbol==")" && stack.top()!="(")  
                    return false
                if(symbol=="]" && stack.top()!="[")  
                    return false
                stack.pop();
            }
        }
        return stack.isEmpty();
    };

    public static test(){
        let v = new Vaild().isValid("{{");
        console.log(v);
    }
}