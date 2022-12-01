# querySelectAll で取ってくると work するが、getElementById で取ってくると null になる場合。

- getElementById に渡された ID が Document ツリー内に存在しない場合は空のノードを返します。

- Element オブジェクトが何を表しているかによって、アクセスできるメンバ変数が変わります。例えば、Element オブジェクトが HTML の img を表している場合、HTML 要素の HTMLMediaElement を指し、"src" という変数を持ちます。

## 2 つの違いは??

- querySelectorAll: css の id も取ってこれる。
- If you only need to select an element by ID or class, you can use getElementById or getElementsByClassName, respectively. If you need to use a more elaborate rule to select elements, the querySelector method is your best option.
  https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/#:~:text=With%20a%20querySelector%20statement%2C%20you,clearly%20gets%20the%20job%20done.

```javascript
console.log(container.querySelectorAll("#burger")[0]);
console.log(document.getElementById("burger"));
//どちらも同じ結果。
```

# どっちを使ったら null になってしまうとかそういうのは無い。ただ自分のコードが間違っていただけだった。id でとるか。それ以外の方法で取るか。それだけ。
