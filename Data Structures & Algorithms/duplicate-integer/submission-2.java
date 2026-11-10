class Solution {
    public boolean hasDuplicate(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();

        for (int n : nums) {
            if (freq.containsKey(n)) return true;

            freq.put(n, 1);
        }

        return false;
    }
}