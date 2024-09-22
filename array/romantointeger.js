var romanToInt = function(s) {
  // Define a mapping of Roman numerals to their integer values
  const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let total = 0;

  // Iterate over the string of Roman numerals
  for (let i = 0; i < s.length; i++) {
      // Get the value of the current Roman numeral and the next one
      let currentVal = romanMap[s[i]];
      let nextVal = romanMap[s[i + 1]];

      // If the current value is less than the next value, subtract it; otherwise, add it
      if (currentVal < nextVal) {
          total -= currentVal;
      } else {
          total += currentVal;
      }
  }

  return total;
};
const res = romanToInt("LVIII");
console.log(res);
