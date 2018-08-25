/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    for (let i = 1, s = ''; s.length / B.length < 3 || i < 5; i++) {
		s = s + A
		// console.log(i, s, B)
		if (s.indexOf(B) > -1) {
			return i
		}
	}
	return -1
};