class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0
        const set = new Set(nums)

        for (const item of set) {
            let cur_longest = 1

            if (!set.has(item - 1)) {
                while (set.has(item + cur_longest)) {
                    cur_longest++
                }
            }

            longest = Math.max(longest, cur_longest)
        }

        return longest
    }
}

/*

     i
[100,4,200,1,3,2]

*/ 
