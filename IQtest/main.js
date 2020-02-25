var Question = function (question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
Question.prototype.displayQuestion = function(){

    
     document.getElementById('question').textContent = this.question;

    document.getElementById('answer-0').textContent = this.answers[0];
    document.getElementById('answer-1').textContent = this.answers[1];
    document.getElementById('answer-2').textContent = this.answers[2];
    document.getElementById('answer-3').textContent = this.answers[3]; 


};





var q1 = new Question(' What is the name of the artist who painted ‘Mona Lisa’? ',['Leonardo Da Vinv','Alfred Osang','Eze Mark','Bill Gate'],0);

var q2 = new Question('  Where is Lincoln Memorial situated in America?',['London','Washington D.C.','New York','Japan'],1);

var q3 = new Question(' What is the capital of Brazil?',['Brasilia','Moroco','Braze','Togo'],0);

var quest = [q1,q2,q3];

var n = Math.floor(Math.random()*3);

var randomQuest =  quest[n];

  randomQuest.displayQuestion();

var check = randomQuest.correct;
 var answerPic = document.querySelector('img');
// answerPic.src = " ";
 answerPic.style.display = 'none';
 var score, mainScore;
 score = 0;
 mainScore =0;
 document.getElementById('score').textContent = 0;
 document.getElementById('new-game').addEventListener('click',init);
 document.getElementById('next-btn').addEventListener('click',function(){
     var next = randomQuest.displayQuestion.call();
 });


 


 function init(){
    answerPic.style.display = 'none';
    var score, mainScore;
    score = 0;
    mainScore =0;
    document.getElementById('score').textContent = 0;
    
     
 }


/* function checkAnwer (){
     if(check == 0){
        answerPic.src = "images/1.jpg";
        score + 5;
        mainScore = mainScore + score; 
        document.getElementById('score').textContent = mainScore;

     }else if(check == 1){
        answerPic.src = "images/1.jpg";
        score + 5;
        mainScore = mainScore + score; 
        document.getElementById('score').textContent = mainScore;

     }else if(check == 2){
        answerPic.src = "images/1.jpg";
        score + 5;
        mainScore = mainScore + score; 
        document.getElementById('score').textContent = mainScore;

     }else if(check == 3){
        answerPic.src = "images/1.jpg";
        score + 5;
        mainScore = mainScore + score; 
        document.getElementById('score').textContent = mainScore;

     }else{
        answerPic.src = "images/2.jpg";
        score + 0;
        mainScore = mainScore + score; 
        document.getElementById('score').textContent = mainScore;

     }
 }
 
*/
document.getElementById('answer-0').addEventListener('click',function(el){
    if(check == 0){
        answerPic.style.display = 'block';
     answerPic.src = "images/1.jpg";
     score++;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
     
    }else{
        answerPic.style.display = 'block';
     answerPic.src = "images/2.jpg";
     score = 0;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
 
    }
 });


document.getElementById('answer-1').addEventListener('click',function(el){
    if(check == 1){
        answerPic.style.display = 'block';
     answerPic.src = "images/1.jpg";
     score++;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
     
    }else{
        answerPic.style.display = 'block';
     answerPic.src = "images/2.jpg";
     score = 0;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
 
    }
 });

 document.getElementById('answer-2').addEventListener('click',function(el){
    if(check == 2 ){
        answerPic.style.display = 'block';
     answerPic.src = "images/1.jpg";
     score++;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
     
    }else{
        answerPic.style.display = 'block';
     answerPic.src = "images/2.jpg";
     score = 0;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
 
    }
 });

 document.getElementById('answer-3').addEventListener('click',function(el){
    if(check == 3 ){
        answerPic.style.display = 'block';
     answerPic.src = "images/1.jpg";
     score++;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
     
    }else{
        answerPic.style.display = 'block';
     answerPic.src = "images/2.jpg";
     score = 0;
     mainScore += score;
     document.getElementById('score').textContent = mainScore;
 
    }
 });





