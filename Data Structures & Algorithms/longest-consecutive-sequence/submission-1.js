class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longest = 0;

        for (const num of numsSet) {
            // start only if it's the beginning of a sequence
            if (!numsSet.has(num - 1)) {
                let current = num;
                let length = 1;

                while (numsSet.has(current + 1)) {
                    current += 1;
                    length += 1;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
