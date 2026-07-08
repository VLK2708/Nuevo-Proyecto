# VU Suministros & Servicios — Frontend Angular

Sitio migrado a Angular (standalone components), con la paleta verde-azul
del logo VU y el mismo backend Node/Express + Nodemailer de antes.

## Estructura
```
src/app/components/
  navbar/       → menú de navegación
  hero/         → sección principal con blobs de degradado
  marcas/       → chips de marcas atendidas
  servicios/    → grid de servicios
  renta/        → bloque de planes de renta
  productos/    → catálogo de productos
  nosotros/     → galería + estadísticas
  contacto/     → formulario conectado al backend
  footer/       → pie de página
src/app/services/contact.service.ts → llamada HTTP al backend
src/assets/                          → imágenes del taller
server/                              → backend Node/Express (igual que antes)
```

## 1. Correr el frontend en desarrollo
```bash
npm install
npm start
```
Esto levanta el sitio en `http://localhost:4200`.

## 2. Correr el backend (formulario de contacto)
```bash
cd server
cp .env.example .env
```
Edita `.env` con tu cuenta de Gmail y contraseña de aplicación. Luego:
```bash
npm install
npm start
```
El backend queda en `http://localhost:3001`.

## 3. Conectar el frontend al backend
La URL del backend está en:
```
src/app/services/contact.service.ts
export const CONTACT_API_URL = 'http://localhost:3001/api/contact';
```
Cámbiala por la URL de producción cuando despliegues el backend
(por ejemplo en Railway).

## 4. Colores y tipografía

Todo el sistema de color vive en `src/styles.scss`, dentro de
`:root { ... }`. Estos son los tonos tomados del logo:
```scss
--deep:  #0B2A4A;  /* azul profundo — "SUMINISTROS" */
--blue:  #1C6FB0;  /* azul del logo */
--green: #1AA65D;  /* verde del logo */
```
Cambiar estos valores actualiza todo el sitio (botones, degradados,
acentos, etc.).

## 5. Compilar para producción
```bash
npm run build
```
Esto genera la carpeta `dist/vu-frontend/browser`, lista para subir a
cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.).

## 6. Editar textos y contenido

Cada sección tiene su propio componente. Los textos de servicios,
productos, planes de renta y estadísticas están en los archivos
`*.component.ts` de cada carpeta, como listas de objetos fáciles de
editar (por ejemplo `servicios.component.ts` → arreglo `servicios`).
