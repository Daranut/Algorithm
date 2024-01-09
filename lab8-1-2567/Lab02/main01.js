// ให้ String มา 1 ตัว (1 ≤ str.length ≤ 100) 
// จงหา Substring ที่ยาวที่สุดและปรากฏมากกว่าหรือเท่ากับ 2 ครั้งใน String 
// เช่น “abcab” จะพบว่า Sub-string ที่ยาวที่สุดและปรากฏใน String มากกว่า 2 ครั้งคือ “ab” 
// (ถ้าหากไม่พบ Substring ดังกล่าวให้ Return “Not Found” ออกมา, ส่วนในกรณีที่เจอ Substring มากกว่า 1 ตัวให้ Return ค่าไหนออกมาก็ได้)

// Example Testcases
// longestDuplicateSubstring("abcab") => ab

// longestDuplicateSubstring("abc") => Not Found

function longestDuplicateSubstring(str) {
    const base = 26;
    const mod = 2**32;

    function search(len) {
        let hash = 0;
        let p = 1;

        for (let i = 0; i < len; i++) {
            hash = (hash * base + str.charCodeAt(i)) % mod;
            p = (p * base) % mod;
        }

        const seen = new Set([hash]);
        let start = 1;

        while (start < str.length - len + 1) {
            hash = (hash * base - str.charCodeAt(start - 1) * p + mod) % mod;
            hash = (hash + str.charCodeAt(start + len - 1)) % mod;

            if (seen.has(hash)) {
                return start;
            }
            
            seen.add(hash);
            start++;
        }

        return -1;
    }

    let low = 1;
    let high = str.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const index = search(mid);

        if (index !== -1) {
            low = mid + 1;
            result = index;
        } else {
            high = mid - 1;
        }
    }

    return result !== -1 ? str.slice(result, result + low - 1) : "Not Found";
}
console.log(longestDuplicateSubstring("abcab")); 
console.log(longestDuplicateSubstring("abc"));  