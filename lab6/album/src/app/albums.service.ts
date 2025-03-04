import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album, AlbumExtended } from './album.model';
import { title } from 'process';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    constructor(private client: HttpClient) {
    }

    getAlbums(): Observable<Album[]> {
        return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }
    getPhotos(id: number): Observable<AlbumExtended[]> {
        return this.client.get<AlbumExtended[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    }

    getAlbum(id: number): Observable<Album> {
        return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
    }

    deleteAlbum(id: number) {
        return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
    }

    updateAlbum(id: number, newTitle: string) {
        return this.client.patch(`https://jsonplaceholder.typicode.com/albums/${id}`, `{"title":"${newTitle}"}`);
    }




}