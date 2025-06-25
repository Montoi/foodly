import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-header-compact-component',
  imports: [CommonModule, BadgeModule, AvatarModule],
  templateUrl: './header-compact-component.component.html',
  styleUrl: './header-compact-component.component.scss'
})
export class HeaderCompactComponentComponent{
    @Input() avatarUrl: string = "";
    @Input() state: string = "";
    @Input() location: string = "";
    @Input() hasNotification: boolean = false ; // Cambiar según estado real
    @Input() hasCartItems: boolean = false ; 
    @Input() textInputVisible: boolean = false ;
  
   @Output() onNotificationClick = new EventEmitter<void>();
   @Output() onCalendarClick = new EventEmitter<void>();
   @Output() onLocationClick = new EventEmitter<void>();

    onNotificationIconClick() {
          this.onNotificationClick.emit();
      }
  
      onCalendarIconClick() {
          this.onCalendarClick.emit();
      }
  
      onLocationIconClick() {
          this.onLocationClick.emit();
      }
}
