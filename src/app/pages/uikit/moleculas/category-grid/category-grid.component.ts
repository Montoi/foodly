import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';

@Component({
  selector: 'app-category-grid',
  imports: [CommonModule],
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.scss'
})
export class CategoryGridComponent implements OnInit {
  @Input() categories: any[] = [
    {iconUrl: '', label: ''}
    
  ]

  @Output() categorySelected = new EventEmitter<string>();
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  onCategoryClick(label: string): void {
    this.categorySelected.emit(label);
  }

}
