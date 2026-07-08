import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  icon: string;
  tag: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  productos: Producto[] = [
    { icon: '🖨️', tag: 'Insumos', title: 'Tóner original y compatible', desc: 'Para HP, Epson, Kyocera, Canon, Samsung y más. Recarga o reemplazo.' },
    { icon: '💧', tag: 'Insumos', title: 'Cartuchos de tinta', desc: 'Originales y compatibles para Epson, HP, Canon y Brother.' },
    { icon: '📦', tag: 'Papelería', title: 'Resmas de papel', desc: 'Papel bond tamaño carta y oficio, varias marcas y gramajes.' },
    { icon: '🖥️', tag: 'Accesorios', title: 'Accesorios de oficina', desc: 'Cables, mouse, teclados, memorias USB y más para tu equipo.' }
  ];
}
