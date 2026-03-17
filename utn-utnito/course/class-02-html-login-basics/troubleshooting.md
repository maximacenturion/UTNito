# Troubleshooting - Clase 02

## 1) No se aplican los estilos CSS
### Síntoma
La pantalla se ve sin estilos.

### Solución
- Verificar rutas en `<link>` dentro de `login.html`.
- Confirmar que `tokens.css` y `login.css` están en la misma carpeta que `login.html`.
- Recargar el navegador (`Ctrl/Cmd + R`).

## 2) El logo no aparece
### Síntoma
Se ve el texto alternativo en lugar de la imagen.

### Solución
- Verificar que existe `assets/utnito-logo.svg`.
- Revisar que `src="./assets/utnito-logo.svg"` sea correcto.

## 3) Login no abre chat.html
### Síntoma
Al presionar `Login` no cambia de página.

### Solución
- Confirmar que el formulario tiene `action="./chat.html"`.
- Verificar que `chat.html` existe en la misma carpeta.

## 4) VS Code abre otra carpeta
### Síntoma
Editás archivos y no ves cambios donde corresponde.

### Solución
- Abrir exactamente `class-02-html-login-basics/c02-html-start`.
- Repetir el doble click en `login.html` desde esa carpeta.
