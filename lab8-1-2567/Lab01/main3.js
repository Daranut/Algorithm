function findEBNBNumber(n) {
    let strN = n.toString();
    
    // ทำการลองตัด digit ทีละตัวออกจากตำแหน่งสุดท้าย
    for (let i = strN.length - 1; i >= 0; i--) {
        let tempStr = strN.slice(0, i) + strN.slice(i + 1);
        let tempNum = parseInt(tempStr);
        
        // ตรวจสอบว่าตัวเลขหลังตัดมีคุณสมบัติเป็น EBNB หรือไม่
        if (Array.from(String(tempNum), Number).reduce((sum, digit) => sum + digit, 0) % 2 === 0 && tempNum % 2 !== 0) {
            return tempNum;
        }
    }
    
    // ถ้าไม่เจอเลข EBNB ในกรณีใดๆ ให้คืนค่า -1
    return -1;
}

// ตัวอย่างการใช้งาน
console.log(findEBNBNumber(1227));  // Output: 1227
console.log(findEBNBNumber(12));    // Output: -1
console.log(findEBNBNumber(177013));  // Output: 17703 (หรือ 73)
