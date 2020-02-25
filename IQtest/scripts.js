
q1 = {
   question:' What is the name of the artist who painted ‘Mona Lisa’? ',
   answers :['Leonardo Da Vinv','Alfred Osang','Eze Mark','Bill Gate'],
   correct:0

}

q2 = {
   question:'  Where is Lincoln Memorial situated in America?',
   answers : ['London','Washington D.C.','New York','Japan'],
   correct : 1
}
q3 = {
   question :' What is the capital of Brazil?',
    answers :['Brasilia','Moroco','Braze','Togo'],
   correct :0
}

var score, mainScore;
var quest = [q1,q2,q3];

var n = Math.floor(Math.random()*3);

var randomQuest =  quest[n];
var answerPic = document.querySelector('img');
answerPic.style.display = 'none';
 var check = randomQuest.correct;
 document.getElementById('next-btn').addEventListener('click',nextQuest);
 document.getElementById('new-game').addEventListener('click',newGame);


 
document.getElementById('question').textContent = randomQuest.question;

document.getElementById('answer-0').textContent = randomQuest.answers[0];
document.getElementById('answer-1').textContent = randomQuest.answers[1];
document.getElementById('answer-2').textContent = randomQuest.answers[2];
document.getElementById('answer-3').textContent = randomQuest.answers[3]; 
document.getElementById('score').textContent = 0;




function newGame(){
   
     
    score = 0;
    mainScore =0;
    document.getElementById('score').textContent = 0;
    answerPic.style.display = 'none';

   
}
//newGame();

function nextQuest(){
   answerPic.style.display = 'none';
   var n = Math.floor(Math.random()*3);

   var randomQuest =  quest[n];
   document.getElementById('question').textContent = randomQuest.question;

   document.getElementById('answer-0').textContent = randomQuest.answers[0];
   document.getElementById('answer-1').textContent = randomQuest.answers[1];
   document.getElementById('answer-2').textContent = randomQuest.answers[2];
   document.getElementById('answer-3').textContent = randomQuest.answers[3]; 

}


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









