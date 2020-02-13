// ========= OBJET CLASS STATION WITH THE API REST DATA JCDECAUX =+=============

class Station {
    constructor(jcdStation, idContainer) {
        // DATA JCDECAUX INIT
        this.name = jcdStation.name;
        this.address = jcdStation.address;
        this.status = jcdStation.status;
        this.mainStands = jcdStation.mainStands;
        this.position = jcdStation.position;
        var container = document.getElementById(idContainer);
        // INIT DOM DATA
        this.eltTitre = container.querySelector(".TitleStation");
        this.eltAddress = container.querySelector(".Address");
        this.eltValeurStatus = container.querySelector(".ValeurStatus");
        this.eltNbBikes = container.querySelector(".NbBikes");
        this.eltNbPlaces = container.querySelector(".NbPlaces");
    }
    // DISPLAY THE DATA JCDECAUX IN HTML TAGS
    showInfo() {
        this.eltTitre.textContent = this.name;
        this.eltAddress.textContent = this.address;
        this.eltValeurStatus.textContent = this.status;
        this.eltNbBikes.textContent = this.mainStands.availabilities.bikes;
        this.eltNbPlaces.textContent = this.mainStands.availabilities.stands;
    }
}
