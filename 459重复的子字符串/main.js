/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	if (!s || s.length < 2) return false
	for (let i = 1; i < s.length /2 +1; i++){
		let t = s.substr(0, i)
		let tt = t
		for (let j = 1; j < (s.length / t.length); j++) {
			tt += t			
		}
		// console.log(i, t, tt)
		if (tt === s) {
			return true
		}
	}
	return false
};