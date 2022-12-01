# Queue

- stuck のように、head に要素が追加される。(Enqueue)(人が列の最後尾に並ぶイメージ)-> 末尾の要素が押し出されて実行される。(Dequeue)(先頭の人にお店に入っていい順番が回ってきた時)
- リストの末尾に要素を挿入する関数 o(1)
- リストの先頭を取得して削除する関数 o(1)

## 末尾に要素が入り、先頭から出ていく

```java
class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    public Node head;
    public Node tail;

    public Queue(){
        this.head = null;
        this.tail = null;
    }

    public Integer peekFront(){
        if(this.head == null) return null;
        return this.head.data;
    }

    public Integer peekBack(){
        if(this.tail == null) return this.peekFront();
        return this.tail.data;
    }

    //末尾に要素が入る
    public void enqueue(int data){
        if(this.head == null){
            this.head = new Node(data);
        }
        else if(this.tail == null){
            this.tail = new Node(data);
            this.head.next = this.tail;
        }
        else{
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
    }

    //先頭を取り出す、排出する、切り離す
    public Integer dequeue(){
        if(this.head == null) return null;
        Node temp = this.head;

        if(this.head.next == null){
            this.head = null;
            this.tail = null;
        }
        else this.head = this.head.next;

        return temp.data;
    }
}
class Main{
    public static void main(String[] args){
        Queue q = new Queue();
        System.out.println(q.peekFront());
        System.out.println(q.peekBack());

        q.enqueue(4);
        System.out.println(q.peekFront());//4
        System.out.println(q.peekBack());//4
        //上から入って下から出ていく
        q.enqueue(50);
        System.out.println(q.peekFront());//4
        System.out.println(q.peekBack());//50

        q.enqueue(64);
        System.out.println(q.peekFront());//4
        System.out.println(q.peekBack());//64

        System.out.println("dequeued :" + q.dequeue());//4
        System.out.println(q.peekFront());//50
        System.out.println(q.peekBack());//64

    }
}
// null
// null
// 4
// 4
// 4
// 50
// 4
// 64
// dequeued :4
// 50
// 64
```

# Deque(両端 queue)双方向リストを使用

- 両方から挿入、削除ができる queue
  EnqueueFront: 先頭に挿入
  EnqueueBack: 末尾に挿入
  DequeueFront: 先頭を削除して返す
  DequeueBack: 末尾を削除して返す
- 双方向リストを使って(prev)、計算量を少なくする。

```java
// - push: 頂上に挿入
// - peek: 頂上にある物を読み取る
// - pop: 頂上にある要素を取り出す

//双方向リスト
class Node{
    public int data;
    public Node prev;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

//queue
class Deque{
    public Node head;
    public Node tail;

    public Deque{
        this.head = null;
        this.tail = null;
    }

    //先頭のデータを読み取る
    public Integer peekFront(){
        if(this.head == null)return null;
        return this.head.data;
    }

    public Integer peekBack(){
        if(this.head == null) return null;
        return this.tail.data;
    }

    //先頭に挿入
    public void enqueueFront(int data){
        //先頭が空だったら新しく作る
        if(this.head == null){
            this.head = new Node(data);
            this.tail = this.head;
        }
        //先頭にNodeがあったら、
        else{
            Node node = new Node(data);
            //先頭に挿入だから.
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    //末尾に追加
    public void enqueueBack(int data){
        if(this.head == null){
            this.head = new Node(data);
            this.tail = this.head;
        }
        else{
            Node node = new Node(data);
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    //先頭を削除
    public Integer dequeueFront(){
        if(this.head == null)return null;

        Node temp = this.head;
        this.head = this.head.next;
        if(this.head != null) this.head.prev = null;
        else this.tail = null;
        return temp.data;
    }

    //末尾を削除
    public Integer dequeueBack(){
        if(this.tail == null) return null;

        Node temp = this.tail;
        this.tail = this.tail.prev;

        if(this.tail != null) this.tail.next = null;
        else this.head = null;
        return temp.data;
    }
}
```

- queue を使って、リストの最大値を求める。

```java
//繰り返し処理で先頭に最大値を置いて行く
class Main{
    public static int getMax(int[] arr){
        Deque deque = new Deque();//上の段のコード全てがDequeの関数
        // arr[0]を両端キューの先頭にする。
        deque.enqueueFront(arr[0]);

        // 最大値は両端キューの先頭へ、その他の値は末尾へ向かいます。
        for(int i = 1; i < arr.length; i++){
            //先頭よりも大きかったら、それを先頭にする。
            if(arr[i] > deque.peekFront()) deque.enqueueFront(arr[i]);
            //末尾に挿入する。
            else deque.enqueueBack(arr[i]);
        }

        return deque.peekFront();
    }

    public static void main(String[] args){
        int[] arr = new int[]{34,35,64,34,10,2,14,5,353,23,35,63,23};

        //353
        System.out.println(getMax(arr));
    }
}
```

## sliding window 良く使われるアルゴリズムの中の一つ。

#### 新しい値より小さな既存の値は最大値になり得ることはないということです。

- サイズ 3 の整数たちの中で最大値を求める。(sliding window)

入力: [1, 2, 3, 1, 4, 5, 2, 3, 6], K = 3
出力: 3, 3, 4, 5, 5, 5, 6

1, 2, 3 の最大値は 3 です。
2, 3, 1 の最大値は 3 です。
3, 1, 4 の最大値は 4 です。
1, 4, 5 の最大値は 5 です。
4, 5, 2 の最大値は 5 です。
5, 2, 3 の最大値は 5 です。
2, 3, 6 の最大値は 6 です。

- queue を使わないと、o(n\*k)の計算量がかかってしまう。両端 queue を使うと、o(n)で解決することができる。

- sliding window とは?
  上の例文を用いて説明すると、
  スライドして出た新しい値より既存の小さい値は、全て削除することができる。
  右にスライドして行った場合、
  左にある値は、常に現在の最大値であることがわかる。

```java
//   EnqueueFront: 先頭に挿入
//   EnqueueBack: 末尾に挿入
//   DequeueFront: 先頭を削除して返す
//   DequeueBack: 末尾を削除して返す
//nodeとdequeのclassは省略。

class Main{

    public static ArrayList<Integer> getMaxWindows(int[] arr, int k){
        ArrayList<Integer> results = new ArrayList<>();

        if(k > arr.length) return results;

        Deque deque = new Deque();

        // dequeの初期化
        for (int i=0; i < k; i++){
            //arr[i]を比較していき、大きかったら、末尾に挿入
            while(deque.peekBack() != null && arr[deque.peekBack()] <= arr[i]){
                //末尾を削除
                deque.dequeueBack();
            }
            //elseではない!↓
            deque.enqueueBack(i);

        }

        for(int i=k; i < arr.length; i++){
            // dequeの先頭は最大値
            results.add(arr[deque.peekFront()]);

            // ウィンドウ外にある要素は取り除きます。
            while(deque.peekFront() != null && deque.peekFront() <= i-k) deque.dequeueFront();
            // 現在の値とそれより小さい全てのdequeの値をチェック
            while(deque.peekBack() != null && arr[deque.peekBack()] <= arr[i]) deque.dequeueBack();
            deque.enqueueBack(i);
        }

        // 最後のmax
        results.add(arr[deque.peekFront()]);
        return results;
    }

    public static void main(String[] args){

        // [64, 64, 64, 34, 14, 353, 353, 353, 353, 63]
        int[] arr = new int[]{34,35,64,34,10,2,14,5,353,23,35,63,23};
        System.out.println(getMaxWindows(arr,4));

    }
}
```
