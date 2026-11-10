class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let p1 = 0, p2 = 0;

        while (p2 < t.length) {
            if (t[p2] == s[p1]) {
                p1++
            }

            p2++
        }

        return p1 == s.length
    }
}
