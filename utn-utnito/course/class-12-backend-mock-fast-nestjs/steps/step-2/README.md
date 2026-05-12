# Step 2 - Base comun + HealthModule

## Espanol

### Objetivo
Crear la base reutilizable del backend y el primer modulo completo.

### Archivos a copiar
- `src/app.module.ts`
- `src/basic/response-message.model.ts`
- `src/basic/response-object.model.ts`
- `src/basic/response-builder.ts`
- `src/basic/abstract.controller.ts`
- `src/health/health.service.ts`
- `src/health/health.controller.ts`
- `src/health/health.module.ts`

### Ejecucion
- Copiar estos archivos sobre `c12-backend-mock-start`.
- Levantar con `npm run start:dev`.

### Conceptos
- Base de respuesta consistente (`ResponseObject`).
- Helper de respuesta (`ResponseBuilder`).
- Controller base (`AbstractController`).
- Primer uso de `Module` + `Service` real en `health`.
