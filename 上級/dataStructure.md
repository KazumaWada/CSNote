# Data Structure

data structure

- list[]
- linked list

## 連結リスト(メモリアドレスが等しく連続していないリスト。pointer で繋がっている。)

## queue と stack では、list より linkedList の方が効果的に計算できる。

- list は一度作ってしまうと、削除追加が難しいが、linked list は pointer の先を変えるだけで簡単にそれらを実装することができる。

https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B5%90%E3%83%AA%E3%82%B9%E3%83%88#%E9%80%A3%E7%B5%90%E3%83%AA%E3%82%B9%E3%83%88%E3%81%A8%E9%85%8D%E5%88%97

- メモリ上のリストを表現することができる.
- list で言う array[0]は、連結リストでは node と呼ぶ。
- node と辺で出来ている。
- node の pointer を辿っていけば、欲しい情報がある node にたどり着く。

リストとは違い、データが連続したメモリに保存されないデータ構造。つまり、for,index でとってくることができないって事かな？

![](/上級//FireShot Capture 269 - Recursion - コンピュータサイエンスを基礎から学べるプラットフォーム - recursionist.io.png)

> 連結リストはポインタによってデータどうしがリンクされているシーケンスを持つデータ構造です。したがって、配列のときのようにデータは連続したメモリには格納されません。

list: adress が連続している配列
連結 list:pointar で data 同士がリンクされているので、連続してメモリに保存されているわけではない。メモリ上のリストを表現できる。

- 連結リストの各要素は node と呼ばれる。node は object である。
- グラフ理論と一緒に使われることがある。枝のように node と次の node が繋がっている。つまり、node が次の node と繋がっている。従って、リンクを辿るだけで、nodeX から nodeY へと移動づることができる。

### 連結リストの中の singly linked list という種類のリスト

- 最も単純な連結リスト. node = そのメモリに入る data + 次の node がどこなのかを示す Next(= pointer))の 2 つが object によって表現されている。node は object なので、次の node を示すコードは、メモリアドレスである事に注意。
  ↓
  pointer は、node 内の関数に書かれているため、メモリアドレスを参照している。
- 先頭は、インデックスの 0 ではない可能性もある。
- 末尾は pointer に null を当てる。

```java
class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

class SinglyLinkedList{
    public Node head;
    public SinglyLinkedList(Node head){
        this.head = head;
    }
}

class Main{
    public static void main(String[] args){
    Node node1 = new Node(4);
    Node node2 = new Node(65);
    Node node3 = new Node(24);

    SinglyLinkedList numList = new SinglyLinkedList(node1);
    }

}
```

```java
class Node {
    public int data;
    public Node next;

    public Node(int data) {
        this.data = data;
        // nextを割り当てないでください。オブジェクト変数はヒープアドレスへの参照を保持するだけで、アクセス演算子「.」を使ってデータにアクセスします。オブジェクトが何も代入されていない場合は、何も指していないのでnullを保持します。
    }
}

// 先頭のノードを保持するコンテナで、リスト自体を表します。
class SinglyLinkedList{
    public Node head;

    public SinglyLinkedList(Node head){
        this.head = head;
    }
}

class Main{
    public static void main(String[] args){
        // 3つのノードを作成します。
        Node node1 = new Node(4);
        Node node2 = new Node(65);
        Node node3 = new Node(24);

        SinglyLinkedList numList = new SinglyLinkedList(node1);

        // リストに他のリストを追加します。
        // nodeはオブジェクトなので、=は値ではなく、メモリアドレスを指している点に注意してください。
        numList.head.next = node2;
        numList.head.next.next = node3;

        // 連結リストを反復します。
        // 反復によって、現在のノードは次のノードになります。この処理を最後のノードまで繰り返します。
        Node currentNode = numList.head;
        while(currentNode != null){
            // 現在のノードを出力します。
            System.out.println(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}
```

