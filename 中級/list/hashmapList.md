- for を 2 重にする以外にも、線形探索を使ってこのような書き方もできる。

```javascript
// 線形探索
function linearSearchExists(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }

  return false;
}

function listIntersection(targetList, searchList) {
  let results = [];
  // L2 のそれぞれの要素に対しての処理
  for (let i = 0; i < searchList.length; i++) {
    // それぞれの要素に対して、L1 の全ての要素をチェック
    if (linearSearchExists(targetList, searchList[i]))
      results.push(searchList[i]);
  }

  return results;
}

console.log(listIntersection([1, 2, 3, 4, 5, 6], [1, 4, 4, 5, 8, 9, 10, 11]));
```

- 上のコードを hashmap caching を使って、計算量を早くするとこう書ける

```javascript
function listIntersection(targetList, searchList) {
  let hashmap = {};
  let results = [];

  // L1 の要素をキャッシュ
  for (let i = 0; i < targetList.length; i++) {
    hashmap[targetList[i]] = targetList[i];
  }

  // L2 のそれぞれの要素をチェック
  for (let i = 0; i < searchList.length; i++) {
    // O(1) でチェック可能
    if (hashmap[searchList[i]] !== undefined) results.push(searchList[i]);
  }

  return results;
}

console.log(listIntersection([1, 2, 3, 4, 5, 6], [1, 4, 4, 5, 8, 9, 10, 11]));
```

```javascript
//hashmapチートシート
console.log(Object(hashmap));
console.log(Object.keys(hashmap));
console.log(Object.values(hashmap));
```
