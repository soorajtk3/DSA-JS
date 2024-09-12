
const prices = [7, 1, 5, 3, 2, 4]

var maxProfit = function (prices)
{
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length)
  {
    if (prices[right] > prices[left])
    {
      profit = Math.max(profit,prices[right] - prices[left])
    }
    else
    {
      left = right;
    }
    right +=1;
  }
  return profit;
  
    
};

const res = maxProfit(prices);
console.log(res);
