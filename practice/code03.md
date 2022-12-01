```java
import java.util.Arrays;

class Node{
    public int data;
    public Node next;

    public Node(int data){
        this.data = data;
    }
}
//<E>について載っているものがあった。
//https://so-zou.jp/software/tech/programming/java/collection/list/array-list.htm#:~:text=public%20boolean%20add%20%28E%20e%29%20add%20-%20ArrayList,20%5D%20array.add%20%281%2C%205%29%3B%20%2F%2F%20%5B10%2C%205%2C%2020%5D
//https://docs.oracle.com/javase/jp/7/api/java/util/ArrayList.html

//E	get(int index) -> リスト内の指定された位置にある要素を返します。
class SinglyLinkedListNode<E>{
    public Node head;

    public SinglyLinkedListNode(Node head){
        this.head = head;
    }
}

class Solution{
    public static SinglyLinkedListNode<Integer> getLinkedList(int[] arr){
        // 関数を完成させてください
        //int arr = new int[]{3,2,1,5,6,4};
        //nodeを作って、singlyLinkedListNodeに入れている。
        SinglyLinkedListNode numList = new SinglyLinkedListNode(new Node(arr));
        // SinglyLinkedListNode はthis.headだから、arr[0]じゃない??
        //numlist = [12,2,0,88,88,49];

        Node currentNode = numList.head;
        for(int i = 0; i < numList.length; i++){
            System.out.println(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

```

- recursion の見本

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

```java
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

class Solution{
    public static double processPayment(String creditCardType , int cost){
        // 関数を完成させてください
        if(isValidCard(creditCardType) && 300 >= cost + tipCalculator(cost))return (cost*1.1) + tipCalculator(cost);
        else return -1;
    }

    public static boolean isValidCard(String card){
        if(card == "Visa" || card == "MasterCard")return true;
        else return false;
    }

    public static double tipCalculator(int cost){
        double tipRate = 0.1;
        if(cost % 3 == 0)tipRate = 0.03;
        else if(cost % 5 == 0)tipRate = 0.05;
        else if(cost % 7 == 0)tipRate = 0.07;
        return cost*tipRate;
    }
}

```

```java
class Solution{
    public static int recursiveAddition(int m, int n){
        // 関数を完成させてください
        if(n == 0)return m;
        return recursiveAddition(m+1, n-1);
    }
}
```

```java
class Solution{
    public static int fibonacci(int n){
        // 関数を完成させてください
        if(n ==0)return 0
        else if(n == 1)return 1
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
```

```java
 class Solution{
    public static String divisor(int number){
        // 関数を完成させてください
        return helper(number,1,"");
    }

    public static String helper(int n, int nNumbers, String count){
        if(nNumbers == n)return count = count + n;
        else if(n % nNumbers == 0)count = count + String.valueOf(nNumbers) + "-";
        return helper(n, nNumbers + 1,count);
    }
}
```

```java
class Solution{
    public static boolean recursiveIsPalindrome(String s){
        // 関数を完成させてください
        s = s.toLowerCase();
        //空白削除
        s = s.replaceAll(" ","");
        return helper(s, s[0], s[s.length()-1)];
    }

    public static boolean helper(String s, int left, int right){
        if(left.length() == s.length()-1)return true;
        else if(s[left] != s[right])return false;
        return helper(s, left+1, right-1);
    }
}

```

```javascript
function recursiveIsPalindrome(s){
    // 関数を完成させてください
    s.
}
```

```java
class Solution{
    public static boolean recursiveIsPalindrome(String s){
        // 関数を完成させてください
        s = s.replace(" ","").toLowerCase();
        return recursiveIsPalindromeHelper(s, 0, s.length()-1);
    }

    public static boolean recursiveIsPalindromeHelper(String str, int left, int right){
        if (left > right) return true;

        if (str.charAt(left) != str.charAt(right)) return false;

        return recursiveIsPalindromeHelper(str, left+1, right-1);
    }
}
```

```java
class Solution{
    public static long recursiveDigitsAdded(long digits){
        // 関数を完成させてください
        //return digits%10;//一の位取得
        //return digits/10;//一の位がなくなる。
        if(digits < 10)return digits++;
        else spritAndAdd(digits) + spritAndAdd(digits);
        //else if(digits < 10)return digits++;
    }

    public static long spritAndAdd(long current){
        if(current < 10)return current++;
        return current % 10 + spritAndAdd(current/10);
    }
}
```

