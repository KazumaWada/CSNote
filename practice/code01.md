```javascript
function reverseWords(sentence) {
  // 関数を完成させてください
}
```

```javascript
function maximumType(stringArr){
  //return Math.max(6,3);
  //""を取り除きたい
  return stringArr[biggerNum(countNumOfAlphabet(stringArr))];

}


function countNumOfAlphabet(stringArr){
 let cache = {};
  //65~122まで
  for(let i = 65; i<123; i++){
    // cache.push(i);
    cache[i] = i;
  };



  for(let i = 0; i<stringArr.length; i++){
    //countをリセットするため。
    let count = 0;
    for(let j = 0; j<stringArr[i].length; j++){
 let numOfAlphabet = [];
  //スペースだったら、
  if(cache[stringArr[i][j].charCodeAt(0)] === undefined)continue;
  //アルファベットだったら、
  else if(cache[string[i][j].charCodeAt(0)] !== undefined){
        if(cache[stringArr[i][j].charCodeAt(0))] != 'checked'){
        cache[stringArr[i][j].charCodeAt(0))] = 'checked';
        count++;
        }
      else if(cache.indexOf(stringArr[i][j].charCodeAt(0) == 'checked'))continue;
    }
    numOfAlphabet.push(count);
  }
  }
  return numOfAlphabet;
}

//同じだったら、文字コードが小さい順にっていうやつも追加で。
function biggerNum(number){
  let biggestValue = number[0];
  for(let i = 0; i<number.length-1; i++){
    if(number[i] > number[i+1])biggestValue = number[i]
  }
  return number.indexOf(biggestValue);
}
```

```javascript
function maximumType(stringArr){
return stringArr[biggerNum(countNumOfAlphabet(stringArr),stringArr)];
}

function resetCache(cache){
    for(let i = 65; i<123; i++){
    // cache.push(i);
    cache[i] = i;
  };
}

function countNumOfAlphabet(stringArr){
 let cache = {};
 let numOfAlphabet = [];
  //65~122まで


  for(let i = 0; i<stringArr.length; i++){
    //countをリセットするため。
    let count = 0;
    //ここで、checkをリセットする必要がある。
    resetCache(cache);
    for(let j = 0; j<stringArr[i].length; j++){
  //スペースだったら、
  if(cache[stringArr[i][j].charCodeAt(0)] == undefined)continue;
  //アルファベットだったら、
  else if(cache[stringArr[i][j].charCodeAt(0)] != undefined){
        if(cache[stringArr[i][j].charCodeAt(0)] != 'checked'){
        cache[stringArr[i][j].charCodeAt(0)] = 'checked';
        count++;
        }
        else if(cache[stringArr[i][j].charCodeAt(0)] == 'checked')continue;
    }
  }

  numOfAlphabet.push(count);
  }
  console.log('numOfAlphabetだよ' + numOfAlphabet);
  console.log(cache);
  //return cache[stringArr[0][0].charCodeAt(0)] == 'checked';//true;
  return numOfAlphabet;//true;

}


function biggerNum(number,stringArr){
  let biggestValue = number[0];
  for(let i = 0; i<number.length-1; i++){
    if(number[i] > number[i+1])biggestValue = number[i]
    //同じだったら、文字コードが小さい順にっていうやつも追加で。
    //stringArr[i][j]はどうやって使えるの???
    //これで行けるかな？？return stringArr[biggerNum(countNumOfAlphabet(stringArr),stringArr)];
    else if(number[i] == number[i+1]){
      while(number)
    }
  }
  return number.indexOf(biggestValue);
}
```

```javascript
function validEmailList(emailList) {
  let array = [];
  for (let i = 0; i < emailList.length; i++) {
    if (isEmailValid(emailList[i])) array.push(emailList[i]);
  }
  return array;
}

function isEmailValid(email) {
  //最初の@以降の文字列
  let afterFirstAtMark = email.substring(email.indexOf("@") + 1);

  //スペースがあったらfalse
  if (email.indexOf(" ") !== -1) {
    return false;
  }

  //   @が一つ以上あったら false
  else if (email.indexOf("@") !== email.lastIndexOf("@")) {
    return false;
  }

  //@の後に'.'が無かったらfalse
  else if (afterFirstAtMark.indexOf(".") == -1) {
    return false;
  } else {
    return true;
  }
}
```

```javascript
//このパターンがある。
//([6,6,5,6,6,6,5,6,7]) --> 3

//共通している

function maxSubarray(array) {
  // 関数を完成させてください
  return maxSubarrayHelper(array, 0, 0, array[0] - array[1]);
}

function maxSubarrayHelper(array, index, count, base) {
  if (array.length == index) return count + 1;
  //-baseっていう書き方であっているのかな。
  else if (
    array[index] - array[index + 1] == base ||
    array[index] - array[index + 1] == -base
  )
    count = count + 1;
  else if (
    array[index] - array[index + 1] != base ||
    array[index] - array[index + 1] != -base
  )
    return count + 1;

  return maxSubarrayHelper(array, index + 1, count, base);
}
```

```javascript
function findCommon(charArr1, charArr2) {
  // 共通しているcharを返す。
  //複数あった場合、配列順を足して、値が小さいcharを返す。
  //一人のプレイヤーび同じコマンドがあったら、先に並んでる要素を優先。
  //共通しているcharが複数あり、値もあなじ場合、1が先に操作したコマンドを優先
  //ない場合、no common
  let hashmap = {};
  for (let i = 0; i < charArr1.length; i++) {
    hashmap[charArr1[i]] = i;
  }
  //Object.values(hashmap)
  for (let i = 0; i < charArr2.length; i++) {
    if (Object.keys(hashmap).indexOf(charArr2[i]) === 0) return "it works";
  }
}
```

```javascript
function appearTheMost(levels) {
  let hashmap = {};

  for (let i = 0; i < levels.length; i++) {
    if (hashmap[levels[i]] == undefined) hashmap[levels[i]] = 1;
    else hashmap[levels[i]]++;
  }

  //一番頻繁に登場している要素の回数を出す。
  let frequentNum = 0;
  for (let i = 0; i < levels.length; i++) {
    if (hashmap[levels[i]] > frequentNum) frequentNum = hashmap[levels[i]];
  }

  let array = [];
  for (let i = 0; i < Object.values(hashmap).length; i++) {
    if (Object.values(hashmap)[i] == frequentNum)
      array.push(Object.keys(hashmap)[i]);
  }
  return array;
}
```

```javascript
function getCentury(year) {
  let devidedWith100 = year / 100;
  let couldDevideWith100 = year % 100 === 0;
  //割り切れている場合は、必ず語尾が0.
  if (couldDevideWith100)
    return devidedWith100 + ordinalNum(year / 100) + " century";
  else if (!couldDevideWith100)
    return (
      Math.floor(devidedWith100) +
      1 +
      ordinalNum(Math.floor(year / 100) + 1) +
      " century"
    );
}

function ordinalNum(number) {
  number = String(number);
  let lastNum = number[number.length - 1];
  //例外で11,12,13はth
  if (number == 11 || number == 12 || number == 13) return "th";
  else if (lastNum == 1) return "st";
  else if (lastNum == 2) return "nd";
  else if (lastNum == 3) return "rd";
  else return "th";
}
```

