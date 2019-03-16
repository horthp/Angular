import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient ) {
    console.log('Servicio de spotify listo');
  }
  getNewReleases(){
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBQDjVe94NoyY-LgWxMl0m8jMTfaJ_5B81vNhrs4dv8xIbq7uCk2W-AY8OLvA1g940JgSBxkW1_iYRPho8'
  });

  this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });

  }
}
