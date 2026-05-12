# Clase 12 - Backend mock rapido con NestJS

## Espanol

### Objetivo
Implementar el backend mock del contrato definido en clase 11 usando arquitectura por capas basica:
- `controller` como pasamanos,
- `service` con logica de negocio,
- `module` para composicion.

### Duracion sugerida
60 minutos

### Estructura de la clase
- `c12-backend-mock-start`: proyecto principal inicial (Swagger + health simple).
- `steps/step-1/controller-service-swagger-demo`: mini demo separada para explicar controller pasamanos + service logica + module.
- `steps/step-2`: base comun (`ResponseObject`, `ResponseBuilder`, `AbstractController`) + `HealthModule`.
- `steps/step-3`: `AuthModule` con `AuthController` + `AuthService`.
- `steps/step-4`: `ConversationModule` con logica de conversaciones en service.
- `steps/step-5`: `MessageModule` con inyeccion de `ConversationService`.
- `steps/step-6`: snapshot final (incluye `AbstractBasicChatObject`).
- `c12-backend-mock-end`: resultado final esperado.
- `slides/outline.md`: guia para presentacion.
- `checklist.md`: validacion final.
- `troubleshooting.md`: errores comunes.

### Flujo de practica
1. Demo conceptual:
   - `cd course/class-12-backend-mock-fast-nestjs/steps/step-1/controller-service-swagger-demo`
   - `npm install`
   - `npm run start:dev`
   - Abrir `http://localhost:5001/api`
2. Proyecto principal:
   - `cd ../../../c12-backend-mock-start`
   - `npm install`
   - `npm run start:dev`
   - Abrir `http://localhost:5001/api`
3. Aplicar cambios step por step copiando solo los archivos listados en cada `steps/step-N/README.md`.

Nota: step 1 y proyecto principal usan el mismo puerto (`5001`), ejecutar uno por vez.

### VS Code Play/F5
- `step-1/controller-service-swagger-demo`, `c12-backend-mock-start` y `c12-backend-mock-end` incluyen `.vscode/launch.json`.
- Configuracion: `Launch Nest Application` (usa `start:debug`).

### Entregable
- API de `health`, `auth`, `conversations` y `messages` implementada con services.
- Controllers finos delegando en services.
- Modulos conectados por dominio.
- `MessageService` usando `ConversationService`.

---

## English

### Objective
Implement a mock backend from class 11 contract using a simple layered architecture:
- thin controllers,
- business logic in services,
- module-based composition.

### Suggested Duration
60 minutes

### Class Structure
- `c12-backend-mock-start`: starter backend.
- `steps/step-1/controller-service-swagger-demo`: standalone controller/service/module demo.
- `steps/step-2`: common base + `HealthModule`.
- `steps/step-3`: `AuthModule`.
- `steps/step-4`: `ConversationModule`.
- `steps/step-5`: `MessageModule` with `ConversationService` injection.
- `steps/step-6`: final snapshot (`AbstractBasicChatObject` included).
- `c12-backend-mock-end`: expected final state.
