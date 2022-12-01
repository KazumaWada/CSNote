# 配列だと、arr.length()ではなく、arr.length になる。なぜだろう。

# 動的配列を使うときは、コード内に import java.util.ArrayList;を記述する

# int[] arr = new int[6];

```java
class Main{
    public static void printIntArray(int intArr[]){
        // for 文とインデックス演算子を使うことで、固定配列の各要素にアクセスすることができます
        // Java の固定配列は length というプロパティを持っています。length で配列のサイズを手に入れます
        for(int i = 0; i < intArr.length; i++){
            System.out.print(intArr[i] + " ");
        }
        System.out.println();
    }
    public static void main(String[] args){
        // [] 演算子はデータが配列であることをコンパイラに伝えます
        // データ型[] 変数名 = new データ型[]; で配列を作成することができます

        // 初期値が設定されない場合、すべての要素はデフォルトで初期化されます。整数の場合は 0 です
        // 6 つの要素を保持する arr 整数配列を宣言します。すべての要素が 0 になります
        // [] 中に任意のサイズの配列が書き込まれます
        int[] arr = new int[6];
        printIntArray(arr);//000000

        // 各データの値を書き換えます
        for(int i = 0; i < arr.length; i++){
            arr[i] = i;
        }
        printIntArray(arr);//012345

        // {} を使って、初期データの個数を代入します
        // 20,13,-12,2,5 の 5 つの整数を固定配列の初期値として設定します。サイズは{}の中にある値の個数に設定されます
        int[] arr1 = new int[]{20,13,-12,2,5};
        printIntArray(arr1);//20 13 -12 2 5

        // [] 演算子で指定の要素にアクセスすることができます。
        arr1[3] = 34;
        arr1[1] = 40;
        printIntArray(arr1);//20,40,-12,34,2,5
    }
}
```

- int 以外の list
- 配列内は、基本的には同じデータ型を格納することがベストプラクティス
- 関数のオーバーロード: 同じ関数名が複数あっても、データ型が違えばエラーにならない。

```java
class Main{
    // 関数のオーバーロードを使います。
    // 関数のオーバーロードでは、同じ関数があっても異なるデータ型が必要な場合、名前がぶつかり合うことなく関数を使うことができます。
    // コンパイラは、入力データ型に基づいて適切な関数を検索します。

    public static void printArray(String arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void printArray(double arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void printArray(char arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        double doubleArr[] = {34.5,34.4,23,54.3};
        char charArr[] = {'h','e','l','l','o'};
        String stringArr[] = {"The race is starting.", "A dog just escaped", "The company ran out of business"};

        printArray(doubleArr);//2個目の関数
        printArray(charArr);//3個目の関数
        printArray(stringArr);//1個目の関数
    }
}
```

- for の初めにデータ型を宣言している。それは void だから?それとも関数の出力の型が定義されていても for の先頭には型を宣言する必要があるのかな。

```java
class Main{
    public static void main(String[] args){
        String str = "Hello World!";
        for(int i = 0; i < str.length(); i++){
            System.out.println(str.charAt(i));
        }
    }
}
```

- 配列サイズは、一度決めると後から変更ができない。削除、追加ができず、値を置き換えることしかできない。
- public static void って main 以外にも使えるんだ。。

- int 型の配列

```java
class Main{
    public static void printIntArray(int intArr[]){
        // for 文とインデックス演算子を使うことで、固定配列の各要素にアクセスすることができます
        // Java の固定配列は length というプロパティを持っています。length で配列のサイズを手に入れます
        for(int i = 0; i < intArr.length; i++){
            System.out.print(intArr[i] + " ");
        }
        System.out.println();
    }

    //int[] arr = new int[初期値の設定]
    //int[] arr = new int[]{初期データの設定}//[]は自動的に初期データのlengthが入る。
    public static void main(String[] args){
        int[] arr = new int[6];
        printIntArray(arr);//000000//初期値が設定されないと、0になる。JSにはない機能だ。。

        for(int i = 0; i < arr.length; i++){
            arr[i] = i;
        }
        printIntArray(arr);//012345

        // {} を使って、初期データの個数を代入します
        // 20,13,-12,2,5 の 5 つの整数を固定配列の初期値として設定します。サイズは{}の中にある値の個数に設定されます
        int[] arr1 = new int[]{20,13,-12,2,5};
        printIntArray(arr1);//20 13 -12 2 5

        arr1[3] = 34;
        arr1[1] = 40;
        printIntArray(arr1);//20 40 -12 34 5
    }
}
```

- str,double,char 型の配列
- int[] arr = new int[6];← この書き方は int 独特のものなの???だって new 書かれて無いじゃん。。[]も.

