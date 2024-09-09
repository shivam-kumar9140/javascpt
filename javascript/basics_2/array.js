/* 
()---- parenthesis
[]------barackets
{}-------curly braces or braces
*/

// array define-------
const myArr=[0,1,2,"shivam",true]
// best way to define array----------
const myarr2=new Array(0,1,2,3,4)

// array methods----------
// push and pop method-----
myArr.push(3) // add 3 in last index of array
myArr.push(4)
console.log(myArr);
myArr.pop() // remove last index value from array
myArr.pop()
console.log(myArr);

// shift and unshift-------------
myArr.unshift(-1) // add -1 in 0 th index
console.log(myArr);
myArr.shift() //remove -1 from 0 th index
console.log(myArr);

// lenth-------
console.log(myArr.length)

// at-------------
const arr=["hello", "bye"]
console.log(arr)
console.log(arr.at(1))

//join-----------
console.log(myArr.join())  // change into string

// slice and splice-------------
console.log("A",myArr)
const myn1=myArr.slice(0,3) // it gives a copy of portion from start number the number of value input 
console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(2,1) // it gives a portion value  from start to number of value pass but it give actual value which are in array due to which final value is changed in array
console.log("c",myArr)
console.log(myn2)
 
// concatination or copy of array---------------
 const marvel_heros=["thor","spiderman","ironman"]
 const dc_heros=["superman","flash","batman"]
 const all_heros=marvel_heros.concat(dc_heros)
 console.log(all_heros)

// what happen if we oush-----------
//   marvel_heros.push(dc_heros) // it will create another array of dc_heros in marvel_heros array 
 console.log(marvel_heros)

 //spraed method------
 const all_new_heros=[...marvel_heros,...dc_heros]
 console.log(all_new_heros)


 // flat---------------
 const newarr=[1,2,3,[4,5,6],7,[8,[9,10]]]
 const anotherarr=newarr.flat(2) // we can nested array into single array
 console.log(anotherarr)

 // checking of array -------------
 console.log(Array.isArray(newarr))
 console.log(Array.from("shivam")); // convert it into array

 const score1=200
 const score2=300
 const score3=890
 console.log(Array.of(score1,score2,score3))
 
