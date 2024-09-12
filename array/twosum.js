const arr = [3,2,4];
const target = 6;

const twoSum = (arrValues,tar) =>
{
  let arr = arrValues;
  let resIndexes = [];
  arrValues.map((val,index) =>
  {
    const res = tar - val;
    if (arr.includes(res))
    {
      (resIndexes.push(index));
    }
    
  })
  if (resIndexes.length > 0) return resIndexes;
  else
  {
    return 'No value found'
  }
  
}

const finalRes = twoSum(arr, target);
console.log(finalRes);
