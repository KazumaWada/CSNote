- 関数名がない。一行で return まで書かれている。(Supplier<String> lambda1 = () -> { return "A new world";};)

```java
import java.util.function.*; // ユーティリティライブラリの読み込み

class Main{
   public static void main(String[] args){

      // では、ラムダ式を使ってその場で関数を作成してみましょう。呼び出し可能オブジェクトの参照が返されるので、データを返す呼び出しを行うことができます。見ての通り、名前がないので匿名関数と呼ばれています。
      // シンタックス:
      // 入力 -> { 式 };
      // (入力1, 入力2,.....入力n) -> { 式 };
      // ラムダ式は呼び出し可能オブジェクトを返します

      // Javaには、ラムダ関数を定義するためのライブラリが付属しています。ラムダ式を保存するか、出力や入力として渡す必要があります。
      // その一つが、零項関数（引数を取らない関数）を表し、データを返す「Supplier」型と呼ばれるものです。この「Supplier」はデータを供給します。
      Supplier<String> lambda1 = () -> { return "A new world";};//関数。出力はされない。

      // 零項関数を実行するにはget関数を使用します。
      System.out.println(lambda1);//正しく出力されない。
      System.out.println(lambda1.get());//A new world

      Integer p = 40;

      //ラムダ式スコープ外の変数にアクセスします。
      Supplier<Integer> lambda3 = () -> { return 4+p;};
      System.out.println(lambda3.get());//44
      Supplier<String> lambda4 = () -> { return "P is " + p;};
      System.out.println(lambda4.get());//P is 40

      // 特定の入力を受け取る匿名関数を作成することができます。通常の関数と同じように、呼び出すときに入力を渡すことができます。
      // 単項関数（入力を1つ取り込んで出力を返す関数）である関数型を使って、出力を返します。
      Function<Integer, Integer> squaredF = (x)->{ return x * x;};//xは仮引数。

      // apply関数で、仮引数を使うことができる。
      System.out.println("Squaring...." + squaredF.apply(4)); // Squaring...16

      //他のすべての関数と同様に、呼び出されたときに独自のローカルスコープを作成します。
      Function<Integer, String> sheepF = (x)->{
         String sheeps = "";
         for(int i = 1; i <=x;i++) sheeps += i + "sheep~";
         return sheeps;
      };
      System.out.println("looping..." + sheepF.apply(5)); //looping...1sheep~2sheep~3sheep~4sheep~5sheep~

      // --------OOP 匿名クラス------
      // また、クラス、クラスの抽象化、またはインターフェースで指定された関数を実装したり、オーバーライドしたりするために、匿名クラスを作成することもできます。これらのクラスはインスタンス化してからオブジェクトに格納するか、入力として渡すか出力として返す必要があります。
      // utils.functionsライブラリからの関数と他のインポートは、実際にはすべてインターフェースです。インターフェースはオブジェクトが実装しなければならないメソッドのセットを提供します。例えば、Function テンプレートは apply() 関数を実装しなければなりませんが、ここでは匿名で実装しています。
      // OOPコースでは、クラスの抽象化とインターフェースについて学びます。
      Function<Integer, Integer> innerObj = new Function<Integer, Integer>(){
         public Integer apply(Integer x) {
            // pはこの匿名関数のスコープ外でアクセスされます。
            return x + p;
         }
      };
      System.out.println();
      System.out.println("Method defined through an anonymous class..." + innerObj.apply(10));
   }
}
```

- ラムダ関数をオブジェクトで呼び出してみる。

```java
// Javaではインターフェースを実装した無名クラスのオブジェクトをラムダ式で表します。
// インターフェースについてはOOPコースで詳しく学習します。
import java.util.function.*;// パッケージfunctionをimportします。

class Main{
    public static Integer callIntBiFunc(BiFunction<Integer, Integer, Integer> f, Integer x, Integer y){
        return f.apply(x,y);
    }

   public static void main(String [] argt){
      // BiFunctionインターフェースを使用します。引数を2つ持つことができ、戻り値があります。
      // apply()で引数を渡すことができます。
      BiFunction<Integer, Integer, Integer> biFunction = new BiFunction<>(){
         public Integer apply(Integer x, Integer y){
            return x + y;
         }
      };
      System.out.println(biFunction.apply(3, 5));// 8

      // この関数は、どこにも保存されておらず、渡されてもいないので、ガベージコレクタによって後に消去されます。
      System.out.println(callIntBiFunc((x, y) -> x + y, 3,5));
      // 変数に格納して呼び出してみましょう。呼び出し可能オブジェクトはオブジェクトなのですから。
      BiFunction<Integer, Integer, Integer> myCallable = (x, y) -> x + y;

      System.out.println(myCallable.apply(3, 5));//8
      System.out.println(myCallable.apply(10,10)); //20
      System.out.println(myCallable.apply(150,5)); //155
      System.out.println(myCallable);

   }
}
```

