import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { HeroeImagenPipe } from './pipes/heroe-imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    HeroeImagenPipe,
    ConfirmarComponent
    ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
