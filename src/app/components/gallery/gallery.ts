import { Component, HostListener, signal } from '@angular/core';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  readonly site = SITE;
  readonly lightbox = signal(-1); // -1 = closed, else image index

  open(i: number): void {
    this.lightbox.set(i);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.lightbox.set(-1);
    document.body.style.overflow = '';
  }

  step(dir: 1 | -1): void {
    const n = this.site.gallery.length;
    this.lightbox.set((this.lightbox() + dir + n) % n);
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (this.lightbox() === -1) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.step(1);
    if (e.key === 'ArrowLeft') this.step(-1);
  }
}
