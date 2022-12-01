```java
// function findPairs(numbers){
//     //2つ同じペアになるものだけを返す
//     let hashmap = {};
//     let array = [];
//     for(let i = 0; i<numbers.length; i++){
//         if(hashmap[numbers[i]] == undefined)hashmap[numbers[i]] = 1;
//         else hashmap[numbers[i]]++;
//     }

//         for(let i = 0; i<numbers.length; i++){
//         if(hashmap[numbers[i]] == 2){
//         array.push(numbers[i]);
//         hashmap[numbers[i]] = 0;//2以外だったらなんでもいい
//         }
//     }

//     return array.sort((a, b) => a - b)
// }
import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution{
    public static int[] findPairs(int[] numbers){
        // 関数を完成させてください
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        ArrayList<Integer> array = new ArrayList<Integer>();

        for(int i = 0; i<numbers.length; i++){
            if(hashmap.get(numbers[i]) == null)hashmap.put(numbers[i], 1);
    else hashmap.put(numbers[i], hashmap.get(numbers[i])++);
        }

    for(int i = 0; i<numbers.length; i++){
           if(hashmap.get(numbers[i]) == 2){
           array.add(numbers[i]);
           hashmap.replace(numbers[i]) = 0;
           }
        }

        return array;
    }
}
```

```java
// function firstNonRepeating(s){
//     // 関数を完成させてください
//     //1 番最初に出てくる 1 回しか解いたことがない問題をインデックスで返す
//     let hashmap = {};

//     for(let i = 0; i<s.length; i++){
//         if(hashmap[s[i]] == undefined)hashmap[s[i]]=1;
//         else hashmap[s[i]]++;
//     }

//     for(let i = 0; i<s.length; i++){
//         if(Object.values(hashmap)[i] == 1)return s.indexOf(Object.keys(hashmap)[i]);
// }
// return -1;

// }

import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
class Solution{
    public static int firstNonRepeating(String s){
        // 関数を完成させてください
    //1 番最初に出てくる 1 回しか解いたことがないアルファベットをインデックスで返す
    HashMap<String, Integer> hashmap = new HashMap<>();

    for(int i = 0; i<s.length(); i++){
        if(hashmap.get(s[i]) == null)hashmap.put(s[i], 1);
        else hashmap.put(s[i], hashmap.get(s[i])+1);
    }
    for(int i = 0; i<s.length(); i++){
        if(hashmap.get(s[i]) == 1)return s.indexOf(hashmap.keySet().toArray()[i]);
    }
    return -1;
    }
}
```

```java
class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){//普通のdetaだからE
        this.data = data;
        this.next = null;
    }
    public void addNextNode(SinglyLinkedListNode<E> newNode){//arrayだから<E>
        SinglyLinkedListNode<E> tempNode = this.next;
        this.next = newNode;
        newNode.next = tempNode;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> doubleEvenNumber(SinglyLinkedListNode<Integer> head){
        // 関数を完成させてください
        SinglyLinkedListNode<Integer> pointer = head;
        int i = 0;
        while(pointer != null){
            SinglyLinkedListNode<Integer> currentNode = pointer;
            pointer = pointer.next;
            if(i % 2 == 0)currentNode.addNextNode(new SinglyLinkedListNode(currentNode.data*2));
            i++;
        }
        return head;
    }
}
```

```java
import java.util.Arrays;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

class Solution{
    public static String diceStreakGamble(int[] player1, int[] player2, int[] player3, int[] player4) {
        int winner = Integer.MIN_VALUE;
        int winnerFromIndex = Integer.MAX_VALUE;
        int winnerCount = 0;
        int[][] players = {player1, player2, player3, player4};

        for (int i = 0; i < players.length; i++) {
            Stack<Integer> stack = new Stack<>();
            stack.push(players[i][0]);
            int currentPlayerFromIndex = 0;

            for (int j = 1; j < players[i].length; j++) {
                if (stack.peek() > players[i][j]) {
                    stack.clear();
                    currentPlayerFromIndex = j;
                }
                stack.push(players[i][j]);
            }

            if (winnerCount < players[i].length - currentPlayerFromIndex) {
                winnerFromIndex = currentPlayerFromIndex;
                winner = i;
                winnerCount = players[i].length - currentPlayerFromIndex;
            }
        }

        String outputArrayString = "[";
        for (int i = winnerFromIndex; i < players[winner].length; i++) {
            outputArrayString += players[winner][i] + ",";
        }
        outputArrayString = outputArrayString.substring(0, outputArrayString.length()-1) + "]";

        return String.format(
                "Winner: Player %s won $%s by rolling %s",
                ++winner, winnerCount * 4, outputArrayString);
    }
}
```
