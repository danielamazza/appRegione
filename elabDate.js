function addMinutesToDate(initialDate, min){
	var finalDate = new Date(initialDate.getTime()+min*60000);
    return finalDate;
}

function formatOrario(initialDate) {
	// returns date in form HH:mm (String)
	var finalDate =  new Date(initialDate);
	var ore = pad_with_zeroes(finalDate.getHours(), 2);
	var minuti = pad_with_zeroes(finalDate.getMinutes(),2);	
	var stringa = ore+":"+minuti;
    return stringa;
}

function creaData(string){
	var ore = parseInt(string.slice(0,2));
	var min = parseInt(string.slice(3,5));
	var orario = new Date();
	orario.setHours(ore);
    orario.setMinutes(min);
	return orario
}


function pad_with_zeroes(number, length) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}

function timePeriod(initialDate, finalDate, pause_min) {
    period = finalDate.getTime()-initialDate.getTime()-pause_min*60*1000;
    var periodHours = Math.floor(period / ( 60 * 60 * 1000 ));
    var periodMinutes  = pad_with_zeroes(Math.floor((period % ( 60 * 60 * 1000 ) )/(60 * 1000)),2);
    
    return periodHours + ":" + periodMinutes;
}

function displayTipoOrario(tipo){
    switch(tipo){
    case "s1":
       return text = "Standard (fascia obbl. 9:00-13:00)" ;
       break;
    case "s2":
       return text = "Flessibilit&agrave; particolare 1 (fascia obbl. 10:00-13:00)" ;
       break;
    case "s3":
       return text = "Flessibilit&agrave; particolare 2 (fascia obbl. 11:30-13:00)" ;
       break;
    case "s4":
       return text = "Flessibilit&agrave; particolare 3 (fascia obbl. 9:00-12:30)" ;
       break;
    case "s5":
       return text = "Flessibilit&agrave; particolare 1 + 3 (fascia obbl. 10:00-12:30)" ;
       break;
    case "s6":
       return text = "Flessibilit&agrave; particolare 2 + 3 (fascia obbl. 11:30-12:30)" ;
       break;
    case "s7":
       return text = "Orario differenziato 1 (nessun vincolo nella fascia 7:30-19:30)" ;
       break;
    case "s8":
       return text = "Orario differenziato 2 (nessun vincolo nella fascia 0:00-23:59)" ;
       break;
    default:
      return text = "Devi impostare il tipo di orario";
    }
  }

function checkMattina(oraArrivo, tipoOrario){    
  var inizioConteggio = new Date();
  inizioConteggio.setHours(7); 
  inizioConteggio.setMinutes(30); 
  if (tipoOrario == "s8"){
    inizioConteggio.setHours(0);
    inizioConteggio.setMinutes(0);
  } 
  else {
    inizioConteggio.setHours(7);
    inizioConteggio.setMinutes(30);
  }
  if (oraArrivo < inizioConteggio) {
     oraArrivo = inizioConteggio;
     document.getElementById("message").innerHTML = "Inizio orario valido dalle " + formatOrario(inizioConteggio);        
  } 
return oraArrivo;
} 

function checkMattinaRitardo(oraArrivo, tipoOrario){ 
   var inizioFasciaObb = new Date();
   switch(tipoOrario){ 
    case "s1":
    case "s4":
    default:
       inizioFasciaObb.setHours(9); 
       inizioFasciaObb.setMinutes(0);
       break;
    case "s2":
    case "s5":
       inizioFasciaObb.setHours(10); 
       inizioFasciaObb.setMinutes(0);
       break;
    case "s3":
    case "s6":
       inizioFasciaObb.setHours(11); 
       inizioFasciaObb.setMinutes(30);
       break;
    case "s7":
       inizioFasciaObb.setHours(19); 
       inizioFasciaObb.setMinutes(30);
       break;
    case "s8":
       inizioFasciaObb.setHours(23);       
       inizioFasciaObb.setMinutes(59);
       break;
  }
  if (oraArrivo > inizioFasciaObb) {
     oraArrivo = inizioFasciaObb;
     document.getElementById("message").innerHTML = "Inizio conteggio orario valido dalle " + formatOrario(inizioFasciaObb) + " con permesso.";        
  } 
return oraArrivo;
} 
function oreLavorate_stacco(im,um,ip,up){ 


}

//    fineConteggio.setHours(19); 
//    fineConteggio.setMinutes(30);
 /*  
    switch(tipoOrario){ 
    case "s1":
       inizioFasciaObb.setHours(9); 
       inizioFasciaObb.setMinutes(0); 
       fineFasciaObb.setHours(13);
       fineFasciaObb.setMinutes(0);
       
    case "s2":
       inizioFasciaObb.setHours(10); 
       inizioFasciaObb.setMinutes(0); 
       fineFasciaObb.setHours(13);
       fineFasciaObb.setMinutes(0);
    case "s3":
       inizioFasciaObb.setHours(11); 
       inizioFasciaObb.setMinutes(30); 
       fineFasciaObb.setHours(13);
       fineFasciaObb.setMinutes(0);
    case "s4":
       inizioFasciaObb.setHours(9); 
       inizioFasciaObb.setMinutes(0); 
       fineFasciaObb.setHours(12);
       fineFasciaObb.setMinutes(30);
    case "s5":
       inizioFasciaObb.setHours(10); 
       inizioFasciaObb.setMinutes(0); 
       fineFasciaObb.setHours(12);
       fineFasciaObb.setMinutes(30);
    case "s6":
       inizioFasciaObb.setHours(11); 
       inizioFasciaObb.setMinutes(30); 
       fineFasciaObb.setHours(12);
       fineFasciaObb.setMinutes(30);
     case "s7":
       inizioFasciaObb.setHours(19); 
       inizioFasciaObb.setMinutes(30);
       fineFasciaObb.setHours(7);
       fineFasciaObb.setMinutes(30); 
       //return text = "Orario differenziato 1 (nessun vincolo nella fascia 7:30-19:30)" ;
       
     case "s8":

       inizioFasciaObb.setHours(23); 
       
       inizioFasciaObb.setMinutes(59);
       fineFasciaObb.setHours(0);
       fineFasciaObb.setMinutes(0); 
       inizioConteggio.setHours(0);
       inizioConteggio.setMinutes(0);
       fineConteggio.setHours(23); 
       fineConteggio.setMinutes(59);
       // return text = "Orario differenziato 2 (nessun vincolo nella fascia 0:00-23:59)" ;
       

     default:
      alert("Devi impostare il tipo di orario");
      break; 
    } 
    */
    
