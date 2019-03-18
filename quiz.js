	var correct = 0;   //To count the number of correct answers
    var wrong = 0;  //To count the number of wrong answers
    var messages = ["Great job!", "That's just okay.", "You really need to do better."];    //The messages array to load a message accoring to the user performance
    var pictures = ["happy1.png", "normal1.png", "sad1.png"];  //The pictures array to load a picture to show how well the user has done
    var score = 0;  //Score is used to get the range to load the pictures and messages
    var timeleftsecs = 180;  //The time that is given to the user to complete the quiz
    var givenTime = timeleftsecs;   //Assgning the given time to count the time left when the user finishes
    var mins = parseInt(timeleftsecs/60);   //Given minutes
    var secs = parseInt(timeleftsecs%60);   //Given seconds after taking away the given minutes
    var marks = 0;  //Marks user is getting by completing the quiz



function timer(){   //The timer function which will keep the seconds running and printing.
        
        if(mins>0){ //When the time left is more than a minute
            if(secs<10){    //When there is less than ten seconds left, print this
                document.getElementById("timer").innerHTML= mins +"m 0"+ secs+"s left";
                
            }
            else{ //When 10 or more seconds are left
                document.getElementById("timer").innerHTML= mins +"m "+ secs+"s left";
            }
        }
        else{
            if(secs<10){    //When there is less than ten seconds left, print this
                document.getElementById("timer").innerHTML= "0"+secs+"s left";
                
            }
            else{   //When 10 or more seconds are left
                document.getElementById("timer").innerHTML= secs+"s left";
            }
        }
    
        if(timeleftsecs<=0){    //Timer will end if the left seconds reach zero
            timeoutFinish();    
        }
        else{   //Timer keeps reducing the seconds
            timeleftsecs = timeleftsecs - 1;
            mins = parseInt(timeleftsecs/60);
            secs = parseInt(timeleftsecs%60);
        }
}

function start(){   //Start Quiz button on the intro of the quiz starts this action

    document.getElementById("quizIntro").style.visibility = "hidden"; //Hide the Intro div
    document.getElementById("quizTime").style.visibility = "hidden";    //Hide the header above the intro div
    
    timer(); //This is run to make sure as soon as the user clicks on the start button, he sees the time he has left to complete the quiz
    var m = setInterval('timer()',1000);    //This is when the timer function starts to run in every single second which is 1000 mili-seconds
    
    document.getElementById("quiz1").style.visibility = "visible";  //To unhide the first question
    
    //To set all the results as unanswered in the result section which is hidden at the start
    document.getElementById("result1").innerHTML = "Unanswered";
    document.getElementById("result1").style.color = "blue";        
    document.getElementById("result2").innerHTML = "Unanswered";
    document.getElementById("result2").style.color = "blue";        
    document.getElementById("result3").innerHTML = "Unanswered";
    document.getElementById("result3").style.color = "blue";        
    document.getElementById("result4").innerHTML = "Unanswered";
    document.getElementById("result4").style.color = "blue";        
    document.getElementById("result5").innerHTML = "Unanswered";
    document.getElementById("result5").style.color = "blue";        
    document.getElementById("result6").innerHTML = "Unanswered";
    document.getElementById("result6").style.color = "blue";        
    document.getElementById("result7").innerHTML = "Unanswered";
    document.getElementById("result7").style.color = "blue";        
    document.getElementById("result8").innerHTML = "Unanswered";
    document.getElementById("result8").style.color = "blue";        
    document.getElementById("result9").innerHTML = "Unanswered";
    document.getElementById("result9").style.color = "blue";        
    document.getElementById("result10").innerHTML = "Unanswered";
    document.getElementById("result10").style.color = "blue";        

    
}  

