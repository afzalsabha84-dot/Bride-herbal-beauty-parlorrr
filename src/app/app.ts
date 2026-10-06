import { AfterViewInit, Component, signal } from '@angular/core';
import { PreloaderComponent } from './components/preloader/preloader';
import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { ServicesComponent } from './components/services/services';
import { AboutComponent } from './components/about/about';
import { GalleryComponent } from './components/gallery/gallery';
import { BlogComponent } from './components/blog/blog';
import { BookingComponent } from './components/booking/booking';
import { ContactComponent } from './components/contact/contact';
import { SITE } from './data/site';

@Component({
  selector: 'app-root',
  imports: [
    PreloaderComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    GalleryComponent,
    BlogComponent,
    BookingComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly loading = signal(true);
  protected readonly waLink = `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(
    'Hello Bride Herbal Beauty parlour! I would like to know more about your services.'
  )}`;

  ngAfterViewInit(): void {
    // scroll-reveal: .reveal elements fade/slide in when visible
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    };
    setTimeout(observeAll, 150);

    // tab switch / naye reviews jaise dynamically bane .reveal elements
    // ko bhi auto-observe karo — warna wo hamesha invisible (opacity: 0) rehte
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });
  }
}
