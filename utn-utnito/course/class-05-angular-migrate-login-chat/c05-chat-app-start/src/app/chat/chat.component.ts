// Importa Input y Output además de Component y EventEmitter
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat', // Tag: <app-chat>
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: false
})
export class ChatComponent {
  // @Input recibe el nombre del usuario desde AppComponent
  // Arranca como string vacío (sin valor por defecto)
  @Input() displayName = '';
  // @Output emite un evento al padre cuando el usuario hace logout
  @Output() logoutRequested = new EventEmitter<void>();
  // Getter que calcula las iniciales para mostrar en el avatar
  get initials(): string {
    if (this.displayName == null) {  // Si displayName es null o undefined, devuelve 'UU' como fallback
    return 'UU';
    }

    const cleanName = this.displayName.trim(); // Elimina espacios al inicio y al final

    if (!cleanName.length) { 
      return 'UU'; // Si después de limpiar el string queda vacío, devuelve 'UU'
    }

    const parts = cleanName.split(/\s+/).slice(0, 2); // Divide el nombre por espacios y toma hasta las primeras 2 palabras
    
    return parts.map((part) => part[0]?.toUpperCase() || '').join(''); // Toma la primera letra de cada palabra, la pone en mayúscula y las une
  } // El ?. evita errores si alguna parte estuviera vacía

  onLogoutClick(): void { // Se ejecuta cuando el usuario clickea "Log out"
    this.logoutRequested.emit(); // Emite el evento al padre sin datos
  }
}
