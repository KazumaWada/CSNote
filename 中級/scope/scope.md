# Scope(影響範囲)

> 変数名や関数名などを参照できるコードの範囲のことを指します.

- 変数や関数が宣言されたら、そこに scope が紐づけられるイメージ。
- スコープのおかげで、関数や変数の呼び出し時の衝突を防ぐことができている。
- global scope, local scope がある。

- discount 変数のスコープは、getPrice 内

```javascript
function getDiscount(price) {
  let discount = price + price * 0.8;
}
```

```javascript
x = 34;
y = x * 10;

function myFun() {
  // 関数のスコープ

  // xを出力します。
  // ローカルスコープではまだxは定義されていないので、
  // 親のスコープ（グローバルスコープ）が検索されます。
  console.log(x); //34

  //先にxがグローバルスコープから検索されたので、宣言できません。
  //先に親,グローバルスコープに検索されたら、ローカル内でその変数を宣言できないのか!
  //let x = 3;

  // xを上書きします。
  x = 56;

  console.log(x); //56

  console.log(y); //340
}

myFun();
console.log(x); //56
```

## local scope の場合、stack で処理が終わり次第消滅し、global Scope の場合、プログラムが終了するまで stack に残り続ける。

### global scope の注意点

- global scope は、メモリを占有し続ける。
  > グローバル変数には、プログラムのどこからでもアクセスすることができます。一見便利に聞こえますが、その意味合いを考慮しないと、バグやメモリの無駄遣い、後述する副作用を発生させる可能性があります。
  > データがプログラム上で必要な場合は、変更不可能な変数である、定数を使用することをお勧めします。

# side effect

- プログラミング界の side effect には、

> 「どこかにある何かを、知らず知らずのうちに変容させてしまっている」

という意味がある。

- エラーは 2 つに分かれる

syntax error(書き間違え)
logic error(開発者が意図しない出力結果。開発の 50%はこれを防ぐために、テスト、デバックなどを行っている)

> 副作用があるからこそ、適切なソフトウェア設計とテストを行う必要があります。何千ものパッケージ、何十人もの開発者、何百万行ものコードを持つプログラムを想像してみてください。もし適切なテストやエラーが実行前に検証されていない場合、副作用による論理的なエラーによって莫大な損害をもたらす可能性があります。

> 現実はそう簡単にはいきません。副作用を完全に避けようとして、逆にプログラムの複雑さが増してしまったということでは元も子もないのです。

# 静的型付け言語の scope

既に定義されていて、Java だと、main 関数から初めに実行されていく。動的型付け言語は、一行目から実行されていく。

- ちょっと知らなかった書き方

```java
// グローバルスコープで A というクラスを定義します
class A {
    public static int x = 3;
    public static int y = 10;

    public static int multiply(int x){
        // y を検索します
        // y はローカルスコープで見つからず、y = 10 として親スコープツリーで見つかりました
        return x * y;
    }

    // Aの中にまた B というクラスを定義します
    static class B{
        public static int x = 15;

        public static int multiply(int x){
            // y を検索します
            // y はローカルスコープで見つからず、y = 10 として親スコープツリーで見つかりました
            return x * y;
        }
    }
}

class Main{

    public static void main(String[] args){
        int x = 33;
        System.out.println(x); // 33

        System.out.println(A.x); // 3

        System.out.println(A.multiply(5)); // 50

        System.out.println(A.B.x); // 15

        System.out.println(A.B.multiply(2)); // 20
    }
}
```
