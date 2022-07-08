"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
    for(let i=0,j=1;i<Math.floor(arr.length/2);i++,j++){
      let a;
      a=arr[i];
      arr[i]=arr[arr.length-j];
      arr[arr.length-j]= a;
    }
    return arr;
  };

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffleArray = (arr) => {
  let xn=[];
  let xy=[];
  let xny =[];
for(let i=0;i<arr.length;i++){
  if(i<arr.length/2)
   xn.push(arr[i]);
    else
     xy.push(arr[i]);
}
  for(let i=0,j=1,f=0;i<arr.length ;i+=2,j+=2,f++){
     xny[i]=xn[f];
     xny[j]=xy[f];
  }
  return xny;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString = (str, indicesArr) => {
  let strArray =Array.from(str);
  let aa =[];

   for(let i=0;i<indicesArr.length;i++){
       aa[indicesArr[i]]=strArray[i];
   }

  let reslt=aa.join('');

   return reslt;
 };
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };
