/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ret = []
	for (let i = 0; i < numRows; i++) {
		const tmp = []
		if (i > 0) {
			for (let j = 0; j <= i; j++) {
				if ( j === 0) {
					tmp.push(ret[i-1][j])
				} else if (j === i) {
					tmp.push(ret[i-1][j-1])
				} else {
					tmp.push(ret[i-1][j-1] + ret[i-1][j])
				}
			}
		} else if (i === 0) {
			tmp.push(1)
		}
		ret.push(tmp)
	}
	return ret
};