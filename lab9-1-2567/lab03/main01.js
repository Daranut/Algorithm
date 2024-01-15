// ให้ Array มีขนาดเท่ากับ n; ให้ Return majority element.

// The majority element คือ element ที่โผล่ใน array มากกว่าหรือเท่ากับ ⌈n / 2⌉ 
// ครั้ง. โดย Input จะมี majority element เสมอ.

// Example Testcases
// Input: nums = [3,2,3]; Output: 3

// Input: nums = [2,2,1,1,1,2,2]; Output: 2

function majorityElement(nums) {
    nums.sort();
    const mid = Math.floor(nums.length / 2);
    return nums[mid];
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); 
