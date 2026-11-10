class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let l = 0
        let longest = 0
        const freq = {}

        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] || 0) + 1

            if (Object.keys(freq).length > 2) {
                freq[s[l]]--
                if (freq[s[l]] == 0) delete freq[s[l]]
                l += 1
            }

            longest = Math.max(longest, r - l + 1)
        }

        return longest
    }
}

/*

{
    e: 2
    c: 1
    b: 1
}

l
   r
eceba

*/
