import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-chat-preview',
    templateUrl: './chat-preview.component.html',
    standalone: true,
    imports: [CommonModule, BadgeModule, AvatarModule]
})
export class ChatPreviewComponent implements OnInit {
    @Input() avatarUrl: string = "";
    @Input() username: string = "";
    @Input() lastMessage: string = "";
    @Input() time: string = "";
    @Input() unreadCount: number = 0; // opcional: si es 0 no se muestra

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
