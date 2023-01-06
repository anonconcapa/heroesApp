import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../environments/environment';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles:[`
  img{
    width:100%;
    border-radius:5px;
  }
  `]
})
export class HeroeComponent implements OnInit {

  private baseUrl:string = environment.baseUrl;

  heroe!:Heroe;
  constructor(  private heroeService:HeroesService,
                private activatedRoute: ActivatedRoute,
                private http:HttpClient,
                private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(switchMap(({id})=>{return this.heroeService.getHeroePorId(id)}))
    .subscribe((heroe:any)=>{this.heroe = heroe;
    console.log(this.heroe)})
  }


  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
}
