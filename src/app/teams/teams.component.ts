import { Component, OnInit } from '@angular/core';
import { TeamdataService } from '../teamdata.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teamPoints = null;
  name =null;



  constructor(private td: TeamdataService) {

    this.teamPoints = td.teamPoints;
   // this.name=td.getName();



  }
getdata(){
  this.name=this.td.getName();
}

}