```java
class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

class SinglyLinkedList{
    public Node head;

    public SinglyLinkedList(Node head){
        this.head = head;
    }
}

class Main{
    public static void main(String[] args){

        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};

        SinglyLinkedList numlist = new SinglyLinkedList(new Node(arr[0]));

        Node currentNode = numlist.head;
        for(int i = 1; i < arr.length; i++) {
            currentNode.next = new Node(arr[i]);
            currentNode = currentNode.next;
        }

        currentNode = numlist.head;
        while(currentNode != null){
            System.out.println(currentNode.data);
            currentNode = currentNode.next;
        }

    }
}
```

## 片方向リスト

- 行える操作(index, 挿入, 削除)
- list はデータの変更のみできるが、linkedList は、変更、削除、追加ができる。
  https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B5%90%E3%83%AA%E3%82%B9%E3%83%88#%E7%89%87%E6%96%B9%E5%90%91%E3%83%AA%E3%82%B9%E3%83%88_2

### index

配列は、O(1)でアクセスできるが、片方向リストは、O(n)かかってしまう。取得したい要素まで、pointer を辿る必要がある。

連結リストから index を探すコード。
このコードを見ていて思ったけど、リストは全て繋がって一つだけど、連結リストは全て散らばっていて pointer で繋がっているってことかな??

- その Node の index にある data を特定する&&その Node の index を特定する

```java
class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

class SinglyLinkedList{
    public Node head;
    //配列をlinkedListにする。
    public SinglyLinkedList(int[] arr){
        this.head = arr.length > 0 ? new Node(arr[0]) : null;

        Node currentNode = this.head;
        for(int i = 1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode = currentNode.next;
            System.out.print(currentNode.data + " ");
        }
    }

    //linkedListのindexを辿る
    public Node at(int index){
        Node iterator = this.head;
        for(int i = 0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }
        return iterator;
    }

    //linkedListの要素のindexを特定する
        public int findNode(int key){
        int count = 0;
        Node iterator = this.head;
        while(iterator != null){
            if(iterator.data == key) return count;
            iterator = iterator.next;
            count++;
        }
        return -1;
    }
}

class Main{
    public static void main(String[] args){
        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        SinglyLinkedList numList = new SinglyLinkedList(arr);
        // 連結リストを反復します。
        System.out.println(numList.at(2).data);
        System.out.println(numList.at(12).data);
        System.out.println(numList.findNode(67));
        System.out.println(numList.findNode(767));

        // System.out.println(numList.at(13).data); // a(13)はnullを返すので、エラーになります。
    }
}
```

### insert

- list は、サイズが固定されているため、新しく増やそうとしたら、また新たに配列を作成することが必要。o(n)
- linked list は、前後の pointer の先を変更するだけで要素を insert することができる。o(1)

```java
// 入力のデータ型： SinglyLinkedListNode<integer> head, integer position, integer data

// 出力のデータ型： SinglyLinkedListNode<integer>

// insertAtPosition(singlyLinkedList([2,10,34,45,67,356]),2,5) --> 2➡10➡34➡5➡45➡67➡356➡END


class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> insertAtPosition(SinglyLinkedListNode<Integer> head, int position, int data){

        SinglyLinkedListNode<Integer> currentNode = head;

        for(int i = 0; i<position; i++){
            if(currentNode.next == null)return head;
            currentNode = currentNode.next;
        }

        SinglyLinkedListNode newData =new SinglyLinkedListNode(data);
        SinglyLinkedListNode<Integer> temp = currentNode.next;
        currentNode.next = newData;
        newData.next = temp;

        return head;
    }
}

```

- index が偶数番目の要素を 2 倍にする。それを要素の後ろに追加する。

```javascript
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  addNextNode(newNode) {
    let tempNode = this.next;
    this.next = newNode;
    newNode.next = tempNode;
  }
}

function doubleEvenNumber(head) {
  // 関数を完成させてください
  let currentNode = head;
  console.log("currentNode" + currentNode.data); //なぜ全ての配列ではなく、配列の最初が出力されるのか。。== 連結リストだからでしょ笑笑
  let i = 0;
  while (currentNode != null) {
    //なぜわざわざ変数に格納するのか。
    //変数にしないと、メソッドチェーンが使えないからかな?
    let pointer = currentNode;
    console.log("pointer" + pointer.data);
    console.log("currentNode" + currentNode.data);
    currentNode = currentNode.next;
    if (i % 2 == 0)
      pointer.addNextNode(new SinglyLinkedListNode(pointer.data * 2));

    i++;
    //console.log(i);
  }
  return head;
}

//doubleEvenNumber(singlyLinkedList([3,1,5]))
```

