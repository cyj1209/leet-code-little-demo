/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let nowCharLength = 0;
  let rowStartIndex = 0;
  let nowWordIndex = 0;
  let res = [];
  while (nowWordIndex < words.length) {
    if (
      nowCharLength +
        words[nowWordIndex].length +
        nowWordIndex -
        rowStartIndex <=
      maxWidth
    ) {
      // 每个单词之间至少要有一个空格
      // 没有超出 可以继续添加单词
      nowCharLength += words[nowWordIndex].length;
    } else {
      //已经超出了
      // 判断是不是只有一个单词
      if (nowWordIndex - rowStartIndex === 1) {
        res.push(words[rowStartIndex].padEnd(maxWidth, " "));
        nowCharLength = words[nowWordIndex].length;
        rowStartIndex++;
      } else {
        let rest = maxWidth - nowCharLength;
        // 怎么计算出每个空需要插入的空格数 需要插入的间隔
        let space = nowWordIndex - rowStartIndex - 1;
        let every = Math.floor(rest / space);
        let more = rest % space;
        // 怎么拼接单词？
        let i = 0;
        let t = "";
        while (rowStartIndex < nowWordIndex - 1) {
          if (i < more) {
            t += words[rowStartIndex] + " ".repeat(every + 1);
          } else {
            t += words[rowStartIndex] + " ".repeat(every);
          }
          i++;
          rowStartIndex++;
        }
        t += words[rowStartIndex];
        rowStartIndex++;
        res.push(t);
        nowCharLength = words[nowWordIndex].length;
      }
    }
    if (nowWordIndex === words.length - 1) {
      // 已经是最后一个单词了
      let t = "";
      while (rowStartIndex < nowWordIndex) {
        t += words[rowStartIndex] + " ";
        rowStartIndex++;
      }
      t += words[nowWordIndex];
      res.push(t.padEnd(maxWidth, " "));
    }
    nowWordIndex++;
  }
  return res;
};

let words = [];
let maxWidth = 0;
words = ["What", "must", "be", "acknowledgment", "shall", "be"];
maxWidth = 17;
words = ["This", "is", "an", "example", "of", "text", "justification."];
maxWidth = 16;

words = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do"
];
maxWidth = 20;

console.log(fullJustify(words, maxWidth));
debugger;

[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
];
[
  "Science  is  what we",
  "understand      well",
  "enough   to  explain",
  "to  a  computer. Art",
  "is  everything  else",
  "we do               "
];
