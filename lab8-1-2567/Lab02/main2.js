// กำหนดให้ arr จำนวนเต็มมา, หา subarray ที่มีผลบวกมากที่สุดและ return ค่านั้นออกมา

// 1 <= arr.length <= 10^5

// -10^4 <= arr[i] <= 10^44

// Example Testcases
// Input: arr = [-2,1,-3,4,-1,2,1,-5,4]; Output: 6

// Subarray [4,-1,2,1]

// Input: arr = [1]; Output: 1

// Subarray [1]

// Input: arr = [5,4,-1,7,8]; Output: 23

// Subarray [5,4,-1,7,8]

function maxSubArray(arr) {
    // กำหนดค่าเริ่มต้น
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // หาค่าที่ดีที่สุดสำหรับ subarray ที่ลงท้ายที่ i
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        // หา Maximum Subarray Sum ที่ได้จากการเปรียบเทียบกับค่า maxSoFar
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example Testcases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));        
console.log(maxSubArray([5,4,-1,7,8])); 
