/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (needle === '') return 0
	let ret = -1
	for (let i = 0, j = needle.length; i < haystack.length; i++) {
		if (haystack.substr(i, j) == needle) {
			return i
		}
	}
	return ret
};