import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { OrderComponent } from "../../moleculas/order/order.component";
import {  FoodService, FoodItem } from '../../../service/food.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-food-list',
  imports: [OrderComponent, CommonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
  
})
export class FoodListComponent implements OnInit, OnDestroy {
  foods: FoodItem[] = [];
  selectedCategory: string | null = null;
  private routerSubscription: Subscription | undefined
  constructor(private router: Router, private foodService: FoodService, private routers: ActivatedRoute) { }


  
  ngOnInit(): void {
    this.routerSubscription = this.routers.paramMap.subscribe(params  => {
      this.selectedCategory = params.get('category');
      this.foodService.filterFoodsByCategory(this.selectedCategory)
    });
     

    this.foodService.filteredFoods$.subscribe(filteredFoods => {
      this.foods = filteredFoods;
    })


  }

  backToHomePage() {
    this.router.navigate(['all-categories']);
  }



    ngOnDestroy(): void {
     if (this.routerSubscription) {
        this.routerSubscription.unsubscribe();
      }
  }
}
