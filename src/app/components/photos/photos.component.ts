import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  photos: Photo[] = [];

  constructor(private _photosService: PhotosService) { }

  ngOnInit() {
    this._photosService.getPhotos()
      .subscribe(
        (photos: any) => {
          console.log(photos);
          this.photos = photos;
        },
        (error: any) => {console.log('error');
      });
  }

}
