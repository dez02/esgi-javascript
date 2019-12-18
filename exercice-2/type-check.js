// Type-check-v1
function type_check_v1(){
	switch(typeof vari){
		case 'object':
			if (Array.isArray(vari)) return type === 'array';
			if (vari === null) return type === 'null';
		break;
		default:
			return vari === type;
	}
}

// Type-check-v2

// function type_check_v2(vari, conf){
// 	for ( key in conf){
// 		switch (key){
// 			case 'type':
// 				//if (!type_check_v1(vari, conf[key])) return false;
// 			case 'value':
// 				//if() return false;
// 			case 'enum':
// 				//if() return ...
// 		}
// 	}
// 	return true;
// }




