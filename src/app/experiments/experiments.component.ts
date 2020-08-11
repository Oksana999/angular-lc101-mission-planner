import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
    completedExperiments: string[] = [];
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   show: string = "https://img.gazeta.ru/files3/161/10140161/012211-pic905-895x505-36830.jpg";
   // show: string = "https://www.dw.com/image/51779547_303.jpg";

   constructor() { }

   ngOnInit() { }

    addExperiments(experiment: string) {
       if(!this.completedExperiments.includes(experiment)){
           this.completedExperiments.push(experiment);
       }else{
           if(this.completedExperiments.includes(experiment)){
               let index = this.completedExperiments.indexOf(experiment);
               this.completedExperiments.splice(index, 1);
           }
       }

    }

    addNewExperiment(experiment: string) {
       if(!this.experiments.includes(experiment)){
           this.experiments.push(experiment);
       }

    }

    deleteExperiment(experiment: string) {
       let index = this.experiments.indexOf(experiment);
       this.experiments.splice(index, 1);

    }
}
