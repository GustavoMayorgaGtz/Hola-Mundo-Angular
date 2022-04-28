import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './Components/components.module';
import { PagesModule } from './Pages/pages.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule, //Importacion necesaria del modulo de la carpeta componentes
    PagesModule // Importacion del modulo de la carpeta pages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
