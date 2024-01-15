// DNA sequence ประกอบไปด้วย 'A', 'T', 'C', 'G' (เช่น "ACGAATTCCG")

// กำหนดให้ string s เป็น DNA sequence, ให้ return DNA sequence ทั้งหมด (substring) ที่มีความยาว 10 ตัวอักษร ที่ปรากฏอยู่ในตัวแปร s มากกว่าหนึ่งครั้ง.

// Example Testcases
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"; Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Input: s = "AAAAAAAAAAAAA"; Output: ["AAAAAAAAAA"]

// Input: s = "AAAAAAAAAA"; Output: []
function findRepeatedDnaSequences(s) {
    const result = [];
    const seen = new Set();
    const sequences = new Set();
  
    for (let i = 0; i <= s.length - 10; i++) {
      const sequence = s.substring(i, i + 10);
  
      if (sequences.has(sequence) && !seen.has(sequence)) {
        result.push(sequence);
        seen.add(sequence);
      } else {
        sequences.add(sequence);
      }
    }
  
    return result;
  }
  
  console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); 
  console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA")); 
  console.log(findRepeatedDnaSequences("AAAAAAAAAA")); 
  