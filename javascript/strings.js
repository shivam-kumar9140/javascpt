const name="shiavm "
const myrepo=20
console.log(name+myrepo+" value") // not a good way of writings

// use backticks(``)
console.log(`my name is ${name} and my repocount is ${myrepo} `)
//new way of writing strings----------
const newName=new String(" sh iv am ")
console.log(newName)

//some prototype of strings-----------
console.log(newName.length)
console.log(newName.toUpperCase())
console.log(newName.toLowerCase())
console.log(newName.__proto__)
console.log(newName.charAt(4))
console.log(newName.indexOf("i"))
console.log(newName.substring(0,4))
console.log(newName.slice(0,4))
console.log(newName.trim(' '))
console.log(newName.replace("am","ang" ))
console.log(newName.includes('v'))
console.log(newName.split(" "))

