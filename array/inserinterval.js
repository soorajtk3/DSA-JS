var insert = function(intervals, newInterval) {
  const result = [];
  
  for (let i = 0; i < intervals.length; i++) {
      // If the current interval ends before the new interval starts, add it to the result
      if (intervals[i][1] < newInterval[0]) {
          result.push(intervals[i]);
      }
      // If the current interval starts after the new interval ends, add the newInterval and all remaining intervals
      else if (intervals[i][0] > newInterval[1]) {
          result.push(newInterval);
          return result.concat(intervals.slice(i));
      }
      // If intervals overlap, merge them by adjusting the newInterval boundaries
      else {
          newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
          newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      }
  }
  
  // Add the merged newInterval at the end
  result.push(newInterval);
  return result;
};

const intervals = [[1, 3], [6, 9]];
const newInterval = [2, 5];
const res = insert(intervals,newInterval)
console.log(res);
