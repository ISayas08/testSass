import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../../services/images/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private _img: ImagesService
  ) { }

  ngOnInit() {
  }

  //=========================================================
  // Events.
  //=========================================================

  private goToPortraitsGallery() {
    this.router.navigate(['/portraits', { number: 6, arePortraits: true }]);
  }
  
  private goToLandscapesGallery() {
    this.router.navigate(['/landscapes', { number: 6, arePortraits: false }]);
  }

}
