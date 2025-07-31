import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';

export interface SearchCriteria {
  medicine: string;
  location: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<SearchCriteria>();

  locations: string[] = [];
  selectedLocation: string = '';

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.locations = this.medicineService.getLocations();
    // Set a default location if available
    if (this.locations.includes('Brajrajnagar')) {
      this.selectedLocation = 'Brajrajnagar';
    } else if (this.locations.length > 0) {
      this.selectedLocation = this.locations[0];
    }
  }

  performSearch(medicineInput: HTMLInputElement): void {
    if (!medicineInput.value) {
      alert('Please enter a medicine name.');
      return;
    }
    const searchCriteria: SearchCriteria = {
      medicine: medicineInput.value,
      location: this.selectedLocation
    };
    this.searchEvent.emit(searchCriteria);
  }
}