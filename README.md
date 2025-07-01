# TopDriver

**Sitio web corporativo de TopDriver** - Empresa líder en servicios de transporte premium y ejecutivo.

## 🚗 Descripción

TopDriver es una plataforma web moderna que ofrece servicios de transporte de alta calidad, incluyendo viajes programados, choferes exclusivos y soluciones corporativas. El sitio está diseñado con un enfoque en la experiencia del usuario y optimizado para dispositivos móviles.

## ✨ Características principales

- **🎨 Diseño moderno**: Basado en Microsoft Fluent UI 2 con paleta oscura y masculina
- **📱 Totalmente responsive**: Optimizado para dispositivos móviles y desktop
- **🌐 Navegación con rutas**: Sistema de rutas GET reales con React Router
- **🔧 Componentes modulares**: Arquitectura escalable y mantenible
- **⚡ Rendimiento optimizado**: Construido con Vite para carga rápida

## 🛠️ Tecnologías utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **React Router DOM** - Navegación y rutas
- **CSS3** - Estilos personalizados con Flexbox y Grid
- **JavaScript ES6+** - Lógica moderna de aplicación

## 📄 Páginas disponibles

- **`/`** - Página de inicio con servicios destacados
- **`/servicios`** - Catálogo completo de servicios con precios
- **`/acerca-de`** - Historia, misión, equipo y valores de la empresa
- **`/iniciar-sesion`** - Formulario de acceso con opciones sociales

## 🎯 Servicios ofrecidos

### Servicios principales
- **Viajes programados** - Reservas anticipadas desde $25/viaje
- **Chofer exclusivo** - Servicio premium desde $45/hora
- **Servicios corporativos** - Planes empresariales desde $500/mes

### Servicios adicionales
- Traslados aeropuerto
- Eventos especiales
- Grupos grandes
- Servicio express
- Servicio nocturno 24/7
- Traslados médicos

## 🚀 Instalación y desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/pmilciades182/topdriver.git
   cd topdriver
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Vista previa de producción**
   ```bash
   npm run preview
   ```

## 📁 Estructura del proyecto

```
topdriver/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── TopBar.jsx      # Barra de navegación
│   │   ├── Footer.jsx      # Pie de página
│   │   └── MainContent.jsx # Contenido principal
│   ├── pages/              # Páginas de la aplicación
│   │   ├── LoginPage.jsx   # Página de inicio de sesión
│   │   ├── AboutPage.jsx   # Página acerca de nosotros
│   │   └── ServicesPage.jsx # Página de servicios
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── dist/                   # Archivos de producción (generados)
├── netlify.toml           # Configuración de Netlify
└── package.json           # Dependencias y scripts
```

## 🎨 Diseño y UX

### Paleta de colores
- **Primario**: #0078d4 (Azul Microsoft)
- **Fondo**: #1a1a1a (Negro oscuro)
- **Superficie**: #242424 (Gris oscuro)
- **Texto**: #e0e6ed (Blanco suave)
- **Texto secundario**: #b3b3b3 (Gris claro)

### Tipografía
- **Fuente principal**: Segoe UI, system-ui
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold)

### Componentes de UI
- Botones con efectos hover y estados activos
- Cards con sombras y transiciones suaves
- Navegación responsive con menú hamburguesa
- Formularios con validación visual

## 📱 Optimización móvil

- **Breakpoints responsivos**: Diseño adaptativo para todas las pantallas
- **Navegación móvil**: Menú hamburguesa con botón de login siempre visible
- **Touch-friendly**: Elementos táctiles optimizados para dedos
- **Rendimiento**: Carga rápida en conexiones móviles

## 🌐 Despliegue

### Netlify (Recomendado)
1. Conectar repositorio de GitHub
2. Configuración automática detectada desde `netlify.toml`
3. Deploy automático en cada push a main

### Configuración de Netlify
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 👥 Equipo de desarrollo

- **Desarrollador Principal**: Claude Code
- **Diseño UX/UI**: Basado en Microsoft Fluent Design System
- **Arquitectura**: Componentes modulares con React

## 📞 Contacto empresarial

- **Reservas**: reservas@topdriver.com | +1 (555) TOP-DRIVE
- **Choferes**: trabajar@topdriver.com | +1 (555) JOB-DRIVER  
- **Empresas**: empresas@topdriver.com | +1 (555) CORP-DRIVE

## 📝 Licencia

Este proyecto está desarrollado para TopDriver como sitio web corporativo oficial.

---

**TopDriver** - *Transporte premium a tu medida* 🚗
