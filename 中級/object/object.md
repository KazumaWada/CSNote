# object

データ型->クラス(設計図/色んなデータ型が組み合わさった物)->オブジェクト(もちろん色んなデータ型からできている。)

- 現実世界の情報をデータとして表現することが重要です。それができれば、あらゆる現実のものを仮想的に表現することができます。

> 例えば、7 を int 型で作成した場合、7 が整数としてメモリ内で表現される一方、78 を char 型で作成した場合、コンピュータは Unicode を使って、これを 'N' に自動的に変換します。つまり、コンピュータの世界ではデータ型の指定が非常に重要になります。データ型が指定されていることによって、コンピュータと私たちは、そのデータが何を表し、そのデータでどのような動作が可能なのかを知ることができます。

静的言語がわからないと、本当のプログラムは理解できないってことか。

```javascript
// クラスを定義するためにclassキーワードを使います。
// シンタックス：class クラス名 { body };
class Rectangle {
  // コンストラクタ、初期値の設定
  constructor(width, height) {
    // thisキーワードは現在のオブジェクトを取得します。
    this.width = width;
    this.height = height;
  }

  // オブジェクトのデータの出力
  getRectangleString() {
    return (
      "The rectangle has a width of: " +
      this.width +
      " and a height of: " +
      this.height
    );
  }
}

// Rectangle classの設計図に沿ったオブジェクトを作成し、出力します。
let rectangle1 = new Rectangle(20, 100);
console.log(rectangle1.getRectangleString());
```

めちゃくちゃ重要なことっぽい。。わからんけど。。

- ('hello, world')が文字列の一つのインスタンスであるように、オブジェクトも、クラスのデータの中の一つ。
  つまり、let rectangle1 = new Rectangle(20,100);も class で表現できる一つのデータ型。

> プリミティブ型(int,double とかの総称)を基本データ型とし、それを様々に組み合わせれば現実世界のあらゆるオブジェクトを仮想的なものとして表現することができます。

- this には、メモリから、現在のオブジェクトが入る。

```javascript
//- この時オブジェクトのメモリアドレスは、teslaS に保存されている。
let teslaS = new Car("Tesla", "Model S", 2013, "5YJSA1CN0DFP13393", "Black");
```

```javascript
//動的型付けだから、勝手に文字列として返してくれる。Java だと string と事前に書く必要があったよね。
console.log(teslaS.getCarString());
```

## インスタンス変数とクラス変数

- インスタンス変数
  オブジェクトごとに値が変わる変数。車だったら、機種名とか色とか

- クラス変数
  オブジェクト同士共通している部分。車だったら、車輪が 4 つは同じ。
  クラス変数は静的メモリに格納されるため、値が変われば、全てのオブジェクトの値に影響を及ぼします。

  ```javascript
  class Car{
    // クラス変数を作成します。全てのオブジェクトはクラス変数を持ちます。
    static wheels = 4;

    //クラス変数を更新します。
  Car.wheels = 5;
  ```

- linked list(連結リスト)
  データ型では表現できないことを、object を使うと表現できるようになる。

```javascript
//linked list 連結リスト

class StringNode {
  constructor(stringValue) {
    // このノードは、ノードと次のノードの値の、2つのインスタンス変数を持ちます。
    this.value = stringValue;
    this.next = null;
  }
}

class TodoList {
  constructor() {
    // ToDoリストの中には1つのインスタンス変数しかありません。
    // 最初は、To-Doリストは空です。
    this.head = null;
  }

  printList() {
    console.log("Printing the Todo List...");
    let currentNode = this.head;
    while (currentNode != null) {
      // 現在のノードの値を出力します。
      console.log(currentNode.value);
      // 現在のノードを次のノードに変更します。
      currentNode = currentNode.next;
    }
  }
}

// リストを始めます。先頭は空です。
let toDoList = new TodoList();

// リストの中の最初の項目に先頭を設定します。
let firstItem = new StringNode("Fix the alarm clock.");
toDoList.head = firstItem;

// 残りの項目にも同じ処理を行います。次の項目を割り当てることによって、項目どうしをつなげます。
let secondItem = new StringNode("Pickup grandmother from the dentist.");
firstItem.next = secondItem;

let thirdItem = new StringNode("Call the handyman to fix the home appliance.");
secondItem.next = thirdItem;

let fourthItem = new StringNode("Go to the park to jog.");
thirdItem.next = fourthItem;

// リストを読み込みます。
toDoList.printList();
```

## オブジェクト参照(データ型の stack とは異なる方法で格納されるよ)

オブジェクトが作成される
その量に合わせたヒープ領域がメモリ上に割り当てられる。
ヒープメモリのアドレスは、オブジェクト変数に格納される。
それを介してオブジェクトデータにアクセス可能。
let user1 = new Account(~~) と言ってること同じだね

