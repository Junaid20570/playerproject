import { Component } from '@angular/core';
import { Player } from 'src/player.model';
import { PlayerService } from '../player.service';
import { SearchPipe } from 'src/search.pipe';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent {

  constructor(private _playerServ:PlayerService){}
  ngOnInit(): void {
    this.getPlayer();
    
  }
  cur=sessionStorage.getItem('curuser')
    setTeam='';
  color="red";
  allPlayers:Player[]=[];
  public getPlayer(){
    console.log(this.setTeam)
    this._playerServ.getPlayers().subscribe(
      data=>{
        console.log(data)
        this.allPlayers=data;
    })
  }

  pendingPlayers:Player[]=[];
  
  getPendingPlayers(){
    this._playerServ.pendingPlayers().subscribe(
      data=>{
        console.log(data);
        this.pendingPlayers=data;
      }
    )
  }
batsman:number=0;
bowler:number=0;
allRound:number=0;
  calculatePlayerDetails(){
    let pipeObj=new SearchPipe();
    let filteredPlayers=pipeObj.transform(this.allPlayers,this.setTeam);
    this.batsman=0;
    this.bowler=0;
    this.allRound=0;
    for(let i=0;i<filteredPlayers.length;i++){
      if(filteredPlayers[i].role==="batsman"){
        this.batsman++;
      }
      if(filteredPlayers[i].role==="bowler"){
        this.bowler++;
      }
      if(filteredPlayers[i].role==="all rounder"){
        this.allRound++;
      }
    }
  }

  deletePlayer(id:string){
    console.log(id);
    this._playerServ.deletePlayer(id).subscribe(
      data=>{
        this.getPlayer();
        alert(data);
      }
    )
  }
}