- 連結リストの先頭に挿入

```javascript
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  newNode.next = head;
  head = newNode;
  return head;
}

//insertAtHead(singlyLinkedList([3,3,2,10,34,45,67,356]) ,367)
```

- 連結リストの末尾に挿入(.next == null になるまで loop させて、その node の次に挿入する)

```javascript
class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}
    append(newNode) {
        let pointer = this.head;
        while (pointer.next !== null) {
            pointer = pointer.next;
        }
        pointer.next = newNode;
    }


let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
numList.append(new Node(45));
numList.append(new Node(236));
numList.printList();
```

### delete

- 片方向リストの先頭は o(1)で削除できるが、それ以外は時間がかかる。片方向にしか進めないから。だから、先頭から順番に調べていく必要がある。
- 先頭の削除は、b 該当する pointer まで行って、pointer.next = pointer.next.next をする。

```javascript
class SinglyLinkedList{
    public Node head;

    public SinglyLinkedList(int[] arr){

    // リストの先頭の要素をポップします。O(1)
    //先頭の削除は、pointerを飛ばして次に当てればいいだけ。
    public void popFront(){
        this.head = this.head.next;
    }

    public void delete(int index){
        if (index == 0){
            this.popFront();
            return;
        }
        Node iterator = this.head;
        // 目的のデータの手前のインデックスまで、リストの中を反復します。
        for(int i = 0; i < index-1; i++){
            // もし、次のノードがなかった場合、処理を中断します。
            if(iterator.next == null) return;
            iterator = iterator.next;
        }
        //目的のindexまで行ったら、それを飛ばして次に当てればいいだけ。
        iterator.next = iterator.next.next;
    }
}

class Main{

    public static void main(String[] args){

        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        SinglyLinkedList numList = new SinglyLinkedList(arr);

        numList.printList();

        System.out.println("popFront");
        numList.popFront();
        System.out.println("popFront");
        numList.popFront();
        numList.printList();

        System.out.println("delete index:4");
        numList.delete(4);
        numList.printList();

        System.out.println("delete index: 9");
        numList.delete(9);
        numList.printList();
    }
}
```

- リストを逆順にする。

```java
class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
    }

    public void addNextNode(Node newNode){
        Node tempNode = this.next;
        this.next = newNode;
        newNode.next = tempNode;
    }
}

class SinglyLinkedList{
    public Node head;

    public SinglyLinkedList(int[] arr){
        this.head = arr.length > 0? new Node(arr[0]) : null;

        Node currentNode = this.head;
        for(int i=1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode = currentNode.next;
        }
    }

    public Node at(int index){
        Node iterator = this.head;
        for(int i=1; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }
        return iterator;
    }

    public void preappend(Node newNode){
        newNode.next = this.head;
        this.head = newNode;
    }

    public void popFront(){
        this.head = this.head.next;
    }

    public void delete(int index){
        if (index == 0) this.popFront();
        Node iterator = this.head;
        for(int i = 0; i < index-1; i++){
            if(iterator.next == null) return;
            iterator = iterator.next;
        }
        iterator.next = iterator.next.next;
    }

    public void reverse(){
        if(this.head == null || this.head.next == null) return;

        // オブジェクトなので、=は実際の値を格納しているわけではなく、メモリアドレスを指している点に十分注意ください。
        // A -> B -> C を、C -> B -> Aに変更する場合は、向きに少し混乱するのでゆっくり解読しましょう。

        //末尾がnullだったのを、先頭をnullにする。
        Node reverse = this.head;
        this.head = this.head.next;
        reverse.next = null;

        while(this.head != null){
            // =はメモリアドレスを指します。紙に書いてロジックを確認しましょう。
            Node temp = this.head;
            this.head = this.head.next;
            temp.next = reverse;
            reverse = temp;
        }
        // 処理が終わったら、headのnextを反転したリストを含むtempHeadに割り当てましょう。
        this.head = reverse;
    }

    public void printList(){
        Node iterator = this.head;
        String str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        System.out.println(str);
    }
}

class Main{

    public static void main(String[] args){

        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        SinglyLinkedList numList = new SinglyLinkedList(arr);

        numList.printList();
        numList.reverse();
        numList.printList();
    }
}
```

