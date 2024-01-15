// กำหนดให้ Function มีชื่อว่า isPalindrome(str) รับ String เข้ามาหนึ่งตัว (str[i] 
// เป็น lowercase a-z) และ Output ออกมาเป็น Boolean เพื่อบอกว่า String ดังกล่าวเป็น Palindrome หรือไม่

// ให้ลองแก้โจทย์ข้อนี้โดยใช้ Recursion

// Palindrome คือ string ที่อ่านไปด้านหน้า หรือถอยหลังจะเหมือนกัน เช่น "mom", "radar"

// Example Testcases
// isPalindrome("repaper"); Output = true;

// isPalindrome("racecar"); Output = true;

// isPalindrome("hello"); Output = false;

function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
  }
  
  console.log(isPalindrome("repaper")); 
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello"));   