```java
class Main{
    public static void printArray(String arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // 関数のオーバーロードを使います。
    // 関数のオーバーロードでは、同じ関数があっても異なるデータ型が必要な場合、名前がぶつかり合うことなく関数を使うことができます。
    // コンパイラは、入力データ型に基づいて適切な関数を検索します。
    public static void printArray(double arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }

    public static void printArray(char arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args){
        double doubleArr[] = {34.5,34.4,23,54.3};
        char charArr[] = {'h','e','l','l','o'};
        String stringArr[] = {"The race is starting.", "A dog just escaped", "The company ran out of business"};

        printArray(doubleArr);//コンパイラ: 同じ関数二つあるわー。->仮引数がdoubleの方にこのデータ渡そ。
        printArray(charArr);
        printArray(stringArr);
    }
}
```

- 上と同じ内容を JavaScript で書くと、、

```javascript
function printIntArray(intArr) {
  for (let i = 0; i < intArr.length; i++) {
    console.log(intArr[i]);
  }
}

let arr1 = [40, 3, 22, -2, 4, 8];
printIntArray(arr1);

arr1[3] = 34;
arr1[1] = 40;
printIntArray(arr1);
```

- 配列の中にインスタンス

```java
// 車の設計書
class Car{
    public String make;
    public String model;
    public int year;

    public Car(String make, String model, int year){
        this.make = make;
        this.model = model;
        this.year = year;
    };
};

//
class Main{
    //車をプリントします。
    public static void printArray(Car[] carArray){
        for(int i = 0; i < carArray.length; i++){
            System.out.println(carArray[i].make + " - " + carArray[i].model + " Year " + carArray[i].year);
        }
    }

    public static void main(String[] args){
        // 車配列を作成し、3つのオブジェクトを追加します。
        Car[] cars = new Car[3];//[0,0,0];
        cars[0] = new Car("Toyota", "Camry", 2000);
        cars[1] = new Car("BMW", "X1 Sports", 2019);
        cars[2] = new Car("Nissan", "GT-R", 2020);
        System.out.println("First model: " + cars[0].make + "-" + cars[0].model + " Year " + cars[0].year);

        // 関数を使ってすべての車を出力します。
        printArray(cars);
    }
}
```

- void means the method cannot return any value.だから、void の関数内で return を使えない。

```java
class Card{
    public String suit;
    public String value;
    public int intValue;
    public Card(String suit, String value, int intValue){
        this.suit = suit;
        this.value = value;
        this.intValue = intValue;
    }
}

class MyClass{
   public static void printCardArray(Card[] cards){
        for(int i = 0; i<cards.length; i++){
          System.out.println(cards[i].suit + cards[i].value +"("+ cards[i].intValue+ ")");
        };
    }

    public static void main(String[] args){


        Card[] cards = new Card[4];
        cards[0] = new Card("♣", "A", 1);
        cards[1] = new Card("♦", "K", 13);
        cards[2] = new Card("♥", "Q", 12);
        cards[3] = new Card("♠", "J", 11);
        printCardArray(cards);
    }
}

//出力
//♣A(1)
//♦K(13)
//♥Q(12)
//♠J(11)

```

# dinamic list(動的配列) ArrayList<Integer>

# 動的配列を使うときは、コード内に import java.util.ArrayList;を記述する。

## add

- Java では、ArrayList と呼ばれている
  list は、一度作った配列のサイズを変更することができない。サイズを変更したい場合、また新しく作り直す必要があるが、動的配列は、配列に要素の追加や削除を可能にしてくれるリストデータ構造。

- 動的配列は，Java では ArrayList と呼ばれています。宣言は、ArrayList<データ型>()のように使います。
- Integer は int の class バージョン。int 以外の型にも、それぞれ class バージョンがある。
- 動的配列は、サイズを宣言する必要がない。
- 配列.size()でサイズが取れる。
- 動的配列: ArrayList<Integer>~
- 固定配列: int[]~

```java
import java.util.ArrayList;// ArrayListライブラリを読み込みます。
import java.util.List;

class Main{
    // 動的配列を取得し，その内容を出力します。
    public static void printArray(ArrayList<Integer> intArr){
        //size()メソッドによって、動的配列のサイズを取得します。
        for (int i = 0; i < intArr.size(); ++i) {
            // getメソッドによって、n番目のデータ値を取得することができます。
            System.out.print(intArr.get(i) + " ");
        }
        System.out.println();
    }

    public static void printFixedIntArray(int[] arr){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        // {} を使って、{6}, {8}などにArrayListのサイズを初期化することができません。そのため、一個ずつを追加する必要があります。
        ArrayList<Integer> dArr = new ArrayList<Integer>();

        // 動的配列にいくつかの値を追加します
        // addメソッドは、配列の最後にデータを追加して動的配列の状態を変更するために使用されます。
        // 新しい配列を作る必要も、配列のサイズを気にする必要もありません。動的配列がすべてを自動的に管理します。
        dArr.add(2);
        dArr.add(3);
        dArr.add(4);
        dArr.add(1);
        dArr.add(-10);
        dArr.add(200);
        printArray(dArr);

        dArr.add(10);
        dArr.add(340);
        dArr.add(543);
        dArr.add(-23);

        // dArrの新しい状態を出力します。
        printArray(dArr);

        //ArrayListを固定配列にコピーします。
        int[] fixedArray = new int[dArr.size()];

        for(int i = 0; i < dArr.size(); i++){
            fixedArray[i] = dArr.get(i);
        }

        printFixedIntArray(fixedArray);


        //一気にまとめて要素を追加したい場合
        //dArr.addAll(Arrays.asList(3,34,3542,10,202,34,203,-75,-56,45,0,43,1132));
    }
}
```

