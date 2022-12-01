# 基本的な関数の挙動(call stack, stack)

- 関数が呼び出される->OS によって、関数の情報が call stack に格納される。
- call stack は、stack と呼ばれる構造で出来ている。

```javascript
function subtract(x, y) {
  const myResult = x - y;
  return myResult;
}

function powerFunc(base, power) {
  return base ** power;
}

subtract(4, 10) * 20 * powerFunc(2, 5);
```

- os が上のコードを処理するとこんな感じになる。↓
  substract 関数が call stack に push される。->関数が pop、破壊されて、-6 を返す。
  powerFunc 関数が call stack に push される。->関数が pop,破壊されて、32 を返す。

# 再帰関数の挙動(call stack, stack)

```python
def simpleSummation(n):
    if n <= 0:
        return 0
    return simpleSummation(n-1) + n
```

- simpleSummation(2)を呼び出すとこんな感じになる。
- その関数が終わるまで pop されないから、再帰の場合は call stack にどんどん積み重なっていくのでは?->いいえ。↓ これが正解。
- +演算子よりも、関数の方が計算の優先度が高い == 2+simpleSummation(1)は、先に関数が優先される。　つまり、-> 2+simpleSummation(1)が計算されて破壊される前に、次の関数が push される。
- pop == 計算された値(戻り値)がその関数に返ってきて、その関数が破壊される。

1 + 0
2 + simpleSummation(1)
simpleSummation(2)

- 総和の総和

```java
class Main{
    // 総和の再帰関数
    public static int simpleSummation(int count){
        // ベースケース
        if(count <= 0 ){
            return 0;
        }

        return count + simpleSummation(count-1);
    }

    // 総和の総和の再帰関数
    public static int simpleSummationOfSummations(int count){
        // ベースケース
        if(count <= 0 ){
            return 0;
        }

        // SS(n) = S(n) + SS(n-1)
        return simpleSummation(count) + simpleSummationOfSummations(count-1);
    }

    public static void main(String[] args){
        System.out.println(simpleSummationOfSummations(4));
        System.out.println(simpleSummationOfSummations(3));
        System.out.println(simpleSummationOfSummations(2));
        System.out.println(simpleSummationOfSummations(10));
    }

}
// SS(3)
// S(3) + SS(2)
// (3 + S(2)) + SS(2)
// (3 + (2 + S(1))) + SS(2)
// (3 + (2 + (1 + S(0)))) + SS(2)
// (3 + (2 + (1 + 0))) + SS(2)
// (3 + (2 + 1)) + SS(2)
// (3 + 3) + SS(2)
// 6 + SS(2)
// 6 + (S(2) + SS(1))
// 6 + ((2 + S(1)) + SS(1))
// 6 + ((2 + (1 + S(0))) + SS(1))
// 6 + ((2 + (1 + 0)) + SS(1))
// 6 + ((2 + 1) + SS(1))
// 6 + (3 + SS(1))
// 6 + (3 + (S(1) + SS(0)))
// 6 + (3 + ((1 + S(0)) + SS(0)))
// 6 + (3 + ((1 + 0) + SS(0)))
// 6 + (3 + (1 + SS(0)))
// 6 + (3 + (1 + 0))
// 6 + (3 + 1)
// 6 + 4
// 10
```
