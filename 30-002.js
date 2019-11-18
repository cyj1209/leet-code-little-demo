/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words[0]) {
    return [];
  }
  let length = s.length;
  let wordLength = words[0].length;
  let wordNumber = words.length;
  if (length < wordNumber * wordLength) {
    return [];
  }
  let res = [];
  let wordsMap = {};
  let i = 0;
  let key;

  words.forEach(word => {
    if (wordsMap[word] === undefined) {
      wordsMap[word] = 1;
    } else {
      wordsMap[word]++;
    }
  });
  while (i + wordNumber * wordLength <= length) {
    key = s.substring(i, i + wordLength);
    if (wordsMap[key] !== undefined) {
      if (isFound(wordNumber, i)) {
        res.push(i);
      }
    }
    i++;
  }
  return res;

  function isFound(wordNumber, start) {
    let newMap = cloneMap();
    while (true) {
      newMap[key]--;
      if (newMap[key] < 0) {
        return false;
      }
      wordNumber--;
      if (wordNumber === 0) {
        return true;
      }
      start += wordLength;
      key = s.substring(start, start + wordLength);
      if (wordsMap[key] === undefined) {
        return false;
      }
    }
  }

  function cloneMap() {
    let newMap = {};
    Object.keys(wordsMap).forEach(key => {
      newMap[key] = wordsMap[key];
    });
    return newMap;
  }
};

let s = "barfoothefoobarman";
let words = ["foo", "bar"];

// s = "wordgoodgoodgoodbestword";
// words = ["word", "good", "best", "word"];

// s = "";
// words = [];

// s = "barfoofoobarthefoobarman";
// words = ["bar", "foo", "the"];

// s = "wordgoodgoodgoodbestword";
// words = ["word", "good", "best", "good"];

// s = "aaaaaaaa";
// words = ["aa", "aa", "aa"];

console.log(findSubstring(s, words));
