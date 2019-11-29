// Ucfirst
const ucfirst = (string) => {
	if (typeof string !== 'string') return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(ucfirst('hello world'));

// Capitalize
const capitalize = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  str = string.split(' ').map(item => {
			return ucfirst(item)
	}).join(" ");
}
console.log(capitalize('hello world'));

// Camelcase
const camelCase = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  str = string.toLowerCase().split(' ').map(item => {
		return ucfirst(item)
	}).join("");
}
console.log(camelCase('hello world'));

// Verlan
const verlan = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  string.split(" ").map(words => {
		return words.split("").reverse().join("");
	}).join(" ");
}
console.log(verlan('hello world'));

// Yoda
const yoda = (string) => {
	if (typeof string !== 'string' || !string) return '';
	return string.split(" ").reverse().join(" ");
}
console.log(yoda('Hello world'));



