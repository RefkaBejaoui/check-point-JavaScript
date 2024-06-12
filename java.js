console.log("check point JavaScript")
//Mathematical Functions:
//Factorial: Write a function to calculate the factorial of a given number.

function factorial (x) {
    let multiple=1 ;
for (let i=1 ; i<=x ; i++){
    multiple = i * multiple ;
} return multiple
}
console.log(factorial (7))

//Prime Number Check: Create a function to check if a number is prime or not
function PrimeNumber (y) {
    var a =2 ;
while (a<=(y/2)){
    if ((y%a)==0) {
        return "is not a prime number"}
a++
}return "is a prime number"
}
console.log(PrimeNumber (11))
console.log(PrimeNumber (15))

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

    function FibonacciSequence (j){
        let arr=[0,1] ;
        let sum = 0 ;
        for(let i=2 ; i<=j ; i++ ){
            arr[i]=arr[i-1]+arr[i-2]
        } console.log(arr)  
        for(i=0; i<=j ; i++ ) {
            sum = arr[i]+ sum ;
        }
        return sum
        }
        console.log(FibonacciSequence(3))
        console.log(FibonacciSequence(8))


//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function FindMaxMin(array) {
    var min =array[0];
    var max = array [0];
    for (let i=0 ; i<=array.length ; i++) {
    if (min <= array[i]  ) 
        { min = min ;}
    else if (min>= array[i] ) 
        {min = array[i]}
}

for ( let i=0 ; i<=array.length ; i++) {
if (max >= array[i]  ) 
{ max = max ;}
else if (max <= array[i])
{max = array[i]} }
    
    return `the min = ${min} / the max = ${max}`
} 

var array= [5,3,1,6,7,7,8,1]
var tableau = [2,4,7,5,0,7,2,5]
var cellules = [-1, -5 , 10 , 5]
console.log(FindMaxMin(array))
console.log(FindMaxMin(tableau))
console.log(FindMaxMin(cellules))


//Sum of Array: Create a function that calculates the sum of all elements in an array.

function SumArray (array) {
    let Sum = 0 ;
for ( let i=0 ; i< array.length ; i++) {
    Sum = (Sum + array[i]);
    }
    return Sum
}
var array= [5,3,1,6,7,7,8,1]
var tableau = [2,4,7,5,0,7,2,5]
var cellules = [-1, -5 , 10 , 5]
console.log(SumArray (array))
console.log(SumArray (tableau))
console.log(SumArray (cellules))

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

//first example
var ages = [20, 3, 16, 40];
function checkAdult(young) {
    return young >= 15;
}
console.log(ages.filter(checkAdult))


//second example
var nom=["Refka" , "Ijlel" , "Alaa","Skander","Ines"]
function namesLength (nom) {
return nom.length >=5 ;
}

console.log(nom.filter(namesLength))


//String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string
function ReverseString (string) {
    var y = string.length ;
    var NewString = "" ;
    for (let j=y-1 ; j>=0 ; j--) {
            NewString=  NewString + string[j] ;
}
return  NewString      
}
var kilma = "dabouza"
var jomla = "hello i am Refka"
console.log(ReverseString (kilma))
console.log(ReverseString (jomla))



//Count Characters: Create a function that counts the number of characters in a string.

//first try
function CountCharacters(string) {
    let ArrayString = string.split("") ;
    return ArrayString.length 
}

var string = "hello i am Refka"
console.log(CountCharacters(string))

//second try
function countchar (string) {
    return string.length
}

console.log(countchar("hay tal3it séhla"))

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence


function CapitalizeWords(phrase) {
    let word = phrase.split(" ") ;
    let firstLetter= "";
    let NewcapitalString = "";
    for(let i=0 ; i<=word.length ; i++) {
        if (word[i]!=null) {
    firstLetter  =(word[i].charAt(0).toUpperCase());
    word[i] = (word[i].replace((word[i].charAt(0)) , firstLetter)) ;
    NewcapitalString = NewcapitalString.concat(" ",word[i]);}

    }
    return NewcapitalString;
    }
    
var phrase2 ="i am pround of my self"
console.log(CapitalizeWords(phrase2))