- その index にあるデータを表示するコード

```javascript
class Node{
    this.next = next;
    this.data = data;
}

class SinglyLinkedList{
    //仮引数には、numListが入る
    //constroctorの内容: arrをNodeに変えてlinkedListを作る作業。
    constroctor(arr){
        //arr[0].nextとarr[0].dataができた。
        this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);
        //今現在のheadはarr[0]だよ。
        let currentNode = this.head;
        //ループでarrの一つ一つをNodeにしてつないで行く。
        for(let i = 1; i<arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode = currentNode.next;
        }
    }

    //上のconstroctorで作られたnodeをheadから順にindex回pointerxを通して見ていく。
    at(index){
        let iterator = this.head;//currentNode. 今poinerされているnode
        for(let i = 0; i<index; i++){
            iterator = iterator.next;
            if(iterator == null)return null;
        }
        return iterator;
    }
}

let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);
console.log(numList.at(2).data);
```

```javascript
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtTail(head, data) {
  // 関数を完成させてください
  let newNode = new SinglyLinkedListNode(data);
  let pointer = this.head;
  while (pointer.next != null) {
    pointer = pointer.next;
  }
  pointer.next = newNode;
  return head;
}

//insertAtTail(singlyLinkedList([3,3,2,10,34,45,67,356]) ,367)
```

- 文字列の合体

```javascript
function mergeString(s1, s2) {
  let result = "";
  for (let i = 0; i <= s1.length - 1; i++) {
    result = result + s1[i] + s2[i];
  }
  return result;
}
```

```java
class Solution{
    public static String divideByWords(String alphabet){
        // 関数を完成させてください
        String lower = alphabet.toLowerCase();
        String result = "";
        for(int i = 0; i<alphabet.length(); i++){
            if(i == 0)result = result + alphabet.toUpperCase().charAt(i);
            result = result + alphabet.charAt(i);
            if(alphabet.charAt(i) != lower.charAt(i))
            result =result + " ";
        }
        return result;
    }
}
//H elloN iceT oM eetY ou

```

```java
class Solution{
    public static String fizzBuzz(int n){
        // 関数を完成させてください
        String result = "";
        for(int i = 1; i<=n; i++){
            if(i%3 == 0 && i%5 == 0)result += "FizzBuzz" + "-";
            else if(i%3 == 0)result += "Fizz" + "-";
            else if(i%5 == 0)result += "Buzz" + "-";
            else result += String.valueOf(i) + "-";
        }
        return result.substring(0,result.length()-1);
    }
}
```

```java
class Solution{
    public static boolean isPalindromeInteger(int n){
        // 関数を完成させてください
        String stringN = string.valueOf(n);

        for(int i = 0; i<= stringN.length()-1; i++){
        for(int j = stringN.length()-1; j<=j*2; j--){
            if(stringN.charAt(i) != stringN.charAt(j))return false;
        }
        }

        return true;
    }
}
```

```java
class Solution{
    public static int sumOfAllPrimes(int n){
        // 関数を完成させてください
        if(n == 1)return 0;
        int output = 0;
        for(int i = 2; i<=n; i++){//if5
        System.out.println("i" + i);
            for(int j = 2; j<=i-1; j++){//then 2~4
             System.out.println("j" + j);
                //割り切れてしまったら、素数ではないから離脱
                //iが5だったら、4までにしかループしないから。
                if(j == i-1)output += i;
                //1とその数以外で割り切れてしまったら、抜けてください。
                else if(i % j == 0)break;
            }
        }
        return output;
    }
}
```

```java
class Person {
       public String firstName;
       public String lastName;

       public Person(String firstName, String lastName){
           this.firstName = firstName;
           this.lastName =  lastName;
       }

   public String getFullName(){
       return this.firstName + " " + this.lastName;
   }

   public String getInitial(){
       return this.firstName.charAt(0) + "." + this.lastName.charAt(0);
   }
}

class MyClass{
   public static void main(String[] args){
      Person mike = new Person("Michael", "Johnson");
      System.out.println(mike.getFullName());
      System.out.println(mike.getInitial());

      Person carly = new Person("Carly", "Angelo");
      System.out.println(carly.getFullName());
      System.out.println(carly.getInitial());

      Person jessie = new Person("Jessie", "Raelynn");
      System.out.println(jessie.getFullName());
      System.out.println(jessie.getInitial());
   }
}
```

