```html
<script>
  const target = document.getElementById("target");
  //所得したいデータのものも含めて、全ての親要素の情報を取得する必要がある。
  //querySelectAllは、基本自分が持っている子要素があるかどうかってことなのかな。
  const box = target.querySelectorAll("#target .slider-data .slider-item");
  console.log(box);
  console.log(box[0]);

  // <div class="col-12 d-flex flex-nowrap overflow-hiddens"> -- sliderShow
  //     <div class="main full-width"> -- main
  //     </div>
  //     <div class="extra full-width"> -- extra
  //     </div>
  // </div>
  // 上のHTMLをcreateElementやclassListを用いて作成してください。
  const sliderShow = document.createElement("div");
  const main = document.createElement("div");
  const extra = document.createElement("div");

  sliderShow.classList.add(
    "col-12",
    "d-flex",
    "flex-nowrap",
    "overflow-hiddens"
  );
  main.classList.add("main", "full-width");
  extra.classList.add("extra", "full-width");

  sliderShow.append(main);
  sliderShow.append(extra);
  //mainコンテナに一番最初の箱をappendし、sliderShowをid属性targetのdivに追加してください。
  //つまり、HTMLに書かれているコードと上で作成したコードを合体させる。
  target.append(sliderShow);
  //最初のスライドを表示
  main.append(box[0]);
  //sliders botton
  let bottons = document.createElement("div");
  bottons.classList.add("offset-5", "mt-2");

  let leftBtn = document.createElement("button");
  leftBtn.classList.add("btn", "btn-light");
  leftBtn.innerHTML = "<";

  let rightBtn = document.createElement("button");
  rightBtn.classList.add("btn", "btn-light");
  rightBtn.innerHTML = ">";

  bottons.append(leftBtn);
  bottons.append(rightBtn);
  target.append(bottons);
  //setAttribute(属性名, 属性値)を使ってindexの初期値を設定します。
  main.setAttribute("data-index", "0");
</script>
<style>
  .box {
    height: 50vh;
    padding: 0 !important;
    transition: all 2s linear;
  }

  .full-width {
    width: 100%;
    flex-shrink: 0;
  }

  .deplete-animation {
    animation: deplete 1s linear forwards;
  }

  .expand-animation {
    animation: deplete 1s linear reverse forwards;
  }

  @keyframes deplete {
    0% {
      width: 100%;
      opacity: 1;
    }
    100% {
      width: 0%;
      opacity: 0;
    }
  }
</style>

<!-- 
    ToDo:
    全ての要素を非表示にしてください。
    その後、querySelectorAllを用いて、5つの箱の要素をHTMLのノードのリストとして取得してください。
    次にsliderShowというコンテナを作成し、mainコンテナとextraコンテナを配置してください。
    最後にmainコンテナの中に1つ目の箱をappendしてみましょう。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <!-- 全ての要素を非表示にしてください。 -->
  <div class="col-12 slider-data">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```html
<script>
  const target = document.getElementById("target");
  //これで全てのslide要素を取得している。
  const sliderItems = document.querySelectorAll(
    "#target .slider-data .slider-item"
  );
  //console.log(sliderItems.length);
  let sliderShow = document.createElement("div");
  let main = document.createElement("div");
  let extra = document.createElement("div");

  sliderShow.classList.add(
    "col-12",
    "d-flex",
    "flex-nowrap",
    "overflow-hiddens"
  );
  main.classList.add("main", "full-width");
  extra.classList.add("extra", "full-width");

  main.append(sliderItems[0]);

  sliderShow.append(main);
  sliderShow.append(extra);
  target.append(sliderShow);

  let controls = document.createElement("div");
  controls.classList.add("offset-5", "mt-2");

  let leftBtn = document.createElement("button");
  leftBtn.classList.add("btn", "btn-light");
  leftBtn.innerHTML = "<";

  let rightBtn = document.createElement("button");
  rightBtn.classList.add("btn", "btn-light");
  rightBtn.innerHTML = ">";

  controls.append(leftBtn);
  controls.append(rightBtn);
  target.append(controls);

  //setAttribute(属性名, 属性値)を使ってindexの初期値を設定します。
  main.setAttribute("data-index", "0");

  // 1か-1を受け取って次の要素を設定するslideJumpという関数を作成してください。
  // slideJumpではまず現在のスライドのインデックスと要素を把握し、受け取ったsteps(1または-1)によって、次のスライドの要素を決定します(1だと後の要素、-1だと前の要素という意味)。その後、更新されたインデックスをメインコンテナに再設定します(インデックスは文字列なので注意してください)。

  //スライドは一番最後の要素のあとは最初に戻り、一番最初の前は最後に戻るので、インデックスのstepsに応じてインデックスを計算する際には十分注意してください。
  // slideJumpの中でconsole.log(index)、console.log(currentElement)とconsole.log(nextElement)を行ってください。
  // ここからJavaScriptを記述してください。
  // let slidersDiv = document.getElementById("slide-data");
  //     sliderDiv.querySelectorAll(".slider-item")

  function sliderJump(index) {
    let currentIndex = 0;
    if (currentIndex + index <= sliderItems.length - 1)
      currentIndex = currentIndex + index;
    else currentIndex = ((currentIndex + index) % sliderItems.length) - 1;
    //更新されていない。
    let currentElement = sliderItems[currentIndex - 1];
    let nextElement = sliderItems[currentIndex];
    console.log(currentIndex);
    console.log(currentElement);
    console.log(nextElement);
  }

  // blue-gray-success-yellow-redで並んでいます。

  // slideJump(1)を実行してください。
  sliderJump(1);

  // 以下を出力するはずです。現在のインデックスが1、青い箱が現在の要素で、グレーの箱が次の要素という意味です。
  // 1
  // <div class="box slider-item bg-primary"></div>
  // <div class="box slider-item bg-secondary"></div>

  // slideJump(-1);を実行してください。
  sliderJump(-1);
  // 以下を出力するはずです。今slideJump(1)をしたのでスライドは右にズレてます。
  // したがって、現在のインデックスが0、グレーの箱が現在の要素で、青い箱が次の要素になります。
  // 0
  // <div class="box slider-item bg-secondary"></div>
  // <div class="box slider-item bg-primary"></div>