## 動的配列とメモリについて。

動的配列は、論理サイズ(現在使っているマスの数)と収納可能サイズがある。収納可能サイズを上回ると、自動的に 1.5~2 倍の収納可能サイズが足される。
↓
つまり、2000 収納可能サイズに 2000 の論理サイズが入っていて、新たに 10 個要素を追加したいとき、収納可能サイズは 1900 以上余ってしまう。

## 指定した index に挿入、置き換え、削除

- dArr.add(挿入したい index, 要素);
- dArr.remove(index);
- dArr.set(置き換えたい要素の index, 置き換える要素);

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

class Main{
    public static void main(String args[]){
        ArrayList<Integer> dArr = new ArrayList<Integer> ();

        System.out.println("Initial ArrayList has 2 elements");
        dArr.add(2);
        dArr.add(3);
        printArrayList(dArr);

        //配列の先頭に要素を追加します。O(n)
        System.out.println("inserting element into beginning of ArrayList");
        dArr.add(0, 3);
        printArrayList(dArr);

        //指定のインデックスに要素を追加します。O(n)
        System.out.println("inserting element into index 1");
        dArr.add(1, 34);
        printArrayList(dArr);

        //最初の要素を削除します。O(n)
        System.out.println("removing element at index 0");
        dArr.remove(0);
        printArrayList(dArr);

        //置き換え O(1)
        System.out.println("overwriting element in index 1 to 100");
        dArr.set(1, 100);
        printArrayList(dArr);

      //配列の途中に要素を追加します O(n)
        System.out.println("Adding 77 to middle of list");
        System.out.println((int)(dArr.size()));//3
        dArr.add((int)(Math.floor(dArr.size()/2)), 77);
        System.out.println((int)(dArr.size()));//4
        printArrayList(dArr);

        // 配列の最後に要素を追加します。 O(1)
        // 1つの要素をプッシュします。
        System.out.println("adding 222 to the end of the list:");
        dArr.add(222);
        printArrayList(dArr);

        // 配列の最後を削除します。O(1)
        // 1つの要素を削除します。
        System.out.println("removing 222 from the end of the list:");
        dArr.remove(dArr.size()-1);
        printArrayList(dArr);
    }

    //print関数
    public static void printArrayList(ArrayList<Integer> intArr){
        for(int i = 0; i < intArr.size(); i++){
            System.out.print(intArr.get(i));
        }
        System.out.println();
    }
}
```

- java の文字コード変換はこうやって書く

```java
System.out.println((int)stringOperand1.charAt(0));
```

- 多重ループ(Nested loops)は、Java でこのように書く
- bagOfWords[i].charAt(j)

```java
import java.util.Arrays;

class Solution{
    public static boolean winnerBlackjack(String[] playerCards, String[] houseCards){
        int playerCount = 0;
        int houseCount = 0;

        for(int i = 0; i<playerCards.length; i++){
            playerCount += countCard(playerCards[i]);
        };
        for(int i = 0; i<houseCards.length; i++){
            houseCount += countCard(houseCards[i]);
        };

        if(playerCount>21)return false;
        if(houseCount<=22 || houseCount > playerCount)return false;
        else return true;


    }

    public static int countCard(String card){
         ArrayList<String> cardArr = new ArrayList<>(Arrays.asList("A","2","3","4","5","6","7","8","9","10","J","Q","K"));
        return cardArr.indexOf(card.substring(1)) + 1;
    }
}
```

## オブジェクトの状態と配列

```java
class Animal {
    public String species;
    public double weightKg;
    public double heightM;
    public boolean predator;

    public Animal(String species, double weightKg, double heightM, boolean predator){
        this.species = species;
        this.weightKg = weightKg;
        this.heightM = heightM;
        this.predator = predator;
    }

    // 捕食者かどうかの状態を変更します
    public void domesticate(){
        this.predator = false;
    }
}

class Main{
    public static void printAnimal(Animal animal){
    System.out.println("The animal species is: " + animal.species + ". It's weight is: " + animal.weightKg + "kg and its height is: " + animal.heightM + "m. " + ((animal.predator) ? "It is a predator!" : "It is a peaceful animal."));
    }