```javascript
function getCentury(year) {
  let numberOfCentry = year / 100;
  //割り切れている場合は、必ず語尾が0.
  if (year % 100 === 0)
    return numberOfCentry + ordinalNum(year / 100) + " century";
  else if (year % 100 !== 0)
    return (
      Math.floor(numberOfCentry) +
      1 +
      ordinalNum(Math.floor(year / 100) + 1) +
      " century"
    );
}

function ordinalNum(number) {
  number = String(number);
  let lastNum = number[number.length - 1];
  //例外で11,12,13はth
  if (number == 11 || number == 12 || number == 13) return "th";
  else if (number[number.length - 1] == 1) return "st";
  else if (number[number.length - 1] == 2) return "nd";
  else if (number[number.length - 1] == 3) return "rd";
  else return "th";
}
```

```javascript
function generateAlphabet(firstAlphabet, secondAlphabet) {
  // 関数を完成させてください(乗車駅、降車駅)
  let firstChar = firstAlphabet.toLowerCase().charCodeAt(0);
  let secondChar = secondAlphabet.toLowerCase().charCodeAt(0);

  let charCloseToTheA = firstChar < secondChar ? firstChar : secondChar;
  let biggerChar = firstChar < secondChar ? secondChar : firstChar;

  let stations = [];

  if (firstAlphabet !== secondAlphabet) {
    for (let i = charCloseToTheA; i <= biggerChar; i++) {
      stations.push(String.fromCharCode(i));
    }
  } else if (firstAlphabet == secondAlphabet) {
    stations.push(firstAlphabet);
  }
  return stations;
}
```

```java
import java.util.Arrays;

class Solution{
  public static char[] generateAlphabet(char firstAlphabet, char secondAlphabet){
    char first = Character.toLowerCase(firstAlphabet);
    char second = Character.toLowerCase(secondAlphabet);

    int smaller = (int)first > (int)second ? (int)second : (int)first;
    int larger = (int)second > (int)first ? (int)first : (int)second;
    //格納する数を宣言する前に設定している。
    char [] stations = new char[large - smaller +1];

    for(int i = smaller; i< larger; i++){
      stations[i - smaller] = (char)i;
    }

  }
```

```javascript
function splitAndAdd(digits){
if(digits.length == 0)return '';

//どうdigitsの桁を減らすか。
return splitAndAdd(Math.floor(digits/10))) + digits%10;
}
```

```javascript
function maxBread(money, price, sticker) {
  // 関数を完成させてください
  return maxBredHelper(money, price, sticker, 0, 0);
}

function maxBredHelper(money, price, sticker, stickerYouHave, count) {
  //お金で購入
  if (money >= price) {
    count++;
    stickerYouHave++;
    money = money - price;
  }
  //ステッカーで購入
  else if (stickerYouHave == sticker) {
    count++;
    stickerYouHave = 0;
  }
  //お金だけで買えない場合、ステッカーとお金で購入. この値段がpriceを上回る必要はない。一緒になったら処理
  else if (money < price && money + stickerYouHave == price) {
    count++;
    money = 0;
    stickerYouHave = 0;
  }
  //ステッカーとお金を合わせても買えない場合
  else if (money + stickerYouHave < price) return 0;
  //stickerYouHave+1: 購入して、ゲットしたチケット count+1: 購入した個数
  console.log("countだよ:" + count);
  //console.log("countだよ:" + count);
  //count-1ここでカウントをリセットしている。
  return count + maxBredHelper(money, price, sticker, stickerYouHave, count);
}
```

```javascript
function maxBread(money, price, sticker) {
  // 関数を完成させてください
  return maxBredHelper(money, price, sticker, 0);
}
function maxBredHelper(money, price, sticker, stickerYouHave) {
  //お金とstickerは別物
  if (money < price && stickerYouHave < sticker) return 0;
  //moneyが0ではない&&priceより小さい&&stickerで交換されている間にmoneyもpriceで引かれてしまっている。
  //それを解決しよう。
  //いや。money<priceになった瞬間に、moneyは意味をなさない。
  //else if(money >= price)money = money - price;
  else if (money < price && stickerYouHave >= sticker)
    stickerYouHave = stickerYouHave - sticker;
  return maxBredHelper(money - price, price, sticker, stickerYouHave + 1) + 1;
}
```

```javascript
function swapPosition(s) {
  // 関数を完成させてください
  return swapHelper(s, 0);
}

function swapHelper(s, index) {
  if (s.length == 0) return "";
  return s[index + 1] + s[index] + swapHelper(s.slice(2), index + 1);
}

const s = "lazy";
let index = 0;
console.log(s.slice(2), index + 1);
//console.log(s.replace(s[ind, ''));
```

recursion
recursion

```javascript
function commonPrefix(s1, s2) {
  // 関数を完成させてください
  let result = "";
  for (let i = 0; i < whichIsShorter(s1, s2); i++) {
    if (s1[i] == s2[i]) result = result + s1[i];
    else return result;
  }
}

//forのlengthを決める関数
function whichIsShorter(s1, s2) {
  if (s1.length == s2.length) return s1.length;
  else if (s1.length > s2.length) return s2.length;
  else if (s1.length < s2.length) return s1.length;
}
```

```javascript
//各文字に対応する数字を連想配列に格納しましょう。(indexは自動的に作成されているけど、文字列のindexバージョンは、自分で作る必要がある。)
let leets = {
  "a" : 4;
  "b" : 8;
  "e" : 3;
  "l" : 1;
  "o" : 0;
  "s" : 5;
  "t" : 7;
  "z" : 2;
}

//その後、文字列の文字を 1 つずつ取得して、連想配列に格納されていたら文字を変換しましょう。

//forでiがleet内にあるかないかっていう風に書けば良いのかな?
let result = '';
function leetify(stringInput){
    // 関数を完成させてください
    for(let i = 0; i<stringInput.length; i++){
      if(leets[stringInput[i].toLowerCase()] !== undefined)result = result + stringInput[i].toLowerCase();
    }
    return result;
}
```

