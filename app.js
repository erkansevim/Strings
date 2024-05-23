//concat
const s1="erkan";
const s2="sevim";


console.log(s1.concat(s2));

const s3 = s1.concat(s2);

console.log(s3);

//----tolowercase

const myName="ERKAN";
console.log(myName.toLowerCase());

//--uppercase

const myName2="erkan";
console.log(myName2.toUpperCase());

const isEqual=(a,b)=>
    a==b.toUpperCase() ? "equal" : "not equal"

console.log(isEqual("ERKAN", "erkan"));

//-----charAT

const s4= "erkan sevim \n developer\n bremen\n"

console.log(s4);

console.log(s4.charAt(2));
console.log(s4.charAt(s4.length-1));

//---- includes

const sentence=" hallo meine liebe";

console.log(sentence.includes("hallo"));
console.log(sentence.includes("liebe", 5));
console.log(sentence.length);

//---------REGEX : ONLY IN SEARCH

const metin="erkan sevim bremen";

console.log(metin.charAt(metin.search(/[A-Z]/)).toLowerCase());

//--------replace

let read="erkan sevim is ein developer"

console.log(read.replace("developer", "entwickler"));

//---------



