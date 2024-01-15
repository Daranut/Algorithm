// กำหนดให้ N เป็นตัวเลขตัวหนึ่ง ให้เรา Return ค่าออกมาเป็น Boolean 
// ถ้าหากว่า N มีรากที่สองเป็นจำนวนเต็มจะให้ Return “true” ส่วนถ้าไม่มีก็จะ Return “false”

// ห้ามใช้ Math.sqrt!

function hasSqrt(n) {
    if (n < 0) {
      return false; 
    }
  
    for (let i = 0; i <= n; i++) {
      if (i * i === n) {
        return true; 
      }
    }
  
    return false; 
  }
  
  console.log(hasSqrt(16));
  console.log(hasSqrt(20)); 
  