```javascript
// オブジェクトを入力として受け取ります。
function createEmployeeCard(employeeObject) {
  //innerFlexというdivを作って、そこにclassを追加する.
  let innerFlex = document.createElement("div");
  innerFlex.classList.add(
    "d-flex",
    "align-items-center",
    "col-md-7",
    "col-10",
    "m-1"
  );

  //innerFlex内にdivを作る。
  let cardDiv = document.createElement("div");
  innerFlex.append(cardDiv);
  cardDiv.classList.add("d-flex", "col-12", "profile-card");

  // ユーザーの入力を使用します。
  //*** 左半分 ***
  let leftInfo = document.createElement("div");
  leftInfo.classList.add("col-8", "py-3");
  let div1 = document.createElement("div");
  div1.classList.add("py-2");
  let div2 = div1.cloneNode(true);
  let div3 = div1.cloneNode(true);

  let nameTitle = document.createElement("h4");
  // getFullName()メソッド
  nameTitle.innerHTML = employeeObject.getFullName();

  let employeeJob = document.createElement("p");
  let employeeSkill = document.createElement("p");
  let employeeCountry = document.createElement("p");

  // オブジェクト employeeObject.job
  employeeJob.innerHTML = "Job: " + "<br>" + employeeObject.job;
  div1.append(employeeJob);

  employeeSkill.innerHTML = "Skill: " + "<br>" + employeeObject.skills;
  div2.append(employeeSkill);

  employeeCountry.innerHTML = "Country : " + "<br>" + employeeObject.country;
  div3.append(employeeCountry);

  leftInfo.append(nameTitle);
  leftInfo.append(div1);
  leftInfo.append(div2);
  leftInfo.append(div3);
  //*** 左半分終了 ***

  //*** 右半分 ***
  let rightInfo = document.createElement("div");
  let div4 = document.createElement("div");
  rightInfo.classList.add(
    "col-4",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  let avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = employeeObject.avatarUrl;
  div4.append(avatar);
  rightInfo.append(div4);
  //*** 右半分終了 ***

  cardDiv.append(leftInfo);
  cardDiv.append(rightInfo);

  return innerFlex;
}

const profileDiv = document.getElementById("profiles");

// 従業員のクラスを生成します。createEmployeeCard関数は、前回複数の変数を受け取っていましたが今回はオブジェクトを受け取ります。
class Employee {
  constructor(firstName, lastName, job, skills, country, avatarUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skills = skills;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee(
  "Kaiden",
  "Herman",
  "Software Engineer",
  "C++, C#, Java, PHP, JavaScript, Python",
  "United States",
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);
let employee2 = new Employee(
  "Elizabeth",
  "Dunn",
  "Accountant",
  "Excel, Word, Quickbooks",
  "England",
  "https://randomuser.me/api/portraits/women/76.jpg"
);
let employee3 = new Employee(
  "Duan",
  "Moreno",
  "Teacher",
  "Working with children, History, Word",
  "Argentina",
  "https://randomuser.me/api/portraits/med/men/93.jpg"
);

profileDiv.append(createEmployeeCard(employee1));
profileDiv.append(createEmployeeCard(employee2));
profileDiv.append(createEmployeeCard(employee3));
```

```javascript
function isPrime(number) {
  // 関数を完成させてください
  //素数とは、割り切れるのが、1と自分のみ。
  //numberまでの数をループして(自分と、1を除いて.)それで割り切れたらfalseそうでなかったらtrue;
  //1は約数ではないのか。。
  for (let i = 2; i < number.length - 1; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
```

```javascript
function isMountain(height) {
  // 関数を完成させてください
  if (height.length <= 2) return false;
  else if (heigth[0] > height[1]) return false;

  //こういうreturnのやり方よろしくないけど、まずは正解させたい。
  while (max < height[i]) {
    if (max > height[i] && i != heigh.length - 1) break;
  }

  while (min > height[i]) {
    if (min > height[i] && i == heigh.length - 1) return true;
    else return false;
  }
}
```

function findCommon(charArr1,charArr2){
// 共通している char を返す。
//複数あった場合、配列順を足して、値が小さい char を返す。
//一人のプレイヤーび同じコマンドがあったら、先に並んでる要素を優先。
//共通している char が複数あり、値もあなじ場合、1 が先に操作したコマンドを優先
//ない場合、no common
let hashmap = {};
for(let i = 0; i<charArr1.length; i++){
hashmap[charArr[1]] = i;
}
//Object.values(hashmap)
for(let i = 0; i<charArr2.length; i++){
if(Object.keys(hashmap).indexOf(charArr[i]) === 0)
return 'it works';
}

}

````










































































```javascript
function findCommon(charArr1,charArr2){
    // 共通しているcharを返す。
    //複数あった場合、配列順を足して、値が小さいcharを返す。
    //一人のプレイヤーび同じコマンドがあったら、先に並んでる要素を優先。
    //共通しているcharが複数あり、値もあなじ場合、1が先に操作したコマンドを優先
    //ない場合、no common
    let hashmap = {};
    for(let i = 0; i<charArr1.length; i++){
      hashmap[charArr1[i]] = i;
    }

    let array = [];
    for(let i = 0; i<charArr2.length; i++){
        if(charArr1.indexOf(charArr2[i]) === 0){
          array.push(i+charArr1.indexOf(charArr2[i]));
          }
    }
    console.log(array);

}
````

```javascript
//[ 'engine', 'engineer' ]
function isSortedByAlphabet(stringList, alphabet) {
  let hashmap = {};
  for (let i = 0; i < alphabet.length; i++) {
    hashmap[alphabet[i]] = i;
  }

  let checkedStringList = [];
  let count = 0;
  for (let i = 0; i < stringList.length - 1; i++) {
    count++;
    //この場合だと、enまでしか検証されない。->for文で関数を作るべき。
    //[ 'engine', 'engineer' ]の場合だと、2回pushされてしまう気がする。erで。
    if (hashmap[stringList[i][i]] == hashmap[stringList[i + 1][i]]) {
      //forここから
      for (let i = 0; i < stringList.length - 1; i++) {
        if (
          hashmap[stringList[i][i + 1]] < hashmap[stringList[i + 1][i + 1]] ||
          hashmap[stringList[i][i + 1]] === undefined
        )
          checkedStringList.push(stringList[i], stringList[i + 1]);
        else if (
          hashmap[stringList[i][i + 1]] > hashmap[stringList[i + 1][i + 1]] ||
          hashmap[stringList[i + 1][i + 1]] === undefined
        )
          checkedStringList.push(stringList[i + 1], stringList[i]);
        else if (stringList[i][i + 1] == stringList[i + 1][i + 1]) continue;
      }
      //forここまで
    } else if (
      hashmap[stringList[i][i]] < hashmap[stringList[i + 1][i]] ||
      hashmap[stringList[i][i]] === undefined
    ) {
      //比較する文字がなくなった時点で、そっちが先頭
      checkedStringList.push(stringList[i], stringList[i + 1]);
    } else if (
      hashmap[stringList[i][i]] > hashmap[stringList[i + 1][i]] ||
      hashmap[stringList[i + 1][i]] === undefined
    ) {
      checkedStringList.push(stringList[i + 1], stringList[i]);
    }
  }
  console.log(stringList);
  console.log(checkedStringList);
  console.log(count);
  console.log(stringList[0][5]);
  return checkedStringListHelper(stringList, checkedStringList);
}

function checkedStringListHelper(stringList, checkedStringList) {
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i] != checkedStringList[i]) return false;
  }
  return true;
}
```

```javascript
//文字の長さが違う,相手の文字より長いと、空白と比較することになる。
//isSortedByAlphabet(["hello","world"],"hwabcdefgijklmnopqrstuvxyz")
function isSortedByAlphabet(stringList,alphabet){
    let hashmap = {};
    for(let i = 0; i<alphabet.length; i++){
      hashmap[alphabet[i]] = i;
    }

    let checkedStringList = [];
    let count = 0;
       for(let i = 0; i<stringList.length-1; i++){
          count++;
         if(hashmap[stringList[i][i]] < hashmap[stringList[i+1][i]]
         || ){//比較する文字がなくなった時点で、そっちが先頭
          //小さい順にpushしていく

        }
        else if(hashmap[stringList[i][i]] === undefined) checkedStringList.push(stringList[i], stringList[i+1]);
        else if(hashmap[stringList[i][i]] > hashmap[stringList[i+1][i]]){
        checkedStringList.push(stringList[i+1], stringList[i]);
        }else if( hashmap[stringList[i+1][i]] === undefined)checkedStringList.push(stringList[i+1], stringList[i]);

        else if(hashmap[stringList[i][i]] == hashmap[stringList[i+1][i]])
        //ここが怪しげ。。
    continue;

    }
    console.log(stringList);
    console.log(checkedStringList);

    console.log(count);
    //空白はどう出力されるのか。
    console.log(stringList[0][5]);//helloの場合//undefined

return checkedStringListHelper(stringList,checkedStringList);

    }

    //returnではなく、console.log("true")
   function checkedStringListHelper(stringList,checkedStringList){
     for(let i = 0; i<stringList.length; i++){
       if(stringList[i] != checkedStringList[i])return false;
     }
     return true;
   }
