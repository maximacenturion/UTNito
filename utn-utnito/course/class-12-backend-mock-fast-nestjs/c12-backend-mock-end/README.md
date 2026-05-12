# Class 12 - Backend Mock End

## Run
1. `npm install`
2. `npm run start:dev`
3. Open Swagger: `http://localhost:5001/api`

## What this final snapshot includes
- Controller passthrough pattern.
- Service layer with mock in-memory business logic.
- Module-based organization (`health`, `auth`, `conversation`, `message`).
- `MessageService` injection of `ConversationService`.
- Final base model refactor with `AbstractBasicChatObject`.
