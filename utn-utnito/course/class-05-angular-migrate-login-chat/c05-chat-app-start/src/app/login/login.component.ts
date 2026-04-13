// Importa Component, EventEmitter y Output desde Angular core
import { Component, EventEmitter, Output } from '@angular/core'; 

@Component({
  selector: 'app-login', // Tag: <app-login>
  templateUrl: './login.component.html', // HTML externo
  styleUrls: ['./login.component.css'], // CSS externo
  standalone: false
})
export class LoginComponent {
  // @Output declara un evento que este componente puede emitir hacia su padre
  // Emite un string (el nombre de usuario ingresado)
  @Output() loginRequested = new EventEmitter<string>();
  // Se ejecuta cuando el usuario envía el formulario
  onSubmit(event: Event, username: string): void {
    event.preventDefault();              // Evita que el formulario recargue la página
    this.loginRequested.emit(username); // Emite el nombre de usuario al componente padre
  }
}
