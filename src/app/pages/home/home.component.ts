import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mainImg;
  public images: any[];

  constructor(
    private _img: ImagesService
  ) {
    this.mainImg = this._img.getMainImage();
    this.images = this._img.getJust(1, true);
    this.images.push(this._img.getJust(1, false)[0]);
  }

  ngOnInit() {
  }

}
