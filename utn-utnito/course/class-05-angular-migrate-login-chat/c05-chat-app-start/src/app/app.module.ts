import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Importa el componente de login
import { ChatComponent } from './chat/chat.component';    // Importa el componente de chat

@NgModule({
  declarations: [AppComponent, LoginComponent, ChatComponent], // Registra los tres componentes
  imports: [BrowserModule], // Módulo base para correr en el navegador
  providers: [],            // Sin servicios inyectables por ahora
  bootstrap: [AppComponent] // Componente raíz que Angular carga al iniciar
})
export class AppModule {}
