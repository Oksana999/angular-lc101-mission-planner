import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  equipmentToEdit: string = '';
  selected: string;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(newEquipment: string) {
    this.equipments.push(newEquipment);
  }

  edit(equipment: string) {
    this.equipmentToEdit = equipment;
  }

  save (updatedEquipment: string, equipment: string) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1, updatedEquipment);
    this.equipmentToEdit = '';

  }

  remove(selected: string) {
    let index = this.equipments.indexOf(selected);
    this.equipments.splice(index,1);
  }
}
