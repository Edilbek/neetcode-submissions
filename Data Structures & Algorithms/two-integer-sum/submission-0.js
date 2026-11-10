class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]

            if (map.hasOwnProperty(diff)) return [i, map[diff]]

            map[nums[i]] = i
        }

        return []
    }
}

/*

[3,4,5,6], t = 7

{
   3: 0
   4: 1
}

1: 

*/