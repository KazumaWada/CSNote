# dynamic array

配列のサイズを拡大縮小させることができる配列。

配列を追加、配列のサイズがなかったためエラー、追加したい配列分、配列を新しく作る、初期化されて 0 になる。そこに最初の配列をコピー、追加したかった配列を宣言

```java
class Main{
    public static void printIntArray(int intArr[]){
        // [x]演算子はインデックス演算子であり、x番目のインデックスで値を取得することを意味します。
        for(int i = 0; i < intArr.length; i++){
            System.out.print(intArr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        int[] arr = new int[]{20,13,-12,2,5};
        // 配列では5つの要素のみが追跡されます
        printIntArray(arr);//20 13 -12 2
        // 6番目の要素のデータを割り当てることは、もはや追跡されないデータをメモリに挿入することを意味します。
        // arr[5] = 3; エラー
        // arrの最後のメモリの後に、6つ目のintブロックの内容を意図しないメモリに格納することを意味します。
        // arr[10] = 3; エラー

        // 新しい要素を追加するには、新しい配列を作成する必要があります。すべてが0に初期化されます。
        int[] newArr = new int[6];
        printIntArray(newArr);//000000

        // arrの内容をnewArrにコピーします。これにはO(n)の時間がかかります。
        for (int i = 0; i < arr.length; ++i) {
            newArr[i] = arr[i];
        }

        System.out.println("Printing the new copied array");
        printIntArray(newArr);//20 13 -12 2 5 0 初期化されてコピーされたもの

        // newArrのインデックス5番目に3を格納します。
        newArr[5] = 3;
        printIntArray(newArr);//20 13 -12 2 5 3//初期化されコピーされ、新しく追加した配列に3を格納。
    }
}

// 20 13 -12 2 5//18
// 0 0 0 0 0 0//25
// Printing the new copied array
// 20 13 -12 2 5 0//34
// 20 13 -12 2 5 3//38
```

これが動的型付け言語だとこうなる

```javascript
// 動的配列を取得し，その内容を出力します。
function printArray(intArr) {
  for (let i = 0; i < intArr.length; i++) {
    process.stdout.write(intArr[i] + " ");
  }
  console.log();
}

// JSの配列型は動的配列です。動的配列はオブジェクトです.
// すべてが自動的に処理されるので、動的配列のサイズを宣言する必要はありません。
let dArr = [2, 3, 4, 1, -10, 200];
printArray(dArr);

// 動的配列にいくつかの値を追加します。
// pushメソッドは、配列の最後にデータを追加して動的配列の状態を変更するために使用されます。
// 新しい配列を作る必要も、配列のサイズを気にする必要はありません。動的配列がすべてを自動的に管理します。
dArr.push(10);
dArr.push(340);
dArr.push(543);
dArr.push(-23);

// dArrの新しい状態を出力します。
printArray(dArr);

// 2 3 4 1 -10 200
// 2 3 4 1 -10 200 10 340 543 -23
```

## 指定した配列への挿入、削除

java のような静的型付け言語でも、メソッドを使って、動的にすることができる。

```java
import java.util.ArrayList;// ArrayListライブラリを読み込みます。
import java.util.Arrays; // Arraysライブラリを読み込みます。

class Main{
    // 動的配列を取得し，その内容を出力します。
    public static void printArray(ArrayList<Integer> intArr){
        for (int i = 0; i < intArr.size(); ++i) {
            System.out.print(intArr.get(i) + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        ArrayList<Integer> dArr = new ArrayList<Integer>();

        // 初期配列を2つの項目に設定します。
        dArr.add(2);
        dArr.add(3);
        printArray(dArr);

        // 配列の末尾に要素を追加します。動的配列は内部に配列を管理しているので問題なく処理します。
        dArr.add(30);
        dArr.add(645);
        dArr.add(23);
        dArr.add(-35);
        dArr.add(325);
        dArr.add(1425);
        dArr.add(0);
        dArr.add(98);

        printArray(dArr);

        // 配列の最後に多くの値を追加します。
        dArr.addAll(Arrays.asList(3,34,3542,10,202,34,203,-75,-56,45,0,43,1132));
        printArray(dArr);
    }
}
```

