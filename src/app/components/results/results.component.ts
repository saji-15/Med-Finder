import { Component, Input } from '@angular/core';
import { SearchCriteria } from '../search/search.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() searchResults: any[] | null = null;
  @Input() searchCriteria: SearchCriteria | null = null;

  constructor() { }
}