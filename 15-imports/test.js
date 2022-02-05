// let lucky - by default == any
var lucky = 23;
lucky = '';
var font;
var person = {
    first: 'Jeff',
    last: 'Muk'
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
function noPow(x, y) {
    Math.pow(x, y).toString();
}
var arr = [];
var peoples = [];
arr.push(10);
var newArr = [];
newArr.push(11);
newArr.push(true);
// Generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
var y;
