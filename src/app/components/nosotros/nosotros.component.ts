import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  puntos = [
    'Entrega y visita técnica a domicilio',
    'Soporte técnico post-venta',
    'Precios competitivos',
    'Garantía por escrito en cada servicio',
    'Atención personalizada'
  ];

  stats = [
    { num: '+500', label: 'Clientes atendidos' },
    { num: '+8', label: 'Años de experiencia' },
    { num: '24h', label: 'Tiempo de respuesta' },
    { num: '100%', label: 'Garantía en reparaciones' }
  ];
}
