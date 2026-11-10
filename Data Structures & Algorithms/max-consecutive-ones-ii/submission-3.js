class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        if (nums.length < 2) return 1
        let l = 0
        let r = 0
        let max = -1
        let numZeroes = 0

        while (r < nums.length) {
            if (nums[r] === 0) numZeroes++

            while (numZeroes >= 2) {
                if (nums[l] == 0) numZeroes--
                l++
            }

            max = Math.max(max, r - l + 1)
            r++
        }

        return max
    }
}

/*

   l
         r
[1,0,1,1,0,1]

*/