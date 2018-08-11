/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	const defVal = {
		'O':0,
		'I':1,
		'V':5,
		'X':10,
		'L':50,
		'C':100,
		'D':500,
		'M':1000
	}
	let ret = 0
	let arr = s.split('')
	for (let i = 0; i< arr.length; i++){
		if (
		('I' == arr[i] && arr[i+1] && ('V' == arr[i+1] || 'X' == arr[i+1]))
		|| ('X' == arr[i] && arr[i+1] && ('L' == arr[i+1] || 'C' == arr[i+1]))
		|| ('C' == arr[i] && arr[i+1] && ('D' == arr[i+1] || 'M' == arr[i+1]))
		){
			ret += defVal[arr[i+1]] - defVal[arr[i]]
			arr[i+1] = 'O'
		} else {
			ret += defVal[arr[i]]
		}
	}
	return ret
};

