import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SITE } from '../../data/site';
import { BookingState } from '../../data/booking-state';

interface Slot {
  label: string;
  value: string; // "HH:MM"
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class BookingComponent {
  readonly site = SITE;
  readonly cart = inject(BookingState);

  // form fields
  name = '';
  phone = '';
  email = '';
  date = '';
  time = '';
  payment = ''; // 'parlour' | 'online'

  readonly minDate = new Date().toISOString().split('T')[0];
  readonly slots = signal<Slot[]>([]);
  readonly dateError = signal('');
  readonly formError = signal('');
  readonly doneMsg = signal('');

  money(n: number): string {
    return this.cart.inr(n);
  }

  /* ---------- slots ---------- */
  onDateChange(): void {
    this.time = '';
    this.dateError.set('');
    this.doneMsg.set('');
    if (!this.date) {
      this.slots.set([]);
      return;
    }
    const d = new Date(this.date + 'T00:00:00');
    if (d.getDay() === 0) {
      this.dateError.set('We are closed on Sundays — please choose Monday to Saturday.');
      this.slots.set([]);
      return;
    }
    const list: Slot[] = [];
    for (let h = 8; h <= 16; h++) {
      // last slot 4:00–5:00 PM
      const value = String(h).padStart(2, '0') + ':00';
      list.push({ label: this.fmtHour(h), value });
    }
    this.slots.set(list);
  }

  private fmtHour(h: number): string {
    const suffix = h < 12 ? 'AM' : 'PM';
    const hr = h <= 12 ? h : h - 12;
    return `${hr}:00 ${suffix}`;
  }

  /* ---------- submit → WhatsApp ---------- */
  submit(): void {
    this.formError.set('');
    this.doneMsg.set('');

    if (!this.name.trim()) return this.fail('Please enter your full name.');
    const digits = this.phone.replace(/\D/g, '');
    if (digits.length < 10) return this.fail('Please enter a valid phone number.');
    if (!this.date) return this.fail('Please choose an appointment date.');
    if (this.dateError()) return this.fail(this.dateError());
    if (!this.time) return this.fail('Please select an available time slot.');
    if (this.cart.count() === 0) return this.fail('Please add at least one service from the Services section.');
    if (!this.payment) return this.fail('Please choose a payment option.');

    const timeLabel = this.slotLabel(this.time);

    const serviceLines = this.cart.cart().map((i) => `• ${i.name} — ${this.money(i.price)}`);
    const paymentText =
      this.payment === 'online'
   ? 'Pay Online (via QR scan)'

        : 'Pay at Perlor';

    const lines = [
      `Hello ${this.site.fullName}! I would like to book an appointment.`,
      '',
      `Name: ${this.name.trim()}`,
      `Phone: ${this.phone.trim()}`,
      this.email.trim() ? `Email: ${this.email.trim()}` : null,
      `Date: ${this.date}`,
      `Time: ${timeLabel} (60 mins)`,
      '',
      'Services booked:',
      ...serviceLines,
      `Total: ${this.money(this.cart.total())}`,
      `Payment: ${paymentText}`,
      '',
      'Please confirm my appointment. Thank you!',
    ].filter((l): l is string => l !== null);

    const url = `https://wa.me/${this.site.phoneIntl}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');

    this.doneMsg.set(
      'Opening WhatsApp with your booking details — just press send!'
    );
    this.cart.clear();
  }

  private slotLabel(value: string): string {
    return this.slots().find((s) => s.value === value)?.label ?? value;
  }

  private fail(msg: string): void {
    this.formError.set(msg);
    document.getElementById('booking-form-top')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
