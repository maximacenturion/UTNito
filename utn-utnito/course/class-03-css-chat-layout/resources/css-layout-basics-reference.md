# Referencia rápida - CSS Layout (Clase 03)

## Español

### Sintaxis base
```css
selector {
  propiedad: valor;
}
```

### Selectores usados en clase
- Elemento: `body`, `header`, `section`
- Clase: `.sidebar`, `.message`
- Id: `#logout-link`

### Box model
- `padding`: espacio interno
- `border`: borde de la caja
- `margin`: separación externa

### Flexbox mínimo
```css
.chat-layout {
  display: flex;
}

.sidebar {
  width: 260px;
}

.chat-main {
  flex: 1;
}
```

---

## English

### Basic syntax
```css
selector {
  property: value;
}
```

### Selectors used in class
- Element: `body`, `header`, `section`
- Class: `.sidebar`, `.message`
- Id: `#logout-link`

### Box model
- `padding`: inner spacing
- `border`: box border
- `margin`: outer spacing

### Minimum Flexbox
```css
.chat-layout {
  display: flex;
}

.sidebar {
  width: 260px;
}

.chat-main {
  flex: 1;
}
```
