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
  let j = wordLength - 1;
  let key;

  words.forEach((word, index) => {
    key = word[i] + word[j];
    if (wordsMap[key] === undefined) {
      wordsMap[key] = [index];
    } else {
      wordsMap[key].push(index);
    }
  });
  let sMap = {};
  while (i + wordNumber * wordLength <= length) {
    key = s[i] + s[j];
    if (wordsMap[key] !== undefined) {
      if (isFound(wordNumber)) {
        res.push(i);
      }
    }
    i++;
    j = i + wordLength - 1;
  }
  return res;

  function isFound(wordNumber) {
    let foundArray = new Array(wordNumber);
    while (true) {
      if (sMap[j] === undefined) {
        // 还没有验证过
        wordsMap[key].forEach(index => {
          if (isWord(j - wordLength + 1, j, index)) {
            if (sMap[j] === undefined) {
              sMap[j] = [index];
            } else {
              sMap[j].push(index);
            }
          }
        });
        if (sMap[j] === undefined) {
          sMap[j] = -1;
        }
      }
      let isContinue = false;
      if (sMap[j] === -1) {
        // 已经验证过不是的
        return false;
      } else {
        for (let sIndex = 0; sIndex < sMap[j].length; sIndex++) {
          if (!foundArray[sMap[j][sIndex]]) {
            foundArray[sMap[j][sIndex]] = 1;
            j = j + wordLength;
            wordNumber--;
            if (wordNumber === 0) {
              return true;
            }
            isContinue = true;
            break;
          }
        }
        if (!isContinue) {
          return false;
        }
      }
      key = s[j - wordLength + 1] + s[j];
      if (wordsMap[key] === undefined) {
        return false;
      }
    }
  }

  function isWord(start, finish, index) {
    let offset = 1;
    while (start + offset < finish) {
      if (words[index][offset] !== s[start + offset]) {
        return false;
      }
      offset++;
    }
    return true;
  }
};

let s = "barfoothefoobarman";
let words = ["foo", "bar"];

s = "wordgoodgoodgoodbestword";
words = ["word", "good", "best", "word"];

s = "";
words = [];

s = "barfoofoobarthefoobarman";
words = ["bar", "foo", "the"];

s = "wordgoodgoodgoodbestword";
words = ["word", "good", "best", "good"];

s = "aaaaaaaa";
words = ["aa", "aa", "aa"];

console.log(findSubstring(s, words));
