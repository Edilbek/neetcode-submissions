class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    rearrangeArray(nums) {
        const arr = new Array(nums.length)
        let pos_index = 0 // even indexes
        let neg_index = 1 // odd indexes

        for (let n of nums) {
            if (n > 0) {
                arr[pos_index] = n
                pos_index += 2
            } else {
                arr[neg_index] = n
                neg_index += 2
            }
        }

        return arr
    }
}
