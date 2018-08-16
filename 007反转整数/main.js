/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = ('' + x).split(''), f = ''
	if (arr[0] == '-') {
		f = arr.shift()
	}
	x = parseInt(arr.reverse().join(''))
    if (f) {
        x = 0 - x
    }
    if (x > 2**31-1 || x < -(2**31)) {
        x = 0
    }
    return x
};