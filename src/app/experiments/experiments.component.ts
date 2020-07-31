import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  experimentToEdit: string = '';
  constructor() { }

  ngOnInit() {
  }

  addExperiment(newExperiment: string) {
    if(!this.experiments.includes(newExperiment)) {
      this.experiments.push(newExperiment);
    }
  }
  edit(updaterExperiment){
    this.experimentToEdit = updaterExperiment;
  }

  save(updaterExperiment, experiment){
   let index = this.experiments.indexOf(experiment);
   this.experiments.splice(index, 1, updaterExperiment.value);
   this.experimentToEdit = '';
  }

  delete(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
}
