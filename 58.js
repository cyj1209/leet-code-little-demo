/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let num = 0;
  while (s[i] === ' '){
    i--
  }
  for ( ; i >= 0; i--) {
    if(s[i]=== ' '){
        return num;
    }
    num++;
  }
  return num;
};

// s = 'hello world'
s = 'a';

console.log(lengthOfLastWord(s));