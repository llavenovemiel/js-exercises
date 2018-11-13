const flatten = (arr) => {
	let flat = [];
	//investigate why push does not work
	arr.forEach(el => flat = flat.concat(Array.isArray(el) ? flatten(el) : el));
	return flat;
}
