<!--
    問題
    onclick属性を用いて、入力された値に応じて「Op1: xx, Op2: yy」と表示するアラートを作成してください。
 -->
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<div class="m-2">
    <div class="col-6 row justify-content-center mb-2">
            <label class="col-12 text-center" for="op1">Operand 1</label>
            <input class="col-12" type="text" id="op1">

            <label class="mt-3 col-12 text-center" for="op2">Operand 2</label>
            <input class="col-12" type="text" id="op2">

            <!-- onclick属性を用いて、入力された値に応じて「Op1: xx, Op2: yy」と表示するアラートを作成してください。 -->
            <button type="button" class="btn btn-secondary mt-3" onclick="alert(`op1:`+ document.getElementById('op1').value + `op2:` + document.getElementById('op2').value)">Test Input</button>
    </div>

</div>
```

# 電卓のデモ

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

  // 答えを出力するinputタグ
  const answer = document.getElementById("answer");

  // オペランドのボタンにクリックイベントリスナーを追加します。
  // addEventListener(種類, 関数)
  // 上で指定したanswer(タグ)のvalue属性に関数で出力した値を代入します。
  // JSではinputタグのvalue属性は直接変更することができます。
  //evem=ntListnererとかのfunctionって、基本仮引数とか関数名書かないのかな?
  document
    .getElementById("plusOperator")
    .addEventListener("click", function () {
      answer.value = applyOperation(op1.value, op2.value, "+");
    });

  // 引き算のタグがクリックされると関数が実行されます。
  document
    .getElementById("minusOperator")
    .addEventListener("click", function () {
      answer.value = applyOperation(op1.value, op2.value, "-");
    });

  // 掛け算
  document
    .getElementById("timesOperator")
    .addEventListener("click", function () {
      answer.value = applyOperation(op1.value, op2.value, "*");
    });

  // 割り算
  document
    .getElementById("divideOperator")
    .addEventListener("click", function () {
      answer.value = applyOperation(op1.value, op2.value, "/");
    });
</script>
<!-- 
    ToDo: addEventListenerを使って、演算子がクリックされると計算を行う計算機を作成してください。
    各ボタンがクリックされるとapplyOperationという関数が実行され、その出力をanswerというid属性を持つinputタグのvalue属性に反映させてください。 
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
    <!-- disable属性でinput属性を無効にします。したがって、inputタグですが、情報を入力することはできません。 -->
    <!-- clickEventによって、answer.valueが追加される。 -->
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator">+</button>
      <button id="minusOperator">-</button>
      <button id="timesOperator">*</button>
      <button id="divideOperator">/</button>
    </div>
  </div>
</div>
```
