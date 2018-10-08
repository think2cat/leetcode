/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const ret = []
	for (let i = 0; i <= rowIndex; i++) {
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
	return ret[rowIndex]
};