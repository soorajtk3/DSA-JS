var merge = function(nums1, m, nums2, n) {
  // Pointers for nums1, nums2, and the last element in nums1
  let i = m - 1; // Pointer for the last non-zero element in nums1
  let j = n - 1; // Pointer for the last element in nums2
  let k = m + n - 1; // Pointer for the last position in nums1
  
  // Merge the two arrays starting from the end
  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
      } else {
          nums1[k] = nums2[j];
          j--;
      }
      k--;
  }
  
  // If there are still elements in nums2, copy them
  while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
const res = merge(nums1, m, nums2, n);
console.log(res);
