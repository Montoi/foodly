import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderComponent } from "../../moleculas/order/order.component";

@Component({
  selector: 'app-food-list',
  imports: [OrderComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  constructor(private router: Router) { }

  backToHomePage() {
    this.router.navigate(['all-categories']);
  }
}
