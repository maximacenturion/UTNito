# Troubleshooting - Clase 12

## 1) Swagger no abre en `/api`
Causa: backend no esta corriendo o puerto incorrecto.

Solucion:
- Ejecutar `npm run start:dev`.
- Revisar puerto `5001`.

## 2) Error `Nest can't resolve dependencies`
Causa: falta importar el module que exporta el service.

Solucion:
- Verificar `imports: [...]` del module consumidor.
- Verificar `exports: [Service]` del module proveedor.

## 3) `ConversationService` undefined en `MessageService`
Causa: `MessageModule` no importa `ConversationModule`.

Solucion:
- En `message.module.ts`, agregar `imports: [ConversationModule]`.

## 4) Endpoint no aparece en Swagger
Causa: controller no registrado en su module o module no importado en `AppModule`.

Solucion:
- Revisar `controllers: [...]` en cada module.
- Revisar `imports: [...]` en `src/app.module.ts`.

## 5) Error de compilacion al aplicar steps
Causa: se omitio un step previo o faltan archivos base de step 2.

Solucion:
- Aplicar en orden: `2 -> 3 -> 4 -> 5 -> 6`.
- Copiar exactamente los archivos listados en cada README.
