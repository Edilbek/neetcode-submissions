class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = {}
        let l = 0
        let longest = 0

        for (let r = 0; r < s.length; r++) {
            let char = s[r]

            while (map[char]) {
                delete map[s[l]]
                l++
            }

            map[char] = true
            longest = Math.max(longest, r - l + 1)
        }

        return longest
    }
}
