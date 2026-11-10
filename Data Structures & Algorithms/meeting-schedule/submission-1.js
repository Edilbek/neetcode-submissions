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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let int = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            if (int.end > intervals[i].start) {
                return false
            }

            int = intervals[i]
        }

        return true;
    }
}

/*

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
        -------
                ------------------


0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
-----------        
      ----------------
                       ----------

0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
          -----------
--------

*/