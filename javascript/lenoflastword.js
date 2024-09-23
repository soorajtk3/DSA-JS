var lengthOfLastWord = function(s) {
  return s.split(" ").filter(word => word.length > 0).pop().length;
};

let res = lengthOfLastWord("   fly me   to   the moon  ")
console.log(res);
