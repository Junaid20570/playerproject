import { Component } from '@angular/core';
import { Player } from 'src/player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-allot-players',
  templateUrl: './allot-players.component.html',
  styleUrls: ['./allot-players.component.css']
})
export class AllotPlayersComponent{

  constructor(private _playerServ:PlayerService){}

  ngOnInit(): void {
    this.getPendingPlayers();
  }
  setTeam:string[]=[];
  pendingPlayers:Player[]=[];
  
  
  getPendingPlayers(){
    this._playerServ.pendingPlayers().subscribe(
      data=>{
        console.log(data);
        this.pendingPlayers=data;
      }
    )
  }

  allotPlayer(player:Player, index:number){
    player.team=this.setTeam[index];
    this._playerServ.allotPlayer(player).subscribe(
      data=>{
        this.getPendingPlayers();
        alert(data);
      }
    )
  }
}
