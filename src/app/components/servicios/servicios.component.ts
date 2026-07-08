import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Servicio {
  num: string;
  icon: string;
  title: string;
  desc: string;
  link: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios: Servicio[] = [
    {
      num: '01',
      icon: '🖨️',
      title: 'Mantenimiento de impresoras',
      desc: 'Preventivo y correctivo para Epson, Kyocera, HP y otras marcas. Limpieza, calibración y reemplazo de piezas.',
      link: 'Ver detalle'
    },
    {
      num: '02',
      icon: '💻',
      title: 'Reparación de computadores',
      desc: 'Portátiles, equipos de escritorio y AIO. Diagnóstico de hardware y software, cambio de piezas y optimización.',
      link: 'Ver detalle'
    },
    {
      num: '03',
      icon: '📄',
      title: 'Renta de equipos',
      desc: 'Impresoras y computadores en alquiler por días, meses o años, con mantenimiento incluido en el contrato.',
      link: 'Ver planes'
    },
    {
      num: '04',
      icon: '🧴',
      title: 'Recarga de tóner e insumos',
      desc: 'Recarga de tóner, cartuchos de tinta y venta de papelería y accesorios para tu oficina.',
      link: 'Ver productos'
    }
  ];
}
