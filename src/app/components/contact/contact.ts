import { Component } from '@angular/core';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
