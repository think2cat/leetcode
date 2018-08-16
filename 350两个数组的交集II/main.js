/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    console.log('begin',nums1,nums2)
	// 测试用例有问题，已发邮件询问
	// 提示输入 [3,1,2] [1,1]
	// 实际传入 [ 2, 1 ] [ 1, 2 ]
	let check = (a1, a2) => {
		console.log('check',a1,a2)
		let tmp = []
		a1.some((e, i) => {
			// console.log(e, a2[i])
			if(i < a2.length){
				e === a2[i] && tmp.push(e)
				return e !== a2[i]
			} else {
				return true
			}
		})
		return tmp
	}
	let ret = []
    for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			if (nums1[i] == nums2[j]) {
                // console.log('i',i,nums1.slice(i))
                // console.log('j',j,nums2.slice(j))
				let k = check(nums1.slice(i), nums2.slice(j))
				if (k.length >= ret.length){
                    // console.log("newMax", k)
					ret = Object.assign([], k)
				}
				// j += k.length
				// i += k.length
			}
		}
	}
	console.log("return", ret)
	return ret
};