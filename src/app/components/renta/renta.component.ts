import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-renta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './renta.component.html',
  styleUrl: './renta.component.scss'
})
export class RentaComponent {
  planes = [
    { name: 'Por días', desc: 'Ideal para eventos, capacitaciones o necesidades puntuales.' },
    { name: 'Por meses', desc: 'Para oficinas y proyectos con duración definida, con soporte incluido.' },
    { name: 'Por años', desc: 'Contratos corporativos con mantenimiento preventivo periódico.' }
  ];
}
