import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from 'src/player.model';
import { NewsService } from './news.service';
import { News } from './news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  constructor(private _newsServ:NewsService){}
  cur=sessionStorage.getItem('curuser')
  news:News[]=[]

  logout(){
    sessionStorage.clear()
    window.location.reload()
  }
  getNews(){
    this._newsServ.getNews().subscribe(
      data=>{
        let newdata=JSON.parse(JSON.stringify(data)) ;
        this.news=newdata.articles;
      }
    )
  }
}
