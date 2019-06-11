import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }

    array:any=[];

  ngOnInit() {
    this.getTrack();
  }

  getTrack(): void {

    const search = this.route.snapshot.paramMap.get('id');
    this.musicService.getTrack(search).subscribe(data  => {
  
    console.log("search for tracks..");
    this.array=data.results.trackmatches.track;
     
  });
}

}
