# 再帰は、木構造、リストなど上級で頻繁に登場するので、しっかりアウトプットして身につけておきましょう!

- 足し算、引き算を再帰で表す。

```java
class Main{

    public static int wholeNumberAddition(int x, int y){
        // yがゼロになった時、追加する1がないので、xを返します。
        if(y <= 0){//4
            return x;
        }
        return wholeNumberAddition(x+1,y-1);//6,3
    }

     public static int wholeNumberSubstraction(int x, int y){
        if(y == 0)return x;
        return wholeNumberSubstraction(x-1,y-1);
    }

    public static void main(String[] args){
        System.out.println(wholeNumberAddition(5,4));   // 9
        System.out.println(wholeNumberAddition(10,23)); // 33

        System.out.println(wholeNumberSubstraction(5,4)); //1
        System.out.println(wholeNumberSubstraction(23,10));//13
    }
}
```

- recursion で Java のメソッド isEmpty()が使える。

- java の型変換

```java
//error: incompatible types: String cannot be converted to int
このようなエラーが出る場合は、既にある変数に、String.valueOfをして、再定義させようとしているから。これだとJSはいいけど、Javaだと、エラーになるらしい。

//ok
 String s = String.valueOf(n);
 //eroor
 n = String.valueOf(n);
```

```java
class Main{

    public static String sheeps(int count){
        // helper関数を利用します
        return sheepsHelper(count, "");
    }

    // helper関数を作成して引数を増やします
    // stringに文字列を追加していき、ベースケースになったときに返します
    public static String sheepsHelper(int count, String string){
        if (count <= 0) return string;
        // stringの先頭に、count + " sheep ~ " を追加します
        return sheepsHelper(count - 1, String.valueOf(count) + " sheep ~ " + string);
    }

    public static void main(String[] args){

        System.out.println(sheeps(2));
        System.out.println(sheeps(4));
        System.out.println(sheeps(5));
        System.out.println(sheeps(10));
    }

}
```

```java
class Solution{
    public static String reverseString(String string){
        // 関数を完成させてください
        if(string.charAt(string.length() == 0))return "";
        return string.charAt(string.length() - 1) + reverseString(string.substring(0,string.length()-1));
    }
}


//最後の文字を削除
String subStr = s.substring(0, s.length() - 1);
```

```java
//Main.java:8: error: illegal start of expression
        // if(n % k !== 0)return count;
               // ^
//This error is thrown when the compiler detects any statement that does not abide by the rules or syntax of the Java language.
//javaの場合は、!==ではなく、!=で通った。というか元々!=は、not==という意味では??わからないけど。JSで!==でずっとやってきたからな。
class Solution{
    public static int countDivisibleByK(int n, int k){
        // 関数を完成させてください
        return helper(n, k, 0);
    }

    public static int helper(int n, int k, int count){
        boolean if(n % k != 0)return count;
        return countDivisibleByK(n % k, k, count=+);
    }
}
```
