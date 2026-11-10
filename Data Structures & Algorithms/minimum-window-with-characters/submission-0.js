class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tChars = {}
        const sChars = {}
        let l = 0, r = 0
        let required = 0, formed = 0
        let min_len = Number.POSITIVE_INFINITY
        let min_start = 0

        for (let tt of t) {
            if (!tChars[tt]) required++
            tChars[tt] = (tChars[tt] || 0) + 1
        }

        while (r < s.length) {
            let char = s[r]

            sChars[char] = (sChars[char] || 0) + 1 
            if (tChars[char] === sChars[char]) formed++

            while (required === formed) {
                if (r - l + 1 < min_len) {
                    min_len = r - l + 1
                    min_start = l
                }

                let lChar = s[l]
                if (tChars[lChar]) {
                    sChars[lChar]--
                    if (sChars[lChar] < tChars[lChar]) formed--
                }

                l++
            }

            r++
        }

        return min_len === Number.POSITIVE_INFINITY 
        ? '' 
        : s.slice(min_start, min_start + min_len)
    }
}
