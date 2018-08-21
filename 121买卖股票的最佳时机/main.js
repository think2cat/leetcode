/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ret = 0
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length && prices[j] > prices[i]; j++) {
			let tmp = prices[j] - prices[i]
			if (tmp > ret) {
				ret = tmp
			}
		}
	}
	return ret
};