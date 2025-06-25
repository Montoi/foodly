import { Component } from '@angular/core';
import { ChatPreviewComponent } from "../../moleculas/chatPreview/chat-preview/chat-preview.component";
import { HeaderCompactComponentComponent } from "../../moleculas/header-compact-component/header-compact-component.component";

@Component({
  selector: 'app-carlos-game-zone',
  imports: [ChatPreviewComponent, HeaderCompactComponentComponent],
  templateUrl: './carlos-game-zone.component.html',
  styleUrl: './carlos-game-zone.component.scss'
})
export class CarlosGameZoneComponent {

}
