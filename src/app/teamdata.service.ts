import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamdataService {
  teamPoints: any[] = [
    {
      matchType: 'T20',
      league: 'CTCL 2019 Summer T20 League',
      level: 'Div A',
    },
    {
      name: 'lions',
      points: 12,
      won: 3,
      lost: 2,
      draw: 0,
      totalMatches: 5
    },
    {
      name: 'Tiger',
      points: 18,
      won: 6,
      lost: 0,
      draw: 0,
      totalMatches: 6
    }
  ];
  getName()
  {
    return "amirkhan";
  }

  constructor() {

   }
  
}
