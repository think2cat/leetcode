/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	let ret = []
	nums.sort((a, b) => a - b)
	for(let i = 0; i < nums.length; i++) {
		if (!ret.length || (ret.length && nums[i] !== ret[ret.length - 1].v)) {
			ret.push({v: nums[i], c:1})
		} else if (nums[i] === ret[ret.length - 1].v) {
			ret[ret.length - 1].c ++
		}
	}
	ret.sort((a, b) => b.c - a.c)
	return ret.splice(0, k).map(e => e.v)
};
