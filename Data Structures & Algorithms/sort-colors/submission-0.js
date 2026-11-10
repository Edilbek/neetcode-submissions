class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const colors = [0, 0, 0];

        for (let n of nums) {
            colors[n]++;
        }

        console.log({colors})

        let index = 0;
        for (let c = 0; c < colors.length; c++) {
            for (let i = 0; i < colors[c]; i++) {
                nums[index] = c;
                index++;
            }
        }
    }
}
