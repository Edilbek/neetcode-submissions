class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = {};

        for (let c of s) {
            map[c] = (map[c] || 0) + 1;
        }

        for (let c of t) {
            if (!map[c]) return false;

            map[c]--;
            // if (map[c] === 0) delete map[c];
        }

        return true;
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