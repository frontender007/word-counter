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