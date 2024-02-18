 function testButton1() {
      console.log("Test ciclo while, print numeri da 1 a 100");
      let i=1;

      while(i<=100) {
        console.log(i);
        i++;
      }

      console.log("-------------------------------------------");

    }





    function testButton2() {
      console.log("Test ciclo for, print numeri da 1 a 100");
      for(let i=1;i<=100;i++) {
        console.log(i);
      }

      console.log("-------------------------------------------");
    }




    function testButton3() {
      console.log("Test console log, error e warn, messaggio da printare => nome e cognome");
      console.log("-------------------------------------------");
      let nome = "Pietro";
      let cognome = "Gambatesa";
      let stringToPrint = nome+" "+cognome;
      console.log(stringToPrint);
      console.error(stringToPrint);
      console.warn(stringToPrint);