```java
class Dog{
    public String name;
    public int size;
    public int age;

    public Dog(String name, int size, int age){
        this.name = name;
        this.size = size;
        this.age = age;
    }

    public String bark(){
        if(this.size >= 50)return "Wooof! Woof!";
        else if(this.size >= 20)return "Ruff! Ruff!";
        return "Yip! Yip!";
    }

    public int calcHumanAge(){
        return 12 + (this.age - 1)*7;
    }
}

class MyClass{
    public static void main(String[] args){
        Dog goldenRetriver = new Dog("Golden Retriever", 60, 10);
        System.out.println(goldenRetriver.bark());
        System.out.println(goldenRetriver.calcHumanAge());

        Dog siberianHusky = new Dog("siberianHusky",55,6);
        System.out.println(siberianHusky.bark());
        System.out.println(siberianHusky.calcHumanAge());

        Dog poodle = new Dog("poodle",10,1);
        System.out.println(poodle.bark());
        System.out.println(poodle.calcHumanAge());

        Dog shibaInu = new Dog("shibaInu",35,4);
        System.out.println(shibaInu.bark());
        System.out.println(shibaInu.calcHumanAge());
    }
}

// goldenRetriever = new Dog("Golden Retriever", 60, 10)
// goldenRetriever.bark() --> Wooof! Woof!
// goldenRetriever.calcHumanAge() --> 75
```

```java
class Bank{
    public String bankName;
    public String ownerName;
    public int savings;
    public Bank(String bankName, String ownerName, int savings){
        this.bankName = bankName;
        this.ownerName = ownerName;
        this.savings = savings;
    }

    //預ける金額
    public int depositMoney(int depositAmount){
        if(depositAmount <= 20000)return this.savings + depositAmount - 100;
        return this.savings + depositAmount;
    }

    //引き出す金額
    public int withdrowMoney(int withdrawAmount){
        return this.savings - withdrawAmount;
    }

    //毎日0.25ドル入る
    public double pastime(double days){
        return this.savings + (days*0.25);
    }
}

class MyClass{
    public static void main(String[] args){
        Bank user1 = new Bank("Chase", "Claire Simmmons",30000);
        System.out.println(user1.withdrawMoney(2000));
        System.out.println(user1.depositMoney(10000));
        System.out.println(user1.pastime(93));
    }
}
```

```java
class Product{
    public String title;
    public double price;
    public Product(String title, double price){
        this.title = title;
        this.price = price;
    }
}

class InvoiceItem{
    public Product product;
    public int quantity;
    public InvoiceItem next;
    public InvoiceItem(Product product, int quantity, InvoiceItem next){
        //productとnextはthisでいいのか??
        this.product = product;//仮引数のproductはthis.productに代入
        this.quantity = quantity;
        this.next = next;
    }
    public double getTotalPrice(){
        return this.product.price * this.quantity;
    }
}
class MyClass{
    public static void main(String[] args){
       Product product1 = new Product ("shampoo", 10);//title,price
       Product product2 = new Product ("conditioner", 5);
       Product product3 = new Product ("tooth brush", 3);

       InvoiceItem firstItem = new InvoiceItem(product1, 7);//product,quantity

       firstItem.next = secondItem;
       secondItem.next = thirdItem;

// firstItem.getTotalPrice() --> 70
// secondItem.getTotalPrice() --> 45

// firstItem.next.getTotalPrice() --> 45
// firstItem.next.next.getTotalPrice() --> 30
// firstItem.next.product.price --> 5
// firstItem.next.next.product.title --> tooth brush
    }
}
```

- 配列の中に、オブジェクトを入れる。

```java
// 車の設計書
class Car{
    public String make;
    public String model;
    public int year;

    public Car(String make, String model, int year){
        this.make = make;
        this.model = model;
        this.year = year;
    };
};

//
class Main{
    //車をプリントします。
    public static void printArray(Car[] carArray){
        for(int i = 0; i < carArray.length; i++){
            System.out.println(carArray[i].make + " - " + carArray[i].model + " Year " + carArray[i].year);
        }
    }

    public static void main(String[] args){
        // 車配列を作成し、3つのオブジェクトを追加します。
        Car[] cars = new Car[3];//[0,0,0];
        cars[0] = new Car("Toyota", "Camry", 2000);
        cars[1] = new Car("BMW", "X1 Sports", 2019);
        cars[2] = new Car("Nissan", "GT-R", 2020);
        System.out.println("First model: " + cars[0].make + "-" + cars[0].model + " Year " + cars[0].year);

        // 関数を使ってすべての車を出力します。
        printArray(cars);
    }
}
```