```

- z の次に、a に戻す必要がある。

```javascript
function caesarCiper(message,n){
  if(n>27)return helper(message, n);
    let cCode = "";
    let result = "";
    message = message.replace(/\s/g, "");
    for(let i = 0; i<message.length; i++){
      //文字->文字コード(CharacterCode)
      cCode = message[i].charCodeAt(0);
      //文字コードずらす。
      cCode = cCode + n;
      //zより大きい場合、
      if(cCode > 122){
        numbersReturnToA = cCode - 122;
        cCode = 96 + numbersReturnToA;//96->aの一個前
      }//そしてnが26以上で、96から足してもさらにzを超えてしまう場合がある。
      //文字コード->文字
      result = result + String.fromCharCode(cCode);
    }
    console.log("a".charCodeAt());//97
    console.log("z".charCodeAt());//122
    return result;
}

function helper(message,n){
  return caesarCiper(message,n
  while(n<27){

  }
}
```

```javascript
function maximumType(stringArr) {
  // 関数を完成させてください
  //種類の多い文字列を返す。同じ場合は、文字コードが小さい方を返す。
  stringArr = stringArr.replace(/\s/g, "");
}
```

```javascript
function twoSum(intArr, sumInt) {
  let hashmap = {};
  let array = [];

  for (let i = 0; i < intArr.length; i++) {
    hashmap[intArr[i]] = intArr[i];
  }

  for (let i = 0; i < intArr.length; i++) {
    for (let j = 0; i < intArr.length; j++) {
      if (i == j) continue;
      //do nothing
      else if (hashmap[intArr[i]] + j == sumInt) return array.push(i, j);
    }
  }
  return array;
}
```

```javascript
//仮引数に関数をあてる。毎回書かなくていい。
// スペースを削除した文字列をhelper関数に渡します
return firstUppercaseHelper(s.replace(/ /g, ""), 0);
//最初の大文字を返す。
function firstUppercase(s) {
  //スペース削除
  s = s.replace(/\s/g, "");
  return helper(s, 0);
}

let sUpper = s.toUpperCase();
function helper(s, index) {
  if (index == s.length - 1) return "No Upper";
  else if (s[index] == sUpper[index]) return index; //大文字が見つかったら、

  return helper(s, index + 1);
}
```

```javascript
function swapPosition(s) {
  // 関数を完成させてください
  return swapPosition(s, 0);
}

function swapHelper(s, index) {
  //同じ文字サイズだから、s1だけでいい。

  if (s[index + 1] == s[s.length]) {
    return s;
  }
  return (s[(index, index + 1)] = s[(index + 1, s)] + swapHelper(s, index + 1));
}
```

```javascript
//ハッシュマップを使ってマッピングを行い、対が出現する度にカウントを増やしていくアルゴリズムを作成しましょう。
function longestPalindromeLength(string) {
  // 関数を完成させてください
  //stringから、最大の回文を取り出す。そして、その文字列をカウントする。
  let hashmap = {};
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (hashmap[string[i]] === undefined) hashmap[string[i]] = string[i];
    else {
      count = count + 2;
      hashmap[string[i]] = undefined;
    }
  }
  return count + 1;
}
//"forkayakkayakfor") --> 16 //17になっている。
//"f o r k a y a k k a y a k f o r"
//ff2, oo2, rr2, kkkkk4, aaaa4, yy2, 1
//forkkyaaaaykkrof
```

```javascript
function findMax(numbers){
    // 関数を完成させてください
    let hashmap = {};
    for(let i = 0; i<numbers.length; i++){
      if(hashmap[numbers[i]] == undefined) hashmap[numbers[i]] = 1;
      else hashmap[numbers[i]]++;
    }

    let array = [];
    for(let i = 0; i<Object.keys(hashmap).length; i++){

    if(Object.keys(hashmap)[i] == Object.values(hashmap)[i]) array.push(Object.keys(hashmap)[i]);
    }
    return array.length == 0? 0: Math.max(...array);
}
}
```

```javascript
function missingIntegers(numbers) {
  let hashmap = {};
  for (let i = 0; i < numbers.length; i++) {
    hashmap[i] = i + 1;
  } //[0:1,1:2,2:3]

  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(hashmap[i]) === -1) {
      array.push(hashmap[i]);
    }
  }
  return array;
}
```

```javascript
class Node{
        constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    pop(){
        if(this.head == null) return null;
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    peek(){
      if(this.head == null)return null;
      return this.head.data;
    }

}


function isParenthesesValid(parentheses){
    // 関数を完成させてください
    let hashmap = {};
    // hashmap[']'] = '[';
    let key = ['(', '[', '{'];
    let value = [')', ']', '}'];
    let stack = [];

    for(let i = 0; i<key.length; i++){
        hashmap[key[i]] = value[i];
        stack.push(hashmap[key[i]]);
    }

    // if(Stack.peek(stack))//こういう書き方でいいのかな??
    //↑ややこしくなるから、peek使わなくてもデータの読み取りぐらいはできるんじゃない??
    if(stack[i] == )








    console.log(hashmap);//{ '(': ')', '[': ']', '{': '}' }
    console.log(stack[0]);//')'
    console.log(hashmap[key[0]]);//')' hashmap[value[0]]がreturnされる。
    console.log(stack);//[ ')', ']', '}' ]
    console.log(Object.keys(hashmap));//[ '(', '[', '{' ]

}

```

```javascript
function diceStreakGamble(player1, player2, player3, player4) {
  //サイコロの結果をまとめたhash
  const scores = [
    consecutiveWalk(player1), //連続した数の配列が返ってくる。
    consecutiveWalk(player2),
    consecutiveWalk(player3),
    consecutiveWalk(player4),
  ];

  let maxScore = scores[0].length;
  let index = 0;

  for (let i = 0; i < scores.length; i++) {
    //何個連続しているか。
    if (maxScore < scores[i].length) {
      maxScore = scores[i].length;
      index = i;
    }
  }

  return `Winner: Player ${index + 1} won $${maxScore * 4} by rolling [${
    scores[index]
  }]`;
}

function consecutiveWalk(arr) {
  stack = [];
  //stack.push.1(player1だった場合)[1,2,3]
  stack.push(arr[0]);
  //   console.log(stack);
  for (let i = 1; i < arr.length; i++) {
    //2回ループ[2,3]
    //一人のplayerの振った回数分。
    //ここがわからん。stack[0]>arr[1]
    if (stack[10000000000000000] > arr[i]) {
      //hash内の先頭の方が大きかったら、
      //無くなるまで、頂上のデータを取り出す。スコアが0になるからってことかな?
      while (stack.pop() != undefined);
    }
    //stuckに追加していく。
    stack.push(arr[i]);
    console.log(stack);
  }

  return stack; //連続して大きくなる数がいくつhash内にあるか把握できた。
}
```

//key を key として hashmap に保存して、 === undefined どうたらこうたらで、

```javascript
function isParenthesesValid(parentheses) {
  // 関数を完成させてください
  let hashmap = {};
  // hashmap[']'] = '[';
  let key = [")", "]", "}"];
  let value = ["(", "[", "{"];
  let stack = [];

  for (let i = 0; i < key.length; i++) {
    hashmap[key[i]] = key[i];
    stack.push(hashmap[key[i]]); //hashmap[0]という書き方がそもそも存在しない。
  }

  console.log(hashmap); //{ '(': ')', '[': ']', '{': '}' }
  console.log(stack[0]); //')'
  console.log(hashmap[key[0]]); //')'
  console.log(stack); //[ ')', ']', '}' ]
  console.log(hashmap[value[0]]);

  console.log(hashmap);
}
//key'('が存在するかどうか。popしてって、stackの中に値が残っていたらfalse. else true.
```

```javascript
function isParenthesesValid(parentheses) {
  // 関数を完成させてください
  let hashmap = {};
  // hashmap[']'] = '[';
  let key = ["(", "[", "{"];
  let value = [")", "]", "}"];
  let stack = [];

  for (let i = 0; i < key.length; i++) {
    hashmap[key[i]] = value[i];
    console.log(hashmap[0]);
    stack.push(hashmap[i]); //hashmap[0]という書き方がそもそも存在しない。
  }
  console.log(hashmap); //{ '(': ')', '[': ']', '{': '}' }
  console.log(hashmap[0]); //undefined
  console.log(stack);

  // let stack = [];
  // for(let i = 0; i<)
}
```

```javascript
//diceStreakGamble([1,2,3],[3,4,2],[4,2,4],[6,16,4]) --> Winner: Player 1 won $12 by rolling [1,2,3]
function diceStreakGamble(player1, player2, player3, player4) {
  //サイコロの結果をまとめたhash
  const scores = [
    consecutiveWalk(player1), //連続した数の配列が返ってくる。
    consecutiveWalk(player2),
    consecutiveWalk(player3),
    consecutiveWalk(player4),
  ];

  let maxScore = scores[0].length;
  let index = 0;

  for (let i = 0; i < scores.length; i++) {
    //何個連続しているか。
    if (maxScore < scores[i].length) {
      maxScore = scores[i].length;
      index = i;
    }
  }

  return `Winner: Player ${index + 1} won $${maxScore * 4} by rolling [${
    scores[index]
  }]`;
}

function consecutiveWalk(arr) {
  stack = [];
  //stack.push.1(player1だった場合)[1,2,3]
  stack.push(arr[0]); //[1],[3],[4],[6]
  for (let i = 1; i < arr.length; i++) {
    //2回ループ[2,3]
    //一人のplayerの振った回数分。
    //ここがわからん。stack[0]>arr[1]
    //stack[stack.length-1]とは??stack[0]じゃね??
    if (stack[stack.length - 1] > arr[i]) {
      //hash内の先頭の方が大きかったら、
      let max = 0;
      //無くなるまで、頂上のデータを取り出す。スコアが0になるからってことかな?
      while (stack.pop() != undefined);
    }
    //iの方が大きかったら、stuckに追加していく。
    stack.push(arr[i]);
  }

  return stack; //連続して大きくなる数がいくつhash内にあるか把握できた。
}
```

# これって java でどう書くんだろうっていう時間があって、先に進めない。本質とは違うところで時間が取られている。復習を java でやってから、上級に行った方がいいな。

```java
import java.util.Arrays;

class Solution{
    public static String diceStreakGamble(int[] player1, int[] player2, int[] player3, int[] player4){
      //配列のデータ型はなんだろう。。int[]
      int[] scores = [howManyYouGot(player1),howManyYouGot(player2),howManyYouGot(player3),howManyYouGot(player4)];
      // int[][] players = new int[][]{player1, player2, player3, player4};

      int maxScore = scores[0].length;
      int index = 0;

      for(int i = 0; i<scores.length; i++){
        if(maxScore < scores.length; i++){
          maxScore = scores[i].length;
          index = i;
        }
      }
      return "Winner: Player" + index+1 + "won" + maxScore * 4 + "by rolling" + "[" + scores[index] + "]";
      }


