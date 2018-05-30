import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  //=========================================================
  // Shared methods.
  //=========================================================

  public getJust(n: number, isGoinToReturnPorttraits: boolean = true) {
    let f = 0,
      imagesToReturn = [],
      baseImg = {
        src: '',
        description: '',
        classAnimation: '',
      };

    baseImg.src = isGoinToReturnPorttraits ?
      './../../../assets/imgs/portrait-img.jpg' :
      './../../../assets/imgs/landscape-img.jpg';
    baseImg.description = isGoinToReturnPorttraits ?
      'Portraits' :
      'Landscapes';
    baseImg.classAnimation = isGoinToReturnPorttraits ?
      'home-content__secundary-image--inclined' :
      'home-content__secundary-image--enhanced';

    for (f; f < n; f++) {
      imagesToReturn.push(baseImg);
    }

    return imagesToReturn;
  }

  public getMainImage() {
    return {
      src: './../../../assets/imgs/main-img.jpg',
      description: 'Main image'
    };
  }
}
