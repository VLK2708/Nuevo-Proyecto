import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  icon: string;
  tag: string;
  title: string;
  desc: string;

  image: string;
  detail: string;
  features: string[];
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  selectedProducto: Producto | null = null;

  productos: Producto[] = [
    {
      icon: 'fa-solid fa-print',
      tag: 'Insumos',
      title: 'Tóner original y compatible',
      desc: 'Para HP, Epson, Kyocera, Canon, Samsung y más. Recarga o reemplazo.',

      image: 'toner.jpg',

      detail:
        'Ofrecemos tóner originales y compatibles de alta calidad para impresoras láser. Nuestros productos garantizan excelente rendimiento, impresiones nítidas y mayor duración, ideales tanto para hogares como para empresas.',

      features: [
        'Tóner originales y compatibles',
        'Para HP, Epson, Kyocera, Canon y Samsung',
        'Excelente calidad de impresión',
        'Mayor rendimiento por carga',
        'Garantía en todos los productos'
      ]
    },

    {
      icon: 'fa-solid fa-droplet',
      tag: 'Insumos',
      title: 'Cartuchos de tinta',
      desc: 'Originales y compatibles para Epson, HP, Canon y Brother.',

      image: 'cartuchos.jpg',

      detail:
        'Disponemos de cartuchos de tinta originales y compatibles para impresoras de inyección. Contamos con diferentes referencias para garantizar el mejor desempeño de tu equipo.',

      features: [
        'Cartuchos originales',
        'Cartuchos compatibles',
        'Alta calidad de impresión',
        'Gran variedad de referencias',
        'Excelente relación calidad-precio'
      ]
    },

    {
      icon: 'fa-solid fa-copy',
      tag: 'Papelería',
      title: 'Resmas de papel',
      desc: 'Papel bond tamaño carta y oficio, varias marcas y gramajes.',

      image: 'papel.jpg',

      detail:
        'Suministramos papel para impresión y fotocopiado de excelente calidad, ideal para oficinas, empresas e instituciones educativas.',

      features: [
        'Tamaño carta',
        'Tamaño oficio',
        'Diferentes gramajes',
        'Marcas reconocidas',
        'Venta por unidad o por caja'
      ]
    },

    {
      icon: 'fa-solid fa-computer',
      tag: 'Accesorios',
      title: 'Accesorios de oficina',
      desc: 'Cables, mouse, teclados, memorias USB y más para tu equipo.',

      image: 'accesorios.jpg',

      detail:
        'Encuentra todo tipo de accesorios tecnológicos para complementar tus equipos de cómputo y oficina con productos de excelente calidad.',

      features: [
        'Mouse',
        'Teclados',
        'Memorias USB',
        'Cables HDMI y USB',
        'Accesorios para computadores'
      ]
    }
  ];

  openProducto(producto: Producto): void {
    this.selectedProducto = producto;
    document.body.style.overflow = 'hidden';
  }

  closeProducto(): void {
    this.selectedProducto = null;
    document.body.style.overflow = 'auto';
  }
}
