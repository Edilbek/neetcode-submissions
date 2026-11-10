class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let int = intervals[0];
        let res = [];

        for (let i = 1; i < intervals.length; i++) {
            let curr = intervals[i];
            if (int[1] >= curr[0]) {
                let newStart = Math.min(int[0], curr[0]);
                let newEnd = Math.max(int[1], curr[1]);
                int = [newStart, newEnd];
                continue
            }

            res.push(int)
            int = curr
        }

        res.push(int)

        return res;
    }
}
