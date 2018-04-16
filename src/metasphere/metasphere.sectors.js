import { Sector } from "./sector/sector.component";
import { SectorModel } from "./sector/sector.model";

export class Sectors {
    constructor() {
        this.sectors = {
            0: new SectorModel({
                id: 0,
                content: "Center",
                children = {
                    1: new SectorModel({
                        id: 1,
                        content: "Outer surface piece 1",
                        children: {}
                    }),
                    2: new SectorModel({
                        id: 2,
                        content: "Outer surface piece 2",
                        children: {
                            4: new SectorModel({
                                id: 4,
                                content: "External space sector",
                                children: {}
                            })
                        }
                    }),
                    3: new SectorModel({
                        id: 3,
                        content: "Outer surface piece 3",
                        children: {}
                    })
                }
            })
        };
    }

    get(id) {
        return this.sectors;
    }
}
