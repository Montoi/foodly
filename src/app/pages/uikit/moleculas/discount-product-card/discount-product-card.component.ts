import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-discount-product-card',
    imports: [CardModule, ButtonModule, CommonModule],
    templateUrl: './discount-product-card.component.html',
    styleUrl: './discount-product-card.component.scss'
})
export class DiscountProductCardComponent implements OnInit {
    ngOnInit(): void {
       
    }

    @Input() imageUrl: string = '';
    @Input() title: string = '';
    @Input() distance: string = '';
    @Input() rating: number = 0;
    @Input() ratingDetails: number = 0;
    @Input() reviewCount: number = 0;
    @Input() price: string = '';
    @Input() shipping: string = '';
    @Input() isPromo: boolean = false;
    @Input() isFavorite: boolean = false;
}
