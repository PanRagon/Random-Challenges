//Make a translator that can take any integer value and translate it to a Roman number.

public class main {
    static String n1 = "I";
    static String n5 = "V";
    static String n10 = "X";
    static String n50 = "L";
    static String n100 = "C";
    static String n500 = "D";
    static String n1000 = "M";


    static String toRomanNumeral(int number) {
        if(number <= 0) {
            return "Invalid number, enter a whole number above 0";
        }
        String romanNumber = "";
        while (number > 0) {
            if (number >= 1000) {
                number -= 1000;
                romanNumber += n1000;
            } else if (number >= 900) {
                number -= 900;
                romanNumber += (n100 + n1000);
            } else if (number >= 500) {
                number -= 500;
                romanNumber += n500;
            } else if (number >= 400){
                number -= 400;
                romanNumber += (n100 + n500);
            } else if (number >= 100) {
                number -= 100;
                romanNumber += n100;
            } else if (number >= 90) {
                number -= 90;
                romanNumber += (n10 + n100);
            } else if (number >= 50) {
                number -= 50;
                romanNumber += n50;
            } else if(number >= 40) {
                number -= 40;
                romanNumber += (n10 + n50);
            } else if (number >= 10) {
                number -= 10;
                romanNumber += n10;
            } else if (number >= 9) {
                number -= 9;
                romanNumber += (n1 + n10);
            } else if (number >= 5) {
                number -= 5;
                romanNumber += n5;
            } else if (number >= 4) {
                number -= 4;
                romanNumber += (n1 + n5);
            }
            else if (number >= 1) {
                number -= 1;
                romanNumber += n1;
            }

        }
        return romanNumber;
    }
    public static void main(String[] args) {
        for(int i=-2; i<=100; i++) {
            System.out.println(toRomanNumeral(i));
        }
    }
}