# 高階関数

関数を入力として受け取り、関数を出力として返す関数

```java
// funcAdd = function(a, b){return a + b};
// useFunction(funcAdd, 10, 5);

// Javaでは上記のような関数を入力として受け取り、関数を出力する関数は構造上できない仕様になっていますが、インターフェースを使って匿名関数を作成し、呼び出し可能オブジェクトの参照を受け取ることができます。

//ラムダ式に実装できる主な関数型インターフェース

//  　　　　　　引数あり　　引数なし
//  戻り値あり　Function   Supplier　
//　戻り値なし  Consumer

//  引数あり 戻り値boolean　 Predicate
//  引数2つ  戻り値あり　　　 BiFunction

// 他にもたくさんあるのでドキュメンテーションを確認しましょう。

import java.util.function.*;

class Main{

    // この関数は関数の参照を受け取り、ローカルスコープ内で呼び出します。
    public static String functionInputTest(Supplier<String> func){
        return func.get() + ".... called from another function!";
    }

    public static Integer fSquaredX(Function<Integer, Integer> f, int x){
        int p = x * x;
        return f.apply(p);
    }

    public static String fSquaredX2(Function<Integer, String> f, int x){
        int p = x * x;
        return f.apply(p);
    }

    public static void main(String[] args){

        Supplier<String> myCallable = () -> {return "hello world";};
        System.out.println(myCallable.get());// hello world
        System.out.println(functionInputTest(myCallable));

        Function<Integer, Integer> callable1 = (p) -> {return p + 30;};
        // f(a^2) = a^2 + 30;
        System.out.println(fSquaredX(callable1, 5));// 25 + 30 = 55

        // 呼び出し可能オブジェクトを変数内に格納します。
        Function<Integer, String> callable2 = (p) -> {return "p is " + p;};

        System.out.println(fSquaredX2(callable2, 10));// p is 100
        System.out.println(fSquaredX2(callable2, 8));// p is 64
    }
}
```

- ラムダで表現する再帰(a,b の他に g(i)が加わった)

```java
import java.util.function.*;

class Main{
    //summation: 引数なし function: 引数あり

    public static int summation(Function<Integer,Integer> g, int a, int b){
        if(b < a) return 0;
        //identity i return iだから、1,2,3,4,5,って返される。
        return g.apply(b) + summation(g, a, b-1);
    }

    //オーバーロード                             //i,      1,   10
    public static int summation(Supplier<Integer> g, int a, int b){
        if(b < a) return 0;
        //getでg関数が実行される。//1とか2とか100とかになるはず。
        return g.get() + summation(g, a, b-1);
    }

    public static int pPi(Function<Integer, Integer> g, int a, int b){
        if(b < a) return 1;
        return g.apply(b) * pPi(g, a, b-1);
    }

    //オーバーロード
    public static int pPi(Supplier<Integer> g, int a, int b){
        if(b < a) return 1;
        return g.get() * pPi(g, a, b-1);
    }

    public static void main(String[] args){

        // 10までの総和
        // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
        //supplierのsummation//いや、iという引数を持つからfunctionなのでは?
        Function<Integer, Integer> identity = i -> i;
        System.out.println(summation(identity, 1, 10));//55

        // 10 * 100 の計算//functionのsummatation?
        Supplier<Integer> function = () -> 10;
        System.out.println(summation(function, 1, 100));//1000

        // 10の階乗(10!)
        System.out.println(pPi(identity, 1, 10));//3,628,800

        // 5^10 の計算
        Supplier<Integer> function5 = () -> 5;
        System.out.println(pPi(function5, 1, 10));// 9765625
    }
}
```

- 円の面積を求める

```java
import java.util.function.*;

class MyClass{
    public static void main(String[] args){
        //半半3.14
        Function<Integer, Double> circleArea = (a) ->{return a*a*3.14;};
        System.out.println(circleArea.apply(1));
        System.out.println(circleArea.apply(5));
    }
}

```

- ゼロの増殖

```java
//duplicateZero(5) --> 00000
import java.util.function.*;

class MyClass{
    public static void main(String[] args){
        Function<Integer, String> duplicateZero = (x)->{
            String count = "";
            for(int i = 0; i<x; i++)count += 0;
            return count;
        };
    System.out.println(duplicateZero.apply(5));
    System.out.println(duplicateZero.apply(10));
    }
}
```

