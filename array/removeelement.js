var removeElement = function(nums, val) {
  let k = 0; // This will track the number of elements not equal to val
  
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      // If the current element is not equal to val, assign it to nums[k] and increment k
      if (nums[i] !== val) {
          nums[k] = nums[i];
          k++;
      }
  }
  
  // k now represents the number of elements that are not equal to val
  return k;
};
const nums = [3, 2, 2, 3]; const val = 3;
const res = removeElement(nums, val);
console.log(res);
