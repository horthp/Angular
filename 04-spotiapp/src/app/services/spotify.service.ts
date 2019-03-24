import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient ) {
    console.log('Servicio de spotify listo');
  }

  getQuery( query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCUaVreLeRzt3dQ9k0yOCckm2ZCWohghK2odEbN-ihUQkd1qmHynbXbgIqgTYjYVPo7cxYOGj4eKcOhQOM'
    });

    return this.http.get(url,{headers});
  }
  getNewReleases() { 
    return this.getQuery('browse/new-releases')
      .pipe(map( data => {
        return data['albums'].items;
      }));
  }

  getArtista(termino) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe( map( data => data['artists'].items));
  }
}
