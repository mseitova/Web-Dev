import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Album } from '../album.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album
  loaded: boolean = false;
  title: string = "";
  loading: boolean = false;


  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getAlbum(postId).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        });
      }
    });
  }
  changeTitle() {
    if (this.title !== "") {
      this.loading = true;
      this.albumService.updateAlbum(this.album.id, `{"title":"${this.title}"}`).subscribe(() => {
        console.log("updated");
        this.album.title = this.title;
        this.title = "";
        this.loading = false;
      })
    }
  }
}
