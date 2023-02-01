// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function findAverage(array) {
    if (array.length === 0) {
        return 0
    }
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i]
    }
    return res / array.length
}
//----------
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?
function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}
//-----------

//Write a function to split a string and convert it into an array of words.
function stringToArray(string) {
    let arr = string.split(" ");
    return arr
}
//----------

//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase()
}
//----------

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
    var soma = []
    for(let i=1; i<=n; i++){
      soma.push(i)
    }
        return soma
  }
