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


document.getElementById("Demo").innerHTML = "ciao";  //.innerHTML serve per cambiare l'elemento                                       //Esempio di come prendere un elemento e cambiargli la scritta
this.innerHTML =Date(); //Cambia l'elemento in cui è contenuto es. <button onclick="this.innerHTML = (date);">


 //Esempi di cosa si può mettere come interazione

//onchange 	An HTML element has been changed
//onclick 	The user clicks an HTML element
//onmouseover 	The user moves the mouse over an HTML element
//onmouseout 	The user moves the mouse away from an HTML element
//onkeydown 	The user pushes a keyboard key
//onload 	The browser has finished loading the page

var ciao = "cina";
document.getElementById("demo").innerHTML = ciao.length; //Il risultato sarà la lunghezza di ciao


//  Code 	Result 	Description      //Nelle stringhe per scrivere i caratteri già utilizzati per aprirle si possono usare questi es. "Io sono \" nicola \""
//  \' 	   ' 	    Single quote
//  \" 	   " 	    Double quote
//  \\ 	   \ 	    Backslash
//  \n 	   New Line

// cosa utile: For best readability, programmers often like to avoid code lines longer than 80 characters.  If a JavaScript statement does not fit on one line, the best place to break it is after an operator
document.getElementById("demo").innerHTML = "Hello \
Dolly!"                                                 //si può fare anche così
var ciao = new String("Ciao"); //Le stringhe possono anche essere oggetti ma è meglio non farlo perchè rallenta la velocità di esecuzione

