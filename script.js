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