let Shuffle = () =>
  [..."A23456789JQK", 10]
    .reduce((arr, e) => arr.concat([`♥${e}`, `♠${e}`, `♣${e}`, `♦${e}`]), [
      "大🃏",
      "小🃏"
    ])
    // .sort(() => Math.random() - 0.5);
    .sort(()=>Math.floor(Math.random()*2 - Math.random()*2))
console.log(Shuffle());
debugger;

// function shuffle() {
//   let a = [..."A23456789JQK", 10].reduce(
//     (arr, e) => {
//       return arr.concat([`♥${e}`, `♠${e}`, `♣${e}`, `♦${e}`]);
//     },
//     ["大🃏", "小🃏"]
//   );
//   for (let i = 0; i < 54; i++) {
//     let t = a[i];
//     let index = i + Math.floor(Math.random() * (54 - i));
//     a[i] = a[index];
//     a[index] = t;
//   }
//   return a;
// }

console.log(shuffle());
debugger;
