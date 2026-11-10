class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // let length = s.length + t.length
        // let firstHash = {}
        // let secondHash = {}

        // for (let i = 0; i < length; i++) {
        //     if (!s[i] && !t[i]) break

        //     if (firstHash[s[i]]) {
        //         firstHash[s[i]]++
        //     } else {
        //         firstHash[s[i]] = 1
        //     }

        //     if (secondHash[t[i]]) {
        //         secondHash[t[i]]++
        //     } else {
        //         secondHash[t[i]] = 1
        //     }
        // }

        // for (let i = 0; i < length; i++) {
        //     if (!s[i] && !t[i]) break

        //     if (firstHash[s[i]] !== secondHash[s[i]]) {
        //         return false
        //     }
        // }
        if (s.length !== t.length) return false;

        let hash = {}

        for (const c of s) {
            hash[c] = (hash[c] || 0) + 1
        }

        console.log(hash)
        for (const c of t) {
            if (!hash[c]) return false;

            hash[c]--;
        }
        
        return true;
    }
}

/*




*/ 
