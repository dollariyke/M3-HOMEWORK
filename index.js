/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfTwoIntegers = (x,y) =>{
    if(x === y){
        return 3 * (x +y);
    }else{
        return x + y ;
    }
}
console.log(sumOfTwoIntegers(3,4))
; /*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNumbers = (a,b) =>{
 if (a === 50 || b === 50 || (a+b)=== 50){
     return true;
 }else{
     return false;
 }
}
console.log(checkNumbers(10,50));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacter = (mystring,i) =>{
    let newString = mystring.replace(mystring.charAt(i),'');
    return newString;
}

console.log(removeCharacter('john',0));
/*
4)
 Create a function to find the largest of three given integers.
*/
const largestOfThreeIntegers =(a,b,c)=>{
    let largest;
 if(a>= b && a>= c){
    largest = a;
 }else if(b>=a && b>=c){
     largest = b;
 }else{
     largest = c;
    }
    return largest;
}

 console.log(largestOfThreeIntegers(2,33,45));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const numInRange =(x,y)=>{
    if((x >= 40 && x<= 60) && (y >= 40 && y<= 60) ){
        return 'within 40 and 60';
    }else if( (x >= 70 && x<= 100) && (y >= 70 && y<= 100)) {
        return 'within 70 and 100'
    }else{
        return 'out of range'
    }
}
console.log(numInRange(75,100));



/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCityName =(y)=>{
    if ((y.startsWith('los'))|| (y.startsWith('New'))){
        console.log(y)
    }

}

console.log(displayCityName('los angeles'));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
 const sumOfArray =(arr)=>{
     let sum = 0;
    for(let i = 0 ; i < 3; i++){
        sum = sum + arr[i];
    }
    return sum;
 }

 console.log(sumOfArray([1,2,15]));
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/ 
const arrayContains =(arr)=>{

   for(let i = 0 ; i < 2; i++){
       if(arr[i]===1 || arr[i]===3){
           return true
       }else{
           return false       }
   }
}

console.log(arrayContains([0,2]));
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
11)
Create a function to find the longest string from a given array of strings.
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
13)
Create a function to find the index of the greatest element of a given array of integers
14)
Create a function to get the largest even number from an array of integers.
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
const notContains =(arr)=>{

    for(let i = 0 ; i < 2; i++){
        if(arr[i] !==1 && arr[i]!==3){
            return true
        }else{
            return false
        }
    }
 }
 
 console.log(notContains([0,3]));
 
 const longestString = (arr)=>{
    let lent = 0;
    let stringz = '';
    for(let i = 0; i< arr.length; i++){
        if(arr[i].length > lent){
            lent = arr[i].length;
            stringz = arr[i];
        }
    }
    return stringz;
 }

 console.log(longestString(['boy','john','peterhead','extraordinary']));

const typesOfAngles =(angle)=>{
    if(angle > 0 && angle <90){
     return 'acute';
    }else if(angle >90 && angle <180 ){
    return 'obtuse'
    }else if(angle === 90){
        return 'right angled triangle';
    }else if( angle === 180){
        return 'angle on a straight line'
    }else{
        return 'NA'
    }

}

console.log(typesOfAngles(90));

const indexOfgreatestInteger =(arr)=>{
    let greatest = 0;
    let indexHolder;
    for (let i =0; i < arr.length ; i++){
        if (arr[i]> greatest){
            greatest = arr[i];
            indexHolder = i;
        }
    }
    return indexHolder;
}
console.log(indexOfgreatestInteger([25,88,30,55]))