</script>
<style>
  .box {
    height: 50vh;
    padding: 0 !important;
    transition: all 2s linear;
  }

  .full-width {
    width: 100%;
    flex-shrink: 0;
  }

  .deplete-animation {
    animation: deplete 1s linear forwards;
  }

  .expand-animation {
    animation: deplete 1s linear reverse forwards;
  }

  @keyframes deplete {
    0% {
      width: 100%;
      opacity: 1;
    }
    100% {
      width: 0%;
      opacity: 0;
    }
  }
</style>
<!--
    ToDo:
    まずメインコンテナにsetAttributeを使ってインデックス(初期値)を設定します。

    1か-1を受け取って次の要素を設定するslideJumpという関数を作成してください。
    slideJumpではまず現在のスライドのインデックスと要素を把握し、受け取ったsteps(1または-1)によって、次のスライドの要素を決定します(1だと後の要素、-1だと前の要素という意味)。その後、更新されたインデックスをメインコンテナに再設定します。

    スライドは一番最後の要素のあとは最初に戻り、一番最初の前は最後に戻るので、インデックスのstepsに応じてインデックスを計算する際には十分注意してください。
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <div class="col-12 slider-data d-none">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```html
<script>
  const target = document.getElementById("target");
  const sliderItems = document.querySelectorAll(
    "#target .slider-data .slider-item"
  );

  let sliderShow = document.createElement("div");
  let main = document.createElement("div");
  let extra = document.createElement("div");

  sliderShow.classList.add(
    "col-12",
    "d-flex",
    "flex-nowrap",
    "overflow-hiddens"
  );
  main.classList.add("main", "full-width");
  extra.classList.add("extra", "full-width");

  main.append(sliderItems[0]);

  sliderShow.append(main);
  sliderShow.append(extra);
  target.append(sliderShow);

  let controls = document.createElement("div");
  controls.classList.add("offset-5", "mt-2");

  let leftBtn = document.createElement("button");
  leftBtn.classList.add("btn", "btn-light");
  leftBtn.innerHTML = "<";

  let rightBtn = document.createElement("button");
  rightBtn.classList.add("btn", "btn-light");
  rightBtn.innerHTML = ">";

  controls.append(leftBtn);
  controls.append(rightBtn);
  target.append(controls);
  ///////////////////////////////////////////////////////////////////////////////////////////
  // 現在のindexにdata-indexを設定します。
  // classを追加するメソッド。
  //data-indexとはどんなclass??
  main.setAttribute("data-index", "0");

  // 1か-1を受け取って次の要素を設定するslideJumpという関数を作成します。
  function slideJump(steps) {
    // intへparseする。//typeofしたら、numberだった。
    let index = parseInt(main.getAttribute("data-index"));
    // 現在の要素
    //item: https://developer.mozilla.org/ja/docs/Web/API/NodeList/item
    //sliderItems[index];でも同じって書いてある。
    let currentElement = sliderItems.item(index);
    let currentElement = sliderItems[index];

    // 受け取ったstepに応じてindexを変化させます。
    //lengthを超えた場合は、どうやって書いているんだろうか。
    //index += steps;
    index = index + steps;
    console.log(index);

    // 周回させるように
    //-1の次は,3になる。

    //-1になったら、3になって、3-1で2になっていくから大丈夫。
    //indexが0以下の時
    if (index < 0) index = sliderItems.length - 1;
    //indexがlengthより大きい時
    else if (index >= sliderItems.length) index = 0;

    // 上でindexがstepによって更新されているので、次の要素を設定します。
    let nextElement = sliderItems.item(index);

    // コンソールで確認
    console.log(currentElement);
    console.log(nextElement);

    // indexが更新されたのでdata-indexの更新
    main.setAttribute("data-index", index.toString());
  }
  //-1,1,2,3
  // blue-gray-success-yellow-redで並んでいます。
  slideJump(1); //blue, grayが出力されます
  slideJump(-1); //gray, blueが出力されます
  ////////////////////////////////////////////////////////////////////////////////////////////////

  // 現在の要素、次の要素、rightかleftを受け取って、スライダーを実現します。
  function animateMain(currentElement, nextElement, animationType) {
    // extraに今の要素を入れます。extraはスライドのエフェクトなので消滅する今の要素を入れます。
    //前に上のコードで入れていたのは、静的な形だけのスライド。
    //これは動的にするためのコード。同じコードを書いているけど、違いはそれだよ。
    extra.innerHTML = "";
    extra.append(currentElement);

    // mainに次の要素を入れます。
    main.innerHTML = "";
    main.append(nextElement);

    // mainが出てくるようにexpandのanimationをつけます。
    // もう一度、上のCSSのアニメーションのコードを確認してみましょう。
    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");

    if (animationType === "right") {
      sliderShow.innerHTML = "";
      // 次のmainを後に入れます。
      // extraが消えて、mainが登場するアニメーション
      sliderShow.append(extra);
      sliderShow.append(main);
    } else if (animationType == "left") {
      sliderShow.innerHTML = "";
      sliderShow.append(main);
      sliderShow.append(extra);
    }
  }
  animateMain(sliderItems[0], sliderItems[1], "right");
</script>
```
