// Ucfirst
let ucfirst = (string) => {
	if (typeof string !== 'string') return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(ucfirst('hello world'));

// Capitalize
const capitalized = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  str = string.split(' ').map(function(item){
			return ucfirst(item)
	}).join(" ");
	}

	console.log(capitalized('hello world'));

// Camelcase

const camelCase = (string) => {
	if (typeof string !== 'string' || !string)  return '';
	return  str = string.split(' ').map(function(item){
			return ucfirst(item)
	}).join("");
	}

	console.log(camelCase('hello world'));


	

