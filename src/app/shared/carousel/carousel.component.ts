import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    { src: 'https://wallpapers.com/images/hd/4k-superhero-6t7lzmkbcn4om8da.jpg', alt: 'First slide' },
    { src: 'https://wallpapers.com/images/hd/4k-superhero-imwi0ao9dn9pzzgr.jpg', alt: 'Second slide' }
  ];

  showNavigationArrows = true;
  showNavigationIndicators = true;
  interval = 10000;
  pauseOnHover = true;
  wrap = true;
  keyboard = true;

  constructor() { }

}

