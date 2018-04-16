export class Sector {
    constructor(sector) {
        this.sector = sector;
    }

    content() {
        return this.sector.content;
    }

    child(id) {
        return this.sector.children[id];
    }
};
