namespace tsMorph {
    export class Studdent {

    }
}

export class Univisty{
    protected class(no:number):void{

    }

    public tree():void{

    }
}


export class Teacher extends Univisty{
    private readonly sex: number = 1;
    private p_name: string = "";
    private p_students: tsMorph.Studdent[] = [];

    private p_age1:number = 1;
    private p_age2:number = 2;
    private p_age3:number ;
    constructor() {
        super();
        this.p_age1 = 1;
        this.p_age2 = 2;
        this.p_age3 = 2;
        this.age();
        var _self = this;
        _self.p_age1 = 333;
        Teacher.teach();
        function func(test:number){

        }

        let func1 = function(test1:number){
            _self.p_age1 = 111;
            this.p_age2 = 5555;
        }
      
    }

    protected class(no:number): void {
        this.p_age1 = 2;
        this.p_age3 = 4;
        super.class(no);
        this.p_age3 = 4;
        let _self = this;
        _self.p_age3 = 555;
    }

    protected tree(): void {
        super.tree();
    }

    private age(): number {
        return 1;
    }

    public set name(v: string) {
        this.p_name = v;
    }

    public get name(): string {
        return this.name;
    }

    public static teach(): void {

    }
}


class School {
    private teacher: Teacher;
    constructor() {
        this.teacher = new Teacher();
        this.teacher.name = "张三"
    }

}

new School();