// install eclipse

// class is blueprint for creating objects. oop, model real world objects in code.blueprint

public class Animal {


}


public class Dog extends Animal {


}

public class Cat extends Animal {


}

/* multi line comment */

// import libraries - import java.util.Scanner; accepts user input

create a field

// public static, number shared by every animal object created() {
  // final cannot be put into subclasses

  variables or fields can start with $, _ or letters.

  private can be accessed by other methods of the class.

  public class Animal {

    public static final double FAVNUMBER = 1.6180;
    
    // ALL FIELDS SHOULD BE CALLED private
  
    // fields are attributes for what we are defining.
    private String name;
    private int weight;
    private boolean hasOwner = false;
    private byte age;
    private long uniqueID;
    private char favoriteChar;
    // a long -2 ^ 63, 2 ^ 63
    private double speed;
    private float height;

    protected static int numberOfAnimals = 0;
    // mark variable static if one object doesn't need to know numberofanimals is 0.

    static Scanner userinput = new Scanner(System.in);

    each time animal object is created, 

    public Animal() {
      numberOfAnimals++;

      int sumOfNumbers = 5 + 1;
      System.out.println("5 + 1 = " + sumOfNumbers);
      // prints out on screen just like console.log in javascript.

      diffOfNumbers is -
      multOfNumbers is *
      divOfNumbers is /
      modOfNumbers is  %
    
    }

    public static void main(String[] args) {

        Animal theAnimal = new Animal();

    }


    if(userInput.hasNextLine()){


    }
  }

  // Selenium automates browsers, that's its main purpose. primarily to automate web applications for testing purposes.

  // everything in Java is a class or an object.
  // first you type out a blueprint for the PerformanceNavigationTiming. 

  // start with 1

  public class HelloWorld1
  {

      static String randomString = "String to print";

      static final double PINUM = 3.141529;

      public static void main(String[] args) 
      {
          system.out.println(PINUM);

          int integerOne = 22;

          int integerTwo = integerOne + 1;
      }
      // static only a class can call for this function to execute.
      // every main function has to accept an array of objects.
  }
  // public tells program, everyone should be able to execute what's inside public.
// main function is required in every java function we create.

// Selenium - tools that help automate web browser actions
// download selenium libraries, create test scripts, then selenium will automate what you allocate to be automatic.