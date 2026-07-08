import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
}

// URL del backend Node/Express. Cambia esto al desplegar a producción.
export const CONTACT_API_URL = 'http://localhost:3001/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  send(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(CONTACT_API_URL, payload);
  }
}
