# for

- 末尾再帰と同じように、一つのスタックだけを使って処理を行う。
- 末尾再起とは異なる'反復'と呼ばれる処理を行う。
- ループの中にループを持つことができる。
  > 反復とは、内部にある一連のステートメントを設定された回数だけ繰り返して計算することを指します。

'設定された回数だけ'っていうのが末尾再起とは違うのかな。多分末尾再起と違って何回計算するかを事前に設定できる。

https://recursionist.io/dashboard/course/2/lesson/191

- for 分の中に if 文を書くことができる。

```javascript
function printFizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i.toString());
    }
  }
}
printFizzbuzz(20);
```

## 再帰と for の使い分け

- for は複数の処理を繰り返す時に使うと便利

- こういう書き方もできる

1 は犬 2 は猫 0 は飼ってない。クラスでどちらが多いか。

```javascript
function catOrDog(n) {
  let countDog = 0;
  let countCat = 0;
  for (let i = 0; i <= n.length; i++) {
    if (n[i] == 1) {
      countDog = countDog + 1;
    } else if (n[i] == 2) {
      countCat = countCat + 1;
    } else {
      ("");
    }
  }
  if (countDog > countCat) {
    return "dog";
  } else if (countDog < countCat) {
    return "cat";
  }
  return "dogcat";
}

console.log(catOrDog("111222")); //dogcat
```

if を for 内に書いて、関数内にも書く.いや普通のコードなんだけど、自分的には新鮮な書き方だったから一応メモ

```javascript
function doYouFail(string) {
  // 関数を完成させてください
  //pが3個以上でfail。
  let count = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] == "A") {
      count = count + 1;
    }
  }
  if (count >= 3) {
    return "fail";
  } else {
    return "pass";
  }
}
```

- ループの中にループを書くこともできる

```javascript
function simpleSummationOfSummationsNestedIteration(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    // 内側のfor文では、他の変数であるjを使います。
    // jがiになった時にループ処理を終了します。

    // iの総和の計算
    let summationOfI = 0;

    for (let j = 1; j <= i; j++) {
      summationOfI += j;
    }

    total += summationOfI;
  }

  return total;
}

//外側 内側　内側の処理が終了　外側の結果　また外側　内側　....
//1,3
```
