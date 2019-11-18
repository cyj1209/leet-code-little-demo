function reverseString(str) {
  let fast = 0;
  let slow = 0;
  let res = "";
  for (; fast < str.length; fast++) {
    if (str[fast] === " ") {
      let t = "";
      while (slow < fast) {
        t = str[slow] + t;
        slow++;
      }
      t += ' ';
      slow++ ;
      res += t;
    }
  }
  let t = "";
  while (slow < fast) {
    t = str[slow] + t;
    slow++;
  }
  res += t;
  return res;
}

console.log(reverseString("my love"));
