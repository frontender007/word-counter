var numWords = document.getElementById("output");
var txtBox = document.getElementById("txtBox");
/*btn.onclick = function()
{
  var str = document.getElementById("txtBox").value;
   var words = str.split(" ");
   numWords.value = words.length;
   console.log( words.length );
   
};*/


function countWords (e) {
  if ( e.keyCode === 32 || e.keyCode === 8 ) {
    var str = txtBox.value;
    var words = str.split(" ").filter(function(word){ if ( word !== ""){ return word;} });
    numWords.value = words.length;
    console.log( words.length );
  }
}

txtBox.addEventListener("keyup" , countWords);