      public static int[] howManyYouGot(arr){
        HashMap<Integer, Integer> stack = new HashMap<>();
        stack.push(arr[0]);
        for(int i = 1; i<arr.length(); i++){
          //もし、次のスコアが前より小さかったら、stack内全部消す。
          if(stack[stack.length - 1] > arr[i]){//なぜstack[0]ではないのかがわからない。。
          int max = 0;
          while(stack.pop() !== undefined);
          }
          stack.push(arr[i]);
        }
        return stack;
      }


}


```

```javascript
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNodeInSorted(head, data) {
  // 関数を完成させてください
  let node = new SinglyLinkedListNode(data);
  let currentNode = head;
  //先頭の値よりデータが小さい場合
  if (currentNode.data > data) {
    node.next = currentNode;
    return node;
  }
  //捜査して現在のnodeと次のnodeとデータを比較していきます。
  while (currentNode.next !== null) {
    if ((currentNode.data <= data) & (data <= currentNode.next.data)) {
      let tempNode = currentNode.next;
      currentNode.next = node;
      node.next = tempNode;
      return head;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = node;

  return head;
}
```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> insertNodeInSorted(SinglyLinkedListNode<Integer> head, int data){
        // 関数を完成させてください
        SinglyLinkedListNode<Integer> currentNode = head;
        SinglyLinkedListNode<Integer> newData = new SinglyLinkedListNode(data);
        while(currentNode != null){
          if(currentNode.data <= data && currentNode.next.data >= data){
          newData.next = currentNode.next;
          currentNode.next = newData;
          return head;
          }
          //先頭に挿入される場合
          else if(currentNode.data >= newData.data){
              newData.next = currentNode;
              return head;
          }
          else currentNode = currentNode.next;
        }
        //whileから出たあとは、もう全部回ったってことだから、dataが全部のNodeの値の中で一番大きかった場合、をここに書けばいい。
        currentNode.next = newData;
        newData.next = null;
        return head;
    }
}

```

-

```java
//insertAtPosition(singlyLinkedList([2,10,34,45,67,356]),2,5) --> 2➡10➡34➡5➡45➡67➡356➡END
//(arr[], 挿入する位置, 挿入する数字)
//前後の pointer の先を変更
//新しくdataを作る必要がある。
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> insertAtPosition(SinglyLinkedListNode<Integer> head, int position, int data){
        // 関数を完成させてください
    }
}

```

```javascript
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtPosition(head, position, data) {
  let currentNode = head;
  //positionまでループさせる。
  for (let i = 0; i < position; i++) {
    if (currentNode.next === null) return head;
    currentNode = currentNode.next;
  }
  //ここから以下のcurrentNodeは、position前までのNodeたち。

  // 新しいデータをnewDataに保持
  let newData = new SinglyLinkedListNode(data);
  // pointerの指定
  newData.next = currentNode.next; //変数に格納ではなく、アドレス指定。
  // currentNodeのポインターをnewDataに指定
  currentNode.next = newData;

  return head;
}
```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> insertAtPosition(SinglyLinkedListNode<Integer> head, int position, int data){
        // 関数を完成させてください
        SinglyLinkedListNode<Integer> currentNode = head;
        for(int i = 0; i < position; i++){
          if(currentNode.next == null) return head;
          currentNode = currentNode.next;
        }
        SinglyLinkedListNode<Integer> newData = new SinglyLinkedListNode(data);
        newData.next = currentNode.next;//アドレス指定//ここがわかってない。
        currentNode.next = newData;
        return head;
    }
}


```

- 最小値の検索

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static int findMinNum(SinglyLinkedListNode<Integer> head){
        // 関数を完成させてください
        SinglyLinkedListNode<Integer> currentNode = head;
        int minValue = Integer.MAX_VALUE;
        int index = 0;
        int count = 0;
        while (currentNode != null) {
            //ループで回ってきたcurrentNodeの方が小さい
            //下記はつまり、currentNode.data >= currentNode
            if (minValue >= currentNode.data) {
                minValue = currentNode.data;
                //ここの書き方が肝だな
                index = count;
            }
            //while外で行われる処理。elseではない。
            currentNode = currentNode.next;
            count++;
        }
        return index;
    }
    }



//findMinNum(singlyLinkedList([1,2,3,4,-1,2])) --> 4
```

- 末尾を削除

```java
      class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> deleteTail(SinglyLinkedListNode<Integer> head){
        SinglyLinkedListNode<Integer> iterator = head;
        // 末尾の一つ前まで進めます。
        while (iterator.next.next != null) {
            iterator = iterator.next;
        }
        // 末尾を指している参照を外します。
        iterator.next = null;
        return head;
    }
}
```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> deleteTail(SinglyLinkedListNode<Integer> head){
        // 関数を完成させてください
       SinglyLinkedListNode<Integer> currentNode = head;
       while(currentNode.next.next != null){
           //末尾に直接行くのではなく、末尾の前のnodeのnextが欲しい。
           currentNode = currentNode.next;
       }
       currentNode.next = null;
       return head;
    }
}

```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> deleteTail(SinglyLinkedListNode<Integer> head){
        // 関数を完成させてください
    }
}


class Solution{
    public static SinglyLinkedListNode<Integer> insertAtTail(SinglyLinkedListNode<Integer> head, int data){
        // 変数iteratorにheadを入れます。
        SinglyLinkedListNode<Integer> iterator = head;
        // nextがnullになるまでiteratorをiterator.nextに進めます。
        while (iterator.next != null) {
            iterator = iterator.next;
        }
        // 末尾まできたらnextに新しいノードを指定します。
        iterator.next = new SinglyLinkedListNode<Integer>(data);
        return head;
    }
}

//insertAtTail(singlyLinkedList([3,3,2,10,34,45,67,356]),367) --> 3➡3➡2➡10➡34➡45➡67➡356➡367➡END
```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> insertAtTail(SinglyLinkedListNode<Integer> head, int data){
        // 関数を完成させてください
        SinglyLinkedListNode<Integer> currentNode = head;
        while(currentNode.next != null){
          currentNode = currentNode.next;
        }
        currentNode.next = new SinglyLinkedListNode<Integer>(data);
        return head;
    }
}


