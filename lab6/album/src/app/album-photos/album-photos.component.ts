import { Component, OnInit } from '@angular/core';
import { AlbumExtended } from '../album.model';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos!: AlbumExtended[];
  loaded: boolean = false;
  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        });
      }
    });
  }
}
