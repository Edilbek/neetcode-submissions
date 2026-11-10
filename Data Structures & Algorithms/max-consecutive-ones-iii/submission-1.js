class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let max = 0
        let l = 0
        let t = 0 // zero counts

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 0) t++

            while (t > k) {
                if (nums[l] === 0) t--
                l++
            }

            max = Math.max(max, r - l + 1)
        }

        return max
    }
}

/*
    t = 2
    max = 0

 l
   r
[0,0,1,1]

*/ 