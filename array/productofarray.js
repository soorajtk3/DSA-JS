var productExceptSelf = function(nums) {
  let n = nums.length;
let answer = new Array(n).fill(1);

// Calculate left products
let leftProduct = 1;
for (let i = 0; i < n; i++) {
   answer[i] = leftProduct;
   leftProduct *= nums[i];
}

// Calculate right products and multiply with left products
let rightProduct = 1;
for (let i = n - 1; i >= 0; i--) {
   answer[i] *= rightProduct;
   rightProduct *= nums[i];
}

return answer;
};
const arr = [1,2,3,4]
const res = productExceptSelf(arr);
console.log(res);
