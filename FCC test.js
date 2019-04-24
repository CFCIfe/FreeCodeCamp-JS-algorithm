//      Reverse String!!!
function reverseString(str) {
  return (splitStr = str
    .split("")
    .reverse()
    .join(""));
}

//        num!
function factorial(num) {
  var value = 1;
  for (let i = 2; i <= num; i++) {
    value *= i;
  }
  return value;
}

//      longest word in a string
function findLongestWordLength(str) {
  var arr = str.split(" ");
  var longestWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

// Largest numbers in multiple arrays
function largestOfFour(arr) {
  // variable to store the results
  let largestArr = [];
  // loop over the outer array
  for (let i = 0; i < arr.length; i++) {
    // largest num is store as the first in the array
    let largestNum = arr[i][0];
    // create inner loop
    for (let j = 0; j < arr[i].length; j++) {
      // check if the element of the sub array is larger than the stored number, then update if so
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    // save the largest number after the inner loop
    largestArr.push(largestNum);
  }
  // return the array
  return largestArr;
}

//       Confirm ending of string.
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

//      Repeat strings n number of times
function repeatStringNumTimes(str, num) {
  let strArr = [];
  for (let i = 0; i < num; i++) {
    strArr.push(str);
  }
  return num > 0 ? strArr.join("") : "";
}

//          Truncate Strings
function truncateString(str, num) {
  splitStr = str.split("");
  return str.length >= num
    ? `${splitStr.slice(0, num).join("")}...`
    : splitStr.join("");
}

//    Find arr that matches true
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}

//    Return "true" for booleans
function booWho(bool) {
  return typeof bool === "boolean";
}

//  Convert the first letter to capital
String.prototype.replaceAt = function(index, character) {
  return (
    this.substring(0, index) + character + this.substr(index + character.length)
  );
};
function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

//      Join and return array
function frankenSplice(arr1, arr2, n) {
  let newArr2 = [...arr2];
  newArr2.splice(n, 0, ...arr1);
  return newArr2;
}

//    Check for false values
function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//  Get index of num in array
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let check = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (check.indexOf(test[i]) < 0) return false;
  }
  return true;
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let slicedArr = arr.slice(i, i + size);
    newArr.push(slicedArr);
  }
  return newArr;
}
