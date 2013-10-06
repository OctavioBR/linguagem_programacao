function sum5(a) {
	return a + 5;
};
function sum8(a) {
	return a + 8;
};
function sum(a, otherSumFunc) {
	return otherSumFunc(a);
};

var b = 1;
alert("b equals = " + b);

b = sum(b, sum5);
alert("sum to b the function sum5, b equals " + b);

b = sum(b, sum8);
alert("sum to b the function sum8, b equals " + b);
