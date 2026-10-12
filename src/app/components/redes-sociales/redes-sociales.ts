import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: false,
  styleUrl: './redes-sociales.css',
  templateUrl: './redes-sociales.html',
})
export class RedesSociales {

  leyenda = "© 2014 Copyright Decoracion"
  redes = [
    {
      "nombre": "Facebook",
      "icono": "fa-brands fa-facebook fa-2xl",
      "url": "https://facebook.com",
      "color": "white",
      "fuente": "30px"
    },

    {
      "nombre": "TikTok",
      "icono": "fa-brands fa-tiktok fa-2xl",
      "url": "https://tiktok.com",
      "color": "white",
      "fuente": "30px"
    },

    {
      "nombre": "YouTube",
      "icono": "fa-brands fa-youtube fa-2xl",
      "url": "https://facebook.com",
      "color": "white",
      "fuente": "30px"
    },

    {
      "nombre": "Instagram",
      "icono": "fa-brands fa-instagram fa-2xl",
      "url": "https://facebook.com",
      "color": "white",
      "fuente": "30px"
    }
  ]


}
