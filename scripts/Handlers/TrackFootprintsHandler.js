// scripts/Handlers/TrackFootprintsHandler.js

class TrackFootprint {
    constructor(id, posX, posY, name) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.name = name;
        this.hX = 0;
        this.hY = 0;
    }
}

export class TrackFootprintsHandler {
    constructor(settings) {
        this.settings = settings;
        this.footprintsList = [];

        const logFootprintsList = document.getElementById("logFootprintsList");
        if (logFootprintsList)
            logFootprintsList.addEventListener("click", () => console.log(this.footprintsList));
    }

    addFootprint(id, posX, posY, name) {
        if (this.footprintsList.some(footprint => footprint.id === id))
            return;

        const footprint = new TrackFootprint(id, posX, posY, name);
        this.footprintsList.push(footprint);
    }

    removeFootprint(id) {
        this.footprintsList = this.footprintsList.filter((footprint) => footprint.id !== id);
    }

    updateFootprintPosition(id, posX, posY) {
        const footprint = this.footprintsList.find((footprint) => footprint.id === id);
        if (footprint) {
            footprint.posX = posX;
            footprint.posY = posY;
        }
    }

    getFootprintsList() {
        return [...this.footprintsList];
    }
}
