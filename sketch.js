var canvas;
var database;
var gameState = 0, contestantCount, quiz, question, person, allPeople;
var backgroundColor = "pink";


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backgroundColor);

  

}
