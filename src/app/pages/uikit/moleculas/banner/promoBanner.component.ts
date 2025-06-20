import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-Promo-Banner',
  imports: [CardModule, CommonModule],
  templateUrl: './promoBanner.component.html',
  styleUrl: './promoBanner.component.scss'
})
export class promoBannerComponent {
 
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

