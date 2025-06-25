import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DiscountProductCardComponent } from '../discount-product-card/discount-product-card.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-product-carousel',
    imports: [CardModule, DiscountProductCardComponent, CommonModule, ButtonModule],
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.scss'
})
export class ProductCarouselComponent implements OnInit {

    @Input() sectionTitle: string = '';
    @Input() products: any[] = [];
    ngOnInit(): void {
        
    }
}
