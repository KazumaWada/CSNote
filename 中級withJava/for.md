- i は int を定義してから

```java
class Main{

    public static void countUpToN(int n){
        for(int i = 0; i < n; i++){
            System.out.println(i);
        }
    }

    public static void printAllCharacters(String str){
        for(int i = 0; i < str.length(); i++){
            System.out.println(str.charAt(i));
        }
    }

    public static void main(String[] args){
        countUpToN(15);
        printAllCharacters("Hello World!!");
    }
}
```

```java
class Solution{
    public static String firstUppercase(String s){
    return helper(s.replace(" ", ""), 0);
}

public static String helper(String s, int index){
    String lowerCase = s.toLowerCase();
    for(int i = 0; i<s.length()-1; i++){
    if(lowerCase.charAt(i) != s.charAt(i))return String.valueOf(s.charAt(i));
    }
    return "No upper";
}

```

-java はかんまが違うだけでエラーになる -この場合、" "にするとエラー

- なぜか正誤判定の operator は、""ではなく、''を使わなければいけない。

```java
class Solution{
    public static int countWords(String sentence){
        int count = 0;
        for(int i = 0; i<sentence.length(); i++){
            if(sentence.charAt(i) == ' ')count++;
        }
        return count+1;
    }
}

```

```java
class Solution{
    public static String reverseWords(String sentence){

        // 関数を完成させてください
        String reverse = "";
        for(int i = 0; i<sentence.length(); i++){
        if(sentence.charAt(i) == ' '){
            for(int j = i; j<=j*2; j--){
                System.out.println(j);//543210
                reverse = reverse + sentence.charAt(j);
            }
        }
        }
        return reverse;

    }
}
```
