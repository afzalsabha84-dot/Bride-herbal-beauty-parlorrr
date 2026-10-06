import { Component, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss',
})
export class PreloaderComponent implements OnInit {
  readonly finished = output<void>();
  readonly leaving = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.leaving.set(true), 2500);
    setTimeout(() => this.finished.emit(), 3200);
  }
}
