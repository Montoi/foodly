import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  imports: [CommonModule],
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss']
})
export class FilterChipComponent {


  @Input() label!: string;
  @Input() icon?: string;
  @Input() isSelected: boolean = false;

  @Output() onSelect = new EventEmitter<string>();

  handleClick() {
    this.onSelect.emit(this.label);
  }
}
