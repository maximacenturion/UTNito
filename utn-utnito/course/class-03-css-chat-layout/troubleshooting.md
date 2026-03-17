# Troubleshooting - Clase 03

## Español

### 1) "No funcionan las validaciones del form"
- Verificar que el botón sea `type="submit"`.
- Verificar que no esté `novalidate` en el `<form>`.
- Confirmar atributos (`required`, `type`, `pattern`, etc.).

### 2) "El link no navega"
- Revisar `href="./chat.html"` o `href="./login.html"`.
- Confirmar que el archivo destino exista.

### 3) "No veo estilos en chat"
- Confirmar en `chat.html`:
  - `<link rel="stylesheet" href="./chat.css" />`
- Revisar que el nombre de archivo sea exactamente `chat.css`.

### 4) "La sidebar no queda al costado"
- Verificar `display: flex` en `.chat-layout`.
- Verificar `width` en `.sidebar` y `flex: 1` en `.chat-main`.

### 5) "Los mensajes se ven todos iguales"
- Confirmar clases `message assistant` y `message user`.
- Verificar regla `.message.user { margin-left: auto; }`.

---

## English

### 1) "Form validation is not working"
- Verify button is `type="submit"`.
- Verify `<form>` does not contain `novalidate`.
- Confirm attributes (`required`, `type`, `pattern`, etc.).

### 2) "Link does not navigate"
- Check `href="./chat.html"` or `href="./login.html"`.
- Confirm destination file exists.

### 3) "I do not see chat styles"
- Confirm in `chat.html`:
  - `<link rel="stylesheet" href="./chat.css" />`
- Verify filename is exactly `chat.css`.

### 4) "Sidebar is not on the side"
- Verify `display: flex` on `.chat-layout`.
- Verify `width` on `.sidebar` and `flex: 1` on `.chat-main`.

### 5) "All messages look the same"
- Confirm classes `message assistant` and `message user`.
- Verify rule `.message.user { margin-left: auto; }`.
