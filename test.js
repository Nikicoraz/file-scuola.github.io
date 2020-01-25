      function finestra() {
      alert("Sei entrato senza permesso nella mia pagina test...")
      var sculacciate = prompt("Quante sculacciate vuoi?")
      if (sculacciate <= 0){
        var sculacciate = 1000000
      }
        if (sculacciate == 1){
          alert("Ora ti becchi " + sculacciate + " sculacciata")
          sculaccia(sculacciate)
        } else {
          alert("Ora ti becchi " + sculacciate + " sculacciate");
          sculaccia(sculacciate)
        }
        
      }
   
      function sculaccia(x){
          for (var i = 1; i <= x; i++){
          alert(i + " 👏");
          console.log(x)
          }
      }