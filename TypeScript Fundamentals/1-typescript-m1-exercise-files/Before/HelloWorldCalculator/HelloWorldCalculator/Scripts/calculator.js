window.onload = function () {
    var calc = new Calculator();
    calc.init('X', 'Y', 'Output');
};
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.init = function (x, y, output) {
        this.x = document.getElementById(x);
        this.y = document.getElementById(y);
        this.output = document.getElementById(output);
        this.wireEvents();
    };
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
})();
//# sourceMappingURL=calculator.js.map