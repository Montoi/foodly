import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface FoodItem {
  imageUrl: string;
  title: string;
  distance: string;
  rating: number;
  ratingDetails: number;
  price: string;
  shipping: string;
  isPromo: boolean;
  Category: string; // Asegúrate de que este campo exista y sea consistente
}

@Injectable({
  providedIn: 'root'
})



export class FoodService {
 private _allFoods: FoodItem[] = [
    // Aquí irían todos tus productos (alimentos) con las categorías
    {
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDE0MDN8MHwxfGFsbHx8fHx8fHx8fDE3NDA4MzA5OTB8&ixlib=rb-4.0.3&q=80&w=1080',
      title: 'Mixed Salad',
      distance: '1.5',
      rating: 4.8,
      ratingDetails: 1.2,
      price: '6.00',
      shipping: '2.00',
      isPromo: true,
      Category: 'Ensalada'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Pizza Margherita',
      distance: '2.3',
      rating: 4.5,
      ratingDetails: 2.1,
      price: '12.50',
      shipping: '3.00',
      isPromo: false,
      Category: 'Pizza'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Beef Burger',
      distance: '0.8',
      rating: 4.9,
      ratingDetails: 3.5,
      price: '8.99',
      shipping: '1.50',
      isPromo: true,
      Category: 'Hamburguesa'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Pasta Carbonara',
      distance: '1.2',
      rating: 4.6,
      ratingDetails: 1.8,
      price: '9.75',
      shipping: '2.50',
      isPromo: false,
      Category: 'Pasta'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Pancakes',
      distance: '3.1',
      rating: 4.7,
      ratingDetails: 0.9,
      price: '7.25',
      shipping: '2.75',
      isPromo: true,
      Category: 'Desayuno'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Sushi Roll',
      distance: '2.7',
      rating: 4.8,
      ratingDetails: 2.3,
      price: '15.00',
      shipping: '4.00',
      isPromo: false,
      Category: 'Sushi'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Chicken Tacos',
      distance: '1.9',
      rating: 4.4,
      ratingDetails: 1.7,
      price: '11.25',
      shipping: '2.25',
      isPromo: true,
      Category: 'Mexicana'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Tomato Soup',
      distance: '0.6',
      rating: 4.2,
      ratingDetails: 0.8,
      price: '5.50',
      shipping: '1.75',
      isPromo: false,
      Category: 'Sopas'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'BBQ Ribs',
      distance: '4.2',
      rating: 4.9,
      ratingDetails: 4.1,
      price: '18.99',
      shipping: '5.00',
      isPromo: true,
      Category: 'Carnes'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Ice Cream Sundae',
      distance: '2.8',
      rating: 4.3,
      ratingDetails: 1.5,
      price: '4.75',
      shipping: '1.25',
      isPromo: false,
      Category: 'Postre'
    }
  ];


  private _filyeredFoodsSubject = new BehaviorSubject<FoodItem[]>(this._allFoods);
  public filteredFoods$: Observable<FoodItem[]> = this._filyeredFoodsSubject.asObservable();

  constructor() { 
    this._filyeredFoodsSubject.next(this._allFoods);
  }


  getAllFoods(): FoodItem[] {
    return this._allFoods;
  }

  filterFoodsByCategory(category: string | null): void {
    if (!category || category.toLocaleLowerCase() === 'all') {
      this._filyeredFoodsSubject.next(this._allFoods);
    }else {
      const filtered = this._allFoods.filter(food => food.Category.toLocaleLowerCase() === category.toLocaleLowerCase());
      this._filyeredFoodsSubject.next(filtered);
    }
  }


}
