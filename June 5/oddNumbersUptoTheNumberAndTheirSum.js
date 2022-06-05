let n=parseInt(prompt('Enter the number'));
let oddNumbersUptoTheNumber= function(num){
    for (let i=1;i<=num;i++){
        if (i%2!==0){
            console.log(i);
        }
    }
}
oddNumbersUptoTheNumber(n);
let sum=0;
let sumOfOddNumbersUptoTheGivenNumber=function(num){
    for (let i=1;i<=num;i++){
        if (i%2!==0){
            sum+=i; 
        }
    }
    console.log(`The sum  of first odd numbers from ${n} natural numbers is ${sum}`);
}
sumOfOddNumbersUptoTheGivenNumber(n)
   
