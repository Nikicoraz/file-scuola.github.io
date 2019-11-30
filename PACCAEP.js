    //conferma attivazione
    console.log("Attivo")

    //Nascondere / visualizzare
    function Ar() {
      var x = document.getElementById("Ard");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
      function Arr() {
      var x = document.getElementById("Arrd");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
      function Aq() {
      var x = document.getElementById("Aqd");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
      function Ac() {
      var x = document.getElementById("Acd");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
      function At() {
      var x = document.getElementById("Atd");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
      function Att() {
      var x = document.getElementById("Attd");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }     
      //Calcolo area
      
      function ar(b, h) {
      if (document.getElementById("br").value == "" ) {
        alert("Base o altezza non specificata");
      } else if (document.getElementById("alr").value == "") {
        alert("Base o altezza non specificata");
      } else {
      var b = document.getElementById("br").value;
      var h = document.getElementById("alr").value;
      document.getElementById("ar").innerHTML = "Area: " + (b*h);
      }
    }
      function arr(b, h) {
      if (document.getElementById("brr").value == "" ) {
        alert("Diagonali non specificate");
      } else if (document.getElementById("alrr").value == "") {
        alert("Diagonali non specificate");
      } else {
      var b = document.getElementById("brr").value;
      var h = document.getElementById("alrr").value;
      document.getElementById("arr").innerHTML = "Area: " + [(b*h)/2];
      }
    }
      function aq(l) {
      if (document.getElementById("lq").value == "" ) {
        alert("Lato non specificato");
      } else {
      var l = document.getElementById("lq").value;
      document.getElementById("aq").innerHTML = "Area: " + (l*l);
      }
    }
      function ac(rc) {
      if (document.getElementById("rc").value == "" ) {
        alert("Raggio non specificato");
      } else {
      var rc = document.getElementById("rc").value;
      document.getElementById("ac").innerHTML = "Area arrotondata: " + Math.round(Math.PI * Math.pow(rc, 2));
      }
    }
      function at(bm, bM, h) {
      if (document.getElementById("bt").value == "" ) {
        alert("Base maggiore, base minore o altezza non specificata");
      } else if (document.getElementById("bmt").value == "") {
        alert("Base maggiore, base minore o altezza non specificata");
      } else if (document.getElementById("alt").value == "") {
        alert("Base maggiore, base minore o altezza non specificata");
      } else {
      var bM = Number(document.getElementById("bt").value);
      var bm = Number(document.getElementById("bmt").value);
      var h = Number(document.getElementById("alt").value);
        if (bm >= bM){
        alert("La base minore è piu grande di quella maggiore?🤔")
      } else {
      var b = (bm + bM);
      var at = b * h / 2
      document.getElementById("at").innerHTML = "Area: " + at ;
      }
      }
    }
      function att(b, h) {
      if (document.getElementById("btt").value == "" ) {
        alert("Base o altezza non specificata");
      } else if (document.getElementById("altt").value == "") {
        alert("Base o altezza non specificata");
      } else {
      var b = document.getElementById("btt").value;
      var h = document.getElementById("altt").value;
      document.getElementById("att").innerHTML = "Area: " + (b*h)/2;
      }
    }

    //Calcolo perimetri
      function pr(b, h) {
      if (document.getElementById("br").value == "" ) {
        alert("Base o altezza non specificata");
      } else if (document.getElementById("alr").value == "") {
        alert("Base o altezza non specificata");
      } else {
      var b = Number(document.getElementById("br").value);
      var h = Number(document.getElementById("alr").value);
      document.getElementById("pr").innerHTML = "Perimetro: " + (b+h)*2;
      }
    }
      function prr(b, h) {
      if (document.getElementById("brr").value == "" ) {
        alert("Diagonali non specificate");
      } else if (document.getElementById("alrr").value == "") {
        alert("Diagonali non specificate");
      } else {
      var b = Number(document.getElementById("brr").value);
      var h = Number(document.getElementById("alrr").value);
      var l = Math.sqrt(Number(Math.pow(b/2, 2)) + Number(Math.pow(h/2, 2)));
      document.getElementById("prr").innerHTML = "Perimetro: " + l*4;
      }
    }
      function pq(l) {
      if (document.getElementById("lq").value == "" ) {
        alert("Lato non specificato");
      } else {
      var l = document.getElementById("lq").value;
      document.getElementById("pq").innerHTML = "Perimetro: " + l*4;
      }
    }
      function pc(b, h) {
      if (document.getElementById("rc").value == "" ) {
        alert("Raggio non specificato");
      } else {
      var rc = document.getElementById("rc").value;
      document.getElementById("pc").innerHTML = "Perimetro arrotondato: " + Math.round(Math.PI * 2 * rc);
      }
    }
      function pt(bm, bM, h) {
      if (document.getElementById("bt").value == "" ) {
        alert("Base maggiore, base minore o altezza non specificata");
      } else if (document.getElementById("bmt").value == "") {
        alert("Base maggiore, base minore o altezza non specificata");
      } else if (document.getElementById("alt").value == "") {
        alert("Base maggiore, base minore o altezza non specificata");
      } else {
      var bM = Number(document.getElementById("bt").value);
      var bm = Number(document.getElementById("bmt").value);
      var h = Number(document.getElementById("alt").value);
      if (bm >= bM){
        alert("La base minore è piu grande di quella maggiore?🤔")
      } else {
        var ah = (bM-bm)/2;
      var da = Math.sqrt(Math.pow(ah, 2) + Math.pow(h, 2));
      var pt = bm + bM + da * 2;
      document.getElementById("pt").innerHTML = "Perimetro: " + pt ;
      alert("⚠️Il perimetro funziona solo per i trapezi isosceli⚠️")
             }
      }
    }
      function ptt(b, h) {
      if (document.getElementById("btt").value == "" ) {
        alert("Base non specificata");
      } else {
      var b = document.getElementById("btt").value;
      document.getElementById("ptt").innerHTML = "Perimetro: " + b*3;
      alert("⚠️Il perimetro funziona solo per i triangoli equilateri⚠️")
      }
    }
