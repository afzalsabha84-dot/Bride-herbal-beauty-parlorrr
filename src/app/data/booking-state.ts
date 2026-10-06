import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
}

/* Cart: services/combos section se "Add" dabane par item yahan judta hai.
   Booking form me cart dikhta hai, total auto-calculate hota hai,
   aur WhatsApp message me poori list + total + payment choice jata hai. */
@Injectable({ providedIn: 'root' })
export class BookingState {
  readonly cart = signal<CartItem[]>([]);

  readonly total = computed(() => this.cart().reduce((sum, i) => sum + i.price, 0));

  readonly count = computed(() => this.cart().length);

  inCart(name: string): boolean {
    return this.cart().some((i) => i.name === name);
  }

  add(item: CartItem): void {
    if (!this.inCart(item.name)) {
      this.cart.update((c) => [...c, item]);
    }
  }

  remove(name: string): void {
    this.cart.update((c) => c.filter((i) => i.name !== name));
  }

  clear(): void {
    this.cart.set([]);
  }

  inr(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
  }
}
