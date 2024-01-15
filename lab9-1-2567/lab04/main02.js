// กำหนดให้ Array มีสมาชิกเป็นเลข 0 กับ 1 เท่านั้น โดย Array นี้ Sort 
// มาให้เรียบร้อยแล้ว ให้เราเป็นคนหา Index ที่เป็นเลข 1 ตัวแรกใน Array ออกมา

// Time Complexity ควรได้ O(logn)

function findFirstOne(arr) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === 1) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return result;
  }
  
  console.log(findFirstOne([0, 0, 1, 1, 1])); 
  console.log(findFirstOne([0, 0, 0, 0, 1, 1, 1, 1])); 