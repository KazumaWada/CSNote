- 配列から index の値がなぜか取得できない。他の同じような問題ではできたのに、、これだけ。。なぜ数字だから?arr[0]だと計算機が困惑するのかな?

```javascript
function shuffledPositions(arr,shuffledArr){
    console.log(arr[0]);//こっちもエラー
    return shuffledArr[0];//こういう取り方ができないのはなぜ？？
    //shuffledPositions([2,32,45],[45,32,2]) --> [2,1,0]

    ///////////////////エラー内容//////////////////////////////////
    /box/script.js:13
        console.log(`case0` +  '[' + shuffledPositions([640]).map(data=> data === null ? 'null' : data).join(',') + ']' + `case0`);
        TypeError: shuffledPositions(...).map is not a function
    /////////////////////////////////////////////////////
}
```

そもそも javascript の map とは??

- 値.method に対して、配列.map(配列に反映させたい method)

```javascript
let numbers = [1, 4, 9];
let doubles = numbers.map(function (num) {
  return num * 2;
});

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
```
