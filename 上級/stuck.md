# stack : push,pop,peek

そもそも stuck は再帰の時にやったように、頂上に stuck して、一番最初に取り出されるものも頂上からだった。

- push: 頂上に挿入
- peek: 頂上にある物を読み取る
- pop: 頂上にある要素を取り出す
  > push、peek、pop の 3 つを見てわかる通り、スタックの頂上の要素だけが自由に読み書きできます。

```java
class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    public Node head;

    public Stack(){
        this.head = null;
    }

    //dataがheadになる。headがdata.nextになる。
    public void push(int data){
        Node temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    //頂点.nextを頂点にする
    public Integer pop(){
        if (this.head == null) return null;
        Node temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    //今あるstackの頂点を返す。
    public Integer peek(){
        if (this.head == null) return null;
        return this.head.data;
    }
}

class Main{

    public static void main(String[] args){

        Stack stack = new Stack();
        stack.push(2);//2->head->
        System.out.println(stack.peek());//stackの頂点を返す。

        stack.push(4);
        stack.push(3);
        stack.push(1);
        stack.pop();//先頭のnextを外す
        System.out.println(stack.peek());
    }
}
```

```javascript
// diceStreakGamble([1,2,3],[3,4,2],[4,2,4],[6,16,4])
// --> Winner: Player 1 won $12 by rolling [1,2,3]
function diceStreakGamble(player1, player2, player3, player4) {
  const scores = [
    consecutiveWalk(player1),
    consecutiveWalk(player2),
    consecutiveWalk(player3),
    consecutiveWalk(player4),
  ];

  let maxScore = scores[0].length;
  let index = 0;

  for (let i = 0; i < scores.length; i++) {
    if (maxScore < scores[i].length) {
      maxScore = scores[i].length;
      index = i;
    }
  }

  return `Winner: Player ${index + 1} won $${maxScore * 4} by rolling [${
    scores[index]
  }]`;
}

function consecutiveWalk(arr) {
  stack = [];
  stack.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (stack[stack.length - 1] > arr[i]) {
      let max = 0;
      while (stack.pop() != undefined);
    }
    stack.push(arr[i]);
  }

  return stack;
}
```
