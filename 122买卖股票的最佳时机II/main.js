/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (!prices|| prices.length == 0) return 0;
	let ret = 0;
	for (let i = 1; i < prices.length; i++){
	   if (prices[i] > prices[i-1]){
		   ret += prices[i] - prices[i-1];
	   }
	}	
	return ret;
};