/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  let a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
  strs.forEach(str => {
    let key = 1;
    for (let i = 0; i < str.length; i++) {
       key *= a[str[i].charCodeAt()-97]
    }
    if (map[key] === undefined) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  });
  return Object.keys(map).map(key => map[key]);
};

let strs ;
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
debugger;
