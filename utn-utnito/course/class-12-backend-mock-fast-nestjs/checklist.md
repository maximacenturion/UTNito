# Checklist - Clase 12

## Verificacion funcional
- [ ] Swagger del demo conceptual levanta en `http://localhost:5001/api`.
- [ ] Swagger del proyecto principal levanta en `http://localhost:5001/api`.
- [ ] `GET /health` responde OK.
- [ ] `POST /auth/login` funciona con credenciales demo.
- [ ] `GET /conversations` y `POST /conversations` funcionan.
- [ ] `POST /conversations/:conversationId/messages` crea mensaje usuario + reply mock.
- [ ] `DELETE /conversations/:conversationId/messages/:messageId` elimina mensaje.

## Verificacion tecnica
- [ ] Controllers delegan en services (sin logica de negocio pesada).
- [ ] Existe `Module` por dominio (`health`, `auth`, `conversation`, `message`).
- [ ] `MessageModule` importa `ConversationModule`.
- [ ] `MessageService` inyecta `ConversationService`.
- [ ] Step 6 agrega `AbstractBasicChatObject` y modelos chat lo reutilizan.
