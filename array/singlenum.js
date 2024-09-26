var singleNumber = function(nums) {
  let result = 0;
for (let num of nums) {
    result ^= num;
}
return result;
};

const res = singleNumber([2, 2, 1]);
console.log(res);

