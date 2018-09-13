/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    nums.sort()
	for (let i = 1; i <= nums.length; i = i + 2) {
		if (i + 1 === nums.length || nums[i] !== nums[i-1]) {
			return nums[i-1]
		}
	}
};