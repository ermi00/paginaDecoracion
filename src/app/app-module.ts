import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './components/app';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';

@NgModule({
  declarations: [App, Inicio, Categorias],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Inicio,Categorias],
})
export class AppModule {}