```java
import java.util.Arrays;
import java.util.ArrayList;


class Solution{
    public static int[] evenRange(int a, int b){
        // 関数を完成させてください
        ArrayList<Integer> dArr = new ArrayList<Integer>();
        for(int i = a; i<=b; i++){
            if(i % 2 == 0)dArr.add(i);
        }

        int[] intArr = new int[dArr.size()];
        //動的配列から、固定配列へ直す
        for(int i = 0; i<dArr.size(); i++){
            intArr[i] = dArr.get(i);
        }
        return intArr;
    }

}
```

```java
import java.util.Arrays;

class Solution{
    public static int[] primeArray(int n){
        ArrayList<Integer> dArr = new ArrayList<Integer>();

        for(int i = 0; i<n; i++){
            for(int j = 0; j<i; i++){
                if(i % j == 0)break;
            }
            if(i == j)dArr.add(i);
        }

        int[] intArr = new int[dArr.size()];
        for(int i = 0; i<dArr.size(); i++){
            intArr[i] = dArr.get(i);
        }
        return intArr;
    }
}
```

```java
import java.util.Arrays;
import java.util.ArrayList;

class Solution{
    public static int[] minAndMax(int[] intArr){
        // 関数を完成させてください
        int sum = 0;
        int max = intArr[0];
        int min = intArr[0];
        ArrayList<Integer> dArr = new ArrayList<Integer>();

        for(int i = 0; i<intArr.length; i++){
            sum += intArr[i];
            if(max < intArr[i])max = intArr[i];
            if(min > intArr[i])min = intArr[i];
        };
        dArr.add(sum-max);
        dArr.add(sum-min);

        int[] resultArr = new int[dArr.size()];
        for(int i = 0; i<dArr.size(); i++){
            resultArr[i] = dArr.get(i);
        };

        return resultArr;
    }
}
```

上のコードは配列のサイズがわかっているから、固定配列で解くこともできる。

```java
import java.util.Arrays;

class Solution{
    public static int[] minAndMax(int[] intArr){
        // 関数を完成させてください
        int sum = 0;
        int max = intArr[0];
        int min = intArr[0];

        for(int i = 0; i<intArr.length; i++){
            sum += intArr[i];
            if(max < intArr[i])max = intArr[i];
            if(min > intArr[i])min = intArr[i];
        };

        int[] resultArr = new int[2];
        resultArr[0] = sum-max;
        resultArr[1] = sum-min;

        return resultArr;
    }
}
```

```java
import java.util.Arrays;
import java.util.ArrayList;
class Solution{
    public static boolean winnerBlackjack(String[] playerCards, String[] houseCards){
        int playerCount = 0;
        int houseCount = 0;

        for(int i = 0; i<playerCards.length; i++){
            playerCount += countCard(playerCards[i]);
        };
        for(int i = 0; i<houseCards.length; i++){
            houseCount += countCard(houseCards[i]);
        };

               // プレイヤーのスコアが21を超えている場合、あるいはドローの場合、false
        if (playerScore > 21 || playerScore == houseScore) return false;
        // ディーラーの手札が21以下で、プレイヤーの手札より大きい場合、false
        if (houseScore < 22 && houseScore > playerScore) return false;
        // それ以外はtrue
        return true;

        System.out.println(playerCount);
        System.out.println(hosueCount);



    }

        public static int countCard(String cardString) {
        ArrayList<String> string = new ArrayList<>(Arrays.asList("A","2","3","4","5","6","7","8","9","10","J","Q","K"));
        // 数字だけを切り取り、配列のどこに存在するかを返す
        // 例えば、Kの場合、index=12が返されます。Aの場合、index=0が返されます。
        return string.indexOf(cardString.substring(1)) + 1;
    }
}
```

error: cannot find symbol

- mainly they said, they cant find a variable you pointout.

