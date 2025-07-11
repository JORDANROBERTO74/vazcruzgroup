# Estructura de Servicios - Vascruz Group

## Descripción General

Se ha implementado una estructura completa de servicios para Vascruz Group que incluye:

- **Página principal de servicios** (`/services`)
- **Páginas dinámicas por categoría** (`/services/[category]`)
- **Páginas dinámicas por producto** (`/services/[category]/[product]`)
- **Componentes reutilizables** con animaciones y diseño responsivo

## Estructura de Archivos

### Páginas

```
src/app/[locale]/services/
├── page.tsx                    # Página principal de servicios
├── [category]/
│   ├── page.tsx               # Página de categoría específica
│   └── [product]/
│       └── page.tsx           # Página de producto específico
```

### Componentes

```
src/components/services/
├── ServicesHero.tsx           # Hero section con animaciones
├── ServicesCategories.tsx     # Grid de categorías de servicios
├── ServicesFeatured.tsx       # Productos destacados
└── ServicesCTA.tsx           # Call-to-action section
```

## Categorías de Servicios

### 1. Representación Comercial (`commercial-representation`)

- **Descripción**: Intermediación profesional entre fabricantes, distribuidores y compradores
- **Productos**:
  - Guía de Exportación PDF ($10)
  - Mini Libro de Estrategia Comercial ($23)
  - Paquete de Plantillas de Contratos ($23)
  - Sesión de Asesoría 1 a 1 ($45)
  - Reunión de Asesoría Personalizada ($50)
  - Gestión Comercial Mensual ($100)

### 2. Análisis y Logística (`analysis-logistics`)

- **Descripción**: Análisis de mercado y optimización logística
- **Productos**:
  - Checklist de Análisis de Mercado ($10)
  - Guía de Optimización Logística ($23)
  - Serie de Videos de Análisis de Costos ($23)
  - Consulta de Logística ($45)
  - Reunión de Estrategia de Cadena de Suministro ($50)
  - Gestión Logística Mensual ($100)

### 3. Desarrollo de Negocios Globales (`global-business-development`)

- **Descripción**: Expansión internacional y desarrollo de mercados
- **Productos**:
  - Checklist de Entrada al Mercado ($10)
  - Guía de Expansión Internacional ($23)
  - Curso de Video de Estrategia Global ($23)
  - Consulta de Estrategia de Expansión ($45)
  - Desarrollo de Estrategia Global ($50)
  - Desarrollo Global Mensual ($100)

### 4. Alianzas Estratégicas (`strategic-alliances`)

- **Descripción**: Creación y gestión de alianzas estratégicas
- **Productos**:
  - Checklist de Construcción de Alianzas ($10)
  - Guía de Estrategia de Asociaciones ($23)
  - Videos de Gestión de Alianzas ($23)
  - Consulta de Estrategia de Alianzas ($45)
  - Reunión de Asociación Estratégica ($50)
  - Gestión de Alianzas Mensual ($100)

### 5. Innovación y Tecnología (`innovation-technology`)

- **Descripción**: Soluciones innovadoras y tecnologías emergentes
- **Productos**:
  - Checklist de Marco de Innovación ($10)
  - Guía de Integración Tecnológica ($23)
  - Videos de Estrategia de Innovación ($23)
  - Consulta de Innovación ($45)
  - Reunión de Estrategia Tecnológica ($50)
  - Gestión de Innovación Mensual ($100)

### 6. Expansión Estratégica (`strategic-expansion`)

- **Descripción**: Asesoría integral para expansión empresarial
- **Productos**:
  - Checklist de Planificación de Expansión ($10)
  - Guía de Planificación Estratégica ($23)
  - Videos de Planificación Estratégica ($23)
  - Consulta de Planificación Estratégica ($45)
  - Reunión de Expansión Estratégica ($50)
  - Gestión Estratégica Mensual ($100)

## Estructura de Datos

### Archivos de Mensajes

Los datos se almacenan en:

- `messages/en.json` - Versión en inglés
- `messages/es.json` - Versión en español

