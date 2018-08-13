/**
 * @param {number} num
 * @return {string}
 */
var romanToInt = function(s) {
	const defVal = [{
		'I':1,
		'IV':4,
		'V':5,
		'IX':9
	},{
		
		'X':1,
		'XL':4,
		'L':5,
		'XC':9,
	},{		
		'C':1,
		'CD':4,
		'D':5,
		'CM':9
	},{
		'M':1
	}]
	let sArr = ('' + s).split(''), ret = []
	for (let i = sArr.length - 1; i >=0; i--) {
		while(sArr[i]) {
			console.log('i', i, sArr[i], defVal[i])
			for (j in defVal[i]) {
				console.log('j', j, sArr[i], j, defVal[i][j])
				if (sArr[i] >= defVal[i][j]){
					sArr[i] -= defVal[i][j]
					ret.push(j)
					console.log('push', j, sArr[i])
					return
				}
			}
		}
	}
	return ret
};