    public static void main(String[] args){
        Animal tiger1 = new Animal("Tiger", 290, 2.6, true);

        printAnimal(tiger1);

        System.out.println("↓change the tiger predator to peaceful animal↓");

        // tiger の状態を捕食者から変え、文字列が predator から peaceful animal になるのを確認しましょう
        tiger1.domesticate();
        printAnimal(tiger1);
    }
}
```

# array of arrays(二次元配列)

##　動的 ArrayList<ArrayList<Integer>> array2d = new ArrayList<ArrayList<Integer>>(); ##　静的 int[][] num = new int[2][]//親の配列が 2 個作られる。

- 配列の中に配列を入れる。

```java
school = [
   [student1, student2, student3, student4],
   [student11, student12, student13, student14],
   [student21, student22, student23, student24],
]
school[1][2] == student13;
```

```java
import java.util.Arrays;
import java.util.ArrayList;

class Main{
    public static void print2dArray(int[][] array2d){
        for(int i = 0; i < array2d.length; i++){
            for(int j = 0; j < array2d[i].length; j++){
                System.out.println(array2d[i][j]);
            }
        }
    }

    public static void print2dArrayDynamic(ArrayList<ArrayList<Integer>> array2d){
        for(int i = 0; i < array2d.size(); i++){
            for(int j = 0; j < array2d.get(i).size(); j++){
                System.out.println(array2d.get(i).get(j));
            }
        }
    }

    public static void main(String[] args){
        // 新しい ArrayList を作成します（Java の動的配列のオブジェクト）
        // 1 次元配列を表す型は ArrayList<Integer> でした
        // 二次元配列を表す型は、「1 次元配列の配列」 なので ArrayList<ArrayList<Integer>> になります

        ArrayList<ArrayList<Integer>> array2d = new ArrayList<ArrayList<Integer>>();
        // {1,2,3}, {4,5,6}, {7,8,9}を作成します。
        // Arrays.asList(1,2,3) によって配列のデータを初期化することができます。
        array2d.add(new ArrayList<Integer>(Arrays.asList(1, 2, 3)));
        array2d.get(0).add(34);
        array2d.get(0).add(346);
        array2d.add(new ArrayList<Integer>(Arrays.asList(4, 5, 6)));
        array2d.add(new ArrayList<Integer>(Arrays.asList(7, 8, 9)));

        int[][] fixedArray2d = new int[][]{{1,2,3}, {4,5,6}, {7,8,9}};

        print2dArrayDynamic(array2d);
        System.out.println("Printing fixed array...");
        print2dArray(fixedArray2d);
    }
}
```

- school[class[student]]

```java
import java.util.ArrayList;
import java.util.Arrays;

class Student{
    private String studentld;
    private String firstName;
    private String lastName;
    public int gradeLevel;

    public Student(String studentld, String firstName, String lastName, int gradeLevel){
        this.studentld = studentld;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
    }

    public String getStudentInfo(){
        return this.studentld + ": " + this.firstName + " " + this.lastName + "(" + this.gradeLevel + "gr" + ")";
    }

}

class Classroom{
    Student[] students;
    private String courseName;
    public String teacher;

    public Classroom(Student[] students, String courseName, String teacher){
        this.students = students;
        this.courseName = courseName;
        this.teacher = teacher;
    }

    public String getClassIdentity(){
        return this.courseName + " managed by " + this.teacher;
    }

    public int getNumberOfStudents(){
        return students.length;
    }

}

class MyClass{
    ////////////////重要コード//////////////////////////////
    public static void printHonorStudents(Classroom[] classrooms){
        for(int i = 0; i < classrooms.length; i++){
            Classroom classroom = classrooms[i];

        for(int j = 0; j < classroom.students.length; j++){
            Student student = classroom.students[j];
            if (student.gradeLevel >= 10) System.out.println(student.getStudentInfo() + " from " + classroom.teacher + "'s class" );

        }
        }
    }
///////////////////////////////////////////////////////////
    public static void main(String[] args){
        Classroom classroom1 = new Classroom(new Student[]{new Student("AC-343424", "James", "Smith", 6), new Student("AC-343428", "Maria", "Garcia", 5),new Student("AC-343434", "Robert", "Johnson", 3),new Student("AC-343454","Danny", "Robertson",10)}, "Algebra II", "Emily Theodore");
        Classroom classroom2 = new Classroom(new Student[]{new Student("AC-340014","Kent", "Carter",9), new Student("AC-340024","Isaiah", "Chambers",10),new Student("AC-340018","Leta", "Ferguson",7)},"English", "Daniel Pherb");
        Classroom[] school = new Classroom[]{classroom1, classroom2};
        printHonorStudents(school);
    }

}
```

# 探索　 serach(別名 index 化)

- リスト内の探索

```java
class Main{
    public static int needleInHaystack(String[] haystack, String needle){
        // 針を見つけるために、個々の要素を見ていきます。
        // この検索は、O(n)の時間がかかります。
        for (int i = 0; i < haystack.length; ++i) {
            if(haystack[i] == needle){
                return i;
            }
        }
        return -1;
    }

