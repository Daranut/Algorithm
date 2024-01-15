// กำหนดให้ Array มาซึ่งมีความยาวมากกว่า 1 (1 <= arr.length <= 100,000) จงหา Maximum Sum Subarray 
// โดยที่ Subarray ต้องมีจำนวนสมาชิกมากกว่า 0 ตัว และสามารถลบสมาชิกตัวไหนก็ได้ออกได้ 1 ตัว (หรือไม่ลบเลยก็ได้)

// Example Testcases
// maxSum([-10, 2, 3, 4]) => 9

// อธิบาย: Subarray คือ [2, 3, 4]

// maxSum([1, -2, 0, 3]) => 4

// อธิบาย: Subarray คือ [1, -2, 0, 3] แต่เราสามารถลบออกได้หนึ่งตัวเหลือ [1, 0, 3] ข้อนี้จึงตอบ 4

function maxSum(arr) {
    let currentSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let nonDeletedMaxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);

        if (arr[i] > 0) {
            nonDeletedMaxSum += arr[i];
        }
    }

    if (nonDeletedMaxSum === 0) {
        return Math.max(...arr);
    }

    return Math.max(maxSum, nonDeletedMaxSum);
}

console.log(maxSum([-10, 2, 3, 4]));  
console.log(maxSum([1, -2, 0, 3]));    
  
