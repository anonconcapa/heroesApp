import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from "../../interfaces/heroes.interface";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[`
  mat-card {
    margin-top:20px
  }
  `]
})
export class ListadoComponent implements OnInit {

  arrHeroe:Heroe[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe ((resp:Heroe[]) => {this.arrHeroe = resp
                   console.log(resp)});

}
}