```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> insertAtHead(SinglyLinkedListNode<Integer> head, int data){
        // 関数を完成させてください
        SinglyLinkedListNode<Integer> node =new SinglyLinkedListNode<Integer>(data);
        node.next = head;
        return node;
    }
}

```

値の個数= その配列に何個その数があるか。

```javascript
function intersectionOfArraysRepeats(intList1, intList2) {
  // 関数を完成させてください
  let hashMap = {};
  for (let i = 0; i < intList1.length; i++) {
    hashMap[intList1[i]] = countNum(intList[i]); //
  }

  let array = [];
  //1つだけだったら、
  //2個以上あったら、

  return array;

  // let array = [];
  // //配列が短い方の配列に合わせてループすればいい。
  //    if(intList1.length<= intList2.length){
  //       for(let j = 0; j< intList1.length; j++){
  //         if(hashMap[intList2[i]] !== undefined){
  //           array.push(intList2[i]);
  //     }
  //     }
  //    }

  //     else if(intList1.length >= intList2.length){
  //      for(let i = 0; i< intList2.length; i++){
  //       if(hashMap[intList2[i]] !== undefined){
  //         array.push(intList2[i]);
  //     }
  //     }
  //     }

  //     return array;
}

//([3,2,2,2,1,10,10],[3,2,10,10,10]) --> [3,2,10,10,10,10]になっている。//[3,2,10,10]
```

```javascript
function intersectionOfArraysRepeats(intList1, intList2) {
  //ここから書きましょう
  let hasmap = {};
  for (let i = 0; i < intList2.length; i++) {
    if (hasmap[intList2[i]] === undefined) hasmap[intList2[i]] = 1;
    //[1:要素,1:要素,1:要素,1:要素,...]
    else hasmap[intList2[i]]++;
  }

  let arrayOfDuplicate = [];

  for (let i = 0; i < intList1.length; i++) {
    if (hasmap[intList1[i]] === undefined) hasmap[intList1[i]] = -1;
    //[-1:要素,-1:要素,-1:要素,-1:要素,]
    else if (hasmap[intList1[i]] > 0) {
      arrayOfDuplicate.push(intList1[i]);
      hasmap[intList1[i]]--;
    }
  }

  return arrayOfDuplicate.sort(function (a, b) {
    return a - b;
  });
}
```

```javascript
function rotateByTimes(ids, n) {
  // 関数を完成させてください
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] + n > ids.length) {
      indexMoved = ids[i] + n - ids.length;
      //indexMoved = i
      array.push(indexMoved); //[2,3,4,1] indexを移動させた
      //このindexの数字を出力したい。
    }
    for (let j = 0; j < ids.length; j++) {
      ids[indexMoved];
    }
  }
  array.sort(); //[1,2,3,4]
}

function changedRooms(index) {}

//rotateByTimes([10,12,3,4,5],3) --> [3,4,5,10,12]
```

```javascript
function maxAscilString(stringList) {
  // 関数を完成させてください
  return biggerSum(charCodeSum(stringList));
}

//ループさせて、文字列の合計を出す.
let count = 0;
let array = [];
function charCodeSum(stringList) {
  for (let i = 0; i < stringList.length; i++) {
    //要素を全て小文字にする
    stringListL = stringList[i].toLowerCase(); //ok
    //countがリフレッシュされないで、次の配列にも使われてしまっている。のを防ぐため。ここで宣言
    let count = 0;
    for (let j = 0; j < stringList[i].length; j++) {
      //要素の中の一つ一つを文字コードに変換して足して格納している。
      count = count + stringListL.charCodeAt(j);
      array.push(count);
    }
  }
  return array; //[97,98];
}

function biggerSum(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[maxValue] < array[i]) return (maxValue = i);
  }
  return maxValue;
}
//配列の最初の要素を maxValue、インデックスを maxIndex として設定し、最大値を探すアルゴリズムを実装しましょう。

//maxAscilString(["HeLlo","HelLo","bridge"]) --> 2
```

