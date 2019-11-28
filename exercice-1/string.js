// Ucfirst
const ucfirst = (string) => {
	if (typeof string !== 'string') return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(ucfirst('hello world'));

// Capitalize
const capitalized = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  str = string.split(' ').map(item => {
			return ucfirst(item)
	}).join(" ");
}

console.log(capitalized('hello world'));

// Camelcase

const camelCase = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  str = string.split(' ').map(item => {
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




