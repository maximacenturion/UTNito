# Step 3 - AuthModule (controller + service)

## Espanol

### Objetivo
Agregar autenticacion mock separando controller y service.

### Archivos a copiar
- `src/app.module.ts`
- `src/auth/auth.controller.ts`
- `src/auth/auth.service.ts`
- `src/auth/auth.module.ts`
- `src/auth/model/auth-user.model.ts`
- `src/auth/model/auth-session.model.ts`
- `src/auth/request/login.request.ts`

### Ejecucion
- Copiar estos archivos sobre `c12-backend-mock-start`.
- Levantar con `npm run start:dev`.

### Conceptos
- Controller pasamanos.
- Validacion de credenciales en service.
- Error HTTP (`UnauthorizedException`) desde service.
