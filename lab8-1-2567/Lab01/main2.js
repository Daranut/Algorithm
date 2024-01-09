// เขียน Function ชื่อว่า costToMakeEqual(a, b) โดย Function 
//นี้จะรับ Parameters ทั้งหมด 2 ตัวเป็น String(a, b) โดยที่ Character ใน String 
//จะเป็นได้แค่ “0” กับ “1” เท่านั้น(เป็น Binary String) ตัวอย่าง String: “1010”, “111”, “00101” 
//และ String ที่รับเข้ามา 2 ตัวนี้จะมีความยาวเท่ากัน((a.length = b.length))

// โดยเราสามารถเลือกทำ Operation ดังต่อไปนี้กับ String a ได้

// สลับ Character ตำแหน่งที่ i กับ j(โดยที่(0 ≤ i, j ≤ n - 1)); โดย Operation นี้จะเสีย(Cost = | i - j |) 
//เช่นถ้าเราสลับตำแหน่ง i = 1, กับ j = 4 เราจะเสีย(Cost = | 1 - 4 | = | -3 | = 3)
// เลือก Character ตำแหน่งที่ i แล้ว Flip Bit ซะ(เปลี่ยนจาก 1 เป็น 0, จาก 0 เป็น 1); โดย Operation นี้จะเสีย(Cost = 1)
// ให้เรา Return ค่า Cost ที่น้อยที่สุดที่จะทำให้ String a มีค่าเท่ากับ String b(โดยเราสามารถเลือกทำ Operation กี่ครั้งก็ได้)
function costToMakeEqual(a, b) {
    const n = a.length;
    let cost = 0;
  
    for (let i = 0; i < n; i++) {
      if (a[i] !== b[i]) {
  
        for (let j = i + 1; j < n; j++) {
          if (a[j] !== b[j] && a[i] !== a[j]) {
            const temp = a[i];
            a = a.substr(0, i) + a[j] + a.substr(i + 1);
            a = a.substr(0, j) + temp + a.substr(j + 1);
            cost += Math.abs(i - j);
            break;
          }
        }
  
        a = a.substr(0, i) + (a[i] === '0' ? '1' : '0') + a.substr(i + 1);
        cost += 1;
      }
    }
  
    return cost;
  }
  
  console.log(costToMakeEqual("111", "000"));    
  console.log(costToMakeEqual("0100", "1011"));  
  