### ラムダ関数で、再帰を表現する。

- バリデーション
  Java の Predicate 関数が使われている。test メソッドを持つ.引数を一つ受け取り、boolean を返す。
  if 文で、&&とか||を多用すると見づらくなってしまうのを防ぐためにも使われている。

- 例

```java
public class Man {
    private int hight;
    private int income;
    private String looks;
    private int age;

    public Man(int hight, int income, String looks, int age) {
        this.hight = hight;
        this.income = income;
        this.looks = looks;
        this.age = age;
    }
    public int getHight() {
        return hight;
    }
    public int getIncome() {
        return income;
    }
    public String getLooks() {
        return looks;
    }
    public int getAge() {
        return age;
    }
}


//ifを使うと、
Man man = new Man(170,900,"hot",20);
if(getHight > 170 && getIncome > 800||
   getLooks == hot && age <30){
}
//predicateを用いると、
import java.util.function.Predicate;

public class Main {
  public static void main (String[] args) {

     Predicate<Man> isHight = m -> m.getHight() > 170;
     Predicate<Man> isIncome = m -> m.getIncome()<1000;
     Predicate<Man> isLooks = m -> m.getLooks()=="hot" ;
     Predicate<Man> isAge = m ->m.getAge()<35;
     Predicate<Man> type = isHight.and(isIncome).or(isLooks.and(isAge));
     Man man = new Man(170,900,"hot",20);
    if(type.test(man)) {
        System.out.println("OK");
    }else {
        System.out.println("NG");
    }
  }
}
```

```java
//validation(predicate1, "@gmail.com") --> false

import java.util.function.*;
class MyClass{

    public static void main(String[] args){
        //このPredicateはclass?//そういうメソッドが元々備わっている。
        //＠から始まっていない
        Predicate<String> predicate1 = s -> s.indexOf("@") != 0;
        System.out.println(predicate1.test("@gmail.com"));//f
        System.out.println(predicate1.test("kkk@gmail.com"));//t
        //空白がない
        Predicate<String> predicate2 = s -> s.indexOf(" ") == -1;
        System.out.println(predicate2.test("Hello world"));//f
        System.out.println(predicate2.test("Helloworld"));//t

        Predicate<String> predicate3 = s -> {
            //isUpperというからの変数に、falseを入れる。後で、if文が通ったら、trueに変わる。
            boolean isUpper = false;
            boolean isLower = false;
            for(int i = 0; i < s.length(); i++){
                //Character.isUpperCaseという備え付けの関数がある。
                //大文字があれば、trueそうでなければfalseを返す。
                if(Character.isUpperCase(s.charAt(i))) isUpper = true;
                if(Character.isLowerCase(s.charAt(i))) isLower = true;
            }
            //大文字と小文字両方混ざっていれば、true&&trueでtrueを返す。
            return isUpper && isLower;
        };
        System.out.println(predicate3.test("hello world"));
        System.out.println(predicate3.test("HELLO WORLD"));
        System.out.println(predicate3.test("Hello world"));
    }
}
```

- バリデーション(他の解き方)これいいかも!!

```java
import java.util.function.*;

class MyClass{
    public static void main(String[] args){
        Function<String, Boolean> predicate1 = (str) -> {
            return str.charAt(0) != '@';
        };

        Function<String, Boolean> predicate2 = (str) -> {
            return str.indexOf(" ") == -1;
        };

        Function<String, Boolean> predicate3 = (str) -> {
            if (str.toUpperCase().equals(str)) {
                return false;
            } else if (str.toLowerCase().equals(str)) {
                return false;
            }

            return true;
        };

        System.out.println(validation(predicate1, "@gmail.com"));
        System.out.println(validation(predicate1, "kkk@gmail.com"));
        System.out.println(validation(predicate2, "Hello world"));
        System.out.println(validation(predicate2, "Helloworld"));
        System.out.println(validation(predicate3, "hello world"));
        System.out.println(validation(predicate3, "HELLO WORLD"));
        System.out.println(validation(predicate3, "Hello world"));
    }

    public static boolean validation(Function<String, Boolean> f, String word) {
        return f.apply(word);
    }
}
```

- ラムダ総和(validation で再帰をしているため、それぞれの関数に for を書かなくて良い。総和の和は別だが、、)

