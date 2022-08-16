//===========================SOUNDS PLAYING==============================================
var called = false;

function correctAnswer(){

    let audio = new Audio();
    audio.src = "sounds/correctanswer.mp3";
    audio.play();
    called = true;
}

function wrongAnswer(){

    let audio = new Audio();
    audio.src = "sounds/wronganswer.mp3";
    audio.play();
    called = true;
}

function newRound(){

    let audio = new Audio();
    audio.src = "sounds/roundbreak.mp3";
    audio.play();
}

function lostLives(){

    let audio = new Audio();
    audio.src = "sounds/lostlives.mp3";
    audio.play();
}

//=============COUNTDOWN FUNCTION===============================
let timer = false;
function countdown(){

    let z = 5;
    var x = setInterval(function(){

        let timer = true;
        document.getElementById("countdown").innerHTML= z;
        z = Math.floor((z - 0.1)*10)/10;
        if(z < 0){
            clearInterval(x);
            if(called == false) wrongAnswer();
        }

    }, 100);
}

//==============SHUFFLE FUNCTION=====================================================
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


//========================QUESTIONS ARRAY=====================================================
const questions = [
    ["Motoryzacja","Z czym samochodowy gaźnik miesza paliwo?","Z powietrzem"],
    ["Sztuka","Jaką część ciała odciął sobie Vincent van Gogh?","Ucho"],
    ["Chemia","Jak się nazywał rosyjski chemik, twórca układu okresowego pierwiastków? (Można podać samo nazwisko)","Dmitrij Mendelejew"],
    ["Literatura","Jaki stopień wojskowy miał Michał Wołodyjowski w ostatniej części trylogii Sienkiewicza?","Pułkownik"],
    ["Historia","Miasto Stambuł nazywało się wcześniej Konstantynopol, a jak nazywało się to miasto w starożytności?","Bizancjum"],
    ["Państwa","Grecja jest republiką czy monarchią?","Republiką"],
];
  
  shuffle(questions);

//NEXT QUESTION
var i = -1;
function newQuestion(){
    if(i==questions.length) alert("Koniec pytań!");
    i++;
    document.getElementById("category").innerHTML = questions[i][0];
    document.getElementById("question").innerHTML = questions[i][1];
    document.getElementById("answer").innerHTML = questions[i][2];
    called = false;
}









    
      
