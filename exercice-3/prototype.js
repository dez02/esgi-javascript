// Ucfirst
const ucfirst = (string) => {
	if (typeof string !== 'string') return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(ucfirst('hello world'));


String.prototype.ucfirst = function(){
	return ucfirst(this) // this pour ma variable string
}



