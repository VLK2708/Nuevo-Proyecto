import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactPayload } from '../../services/contact.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  form: ContactPayload = {
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  };

  sending = false;
  status: 'idle' | 'ok' | 'err' = 'idle';
  statusMessage = '';

  servicios = [
    'Mantenimiento de impresoras',
    'Reparación de computadores',
    'Renta de equipos',
    'Recarga de tóner e insumos',
    'Otro'
  ];

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) {
      this.status = 'err';
      this.statusMessage = 'Por favor completa los campos obligatorios.';
      return;
    }

    this.sending = true;
    this.status = 'idle';

    this.contactService.send(this.form).subscribe({
      next: (res) => {
        this.sending = false;
        if (res.ok) {
          this.status = 'ok';
          this.statusMessage = '¡Mensaje enviado! Te responderemos pronto.';
          this.form = { nombre: '', email: '', servicio: '', mensaje: '' };
        } else {
          this.status = 'err';
          this.statusMessage = res.error || 'No se pudo enviar el mensaje.';
        }
      },
      error: () => {
        this.sending = false;
        this.status = 'err';
        this.statusMessage = 'No se pudo enviar. Escríbenos por WhatsApp o intenta de nuevo.';
      }
    });
  }
}
