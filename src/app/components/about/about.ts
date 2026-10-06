import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SITE, Testimonial } from '../../data/site';

const FEEDBACK_KEY = 'bhp_feedback';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly site = SITE;

  readonly points = [
    '20 years of trusted beauty care — generations of happy clients',
    '100% hygienic — sterilised tools for every client',
    'Premium, skin-safe herbal & branded products',
    'Bridal makeover specialists — makeup, mehndi, hair, everything',
    'Calm, beautiful ambience you will love',
  ];

  readonly stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '10000+', label: 'Happy Clients' },
    { value: '4.9', label: 'Average Rating' },
  ];

  // visitor feedback — frontend only, localStorage me save hota hai
  readonly feedbackList = signal<Testimonial[]>(this.loadFeedback());
  readonly allReviews = computed(() => [...this.feedbackList(), ...this.site.testimonials]);

  fbName = '';
  fbService = '';
  fbText = '';
  readonly fbDone = signal(false);

  private loadFeedback(): Testimonial[] {
    try {
      const raw = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  }

  submitFeedback(): void {
    const name = this.fbName.trim();
    const text = this.fbText.trim();
    if (!name || !text) return;
    const item: Testimonial = {
      name,
      text,
      service: this.fbService.trim() || 'Valued Client',
    };
    const updated = [item, ...this.feedbackList()];
    this.feedbackList.set(updated);
    try {
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(updated));
    } catch {
      /* storage unavailable — review phir bhi screen pe dikhega */
    }
    this.fbName = '';
    this.fbService = '';
    this.fbText = '';
    this.fbDone.set(true);
    setTimeout(() => this.fbDone.set(false), 3000);
  }
}
