// ========== RESERVATION CHECKING DATA AND STORRAGE IN BROWSER ================

class Reservation {
      constructor(idNom, idPrenom) {
            // RESERVATION INIT
            this.inputsName = document.getElementById(idNom);
            this.inputsPrenom = document.getElementById(idPrenom);
            this.buttonReservation = document.getElementById('ButtonReservation');
            this.buttonSignature = document.getElementById('ButtonSignature');
            // INIT STORE DATAS IN BROWSER WHIT LOCALSTORAGE
            this.inputsName.value = localStorage.getItem("Nom");
            this.inputsPrenom.value = localStorage.getItem("Prenom");
            // COUNTDOWN INIT
            this.countDown = (secs, elem) => {
                let element = document.getElementById(elem);
                element.innerHTML = "Ils vous reste " + secs + " minutes pour récupérer votre vélo.";
                if(secs < 1) {
                    element.innerHTML = "Temps écoulé votre réservation est annulé!";
                } else {
                    secs --;
                    // 1000 MILISECONDES = 1 SECONDE =>  1s*60=1 MINUTE
                    setTimeout( () => this.countDown(secs, elem), 1000*60);
                };
            };
            // BUTTON RESERVATION ON EVENT CLICK
            this.buttonReservation.addEventListener('click', (e) => {
                    // IF DATA NAME, SURNAME AND STATION MARKER IT'S OK
                    if (this.inputsName.value != "" && this.inputsPrenom.value != "" && mapControl.chekingMarker()) {
                        // ID DATA LOCALSTORRAGE
                        localStorage.getItem("Nom");
                        localStorage.getItem("Prenom");
                        // DISPLAY SIGNATURE CONTENT
                        document.getElementById('InfosStationContent').style.display = 'none';
                        document.getElementById('SignatureContent').style.display = 'block';
                    }
                    // IF IT'S NOT OK
                    else {
                        alert("Veuillez remplir les champs Nom, Prénom et selectionner une station.");
                    }
            });
            this.buttonSignature.addEventListener('click', (e) => {
                // IF SIGNATURE IT'S OK
                if (canvas.checkingSignature()) {
                      // START TIMER
                      this.countDown(20, "Timer");
                      // DISPLAY RESERVATION
                      document.getElementById('DefaultTextResevation').style.display = 'none';
                      document.getElementById('TextReservation').style.display = 'block';
                      // DISPLAY DATA STORAGE RESERVATION
                      document.getElementById("NameStorage").innerHTML = sessionStorage.getItem("nameReservation");
                      document.getElementById("StatutStorage").innerHTML = sessionStorage.getItem("statutsReservation");
                      document.getElementById("AddressStorage").innerHTML = sessionStorage.getItem("addressReservation");
                      // DISPLAY INFO STATION
                      document.getElementById('SignatureContent').style.display = 'none';
                      document.getElementById('InfosStationContent').style.display = 'block';
                      // DISPLAY DATA STORAGE INFO STATION => WHITOUT EXCEEDING THE MAX PLACES BIKES BY STATION.
                      document.getElementById('NbBikes').innerHTML = sessionStorage.getItem("NbBikeAfterResevation");
                      if (sessionStorage.getItem("NbPlacesAfterResevation") < sessionStorage.getItem("stationCapacity")) {
                        document.getElementById('NbPlaces').innerHTML = sessionStorage.getItem("NbPlacesAfterResevation");
                      } else {
                        document.getElementById('NbPlaces').innerHTML = sessionStorage.getItem("stationCapacity");
                      }
                // IF SIGNATURE IT'S NOT OK
                } else {
                        alert("Veuillez signer dans le cadre ci-dessous.");
                    }
            });
      }
};
let reservation = new Reservation( "ValueNoms", "ValuePrenom");
