import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'First-Project';
  inCart = 0;

  addToCart() {
    this.inCart += 1;
  }
  removeFromCart() {
    return this.inCart > 0 ? (this.inCart -= 1) : this.inCart;
  }
}
