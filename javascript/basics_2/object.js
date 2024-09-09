// object can be defined in two ways 
//singleton and non singleton
//non singleton ------------literals
// const jsuser={}

//singleton
// Object.create={}

// literal object-----------


const Jsuser={
    name:"shivam",
    age:18,
    email:"shivam@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["monday","saturday"],
    "fullname":"shivam kumar",
   
}


console.log(Jsuser.email) // not a good way
console.log(Jsuser["email"]) // good way
console.log(Jsuser.fullname) // not a good way
console.log(Jsuser["fullname"]) // good way of writing




