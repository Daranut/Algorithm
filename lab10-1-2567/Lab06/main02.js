// กำหนดกำหนดให้จำนวนเต็มบวกทั้งหมด 2 ตัวคือ left, right

// ให้หาจำนวนเต็มบวก 2 ตัว num1, num2 ที่ left <= num1 < num2 <= right โดยที่ num1 และ num2 เป็น prime number (num1, num2 เป็นค่า prime ที่อยู่ในช่วง left, right)

// ืีnum2 - num1 ต้องมีค่าน้อยที่สุดจากคู่ทั้งหมดที่เป็นไปได้ และให้ return ค่า num1, num2 ออกมาเป็น array = [num1, num2]

// ยกตัวอย่างเช่น left = 10, right = 17; primes = [11, 13, 17] จะมี Output เป็น [11, 13] ไม่ใช่ [13, 17] เพราะ (13 - 11 = 2) < (17 - 13 = 4)

// ุถ้าเกิดว่ามีหลาย pairs ที่ทำให้ condition ข้างต้นเป็นจริงได้ ให้ return pair ที่มีค่า num1 น้อยที่สุด (ดู example testcases 1) หรือ return [-1, -1] ถ้าไม่มีจำนวน prime เพียงพอ

// Example Testcases
// Input: left = 10, right = 19; Output: [11,13]

// Prime number ระหว่าง 10 ถึง 19 = [11, 13, 17, 19] ระยะห่างระหว่าง prime สองตัวที่น้อยที่สุดคือ [11,13] และ [17,19] แต่เนื่องจาก 11 น้อยกว่า 17 จึง return [11, 13]

// Input: left = 4, right = 6; Output: [-1,-1]

// มี Prime number แค่ตัวเดียวคือ 5 ดังนั้นจึงไม่สามารถทำ condition ให้เป็นจริงได้

// Code
// function closestPrimes(left, right) {}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function closestPrimes(left, right) {
    let primes = [];
    let result = [-1, -1];
  
    for (let i = left; i <= right; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    for (let i = 0; i < primes.length - 1; i++) {
      let diff = primes[i + 1] - primes[i];
      if (result[0] === -1 || diff < result[1] - result[0]) {
        result = [primes[i], primes[i + 1]];
      }
    }
  
    return result;
  }

  console.log(closestPrimes(10, 19));
  console.log(closestPrimes(4, 6));   
  