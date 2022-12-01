# memory allocation(メモリの割り当て)

> メモリ上のある領域を確保して、変数やデータ構造、クラスのインスタンスなどをその領域に保存することを指します
> それには 3 つの方法がある

## static memory allocation(静的メモリ当て)//グローバル関数、import

> 静的メモリ割り当ては、プログラムが実行される前であるコンパイル時に行われます。割り当てられるサイズは固定されており、静的に割り当てされた変数はプログラムの開始から終了まで存続します。スコープの説明としてグローバル変数はプログラムが終了するまでメモリを占有すると言及しましたが、これは静的メモリ割り当てによるものだからです。

静的メモリ当ては全てグローバル変数ってこと?

## stack memory allocation or you can say automatic memory allocation(スタックメモリ当て)//関数

- call stack に値が入る。static memory allocation とは違い、割り当てられるサイズを固定することはできない。

## heap memory allocation or you can say dynamic memory allocation(ヒープ、動的メモリ割り当て)//ユーザーによる操作

- ユーザーがいつでも割り当てることができるメモリ領域
- pop されても、ここに割り当てられた関数は消滅しない。
- メモリアドレスが参照できる限り、そのデータを取得することができる。
- ユーザーの操作によって、heap memory の状態は決定される(x.delete とかで)
- ユーザーが heap memory を削除し忘れてそのメモリが II 度と使われない状態を'memory leak'と呼びます。最近は garbage collector が何とかしてくれるそう。