    public static void printAtIndex(int index, String[] words){
        if (index >= 0 && index < words.length){
            System.out.println("Printing: ->" + words[index] + "<- at index: " + index);
        } else {
            System.out.println("Index out of scope!");
        }
    }
    public static void main(String[] args){
        // 文字列の配列を作成します。
        String[] words = new String[]{"Take", "Restaurant", "Family", "Running", "Tea", "Apples"};

        // "Running"という文字列を配列の中から探します。
        printAtIndex(needleInHaystack(words, "Running"), words);

        // "Apple"という文字列を配列の中から探します。
        printAtIndex(needleInHaystack(words, "Apples"), words);

        // "Train"という存在しない文字列を配列の中から探します。
        printAtIndex(needleInHaystack(words, "Train"), words);
    }
}
```

- 探索

```java
class Main{

    public static int maxInArray(int[] arr){
        // 最初の要素に最大値を設定します。
        int maxValue = arr[0];
        // arrの中で最大値を探索します。
        for (int i = 1; i < arr.length; i++){
            if (arr[i] > maxValue){
                maxValue = arr[i];
            }
        }
        return maxValue;
    }

    // arr1の最大値がarr2よりも大きいかどうかを返します。
    public static boolean hasLargerMax(int[] arrOp1, int[] arrOp2){
        // arrOp1が空なら、Falseを返します。
        if (arrOp1.length<=0){
            return false;
        }

        // arrOp2が空で、arrOp1が空でない場合はTrueを返します。
        if (arrOp2.length<=0){
            return true;
        }

        // 最大値を取得します。
        int arrOp1Max = maxInArray(arrOp1);
        int arrOp2Max = maxInArray(arrOp2);
        return arrOp1Max > arrOp2Max;
    }

    public static void main(String[] args){
        int[] arr1 = new int[]{23,43,2432,5464,3425,656,232};
        int[] arr2 = new int[]{43,23,55,34};
        int[] arr3 = new int[]{23,6464,43,54,6988};

        System.out.println(hasLargerMax(arr1, arr2));
        System.out.println(hasLargerMax(arr1, arr3));
    }
}
```

- javascript では、初期値を 0 にしていたけど、Java になってから、Integer.MIN_VALUE;にしないと、てすおケース通らなくなっている。
  なぜだろう。
- Integer.MIN_VALUE とは?

```java
import java.util.Arrays;
import java.util.ArrayList;

class Solution{
    public static String maxOfPairSum(int[] arr1, int[] arr2, int x){
        //javascriptだと0でいけたけど、JavaはInteger.MIN_VALUE.
        int maxValue = Integer.MIN_VALUE;

        for(int i = 0; i<arr1.length; i++){
            for(int j = 0; j<arr2.length; j++){
                int newValue = arr1[i]+arr2[j];
                if(newValue < 0){
                // -3 -13           -11          -13
                if(x > newValue && maxValue < newValue)
                maxValue = newValue;
                }
                else if(newValue > 0){
                if(x > newValue && maxValue < newValue)
                maxValue = newValue;
                }
            }
        }
        if(maxValue == Integer.MIN_VALUE)return "no pair";
        return String.valueOf(maxValue);
    }
}
```

# 連想配列(associative array)O(1)でアクセス可能

-文字列などを indexOf として探すことができる。

- どのようなデータ型でも問題ない。

- hashmap によって実装されている。
- book["title"]のように、文字列を index にとってデータを取得することを連想配列と呼ぶ。
- こっちの方が、人間にとっては圧倒的にわかりやすい。

- 関数によって整数に変換して格納されている。hashmap を使って。

```java
person = []

// コンピュータは裏で、文字列 first_name をインデックス（整数）に変換します
// データ "Thomas" はそのインデックスの位置に割り当てられます
person["first_name"] = "Thomas"
person["last_name"] = "Jefferson"

// コンピュータは裏で文字列 "first_name" を整数のインデックス i に変換します
// このインデックス i は、メモリに保存されている文字列 "Thomas" を取得するために使用されます
person["first_name"] // "Thomas"
```

- 実際の連想配列

```java
import java.util.Map;
import java.util.HashMap;

