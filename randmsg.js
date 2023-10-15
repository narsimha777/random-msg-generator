let blank1 = ["awesome",'great','good','bad'];
let blank2 = ['friends','relatives','surroundings','ghost'];
let blank3 = ['have',"haven't"];

function ind(){
    let bl1ind=Math.floor(Math.random()*4);
    let bl2ind=Math.floor(Math.random()*4);
    let bl3ind=Math.floor(Math.random()*2);
    let arr=[bl1ind,bl2ind,bl3ind];
    return arr;
}

let indexs = ind();

console.log(`Today is ${blank1[indexs[0]]} day for you and your ${blank2[indexs[1]]} as you ${blank3[indexs[2]]} worked hard`);


