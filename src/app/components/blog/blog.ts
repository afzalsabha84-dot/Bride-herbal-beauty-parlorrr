import { Component } from '@angular/core';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class BlogComponent {
  readonly site = SITE;
}
