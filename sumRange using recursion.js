sumRange = ([a,b]) => {
	(a > b) && ([a, b] = [b, a]);
	if (b - a <= 1) return a + b;
	else return a + sumRange([a + 1, b]);
}
