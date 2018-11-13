const flatten = (arr) => {
	let flat = [];
	arr.forEach(el => flat = flat.concat(Array.isArray(el) ? flatten(el) : el);
	return flat;
}