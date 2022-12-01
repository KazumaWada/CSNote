# eventLisner

- User による GUI 操作でデータを処理することができる。
- ある特定のイベントが発生するまで待ち続けている関数のこと。
- addEventListener メソッドを使って行う。(addEvemtListner("event を表す文字列", 関数))
- event を表す文字列は、"click"じゃないと機能しない。"click here"とかだと、function が反応しない。

```javascript
<button id="targetBtn" class="btn btn-primary">
  Click me too
</button>;
//結構重要かも。
//ここの文字列にある"click"は、何でも良い訳ではなく,"click"と書かなければ、functionが機能しない。何て事だ。
document.getElementById("targetBtn").addEventListener("click", function () {
  alert("Thanks for clicking, alternative version");
});
```

- 上と同じ機能を html の onClick()メソッドを使っても実装できる。

# EventTarget(html の要素。event を発生させる target)

- 全ての node(DOM)は eventTarget の挙動を持っている。

```javascript
<div>
    <p id="target-p">Incoming Event</p>
    <h1 id="target-h">The second Event</p>
</div>

// documentから要素を取得し、独自のイベントを追加します。

// 根ノードであるdocumentオブジェクトに独自のイベントを追加することもできます。
let targetElement = document.getElementById("target-p");

// 新しいイベントオブジェクトを作成します。
// イベントオブジェクトは、イベントタイプを表す文字列をその構造に取り込み、イベントを識別するために使用します。
const customEvent = new Event("myUniqueEvent");
//なぜconsole.logが必要なのだろうか。。。
console.log(customEvent);

// イベントが発火した時に実行する関数
function randomFunction(){
    console.log("The event just ran!!!!!");
}

// targetElementにイベントリスナーを追加し、関数の参照を渡します。
// イベントがトリガーされたら、渡されたコールバックを実行します。
targetElement.addEventListener("myUniqueEvent", randomFunction);

// dispatchEvent()メソッドを使って、対象となる要素にイベントを発生させることができます。

//dispatchでイベントを発生させる??前のボタンは、user側の操作を待っていたもんな。独自に発火させるには、こうやっているのか。。
targetElement.dispatchEvent(customEvent);


let hElement = document.getElementById("target-h");

hElement.addEventListener("echo", function(){
    for (let i = 1; i <= 10; i++) {
        console.log("Hello World")
    }
})

//イベントを発火させる
hElement.dispatchEvent(new Event("echo"));
```

# callBack で出力できる色々なデータ

- コールバック関数は(addEventListner 関数などに設定される関数)、イベントオブジェクトのパラメータを 1 つ受け取ることができ、常に void を返す必要があります。(つまり、return しないってことかな??)
- callBack function は、発生した event の内容、いつ発生したのか、その他の追加情報が含まれている。

```javascript
<div>
  <p id="target-p">Incoming Event</p>
</div>;

let targetElement = document.getElementById("target-p");
const customEvent = new Event("myUniqueEvent");

function randomFunction(event) {
  console.log("The event just ran!!!!!");

  // イベントに関する追加情報をログに記録します。このイベントオブジェクトは常にいくつかのメンバ変数を含み、その中にはtarget,timestamp,typeメンバが含まれます。

  // イベントが発生した要素
  console.log(event.target); //<p id="target-p">Incoming Event</p>

  // 現在のドキュメントの生成からイベントが作成された時点までの時間（ミリ秒単位）
  console.log(event.timeStamp); //時間が表示される

  // イベントタイプ
  console.log(event.type); //eventの文字列が表示される

  // eventのデータ型
  console.log(typeof event); //object
}

targetElement.addEventListener("myUniqueEvent", randomFunction);

targetElement.dispatchEvent(customEvent);

// ブラウザに表示されているテキストをクリックしてみましょう。
targetElement.addEventListener("click", function (e) {
  console.log(e.timeStamp);
});
```

# browserEvent

- clickEvent は、dispatchEvent を使わなくても自動的に動いた。これは browserEvent が自動的に処理してくれているから。
- browser が色々自動でやってくれるから、event は基本待機中の状態のみの記述で問題ない。

# querySelectorAll(指定した条件に合った html 要素(NodeList)を全て取得する。)

