import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService:MusicService ,private route :Router) { }

  array:any=[];
 
  ngOnInit() {

    this.musicService.getAllTrack().subscribe(data=>
      {
        console.log(data.tracks.track);
        this.array=data.tracks.track;
      });
  }

  click(value){
   
    this.route.navigateByUrl("/result/"+value);
    console.log("click works");  
  }

  addToWishlist(music): any{
    this.musicService.addToWishlist(music).subscribe();
    console.log("Add Wishlist Working");
  }

  showDetails(value): any{
    this.route.navigateByUrl("/details/"+value.artist.name+"/"+value.name);
  }
}
