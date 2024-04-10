//Exercise 1 Section
/*
function plus(number) {
    return function (plusNumber) {
       return plusNumber + number;     
    }
}
//plus15 is a function
const plus15 = plus(15);  
// 10 is going into plusNumber
console.log(plus15(10));  
*/

// Exercise 2 Section
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
//forEach is a different way to iterate
users.forEach((user) => {
   console.log(users.name);
});
//||
users.forEach(function(user){
    console.log(user.name);
 });
 //||
 /*
 for (let i =0; i < users.length; i ++) {
    console.log(users[i].name);
    console.log(users[i+1].name);
}
*/

// Exercise 3 Section
//map - looking for objects w/ names and scores
const mappedUsers = users.map((element, index, array) => {
   console.log(element); //this is not return
   return {
    name: element.name,
    score: element.score
   }
})
console.log(mappedUsers);

// Exercise 4 Section
//filter - The Clash Song - Should I stay or leave?
//We look at each element and answer this question: "Should we krrp this element?(Yes or no?)"
const filteredUsers = users.filter((user, index, array) => {
    console.log(user);
    if (user.isActive) {
        return true;
        //keep it
      } else {
        return false;
        //discard it
    }

});
console.log(filteredUsers);

// Exercise 5 Section
//sort = Re-arrange the order of the elements in the array
// It does so based on some provided criteria
// .sort() will change the array directly updating order of things.
users.sort((a, b) => {     //refer to MDN, "sort"
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  }
  });
  console.log(users);
// ||
//  users.sort((a, b) => { 
//    return b.score - a.score;
//  });
//  console.log(users);


// Exercise 6 Section
//reduce = Simplify all the information down to one single piece of info
//On every iteration, reduce will give you an accumulated value, amd the
//current iteration's element.
const reducedValue = users.reduce((acc, currValue, index) => {
  console.log(index, acc, currValue.score);
              // 0    0         Fredo
              // 1   undefined   Sam           
  return acc + currValue.score;

}, 0); 
const value = users.reduce((acc, curr) => acc + curr.score, 0);
console.log("Sum of all the users' scores", reducedValue);
const avgScore = reducedValue / users.length;
console.log(avgScore);


