class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l = 0, r = nums.length - 1;
        let res = [];
        let i = nums.length - 1;

        while (l <= r) {
            let lsq = nums[l] * nums[l];
            let rsq = nums[r] * nums[r];

            if (lsq > rsq) {
                res[i] = lsq
                l++
            } else {
                res[i] = rsq
                r--;
            }

            i--;
        }

        return res;
    }
}

/*

 l
            r
[-4,-1,0,3,10]

*/