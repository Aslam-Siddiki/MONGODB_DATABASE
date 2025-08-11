const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection sucessful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete('6898161283ebb7c6de69c045') // deleteOne to deleteOne, deleteMany to all that match the condition:
    .then((res) =>{
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

User.findByIdAndUpdate({_id: "6897315d7c37bc23de51fab5"}, {age: 40},{new: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });



User.findById('6897315d7c37bc23de51fab6')
    .then((data) => { // User.find():
    console.log(data)
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[0].name);
    console.log(data[0].email);
    console.log(data[0].age);
    })
    .catch((err) => {
        console.log(err);
    });


User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 50},
    {name: "Peter", email: "peter@gmail.com", age: 30},
    {name: "Bruce", email: "bruce@gmail.com", age: 47}
])
.then((res) => {
    console.log(res);
})

const user2 = new User({
    name : "Eve",
    email : "eve@yahoo.com",
    age : 45
});

user2
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    });