### Estructura JSON

```json
{
  "services": {
    "hero": {
      "badge": { "text": "Our Services", "icon": "Briefcase" },
      "title": { "line1": "Professional", "line2": "Commercial", "line3": "Solutions" },
      "subtitle": "Description...",
      "highlights": [...]
    },
    "categories": {
      "badge": "Service Categories",
      "title": "Specialized Commercial Solutions",
      "subtitle": "Description...",
      "items": [
        {
          "title": "Category Name",
          "description": "Category description",
          "icon": "IconName",
          "slug": "category-slug",
          "priceRange": "10",
          "features": [...],
          "products": [...]
        }
      ]
    },
    "cta": {
      "badge": "Ready to Get Started?",
      "title": "Transform Your Business",
      "subtitle": "Description...",
      "buttons": { "primary": "...", "secondary": "..." },
      "contact": { "phone": {...}, "email": {...} }
    }
  }
}
```

## Características Técnicas

### Animaciones

- Utiliza **Framer Motion** para animaciones suaves
- Animaciones de entrada escalonadas
- Efectos hover en cards y botones

### Diseño Responsivo

- Grid adaptativo (md:grid-cols-2 lg:grid-cols-3)
- Breakpoints optimizados para móvil, tablet y desktop
- Tipografía escalable

### Componentes UI

- Reutiliza componentes existentes del proyecto
- Cards, Badges, Buttons, etc.
- Consistencia visual con el resto del sitio

### Navegación

- Breadcrumbs automáticos
- Botones de "Volver" en páginas dinámicas
- Enlaces directos a productos desde categorías

## Precios y Estrategia de Precios

### Escalado de Precios

- **$10**: Productos básicos (PDFs, checklists)
- **$23**: Documentos especializados o videos explicativos
- **$45**: Videollamadas de asesoría
- **$50**: Reuniones consultivas personalizadas
- **$100**: Servicios mensuales de administración

### Badges de Productos

- **Basic**: Productos de entrada
- **Professional**: Documentos especializados
- **Premium**: Servicios personalizados
- **Expert**: Consultas especializadas
- **Strategic**: Sesiones estratégicas
- **Enterprise**: Servicios mensuales

## Funcionalidades Implementadas

### ✅ Completado

- [x] Página principal de servicios con hero section
- [x] Grid de categorías con navegación
- [x] Páginas dinámicas por categoría
- [x] Páginas dinámicas por producto
- [x] Componentes reutilizables
- [x] Animaciones con Framer Motion
- [x] Diseño responsivo
- [x] Estructura de datos en JSON
- [x] Soporte multiidioma (EN/ES)
- [x] Navegación con breadcrumbs
- [x] Call-to-action sections
- [x] Productos destacados

### 🎯 Características Destacadas

- **Estructura tipo ecommerce** para productos de asesoría
- **Navegación intuitiva** con rutas dinámicas
- **Diseño profesional** orientado a conversión B2B
- **Contenido especializado** en comercio internacional
- **Precios escalonados** según valor del servicio
- **Componentes modulares** para fácil mantenimiento

## Uso

### Navegación

1. `/services` - Página principal con todas las categorías
2. `/services/[category]` - Productos de una categoría específica
3. `/services/[category]/[product]` - Detalles de un producto específico

### Ejemplos de URLs

- `/services/commercial-representation`
- `/services/commercial-representation/export-guide-pdf`
- `/services/analysis-logistics/market-analysis-checklist`

## Mantenimiento

### Agregar Nuevos Productos

1. Editar el archivo JSON correspondiente (`en.json` o `es.json`)
2. Agregar el producto en la categoría correspondiente
3. Incluir todos los campos requeridos (title, description, price, etc.)

### Agregar Nuevas Categorías

1. Agregar la categoría en el array `categories.items`
2. Crear los productos correspondientes
3. Asegurar que el `slug` sea único

### Modificar Precios

1. Actualizar el campo `price` en el producto
2. Opcionalmente agregar `originalPrice` para descuentos
3. Actualizar `priceRange` en la categoría si es necesario
