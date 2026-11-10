class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0

        for (let i = 0; i < nums.length; i++) {
            if (nums.includes(nums[i] - 1)) continue;
            let length = 1;

            while (nums.includes(nums[i] + length)) {
                length += 1
            }

            longest = Math.max(longest, length);
        }

        return longest
    }
}
