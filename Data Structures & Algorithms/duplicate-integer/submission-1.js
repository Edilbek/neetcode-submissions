class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}

        for (const n of nums) {
            if (map[n]) return true

            map[n] = 1
        }

        return false
    }
}
