import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Define animation trigger
    trigger('fadeInOut', [
      // Define animation for entering state
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      // Define animation for leaving state
      transition(':leave', [
        animate('0.3s', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class AppComponent {
  selectedCategoryId: number = 0;
  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    console.log(this.selectedCategoryId);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/