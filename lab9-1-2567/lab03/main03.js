// ให้ Array ของตัวเลข (สมาชิกใน Array มีมากกว่าหรือเท่ากับ 2 ตัวขึ้นไปและสมาชิกมีโอกาสซ้ำกันได้) 
//จงหาผลคูณที่มากที่สุดของเลขสองตัวใน Array โดยที่ตัวเลขใน Array เป็นได้ทั้งค่าบวกและค่าลบ (ข้อนี้ควรแก้ได้โดย Time Complexity ไม่เกินกว่า (O(nlogn)))

// Challenge: ข้อนี้สามารถแก้โดยใช้ Time Complexity O(n)

// Example Testcases
// findMaxProduct([-1, 6, 2, 5, 7]) => 42

// Code
// function findMaxProduct(arr) {}

function findMaxProduct(arr) {
    if (arr.length < 2) {
        return undefined;
    }

    arr.sort((a, b) => a - b);

    const lastIndex = arr.length - 1;
    const product1 = arr[0] * arr[1]; 
    const product2 = arr[lastIndex] * arr[lastIndex - 1];

    return Math.max(product1, product2);
}

console.log(findMaxProduct([-1, 6, 2, 5, 7])); 
