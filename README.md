# KUBO Administración — Landing Page & Servidor Web

Sitio web y servidor de presentación para **KUBO Administración**, servicios profesionales de administración de condominios en Tulum y la Riviera Maya.

---

## 📁 Estructura del Proyecto

El archivo monolítico original (`kubo-administracion.html`) fue desglosado y reorganizado siguiendo las mejores prácticas de desarrollo web:

```text
kuboadministracion/
├── public/                     # Archivos estáticos servidos públicamente
│   ├── css/
│   │   └── styles.css          # Hojas de estilo completas y diseño responsive
│   ├── js/
│   │   ├── main.js             # Efectos de navegación, menú móvil y smooth scroll
│   │   └── contact.js          # Lógica del formulario, envío API y WhatsApp
│   └── index.html              # HTML semántico, modular y optimizado
├── server.js                   # Servidor Express.js con endpoint de cotización
├── package.json                # Configuración de dependencias y scripts
├── .gitignore                  # Exclusión de node_modules y ficheros de entorno
└── README.md                   # Documentación de uso
```

---

## 🚀 Cómo Iniciar el Servidor

### 1. Requisitos Previos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Iniciar el Servidor en Producción
```bash
npm start
```
El servidor se iniciará en `http://localhost:3000`.

### 4. Iniciar en Modo Desarrollo (Hot-Reload)
```bash
npm run dev
```

---

## ⚙️ Características y Configuración

- **Servidor Express**:
  - Servidor de archivos estáticos rápido y ligero.
  - Endpoint `POST /api/contacto` preparado para recibir solicitudes de cotización con validación.
- **Canales de Contacto Directo**:
  - Botón flotante y enlaces directos hacia **WhatsApp**.
  - Configuración rápida disponible en `public/js/contact.js` (`window.KUBO.cfg`).
- **Diseño Responsive & Editorial**:
  - Adaptable a dispositivos móviles, tablets y pantallas de escritorio.
  - Tipografías modernas (*Plus Jakarta Sans*, *Inter* y *Caveat*).
