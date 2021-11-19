setInterval(function(numOfClick = 1000){
for (i = 0; i < numOfClick; i++) {
 document.dispatchEvent(new KeyboardEvent('keydown', {shiftKey:true}));
}
  