```java
import java.util.function.*;

class MyClass{
    public static void main(String[] args){
        Function<Integer, Boolean> odd = (x) -> {
            if (x % 2 == 0) return false;
            else return true;
        };
        System.out.println(sum(odd, 3));
        System.out.println(sum(odd, 10));
        System.out.println(sum(odd, 25));

        Function<Integer, Boolean> multipleOf3Or5 = (x) -> {
            if (x % 3 == 0 || x % 5 == 0) return true;
            else return false;
        };
        System.out.println(sum(multipleOf3Or5, 3));
        System.out.println(sum(multipleOf3Or5, 10));
        System.out.println(sum(multipleOf3Or5, 100));

        Function<Integer, Boolean> prime = (x) -> {
            for (int i = 2; i < x; i++) if (x % i == 0) return false;//割れてしまったらfalse
            if (x == 1) return false;//1だったらfalse
            return true;
        };
        System.out.println(sum(prime, 2));
        System.out.println(sum(prime, 10));
        System.out.println(sum(prime, 100));
    }

    public static int sum(Function<Integer, Boolean> f, int n) {
        if (n <= 0) return 0;
        //if(true)だったら、nが足される。再帰。。。いや天才すぎんこのコード?!
        if (f.apply(n)) return n + sum(f, n - 1);
        return sum(f, n - 1);
    }
}
```

- 動物と人間の年齢

```java
import java.util.function.*;
//comparison(predicate1, 20, 1) --> false
class MyClass{

    public static void main(String[] args){

        //dog age & human age//比較結果を返す//犬の方が高い->true
          Function<Integer, Integer> predicate1 = (human,dog) -> {
            return human < 20 + (dog-2)*7;
        };

        //cat age & human age
        Function<Integer, Integer> predicate2 = (human,cat) -> {
            return human < 24 + (cat-2)*4;
        };

        public static boolean comparison(Function<Integer, Integer> f, int humanAge, int animalAge){
            return f.apply(humanAge,animalAge);
        };

};

}
```

- 動物と人間の年齢(ユーザー回答)

```java
//PredicateとBiPredicateの違いは?
//BiPredicate is same with the Predicate, instead, it takes 2 arguments for the test.
//https://mkyong.com/java8/java-8-bipredicate-examples/
import java.util.function.*;

class MyClass{
    public static void main(String[] args){
        BiPredicate<Integer, Integer> predicate1 = (humanAge, dogAge) -> {
            return 20 + (dogAge - 2) * 7 > humanAge;
        };

        System.out.println(comparison(predicate1, 20, 1));
        System.out.println(comparison(predicate1, 25, 3));
        System.out.println(comparison(predicate1, 50, 7));

        BiPredicate<Integer, Integer> predicate2 = (humanAge, catAge) -> {
            return 24 + (catAge - 2) * 4 > humanAge;
        };

        System.out.println(comparison(predicate2, 20, 1));
        System.out.println(comparison(predicate2, 25, 3));
        System.out.println(comparison(predicate2, 50, 7));
    }

    public static boolean comparison (BiPredicate<Integer, Integer> f1, Integer humanAge, Integer dogAge) {
        return f1.test(humanAge, dogAge);
    }


}
```

### ラムダ関数(関数を返すケース)

````java
import java.util.function.*;

class Main{

    public static void main(String[] args){

        Supplier<Supplier<String>> helloFunction = () -> () -> {return "hello world";};

        //この関数は関数を返します
        System.out.println(helloFunction.get());//Main$$Lambda$2/0x0000000800b4c040@4b1210e
        // 戻り値としてのこの関数を実行
        System.out.println(helloFunction.get().get());//hello world
        //戻り値としてこの関数を保存
        Supplier<String> outputF = helloFunction.get();//この場合は、.get().get()で保存しなくていいのか。。
        System.out.println(outputF.get());//hello world

        // 数値xを取り込み、その後xと入力を乗算する関数を返します。
        Function<Integer, Function<Integer, Integer>> constantMultiplication = x -> y -> {return y*x;};

        System.out.println(constantMultiplication.apply(4).apply(3));

        // xを取り込んだ関数を変数に代入し、入力yを渡すこともできます。
        //関数を変数に代入して、その変数から実行することができる。
        Function<Integer, Integer> multiplyBy4 = constantMultiplication.apply(4);

        System.out.println(multiplyBy4.apply(3));//3*4 = 12
        System.out.println(multiplyBy4.apply(10));//10*4 = 40
        System.out.println(multiplyBy4.apply(5));//5*4 = 20
    }
}
- 上のように、ラムダ関数の関数を渡すときは、必ずしも無名関数で渡す必要はない。
```java
import java.util.function.*;
import java.util.Random;
//suplierって何だっけ?
//「Supplier」はデータを供給します。
Supplier<String> lambda1 = () -> { return "A new world";};//関数。出力はされない。
//suplierを実行するときは、getなのかな。
//Functionはデータ(仮引数)を受け取ってデータを返す。

class Main{

    public static String multiCall(Function<String, String> f, Supplier<String> fInputF, String message) {
        //greeting(nameGenerator()) + "......." + message;
        //"Hello there " + name(nameGenerator())+ "......." + message;
        return f.apply(fInputF.get()) + "......" + message;
    }

    //nameGeneratorはsupplierなので、データを供給するのみ。
    public static void main(String[] args){
        //name変数は、greeting(nameGenarator())ってなってるから、name = strって事かな?
        Function<String, String> greeting = name -> "Hello there " + name;

        Supplier<String> nameGenerator = () ->{
            String str = "";
            for(int i = 0; i < 10; i++){
                Random r = new Random();
                str += (char)(r.nextInt(26) + 'a');
            }
            return str;
        };

        System.out.println(multiCall(greeting, nameGenerator, " Thank you"));
        //Hello there randomName..... Thank you
    }
}
````

- 挨拶????????????????????

```java
import java.util.function.*;
import java.util.Random;

