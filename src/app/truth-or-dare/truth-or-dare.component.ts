import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truth-or-dare',
  templateUrl: './truth-or-dare.component.html',
  styleUrls: ['./truth-or-dare.component.css']
})
export class TruthOrDareComponent implements OnInit {

  playersNameList:any=[];
  playerCount:any=[0];
  playerName="";
  counter=0;
  constructor() { }

  ngOnInit(): void {
  }

  getName(event:Event){
    // console.log((<HTMLInputElement>event.target).value);
    this.playerName=(<HTMLInputElement>event.target).value;

  }
  addPlayers(){
    let playerDetails={id:this.counter,name:this.playerName};
    this.playersNameList.push(playerDetails);
    this.counter++;
    this.playerCount.push(this.counter);
    console.log(this.playersNameList,this.playerCount);
    
  }
  editPlayer(playerId:any){
    this.playersNameList[playerId].name=this.playerName;
  }
  deletePlayer(playerId:any)
  {
    console.log(playerId);
    this.playersNameList.splice(playerId,1);
    this.playerCount.splice(playerId,1);   
    console.log(this.playersNameList,this.playerCount);

  }
  
  
}
