function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype = {
    move: function (x, y) {
        var self = this;

        this.x += x;
        this.y += y;

        function checkBounds() {
            console.log("self", self);
            if (self.x > 100) {
                console.error('Warning: Shape out of bounds');
            }
        }

        checkBounds();
    }
};

var shape = new Shape();
shape.move(101, 1);
/*
Method와 Function의 차이
- 메서드 : new 로 Object 를 생성하고 이 오브젝트의 Method 내에서 this 는 해당 오브젝트의 인스턴스를 가리킨다
- 함수 : Method 가 아니라 Function 내부에서 this 는 window, Node.js 라면 global 이다.
그리고 strict mode 라면 Function 내부에서 this 는 undefined 다

console.error 가 호출되지 않는 이유는, checkBounds Function 은
Shape.move property 내에서 정의되어 있지만, 그 자체가 Object 의 메소드는 아니기 때문이다.

해결방법은 self를
 */