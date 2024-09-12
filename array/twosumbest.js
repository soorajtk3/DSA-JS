const arr = [3,2,4];
const target = 6;

const twoSum = (arr,target) =>
{
  const hashMap = {}; // This will store the values and their indices
  
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]; // Calculate the difference needed to reach the target
  console.log(hashMap,'hash');

    
    // If the complement is found in the hashMap, return the indices
    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i]; // Return indices of complement and current value
    }
  console.log(hashMap,'hash');
    
    // Store the index of the current element in the hashMap
    hashMap[arr[i]] = i;
  }
  
  
  // If no result is found, return an empty array (or handle as needed)
  return [];

  
}

const finalRes = twoSum(arr, target);
console.log(finalRes);
