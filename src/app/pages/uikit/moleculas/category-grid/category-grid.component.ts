import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