function check1(){  
    document.getElementById("quiz1").style.visibility = "hidden"; //hide the answered question
    document.getElementById("quiz2").style.visibility = "visible";  //show the next question
    var question1 = document.forms[0].question1.value;
    if (question1 == "Sri Jayawardhenapura Kotte") {    //If the answer is correct
        correct++;  //Add 1 to the correct variable
        document.getElementById("result1").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result1").style.color = "green";   //set the color of that inner html text
    }

    else if(question1 == ""){
        document.getElementById("result1").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result1").style.color = "blue";    //Set the color of the text in results div
    }

    else{
        wrong++;
        document.getElementById("result1").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result1").style.color = "red";    //Set the color of the text in results div
    }
}

function check2(){
    document.getElementById("quiz2").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz3").style.visibility = "visible";  //show the next question
    var question2 = document.forms[1].question2.value;
    if (question2 == "King Kashyapa") {    //If the answer is correct
        correct++;
        document.getElementById("result2").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result2").style.color = "green";   //set the color of that inner html text
    }

    else if(question2 == ""){
        document.getElementById("result2").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result2").style.color = "blue";   //set the color of that inner html text        
    }
    
    else{
        wrong++;
        document.getElementById("result2").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result2").style.color = "red";   //set the color of that inner html text
    }
}

function check3(){
    document.getElementById("quiz3").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz4").style.visibility = "visible";  //show the next question
    var question3 = document.forms[2].question3.value;
    if (question3 == "9") {    //If the answer is correct
        correct++;
        document.getElementById("result3").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result3").style.color = "green";   //set the color of that inner html text
    }

    else if(question3 == ""){
        document.getElementById("result3").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result3").style.color = "blue";    //set the color of that inner html text       
    }

    else{
        wrong++;
        document.getElementById("result3").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result3").style.color = "red";   //set the color of that inner html text
    }
}

function check4(){
    document.getElementById("quiz4").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz5").style.visibility = "visible";  //show the next question
    var question4 = document.forms[3].question4.value;
    if (question4 == "Kandy") {    //If the answer is correct
        correct++;
        document.getElementById("result4").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result4").style.color = "green";   //set the color of that inner html text
    }

    else if(question4 == ""){
        document.getElementById("result4").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result4").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result4").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result4").style.color = "red";   //set the color of that inner html text
    }
}

function check5(){
    document.getElementById("quiz5").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz6").style.visibility = "visible";  //show the next question
    var question5 = document.forms[4].question5.value;

    if (question5 == "Ceylon") {    //If the answer is correct
        correct++;
        document.getElementById("result5").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result5").style.color = "green";   //set the color of that inner html text
    }

    else if(question5 == ""){
        document.getElementById("result5").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result5").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result5").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result5").style.color = "red";   //set the color of that inner html text
    }
}

function check6(){
    document.getElementById("quiz6").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz7").style.visibility = "visible";  //show the next question
    var question6 = document.forms[5].question6.value;

    if (question6 == "Mount Pedro") {    //If the answer is correct
        correct++;
        document.getElementById("result6").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result6").style.color = "green";   //set the color of that inner html text
    }

    else if(question6 == ""){
        document.getElementById("result6").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result6").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result6").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result6").style.color = "red";   //set the color of that inner html text
    }
}

function check7(){
    document.getElementById("quiz7").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz8").style.visibility = "visible";  //show the next question
    var question7 = document.forms[6].question7.value;

    if (question7 == "Rupee") {    //If the answer is correct
        correct++;
        document.getElementById("result7").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result7").style.color = "green";   //set the color of that inner html text
    }

    else if(question7 == ""){
        document.getElementById("result7").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result7").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result7").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result7").style.color = "red";   //set the color of that inner html text
    }
}

function check8(){
    document.getElementById("quiz8").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz9").style.visibility = "visible";  //show the next question
    var question8 = document.forms[7].question8.value;

    if (question8 == "Mahaweli") {    //If the answer is correct
        correct++;
        document.getElementById("result8").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result8").style.color = "green";   //set the color of that inner html text
    }

    else if(question8 == ""){
        document.getElementById("result8").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result8").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result8").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result8").style.color = "red";   //set the color of that inner html text
    }
}

