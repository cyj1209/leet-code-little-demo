/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // 需要建立一个二维数组
  // 填充二维数组
  let a = [];
  let m = word1.length;
  let n = word2.length;
  let i = 0;
  for (; i <= m; i++) {
    a[i] = [i];
  }
  for (i = 1; i <= n; i++) {
    a[0][i] = i;
  }
  for (i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        a[i][j] = a[i - 1][j - 1];
      } else {
        a[i][j] = Math.min(
          a[i - 1][j - 1] + 1,
          a[i - 1][j] + 1,
          a[i][j - 1] + 1
        );
      }
    }
  }
  return a[m][n];
};

let w1 = "cafe";
let w2 = "coffee";

w1 = "park";
w2 = "spake";

console.log(minDistance(w1, w2));
