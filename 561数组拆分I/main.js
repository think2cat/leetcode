/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => {return b - a})
	let min = (a, b) => {
		return a > b ? b : a
	}
	let ret = 0
	for (let i = 0; i+1 < nums.length; i = i +2) {
		ret += min(nums[i], nums[i+1])
	}
	return ret
};