function check9(){
    document.getElementById("quiz9").style.visibility = "hidden";   //hide the answered question
    document.getElementById("quiz10").style.visibility = "visible";  //show the next question
    var question9 = document.forms[8].question9.value;

    if (question9 == "Palk Strait") {    //If the answer is correct
        correct++;
        document.getElementById("result9").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result9").style.color = "green";   //set the color of that inner html text
    }

    else if(question9 == ""){
        document.getElementById("result9").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result9").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result9").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result9").style.color = "red";   //set the color of that inner html text
    }
}

function finish(){
    document.getElementById("quiz10").style.visibility = "hidden";  //hide the answered question
    document.getElementById("finishHeader").innerHTML= "Well done on finishing the quiz within the time limit !";   //Set the message on the header
    var question10 = document.forms[9].question10.value;

    if (question10 == "Bambarakanda Falls") {    //If the answer is correct
        correct++;
        document.getElementById("result10").innerHTML = "Correct !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result10").style.color = "green";   //set the color of that inner html text
    }

    else if(question10 == ""){
        document.getElementById("result10").innerHTML = "Unanswered";    //If unanswered, set the inner html of the results div
        document.getElementById("result10").style.color = "blue";   //set the color of that inner html text        
    }

    else{
        wrong++;
        document.getElementById("result10").innerHTML = "Wrong !"; //Set the inner html for this question in the result sheet, which is hidden right now
        document.getElementById("result10").style.color = "red";   //set the color of that inner html text
    }
    
    //Assign a score to the range to generate picture and a message from the arrays
    if (correct >= 0 && correct < 4) {
        score = 2;
    }

    if (correct > 3 && correct < 8) {
        score = 1;
    }

    if (correct >= 8) {
        score = 0;
    }
    
    marks = (correct)*2 - wrong;
    if(marks < 0){
        marks = 0;
    }

    var timeTaken = givenTime-timeleftsecs; //Count the time taken
    document.body.style.backgroundImage = "none";   //Remove the current background image to show the background color assigned to the marks
    document.getElementById("timer").style.visibility = "hidden";   //Hide the timer
	document.getElementById("after_submit").style.visibility = "visible";  //Unhide the after submit div
    document.getElementById("message").innerHTML = messages[score]; //Generate the message to the user according to his score range
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct and "+ wrong + " wrong.";    //Display the number of correct and wrong answers
    document.getElementById("marks").innerHTML = "Marks: " + marks+ " out of 20";   //Display Marks
    
    //Display the time taken by the user to complete the quiz
    if(timeTaken>60){   //If the time taken is more than a minute
        var takenMins = parseInt(timeTaken/60);
        var takenSecs = parseInt(timeTaken%60);
        document.getElementById("timeSpent").innerHTML ="Spent time: "+ takenMins +"m "+takenSecs+"s";
    }
    else{   //If the time taken is less than a minute
        document.getElementById("timeSpent").innerHTML ="Spent time: "+ timeTaken +"s";
    }
    
    document.getElementById("picture").src = pictures[score];   //Assign a picture according to his score
	document.getElementById("picture").style.visibility = "visible";   //Diplay the assigned picture
    background();   //Set a background color according to the marks
}
    
