```java
//緯度によって、northかsouthかを返す関数
//Stringデータを受け取って、double型を返す。
double getLatitudeOfCity(String cityString)

//関数から帰ってくる値が、doubleだから、こういう書き方ができる。
if (getLatitudeOfCity("Las Vegas") > 0) message += "north";
```

- 必ず""で囲う必要がある。

```java
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;



class Solution{
public static String northOrSouth(double latitude){
    String result = "";
    if(latitude > 0)result = "north";
    else if(latitude == 0)result = "equator";
    else result = "south";

    return result;
}

public static String westOrEast(double longitube){
    String result = "";
    if(longitube > 0)result = "east";
    else if(longitube == 0)result = "prime meridian";
    else result = "west";

    return result;
}

    public static String calculateLocation(double latitude, double longitude){
        // 関数を完成させてください
        return northOrSouth(latitude) + "/" + westOrEast(longitude);
    }

}

```

<!-- # javaのジェネリクス(generics,総称型)について。<> <-これ。
https://qiita.com/buttakyou/items/28239efefb91d5c2e8db

- 型を抽象化して定義することができます。
↓
- つまり、あらかじめ特定の型に定義せず、曖昧な状態のままで定義することができます。
そして利用時点で型指定を行い、特定の型に確定します。

- このように、型指定が曖昧なので、"総称型"と呼ばれる。 -->

# Java のジェネリクスについて。<Integer>とか。

https://camp.trainocate.co.jp/magazine/java-generics/

### 一つ目

- array または、list にはなんでも型を入れることができてしまうので、それを限定するために、array または list に<String>などとすることで、型エラーを事前に感知できる。

```java
//arrayに格納できる型を限定できるので、異なる型が格納される前にコンパイルエラーが起きて、エラーを事前に検知できる。
List<Integer> arr = new ArrayList<>();
arr.add(12);
arr.add("Hello, World!"); // -> コンパイルエラー
```

### 二つ目

- まだ確定していない型を曖昧に定義しておく。<T>
- <T>は、後に<String>と<Integer>に変わっている。↓

```java
public class PairMap<T> {

  private T first;
  private T second;

  public T first() {
    return this.first;
  }

  public T second() {
    return this.second;
  }

  public PairMap(T first, T second) {
    this.first = first;
    this.second = second;
  }
}

public class Main {
  public static void main(String[] args) throws Exception {
    // 文字列のPairを作成
    PairMap pair = new PairMap<String>("ひとつめ", "ふたつめ");

    System.out.println("first is " + pair.first());
    System.out.println("Second is " + pair.second());

    System.out.println("----------");
    // 数字のPairを作成
    PairMap pair2 = new PairMap<Integer>(4, 2);
    System.out.println("first is " + pair2.first());
    System.out.println("Second is " + pair2.second());
  }
}


// first is ひとつめ
// Second is ふたつめ
// ----------
// first is 4
// Second is 2
```

### 三つ目

- ジェネリクスには、命名規則がある。

```java
<E>	要素（Element）
<K>	キー（Key）
<T>	型（Type）
<V>	値（Value）
<N>	数値（Number）
S, U, V	２番目、3番目、４番目…
```

### 四つ目

- なぜ<int>ではなく、<Integer>なのか。↓
  基本データ型(プリミティブ型)は使用できないから。クラスのみ。
  もし、基本データ型を使用したいなら、ラッパークラスを使う。(つまり、int ではなく Integer を使う。)

```java
List<Integer> intList = new ArrayList<Integer>();
```
