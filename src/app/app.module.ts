import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//librerias para formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';
import { ListadoRecetaComponent } from './Recetario/listado-receta/listado-receta.component';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { NuevoComponent } from './concesionario/nuevo/nuevo.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';

//servicios
import {RecetasService} from './provides/recetas.service';
import { CochesService } from './provides/coches.service';
import { TodosService } from './provides/todos.service';

//pipes
import { FilterPipe } from './pipes/filter.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { FilterRecetas } from './pipes/filtros-recetas.pipe';


import { HttpClient } from 'selenium-webdriver/http';
import { FormBasicoComponent } from './form-basico/form-basico.component';






@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    RecetaDetalleComponent,   
    RecetarioComponent, 
    ListadoRecetaComponent,
    FilterRecetas,
    FormularioComponent,
    NuevoComponent,
    PlantillaComponent,
    TodosComponent,
    FormBasicoComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CochesService,
    RecetasService,
    TodosService,    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
