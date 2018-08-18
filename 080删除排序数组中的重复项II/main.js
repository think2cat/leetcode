/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let arr = []
	for (let i = 0; i < nums.length; i++) {
		for (let j = nums.length - 1; j > i; j--) {
			if (nums[i] === nums[j]) {
				if (arr.indexOf(nums[j]) >= 0) {
					nums.splice(j, 1)
				} else {
					arr.push(nums[i])
				}
				
			}
		}
	}
	return nums.length
};