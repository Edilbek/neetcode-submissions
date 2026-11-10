class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l = 0, res = 0, sum = 0;

        for (let r = 0; r < arr.length; r++) {
            sum += arr[r]

            if (r - l + 1 == k) {
                if (sum / k >= threshold) res++
                sum -= arr[l]
                l += 1
            }
        }

        return res
    }
}

/*
 l  
     r
[2,2,2,2,5,5,5,8]

*/ 