// ให้ string s และ t, return true ถ้า t เป็น anagram ของ s

// Anagram คือการสลับอักษรแล้วทำให้เกิดคำใหม่ เช่น "dog" -> "god", "elbow" -> "below"

// Example Testcases
// Input: s = "anagram", t = "nagaram"; Output: true

// Input: s = "rat", t = "car"; Output: false

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}

console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car")); 
