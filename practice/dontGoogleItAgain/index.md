```javascript
//数値の一の位を取得(https://qiita.com/eve1224/items/cc0bcabea60e9ac7ab1d)
function recursiveDigitsAdded(digits) {
  return (digits / 1) % 10;
}
//空白を全て削除
s = s.replace(/\s/g, "");
//最大値の取得
const maxValue = Math.max(...Object.values(hashmap));
//文字コードに変換する
noSpaceM.charCodeAt(0); //0はその位置だから不変でいいのかな。
//文字コードから文字列へ
console.log(String.fromCharCode(89, 88, 87, 86)); //> "YXWV"
//スペースを無くす
let noSpaceM = message.replace(/\s/g, "");
または;
replace(/ /g, "");

//文字列を逆にする
str.split("").reverse().join("");

// 配列の先頭に要素を追加します。
dArr.unshift(3);
// 引数はいくつでも設定できます。
dArr.unshift(3, 43, 5234, 34);
// 最初の要素を削除します。
// shift()メソッドを使います。
dArr.shift();

// 配列の最後を削除します。
// 1つの要素を削除します。
dArr.pop();

//配列を26個0で埋める(cacheとかで便利)
let cache = Array(26).fill(0); //[0,0,0,0,0,0,0,0,0....]
//////////////////////////////////////////////////////////////////////////////////////////////////////
//dot dot dot(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
//残りの値を一つの仮引数に全て突っ込む場合の書き方?
//仮引数に入れる配列を省略しているように見える。
function myFunc(a, b, ...args) {
  console.log(a); // 22
  console.log(b); // 98
  console.log(args); // [43, 3, 26]
}
myFunc(22, 98, 43, 3, 26);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

function isPangram(string) {
  // キャッシュを作成
  let cache = Array(26).fill(0); //[0,0,0,0,0,0,0,0,0....]
  // 1文字ずつ取得し、文字コードを使ってキャッシュを更新します
  for (let i = 0; i < string.length; i++) {
    let ascii = string.toLowerCase().charCodeAt(i); //英文を小文字の文字コードに変換
    if (ascii >= 97 && ascii <= 122) cache[ascii - 97] = 1; //[1,1,1,1,1,1,1,1,1....]
  }

  // 0が一つもなかったら全ての文字が存在する事になります。
  //Math.min: cacheの中で一番小さい要素を見つける。
  //...->trueであれば、1が26個ある配列を...で省略している。[1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1,.......]->(...cache)
  return Math.min(...cache) != 0;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

//小さい順に並べる。
return res.sort((a, b) => a - b);
```

- 何回も'TypeError: Cannot read property something here of undefined'っていうエラーにぶち当たっている。どれも同じ for 分の中で。for で回した i に対してなんかしらの関数を与えるとエラーになる。。i は count などの単純な作業しかできないのかな??
  > Undefined means that a variable has been declared but has not been assigned a value.

i は何回ループするよっていう表示だけで、if 分の中で使っても、定義されていないから error になる。仮引数になんかしらの関数を当てて使わないと。

```javascript
function printFizzbuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (n % 3 == 0) {
      console.log("fizz");
    } else if (n % 5 == 0) {
      console.log("buzz");
    } else if (n % 15 == 0) {
      return console.log("fizzbuzz");
    } else {
      console.log(n);
    }
  }
}

//substring

//先頭を切り取る
let text = `hello`;
let result = text.substring(1); //ello

//find
//findは関数を入れて書くことができる
const ages = [3, 10, 18, 20];
function checkAge(age) {
  return age > 18;
}

ages.find(checkAge); //20
```

- if の trueFalse の書き方(因みにこれはエラーになるけど、if true false の書き方自体はあってる)

```javascript
function reverseStringHelper(reversedString, leftString) {
  //ベースケース
  if (leftString.length <= 0) return reversedString;
  return reverseStringHelper(
    leftString[0] + reversedString,
    leftString.substring(1)
  );
}
```

- 配列の[]を付ける

```javascript
    let outputString = "[";
    for (let i = 0; i < intArr.length; i++) {
        outputString += intArr[i] + " ";
    }
    console.log(outputString + "]");
}
```

- error

```javascript
// /box/script.js:27
//         console.log(`case0` +  '[' + appearTheMost([12,10,9,8,6,3,8,9,9,10]).map(data=> data === null ? 'null' : data).join(',') + ']' + `case0`);
// TypeError: Cannot read property 'map' of undefined
//     at Object. (/box/script.js:27:117)

//これは、何もreturnがない場合に起こる現象。
//問題のデータ型をなんでもいいからreturnで出力する

//appearTheMost([1,1,2,2,3,3,3,4,5,6]) --> [3]
こういうデータ型だったら、let array = [];でreturn arrayでもいい。それでエラーは消えて、テストが実行できるようになる。
```

コピーペースト真下に。shift option ↓
