class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {
        const freq = {};
        const n = mat.length;

        for (const row of mat) {
            const seen = new Set(row); // avoid duplicates in the same row
            for (const val of seen) {
                freq[val] = (freq[val] || 0) + 1;
            }
        }

        // Find the keys present in all rows
        const common = Object.keys(freq)
            .filter(k => freq[k] === n)
            .map(Number);

        if (common.length === 0) return -1; // no common element
        return Math.min(...common); // smallest common element
    }
}

/*
  {
    1: 2
    2: 2
    3: 3
    4: 2
    5: 4
    8: 1
    10: 1
    7: 2
    9: 2
    11: 1
  }
  
                                               l
[[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]

*/ 
