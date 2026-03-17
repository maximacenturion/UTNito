# Referencia rápida - HTML y CSS básico (Clase 02)

## Estructura mínima
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- visible content -->
  </body>
</html>
```

## Etiquetas usadas hoy
- `main`: contenido principal de la página.
- `section`: bloque lógico de contenido.
- `header`: cabecera de una sección.
- `footer`: pie de una sección.
- `form`: contenedor de campos de entrada.
- `label`: etiqueta de texto para un campo.
- `input`: dato ingresado por el usuario.
- `button`: acción del formulario.

## CSS: clase vs id

### Clase
Se define con punto y se puede reutilizar:
```css
.login-card {
  background-color: #25272d;
}
```

### ID
Se define con numeral y debería ser único:
```css
#username {
  border: 1px solid #424652;
}
```

## Recomendación de la materia
Para maquetación general, usar clases. Reservar id para casos puntuales.
