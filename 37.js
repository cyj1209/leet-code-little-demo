/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const map = {};
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      // 扫描整个表格得到每个位置的可能填入的数值
      if (board[x][y] === ".") {
        // 可能是已经扫描过的 我就需要跳过
        if (map[`${x}-${y}`] === undefined) {
          setPossibleNum(x, y);
        }
      }
    }
  }
  let setQueue = [];
  let queueIndex = 0;
  let keys = Object.keys(map);
  if (keys.length > 0) {
    feeler(board, map, keys);
  }

  function feeler(board, map, keys) {
    let newBoard = JSON.parse(JSON.stringify(board));
    let newMap = JSON.parse(JSON.stringify(map));
    let [x, y] = keys[0].split("-");
    let numArray = getPossibleNum(map[keys[0]]);
    delete newMap[keys[0]];
    for (let i = 0; i < numArray.length; i++) {
      let res = setNum(newBoard, newMap, numArray[i], x, y);
      if (res === "failed") {
        // 试探失败 开始下个数的试探
        // 恢复环境
        newBoard = JSON.parse(JSON.stringify(board));
        newMap = JSON.parse(JSON.stringify(map));
        delete newMap[keys[0]];
        setQueue = [];
        queueIndex = 0;
      } else if (res === "success") {
        setBoard(board, newBoard);
        return "success";
      } else {
        // 试探完成但是既没有成功又没有失败，说明需要进行二次试探
        let newKeys = Object.keys(newMap);
        res = feeler(newBoard, newMap, newKeys);
        // 底层的试探告诉上层的试探已经成功了
        // 试探要么成功要么失败，不会有第三种情况
        if (res === "success") {
          setBoard(board, newBoard);
          return "success";
        } else {
          newBoard = JSON.parse(JSON.stringify(board));
          newMap = JSON.parse(JSON.stringify(map));
          delete newMap[keys[0]];
        }
      }
    }
    return "failed";
  }

  function setBoard(old, newBoard) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        old[i][j] = newBoard[i][j];
      }
    }
  }

  function getPossibleNum(value) {
    let res = [];
    while (value !== 0) {
      let t = Math.floor(Math.log2(value));
      value -= Math.pow(2, t);
      res.push(t + 1);
    }
    return res;
  }

  function setNum(board, map, num, x, y) {
    board[x][y] = num.toString();
    let t = Math.pow(2, num - 1);
    // 用任务队列能更快速的发现问题 任务队列真的能加速吗？
    let positions = getAffectKeys(map, x, y);
    for (let i = 0; i < positions.length; i++) {
      x = positions[i][0];
      y = positions[i][1];
      if ((map[`${x}-${y}`] & t) !== 0) {
        map[`${x}-${y}`] -= t;
      }
      if (map[`${x}-${y}`] === 0) {
        return "failed";
      }
      let value = Math.log2(map[`${x}-${y}`]) + 1;
      if (value % 1 === 0) {
        setQueue.push(`${x}-${y}-${value}`);
      }
    }
    // 任务队列可以方便和快速的找到矛盾的数值
    while (queueIndex < setQueue.length) {
      // 判断是否结束了
      if (Object.keys(map).length === 0) {
        return "success";
      }
      let [h, v, value] = setQueue[queueIndex].split("-");
      delete map[`${h}-${v}`];
      queueIndex++;
      let res = setNum(board, map, value, h, v);
      if (res === "failed" || res === "success") {
        return res;
      }
    }
  }

  function getAffectKeys(map, x, y) {
    let xStart = getStart(x);
    let yStart = getStart(y);
    let res = [];
    Object.keys(map).forEach(item => {
      let [i, j] = item.split("-");
      if (
        i === x ||
        j === y ||
        (i >= xStart && i < xStart + 3 && j >= yStart && j < yStart + 3)
      ) {
        res.push([i, j]);
      }
    });
    return res;
  }

  function setPossibleNum(x, y) {
    let value;
    let num = 511;
    myForeach(x, y, (i, j) => {
      if (board[i][j] !== ".") {
        value = Math.pow(2, board[i][j] - 1);
        if ((num & value) !== 0) {
          num -= value;
        }
      }
    });
    value = Math.log2(num) + 1;
    if (value % 1 === 0) {
      board[x][y] = value.toString();
      // delete map[`${x}-${y}`];
      setAffect(x, y, value);
    } else {
      map[`${x}-${y}`] = num;
    }
  }

  function setAffect(x, y, num) {
    let value = Math.pow(2, num - 1);
    myForeach(x, y, (i, j) => {
      if (board[i][j] === ".") {
        if (map[`${i}-${j}`] === undefined) {
          setPossibleNum(i, j);
        } else {
          if ((map[`${i}-${j}`] & value) !== 0) {
            map[`${i}-${j}`] -= value;
            // 判断是不是必填项，是的话更新数组开启新的影响任务
            let t = Math.log2(map[`${i}-${j}`]) + 1;
            if (t % 1 === 0) {
              board[i][j] = t.toString();
              delete map[`${i}-${j}`];
              setAffect(i, j, t);
            }
          }
        }
      }
    });
  }

  function myForeach(x, y, fn) {
    let xStart = getStart(x);
    let yStart = getStart(y);
    // 先循环 z
    for (let i = xStart; i < xStart + 3; i++) {
      for (let j = yStart; j < yStart + 3; j++) {
        fn(i, j);
      }
    }
    // 再循环 x,y
    for (let i = 0; i < 9; i++) {
      if (i < xStart || i >= xStart + 3) {
        fn(i, y);
      }
      if (i < yStart || i >= yStart + 3) {
        fn(x, i);
      }
    }
  }

  function getStart(num) {
    return Math.floor(num / 3) * 3;
  }
};

function log(board) {
  board.forEach(item => {
    console.log(item.join("  "));
  });
}

let board, res;

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

board = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."]
];

let a = [
  ["5", "1", "9", "7", "4", "8", "6", "3", "2"],
  ["7", "8", "3", "6", "5", "2", "4", "1", "9"],
  ["4", "2", "6", "1", "3", "9", "8", "7", "5"],
  ["3", "5", "7", "9", "8", "6", "2", "4", "1"],
  ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
  ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
  ["9", "7", "5", "8", "6", "3", "1", "2", "4"],
  ["8", "3", "2", "4", "9", "1", "7", "5", "6"],
  ["6", "4", "1", "2", "7", "5", "9", "8", "3"]
];
solveSudoku(board);
console.log("````````````````");
log(board);

debugger;
