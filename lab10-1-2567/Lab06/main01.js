// กำหนดให้จำนวนเต็มบวกทั้งหมด 2 ตัวคือ n และ k. ให้หาตัวประกอบ (Factor) ทั้งหมดของ n เรียงจากน้อยไปมาก 
// และให้ return ค่าตัวประกอบตำแหน่งที่ k จากตัวประกอบทั้งหมดนั้น ถ้าหากว่า n มีตัวประกอบน้อยกว่า k ให้ return -1

// Example Testcases
// Input: n = 12, k = 3; Output: 3

// ตัวประกอบท้ังหมดคือ [1, 2, 3, 4, 6, 12], ตัวที่ 3 คือ 3

// Input: n = 7, k = 2; Output: 7

// ตัวประกอบท้ังหมดคือ [1, 7], ตัวที่ 2 คือ 7

// Input: n = 4, k = 4; Output: -1

// ตัวประกอบท้ังหมดคือ [1, 2, 4], มี factor ทั้งหมดแค่ 3 ตัว ดังนั้นไม่มีตัวที่ 4: return -1

// Code
// function kthFactor(n, k) {}

function kthFactor(n, k) {
    let factors = [];
    
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    
    if (k > factors.length) {
      return -1;
    }
    
    return factors[k - 1];
  }
  
  console.log(kthFactor(12, 3)); 
  console.log(kthFactor(7, 2));  
  console.log(kthFactor(4, 4));  