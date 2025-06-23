import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    { src: 'https://www.clinicahumanita.com.br/wp-content/uploads/2022/07/vaidade-01-800x267.png', alt: 'First slide' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96tq2WSD-6X2qC0k6pE0GsX70IFQSvT8nNw&s', alt: 'Second slide' }
  ];

  showNavigationArrows = true;
  showNavigationIndicators = true;
  interval = 10000;
  pauseOnHover = true;
  wrap = true;
  keyboard = true;

  constructor() { }

}

