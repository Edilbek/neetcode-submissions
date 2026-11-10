class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        if (k === 0) return 0;

        let l = 0
        let r = 0
        const freq = {}
        let longest = 0

        while (r < s.length) {
            freq[s[r]] = (freq[s[r]] || 0) + 1

            if (Object.keys(freq).length > k) {
                 freq[s[l]]--
                 if (freq[s[l]] === 0) delete freq[s[l]];
                 l++
            }

            longest = Math.max(longest, r - l + 1)
            r++
        }

        return longest
    }
}

/*

k = 2

{
    e: 1
    c: 1
    b: 1
    a: 1
}

    l
        r
e c e b a
0 1 2 3 4


k = 2

{
    a: 1
}

l
r
a a
0 1

*/ 
