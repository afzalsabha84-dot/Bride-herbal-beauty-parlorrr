import { Component, computed, inject, signal } from '@angular/core';
import { SITE, ServiceItem, Combo } from '../../data/site';
import { BookingState } from '../../data/booking-state';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  readonly site = SITE;
  readonly cart = inject(BookingState);
  readonly tab = signal('facial');

  readonly activeCategory = computed(
    () => this.site.categories.find((c) => c.id === this.tab()) ?? this.site.categories[0]
  );

  money(n: number): string {
    return this.cart.inr(n);
  }

  toggle(s: ServiceItem): void {
    if (this.cart.inCart(s.name)) this.cart.remove(s.name);
    else this.cart.add({ name: s.name, price: s.price });
  }

  addCombo(c: Combo): void {
    this.cart.add({ name: c.name + ' (Combo)', price: c.price });
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }

  goBooking(): void {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }
}
