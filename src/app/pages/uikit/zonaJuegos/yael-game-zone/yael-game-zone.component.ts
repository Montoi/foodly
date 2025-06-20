import { Component } from '@angular/core';
import { promoBannerComponent } from '../../moleculas/banner/promoBanner.component';
import { NotificationItemComponentComponent } from "../../moleculas/notification-item-component/notification-item-component.component";
import { HeaderCompactComponentComponent } from "../../moleculas/header-compact-component/header-compact-component.component";



@Component({
  selector: 'app-yael-game-zone',
  imports: [promoBannerComponent, NotificationItemComponentComponent, HeaderCompactComponentComponent],
  templateUrl: './yael-game-zone.component.html',
  styleUrl: './yael-game-zone.component.scss'
})
export class YaelGameZoneComponent {

}
