class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0
        let r = 0
        const map = {}

        while (r < nums.length) {
            if (map[nums[r]] !== undefined && Math.abs(map[nums[r]] - r) <= k) {
                return true
            }

            map[nums[r]] = r

            r++
        }

        return false
    }
}
