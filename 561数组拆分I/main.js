/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => {return a - b})
    let ret = 0
    nums.some((ele, index) => {
        if (index % 2 === 0) ret += ele
    })
    return ret
};
