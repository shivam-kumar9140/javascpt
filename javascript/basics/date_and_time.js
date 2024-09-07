let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

//create new date--------------
let myCreatedDate=new Date(2024,0,1,5,4,3)
console.log(myCreatedDate.toLocaleString())

//time----------
let myTimestamp=Date.now()
console.log(myTimestamp) //in milli sec
console.log(Date.now())
console.log(myCreatedDate.getTime()) // milli sec
console.log(Math.floor(Date.now()/1000)) //in sec

console.log(myCreatedDate.getDate())
console.log(myCreatedDate.getMonth()+1) //+1 is used because month start from 0
console.log(myCreatedDate.getFullYear())

let myNewdate=new Date("9-1-2024 15:3:4 ")
console.log(myNewdate.toLocaleString())