class Main{
    public static void main(String[] args){
    //Javaでは連想配列はMapのHashMap型で実装することができます。
    //動的配列でもこういう書き方あったな。↓
    // ArrayList<Integer> dArr = new ArrayList<Integer>();
    //Map<Map内のデータ型>           Map関数内ののHashMapという機能を使う。
    Map<String, String> myPet = new HashMap<String, String>();
    myPet.put("name", "fluffy");
    myPet.put("species", "Pomeranian");
    myPet.put("furColor", "Brown");
    myPet.put("born", "2018/05/06");
    myPet.put("favoriteFood", "Carrot sticks");

    System.out.println(mypet.get("name"));

    //さらに追加
    myPet.put("napTime","11:00am, 3:30pm, 9:00pm");
    System.out.println(myPet.get("napTimes"));
    }
}
```

-　連想配列 02

```java
import java.util.Map;
import java.util.HashMap;

class MyClass{
    public static void main(String[] args){
        Map<String, String> priceTable = new HashMap<String, String>();
        priceTable.put("Honda Civic", "24000");
        priceTable.put("Chevrolet Traverse", "30000");
        priceTable.put("Toyota Camry", "25000");
        priceTable.put("Subaru Outback", "27000");
        priceTable.put("Tesla X", "100000");

        System.out.println(priceTable.get("Tesla X"));
        System.out.println(priceTable.get("Toyota Camry"));
        System.out.println(priceTable.get("Chevrolet Traverse"));
    }
}
```

- 因みに javascript だとこう

```java
let myPet = {
    "name":"fluffy",
    "species": "Pomeranian",
    "furColor": "Brown",
    "born": "2018/05/06",
    "favoriteFood": "Carrot sticks"
}
```

# cache キャッシュ

- 使用頻度の高いデータを置いておくことで、ストレージディスクに置くよりも早くデータを取得できる。
- 配列を条件に沿って true,false にして色々計算を早くするっていうやり方がある。
- チャットで連想配列を使ってデータを保存していく。次にホテルの予約がしたいと言われたら、6 からとってきて、そのホテルを予約すればいい。もう一度ホテル名を聞き返さなくても済む。

```java
[0 : null]
[1 : null]
[2 : null]
[3 : null]
[4 : null]
[5 : "reservation started here"]
[6 : "location - national park"]
[7 : null]
[8 : null]
[9 : "3 children"]
[10 : null]
[11 : null]
[12 : null]
[13 : "7 days"]
[14 : null]
[15 : "hotel reservations"]
```

- 70 未満の素数を求めたい時
  cache を使わない場合。

```java
for i//1~70
for j//1~70までの数をその数の前まで割り続ける。 == 果てしない。
割り切れなかったやつを格納&&return
```

cache を使った場合。

```java
//70個配列の要素を作って、全部trueとする
//2から全ての割り切れる数を割り出す。それをfalseに。
//同じような処理を続けていく。
//残ったtrueを出力する。
import java.util.List;
import java.util.ArrayList;

class Main{
    // エラトステネスのふるいのアルゴリズム
    public static int[] allNPrimesSieve(int n){
        // サイズnのブーリアン値trueを持つリストを生成します。キャッシュ
        boolean[] cache = new boolean[n];
        for(int i = 0; i < n; i++) {
            cache[i]=true;
        }
        // ステップを√n回繰り返します。nが素数でないと仮定すると、n = a * bと表すことができるので、aとbの両方が√n 以上になることはありえません。
        // したがって、√n * √n = n は最大合成組み合わせになります。
        for (int currentPrime = 2; currentPrime < Math.ceil(Math.sqrt(n)); currentPrime++){
            // キャッシュ内の素数(p)の倍数をすべてfalseにしていきます。
            // iは2からスタートします。
            if (!cache[currentPrime]) continue;
            int i = 2;
            int ip = i * currentPrime;
            while (ip < n){
                cache[ip] = false;
                // i*pをアップデートします。
                i += 1;
                ip = i * currentPrime;
            }
        }

        // キャッシュ内のすべてのtrueのインデックスは素数です。
        ArrayList<Integer> primeNumbersDinamic = new ArrayList<Integer>();
        for (int i = 2; i < cache.length; i++){
            if (cache[i]){
                primeNumbersDinamic.add(i);
            }
        }
        //動的配列を固定配列に
        int[] primeNumbers = new int[primeNumbersDinamic.size()];
        for (int i = 0; i < primeNumbersDinamic.size(); i++){
            primeNumbers[i] = primeNumbersDinamic.get(i);
        }

        return primeNumbers;
    }

