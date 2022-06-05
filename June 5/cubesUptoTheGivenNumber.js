let n =parseInt(prompt("Enter the number:"));
let cube=0;
let cubeNumber=function(num){
    for(let i=1;i<=num;i++){
        cube=i**3;
        console.log(`${i}^3=${i}*${i}*${i}=${cube}`);
    }
}
cubeNumber(n);