```javascript
function generateAlphabet(firstAlphabet, secondAlphabet) {
  // 関数を完成させてください(乗車駅、降車駅)
  let firstAlphabetL = firstAlphabet.toLowerCase();
  let secondAlphabetL = secondAlphabet.toLowerCase();

  //乗車と降車が同じだった場合

  //a == 97に近い方を調べる。
  //駅の範囲を調べる。マイナスにならないように、大きい文字コード - 小さい文字コードにする。
  function stationsLength(first, second) {
    if (first.charCodeAt(0) - 97 < second.charCodeAt(0) - 97) {
      //firstがAに近い
      return second.charCodeAt(0) - first.charCodeAt(0);
    } else {
      return first.charCodeAt(0) - second.charCodeAt(0);
    }
  }

  function whichIsSmallChar(first, second) {
    if (first > second) {
      return first;
    } else {
      second;
    }
  }

  //let i = 0; i< ここに関数で範囲指定できるかな。
  //for文　関数　範囲指定
  let stations = [];
  //ここを関数ではなくて、let = hoge < foo ? true:false;
  for (
    let i = whichIsSmallChar(
      firstAlphabetL.charCodeAt(0),
      secondAlphabetL.charCodeAt(0)
    );
    i < stationsLength(firstAlphabetL, secondAlphabetL);
    i++
  ) {
    stations.push(String.fromCharCode(i));
  }
  return stations;
}
console.log(whichIsSmallChar("a", "b"));
```

```javascript
function validEmailList(emailList) {
  let arr = [];
  for (let address of emailList) {
    if (noSpace(address) && checkAtSign(address) && checkDot(address)) {
      arr.push(address);
    }
  }
  return arr;
}

function noSpace(address) {
  for (let i = 0; i < address.length; i++) {
    if (address[i] === " ") {
      return false;
    }
  }
  return true;
}

function checkAtSign(address) {
  let cnt = 0;
  for (let i = 0; i < address.length; i++) {
    if (address[i] === "@") {
      cnt++;
    }
  }
  if (cnt === 1) {
    return true;
  }
  return false;
}

function checkDot(address) {
  let indexOfAtSign = address.indexOf("@");
  for (let i = indexOfAtSign; i < address.length; i++) {
    if (address[i] === ".") {
      return true;
    }
  }
  return false;
}
```

```javascript
// それぞれの関数が絡み合って複雑（つまりデバッグしづらい）
// なので、isEmailValidというemailを受け取ってそれが条件に合うかチェックする関数を定義して、
// for...
//    if isEmailValid(email)
//       array.push(email)
//「1つ1つの関数をまずはデバッグして、それを組み合わせて本体の処理に適用する」ことを意識してみてください！
////////////////////////////////////////////////////////////////////////////////////

//if else if else ifで続けていく。
function validEmailList(emailList) {
  let array = [];
  for (let i = 0; i <= emailList.length; i++) {
    if (isEmailValid(email)) array.push(email);
  }
  return array;
}

function isEmailValid(email) {
  //スペースが無いか
  if (email.indexOf(" ") === -1) return true;
  //@が一つだけか
  let count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      count = count + 1;
    }
  }
  if (count == 1) return true;
  //@の後に'.'があるか。
  atMarkIndex = email.indexOf("@");
  if (email.substring(atMarkIndex, email.length - 1).indexOf(".") !== -1)
    return true;
}
/////////////////////////////////////////////////////////////////////////
//@が一つだけか
function hasOneAtMark(email) {
  let count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      count = count + 1;
    }
  }
  if (count == 1) return isAtMarkAfterDot(email);
}

//@の後に,があるか
//このケースがあるcc.c@aaa.com
function isAtMarkAfterDot(email) {
  atMarkIndex = email.indexOf("@");
  if (email.substring(atMarkIndex, email.length - 1).indexOf(".") !== -1) {
    list.push(email);
  }
}
```

```javascript
// リスト内のyを検索し、存在すればtrue、しなければfalseを返します。
function existsWithinList(listL, dataY) {
  let hashMap = {};

  // キーと値{i:i}によって、リスト内の全ての要素をキャッシュします。
  for (let i = 0; i < listL.length; i++) {
    // キーと値のペア
    hashMap[listL[i]] = listL[i]; //hashMap[[3:0]] = 3[0]
  }

  // キーが存在するかどうかを返します。キーが存在しない場合はundefinedが返されます。!==は===に似たもので、値と型の両方をチェックします。null == undefinedはtrueを返し、null === undefinedはfalseを返します。
  return hashMap[dataY] !== undefined ? true : false;
}

// リストを検索します。
let sampleList = [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2];
console.log(existsWithinList(sampleList, 23));
console.log(existsWithinList(sampleList, -2));
console.log(existsWithinList(sampleList, 100));

// TODO: リストと値を受け取り、リスト内にある値のインデックスを返す、searchListという関数をハッシュマップを使って作成してください。値がリスト内に複数ある場合は先に出てきたインデックスを返してください。もし発見されない場合は-1を返してください。
function searchList(listL, dataY) {
  let hashMap = {};
  for (let i = 0; i <= ListL.length; i++) {
    hashMap[listL[i]] = listL[i]; //hashMapに格納している。
  }
  return hashMap[dataY] !== undefined ? true : false;
}
let sampleList = [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2];
console.log(searchList(sampleList, 3));
console.log(searchList(sampleList, 10));
console.log(searchList(sampleList, 11));
```

```javascript
function missingItems(listA,listB){
    // 関数を完成させてください
    //兄の注文リスト listA と Whalum の注文リスト listB
    //弟のリストでハッシュマップを作成し、兄のリストの要素が存在するかチェックします。

    //配列が二つあるから、どちらもforやると、途中のまま調べてしまうから、そのまま配列を表示するか、どちらかのforを終わらしてから出ないときついかもしれない。。
    let hashmap = {};
    //bを入れる
    for(let i = 0; i<=listB.length; i++){
        // if(hashmap[listB[i]] === undefined) hashmap[listB[i]] = 1;
        // else hashmap[listB[i]] = hashmap[listB[i]] + 1;
        for(let j = 0; j<=listA.length; j++){
            if(hashmap[listB[i]])
        }
    }

    //
}
```

```javascript
function missingItems(listA, listB) {
  let hashMapB = {};
  for (let i = 0; i <= listB.length; i++) {
    hashMapB[listB[i]] == listB[i];
  }

  let hashMapA = {};
  for (let j = 0; j <= listA.length; j++) {
    hashMapA[listA[j]] == listA[j];
  }

  let newArray = [];
  if (hashMap[listA[j]] === undefined) {
    newArray.push(j);
  }

  return newArray;
}
//keyと値が別々で出力されているのかもしれない。
```

```javascript
function winnerBlackjack(playerCards, houseCards) {
  // 関数を完成させてください
  if (
    helper(playerCards) > 21 ||
    helper(playerCards) == helper(houseCards) ||
    helper(playerCards) <= helper(houseCards) <= 22
  ) {
    return false;
  } else {
    return true;
  }
  //21を越えたら敗北,プレイヤーの合計<=ディーラー22未満 = false,引き分け = false
}

let count = 0;
function helper(cards) {
  let array = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  for (let i = 0; i <= cards.length; i++) {
    for (let j = 0; j <= 2; j++) {
      if (array.indexOf(cards[i][j]) == -1) {
        count = count + 0;
      } else if (array.indexOf(cards[i][j] == "A")) {
        count = count + 1;
      } else if (array.indexOf(cards[i][j] == "J")) {
        count = count + 11;
      } else if (array.indexOf(cards[i][j] == "Q")) {
        count = count + 12;
      } else if (array.indexOf(cards[i][j] == "K")) {
        count = count + 13;
      } else {
        count = count + array.indexOf(cards[i][j]) + 1;
      }
    }
  }
  //  console.log(count);//0,0
  //   return count;
}

//winnerBlackjack(["♥2","♣A","♣8","♥7","♥3"],["♥2","♣A","♣8","♥7","♥3"]) --> false
```

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# type error

