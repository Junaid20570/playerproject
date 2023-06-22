import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _httpClient:HttpClient) { }

  public getPlayers() {
    return this._httpClient.get<Player[]>("http://16.16.234.165:9090/player");
  }

  public setPlayers(player:Player) {
    return this._httpClient.post<Player>("http://16.16.234.165:9090/player",player);
  }

  public pendingPlayers() {
    return this._httpClient.get<Player[]>("http://16.16.234.165:9090/player?status=pending");
  }

  public allotPlayer(player:Player) {
    return this._httpClient.put<string>("http://16.16.234.165:9090/player?status=pending",player,{responseType: 'text' as 'json'});
  }

  public deletePlayer(id:string){
    return this._httpClient.delete<string>(`http://16.16.234.165:9090/player/${id}`,{responseType: 'text' as 'json'});
  }
}
