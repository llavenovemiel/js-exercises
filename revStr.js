const rev = (str) => {
	return str.split("").reduce((a,b) => b + a,"")
}