```html
<script>
  let outer = document.getElementById("outer-div");

  // outer内で、"small-text"クラスを持つ全ての要素を探します。
  let smallTextOuter = outer.querySelectorAll(".small-text");

  // そのいくつかを出力します。
  console.log(smallTextOuter[0]); //<p class="small-text">P1 with class "small-text"</p>
  console.log(smallTextOuter.item(1)); //<p class="small-text">P2 with class "small-text"</p>
  console.log(smallTextOuter[2]); //<p class="small-text">P3 with class "small-text"</p>

  // サイズを取得します。
  console.log(smallTextOuter.length); //4
  // 全てを出力します。
  console.log(smallTextOuter);
  //[0]: <p class="small-text">P1 with class "small-text"</p>
  //[1]: <p class="small-text">P2 with class
  //[2]: <p class="small-text">P3 with class "small-text"</p>
  //[3]: <p class="small-text">P4 with class "small-text"</p>

  // innerDivを取得します。
  let innerDiv = document.getElementById("inner-div");
  let innerP = innerDiv.querySelectorAll(".inner-p");

  console.log("Working with the inner.."); //Working with the inner..
  console.log(innerP.item(0)); //0?

  // "outer-div"というidはinnerDivツリーの外側なので、querySelectorAllは空のノードを返します。なぜなら、innerDivの孫要素に何も発見されなかったからです。
  let outerP = innerDiv.querySelectorAll("#outer-div");
  console.log(outerP.length); //0?
</script>

<div id="outer-div">
  <p>Hello World</p>
  <p class="small-text">P1 with class "small-text"</p>
  <p class="small-text">P2 with class "small-text"</p>
  <p class="small-text">P3 with class "small-text"</p>
  <p class="small-text">P4 with class "small-text"</p>
  <div id="inner-div">
    <p></p>
  </div>
</div>
```

```html
<script>
  function applyOperation(op1, op2, operator) {
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    if (operator === "+") return op1 + op2;
    if (operator === "-") return op1 - op2;
    if (operator === "*") return op1 * op2;
    if (operator === "/") return op1 / op2;

    return NaN;
  }

  const op1 = document.getElementById("operator1");
  const op2 = document.getElementById("operator2");
  const answer = document.getElementById("answer");

  /////////////////////////////////重要なのはここ/////////////////////////////////
  // querySelectorAllメソッドとは、指定したセレクタに一致するすべてのHTML要素(NodeList)を取得するメソッドです。今回の場合、operator-btnというクラスを持っている要素が返されます。
  // 返された値は、HTMLCollectionと呼ばれるノードのリストです。ノードについては上級コースで学習します。
  const operatorButtons = document.querySelectorAll(".operator-btn");
  // 上で取得した該当するclassのHTML要素を出力する。
  console.log(operatorButtons);
  console.log(operatorButtons[0]);
  console.log(operatorButtons[3]);
  /////////////////////////////////重要なのはここ/////////////////////////////////
</script>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row justify-content-end">
    <label for="answer">Total</label>
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator" class="operator-btn">+</button>
      <button id="minusOperator" class="operator-btn">-</button>
      <button id="timesOperator" class="operator-btn">*</button>
      <button id="divideOperator" class="operator-btn">/</button>
    </div>
  </div>
</div>
```

- querySelector を使って、電卓を作成する。

```html
<script>
  function applyOperation(op1, op2, operator) {
    // str型からint型へ変更します。
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    // 演算子によって返される値が変わります。
    if (operator === "+") return op1 + op2;
    if (operator === "-") return op1 - op2;
    if (operator === "*") return op1 * op2;
    if (operator === "/") return op1 / op2;

    // NaNキーワードはNot A Numberを意味します。
    return NaN;
  }

  const op1 = document.getElementById("operator1");
  const op2 = document.getElementById("operator2");
  const answer = document.getElementById("answer");

  // querySelectorAllメソッドとは、指定したセレクタに一致するすべてのHTML要素(NodeList)を取得するメソッドです。今回の場合、operator-btnというクラスを持っている要素が返されます。
  // 返された値は、HTMLCollectionと呼ばれるノードのリストです。ノードについては上級コースで学習します。
  const operatorButtons = document.querySelectorAll(".operator-btn");
  //////////////////////////重要なのはここ///////////////////////////////////////////
  // for文を使って各ボタンがクリックされるとステートメントが実行されるという処理を作成します。
  for (let i = 0; i < operatorButtons.length; i++) {
    let opElement = operatorButtons[i];
    opElement.addEventListener("click", function () {
      // 要素.innerHTMLで要素の中身を取得できる。
      answer.value = applyOperation(op1.value, op2.value, opElement.innerHTML);
    });
  }
  //////////////////////////重要なのはここ///////////////////////////////////////////
</script>
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <!-- inputタグにvalue属性が初期値として表示されます。 -->
    <!-- value属性の中はstr型です。 -->
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <!-- inputタグのvalue属性は、要素.valueプロパティで取得することができます。 -->
    <!-- onclick属性でクリック時に実行されるステートメントを設定します。 -->
    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row justify-content-end">
    <label for="answer">Total</label>
    <!-- disable属性でinput属性を無効にします。 -->
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator" class="operator-btn">+</button>
      <button id="minusOperator" class="operator-btn">-</button>
      <button id="timesOperator" class="operator-btn">*</button>
      <button id="divideOperator" class="operator-btn">/</button>
    </div>
  </div>
</div>
```

