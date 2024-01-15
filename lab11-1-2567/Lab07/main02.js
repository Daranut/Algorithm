// โจทย์กำหนดให้รับ Input มาหนึ่งตัวเป็น Array ที่ซ้อน Array ของตัวเลข (ซึ่งจะซ้อนลึกกี่ชั้นก็ได้) 
// ให้เขียน Function Flatten ที่จะ Return ค่าออกมาเป็น Array ของตัวเลขใน Array 
// ทั้งหมดโดยจำนวนชั้นความลึกจะต้องเหลือเพียง Level เดียวเท่านั้น

// Example Testcases
// flatten([1, [2], [[3], 4], [[[[5]]]]]) => [1, 2, 3, 4, 5]

// flatten([[[[[[10]]]]]]) => [10]

// flatten([[], [], []]) => []
function flatten(arr) {
    return arr.reduce((result, current) => {
      if (Array.isArray(current)) {
        return result.concat(flatten(current));
      } else {
        result.push(current);
        return result;
      }
    }, []);
  }
  
  console.log(flatten([1, [2], [[3], 4], [[[[5]]]]]));
  console.log(flatten([[[[[[10]]]]]]));           
  console.log(flatten([[], [], []]));                  