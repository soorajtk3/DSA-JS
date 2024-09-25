var isValid = function(s) {
  const stack = [];
  const map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  
  for (let char of s) {
      if (map[char]) {
          // If it's an open bracket, push it to the stack
        stack.push(char);
        console.log(stack,'stack');
        
      } else {
          // If it's a closing bracket, check if it matches the top of the stack
          const top = stack.pop();
          if (map[top] !== char) {
              return false;
          }
      }
  }
  
  // If the stack is empty, it means all brackets were properly closed
  return stack.length === 0;
};

const res = isValid('{)')
console.log(res);
