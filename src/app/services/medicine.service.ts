import { Injectable } from '@angular/core';

// DEFINE THE SHAPE OF YOUR DATA
interface InventoryItem {
  medicineName: string;
  price: number;
  inStock: boolean;
}

interface Pharmacy {
  name: string;
  address: string;
  inventory: InventoryItem[];
}

interface PharmacyData {
  [key: string]: Pharmacy[];
}


@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private mockPharmacyDataByCity: PharmacyData = {
    'Balasore': [
        {
          name: 'Chandipur Medico',
          address: 'Fakir Mohan Golei, Balasore, Odisha',
          inventory: [
            { medicineName: 'Azithromycin', price: 109.00, inStock: true },
            { medicineName: 'Paracetamol', price: 29.00, inStock: true },
            { medicineName: 'Metformin', price: 42.00, inStock: true },
            { medicineName: 'Ranitidine', price: 20.00, inStock: true },
          ]
        }
    ],
    'Brajrajnagar': [
      {
        name: 'Gandhi Chhak Medical Store',
        address: 'Main Road, Gandhi Chhak, Brajrajnagar, Odisha',
        inventory: [
            { medicineName: 'Paracetamol', price: 28.00, inStock: true },
            { medicineName: 'Cetirizine', price: 32.00, inStock: true },
            { medicineName: 'Ibuprofen', price: 50.00, inStock: false },
            { medicineName: 'Diclofenac', price: 65.00, inStock: true },
            { medicineName: 'Montelukast', price: 95.00, inStock: true },
        ]
      },
      {
        name: 'Sahu Medico',
        address: 'Near Bus Stand, Brajrajnagar, Odisha',
        inventory: [
            { medicineName: 'Aspirin', price: 18.00, inStock: true },
            { medicineName: 'Omeprazole', price: 60.00, inStock: true },
            { medicineName: 'Azithromycin', price: 110.50, inStock: true },
            { medicineName: 'Paracetamol', price: 28.50, inStock: true },
        ]
      }
    ],
    'Bhubaneswar': [
      {
        name: 'Apollo Pharmacy',
        address: '123 Station Road, Bhubaneswar, Odisha',
        inventory: [
          { medicineName: 'Paracetamol', price: 25.50, inStock: true },
          { medicineName: 'Cetirizine', price: 30.00, inStock: true },
          { medicineName: 'Omeprazole', price: 55.25, inStock: false },
          { medicineName: 'Aspirin', price: 16.50, inStock: true },
          { medicineName: 'Atorvastatin', price: 85.00, inStock: true },
          { medicineName: 'Losartan', price: 150.00, inStock: true },
        ]
      },
      {
        name: 'MedPlus Bhubaneswar',
        address: '777 Sahid Nagar, Bhubaneswar, Odisha',
        inventory: [
          { medicineName: 'Metformin', price: 40.00, inStock: true },
          { medicineName: 'Amlodipine', price: 60.00, inStock: true },
          { medicineName: 'Paracetamol', price: 26.00, inStock: true },
          { medicineName: 'Lisinopril', price: 72.00, inStock: false },
          { medicineName: 'Glimipiride', price: 98.00, inStock: true },
        ]
      }
    ],
    'Cuttack': [
      {
        name: 'MedPlus Cuttack',
        address: '456 Ring Road, Cuttack, Odisha',
        inventory: [
          { medicineName: 'Paracetamol', price: 24.75, inStock: true },
          { medicineName: 'Ibuprofen', price: 45.00, inStock: true },
          { medicineName: 'Amlodipine', price: 62.50, inStock: false },
          { medicineName: 'Salbutamol', price: 120.00, inStock: true },
        ]
      },
      {
        name: 'Wellness Forever',
        address: '987 Buxi Bazar, Cuttack, Odisha',
        inventory: [
          { medicineName: 'Cetirizine', price: 28.75, inStock: true },
          { medicineName: 'Omeprazole', price: 58.00, inStock: true },
          { medicineName: 'Azithromycin', price: 115.00, inStock: true },
          { medicineName: 'Paracetamol', price: 25.00, inStock: true },
        ]
      }
    ],
    'Dhenkanal': [
        {
            name: 'Kapilash Meds',
            address: 'Ganesh Bazar, Dhenkanal, Odisha',
            inventory: [
                { medicineName: 'Cetirizine', price: 35.00, inStock: true },
                { medicineName: 'Atorvastatin', price: 90.00, inStock: true },
                { medicineName: 'Amlodipine', price: 65.00, inStock: true },
                { medicineName: 'Paracetamol', price: 31.00, inStock: true },
            ]
        }
    ],
    'Ganjam': [
        {
            name: 'Berhampur Medical Emporium',
            address: 'Giri Market, Berhampur, Ganjam, Odisha',
            inventory: [
                { medicineName: 'Atorvastatin', price: 89.00, inStock: true },
                { medicineName: 'Paracetamol', price: 29.50, inStock: true },
                { medicineName: 'Metformin', price: 41.00, inStock: false },
                { medicineName: 'Diclofenac', price: 71.00, inStock: true },
            ]
        }
    ],
    'Kalahandi': [
        {
            name: 'Bhawanipatna Medical Hall',
            address: 'Statue Chowk, Bhawanipatna, Kalahandi, Odisha',
            inventory: [
                { medicineName: 'Paracetamol', price: 30.00, inStock: true },
                { medicineName: 'Diclofenac', price: 72.00, inStock: false },
                { medicineName: 'Ibuprofen', price: 55.00, inStock: true },
                { medicineName: 'Azithromycin', price: 120.00, inStock: true },
            ]
        }
    ],
    'Keonjhar': [
        {
            name: 'Mining Road Meds',
            address: 'Near Mining Chowk, Keonjhar, Odisha',
            inventory: [
                { medicineName: 'Diclofenac', price: 70.00, inStock: true },
                { medicineName: 'Ibuprofen', price: 52.00, inStock: true },
                { medicineName: 'Paracetamol', price: 29.00, inStock: true },
                { medicineName: 'Cetirizine', price: 34.00, inStock: false },
            ]
        }
    ],
    'Koraput': [
        {
            name: 'Sunabeda Pharmacy',
            address: 'Sector-2, Sunabeda, Koraput, Odisha',
            inventory: [
                { medicineName: 'Aspirin', price: 21.00, inStock: true },
                { medicineName: 'Lisinopril', price: 75.00, inStock: false },
                { medicineName: 'Cetirizine', price: 33.00, inStock: true },
                { medicineName: 'Paracetamol', price: 30.50, inStock: true },
            ]
        }
    ],
    'Malkangiri': [
        {
            name: 'Chitrakonda Pharmacy',
            address: 'New Bus Stand, Malkangiri, Odisha',
            inventory: [
                { medicineName: 'Azithromycin', price: 118.00, inStock: false },
                { medicineName: 'Aspirin', price: 22.00, inStock: true },
                { medicineName: 'Omeprazole', price: 62.00, inStock: true },
                { medicineName: 'Paracetamol', price: 32.00, inStock: true },
            ]
        }
    ],
    'Nayagarh': [
        {
            name: 'Dasapalla Health Store',
            address: 'Main Market, Dasapalla, Nayagarh, Odisha',
            inventory: [
                { medicineName: 'Metformin', price: 44.00, inStock: true },
                { medicineName: 'Lisinopril', price: 78.00, inStock: true },
                { medicineName: 'Salbutamol', price: 130.00, inStock: true },
                { medicineName: 'Paracetamol', price: 29.50, inStock: false },
            ]
        }
    ],
    'Puri': [
        {
          name: 'Sea Beach Pharmacy',
          address: 'Grand Road, Puri, Odisha',
          inventory: [
            { medicineName: 'Paracetamol', price: 27.00, inStock: true },
            { medicineName: 'Diclofenac', price: 68.00, inStock: true },
            { medicineName: 'Amlodipine', price: 61.00, inStock: true },
            { medicineName: 'Ranitidine', price: 22.00, inStock: true },
          ]
        }
    ],
    'Rourkela': [
        {
          name: 'Generic Pharmacy Rourkela',
          address: '789 Main Street, Rourkela, Odisha',
          inventory: [
            { medicineName: 'Metformin', price: 38.50, inStock: true },
            { medicineName: 'Amlodipine', price: 59.00, inStock: true },
            { medicineName: 'Atorvastatin', price: 88.00, inStock: false },
            { medicineName: 'Paracetamol', price: 27.50, inStock: true },
          ]
        }
    ],
    'Sambalpur': [
        {
          name: 'Hirakud Medicals',
          address: 'Motijharan, Sambalpur, Odisha',
          inventory: [
            { medicineName: 'Lisinopril', price: 70.00, inStock: true },
            { medicineName: 'Ibuprofen', price: 48.00, inStock: true },
            { medicineName: 'Salbutamol', price: 125.00, inStock: false },
            { medicineName: 'Aspirin', price: 19.50, inStock: true },
            { medicineName: 'Paracetamol', price: 28.00, inStock: true },
          ]
        }
    ]
  };

  constructor() { }

  getLocations(): string[] {
    // Sort locations alphabetically for a better user experience
    return Object.keys(this.mockPharmacyDataByCity).sort();
  }

  findMedicine(medicineName: string, location: string): any[] | null {
    if (!medicineName || !medicineName.trim() || !location) {
      return null;
    }

    const pharmaciesInLocation = this.mockPharmacyDataByCity[location];
    if (!pharmaciesInLocation) {
      return [];
    }

    const lowerCaseMedicineName = medicineName.toLowerCase();
    const results = [];

    for (const pharmacy of pharmaciesInLocation) {
      const foundMedicine = pharmacy.inventory.find(
        (item) => item.medicineName.toLowerCase() === lowerCaseMedicineName
      );

      if (foundMedicine) {
        results.push({
          pharmacyName: pharmacy.name,
          pharmacyAddress: pharmacy.address,
          medicineDetails: foundMedicine
        });
      }
    }
    
    return results;
  }
}