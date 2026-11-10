class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1
        let l_max = 0, r_max = 0
        let res = 0

        while (l < r) {
            if (height[l] < height[r]) {
                l_max = Math.max(l_max, height[l])
                res += l_max - height[l]
                l++
            } else {
                r_max = Math.max(r_max, height[r])
                res += r_max - height[r]
                r--
            }
        }

        return res;
    }
}


/*
l_max = 3
r_max = 3
res   = 4

       l
               r
[0,2,0,3,1,0,1,3,2,1]
 
*/ 