```java
import java.util.Arrays;
import java.util.ArrayList;

class Solution{
    public static String[] validEmailList(String[] emailList){
        // 関数を完成させてください
        ArrayList<String> dArr = new ArrayList<String>();

        for(int i = 0; i<emailList.length; i++){
         if(isEmailValid(emailList[i]) == true)dArr.add(emailList[i]);
        }

        String[] stringArr = new String[dArr.size()];
        for(int i = 0; i < dArr.size(); i++){
            stringArr[i] = dArr.get(i);
        };

        return stringArr;
    }

    public static boolean isEmailValid(String email){
        int atIndex = email.indexOf("@");
        String emailAtRemoved = email.substring(atIndex+1, email.length()-1);
//@が1つのみかどうかivah.johnson@gmail.co@は通ってしまう。
if(emailAtRemoved.indexOf("@") != -1)return false;
//スペースあるか || @から始まらないか　||@の後に.cc.c@aaa.com
if(String.valueOf(email.charAt(0)) == "@" || email.contains(" ") || emailAtRemoved.indexOf(".") == -1)return false;
        return true;
    }
}
```

```java
class Main{

    public static char[] generateAlphabet(char firstAlphabet,char secondAlphabet){
        // 各文字を小文字に変えます
        char first = Character.toLowerCase(firstAlphabet);
        char second = Character.toLowerCase(secondAlphabet);

        // 各文字を文字コードに変換し、どちらがaに近い文字か判別します。値が小さい方がaに近くなります
        int smaller = (int)first > (int)second ? (int)second : (int)first;
        int larger = (int)first < (int)second ? (int)second : (int)first;
        char[] res = new char[larger - smaller + 1];

        // aに近い文字から順に配列へ格納していきます。
        for (int i = smaller; i < larger + 1; i++){
            // 文字コードを文字へ変換して、配列に格納します
            res[i - smaller] = (char)i;
        }

        return res;
    }

    public static void printArray(char[] array){
        System.out.print("[ ");
        for (int i = 0; i < array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println("]");
    }

    public static void main(String args[]){
        printArray(generateAlphabet('a','z'));
        printArray(generateAlphabet('b','b'));
        printArray(generateAlphabet('C','Z'));
        printArray(generateAlphabet('M','z'));
        printArray(generateAlphabet('z','a'));
    }
}
```

```java
class Main{

    // 例題
    // 二次元配列(固定配列)が与えられるので、最大値を返す、maxValueという関数を作成
    public static int maxValue(int[][] array2d) {
        int curr = array2d[0][0];
        for (int i = 0; i < array2d.length; i++) {
            for (int j = 0; j < array2d[i].length; j++) {
                if (curr <= array2d[i][j]) curr = array2d[i][j];
            }
        }
        return curr;
    }

    public static void main(String[] args) {


        // 6
		int[][] array1 = new int [][]{{1,1,2,3,2}, {5,5,1,5,2}, {3,5,2,3,1}, {1,2,3,6,3}};
		System.out.println(maxValue(array1));

		// 81
		int[][] array2 = new int [][]{{0,9,1,4,5}, {1,3,3,4,7}, {11,12,34,81,12}, {12,24,63,76,13}};
		System.out.println(maxValue(array2));

		// 243
		int[][] array3 = new int [][]{{-2,39,94,12,49}, {11,35,84,21,32}, {157,243,121,23,33}, {11,43,65,84,29}};
		System.out.println(maxValue(array3));

    }
}
```

```java
class Student {
    private String studentId;
    private String firstName;
    private String lastName;
    public int gradeLevel;

    public Student(String studentId, String firstName, String lastName, int gradeLevel) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
    }

    public String getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Classroom {
    Student[] students;
    private String courseName;
    private int period;
    private int roomNumber;
    public String teacher;

    public Classroom(Student[] students, String courseName, int period, int roomNumber, String teacher) {
        this.students = students;
        this.courseName = courseName;
        this.period = period;
        this.roomNumber = roomNumber;
        this.teacher = teacher;
    }

    public String getClassIdentity() {
        return this.courseName + " room " + this.roomNumber + " during period " + this.period + " managed by " + this.teacher;
    }

    public int getNumberOfStudents() {
        return this.students.length;
    }
}

class Main {
    public static void printSchoolSchedule(Classroom[] classrooms){
        for (int i = 0; i < classrooms.length; i++){
            Classroom classroom = classrooms[i];// == school[i]
            System.out.println(classroom.getClassIdentity());

            String studentString = "";
            for (int j = 0; j < classroom.students.length - 1; j++){
                Student student = classroom.students[j];
                studentString += student.getFullName() + ",";
            }

            studentString += classroom.students[classroom.getNumberOfStudents()-1].getFullName();
            System.out.println("Student list: " + studentString);
        }
    }

    public static void main(String[] args) {
        Classroom classroom1 = new Classroom(new Student[]{new Student("AC-343424","Vincent", "Lynch",10), new Student("AC-343434","Violet", "Marshall",10),new Student("AC-343428","Aubree", "Lambert",10),new Student("AC-343454","Danny", "Robertson",10)}, "Algebra II", 2, 23, "Emily Theodore");

        Classroom classroom2 = new Classroom(new Student[]{new Student("AC-340014","Kent", "Carter",11), new Student("AC-340024","Isaiah", "Chambers",11),new Student("AC-340018","Leta", "Ferguson",11)}, "English", 5, 104, "Daniel Pherb");

        Classroom classroom3 = new Classroom(new Student[]{new Student("AC-330010","Glenda", "Soto",12), new Student("AC-330035","Johnny", "Robertson",12),new Student("AC-330020","Ava", "Hansen",12), new Student("AC-340084","Nathaniel", "Romero",11)}, "Biology", 5, 36, "Maki Watanabe");

        Classroom[] school = new Classroom[]{classroom1, classroom2, classroom3};
        printSchoolSchedule(school);
    }
}
```