## doubly linked list

- 次の pointer に加えて、前の pointer も持つ連結リスト。

```java
class Node{
    // 前後を追跡します。
    public int data;
    public Node prev;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

// リストは少なくとも1つのノードを持っている必要があります。
// ヌルリストをサポートしたい場合は、それに応じてコードを追加してください。
class DoublyLinkedList{
    public Node head;
    public Node tail;

    public DoublyLinkedList(int[] arr){
        // 今回は末尾を追跡します。
        if(arr.length <= 0){
            this.head = null;
            this.tail = this.head;
            return;
        }

        this.head = new Node(arr[0]);
        Node currentNode = this.head;
        for(int i=1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            // 次のノードの前のノードをcurrent Nodeに割り当てます。
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }
        // このcurrent Nodeは最後のnodeです。
        this.tail = currentNode;
    }

    public void printList(){
        Node iterator = this.head;
        String str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        System.out.println("[" + str + "]");
    }
}

class Main{
    public static void main(String[] args){
        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        DoublyLinkedList numList = new DoublyLinkedList(arr);

        numList.printList();//[35 23 546 67 86 234 56 767 34 1 98 78 555 ]
        System.out.println(numList.head.data);//35
        System.out.println(numList.head.next.data);//23
        System.out.println(numList.head.next.prev.data);//35
        System.out.println(numList.tail.data);//555
        System.out.println(numList.tail.prev.data);//78

    }
}
```

### index

- singly linked list の時と同じで、線形探索(o(n))を行います。

```java
class Node{
    public int data;
    public Node prev;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

class DoublyLinkedList{
    public Node head;
    public Node tail;

    public DoublyLinkedList(int[] arr){
        if(arr.length <= 0){
            this.head = null;
            this.tail = this.head;
            return;
        }

        this.head = new Node(arr[0]);
        Node currentNode = this.head;
        for(int i=1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
    }

    public Node at(int index){
        Node iterator = this.head;
        // 片方向リストと同じ処理
        for(int i=0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }
        return iterator;
    }

    public void printList(){
        Node iterator = this.head;
        String str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        System.out.println("[" + str + "]");
    }
}

class Main{
    public static void main(String[] args){
        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        DoublyLinkedList numList = new DoublyLinkedList(arr);

        numList.printList();
        System.out.println(numList.at(0).data);
        System.out.println(numList.at(2).data);
        System.out.println(numList.at(12).data);

    }
}
```

- 逆表示

```java
class Node{
    public int data;
    public Node prev;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}

class DoublyLinkedList{
    public Node head;
    public Node tail;

    public DoublyLinkedList(int[] arr){
        if(arr.length <= 0){
            this.head = null;
            this.tail = this.head;
            return;
        }

        this.head = new Node(arr[0]);
        Node currentNode = this.head;
        for(int i=1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
    }

    public Node at(int index){
        Node iterator = this.head;
        for(int i=0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }
        return iterator;
    }

    public void reverse(){
        Node reverse = this.tail;
        Node iterator = this.tail.prev;

        Node currentNode = reverse;
        while(iterator != null){
            currentNode.next = iterator;

            iterator = iterator.prev;
            if(iterator != null) iterator.next = null;

            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;

        }
        this.tail = currentNode;
        this.head = reverse;
        this.head.prev = null;
    }

    public void printInReverse(){
        String str = "";
        Node iterator = this.tail;
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.prev;
        }
        System.out.println("[" + str + "]");
    }

    public void printList(){
        Node iterator = this.head;
        String str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        System.out.println("[" + str + "]");
    }
}

class Main{
    public static void main(String[] args){
        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        DoublyLinkedList numList = new DoublyLinkedList(arr);

        numList.printList();
        numList.printInReverse();

        numList.printList();
        numList.reverse();
        numList.printList();
        numList.printInReverse();
    }
}
```
