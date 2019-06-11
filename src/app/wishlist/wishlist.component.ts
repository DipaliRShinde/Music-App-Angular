import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';
import { Tracks } from '../track';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  array: any = [];
  track=Tracks[100]

  constructor(private musicService: MusicService ,private route :Router) { }

  ngOnInit() {
        this.musicService.getWishlist().subscribe((data:any) => {
          this.track=data
        });
  }

  public removeTrack(id):any {
    console.log("removeTrack", id);
    this.musicService.deleteTrack(id).subscribe()
  }
}
