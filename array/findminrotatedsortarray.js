var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  // If the array is not rotated (sorted), return the first element
  if (nums[left] < nums[right]) {
      return nums[left];
  }

  // Binary search
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      // If mid element is greater than right element, the minimum is in the right half
      if (nums[mid] > nums[right]) {
          left = mid + 1;
      } else {
          // Otherwise, it's in the left half (including mid)
          right = mid;
      }
  }
  
  return nums[left]; // At the end, left and right will point to the minimum
};

const nums = [11,13,15,17]
const res = findMin(nums)
console.log(res);
