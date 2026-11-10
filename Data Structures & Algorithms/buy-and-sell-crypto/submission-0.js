class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0
        let l = 0
        let r = 0

        while (r < prices.length) {
            let profit = prices[r] - prices[l]
            maxProf = Math.max(maxProf, profit)

            profit < 0 ? l++ : r++
        }

        return maxProf
    }
}
