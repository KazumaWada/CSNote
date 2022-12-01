```javascript
//二つの配列が等しければいいんでしょ??
function areTheyEqual(target, arr) {
  // 関数を完成させてください
  for (let i = 0; i < target.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (target[i] == arr[j]) break;
      else if (target[i] != arr[j]) count++;
      else if (target[i] != arr[j] && count == arr.length - 2) return false;
    }
  }
  return true;
}
```

```javascript
function frogPosition(leaves, jumps, start) {
  // 関数を完成させてください
  let currentPosition = start;
  for (let i = start; i <= jumps; i++) {
    if (currentPosition == leaves) currentPosition = 1;
    else currentPosition++;
  }
  return currentPosition;
}

function frogPosition(leaves, jumps, start) {
  let unlimitedLeaves = start + jumps;
  while (unlimitedLeaves <= leaves) {
    if (unlimitedLeaves > leaves) unlimitedLeaves = unlimitedLeaves - leaves;
    console.log(unlimitedLeaves - leaves);
    //else return unlimitedLeaves;
  }
  //console.log("外"+unlimitedLeaves -leaves);
  return unlimitedLeaves;
}
```

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] < nums[i + 1]) continue;
    else {
      while (includes(nums[i]) === -1) {
        if (num.includes[i]) num.splice(i, 1);
      }
    }
  }
  console.log(nums);
};
```

```javascript
function recursiveDigitsAdded(digits) {
  let current = spritAndAdd(digits);
  if (current <= 9) return current;
  else if (current >= 10) {
    return current + recursiveDigitsAdded(current);
  }
}

function spritAndAdd(digits) {
  if (digits <= 0) return 0;
  return ((digits / 1) % 10) + spritAndAdd(Math.floor(digits / 10));
}
```

```javascript
function perfectNumberList(n) {
  let str = "";

  for (let i = 1; i < n + 1; i++) {
    //関数の結果がtrueなら、変数に追加
    if (perfectNumberListhelper(i)) str += i + "-";
  }

  //変数に何か入っているなら、最後の"-" を切る。  変数strの長さがない(パーフェクトナンバーが１つも入っていない)なら、none
  str = str.length > 0 ? str.substring(0, str.length - 1) : "none";
  return str;
}

function perfectNumberListhelper(x) {
  //ここに見分ける関数作成
  let total = 0;
  for (let i = 1; i < x; i++) {
    if (x % i == 0) total += i;
  }

  //引数xの約数の合計(自身を除く)と引数xが同じなら true　違えばfalse
  return total == x;
}
```

```javascript
function perfectNumberList(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    if (helper(i)) result = result + i + "-";
  }
  result = result.length == 0 ? "none" : result;
  return result;
}

function helper(i) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) count = count + j;
  }
  return i == count - i;
}
```
