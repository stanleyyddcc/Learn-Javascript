//Javascript One
const firstName = "Stanley";
const lastName = "Darwin";
console.log(`my name is ${firstName} ${lastName}`);

const numb = 2;
if(numb > 10){
    console.log("Number is bigger than 10");
} else if (numb >5){
    console.log("Number is between 5 and 10");
} else {
    console.log("Number is smaller than 2");
}

const boo = 'E';
switch(boo){
    case 'A':
        console.log("This is A");
        break;
    case 'B':
        console.log("This is B");
        break;
    case 'C':
        console.log("This is C");
        break;
    case 'D':
        console.log("This is D");
        break;
    default:
        console.log("This is the default");
        break;
}

// Javascript Two

let nomor = 1;
while (nomor<10){
    console.log(`This is number ${nomor}`);
    nomor++;
}

for(let i=1; i<5;i++){
    console.log(`Number ${i}`);
}

//array
const fruits = ['banana','apel','manggo'];
console.log(fruits[0]);
fruits[0]='grape';
console.log(fruits[0]);
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

//objects
const items = [
    {name:"Stanley", age:30},
    {name:"Sherina", age:30}
]
console.log(items[0].name);

//Javascript Three
const introduce = (name) =>{
    console.log(`My name is ${name}`);
}
introduce("Stanley");

const add =(a,b)=>{
    return a+b;
}
const sum = add(1,3);
console.log(sum);