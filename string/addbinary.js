var addBinary = function(a, b) {
  let carry = 0;
  let result = [];
  
  let i = a.length - 1;
  let j = b.length - 1;
  
  while (i >= 0 || j >= 0 || carry > 0) {
      let sum = carry;
      
      if (i >= 0) sum += parseInt(a[i--], 10);  // Convert binary 'a' to number
      if (j >= 0) sum += parseInt(b[j--], 10);  // Convert binary 'b' to number
      
      result.unshift(sum % 2);  // Append binary digit to result
      carry = Math.floor(sum / 2);  // Calculate new carry
  }
  
  return result.join('');
};

const a = "110"; const b = "1";
const res = addBinary(a, b);
console.log(res);
