import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-item-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-item-component.component.html',
  styleUrl: './notification-item-component.component.scss'
})
export class NotificationItemComponentComponent {
  @Input() title: string = 'Orders Text';
  @Input() message: string = 'Default message';
  @Input() date: string = '2024-01-01';
  @Input() time: string = '12:00 PM';
  @Input() type: 'success' | 'error' | 'info' = 'info';
  @Input() isNew?: boolean = false;

  // Opcional: íconos según tipo
  get icon(): string {
    switch (this.type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'info':
      default:
        return '🔔';
    }
  }

  get iconColor(): string {
    switch (this.type) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#ff3b3b';
      case 'info':
      default:
        return '#007bff';
    }
  }
}
