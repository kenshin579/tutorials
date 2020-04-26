function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

//  Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37); //37 default paramter를 가진게 됨

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]