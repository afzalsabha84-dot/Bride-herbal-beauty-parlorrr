import { Component } from '@angular/core';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly site = SITE;
}
