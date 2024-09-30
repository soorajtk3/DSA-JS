var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const letterToWord = new Map();
  const wordToLetter = new Map();

  for (let i = 0; i < pattern.length; i++) {
      const letter = pattern[i];
      const word = words[i];

      if (letterToWord.has(letter)) {
          if (letterToWord.get(letter) !== word) {
              return false;
          }
      } else {
          letterToWord.set(letter, word);
      }

      if (wordToLetter.has(word)) {
          if (wordToLetter.get(word) !== letter) {
              return false;
          }
      } else {
          wordToLetter.set(word, letter);
      }
  }

  return true;
};

// Example usage
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog dog dog dog")); // true
console.log(wordPattern("abba", "dog dog dog dog")); // false