- class の作成

```java
class Student{
    public String studentId;
    public String firstName;
    public String lastName;
    public int gradeLevel;

    public Student(String studentId, String firstName, String lastName, int gradeLevel) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
    }

    public String getStudentInfo(){
        return this.studentId + ": " + this.firstName + " " + this.lastName +"(" +this.gradeLevel+"gr)";
    }
}

class Classroom{
    Student[] students;
    public String courseName;
    public String teacher;

public Classroom(Student[] students, String courseName, String teacher){
        this.students = students;
        this.courseName = courseName;
        this.teacher = teacher;
    }

    public String getClassIdentity(){
        return this.courseName + " managed by " + this.teacher;
    }

    public int getNumberOfStudents(){
        return this.students.length;
    }
}
class MyClass{
    public static void main(String[] args){
// Student student1 = new Student("AC-343424", "James", "Smith", 6);
// Student student2 = new Student("AC-343428", "Maria", "Garcia", 5);
// Student student3 = new Student("AC-343434", "Robert", "Johnson", 3);
// System.out.println(student1.getStudentInfo());
Classroom classroom1 =
new Classroom(new Student[]{
    new Student("AC-343424", "James", "Smith", 6),
    new Student("AC-343428", "Maria", "Garcia", 5),
    new Student("AC-343434", "Robert", "Johnson", 3),
    new Student("AC-343454","Danny", "Robertson",10)
    },
    "Algebra II", "Emily Theodore");

Classroom classroom2 = new Classroom(new Student[]{new Student("AC-340014","Kent", "Carter",9), new Student("AC-340024","Isaiah", "Chambers",10),new Student("AC-340018","Leta", "Ferguson", 7)},"English", "Daniel Pherb");

System.out.println(classroom1.getClassIdentity());
System.out.println(classroom1.getNumberOfStudents());
System.out.println(classroom2.getClassIdentity());
System.out.println(classroom2.getNumberOfStudents());
    }
}
```

- 学校の作成

```java
class Student {
    private String studentId;
    private String firstName;
    private String lastName;
    public int gradeLevel;

    public Student(String studentId, String firstName, String lastName, int gradeLevel) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
    }

    public String getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Classroom {
    Student[] students;
    private String courseName;
    public String teacher;

    public Classroom(Student[] students, String courseName, int period, int roomNumber, String teacher) {
        this.students = students;
        this.courseName = courseName;
        this.period = period;
        this.roomNumber = roomNumber;
        this.teacher = teacher;
    }

    public String getClassIdentity() {
        return this.courseName + " room " + this.roomNumber + " during period " + this.period + " managed by " + this.teacher;
    }

    public int getNumberOfStudents() {
        return this.students.length;
    }
}

class Main {
    public static void printHonorsStudents(Classroom[] classrooms){
        for (int i = 0; i < classrooms.length; i++){
            Classroom classroom = classrooms[i];
            //studentのみのループ
            for (int j = 0; j < classroom[0].length - 1; j++){
                //Student studentで本当にいいのか?まあ進めよう。
               if(school[i][j].gradeLevel => 10)
               System.out.println(school[i][j].studentId + ": " + Student.getFullName(school[i][j]) +"(" + school[i][j].gradeLevel +"gr) " + "from " + school[i][2] + "'s class");
            }

            studentString += classroom.students[classroom.getNumberOfStudents()-1].getFullName();
            System.out.println("Student list: " + studentString);
        }
    }

       public static void main(String[] args) {
        //成績優秀者は gradeLevel の値が 10 以上の場合とします。
        Classroom classroom1 =
        new Classroom(new Student[]{
        new Student("AC-343424", "James", "Smith", 6),
        new Student("AC-343428", "Maria", "Garcia", 5),
        new Student("AC-343434", "Robert", "Johnson", 3),new Student("AC-343454","Danny", "Robertson",10)
        },"Algebra II", "Emily Theodore");

        Classroom classroom2 =
        new Classroom(new Student[]{
        new Student("AC-340014","Kent", "Carter",9),
        new Student("AC-340024","Isaiah", "Chambers",10),new Student("AC-340018","Leta", "Ferguson",7)
        }, "English", "Daniel Pherb");

        Classroom[] school = new Classroom[]{classroom1, classroom2, classroom3};
        printHonorsStudents(school);

// --> AC-343454: Danny Robertson(10gr) from Emily Theodore's class

// --> AC-340024: Isaiah Chambers(10gr) from Daniel Pherb's class
    }
        }


```

