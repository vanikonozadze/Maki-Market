import { Component, ViewChild, ElementRef } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent {
  @ViewChild('salesItemsBox') salesItemsBox!: ElementRef;

  productsArr: any[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.storeService.getProducts().subscribe({
      next: (data) => {
        this.productsArr = data;
        console.log(this.productsArr);
      },
    });
  }

  scrollLeft() {
    this.salesItemsBox.nativeElement.scrollBy({
      left: -270,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.salesItemsBox.nativeElement.scrollBy({
      left: 270,
      behavior: 'smooth',
    });
  }
}
