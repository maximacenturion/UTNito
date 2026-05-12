# Step 4 - ConversationModule

## Espanol

### Objetivo
Implementar conversaciones con logica in-memory dentro de `ConversationService`.

### Archivos a copiar
- `src/app.module.ts`
- `src/conversation/conversation.controller.ts`
- `src/conversation/conversation.service.ts`
- `src/conversation/conversation.module.ts`
- `src/conversation/model/conversation-status.enum.ts`
- `src/conversation/model/conversation.model.ts`
- `src/conversation/request/create-conversation.request.ts`
- `src/conversation/request/update-conversation-title.request.ts`

### Ejecucion
- Copiar estos archivos sobre `c12-backend-mock-start`.
- Levantar con `npm run start:dev`.

### Conceptos
- Estados de conversacion (`ACTIVE`, `INACTIVE`, `ARCHIVED`).
- Reglas de negocio en service (create, rename, activate, archive).
- Controller solo delega y responde.