    //　配列を表示する関数
    public static void printIntArray(int intArr[]){
        // For文とインデックス演算子を使うことで、配列の各要素にアクセスすることができます。
        // Javaの配列はlengthというプロパティを持っています。lengthで配列のサイズを手に入れます。
        for(int i = 0; i < intArr.length; i++){
            System.out.print(intArr[i] + " ");
        }
        System.out.println();
    }
    public static void main(String[] args){

        printIntArray(allNPrimesSieve(100));
        System.out.println("-----素数の数----");
        System.out.println(allNPrimesSieve(100).length);

    }
}
```

- 連想配列

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.ArrayList;

class Main{
    public static String[] fireEmployees(String[] employees,String[] unemployed){
        HashMap<String, String> hashmap = new HashMap<String, String>();
        ArrayList<String> resultDynamic = new ArrayList<String>();

        // 解雇リストにある要素を連想配列に追加
        for (int i = 0; i < unemployed.length; i++){
            hashmap.put(unemployed[i], unemployed[i]);
        }

        // 連想配列にない要素を追加
        for (int i = 0; i < employees.length; i++){
            if(!hashmap.containsKey(employees[i])) resultDynamic.add(employees[i]);
        }

        // 固定配列へ変換
        String[] results = new String[resultDynamic.size()];

        for (int i = 0; i < resultDynamic.size(); i++){
            results[i] = resultDynamic.get(i);
        }

        return results;
    }

    public static void printArray(String[] array) {
        System.out.print("[");
        for (int i = 0; i < array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println("]");
    }

    public static void main(String[] args){

        printArray(fireEmployees(new String[]{"Steve","David","Mike","Donald","Lake","Julian"},new String[]{"Donald","Lake"}));
        printArray(fireEmployees(new String[]{"Donald","Lake"},new String[]{"Donald","Lake"}));
        printArray(fireEmployees(new String[]{"Steve","David","Mike","Donald","Lake","Julian"},new String[]{}));
        printArray(fireEmployees(new String[]{"Mike","Steve","David","Mike","Donald","Lake","Julian"},new String[]{"Mike"}));
    }
}
```

# hashmap caching

- {["name", "hana"]}key と値がペアで格納されているデータ構造(連想配列、辞書、hashmap などでよく使われる)
- hashmap 関数が使われている限り、基本 o(1)
- しかし、n 個のリストからだと(n が果てしない数だと、)、空間計算量が 0(n)になってしまう。

```java
import java.util.HashMap;

class Main{
    public static boolean existsWithinList(int[] listL, int dataY){
        HashMap<Integer, Integer> hashmap = new HashMap<>();

        // ハッシュマップに格納
        for(int i = 0; i < listL.length; i++){
            //JSだと、
            //hashMap[listL[i]] = listL[i];
            hashmap.put(listL[i], listL[i]);
        }

        // 存在したら true、存在しなければ false
        return (hashmap.get(dataY) != null) ? true : false;
    }

    public static void main(String[] args){
        // 固定配列を検索します
        int[] sampleList = {3,10,23,3,4,50,2,3,4,18,6,1,-2};
        System.out.println(existsWithinList(sampleList, 23));
    }
}
```

```java
function seachList(numList,value){
    // 関数を完成させてください
    let hashmap = {};
    for(let i = 0; i<numList.length; i++){
        hashmap[numList[i]] = i;
        if(hashmap[value] != undefined)return i;
    }
    return -1;
}


import java.util.Arrays;
import java.util.HashMap;

class Solution{
    public static int seachList(int[] numList, int value){
        // 関数を完成させてください
         HashMap<Integer, Integer> hashmap = new HashMap<>();
         for(int i = 0; i<numList.length; i++){
             hashmap.put(numList[i], i);
             if(hashmap(numList[i]) != undefined)return i;
         }
         return -1;
    }
}

```

### Hashmap caching(2 つの配列)

- これだと、膨大な計算量が必要。

```java
import java.util.ArrayList;

class Main{
    public static void main(String[] args){
        int[] targetList1 = {1,2,3,4,5,6};
        int[] searchList1 = {1,4,4,5,8,9,10,11};
        System.out.println(listIntersection(targetList1, searchList1));

        int[] targetList2 = {3,4,5,10,2,20,4,5};
        int[] searchList2 = {4,20,22,2,2,2,10,1,4};
        System.out.println(listIntersection(targetList2, searchList2));

        int[] targetList3 = {2,3,4,54,10,5,9,11};
        int[] searchList3 = {3,10,23,10,0,5,9,2};
        System.out.println(listIntersection(targetList3, searchList3));
    }

    public static boolean linearSearchExists(int[] haystack, int needle){
        for(int i = 0; i < haystack.length; i++){
            if(haystack[i] == needle) return true;
        }
        return false;
    }

    public static ArrayList<Integer> listIntersection(int[] targetList, int[] searchList){
        ArrayList<Integer> results = new ArrayList<>();
        for(int i = 0; i < searchList.length; i++){
            if(linearSearchExists(targetList, searchList[i])) results.add(searchList[i]);
        }

        return results;
    }
}
```

- 上のコードは膨大な計算量が必要。だから、hashmap を使う。(データを cache 化できる、よってアクセスは o(1)になる。)

