import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key:string = "ae269a00f71248e5a78c6565e48ca4f1";
  constructor(private _http:HttpClient) { }

  getNews(){
    return this._http.get<News[]>(`https://newsapi.org/v2/top-headlines?country=in&apikey=${this.api_key}`)
  }



}
