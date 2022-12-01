# doubly linked list

- singly linked list の機能 + 逆方向へも行ける。一つの node に pointer を 2 つ持っている。
- コードで表すとこう ↓

```javascript
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
            //後ろの矢印をcurrentNodeに当てる
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }
        // このcurrent Nodeは最後のnodeです。
        this.tail = currentNode;
    }
```

- doublyLinkedList の index を求めるコードは、linkedList と同じ

- 逆向き表示 pointer が複数必要になる
  pointer = this.tail;
  pointer = pointer.prev;
- reverse と printInreverse の違いは?

```java
class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(arr){
        if(arr.length <= 0){
            this.head =  new Node(null);
            this.tail = this.head;
            return;
        }

        this.head = new Node(arr[0]);
        let currentNode = this.head;
        for(let i = 1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = currentNode;
    }
    ////prev,nextを両方ともセットしながら移動している
    reverse(){
        let reverse = this.tail;
        let iterator = this.tail.prev;

        let currentNode = reverse;
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

    //prevのpointerをtailから通っている
    printInReverse(){
        let iterator = this.tail;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.prev;
        }
        console.log(str)
    }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
numList.printInReverse();

numList.printList();
numList.reverse();
numList.printList();
numList.printInReverse();
```

- 挿入: やり方は片方向リストと同じ

```java
class DoublyLinkedList{
    public Node head;
    public Node tail;

    public DoublyLinkedList(int[] arr){
    //省略
    public Node at(int index){
        Node iterator = this.head;
        for(int i=0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }
        return iterator;
    }

    // 先頭に挿入
    public void preappend(Node newNode){
        this.head.prev = newNode;
        newNode.next = this.head;
        newNode.prev = null;
        //先頭をアップデート
        this.head = newNode;
    }

    // 末尾に挿入
    public void append(Node newNode){
        this.tail.next = newNode;
        newNode.prev = this.tail;
        newNode.next = null;
        // 末尾をアップデート
        this.tail = newNode;
    }

    // 与えられたノードの次に追加します。必要であれば末尾を更新してください。
    // 処理を紙に書いて確認しましょう。オブジェクトなので、=はメモリアドレスを指します。
    public void addNextNode(Node node, Node newNode){
        Node tempNode = node.next;
        node.next = newNode;
        newNode.next = tempNode;
        newNode.prev = node;

        // もし与えられたノードが末尾なら、その後ろに新しいノードが追加されるので、末尾をアップデートしてください。
        // それ以外の場合は、tempNodeの前をnewNodeに設定してください。
        if(node == this.tail) this.tail = newNode;
        else tempNode.prev = newNode;
    }

  class Main{

    public static void main(String[] args){
        int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
        DoublyLinkedList numList = new DoublyLinkedList(arr);

        numList.printList();

        // 45をpreappend
        numList.preappend(new Node(45));//先頭に挿入

        // 71をappend
        numList.append(new Node(71));

        // ノードの後に新しいノードを追加
        numList.addNextNode(numList.at(3), new Node(4));
        numList.addNextNode(numList.at(15), new Node(679));
    }
}
```

- 削除

```java
    // 末尾を切り離すO(1)
    public void popFront(){
        this.head = this.head.next;
        this.head.prev = null;
    }

    // 先頭を切り離すO(1)
    public void pop(){
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    public void deleteNode(Node node){
        //末尾だったらpop
        if(node == this.tail) this.pop();
        //先頭のみだったら先頭pop
        else if(node == this.head) this.popFront();

        else {
            //nodeの左右にあるnext,prev計4本をそれぞれnode.prev,node.nextに当て直している。
            //つまりnodeに付いているpointerは無くなる。
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }
```