```java
import java.util.ArrayList;
import java.util.HashMap;

class Main{
    public static void main(String[] args){
        int[] targetList1 = {1,2,3,4,5,6};
        int[] searchList1 = {1,4,4,5,8,9,10,11};
        System.out.println(listIntersection(targetList1, searchList1));

        int[] targetList2 = {3,4,5,10,2,20,4,5};
        int[] searchList2 = {4,20,22,2,2,2,10,1,4};
        System.out.println(listIntersection(targetList2, searchList2));

        int[] targetList3 = {2,3,4,54,10,5,9,11};
        int[] searchList3 = {3,10,23,10,0,5,9,2};
        System.out.println(listIntersection(targetList3, searchList3));
    }

    public static ArrayList<Integer> listIntersection(int[] targetList, int[] searchList){
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        ArrayList<Integer> results = new ArrayList<>();
        for(int i = 0; i < targetList.length; i++){
            hashmap.put(targetList[i], targetList[i]);
        }
        for(int i = 0; i < searchList.length; i++){
            if(hashmap.get(searchList[i]) != null) results.add(searchList[i]);
        }

        return results;
    }
}
```

- 各要素の個数を hashmap に記録する
- java で key や hashmap を取得するには、keySet()と values()(←hashmap 内の全ての値を取得する。)を使うことができる.

##### javascript だと、++とか+1 で hashmap 成立してたけど、Java で同じ処理を行う場合は、get,put,replace 等を使う必要がある。

```java
import java.util.HashMap;

class Main{

    public static void main(String[] args){
        int[] arr1 = {1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,5,6,6,6,6,7,8,8,8,9,9,9};
        printDuplicates(arr1);
        int[] arr2 = {7,7,6,6,3,5,3,9,2,5,5,4,6,4,1,4,1,7,2};
        printDuplicates(arr2);
    }

    public static void printDuplicates(int[] inputList){
        HashMap<Integer, Integer> hashmap = new HashMap<>();

        for(int i = 0; i < inputList.length; i++){
            // inputList[i]がキャッシュされてない場合は、値を1としてkeyと一緒に保存します。
            // これは、要素が1つであることを意味します。
            if(hashmap.get(inputList[i]) == null){
                hashmap.put(inputList[i], 1);
            }else{
                // キャッシュされている場合は、値を1プラスします。
                // これは他に同じ要素が存在することを意味します。
                hashmap.replace(inputList[i], hashmap.get(inputList[i]) + 1);
            }
        }

        // keySet()メソッドを使ってすべてのキーを出力します。
        // また、values()メソッドを使ってハッシュマップの全ての値を出力することもできます。
        // キャッシュされた順に出力されると期待してはいけません。ハッシュマップキーは順序のないリストであり、何も保証されません。
        System.out.println(hashmap.keySet());

        // キャッシュされた情報を出力します。
        for(Integer key : hashmap.keySet()){
            System.out.println(String.valueOf(key) + " has " + String.valueOf(hashmap.get(key)) + " duplicates.");
        }
    }
}
```

- hashmap replace put get

```java
import java.util.Arrays;
import java.util.HashMap;


class Solution{
    public static int countHighestScores(int[] scores){
        // 関数を完成させてください
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        int max = 0;
        for(int i = 0; i<scores.length; i++){
            if(max<scores[i])max = scores[i];
            if(hashmap.get(scores[i]) == null)hashmap.put(scores[i], 1);
            else hashmap.replace(scores[i], hashmap.get(scores[i]) +1);
        }
        return hashmap.get(max);
    }
}
```

```java
//テストケース
//getAscii("recursion") --> 114
import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution{
    public static int getAscii(String s){
        HashMap<Character, Integer> hashmap = new HashMap<>();
        ArrayList<Integer> maxArr = new ArrayList<Integer>();
        int max = 0;
        int maxAndmaxAscll = 0;

        //hashmap作る
        for(int i = 0; i<s.length(); i++){
            if(hashmap.get(s.charAt(i)) == null)hashmap.put(s.charAt(i),1);
            else hashmap.replace(s.charAt(i), hashmap.get(s.charAt(0))+1);
        }
        //maxを出す
        for(int i = 0; i<s.length(); i++){
            if(max<hashmap.get(s.charAt(i)))max = hashmap.get(s.charAt(i));
        }
        //maxのacllコードをpush
    System.out.println(hashmap.keySet().toArray()[0]);//最初のkeyを取得//r
    System.out.println(hashmap);//{r=2, c=1, s=1, e=1, u=1, i=1, n=1, o=1}
        // for(int i=0; i<)
        System.out.println(max);
        return 0;
    }
}



```

- list の sort
  YouTube の日付順や人気順など

```java
   public static void main(String[] args){
        int[] arr = new int[]{34,4546,32,3,2,8,6,76,56,45,34,566,1};
        printArray(arr);
        Arrays.sort(arr);
        printArray(arr);
    }
```

- 分割統治法
