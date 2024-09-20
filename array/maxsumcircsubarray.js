var maxSubarraySumCircular = function(nums) {
  let totalSum = 0;
let currentMax = 0, maxSum = nums[0];
let currentMin = 0, minSum = nums[0];


for (let num of nums) {

   totalSum += num;


   currentMax = Math.max(currentMax + num, num);
   maxSum = Math.max(maxSum, currentMax);

   currentMin = Math.min(currentMin + num, num);
   minSum = Math.min(minSum, currentMin);
}

return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum;
};
const res = maxSubarraySumCircular([1, -2, 3, -2]);
console.log(res);
