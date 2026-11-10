class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0
        let cur = 0
        let l = 0

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 1) cur++

            if (nums[r] == 0) {
                l = r
                cur = 0
            }

            max = Math.max(cur, max)
        }

        return max
    }
}

/*

   l
   r
[1,0,1,1,0,1]
 0 1 2 3 4 5
*/ 
