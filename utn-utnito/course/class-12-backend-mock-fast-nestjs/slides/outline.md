# Slide Outline - Clase 12 (Practica)

## Slide 1 - Titulo
- Programacion III - Practica 12
- Backend mock rapido con NestJS

## Slide 2 - Objetivo de hoy
- Implementar el contrato de clase 11.
- Separar responsabilidades: controller, service y module.

## Slide 3 - Mapa de modulos
- `HealthModule`
- `AuthModule`
- `ConversationModule`
- `MessageModule`
- Dependencia clave: `MessageModule` importa `ConversationModule`.

## Slide 4 - Step 1 (demo conceptual)
- Controller pasamanos.
- Service con logica.
- Module que registra ambos.

## Slide 5 - Step 2
- Base comun (`ResponseObject`, `ResponseBuilder`, `AbstractController`).
- Primer modulo completo (`HealthModule`).

## Slide 6 - Step 3
- Auth con service dedicado.
- Credenciales mock + error `UnauthorizedException`.

## Slide 7 - Step 4
- Conversations con logica de estado en service.
- Endpoints de listar, crear, renombrar, activar y archivar.

## Slide 8 - Step 5
- Messages con service propio.
- Inyeccion de `ConversationService` para validar reglas.

## Slide 9 - Step 6
- Snapshot final.
- `AbstractBasicChatObject` para base comun de modelos chat.

## Slide 10 - Puente a clase 13
- Clase 12: backend mock en Nest.
- Clase 13: integrar Angular con este backend.
