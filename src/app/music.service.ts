import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tracks } from './track';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public track;
  public track1;
  public count=1;
  constructor(private http:HttpClient) { }

    getAllTrack():any {
      return this.http.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=d12367512494dccf2fdfc7bd75582cfd&format=json')
    }

    getTrack(value):any {
      var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=920f792ee345290b28ca1b88329197b4&track=${value}&format=json&limit=10`;
      return this.http.get(url);
    }

    addToWishlist(value):Observable<any> {
      console.log("valuevaluevalue", value);
      this.count++;
      this.track=new Tracks(this.count, value.name, value.url);
      console.log(this.track);
      return this.http.post<any>('http://localhost:8080/api/v1/track',this.track);
    }
  
    getWishlist():Observable<any> {
      return this.http.get<any>("http://localhost:8080/api/v1/track");
    }

    deleteTrack(id) {
      console.log("deleteTrack working");
      return this.http.delete(`http://localhost:8080/api/v1/track/${id}`,id);
    }
}