# classList(class 名(文字列)を追加したり、削除したりできる)

- classList.remove("削除したい class");
- classList.add("加えたい class");
- よく一緒に使われるメソッド: add,remove,contains(確認),toggle(切り替え)

```html
<script>
  function displayNone(ele) {
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
  }

  // ここからJavaScriptを記述してください。
  function displayBlock(ele) {
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
  }
</script>
<style>
  .box {
    height: 100px;
    width: 100px;
  }
</style>
<!-- クラスを切り替えるイベント。箱を表示/非表示させます。 -->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <div class="box bg-secondary d-none" id="sBlock"></div>

  <button
    class="btn btn-primary mt-2"
    onclick="displayNone(document.getElementById(`pBlock`)); displayBlock(document.getElementById(`sBlock`))"
  >
    Display Toggle
  </button>
</div>
```

```html
<!-- ToDO:
     ボタンをクリックする度に青色のboxとグレーのboxが非表示 / 表示を繰り返す挙動を作成してください。
     要素のクラスの状態によって、d-noneとd-blockを入れ替える、toggleDisplayという関数を作成してください。
-->
<script>
  function displayNone(ele) {
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
  }

  function displayBlock(ele) {
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
  }

  // ここからJavaScriptを記述してください。
  // 入力ele1、ele2
  // もしele1がd-blockを持っていたら、上で記述されている関数を使ってele1をd-noneし、ele2をd-blockしてください。
  // それ以外のケースでは、反対の処理を行ってください。

  // classList.containsはクラスが含まれているか確認します。ブーリアン値を返します。
  function toggleDisplay(ele1, ele2) {
    //ele1が存在していたら、ele1を消して、ele2を出現させる。
    if (ele1.classList.contains("d-block")) {
      displayNone(ele1);
      displayBlock(ele2);
    } else {
      displayNone(ele2);
      displayBlock(ele1);
    }
  }
</script>
<!-- ToDO:
     ボタンをクリックする度に青色のboxとグレーのboxが非表示 / 表示を繰り返す挙動を作成してください。
     要素のクラスの状態によって、d-noneとd-blockを入れ替える、toggleDisplayという関数を作成してください。
-->

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <div class="box bg-secondary d-none" id="sBlock"></div>
  <button
    class="btn btn-primary mt-2"
    onclick="toggleDisplay(document.getElementById(`pBlock`), document.getElementById(`sBlock`))"
  >
    Display Toggle
  </button>
</div>
```

# keydown(user の keybord からの入力)

```html
<!-- 
    ToDo: 
    キーボードに「u」と入力されたら箱を+10px、「d」と入力されたら箱を-10pxする処理を実装してください。
    addEventListenerのkeydownを使って、「箱の現在の高さを把握し、押されたキーボードによって箱のstyle属性のheightプロパティを変更する」という関数を実行してください。 
-->
<script>
  //現在の高さ: 要素のid.offsetHeight;
  //cssのデータ取得: 要素のid.style.hright;
  // getElementsByTagNameメソッドで要素をノードの配列(HTMLCollections)として取得します。
  //仮引数のeventはeventがトリガーされると、勝手に実行されるのか。
  //つまり、keydownが起こったら、自動的にfunctionが実行される。
  let body = document.getElementsByTagName("body").item(0);

  body.addEventListener("keydown", function (event) {
    console.log(event.key);

    const pBlock = document.getElementById("pBlock");
    const pxIncrease = 10;

    // offsetHeightは現在の要素の高さを取得します。
    let height = pBlock.offsetHeight;

    // 押されたキーがuなら+10、dなら-10
    if (event.key === "u") {
      // style.heightは要素のstyle属性のheightプロパティの値を取得、もしくは、設定するプロパティです。
      //offsetHeightでもstyle.heightでもconsoleの値は同じだった。
      console.log("style.heightだよ" + pBlock.style.height);
      console.log("offsetHeightだよ" + pBlock.offsetHeight);
      pBlock.style.height = height + pxIncrease + "px";
    } else if (event.key === "d") {
      console.log(pBlock.style.height);
      pBlock.style.height = height - pxIncrease + "px";
    }
  });
</script>
<style>
  .box {
    height: 100px;
    width: 100px;
    transition: height 0.1s linear;
  }
</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <p>press up and down</p>

  <div>
    <button class="btn">+</button>
    <button class="btn">-</button>
  </div>
</div>
```

- +,-ボタンによって、px の値を増やしたり減らしたりする。

