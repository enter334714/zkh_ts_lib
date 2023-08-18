const enum EnumTest {
    a, b, c, d
}
export default class KaoShi {
    private enumTest: EnumTest = EnumTest.a;
    constructor() {
        switch (this.enumTest) {
            case EnumTest.a:
                break;
        }
    }
}