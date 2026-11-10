class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const anagrams = {};

        for (let i = 0; i < strs.length; i++) {
            const arr = new Array(26).fill(0);

            for (let c of strs[i]) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            if (!anagrams[arr]) anagrams[arr] = [];

            anagrams[arr].push(strs[i]);
        }

        return Object.values(anagrams);
    }
}

/*

{
    [0]
}

*/ 