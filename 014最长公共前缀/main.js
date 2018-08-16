/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let ret = ''
	strs.some((e,index) => {
		// console.log('index = ',index)
		if (index === 0) {
			ret = e
			// console.log('init', ret)
			return false
		} else {
			let i = ret.length
			if (i > e.length) {
				i = e.length
			}
			for (; i >= 0 ; i--) {
				ret = ret.substr(0,i)
				// console.log('i = ',i,e, ret, e.substr(0,i))
				if (ret == e.substr(0,i)) {
				  break
				}
			}
			if (i) {
				return false
			} else {
				return true
			}
		}
	}) 
	return ret   
};