挿入/削除

- unshift->: 先頭に配列を追加
- shift<-: 先頭の要素を削除
- splice(スタート、削除したい数、追加したい値),いくつでも値を追加することができる。
- pop(); 配列[length-1]を削除する

```javascript
function printArray(intArr) {
  let outputString = "[";
  for (let i = 0; i < intArr.length; i++) {
    outputString += intArr[i] + " ";
  }
  console.log(outputString + "]");
}

// 初期配列を2つの項目に設定します。
let dArr = [2, 3];

console.log("Insert/Delete at the beginning O(n)");
printArray(dArr); // [2 3 ]

// 配列の先頭に要素を追加します。O(n)
// unshift(値)メソッドを使います。
dArr.unshift(3);
// 引数はいくつでも設定できます。
dArr.unshift(3, 43, 5234, 34);
printArray(dArr); // [3 43 5234 34 3 2 3 ]

// 最初の要素を削除します。O(n)
// shift()メソッドを使います。
dArr.shift();
printArray(dArr); // [43 5234 34 3 2 3 ]

// インデックス2の位置にある要素を削除します。O(n)
// splice()メソッドを使います。splice(スタート、削除したい数、追加したい値)
dArr.splice(2, 1);
printArray(dArr); // [43 5234 3 2 3 ]

dArr.unshift(343, 343, 232, 12, 23, -23, 10);
printArray(dArr); // [343 343 232 12 23 -23 10 43 5234 3 2 3 ]

// 配列の途中に要素を追加します。
console.log("Insert/Delete at the middle O(n)"); // Insert/Delete at the middle O(n)
dArr.splice(Math.floor(dArr.length / 2), 0, 4);
printArray(dArr); // [343 343 232 12 23 -23 4 10 43 5234 3 2 3 ]
// splice()でいくつでもデータを追加することができます。
dArr.splice(Math.floor(dArr.length / 2), 0, 343, 32, 23, 24, 12, 23, 98, 767);
printArray(dArr); // [343 343 232 12 23 -23 343 32 23 24 12 23 98 767 4 10 43 5234 3 2 3 ]

// 配列の途中の要素を削除します。
dArr.splice(Math.floor(dArr.length / 2), 1);
// 配列の途中から、5つ先まで削除します。
dArr.splice(Math.floor(dArr.length / 2), 5);
printArray(dArr); // [343 343 232 12 23 -23 343 32 23 24 43 5234 3 2 3 ]

console.log("Insert/Delete at the end O(1)"); // Insert/Delete at the end O(1)

// 配列の最後に要素を追加します。
// 1つの要素をプッシュします。
dArr.push(4);
dArr.push(50);
printArray(dArr); // [343 343 232 12 23 -23 343 32 23 24 43 5234 3 2 3 4 50 ]

// 配列の最後に複数要素を追加します。いくつでも可能です。
dArr.push(6, 3, 4, 54);
printArray(dArr); // [343 343 232 12 23 -23 343 32 23 24 43 5234 3 2 3 4 50 6 3 4 54 ]

// 配列の最後を削除します。
// 1つの要素を削除します。
dArr.pop();
printArray(dArr); // [343 343 232 12 23 -23 343 32 23 24 43 5234 3 2 3 4 50 6 3 4 ]

console.log("Pop 5 from end "); // Pop 5 from end

// 後ろから5つの要素を削除します。
for (let i = 0; i < 5; i++) {
  dArr.pop();
}
printArray(dArr); // [343 343 232 12 23 -23 343 32 23 24 43 5234 3 2 3 ]

//Insert/Delete at the beginning O(n)
```

## オブジェクトの配列が必要な場合

