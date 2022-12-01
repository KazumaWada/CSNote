# フィボナッチ

```java
class Main{
    // n 番目のフィボナッチ数を返します。
    public static int fibonacciNumber(int n){
        // ベースケース
        if(n == 0) return 0;
        else if(n == 1) return 1;

        return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
    }

    public static void main(String[] args){
        System.out.println(fibonacciNumber(3));
        System.out.println(fibonacciNumber(5));
        System.out.println(fibonacciNumber(8));
        System.out.println(fibonacciNumber(10));
    }
}

//fib(4)の場合、

// fib(4)
// fib(3) + fib(2)
// (fib(2) + fib(1)) + fib(2)
// ((fib(1) + f(0)) + fib(1)) + fib(2)
// ((1 + 0) + fib(1)) + fib(2)
// (1 + fib(1)) + fib(2)
// (1 + 1) + fib(2)
// 2 + fib(2)
// 2 + (fib(1) + fib(0))
// 2 + (1 + fib(0))
// 2 + (1 + 0)
// 2 + 1
// 3

//同じ計算を複数回おかなっているため、大変非効率。

//ツリー状で、末端から処理されていく。== latestにstackされたものが処理されていく == call stackのLast in first out
```

# 計算量(complexity)

- 時間計算量: アルゴリズムの処理の手順の回数
- 空間計算量: 必要とする記憶領域

同じ問題を解決する場合でも、アルゴリズムは複数存在し、アルゴリズムの効率によって所要時間が大きく変わる点に注意してください。

# 末尾再帰(tail recursion)

-　コンピュータには物理的制限があるため、再帰で stack overflow になる可能性があります。(空間計算量が多すぎる場合。)
それを tail recursion に書き換えることで、stack overflow を防ぐことができます。

- 末尾再帰とは、関数の末尾で再起呼び出しを実行する再帰のことを指します。(再帰呼び出しを実行する再帰)

- 末尾再帰のコード
  return simpleSummationTailHelper(n, 0);と、return simpleSummationTailHelper(count-1, total+count);の部分が、今までと違う。
  このように書くと、javascript と c++では、末尾再帰最適化が実行され、stack が積み重なるのではなく、更新されていく。stack 一つ(空間計算量 1)で済む

```java

//関数の末尾で再帰を実行している。
class Main{

   public static int simpleSummationTail(int n){
      // 途中結果を保存するため、引数を追加します
      return simpleSummationTailHelper(n, 0);
   }

   // 補助関数
   public static int simpleSummationTailHelper(int count, int total){
      // ベースケースに達したら、計算結果を返します
      if(count <= 0 ) {
         return total;
      }

      // total + count として、計算結果を足していきます
      return simpleSummationTailHelper(count-1, total+count);
   }

   public static void main(String[] args){
      System.out.println(simpleSummationTail(5));
   }

}
```

-普通の再帰

```java
class Main{

   public static int simpleSummation(int n){
      if(count <= 0 ) return 0;
      // total + count として、計算結果を足していきます
      return n + simpleSummationTailHelper(n-1);
   }

   public static void main(String[] args){
      System.out.println(simpleSummation(5));
   }

}
```

- こういう末尾再帰の書き方もできる。これも末尾呼び出し最適化。

```java
class Main{
    // 末尾再帰を使って、n 番目のフィボナッチを返す関数を作成します
    public static int fibonacciNumberTailHelper(int fn1, int fn2, int n){
        if(n < 1) {
            return fn1;
        }

        return fibonacciNumberTailHelper(fn2, fn1+fn2, n-1);
    }

    public static int fibonacciNumberTail(int n){
        // 補助関数を使用し、初期値 0, 1 を追加します
        return fibonacciNumberTailHelper(0,1,n);
    }

    public static void main(String[] args){
        System.out.println(fibonacciNumberTail(6));
        System.out.println(fibonacciNumberTail(10));
    }

}
```
