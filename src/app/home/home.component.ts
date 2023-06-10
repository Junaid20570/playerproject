import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsService } from '../news.service';
import { News } from '../news.model';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  playerReg=new FormGroup({
    uname:new FormControl(),
    email:new FormControl()
  })

  ngOnInit(){
    this.getNews();
  }
  curusr=sessionStorage.getItem('curuser')
  constructor(private _newsServ:NewsService){}
  usr=new User()
  loginPlayer(){
    if(this.usr.username=='admin' && this.usr.passw=='pass'){
      sessionStorage.setItem('curuser','admin');
      window.location.reload()
    }
    else{
      alert("admin login failed")
    }
  }
  news:News[]=[]

  getNews(){
    this._newsServ.getNews().subscribe(
      data=>{
        let newdata=JSON.parse(JSON.stringify(data)) ;
        this.news=newdata.articles;
      }
    )
  }

}
