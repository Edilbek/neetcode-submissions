class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        Map<Character, Integer> freq = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            freq.merge(s.charAt(i), 1, Integer::sum);
        }

        for (int i = 0; i < t.length(); i++) {
            freq.merge(t.charAt(i), -1, Integer::sum);

            if (freq.get(t.charAt(i)) == 0) {
                freq.remove(t.charAt(i));
            }
        }

        return freq.isEmpty();
    }
}