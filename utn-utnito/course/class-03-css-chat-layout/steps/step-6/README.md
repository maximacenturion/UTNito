# Step 6 - Apply Flexbox to the chat layout

## Español

### Objetivo
Aplicar Flexbox al layout real del chat y cerrar la interfaz final de la clase.

### Archivos a copiar
- `chat.html`
- `chat.css`

Copiar desde `steps/step-6` hacia `c03-html-start`.

### Conceptos a explicar
- `.chat-layout { display: flex; }`
- `.sidebar { width: 260px; }`
- `.chat-main { flex: 1; display: flex; flex-direction: column; }`
- `.messages { flex: 1; }`

### Mapa de Flexbox en esta pantalla
- `.chat-layout`: divide en dos columnas (`.sidebar` + `.chat-main`).
- `.sidebar`: usa columna para separar parte superior e inferior.
- `.chat-main`: usa columna para ordenar `header`, `messages`, `composer`.
- `.composer`: usa fila para alinear `textarea` y botón.

### Propiedades flex usadas (referencia rápida)
```css
.chat-layout {
  display: flex;
}

.sidebar {
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
}

.composer {
  display: flex;
  gap: 10px;
}
```

### Mini experiments de cierre (ampliados)
- Cambiar `width` de `.sidebar` (`220px`, `320px`).
- Cambiar `.chat-layout` a `flex-direction: column`.
- Cambiar `.sidebar` `justify-content: space-between` por `flex-start`.
- Quitar `flex: 1` de `.chat-main` y observar.
- Quitar `flex: 1` de `.messages` y observar.
- Cambiar `.composer` `gap` (`2px`, `24px`).
- Quitar `display: flex` de `.composer`.
- Cambiar `max-width` de `.message` (`50%`, `90%`).
- Quitar `margin-left: auto` en `.message.user`.
- Cambiar `overflow: auto` de `.messages` por `visible`.
- Cambiar `padding` de `.messages` (`4px`, `32px`).
- Cambiar color de fondo de `.chat-header`.

### Qué observar
- Qué reglas define el contenedor padre.
- Qué elementos crecen y cuáles quedan fijos.
- Cómo `flex: 1` cambia la distribución total.
- Cómo separar estructura de layout y estilo visual.

## English

### Objective
Apply Flexbox to the real chat layout and finish the final class interface.

### Files to copy
- `chat.html`
- `chat.css`

### Flexbox map in this screen
- `.chat-layout`: two main columns (`.sidebar` + `.chat-main`).
- `.sidebar`: column layout to split top and bottom blocks.
- `.chat-main`: column layout for `header`, `messages`, `composer`.
- `.composer`: row layout for `textarea` + button.

### Suggested experiments
- Change sidebar width.
- Toggle `flex-direction` in `.chat-layout`.
- Remove `flex: 1` from `.chat-main` / `.messages`.
- Change `.composer` gap and remove `display: flex`.
- Remove `.message.user { margin-left: auto; }`.
