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
    { icon: '🖨️', label: 'Mantenimiento de impresoras' },
    { icon: '💻', label: 'Reparación de equipos' },
    { icon: '📄', label: 'Renta por días, meses o años' },
    { icon: '🧴', label: 'Tóner e insumos' }
  ];
}
