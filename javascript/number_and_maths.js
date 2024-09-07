const score=400
console.log(score)
 const balance=new Number(100) //best way to define number
 console.log(balance)

 //property------------
 console.log(balance.toString().length)
 console.log(balance.toFixed(2))
 
 const otherNumber= 23.4545
 console.log(otherNumber.toPrecision(3))
 console.log(otherNumber.toPrecision(1))
 const hundreds= 100000000000
  console.log(hundreds.toLocaleString())
  console.log(hundreds.toLocaleString('en-IN'))

  //maths---------------------
  console.log(Math.abs(-3))
  console.log(Math.ceil(34.434))
  console.log(Math.floor(34.434))
  console.log(Math.sqrt(121))
  console.log(Math.min(4,5,6,36))
  console.log(Math.max(6,5,34,3,34,34,5,))

  //use of random -----------
  console.log(Math.random())

console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
