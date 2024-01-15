// กำหนดลำดับจำนวนเต็มความยาว n ตัวมาให้ จงหา increasing subsequence (ลำดับย่อยที่ตัวเลขเรียงจากน้อยไปมาก) ที่มีความยาวมากที่สุด

// Subsequence คือการเลือกสมาชิกเพียงแค่บางตัวของ array ไว้โดยยังคงลำดับเดิมอยู่ (ไม่จำเป็นต้องอยู่ติดกัน)

// Example Testcases
// Input = [10, 22, 9, 33, 21, 50, 41, 60, 80]; Output = [10, 22, 33, 50, 60, 80];

// ลำดับย่อยที่เรียงจากน้อยไปมากที่ยาวที่ยาวที่สุดคือ [10, 22, 33, 50, 60, 80] (ความยาว 6 ตัว)

function findLIS(arr) {
    const n = arr.length;
    
    const dp = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
        }
      }
    }
  
    const maxLength = Math.max(...dp);
    const lis = [];
    let lastIndex = dp.indexOf(maxLength);
    lis.push(arr[lastIndex]);
  
    for (let i = lastIndex - 1; i >= 0; i--) {
      if (arr[i] < arr[lastIndex] && dp[i] === dp[lastIndex] - 1) {
        lis.unshift(arr[i]);
        lastIndex = i;
      }
    }
  
    return lis;
  }
  
  const input = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  console.log(findLIS(input));  
  