/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
	const wArr = []
	const tArr = []
	for (let i = 0; i < words.length; i++) {
		const t = tArr.indexOf(words[i])
		if (t !== -1) {
			wArr[t].c++
		} else {
			wArr.push({
				w: words[i],
				c: 1
			})
			tArr.push(words[i])
		}
		// console.log(words[i], wArr, cArr)
	}
	wArr.sort((a, b) => {
		if (b.c !== a.c) {
			return b.c - a.c
		} else {
			return a.w < b.w ? -1 : 1
		}
	})
	const ret = []
	for (let i = 0; i < wArr.length && i < k; i++) {
		ret.push(wArr[i].w)
	}	
	return ret
};