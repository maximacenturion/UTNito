# Step 5 - MessageModule + inyeccion de ConversationService

## Espanol

### Objetivo
Agregar mensajes y conectar services entre modulos.

### Archivos a copiar
- `src/app.module.ts`
- `src/message/message.controller.ts`
- `src/message/message.service.ts`
- `src/message/message.module.ts`
- `src/message/model/message-role.enum.ts`
- `src/message/model/message.model.ts`
- `src/message/model/create-message-response.model.ts`
- `src/message/request/create-message.request.ts`

### Ejecucion
- Copiar estos archivos sobre `c12-backend-mock-start`.
- Levantar con `npm run start:dev`.

### Conceptos
- `MessageModule` importa `ConversationModule`.
- `MessageService` inyecta `ConversationService`.
- Validaciones de negocio reales antes de crear mensajes.
