var cibo = 2;
typeof cibo;
var x = area(2, 8); //La variabile x ha come risultato la funzione cam con argomenti 2 e 8
function area (a, b) { //Definito la variabile area e i suoi argomenti
  return a * b;        //return ferma il codice e mette il valore
}
var k = cenken(128);   //esempio di funzione centigradi in kelvin
function cenken(celsius){    //creazione funzione
  return celsius + 273,25;   //centigradi + 273,15°
}
                             //se si crea una variabile dentro una funzione rimane nella funzione
var fiat = {type:"cinese", model:"cina2000", owner:"cinlung", completo: function() {
                                                return "Questo modello è il " + this.model + " è del tipo " + this.type + " comprata da " + this.owner; //Questo è un'esempio completo di come usare un oggetto con dentro una funzione
                                                                                    }    
           }
            document.getElementById("Demo").innerHTML = "Questo modello è il" + fiat.model; //Metterlo in un paragrafo di id Demo

document.getElementById("Demo").innerHTML = "ciao";                                         //Esempio di come prendere un elemento e cambiargli la scritta






