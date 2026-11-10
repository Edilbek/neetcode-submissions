class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = {}
        let maxf = 0
        let l = 0
        let maxLength = 0

        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] || 0) + 1
            maxf = Math.max(maxf, freq[s[r]])
            let charNumInWinToReplace = (r - l + 1) - maxf

            if (charNumInWinToReplace > k) {
                freq[s[l]]--
                l++
            }

            maxLength = Math.max(maxLength, r - l + 1)
        }

        return maxLength
    }
}
