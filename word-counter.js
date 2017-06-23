var numWords = document.getElementById("output");
var txtBox = document.getElementById("txtBox");
var timePassed = document.querySelector(".timePassed");
var wpmBox = document.querySelector(".wordPM");
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
      }
   
  
}

txtBox.addEventListener("keyup" , countWords);

wpmBox.addEventListener("click" , function(){alert("Hello");});