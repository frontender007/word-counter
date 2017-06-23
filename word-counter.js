var numWords = document.getElementById("output");
var txtBox = document.getElementById("txtBox");
var timePassed = document.querySelector(".timePassed");
var wpmBox = document.querySelector(".wordPM");
var counter = 0;

function startTimer() {
     if ( txtBox.value.length > 0 ) {
          counter++;
          timePassed.innerHTML = "Time Elapsed : " + counter;
     }

}

    setInterval(startTimer, 1000);


function countWords (e) {
  
      var str = txtBox.value;
      if ( str.length <= 0 ) {
          numWords.value = 0;
      }
      else {
         
        
         var words = str.split(" ");
         words = words.filter(function(word){
             if ( word !== "undefined" ) {
                 return word;
             }
         });  
         numWords.value = words.length;
         wpmBox.innerHTML = "WPM : " + Math.floor((words.length)/(counter/60));
      }
        
  
}

txtBox.addEventListener("keyup" , countWords);
