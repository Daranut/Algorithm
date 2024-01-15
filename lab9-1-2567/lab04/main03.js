// จงหาตัวเลขที่น้อยที่สุดใน Sorted Array แต่ว่า Array ดังกล่าวได้ถูกหมุนค่าโดยใครบางคน 
// เช่น [1, 2, 3, 4, 5] ถ้าหากว่าโดนหมุน Array นี้ไปทางขวา 2 ครั้ง ก็จะได้ Array ใหม่คือ [3, 4, 5, 1, 2] 
// ให้เราหาค่าที่น้อยที่สุดจาก Array ดังกล่าวนี้ (1 ≤ arr.length ≤ (2^{100}))

// เพิ่มเติม: สำหรับโจทย์นี้สามารถแก้ได้โดย Linear Search 
// แต่แนะนำว่าให้ใช้ Binary Search ในการแก้ปัญหาเพื่อให้เข้าใจถึงการปรับใช้มากขึ้นและไม่ควรใช้ Function Sort

// Time Complexity ควรได้ O(logn)

function findMin(arr) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > arr[high]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
  
    return arr[low];
  }
  
  console.log(findMin([1, 2, 3, 4, 5])); 
  console.log(findMin([3, 4, 5, 1, 2])); 