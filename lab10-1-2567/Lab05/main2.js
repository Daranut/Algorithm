// กำหนดให้ string s ที่มี character เป็นไปได้แค่ '(', ')', '{', '}', '[' และ ']'. ให้หาว่า input 
//เป็น valid parentheses ไหม (return ค่าเป็น boolean)

// Input จะเป็น valid parentheses ก็ต่อเมื่อ:

// ปิดและปิดด้วยชนิดเดียวกัน เช่น "()", "{}", "[]"
// เปิดและปิดในลำดับที่ถูกต้อง เช่น "[()]" ไม่ใช่ "[(])"
// Example Testcases
// Input: s = "()"; Output: true

// Input: s = "()[]{}"; Output: true

// Input: s = "(]"; Output: false

// Input: s = "{[]}"; Output: true

function isValid(s) {
    const stack = [];
    const parenthesesMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      if (parenthesesMap.hasOwnProperty(currentChar)) {
        const topElement = stack.length === 0 ? '#' : stack.pop();
  
        if (topElement !== parenthesesMap[currentChar]) {
          return false;
        }
      } else {
        stack.push(currentChar);
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("()")); 
  console.log(isValid("()[]{}"));
  console.log(isValid("(]"));
  console.log(isValid("{[]}")); 
  