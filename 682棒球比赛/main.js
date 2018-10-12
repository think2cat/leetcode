/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	const ret = []
	for (let i = 0; i < ops.length; i++) {
		if (ops[i] === '+' || ops[i] === 'D') {
			let t = ops[i] === '+' ? 2 : 1
			let c = 0
			for (let j = ret.length - 1; j >=0 && t > 0; j--) {
				// if (ret[j] !== 0) {
					c += ret[j]
					t --
				// }
			}
			ret.push(c * (ops[i] === 'D' ? 2 : 1))
		} else if (ops[i] === 'C') {
			// ret[ret.length - 1] = 0
			ret.pop()
		} else {
			ret.push(parseInt(ops[i]))
		}
	}
	let j = 0
	for (let i = 0; i < ret.length; i++) {
		// if (ret[i] !== '') {
			j += ret[i]
		// }
	}
	return j
};