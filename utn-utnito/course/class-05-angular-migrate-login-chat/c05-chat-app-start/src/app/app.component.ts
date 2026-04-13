import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                 // Tag HTML: <app-root>
  templateUrl: './app.component.html', // HTML en archivo externo
  styleUrls: ['./app.component.css'], // CSS en archivo externo
  standalone: false                  // Pertenece a un NgModule
})
export class AppComponent {
  currentView: 'login' | 'chat' = 'login';  // Controla qué vista se muestra; arranca en 'login'
  displayName = '';                         // Nombre por defecto si el usuario no escribe nada

  onLoginRequested(username: string): void { // Se ejecuta cuando LoginComponent emite el evento loginRequested
    const normalized = username.trim();     // Elimina espacios al inicio y al final

    if (normalized) {
      this.displayName = normalized; // Si el nombre no está vacío, lo usa
    }

    this.currentView = 'chat'; // Cambia la vista al chat
  }

  onLogoutRequested(): void {    // Se ejecuta cuando ChatComponent emite el evento logoutRequested
    this.currentView = 'login'; // Vuelve a la vista de login
  }
}
