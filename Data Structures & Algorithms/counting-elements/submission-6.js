class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        const hashSet = new Set(arr);
        let count = 0;
        for (const x of arr) {
            if (hashSet.has(x + 1)) {
                count++;
            }
        }
        return count;
    }
}


// class Solution {
//     /**
//      * @param {number[]} arr
//      * @return {number}
//      */
//     countElements(arr) {
//         const freq = {}
//         let count = 0

//         for (let a of arr) {
//             freq[a] = (freq[a] || 0) + 1
//         }

//         console.log({freq})

//         for (let key in freq) {
//             let nextKey = Number(key) + 1
//             if (freq[nextKey] != undefined) {
//                 count += freq[key]
//             }
//         }

//         return count
//     }
// }

// /*
//        r
// [1,3,2,3,5,0]

// {
//     1: 1,
//     3: 2
//     2: 1,
//     5: 1,
//     0: 1
// }

// */ 