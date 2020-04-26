function Shape() {
    this.x = 0;
    this.y = 0;
};

Shape.prototype = {
    move: function (x, y) {
        this.x += x;
        this.y += y;

        function checkBounds() {
            console.log("this", this);
            if (this.x > 100) {
                console.error('Warning: Shape out of bounds');
            }
        }

        checkBounds.call(this); //call 은 파라미터 중 첫 번째 인자를, 함수 내부에서 사용할 this 로 만들어 준다.
    }
};

var shape = new Shape();
shape.move(101, 1);