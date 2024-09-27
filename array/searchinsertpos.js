var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid; // Target found, return its index
      } else if (nums[mid] < target) {
          left = mid + 1; // Move the left boundary to the right
      } else {
          right = mid - 1; // Move the right boundary to the left
      }
  }

  return left; // If target is not found, return the position it should be inserted
};
const res = searchInsert([1, 3, 5, 6],2)
console.log(res);
