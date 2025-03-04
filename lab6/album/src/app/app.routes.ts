import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'albums', component: AlbumComponent, title: 'Albums' },
    { path: 'albums/:id', component: AlbumDetailsComponent, title: 'Album detail' },
    { path: 'albums/:id/photos', component: AlbumPhotosComponent, title: 'Album photo detail' },
];