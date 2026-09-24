import { Component,OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var M: any;

@Component({
  selector: 'app-inicio',
  standalone: false,
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    M.Slider.init(document.querySelectorAll('.slider'));
  }
  ngOnInit(): void {
     console.log('jQuery disponible:', $.fn.jquery);
  }
  nombreEmpresa = "Decoracion Mexicana"
  eslogan = "Estilo y diseño en cada rincon de tu casa"

  titulo1 = "Diseños unicos";
  subtitulo1 = "Decoracion para darle vida a tu hogar";

  titulo2 = "Estilo y elegancia";
  subtitulo2 = "Creamos espacios con personalidad";

  titulo3 = "Decoracion mexicana";
  subtitulo3 = "Tradicion y diseño para tu hogar";

  titulo4 = "Transforma tu espacio";
  subtitulo4 = "Encuentra el estilo que buscas";
}
