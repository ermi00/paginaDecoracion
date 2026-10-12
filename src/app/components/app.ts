import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false, // quítalo si NO usas app-module.ts
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('decoracion');

  inicio = 'Inicio';
  categorias = 'Categorias';
  catalogo = 'Catalogo';
  contacto = 'Contacto';
  sucursales = 'Sucursales';
  redesSociales = 'Redes Sociales';
  logo = 'img/icon64.png';
  mision = 'Mision & Vision';

  ngOnInit(): void {
    console.log('jQuery disponible:', $.fn.jquery);
  }

  ngAfterViewInit(): void {
    // Inicializa los componentes de Materialize una vez que el HTML ya existe
    if (typeof M !== 'undefined') {
      M.AutoInit();
    }
  }
}