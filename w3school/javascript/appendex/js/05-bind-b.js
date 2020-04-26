function Shape() {
    this.x = 0;
    this.y = 0;
};

Shape.prototype = {
    move: function (x, y) {
        this.x += x;
        this.y += y;

        var checkBounds = function (min, max) {
            if (this.x < min || this.x > max) {
                console.error('Warning: Shape out of bounds');
            }
        }.bind(this);

        checkBounds(0, 100);
    }
};

var shape = new Shape();
shape.move(101, 1);