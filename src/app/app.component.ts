import { Component } from '@angular/core';
import { MedicineService } from './services/medicine.service';
import { SearchCriteria } from './components/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arogya Odisha Finder';
  
  pharmacyResults: any[] | null = null;
  currentSearchCriteria: SearchCriteria | null = null;

  constructor(private medicineService: MedicineService) {}

  handleSearch(criteria: SearchCriteria): void {
    this.currentSearchCriteria = criteria;
    this.pharmacyResults = this.medicineService.findMedicine(
      criteria.medicine,
      criteria.location
    );
  }
}