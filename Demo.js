// function userName(userName,email){
//     this.username=userName;
//     this.email=email;
// }

// userName.prototype.printMe=function(){
//     console.log(`userName is ${this.username}`);
// }

// const rohan=new userName("rohan","@gmail.com");
// rohan.printMe();

function callMe(city){
    console.log(`${this.username} is from ${city} of ${this.age} old`);
}

const User = {
    username: "Rohan",
    age: 23
}

callMe.call(User,"Hyderabad");

const funCallMe = callMe.bind(User, "Hyderabad");
funCallMe();