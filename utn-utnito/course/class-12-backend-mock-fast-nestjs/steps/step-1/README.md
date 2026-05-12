# Step 1 - Demo conceptual controller + service + module

## Espanol

### Objetivo
Mostrar la separacion minima de responsabilidades en NestJS:
- controller recibe request,
- service contiene logica,
- module conecta ambos.

### Proyecto del demo
- `steps/step-1/controller-service-swagger-demo`

### Ejecutar demo
1. `cd course/class-12-backend-mock-fast-nestjs/steps/step-1/controller-service-swagger-demo`
2. `npm install`
3. `npm run start:dev`
4. Abrir `http://localhost:5001/api`

### Que mostrar
- `DemoMessagesController` delega en `DemoMessagesService`.
- `DemoMessagesService` tiene CRUD in-memory.
- `DemoMessagesModule` registra controller y service.
- `AppModule` importa `DemoMessagesModule`.

### Mensaje clave
Controller coordina la entrada/salida. Service decide la logica.
