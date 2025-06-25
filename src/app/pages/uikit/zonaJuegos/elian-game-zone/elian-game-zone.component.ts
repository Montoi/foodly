import { Component } from '@angular/core';
import { OrderComponent } from '../../moleculas/order/order.component';
import { FilterChipComponent } from '../../moleculas/filter-chip/filter-chip.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elian-game-zone',
  imports: [OrderComponent, FilterChipComponent, CommonModule],
  templateUrl: './elian-game-zone.component.html',
  styleUrls: ['./elian-game-zone.component.scss']

})
export class ElianGameZoneComponent {

recommendedChips = [
  { label: 'All', icon: '✅', isSelected: true },
  { label: 'Hamburger', icon: '🍔', isSelected: false },
  { label: 'Pizza', icon: '🍕', isSelected: false },
];

recentChips = [
  { label: 'Italian Pizza', icon: '' },
  { label: 'Burger King', icon: '' },
  { label: 'Salad', icon: '' },
  { label: 'Vegetation', icon: '' },
  { label: 'Dessert', icon: '' },
  { label: 'Pancakes', icon: '' },
];

popularChips = [
  { label: 'Breakfast', icon: '' },
  { label: 'Snack', icon: '' },
  { label: 'Fast Food', icon: '' },
];

selectedLabel: string = 'All';


  onChipSelect(label: string) {
  this.selectedLabel = label;
  console.log('Seleccionaste el chip:', label);
}



}