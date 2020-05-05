const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(left, right) {
	for (var i in left){
		if ((right[i]==null) || (left[i] != right[i]))
			return false;

	return true;
	}
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false