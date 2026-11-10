class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let length = s.length + t.length
        let firstHash = {}
        let secondHash = {}

        for (let i = 0; i < length; i++) {
            if (!s[i] && !t[i]) break

            if (firstHash[s[i]]) {
                firstHash[s[i]]++
            } else {
                firstHash[s[i]] = 1
            }

            if (secondHash[t[i]]) {
                secondHash[t[i]]++
            } else {
                secondHash[t[i]] = 1
            }
        }

        console.log({firstHash, secondHash})
        for (let i = 0; i < length; i++) {
            if (!s[i] && !t[i]) break

            if (firstHash[s[i]] !== secondHash[s[i]]) {
                return false
            }
        }
        
        return true;
    }
}

/*




*/ 
