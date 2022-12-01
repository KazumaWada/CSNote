- DOM で読み込まれる html ファイルは document と呼ばれる。
- DOM: document のための API
- API: 他のプログラムと繋がるプログラムの総称
- Document: API,HTML,CSS 全ての木構造の根ノードにあたる。

## documentGetElementByID("id")

- グローバル変数なので、どこからでも呼び出すことができる。

```html
<div>
  <h1 id="title">Recursion</h1>
  <div>
    <p id="cs">Computer Science</p>
    <p id="pr">Programming</p>
  </div>
</div>
```

```javascript
// "hw"というIDを持つ要素にアクセスし要素を取得したのち、変数に保存します。
let ele1 = document.getElementById("hw");
console.log(ele1);

let ele2 = document.getElementById("bg");
console.log(ele2);
```

## innerHTML(書き換え)

- javascript で html の要素を書き換える。
  以下は、facebooks を facebook に直している。

```html
<p id="facebook">Facebooks offers the world's most advanced operating system</p>
```

```javascript
facebook.innerHTML =
  "Facebook offers the world's most advanced operating system";
```

## classList(書き換え)

- javascript で html の class を書き換える。

```javascript
// fruitImgにfruitImgというクラスを追加します。
fruitImg.classList.add("fruitImg");
```

## createElement(新規作成)

- 要素を html に追加することができる。
- append を使って、DOM の tree を定義。

```html
<div>
  <div id="target-container"></div>
</div>
```

```javascript
let parentDiv1 = document.createElement("div");
let h2 = document.createElement("h2");
let p1 = document.createElement("p");
let p2 = document.createElement("p");

h2.innerHTML = "sport";
p1.innerHTML = "tennis";
p2.innerHTML = "baseball";

parentDiv1.append(h2, p1, p2);

document.getElementById("target-container").append(parentDiv1);
//result
// sport
// tennis

// baseball
```

## append(要素を要素の中に入れる)

```javascript
animalDiv.append(animalP); //親から子要素の順番で書く。
```

## 上記のメソッドを使ったコード。

```html
<div>
  <div id="animal-container" class="row">
    <!-- ここにdogの画像と説明を追加します。 -->
  </div>
</div>
```

```javascript
// ここからJavaScriptを記述してください。
// 関数名: animalImgUrl
function animalImgUrl(animal) {
  animal = animal.toLowerCase();
  if (animal === "dog")
    return "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg";
}

//pタグとそこに入れる文字列を作成。
let animalP = document.createElement("p");
animalP.innerHTML = "Our Animal Is Dog!";
// imgタグを作成
let animalImg = document.createElement("img");

//srcに入力する文字列を作成。
animalImg.src = animalImgUrl("dog");

// fruitImgにfruitImgというクラスを追加します。
animalImg.classList.add("animalImg");
// divを作成
let animalDiv = document.createElement("div");

// divにfruitDivというクラスを追加します。appendでp,imgを中に入れる。
animalDiv.classList.add("animalDiv");
animalDiv.append(animalP);
animalDiv.append(animalImg);
// container内に収納。
document.getElementById("animal-container").append(animalDiv);
```

```javascript
function animalImgUrl(animal) {
  if (animal === cat)
    return "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg";
  else if (animal === dog)
    return "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg";
  else
    return "https://cdn.pixabay.com/photo/2014/04/05/11/20/forest-315184__340.jpg";
}

function renderAnimal(animal, ele) {
  let animalP = document.createElement("P");
  animalP.innerHTML = "Our animal is" + animal;

  //imgタグ作成
  let animalImg = document.createElement("img");

  //srcを定義
  animalImg.src = animalImgUrl(animal);

  //animalImgにanimalImgクラスを追加
  animalImg.classList.add("animalImg");

  //div作成
  let animalDiv = document.createElement("div");

  //p,imgをdivの内部に入れる。
  animalDiv.classList.add("animalDiv");
  animalDiv.append(animalP);
  animalDiv.append(animalImg);

  //containerの中に入れる。
  ele.append(animalDiv);
}

let animalContainer = document.getElementById("animal-box");

renderAnimal("cat", animalContainer);
renderAnimal("dog", animalContainer);
renderAnimal("catcatcat", animalContainer);
```