```java
import java.util.Arrays;
import java.util.ArrayList;

class Solution{
    public static String[] fireEmployees(String[] employees, String[] unemployed){
        // 関数を完成させてください
     //String survivedEmployees[] = new String[(employees.length-1)-(unemployed.length-1)];
     String survivedEmployees[] = new String[];
     for(int i = 0; i<employees.length-1; i++){
         if(unemployed.indexOf(employees[i]) != -1)
         survivedEmployees.put(employees[i]);
     }
    }
    return survivedEmployees;
}

//含むかどうかの書き方
!res.contains(hashmap.get(searchList[i]))
```

```java
// function countHighestScores(scores){
//     let hashmap = {};
//     //各要素の個数を求める。
//     for(let i = 0; i<scores.length; i++){
//         if(hashmap[scores[i]] === undefined)hashmap[scores[i]] = 1;
//         hashmap[scores[i]]++;
//     }

//     //高得点の値を求める。
//       let max = scores[0];
//       for(let i = 0; i<scores.length; i++){
//         if(max<scores[i])max = scores[i];
//     }
//     return hashmap[max]-1;
// }



import java.util.Arrays;
import java.util.HashMap;


class Solution{
    public static int countHighestScores(int[] scores){
        // 関数を完成させてください
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        int max = 0;
        for(int i = 0; i<scores.length; i++){
            if(max<scores[i])max = scores[i];
            if(hashmap.get(scores[i]) == null)hashmap.put(scores[i], 1);
            else hashmap.replace(scores[i], hashmap.get(scores[i]) +1);
        }
        return hashmap.get(max);
    }
}
```

```javascript
function getAscii(s) {
  let hashmap = {};
  let maxArray = [];
  let max = 0;
  let maxAndmaxAscll = 0;
  //hashmapを作る
  for (let i = 0; i < s.length; i++) {
    if (hashmap[s[i]] === undefined) hashmap[s[i]] = 1;
    else hashmap[s[i]]++;
  }
  //maxを出す
  for (let i = 0; i < s.length; i++) {
    if (max < hashmap[s[i]]) max = hashmap[s[i]];
  }
  //maxのascllコードをpush
  for (let i = 0; i < Object.values(hashmap).length; i++) {
    if (Object.values(hashmap)[i] == max)
      maxArray.push(Object.keys(hashmap)[i].charCodeAt(0));
  }
  //maxの配列内で一番大きなascllコードを見つける
  for (let i = 0; i < maxArray.length; i++) {
    if (maxAndmaxAscll < maxArray[i]) maxAndmaxAscll = maxArray[i];
  }
  return maxAndmaxAscll;
  // console.log(Object.values(hashmap));//個数
  // console.log(Object.keys(hashmap)[0]);//文字
}
```

