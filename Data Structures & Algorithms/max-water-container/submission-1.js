class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let max = 0

        while (l < r) {
            const height = Math.min(heights[l], heights[r])
            const width = r - l
            let curArea = height * width
            // r - l = 6, min(l, r) = 6 * 6 = 36
            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }

            max = Math.max(max, curArea)
        }

        return max
    }
}
