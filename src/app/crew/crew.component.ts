import {Component, OnInit} from '@angular/core';
import {Candidate} from "../object/candidate";

@Component({
    selector: 'app-crew',
    templateUrl: './crew.component.html',
    styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

    inCrew: boolean = false;
    crew: object[] = [];

    candidates: Candidate[] = [
        {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
        {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
        {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
        {
            name: "Frederick Gregory",
            photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'
        },
        {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
        {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
        {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
    ];


    selected: boolean = this.crew.length < 3;
    active: boolean = true;
    selectedMember: object;
    color: string = '';
    candidate: Candidate;

    constructor() {
    }

    ngOnInit() {
        for(let i=0; i< this.candidates.length; i++){
            this.isUpdate[i] = false;
        }
    }

    // Code the 'addCrewMember' function here:
    candidateName: string;
    candidatePhoto: string;
    isUpdate: boolean[] = [];

    addCrewMember(member) {
        this.selectedMember = member;

        for (let i = 0; i < this.candidates.length; i++) {
            if (!this.crew.includes(member) && this.crew.length < 3) {
                this.crew.push(member);
            } else if (this.crew.includes(member)) {

                let idx = this.crew.indexOf(this.selectedMember);
                this.crew.splice(idx, 1);
            } else {
                return;
            }

        }

    }

    isCandidateAdded(){
        for (let i = 0; i < this.candidates.length; i++) {
            if (this.candidates[i].name === this.candidateName) {
                return true;
            }
        }


        return false;
    }

    addCandidate() {

        this.candidate = new Candidate();
        this.candidate.name = this.candidateName;
        this.candidate.photo = this.candidatePhoto;
        this.candidates.push(this.candidate);
        this.candidateName = '';
        this.candidatePhoto = '';
    }

    deleteCandidate(member: Candidate) {
        let index = this.candidates.indexOf(member);
        this.candidates.splice(index, 1);

    }

    updateCandidate(updatedCandidate: Candidate, name, photo) {
        this.candidate = updatedCandidate;
        let index = this.candidates.indexOf(updatedCandidate);
        this.candidate.name = name;
        this.candidate.photo = photo;
        this.candidates.splice(index, 1, this.candidate);

    }

    update(index) {

            this.isUpdate[index] = true;
    }
}
