function fruitImgUrl(fruit){
    fruit = fruit.toLowerCase();

    // === はデータ型もcheckする演算子
    if(fruit === "banana") return "https://www.kroger.com/product/images/xlarge/front/0000000004011";
    else if(fruit === "pineapple") return "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/pineapple.jpg?1516498929";
    else if(fruit === "pear") return "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png";

    // デフォルト
    else return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
}

function renderFruit(fruit, ele){
    let fruitP = document.createElement("p");
    fruitP.innerHTML = "Our fruit is : " + fruit;

    // imgタグを作成します。
    let fruitImg = document.createElement("img");

    // .srcプロパティでsrc属性にアクセスします。
    // 各urlをsrc属性に入れます。
    fruitImg.src = fruitImgUrl(fruit);

    // fruitImgにfruitImgというクラスを追加します。
    fruitImg.classList.add("fruitImg");

    // 作成したものをdivに入れます。
    let fruitDiv = document.createElement("div");
    // divにfruitDivというクラスを追加します。
    fruitDiv.classList.add("fruitDiv")
    fruitDiv.append(fruitP);
    fruitDiv.append(fruitImg);

    // 入力の要素の中に追加します。
    ele.append(fruitDiv);
}

let fruitContainer = document.getElementById("fruit-container");

// 関数の呼び出し
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);