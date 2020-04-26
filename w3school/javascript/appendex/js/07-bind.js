function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
    window.setTimeout(this.declare.bind(this), 1000); //bind가 없다면 this.petalCount는 undefined으로 출력됨
    // window.setTimeout(this.declare, 1000); //undefined
};

LateBloomer.prototype.declare = function () {
    console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
};

var lb = new LateBloomer();
lb.bloom();