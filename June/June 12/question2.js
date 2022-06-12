//Looping through an array
//There are 5 ways to loop through an array:-
//1) for loop
//2) while loop
//3) do while
//4) for each
//5) for in
//1) for loop:-  
//    In for loop, the use 3 values right of for to provide a loop. 
//    syntax :- for(initialization;condition;increment/decrement);.
//    The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to be true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.The increment/decrement expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
//    Example:-
    // let arr=[];
    // for(leti=0;i<6;i++){
    //     array.push(i);
    // }
//2) while loop:-
//      In while loop, we use an initial expression before writing the while loop. This is used to define and setup the loop variable. The conditional statement is ginev at the right side of while loop, which is checked on every iteration. after the body of the loop, we provide the incerment/decrement.
//      syntax:- initial expression;
//               while(condition){
//                  body
//              increment/decrement
//              }
//      Example:-
        // let array=[];
        // let i=0;
        // while (i<6) {
        //     array.push(i)
        //     i++;
        // }
//3) do while loop:-
//     In do while loop, we use an initial expression before writing the loop. This is used to define and setup the loop variable.The body and update expression is given inside the do block.After which the conditional statement is given at the right side of while loop, which is checked on every iteration.
//     syntax:- initial expression;
//              do{
//                  body
//                  update expression
//              }while(condition);
//      Example:-
        // let arr=[];
        // let i=0;
        // do{
        //     array.push(i);
        //     i++;
        // }
        // while(i<6);