```java
//テストケース
//getAscii("recursion") --> 114
import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution{
    public static int getAscii(String s){
        HashMap<Character, Integer> hashmap = new HashMap<>();
        ArrayList<Integer> maxArr = new ArrayList<Integer>();
        int max = 0;
        int maxAndmaxAscll = 0;

        //hashmap作る
        for(int i = 0; i<s.length(); i++){
            if(hashmap.get(s.charAt(i)) == null)hashmap.put(s.charAt(i),1);
            else hashmap.replace(s.charAt(i), hashmap.get(s.charAt(0))+1);
        }
        //maxを出す
        for(int i = 0; i<s.length(); i++){
            if(max<hashmap.get(s.charAt(i)))max = hashmap.get(s.charAt(i));
        }
        //maxのacllコードをpush
        for(int i = 0; i<hashmap.keySet().toArray().length; i++){
            if(hashmap.keySet().toArray()[i] == max)maxArr.push(hashmap.keySet().toArray()[0])//rをpush
        }
    System.out.println(hashmap.keySet());//全てのkeyを取得
    System.out.println(hashmap.keySet().toArray()[0]);//最初のkeyを取得//r
    System.out.println(hashmap);//{r=2, c=1, s=1, e=1, u=1, i=1, n=1, o=1}
    System.out.println(hashmap.keySet().toArray().length);//keyのlengthを取得する。
        // for(int i=0; i<)
        System.out.println(max);



        System.out.println((int[])hashmap.keySet().toArray()[0]));//最初のkeyのcharCode

        return 0;
    }
}

```

```java
// function missingItems(listA,listB){
//     let hashmap = {};
//     let array = [];

//     for(let i = 0; i<listB.length; i++){
//         hashmap[listB[i]] = listB[i];
//     }
//     for(let i = 0; i<listA.length; i++){
//         if(hashmap[listA[i]] === undefined)
//         array.push(listA[i]);
//     }
//     return array.length == 0? listA : array;
// }
import java.util.Arrays;

class Solution{
    public static int[] missingItems(int[] listA, int[] listB){
        // 関数を完成させてください
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        ArrayList<Integer> array = new ArrayList<Integer>();

        for(int i = 0; i<listB.length; i++){
            hashmap.put(listB[i], listB[i]);
        }

          for(int i = 0; i<listA.length; i++){
            if(hashmap.get(listA[i]) == null)array.add(listA[i]);
        }
        return array.length == 0? listA : array;
    }
}

```

```java
//intersectionOfArraysRepeats([3,2,1],[3,2,1]) --> [1,2,3]
// function intersectionOfArraysRepeats(intList1,intList2){
//     //ここから書きましょう
//     let hasmap = {};
//     for(let i = 0; i < intList2.length; i ++){
//         if(hasmap[intList2[i]] === undefined) hasmap[intList2[i]] = 1;
//         else hasmap[intList2[i]]++
//     }

//     let arrayOfDuplicate = [];

//     for(let i = 0; i < intList1.length; i ++){
//         if(hasmap[intList1[i]] === undefined) hasmap[intList1[i]] = -1;
//         else if(hasmap[intList1[i]] > 0){
//             arrayOfDuplicate.push(intList1[i]);
//             hasmap[intList1[i]]--;
//         }
//     }

//     return arrayOfDuplicate.sort(function(a, b) { return a - b; });;
// }

import java.util.Arrays;

class Solution{
    public static int[] intersectionOfArraysRepeats(int[] intList1, int[] intList2){
        // 関数を完成させてください
    }
}

```

```java
// function findXTimes(teams){
//     // 関数を完成させてください
//     //全てのアルファベットが同じ数ずつあるかどうか。
//     let hashmap = {};

//     for(let i = 0; i<teams.length; i++){
//         if(hashmap[teams[i]] == undefined)hashmap[teams[i]] = 1;
//         else hashmap[teams[i]]++;
//     }
//     let numOfMatch = Object.values(hashmap)[0];

//     let count = 0;
//      for(let i = 0; i<Object.values(hashmap).length; i++){
//         if(Object.values(hashmap)[i] == numOfMatch)count++;
//         if(count == Object.values(hashmap).length)return true;
//     }
//     return false;
// }
javaのkeyと値はこうやって取る。
//key
 System.out.println(hashmap.keySet().toArray()[0]);
//値//普通にhashmapを定義する時と同じ。
 System.out.println(hashmap.get(teams.charAt(0)));

import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
class Solution{
    public static boolean findXTimes(String teams){
        // 関数を完成させてください
      HashMap<Integer, Integer> hashmap =  new HahMap<>();
      ArrayList<Integer> array = new ArrayList<Integer>();

      for(int i = 0; i<teams.length; i++){
      if(hashmap.get(teams[i]) == null)
      hashmap.put(teams[i], 1);
      else hashmap.put(teams[i], hashmap.get(teams[i])+1);
      }

      //int numberOfMatch =  hashmap.keySet().toArray()[0]
         System.out.println(hashmap.keySet().toArray()[0]);
        return true;
    }
}

```
