# list

> 情報を特定の順番で並べてデータを表したい場合に、リストが用いられます。

> リストはシーケンス（記号の連続）とも呼ばれ、データを順序付きで表すあらゆるデータ構造を指します。したがって、値の位置であるインデックスを使うことによって値を取得することができます。

> 文字列は文字のリストです。

- リストには、配列、連結リストの 2 種類がある。

これは、int,str,double などさまざまな型のリストを学習する

> プログラムが使用できるメモリは有限であるため、配列にどれだけのメモリを割り当てるかは非常に重要になります。注意しなければいけないことは、配列のサイズは一度決定すると後から変更することはできないということです。これは配列に要素を追加したり削除したりすることができず、値を置き換えることしかできないことを意味します。

↑ 配列は要素を変更することはできるが、メモリから削除することはできない。

- 配列に要素を追加した場合、メモリ自体が変わるのではなく、メモリの配列部分を全てコピーして、また新しく作る。

## 配列

- 配列は、メモリ内のリストを直接反映したデータ構造です。

オブジェクトもメモリ内のリストに格納できる。

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

function printCarArray(carArray) {
  // arrの長さまで反復処理を繰り返します。
  for (let i = 0; i < carArray.length; i++) {
    console.log(
      carArray[i].make + " - " + carArray[i].model + " Year " + carArray[i].year
    );
  }
}

// JSの配列は動的配列です。
// 配列を作成し、3つのオブジェクトを追加します。push(値)メソッドでデータを追加します。
let cars = [];
cars.push(new Car("Toyota", "Camry", 2000));
cars.push(new Car("BMW", "X1 Sports", 2019));
cars.push(new Car("Nissan", "GT-R", 2020));
console.log(
  "First model: " +
    cars[0].make +
    " - " +
    cars[0].model +
    " Year " +
    cars[0].year
);

// 関数を使ってすべての車を出力します。
printCarArray(cars);
```

## 動的配列

一度リストを作ると、変更する時には、もう一度新しく配列を作る必要があった。(java とか静的な言語は。)javascript などの動的な言語は、java で新しく配列を作るコード部分を自動的に処理してくれる。

動的配列はオブジェクトで、イメージとしては、配列データにアクセスしてくれるメソッド。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">動的配列 <a href="https://t.co/re2d7vfEd0">pic.twitter.com/re2d7vfEd0</a></p>&mdash; kaz (@kazumawada1) <a href="https://twitter.com/kazumawada1/status/1479822344071880715?ref_src=twsrc%5Etfw">January 8, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

```javascript
function printArray(intArr) {
  for (let i = 0; i < intArr.length; i++) {
    process.stdout.write(intArr[i] + " ");
  }
  console.log();
}

// 初期配列を2つの項目に設定します。
dArr = [2, 3];
printArray(dArr);

// 配列の末尾に要素を追加します。動的配列は内部に配列を管理しているので問題なく処理します。
dArr.push(30);
dArr.push(645);
dArr.push(23);
dArr.push(-35);
dArr.push(325);
dArr.push(1425);
dArr.push(0);
dArr.push(98);

printArray(dArr);

// 配列の最後に多くの値を追加します。
dArr = dArr.concat([3, 34, 3542, 10, 202, 34, 203, -75, -56, 45, 0, 43, 1132]);
printArray(dArr);
```

## 二次元配列

これ。

```javascript
let hoge = something[i][j];
let array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

## 多次元配列(二次元配列より多い配列)

```javascript
array[x][y][z];
```

### どんな時に使うの?

入れ子構造。例えば住所(国->県->市->番地)

### 探索

リストから特定のデータを探すときに、コンピュータは人間のようにパッと見つけるのではなく、一つずつ順番に見ていきます。
特定のデータを見つけるときにリストの探索が非常に重要になります。

ただ、id などがわかっていれば、計算量 o(1)で探すことができる。

### 連想配列

- 配列の要素を index として探すのではなく、文字列などのキーを index として使用すること

