# 🎯 Reglas de Cursor AI - VasCruz Group

## 📁 Archivos de Configuración Creados

### 1. `.cursorrules`

Archivo principal con reglas de desarrollo de UI para VasCruz Group.

### 2. `.cursor/snippets.json`

Snippets específicos para generar componentes rápidamente:

- `vascruz-hero` - Secciones hero
- `vascruz-content` - Secciones de contenido
- `vascruz-stats` - Secciones de estadísticas
- `vascruz-process` - Secciones de proceso
- `vascruz-card` - Cards con iconos
- `vascruz-button` - Botones con iconos
- `vascruz-list` - Listas con checkmarks

### 3. `.cursor/settings.json`

Configuración de Cursor con reglas específicas del proyecto.

### 4. `.cursor/ai.json`

Configuración específica para AI de Cursor.

## 🚀 Cómo Usar las Reglas

### 1. **Generar Componentes Rápidamente**

```bash
# En Cursor, escribe:
vascruz-hero    # Para secciones hero
vascruz-content # Para secciones de contenido
vascruz-stats   # Para secciones de estadísticas
vascruz-process # Para secciones de proceso
```

### 2. **Patrones de CSS Estándar**

```css
/* Secciones Hero */
"-mt-[30px] lg:-mt-[64px] h-full relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"

/* Secciones de Contenido */
"py-16 lg:py-20 bg-background"

/* Secciones de Estadísticas */
"py-20 bg-gradient-to-r from-primary to-primary/90"

/* Secciones de Proceso */
"py-20 bg-muted/30"
```

### 3. **Animaciones Framer Motion**

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
```

## 📋 Checklist de Desarrollo

### ✅ Antes de Crear Componente

- [ ] Verificar estructura de datos en messages
- [ ] Definir mapeo de iconos
- [ ] Planificar layout responsivo
- [ ] Elegir animaciones apropiadas

### ✅ Durante el Desarrollo

- [ ] Usar clases CSS estándar
- [ ] Implementar fallback para datos faltantes
- [ ] Aplicar animaciones consistentes
- [ ] Probar responsividad

### ✅ Después del Desarrollo

- [ ] Verificar accesibilidad
- [ ] Probar modo oscuro
- [ ] Validar animaciones
- [ ] Revisar rendimiento

## 🎨 Patrones Visuales

### 1. **Secciones Hero**

- Fondos con gradientes
- Elementos decorativos blur
- Layout 2 columnas en desktop
- Badge + título + subtítulo

### 2. **Secciones de Contenido**

- Layout centrado
- Animaciones scroll-triggered
- Grid responsivo para items

### 3. **Secciones de Estadísticas**

- Fondo gradiente primario
- Animaciones de escala
- Texto primary-foreground

### 4. **Secciones de Proceso**

- Fondo muted
- Cards conectadas con números de paso
- Líneas decorativas de conexión

## 🔧 Estructura de Datos

### Extracción de Mensajes

```typescript
const data = (messages as any)?.[section]?.[subsection];
const { title, subtitle, items, badge } = data || {};
```

### Mapeo de Iconos

```typescript
const iconMapping = {
  [ICON_NAME]: [ICON_COMPONENT],
};
const IconComponent = iconMapping[item.icon as keyof typeof iconMapping];
```

## 📱 Diseño Responsivo

### Breakpoints Estándar

```css
/* Mobile First */
"text-3xl lg:text-4xl xl:text-5xl"
"py-16 lg:py-20"
"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Grids Responsivos

```css
/* 2-4 columnas */
"grid-cols-2 md:grid-cols-4"

/* 3-6 columnas */
"grid-cols-3 lg:grid-cols-6"

/* Layout hero */
"grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
```

## 🎯 Principios de Desarrollo

1. **Consistencia**: Siempre usar los mismos patrones
2. **Responsividad**: Enfoque mobile-first
3. **Accesibilidad**: Labels ARIA y HTML semántico
4. **Rendimiento**: Lazy loading y optimización
5. **Mantenibilidad**: Componentes modulares
6. **Escalabilidad**: Estructura de datos flexible

## 🚀 Comandos Rápidos

### Generar Componente Completo

```bash
# Escribe en Cursor:
vascruz-hero
# Luego reemplaza los placeholders:
# ${1:Icon1} -> Handshake
# ${4:ComponentName} -> HeroSection
# ${5:section} -> home
# ${6:subsection} -> hero
# ${7:route} -> services
```

### Aplicar Clases CSS

```bash
# Para secciones hero:
"-mt-[30px] lg:-mt-[64px] h-full relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"

# Para títulos principales:
"text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground"

# Para botones:
"rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
```

## 📝 Notas Importantes

- **Siempre** incluir fallback para datos faltantes
- **Usar** las clases CSS estándar del proyecto
- **Implementar** animaciones Framer Motion consistentes
- **Mantener** la estructura de datos de messages
- **Probar** en modo oscuro y claro
- **Verificar** accesibilidad y rendimiento

---

**¡Las reglas están configuradas! Ahora Cursor AI generará componentes siguiendo los estándares de VasCruz Group automáticamente.**
