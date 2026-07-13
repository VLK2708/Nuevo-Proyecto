import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {

  servicios = [
    {
      icon: 'fa-solid fa-print',
      title: 'Mantenimiento de impresoras',
      desc: 'Preventivo y correctivo para Epson, Kyocera, HP y otras marcas. Limpieza, calibración y reemplazo de piezas.'
    },
    {
      icon: 'fa-solid fa-laptop',
      title: 'Reparación de computadores',
      desc: 'Portátiles, equipos de escritorio y AIO. Diagnóstico de hardware y software, cambio de piezas y optimización.'
    },
    {
      icon: 'fa-solid fa-business-time',
      title: 'Renta de equipos',
      desc: 'Impresoras y computadores en alquiler por días, meses o años, con mantenimiento incluido.'
    },
    {
      icon: 'fa-solid fa-box-open',
      title: 'Recarga de tóner e insumos',
      desc: 'Recarga de tóner, cartuchos de tinta y venta de papelería y accesorios para oficina.'
    }
  ];

}