# Estructura Común para Páginas Legales - VasCruz Group

## Descripción General

Se ha implementado una estructura modular y reutilizable para todas las páginas legales del sitio web de VasCruz Group. Esta estructura permite mantener consistencia visual y facilitar el mantenimiento.

## Componentes Creados

### 1. `LegalHero` - Sección Hero

**Ubicación**: `src/components/legal/LegalHero.tsx`

**Propósito**: Sección hero común para todas las páginas legales con animaciones y diseño consistente.

**Props**:

```typescript
interface LegalHeroProps {
  badge: {
    text: string;
    icon: LucideIcon;
  };
  title: {
    line1: string;
    line2: string;
    line3: string;
  };
  subtitle: string;
}
```

**Uso**:

```typescript
<LegalHero
  badge={{
    text: "Privacy Policy",
    icon: Shield,
  }}
  title={{
    line1: "Privacy",
    line2: "Policy",
    line3: "& Data Protection",
  }}
  subtitle="We are committed to protecting your privacy..."
/>
```

### 2. `LegalContent` - Contenedor Principal

**Ubicación**: `src/components/legal/LegalContent.tsx`

**Propósito**: Contenedor que envuelve todas las secciones de contenido con animaciones y layout consistente.

**Props**:

```typescript
interface LegalContentProps {
  children: ReactNode;
}
```

**Uso**:

```typescript
<LegalContent>
  <LegalSection ... />
  <LegalContactSection ... />
</LegalContent>
```

### 3. `LegalSection` - Sección de Contenido

**Ubicación**: `src/components/legal/LegalSection.tsx`

**Propósito**: Sección reutilizable para mostrar contenido en formato de tarjetas con iconos.

**Props**:

```typescript
interface LegalSectionProps {
  title: string;
  subtitle: string;
  items: LegalSectionItem[];
  iconMapping: Record<string, LucideIcon>;
  gridCols?:
    | "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    | "grid-cols-1 md:grid-cols-3"
    | "grid-cols-1 md:grid-cols-2";
}
```

**Uso**:

```typescript
<LegalSection
  title="Information We Collect"
  subtitle="We collect information to provide better services..."
  items={data.sections.information.items}
  iconMapping={iconMapping}
  gridCols="grid-cols-1 md:grid-cols-3"
/>
```

### 4. `LegalContactSection` - Sección de Contacto

**Ubicación**: `src/components/legal/LegalContactSection.tsx`

**Propósito**: Sección especializada para mostrar información de contacto con iconos predefinidos.

**Props**:

```typescript
interface LegalContactSectionProps {
  title: string;
  subtitle: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}
```

**Uso**:

```typescript
<LegalContactSection
  title="Contact Information"
  subtitle="Get in touch with us..."
  contact={{
    email: "info@vascruzgroup.com",
    phone: "+1 (305) 555-0123",
    address: "Aventura, Florida, USA",
  }}
/>
```

## Estructura de Archivos

```
src/components/legal/
├── index.ts                    # Exportaciones centralizadas
├── LegalHero.tsx              # Componente hero
├── LegalContent.tsx           # Contenedor principal
├── LegalSection.tsx           # Sección de contenido
└── LegalContactSection.tsx    # Sección de contacto
```

## Página de Ejemplo - Privacy Policy

**Ubicación**: `src/app/[locale]/legal/privacy/page.tsx`

**Características**:

- ✅ Usa todos los componentes comunes
- ✅ Estructura modular y limpia
- ✅ Animaciones consistentes
- ✅ Diseño responsivo
- ✅ Fácil mantenimiento

**Estructura**:

```typescript
export default function PrivacyPolicy() {
  const messages = useMessages();
  const data = (messages as any)?.footer?.legalPages?.privacy;

  // Fallback
  if (!data) return <FallbackComponent />;

  return (
    <>
      <LegalHero {...heroProps} />
      <LegalContent>
        <LegalSection {...section1Props} />
        <LegalSection {...section2Props} />
        <LegalSection {...section3Props} />
        <LegalSection {...section4Props} />
        <LegalSection {...section5Props} />
        <LegalContactSection {...contactProps} />
      </LegalContent>
    </>
  );
}
```

## Beneficios de la Nueva Estructura

### ✅ Consistencia Visual

- Todas las páginas legales tienen el mismo diseño
- Animaciones uniformes
- Tipografía y espaciado consistentes

### ✅ Mantenibilidad

- Componentes reutilizables
- Cambios centralizados
- Código más limpio y organizado

### ✅ Escalabilidad

- Fácil agregar nuevas páginas legales
- Componentes modulares
- Estructura flexible

### ✅ Performance

- Componentes optimizados
- Animaciones eficientes
- Carga rápida

## Cómo Usar en Nuevas Páginas Legales

### 1. Crear la Página

```typescript
"use client";

import { useMessages } from "next-intl";
import {
  LegalHero,
  LegalContent,
  LegalSection,
  LegalContactSection,
} from "@/components/legal";

export default function NewLegalPage() {
  const messages = useMessages();
  const data = (messages as any)?.legalPages?.newPage;

  if (!data) return <FallbackComponent />;

  return (
    <>
      <LegalHero {...data.hero} />
      <LegalContent>{/* Agregar secciones según necesidad */}</LegalContent>
    </>
  );
}
```

### 2. Definir Icon Mapping

```typescript
const iconMapping = {
  IconName: IconComponent,
  // ... más iconos
};
```

### 3. Estructurar Datos

```json
{
  "legalPages": {
    "newPage": {
      "hero": {
        "badge": { "text": "Badge", "icon": "IconName" },
        "title": { "line1": "Title", "line2": "Highlight", "line3": "End" },
        "subtitle": "Description"
      },
      "sections": {
        "section1": {
          "title": "Section Title",
          "subtitle": "Section Description",
          "items": [...]
        }
      }
    }
  }
}
```

## Migración de Páginas Existentes

Para migrar páginas legales existentes a la nueva estructura:

1. **Reemplazar hero section** con `<LegalHero>`
2. **Envolver contenido** con `<LegalContent>`
3. **Convertir secciones** a `<LegalSection>`
4. **Usar `<LegalContactSection>`** para información de contacto
5. **Actualizar imports** para usar la nueva estructura

## Mantenimiento

### Agregar Nuevos Componentes

1. Crear el componente en `src/components/legal/`
2. Agregar exportación en `index.ts`
3. Documentar props y uso

### Modificar Estilos

1. Editar el componente específico
2. Los cambios se aplican a todas las páginas que lo usen
3. Mantener consistencia visual

### Agregar Nuevas Páginas

1. Crear página en `src/app/[locale]/legal/`
2. Usar componentes comunes
3. Definir datos en archivos de mensajes
4. Seguir la estructura establecida

## Conclusión

Esta nueva estructura proporciona una base sólida y escalable para todas las páginas legales del sitio web de VasCruz Group, asegurando consistencia visual, facilidad de mantenimiento y una experiencia de usuario uniforme.
