/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curMin = prices[0];
    let curMax = 0;

    for (let i = 0; i < prices.length; i++) {
        curMin = Math.min(prices[i], curMin);
        curMax = Math.max(curMax, prices[i] - curMin);
    }

    return curMax;
};