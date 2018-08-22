/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // console.log('begin',nums1,nums2)
	nums1 = [...new Set(nums1)]
	nums2 = [...new Set(nums2)]
	let ret = []
    for (let i = nums1.length - 1; i >= 0 ; i--) {
		for (let j = nums2.length - 1; j >= 0; j--) {
			if (nums1[i] === nums2[j]) {
                // console.log(i, j, nums1[i])
				ret.push(nums1[i])
                nums1.splice(i, 1)
				nums2.splice(j, 1)
			}
		}
	}
	// console.log("return", ret)
	return ret
};