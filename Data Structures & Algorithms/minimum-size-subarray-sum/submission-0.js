class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let min = Number.POSITIVE_INFINITY
        let l = 0
        let sum = 0

        for (let r = 0; r < nums.length; r++) {
            sum += nums[r]

            while (sum >= target) {
                min = Math.min(min, r - l + 1)
                sum -= nums[l]
                l++
            }
        }

        return min == Number.POSITIVE_INFINITY ? 0 : min
    }
}

/*
    min = 11
    sum = 9

       l
           r
[2,1,5,1,5,3]

*/ 