```javascript
// ハンター
class Hunter {
  constructor(name, age, weightKg, heightM, strength, cageCubicMeters) {
    this.name = name;
    this.age = age;
    this.weightKg = weightKg;
    this.heightM = heightM;
    this.strength = strength;
    this.cageCubicMeters = cageCubicMeters;
  }

  canCaptureAnimal(animal) {
    if (
      this.strengthKg() >= animal.weightKg &&
      this.cageCubicMeters >= animal.heightM &&
      !animal.predator
    ) {
      return true;
    } else {
      return false;
    }
  }

  attemptToDomesticate(animal) {
    if (this.strengthKg() <= animal.weightKg * 2) {
      return false;
    }
    animal.domesticate();
    return true;
  }

  strengthKg() {
    return this.weightKg * this.strength;
  }
}

function printHunter(hunter) {
  console.log(
    "The hunter's name is: " +
      hunter.name +
      ". This hunter can carry: " +
      hunter.strengthKg() +
      "kg and has a cage " +
      hunter.cageCubicMeters +
      " cubic meters wide"
  );
}

// 動物
class Animal {
  constructor(species, weightKg, heightM, predator) {
    this.species = species;
    this.weightKg = weightKg;
    this.heightM = heightM;
    this.predator = predator;
  }

  domesticate() {
    this.predator = false;
  }
}

function printAnimal(animal) {
  console.log(
    "The animal species is: " +
      animal.species +
      ". It's weight is: " +
      animal.weightKg +
      "kg and its height is: " +
      animal.heightM +
      "m. " +
      (animal.predator ? "It is a predator!" : "It is a peaceful animal.")
  );
}

// 捕まえた動物を返す関数
function capturedAnimals(hunter, animalList) {
  capturedAnimalList = [];
  for (i = 0; i < animalList.length; i++) {
    // もし、ハンターが動物を捕獲した場合、配列の後ろに追加します。
    if (hunter.canCaptureAnimal(animalList[i])) {
      console.log("Capturing..." + animalList[i].species);
      capturedAnimalList.push(animalList[i]);
    }
  }
  return capturedAnimalList;
}

function printAnimals(animalList) {
  console.log("--Listing Animals--");
  // それぞれの動物にアクセスするためにfor文を使います。
  // 各animalListをループします。
  for (let i = 0; i < animalList.length; i++) {
    console.log(animalList[i]);
  }
  console.log("------------------------");
}

// 各動物
let tiger1 = new Animal("Tiger", 290, 2.6, true);
let tiger2 = new Animal("Tiger", 300, 2.3, true);
let bear1 = new Animal("Bear", 250, 2.8, true);
let snake1 = new Animal("Snake", 250, 12.8, true);
let dog1 = new Animal("Dog", 90, 1.2, false);
let cat1 = new Animal("Cat", 40, 0.5, false);
let cow1 = new Animal("Cow", 1134, 1.5, false);

// 各ハンター
let hunternator = new Hunter("Hunternator", 30, 124.73, 1.85, 15, 3);
let hunterChild = new Hunter(
  "Hunter Child Of The Small Giants",
  10,
  50,
  1.2,
  0.6,
  1
);

// 関数の呼び出し
printHunter(hunternator);
printAnimal(tiger1);

let animals = [tiger1, tiger2, bear1, snake1, dog1, cat1, cow1];
console.log("Animals in the wild: ");
printAnimals(animals);

console.log("Animals captured by: " + hunternator.name + "");
printAnimals(capturedAnimals(hunternator, animals));

console.log("Animals captured by: " + hunterChild.name + "");
printAnimals(capturedAnimals(hunterChild, animals));

console.log(
  "" + hunternator.name + " is ready to bring peace to the animal kingdom."
);

// ハンターと動物のリストを受け取り、動物の状態を変更します。つまりハンターが動物より圧倒的に強ければ、飼い慣らされます。

function domesticateTheAnimals(hunter, animalList) {
  // for文でリストをループし、動物を飼いならす関数を呼び出します。
  for (let i = 0; i < animalList.length; i++) {
    hunter.attemptToDomesticate(animalList[i]);
  }
}

//   attemptToDomesticate(animal) {
//     if (this.strengthKg() <= animal.weightKg * 2) {
//       return false;
//     }
//     animal.domesticate();
//     return true;
//   }

domesticateTheAnimals(hunternator, animals);
console.log("Animals captured by: " + hunternator.name + "");
printAnimals(capturedAnimals(hunternator, animals));
```
