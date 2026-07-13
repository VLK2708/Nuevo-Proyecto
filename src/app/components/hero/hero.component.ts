import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  slides: Slide[] = [
    {
      image: 'banner1.jpg',
      title: 'Mantenimiento de impresoras',
      description: 'Servicio preventivo y correctivo para todas las marcas.'
    },
    {
      image: 'banner2.jpg',
      title: 'Reparación de computadores',
      description: 'Equipos de escritorio, portátiles y All In One.'
    },
    {
      image: 'banner3.jpg',
      title: 'Renta de equipos',
      description: 'Disponibles por días, meses o años.'
    },
    {
      image: 'banner4.jpg',
      title: 'Venta de tóner e insumos',
      description: 'Originales y compatibles para todas las marcas.'
    }
  ];

  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  fade = true;
  nextSlide(): void {
    
  this.fade = false;

  setTimeout(() => {

    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;

    this.fade = true;

  }, 300);

}

}