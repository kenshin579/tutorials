this.x = 9;
var module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};

console.log(module.getX()); // 81

var getX = module.getX; //<-- 그냥 함수가 됨
console.log("getX:", getX()); // 9, because in this case, "this" refers to the global object

/*
getX 는 단순한 Function 이다. new Contsructor 로 Instance 를 만들고, Instance.method() 와 같이 호출하거나,
Object.method() 처럼 호출되는 것이 아니면 해당 함수는 전역 컨텍스트에서 실행되므로 this 도 global 이거나 window 일거다.
 */