import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../services/images/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: any;

  constructor(
    private route: ActivatedRoute,
    private _img: ImagesService
  ) {
    this.images = [];
  }

  ngOnInit() {
    const number = parseInt(this.route.snapshot.paramMap.get('number'));
    const arePortraits = eval(this.route.snapshot.paramMap.get('arePortraits'));

    this.images = this._img.getJust(number, arePortraits);
  }

}
