class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // const colors = [0, 0, 0];

        // for (let n of nums) {
        //     colors[n]++;
        // }

        // let index = 0;
        // for (let c = 0; c < colors.length; c++) {
        //     for (let i = 0; i < colors[c]; i++) {
        //         nums[index] = c;
        //         index++;
        //     }
        // }

        let l = 0, m = 0, r = nums.length - 1

        while (m <= r) {
            if (nums[m] === 0) {
                [nums[l], nums[m]] = [nums[m], nums[l]]
                l++
                m++
            } else if (nums[m] === 1) {
                m++
            } else {
                [nums[r], nums[m]] = [nums[m], nums[r]]
                r--;
            }
        }
    }
}


/*

 l
 m   
       r
[1,0,1,2]

*/ 
