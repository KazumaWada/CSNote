# scope

- ローカルスコープは、関数が呼ばれて stack されて、計算が終わったら、変数、仮引数は削除される。
- グローバルスコープで紐付けされた名前は、常にメモリ上に残る。メモリを占有する。

## 値渡し(pass by value)と参照渡し(pass by reference). 参照渡しは、C++と PHP のみ。。x

- pass by value: 実引数の値のコピーが仮引数に渡される。セルに格納されているデータがコピーされ、他のセルへと渡される。
- pass by reference: 実引数のメモリアドレスが仮引数に渡される。

### pass by value

ほとんどの最新言語では、デフォルトで値渡しになっている。

```java
class Main{
    public static String message(String inputMessage){
        inputMessage = inputMessage + " - is the message.";
        return inputMessage;
    }

    public static void main(String[] args){
        String subject = "It will rain tomorrow";
        System.out.println(subject);// "It will rain tomorrow"

        String newMessage = message(subject);//subject == message関数の仮引数にコピー。

        System.out.println(subject); // "It will rain tomorrow"
        System.out.println(newMessage); // "It will rain tomorrow - is the message."

    }
}
```

# memory allocation

- 変数やデータ構造、クラスのインスタンスなどを保存すること。

## static memory allocation

- プログラムが実行される前のコンパイル時に実行される。

```java
public static final
```

## stack memory allocation

- System.out で関数が呼び出される->その関数は、一時的に stack に格納される->関数が実行される。return される。->関数は stack から破壊される。

```java
class Main{
    public static double getPi(){
        // ローカル変数
        double pi = 3.14159265359;
        // この関数がスタックからポップされると、変数 pi は存在しなくなります。
        return pi;
    }

    public static void main(String[] args){
        // 関数はプログラム中に呼び出されると、オペレーティングシステムによって関数自身に関する情報をコールスタックと呼ばれる領域に一時的に格納されます
        System.out.println(getPi());
    }
}
```