- 「@」を 1 つのみ含んでいること
- 「@」の後に「.」があること

```javascript
function validEmailList(emailList) {
  let validEmail = "";
  for (let i = 0; i < emailList.length; i++) {
    if (isEmailValid(emailList) == true) {
      validEmail = validEmail + i;
    }
  }
  return validEmail;

  for (let i = 0; i <= emailList.length; i++) {
    if (isEmailValid(emailList[i]) == true) {
      array.push(i);
    }
  }
  return array;
}

//.push,[]を使う
function validEmailList(emailList) {
  box = "";
  for (let i = 0; i <= emailList.length; i++) {
    box = box + emailList[i];
    array = [];
    if (
      emailList[i].includes(" ") &&
      emailList[i].match(/[@]/g) == Array["@"] &&
      emailList[i].indexOf("@") < emailList[i].indexOf(".") === 0
    ) {
      array.push[emailList[i]];
    }
  }
  return box;
}
///////////////
// let array = [];
//   for (let i = 0; i < emailList.length ; i++){
//         array.push(emailList[i]);
//     }
//     return array;//ccc@aaa.com
// }
///////////////
//validEmailList(["ccc@aaa.com","c@cc@aaa.com","cc c@aaa.com","cc.c@aaa.com"]) --> [ccc@aaa.com,cc.c@aaa.com
```

- ??????????????

```javascript
function printArray(arr) {
  return arr[0]; //null
  console.log(arr[0]); //The race is starting.
}

let stringArr = [
  "The race is starting.",
  "A dog just escaped",
  "The company ran out of business",
];
printArray(stringArr);
```

/////////////////////////////////////////////////////////////////////////////////

```javascript
//let list = [];
function validEmailList(emailList) {
  list = [];
  for (let i = 0; i < emailList.length; i++) {
    isIncludeSpace(emailList[i]);
  }
  return list;
}

// ' 'が入っていないか
function isIncludeSpace(mail) {
  if (mail.indexOf(" ") == -1) return isOneMark(mail);
}

// @が１つだけかどうか
function isOneMark(mail) {
  let count = 0;
  let position = mail.indexOf("@");
  while (position !== -1) {
    count++;
    position = mail.indexOf("@", position + 1);
  }
  if (count == 1) return isDotBehindMark(mail);
}

// ＠の後に.があるかどうか
function isDotBehindMark(mail) {
  let startPosition = mail.indexOf("@");
  if (mail.indexOf(".", startPosition) != -1) list.push(mail);
}
```

```javascript
function validEmailList(emailList) {
  array = [];
  for (let i = 0; i < emailList.length; i++) {
    if (
      emailList[i].includes(" ") &&
      emailList[i].match(/[@]/g) == Array["@"] &&
      emailList[i].indexOf("@") < emailList[i].indexOf(".") === 0
    ) {
      array.push(emailList[i]);
    }
  }
  return array; //空の[]が返ってくる。
}

////////////////////////////////////////////////////////////
//関数をループさせる書き方は初めて書いた。場合によっては計算量を何倍も削減できるから便利な書き方だなと思った。DRYにもできるし。
///////////////////////////
function validEmailList(emailList) {
  list = [];
  for (let i = 0; i < emailList.length; i++) {
    isNoSpace(emailList[i]);
  }
  return list;
}

//スペース無いか
//値が渡せている
function isNoSpace(email) {
  if (email.indexOf(" ") === -1) {
    //console.log(email);
    return isAtMarkAfterDot(email); //なぜここreturnして、最後の配列はreturnしないのか??->どこの関数にも飛ばす必要がないから。最後は。
  }
}

// function hasOneAtMark(email){
//   if(email.match(/[@]/g) == Array["@"]){
//       //console.log(email);
//     return isAtMarkAfterDot(email);
//   }
// }
//@が一つだけか//indexofでカウントしていく。
function hasOneAtMark(email) {
  let count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      count = count + 1;
    }
  }
  if (count == 1) return isAtMarkAfterDot(email);
}
//@の後に,があるか
//Not okay
//このケースがあるcc.c@aaa.com
function isAtMarkAfterDot(email) {
  if (email.indexOf("@") < email.indexOf(".")) {
    console.log(email);
    list.push(email); //ここでlistと書いても、scopeで見つけてくれるのかな?
  }
}
////////////////////////////////////////////////////////////////////////
```

```javascript
function validEmailList(emailList) {
  list = [];
  for (let i = 0; i < emailList.length; i++) {
    isNoSpace(emailList[i]);
  }
  return list;
}
//スペース無いか
//OK
function isNoSpace(email) {
  if (email.indexOf(" ") === -1) {
    return hasOneAtMark(email);
  }
}
//@が一つだけか
function hasOneAtMark(email) {
  let count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      count = count + 1;
    }
  }
  if (count == 1) return isAtMarkAfterDot(email);
  console.log(email);S
}
//@の後に,があるか
//このケースがあるcc.c@aaa.com
function isAtMarkAfterDot(email) {
  //   if(email.indexOf("@") < email.indexOf(".")){
  //     console.log(email + '/');
  //     list.push(email); //ここでlistと書いても、scopeで見つけてくれるのかな?
  // }

atMarkIndex = email.indexOf("@");
// if(atMarkIndex< email.substring(atMarkIndex, email.length-1).indexOf('.')){
//   list.push(email);
// }
let indexAfterAtMark = email.substring(atMarkIndex, email.length - 1);
if(indexAfterAtMa)
}
```

```javascript
function intersectionOfArraysRepeats(intList1, intList2) {
  // 関数を完成させてください
  let hashmap = {};
  let array = [];

  for (let i = 0; i < intList1.length; i++) {
    if (hashmap[intList1[i]] == undefined) hashmap[intList1[i]] = 1;
    else hashmap[intList1[i]]++;
  }

  for (let i = 0; i < intList2.length; i++) {
    if (hashmap[intList2[i]] > 0) {
      array.push(intList2[i]);
      hashmap[intList2[i]]--;
    }
  }
  //配列の小さい順に並び替え
  return array.sort(function (a, b) {
    return a - b;
  });
}
```

```java
import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution{
    public static int[] intersectionOfArraysRepeats(int[] intList1, int[] intList2){
        // 関数を完成させてください
    HashMap<Integer, Integer> hashmap = new HashMap<>();
    ArrayList<Integer> array = new ArrayList<Integer>();

    for(int i = 0; i<intList.length; i++){
      if(hashmap.get(intList[i]) == null)
      hashmap.put(intList[i], 1);
      else hashmap.replace(intList[i], hashmap.get(intList[i]++));
    }

    for(int i= 0; i<intList2.length; i++){
      if(hashmap.get(intList2[i])>0){
        array.add(intList2[i]);
        hashmap.replace(intList2[i], hashmap.get(intList[i]-1));
      }
    }
        int[] fixedArr = new int[array.size()];
        //動的配列から、固定配列へ直す
        for(int i = 0; i<array.size(); i++){
            fixedArr[i] = array.get(i);
        }
    return fixedArr;


    }
}
```
