import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImagen'
})
export class HeroeImagenPipe implements PipeTransform {

  transform(info:Heroe):string {

    if(!info.id){
      return 'assets/no-image.png'
    }else if (info.alt_img) {
      return info.alt_img;
    }
    return `../../../../assets/heroes/${info.id}.jpg`;
  }

}
