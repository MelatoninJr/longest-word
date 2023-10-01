function findLongestWordWithMostVowels(sentence) {
    // Helper function to count vowels in a word
    function countVowels(word) {
      const vowels = 'aeiouAEIOU';
      let count = 0;
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          count++;
        }
      }
      return count;
    }
  
    let longestWord = '';
    let maxLength = 0;
    let maxVowels = 0;
  
    const words = sentence.split(/\s+/); // Split by one or more spaces
  
    for (const word of words) {
      // Remove non-alphabet characters and convert to lowercase
      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
      // Calculate word length and vowel count
      const wordLength = cleanWord.length;
      const vowelCount = countVowels(cleanWord);
  
      if (wordLength > maxLength || (wordLength === maxLength && vowelCount > maxVowels)) {
        maxLength = wordLength;
        maxVowels = vowelCount;
        longestWord = cleanWord;
      }
    }
  
    return longestWord;
  }
  
  // Test scenarios
  console.log(findLongestWordWithMostVowels("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));
  