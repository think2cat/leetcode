/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	const defVal = [{
		'IX':9,
		'V':5,
		'IV':4,
		'I':1
	},{
		'XC':9,
		'L':5,
		'XL':4,
		'X':1
	},{
		'CM':9,
		'D':5,
		'CD':4,
		'C':1
	},{
		'M':1
	}]
	let sArr = ('' + num).split(''), ret = []
	for (let i = 0, l = sArr.length - 1; i < l+1 && l < defVal.length; i++) {
		sArr[i] = parseInt(sArr[i])
		while(sArr[i]) {
			for (j in defVal[l-i]) {
				if (sArr[i] >= defVal[l-i][j]){
					sArr[i] -= defVal[l-i][j]
					ret.push(j)
					break;
				}
			}
		}
	}
	return ret.join('')
};

