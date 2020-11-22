var readVariable = require('readline-sync');
var name = readVariable.question("What's your name?\n");
console.log("\nHello",name+"! Let\'s see how well you know me...\n");
var score = 0;
/*The function dislays questions, one at a time, and also checks for the validity of the answer entered by the user.
   If the answer entered is correct, score is incremented by one. Otherwise, the score remains the same.*/
function quiz(qs)
    {
      
      var response=readVariable.question(qs.ques);
      if(response.toLowerCase()===qs.ans.toLowerCase())
       {
        score = score+1;
        console.log(("\nGot it right!!!\n"));
       }
      else
       {
         console.log("\nGot this wrong...\n");
         console.log("Correct answer:",qs.ans+"\n");
       }
       console.log(`your score so far: ${score}\n`); 
    }
  var questionOne = {
  ques: "What is my favorite sport?\n",
  ans: "Cricket"
  };
  var questionTwo = {
  ques: "In which town did I pursue my undergraduate studies?\n",
  ans: "Manipal"
  };
  var questionThree = {
   ques: "What is the vegetable I hate the most?\n",
   ans: "Brinjal"
  };
  var questionFour = {
  ques: "What do I do when I feel bored?\n",
  ans: "Read"
  };
  var questionFive = {
  ques: "Who is my favorite sports person?\n",
  ans: "Federer"
  };
  var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
  for(var i=0;i<questions.length;i++)// loop for calling the function for each question in the array above.
    { 
      console.log(`Question.${i+1}`)
      quiz(questions[i]);
    }
    
   console.log("Your final score is",score);
   console.log("------------------------------------------End of the Questionnaire--------------------------------------------\n");    
