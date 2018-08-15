/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
	let ret = 0
	for (let i = 0, j = 1; i < nums.length; i++) {
		
		if (i > 0 && nums[i] > nums[i-1]) {
			j ++
		} else {
			j = 1
		}
		if (j > ret) {
			ret = j
		}
	}
	return ret
};