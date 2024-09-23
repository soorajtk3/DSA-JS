var lengthOfLastWord = function(s) {
  return s.split(" ")[s.split(" ").length - 1].length;
};

let res = lengthOfLastWord('where are you dude12')
console.log(res);