function timeoutFinish(){
    
    document.getElementById("timer").style.visibility = "hidden";   //Hide the timer
    //Assign a score to the range to generate picture and a message from the arrays
    if (correct >= 0 && correct < 4) {
        score = 2;
    }

    if (correct > 3 && correct < 8) {
        score = 1;
    }

    if (correct >= 8) {
        score = 0;
    }

    marks = (correct)*2 - wrong;
    if(marks < 0){
        marks = 0;
    }
    
    var timeTaken = givenTime-timeleftsecs; //Count the time taken
    document.body.style.backgroundImage = "none";   //Remove the current background image to show the background color assigned to the no. of correct answers
    
    //Hide all the question divs
    document.getElementById("quiz1").style.visibility = "hidden";
    document.getElementById("quiz2").style.visibility = "hidden";
    document.getElementById("quiz3").style.visibility = "hidden";
    document.getElementById("quiz4").style.visibility = "hidden";
    document.getElementById("quiz5").style.visibility = "hidden";
    document.getElementById("quiz6").style.visibility = "hidden";
    document.getElementById("quiz7").style.visibility = "hidden";
    document.getElementById("quiz8").style.visibility = "hidden";
    document.getElementById("quiz9").style.visibility = "hidden";
    document.getElementById("quiz10").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";   //Hide the timer
    document.getElementById("after_submit").style.visibility = "visible";  //Unhide the after submit div
    document.getElementById("message").innerHTML = messages[score]; //Generate the message to the user according to his score range

    if(document.getElementById("finishHeader").innerHTML== ""){ //To make sure this doesn't overwrite any already written message for the user who's finished the quiz on time
        document.getElementById("finishHeader").innerHTML= "Time's Up ! You can no longer answer the questions."
    }
    
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct and "+ wrong + " wrong.";    //Display the number of correct and wrong answers
    document.getElementById("marks").innerHTML = "Marks: " + marks+ " out of 20";   //Display Marks
    
    if(document.getElementById("timeSpent").innerHTML == ""){ //To make sure this doesn't overwrite the time taken for the user who's finished the quiz on time
        //Display the time taken by the user to complete the quiz   
        if(timeTaken>60){   //If the time taken is more than a minute
            var takenMins = parseInt(timeTaken/60);
            var takenSecs = parseInt(timeTaken%60);
            document.getElementById("timeSpent").innerHTML ="Spent time: "+ takenMins +"m "+takenSecs+"s";
        }
        else{   //If the time taken is less than a minute
            document.getElementById("timeSpent").innerHTML ="Spent time: "+ timeTaken +"s";
        }
    
    }
    
    document.getElementById("picture").src = pictures[score];   //Generate a picture to the range of the score
	document.getElementById("picture").style.visibility = "visible";   //Show the generated picture
    background();   //Set a background color according to the marks
}


function background(){  //Function to set the background according to the correct number of answers
    switch(marks){
        case 0 : document.body.style.backgroundColor ="#cc0000";
            break;
        case 1 : document.body.style.backgroundColor ="#e60000";
            break;
        case 2 : document.body.style.backgroundColor ="#ff1a1a";
            break;
        case 3 : document.body.style.backgroundColor ="#ff3333";
            break;
        case 4 : document.body.style.backgroundColor ="#ff4d4d";
            break;
        case 5 : document.body.style.backgroundColor ="#ff3300";
            break;
        case 6 : document.body.style.backgroundColor ="#ff5c33";
            break;
        case 7 : document.body.style.backgroundColor ="#ff704d";
            break;
        case 8 : document.body.style.backgroundColor ="#ff8566";
            break;
        case 9 : document.body.style.backgroundColor ="#ff8000";
            break;
        case 10 : document.body.style.backgroundColor ="#ff9933";
            break;
        case 11 : document.body.style.backgroundColor ="#ffbf00";
            break;
        case 12 : document.body.style.backgroundColor ="#bfff00";
            break;
        case 13 : document.body.style.backgroundColor ="#8cff1a";
            break;
        case 14 : document.body.style.backgroundColor ="#66cc00";
            break;
        case 15 : document.body.style.backgroundColor ="#59b300";
            break;
        case 16 : document.body.style.backgroundColor ="#4d9900";
            break;
        case 17 : document.body.style.backgroundColor ="#33cc33";
            break;
        case 18 : document.body.style.backgroundColor ="#2eb82e";
            break;
        case 19 : document.body.style.backgroundColor ="#248f24";
            break;
        case 20 : document.body.style.backgroundColor ="#1f7a1f";
            break;
        }
}
