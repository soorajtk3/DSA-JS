var maxProduct = function(nums) {
  if (nums.length === 0) return 0;

// Initialize maxProduct, minProduct, and result with the first element
let maxProduct = nums[0];
let minProduct = nums[0];
let result = nums[0];


for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];

    let tempMax = Math.max(currentNum, maxProduct * currentNum, minProduct * currentNum);
    let tempMin = Math.min(currentNum, maxProduct * currentNum, minProduct * currentNum);

    maxProduct = tempMax;
    minProduct = tempMin;

 
    result = Math.max(result, maxProduct);
}

return result;
};
const res = maxProduct([2, 3, -2, 4])
console.log(res);
