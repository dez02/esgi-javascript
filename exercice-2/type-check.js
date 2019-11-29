// Type-check-v1
const type_check_v1 = (foo, type) => {
	if (typeof type !== 'string') return false;
	return typeof foo === type;
};
console.log(type_check_v1('toto', 'string'));

// Type-check-v2

function type_check_v2(){

}




