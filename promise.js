// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     Math.random() > 0.5 ? resolve() : reject();
//   }, 500);
// }).then(
//   res => {
//     console.log("success");
//   },
//   error => {
//     console.log("fail");
//   }
// );

// console.log(p);
// debugger;

class MyPromise {
  constructor(fn) {
    this.status = "padding";
    fn(this.resolve, this.reject);
  }
  resolve(res) {
    this.status = "resolve";
    this.success(res);
  }
  reject(err) {
    this.status = "reject";
    this.fail(err);
  }
  then(success, fail) {
    this.success = success;
    this.fail = fail;
  }
}

let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve() : reject();
  }, 500);
}).then(
  res => {
    console.log("success");
  },
  error => {
    console.log("fail");
  }
);