class MyClass{
                               //morning           //john
    public static String greet(Supplier<String> name, Function<String> f) {
        //morning()
        return f.apply(name.get()); //+ "How are you?";
    }

    public static void main(String[] args){

        Function<String> greet = name -> name + "How are you?";

        Supplier<String> morning = ()->{return "Good Morning";};
        Supplier<String> afternoon = ()->{return "Good Afternoon";};
        Supplier<String> evening = ()->{return "Good Evening";};

        System.out.println(greet(morning, "John"));
        System.out.println(greet(evening, "John"));
        //--> Good Morning John. How are you?
    }
}
```

# call back

- 同期型 call back(synchronous)
  関数 F が関数内で関数 C を呼び出したときに、関数 C の処理が終わってから、続きの処理をする場合。
- 同期型 call back

```java
import java.util.function.*;

class Main{
    public static void main(String[] args){
        BiFunction<Function<Integer, Integer>, Integer, Integer> synchronousFunction = (f, x)->{
            int result = f.apply(10);//下の関数を呼んだ//5が返ってきた?
            System.out.println("help01");//3個目
            //xは元々254だから、systemoutで254
            return f.apply(x) + f.apply(x*x) + result;
        };

        Function<Integer, Integer> tempFunc = x ->{
            System.out.println("Call on " + x);//1個目:10//4個目:254
            System.out.println("help02");//2個目//5個目
            return x/2;//一番最初の10/2はスルー or resultに保存されている?
        };

        System.out.println(synchronousFunction.apply(tempFunc,254));
    }
}
// Call on 10
// help02
// help01
// Call on 254
// help02
// Call on 64516
// help02
// 32390
```

- カスタム配列

```java
//int[] customArray(int(int), int[])
//int cube(int n
class MyClass{
    public static void main(String[] args){

    }
}

```

- カスタム配列

```java
import java.util.function.*;
class MyClass{
    public static int[] customArray(Function<Integer, Integer> f, int[] arr){
        //1,cubeを呼ぶ
        int[] res = new int[arr.length];//4
        for(int i = 0; i < res.length; i++){
            //res[0] = cube(3)
            //res[0] = 27
            res[i] = f.apply(arr[i]);//ここが同期ポイント。
            //[0]になった時点で、終わりなのかそれとも最後まで配列を作って、[0]を出すのか。
            //ループだから、最後まで計算される。。。
            System.out.println(res);
        }
        return res;[27,]
    }
    public static void main(String[] args){
        //2,nとは、、//3,customArrayに戻り、仮引数に取り掛かる。
        Function<Integer, Integer> cube = (n) -> n * n * n;

        Function<Integer, Integer> splitAndAdd = (n) -> {
            int total = 0;
            while(n > 0){
                total += n % 10;//total = 0 + 3
                n /= 10;// n = n /10 //n =
            }
            return total;
        };
        //customArray(関数,配列);
        //cube(n) nを受け取って3乗する
        //splitAndAdd(n) nを受け取って、全ての桁数の合計を返す。

        //System.out.println(customArray(cube, new int[]{3, 11, 24, 31})[0]);//27
        // System.out.println(customArray(cube, new int[]{3, 11, 24, 31})[1]);
        // System.out.println(customArray(cube, new int[]{1, 2, 3, 4})[3]);
        System.out.println(customArray(splitAndAdd, new int[]{3, 11, 24, 31})[2]);
        // System.out.println(customArray(splitAndAdd, new int[]{105, 19, 912, 643})[1]);
        // System.out.println(customArray(splitAndAdd, new int[]{105, 19, 912, 643})[3]);
    }
}
```

- 過半数

```java
class MyClass{
    public static void main(String[] args){

    }
}

```