key(文字列)->ハッシュ関数によって数字に置き換わる->ハッシュという部分へ保存される.(https://recursionist.io/dashboard/course/2/lesson/251)

#### key と値のペアでマッピングすると、いつでも o(1)の計算量でアクセスすることができる。cons は、要素ごとに新しいハッシュマップ要素を作成する必要があるため、各要素ごとに余分なスペースが必要になってしまうことには注意する必要があります

```javascript
person["first_name"] = "Thomas";
//first_nameがハッシュ関数によってindex(数値)に置き換わる。->データ'Thomas'はそのindeに割り当てられる。

//例
let myPet = {
  name: "fluffy",
  species: "Pomeranian",
  furColor: "Brown",
  born: "2018/05/06",
  favoriteFood: "Carrot sticks",
};

// nameを取得します。
console.log(myPet["name"]);

// ペットのfavorite foodを取得します。
console.log(myPet["favoriteFood"]);

// このmyPet辞書にさらに情報を追加します。
myPet["napTimes"] = "11:00am, 3:30pm, 9:00pm";
console.log(myPet["napTimes"]);
```

### キャッシュ

return した結果を配列に追加してそれを使えたら、便利。チャット bot を例に考えてみると、ユーザーが色々情報を送ってきた場合、ユーザーから質問されたら、今までのユーザーが送ってきたデータを元に適切な情報を提供することができる。

> コンピュータサイエンスの世界では、処理のスピードを上げ、将来データを素早く取り出すためにデータを保存しておくものをキャッシュと呼びます。キャッシュを用いるとすでに行われている計算を何度も繰り返す必要がなくなるので、時間計算量を軽減したり、不必要な計算を避けるのにつながります。

> キャッシュは、時間計算量を軽減するために重要なツールとして機能し、アプリケーションの開発では日常茶飯事に使われています。

- 下のコードで、cache にする予定の値を push しているってことは、実際のキャッシュも push して保存しているのかな？サーバーに行かないもんね。。

フィボナッチの何回も行われる 0,1 の部分の計算を cache する関数

```javascript
// メモ化は、ツリー構造が上から下へと続くアルゴリズムでのキャッシングです。
// フィボナッチのツリーを見てみると、nから始まり、n-1、n-2、n-3と下に向かって計算していきます。
function memoizationFib(totalFibNumbers) {
  //これはキャッシュであり，すでに計算したフィボナッチ数をすべて保存します。全てをNoneに設定します。
  let cache = [];
  for (let i = 0; i <= totalFibNumbers; i++) {
    cache.push(null);
  }

  // キャッシュを更新するには、このローカルスコープ内の関数を使用します。
  function innerMemoizationFib(n) {
    // キャッシュされていないフィボナッチ数を処理するだけです。
    // フィボナッチのnを再帰的に計算し，キャッシュに追加します。
    if (cache[n] == null) {
      if (n == 0) {
        cache[n] = 0;
      } else if (n == 1) {
        cache[n] = 1;
      } else {
        cache[n] = innerMemoizationFib(n - 1) + innerMemoizationFib(n - 2);
      }
    }
    // フィボナッチはすでに計算されているのでただ返すだけで問題ありません。
    return cache[n];
  }
  return innerMemoizationFib(totalFibNumbers); //関数間を移動させるのに、こういう書き方もあったのか。
}

console.log(memoizationFib(50));
```

上と同じ事を違う書き方で書いている。↓

```javascript
// タビュレーションは、ツリー構造が下から上へと続くアルゴリズムでのキャッシングです。フィボナッチ5のツリーを見ると、0から始まり、上に向かって計算が行われます。fib1...fib2...fib3...fibn
// タビュレーションは、ほとんどの場合、不必要な計算がないため、メモ化よりもはるかに効果的です。
function tabulationFib(n) {
  // これはキャッシュであり、計算済みのフィボナッチ数をすべて保存します。全てを0に設定します.
  let cache = [];
  for (let i = 0; i <= n; i++) {
    cache.push(-1);
  }

  // キャッシュの最初の2つは0と1です。fib0は0、fib1は1であり、他のすべての数字はfib(n) = fib(n-1) + fib(n-2)となります．
  cache[0] = 0;
  cache[1] = 1;

  // 再帰の代わりに反復を使用します. 0,1,2,3,...nから始まります。
  // 2からnまでのすべてのfib数を計算します。
  for (let i = 2; i < n + 1; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  // n番目のフィボナッチを返します。
  return cache[n];
}

console.log(tabulationFib(50));
```

## ハッシュマップキャッシング(計算量抑える o(n)だから、めっちゃ重要)

- key と値のペアでマッピングすると、いつでも o(1)の計算量でアクセスすることができる。cons は、要素ごとに新しいハッシュマップ要素を作成する必要があるため、各要素ごとに余分なスペースが必要になってしまうことには注意する必要があります.

````

```javascript
// リスト内のyを検索し、存在すればtrue、しなければfalseを返します。
function existsWithinList(listL, dataY) {
  let hashMap = {};

  // キーと値{i:i}によって、リスト内の全ての要素をキャッシュします。
  for (let i = 0; i < listL.length; i++) {
    // 整数のリスト L と整数 y が与えられるので、リストを集合とし、集合内に y が存在するかチェックする関数を作成します。つまり、L 内から y を見つける作業が必要になります。ハッシュマップを使って、値 x をキーと値のペア [x:x] としてマップすると、x を検索するといつでも x が返され、O(1) でアクセスすることが可能になります。
    ///////////////////////ここで何が起こっているのかが理解できていない↓/////////////////////////////////
    // キーと値のペア
    hashMap[listL[i]] = listL[i]; //hashMap[[3:0]] = 3[0]
    //o(1)でアクセスが可能にするために、hashmap[3] = ListL[3]としているのか??
    //3っていうのは、hashMap[List[3]]ですよって事かな。よって、3を入れると、o(1)で3が返ってくるみたいな。<-そうじゃね？！
    ///////////////////////ここで何が起こっているのかが理解できていない↑/////////////////////////////////
  }

  // キーが存在するかどうかを返します。キーが存在しない場合はundefinedが返されます。!==は===に似たもので、値と型の両方をチェックします。null == undefinedはtrueを返し、null === undefinedはfalseを返します。
  return hashMap[dataY] !== undefined ? true : false;
}

// リストを検索します。
let sampleList = [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2];
console.log(existsWithinList(sampleList, 23));
console.log(existsWithinList(sampleList, -2));
console.log(existsWithinList(sampleList, 100));
````

## sort(並べる)

- .sort()メソッド
  文字列->文字コード順,
  数字->比較関数を使用(最初は 34-4546 をして負の数が返るから 4546 は 30 より後のように、配列内の値を順々に関数の x と y のパラメータに渡して位置を並べ替えています。)

```javascript
function printArray(intArr) {
  let outputString = "[";
  for (let i = 0; i < intArr.length; i++) {
    outputString += intArr[i] + " ";
  }
  console.log(outputString + "]");
}

let arr = [34, 4546, 32, 3, 2, 8, 6, 76, 56, 45, 34, 566, 1];
printArray(arr); //','無しの配列が返ってくる。

// sortメソッドは状態を更新します。配列をソートします。
// 配列にsortメソッドを使うと、配列内の文字列が文字コード順に並び替えられています。
// 数値順に並べ替える場合は、比較関数を使用します。

// JSは関数を入力として扱うことができます。JSのソートは比較関数を使用して、どのような並べ方をするかを判断します。
// 入力された関数にはその時比べている配列の要素が渡されます。

// ここでしていることは、最初は34-4546をして負の数が返るから4546は30より後のように、配列内の値を順々に関数のxとyのパラメータに渡して位置を並べ替えています。
arr.sort(function (a, b) {
  return a - b;
});
printArray(arr); //数字の小さい順で出力されている。

// 関数の入力がない時は、文字列のソート方法が使割れます。
arr.sort();
printArray(arr); //arrは数字だけど、文字列のソートが返ってくる。
```

## list の sort

```javascript
function printArray(intArr) {
  let outputString = "[";
  for (let i = 0; i < intArr.length; i++) {
    outputString += intArr[i] + " ";
  }
  console.log(outputString + "]");
}

let arr = [34, 4546, 32, 3, 2, 8, 6, 76, 56, 45, 34, 566, 1];
printArray(arr);

// sortメソッドは状態を更新します。配列をソートします。
// 配列にsortメソッドを使うと、配列内の文字列が文字コード順に並び替えられています。
// 数値順に並べ替える場合は、比較関数を使用します。

// JSは関数を入力として扱うことができます。JSのソートは比較関数を使用して、どのような並べ方をするかを判断します。
// 入力された関数にはその時比べている配列の要素が渡されます。

// ここでしていることは、最初は34-4546をして負の数が返るから4546は30より後のように、配列内の値を順々に関数のxとyのパラメータに渡して位置を並べ替えています。
arr.sort(function (a, b) {
  return a - b;
});
printArray(arr);

// 関数の入力がない時は、文字列のソート方法が使われます。
arr.sort();
printArray(arr);

let strArray = ["hello", "world", "of", "hurt"];
strArray.sort();
printArray(strArray);
```

## 分割統治法

- 計算量の無駄を無くすために誕生した.
  小さな問題に分割->
  小さな問題を解く->
  一つに合併して答えを出す。

```
Pseudo-Code
mergeSort(A)
    return mergeSortHelper(0, A.length-1, A)

mergeSortHelper(start, end, A)
    if(start == end) return A[start]
    mid = floor((start+end)/2)
    sortedLeft = mergeSortHelper(start, mid, A)
    sortedRight = mergeSortHelper(mid+1, end, A)

    // 右と左がソートされた後、結合されます。
    combinedArray = []

    // 無限大を最後に追加することで比較し続けることができます。
    sortedLeft.append(INFINITY)
    sortedRight.append(INFINITY)

    // インデックスの追跡
    li = 0
    ri = 0
    for i = 0 until (sortedLeft.length + sortedRight.length - 2)
        // leftarrayとrightarrayを比較して、どちらが先にcombinedArrayに入るか決める
        if(sortedLeft[li] <= sortedRight[ri])
            combinedArray.push(sortedLeft[li])
            li++
        else
            combinedArray.push(sortedRight[ri])
            ri++

    return combinedArray
```
