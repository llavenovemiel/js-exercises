const insertComma = (num) => {
	num = (num + "").split(".");
	const decimal = num.length == 2 ? "." + num[1] : "";
	const whole = num[0].split("").map((char,index,array) => {
		if (index && !((array.length - index) % 3)) {
			return "," + char;
		} else return char;
	}).join("");
    return whole + decimal;
}
