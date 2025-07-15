import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-order',
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() itemCount: number = 0;
  @Input() distance: string = '';
  @Input() price: string = '';

}
