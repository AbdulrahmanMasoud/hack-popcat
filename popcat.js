setInterval(function(nunOfClick = 1000){
for (i = 0; i < nunOfClick; i++) {
 document.dispatchEvent(new KeyboardEvent('keydown', {shiftKey:true}));
}
  
