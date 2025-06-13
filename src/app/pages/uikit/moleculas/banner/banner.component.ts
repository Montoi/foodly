import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-banner',
  imports: [CardModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
 
  @Input() percentage: string = '';
  @Input() description: string = '';
  @Input() subtext: string = '';
  @Input() imageUrl: string = '';
  @Input() backgroundUrl: string = '';
  @Input() textColor: string = '';
  @Input() bannerW: string = '';
  @Input() bannerH: string = '';
  @Input() maxW: string = ''; 
  @Input() subtextSize: string = '';
  @Input() percentageSize: string = '' ;
  @Input() descriptionSize: string = '' ;
  

}

