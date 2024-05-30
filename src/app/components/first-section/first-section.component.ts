import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.storeService.getProducts().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
