var isPalindrome = function(x) {
  let sum=0;
  let temp;
  let r;
  temp=x;
  while(x>0){
      r=x%10;
      sum=(sum*10)+r;
      x= Math.floor(x/10);
  }
 return temp === sum;
};
const num = 12321;
let res = isPalindrome(num);
if (res)
{
  console.log(`${num} is paliondrome`);
  
} else
{
  console.log(`${num} is not paliondrome`);
  
}
