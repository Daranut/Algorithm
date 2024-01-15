// กำหนดให้ arr มาตัวหนึ่งที่ประกอบไปด้วยเลขจำนวนเต็ม ให้หา element 
// ตัวถัดไปที่มีค่ามากกว่าตัวเอง (ในแต่ละ arr[i]; หา element ตัวถัดไปที่ arr[j] > arr[i]; โดยที่ j > i) 
// ถ้าหากว่าไม่เจอให้ในตำแหน่งนั้นใส่เป็น -1

// Example Testcases
// Input = [18, 7, 6, 12, 15]; Output: [-1, 12, 12, 15, -1]

// Input = [3, 2, 1, 10, 15, 11]; Output: [10, 10, 10, 15, 10, -1]

function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];
  
    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const topIndex = stack.pop();
        result[topIndex] = arr[i];
      }
  
      stack.push(i);
    }
  
    return result;
  }
  
  console.log(nextGreaterElement([18, 7, 6, 12, 15])); 
  console.log(nextGreaterElement([3, 2, 1, 10, 15, 11])); 
  