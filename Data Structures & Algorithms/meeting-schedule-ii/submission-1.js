/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let starts = intervals.map(i => i.start).sort((a, b) => a - b);
        let ends   = intervals.map(i => i.end).sort((a, b) => a - b);
        let res = 0, count = 0;
        let i = 0, j = 0;

        while (i < intervals.length) {
            if (starts[i] < ends[j]) {
                i++;
                count++;
            } else {
                j++;
                count--;
            }

            res = Math.max(count, res);
        }

        return res;
    }
}

/*

0 5 10 15 20 25 30 35 40
-----------------------
  ---
        ---

*/ 