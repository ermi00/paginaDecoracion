import { Component, AfterViewInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-contacto',
  standalone: false,
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto implements AfterViewInit {
  ngAfterViewInit(): void {
    var elements = document.querySelector("Select")
    M.FormSelect.init(elements)

    $('input#nombre', 'input#nombre' )
  }

  nombre = "Nombre"
  email = "Email"
  telefono = "Telefono"
  fecha = "Seleciona la fecha"
}
