var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      // If the current digit is less than 9, just increment it and return the array
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      
      // If the digit is 9, set it to 0 (carry over)
      digits[i] = 0;
  }
  
  // If we are out of the loop, it means all digits were 9 and turned into 0
  // Add 1 at the front of the array
  digits.unshift(1);
  return digits;
};
const res=plusOne([9, 9, 9])
console.log(res);
