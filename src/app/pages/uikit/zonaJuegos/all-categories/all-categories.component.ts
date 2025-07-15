import { Component } from '@angular/core';
import { CategoryGridComponent } from "../../moleculas/category-grid/category-grid.component";
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-categories',
  imports: [CategoryGridComponent, CommonModule ],
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.scss'
})
export class AllCategoriesComponent {


constructor(private router: Router) { } 
  
 categories = [
    { iconUrl: 'https://www.svgrepo.com/show/434100/hamburger.svg', label: 'Hamburguesas' },
    { iconUrl: 'https://www.svgrepo.com/show/398088/pizza.svg', label: 'Pizzas' },
    { iconUrl: 'https://www.svgrepo.com/show/6178/noodles.svg', label: 'Noodles' },
    { iconUrl: 'https://www.svgrepo.com/show/397426/meat-on-bone.svg', label: 'Carnes' },
    { iconUrl: 'https://www.svgrepo.com/show/356688/tomato.svg', label: 'Vegetales' },
    { iconUrl: 'https://www.svgrepo.com/show/407185/pie.svg', label: 'Postres' },
    { iconUrl: 'https://www.svgrepo.com/show/395869/beer-mug.svg', label: 'Bebidas' },
    { iconUrl: 'https://www.svgrepo.com/show/312991/sandwich.svg', label: 'Sandwiches' },
    { iconUrl: 'https://www.svgrepo.com/show/356590/sushi-02-gunkanmaki-ikura.svg', label: 'Sushi' },
    { iconUrl: 'https://www.svgrepo.com/show/402774/taco.svg', label: 'Tacos' },
    { iconUrl: 'https://www.svgrepo.com/show/153786/salad.svg', label: 'Ensaladas' },
    { iconUrl: 'https://www.svgrepo.com/show/251634/soup.svg', label: 'Sopas' },
    { iconUrl: 'https://www.svgrepo.com/show/449609/coffe.svg', label: 'Café' },
    { iconUrl: 'https://www.svgrepo.com/show/402676/shortcake.svg', label: 'Repostería' }
];

ngOnInit(): void {
}


backToHomePage() {
    this.router.navigate(['']); 
}

selectCategory(categoryLabel: string): void {
  this.router.navigate(['/food_list', categoryLabel.toLowerCase()]);
}



}
