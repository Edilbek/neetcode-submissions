class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let l = 0, r = heights.length - 1

        while (l < r) {
            let min = Math.min(heights[l], heights[r])
            let volume = min * (r - l)
            max = Math.max(max, volume)

            if (heights[l] > heights[r]) {
                r--
            } else {
                l++
            }
        }

        return max
    }
}

/*
 l
               r
[1,7,2,5,4,7,3,6]
 0 1 2 3 4 5 6 7

*/ 