
// Using hash set
var containsDuplicate = function(nums) {
  const hash_set = new Set();
  for (let num of nums)
  {
    if (hash_set.has(num))
    {
      return true;
    }
    else
    {
      hash_set.add(num);
    }
  }
  return false;
  
    
};

let arr = [2, 4, 7, 1, 2, 5,]
const res = containsDuplicate(arr);
console.log(res);
