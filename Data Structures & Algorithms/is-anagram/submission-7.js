class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        
        const map = {}

        for (let i = 0; i < s.length; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            if (!map[t[i]]) return false;

            map[t[i]]--;

            if (map[t[i]] == 0) delete map[t[i]]
        }

        return Object.keys(map).length === 0
    }
}

/* 

{
    r: 2,
    a: 2,
    c: 2,
    e: 1
}

*/