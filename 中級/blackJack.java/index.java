//1枚分のカードを生成するコード
class Card{
    public String suit;
    public String value;
    public int intValue;

    public Card(String suit, String value, int intValue){
        this.suit = suit;
        this.value = value;
        this.intValue = intValue;
    }

    public String getCardString(){
        return this.suit + this.value + "(" + this.intValue + ")";
    }


}

class Main{
    public static void main(String[] args){
        Card card1 = new Card("♦︎","A",1);
        System.out.println(card1.getCardString());
    }
}

//デッキの作成
import java.util.Arrays;
import java.util.ArrayList;

class Card{
    public String suit;
    public String value;
    public int intValue;

    public Card(String suit, String value, int intValue){
        this.suit = suit;
        this.value = value;
        this.intValue = intValue;
    }

    public String getCardString(){
        return this.suit + this.value + "(" + this.intValue + ")";
    }
}

class Deck{
    public ArrayList<Card> deck;

    //constroctor
    //Javaのconstroctorってわかりづらいな。。
    public Deck(){
        this.deck = Deck.generateDeck();
    }

    //instance無しでも使える関数
    publicstatic ArrayList<Card> generateDeck(){
        ArrayList<Card> newDeck = new ArrayList<>{
            
        }
    }
}