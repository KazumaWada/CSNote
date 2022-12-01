```java
class Main{

    public static String monsterAttack(String monster){
        int attack = 1000;
        String message = "'s attack is:";

        if(monster == "Cyclops"){
            attack *= 1.8;
            message = "Cyclops" + message + attack;
        }
        else if(monster == "Ogre"){
            attack *= 2.5;
            message = "Ogre" + message + attack;
        }
        else if(monster == "Zombie"){
            attack *= 1.2;
            message = "Zombie" + message + attack;
        }
        else{
            message = "Monster does not exist.";
        }

        return message;
    }

    public static void main(String[] args){
        System.out.println(monsterAttack("Ogre"));
        System.out.println(monsterAttack("Ghost"));
    }
}
```

-switch 文

```java
class Main{
    public static String monsterAttackSwitchMenu(String monster){
        int attack = 1000;
        String message = "'s attack is:";

        // モンスターの名前を入力として受け取って、ケースで比較してみましょう
        switch(monster) {
            case "Cyclops":
                attack *= 1.8;
                message = "Cyclops" + message + attack;
                break;
            case "Ogre":
                attack *= 2.5;
                message = "Ogre" + message + attack;
                break;
            case "Zombie":
                attack *= 1.2;
                message = "Zombie" + message + attack;
                break;
            default :
                // これが最後のステートメントなので、ここに break 文をつけてもつけなくても問題ありません
                message = "Monster does not exist.";
        }
        return message;
    }

    public static void main(String[] args){
        System.out.println(monsterAttackSwitchMenu("Cyclops"));
        System.out.println(monsterAttackSwitchMenu("Ogre"));
        System.out.println(monsterAttackSwitchMenu("Zombie"));
        System.out.println(monsterAttackSwitchMenu("Ghost"));
    }
}
```

- Java でも、条件付き三項演算子を使うことができる。

```java
class Main{
    public static String isEven(int n){
        return (n % 2 == 0) ? "The number " + n + " is even" : "The number " + n + " is odd";
    }

    public static void main(String[] args){
        System.out.println(isEven(43));
    }
}
```
