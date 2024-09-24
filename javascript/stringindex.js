var strStr = function (haystack, needle)
{
  if (haystack.includes(needle))
  {
    return haystack.indexOf(needle)
  }
  else
  {
    return -1;
  }
};
const res= strStr("butsad","sad")
console.log(res);
