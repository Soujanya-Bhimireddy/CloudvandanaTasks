function reverseWordsInSentence(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];

  for (const word of words) {
    const reversedWord = reverseWord(word);
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(" ");
}

function reverseWord(word) {
  const chars = word.split("");
  const reversedChars = chars.reverse();
  return reversedChars.join("");
}

function sortArrayDescending(arr) {
  arr.sort((a, b) => b - a);
}

// Get user input for the sentence
const userSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWordsInSentence(userSentence);
console.log("Reversed Sentence: " + reversedSentence);

// Example usage for sorting an array in descending order
const numbers = [5, 2, 9, 1, 5, 6, 8, 3];
sortArrayDescending(numbers);
console.log("Sorted Array (Descending): " + numbers);