user1 はクラスのオブジェクトであり、その具体的なデータを返します。(constroctor の中身返すもんね。)

constroctor が呼ばれる。
その中の object にヒープメモリが割り当てられる。
そのヒープメモリのアドレスが返ってくる。
this でヒープ内のオブジェクト自信を指す現在のオブジェクト参照(オブジェクトのメモリアドレス)を取得して、これによって値を変更することができる。

object 自体は、ヒープに格納されていて、変数の中に格納されているのがオブジェクトのメモリアドレス(オブジェクト参照)です

なるほど。let user1 = new Account(~)の user1 がオブジェクト参照と呼ばれる部分か。
user1 にヒープに格納されている object のメモリアドレスがある。

変数っていうのは、オブジェクト、データ型ではなく、オブジェクト、データ型のメモリアドレスを格納するもの。

## state less object ステートレスオブジェクト

- 状態すら持たない。ただの名前空間。僕たちは何もできない。ただ使うだけ。

```javascript
// JSにはアクセス修飾子がないので、オブジェクトの変数(PIAPPROXなど)を変更することができます。JSでは高速で簡単な開発ができる一方、ユーザの責任が増えます。
// MathThingsの全てのメソッドはどの状態にも依存しません。これらのメソッドはMathThingsのインスタンスを作成することなく、いつでも自由に使うことができます。
class MathThings {
  // メンバ変数
  static PIAPPROX = 3.14159265359;

  // staticでアプリケーションが存続する限り、どこでもアクセスすることができます。
  static circleSurfaceArea(radius) {
    // MathThingsのメンバ変数にアクセスできます
    return MathThings.PIAPPROX * radius ** 2;
  }

  // クラスのおかげで同じ名前の関数を定義することができます
  static boxVolume(x) {
    return x * x * x;
  }
}

console.log("πは" + MathThings.PIAPPROX);
console.log("1辺が2の立方体の体積は" + MathThings.boxVolume(2));
console.log("半径4の円の面積は" + MathThings.circleSurfaceArea(4));

// 名前空間のおかげで名前が衝突せずに済みます
console.log("1辺が5の立方体の体積は" + MathThings.boxVolume(5));
```

# 名前空間

- class を利用して、名前空間を扱うことができます。
- class を名前空間として使う場合、static をつけます。
- function の部分も static に置き換えます。
- 仮引数のかっこは必要ない。

```javascript
// クラス構造を利用して、名前空間として使うことができます
// クラスでは変数や関数を保存することができます

class Circle {
  // クラス内ではデータはメンバ変数と呼ばれます
  // メンバ変数の定義
  // クラスを名前空間として使う場合は、static をつけます
  static PI = 3.14;

  // クラス内では関数はメソッドと呼ばれます
  // メソッドの定義
  static perimeter(radius) {
    // 円周は 2πr
    // メンバ変数へのアクセスは、メンバ(.)演算子を使います
    return 2 * Circle.PI * radius;
  }

  static area(radius) {
    // 円の面積は πr^2
    return Circle.PI * radius * radius;
  }
}

class Square {
  static perimeter(side) {
    // 正方形の周囲の長さは 4 × 1 辺
    return 4 * side;
  }

  static area(side) {
    // 正方形の面積は (1 辺)^2
    return side * side;
  }
}

class EquilateralTriangle {
  static perimeter(side) {
    // 正三角形の周囲の長さは 3 × 1 辺
    return 3 * side;
  }

  static area(side) {
    // 正三角形の面積は √3/4 × (1 辺)^2
    // √x は x^0.5 なので、べき乗(**)演算子を使って求めることができます
    return (3 ** 0.5 / 4) * side * side;
  }
}

// クラス（名前空間）の中にある関数にアクセスします
console.log(Circle.perimeter(4));
console.log(Circle.area(4));

console.log(Square.perimeter(4));
console.log(Square.area(4));

console.log(EquilateralTriangle.perimeter(4));
console.log(EquilateralTriangle.area(4));

// クラス（名前空間）の中にあるメンバ変数にアクセスします
console.log(Circle.PI);

//点々を使って、定義することもある。
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

console.log(config.initialForm);
console.log(config.bankPage);
```

## random な数字の作成

```javascript
// Math.random()は0-1未満のランダムな数を返します。
console.log(Math.random());

// では、ここで0-3未満のランダムな数を生成してみましょう。
console.log(Math.random() * 3);

// 次に2-5未満のランダムな数を生成してみましょう。
console.log(Math.random() * (5 - 2) + 2);
// したがって、Math.random() * (max - min) + minでmin-max未満のランダムな数を生成することができます。

function getRandomInteger(min, max) {
  console.log(Math.floor(Math.random() * (max - min) + min));
}
getRandomInteger(4, 10);
```
