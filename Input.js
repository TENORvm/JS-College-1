function MyFirstFunction() {
    document.write("<p>Hello from MyFirstFunction!");
    document.write("How are you?");
    document.write("<p>Goodbye!");
   }
   
    function MySecondFunction() {
    document.write("<p>Hello from MySecondFunction!");
   }
    
   
    document.write("<hr/>");
   
    
    MySecondFunction();
   
    document.write("<hr/>");
   
    function ask() {
      let name = prompt("Enter your name:"); 
      let sname = prompt("Enter your nickname:");
      let age = prompt("Enter your age:");
   
      return [name, sname, age]; 
    }
   
    function say(name, sname, age) { 
      document.write("Im:"+name+"<br />");
      document.write("Nickname:"+sname+"<br />");
      document.write("Age:"+age+"<br />");
      document.write("<hr/>");
    }
   
    do {
      const [name, sname, age] = ask(); 
      say(name, sname, age); 
      repeater = confirm("Пройти заповнення ще раз?");
    } while (repeater);
   
    function print(msg, count) { 
      if (count == undefined) {
         count = 3;
      }
      for (var i = 0; i < count; i++) {
         document.write("<p>" + msg);
      }
      document.write("<hr/>");
   }
   
    print("hello");
    print("world", 7);
   
    function sum(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
         return null;
      }
      return a + b;
    }
   
    function subtract(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
         return null;
      }
      return a - b;
    }
    function  multiply(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
         return null;
      }
      return a * b;
    }
    function divide(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
         return null;
      }
      return a / b;
    }
    
    
    function power(base, exponent) {
      if (typeof base !== "number" || typeof exponent !== "number") {
         return null;
      }
      return base ** exponent;
    }
   
    let res = sum(5, 10);
    document.write("sum(5, 10) = " + res + "<br />");
   
    
   
    res = power(2, 3);
    document.write("power(2, 3) = " + res + "<br />");
   
    function max(a, b, c) {
        console.log(arguments);
        let maxValue = Number.NEGATIVE_INFINITY;
        document.write("<p>Number.NEGATIVE_INFINITY = " + maxValue + "<hr/>");
        for (let i = 0; i < arguments.length; i++) {
          if (arguments[i] > maxValue) {
            maxValue = arguments[i];
          }
        }
        return maxValue;
      }
   
   function squareRoot(num) {
      if (typeof num !== "number" || num < 0) {
         return null;
      }
      return Math.sqrt(num);
    }
   
    let sqrtRes = squareRoot(9);
    document.write("squareRoot(9) = " + sqrtRes + "<br />");
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    let operator = prompt("Enter operator (+, -, *, /, ^, √):");
   
    let result = null;
    switch (operator) {
      case "+":
         result = sum(+num1, +num2);
         break;
      case "-":
         result = subtract(+num1, +num2);
         break;
      case "*":
         result = multiply(+num1, +num2);
         break;
      case "/":
         result = divide(+num1, +num2);
         break;
      case "^":
         result = power(+num1, +num2);
         break;
      case "√":
         result = squareRoot(+num1);
         break;
      default:
         document.write("Invalid operator!");
    }
   
    if (result !== null) {
      document.write(num1 + " " + operator + " " + num2 + " = " + result);
    } else {
      document.write("Error!");
    }
    let res2 = max(-33, 33, 777, -666, -22, 888, 10423);
      document.write("<p>Максимальне значення одного з аргументів функції = " + res2);