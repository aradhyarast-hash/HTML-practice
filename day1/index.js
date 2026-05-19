
// 1. ways to print in javascript
console.log("hello world");
//alert("me");
document.write("this is the document.write");

//2. javascript console API
console.log("hello world", 56 + 33, "another log");
console.warn("this is the warning")
console.error("this is the error in your command")

// 3. javascript variables
// variables ? -- containers to store data values

/*
multi 
line 
Comment
*/

var number1 = 34;
var number2 = 56;
console.log(number1 + number2)


// 4. datatypes in javascript
// numbers
var number1 = 34;
var number2 = 56;
// string
var str1 = "this is the string";
var str2 = "this is the string too"

// objects
var marks = {
    aradhya: 99,
    shrishti: 89,
    anant: 79.8
}

// boolean
var a = true;
var b = false;

// var und = undefined;
var u;  //by default the variable is undefined if no value is stored by user

var un = null;
console.log(un);
console.log(u);

console.log(marks);
console.log(str1);
console.log(a);
console.log(b);


/*At a very high level there are two types of the data types in the javascript:
1. primitive data type: undefined, null, number, string, boolean, symbol
2. reference data type: arrays and onjects

 */
var arr = [1, 2,"baby", 3, 4];
console.log(arr);



// operators

// arithematic
console.log("the value of number 1 + number2 is ", number1 + number2);
console.log("the value of number 1 - number2 is ", number1 - number2);
console.log("the value of number 1 * number2 is ", number1 * number2);
console.log("the value of number 1 / number2 is ", number1 / number2);
// assignment
var c = number2;

// c -= 2;
c -= 2;
c += 2;
c *= 2;
c /= 2;
console.log(c);

// comparision operator
var x = 22;
var y = 67;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// logical operators 

console.log(true && false);
console.log(true || false);

// bitwise operator
console.log(true | false);
console.log(true & false);

//  logical not operator
console.log(!true);

  