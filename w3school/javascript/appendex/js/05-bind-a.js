function Shape() {
    this.x = 0;
    this.y = 0;
};

Shape.prototype = {
    move: function (x, y) {
        this.x += x;
        this.y += y;

        function checkBounds(min, max) {
            if (this.x < min || this.x > max) {
                console.error('Warning: Shape out of bounds');
            }
        }

        var checkBoundsThis = checkBounds.bind(this); //Function에 인자로 넘긴 this가 바인딩 된 새로운 함수를 리턴함
        checkBoundsThis(0, 100);
    }
};

var shape = new Shape();
shape.move(101, 1);