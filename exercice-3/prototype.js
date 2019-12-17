// Ucfirst
const ucfirst = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
// console.log(ucfirst('hello world'));


String.prototype.ucfirst = function(){
	return this.charAt(0).toUpperCase() + this.slice(1)
}

console.log('toto'.ucfirst());

