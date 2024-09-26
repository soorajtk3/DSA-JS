var majorityElement = function(nums) {
  let candidate = null;
let count = 0;

for (let num of nums) {
   if (count === 0) {
       candidate = num;
   }
   count += (num === candidate) ? 1 : -1;
}

return candidate;
};

const res = majorityElement([1,2,3,4,8,4]);
console.log(res);
