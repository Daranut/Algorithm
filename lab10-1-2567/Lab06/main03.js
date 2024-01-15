// โจทย์กำหนดให้ Array ของจำนวนเต็มบวกที่มีค่ามากกว่า 2 (2 ≤ arr[i] ≤ 100,000) และ arr length มีค่าไม่เกิน 100,000 
// ให้ Return Index ของ Prime Number ออกมาเป็น Array โดยให้เลข 2 คือ Prime ตำแหน่งที่ 0 และเลข 3, 5, 7, 11, 13… 
// คือตำแหน่งที่ 1, 2, 3, 4… ตามลำดับ (ถ้าหากตัวเลขไม่เป็น Prime ให้เก็บค่าเป็น -1)

// ตัวอย่างเช่น getPrimesIndex([2, 11, 100, 31]) จะต้อง Return ค่าออกมาเป็น [0, 4, -1, 10] 
// เพราะ 2 คือ Prime ลำดับที่ 0, 11 คือ Prime ลำดับที่ 4, 100 ไม่เป็น Prime จึงเป็น -1, และ 31 เป็น Prime ลำดับที่ 10

// Example Testcases
// getPrimesIndex([2, 11, 100, 31]) => [0, 4, -1, 10]

// Code
// function getPrimesIndex(arr) {}

function getPrimesIndex(arr) {
  const maxElement = Math.max(...arr); // O(n)
  const isPrime = new Array(maxElement + 1).fill(true);
  const primes = [];

  for (let number = 2; number <= maxElement; ++number) {
    if (isPrime[number]) {
      primes.push(number);

      let nextNumber = number * 2;
      while (nextNumber <= maxElement) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(primes.indexOf(arr[i]));

    // indexOf time complexity = O(n)
    // NOTE: we can optimized by save the prime index in HashMap during computing Sieve of eratosthenes algorithm
  }
  return result;
}
console.log(getPrimesIndex([2, 11, 100, 31]))
  