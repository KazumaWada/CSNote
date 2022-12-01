//document.createElement()
//document.getElementById
//classList.add
//append
//cloneNode
//.innerHTML
//.src
function motivationalSpeechWallpaper(wallpaperObject){
    let innerFlex = document.createElement("div");
    innerFlex.classList.add("d-flex", "col-12");
    let quoteDiv = document.createElement("div");
    quoteDiv.classList.add("col-md-8");
    innerFlex.append(quoteDiv);
    let characterPosition = document.createElement("div");
    characterPosition.classList.add(wallpaperObject.vertical, wallpaperObject.horizontal);
    quoteDiv.append(characterPosition);
    // let avatar = document.createElement("img");
    // avatar.classList.add("avatar");
    // avatar.src = employeeObject.avatarUrl;
    let backgroundIMG = document.createElement("img");
    //ただのclass.まだどんなものなのかは決めてない。
    backgroundIMG.classList.add("backgroung-img")
    backgroundIMG.src = wallpaperObject.url;
    let quoteLine = document.createElement("h4");
    quoteLine.classList.add(wallpaperObject.quote);

    return innerFlex;

}

class wallppaper{
    constructor(quote,colourCode,url,vertical,horizontal,domObj){
        this.quote = quote;
        this.colourCode = colourCode;
        this.url = url;
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.domObj = domObj;
    }
}
let quote1 = new motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
 "2c3e50", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg","center", "center", domObj);
let quote2 = new motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
"2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);
let quote3 = new motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
"ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);






// ここから書いてください。

// 関数呼び出しの例
// let domObj = document.getElementById("target");
//document.createElement()
//document.getElementById
//classList.add
//append
//cloneNode
//.innerHTML
//.src
function motivationalSpeechWallpaper(wallpaperObject){
    let innerFlex = document.createElement("div");
    innerFlex.classList.add("d-flex", "col-12");
    let quoteDiv = document.createElement("div");
    quoteDiv.classList.add("col-md-8");
    innerFlex.append(quoteDiv);
    let characterPosition = document.createElement("div");
    characterPosition.classList.add(wallpaperObject.vertical, wallpaperObject.horizontal);
    quoteDiv.append(characterPosition);
    // let avatar = document.createElement("img");
    // avatar.classList.add("avatar");
    // avatar.src = employeeObject.avatarUrl;
    let backgroundIMG = document.createElement("img");
    //ただのclass.まだどんなものなのかは決めてない。
    backgroundIMG.classList.add("backgroung-img")
    backgroundIMG.src = wallpaperObject.url;
    let quoteLine = document.createElement("h4");
    quoteLine.classList.add(wallpaperObject.quote);

    return innerFlex;

}

const walpaperDiv = document.getElementById("wallpapers");

class wallppaper{
    constructor(quote,colourCode,url,vertical,horizontal,domObj){
        this.quote = quote;
        this.colourCode = colourCode;
        this.url = url;
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.domObj = domObj;
    }
}
let quote1 = new motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
 "2c3e50", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg","center", "center", domObj);
let quote2 = new motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
"2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);
let quote3 = new motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
"ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);










/////////////////////////////////////////参考///////////////////////////////////////////////////////
/////////////////////////////////////////参考///////////////////////////////////////////////////////
/////////////////////////////////////////参考///////////////////////////////////////////////////////
/////////////////////////////////////////参考///////////////////////////////////////////////////////
/////////////////////////////////////////参考///////////////////////////////////////////////////////

//html
<div id="profiles" class="py-5 bg-dark d-flex flex-column justify-content-center align-items-center">
</div>
//javascript
// オブジェクトを入力として受け取ります。
function createEmployeeCard(employeeObject){
    //divを作成
    let innerFlex = document.createElement("div");
    //divへのクラス追加
    innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

    //divを作成
    let cardDiv = document.createElement("div");
    //divの位置を定義
    innerFlex.append(cardDiv);
    //divへのclass追加
    cardDiv.classList.add("d-flex", "col-12", "profile-card");

    // ユーザーの入力を使用します。
    //*** 左半分 ***
    //divを作成
    let leftInfo = document.createElement("div");
    //divへのclass追加
    leftInfo.classList.add("col-8", "py-3");
    //divを作成
    let div1 = document.createElement("div");
    //divへのclass追加
    div1.classList.add("py-2")
    //clone
    let div2 = div1.cloneNode(true);
    //clone
    let div3 = div1.cloneNode(true);
    //h4を作成
    let nameTitle = document.createElement("h4");
    // getFullName()メソッド
    nameTitle.innerHTML = employeeObject.getFullName();
    //pを作る
    let employeeJob = document.createElement("p")
    let employeeSkill = document.createElement("p")
    let employeeCountry = document.createElement("p");

    // オブジェクト employeeObject.job
    //上で定義したemployeeJob(== <p>)の内部に入れる内容を定義
    employeeJob.innerHTML = "Job: " + "<br>"  + employeeObject.job;
    //その<p>の位置を定義する。
    div1.append(employeeJob);

    employeeSkill.innerHTML = "Skill: " + "<br>"  + employeeObject.skills;
    div2.append(employeeSkill);

    employeeCountry.innerHTML = "Country : " + "<br>"  + employeeObject.country;
    div3.append(employeeCountry);

    //leftInfo.append(nameTitle);
    //divなどの位置を定義する。
    leftInfo.append(div1);
    div1.append(nameTitle)
    leftInfo.append(div2);
    leftInfo.append(div3);
    //*** 左半分終了 ***

    //*** 右半分 ***
    let rightInfo = document.createElement("div");
    let div4 = document.createElement("div");
    rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");
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
class Employee{
    constructor(firstName, lastName, job, skills, country, avatarUrl){
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = skills;
        this.country = country;
        this.avatarUrl = avatarUrl;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

let employee1 = new Employee("Kaiden" ,"Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
let employee2 = new Employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
let employee3 = new Employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

//一番上のfunctionを実行する&&引数は、オブジェクトから作られたインスタンス
profileDiv.append(createEmployeeCard(employee1));
profileDiv.append(createEmployeeCard(employee2));
profileDiv.append(createEmployeeCard(employee3));