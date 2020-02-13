// ============  AJAX GET REQUEST ==============================================

function ajaxGet(url, isJson, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", url);     // On récupére le contenu du fichier avec la méthode GET
    if (isJson) {
        request.setRequestHeader("Accept", "application/json");
    }
    request.addEventListener("load", function () {
        if (request.status >= 200 && request.status < 400) {
            let data = request.responseText;
            if (isJson) {
                callback(JSON.parse(data));
            } else {
                callback(data);
            }
        } else {
            console.error(`Erreur ${request.status} ${request.statusText}`);
        }
    })
    request.addEventListener("error", function () {
        console.error("Request fail. No response from server.")
    });
    request.send(null);
};

// === MAP USING API REST: JCDECAUX and LeafletJS ==============================
// === JCDECAUX: https://developer.jcdecaux.com/#/home =========================
// === LeafletJS: https://leafletjs.com/ =======================================

class Map {
    constructor(idContainer) {
        // MAP INIT
        this.idContainer = idContainer;
        let container = document.getElementById(idContainer)
        this.dataJcDecaux();
        this.marker = null;
        // CHECK MARKER FOR RESERVATION CONTROL
        this.checkMarker = false;
        // DATA API REST MAP INIT AFTER DOM LOADED
        document.addEventListener('DOMContentLoaded', () => {
            this.map = L.map('Map').setView([43.604, 1.444], 12.5);
            L.tileLayer(
                'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox.streets',
                    accessToken: 'pk.eyJ1IjoiYnJhc3NldXIiLCJhIjoiY2p5cmxha3JkMDYwOTNtcDUwNTR6MzlpMiJ9.psOTzxHn-3xuq8yQYJnHFA'
            }).addTo(this.map);
        });
    }
    // DATA API REST JCDECAUX WITH AJAX
    dataJcDecaux() {
        ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=Toulouse&apiKey=59734facb80e231b10dfd6da2a735bdbdcf9e1ac", true, (data) => {
            for (let i = 0; i < data.length; i++) {
                // INSTANTIATION STATION CLASS IN NEW MARKER
                this.createMarker(new Station(data[i], this.idContainer));
            }
        })
    };
    // MARKER INIT
    createMarker(station) {
        this.marker = L.marker([station.position.latitude, station.position.longitude], {
                station: station
        })
        .addTo(this.map)
        .on("click", (e) => {
              // CHECK IF STATION HAVE A BIKE
              let nbBikeStation = e.target.options.station.mainStands.availabilities.bikes;
              if (nbBikeStation != 0){
                  this.checkMarker = true;
                  // STATION CLASS SHOW DATA JCDECAUX
                  station.showInfo(e.target.options.station);
                  // ZOOM ON STATION MAP
                  this.map.setView([e.latlng.lat, e.latlng.lng], 15);
                  // INIT STORAGE DATAS IN BROWSER
                  let nameStorage = e.target.options.station.name;
                  sessionStorage.setItem("nameReservation", nameStorage);
                  let statutsStorage = e.target.options.station.status;
                  sessionStorage.setItem("statutsReservation", statutsStorage);
                  let addressStorage = e.target.options.station.address;
                  sessionStorage.setItem("addressReservation", addressStorage);
                  let nbPlacesStorage = e.target.options.station.mainStands.availabilities.stands +1;
                  sessionStorage.setItem("NbPlacesAfterResevation", nbPlacesStorage);
                  let nbBikeStorage = e.target.options.station.mainStands.availabilities.bikes -1;
                  sessionStorage.setItem("NbBikeAfterResevation", nbBikeStorage);
                  let stationCapacity = e.target.options.station.mainStands.capacity;
                  sessionStorage.setItem("stationCapacity", stationCapacity);
              // IF STATION DON'T HAVE BIKE.
              } else {
                alert("Cette station n'a plus de vélo disponible. Merci de choisir une autre station.");
              }
            });
    }
    // CHECK IF HAVE STATION SELECTED BEFORE CLICK EVENT IN RESERVATION CLASS
    chekingMarker() {
      return this.checkMarker;
    };
};
let mapControl = new Map("SectionMap");
