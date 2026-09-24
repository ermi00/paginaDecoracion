import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var M: any;

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }
  ngOnInit(): void {
    console.log('jQuery disponible:', $.fn.jquery);
  }
  protected readonly title = signal('decoracion');
  
  inicio = "Inicio" 
  categorias = "Categorias"
  catalogo = "Catalogo"
  contacto = "Contacto"
  sucursales = "Sucursales"
  redesSociales = "Redes Sociales"
  logo = "/public/img/icon64.png"
}
