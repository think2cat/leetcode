/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    return S.split('').filter(e => {
		return J.indexOf(e) !== -1
	}).length
};