import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
    equipmentItems: object[] = [
        {name: 'Duct Tape', mass: 0.5},
        {name: 'Space Camera', mass: 20},
        {name: 'Food', mass: 150},
        {name: 'Oxygen Tanks', mass: 400},
        {name: 'AE-35 Unit', mass: 5},
        {name: 'ISS Supplies', mass: 800},
        {name: 'Water', mass: 250},
        {name: 'Satellite', mass: 1200},
        {name: 'R2 Unit', mass: 32}
    ];
    cargoHold: object[] = [];
    cargoMass: number = 0;
    maximumAllowedMass: number = 2000;
    maxItems: number = 10;
    selected: object;
    clicked: boolean = false;
    // remainMass: boolean = (this.maximumAllowedMass - this.cargoMass) < 200;
    disablebutton: boolean[] = [];


    constructor() {
    }


    ngOnInit() {
        for (let i = 0; i < this.equipmentItems.length; i++) {
            this.disablebutton[i] = false;
        }
    }

    // Code your addItem function here:

    addItem(item, i) {
        if (!this.cargoHold.includes(item)) {
            this.cargoHold.push(item);
            this.cargoMass += item.mass;
            this.disablebutton[i] = true;

            return (this.maximumAllowedMass - this.cargoMass) < 200;
        }
    }

    remainMass() {

        return (this.maximumAllowedMass - this.cargoMass) < 200

    }

    emptyCargoHold() {
        // this.remainMass = false;
        this.cargoMass = 0;
        this.cargoHold = [];
        for (let i = 0; i < this.disablebutton.length; i++) {
            this.disablebutton[i] = false;
        }


    }

    deleteEquipment(equipment) {

        let index = this.cargoHold.indexOf(equipment);
        this.cargoHold.splice(index, 1);
        this.cargoMass -= equipment.mass;
        this.clicked = false;

    }

    hello() {
        this.clicked = true;
    }
}
