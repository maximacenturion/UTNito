import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: false
})
export class ChatComponent {
  @Input() displayName = '';
  @Output() logoutRequested = new EventEmitter<void>();

  get initials(): string {
    if (this.displayName == null) { 
    return 'UU';
    }

    const cleanName = this.displayName.trim();

    if (!cleanName.length) {
      return 'UU';
    }

    const parts = cleanName.split(/\s+/).slice(0, 2);
    
    return parts.map((part) => part[0]?.toUpperCase() || '').join('');
  }

  onLogoutClick(): void {
    this.logoutRequested.emit();
  }
}
