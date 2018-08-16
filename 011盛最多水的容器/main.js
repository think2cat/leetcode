/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let ret = 0
    for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let h = height[i]
			if (height[i] > height[j]) h = height[j]
			// console.log(i,j, h , (j-i), h * (j - i))
			if (h * (j - i) > ret) ret = h * (j - i)
		}
	}
	return ret
};