import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  cards = [
    {
      icon: 'fa-solid fa-print',
      label: 'Mantenimiento de Impresoras',
      description: 'Preventivo y correctivo para todas las marcas.'
    },
    {
      icon: 'fa-solid fa-tools',
      label: 'Reparación de Equipos',
      description: 'Computadores de escritorio, All In One y Portátiles.'
    },
    {
      icon: 'fa-solid fa-calendar-days',
      label: 'Renta de Equipos',
      description: 'Por días, meses o años.'
    },
    {
      icon: 'fa-solid fa-box-open',
      label: 'Tóner e Insumos',
      description: 'Originales y compatibles.'
    }
];
}
