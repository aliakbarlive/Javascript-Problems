// print table of 5 without using loop
function printTable(tableNumber, limit) {
    console.log(tableNumber * limit);
    if (limit >= 10) return;
    return printTable(tableNumber, limit + 1);
  }
  // printTable(5, 1)
  
  // calculate mode in string like input: aaddbaaffd  output: {a:4,d:3,f:2}
  function calculateMode(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    return obj;
  }
  
  // const inputStr = "aaddabaafafad";
  // console.log(calculateMode(inputStr));
  
  // multiply two number without actually mutltiplying input: (2, 3) output:6
  
  // dry run 2+2 = 4, 4+2=6
  
  function multiplyNumb(num1, num2) {
    let result = 0;
    for (let i = 0; i < num1; i++) {
      console.log("iterate count>>>", i);
      result += num2;
    }
    return result;
  }
  
  // use bitwise shifting (Russian Peasant Algorithm):
  function multiplyNumbers(num1, num2) {
    let result = 0;
    while (num1 > 0) {
      console.log("num1", num1 & 1);
      if (num1 & 1) result += num2; // Add if odd
      num2 <<= 1; // Double num2
      num1 >>= 1; // Halve num1
    }
    return result;
  }
  
  // console.log("final output",multiplyNumbers(20000, 30000));
  
  // Reverse a string input : hello, output olleh
  
  function reverse(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
      out = str[i] + out;
    }
    return out;
  }
  
  const input = "racecar";
  // console.log('output>>>', reverse(input))
  
  // Check if a string is a palindrome
  // Input: "racecar" → Output: true
  
  function checkPalidrome(str) {
    return str === reverse(str);
  }
  // console.log('output>>>', checkPalidrome(input))
  
  // Remove duplicates from an array
  // Input: [1,2,2,3,4,1] → Output: [1,2,3,4]
  
  function checkItemExist(array, val) {
    return array.some((item, i) => item === val);
  }
  
  function removeDuplicate(arra) {
    let output = [];
    for (let index = 0; index < arra.length; index++) {
      const element1 = arra[index];
      if (!checkItemExist(output, element1)) {
        output.push(element1);
      }
    }
    return output;
  }
  
  function removeDuplicate1(arra) {
    return Array.from(new Set(arra));
  }
  
  const checkDuplicate = [1, 2, 2, 3, 4, 1];
  
  // console.log("output>>>", removeDuplicate1(checkDuplicate));
  
  // Find the second largest number in an array
  function find2ndLargeNo(array) {
    let max = -1;
    let secondMax = -1;
  
    
  
    return secondMax;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("output>>>", find2ndLargeNo(numbers)); // output: 9
  
  // Find the largest number in an array
  