```html
<script>
  //これがわかったから、解けた。
  //もしかして、データを取得するが、.offsetHeightで、
  //プロパティにアクセスするが、style.height??

  // const currentHeight = pBlock.style.height;
  function increasePx(boxHeight) {
    pBlock.style.height = boxHeight + 10 + "px";
  }

  function decreasePx(boxHeight) {
    pBlock.style.height = boxHeight - 10 + "px";
  }
</script>
<style>
  .box {
    height: 100px;
    width: 100px;
    transition: height 0.1s linear;
  }
</style>
<!-- 
    ToDo
    「+」が押された時に、箱の高さを+10pxするincreasePxという関数を、「-」が押された時に箱の高さを-10pxするdecreasePxという関数を実行してください。要素の現在の高さを取得するhtmlElement.offsetHeightや、style属性のheightプロパティにアクセスするhtmlElement.style.heightを使ってください。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <p>press up and down</p>

  <div>
    <button class="btn" onclick="increasePx(pBlock.style.height)">+</button>
    <button class="btn" onclick="decreasePx(pBlock.style.height)">-</button>
  </div>
</div>
```

# mouseOver

- input タグに password を入力して、onClick で,type を password と text に切り替えれるようにする処理

```html
<script>
  function passwordToggle() {
    //パスワードを入力するboxのid
    const pass = document.getElementById("passwordClick");
    // passのtype属性がpasswordならtext、そうでなければpasswordに設定します。
    //passwordになっている。 <input id="passwordClick" type="password">
    //ってことは、clickするたびにpasswordの点々かtext表示かっていう風に切り替えているのか。。
    //clickされたから、pass.typeを上書きしている??
    pass.type = pass.type === "password" ? "text" : "password";

    // if文を使わずに三項演算子を使うと上の処理になります。
    // if (pass.type === "password") {
    //     pass.type = "text";
    // } else {
    //     pass.type = "password";
    // }
  }
</script>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-12">
    <label for="passwordClick">Password</label>
    <input id="passwordClick" type="password" />
  </div>
  <div class="col-12">
    <label for="passwordClickCheck">Show/Hide Password</label>
    <!-- onclick属性 -->
    <!-- ↓これが四角いbox -->
    <input type="checkbox" id="passwordClickCheck" onclick="passwordToggle()" />
  </div>
  <div class="col-12">
    <button>Lock Password</button>
  </div>
  <h3 class="mt-5">Password</h3>
  <div id="lockedPassDiv" class="col-12"></div>
</div>
```

- LockPassword を押すと、input タグに何も入力できなくなり、そのパスワードが div に表示される。

```html
<script>
  function passwordToggle() {
    const pass = document.getElementById("passwordClick");
    pass.type = pass.type === "password" ? "text" : "password";
  }

  function lockPass() {
    //passwordのbox
    const pass = document.getElementById(`passwordClick`);
    //passwordをdisplayする場所
    const target = document.getElementById("lockedPassDiv");
    pass.disabled = true;
    //p要素を作成する。
    const p = document.createElement("p");
    //なぜpass.valueなのか。innerHTMLではいけないのか??
    p.innerHTML = pass.value;
    // 入力されたpasswordをdivに追加します。
    target.append(p);
  }
</script>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-12">
    <label for="passwordClick">Password</label>
    <input id="passwordClick" type="password" />
  </div>
  <div class="col-12">
    <label for="passwordClickCheck">Show/Hide Password</label>
    <input type="checkbox" id="passwordClickCheck" onclick="passwordToggle()" />
  </div>
  <div class="col-12">
    <!-- onclickでlockedして、divにdisplayする -->
    <button onclick="lockPass()">Lock Password</button>
  </div>
  <h3 class="mt-5">Password</h3>
  <div id="lockedPassDiv" class="col-12"></div>
</div>
```

# getAttribute

```html
<script>
  // data-属性はgetAttributeメソッドを使うことによって直接アクセスすることができます。
  //(data-secret:hello world)みたいに、keyと値の関係になっている。

  //console: hello world browser: vvhi
  console.log(
    document.getElementById("dataSecret").getAttribute("data-secret")
  );
</script>
<div>
  <div id="dataSecret" data-secret="hello world">vvhi</div>
</div>
```

# template literal(テンプレートリテラル)

```javascript
// テンプレートリテラルを使わない今までのやり方
let string = "My name is";
console.log("Hello" + string + "Steve. Nice to meet you.");

// テンプレートリテラルを使うと${変数}で、変数を含めることができます。
// したがって、今まで使っていた、「+」演算子を省略することができます。
console.log(`Hello ${string} Steve. Nice to meet you.`);

// 計算式も含めることができます。
console.log(`半径2の円の面積は${2 * 2 * 3.14}です。`);
```
