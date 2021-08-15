var readlineSync= require('readline-sync');
var score=0;

var userName =readlineSync.question("What is Your Good Name? ");
score=score++;
console.log(" Your Score is: ",score);
console.log("-----------\n");
console.log("Welcome ",userName  );
console.log("\n")
console.log("Let's Play a Game With Omkar , \nHow Do You Know Omkar? \n")
 
 function play(question,answer){
   
   

      
     var ans=readlineSync.question(question);

   if(ans===answer){
     console.log("YOU ARE RIGHT");
     score=score+1;
   }else
   {
     console.log("YOU ARE WRONG");
     score=score-1;
   }console.log("Your Score is:",score);
   console.log("\n")


 }
 
 play("Where Omkar Live? ","parner");
 play("Which is Favorite Game of Omkar? ","basketball");
 play("Which is Omkar Favorite Subject? ","GK");
 

 console.log("Thank You For Plying With Me \nHope You Enjoy It.")
